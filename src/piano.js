// Real Yamaha C5 samples (Alexander Holm, Salamander Grand Piano, CC BY 3.0).
// Only timbre changes: the recovered PIT frequency, gate and melody remain.
const piano={
  context:null,buffers:[],loading:null,voices:[],tails:[],active:false,lastDivisor:0,notes:0,
  async enable(context,destination){
    if(this.loading)return this.loading;
    this.context=context;this.destination=destination;
    this.loading=Promise.all(Object.entries(PIANO_ASSETS).map(async([note,encoded])=>{
      const bytes=Uint8Array.from(atob(encoded),character=>character.charCodeAt(0));
      const buffer=await context.decodeAudioData(bytes.buffer);
      const midi=(Number(note.slice(1))+1)*12+(note[0]==='A'?9:0);
      this.buffers.push({buffer,frequency:440*Math.pow(2,(midi-69)/12)});
    }));return this.loading;
  },
  quiet(){
    if(!this.context)return;
    const now=this.context.currentTime;
    for(const voice of [...this.voices,...this.tails]){voice.gain.gain.cancelScheduledValues(now);voice.gain.gain.setValueAtTime(0,now);try{voice.source.stop(now);}catch{}}
    this.voices=[];this.tails=[];this.active=false;
  },
  release(){
    if(!this.context)return;
    const now=this.context.currentTime;
    for(const voice of this.voices){voice.gain.gain.cancelScheduledValues(now);voice.gain.gain.setTargetAtTime(0,now,.025);try{voice.source.stop(now+.2);}catch{}this.tails.push(voice);}
    while(this.tails.length>24){const voice=this.tails.shift();voice.gain.gain.setValueAtTime(0,now);try{voice.source.stop(now);}catch{}}
    this.voices=[];this.active=false;
  },
  update(active,frequency,divisor){
    if(!this.buffers.length)return;
    if(!active){if(this.active)this.release();return;}
    if(this.active&&this.lastDivisor===divisor)return;
    this.release();const context=this.context,at=context.currentTime;
    const sample=this.buffers.reduce((best,current)=>Math.abs(Math.log2(current.frequency/frequency))<Math.abs(Math.log2(best.frequency/frequency))?current:best);
    const source=context.createBufferSource(),gain=context.createGain();source.buffer=sample.buffer;
    source.playbackRate.value=frequency/sample.frequency;
    gain.gain.setValueAtTime(0,at);gain.gain.linearRampToValueAtTime(.42,at+.003);
    source.connect(gain);gain.connect(this.destination);source.start(at);
    const voice={source,gain};source.onended=()=>{this.tails=this.tails.filter(item=>item!==voice);};
    this.voices=[voice];this.notes++;this.lastDivisor=divisor;this.active=true;
  }
};
