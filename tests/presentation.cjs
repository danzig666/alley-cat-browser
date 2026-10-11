const fs=require('node:fs');
const path=require('node:path');
const http=require('node:http');
const assert=require('node:assert/strict');
const {chromium}=require('playwright');
const root=path.join(__dirname,'..');
(async()=>{
  const server=http.createServer((req,res)=>{res.setHeader('Content-Type','text/html');res.end(fs.readFileSync(path.join(root,'alley-cat.html')));}).listen(0,'127.0.0.1');
  await new Promise(r=>server.once('listening',r));
  const browser=await chromium.launch({executablePath:process.env.CHROMIUM_PATH||'/usr/bin/chromium',args:['--no-sandbox']});
  try {
    const context=await browser.newContext({viewport:{width:1100,height:1100}});
    const page=await context.newPage(),errors=[],requests=[];
    const mode=async(id,value)=>{
      if(await page.locator('#'+id).getAttribute('data-mode')!==value)await page.click('#'+id);
      assert.equal(await page.locator('#'+id).getAttribute('data-mode'),value);
    };
    page.on('pageerror',e=>errors.push(e.message));page.on('request',r=>requests.push(r.url()));
    await page.goto('http://127.0.0.1:'+server.address().port);
    assert.equal(await page.locator('#graphics').getAttribute('data-mode'),'original');
    assert.equal(await page.locator('#audio-style').getAttribute('data-mode'),'speaker');
    await page.click('#graphics');await page.click('#audio-style');
    await context.setOffline(true);await page.click('#start');
    const phase=p=>page.waitForFunction(p=>alleyCat.state().phase===p,p);
    await phase('title');
    assert.equal((await page.evaluate(()=>alleyCat.state())).graphics,'color');
    assert.equal((await page.evaluate(()=>alleyCat.state())).audio,'fm');
    await page.waitForFunction(()=>{
      const s=alleyCat.speaker,a=new Float32Array(s.analyser.fftSize);s.analyser.getFloatTimeDomainData(a);
      return s.fm.notes>3&&a.some(v=>Math.abs(v)>.01);
    });
    const fm=await page.evaluate(()=>({notes:speaker.fm.notes,originalGain:speaker.gain.gain.value,
      ratio:speaker.fm.modulator.frequency.value/speaker.fm.carrier.frequency.value}));
    assert.equal(fm.originalGain,0,'PC square oscillator must be silent in FM mode');
    assert.equal(fm.ratio,2,'Title instrument must use two-operator FM');
    // Hold a real title-music note while testing the two audio paths. No note
    // sequence, divisor, PIT event or timing table is substituted by the test.
    await page.waitForFunction(()=>(speaker.gate&3)===3);
    const note=await page.evaluate(()=>{
      window.audioTestIterator=game.iterator;game.iterator=null;
      return {divisor:speaker.divisor,events:speaker.events,frequency:speaker.frequency};
    });
    await mode('audio-style','speaker');await page.waitForTimeout(80);
    const originalAudio=await page.evaluate(()=>{
      const samples=new Float32Array(speaker.analyser.fftSize);speaker.analyser.getFloatTimeDomainData(samples);
      return {divisor:speaker.divisor,events:speaker.events,frequency:speaker.frequency,
        originalGain:speaker.gain.gain.value,fmGain:speaker.fm.amp.gain.value,peak:Math.max(...samples.map(Math.abs))};
    });
    assert.equal(originalAudio.divisor,note.divisor);assert.equal(originalAudio.events,note.events);
    assert.equal(originalAudio.frequency,note.frequency);assert(Math.abs(originalAudio.originalGain-.075)<1e-6);
    assert.equal(originalAudio.fmGain,0);assert(originalAudio.peak>.05,'Original music must produce the PC-speaker waveform');
    await page.click('#sound');await mode('audio-style','fm');await page.waitForTimeout(80);
    assert.equal(await page.evaluate(()=>speaker.muted),true,'Audio style must preserve mute');
    assert.equal(await page.evaluate(()=>speaker.gain.gain.value+speaker.fm.amp.gain.value),0);
    await page.click('#sound');await page.evaluate(()=>{game.iterator=window.audioTestIterator;});
    await page.locator('#game').screenshot({path:path.join(__dirname,'color-title.png')});
    await page.keyboard.press('Enter',{delay:120});await phase('difficulty');
    const menu=await page.evaluate(()=>{
      const data=canvas.getContext('2d').getImageData(0,0,320,200).data;
      let letters=0,minContrast=Infinity;
      for(let y=0;y<200;y++)for(let x=0;x<320;x++){
        const c=(ram[0xb8000+(y&1)*8192+(y>>1)*80+(x>>2)]>>(6-(x&3)*2))&3;
        if(c===2){letters++;const at=(y*320+x)*4;minContrast=Math.min(minContrast,
          Math.abs(data[at]-19)+Math.abs(data[at+1]-23)+Math.abs(data[at+2]-34));}
      }
      return {letters,minContrast};
    });
    assert(menu.letters>100,'The original skill menu must draw lettering');
    assert(menu.minContrast>200,'Every skill-menu letter must contrast with its background in color mode');
    await page.locator('#game').screenshot({path:path.join(__dirname,'color-skill.png')});
    await page.click('#menu-options button');await phase('ready');
    await page.keyboard.press('Enter',{delay:120});await phase('playing');
    await page.waitForTimeout(500);
    await page.locator('#game').screenshot({path:path.join(__dirname,'color-gameplay.png')});
    await page.evaluate(()=>game.suspend());
    const snapshot=()=>page.evaluate(async()=>{
      const hash=async data=>Array.from(new Uint8Array(await crypto.subtle.digest('SHA-256',data))).join(',');
      const pixels=canvas.getContext('2d').getImageData(0,0,320,200).data;
      const colors=new Set();for(let i=0;i<pixels.length;i+=4)colors.add(pixels[i]+','+pixels[i+1]+','+pixels[i+2]);
      return {ram:await hash(ram),registers:Array.from(words),pixels:await hash(pixels),
        colorCount:colors.size,phase:game.phase,frames:game.frames,x:alleyCat.state().x,y:alleyCat.state().y,
        size:[canvas.width,canvas.height,canvas.getBoundingClientRect().width,canvas.getBoundingClientRect().height]};
    });
    const color=await snapshot();assert(color.colorCount>24,'Color art must exceed a CGA palette');
    await mode('graphics','original');const original=await snapshot();
    assert(original.colorCount<=4);assert.notEqual(color.pixels,original.pixels);
    for(let i=0;i<10;i++) await mode('graphics',i%2?'original':'color');
    const roundtrip=await snapshot();assert.equal(roundtrip.pixels,original.pixels,'Original pixels must survive repeated switches exactly');
    for(const key of ['ram','registers','phase','frames','x','y','size'])assert.deepEqual(roundtrip[key],color[key],`Graphics switch must preserve ${key}`);
    await mode('audio-style','speaker');await mode('audio-style','fm');
    const audioSwitch=await snapshot();assert.equal(audioSwitch.ram,color.ram,'Audio switch must not write game RAM');
    // Exercise the original video-save and restore routines with a color layer.
    const restored=await page.evaluate(()=>{
      const regs=words.slice(),ds=0x1010,ofs=0x8000,addr=0xb8000;
      const priorData=ram.slice((ds<<4)+ofs,(ds<<4)+ofs+2),priorVideo=ram.slice(addr,addr+2);
      const previousColor=colorArt.layer.slice(addr*4,addr*4+8);
      const previousSave=colorArt.layer.slice(((ds<<4)+ofs)*4,((ds<<4)+ofs)*4+8);
      const expected=Array.from({length:8},(_,i)=>(0xff334455+i)>>>0);
      colorArt.layer.set(expected,addr*4);
      r.ds=0xb800;r.si=0;r.es=ds;r.di=ofs;r.cx=0x0101;
      for(const _ of sub_19ffa()){}
      colorArt.layer.fill(0,addr*4,addr*4+8);ram[addr]=ram[addr+1]=0;
      r.ds=ds;r.si=ofs;r.es=0xb800;r.di=0;r.cx=0x0101;
      for(const _ of sub_19fcd()){}
      const result={actual:Array.from(colorArt.layer.slice(addr*4,addr*4+8)),expected,
        video:Array.from(ram.slice(addr,addr+2)),expectedVideo:Array.from(priorVideo)};
      words.set(regs);ram.set(priorData,(ds<<4)+ofs);ram.set(priorVideo,addr);
      colorArt.layer.set(previousColor,addr*4);colorArt.layer.set(previousSave,((ds<<4)+ofs)*4);
      return result;
    });
    assert.deepEqual(restored.actual,restored.expected,'Native background saves must preserve color pixels');
    assert.deepEqual(restored.video,restored.expectedVideo,'Native background saves must preserve CGA pixels');
    await mode('graphics','color');await page.evaluate(()=>game.resume());
    const x=await page.evaluate(()=>alleyCat.state().x);
    await page.keyboard.down('ArrowRight');await page.waitForTimeout(400);await page.keyboard.up('ArrowRight');
    assert.notEqual(await page.evaluate(()=>alleyCat.state().x),x,'Movement must continue after switches');
    assert.equal(await page.evaluate(()=>alleyCat.state().error),null);
    assert.deepEqual(errors,[]);assert(requests.every(url=>url.startsWith('http://127.0.0.1:')));
    console.log('PASS: offline embedded generated art; '+color.colorCount+' gameplay colors; live switches preserve all RAM, registers, frame, position, phase and dimensions; exact CGA roundtrip; original background blitters retain color; real FM waveform; continued movement.');
  }finally {await browser.close();await new Promise(r=>server.close(r));}
})().catch(e=>{console.error(e);process.exitCode=1;});
