const assert=require('node:assert/strict'),fs=require('node:fs'),path=require('node:path');
const {chromium}=require('playwright');
(async()=>{
  const browser=await chromium.launch({executablePath:process.env.CHROMIUM_PATH||'/usr/bin/chromium',args:['--no-sandbox']});
  try{
    const page=await browser.newPage({viewport:{width:768,height:1024},hasTouch:true}),errors=[];
    page.on('pageerror',error=>errors.push(error.message));
    const html=fs.readFileSync(path.join(__dirname,'../index.html'),'utf8');
    for(const mode of ['original','color','hd']){
      await page.goto('about:blank');await page.setContent(html);await page.waitForFunction(()=>window.alleyCatPageReady);
      if(mode==='color')await page.click('#graphics');if(mode==='hd')await page.click('#hd-style');
      await page.click('#start');await page.waitForFunction(()=>game.phase==='title');
      assert.equal(await page.locator('#sidebar #menu').count(),0);
      assert.equal(await page.locator('#screen #menu-options button').count(),4);
      assert(!/Enter|Continue/.test(await page.locator('#menu').textContent()));
      for(const [index,key] of ['KeyK','KeyH','KeyT','KeyA'].entries()){
        if(index){await page.keyboard.press('Control+m',{delay:120});await page.waitForFunction(()=>game.phase==='difficulty');}
        const choice=page.locator(`#menu-options button[data-cat="${key}"]`);
        const bounds=await choice.boundingBox();assert(bounds.height>=44);
        // A real touch gesture selects the cat and starts play without Enter.
        await page.touchscreen.tap(bounds.x+bounds.width/2,bounds.y+bounds.height/2);
        await page.waitForFunction(()=>game.phase==='playing');
        assert.equal(await page.evaluate(()=>game.state().difficulty),index);
        assert.equal(await page.locator('#menu').isHidden(),true);
        assert.equal(await page.evaluate(()=>colorArt.mode),mode);
      }
      await page.keyboard.press('Escape',{delay:120});await page.waitForFunction(()=>game.phase==='paused');
      await page.locator('#screen #menu-options button').click();await page.waitForFunction(()=>game.phase==='playing');
      assert.equal(await page.evaluate(()=>game.error),null);
    }
    // Keyboard cat selection works directly from the title too.
    await page.goto('about:blank');await page.setContent(html);await page.waitForFunction(()=>window.alleyCatPageReady);await page.click('#start');
    await page.waitForFunction(()=>game.phase==='title');await page.keyboard.press('h');
    await page.waitForFunction(()=>game.phase==='playing');assert.equal(await page.evaluate(()=>game.state().difficulty),1);
    assert.deepEqual(errors,[]);
    console.log('PASS: all four on-screen cats start directly by touch in CGA, pixel art and HD; no Enter/Continue step; direct keyboard selection; on-screen pause/resume.');
  }finally{await browser.close();}
})().catch(error=>{console.error(error);process.exitCode=1;});
