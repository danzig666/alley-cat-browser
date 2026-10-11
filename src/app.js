const canvas=document.querySelector('#game');
const context=canvas.getContext('2d',{alpha:false});
const image=context.createImageData(320,200);
const $=id=>document.getElementById(id);
let started=false, raf=0;
const cats=[['Kitten','Easy','KeyK'],['House Cat','Normal','KeyH'],['Tomcat','Hard','KeyT'],['Alley Cat','Expert','KeyA']];
let chosenCat=null,menuInputPhase='',menuView='';
function resetMenuFlow(){chosenCat=null;menuInputPhase='';menuView='';}
function chooseCat(key){
  if(chosenCat||!['title','difficulty'].includes(game.phase))return;
  chosenCat=key;speaker.enable().catch(()=>{});focusGame();updateUI();
}
function advanceMenus(){
  if(game.suspendedAt)return;
  const phase=game.phase;
  if(phase==='playing'){chosenCat=null;menuInputPhase='';return;}
  if(phase===menuInputPhase)return;
  let key=null;
  if(phase==='title'&&chosenCat)key='Enter';
  if(phase==='difficulty'&&chosenCat)key=chosenCat;
  if(phase==='keyboard')key='KeyN';
  // Wait until the original routine has captured its key counter. Sending
  // Enter before this point would be swallowed by its initialization.
  if(phase==='ready'&&execution.frames.some(frame=>frame.name==='sub_1d1c7'&&frame.parked===1))key='Enter';
  if(key){menuInputPhase=phase;tap(key);}
}
function focusGame() {canvas.focus({preventScroll:true});}
function chord(code) {
  setKey('ControlLeft',true); setKey(code,true);
  setTimeout(()=>{setKey(code,false);setKey('ControlLeft',false);},140);
}
const phaseInfo={title:['CHOOSE YOUR CAT','Choose a cat on the game screen to start.'],keyboard:['STARTING','Getting the keyboard and touch controls ready.'],difficulty:['CHOOSE YOUR CAT','Choose a cat on the game screen to start.'],ready:['READY TO ROAM','Heading into the alley…'],playing:['IN THE ALLEY','Arrows / WASD · Space jump · Q/E diagonal jump · F action'],entering:['ENTERING THE WINDOW','A new adventure awaits.'],paused:['PAWS MODE','Resume when you’re ready.'],booting:['STARTING',''],error:['GAME STOPPED','Restart to try again.'],ended:['SESSION ENDED','Restart to play again.']};
function updateUI() {
  const phase=game.phase;
  updateSaveButtons();
  $('status').textContent=phase==='playing' && memoryAGet16(0x1010,4)!==0 ? 'ROOM CHALLENGE' : phaseInfo[phase]?.[0] || 'ALLEY CAT';
  $('hint').textContent=phaseInfo[phase]?.[1] || 'Keyboard & touch controls';
  if(phase==='playing'&&memoryAGet(0x1010,0x55c)>=1){
    $('status').textContent='HANGING';
    $('hint').textContent='Hanging: Left / Right to move · Space / Q / E to jump · Down / S to drop · Swipe in the same directions';
  }
  if(phase==='playing'&&memoryAGet16(0x1010,4)===0){
    const opening=memoryAGet(0x1010,0x1665);
    if(opening>=5&&opening<25){
      $('status').textContent='WINDOW OPEN';
      $('hint').textContent+=' · Drop into the dark window from the line above.';
    }else if(memoryAGet(0x1010,0x57b)>96){
      $('hint').textContent+=' · Climb above the fence to reach opening windows.';
    }
  }
  $('pause').textContent=phase==='paused'?'Resume':'Pause';
  $('sound').textContent=speaker.muted || !memoryAGet(0x1010,0)?'Sound off':'Sound on';
  if(game.error) {
    $('error').hidden=false;
    $('error').textContent='The game stopped: '+game.error.message+'. Press Restart to begin a new session.';
  }
  $('screen').dataset.graphics=colorArt.mode;
  const view=phase+'/'+(chosenCat||'');
  if(view===menuView)return;
  menuView=view;
  $('menu').hidden=!['title','keyboard','difficulty','ready','paused'].includes(phase);
  $('menu').dataset.phase=phase;
  $('menu-heading').textContent=phase==='paused'?'Paws for a moment':chosenCat||phase==='ready'||phase==='keyboard'?'Here we go…':'Choose your cat';
  $('menu-hint').textContent=phase==='paused'?'Your adventure is waiting.':chosenCat||phase==='ready'||phase==='keyboard'?'Heading into the alley…':'Choose a difficulty to start.';
  const options=phase==='paused'?[['Resume','', 'Enter']]:cats;
  $('menu-options').replaceChildren(...options.map(([label,level,key])=>{
    const button=document.createElement('button');button.type='button';button.dataset.cat=key;
    button.textContent=label;
    if(level){const detail=document.createElement('span');detail.textContent=level;button.append(detail);}
    button.disabled=!!chosenCat||phase==='ready'||phase==='keyboard';
    button.addEventListener('click',()=>{
      if(game.phase==='paused'){speaker.enable().catch(()=>{});tap('Enter');focusGame();}
      else chooseCat(key);
    });return button;
  }));
  sizeFullscreen();
}
function frame() {
  if(started) {game.pump();advanceMenus();present();updateUI();}
  raf=requestAnimationFrame(frame);
}
function present(){render(context,image);hdArt.update();hdArt.render();}
$('start').addEventListener('click',()=>{
  try {
    resetMenuFlow();keyboardBindings.clear();game.reset(); started=true;
    speaker.enable().catch(()=>{$('hint').textContent='Sound unavailable. You can still play.';});
    $('cover').hidden=true;
    for(const id of ['sound','pause','restart']) $(id).disabled=false;
    focusGame();
  } catch(error) {
    started=false;
    $('preview-help').hidden=false;
    $('preview-help').textContent='The game could not start: '+error.message+'. Try opening the downloaded file in an up-to-date browser.';
  }
});
$('restart').addEventListener('click',()=>{
  if(game.error || !game.iterator || ['title','keyboard','difficulty','ready'].includes(game.phase)) {
    resetMenuFlow();keyboardBindings.clear();releaseKeys(); game.reset(); $('error').hidden=true;
  } else chord('KeyR');
  focusGame();
});
$('pause').addEventListener('click',()=>{tap(game.phase==='paused'?'Enter':'Escape');focusGame();});
$('sound').addEventListener('click',()=>{
  if(!memoryAGet(0x1010,0)) {speaker.muted=false; chord('KeyS');}
  else speaker.muted=!speaker.muted;
  speaker.enable(); focusGame();
});
function updateStyleButtons() {
  $('screen').dataset.graphics=colorArt.mode;
  const color=colorArt.mode==='color',fm=speaker.style==='fm';
  $('graphics').dataset.mode=colorArt.mode;$('graphics').setAttribute('aria-pressed',String(color));
  $('graphics').querySelector('.toggle-value').textContent=color?'Pixel art ⇄ CGA':colorArt.mode==='hd'?'HD → Original CGA':'CGA ⇄ Pixel art';
  $('graphics').setAttribute('aria-label',color?'Pixel art graphics; switch to CGA':colorArt.mode==='hd'?'HD graphics; switch to original CGA':'CGA graphics; switch to pixel art');
  $('audio-style').dataset.mode=speaker.style;$('audio-style').setAttribute('aria-pressed',String(fm));
  $('audio-style').querySelector('.toggle-value').textContent=fm?'AdLib ⇄ PC speaker':speaker.style==='piano'?'Piano → PC speaker':'PC speaker ⇄ AdLib';
  $('audio-style').setAttribute('aria-label',fm?'AdLib-style music and effects; switch to original PC speaker':speaker.style==='piano'?'Piano music and effects; switch to original PC speaker':'Original PC speaker music and effects; switch to AdLib-style FM');
  $('hd-style').setAttribute('aria-pressed',String(colorArt.mode==='hd'));
  $('piano-style').setAttribute('aria-pressed',String(speaker.style==='piano'));
}
$('graphics').addEventListener('click',()=>{
  colorArt.mode=colorArt.mode==='hd'?'original':colorArt.mode==='color'?'original':'color';
  $('art-badge').innerHTML='<i></i> '+(colorArt.mode==='color'?'COLOR PIXEL ART':'ORIGINAL CGA GRAPHICS');
  updateStyleButtons();
  if(started)present();
  focusGame();
});
$('audio-style').addEventListener('click',()=>{
  speaker.setStyle(speaker.style==='speaker'?'fm':'speaker');updateStyleButtons();speaker.enable().catch(()=>{});focusGame();
});
let previousRaster='original',previousSynth='speaker';
$('hd-style').addEventListener('click',()=>{
  if(!hdArt.ready)return;
  if(colorArt.mode==='hd')colorArt.mode=previousRaster;
  else{previousRaster=colorArt.mode;colorArt.mode='hd';}
  $('art-badge').innerHTML='<i></i> '+(colorArt.mode==='hd'?'HAND-DRAWN HD':colorArt.mode==='color'?'COLOR PIXEL ART':'ORIGINAL CGA GRAPHICS');
  updateStyleButtons();if(started)present();focusGame();
});
$('piano-style').addEventListener('click',()=>{
  if(speaker.style==='piano')speaker.setStyle(previousSynth);
  else{previousSynth=speaker.style;speaker.setStyle('piano');}
  updateStyleButtons();speaker.enable().catch(()=>{$('hint').textContent='Piano unavailable; choose PC speaker or AdLib.';});focusGame();
});
function isFullscreen() {return document.fullscreenElement===$('arcade') || $('arcade').classList.contains('is-expanded');}
function sizeFullscreen() {
  const active=isFullscreen();
  $('fullscreen').textContent=active?'Exit fullscreen':'Fullscreen';
  const arcade=$('arcade'),style=getComputedStyle(arcade);
  const availableWidth=arcade.clientWidth-(parseFloat(style.paddingLeft)||0)-(parseFloat(style.paddingRight)||0);
  const availableHeight=arcade.clientHeight-(parseFloat(style.paddingTop)||0)-(parseFloat(style.paddingBottom)||0);
  const panel=Math.min(320,Math.max(240,availableWidth*.22)),gap=8;
  const beside=Math.min(Math.max(0,availableWidth-panel-gap),availableHeight*4/3);
  const below=Math.min(availableWidth,Math.max(0,availableHeight-Math.min(240,Math.max(160,availableHeight*.28))-gap)*4/3);
  const side=availableWidth>=600 && beside>=below;
  arcade.classList.toggle('side-layout',side);
  arcade.style.setProperty('--sidebar-width',panel+'px');
  const width=side?beside:below;
  arcade.style.setProperty('--picture-height',(width*3/4)+'px');
  $('screen').style.setProperty('--game-width',width+'px');
  $('screen').style.setProperty('--game-height',(width*3/4)+'px');
}
function expandView() { $('arcade').classList.add('is-expanded');document.body.classList.add('game-expanded');sizeFullscreen(); }
$('fullscreen').addEventListener('click',async()=>{
  if(isFullscreen()) {
    if(document.fullscreenElement) await document.exitFullscreen();
    $('arcade').classList.remove('is-expanded');document.body.classList.remove('game-expanded');
  } else if($('arcade').requestFullscreen) {
    try {await $('arcade').requestFullscreen();} catch {expandView();}
  } else expandView();
  sizeFullscreen();focusGame();
});
document.addEventListener('fullscreenchange',sizeFullscreen);
window.addEventListener('resize',sizeFullscreen);
if(window.visualViewport) visualViewport.addEventListener('resize',sizeFullscreen);
if(window.ResizeObserver) new ResizeObserver(sizeFullscreen).observe($('arcade'));
const keyboardBindings=new Map();
let saveBusy=false,saveItems=[];
function updateSaveButtons() {
  $('save-game').disabled=saveBusy || !started || !game.iterator || !!game.error;
  $('load-game').disabled=saveBusy || !saveItems.length || !window.alleyCatPageReady;
  for(const button of $('save-list').querySelectorAll('button'))button.disabled=saveBusy || !window.alleyCatPageReady;
}
async function refreshSaves() {
  saveItems=await saveStore.list();$('save-count').textContent='('+saveItems.length+')';
  $('save-list').replaceChildren(...saveItems.map((item,index)=>{
    const li=document.createElement('li'),button=document.createElement('button'),small=document.createElement('small');
    button.textContent=(index===0?'Latest · ':'')+new Date(item.created).toLocaleString();
    small.textContent=(item.room?'Room '+item.room:'Alley')+' · '+item.lives+' lives';button.append(small);
    button.addEventListener('click',()=>loadSavedGame(item.id));li.append(button);return li;
  }));updateSaveButtons();
}
async function saveGame() {
  if(saveBusy)return;saveBusy=true;updateSaveButtons();
  try {
    const id=await saveStore.save();await refreshSaves();
    $('save-status').textContent='Saved. Latest + '+Math.max(0,saveItems.length-1)+' older saves available.';return id;
  } catch(error) {$('save-status').textContent=error.message;return null;}
  finally {saveBusy=false;updateSaveButtons();focusGame();}
}
async function loadSavedGame(id) {
  if(saveBusy)return;saveBusy=true;updateSaveButtons();
  try {
    const record=await saveStore.read(id);
    game.restore(record.snapshot);
    resetMenuFlow();keyboardBindings.clear();swipe=null;swipeActions.clear();started=true;
    $('cover').hidden=true;$('error').hidden=true;
    for(const button of ['sound','pause','restart'])$(button).disabled=false;
    updateStyleButtons();$('art-badge').innerHTML='<i></i> '+(colorArt.mode==='hd'?'HAND-DRAWN HD':colorArt.mode==='color'?'COLOR PIXEL ART':'ORIGINAL CGA GRAPHICS');
    present();updateUI();
    speaker.enable().catch(()=>{});
    $('save-status').textContent='Loaded '+new Date(record.created).toLocaleString()+'.';return record.id;
  } catch(error) {$('save-status').textContent=error.message;return null;}
  finally {saveBusy=false;updateSaveButtons();focusGame();}
}
$('save-game').addEventListener('click',saveGame);
$('load-game').addEventListener('click',()=>loadSavedGame());
Object.assign(window.alleyCat,{save:saveGame,load:loadSavedGame,saves:saveStore});
refreshSaves().catch(error=>{$('save-status').textContent=error.message;});
const playKeys={KeyW:['ArrowUp'],KeyA:['ArrowLeft'],KeyS:['ArrowDown'],KeyD:['ArrowRight'],
  Space:['ArrowUp'],KeyQ:['Home'],KeyE:['PageUp'],KeyZ:['End'],KeyC:['PageDown'],KeyF:['AltLeft']};
