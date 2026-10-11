// Browser hardware services for the ahead-of-time JavaScript game translation.
// No instruction decoder, DOSBox, WebAssembly, or external runtime is used.
const r = {};
const words = new Uint16Array(14);
for (const [i, name] of ['ax','bx','cx','dx','si','di','bp','sp','cs','ds','es','ss','tx'].entries()) {
  Object.defineProperty(r, name, {get:()=>words[i], set:v=>{words[i]=v;}});
  if (i < 4 || name === 'tx') {
    const prefix = name[0];
    Object.defineProperty(r, prefix+'l', {get:()=>words[i]&255, set:v=>{words[i]=(words[i]&0xff00)|(v&255);}});
    if (i < 4) Object.defineProperty(r, prefix+'h', {get:()=>words[i]>>>8, set:v=>{words[i]=(words[i]&255)|((v&255)<<8);}});
  }
}
const flags = {carry:false, zero:false, direction:false, interrupts:true};
const ram = new Uint8Array(0x100000);
class GameExit extends Error {}
const execution={
  frames:[],pending:[],restoring:false,
  reset() {this.frames=[];this.pending=[];this.restoring=false;},
  enter(name,pc=0) {
    const frame=this.pending.length?this.pending.shift():{name,pc,parked:null,budget:false};
    if(frame.name!==name)throw new Error('Save continuation does not match '+name);
    this.frames.push(frame);return frame;
  },
  leave(frame) {
    if(this.frames.at(-1)!==frame)throw new Error('Save continuation stack mismatch');
    this.frames.pop();
  },
  restore(frames) {this.reset();this.pending=frames.map(frame=>({...frame}));this.restoring=true;}
};
const game = {
  steps:0, phase:'idle', iterator:null, error:null, frames:0,
  origin:0, suspendedAt:0, suspendedTotal:0, timerOffset:0,
  paletteRegister:0x30, mode:4, row:0, col:0, retrace:0,
  time() { return (this.suspendedAt || performance.now())-this.origin-this.suspendedTotal; },
  reset() {
    execution.reset();
    releaseKeys();
    ram.fill(0); words.fill(0);
    colorArt.reset();
    hdArt.reset();
    ram.set(GAME_BYTES.subarray(512), 0x10000);
    this.steps=0; this.frames=0; this.error=null; this.phase='booting';
    this.origin=performance.now(); this.suspendedTotal=0; this.suspendedAt=0;
    this.timerOffset=0; this.paletteRegister=0x30; this.row=0; this.col=0;
    flags.carry=false; flags.zero=false; flags.direction=false;
    speaker.reset(); this.iterator=start();
  },
  suspend() { if(!this.suspendedAt) this.suspendedAt=performance.now(); speaker.quiet(); releaseKeys(); },
  resume() { if(this.suspendedAt) {this.suspendedTotal+=performance.now()-this.suspendedAt; this.suspendedAt=0;} speaker.update(); },
  pump() {
    if(!this.iterator || this.suspendedAt || this.error) return;
    const deadline=performance.now()+7;
    try {
      while (performance.now()<deadline) {
        const result=this.iterator.next();
        if(result.done) { this.iterator=null; this.phase='ended'; speaker.quiet(); break; }
        if(result.value===1) break;
      }
      this.frames++;
    } catch(error) {
      if(error instanceof GameExit) {this.iterator=null;this.phase='ended';speaker.quiet();return;}
      this.error=error; this.phase='error'; speaker.quiet(); console.error(error);
    }
  },
  state() {
    return {phase:this.phase, error:this.error?.message || null, frames:this.frames,
      room:memoryAGet16(0x1010,4), difficulty:memoryAGet16(0x1010,0x6df8),
      x:memoryAGet16(0x1010,0x579), y:memoryAGet(0x1010,0x57b),
      lives:memoryAGet(0x1010,0x1f80), sound:memoryAGet(0x1010,0)!==0,
      speakerEvents:speaker.events, frequency:speaker.frequency,
      graphics:colorArt.mode, audio:speaker.style};
  }
};
function memoryAGet(seg, ofs) {
  const addr=((seg<<4)+(ofs&65535))&0xfffff;
  if (addr===0xffffe) return 0xfc;
  if (addr>=0xffa6e && addr<0xffa6e+2048) return ROM_FONT[addr-0xffa6e];
  if (addr===0x410) return 0x26;
  if (addr===0x412 || addr===0x413) return 0;
  return ram[addr];
}
function memoryAGet16(seg,ofs) {return memoryAGet(seg,ofs)|(memoryAGet(seg,(ofs+1)&65535)<<8);}
function memoryASet(seg,ofs,value) {
  const addr=((seg<<4)+(ofs&65535))&0xfffff;
  ram[addr]=value;
  // Pixel provenance follows video background saves in ordinary game RAM.
  if(colorArt.writing) return;
  colorArt.layer.fill(0,addr*4,addr*4+4);
  hdArt.provenance.fill(0,addr*4,addr*4+4);
}
function memoryASet16(seg,ofs,value) {memoryASet(seg,ofs,value); memoryASet(seg,(ofs+1)&65535,value>>8);}
function push(value) { r.sp-=2; memoryASet16(r.ss,r.sp,value); }
function pop() {const value=memoryAGet16(r.ss,r.sp); r.sp+=2; return value;}
function assert(ok) {if(!ok) throw new Error('Recovered routine stack assertion failed');}
// The only recovered stop is the original far return to DOS on Ctrl-Y.
function stop(message) {throw new GameExit(message || 'Original game exit');}
function lodsb() {r.al=memoryAGet(r.ds,r.si); r.si+=flags.direction?-1:1;}
function lodsw() {r.ax=memoryAGet16(r.ds,r.si); r.si+=flags.direction?-2:2;}
function stosw() {memoryASet16(r.es,r.di,r.ax); r.di+=flags.direction?-2:2;}
function copyByte(ds,di,ss,si) {
  const dest=((ds<<4)+(di&65535))&0xfffff, src=((ss<<4)+(si&65535))&0xfffff;
  if(dest===src) return;
  memoryASet(ds,di,memoryAGet(ss,si));
  colorArt.layer.copyWithin(dest*4,src*4,src*4+4);
  hdArt.provenance.copyWithin(dest*4,src*4,src*4+4);
}
function rep_movsb() {while(r.cx) {copyByte(r.es,r.di,r.ds,r.si); r.si+=flags.direction?-1:1; r.di+=flags.direction?-1:1; r.cx--;}}
function rep_movsw() {while(r.cx) {copyByte(r.es,r.di,r.ds,r.si);copyByte(r.es,r.di+1,r.ds,r.si+1); r.si+=flags.direction?-2:2; r.di+=flags.direction?-2:2; r.cx--;}}
function rep_stosb() {while(r.cx) {memoryASet(r.es,r.di,r.al); r.di+=flags.direction?-1:1; r.cx--;}}
function rep_stosw() {while(r.cx) {stosw(); r.cx--;}}
function mul8(value) {r.ax=r.al*value; flags.carry=r.ah!==0;}
function aaa() {if((r.al&15)>9) {r.ax+=0x106; flags.carry=true;} else flags.carry=false; r.al&=15;}
function rcl(value,count) {while(count--) {const carry=(value>>7)&1; value=((value<<1)|Number(flags.carry))&255; flags.carry=!!carry;} return value;}
function rcr(value,count) {while(count--) {const carry=value&1; value=(value>>1)|(Number(flags.carry)<<7); flags.carry=!!carry;} return value;}
function rcr16(value,count) {while(count--) {const carry=value&1; value=(value>>>1)|(Number(flags.carry)<<15); flags.carry=!!carry;} return value;}

