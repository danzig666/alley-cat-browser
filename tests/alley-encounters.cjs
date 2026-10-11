const assert=require('node:assert/strict'),fs=require('node:fs'),path=require('node:path');
const {chromium}=require('playwright');
(async()=>{
  const browser=await chromium.launch({executablePath:process.env.CHROMIUM_PATH||'/usr/bin/chromium',args:['--no-sandbox']});
  try{
    const page=await browser.newPage(),errors=[];page.on('pageerror',e=>errors.push(e.message));
    await page.setContent(fs.readFileSync(path.join(__dirname,'../index.html'),'utf8'));
    await page.waitForFunction(()=>window.alleyCatPageReady);await page.click('#hd-style');await page.click('#start');
    await page.waitForFunction(()=>game.phase==='title');await page.locator('#menu-options button').first().click();
    await page.waitForFunction(()=>game.phase==='playing');await page.waitForTimeout(1700);
    await page.evaluate(()=>{
      cancelAnimationFrame(raf);game.suspend();window.baseline=game.capture();window.realTime=game.time;
      window.clock=baseline.elapsed;game.time=()=>clock;
      window.runNative=g=>{for(let i=0;i<4000;i++){clock+=8;if(g.next().done)return;}throw Error('Native encounter did not finish');};
      window.placeHang=(x,y)=>{
        r.ds=0x1010;runNative(sub_18413());
        for(let i=0;i<3;i++)memoryASet16(0x1010,0x1f30+i*2,x<160?280:0);
        memoryASet16(0x1010,0x579,x);memoryASet(0x1010,0x57b,y);memoryASet(0x1010,0x57c,y+50);
        for(const at of [0x551,0x558,0x559,0x55a,0x55b,0x56c])memoryASet(0x1010,at,0);
        memoryASet(0x1010,0x55c,1);memoryASet(0x1010,0x571,0);memoryASet(0x1010,0x56e,0);
        runNative(sub_18342());execution.restore([{name:'sub_17230',pc:0x17385,parked:null,budget:false}]);
        game.iterator=sub_17230();game.suspendedAt=0;
      };
      // Only the landing fixture is placed. Window selection, shutters, timers,
      // thrown objects, input, collision and room initialization run natively.
      placeHang(150,72);window.windowTrace=[];
      for(let frame=0;frame<900;frame++){
        clock+=1000/60;game.pump();const state=memoryAGet(0x1010,0x1665);
        if(state!==15||game.state().room!==0||memoryAGet(0x1010,0x1670)!==0)continue;
        const x=memoryAGet16(0x1010,0x1666),y=memoryAGet(0x1010,0x1668);
        // Let the thrown object clear the drop before testing entry. Dropping
        // onto it instead correctly knocks the cat off in the original game.
        const objectY=memoryAGet(0x1010,0x1673);if(objectY!==0&&objectY<y+32)continue;
        let black=0;for(let yy=y;yy<y+15;yy++)for(let xx=x;xx<x+32;xx++){
          const addr=0xb8000+(yy&1)*8192+(yy>>1)*80+(xx>>2);
          if(((ram[addr]>>(6-(xx&3)*2))&3)===0)black++;
        }
        if(black<300)continue;
        window.openWindow={x,y,state,black,frame};window.openSave=game.capture();break;
      }
      if(!window.openWindow)throw Error('No open window in 15 seconds of native alley play');
      game.suspend();present();
    });
    const windowArt=await page.evaluate(()=>{
      const {x,y,black}=openWindow;const p=hdArt.bg.getImageData(0,0,1280,800).data;let dark=0,closed=0;
      for(let yy=y;yy<y+15;yy++)for(let xx=x;xx<x+32;xx++){
        const at=((yy*4+2)*1280+xx*4+2)*4;if(p[at]<80&&p[at+1]<80&&p[at+2]<80)dark++;
        const other=((yy*4+2)*1280+((xx+80)%320)*4+2)*4;if(p[other]>100||p[other+1]>100)closed++;
      }
      return {...openWindow,dark,closed};
    });
    assert(windowArt.dark>=windowArt.black*.95,JSON.stringify(windowArt));assert(windowArt.closed>100);
    await page.locator('#screen').screenshot({path:path.join(__dirname,'hd-open-window.png')});
    // Real Down input releases a supported clothesline into the open pane.
    const entries=[];for(const mode of ['hd','original','color']){
    const landing=await page.evaluate(mode=>{
      clock=openSave.elapsed;game.restore(openSave);game.suspend();colorArt.mode=mode;r.ds=0x1010;const {x,y}=openWindow;let candidate=-1;
      for(let xx=x-8;xx<x+32;xx+=8){
        memoryASet16(0x1010,0x579,xx);memoryASet(0x1010,0x57b,y-16);memoryASet(0x1010,0x55c,0);
        runNative(sub_189dd());if(flags.carry){candidate=memoryAGet16(0x1010,0x579);break;}
      }
      if(candidate<0)throw Error('Window has no supported drop position');placeHang(candidate,y-16);
      window.entryGate=[];window.originalWindowGate=sub_18d35;
      sub_18d35=function*(){yield* originalWindowGate();if(memoryAGet(0x1010,0x551))entryGate.push({x:game.state().x,y:game.state().y,hang:memoryAGet(0x1010,0x55c),fall:memoryAGet(0x1010,0x571),down:memoryAGet(0x1010,0x699)});};
      return {x:candidate,y:y-16};
    },mode);
    await page.keyboard.down('ArrowDown');
    const entry=await page.evaluate(()=>{
      const steps=[];for(let frame=0;frame<240;frame++){
        clock+=1000/60;game.pump();steps.push(game.state());
        if(game.phase==='playing'&&game.state().room>=1&&game.state().room<=7){sub_18d35=originalWindowGate;game.suspend();present();return {steps,gates:entryGate,state:game.state()};}
        if(game.error)throw game.error;
      }throw Error('Dropping into window did not initialize a playable room: '+JSON.stringify(steps.slice(-8)));
    });await page.keyboard.up('ArrowDown');
    assert(entry.gates.some(s=>s.y>landing.y&&s.hang===0&&s.fall===1&&s.down===1),JSON.stringify(entry));
    assert(entry.state.room>=1&&entry.state.room<=7);assert.equal(entry.state.error,null);
    entries.push(entry.state);if(mode==='hd')await page.locator('#screen').screenshot({path:path.join(__dirname,'hd-window-entry.png')});
    }
    const encounters=await page.evaluate(()=>{
      clock=baseline.elapsed;game.restore(baseline);game.suspend();r.ds=0x1010;
      memoryASet16(0x1010,0x579,220);memoryASet(0x1010,0x57b,180);
      memoryASet(0x1010,0x1d59,27);memoryASet16(0x1010,0x1d5c,64);memoryASet(0x1010,0x1d5e,120);
      const bins=[];
      for(let i=0;i<26;i++){
        game.retrace=0;clock+=60;runNative(sub_19446());
        const record=Array.from(hdArt.entities.values()).filter(r=>r.actor==='sub_19446:0').at(-1);
        if(record&&record.id!==bins.at(-1)?.id)bins.push({...record});
      }
      present();const draw=hdArt.ctx.drawImage,crops=[];
      hdArt.ctx.drawImage=function(...args){if(args[0]===hdArt.binCat)crops.push(args.slice(1));return draw.apply(this,args);};
      // Render an actual early native frame, with the full donor's prefix crop.
      const early={...bins.find(r=>r.height===1)};
      // A pre-fix save has no crop fields and labels this as a walking cat.
      // Its native source is enough to restore the correct presentation.
      delete early.artTop;delete early.artHeight;early.pose='walk';hdArt.entities.set(early.id,early);
      const slot=(0xb8000+Math.floor(early.y/2)*80+(early.y&1)*8192+early.x/4)*4;
      const provenance=hdArt.provenance.slice();hdArt.provenance.fill(0);hdArt.provenance[slot]=early.id;hdArt.render();
      hdArt.provenance.set(provenance);hdArt.ctx.drawImage=draw;
      // A left-moving clothesline enemy uses its own compact walk frames.
      game.restore(baseline);game.suspend();r.ds=0x1010;
      memoryASet16(0x1010,0x579,220);memoryASet(0x1010,0x57b,180);
      memoryASet16(0x1010,0x1f6c,2);memoryASet16(0x1010,0x1f30,100);memoryASet(0x1010,0x1f3c,255);
      memoryASet(0x1010,0x1f48,1);memoryASet(0x1010,0x1f50,0);memoryASet(0x1010,0x55a,0);
      clock+=60;runNative(sub_195ab());const walk=Array.from(hdArt.entities.values()).filter(r=>r.actor==='sub_195ab:0').at(-1);
      const catches=[];
      for(const hanging of [1,0]){
        memoryASet16(0x1010,0x1f6c,0);memoryASet16(0x1010,0x1f30,100);memoryASet(0x1010,0x1f36,8);
        memoryASet16(0x1010,0x1f42,345);memoryASet(0x1010,0x1f50,0);
        memoryASet16(0x1010,0x579,100);memoryASet(0x1010,0x57b,8);memoryASet(0x1010,0x57c,58);
        memoryASet(0x1010,0x55c,hanging);const first=hdArt.nextId;runNative(sub_19797());
        catches.push({records:Array.from(hdArt.entities.values()).filter(r=>r.id>=first),hang:memoryAGet(0x1010,0x55c),fall:memoryAGet(0x1010,0x571)});
      }
      game.restore(baseline);game.suspend();present();return {bins,crops,walk,catches};
    });
    assert.equal(encounters.bins.length,26);assert(encounters.bins.some(r=>r.height===1)&&encounters.bins.some(r=>r.height===13));
    for(const r of encounters.bins){assert.equal(r.kind,'blackcat');assert.equal(r.pose,'peek');assert.equal(r.width,16);assert.equal(r.artTop,0);assert.equal(r.artHeight,13);}
    assert.equal(encounters.crops.length,1);const crop=encounters.crops[0];assert.equal(crop.length,8);assert.equal(crop[3],crop[7]*32);assert.equal(crop[7],1);
    assert.equal(encounters.walk.kind,'blackcat');assert.equal(encounters.walk.width,16);assert.equal(encounters.walk.height,8);assert.equal(encounters.walk.facing,-1);
    assert(encounters.catches[0].records.some(r=>r.kind==='impact'&&r.source===0x1d70&&r.width===48&&r.height===8));
    assert(!encounters.catches[0].records.some(r=>r.kind==='blackcat'));assert.equal(encounters.catches[0].hang,0);assert.equal(encounters.catches[0].fall,1);
    assert(encounters.catches[1].records.some(r=>r.kind==='blackcat'&&r.width===16&&r.height===8&&r.actor==='sub_195ab:0'&&r.pose==='idle'));
    assert.deepEqual(errors,[]);
    console.log('PASS: native alley window opens visibly in HD; real Down input enters and initializes rooms '+entries.map(s=>s.room).join('/')+' in HD/CGA/pixel; all 26 bin reveal frames crop a full-size face; clothesline walker faces left; knock-off cloud and captured enemy retain native geometry.');
  }finally{await browser.close();}
})().catch(e=>{console.error(e);process.exitCode=1;});
