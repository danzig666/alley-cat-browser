// Load a real IndexedDB checkpoint made by the previously published version.
const assert=require('node:assert/strict'),fs=require('node:fs'),path=require('node:path'),http=require('node:http');
const {execFileSync}=require('node:child_process'),{chromium}=require('playwright');
const root=path.join(__dirname,'..');
(async()=>{
  const previous=execFileSync('git',['show',(process.env.PREVIOUS_REV||'35a13c1')+':index.html'],{cwd:root,maxBuffer:16*1024*1024});
  const server=http.createServer((req,res)=>{res.setHeader('Content-Type','text/html');res.end(req.url==='/previous'?previous:fs.readFileSync(path.join(root,'index.html')));}).listen(0,'127.0.0.1');
  await new Promise(resolve=>server.once('listening',resolve));
  const browser=await chromium.launch({executablePath:process.env.CHROMIUM_PATH||'/usr/bin/chromium',args:['--no-sandbox']});
  try{
    const page=await browser.newPage(),url='http://127.0.0.1:'+server.address().port,errors=[];
    page.on('pageerror',error=>errors.push(error.message));
    await page.goto(url+'/previous');await page.click('#graphics');await page.click('#audio-style');await page.click('#start');
    const phase=value=>page.waitForFunction(value=>game.phase===value,value);
    await phase('title');
    if(previous.includes(Buffer.from('function chooseCat('))){
      await page.locator('#menu-options button').first().click();await phase('playing');
    }else{
      await page.keyboard.press('Enter',{delay:120});await phase('difficulty');
      await page.keyboard.press('k',{delay:120});await phase('ready');await page.keyboard.press('Enter',{delay:120});await phase('playing');
    }
    const old=await page.evaluate(async()=>{
      game.suspend();releaseKeys();const snapshot=game.capture(),id=await alleyCat.save();
      let clock=0;game.time=()=>snapshot.elapsed+clock;
      for(let i=0;i<400;i++){clock+=8;game.iterator.next();}
      let hash=2166136261;for(const byte of ram)hash=Math.imul(hash^byte,16777619);
      return {id,elapsed:snapshot.elapsed,expected:{ram:hash>>>0,words:Array.from(words),flags:{...flags},steps:game.steps,phase:game.phase,divisor:speaker.divisor,gate:speaker.gate,events:speaker.events}};
    });assert(Number.isInteger(old.id));
    await page.goto(url);await page.waitForFunction(()=>!document.getElementById('load-game').disabled);
    const migrated=await page.evaluate(async old=>{
      const id=await alleyCat.load(old.id);game.suspend();
      let clock=0;const realTime=game.time;game.time=()=>old.elapsed+clock;
      for(let i=0;i<400;i++){clock+=8;game.iterator.next();}
      let hash=2166136261;for(const byte of ram)hash=Math.imul(hash^byte,16777619);
      const actual={ram:hash>>>0,words:Array.from(words),flags:{...flags},steps:game.steps,phase:game.phase,divisor:speaker.divisor,gate:speaker.gate,events:speaker.events};
      game.time=realTime;return {id,actual,graphics:colorArt.mode,audio:speaker.style};
    },old);
    assert.equal(migrated.id,old.id);assert.deepEqual(migrated.actual,old.expected);assert.equal(migrated.graphics,'color');assert.equal(migrated.audio,'fm');
    await page.click('#hd-style');await page.evaluate(()=>game.resume());await page.waitForTimeout(500);
    assert.equal(await page.evaluate(()=>game.state().error),null);assert(await page.locator('#hd-game').isVisible());assert.deepEqual(errors,[]);
    console.log('PASS: checkpoint from published '+(process.env.PREVIOUS_REV||'35a13c1')+' loads before Play, retains color/FM settings and reproduces 400 native continuation steps, then switches to HD.');
  }finally{await browser.close();await new Promise(resolve=>server.close(resolve));}
})().catch(error=>{console.error(error);process.exitCode=1;});