// Recreate the game's PIT channel 2 divisor and speaker gate through Web Audio.
const speaker = {
  context:null, oscillator:null, gain:null, analyser:null, divisor:0, lowByte:null,
  control:0, gate:0, muted:false, frequency:0, events:0, style:'speaker',
  fm:null, lastNote:0, wasActive:false,
  async enable() {
    if (!this.context) {
      const Audio=window.AudioContext || window.webkitAudioContext;
      if(!Audio) return;
      this.context=new Audio(); this.oscillator=this.context.createOscillator();
      this.oscillator.type='square'; this.gain=this.context.createGain(); this.gain.gain.value=0;
      this.analyser=this.context.createAnalyser(); this.oscillator.connect(this.gain);
      this.gain.connect(this.analyser); this.analyser.connect(this.context.destination);
      this.oscillator.start();
      // Two operators: a sine modulator changes the carrier frequency. The
      // envelope changes modulation depth, like a classic OPL instrument.
      const carrier=this.context.createOscillator(),modulator=this.context.createOscillator();
      const depth=this.context.createGain(),amp=this.context.createGain();
      const filter=this.context.createBiquadFilter();filter.type='lowpass';filter.frequency.value=11000;
      carrier.type=modulator.type='sine';amp.gain.value=0;depth.gain.value=0;
      modulator.connect(depth);depth.connect(carrier.frequency);
      carrier.connect(amp);amp.connect(filter);filter.connect(this.analyser);
      carrier.start();modulator.start();this.fm={carrier,modulator,depth,amp,filter,notes:0};
    }
    await this.context.resume();
    if(this.style==='piano')await piano.enable(this.context,this.analyser);
    this.update();
  },
  reset() {this.gate=0; this.divisor=0; this.lowByte=null; this.frequency=0; this.events=0; this.quiet();},
  quiet() {
    piano.quiet();
    if(this.gain)this.gain.gain.setValueAtTime(0,this.context.currentTime);
    if(this.fm){this.fm.amp.gain.cancelScheduledValues(this.context.currentTime);this.fm.amp.gain.setValueAtTime(0,this.context.currentTime);}
    this.wasActive=false;
  },
  setStyle(style) {
    if(!['fm','speaker','piano'].includes(style))return;
    this.quiet();this.style=style;this.update();
  },
  update() {
    this.frequency=1193182/(this.divisor || 65536);
    if(!this.context) return;
    const at=this.context.currentTime;
    this.oscillator.frequency.setValueAtTime(Math.min(this.frequency,this.context.sampleRate/2-1),at);
    const active=!this.muted && !game.suspendedAt && (this.gate&3)===3;
    const music=game.phase==='title'||game.phase==='entering';
    const pianoActive=active&&this.style==='piano'&&music;
    piano.update(pianoActive,this.frequency,this.divisor);
    this.gain.gain.setValueAtTime(active && (this.style==='speaker'||this.style==='piano'&&!music)?0.075:0,at);
    const fmActive=active&&this.style==='fm',fm=this.fm;
    if(fmActive && (!this.wasActive||this.lastNote!==this.divisor)) {
      const f=Math.max(20,Math.min(this.frequency,this.context.sampleRate/8));
      fm.carrier.frequency.setValueAtTime(f,at);
      fm.modulator.frequency.setValueAtTime(f*(music?2:1),at);
      for(const param of [fm.depth.gain,fm.amp.gain]) {
        if(param.cancelAndHoldAtTime)param.cancelAndHoldAtTime(at);
        else {param.cancelScheduledValues(at);param.setValueAtTime(param.value,at);}
      }
      fm.depth.gain.setValueAtTime(f*(music?2.2:1.5),at);
      fm.depth.gain.exponentialRampToValueAtTime(f*(music?.35:.2),at+.16);
      fm.amp.gain.linearRampToValueAtTime(music?.115:.095,at+.004);
      fm.amp.gain.exponentialRampToValueAtTime(music?.060:.040,at+.12);
      fm.notes++;
    } else if(!fmActive && this.wasActive) {
      fm.amp.gain.cancelScheduledValues(at);
      fm.amp.gain.setTargetAtTime(0,at,.006);
    }
    this.wasActive=fmActive;this.lastNote=this.divisor;
  }
};
function out(port,value) {
  value&=255;
  if(port===0x3d9) game.paletteRegister=value;
  else if(port===0x43 && (value>>6)===2) {speaker.control=value; speaker.lowByte=null;}
  else if(port===0x42) {
    if(speaker.lowByte===null) speaker.lowByte=value;
    else {speaker.divisor=speaker.lowByte|(value<<8); speaker.lowByte=null; speaker.events++; speaker.update();}
  } else if(port===0x61) {speaker.gate=value; speaker.events++; speaker.update();}
}
function portRead(port) {
  if(port===0x61) return speaker.gate;
  if(port===0x3da) return (++game.retrace&1)?9:0;
  if(port===0x201) return 0xff; // No hardware joystick; use original keyboard mode.
  if(port===0x40) return (0xffff-Math.floor(game.time()*1193.182))&255;
  return 0;
}
function* interrupt(number) {
  const frame=execution.enter('interrupt');
  try {
  if(frame.pc===1) {
    if(execution.restoring && !execution.pending.length) {execution.restoring=false;yield frame.parked;}
    frame.parked=null;return;
  }
  if(number===0x1a) {
    if(r.ah===0) {
      const tick=(Math.floor(game.time()*1193182/65536000)+game.timerOffset)>>>0;
      r.cx=tick>>>16; r.dx=tick; r.al=0;
    } else if(r.ah===1) {
      game.timerOffset=((r.cx<<16)|r.dx)-Math.floor(game.time()*1193182/65536000);
    } else throw new Error('Unsupported clock function '+r.ah);
    frame.pc=1;frame.parked=0;yield 0;frame.parked=null;return;
  }
  if(number===0x11) {r.ax=0x26; return;}
  if(number===0x10) {
    switch(r.ah) {
      case 0: game.mode=r.al; game.row=game.col=0; ram.fill(0,0xb8000,0xbc000);colorArt.layer.fill(0,0xb8000*4,0xbc000*4);hdArt.provenance.fill(0,0xb8000*4,0xbc000*4); return;
      case 2: game.row=r.dh; game.col=r.dl; return;
      case 0x0b:
        if(r.bh===0) game.paletteRegister=(game.paletteRegister&0x20)|(r.bl&31);
        else game.paletteRegister=(game.paletteRegister&31)|((r.bl&1)<<5);
        return;
      case 0x0e: teletype(r.al,r.bl&3); return;
      case 0x0f: r.ax=0x2804; r.bh=0; return;
      default: throw new Error('Unsupported video function '+r.ah);
    }
  }
  throw new Error('Unsupported BIOS function '+number.toString(16));
  } finally {execution.leave(frame);}
}
function teletype(char,color) {
  if(char===13) {game.col=0; return;}
  if(char===10) {game.row++; if(game.row>24) scrollText(); return;}
  if(char===8) {game.col=Math.max(0,game.col-1); return;}
  if(char<32) return;
  for(let y=0;y<8;y++) {
    const bits=ROM_FONT[char*8+y];
    for(let x=0;x<8;x++) pixel(game.col*8+x,game.row*8+y,(bits&(128>>x))?color:0);
  }
  if(++game.col>=40) {game.col=0; if(++game.row>24) scrollText();}
}
function scrollText() {
  for(let y=0;y<192;y++) for(let x=0;x<80;x++) ram[0xb8000+(y&1)*8192+(y>>1)*80+x]=ram[0xb8000+(y&1)*8192+((y+8)>>1)*80+x];
  for(let y=192;y<200;y++) ram.fill(0,0xb8000+(y&1)*8192+(y>>1)*80,0xb8000+(y&1)*8192+(y>>1)*80+80);
  game.row=24;
}
function pixel(x,y,color) {
  if(x<0||x>=320||y<0||y>=200) return;
  const addr=0xb8000+(y&1)*8192+(y>>1)*80+(x>>2), shift=6-((x&3)<<1);
  ram[addr]=(ram[addr]&~(3<<shift))|((color&3)<<shift);
  colorArt.layer[addr*4+(x&3)]=0;
}
const RGBI = ['000000','0000aa','00aa00','00aaaa','aa0000','aa00aa','aa5500','aaaaaa','555555','5555ff','55ff55','55ffff','ff5555','ff55ff','ffff55','ffffff'].map(h=>[parseInt(h.slice(0,2),16),parseInt(h.slice(2,4),16),parseInt(h.slice(4,6),16)]);
function render(context,image) {
  if(colorArt.mode==='color') {colorArt.render(context,image);return;}
  const p=game.paletteRegister, bright=(p&16)?8:0;
  const indices=[p&15,(p&32)?3:2,(p&32)?5:4,(p&32)?7:6];
  const colors=indices.map((c,i)=>RGBI[i?c+bright:c]);
  for(let y=0;y<200;y++) for(let x=0;x<320;x++) {
    const byte=ram[0xb8000+(y&1)*8192+(y>>1)*80+(x>>2)];
    const color=colors[(byte>>(6-((x&3)<<1)))&3], at=(y*320+x)*4;
    image.data[at]=color[0]; image.data[at+1]=color[1]; image.data[at+2]=color[2]; image.data[at+3]=255;
  }
  context.putImageData(image,0,0);
}
const keySlots = {AltLeft:0,AltRight:0,Space:0,ArrowUp:1,ArrowRight:2,ArrowDown:3,ArrowLeft:4,
  PageUp:5,Numpad9:5,PageDown:6,Numpad3:6,End:7,Numpad1:7,Home:8,Numpad7:8,
  Escape:9,KeyY:10,KeyN:11,KeyK:12,KeyH:13,KeyT:14,KeyA:15,KeyS:16,KeyR:17,
  ControlLeft:18,ControlRight:18,Delete:19,NumpadDecimal:19,KeyM:20,Digit9:21};
