const assert=require('node:assert/strict'),fs=require('node:fs'),path=require('node:path');
const {chromium}=require('playwright');
(async()=>{
  const browser=await chromium.launch({executablePath:process.env.CHROMIUM_PATH||'/usr/bin/chromium',args:['--no-sandbox']});
  try{
    const page=await browser.newPage(),errors=[];page.on('pageerror',e=>errors.push(e.message));
    await page.setContent(fs.readFileSync(path.join(__dirname,'../index.html'),'utf8'));
    await page.waitForFunction(()=>window.alleyCatPageReady);await page.click('#hd-style');
    // Each extracted frame must contain one complete animal, with no substantial
    // detached paws or tails from an adjacent cell. The original equal-grid
    // extraction fails both these checks and the complete walk-frame heights.
    const frames=await page.evaluate(()=>[...hdArt.animation,hdArt.sprites[5],hdArt.sprites[8]].map(canvas=>{
      const w=canvas.width,h=canvas.height,pixels=canvas.getContext('2d').getImageData(0,0,w,h).data;
      const visited=new Uint8Array(w*h),areas=[];
      for(let at=0;at<visited.length;at++){
        if(visited[at]||pixels[at*4+3]<=32)continue;
        const queue=[at];visited[at]=1;
        for(let i=0;i<queue.length;i++){
          const x=queue[i]%w,y=Math.floor(queue[i]/w);
          for(let dx=-1;dx<=1;dx++)for(let dy=-1;dy<=1;dy++){
            const xx=x+dx,yy=y+dy,n=yy*w+xx;
            if(xx<0||xx>=w||yy<0||yy>=h||visited[n]||pixels[n*4+3]<=32)continue;
            visited[n]=1;queue.push(n);
          }
        }
        areas.push(queue.length);
      }
      return {w,h,areas:areas.sort((a,b)=>b-a)};
    }));
    assert.equal(frames.length,18);
    for(const [i,frame] of frames.entries()){
      assert(frame.areas[0]>20000,`Frame ${i} must contain its animal`);
      assert(frame.areas.slice(1).every(area=>area<=16),`Neighbor fragments in frame ${i}: ${JSON.stringify(frame)}`);
    }
    assert(frames.slice(0,4).every(frame=>frame.h>=250),'Walking cats must retain their full feet and tails');
    assert(frames[0].w>=350&&frames[4].w>=370,'Keep the walking and jumping tails inside their frames');
    assert(frames[16].h<=180&&frames[16].w>=330,'Mouse includes its own tail, with no cat paw above it');
    assert(frames[17].h>=340,'Broom includes the complete handle');
    await page.click('#start');const phase=p=>page.waitForFunction(p=>game.phase===p,p);
    await phase('title');await page.locator('#menu-options button').first().click();await phase('playing');await page.waitForTimeout(1700);
    await page.evaluate(()=>{game.suspend();window.hangBaseline=game.capture();});
    for(const line of [8,40,72])for(const [key,mode] of [['e','hd'],['q','hd'],['ArrowDown','hd'],['ArrowRight','hd'],['ArrowLeft','hd'],['ArrowRight','original'],['ArrowLeft','original']]){
      const start=await page.evaluate(({line,key})=>{
        game.restore(hangBaseline);game.suspend();releaseKeys();r.ds=0x1010;
        const run=generator=>{for(let n=0;n<2000;n++)if(generator.next().done)return;throw new Error('Native placement did not finish');};
        run(sub_18413());
        let x=-1;for(let candidate=40;candidate<260;candidate+=8){
          let supported=true;
          const offsets=key==='ArrowLeft'?[0,-6]:key==='ArrowRight'?[0,6]:[0];
          for(const dx of offsets){
            memoryASet16(0x1010,0x579,candidate+dx);memoryASet(0x1010,0x57b,line);
            memoryASet(0x1010,0x55c,0);run(sub_189dd());supported&&=flags.carry;
          }
          if(supported){x=candidate;break;}
        }
        if(x<0)throw new Error('No clothesline platform');
        // Position the other cats away from the test landing. Their native AI
        // remains active throughout the subsequent real keyboard input.
        for(let i=0;i<3;i++)memoryASet16(0x1010,0x1f30+i*2,240);
        memoryASet16(0x1010,0x579,x);memoryASet(0x1010,0x57b,line);memoryASet(0x1010,0x57c,line+50);
        for(const at of [0x551,0x558,0x559,0x55a,0x55b,0x56c])memoryASet(0x1010,at,0);
        memoryASet(0x1010,0x55c,1);memoryASet(0x1010,0x571,0);memoryASet(0x1010,0x56e,0);
        run(sub_18342());execution.restore([{name:'sub_17230',pc:0x17385,parked:null,budget:false}]);
        game.iterator=sub_17230();game.resume();return {x,y:line};
      },{line,key});
      await page.waitForFunction(()=>memoryAGet(0x1010,0x55c)===2&&hdArt.renderedRecords?.some(r=>r.kind==='player'&&r.pose==='hang'));
      assert.match(await page.locator('#hint').textContent(),/jump.*drop/);
      const hanging=await page.evaluate(()=>{game.suspend();return {
        ram:Array.from(ram),words:Array.from(words),record:hdArt.renderedRecords.find(r=>r.kind==='player')};});
      assert.equal(hanging.record.y,line);assert.equal(hanging.record.height,14);assert.equal(hanging.record.width,24);
      if(key==='e')await page.locator('#hd-game').screenshot({path:path.join(__dirname,`hd-hanging-${line}.png`)});
      await page.click('#hd-style');assert.deepEqual(await page.evaluate(()=>Array.from(ram)),hanging.ram);
      assert.deepEqual(await page.evaluate(()=>Array.from(words)),hanging.words);
      if(mode==='hd')await page.click('#hd-style');
      await page.evaluate(()=>{game.resume();focusGame();});
      if(key==='ArrowLeft'||key==='ArrowRight')await page.evaluate(()=>{
        window.slideTrace=[];window.normalPlayerBegin=hdArt.begin;
        // Observe actual native draws: a narrow section can be traversed and
        // left within one browser frame, before Playwright's next RAF poll.
        hdArt.begin=function(...args){
          const result=normalPlayerBegin.apply(this,args),frame=args[0],record=this.entities.get(frame.hdId);
          if(frame.kind==='player'&&frame.source===0x09da&&record)slideTrace.push({
            x:game.state().x,y:game.state().y,record:{x:record.x,y:record.y,width:record.width,height:record.height,source:record.source,pose:record.pose}});
          return result;
        };
      });
      await page.keyboard.down(key);
      await page.waitForFunction(({x,y,key})=>{
        const state=game.state();
        if(key==='ArrowLeft'||key==='ArrowRight')return slideTrace.some(point=>point.y===y&&
          (key==='ArrowLeft'?x-point.x:point.x-x)>=12);
        return memoryAGet(0x1010,0x55c)===0&&
          (key==='ArrowDown'?state.y>y:state.y<y&&(key==='q'?state.x<x:state.x>x));
      },{...start,key},{timeout:1200}).catch(async error=>{
        const actual=await page.evaluate(()=>({state:game.state(),axes:[memoryAGet(0x1010,0x698),memoryAGet(0x1010,0x699)],
          flags:[memoryAGet(0x1010,0x55c),memoryAGet(0x1010,0x56e),memoryAGet(0x1010,0x571)],keys:[...pressed],trace:window.slideTrace}));
        throw new Error(JSON.stringify({line,key,mode,start,actual,error:error.message}));
      });
      if(line===8&&key==='e'){
        await page.waitForFunction(()=>{
          if(!hdArt.renderedRecords?.some(r=>r.kind==='player'&&r.artTop>0))return false;
          game.suspend();return true;
        },null,{timeout:1200});
        const crop=await page.evaluate(()=>{
          game.suspend();const record=hdArt.renderedRecords.find(r=>r.kind==='player');
          const donor=hdArt.animation[record.pose==='jump'?4:5],draw=hdArt.ctx.drawImage,calls=[];
          hdArt.ctx.drawImage=function(...args){if(args[0]===donor)calls.push(args.slice(1));return draw.apply(this,args);};
          hdArt.render();hdArt.ctx.drawImage=draw;
          const saved=game.capture();game.restore(saved);present();
          const restored=hdArt.renderedRecords.find(r=>r.kind==='player');
          const damaged=game.capture();damaged.hd.entities.find(r=>r.id===record.id).artTop=100;
          let rejected=false;try{game.restore(damaged);}catch{rejected=true;}
          return {record,restored,rejected,calls,donorHeight:donor.height};
        });
        assert(crop.record.artHeight>crop.record.height);assert(crop.record.artTop+crop.record.height<=crop.record.artHeight);
        assert.deepEqual(crop.restored,crop.record);assert(crop.rejected);
        assert.equal(crop.calls.length,1);assert.equal(crop.calls[0].length,8);
        assert(crop.calls[0][1]>0&&crop.calls[0][3]<crop.donorHeight);
        assert.equal(crop.calls[0][7],crop.record.height);
      }
      await page.keyboard.up(key);await page.evaluate(()=>game.suspend());
      if(key==='ArrowLeft'||key==='ArrowRight'){
        const trace=await page.evaluate(()=>{hdArt.begin=normalPlayerBegin;return slideTrace;});
        const slide=trace.find(point=>point.y===line&&(key==='ArrowLeft'?start.x-point.x:point.x-start.x)>=12);
        assert(slide);assert.equal(slide.record.source,0x09da);assert.equal(slide.record.pose,'hang');
        assert.equal(slide.record.y,line);assert.equal(slide.record.height,14);assert.equal(slide.record.width,24);
      }
      assert.equal(await page.evaluate(()=>game.error),null);
    }
    assert.equal(await page.evaluate(()=>colorArt.identity('sub_19efc',0x1679,'sub_18396')),'impact');
    assert.deepEqual(errors,[]);
    console.log('PASS: complete animation frames; hanging at all three lines; left/right traversal in HD and CGA; Q/E jumps and Down drop with original AI active; live CGA switch preserves RAM/registers; jump clipping and saved crop validation.');
  }finally{await browser.close();}
})().catch(error=>{console.error(error);process.exitCode=1;});
