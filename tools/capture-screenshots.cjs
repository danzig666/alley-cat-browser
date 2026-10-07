// Capture matching frames in both graphics modes for the README.
const fs = require('node:fs');
const path = require('node:path');
const http = require('node:http');
const { chromium } = require('playwright');
const root = path.join(__dirname, '..');
const output = path.join(root, 'docs', 'screenshots');

(async () => {
  fs.mkdirSync(output, { recursive: true });
  const server = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'text/html; charset=utf-8');
    res.end(fs.readFileSync(path.join(root, 'index.html')));
  }).listen(0, '127.0.0.1');
  await new Promise(resolve => server.once('listening', resolve));
  const browser = await chromium.launch({
    headless: true, executablePath: process.env.CHROMIUM_PATH || '/usr/bin/chromium',
    args: ['--no-sandbox'],
  });
  try {
    const page = await browser.newPage({ viewport: { width: 1100, height: 1100 } });
    await page.goto('http://127.0.0.1:' + server.address().port);
    await page.click('#start');
    const phase = value => page.waitForFunction(value => alleyCat.state().phase === value, value);
    const pair = async name => {
      await page.evaluate(() => game.suspend());
      for (const [mode, file] of [['original', 'cga'], ['color', 'pixel-art']]) {
        if (await page.locator('#graphics').getAttribute('data-mode') !== mode) {
          await page.click('#graphics');
        }
        await page.locator('#game').screenshot({ path: path.join(output, `${name}-${file}.png`) });
      }
      await page.evaluate(() => game.resume());
    };
    await phase('title');
    await pair('title');
    await page.keyboard.press('Enter', { delay: 120 });
    await phase('difficulty');
    await page.keyboard.press('k', { delay: 120 });
    await phase('ready');
    await page.keyboard.press('Enter', { delay: 120 });
    await phase('playing');
    await page.waitForTimeout(500);
    await pair('alley');
    // The room regression check captures a frozen matching pair of the cheese room.
    for (const [source, target] of [['cheese-original.png', 'cheese-cga.png'], ['cheese-color.png', 'cheese-pixel-art.png']]) {
      fs.copyFileSync(path.join(root, 'tests', source), path.join(output, target));
    }
    console.log('Captured three matching CGA / pixel art screenshot pairs.');
  } finally {
    await browser.close();
    await new Promise(resolve => server.close(resolve));
  }
})().catch(error => { console.error(error); process.exitCode = 1; });