const pressed=new Set();
const inputSources=new Map();
function setKey(code,down,source='keyboard') {
  const slot=keySlots[code];
  if(down) {
    let sources=inputSources.get(code);
    if(!sources) {sources=new Set();inputSources.set(code,sources);}
    if(sources.has(source)) return;
    sources.add(source);
    if(!pressed.has(code)) {
      pressed.add(code);
      memoryASet16(0x1010,0x693,memoryAGet16(0x1010,0x693)+1);
    }
  } else {
    const sources=inputSources.get(code);
    if(sources) {sources.delete(source);if(!sources.size){inputSources.delete(code);pressed.delete(code);}}
  }
  if(slot!==undefined) memoryASet(0x1010,0x6b7+slot,
    [...pressed].some(k=>keySlots[k]===slot)?0:0x80);
  if(slot!==undefined && slot<=8) refreshDirections();
}
function refreshDirections() {
  if(game.phase!=='playing'||memoryAGet(0x1010,0x69b)!==0)return;
  const down=slot=>(memoryAGet(0x1010,0x6b7+slot)&128)===0;
  // Match the original keyboard decoder, including its diagonal keys and
  // negative-axis precedence. Apply event state now, rather than waiting for
  // the DOS hardware's two-tick (~110 ms) keyboard polling interval.
  const horizontal=down(4)||down(7)||down(8)?255:down(2)||down(5)||down(6)?1:0;
  const vertical=down(1)||down(5)||down(8)?255:down(3)||down(6)||down(7)?1:0;
  memoryASet(0x1010,0x698,horizontal);memoryASet(0x1010,0x699,vertical);
  memoryASet(0x1010,0x69a,memoryAGet(0x1010,0x6b7)>>3);
}
function releaseKeys() {
  for(const code of pressed) {const slot=keySlots[code];if(slot!==undefined)memoryASet(0x1010,0x6b7+slot,0x80);}
  inputSources.clear();pressed.clear();
  refreshDirections();
}
let tapSequence=0;
function tap(code) {
  const source='tap-'+(++tapSequence), alreadyDown=pressed.has(code);
  setKey(code,true,source);
  // Distinct screen taps are distinct make events, even when the previous
  // synthetic press is still waiting for its release timer.
  if(alreadyDown) memoryASet16(0x1010,0x693,memoryAGet16(0x1010,0x693)+1);
  setTimeout(()=>setKey(code,false,source),140);
}
window.alleyCat={game,speaker,state:()=>game.state(),tap,setKey};
