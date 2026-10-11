// Enter every room through the original main loop, selecting only the room ID
// in the test harness. No gameplay assertions or routines are disabled.
const fs=require('node:fs');
const path=require('node:path');
const http=require('node:http');
const assert=require('node:assert/strict');
const {chromium}=require('playwright');
const root=path.join(__dirname,'..');
(async()=>{
  const server=http.createServer((req,res)=>{res.setHeader('Content-Type','text/html');res.end(fs.readFileSync(path.join(root,'alley-cat.html')));}).listen(0,'127.0.0.1');
  await new Promise(r=>server.once('listening',r));
  const browser=await chromium.launch({headless:true,executablePath:process.env.CHROMIUM_PATH||'/usr/bin/chromium',args:['--no-sandbox']});
  try {
    const page=await browser.newPage();const errors=[];
    page.on('pageerror',e=>errors.push(e.message));
    await page.goto('http://127.0.0.1:'+server.address().port);await page.click(process.env.HD?'#hd-style':'#graphics');await page.click('#start');
    const press=key=>page.keyboard.press(key,{delay:120});
    const phase=p=>page.waitForFunction(p=>alleyCat.state().phase===p,p);
    await phase('title'); await press('Enter'); await phase('difficulty'); await press('k'); await phase('ready');
    await press('Enter'); await phase('playing'); await page.waitForTimeout(500);
    await page.evaluate(()=>{
      window.roomBaseline={ram:ram.slice(),words:words.slice(),flags:{...flags}};
      window.savedMemorySet16=memoryASet16;
    });
    const rooms=process.env.ROOMS?process.env.ROOMS.split(',').map(Number):[1,2,3,4,5,6,7];
    for(const room of rooms) {
      if(process.env.HD)await page.evaluate(()=>colorArt.mode='hd');
      await page.evaluate(room=>{
        ram.set(roomBaseline.ram);words.set(roomBaseline.words);Object.assign(flags,roomBaseline.flags);
        game.error=null;game.phase='playing';game.suspendedAt=0;
        memoryASet16=window.savedMemorySet16;
        // Select a room at the original main-loop dispatch and leave all its
        // initialization, enemy AI, collision, and sound code running.
        memoryASet16=function(seg,ofs,value) {
          if(seg===0x1010 && ofs===4 && value>0 && value<8) value=room;
          window.savedMemorySet16(seg,ofs,value);
        };
        // Use the native continuation mechanism at the original room dispatch.
        execution.restore([{name:'sub_17230',pc:0x173e7,parked:null,budget:false}]);
        game.iterator=sub_17230();
        memoryASet(0x1010,0x418,room===7?1:0);
        memoryASet(0x1010,0x551,1);
      },room);
      await page.waitForFunction(room=>alleyCat.state().room===room && alleyCat.state().phase==='playing',room,{timeout:10000});
      await page.waitForTimeout(1400);
      const before=await page.evaluate(()=>alleyCat.state());
      assert.equal(before.error,null,`Room ${room} must start without runtime errors`);
      assert.equal(before.room,room,`Room ${room} must remain active`);
      await page.keyboard.down('ArrowRight'); await page.waitForTimeout(250); await page.keyboard.up('ArrowRight');
      await page.keyboard.down('Alt'); await page.waitForTimeout(120); await page.keyboard.up('Alt');
      const result=await page.evaluate(()=>{
        const pixels=canvas.getContext('2d').getImageData(0,0,320,200).data;
        let lit=0; for(let i=0;i<pixels.length;i+=4) if(pixels[i]||pixels[i+1]||pixels[i+2]) lit++;
        return {...alleyCat.state(),lit};
      });
      assert.equal(result.error,null,`Room ${room} must process input without errors`);
      assert(result.lit>1000,`Room ${room} must draw its graphics`);
      assert(result.frames>before.frames,`Room ${room} must keep updating`);
      await page.locator('#game').screenshot({path:path.join(__dirname,`room-${room}.png`)});
      if(process.env.HD)await page.locator('#hd-game').screenshot({path:path.join(__dirname,`hd-room-${room}.png`)});
      const restored=await page.evaluate(hd=>{
        game.suspend();releaseKeys();const realTime=game.time,elapsed=game.time();game.time=()=>elapsed;present();
        const target=hd?hdArt.canvas:canvas,ctx=target.getContext('2d');
        const snapshot=game.capture(),pixels=ctx.getImageData(0,0,target.width,target.height).data.slice();
        game.restore(snapshot);present();
        const after=ctx.getImageData(0,0,target.width,target.height).data;
        const same=pixels.every((value,i)=>value===after[i]);
        let clock=0;game.time=()=>snapshot.elapsed+clock;
        const hash=values=>{let value=2166136261;for(const byte of values)value=Math.imul(value^byte,16777619);return value>>>0;};
        const advance=()=>{
          for(let i=0;i<200;i++){clock+=8;game.iterator.next();}
          return {ram:hash(ram),words:Array.from(words),flags:{...flags},steps:game.steps,phase:game.phase,
            layer:hash(colorArt.layer),hdLayer:hash(hdArt.provenance),divisor:speaker.divisor,gate:speaker.gate,events:speaker.events};
        };
        const expected=advance();clock=0;game.restore(snapshot);const actual=advance();
        const identical=JSON.stringify(expected)===JSON.stringify(actual);
        game.time=realTime;game.restore(snapshot);game.resume();return same&&identical;
      },Boolean(process.env.HD));
      assert(restored,`Room ${room} must restore its complete pixel art and sprite state`);
      if(room===4) {
        const cheese=await page.evaluate(()=>{
          game.suspend();const mask=colorArt.cheeseMask;
          let count=0,minX=320,maxX=-1,minY=200,maxY=-1;
          for(let p=0;p<mask.length;p++)if(mask[p]){count++;const x=p%320,y=Math.floor(p/320);minX=Math.min(minX,x);maxX=Math.max(maxX,x);minY=Math.min(minY,y);maxY=Math.max(maxY,y);}
          return {count,bounds:[minX,minY,maxX,maxY],lower:colorArt.cheeseTable[(160*320+100)*4+1]>>>0};
        });
        assert(cheese.count>20000,'The full original cheese wedge must receive its own material');
        assert.deepEqual(cheese.bounds,[24,32,223,167]);
        assert.equal(cheese.lower,0xfff4ce65,'The bottom of the cheese must stay golden, not use the wood material');
        const before=await page.evaluate(()=>Array.from(ram.slice(0xb8000,0xbc000)));
        await page.click('#graphics');
        await page.locator('#game').screenshot({path:path.join(__dirname,'cheese-original.png')});
        assert.deepEqual(await page.evaluate(()=>Array.from(ram.slice(0xb8000,0xbc000))),before,'Cheese rendering must not change the original pixels');
        await page.click('#graphics');
        await page.locator('#game').screenshot({path:path.join(__dirname,'cheese-color.png')});
        await page.evaluate(()=>game.resume());
      }
      console.log('PASS room',room,JSON.stringify(result));
    }
    assert.deepEqual(errors,[]);
  }finally {await browser.close();await new Promise(r=>server.close(r));}
})().catch(e=>{console.error(e);process.exitCode=1;});
