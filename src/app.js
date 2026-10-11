const canvas=document.querySelector('#game');
const context=canvas.getContext('2d',{alpha:false});
const image=context.createImageData(320,200);
const $=id=>document.getElementById(id);
let started=false, lastPhase='', raf=0;
function focusGame() {canvas.focus({preventScroll:true});}
function chord(code) {
  setKey('ControlLeft',true); setKey(code,true);
  setTimeout(()=>{setKey(code,false);setKey('ControlLeft',false);},140);
}
const phaseInfo={title:['TITLE SCREEN','Press Enter to continue.'],keyboard:['CHOOSE YOUR CONTROLS','Choose keyboard controls to begin.'],difficulty:['CHOOSE YOUR DIFFICULTY','How adventurous are you feeling?'],ready:['READY TO ROAM','Press Enter to start.'],playing:['IN THE ALLEY','Arrows / WASD · Space jump · Q/E diagonal jump · F action'],entering:['ENTERING THE WINDOW','A new adventure awaits.'],paused:['PAWS MODE','Press any key to resume.'],booting:['STARTING',''],error:['GAME STOPPED','Restart to try again.'],ended:['SESSION ENDED','Restart to play again.']};
function updateUI() {
  const phase=game.phase;
  updateSaveButtons();
  $('status').textContent=phase==='playing' && memoryAGet16(0x1010,4)!==0 ? 'ROOM CHALLENGE' : phaseInfo[phase]?.[0] || 'ALLEY CAT';
  $('hint').textContent=phaseInfo[phase]?.[1] || 'Keyboard & touch controls';
  $('pause').textContent=phase==='paused'?'Resume':'Pause';
  $('sound').textContent=speaker.muted || !memoryAGet(0x1010,0)?'Sound off':'Sound on';
  if(game.error) {
    $('error').hidden=false;
    $('error').textContent='The game stopped: '+game.error.message+'. Press Restart to begin a new session.';
  }
  if(phase===lastPhase) return;
  lastPhase=phase;
  $('menu').hidden=!['title','keyboard','difficulty','ready','paused'].includes(phase);
  $('menu-hint').textContent=phaseInfo[phase]?.[1] || '';
  const options=phase==='difficulty'?[['Kitten · K','KeyK'],['House Cat · H','KeyH'],['Tomcat · T','KeyT'],['Alley Cat · A','KeyA']]:phase==='keyboard'?[['Keyboard · N','KeyN']]:[['Continue · Enter','Enter']];
  $('menu-options').replaceChildren(...options.map(([label,key])=>{
    const button=document.createElement('button'); button.textContent=label;
    button.addEventListener('click',()=>{speaker.enable();tap(key);focusGame();}); return button;
  }));
  sizeFullscreen();
}
function frame() {
  if(started) {game.pump(); render(context,image); updateUI();}
  raf=requestAnimationFrame(frame);
}
$('start').addEventListener('click',()=>{
  try {
    keyboardBindings.clear();game.reset(); started=true;
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
    keyboardBindings.clear();releaseKeys(); game.reset(); $('error').hidden=true;
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
  const color=colorArt.mode==='color',fm=speaker.style==='fm';
  $('graphics').dataset.mode=colorArt.mode;$('graphics').setAttribute('aria-pressed',String(color));
  $('graphics').querySelector('.toggle-value').textContent=color?'Pixel art ⇄ CGA':'CGA ⇄ Pixel art';
  $('graphics').setAttribute('aria-label',color?'Pixel art graphics; switch to CGA':'CGA graphics; switch to pixel art');
  $('audio-style').dataset.mode=speaker.style;$('audio-style').setAttribute('aria-pressed',String(fm));
  $('audio-style').querySelector('.toggle-value').textContent=fm?'AdLib ⇄ PC speaker':'PC speaker ⇄ AdLib';
  $('audio-style').setAttribute('aria-label',fm?'AdLib-style music and effects; switch to original PC speaker':'Original PC speaker music and effects; switch to AdLib-style FM');
}
$('graphics').addEventListener('click',()=>{
  colorArt.mode=colorArt.mode==='color'?'original':'color';
  $('art-badge').innerHTML='<i></i> '+(colorArt.mode==='color'?'COLOR PIXEL ART':'ORIGINAL CGA GRAPHICS');
  updateStyleButtons();
  if(started)render(context,image);
  focusGame();
});
$('audio-style').addEventListener('click',()=>{
  speaker.setStyle(speaker.style==='fm'?'speaker':'fm');updateStyleButtons();speaker.enable().catch(()=>{});focusGame();
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
    keyboardBindings.clear();swipe=null;swipeActions.clear();started=true;lastPhase='';
    $('cover').hidden=true;$('error').hidden=true;
    for(const button of ['sound','pause','restart'])$(button).disabled=false;
    updateStyleButtons();$('art-badge').innerHTML='<i></i> '+(colorArt.mode==='color'?'COLOR PIXEL ART':'ORIGINAL CGA GRAPHICS');
    render(context,image);updateUI();
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
colorArt.load().then(()=>{
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
