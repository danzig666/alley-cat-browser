// Color materials are painted into the original 320x200 raster and sprite masks.
// Neither art mode writes to game RAM, sprite dimensions, nor collision state.
const colorArt = {
  mode:'color', ready:false, writing:false,
  layer:new Uint32Array(0x100000*4), blits:[], scenes:[], tables:[],cheeseMask:null,cheeseTable:null,
  reset() {this.layer.fill(0);this.blits.length=0;this.writing=false;this.cheeseMask=this.cheeseTable=null;},
  async load() {
    const read=async uri=>{
      const img=new Image();img.src=uri;await img.decode();return img;
    };
    const [alley,rooms]=await Promise.all([read(COLOR_ART_ASSETS.alley),read(COLOR_ART_ASSETS.rooms)]);
    const target=document.createElement('canvas');target.width=320;target.height=200;
    const ctx=target.getContext('2d',{willReadFrequently:true});ctx.imageSmoothingEnabled=false;
    const crop=(img,x,y,w,h)=>{ctx.drawImage(img,x,y,w,h,0,0,320,200);return ctx.getImageData(0,0,320,200).data;};
    this.scenes[0]=crop(alley,0,0,alley.width,alley.height);
    for(let i=0;i<8;i++) this.scenes[i+1]=crop(rooms,(i%2)*rooms.width/2,Math.floor(i/2)*rooms.height/4,rooms.width/2,rooms.height/4);
    // Build material lookups once, rather than doing texture classification in
    // every animation frame on a phone. Each original pixel has four choices.
    for(let scene=0;scene<=8;scene++) {
      const table=new Uint32Array(320*200*4);
      for(let y=0;y<200;y++)for(let x=0;x<320;x++)for(let c=0;c<4;c++)
        table[(y*320+x)*4+c]=artStatic(scene,x,y,c,this.scenes[scene],false);
      this.tables[scene]=table;
      await new Promise(requestAnimationFrame);
    }
    this.ready=true;
  },
  beginBlit(name) {
    const width=r.cl*8,height=r.ch,source=r.si;
    const bytes=ram.slice(((r.ds<<4)+source)&0xfffff,((r.ds<<4)+source+width*height/4)&0xfffff);
    // The same mask frame supplies the outline, body highlights and animation.
    let kind='cat';
    if(source===0x064e) kind='bubble';
    else if(source>=0x1e30 && source<0x1f00) kind='hazard';
    else if(source>=0x3000 && source<0x4100) kind='mouse';
    else if(source>=0x4100 && source<0x4d00) kind='dog';
    else if(source>=0x4d00 && source<0x5600) kind='spider';
    else if(source>=0x6f30) kind='romance';
    if(name==='sub_19efc' && source<0x3000) kind='dog';
    this.blits.push({name,width,height,source,bytes,kind});
  },
  endBlit() {this.blits.pop();},
  captureCheese() {
    // Capture the finished original static cheese before cats and mice are
    // added. Its raster defines the wedge boundary, holes and surface marks.
    const mask=new Uint8Array(320*200),pixels=new Uint8Array(320*200),top=new Uint8Array(320);top.fill(200);
    for(let y=32;y<168;y++) {
      let left=320,right=-1;
      for(let x=24;x<224;x++) {
        const p=y*320+x,addr=0xb8000+(y&1)*8192+(y>>1)*80+(x>>2);
        pixels[p]=(ram[addr]>>(6-(x&3)*2))&3;
        if(pixels[p]===1||pixels[p]===3){left=Math.min(left,x);right=x;}
      }
      for(let x=left;x<=right;x++) {
        const p=y*320+x;mask[p]=1;top[x]=Math.min(top[x],y);
        const addr=0xb8000+(y&1)*8192+(y>>1)*80+(x>>2);
        this.layer[addr*4+(x&3)]=0;
      }
    }
    const table=new Uint32Array(320*200*4),visited=new Uint8Array(320*200);
    const holeY=new Int16Array(320*200),holeHeight=new Uint8Array(320*200);holeY.fill(-1);
    for(let p=0;p<pixels.length;p++) {
      if(!mask[p]||pixels[p]!==2||visited[p])continue;
      const queue=[p];visited[p]=1;let minY=200,maxY=0;
      for(let i=0;i<queue.length;i++) {
        const at=queue[i],x=at%320,y=Math.floor(at/320);minY=Math.min(minY,y);maxY=Math.max(maxY,y);
        for(const [dx,dy] of [[-1,0],[1,0],[0,-1],[0,1]]) {
          const xx=x+dx,yy=y+dy,next=yy*320+xx;
          if(xx>=0&&xx<320&&yy>=0&&yy<200&&mask[next]&&pixels[next]===2&&!visited[next]){visited[next]=1;queue.push(next);}
        }
      }
      if(queue.length>=12)for(const at of queue){holeY[at]=minY;holeHeight[at]=maxY-minY+1;}
    }
    for(let y=32;y<168;y++)for(let x=24;x<224;x++) {
      const p=y*320+x;if(!mask[p])continue;
      const nearTop=y-top[x]<8,grain=(x*7+y*11)%43===0;
      const face=nearTop?ART_PALETTES.cheese[4]:ART_PALETTES.cheese[grain?2:3];
      let recess=ART_PALETTES.cheese[1];
      if(holeY[p]>=0) {
        const depth=(y-holeY[p])/holeHeight[p];
        recess=depth<.3?ART_PALETTES.cheese[0]:depth<.7?ART_PALETTES.cheese[1]:ART_PALETTES.cheese[2];
      }
      table[p*4]=artPack(ART_PALETTES.cheese[0]);
      table[p*4+1]=artPack(face);
      table[p*4+2]=artPack(recess);
      table[p*4+3]=artPack(ART_PALETTES.cheese[2]);
    }
    this.cheeseMask=mask;this.cheeseTable=table;
  },
  skinStatic(ds,si,cx) {
    if(ds!==0x1010||![0x2976,0x29ee,0x2a2e].includes(si))return;
    const width=(cx&255)*8,height=cx>>8,start=(ds<<4)+si;
    const pixels=new Uint8Array(width*height),outside=new Uint8Array(width*height),queue=[];
    for(let y=0;y<height;y++)for(let x=0;x<width;x++)
      pixels[y*width+x]=(ram[start+y*width/4+(x>>2)]>>(6-(x&3)*2))&3;
    // Flood only the original exterior color. This prevents a rectangular
    // texture behind a curved lid, while recoloring enclosed CGA dithering.
    const seed=(x,y)=>{const p=y*width+x;if(!outside[p]&&(pixels[p]===1||pixels[p]===2)){outside[p]=1;queue.push(p);}};
    // Barrel tiles join vertically; their open top/bottom are not exterior.
    for(let y=0;y<height;y++){seed(0,y);seed(width-1,y);}
    for(let i=0;i<queue.length;i++) {
      const p=queue[i],x=p%width,y=Math.floor(p/width);
      if(x)seed(x-1,y);if(x+1<width)seed(x+1,y);if(y)seed(x,y-1);if(y+1<height)seed(x,y+1);
    }
    for(let y=0;y<height;y++)for(let x=0;x<width;x++) {
      const p=y*width+x,c=pixels[p],slot=(start+y*width/4+(x>>2))*4+(x&3);
      this.layer[slot]=outside[p]?0:artPack(ART_PALETTES.metal[c===0?0:c===3?4:c===1?2+(x%7===0?1:0):1]);
    }
  },
  saveWord(ds,di,ss,si) {
    const dest=(((ds<<4)+(di&65535))&0xfffff)*4,src=(((ss<<4)+(si&65535))&0xfffff)*4;
    this.layer.copyWithin(dest,src,src+8);
  },
  paintWord(es,di,ds,si) {
    if(es!==0xb800) return;
    const frame=this.blits[this.blits.length-1];if(!frame)return;
    const offset=(si-frame.source)&65535;
    const row=Math.floor(offset/(frame.width/4)),column=(offset%(frame.width/4))*4;
    for(let b=0;b<2;b++) {
      const addr=0xb8000+((di+b)&65535),bits=memoryAGet(ds,si+b);
      for(let i=0;i<4;i++) {
        const value=(bits>>(6-i*2))&3,lx=column+b*4+i;
        // AND masks use 3 as transparent; the other blitter uses 0.
        if(frame.name==='sub_19f65'?value===3:value===0) continue;
        this.layer[addr*4+i]=this.spriteColor(frame,lx,row,value);
      }
    }
  },
  spriteColor(frame,x,y,value) {
    const mask=(xx,yy)=>{
      if(xx<0||yy<0||xx>=frame.width||yy>=frame.height)return false;
      const v=(frame.bytes[yy*(frame.width/4)+(xx>>2)]>>(6-((xx&3)*2)))&3;
      return frame.name==='sub_19f65'?v!==3:v!==0;
    };
    const edge=!mask(x-1,y)||!mask(x+1,y)||!mask(x,y-1)||!mask(x,y+1);
    let colors=ART_PALETTES.cat;
    if(frame.kind==='bubble')colors=ART_PALETTES.glass;
    else if(frame.kind==='dog')colors=ART_PALETTES.cream;
    else if(frame.kind==='mouse')colors=ART_PALETTES.gold;
    else if(frame.kind==='spider'||frame.kind==='hazard')colors=ART_PALETTES.red;
    else if(frame.kind==='romance')colors=ART_PALETTES.lilac;
    let shade=edge?0:(y<frame.height*.45?3:2);
    if(!edge && (x+y)%5===0)shade=1;
    if(frame.name==='sub_19efc')shade=value===3?4:value;
    // Eye sparkle stays INSIDE a pixel already occupied by the original cat.
    if(frame.kind==='cat' && y<frame.height*.38 && y>frame.height*.18 && !edge &&
       (x===frame.width-5||x===4)) return artPack(ART_PALETTES.glass[4]);
    return artPack(colors[shade]);
  },
  render(context,image) {
    const menu=['difficulty','ready','keyboard'].includes(game.phase);
    const title=game.phase==='title',room=memoryAGet16(0x1010,4);
    const scene=title?8:Math.min(7,room),table=this.tables[scene];
    // BIOS menu lettering uses color 2. It must contrast with color 0.
    const menuColors=[ART_PALETTES.ink[0],ART_PALETTES.glass[3],ART_PALETTES.red[3],ART_PALETTES.cream[4]].map(artPack);
    for(let y=0;y<200;y++)for(let x=0;x<320;x++) {
      const addr=0xb8000+(y&1)*8192+(y>>1)*80+(x>>2),bit=x&3;
      const index=(ram[addr]>>(6-bit*2))&3,at=(y*320+x)*4;
      let color=this.layer[addr*4+bit];
      if(menu)color=menuColors[index];
      else if(!color) {
        const pixel=y*320+x;
        color=scene===4&&this.cheeseMask?.[pixel]?this.cheeseTable[pixel*4+index]:
          table?table[pixel*4+index]:artPack(RGBI[[0,3,5,7][index]]);
      }
      image.data[at]=(color>>>16)&255;image.data[at+1]=(color>>>8)&255;
      image.data[at+2]=color&255;image.data[at+3]=255;
    }
    context.putImageData(image,0,0);
  }
};
function artPack(rgb) {return 0xff000000|(rgb[0]<<16)|(rgb[1]<<8)|rgb[2];}
function artPalette(colors) {return colors.split(' ').map(h=>[parseInt(h.slice(0,2),16),parseInt(h.slice(2,4),16),parseInt(h.slice(4,6),16)]);}
const ART_PALETTES={
  ink:artPalette('131722 232b3d 364156 586781 8f9dae'),
  cat:artPalette('171524 383047 625068 8d7388 c7a4ac'),
  brick:artPalette('342438 563043 80484d a85e53 cd8666'),
  wood:artPalette('392c2d 624130 94613b bc8b49 e3b965'),
  metal:artPalette('1c283a 3a546a 5b8292 8db7c1 c9e1db'),
  cream:artPalette('332c40 896856 b79b7d e5d0a3 fff0cb'),
  teal:artPalette('14343b 245760 377a78 65a392 a3ccaf'),
  gold:artPalette('513030 9a5630 cc863d edb952 ffdf83'),
  cheese:artPalette('713c20 a85925 d99136 f4ce65 ffe394'),
  red:artPalette('462438 874151 b75c69 e08385 ffb5a2'),
  lilac:artPalette('30243d 624264 92638a ba8dac e2b7c6'),
  glass:artPalette('122d41 21516c 3a8595 77bec0 d1efe1')
};
const ART_CHAIRS={1:[[22,128,59,181],[134,128,167,181]],3:[[47,128,83,181],[94,128,130,181]],4:[[228,126,261,181]],5:[[55,126,94,181],[207,126,240,181],[247,126,279,181]],6:[[71,86,108,140],[215,86,245,140]]};
function artInside(rect,x,y) {return x>=rect[0]&&y>=rect[1]&&x<rect[2]&&y<rect[3];}
function artTexture(texture,x,y) {
  const at=(Math.floor(y)*320+Math.floor(x))*4;
  // Quantization gives stable low-resolution color clusters, not smooth paint.
  return artPack([0,1,2].map(i=>Math.round(texture[at+i]/17)*17));
}
// The original two-bit pixels are a hard stencil. Generated material colors
// can shade a shape, but cannot shift a single outline or platform pixel.
function artStatic(scene,x,y,index,texture,menu) {
  if(menu) return artPack([ART_PALETTES.ink[0],ART_PALETTES.glass[3],ART_PALETTES.red[3],ART_PALETTES.cream[4]][index]);
  let material='cream',shade=[0,2,1,4][index],tx=x,ty=y;
  if(scene===0||scene===8) {
    if(scene===8 && y>=188 && index===0)return artPack(ART_PALETTES.gold[3]);
    if(scene===8 && y<106) {
      if(index===2)return texture?artTexture(texture,x%48,y%18):artPack(ART_PALETTES.ink[0]);
      material=y<36?'glass':'gold';shade=[3,2,0,4][index];
    } else if(y>=176) {
      material='ink';shade=index===2?1:index===0?0:index===1?2:4;
    } else if(y>=106) {
      material=index===2?'ink':'wood';shade=[0,3,1,4][index];
    } else if(index===2) {material='brick';shade=2;tx=x%40;ty=y%9;}
    else if(index===1) {
      material='glass';shade=2;
      // Alternating warm and cool windows at their original coordinates.
      if(Math.floor(x/80)%2===0 && y>=24 && (y-24)%32<16){material='gold';shade=3;}
    } else {material=index===0?'ink':'cream';shade=index===0?0:4;}
  } else if(scene===2) {
    material=index===1?'glass':index===2?'gold':index===0?'teal':'cream';
    shade=index===1?1+(y<60?1:0):index===2?3:index===0?0:4;
    tx=x%48;ty=20+y%24;
  } else if(scene===7) {
    material=index===1?'lilac':index===2?'red':index===0?'lilac':'gold';
    shade=index===1?1:index===2?3:index===0?0:4;
  } else {
    const floor=scene===6?112:152;
    if(index===2) {
      material=y>=floor?'wood':'lilac';shade=y>=floor?1:2;
      tx=30+x%32;ty=y>=floor?182+y%12:16+y%20;
      // Wallpaper and parquet are clean generated texture patches, clipped by
      // the original background pixels. Furniture never comes from this tile.
      if(texture && !(scene===3 && x>=168 && x<296 && y>=39 && y<169))
        return artTexture(colorArt.scenes[1],y>=floor?8+x%48:64+x%32,y>=floor?184+y%14:66+y%24);
    } else if(index===0) {material='ink';shade=0;}
    else {material=index===1?'teal':'cream';shade=index===1?2:4;}
    if((ART_CHAIRS[scene]||[]).some(rect=>artInside(rect,x,y)) && index!==2) {
      material=index===0?'ink':y>=floor+6?'wood':'teal';
      shade=index===0?0:index===1?2:4;
    }
    const curtains={1:[128,86,192,112],3:[64,86,128,112],4:[232,86,296,112],5:[216,86,280,112],6:[40,46,104,72]};
    if(curtains[scene] && artInside(curtains[scene],x,y)) {
      material=index===0?'glass':index===1?'red':index===3?'gold':'lilac';
      shade=index===0?0:index===1?2:index===3?4:2;
    }
    if(scene===3 && x>=168 && x<296 && y>=39 && y<169) {
      material=index===1?'wood':index===0?'ink':index===3?'cream':'brick';
      shade=index===0?0:index===2?1:index===3?4:3;
      if((index===1||index===3) && y%8>2){material=['red','teal','gold','lilac'][Math.floor(x/8)%4];shade=index===3?3:2;}
    }
    if(scene===5 && x>=144 && x<166 && y>=133 && y<152) {
      material='gold';shade=index===0?0:index===2?1:4;
    }
    // Round tabletops retain their pixel silhouettes and now read as walnut.
    if(index===1 && y>=143 && y<181 && !(ART_CHAIRS[scene]||[]).some(rect=>artInside(rect,x,y))) {material='wood';shade=3;}
  }
  const palette=ART_PALETTES[material];
  if(texture && index!==0 && material==='brick' && index===2 && scene===0)
    return artTexture(texture,x%32,y%6);
  if(index===1 && material==='wood' && (scene===0||scene===8))
    return artTexture(colorArt.scenes[0],2+x%5,114+y%22);
  if(index===1 && material==='teal' && scene!==2) {
    const cloth=colorArt.scenes[1];
    if(cloth)return artTexture(cloth,29+x%4,98+y%18);
  }
  let grain=0;
  if(texture && index!==0) {
    const at=((ty%200)*320+(tx%320))*4;
    const light=texture[at]*.2126+texture[at+1]*.7152+texture[at+2]*.0722;
    grain=light>155?1:light<55?-1:0;
  }
  // Sparse clustered texture; never smooth or subpixel shading.
  if(index!==0 && ((x*13+y*7)%19===0))grain=1;
  if(material==='wood' && x%8===0 && index!==0)grain=-1;
  if(material==='brick' && index===2 && (y%8===0||(x+(Math.floor(y/8)%2)*10)%20===0))grain=-1;
  if(shade>0&&shade<4)shade=Math.max(1,Math.min(4,shade+grain));
  return artPack(palette[shade]);
}
window.alleyCat.art=colorArt;
