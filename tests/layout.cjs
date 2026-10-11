const assert=require('node:assert/strict');
const fs=require('node:fs');
const path=require('node:path');
const {chromium}=require('playwright');
(async()=>{
  const browser=await chromium.launch({executablePath:process.env.CHROMIUM_PATH||'/usr/bin/chromium',args:['--no-sandbox']});
  try {
    const page=await browser.newPage();
    await page.setContent(fs.readFileSync(path.join(__dirname,'../index.html'),'utf8'));
    for(const [name,width,height] of [['desktop',1920,1080],['laptop',1366,768],['fold-unfolded',768,1024],['fold-landscape',1024,768],['portrait',390,844],['landscape',844,390],['ultrawide',2560,1080]]) {
      await page.setViewportSize({width,height});await page.waitForTimeout(80);
      const layout=await page.evaluate(()=>{
        const game=document.getElementById('game').getBoundingClientRect(),side=document.getElementById('sidebar').getBoundingClientRect();
        const arcade=document.getElementById('arcade'),w=arcade.clientWidth,h=arcade.clientHeight;
        const panel=Math.min(320,Math.max(240,w*.22));
        const beside=w>=600?Math.min(w-panel-8,h*4/3):0;
        const below=Math.min(w,(h-Math.min(240,Math.max(160,h*.28))-8)*4/3);
        return {width:game.width,height:game.height,ratio:game.width/game.height,side:arcade.classList.contains('side-layout'),
          optimal:Math.max(beside,below),panelBeside:side.x>=game.right-1,inside:game.top>=0&&game.bottom<=innerHeight&&side.bottom<=innerHeight+1};
      });
      assert(Math.abs(layout.ratio-4/3)<.003, name+': correct 4:3');assert(layout.inside,name+': fits viewport');
      assert(Math.abs(layout.width-layout.optimal)<2,name+': maximizes picture across side/below arrangements');
      if(name==='desktop'||name==='laptop'||name==='ultrawide'){assert(layout.side&&layout.panelBeside);assert(layout.height>=height-20);}
      if(name==='desktop'||name==='fold-unfolded')await page.screenshot({path:path.join(__dirname,`layout-${name}.png`)});
    }
    console.log('PASS: desktop, laptop, ultrawide, unfolded fold, fold landscape, phone portrait/landscape; actual viewport selects the larger 4:3 layout, with no bottom bar on widescreen.');
  }finally{await browser.close();}
})().catch(error=>{console.error(error);process.exitCode=1;});
