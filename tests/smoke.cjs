const assert=require('node:assert/strict');
const fs=require('node:fs');
const http=require('node:http');
const path=require('node:path');
const {chromium}=require('playwright');
const root=path.join(__dirname,'..');
async function main() {
  const server=http.createServer((req,res)=>{
    res.setHeader('Content-Type','text/html; charset=utf-8');
    res.end(fs.readFileSync(path.join(root,'alley-cat.html')));
  }).listen(0,'127.0.0.1');
  await new Promise(r=>server.once('listening',r));
  const browser=await chromium.launch({headless:true,executablePath:process.env.CHROMIUM_PATH||'/usr/bin/chromium',args:['--no-sandbox']});
  try {
    const page=await browser.newPage({viewport:{width:1280,height:1100}});
    const errors=[]; const requests=[];
    page.on('pageerror',e=>errors.push(e.message));
    page.on('request',r=>requests.push(r.url()));
    await page.goto('http://127.0.0.1:'+server.address().port);
    await page.click('#graphics');
    await page.click('#start');
    const state=()=>page.evaluate(()=>alleyCat.state());
    const press=async key=>page.keyboard.press(key,{delay:120});
    const phase=async p=>page.waitForFunction(p=>alleyCat.state().phase===p,p,{timeout:10000});
    await phase('title'); await page.waitForTimeout(800);
    assert.equal((await state()).error,null);
    await page.waitForFunction(()=>{
      const s=alleyCat.speaker, samples=new Float32Array(s.analyser.fftSize);
      s.analyser.getFloatTimeDomainData(samples);
      return samples.some(value=>Math.abs(value)>0.01);
    },null,{timeout:4000});
    const audio=await page.evaluate(()=>{
      const s=alleyCat.speaker, samples=new Float32Array(s.analyser.fftSize);
      s.analyser.getFloatTimeDomainData(samples);
      return {context:s.context.state, peak:Math.max(...samples.map(Math.abs)),events:s.events};
    });
    assert.equal(audio.context,'running'); assert(audio.events>0);
    await page.locator('#game').screenshot({path:path.join(__dirname,'native-title.png')});
    const titlePixels=Buffer.from(await page.evaluate(()=>Array.from(canvas.getContext('2d').getImageData(0,0,320,200).data)));
    fs.writeFileSync(path.join(__dirname,'native-title.rgba'),titlePixels);
    const originalPixels=fs.readFileSync(path.join(__dirname,'dos-original-title.rgba'));
    let matching=0,total=0;
    for(let y=42;y<96;y++) for(let x=32;x<312;x++) {
      const at=(y*320+x)*4;
      assert.deepEqual(titlePixels.subarray(at,at+4),originalPixels.subarray(at,at+4),'Original title graphic pixels must match');
      matching++;total++;
    }
    console.log('PASS: '+matching+' original title pixels match the DOS reference exactly.');
    await press('Enter'); await phase('difficulty');
    await press('k'); await phase('ready');
    await press('Enter'); await phase('playing');
    await page.waitForTimeout(800);
    assert.equal((await state()).difficulty,0);
    const before=await state(); console.log('INITIAL PLAY',before);
    await page.keyboard.down('ArrowRight'); await page.waitForTimeout(500); await page.keyboard.up('ArrowRight');
    assert.notEqual((await state()).x,before.x,'Arrow keys must move the cat');
    await page.keyboard.down('ArrowUp'); await page.waitForTimeout(350); await page.keyboard.up('ArrowUp');
    assert.notEqual((await state()).y,before.y,'Up must jump');
    await page.locator('#game').screenshot({path:path.join(__dirname,'native-gameplay.png')});
    await page.screenshot({path:path.join(__dirname,'screenshot.png'),fullPage:true});
    await press('Escape'); await phase('paused');
    await page.locator('#game').screenshot({path:path.join(__dirname,'native-pause.png')});
    await press('Enter'); await phase('playing');
    await press('Control+s'); await page.waitForTimeout(250);
    assert.equal((await state()).sound,false,'Original Ctrl-S must disable sound');
    await press('Control+s'); await page.waitForTimeout(250);
    assert.equal((await state()).sound,true);
    await press('Control+r'); await page.waitForTimeout(500);
    console.log('AFTER RESTART',await state());
    assert.equal((await state()).room,0,'Original Ctrl-R must return to the alley');
    assert.equal((await state()).lives,3,'Original Ctrl-R must restore three lives');
    for(const [key,level] of [['h',1],['t',2],['a',3]]) {
      await press('Control+m'); await phase('difficulty');
      await press(key); await phase('ready');
      assert.equal((await state()).difficulty,level);
      await press('Enter'); await phase('playing');
    }
    assert.equal((await state()).error,null);
    assert.deepEqual(errors,[]);
    assert(requests.every(url=>url.startsWith('http://127.0.0.1:')),'No external runtime or asset requests');
    console.log('PASS: boot, CGA rendering, menus, difficulty, movement, jumping, original pause/resume, sound toggle, restart, menu, offline assets.');
    console.log('Audio:',audio);
    console.log('State:',await state());
    await press('Control+9'); await page.waitForTimeout(120);
    assert.equal((await state()).lives,9,'Original Ctrl-9 shortcut must grant nine lives');
    await press('Control+y'); await phase('ended');
    assert.equal((await state()).error,null,'Original exit must end the session cleanly');
    console.log('PASS: original nine-lives shortcut and graceful exit.');
    const mobile=await browser.newPage({viewport:{width:390,height:844},isMobile:true,hasTouch:true});
    await mobile.goto('http://127.0.0.1:'+server.address().port);
    assert(await mobile.locator('.touch-controls').isVisible());
    assert(await mobile.evaluate(()=>document.documentElement.scrollWidth<=innerWidth));
    await mobile.screenshot({path:path.join(__dirname,'mobile.png'),fullPage:true});
    console.log('PASS: mobile layout and touch controls visible.');
  } finally {await browser.close(); await new Promise(r=>server.close(r));}
}
main().catch(e=>{console.error(e);process.exitCode=1;});
