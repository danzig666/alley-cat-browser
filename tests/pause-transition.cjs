// Exercise a real native pause and oxygen timeout through the main game loop.
const assert=require('node:assert/strict'),fs=require('node:fs'),path=require('node:path');
const {chromium}=require('playwright');
(async()=>{
  const browser=await chromium.launch({executablePath:process.env.CHROMIUM_PATH||'/usr/bin/chromium',args:['--no-sandbox']});
  try{
    const page=await browser.newPage({viewport:{width:1440,height:900}}),errors=[];
    page.on('pageerror',error=>errors.push(error.message));
    await page.setContent(fs.readFileSync(path.join(__dirname,'../index.html'),'utf8'));
    await page.waitForFunction(()=>window.alleyCatPageReady);await page.click('#start');
    await page.waitForFunction(()=>game.phase==='title');await page.locator('#menu-options button').first().click();
    await page.waitForFunction(()=>game.phase==='playing');
    await page.keyboard.down('ArrowRight');
    await page.waitForFunction(()=>game.state().x>=24 && Array.from(hdArt.entities.values()).some(record=>record.kind==='player'));
    await page.keyboard.up('ArrowRight');
    await page.keyboard.press('Escape',{delay:100});
    await page.waitForFunction(()=>game.phase==='paused' && execution.frames.at(-1).name==='sub_1d1c7' && execution.frames.at(-1).parked===1);
    await page.evaluate(()=>{
      window.pausePosition={x:game.state().x,y:game.state().y,room:game.state().room,lives:game.state().lives};
      window.videoHash=()=>{let h=2166136261;for(const byte of ram.subarray(0xb8000,0xbc000))h=Math.imul(h^byte,16777619);return h>>>0;};
      window.pixelHash=()=>{
        const c=colorArt.mode==='hd'?hdArt.canvas:canvas,a=c.getContext('2d').getImageData(0,0,c.width,c.height).data;
        let h=2166136261;for(const byte of a)h=Math.imul(h^byte,16777619);return h>>>0;
      };
      window.pausedVideo=videoHash();
    });
    const hashes=[];
    for(const mode of ['original','color','hd','original']){
      if(await page.evaluate(()=>colorArt.mode)!==mode)
        await page.click(mode==='hd'?'#hd-style':'#graphics');
      await page.evaluate(()=>{present();updateUI();window.pausedPixels=pixelHash();});
      await page.waitForTimeout(300);
      const result=await page.evaluate(()=>{
        const menu=getComputedStyle(document.querySelector('#menu')),button=document.querySelector('#menu-options button').getBoundingClientRect(),screen=document.querySelector('#screen').getBoundingClientRect();
        return {phase:game.phase,position:{x:game.state().x,y:game.state().y,room:game.state().room,lives:game.state().lives},expected:pausePosition,
          before:pausedPixels,after:pixelHash(),video:videoHash(),expectedVideo:pausedVideo,
          background:menu.backgroundColor,image:menu.backgroundImage,passThrough:menu.pointerEvents,buttonArea:button.width*button.height,screenArea:screen.width*screen.height,
          player:hdArt.renderedRecords?.some(record=>record.kind==='player')};
      });
      assert.equal(result.phase,'paused');assert.deepEqual(result.position,result.expected);
      assert.equal(result.before,result.after,`${mode} animation must stay frozen`);
      assert.equal(result.video,result.expectedVideo,'Switching graphics must not change native video memory');
      assert.equal(result.background,'rgba(0, 0, 0, 0)');assert.equal(result.image,'none');assert.equal(result.passThrough,'none');
      assert(result.buttonArea/result.screenArea<.03,'Resume button must leave nearly all of the picture visible');
      if(mode==='hd')assert(result.player,'HD pause must still draw the cat and the room');
      hashes.push(result.after);
      if(mode==='original')assert(await page.evaluate(()=>{
        // The native backup contains the picture before PAWS lettering. Check
        // every restored pixel against the CGA canvas, including both banks.
        const pixels=canvas.getContext('2d').getImageData(0,0,320,200).data,p=game.paletteRegister,b=(p&16)?8:0;
        const palette=[RGBI[p&15],...[(p&32)?3:2,(p&32)?5:4,(p&32)?7:6].map(c=>RGBI[c+b])];
        for(let y=88;y<104;y++)for(let x=40;x<296;x++){
          const byte=ram[0x1010e+(y-88)*64+(x>>2)-10],rgb=palette[(byte>>(6-(x&3)*2))&3],at=(y*320+x)*4;
          if(rgb.some((v,i)=>v!==pixels[at+i]))return false;
        }return true;
      }),'Pause lettering must not cover the frozen CGA picture');
    }
    assert.equal(hashes[0],hashes[3]);assert.equal(new Set(hashes.slice(0,3)).size,3,'All three graphic styles must be visible while paused');
    const restored=await page.evaluate(()=>{
      colorArt.mode='hd';present();const state=game.capture(),before=pixelHash();game.restore(state);present();
      const same=before===pixelHash();delete state.hd.pauseAt;game.restore(state);present();
      return same&&game.phase==='paused'&&hdArt.renderedRecords.some(record=>record.kind==='player');
    });assert(restored,'Current and older paused saves must retain the game picture');
    await page.locator('#screen').screenshot({path:path.join(__dirname,'hd-visible-pause.png')});
    await page.locator('#menu-options button').click();await page.waitForFunction(()=>game.phase==='playing');
    // Enter the fish room at its native dispatch. Let all initialization and
    // fish AI run, then expire oxygen rather than setting the death flag.
    await page.evaluate(()=>{execution.restore([{name:'sub_17230',pc:0x17689,parked:null,budget:false}]);game.iterator=sub_17230();});
    await page.waitForFunction(()=>game.state().room===2 && !execution.frames.some(f=>f.name==='sub_18e20') && Array.from(hdArt.entities.values()).filter(r=>r.kind==='fish').length>=12);
    await page.evaluate(()=>{
      window.lossStart=performance.now();window.initialLives=game.state().lives;window.transitionCosts=[];window.materialBuilds=0;
      const draw=present,build=hdArt.buildBackground;
      hdArt.buildBackground=function(){if(execution.frames.some(f=>f.name==='sub_18e20'))materialBuilds++;return build.call(this);};
      present=function(){const transition=execution.frames.some(f=>f.name==='sub_18e20'),start=performance.now();draw();if(transition)transitionCosts.push(performance.now()-start);};
      const tick=(Math.floor(game.time()*1193182/65536000)+game.timerOffset)&65535;
      const limit=memoryAGet16(0x1010,1433+game.state().difficulty*2);
      memoryASet16(0x1010,0x5f1,(tick-limit-2)&65535);
    });
    await page.waitForFunction(()=>execution.frames.some(f=>f.name==='sub_18fa6'),null,{timeout:5000});
    await page.locator('#screen').screenshot({path:path.join(__dirname,'hd-drowning-transition.png')});
    await page.waitForFunction(()=>game.state().room===0 && game.phase==='playing' && !execution.frames.some(f=>f.name==='sub_18e20'),null,{timeout:5000});
    const transition=await page.evaluate(()=>({duration:performance.now()-lossStart,lost:initialLives-game.state().lives,materialBuilds,frames:transitionCosts.length,cost:transitionCosts.reduce((a,b)=>a+b,0)/transitionCosts.length,error:game.error}));
    assert.equal(transition.error,null);assert.equal(transition.lost,1);assert.equal(transition.materialBuilds,0);
    assert(transition.frames>10);assert(transition.duration<4000,'Oxygen loss must return to the alley promptly');
    assert(transition.cost<50,'HD transition must avoid the expensive per-frame material rebuild');
    assert.deepEqual(errors,[]);
    console.log('PASS: frozen visible pause in all styles, graphic comparison, native picture restoration, paused save compatibility and resume; oxygen timeout loses one life and returns to the alley.',transition);
  }finally{await browser.close();}
})().catch(error=>{console.error(error);process.exitCode=1;});
