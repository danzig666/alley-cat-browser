// Capture matching frozen frames in all three graphics modes for the README.
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
      for (const [mode, file] of [['original', 'cga'], ['color', 'pixel-art'], ['hd', 'hd']]) {
        await page.evaluate(mode=>{colorArt.mode=mode;updateStyleButtons();present();},mode);
        await page.locator('#screen').screenshot({ path: path.join(output, `${name}-${file}.png`) });
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
    await page.waitForFunction(()=>hdArt.renderedRecords?.some(record=>record.kind==='player'));
    await page.waitForTimeout(300);
    await pair('alley');
    await page.evaluate(()=>{
      game.suspend();releaseKeys();const nativeSet=memoryASet16;
      memoryASet16=(seg,ofs,value)=>nativeSet(seg,ofs,seg===0x1010&&ofs===4&&value>0&&value<8?4:value);
      execution.restore([{name:'sub_17230',pc:0x173e7,parked:null,budget:false}]);game.iterator=sub_17230();
      memoryASet(0x1010,0x418,0);memoryASet(0x1010,0x551,1);game.resume();
    });
    await page.waitForFunction(()=>game.state().room===4&&game.phase==='playing');await page.waitForTimeout(700);
    await pair('cheese');
    console.log('Captured title, alley and cheese in CGA, pixel art and HD, with each scene frozen across its three versions.');
  } finally {
    await browser.close();
    await new Promise(resolve => server.close(resolve));
  }
})().catch(error => { console.error(error); process.exitCode = 1; });
