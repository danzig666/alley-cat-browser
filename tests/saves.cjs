const assert=require('node:assert/strict');
const fs=require('node:fs');
const path=require('node:path');
const http=require('node:http');
const {chromium}=require('playwright');
const root=path.join(__dirname,'..');
(async()=>{
  const server=http.createServer((req,res)=>{res.setHeader('Content-Type','text/html');res.end(fs.readFileSync(path.join(root,'index.html')));}).listen(0,'127.0.0.1');
  await new Promise(resolve=>server.once('listening',resolve));
  const browser=await chromium.launch({executablePath:process.env.CHROMIUM_PATH||'/usr/bin/chromium',args:['--no-sandbox']});
  try {
    const context=await browser.newContext(),page=await context.newPage(),errors=[];
    page.on('pageerror',error=>errors.push(error.message));
    const url='http://127.0.0.1:'+server.address().port;
    await page.goto(url);await page.click('#start');
    const phase=value=>page.waitForFunction(value=>alleyCat.state().phase===value,value);
    const roundtrip=async expected=>{
      const result=await page.evaluate(()=>{
        game.suspend();releaseKeys();const snapshot=game.capture();game.restore(snapshot);
        const after=game.capture();const equal=Array.from(snapshot.words).join()===Array.from(after.words).join() &&
          snapshot.ram.every((value,i)=>value===after.ram[i]) &&
          JSON.stringify(snapshot.execution)===JSON.stringify(after.execution);
        const phase=game.phase;game.resume();return {equal,phase};
      });assert(result.equal,expected+': RAM/registers/continuations restore exactly');assert.equal(result.phase,expected);
    };
    await phase('title');await roundtrip('title');
    assert.equal(await page.evaluate(()=>colorArt.mode),'original');assert.equal(await page.evaluate(()=>speaker.style),'speaker');
    await page.keyboard.press('Enter',{delay:150});await phase('difficulty');await roundtrip('difficulty');
    // Hold the automatic ready confirmation only long enough to verify that
    // an old checkpoint parked on this native screen still restores exactly.
    await page.evaluate(()=>{window.normalMenuAdvance=advanceMenus;advanceMenus=()=>{if(game.phase!=='ready')normalMenuAdvance();};});
    await page.locator('#menu-options button').first().click();await phase('ready');await roundtrip('ready');
    await page.evaluate(()=>advanceMenus=normalMenuAdvance);
    await phase('playing');await page.waitForTimeout(500);
    await page.keyboard.press('Escape',{delay:150});await phase('paused');await roundtrip('paused');
    await page.keyboard.press('Enter',{delay:150});await phase('playing');await page.waitForTimeout(300);
    await page.click('#graphics');await page.click('#audio-style');
    // Compare actual continued execution, not merely the fields on disk.
    const continuation=await page.evaluate(()=>{
      game.suspend();releaseKeys();const snapshot=game.capture();
      let clock=0;const realTime=game.time;game.time=()=>snapshot.elapsed+clock;
      const advance=()=>{
        for(let i=0;i<400;i++){clock+=8;game.iterator.next();}
        return {ram:Array.from(ram),words:Array.from(words),flags:{...flags},phase:game.phase,
          steps:game.steps,layer:sparseLayer(colorArt.layer),divisor:speaker.divisor,gate:speaker.gate,events:speaker.events};
      };
      const expected=advance();clock=0;game.restore(snapshot);game.suspend();const actual=advance();
      const result={};for(const key of Object.keys(expected))result[key]=JSON.stringify(actual[key])===JSON.stringify(expected[key]);
      game.time=realTime;game.restore(snapshot);game.suspend();return result;
    });
    for(const [field,equal] of Object.entries(continuation))assert(equal,'Restored continuation diverged in '+field);
    await page.keyboard.press('F6');await page.waitForFunction(()=>!saveBusy&&saveItems.length===1);
    const saved=await page.evaluate(async()=>{
      const ids=[];
      for(let i=0;i<12;i++){memoryASet(0x1010,0x1f80,3+i%6);ids.push(await alleyCat.save());}
      return {ids,items:await alleyCat.saves.list()};
    });
    assert(saved.ids.every(Number.isInteger));assert.equal(saved.items.length,11);
    assert.deepEqual(saved.items.map(item=>item.id),saved.ids.slice(1).reverse());
    const failed=await page.evaluate(async()=>{
      const db=await saveStore.open(),original=db.transaction;
      db.transaction=function(...args){const tx=original.apply(this,args);if(args[1]==='readwrite')queueMicrotask(()=>tx.abort());return tx;};
      const id=await alleyCat.save();db.transaction=original;
      return {id,items:await saveStore.list(),message:document.getElementById('save-status').textContent};
    });
    assert.equal(failed.id,null);assert.equal(failed.items.length,11);assert.match(failed.message,/older saves were kept/);
    // A reload is a new JS execution context; loading must work before Play.
    await page.reload();await page.waitForFunction(()=>!document.getElementById('load-game').disabled);
    assert(await page.locator('#cover').isVisible());
    await page.click('#load-game');await phase('playing');
    assert(await page.locator('#cover').isHidden());
    assert.equal(await page.evaluate(()=>colorArt.mode),'color');assert.equal(await page.evaluate(()=>speaker.style),'fm');
    assert.equal(await page.evaluate(()=>alleyCat.state().lives),saved.items[0].lives);
    await page.evaluate(()=>game.suspend());
    await page.locator('#save-history summary').click();
    assert.equal(await page.locator('#save-list button').count(),11);
    await page.locator('#save-list button').last().click();
    await page.waitForFunction(()=>!saveBusy);
    assert.equal(await page.evaluate(()=>alleyCat.state().lives),saved.items.at(-1).lives);
    await page.keyboard.press('F7');await page.waitForFunction(()=>!saveBusy);
    assert.equal(await page.evaluate(()=>alleyCat.state().lives),saved.items[0].lives);
    const bad=await page.evaluate(()=>{
      game.suspend();const before=ram.slice(),snapshot=game.capture();snapshot.version=-1;
      let message='';try{game.restore(snapshot);}catch(error){message=error.message;}
      return {message,unchanged:ram.every((value,index)=>value===before[index])};
    });
    assert.match(bad.message,/incompatible/);assert(bad.unchanged);
    // Saved progress remains shared by another tab on the same origin.
    const second=await context.newPage();await second.goto(url);
    await second.waitForFunction(()=>!document.getElementById('load-game').disabled);
    assert.equal(await second.evaluate(async()=> (await alleyCat.saves.list()).length),11);
    assert.deepEqual(errors,[]);
    console.log('PASS: exact continuation after 400 execution steps; eleven retained saves; atomic failure keeps history; reload/load before Play; selecting an older save; corrupt-save protection; same-origin persistence.');
  }finally{await browser.close();await new Promise(resolve=>server.close(resolve));}
})().catch(error=>{console.error(error);process.exitCode=1;});
