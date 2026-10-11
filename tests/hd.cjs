const assert=require('node:assert/strict'),fs=require('node:fs'),path=require('node:path'),http=require('node:http');
const {chromium}=require('playwright');
(async()=>{
  const server=http.createServer((req,res)=>{res.setHeader('Content-Type','text/html');res.end(fs.readFileSync(path.join(__dirname,'../index.html')));}).listen(0,'127.0.0.1');
  await new Promise(resolve=>server.once('listening',resolve));
  const browser=await chromium.launch({executablePath:process.env.CHROMIUM_PATH||'/usr/bin/chromium',args:['--no-sandbox']});
  try{
    const context=await browser.newContext({viewport:{width:1600,height:1000}}),page=await context.newPage(),errors=[],requests=[];
    page.on('pageerror',error=>errors.push(error.message));page.on('request',request=>requests.push(request.url()));
    await page.goto('http://127.0.0.1:'+server.address().port);await page.waitForFunction(()=>window.alleyCatPageReady);
    await context.setOffline(true);await page.click('#hd-style');await page.click('#piano-style');await page.click('#start');
    const phase=value=>page.waitForFunction(value=>alleyCat.state().phase===value,value);
    await phase('title');await page.waitForFunction(()=>piano.notes>3&&piano.buffers.length===7);
    await page.waitForFunction(()=>{
      const values=new Float32Array(speaker.analyser.fftSize);speaker.analyser.getFloatTimeDomainData(values);
      window.observedPianoPeak=Math.max(...values.map(Math.abs));return window.observedPianoPeak>.001;
    });
    const audio=await page.evaluate(()=>{
      const values=new Float32Array(speaker.analyser.fftSize);speaker.analyser.getFloatTimeDomainData(values);
      return {notes:piano.notes,peak:Math.max(window.observedPianoPeak,...values.map(Math.abs)),square:speaker.gain.gain.value};
    });assert(audio.notes>3);assert(audio.peak>.001);assert.equal(audio.square,0);
    const logo=await page.evaluate(()=>{
      const pixels=hdArt.ctx.getImageData(0,0,1280,800).data;let top=130,count=0;
      for(let y=0;y<130;y++)for(let x=500;x<800;x++){
        const at=(y*1280+x)*4;
        if(pixels[at+1]>pixels[at]+15&&pixels[at+2]>pixels[at]+25){top=Math.min(top,y);count++;}
      }
      return {top,count};
    });
    assert(logo.count>1500&&logo.top>=24,`The full blue IBM logo must have space above it: ${JSON.stringify(logo)}`);
    await page.locator('#screen').screenshot({path:path.join(__dirname,'hd-title.png')});
    assert.equal(await page.locator('#screen #menu-options button').count(),4);
    await page.locator('#screen').screenshot({path:path.join(__dirname,'hd-skill.png')});
    await page.locator('#menu-options button').first().click();await phase('playing');
    await page.waitForTimeout(900);
    await page.evaluate(()=>{game.suspend();releaseKeys();present();});
    const snapshot=()=>page.evaluate(()=>({ram:Array.from(ram),words:Array.from(words),phase:game.phase,
      native:[canvas.width,canvas.height],room:memoryAGet16(0x1010,4)}));
    const before=await snapshot();assert.equal(await page.locator('#hd-game').isVisible(),true);
    await page.screenshot({path:path.join(__dirname,'hd-desktop.png')});
    const rendering=await page.evaluate(()=>{
      const pixels=hdArt.ctx.getImageData(0,0,1280,800).data;const colors=new Set();
      for(let i=0;i<pixels.length;i+=16)colors.add(pixels[i]+','+pixels[i+1]+','+pixels[i+2]);
      return {colors:colors.size,entities:hdArt.entities.size,width:hdArt.canvas.width,height:hdArt.canvas.height};
    });assert(rendering.colors>1000);assert(rendering.entities>0);assert.equal(rendering.width,1280);assert.equal(rendering.height,800);
    const graffiti=await page.evaluate(()=>{
      const pixels=hdArt.ctx.getImageData(0,0,1280,800).data;let native=0,painted=0;
      for(let y=106;y<176;y++)for(let x=0;x<320;x++)if(hdArt.backgroundPixels[y*320+x]===0&&!hdArt.staticMetal[y*320+x]){
        native++;const at=((y*4+2)*1280+x*4+2)*4;if(pixels[at]<100&&pixels[at+1]<100&&pixels[at+2]<100)painted++;
      }
      return {native,painted};
    });assert(graffiti.native>400);assert(graffiti.painted>graffiti.native*.95,JSON.stringify(graffiti));
    await page.click('#hd-style');assert.equal(await page.locator('#hd-game').isHidden(),true);assert.deepEqual(await snapshot(),before);
    await page.click('#graphics');assert.deepEqual(await snapshot(),before);
    await page.click('#hd-style');assert.deepEqual(await snapshot(),before);
    const saved=await page.evaluate(async()=>alleyCat.save());assert(Number.isInteger(saved));
    await page.click('#hd-style');await page.click('#piano-style');await page.evaluate(async()=>{await alleyCat.load();game.suspend();present();});
    assert.equal(await page.evaluate(()=>colorArt.mode),'hd');assert.equal(await page.evaluate(()=>speaker.style),'piano');assert.deepEqual(await snapshot(),before);
    assert.match(await page.locator('#art-badge').textContent(),/HAND-DRAWN HD/);
    const encounters=await page.evaluate(async()=>{
      const saved=game.capture(),realTime=game.time;let clock=saved.elapsed;
      game.time=()=>clock;game.suspendedAt=0;r.ds=0x1010;
      const run=generator=>{for(let n=0;n<2000;n++){clock+=8;if(generator.next().done)return;}throw new Error('Encounter did not complete');};
      const kinds=caller=>Array.from(hdArt.entities.values()).filter(record=>record.actor?.startsWith(caller+':')).map(record=>record.kind);
      // Force the native bin-cat rise, preserving its stack assertion and AI.
      memoryASet(0x1010,0x1d59,20);memoryASet16(0x1010,0x1d5c,64);memoryASet(0x1010,0x1d5e,120);
      memoryASet16(0x1010,0x1d5a,0);memoryASet16(0x1010,0x579,220);memoryASet(0x1010,0x57b,180);
      for(let n=0;n<8&&!kinds('sub_19446').length;n++)run(sub_19446());const bin=kinds('sub_19446');
      // Two native clothesline collision branches: the fight and captured cat.
      const catches=[];
      for(const falling of [1,0]){
        memoryASet16(0x1010,0x1f6c,0);memoryASet16(0x1010,0x1f30,100);memoryASet(0x1010,0x1f36,8);
        memoryASet16(0x1010,0x1f42,345);memoryASet(0x1010,0x1f50,0);
        memoryASet16(0x1010,0x579,100);memoryASet(0x1010,0x57b,8);memoryASet(0x1010,0x57c,58);
        memoryASet(0x1010,0x55c,falling);const first=hdArt.nextId;run(sub_19797());catches.push(Array.from(hdArt.entities.values()).filter(record=>record.id>=first).map(record=>record.kind));
      }
      // The original dog collision draws a fight cloud, not an oversized cat.
      run(sub_18396());const fight=kinds('sub_18396');
      // Use an actual native collision tune in gameplay, not a synthetic gate.
      run(sub_1cd51());const notes=piano.notes;r.ax=1000;r.bx=750;run(sub_1cb6b());
      const effect={notes:piano.notes-notes,square:speaker.gain.gain.value};
      game.time=realTime;game.restore(saved);game.suspend();present();return {bin,catches,fight,effect};
    });
    assert(encounters.bin.length>0&&encounters.bin.every(kind=>kind==='blackcat'),JSON.stringify(encounters));
    assert(encounters.catches[0].length>0&&encounters.catches[0].every(kind=>kind==='impact'),JSON.stringify(encounters));
    assert(encounters.catches[1].length>0&&encounters.catches[1].every(kind=>kind==='blackcat'),JSON.stringify(encounters));
    assert(encounters.fight.length>0&&encounters.fight.every(kind=>kind==='impact'),JSON.stringify(encounters));
    assert(encounters.effect.notes>0,JSON.stringify(encounters));assert.equal(encounters.effect.square,0);
    // The native two-piece cat becomes one illustration with exactly the union
    // bounds. Intermediate renders move without executing any native instruction.
    const smooth=await page.evaluate(()=>{
      hdArt.render();const composed=hdArt.renderedRecords.filter(record=>record.kind==='player');
      const ids=new Set();for(let y=0;y<200;y++)for(let x=0;x<320;x++)ids.add(hdArt.provenance[(0xb8000+(y&1)*8192+(y>>1)*80+(x>>2))*4+(x&3)]);
      const pieces=Array.from(ids,id=>hdArt.entities.get(id)).filter(record=>record?.kind==='player');
      if(composed.length!==1||pieces.length<2)return {ok:false,composed,pieces};
      const width=Math.max(...pieces.map(r=>r.x+r.width))-Math.min(...pieces.map(r=>r.x));
      const height=Math.max(...pieces.map(r=>r.y+r.height))-Math.min(...pieces.map(r=>r.y));
      if(composed[0].width!==width||composed[0].height!==height)return {ok:false,width,height,composed};
      const originalTime=game.time,records=pieces.map(record=>({...record})),now=game.time();
      for(const record of pieces){record.fromX=record.x-4;record.at=now;record.pose='walk';}
      const stages=[];
      const pixels=t=>{game.time=()=>now+t;hdArt.render();stages.push(hdArt.renderedRecords.filter(r=>r.kind==='player'));return hdArt.ctx.getImageData(0,0,1280,800).data.slice();};
      const a=pixels(10),b=pixels(30),c=pixels(55);
      const gait=pixels(140);
      for(const record of records)Object.assign(hdArt.entities.get(record.id),record);
      game.time=originalTime;hdArt.render();
      return {ok:a.some((value,i)=>value!==b[i])&&b.some((value,i)=>value!==c[i])&&c.some((value,i)=>value!==gait[i]),phase:game.phase,stages,diffs:[a.filter((v,i)=>v!==b[i]).length,b.filter((v,i)=>v!==c[i]).length,c.filter((v,i)=>v!==gait[i]).length]};
    });assert(smooth.ok,JSON.stringify(smooth));assert.deepEqual(await snapshot(),before);
    const invalid=await page.evaluate(()=>{
      const damaged=game.capture();damaged.hd.entities[0].width=NaN;
      try{game.restore(damaged);return false;}catch{return true;}
    });assert(invalid);assert.deepEqual(await snapshot(),before);
    await page.evaluate(()=>game.resume());await page.keyboard.down('ArrowRight');await page.waitForTimeout(300);await page.keyboard.up('ArrowRight');
    assert.equal(await page.evaluate(()=>alleyCat.state().error),null);assert.deepEqual(errors,[]);
    assert(requests.every(request=>request.startsWith('http://127.0.0.1:')||request.startsWith('data:')));
    console.log('PASS: native bin-cat rise, clothesline knock-off cloud and captured cat, gameplay effects use piano with square oscillator silent, offline HD screens, sampled piano waveform, live styles preserve native state/dimensions, HD save/load and continued controls.');
  }finally{await browser.close();await new Promise(resolve=>server.close(resolve));}
})().catch(error=>{console.error(error);process.exitCode=1;});
