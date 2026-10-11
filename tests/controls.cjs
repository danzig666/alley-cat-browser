const fs=require('node:fs');
const path=require('node:path');
const assert=require('node:assert/strict');
const {chromium}=require('playwright');
(async()=>{
  const browser=await chromium.launch({executablePath:process.env.CHROMIUM_PATH||'/usr/bin/chromium',args:['--no-sandbox']});
  try {
    const page=await browser.newPage();const errors=[];page.on('pageerror',e=>errors.push(e.message));
    await page.setContent(fs.readFileSync(path.join(__dirname,'../alley-cat.html'),'utf8'));
    const phase=p=>page.waitForFunction(p=>alleyCat.state().phase===p,p);
    await page.click('#start');await phase('title');
    await page.keyboard.press('Enter',{delay:120});await phase('difficulty');
    await page.keyboard.press('k',{delay:120});await phase('ready');
    await page.keyboard.press('Enter',{delay:120});await phase('playing');await page.waitForTimeout(1700);
    await page.keyboard.down('d');await page.waitForTimeout(700);await page.keyboard.up('d');
    await page.waitForFunction(()=>memoryAGet(0x1010,0x571)===0&&alleyCat.state().x>20);
    await page.evaluate(()=>{
      game.suspend();window.controlsBaseline={ram:ram.slice(),words:words.slice(),flags:{...flags},layer:colorArt.layer.slice()};
    });
    const restore=()=>page.evaluate(()=>{
      releaseKeys();keyboardBindings.clear();ram.set(controlsBaseline.ram);words.set(controlsBaseline.words);
      Object.assign(flags,controlsBaseline.flags);colorArt.layer.set(controlsBaseline.layer);colorArt.blits.length=0;
      execution.restore([{name:'sub_17230',pc:0x17385,parked:null,budget:false}]);
      game.iterator=sub_17230();game.phase='playing';game.resume();
      return alleyCat.state();
    });
    // Read the axes inside the very same DOM event turn. This would fail if
    // changes still depended on the DOS hardware polling interval.
    const immediate=await page.evaluate(()=>{
      const fire=(type,code)=>canvas.dispatchEvent(new KeyboardEvent(type,{code,bubbles:true,cancelable:true}));
      fire('keydown','KeyD');const right=memoryAGet(0x1010,0x698);
      fire('keydown','Space');const jump=memoryAGet(0x1010,0x699);
      fire('keydown','KeyW');fire('keyup','Space');const heldUp=memoryAGet(0x1010,0x699);
      fire('keyup','KeyW');fire('keyup','KeyD');
      return {right,jump,heldUp,released:[memoryAGet(0x1010,0x698),memoryAGet(0x1010,0x699)],keys:pressed.size};
    });
    assert.deepEqual(immediate,{right:1,jump:255,heldUp:255,released:[0,0],keys:0});
    for(const [key,direction] of [['q',-1],['e',1]]) {
      const before=await restore();await page.keyboard.down(key);
      await page.waitForFunction(({x,y,direction})=>direction*(alleyCat.state().x-x)>0&&alleyCat.state().y<y,
        {x:before.x,y:before.y,direction},{timeout:1200});
      await page.keyboard.up(key);assert.equal(await page.evaluate(()=>pressed.size),0);
    }
    for(const [side,jump] of [['ArrowRight','ArrowUp'],['d','Space'],['a','Space']]) {
      const before=await restore(),direction=side==='a'?-1:1;
      await page.keyboard.down(side);await page.keyboard.down(jump);
      await page.waitForFunction(({x,y,direction})=>direction*(alleyCat.state().x-x)>0&&alleyCat.state().y<y,
        {x:before.x,y:before.y,direction},{timeout:1200});
      await page.keyboard.up(jump);await page.keyboard.up(side);
    }
    await restore();await page.keyboard.down('f');
    assert.equal(await page.evaluate(()=>memoryAGet(0x1010,0x69a)),0,'F must perform the original Alt action');
    await page.keyboard.up('f');await page.keyboard.press('Control+s',{delay:120});
    await page.waitForFunction(()=>!alleyCat.state().sound);
    await page.keyboard.press('Control+s',{delay:120});await page.waitForFunction(()=>alleyCat.state().sound);
    await page.keyboard.down('w');await page.keyboard.press('Escape',{delay:120});await phase('paused');
    await page.keyboard.up('w');assert.equal(await page.evaluate(()=>pressed.size),0,'Keys must release after a phase change');
    await page.keyboard.press('Enter',{delay:120});await phase('playing');
    await page.keyboard.down('d');await page.evaluate(()=>window.dispatchEvent(new Event('blur')));
    assert.equal(await page.evaluate(()=>pressed.size+keyboardBindings.size),0,'Blur must clear physical bindings and game keys');
    await page.keyboard.up('d');assert.equal(await page.evaluate(()=>alleyCat.state().error),null);assert.deepEqual(errors,[]);
    console.log('PASS: same-event movement/jump input and release; independent W/Space holds; real Q/E, arrow and A/D+Space diagonal jumps; F action; Ctrl-S; release across pause and blur.');
  }finally {await browser.close();}
})().catch(e=>{console.error(e);process.exitCode=1;});
