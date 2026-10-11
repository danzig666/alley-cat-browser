const assert=require('node:assert/strict');
const fs=require('node:fs');
const path=require('node:path');
const {chromium}=require('playwright');
const html=fs.readFileSync(path.join(__dirname,'../alley-cat.html'),'utf8');
(async()=>{
  const browser=await chromium.launch({headless:true,executablePath:process.env.CHROMIUM_PATH||'/usr/bin/chromium',args:['--no-sandbox']});
  try {
    const context=await browser.newContext({viewport:{width:390,height:844},isMobile:true,hasTouch:true,offline:true});
    const page=await context.newPage();const errors=[];
    page.on('pageerror',e=>errors.push(e.message));
    await page.setContent(html);const cdp=await context.newCDPSession(page);
    const touch=(type,points=[])=>cdp.send('Input.dispatchTouchEvent',{type,touchPoints:points});
    const phase=p=>page.waitForFunction(p=>alleyCat.state().phase===p,p,{timeout:10000});
    const center=async selector=>{const b=await page.locator(selector).boundingBox();return {x:b.x+b.width/2,y:b.y+b.height/2,id:1};};
    const tapScreen=async()=>{const point=await center('#game');await touch('touchStart',[point]);await page.waitForTimeout(50);await touch('touchEnd');};
    await page.click('#start');await phase('title');
    assert.equal(await page.locator('#screen #menu-options button').count(),4);
    assert.equal(await page.locator('#sidebar #menu').count(),0);
    assert.equal(await page.evaluate(()=>memoryAGet(0x1010,0x69b)),0,'Keyboard input must be selected automatically');
    await page.locator('#menu-options button').first().click();await phase('playing');
    // Some phone viewers blur their window on focus. A visible game must run.
    const first=await page.evaluate(()=>alleyCat.state().frames);
    await page.evaluate(()=>window.dispatchEvent(new Event('blur')));await page.waitForTimeout(200);
    assert((await page.evaluate(()=>alleyCat.state().frames))>first);
    let point=await center('#game');
    const before=await page.evaluate(()=>alleyCat.state());
    await touch('touchStart',[point]);
    point={...point,x:point.x+70};await touch('touchMove',[point]);
    await page.waitForFunction(()=>pressed.has('ArrowRight'));
    await page.waitForTimeout(400);
    assert.notEqual(await page.evaluate(()=>alleyCat.state().x),before.x,'A right swipe must move the cat');
    // Diagonal swipe must hold both the jump and horizontal direction.
    point={...point,y:point.y-65};await touch('touchMove',[point]);
    await page.waitForFunction(()=>pressed.has('ArrowUp')&&pressed.has('ArrowRight'));
    await page.waitForTimeout(200);
    assert.notEqual(await page.evaluate(()=>alleyCat.state().y),before.y,'An upward swipe must jump');
    await touch('touchEnd');await page.waitForTimeout(180);
    assert.equal(await page.evaluate(()=>pressed.has('ArrowRight')||pressed.has('ArrowUp')),false);
    await tapScreen();await page.waitForFunction(()=>pressed.has('AltLeft')); 
    await page.waitForTimeout(180);assert.equal(await page.evaluate(()=>pressed.has('AltLeft')),false);
    // A second finger can hold Action while the first steers.
    await page.locator('[data-key="AltLeft"]').scrollIntoViewIfNeeded();
    const screen=await center('#game'), action={...await center('[data-key="AltLeft"]'),id:2};
    await touch('touchStart',[screen]);
    const steered={...screen,x:screen.x+45};await touch('touchMove',[steered]);
    await touch('touchStart',[steered,action]);
    await page.waitForFunction(()=>pressed.has('ArrowRight')&&pressed.has('AltLeft'));
    await touch('touchEnd',[action]);
    assert(await page.evaluate(()=>pressed.has('ArrowRight')),'Releasing Action must not release steering');
    await page.waitForFunction(()=>!pressed.has('AltLeft'),null,{timeout:1500});
    assert(await page.evaluate(()=>pressed.has('ArrowRight')));
    await touch('touchCancel');await page.waitForTimeout(180);
    assert.equal(await page.evaluate(()=>pressed.size),0,'Canceled gestures must release every touch input');
    await page.locator('#fullscreen').click();
    const ratio=async()=>{
      const result=await page.evaluate(()=>{
        const c=canvas.getBoundingClientRect(),s=document.getElementById('screen').getBoundingClientRect(),a=document.getElementById('arcade').getBoundingClientRect();
        return {canvas:c.width/c.height,screen:s.width/s.height,inside:c.width<=a.width+1 && c.height<=a.height+1};
      });
      assert(Math.abs(result.canvas-4/3)<0.003,JSON.stringify(result));
      assert(Math.abs(result.screen-4/3)<0.003,JSON.stringify(result));assert(result.inside);
    };
    await page.waitForTimeout(100);await ratio();
    await page.screenshot({path:path.join(__dirname,'fullscreen-portrait.png')});
    await page.setViewportSize({width:844,height:390});await page.waitForTimeout(150);await ratio();
    await page.screenshot({path:path.join(__dirname,'fullscreen-landscape.png')});
    // Fullscreen supports a second action finger directly on the game.
    const fsStart=await center('#game');
    await touch('touchStart',[fsStart]);
    const fsMove={...fsStart,x:fsStart.x+40},fsAction={...fsStart,x:fsStart.x-50,id:2};
    await touch('touchMove',[fsMove]);await touch('touchStart',[fsMove,fsAction]);
    await page.waitForFunction(()=>pressed.has('ArrowRight')&&pressed.has('AltLeft'));
    await touch('touchEnd',[fsAction]);await page.waitForFunction(()=>!pressed.has('AltLeft'),null,{timeout:1500});
    assert(await page.evaluate(()=>pressed.has('ArrowRight')));
    await touch('touchCancel');await page.waitForTimeout(180);
    assert.equal(await page.evaluate(()=>pressed.size),0);
    // Menus must remain reachable while fullscreen and must also keep 4:3.
    await page.keyboard.press('Control+m',{delay:140});await phase('difficulty');
    assert(await page.locator('#menu-options button').first().isVisible());await ratio();
    await page.locator('#menu-options button').first().click();await phase('playing');
    await page.locator('#fullscreen').click();
    await page.evaluate(()=>document.getElementById('arcade').requestFullscreen=undefined);
    await page.locator('#fullscreen').click();await page.waitForTimeout(150);await ratio();
    assert(await page.evaluate(()=>document.getElementById('arcade').classList.contains('is-expanded')));
    await page.locator('#fullscreen').click();
    assert.equal(await page.evaluate(()=>document.body.classList.contains('game-expanded')),false);
    assert.deepEqual(errors,[]);
    assert.equal(await page.evaluate(()=>alleyCat.state().error),null);
    console.log('PASS: no joystick question, touch-only menus, swipes, diagonal jumps, tap actions, two-finger controls, cancel cleanup, visible-window blur, portrait/landscape 4:3 fullscreen, accessible fullscreen menu, and fullscreen fallback.');
    const preview=await browser.newContext({javaScriptEnabled:false});const staticPage=await preview.newPage();
    await staticPage.setContent(html);
    assert(await staticPage.locator('#start').isDisabled());
    assert(await staticPage.locator('#preview-help').isVisible());
    console.log('PASS: a static preview explains why it cannot play the game.');
  } finally {await browser.close();}
})().catch(e=>{console.error(e);process.exitCode=1;});
