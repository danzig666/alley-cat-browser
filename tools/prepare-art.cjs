// Rasterize the generated masters ONCE at the game's native pixel resolution.
// This is exactly the nearest-neighbor sampling used by the browser renderer.
const fs=require('node:fs');
const path=require('node:path');
const {chromium}=require('playwright');
const root=path.resolve(__dirname,'..');
(async()=>{
  const browser=await chromium.launch({executablePath:process.env.CHROMIUM_PATH||'/usr/bin/chromium',args:['--no-sandbox']});
  try {
    const page=await browser.newPage();
    for(const [file,output,width,height] of [['alley.png','alley-native.png',320,200],['rooms.png','rooms-native.png',640,800]]) {
      const uri='data:image/png;base64,'+fs.readFileSync(path.join(root,'art',file)).toString('base64');
      const data=await page.evaluate(async({uri,width,height})=>{
        const img=new Image();img.src=uri;await img.decode();
        const c=document.createElement('canvas');c.width=width;c.height=height;
        const ctx=c.getContext('2d');ctx.imageSmoothingEnabled=false;
        ctx.drawImage(img,0,0,width,height);return c.toDataURL('image/png').split(',')[1];
      },{uri,width,height});
      fs.writeFileSync(path.join(root,'art',output),Buffer.from(data,'base64'));
      console.log('Prepared',output);
    }
  }finally {await browser.close();}
})().catch(e=>{console.error(e);process.exitCode=1;});
