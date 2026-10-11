// Browser-local snapshots include the exact suspended native continuation.
const SAVE_VERSION=1;
const SAVE_LIMIT=11; // Latest save plus ten older checkpoints.
const GAME_FIELDS=['steps','phase','frames','timerOffset','paletteRegister','mode','row','col','retrace'];
const SPEAKER_FIELDS=['divisor','lowByte','control','gate','muted','style','events'];
function sparseLayer(layer) {
  let count=0;for(const value of layer)if(value)count++;
  const result=new Uint32Array(count*2);let at=0;
  for(let i=0;i<layer.length;i++)if(layer[i]){result[at++]=i;result[at++]=layer[i];}
  return result;
}
game.capture=function() {
  if(!this.iterator || this.error || !execution.frames.length || execution.restoring)
    throw new Error('Start a game before saving.');
  return {
    version:SAVE_VERSION,ram:ram.slice(),words:words.slice(),flags:{...flags},
    game:Object.fromEntries(GAME_FIELDS.map(key=>[key,this[key]])),elapsed:this.time(),
    execution:execution.frames.map(frame=>({...frame})),
    speaker:Object.fromEntries(SPEAKER_FIELDS.map(key=>[key,speaker[key]])),
    hd:hdArt.ready?hdArt.capture():null,
    art:{mode:colorArt.mode,layer:sparseLayer(colorArt.layer),writing:colorArt.writing,
      blits:colorArt.blits.map(blit=>({...blit,bytes:blit.bytes.slice()})),
      cheeseMask:colorArt.cheeseMask?.slice()||null,cheeseTable:colorArt.cheeseTable?.slice()||null}
  };
};
function validateSave(state) {
  const bad=()=>{throw new Error('This save is damaged or from an incompatible game version.');};
  if(!state || state.version!==SAVE_VERSION || !(state.ram instanceof Uint8Array) || state.ram.length!==ram.length ||
     !(state.words instanceof Uint16Array) || state.words.length!==words.length ||
     !Number.isFinite(state.elapsed) || state.elapsed<0 || !state.game || !state.flags || !state.speaker || !state.art)bad();
  if(!Array.isArray(state.execution) || !state.execution.length || state.execution.length>64)bad();
  for(const frame of state.execution) {
    const pcs=frame.name==='interrupt'?[0,1]:ROUTINE_PCS[frame.name];
    if(!pcs || !pcs.includes(frame.pc) || ![null,0,1].includes(frame.parked) || typeof frame.budget!=='boolean')bad();
  }
  for(let i=0;i<state.execution.length-1;i++){
    const frame=state.execution[i];
    if(ROUTINE_CALLS[frame.name]?.[frame.pc]!==state.execution[i+1].name)bad();
  }
  if(!Object.hasOwn(ROUTINES,state.execution[0].name) || state.execution.at(-1).parked===null)bad();
  if(!['booting','title','keyboard','difficulty','ready','playing','entering','paused'].includes(state.game.phase))bad();
  for(const key of GAME_FIELDS)if(key!=='phase' && !Number.isFinite(state.game[key]))bad();
  // The recovered C++ sometimes assigns bit values 0/1 to a Boolean flag.
  for(const key of ['carry','zero','direction','interrupts'])if(![true,false,0,1].includes(state.flags[key]))bad();
  if(!['fm','speaker','piano'].includes(state.speaker.style) || typeof state.speaker.muted!=='boolean' ||
     !['color','original','hd'].includes(state.art.mode) || !(state.art.layer instanceof Uint32Array) || state.art.layer.length%2 ||
     !Array.isArray(state.art.blits) || state.art.blits.length>64)bad();
  for(const key of ['divisor','control','gate','events'])if(!Number.isFinite(state.speaker[key]))bad();
  if(state.speaker.lowByte!==null && !Number.isFinite(state.speaker.lowByte))bad();
  if(typeof state.art.writing!=='boolean')bad();
  let previous=-1;
  for(let i=0;i<state.art.layer.length;i+=2){const index=state.art.layer[i];if(index<=previous || index>=colorArt.layer.length)bad();previous=index;}
  for(const blit of state.art.blits)if(!(blit.bytes instanceof Uint8Array) || !Number.isFinite(blit.width) || !Number.isFinite(blit.height))bad();
  if(state.art.cheeseMask!==null && (!(state.art.cheeseMask instanceof Uint8Array) || state.art.cheeseMask.length!==64000))bad();
  if(state.art.cheeseTable!==null && (!(state.art.cheeseTable instanceof Uint32Array) || state.art.cheeseTable.length!==256000))bad();
  if(state.hd){
    if(state.hd.pauseAt!==undefined && state.hd.pauseAt!==null && (!Number.isFinite(state.hd.pauseAt)||state.hd.pauseAt<0))bad();
    if(!(state.hd.provenance instanceof Uint32Array)||state.hd.provenance.length%2||!Array.isArray(state.hd.entities)||state.hd.entities.length>10000||
       !(state.hd.backgroundPixels instanceof Uint8Array)||state.hd.backgroundPixels.length!==64000||!(state.hd.staticMetal instanceof Uint8Array)||state.hd.staticMetal.length!==64000)bad();
    let last=-1;for(let i=0;i<state.hd.provenance.length;i+=2){const index=state.hd.provenance[i];if(index<=last||index>=hdArt.provenance.length)bad();last=index;}
    if(!Number.isSafeInteger(state.hd.nextId)||state.hd.nextId<1||!Number.isInteger(state.hd.scene)||state.hd.scene<-1||state.hd.scene>8)bad();
    const ids=new Set();
    for(const record of state.hd.entities){
      if(!record||!Number.isSafeInteger(record.id)||record.id<1||record.id>=state.hd.nextId||ids.has(record.id)||typeof record.kind!=='string')bad();
      ids.add(record.id);
      for(const key of ['room','x','y','width','height','source','at','fromX','fromY','facing'])if(!Number.isFinite(record[key]))bad();
      if(record.width<=0||record.width>64||record.height<=0||record.height>80)bad();
      if(record.artHeight!==undefined||record.artTop!==undefined){
        if(!Number.isInteger(record.artHeight)||record.artHeight<record.height||record.artHeight>80||
           !Number.isInteger(record.artTop)||record.artTop<0||record.artTop+record.height>record.artHeight)bad();
      }
    }
    for(let i=1;i<state.hd.provenance.length;i+=2)if(!ids.has(state.hd.provenance[i]))bad();
    if(state.hd.playerMotion)for(const key of ['room','x','y','fromX','fromY','at','facing'])if(!Number.isFinite(state.hd.playerMotion[key]))bad();
  }
}
game.restore=function(state) {
  validateSave(state); // Check before touching the running game.
  releaseKeys();speaker.quiet();
  ram.set(state.ram);words.set(state.words);Object.assign(flags,state.flags);
  Object.assign(this,state.game);this.error=null;
  this.origin=performance.now()-state.elapsed;this.suspendedTotal=0;this.suspendedAt=0;
  colorArt.layer.fill(0);
  for(let i=0;i<state.art.layer.length;i+=2)colorArt.layer[state.art.layer[i]]=state.art.layer[i+1];
  colorArt.mode=state.art.mode;colorArt.writing=state.art.writing;
  colorArt.blits=state.art.blits.map(blit=>({...blit,bytes:blit.bytes.slice()}));
  colorArt.cheeseMask=state.art.cheeseMask?.slice()||null;colorArt.cheeseTable=state.art.cheeseTable?.slice()||null;
  hdArt.restore(state.hd);
  Object.assign(speaker,state.speaker);speaker.wasActive=false;speaker.lastNote=0;
  execution.restore(state.execution);
  this.iterator=ROUTINES[state.execution[0].name]();
  // Rebuild and park the complete generator chain, without executing one
  // gameplay instruction or replaying a BIOS call from the saved frame.
  this.iterator.next();
  if(execution.restoring || execution.pending.length)throw new Error('Could not restore the saved continuation.');
  // Physical keys/gestures from the old session must never remain held.
  for(let slot=0;slot<22;slot++)memoryASet(0x1010,0x6b7+slot,0x80);
  refreshDirections();speaker.update();
};
const saveStore={
  db:null,opening:null,
  open() {
    if(this.opening)return this.opening;
    this.opening=new Promise((resolve,reject)=>{
      if(!window.indexedDB){reject(new Error('Browser storage is unavailable.'));return;}
      let request;
      try{request=indexedDB.open('alley-cat-saves',1);}
      catch {reject(new Error('Saving is unavailable here. Open the game in a regular browser tab.'));return;}
      request.onupgradeneeded=()=>request.result.createObjectStore('saves',{keyPath:'id',autoIncrement:true});
      request.onerror=()=>reject(new Error('Browser storage could not be opened.'));
      request.onblocked=()=>reject(new Error('Close other Alley Cat tabs and try again.'));
      request.onsuccess=()=>{this.db=request.result;resolve(this.db);};
    });
    return this.opening;
  },
  async list() {
    const db=await this.open();
    return new Promise((resolve,reject)=>{
      const transaction=db.transaction('saves','readonly'),store=transaction.objectStore('saves'),items=[];
      const request=store.openCursor(null,'prev');
      request.onsuccess=()=>{const cursor=request.result;if(cursor){const {id,created,room,lives,difficulty}=cursor.value;items.push({id,created,room,lives,difficulty});cursor.continue();}};
      transaction.oncomplete=()=>resolve(items);
      transaction.onabort=()=>reject(new Error('Could not read saved games.'));
    });
  },
  async save() {
    const snapshot=game.capture(),state=game.state(),db=await this.open();
    return new Promise((resolve,reject)=>{
      const transaction=db.transaction('saves','readwrite'),store=transaction.objectStore('saves');
      const request=store.add({created:Date.now(),room:state.room,lives:state.lives,difficulty:state.difficulty,snapshot});
      let id;
      request.onsuccess=()=>{
        id=request.result;
        const keys=store.getAllKeys();
        keys.onsuccess=()=>{for(const old of keys.result.slice(0,Math.max(0,keys.result.length-SAVE_LIMIT)))store.delete(old);};
      };
      transaction.oncomplete=()=>resolve(id);
      // Addition and pruning are one transaction: a full disk never deletes
      // older saves to make room for a save that has not succeeded.
      transaction.onabort=()=>reject(new Error('Save failed. Browser storage may be full or disabled; your older saves were kept.'));
    });
  },
  async read(id) {
    const db=await this.open();
    return new Promise((resolve,reject)=>{
      const transaction=db.transaction('saves','readonly'),store=transaction.objectStore('saves');
      let record;
      const request=id===undefined?store.openCursor(null,'prev'):store.get(id);
      request.onsuccess=()=>{record=id===undefined?request.result?.value:request.result;};
      transaction.oncomplete=()=>record?resolve(record):reject(new Error('No saved game was found.'));
      transaction.onabort=()=>reject(new Error('Could not load this saved game.'));
    });
  }
};
