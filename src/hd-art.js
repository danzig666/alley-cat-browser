// An independent high-resolution presentation layer. Native RAM, collision
// masks, sprite dimensions, clocks and input are never changed by this renderer.
const hdArt={
  ready:false,canvas:null,ctx:null,scene:-1,background:null,backgroundPixels:new Uint8Array(64000),
  staticMetal:new Uint8Array(64000),provenance:new Uint32Array(0x100000*4),
  entities:new Map(),recent:[],nextId:1,images:{},sprites:[],props:[],furniture:[],details:[],materials:{},patterns:{},dirty:true,playerMotion:null,
  reset(){this.provenance.fill(0);this.entities.clear();this.recent=[];this.nextId=1;this.scene=-1;this.dirty=true;this.playerMotion=null;},
  async load(){
    for(const [name,uri] of Object.entries(HD_ART_ASSETS)){
      const image=new Image();image.src=uri;await image.decode();this.images[name]=image;
    }
    this.canvas=document.getElementById('hd-game');this.canvas.width=1280;this.canvas.height=800;
    this.ctx=this.canvas.getContext('2d',{alpha:false});
    this.background=document.createElement('canvas');this.background.width=1280;this.background.height=800;
    this.bg=this.background.getContext('2d',{alpha:false});
    this.scenes=[this.images.alley];
    for(let i=0;i<8;i++)this.scenes[i+1]=this.crop(this.images.rooms,(i%2)/2,Math.floor(i/2)/4,.5,.25);
    for(let i=0;i<12;i++){
      const cell=this.crop(this.images.sprites,(i%4)/4,Math.floor(i/4)/3,.25,1/3);
      // Trim the transparent padding, then fit to the native sprite rectangle.
      this.sprites[i]=this.trim(cell);
    }
    for(let i=0;i<3;i++)this.props[i]=this.trim(this.crop(this.images.props,i/3,0,1/3,.5));
    this.props[3]=this.trim(this.crop(this.images.props,0,.5,.405,.5));
    this.props[4]=this.trim(this.crop(this.images.props,.41,.5,.285,.5));
    this.props[5]=this.trim(this.crop(this.images.props,.70,.5,.30,.5));
    for(let i=0;i<6;i++)this.furniture[i]=this.trim(this.crop(this.images.furniture,(i%3)/3,Math.floor(i/3)/2,1/3,.5));
    for(let i=0;i<6;i++)this.details[i]=this.trim(this.crop(this.images.details,(i%3)/3,Math.floor(i/3)/2,1/3,.5));
    this.details[0]=this.trim(this.crop(this.images.details,0,0,.405,.5));
    for(const [i,name] of ['brick','wood','wall','floor','water','cheese'].entries())this.materials[name]=this.crop(this.images.materials,(i%3)/3,Math.floor(i/3)/2,1/3,.5);
    this.materials.ground=this.crop(this.images.alley,0,.96,1,.04);
    this.roomBase=document.createElement('canvas');this.roomBase.width=1280;this.roomBase.height=800;
    this.makePatterns();this.ready=true;
  },
  crop(image,x,y,w,h){
    const canvas=document.createElement('canvas');canvas.width=Math.max(1,Math.round(image.width*w));canvas.height=Math.max(1,Math.round(image.height*h));
    canvas.getContext('2d').drawImage(image,image.width*x,image.height*y,image.width*w,image.height*h,0,0,canvas.width,canvas.height);return canvas;
  },
  trim(cell){
    const data=cell.getContext('2d').getImageData(0,0,cell.width,cell.height).data;
    let x0=cell.width,y0=cell.height,x1=-1,y1=-1;
    for(let y=0;y<cell.height;y++)for(let x=0;x<cell.width;x++)if(data[(y*cell.width+x)*4+3]>32){x0=Math.min(x0,x);x1=Math.max(x1,x);y0=Math.min(y0,y);y1=Math.max(y1,y);}
    return x1<0?cell:this.crop(cell,x0/cell.width,y0/cell.height,(x1-x0+1)/cell.width,(y1-y0+1)/cell.height);
  },
  makePatterns(){
    const definitions={
      brick:[this.images.alley,.24,.02,.07,.09],wood:[this.images.alley,.65,.55,.04,.05],
      ground:[this.images.alley,.37,.969,.1,.025],wall:[this.scenes[1],.60,.20,.075,.16],
      floor:[this.scenes[1],.54,.946,.12,.04],cloth:[this.scenes[1],.10,.58,.035,.06],
      metal:[this.images.alley,.105,.82,.035,.07],water:[this.scenes[2],.42,.2,.12,.14],
      cheese:[this.scenes[4],.09,.20,.05,.055],grass:[this.scenes[7],.42,.04,.09,.04]
    };
    for(const [name,[image,x,y,w,h]] of Object.entries(definitions)){
      const patch=this.crop(image,x,y,w,h),pattern=this.bg.createPattern(patch,'repeat');
      pattern.setTransform(new DOMMatrix().scale(.2));this.patterns[name]=pattern;
    }
  },
  begin(frame,es,di){
    if(!this.ready || es!==0xb800 || frame.width>64 || frame.height>80)return;
    const x=((di&8191)%80)*4,y=Math.floor((di&8191)/80)*2+(di>=8192?1:0);
    if(x>=320||y>=200||frame.width<=0||frame.height<=0)return;
    let kind=frame.kind;
    const room=memoryAGet16(0x1010,4),playerX=memoryAGet16(0x1010,0x579),playerY=memoryAGet(0x1010,0x57b);
    if(Math.abs(x-playerX)<9 && Math.abs(y-playerY)<7 && frame.width<=32&&frame.height<=32)kind='player';
    else if(frame.height>30)kind='broom';
    else if(room===2 && frame.width<=16)kind='fish';
    else if(room===5&&kind==='mouse')kind='bird';
    else if(kind==='hazard')kind='blackcat';
    const now=game.time();let previous=null,distance=Infinity;
    for(const record of this.recent){
      if(record.kind!==kind||record.room!==room||now-record.at>160||now-record.at<0)continue;
      const delta=Math.hypot(record.x-x,record.y-y);
      if(delta<distance && delta<32){distance=delta;previous=record;}
    }
    const id=this.nextId++;
    const record={id,kind,room,x,y,width:frame.width,height:frame.height,source:frame.source,at:now,
      fromX:previous?.x??x,fromY:previous?.y??y,facing:previous&&x!==previous.x?Math.sign(x-previous.x):previous?.facing||1};
    if(kind==='player'){
      const motion=this.playerMotion;
      if(!motion||motion.room!==room)this.playerMotion={room,x:playerX,y:playerY,fromX:playerX,fromY:playerY,at:now,facing:1};
      else if(motion.x!==playerX||motion.y!==playerY)this.playerMotion={room,x:playerX,y:playerY,fromX:motion.x,fromY:motion.y,at:now,facing:playerX!==motion.x?Math.sign(playerX-motion.x):motion.facing};
      const current=this.playerMotion;
      record.fromX=x+current.fromX-playerX;record.fromY=y+current.fromY-playerY;record.at=current.at;record.facing=current.facing;
    }
    this.entities.set(id,record);frame.hdId=id;
    this.recent.push(record);if(this.recent.length>100)this.recent.shift();
    if(this.entities.size>3000){
      const live=new Set(this.provenance);live.add(id);
      for(const blit of colorArt.blits)if(blit.hdId)live.add(blit.hdId);
      for(const record of this.recent)live.add(record.id);
      for(const [key] of this.entities)if(!live.has(key))this.entities.delete(key);
    }
  },
  material(scene,x,y,index){
    const pixel=y*320+x;
    if(this.staticMetal[pixel])return 'metal';
    if(scene===0){
      if(y>=176)return index===0?'ink':'ground';
      if(y>=106)return index===0?'ink':'wood';
      return index===2?'brick':index===1?'glass':index===3?'cream':'ink';
    }
    if(scene===2)return index===2?'gold':index===0?'water':'water';
    if(scene===7)return index===2?'rose':index===0?'ink':index===3?'gold':'grass';
    if(scene===4&&colorArt.cheeseMask?.[pixel])return index===2?'hole':index===0?'rind':'cheese';
    const floor=scene===6?112:152;
    if(index===2)return y>=floor?'floor':'wall';
    if(index===0)return 'ink';
    if(scene===3 && x>=168&&x<296&&y>=39&&y<169)return 'books';
    return index===3?'cream':'cloth';
  },
  update(){
    if(!this.ready)return;
    const scene=game.phase==='title'?8:Math.min(7,memoryAGet16(0x1010,4));
    if(scene!==this.scene){this.scene=scene;this.backgroundPixels.fill(scene===0?2:scene===2?1:2);this.staticMetal.fill(0);this.dirty=true;}
    const metal=new Set(ART_PALETTES.metal.map(rgb=>artPack(rgb)>>>0));
    for(let y=0;y<200;y++)for(let x=0;x<320;x++){
      const pixel=y*320+x,addr=0xb8000+(y&1)*8192+(y>>1)*80+(x>>2),slot=addr*4+(x&3);
      if(this.entities.get(this.provenance[slot])?.room===scene)continue;
      const index=(ram[addr]>>(6-(x&3)*2))&3,isMetal=Number(metal.has(colorArt.layer[slot]));
      if(this.backgroundPixels[pixel]!==index||this.staticMetal[pixel]!==isMetal){this.backgroundPixels[pixel]=index;this.staticMetal[pixel]=isMetal;this.dirty=true;}
    }
  },
  components(test,diagonal=false){
    const visited=new Uint8Array(64000),result=[];
    for(let p=0;p<64000;p++)if(!visited[p]&&test(p%320,Math.floor(p/320))){
      const pixels=[p];visited[p]=1;let x0=320,x1=0,y0=200,y1=0;
      for(let i=0;i<pixels.length;i++){
        const at=pixels[i],x=at%320,y=Math.floor(at/320);x0=Math.min(x0,x);x1=Math.max(x1,x);y0=Math.min(y0,y);y1=Math.max(y1,y);
        const neighbors=[y>0?at-320:-1,y<199?at+320:-1,x>0?at-1:-1,x<319?at+1:-1];
        if(diagonal)for(const [dx,dy] of [[-1,-1],[1,-1],[-1,1],[1,1]])if(x+dx>=0&&x+dx<320&&y+dy>=0&&y+dy<200)neighbors.push(at+dy*320+dx);
        for(const n of neighbors)if(n>=0&&!visited[n]&&test(n%320,Math.floor(n/320))){visited[n]=1;pixels.push(n);}
      }
      result.push({pixels,x:x0,y:y0,width:x1-x0+1,height:y1-y0+1});
    }
    return result;
  },
  buildBackground(){
    const ctx=this.bg;ctx.setTransform(4,0,0,4,0,0);ctx.fillStyle='#eddfbd';ctx.fillRect(0,0,320,200);
    const masks=new Map(),scene=this.scene;
    for(let y=0;y<200;y++){
      let start=0,last=this.material(scene,0,y,this.backgroundPixels[y*320]);
      for(let x=1;x<=320;x++){
        const next=x<320?this.material(scene,x,y,this.backgroundPixels[y*320+x]):null;
        if(next!==last){if(!masks.has(last))masks.set(last,new Path2D());masks.get(last).rect(start,y,x-start,1);start=x;last=next;}
      }
    }
    const fills={ink:'#38291f',glass:'#294d53',cream:'#f0dfb1',gold:'#dfad48',rose:'#bd4c43',rind:'#a26924',hole:'#96551e',books:'#8d532e'};
    for(const [material,mask] of masks){ctx.save();ctx.clip(mask);ctx.fillStyle=this.patterns[material]||fills[material]||'#ddc391';ctx.fillRect(0,0,320,200);ctx.restore();}
    if(scene===0)for(const [material,target] of [['brick',[0,0,320,106]],['wood',[0,106,320,70]],['ground',[0,176,320,24]]])if(masks.has(material)){
      ctx.save();ctx.clip(masks.get(material));ctx.drawImage(this.materials[material],...target);ctx.restore();
    }
    const floor=scene===6?112:152,base=this.roomBase.getContext('2d');base.setTransform(4,0,0,4,0,0);
    if(scene>=1&&scene<=6&&scene!==2){
      base.filter=scene===5?'hue-rotate(70deg) saturate(.65)':scene===6?'hue-rotate(185deg) saturate(.55)':'none';
      base.drawImage(this.materials.wall,0,0,320,floor);base.filter='none';base.drawImage(this.materials.floor,0,floor,320,200-floor);
      for(const material of ['wall','floor'])if(masks.has(material)){ctx.save();ctx.clip(masks.get(material));ctx.drawImage(this.roomBase,0,0,320,200);ctx.restore();}
    }
    if(scene===2){ctx.save();ctx.clip(masks.get('water'));ctx.drawImage(this.materials.water,0,0,320,200);ctx.restore();}
    if(scene===4){
      ctx.save();const face=new Path2D();for(const material of ['cheese','hole'])if(masks.has(material))face.addPath(masks.get(material));ctx.clip(face);
      ctx.drawImage(this.materials.cheese,24,32,200,136);ctx.restore();
    }
    const erase=rect=>ctx.drawImage(this.roomBase,rect[0]*4,rect[1]*4,(rect[2]-rect[0])*4,(rect[3]-rect[1])*4,rect[0],rect[1],rect[2]-rect[0],rect[3]-rect[1]);
    const prop=(sprite,rect)=>{erase(rect);ctx.drawImage(sprite,rect[0],rect[1],rect[2]-rect[0],rect[3]-rect[1]);};
    const paint=(image,source,target,material)=>{
      const mask=masks.get(material);if(!mask)return;
      ctx.save();ctx.clip(mask);ctx.drawImage(image,...source,...target);ctx.restore();
    };
    if(scene===0){
      const image=this.images.alley;
      for(let row=0;row<3;row++)for(let col=0;col<4;col++)ctx.drawImage(image,image.width*.048,image.height*.112,image.width*.133,image.height*.092,20+col*80,24+row*32,40,16);
      ctx.save();ctx.clip(masks.get('cream'));ctx.fillStyle=this.patterns.brick;
      for(let row=0;row<3;row++)ctx.fillRect(0,8+row*32,320,3);ctx.restore();
      ctx.strokeStyle='#b59b63';ctx.lineWidth=.6;
      for(let row=0;row<3;row++){ctx.beginPath();ctx.moveTo(0,9+row*32);ctx.lineTo(320,9+row*32);ctx.stroke();}
      // Reproject each illustrated garment into its native component bounds.
      // The clothesline is left at its original height; platforms never move.
      const inWindow=(x,y)=>x%80>=17&&x%80<63&&y%32>=24;
      for(const garment of this.components((x,y)=>y<106&&y%32>10&&!inWindow(x,y)&&this.backgroundPixels[y*320+x]===3)){
        if(garment.pixels.length<6)continue;
        ctx.save();ctx.clip(masks.get('cream'));ctx.beginPath();ctx.rect(garment.x,garment.y,garment.width,garment.height);ctx.clip();ctx.drawImage(this.materials.brick,0,0,320,106);ctx.restore();
        const type=garment.height>8?2:garment.width>9?1:0;
        ctx.drawImage(this.props[type],garment.x,garment.y-2,garment.width,garment.height+2);
      }
      // Every original graffiti pixel remains a brush anchor at the same
      // location. Rounded strokes soften the CGA lettering without moving it.
      ctx.save();ctx.clip(masks.get('ink'));ctx.drawImage(this.materials.wood,0,106,320,70);ctx.restore();
      const mark=(x,y)=>x>=0&&x<320&&y>=106&&y<176&&!this.staticMetal[y*320+x]&&this.backgroundPixels[y*320+x]===0;
      ctx.save();ctx.beginPath();ctx.rect(0,106,320,70);ctx.clip();ctx.strokeStyle='#422e23';ctx.fillStyle='#422e23';ctx.lineWidth=1;ctx.lineCap='round';ctx.lineJoin='round';
      for(let y=106;y<176;y++)for(let x=0;x<320;x++)if(mark(x,y)){
        ctx.beginPath();ctx.arc(x+.5,y+.5,.5,0,Math.PI*2);ctx.fill();
        for(const [dx,dy] of [[1,0],[0,1],[1,1],[-1,1]])if(mark(x+dx,y+dy)){
          ctx.beginPath();ctx.moveTo(x+.5,y+.5);ctx.lineTo(x+dx+.5,y+dy+.5);ctx.stroke();
        }
      }ctx.restore();
      for(const bone of this.components((x,y)=>y>=176&&this.backgroundPixels[y*320+x]===0,true))if(bone.width>=12&&bone.height<=8){
        ctx.save();ctx.beginPath();ctx.rect(bone.x,bone.y,bone.width,bone.height);ctx.clip();ctx.drawImage(this.materials.ground,0,176,320,24);ctx.restore();ctx.drawImage(this.props[4],bone.x,bone.y,bone.width,bone.height);
      }
    }else if(scene>=1&&scene<=6&&scene!==2){
      const chairs=ART_CHAIRS[scene]||[],tables={1:[[64,143,116,181],[212,143,254,181]],4:[[256,143,296,181]],5:[[128,143,184,181]]}[scene]||[];
      const lamps={1:[[268,112,294,181]],3:[[16,112,40,181],[136,112,160,181]],6:[[272,72,296,140]]}[scene]||[];
      const curtains={1:[128,86,192,112],3:[64,86,128,112],4:[232,86,296,112],5:[216,86,280,112],6:[40,46,104,72]};
      for(const rect of chairs){
        erase(rect);const chair=this.furniture[0],w=rect[2]-rect[0],h=rect[3]-rect[1],seat=Math.round(h*.72);
        ctx.drawImage(chair,0,0,chair.width,chair.height*.62,rect[0],rect[1],w,seat);
        ctx.drawImage(chair,0,chair.height*.62,chair.width,chair.height*.38,rect[0],rect[1]+seat,w,h-seat);
      }
      for(const rect of tables)prop(this.furniture[1],rect);
      for(const rect of lamps)prop(this.furniture[2],rect);
      if(curtains[scene]){
        const rect=curtains[scene],window=this.furniture[3];erase(rect);
        ctx.drawImage(window,0,0,window.width*.36,window.height,rect[0],rect[1],16,26);
        ctx.drawImage(window,window.width*.36,0,window.width*.28,window.height*.70,rect[0]+16,rect[1],32,18);
        ctx.drawImage(window,window.width*.64,0,window.width*.36,window.height,rect[0]+48,rect[1],16,26);
      }
      if(scene===1)prop(this.furniture[5],[226,134,242,144]);
      if(scene===3){
        const books=this.furniture[4];prop(books,[168,39,296,169]);
        for(let row=0;row<8;row++)ctx.drawImage(books,books.width*.13,books.height*.18,books.width*.74,books.height*.16,174,42+row*16,116,13);
        for(const x of [192,224,256]){
          let count=0;for(let y=24;y<40;y++)for(let xx=x;xx<x+16;xx++)if([1,3].includes(this.backgroundPixels[y*320+xx]))count++;
          if(count>20)prop(this.details[2],[x,24,x+16,40]);
        }
      }
      if(scene===5){prop(this.details[1],[144,133,166,152]);prop(this.details[3],[88,88,104,104]);}
      if(scene===6)prop(this.details[4],[248,40,264,56]);
      const excluded=[...chairs,...tables,...lamps,...(curtains[scene]?[curtains[scene]]:[]),...(scene===3?[[168,20,296,169]]:[])];
      for(const broom of this.components((x,y)=>y>=70&&this.backgroundPixels[y*320+x]===3&&!excluded.some(rect=>artInside(rect,x,y))))if(broom.height>=18&&broom.width<=16){
        prop(this.sprites[8],[broom.x,broom.y,broom.x+broom.width,broom.y+broom.height]);
      }
      if(scene===6){
        for(const bowl of this.components((x,y)=>y>=140&&this.backgroundPixels[y*320+x]===1&&!excluded.some(rect=>artInside(rect,x,y))))if(bowl.width>=8&&bowl.width<=24&&bowl.height<=12)prop(this.sprites[9],[bowl.x,bowl.y,bowl.x+bowl.width,bowl.y+bowl.height]);
        for(const dog of this.components((x,y)=>y>=140&&this.backgroundPixels[y*320+x]===3))if(dog.width>=25&&dog.height<=18)prop(this.details[0],[dog.x,dog.y,dog.x+dog.width,dog.y+dog.height]);
      }
    }
    // Native trash-can masks are connected components. Map the illustrated
    // can donor into their exact original bounding rectangles.
    if(masks.has('metal')){
      const visited=new Uint8Array(64000);
      for(let p=0;p<64000;p++)if(this.staticMetal[p]&&!visited[p]){
        const queue=[p];visited[p]=1;let x0=320,x1=0,y0=200,y1=0;
        for(let i=0;i<queue.length;i++){
          const at=queue[i],x=at%320,y=Math.floor(at/320);x0=Math.min(x0,x);x1=Math.max(x1,x);y0=Math.min(y0,y);y1=Math.max(y1,y);
          for(const n of [at-320,at+320,x>0?at-1:-1,x<319?at+1:-1])if(n>=0&&n<64000&&this.staticMetal[n]&&!visited[n]){visited[n]=1;queue.push(n);}
        }
        if(queue.length>50){const image=this.images.alley;paint(image,[image.width*.075,image.height*.733,image.width*.124,image.height*.204],[x0,y0,x1-x0+1,y1-y0+1],'metal');}
      }
    }
    if(scene===4&&masks.has('hole')){
      const visited=new Uint8Array(64000);
      for(let p=0;p<64000;p++)if(colorArt.cheeseMask?.[p]&&this.backgroundPixels[p]===2&&!visited[p]){
        const queue=[p];visited[p]=1;let x0=320,x1=0,y0=200,y1=0;
        for(let i=0;i<queue.length;i++){
          const at=queue[i],x=at%320,y=Math.floor(at/320);x0=Math.min(x0,x);x1=Math.max(x1,x);y0=Math.min(y0,y);y1=Math.max(y1,y);
          for(const n of [at-320,at+320,x>0?at-1:-1,x<319?at+1:-1])if(n>=0&&n<64000&&colorArt.cheeseMask[n]&&this.backgroundPixels[n]===2&&!visited[n]){visited[n]=1;queue.push(n);}
        }
        if(queue.length<12)continue;
        ctx.save();
        const shade=ctx.createLinearGradient(0,y0,0,y1+1);shade.addColorStop(0,'#663710');shade.addColorStop(.6,'#b77820');shade.addColorStop(1,'#f5c762');
        ctx.fillStyle=shade;ctx.beginPath();ctx.ellipse((x0+x1+1)/2,(y0+y1+1)/2,(x1-x0+1)/2,(y1-y0+1)/2,0,0,Math.PI*2);ctx.fill();ctx.restore();
      }
    }
    this.dirty=false;
  },
  render(){
    if(!this.ready)return;
    const visible=colorArt.mode==='hd';this.canvas.hidden=!visible;if(!visible)return;
    const ctx=this.ctx;ctx.setTransform(4,0,0,4,0,0);ctx.imageSmoothingEnabled=true;ctx.imageSmoothingQuality='high';
    if(game.phase==='title'){ctx.drawImage(this.scenes[8],0,0,320,200);return;}
    if(['keyboard','difficulty','ready','paused'].includes(game.phase)){
      const shade=ctx.createLinearGradient(0,0,320,200);shade.addColorStop(0,'#fbefd1');shade.addColorStop(1,'#ceb486');ctx.fillStyle=shade;ctx.fillRect(0,0,320,200);
      ctx.fillStyle='#463525';ctx.textAlign='center';ctx.font='italic 19px Georgia';
      ctx.fillText(game.phase==='paused'?'Paws for a moment…':game.phase==='difficulty'?'Choose your adventure':'The alley is yours',160,67);
      ctx.font='10px Georgia';ctx.fillText(game.phase==='difficulty'?'Kitten · House Cat · Tomcat · Alley Cat':'Use the controls panel to continue',160,94);return;
    }
    if(this.dirty)this.buildBackground();ctx.drawImage(this.background,0,0,320,200);
    const visibleIds=new Set();
    for(let y=0;y<200;y++)for(let x=0;x<320;x++){
      const addr=0xb8000+(y&1)*8192+(y>>1)*80+(x>>2);const id=this.provenance[addr*4+(x&3)];if(id)visibleIds.add(id);
    }
    const records=Array.from(visibleIds,id=>this.entities.get(id)).filter(record=>record?.room===this.scene);
    const player=records.filter(record=>record.kind==='player');
    if(player.length>1){
      const x=Math.min(...player.map(record=>record.x)),y=Math.min(...player.map(record=>record.y));
      const x1=Math.max(...player.map(record=>record.x+record.width)),y1=Math.max(...player.map(record=>record.y+record.height));
      // The PC draws the player's top and bottom in separate blits. Compose
      // those pieces into one illustration, using their original union bounds.
      const top=player.reduce((a,b)=>a.y<=b.y?a:b);
      records.splice(0,records.length,...records.filter(record=>record.kind!=='player'),{...top,id:Math.max(...player.map(record=>record.id)),x,y,width:x1-x,height:y1-y});
    }
    this.renderedRecords=records.sort((a,b)=>a.id-b.id);
    for(const record of this.renderedRecords){
      const alpha=game.phase==='playing'?Math.max(0,Math.min(1,(game.time()-record.at)/55)):1;
      const x=record.fromX+(record.x-record.fromX)*alpha,y=record.fromY+(record.y-record.fromY)*alpha;
      let sprite={dog:4,mouse:5,spider:6,fish:7,broom:8,bird:10,romance:11}[record.kind]??0;
      if(record.kind==='player'||record.kind==='cat')sprite=record.y<record.fromY?3:Math.floor(record.source/2)%3;
      if(record.kind==='bubble'){
        ctx.strokeStyle='#d9f3ec';ctx.lineWidth=.45;ctx.beginPath();ctx.ellipse(x+record.width/2,y+record.height/2,record.width/2,record.height/2,0,0,Math.PI*2);ctx.stroke();continue;
      }
      ctx.save();ctx.translate(x+(record.facing<0?record.width:0),y);ctx.scale(record.facing<0?-1:1,1);
      ctx.drawImage(record.kind==='blackcat'?this.props[3]:record.kind==='fish'?this.props[5]:record.kind==='bird'?this.details[5]:this.sprites[sprite],0,0,record.width,record.height);ctx.restore();
    }
  },
  capture(){return {provenance:sparseLayer(this.provenance),entities:Array.from(this.entities.values(),record=>({...record})),nextId:this.nextId,
    scene:this.scene,backgroundPixels:this.backgroundPixels.slice(),staticMetal:this.staticMetal.slice(),playerMotion:this.playerMotion?{...this.playerMotion}:null};},
  restore(state){
    this.reset();if(!state)return;
    for(let i=0;i<state.provenance.length;i+=2)this.provenance[state.provenance[i]]=state.provenance[i+1];
    this.entities=new Map(state.entities.map(record=>[record.id,{...record}]));this.recent=Array.from(this.entities.values()).slice(-100);this.nextId=state.nextId;this.scene=state.scene;
    this.backgroundPixels.set(state.backgroundPixels);this.staticMetal.set(state.staticMetal);this.dirty=true;
    this.playerMotion=state.playerMotion?{...state.playerMotion}:null;
  }
};
