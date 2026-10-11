const fs=require('node:fs'),path=require('node:path');
const {chromium}=require('playwright');
(async()=>{
  const browser=await chromium.launch({executablePath:process.env.CHROMIUM_PATH||'/usr/bin/chromium',args:['--no-sandbox']});
  try{
    const page=await browser.newPage();
    for(const name of ['alley','rooms','sprites','props','furniture','details','materials','animation']){
      const file=path.join(__dirname,'../art/hd',name+'.png');
      const encoded=await page.evaluate(async data=>{
        const image=new Image();image.src='data:image/png;base64,'+data;await image.decode();
        const canvas=document.createElement('canvas');canvas.width=image.width;canvas.height=image.height;
        canvas.getContext('2d').drawImage(image,0,0);return canvas.toDataURL('image/webp',.9).split(',')[1];
      },fs.readFileSync(file).toString('base64'));
      fs.writeFileSync(file.replace('.png','.webp'),Buffer.from(encoded,'base64'));
    }
  }finally{await browser.close();}
})().catch(error=>{console.error(error);process.exitCode=1;});