document.addEventListener('keydown',event=>{
  if(event.code==='F6'||event.code==='F7') {
    event.preventDefault();if(event.repeat)return;
    if(event.code==='F6'){if(!$('save-game').disabled)saveGame();}
    else if(!$('load-game').disabled)loadSavedGame();return;
  }
  if(!started || event.code==='Tab' || event.metaKey || event.code==='F5' || event.code==='F12') return;
  if(!event.ctrlKey&&['title','difficulty'].includes(game.phase)&&cats.some(cat=>cat[2]===event.code)){
    event.preventDefault();if(!event.repeat)chooseCat(event.code);return;
  }
  if(event.target.closest('select,input')) return;
  if(event.target.closest('button') && (event.code==='Space' || event.code==='Enter')) return;
  if(event.ctrlKey && !['KeyS','KeyR','KeyM','KeyY','Digit9','ControlLeft','ControlRight'].includes(event.code)) return;
  const keys=keyboardBindings.get(event.code)||
    (game.phase==='playing'&&!event.ctrlKey?playKeys[event.code]:null)||[event.code];
  if(keys.some(key=>keySlots[key]!==undefined)||event.code==='Enter')event.preventDefault();
  keyboardBindings.set(event.code,keys);
  for(const key of keys)setKey(key,true,'keyboard-'+event.code);
});
document.addEventListener('keyup',event=>{
  const keys=keyboardBindings.get(event.code)||[event.code];keyboardBindings.delete(event.code);
  if(started)for(const key of keys)setKey(key,false,'keyboard-'+event.code);
});
let swipe=null, swipeSequence=0;
const swipeActions=new Map();
function updateSwipeKeys(gesture,keys) {
  const next=new Set(keys);
  for(const key of gesture.keys) if(!next.has(key)) setKey(key,false,gesture.source);
  for(const key of next) if(!gesture.keys.has(key)) setKey(key,true,gesture.source);
  gesture.keys=next;
}
canvas.addEventListener('pointerdown',event=>{
  focusGame();speaker.enable().catch(()=>{});
  if(!started || event.pointerType==='mouse') return;
  if(swipe) {
    if(game.phase==='playing' && event.pointerId!==swipe.id) {
      event.preventDefault();canvas.setPointerCapture(event.pointerId);
      const source='swipe-action-'+(++swipeSequence);
      swipeActions.set(event.pointerId,source);setKey('AltLeft',true,source);
    }
    return;
  }
  event.preventDefault();
  canvas.setPointerCapture(event.pointerId);
  swipe={id:event.pointerId,x:event.clientX,y:event.clientY,phase:game.phase,
    keys:new Set(),moved:false,source:'swipe-'+(++swipeSequence),directionAt:0};
});
canvas.addEventListener('pointermove',event=>{
  if(!swipe || swipe.id!==event.pointerId || swipe.phase!=='playing') return;
  event.preventDefault();
  const dx=event.clientX-swipe.x,dy=event.clientY-swipe.y,ax=Math.abs(dx),ay=Math.abs(dy);
  if(Math.max(ax,ay)<18) {if(swipe.moved)updateSwipeKeys(swipe,[]);return;}
  swipe.moved=true;
  const keys=[];
  if(ax>=18 && ax>=ay*0.5) keys.push(dx>0?'ArrowRight':'ArrowLeft');
  if(ay>=18 && ay>=ax*0.5) keys.push(dy>0?'ArrowDown':'ArrowUp');
  if([...swipe.keys].join()!==keys.join()) swipe.directionAt=performance.now();
  updateSwipeKeys(swipe,keys);
});
function finishSwipe(event,canceled=false) {
  if(swipeActions.has(event.pointerId)) {
    setKey('AltLeft',false,swipeActions.get(event.pointerId));swipeActions.delete(event.pointerId);return;
  }
  if(!swipe || swipe.id!==event.pointerId) return;
  const gesture=swipe;swipe=null;
  if(canceled) {updateSwipeKeys(gesture,[]);return;}
  if(gesture.moved) {
    // A quick flick must last long enough for the original input poll to see it.
    const delay=Math.max(0,140-(performance.now()-gesture.directionAt));
    setTimeout(()=>updateSwipeKeys(gesture,[]),delay);
  } else if(gesture.phase==='playing' && game.phase==='playing') tap('AltLeft');
  else if(['title','ready','paused'].includes(gesture.phase)) tap('Enter');
}
canvas.addEventListener('pointerup',event=>finishSwipe(event));
canvas.addEventListener('pointercancel',event=>finishSwipe(event,true));
canvas.addEventListener('lostpointercapture',event=>finishSwipe(event,true));
for(const button of document.querySelectorAll('[data-key]')) {
  button.addEventListener('pointerdown',event=>{
    if(!started) return;
    event.preventDefault();button.setPointerCapture(event.pointerId);
    setKey(button.dataset.key,true,'pad-'+event.pointerId); speaker.enable().catch(()=>{});
  });
  const release=event=>setKey(button.dataset.key,false,'pad-'+event.pointerId);
  button.addEventListener('pointerup',release);button.addEventListener('pointercancel',release);
  button.addEventListener('lostpointercapture',release);
}
document.addEventListener('visibilitychange',()=>{if(document.hidden){keyboardBindings.clear();swipe=null;swipeActions.clear();game.suspend();}else game.resume();});
// Mobile viewers can emit a window blur when a button or canvas is focused,
// even while the page remains visible. Only visibilitychange pauses the game.
window.addEventListener('blur',()=>{keyboardBindings.clear();releaseKeys();});
Promise.all([colorArt.load(),hdArt.load()]).then(()=>{
  $('preview-help').hidden=true;$('start').disabled=false;window.alleyCatPageReady=true;
  updateSaveButtons();
}).catch(error=>{
  // The original game is still usable if a browser cannot decode the new art.
  colorArt.mode='original';updateStyleButtons();$('graphics').disabled=true;
  $('preview-help').hidden=true;$('start').disabled=false;window.alleyCatPageReady=true;
  $('hint').textContent='Color art unavailable; original graphics are ready.';
  updateSaveButtons();
  console.error(error);
});
requestAnimationFrame(frame);
sizeFullscreen();
