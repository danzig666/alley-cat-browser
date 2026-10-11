// Ahead-of-time translation of the matching Alley Cat binary.
function* start() {
  let pc=0;
  const frame=execution.enter('start',pc);pc=frame.pc;
  let skipBudget=frame.budget || execution.restoring;
  try {
  if(execution.restoring && execution.pending.length===0) {
    execution.restoring=false;
    if(frame.parked!==null) {yield frame.parked;frame.parked=null;frame.budget=false;}
  }
  dispatch: while (true) {
    if (!skipBudget && (++game.steps & 1023) === 0) {
      frame.pc=pc;frame.budget=true;frame.parked=0;yield 0;
      frame.parked=null;frame.budget=false;
    }
    skipBudget=false;
    switch(pc) {
    case 0:
r.cs=0x1723; r.ds=0x1713; r.es=0x1713; r.ss=0x1000; r.sp=0x100; frame.pc=2097153;
case 2097153:
yield* sub_17230();
frame.pc=2097154;
case 2097154:;
      return;
    default: throw new Error("Invalid control flow in start");
    }
  }
  } finally {execution.leave(frame);}
}

function* sub_17230() {
  let pc=0;
  const frame=execution.enter('sub_17230',pc);pc=frame.pc;
  let skipBudget=frame.budget || execution.restoring;
  try {
  if(execution.restoring && execution.pending.length===0) {
    execution.restoring=false;
    if(frame.parked!==null) {yield frame.parked;frame.parked=null;frame.budget=false;}
  }
  dispatch: while (true) {
    if (!skipBudget && (++game.steps & 1023) === 0) {
      frame.pc=pc;frame.budget=true;frame.parked=0;yield 0;
      frame.parked=null;frame.budget=false;
    }
    skipBudget=false;
    switch(pc) {
    case 0:

    push(r.ds);
    r.ax = 0x0000;
    push(r.ax);
    frame.pc=2097153;
case 2097153:
yield* sub_1ce90();
frame.pc=2097154;
case 2097154:;
    r.ax = 0x1010;
    r.ds = r.ax;
    frame.pc=2097155;
case 2097155:
yield* sub_185da();
frame.pc=2097156;
case 2097156:;
    memoryASet(r.ds, 0x0690, 0x04);
    memoryASet16(r.ds, 0x6df8, 0x0000);
    memoryASet(r.ds, 0x069b, 0x00);
    frame.pc=2097157;
case 2097157:
yield* sub_18649();
frame.pc=2097158;
case 2097158:;
    frame.pc=2097159;
case 2097159:
yield* sub_18618();
frame.pc=2097160;
case 2097160:;
    r.ax = memoryAGet16(r.ds, 0x0693);
    r.ax += 0x0240;
    memoryASet16(r.ds, 0x6e00, r.ax);
    r.ax = 0x0004;
    frame.pc=2097161;
case 2097161:
yield* interrupt(0x10);
frame.pc=2097162;
case 2097162:;
    r.al = 0x04;
    if (memoryAGet(r.ds, 0x0697) == 0xfd)
        { pc = 0x1726f; continue dispatch; }
    r.al = 0x06;
case 0x1726f:
    memoryASet(r.ds, 0x0690, r.al);
    r.ah = 0x0b;
    r.bx = 0x0101;
    frame.pc=2097163;
case 2097163:
yield* interrupt(0x10);
frame.pc=2097164;
case 2097164:;
    memoryASet16(r.ds, 0x0416, 0x0000);
    memoryASet16(r.ds, 0x0004, 0x0000);
    frame.pc=2097165;
case 2097165:
yield* sub_18f61();
frame.pc=2097166;
case 2097166:;
    if (memoryAGet(r.ds, 0x0697) == 0xfd)
        { pc = 0x17295; continue dispatch; }
    r.dx = 0x03d9;
    r.al = 0x20;
    out(r.dx, r.al);
case 0x17295:
    frame.pc=2097167;
case 2097167:
yield* sub_1a040();
frame.pc=2097168;
case 2097168:;
    frame.pc=2097169;
case 2097169:
yield* sub_19911();
frame.pc=2097170;
case 2097170:;
    frame.pc=2097171;
case 2097171:
yield* sub_1990a();
frame.pc=2097172;
case 2097172:;
    memoryASet(r.ds, 0x041a, 0x00);
    r.ax = 0xffff;
    memoryASet16(r.ds, 0x041d, r.ax);
    memoryASet16(r.ds, 0x041f, r.ax);
    memoryASet(r.ds, 0x0000, 0xff);
case 0x172b1:
    frame.pc=2097173;
case 2097173:
yield* sub_198c0();
frame.pc=2097174;
case 2097174:;
    memoryASet16(r.ds, 0x0008, 0x0000);
    memoryASet16(r.ds, 0x0004, 0x0000);
    frame.pc=2097175;
case 2097175:
yield* sub_18f61();
frame.pc=2097176;
case 2097176:;
    frame.pc=2097177;
case 2097177:
yield* sub_1cd51();
frame.pc=2097178;
case 2097178:;
    frame.pc=2097179;
case 2097179:
yield* sub_1cee0();
frame.pc=2097180;
case 2097180:;
    frame.pc=2097181;
case 2097181:
yield* sub_1cd51();
frame.pc=2097182;
case 2097182:;
    if (memoryAGet(r.ds, 0x041a) != 0x00)
        { pc = 0x172de; continue dispatch; }
case 0x172d3:
    frame.pc=2097183;
case 2097183:
yield* sub_1cd51();
frame.pc=2097184;
case 2097184:;
    frame.pc=2097185;
case 2097185:
yield* sub_1d115();
frame.pc=2097186;
case 2097186:;
    memoryASet(r.ds, 0x041a, 0x01);
case 0x172de: game.phase="booting";
    r.ax = memoryAGet16(r.ds, 0x6df8);
    memoryASet16(r.ds, 0x0008, r.ax);
    memoryASet(r.ds, 0x1f80, 0x03);
    frame.pc=2097187;
case 2097187:
yield* sub_1990a();
frame.pc=2097188;
case 2097188:;
    memoryASet16(r.ds, 0x0004, 0x0000);
    frame.pc=2097189;
case 2097189:
yield* sub_18f61();
frame.pc=2097190;
case 2097190:;
    frame.pc=2097191;
case 2097191:
yield* sub_1cd51();
frame.pc=2097192;
case 2097192:;
    memoryASet16(r.ds, 0x1c30, 0x0000);
    r.ah = 0;
    frame.pc=2097193;
case 2097193:
yield* interrupt(0x1a);
frame.pc=2097194;
case 2097194:;
    memoryASet16(r.ds, 0x0412, r.dx);
    memoryASet16(r.ds, 0x0414, 0x0000);
    memoryASet(r.ds, 0x0418, 0x00);
    memoryASet(r.ds, 0x0419, 0x00);
    memoryASet(r.ds, 0x041c, 0x00);
    memoryASet(r.ds, 0x041b, 0x00);
    frame.pc=2097195;
case 2097195:
yield* sub_1cd51();
frame.pc=2097196;
case 2097196:;
case 0x17323:
    if (memoryAGet(r.ds, 0x1f80) == 0x00)
        { pc = 0x172b1; continue dispatch; }
    if (memoryAGet(r.ds, 0x041b) != 0x00)
        { pc = 0x172de; continue dispatch; }
    if (memoryAGet(r.ds, 0x041c) != 0x00)
        { pc = 0x172d3; continue dispatch; }
    frame.pc=2097197;
case 2097197:
yield* sub_19c30();
frame.pc=2097198;
case 2097198:;
    frame.pc=2097199;
case 2097199:
yield* sub_1c630();
frame.pc=2097200;
case 2097200:;
    memoryASet(r.ds, 0x1f81, 0xff);
    frame.pc=2097201;
case 2097201:
yield* sub_1cd51();
frame.pc=2097202;
case 2097202:;
    memoryASet16(r.ds, 0x0004, 0x0000);
    if (memoryAGet(r.ds, 0x0419) == 0x00)
        { pc = 0x17367; continue dispatch; }
    frame.pc=2097203;
case 2097203:
yield* sub_179d1();
frame.pc=2097204;
case 2097204:;
    memoryASet(r.ds, 0x0550, 0x02);
    memoryASet(r.ds, 0x0576, 0x01);
    memoryASet(r.ds, 0x0578, 0x20);
    { pc = 0x17370; continue dispatch; }
case 0x17367:
    memoryASet16(r.ds, 0x0579, 0x0000);
    frame.pc=2097205;
case 2097205:
yield* sub_1793d();
frame.pc=2097206;
case 2097206:;
case 0x17370:
    frame.pc=2097207;
case 2097207:
yield* sub_19070();
frame.pc=2097208;
case 2097208:;
    frame.pc=2097209;
case 2097209:
yield* sub_18a60();
frame.pc=2097210;
case 2097210:;
    frame.pc=2097211;
case 2097211:
yield* sub_19440();
frame.pc=2097212;
case 2097212:;
    frame.pc=2097213;
case 2097213:
yield* sub_19560();
frame.pc=2097214;
case 2097214:;
    frame.pc=2097215;
case 2097215:
yield* sub_19922();
frame.pc=2097216;
case 2097216:;
    frame.pc=2097217;
case 2097217:
yield* sub_1992c();
frame.pc=2097218;
case 2097218:;
    frame.pc=2097219;
case 2097219:
yield* sub_1caed();
frame.pc=2097220;
case 2097220:;
case 0x17385: game.phase="playing";
    if (memoryAGet(r.ds, 0x1f80) != 0x00)
        { pc = 0x1738f; continue dispatch; }
    { pc = 0x172b1; continue dispatch; }
case 0x1738f:
    frame.pc=2097221;
case 2097221:
yield* sub_18568();
frame.pc=2097222;
case 2097222:;
    if (memoryAGet(r.ds, 0x041c) == 0x00)
        { pc = 0x1739c; continue dispatch; }
    { pc = 0x172d3; continue dispatch; }
case 0x1739c:
    if (memoryAGet(r.ds, 0x041b) == 0x00)
        { pc = 0x173a6; continue dispatch; }
    { pc = 0x172de; continue dispatch; }
case 0x173a6:
    frame.pc=2097223;
case 2097223:
yield* sub_18430();
frame.pc=2097224;
case 2097224:;
    frame.pc=2097225;
case 2097225:
yield* sub_17b15();
frame.pc=2097226;
case 2097226:;
    frame.pc=2097227;
case 2097227:
yield* sub_19093();
frame.pc=2097228;
case 2097228:;
    if (memoryAGet(r.ds, 0x1cb8) != 0x00)
        { pc = 0x173c1; continue dispatch; }
    memoryASet(r.ds, 0x040f, memoryAGet(r.ds, 0x040f) + 1);
    if (memoryAGet(r.ds, 0x040f) & 0x03)
        { pc = 0x17385; continue dispatch; }
case 0x173c1:
    frame.pc=2097229;
case 2097229:
yield* sub_1c69d();
frame.pc=2097230;
case 2097230:;
    frame.pc=2097231;
case 2097231:
yield* sub_176d0();
frame.pc=2097232;
case 2097232:;
    frame.pc=2097233;
case 2097233:
yield* sub_18b66();
frame.pc=2097234;
case 2097234:;
    frame.pc=2097235;
case 2097235:
yield* sub_18a7b();
frame.pc=2097236;
case 2097236:;
    frame.pc=2097237;
case 2097237:
yield* sub_19446();
frame.pc=2097238;
case 2097238:;
    frame.pc=2097239;
case 2097239:
yield* sub_195ab();
frame.pc=2097240;
case 2097240:;
    frame.pc=2097241;
case 2097241:
yield* sub_198e3();
frame.pc=2097242;
case 2097242:;
    if (memoryAGet(r.ds, 0x0551) == 0x00)
        { pc = 0x17385; continue dispatch; }
    if (memoryAGet(r.ds, 0x1f80) != 0x00)
        { pc = 0x173e7; continue dispatch; }
    { pc = 0x172b1; continue dispatch; }
case 0x173e7: game.phase="entering";
    r.ah = 0;
    frame.pc=2097243;
case 2097243:
yield* interrupt(0x1a);
frame.pc=2097244;
case 2097244:;
    memoryASet16(r.ds, 0x0410, r.dx);
    r.ax = memoryAGet16(r.ds, 0x0579);
    memoryASet16(r.ds, 0x0001, r.ax);
    r.al = memoryAGet(r.ds, 0x057b);
    memoryASet(r.ds, 0x0003, r.al);
    memoryASet(r.ds, 0x0419, 0x01);
    if (memoryAGet(r.ds, 0x0418) == 0x00)
        { pc = 0x17415; continue dispatch; }
    memoryASet(r.ds, 0x0418, 0x00);
    memoryASet16(r.ds, 0x0004, 0x0007);
    { pc = 0x17468; continue dispatch; }
case 0x17415:
    frame.pc=2097245;
case 2097245:
yield* sub_1a02d();
frame.pc=2097246;
case 2097246:;
    if (!(r.dl & 0xa0))
        { pc = 0x1743a; continue dispatch; }
    r.bx = memoryAGet16(r.ds, 0x0008);
    r.bx &= 0x0003;
    if (r.bx == 0x0003)
        { pc = 0x1743a; continue dispatch; }
    r.cl = 0x02;
    r.bx <<= r.cl;
    r.dx &= 0x0003;
    r.bx += r.dx;
    r.al = memoryAGet(r.ds, r.bx + 1057);
    { pc = 0x1744c; continue dispatch; }
case 0x1743a:
    frame.pc=2097247;
case 2097247:
yield* sub_1a02d();
frame.pc=2097248;
case 2097248:;
    r.dx &= 0x0007;
    if (r.dx >= 0x0005)
        { pc = 0x1743a; continue dispatch; }
    r.bx = r.dx;
    r.al = memoryAGet(r.ds, r.bx + 1069);
case 0x1744c:
    r.ah = 0;
    if (r.ax != memoryAGet16(r.ds, 0x041d))
        { pc = 0x1745a; continue dispatch; }
    if (r.ax == memoryAGet16(r.ds, 0x041f))
        { pc = 0x17415; continue dispatch; }
case 0x1745a:
    memoryASet16(r.ds, 0x0004, r.ax);
    r.cx = memoryAGet16(r.ds, 0x041d);
    memoryASet16(r.ds, 0x041f, r.cx);
    memoryASet16(r.ds, 0x041d, r.ax);
case 0x17468:
    memoryASet16(r.ds, 0x0006, 0x0000);
    r.bx = memoryAGet16(r.ds, 0x0004);
    if (r.bx <= 0x0007)
        { pc = 0x17479; continue dispatch; }
    r.bx = 0;
case 0x17479:
    r.bx <<= 1;
    if (r.bx == 0) { pc = 0x17612; continue dispatch; }
if (r.bx == 2) { pc = 0x17612; continue dispatch; }
if (r.bx == 4) { pc = 0x17689; continue dispatch; }
if (r.bx == 6) { pc = 0x175c4; continue dispatch; }
if (r.bx == 8) { pc = 0x17579; continue dispatch; }
if (r.bx == 10) { pc = 0x1752e; continue dispatch; }
if (r.bx == 12) { pc = 0x174da; continue dispatch; }
if (r.bx == 14) { pc = 0x17490; continue dispatch; }
throw new Error("Invalid room dispatch");

case 0x17490:
    memoryASet16(r.ds, 0x0004, 0x0007);
    frame.pc=2097249;
case 2097249:
yield* sub_18e20();
frame.pc=2097250;
case 2097250:;
    frame.pc=2097251;
case 2097251:
yield* sub_199c0();
frame.pc=2097252;
case 2097252:;
    frame.pc=2097253;
case 2097253:
yield* sub_179d1();
frame.pc=2097254;
case 2097254:;
    frame.pc=2097255;
case 2097255:
yield* sub_19070();
frame.pc=2097256;
case 2097256:;
    frame.pc=2097257;
case 2097257:
yield* sub_1a635();
frame.pc=2097258;
case 2097258:;
    frame.pc=2097259;
case 2097259:
yield* sub_1d330();
frame.pc=2097260;
case 2097260:;
    frame.pc=2097261;
case 2097261:
yield* sub_1c189();
frame.pc=2097262;
case 2097262:;
    frame.pc=2097263;
case 2097263:
yield* sub_1caed();
frame.pc=2097264;
case 2097264:;
case 0x174ae: game.phase="playing";
    frame.pc=2097265;
case 2097265:
yield* sub_18568();
frame.pc=2097266;
case 2097266:;
    frame.pc=2097267;
case 2097267:
yield* sub_18430();
frame.pc=2097268;
case 2097268:;
    frame.pc=2097269;
case 2097269:
yield* sub_1c69d();
frame.pc=2097270;
case 2097270:;
    frame.pc=2097271;
case 2097271:
yield* sub_17b15();
frame.pc=2097272;
case 2097272:;
    frame.pc=2097273;
case 2097273:
yield* sub_1d336();
frame.pc=2097274;
case 2097274:;
    frame.pc=2097275;
case 2097275:
yield* sub_1a196();
frame.pc=2097276;
case 2097276:;
    frame.pc=2097277;
case 2097277:
yield* sub_1a090();
frame.pc=2097278;
case 2097278:;
    frame.pc=2097279;
case 2097279:
yield* sub_1be40();
frame.pc=2097280;
case 2097280:;
    r.al = memoryAGet(r.ds, 0x0551);
    r.al |= memoryAGet(r.ds, 0x0553);
    r.al |= memoryAGet(r.ds, 0x041c);
    r.al |= memoryAGet(r.ds, 0x041b);
    if (!r.al)
        { pc = 0x174ae; continue dispatch; }
    { pc = 0x17657; continue dispatch; }
case 0x174da:
    memoryASet16(r.ds, 0x0004, 0x0006);
    frame.pc=2097281;
case 2097281:
yield* sub_18e20();
frame.pc=2097282;
case 2097282:;
    frame.pc=2097283;
case 2097283:
yield* sub_199c0();
frame.pc=2097284;
case 2097284:;
    frame.pc=2097285;
case 2097285:
yield* sub_1be30();
frame.pc=2097286;
case 2097286:;
    frame.pc=2097287;
case 2097287:
yield* sub_179d1();
frame.pc=2097288;
case 2097288:;
    frame.pc=2097289;
case 2097289:
yield* sub_1a635();
frame.pc=2097290;
case 2097290:;
    frame.pc=2097291;
case 2097291:
yield* sub_19070();
frame.pc=2097292;
case 2097292:;
    frame.pc=2097293;
case 2097293:
yield* sub_1caed();
frame.pc=2097294;
case 2097294:;
case 0x174f5: game.phase="playing";
    frame.pc=2097295;
case 2097295:
yield* sub_18568();
frame.pc=2097296;
case 2097296:;
    frame.pc=2097297;
case 2097297:
yield* sub_18430();
frame.pc=2097298;
case 2097298:;
    frame.pc=2097299;
case 2097299:
yield* sub_1c69d();
frame.pc=2097300;
case 2097300:;
    frame.pc=2097301;
case 2097301:
yield* sub_1bb73();
frame.pc=2097302;
case 2097302:;
    frame.pc=2097303;
case 2097303:
yield* sub_1ba06();
frame.pc=2097304;
case 2097304:;
    frame.pc=2097305;
case 2097305:
yield* sub_17b15();
frame.pc=2097306;
case 2097306:;
    if (memoryAGet(r.ds, 0x1cb8) == 0x00)
        { pc = 0x17513; continue dispatch; }
    frame.pc=2097307;
case 2097307:
yield* sub_19093();
frame.pc=2097308;
case 2097308:;
    { pc = 0x17516; continue dispatch; }
case 0x17513:
    frame.pc=2097309;
case 2097309:
yield* sub_1a380();
frame.pc=2097310;
case 2097310:;
case 0x17516:
    r.al = memoryAGet(r.ds, 0x0551);
    r.al |= memoryAGet(r.ds, 0x0552);
    r.al |= memoryAGet(r.ds, 0x0553);
    r.al |= memoryAGet(r.ds, 0x041b);
    r.al |= memoryAGet(r.ds, 0x041c);
    if (!r.al)
        { pc = 0x174f5; continue dispatch; }
    { pc = 0x17657; continue dispatch; }
case 0x1752e:
    memoryASet16(r.ds, 0x0004, 0x0005);
    frame.pc=2097311;
case 2097311:
yield* sub_18e20();
frame.pc=2097312;
case 2097312:;
    frame.pc=2097313;
case 2097313:
yield* sub_199c0();
frame.pc=2097314;
case 2097314:;
    frame.pc=2097315;
case 2097315:
yield* sub_1b7aa();
frame.pc=2097316;
case 2097316:;
    frame.pc=2097317;
case 2097317:
yield* sub_179d1();
frame.pc=2097318;
case 2097318:;
    frame.pc=2097319;
case 2097319:
yield* sub_1a635();
frame.pc=2097320;
case 2097320:;
    frame.pc=2097321;
case 2097321:
yield* sub_19070();
frame.pc=2097322;
case 2097322:;
    frame.pc=2097323;
case 2097323:
yield* sub_1caed();
frame.pc=2097324;
case 2097324:;
case 0x17549: game.phase="playing";
    frame.pc=2097325;
case 2097325:
yield* sub_18568();
frame.pc=2097326;
case 2097326:;
    frame.pc=2097327;
case 2097327:
yield* sub_18430();
frame.pc=2097328;
case 2097328:;
    frame.pc=2097329;
case 2097329:
yield* sub_1c69d();
frame.pc=2097330;
case 2097330:;
    frame.pc=2097331;
case 2097331:
yield* sub_1b7db();
frame.pc=2097332;
case 2097332:;
    frame.pc=2097333;
case 2097333:
yield* sub_1b570();
frame.pc=2097334;
case 2097334:;
    frame.pc=2097335;
case 2097335:
yield* sub_17b15();
frame.pc=2097336;
case 2097336:;
    frame.pc=2097337;
case 2097337:
yield* sub_1a380();
frame.pc=2097338;
case 2097338:;
    frame.pc=2097339;
case 2097339:
yield* sub_19093();
frame.pc=2097340;
case 2097340:;
    r.al = memoryAGet(r.ds, 0x0552);
    r.al |= memoryAGet(r.ds, 0x0553);
    r.al |= memoryAGet(r.ds, 0x0551);
    r.al |= memoryAGet(r.ds, 0x041c);
    r.al |= memoryAGet(r.ds, 0x041b);
    if (!r.al)
        { pc = 0x17549; continue dispatch; }
    { pc = 0x17657; continue dispatch; }
case 0x17579:
    memoryASet16(r.ds, 0x0004, 0x0004);
    frame.pc=2097341;
case 2097341:
yield* sub_18e20();
frame.pc=2097342;
case 2097342:;
    frame.pc=2097343;
case 2097343:
yield* sub_199c0();
frame.pc=2097344;
case 2097344:;
    frame.pc=2097345;
case 2097345:
yield* sub_179d1();
frame.pc=2097346;
case 2097346:;
    frame.pc=2097347;
case 2097347:
yield* sub_1a635();
frame.pc=2097348;
case 2097348:;
    frame.pc=2097349;
case 2097349:
yield* sub_19070();
frame.pc=2097350;
case 2097350:;
    frame.pc=2097351;
case 2097351:
yield* sub_1b2c0();
frame.pc=2097352;
case 2097352:;
    frame.pc=2097353;
case 2097353:
yield* sub_1caed();
frame.pc=2097354;
case 2097354:;
case 0x17594: game.phase="playing";
    frame.pc=2097355;
case 2097355:
yield* sub_18568();
frame.pc=2097356;
case 2097356:;
    frame.pc=2097357;
case 2097357:
yield* sub_18430();
frame.pc=2097358;
case 2097358:;
    frame.pc=2097359;
case 2097359:
yield* sub_1c69d();
frame.pc=2097360;
case 2097360:;
    frame.pc=2097361;
case 2097361:
yield* sub_17b15();
frame.pc=2097362;
case 2097362:;
    frame.pc=2097363;
case 2097363:
yield* sub_1b0c0();
frame.pc=2097364;
case 2097364:;
    frame.pc=2097365;
case 2097365:
yield* sub_1b2f2();
frame.pc=2097366;
case 2097366:;
    frame.pc=2097367;
case 2097367:
yield* sub_1a380();
frame.pc=2097368;
case 2097368:;
    frame.pc=2097369;
case 2097369:
yield* sub_19093();
frame.pc=2097370;
case 2097370:;
    r.al = memoryAGet(r.ds, 0x0552);
    r.al |= memoryAGet(r.ds, 0x0553);
    r.al |= memoryAGet(r.ds, 0x0551);
    r.al |= memoryAGet(r.ds, 0x041c);
    r.al |= memoryAGet(r.ds, 0x041b);
    if (!r.al)
        { pc = 0x17594; continue dispatch; }
    { pc = 0x17657; continue dispatch; }
case 0x175c4:
    memoryASet16(r.ds, 0x0004, 0x0003);
    frame.pc=2097371;
case 2097371:
yield* sub_18e20();
frame.pc=2097372;
case 2097372:;
    frame.pc=2097373;
case 2097373:
yield* sub_199c0();
frame.pc=2097374;
case 2097374:;
    frame.pc=2097375;
case 2097375:
yield* sub_179d1();
frame.pc=2097376;
case 2097376:;
    frame.pc=2097377;
case 2097377:
yield* sub_1a635();
frame.pc=2097378;
case 2097378:;
    frame.pc=2097379;
case 2097379:
yield* sub_19070();
frame.pc=2097380;
case 2097380:;
    frame.pc=2097381;
case 2097381:
yield* sub_1ad60();
frame.pc=2097382;
case 2097382:;
    frame.pc=2097383;
case 2097383:
yield* sub_1aec0();
frame.pc=2097384;
case 2097384:;
    frame.pc=2097385;
case 2097385:
yield* sub_1caed();
frame.pc=2097386;
case 2097386:;
case 0x175e2: game.phase="playing";
    frame.pc=2097387;
case 2097387:
yield* sub_18568();
frame.pc=2097388;
case 2097388:;
    frame.pc=2097389;
case 2097389:
yield* sub_18430();
frame.pc=2097390;
case 2097390:;
    frame.pc=2097391;
case 2097391:
yield* sub_1c69d();
frame.pc=2097392;
case 2097392:;
    frame.pc=2097393;
case 2097393:
yield* sub_17b15();
frame.pc=2097394;
case 2097394:;
    frame.pc=2097395;
case 2097395:
yield* sub_1aee1();
frame.pc=2097396;
case 2097396:;
    frame.pc=2097397;
case 2097397:
yield* sub_1ad72();
frame.pc=2097398;
case 2097398:;
    frame.pc=2097399;
case 2097399:
yield* sub_1a380();
frame.pc=2097400;
case 2097400:;
    frame.pc=2097401;
case 2097401:
yield* sub_19093();
frame.pc=2097402;
case 2097402:;
    r.al = memoryAGet(r.ds, 0x0552);
    r.al |= memoryAGet(r.ds, 0x0553);
    r.al |= memoryAGet(r.ds, 0x0551);
    r.al |= memoryAGet(r.ds, 0x041c);
    r.al |= memoryAGet(r.ds, 0x041b);
    if (!r.al)
        { pc = 0x175e2; continue dispatch; }
    { pc = 0x17657; continue dispatch; }
case 0x17612:
    memoryASet16(r.ds, 0x0004, 0x0001);
    frame.pc=2097403;
case 2097403:
yield* sub_18e20();
frame.pc=2097404;
case 2097404:;
    frame.pc=2097405;
case 2097405:
yield* sub_199c0();
frame.pc=2097406;
case 2097406:;
    frame.pc=2097407;
case 2097407:
yield* sub_179d1();
frame.pc=2097408;
case 2097408:;
    frame.pc=2097409;
case 2097409:
yield* sub_1a635();
frame.pc=2097410;
case 2097410:;
    frame.pc=2097411;
case 2097411:
yield* sub_19070();
frame.pc=2097412;
case 2097412:;
    frame.pc=2097413;
case 2097413:
yield* sub_1caed();
frame.pc=2097414;
case 2097414:;
case 0x1762a: game.phase="playing";
    frame.pc=2097415;
case 2097415:
yield* sub_18568();
frame.pc=2097416;
case 2097416:;
    frame.pc=2097417;
case 2097417:
yield* sub_18430();
frame.pc=2097418;
case 2097418:;
    frame.pc=2097419;
case 2097419:
yield* sub_1c69d();
frame.pc=2097420;
case 2097420:;
    frame.pc=2097421;
case 2097421:
yield* sub_17b15();
frame.pc=2097422;
case 2097422:;
    frame.pc=2097423;
case 2097423:
yield* sub_1a380();
frame.pc=2097424;
case 2097424:;
    frame.pc=2097425;
case 2097425:
yield* sub_19093();
frame.pc=2097426;
case 2097426:;
    frame.pc=2097427;
case 2097427:
yield* sub_1aa80();
frame.pc=2097428;
case 2097428:;
    if (memoryAGet(r.ds, 0x0554) != 0x00)
        { pc = 0x17689; continue dispatch; }
    r.al = memoryAGet(r.ds, 0x0552);
    r.al |= memoryAGet(r.ds, 0x0551);
    r.al |= memoryAGet(r.ds, 0x041b);
    r.al |= memoryAGet(r.ds, 0x041c);
    if (!r.al)
        { pc = 0x1762a; continue dispatch; }
case 0x17657:
    if (memoryAGet(r.ds, 0x041b) == 0x00)
        { pc = 0x17661; continue dispatch; }
    { pc = 0x172de; continue dispatch; }
case 0x17661:
    if (memoryAGet(r.ds, 0x041c) == 0x00)
        { pc = 0x1766b; continue dispatch; }
    { pc = 0x172d3; continue dispatch; }
case 0x1766b:
    if (memoryAGet(r.ds, 0x0552) == 0x00)
        { pc = 0x17677; continue dispatch; }
    memoryASet(r.ds, 0x0419, 0x00);
case 0x17677:
    r.ax = memoryAGet16(r.ds, 0x0004);
    memoryASet16(r.ds, 0x0006, r.ax);
    memoryASet16(r.ds, 0x0004, 0x0000);
    frame.pc=2097429;
case 2097429:
yield* sub_18e20();
frame.pc=2097430;
case 2097430:;
    { pc = 0x17323; continue dispatch; }
case 0x17689:
    memoryASet16(r.ds, 0x0004, 0x0002);
    frame.pc=2097431;
case 2097431:
yield* sub_18e20();
frame.pc=2097432;
case 2097432:;
    frame.pc=2097433;
case 2097433:
yield* sub_199c0();
frame.pc=2097434;
case 2097434:;
    frame.pc=2097435;
case 2097435:
yield* sub_1a7f9();
frame.pc=2097436;
case 2097436:;
    frame.pc=2097437;
case 2097437:
yield* sub_179d1();
frame.pc=2097438;
case 2097438:;
    memoryASet(r.ds, 0x1cbf, 0x00);
    memoryASet(r.ds, 0x1cb8, 0x00);
    frame.pc=2097439;
case 2097439:
yield* sub_1caed();
frame.pc=2097440;
case 2097440:;
case 0x176a8: game.phase="playing";
    frame.pc=2097441;
case 2097441:
yield* sub_18568();
frame.pc=2097442;
case 2097442:;
    frame.pc=2097443;
case 2097443:
yield* sub_18430();
frame.pc=2097444;
case 2097444:;
    frame.pc=2097445;
case 2097445:
yield* sub_1c69d();
frame.pc=2097446;
case 2097446:;
    frame.pc=2097447;
case 2097447:
yield* sub_17b15();
frame.pc=2097448;
case 2097448:;
    frame.pc=2097449;
case 2097449:
yield* sub_1a8a5();
frame.pc=2097450;
case 2097450:;
    frame.pc=2097451;
case 2097451:
yield* sub_1aa15();
frame.pc=2097452;
case 2097452:;
    r.al = memoryAGet(r.ds, 0x0552);
    r.al |= memoryAGet(r.ds, 0x0553);
    r.al |= memoryAGet(r.ds, 0x041c);
    r.al |= memoryAGet(r.ds, 0x041b);
    if (!r.al)
        { pc = 0x176a8; continue dispatch; }
    { pc = 0x17657; continue dispatch; }

      return;
    default: throw new Error("Invalid control flow in sub_17230");
    }
  }
  } finally {execution.leave(frame);}
}

function* sub_176d0() {
  let pc=0;
  const frame=execution.enter('sub_176d0',pc);pc=frame.pc;
  let skipBudget=frame.budget || execution.restoring;
  try {
  if(execution.restoring && execution.pending.length===0) {
    execution.restoring=false;
    if(frame.parked!==null) {yield frame.parked;frame.parked=null;frame.budget=false;}
  }
  dispatch: while (true) {
    if (!skipBudget && (++game.steps & 1023) === 0) {
      frame.pc=pc;frame.budget=true;frame.parked=0;yield 0;
      frame.parked=null;frame.budget=false;
    }
    skipBudget=false;
    switch(pc) {
    case 0:

    r.tl = memoryAGet(r.ds, 0x0531);
    memoryASet(r.ds, 0x0531, memoryAGet(r.ds, 0x0531) - 1);
    if (r.tl == 1)
        { pc = 0x176d7; continue dispatch; }
case 0x176d6:
    return;
case 0x176d7:
    memoryASet(r.ds, 0x0531, memoryAGet(r.ds, 0x0531) + 1);
    frame.pc=2097153;
case 2097153:
yield* sub_18608();
frame.pc=2097154;
case 2097154:;
    if (!flags.zero)
        { pc = 0x176d6; continue dispatch; }
    if (memoryAGet(r.ds, 0x055a) != 0x00)
        { pc = 0x176d6; continue dispatch; }
    if (memoryAGet(r.ds, 0x1673) != 0x00)
        { pc = 0x176d6; continue dispatch; }
    r.ah = 0;
    frame.pc=2097155;
case 2097155:
yield* interrupt(0x1a);
frame.pc=2097156;
case 2097156:;
    if (r.dx == memoryAGet16(r.ds, 0x0544))
        { pc = 0x176d6; continue dispatch; }
    memoryASet16(r.ds, 0x0544, r.dx);
    r.bx = memoryAGet16(r.ds, 0x0008);
    r.al = memoryAGet(r.ds, r.bx + 1330);
    if (memoryAGet(r.ds, 0x057b) > 0x60)
        { pc = 0x1770f; continue dispatch; }
    r.al >>= 1;
    r.al >>= 1;
case 0x1770f:
    memoryASet(r.ds, 0x0531, r.al);
    r.bx = memoryAGet16(r.ds, 0x052f);
    frame.pc=2097157;
case 2097157:
yield* sub_17888();
frame.pc=2097158;
case 2097158:;
    if (flags.zero)
        { pc = 0x1773c; continue dispatch; }
    r.al = memoryAGet(r.ds, 0x0525);
    r.al += memoryAGet(r.ds, r.bx + 1321);
    if (r.al < 0x04)
        { pc = 0x176d6; continue dispatch; }
case 0x17726:
    frame.pc=2097159;
case 2097159:
yield* sub_1a02d();
frame.pc=2097160;
case 2097160:;
    r.dl &= 0x03;
    if (r.dl == memoryAGet(r.ds, 0x052f))
        { pc = 0x17726; continue dispatch; }
    if (r.dl == 0x03)
        { pc = 0x17726; continue dispatch; }
    r.bl = r.dl;
    { pc = 0x17765; continue dispatch; }
case 0x1773c:
    r.al = memoryAGet(r.ds, r.bx + 1321);
    memoryASet(r.ds, 0x0525, memoryAGet(r.ds, 0x0525) + r.al);
    if (memoryAGet(r.ds, 0x0525) < 0x04)
        { pc = 0x177b3; continue dispatch; }
    frame.pc=2097161;
case 2097161:
yield* sub_1a02d();
frame.pc=2097162;
case 2097162:;
    if (r.dl > 0x40)
        { pc = 0x17769; continue dispatch; }
case 0x17753:
    frame.pc=2097163;
case 2097163:
yield* sub_1a02d();
frame.pc=2097164;
case 2097164:;
    r.dl &= 0x03;
    if (r.dl == 0x03)
        { pc = 0x17753; continue dispatch; }
    r.bl = r.dl;
    frame.pc=2097165;
case 2097165:
yield* sub_17888();
frame.pc=2097166;
case 2097166:;
    if (!flags.zero)
        { pc = 0x17753; continue dispatch; }
case 0x17765:
    memoryASet16(r.ds, 0x052f, r.bx);
case 0x17769:
    r.al = memoryAGet(r.ds, r.bx + 1318);
    memoryASet(r.ds, 0x0525, r.al);
    r.ax = 0x1010;
    r.es = r.ax;
    r.di = 0x04d7;
    r.ah = memoryAGet(r.ds, r.bx + 1324);
    r.bx = memoryAGet16(r.ds, 0x0008);
    r.bl = memoryAGet(r.ds, r.bx + 10938);
    r.bh = r.ah;
    frame.pc=2097167;
case 2097167:
yield* sub_178ad();
frame.pc=2097168;
case 2097168:;
    if (memoryAGet16(r.ds, 0x052f) == 0x0001)
        { pc = 0x1779e; continue dispatch; }
    flags.carry = memoryAGet(r.ds, 0x0540) & 1;
    memoryASet(r.ds, 0x0540, memoryAGet(r.ds, 0x0540) >> 1);
    frame.pc=2097169;
case 2097169:
yield* sub_17863();
frame.pc=2097170;
case 2097170:;
    flags.carry = memoryAGet(r.ds, 0x0540) & 1;
    memoryASet(r.ds, 0x0540, memoryAGet(r.ds, 0x0540) >> 1);
    { pc = 0x177ac; continue dispatch; }
case 0x1779e:
    r.al = memoryAGet(r.ds, 0x0540);
    r.al >>= 1;
    flags.carry = r.al & 1;
    r.al >>= 1;
    frame.pc=2097171;
case 2097171:
yield* sub_17863();
frame.pc=2097172;
case 2097172:;
    flags.carry = memoryAGet(r.ds, 0x0540) & 1;
    memoryASet(r.ds, 0x0540, memoryAGet(r.ds, 0x0540) >> 1);
case 0x177ac:
    frame.pc=2097173;
case 2097173:
yield* sub_17863();
frame.pc=2097174;
case 2097174:;
    r.bx = memoryAGet16(r.ds, 0x052f);
case 0x177b3:
    if (memoryAGet(r.ds, 0x04d6) == 0x00)
        { pc = 0x17800; continue dispatch; }
    r.ax = memoryAGet16(r.ds, 0x0579);
    if (r.bl == 0x01)
        { pc = 0x177ef; continue dispatch; }
    memoryASet16(r.ds, 0x055f, memoryAGet16(r.ds, 0x055f) + 1);
    r.ax += 0x0004;
    if (r.ax < 0x0123)
        { pc = 0x177fd; continue dispatch; }
case 0x177ce:
    memoryASet(r.ds, 0x055b, 0x11);
    memoryASet(r.ds, 0x0571, 0x01);
    memoryASet(r.ds, 0x0576, 0x01);
    memoryASet(r.ds, 0x0578, 0x18);
    memoryASet(r.ds, 0x0572, 0x01);
    memoryASet(r.ds, 0x055c, 0x00);
    { pc = 0x17800; continue dispatch; }
case 0x177ef:
    memoryASet16(r.ds, 0x055f, memoryAGet16(r.ds, 0x055f) - 1);
    r.tx = r.ax;
    r.ax -= 0x0004;
    if (r.tx < 0x0004)
        { pc = 0x177ce; continue dispatch; }
    if (r.ax < 0x0008)
        { pc = 0x177ce; continue dispatch; }
case 0x177fd:
    memoryASet16(r.ds, 0x0579, r.ax);
case 0x17800:
    push(r.ds);
    r.bx <<= 1;
    r.ax = memoryAGet16(r.ds, r.bx + 1309);
    memoryASet16(r.ds, 0x0523, r.ax);
    r.si = memoryAGet16(r.ds, r.bx + 1303);
    r.ax = 0xb800;
    r.ds = r.ax;
    r.es = r.ax;
    r.di = r.si;
    if (r.bx != 0x0002)
        { pc = 0x17821; continue dispatch; }
    flags.direction = false;
    r.di--;
    { pc = 0x17823; continue dispatch; }
case 0x17821:
    flags.direction = true;
    r.di++;
case 0x17823:
    r.cx = 0x027f;
    push(r.di);
    push(r.si);
    rep_movsb();
    r.si = pop();
    r.di = pop();
    r.si += 0x2000;
    r.di += 0x2000;
    r.cx = 0x0280;
    rep_movsb();
    r.ds = pop();
    r.di = memoryAGet16(r.ds, 0x0523);
    r.bl = memoryAGet(r.ds, 0x0525);
    r.bh = 0;
    r.bx += 0x04d7;
    r.cx = 0x0010;
case 0x1784b:
    r.al = memoryAGet(r.ds, r.bx);
    memoryASet(r.es, r.di, r.al);
    r.bx += 0x0004;
    r.di ^= 0x2000;
    if (r.di & 0x2000)
        { pc = 0x17860; continue dispatch; }
    r.di += 0x0050;
case 0x17860:
    if (--r.cx)
        { pc = 0x1784b; continue dispatch; }

      return;
    default: throw new Error("Invalid control flow in sub_176d0");
    }
  }
  } finally {execution.leave(frame);}
}

function* sub_17863() {
  let pc=0;
  const frame=execution.enter('sub_17863',pc);pc=frame.pc;
  let skipBudget=frame.budget || execution.restoring;
  try {
  if(execution.restoring && execution.pending.length===0) {
    execution.restoring=false;
    if(frame.parked!==null) {yield frame.parked;frame.parked=null;frame.budget=false;}
  }
  dispatch: while (true) {
    if (!skipBudget && (++game.steps & 1023) === 0) {
      frame.pc=pc;frame.budget=true;frame.parked=0;yield 0;
      frame.parked=null;frame.budget=false;
    }
    skipBudget=false;
    switch(pc) {
    case 0:

    r.ah = flags.carry | (flags.zero << 1);
    r.bx = memoryAGet16(r.ds, 0x052f);
    r.bl = memoryAGet(r.ds, r.bx + 1345);
    r.cx = 0x0005;
    if (r.bl == 0x09)
        { pc = 0x1787e; continue dispatch; }
case 0x17874:
    flags.carry = r.ah & 1;
    flags.zero = (r.ah >> 1) & 1;
    memoryASet(r.ds, r.bx + 4118, rcr(memoryAGet(r.ds, r.bx + 4118), 0x01));
    r.ah = flags.carry | (flags.zero << 1);
    r.bx++;
    if (--r.cx)
        { pc = 0x17874; continue dispatch; }
    return;
case 0x1787e:
    flags.carry = r.ah & 1;
    flags.zero = (r.ah >> 1) & 1;
    memoryASet(r.ds, r.bx + 4118, rcl(memoryAGet(r.ds, r.bx + 4118), 1));
    r.ah = flags.carry | (flags.zero << 1);
    r.bx--;
    if (--r.cx)
        { pc = 0x1787e; continue dispatch; }

      return;
    default: throw new Error("Invalid control flow in sub_17863");
    }
  }
  } finally {execution.leave(frame);}
}

function* sub_17888() {
  let pc=0;
  const frame=execution.enter('sub_17888',pc);pc=frame.pc;
  let skipBudget=frame.budget || execution.restoring;
  try {
  if(execution.restoring && execution.pending.length===0) {
    execution.restoring=false;
    if(frame.parked!==null) {yield frame.parked;frame.parked=null;frame.budget=false;}
  }
  dispatch: while (true) {
    if (!skipBudget && (++game.steps & 1023) === 0) {
      frame.pc=pc;frame.budget=true;frame.parked=0;yield 0;
      frame.parked=null;frame.budget=false;
    }
    skipBudget=false;
    switch(pc) {
    case 0:

    memoryASet(r.ds, 0x04d6, 0x00);
    r.al = memoryAGet(r.ds, 0x057c);
    if (r.al < memoryAGet(r.ds, r.bx + 1341))
        { pc = 0x178a9; continue dispatch; }
    if (r.al >= memoryAGet(r.ds, r.bx + 1338))
        { pc = 0x178a9; continue dispatch; }
    flags.zero = memoryAGet(r.ds, 0x055c) == 0x01;
    if (memoryAGet(r.ds, 0x055c) >= 0x01)
        { pc = 0x178a4; continue dispatch; }
    return;
case 0x178a4:
    memoryASet(r.ds, 0x04d6, 0x01);
case 0x178a9:
    flags.zero = r.al == r.al;

      return;
    default: throw new Error("Invalid control flow in sub_17888");
    }
  }
  } finally {execution.leave(frame);}
}

function* sub_178ad() {
  let pc=0;
  const frame=execution.enter('sub_178ad',pc);pc=frame.pc;
  let skipBudget=frame.budget || execution.restoring;
  try {
  if(execution.restoring && execution.pending.length===0) {
    execution.restoring=false;
    if(frame.parked!==null) {yield frame.parked;frame.parked=null;frame.budget=false;}
  }
  dispatch: while (true) {
    if (!skipBudget && (++game.steps & 1023) === 0) {
      frame.pc=pc;frame.budget=true;frame.parked=0;yield 0;
      frame.parked=null;frame.budget=false;
    }
    skipBudget=false;
    switch(pc) {
    case 0:

    memoryASet(r.ds, 0x0540, 0x00);
    flags.direction = false;
    r.cx = 0x0020;
    r.ax = 0xaaaa;
    rep_stosw();
    r.di -= 0x0040;
    r.ax = 0x4444;
    memoryASet16(r.es, r.di + 4, r.ax);
    memoryASet16(r.es, r.di + 6, r.ax);
    frame.pc=2097153;
case 2097153:
yield* sub_1a02d();
frame.pc=2097154;
case 2097154:;
    if (r.dl < r.bl)
        { pc = 0x178d4; continue dispatch; }
    if (r.dh > r.bh)
        { pc = 0x178d5; continue dispatch; }
case 0x178d4:
    return;
case 0x178d5:
    frame.pc=2097155;
case 2097155:
yield* sub_1a02d();
frame.pc=2097156;
case 2097156:;
    if (r.dl < 0x18)
        { pc = 0x178f7; continue dispatch; }
    if (r.dl < 0x60)
        { pc = 0x17900; continue dispatch; }
    push(r.di);
    frame.pc=2097157;
case 2097157:
yield* sub_1790e();
frame.pc=2097158;
case 2097158:;
    r.al <<= 1;
    memoryASet(r.ds, 0x0540, r.al);
    r.di = pop();
    r.di += 0x0002;
    frame.pc=2097159;
case 2097159:
yield* sub_1790e();
frame.pc=2097160;
case 2097160:;
    memoryASet(r.ds, 0x0540, memoryAGet(r.ds, 0x0540) | r.al);
    return;
case 0x178f7:
    r.cx = 0x0020;
    r.si = 0x0490;
    { pc = 0x17906; continue dispatch; }
case 0x17900:
    r.cx = 0x0010;
    r.si = 0x0460;
case 0x17906:
    rep_movsw();
    memoryASet(r.ds, 0x0540, 0x03);

      return;
    default: throw new Error("Invalid control flow in sub_178ad");
    }
  }
  } finally {execution.leave(frame);}
}

function* sub_1790e() {
  let pc=0;
  const frame=execution.enter('sub_1790e',pc);pc=frame.pc;
  let skipBudget=frame.budget || execution.restoring;
  try {
  if(execution.restoring && execution.pending.length===0) {
    execution.restoring=false;
    if(frame.parked!==null) {yield frame.parked;frame.parked=null;frame.budget=false;}
  }
  dispatch: while (true) {
    if (!skipBudget && (++game.steps & 1023) === 0) {
      frame.pc=pc;frame.budget=true;frame.parked=0;yield 0;
      frame.parked=null;frame.budget=false;
    }
    skipBudget=false;
    switch(pc) {
    case 0:

    frame.pc=2097153;
case 2097153:
yield* sub_1a02d();
frame.pc=2097154;
case 2097154:;
    r.dx &= 0x0006;
    if (r.dl != 0x06)
        { pc = 0x1791d; continue dispatch; }
    r.al = 0;
    return;
case 0x1791d:
    r.bx = r.dx;
    r.si = memoryAGet16(r.ds, r.bx + 1232);
    r.cx = 0x0008;
case 0x17926:
    lodsw();
    stosw();
    r.di += 0x0002;
    if (--r.cx)
        { pc = 0x17926; continue dispatch; }
    r.al = 0x01;

      return;
    default: throw new Error("Invalid control flow in sub_1790e");
    }
  }
  } finally {execution.leave(frame);}
}

function* sub_17930() {
  let pc=0;
  const frame=execution.enter('sub_17930',pc);pc=frame.pc;
  let skipBudget=frame.budget || execution.restoring;
  try {
  if(execution.restoring && execution.pending.length===0) {
    execution.restoring=false;
    if(frame.parked!==null) {yield frame.parked;frame.parked=null;frame.budget=false;}
  }
  dispatch: while (true) {
    if (!skipBudget && (++game.steps & 1023) === 0) {
      frame.pc=pc;frame.budget=true;frame.parked=0;yield 0;
      frame.parked=null;frame.budget=false;
    }
    skipBudget=false;
    switch(pc) {
    case 0:

    memoryASet16(r.ds, 0x057d, 0x0000);
    memoryASet16(r.ds, 0x0684, 0x0000);

      return;
    default: throw new Error("Invalid control flow in sub_17930");
    }
  }
  } finally {execution.leave(frame);}
}

function* sub_1793d() {
  let pc=0;
  const frame=execution.enter('sub_1793d',pc);pc=frame.pc;
  let skipBudget=frame.budget || execution.restoring;
  try {
  if(execution.restoring && execution.pending.length===0) {
    execution.restoring=false;
    if(frame.parked!==null) {yield frame.parked;frame.parked=null;frame.budget=false;}
  }
  dispatch: while (true) {
    if (!skipBudget && (++game.steps & 1023) === 0) {
      frame.pc=pc;frame.budget=true;frame.parked=0;yield 0;
      frame.parked=null;frame.budget=false;
    }
    skipBudget=false;
    switch(pc) {
    case 0:

    r.cx = 0x0000;
    r.ah = 0x01;
    if (memoryAGet16(r.ds, 0x0579) < 0x00a0)
        { pc = 0x1794f; continue dispatch; }
    r.cx = 0x0128;
    r.ah = 0xff;
case 0x1794f:
    memoryASet(r.ds, 0x056e, r.ah);
    memoryASet(r.ds, 0x0558, 0x03);
    memoryASet(r.ds, 0x0559, 0x0c);
    r.dl = 0xb4;
    memoryASet16(r.ds, 0x0579, r.cx);
    memoryASet(r.ds, 0x057b, r.dl);
    memoryASet(r.ds, 0x057c, 0xe6);
    frame.pc=2097153;
case 2097153:
yield* sub_19ee0();
frame.pc=2097154;
case 2097154:;
    memoryASet16(r.ds, 0x055f, r.ax);
    memoryASet16(r.ds, 0x0561, 0x0b03);
    frame.pc=2097155;
case 2097155:
yield* sub_18354();
frame.pc=2097156;
case 2097156:;
    memoryASet(r.ds, 0x0571, 0x00);
    memoryASet16(r.ds, 0x0572, 0x0002);
    memoryASet(r.ds, 0x0576, 0x01);
    memoryASet(r.ds, 0x055b, 0x00);
    memoryASet(r.ds, 0x0550, 0x00);
    memoryASet(r.ds, 0x055c, 0x00);
    memoryASet(r.ds, 0x055a, 0x00);
    memoryASet(r.ds, 0x0583, 0x00);
    memoryASet(r.ds, 0x0698, 0x00);
    memoryASet(r.ds, 0x0699, 0x00);
    memoryASet(r.ds, 0x0551, 0x00);
    memoryASet(r.ds, 0x0584, 0x00);
    memoryASet(r.ds, 0x0552, 0x00);
    memoryASet16(r.ds, 0x0554, 0x0000);
    memoryASet(r.ds, 0x0553, 0x00);
    memoryASet(r.ds, 0x127c, 0x00);
    frame.pc=2097157;
case 2097157:
yield* sub_17930();
frame.pc=2097158;
case 2097158:;

      return;
    default: throw new Error("Invalid control flow in sub_1793d");
    }
  }
  } finally {execution.leave(frame);}
}

function* sub_179d1() {
  let pc=0;
  const frame=execution.enter('sub_179d1',pc);pc=frame.pc;
  let skipBudget=frame.budget || execution.restoring;
  try {
  if(execution.restoring && execution.pending.length===0) {
    execution.restoring=false;
    if(frame.parked!==null) {yield frame.parked;frame.parked=null;frame.budget=false;}
  }
  dispatch: while (true) {
    if (!skipBudget && (++game.steps & 1023) === 0) {
      frame.pc=pc;frame.budget=true;frame.parked=0;yield 0;
      frame.parked=null;frame.budget=false;
    }
    skipBudget=false;
    switch(pc) {
    case 0:

    r.bx = memoryAGet16(r.ds, 0x0004);
    if (r.bx != 0x0000)
        { pc = 0x179e5; continue dispatch; }
    r.cx = memoryAGet16(r.ds, 0x0001);
    r.dl = memoryAGet(r.ds, 0x0003);
    { pc = 0x179ef; continue dispatch; }
case 0x179e5:
    r.dl = memoryAGet(r.ds, r.bx + 1513);
    r.bl <<= 1;
    r.cx = memoryAGet16(r.ds, r.bx + 1497);
case 0x179ef:
    memoryASet16(r.ds, 0x0579, r.cx);
    memoryASet(r.ds, 0x057b, r.dl);
    r.al = r.dl;
    r.al += 0x32;
    memoryASet(r.ds, 0x057c, r.al);
    frame.pc=2097153;
case 2097153:
yield* sub_19ee0();
frame.pc=2097154;
case 2097154:;
    memoryASet16(r.ds, 0x055f, r.ax);
    r.ax = memoryAGet16(r.ds, 0x0fb2);
    memoryASet16(r.ds, 0x0569, r.ax);
    r.ax = memoryAGet16(r.ds, 0x0fbe);
    memoryASet16(r.ds, 0x0567, r.ax);
    memoryASet16(r.ds, 0x0561, r.ax);
    frame.pc=2097155;
case 2097155:
yield* sub_18354();
frame.pc=2097156;
case 2097156:;
    memoryASet(r.ds, 0x0571, 0x01);
    memoryASet(r.ds, 0x056e, 0x00);
    memoryASet(r.ds, 0x0576, 0x01);
    memoryASet(r.ds, 0x0578, 0x40);
    r.al = 0x0a;
    if (memoryAGet16(r.ds, 0x0004) != 0x0007)
        { pc = 0x17a35; continue dispatch; }
    r.al = 0;
case 0x17a35:
    memoryASet(r.ds, 0x055b, r.al);
    memoryASet(r.ds, 0x0550, 0x00);
    memoryASet(r.ds, 0x055c, 0x00);
    memoryASet(r.ds, 0x055a, 0x00);
    memoryASet(r.ds, 0x0583, 0x00);
    memoryASet(r.ds, 0x0698, 0x00);
    memoryASet(r.ds, 0x0699, 0x00);
    memoryASet(r.ds, 0x0551, 0x00);
    memoryASet(r.ds, 0x0584, 0x00);
    memoryASet(r.ds, 0x0552, 0x00);
    memoryASet16(r.ds, 0x0554, 0x0000);
    memoryASet(r.ds, 0x0553, 0x00);
    memoryASet(r.ds, 0x127c, 0x00);
    frame.pc=2097157;
case 2097157:
yield* sub_17930();
frame.pc=2097158;
case 2097158:;
    if (memoryAGet16(r.ds, 0x0004) != 0x0002)
        return;
    memoryASet(r.ds, 0x0576, 0x10);
    memoryASet16(r.ds, 0x0574, 0x0010);
    r.ah = 0;
    frame.pc=2097159;
case 2097159:
yield* interrupt(0x1a);
frame.pc=2097160;
case 2097160:;
    memoryASet16(r.ds, 0x05f1, r.dx);
    memoryASet(r.ds, 0x05f3, 0x00);
    memoryASet(r.ds, 0x05f4, 0x05);
    memoryASet(r.ds, 0x05f5, 0x01);

      return;
    default: throw new Error("Invalid control flow in sub_179d1");
    }
  }
  } finally {execution.leave(frame);}
}

function* sub_17aa2() {
  let pc=0;
  const frame=execution.enter('sub_17aa2',pc);pc=frame.pc;
  let skipBudget=frame.budget || execution.restoring;
  try {
  if(execution.restoring && execution.pending.length===0) {
    execution.restoring=false;
    if(frame.parked!==null) {yield frame.parked;frame.parked=null;frame.budget=false;}
  }
  dispatch: while (true) {
    if (!skipBudget && (++game.steps & 1023) === 0) {
      frame.pc=pc;frame.budget=true;frame.parked=0;yield 0;
      frame.parked=null;frame.budget=false;
    }
    skipBudget=false;
    switch(pc) {
    case 0:

    memoryASet16(r.ds, 0x592a, 0x0400);
    if (memoryAGet(r.ds, 0x0584) == 0x00)
        { pc = 0x17ab0; continue dispatch; }
    return;
case 0x17ab0:
    memoryASet(r.ds, 0x0576, 0x08);
    r.dl = 0xff;
    r.al = memoryAGet(r.ds, 0x057b);
    if (r.al >= memoryAGet(r.ds, 0x2652))
        { pc = 0x17ac2; continue dispatch; }
    r.dl = 0x01;
case 0x17ac2:
    memoryASet(r.ds, 0x0571, r.dl);
    r.ax = memoryAGet16(r.ds, 0x0579);
    r.tx = r.ax;
    r.ax -= memoryAGet16(r.ds, 0x2650);
    r.dl = 0xff;
    if (r.tx > memoryAGet16(r.ds, 0x2650))
        { pc = 0x17ad5; continue dispatch; }
    r.dl = 0x01;
    r.ax = ~r.ax;
case 0x17ad5:
    memoryASet(r.ds, 0x056e, r.dl);
    if (r.ah == 0x00)
        { pc = 0x17ae1; continue dispatch; }
    r.ax = 0x00ff;
case 0x17ae1:
    r.al = ~r.al;
    if (r.al >= 0x30)
        { pc = 0x17ae9; continue dispatch; }
    r.al = 0x30;
case 0x17ae9:
    r.bl = r.al;
    r.bl >>= 1;
    r.bl >>= 1;
    r.al -= r.bl;
    memoryASet(r.ds, 0x0578, r.al);
    r.cl = 0x05;
    r.al >>= r.cl;
    memoryASet16(r.ds, 0x0572, r.ax);
    memoryASet(r.ds, 0x055c, 0x00);
    memoryASet(r.ds, 0x39e0, 0x00);
    memoryASet(r.ds, 0x0577, 0x01);
    memoryASet(r.ds, 0x055b, 0x10);
    memoryASet(r.ds, 0x0584, 0x01);

      return;
    default: throw new Error("Invalid control flow in sub_17aa2");
    }
  }
  } finally {execution.leave(frame);}
}

function* sub_17b15() {
  let pc=0;
  const frame=execution.enter('sub_17b15',pc);pc=frame.pc;
  let skipBudget=frame.budget || execution.restoring;
  try {
  if(execution.restoring && execution.pending.length===0) {
    execution.restoring=false;
    if(frame.parked!==null) {yield frame.parked;frame.parked=null;frame.budget=false;}
  }
  dispatch: while (true) {
    if (!skipBudget && (++game.steps & 1023) === 0) {
      frame.pc=pc;frame.budget=true;frame.parked=0;yield 0;
      frame.parked=null;frame.budget=false;
    }
    skipBudget=false;
    switch(pc) {
    case 0:

    r.ah = 0;
    frame.pc=2097153;
case 2097153:
yield* interrupt(0x1a);
frame.pc=2097154;
case 2097154:;
    if (r.dx != memoryAGet16(r.ds, 0x057d))
        { pc = 0x17b2d; continue dispatch; }
    if (memoryAGet16(r.ds, 0x0684) == 0x0000)
        { pc = 0x17b2c; continue dispatch; }
    r.tx = memoryAGet16(r.ds, 0x0684);
    memoryASet16(r.ds, 0x0684, memoryAGet16(r.ds, 0x0684) - 1);
    if (r.tx == 1)
        { pc = 0x17b3c; continue dispatch; }
case 0x17b2c:
    return;
case 0x17b2d:
    r.ax = 0x0020;
    if (memoryAGet(r.ds, 0x0697) != 0xfd)
        { pc = 0x17b39; continue dispatch; }
    r.ax >>= 1;
case 0x17b39:
    memoryASet16(r.ds, 0x0684, r.ax);
case 0x17b3c:
    if (memoryAGet16(r.ds, 0x0004) == 0x0002)
        { pc = 0x17b4d; continue dispatch; }
    r.cl = memoryAGet(r.ds, 0x0571);
    r.cl |= memoryAGet(r.ds, 0x056e);
    if (r.cl)
        { pc = 0x17b56; continue dispatch; }
case 0x17b4d:
    push(r.dx);
    push(r.ax);
    frame.pc=2097155;
case 2097155:
yield* sub_18608();
frame.pc=2097156;
case 2097156:;
    r.ax = pop();
    r.dx = pop();
    if (flags.zero)
        { pc = 0x17b2c; continue dispatch; }
case 0x17b56:
    memoryASet16(r.ds, 0x057d, r.dx);
    memoryASet16(r.ds, 0x057f, r.ax);
    if (memoryAGet16(r.ds, 0x0004) != 0x0004)
        { pc = 0x17b6b; continue dispatch; }
    if (memoryAGet(r.ds, 0x39e1) != 0x00)
        { pc = 0x17b2c; continue dispatch; }
case 0x17b6b:
    if (memoryAGet16(r.ds, 0x0004) != 0x0006)
        { pc = 0x17b79; continue dispatch; }
    if (memoryAGet(r.ds, 0x44bd) != 0x00)
        { pc = 0x17b2c; continue dispatch; }
case 0x17b79:
    if (memoryAGet16(r.ds, 0x0004) == 0x0002)
        { pc = 0x17b83; continue dispatch; }
    { pc = 0x17ddc; continue dispatch; }
case 0x17b83:
    r.si = memoryAGet16(r.ds, 0x0008);
    r.si <<= 1;
    r.ax = memoryAGet16(r.ds, 0x057d);
    r.ax -= memoryAGet16(r.ds, 0x05f1);
    if (r.ax < memoryAGet16(r.ds, r.si + 1417))
        { pc = 0x17c06; continue dispatch; }
    if (r.ax < memoryAGet16(r.ds, r.si + 1433))
        { pc = 0x17ba1; continue dispatch; }
    memoryASet(r.ds, 0x0552, 0x01);
case 0x17ba1:
    r.tl = memoryAGet(r.ds, 0x05f5);
    memoryASet(r.ds, 0x05f5, memoryAGet(r.ds, 0x05f5) - 1);
    if (r.tl != 1)
        { pc = 0x17be9; continue dispatch; }
    frame.pc=2097157;
case 2097157:
yield* sub_1cbaf();
frame.pc=2097158;
case 2097158:;
    memoryASet(r.ds, 0x05f5, 0x06);
    r.al = memoryAGet(r.ds, 0x05f4);
    if (memoryAGet(r.ds, 0x057b) < 0xb3)
        { pc = 0x17bc2; continue dispatch; }
    if (r.al >= 0xc8)
        { pc = 0x17bc2; continue dispatch; }
    r.al += 0x1e;
    memoryASet(r.ds, 0x05f4, r.al);
case 0x17bc2:
    r.dl = memoryAGet(r.ds, 0x057b);
    flags.carry = r.dl < r.al;
    r.dl -= r.al;
    if (!flags.carry)
        { pc = 0x17bcc; continue dispatch; }
    r.dl = 0;
case 0x17bcc:
    r.cx = memoryAGet16(r.ds, 0x0579);
    r.dl &= 0xf8;
    frame.pc=2097159;
case 2097159:
yield* sub_19ee0();
frame.pc=2097160;
case 2097160:;
    r.di = r.ax;
    r.si = 0x064e;
    r.ax = 0xb800;
    r.es = r.ax;
    r.bp = 0x000e;
    r.cx = 0x0503;
    frame.pc=2097161;
case 2097161:
yield* sub_19f65();
frame.pc=2097162;
case 2097162:;
case 0x17be9:
    memoryASet(r.ds, 0x056e, 0x00);
    memoryASet(r.ds, 0x0571, 0x01);
    memoryASet(r.ds, 0x05f3, 0x01);
    memoryASet(r.ds, 0x0576, 0x20);
    r.bx = 0;
    r.ah = 0x0b;
    frame.pc=2097163;
case 2097163:
yield* interrupt(0x10);
frame.pc=2097164;
case 2097164:;
    { pc = 0x17cb6; continue dispatch; }
case 0x17c06:
    r.si = memoryAGet16(r.ds, 0x0008);
    r.si <<= 1;
    r.bx = 0;
    if (r.ax < memoryAGet16(r.ds, r.si + 1449))
        { pc = 0x17c26; continue dispatch; }
    r.bl++;
    if (r.ax < memoryAGet16(r.ds, r.si + 1465))
        { pc = 0x17c26; continue dispatch; }
    r.bl = 0x05;
    if (r.ax < memoryAGet16(r.ds, r.si + 1481))
        { pc = 0x17c26; continue dispatch; }
    r.bl--;
case 0x17c26:
    r.ah = 0x0b;
    frame.pc=2097165;
case 2097165:
yield* interrupt(0x10);
frame.pc=2097166;
case 2097166:;
    r.al = memoryAGet(r.ds, 0x056e);
    memoryASet(r.ds, 0x056f, r.al);
    r.al = memoryAGet(r.ds, 0x0571);
    memoryASet(r.ds, 0x0570, r.al);
    r.al = memoryAGet(r.ds, 0x0698);
    if (r.al != 0x00)
        { pc = 0x17c4a; continue dispatch; }
    if (memoryAGet16(r.ds, 0x0574) < 0x0010)
        { pc = 0x17c5e; continue dispatch; }
    memoryASet16(r.ds, 0x0574, memoryAGet16(r.ds, 0x0574) - 1);
    { pc = 0x17c67; continue dispatch; }
case 0x17c4a:
    if (r.al != memoryAGet(r.ds, 0x056e))
        { pc = 0x17c5e; continue dispatch; }
    if (memoryAGet16(r.ds, 0x0574) >= 0x0030)
        { pc = 0x17c67; continue dispatch; }
    memoryASet16(r.ds, 0x0574, memoryAGet16(r.ds, 0x0574) + 0x0003);
    { pc = 0x17c67; continue dispatch; }
case 0x17c5e:
    memoryASet(r.ds, 0x056e, r.al);
    memoryASet16(r.ds, 0x0574, 0x0020);
case 0x17c67:
    r.ax = memoryAGet16(r.ds, 0x0574);
    r.cl = 0x03;
    r.ax >>= r.cl;
    r.bx = memoryAGet16(r.ds, 0x0008);
    r.bl <<= 1;
    if (r.ax <= memoryAGet16(r.ds, r.bx + 1644))
        { pc = 0x17c7e; continue dispatch; }
    r.ax = memoryAGet16(r.ds, r.bx + 1644);
case 0x17c7e:
    memoryASet16(r.ds, 0x0572, r.ax);
    frame.pc=2097167;
case 2097167:
yield* sub_181f9();
frame.pc=2097168;
case 2097168:;
    r.al = memoryAGet(r.ds, 0x0699);
    if (r.al != 0x00)
        { pc = 0x17c9a; continue dispatch; }
    r.al = ~r.al;
    if (memoryAGet(r.ds, 0x0576) < 0x10)
        { pc = 0x17cae; continue dispatch; }
    memoryASet(r.ds, 0x0576, memoryAGet(r.ds, 0x0576) - 1);
    { pc = 0x17cb6; continue dispatch; }
case 0x17c9a:
    if (r.al != memoryAGet(r.ds, 0x0571))
        { pc = 0x17cae; continue dispatch; }
    if (memoryAGet(r.ds, 0x0576) >= 0x40)
        { pc = 0x17cb6; continue dispatch; }
    memoryASet(r.ds, 0x0576, memoryAGet(r.ds, 0x0576) + 0x04);
    { pc = 0x17cb6; continue dispatch; }
case 0x17cae:
    memoryASet(r.ds, 0x0571, r.al);
    memoryASet(r.ds, 0x0576, 0x20);
case 0x17cb6:
    r.si = memoryAGet16(r.ds, 0x0008);
    r.dl = memoryAGet(r.ds, 0x057b);
    r.cl = 0x04;
    r.bl = memoryAGet(r.ds, 0x0576);
    r.bl >>= r.cl;
    if (r.bl <= memoryAGet(r.ds, r.si + 1660))
        { pc = 0x17cd0; continue dispatch; }
    r.bl = memoryAGet(r.ds, r.si + 1660);
case 0x17cd0:
    r.al = memoryAGet(r.ds, 0x0571);
    if (r.al < 0x01)
        { pc = 0x17cfe; continue dispatch; }
    if (r.al != 0x01)
        { pc = 0x17ce4; continue dispatch; }
    r.dl += r.bl;
    if (r.dl < 0xb4)
        { pc = 0x17cfe; continue dispatch; }
    r.dl = 0xb3;
    { pc = 0x17cfe; continue dispatch; }
case 0x17ce4:
    r.tl = r.dl;
    r.dl -= r.bl;
    if (r.tl < r.bl)
        { pc = 0x17ced; continue dispatch; }
    if (r.dl > 0x03)
        { pc = 0x17cfe; continue dispatch; }
case 0x17ced:
    r.ax = memoryAGet16(r.ds, 0x09b8);
    if (r.ax != memoryAGet16(r.ds, 0x055d))
        { pc = 0x17cfc; continue dispatch; }
    r.ax = memoryAGet16(r.ds, 0x057d);
    memoryASet16(r.ds, 0x05f1, r.ax);
case 0x17cfc:
    r.dl = 0x02;
case 0x17cfe:
    memoryASet(r.ds, 0x057b, r.dl);
    r.cx = memoryAGet16(r.ds, 0x0579);
    frame.pc=2097169;
case 2097169:
yield* sub_19ee0();
frame.pc=2097170;
case 2097170:;
    memoryASet16(r.ds, 0x0563, r.ax);
    if (memoryAGet(r.ds, 0x05f3) == 0x00)
        { pc = 0x17d19; continue dispatch; }
    r.bx = 0x0010;
    { pc = 0x17d94; continue dispatch; }
case 0x17d19:
    r.al = memoryAGet(r.ds, 0x056e);
    if (r.al != memoryAGet(r.ds, 0x056f))
        { pc = 0x17d2b; continue dispatch; }
    r.al = memoryAGet(r.ds, 0x0571);
    if (r.al == memoryAGet(r.ds, 0x0570))
        { pc = 0x17d30; continue dispatch; }
case 0x17d2b:
    r.bx = 0x0018;
    { pc = 0x17d94; continue dispatch; }
case 0x17d30:
    memoryASet16(r.ds, 0x0587, memoryAGet16(r.ds, 0x0587) + 1);
    r.bx = memoryAGet16(r.ds, 0x0587);
    r.al = memoryAGet(r.ds, 0x0698);
    r.al |= memoryAGet(r.ds, 0x0699);
    if (r.al)
        { pc = 0x17d43; continue dispatch; }
    r.bl >>= 1;
case 0x17d43:
    if (memoryAGet(r.ds, 0x057b) < 0xb3)
        { pc = 0x17d51; continue dispatch; }
    if (memoryAGet(r.ds, 0x0571) == 0x01)
        { pc = 0x17d6c; continue dispatch; }
case 0x17d51:
    if (memoryAGet(r.ds, 0x057b) > 0x04)
        { pc = 0x17d5f; continue dispatch; }
    if (memoryAGet(r.ds, 0x0699) != 0x00)
        { pc = 0x17d83; continue dispatch; }
case 0x17d5f:
    r.al = memoryAGet(r.ds, 0x0576);
    r.ah = 0;
    r.ax >>= 1;
    if (r.ax >= memoryAGet16(r.ds, 0x0574))
        { pc = 0x17d83; continue dispatch; }
case 0x17d6c:
    if (memoryAGet(r.ds, 0x056e) == 0x00)
        { pc = 0x17d83; continue dispatch; }
    r.bx &= 0x0006;
    if (memoryAGet(r.ds, 0x056e) == 0x01)
        { pc = 0x17d94; continue dispatch; }
    r.bl |= 0x08;
    { pc = 0x17d94; continue dispatch; }
case 0x17d83:
    r.bx &= 0x0002;
    r.bl |= 0x10;
    if (memoryAGet(r.ds, 0x0571) != 0x01)
        { pc = 0x17d94; continue dispatch; }
    r.bl += 0x04;
case 0x17d94:
    r.ax = memoryAGet16(r.ds, r.bx + 2470);
    memoryASet16(r.ds, 0x055d, r.ax);
    r.ax = memoryAGet16(r.ds, r.bx + 2496);
    memoryASet16(r.ds, 0x0565, r.ax);
    r.al = 0x30;
    r.cx = 0x02bc;
    if (memoryAGet(r.ds, 0x0697) < 0xfd)
        { pc = 0x17dc7; continue dispatch; }
    if (memoryAGet(r.ds, 0x0697) == 0xfd)
        { pc = 0x17db5; continue dispatch; }
    r.al = 0x08;
    r.cx = 0x03e8;
case 0x17db5:
    if (memoryAGet(r.ds, 0x057b) > r.al)
        { pc = 0x17dc7; continue dispatch; }
case 0x17dbb:
    frame.pc=2097171;
case 2097171:
yield* sub_18608();
frame.pc=2097172;
case 2097172:;
    if (!flags.zero)
        { pc = 0x17dbb; continue dispatch; }
case 0x17dc0:
    frame.pc=2097173;
case 2097173:
yield* sub_18608();
frame.pc=2097174;
case 2097174:;
    if (flags.zero)
        { pc = 0x17dc0; continue dispatch; }
case 0x17dc5:
    if (--r.cx)
        { pc = 0x17dc5; continue dispatch; }
case 0x17dc7:
    frame.pc=2097175;
case 2097175:
yield* sub_18413();
frame.pc=2097176;
case 2097176:;
    r.ax = memoryAGet16(r.ds, 0x0563);
    memoryASet16(r.ds, 0x055f, r.ax);
    frame.pc=2097177;
case 2097177:
yield* sub_18375();
frame.pc=2097178;
case 2097178:;
    frame.pc=2097179;
case 2097179:
yield* sub_1a6d0();
frame.pc=2097180;
case 2097180:;
    if (!flags.carry)
        { pc = 0x17ddb; continue dispatch; }
    frame.pc=2097181;
case 2097181:
yield* sub_18375();
frame.pc=2097182;
case 2097182:;
case 0x17ddb:
    return;
case 0x17ddc:
    frame.pc=2097183;
case 2097183:
yield* sub_18daa();
frame.pc=2097184;
case 2097184:;
    if (!flags.carry)
        { pc = 0x17de2; continue dispatch; }
case 0x17de1:
    return;
case 0x17de2:
    if (memoryAGet(r.ds, 0x1cb8) != 0x00)
        { pc = 0x17de1; continue dispatch; }
    if (memoryAGet(r.ds, 0x0558) == 0x00)
        { pc = 0x17e4c; continue dispatch; }
    if (memoryAGet(r.ds, 0x0559) == 0x00)
        { pc = 0x17e03; continue dispatch; }
    if (memoryAGet(r.ds, 0x1cbf) != 0x00)
        { pc = 0x17e02; continue dispatch; }
    memoryASet(r.ds, 0x0559, memoryAGet(r.ds, 0x0559) - 1);
case 0x17e02:
    return;
case 0x17e03:
    r.tl = memoryAGet(r.ds, 0x0558);
    memoryASet(r.ds, 0x0558, memoryAGet(r.ds, 0x0558) - 1);
    if (r.tl != 1)
        { pc = 0x17e15; continue dispatch; }
    memoryASet16(r.ds, 0x0572, 0x0008);
    frame.pc=2097185;
case 2097185:
yield* sub_181f9();
frame.pc=2097186;
case 2097186:;
    { pc = 0x17e4c; continue dispatch; }
case 0x17e15:
    frame.pc=2097187;
case 2097187:
yield* sub_18250();
frame.pc=2097188;
case 2097188:;
    memoryASet16(r.ds, 0x055d, r.bx);
    r.al = memoryAGet(r.ds, 0x0558);
    r.ah = memoryAGet(r.ds, 0x056e);
    frame.pc=2097189;
case 2097189:
yield* sub_181b7();
frame.pc=2097190;
case 2097190:;
    if (memoryAGet(r.ds, 0x0558) == 0x02)
        { pc = 0x17e30; continue dispatch; }
    frame.pc=2097191;
case 2097191:
yield* sub_18413();
frame.pc=2097192;
case 2097192:;
case 0x17e30:
    frame.pc=2097193;
case 2097193:
yield* sub_18daa();
frame.pc=2097194;
case 2097194:;
    if (flags.carry)
        { pc = 0x17e4b; continue dispatch; }
    frame.pc=2097195;
case 2097195:
yield* sub_19325();
frame.pc=2097196;
case 2097196:;
    if (flags.carry)
        { pc = 0x17e4b; continue dispatch; }
    r.dl = memoryAGet(r.ds, 0x057b);
    r.cx = memoryAGet16(r.ds, 0x0579);
    frame.pc=2097197;
case 2097197:
yield* sub_19ee0();
frame.pc=2097198;
case 2097198:;
    memoryASet16(r.ds, 0x055f, r.ax);
    frame.pc=2097199;
case 2097199:
yield* sub_18375();
frame.pc=2097200;
case 2097200:;
case 0x17e4b:
    return;
case 0x17e4c:
    if (memoryAGet(r.ds, 0x055c) < 0x01)
        { pc = 0x17e9a; continue dispatch; }
    if (memoryAGet(r.ds, 0x055c) != 0x01)
        { pc = 0x17e8f; continue dispatch; }
    memoryASet(r.ds, 0x055c, memoryAGet(r.ds, 0x055c) + 1);
    memoryASet16(r.ds, 0x0572, 0x0006);
    r.dl = memoryAGet(r.ds, 0x057b);
    r.cx = memoryAGet16(r.ds, 0x0579);
    frame.pc=2097201;
case 2097201:
yield* sub_19ee0();
frame.pc=2097202;
case 2097202:;
    memoryASet16(r.ds, 0x0563, r.ax);
    frame.pc=2097203;
case 2097203:
yield* sub_18413();
frame.pc=2097204;
case 2097204:;
    frame.pc=2097205;
case 2097205:
yield* sub_18daa();
frame.pc=2097206;
case 2097206:;
    if (flags.carry)
        { pc = 0x17e96; continue dispatch; }
    frame.pc=2097207;
case 2097207:
yield* sub_19325();
frame.pc=2097208;
case 2097208:;
    if (flags.carry)
        { pc = 0x17e96; continue dispatch; }
    r.ax = memoryAGet16(r.ds, 0x0563);
    memoryASet16(r.ds, 0x055f, r.ax);
    memoryASet16(r.ds, 0x0565, 0x0e03);
    memoryASet16(r.ds, 0x055d, 0x09da);
    frame.pc=2097209;
case 2097209:
yield* sub_18375();
frame.pc=2097210;
case 2097210:;
case 0x17e8f:
    if (memoryAGet(r.ds, 0x0699) != 0x00)
        { pc = 0x17e97; continue dispatch; }
case 0x17e96:
    return;
case 0x17e97:
    { pc = 0x180a8; continue dispatch; }
case 0x17e9a:
    if (memoryAGet(r.ds, 0x0571) != 0x00)
        { pc = 0x17ea4; continue dispatch; }
    { pc = 0x18053; continue dispatch; }
case 0x17ea4:
    frame.pc=2097211;
case 2097211:
yield* sub_181f9();
frame.pc=2097212;
case 2097212:;
    if (!flags.carry)
        { pc = 0x17ec0; continue dispatch; }
    memoryASet(r.ds, 0x056e, 0x00);
    memoryASet(r.ds, 0x0576, 0x02);
    memoryASet(r.ds, 0x0571, 0x01);
    memoryASet(r.ds, 0x055b, 0x00);
    { pc = 0x17ef1; continue dispatch; }
case 0x17ec0:
    r.al = memoryAGet(r.ds, 0x0578);
    flags.carry = memoryAGet(r.ds, 0x0577) < r.al;
    memoryASet(r.ds, 0x0577, memoryAGet(r.ds, 0x0577) - r.al);
    if (!flags.carry)
        { pc = 0x17ef1; continue dispatch; }
    if (memoryAGet(r.ds, 0x0571) == 0x01)
        { pc = 0x17ee6; continue dispatch; }
    if (memoryAGet(r.ds, 0x0576) <= 0x01)
        { pc = 0x17ede; continue dispatch; }
    memoryASet(r.ds, 0x0576, memoryAGet(r.ds, 0x0576) - 1);
    { pc = 0x17ef1; continue dispatch; }
case 0x17ede:
    memoryASet(r.ds, 0x0571, 0x01);
    { pc = 0x17ef1; continue dispatch; }
case 0x17ee6:
    if (memoryAGet(r.ds, 0x0576) >= 0x04)
        { pc = 0x17ef1; continue dispatch; }
    memoryASet(r.ds, 0x0576, memoryAGet(r.ds, 0x0576) + 1);
case 0x17ef1:
    if (memoryAGet(r.ds, 0x055a) != 0x00)
        { pc = 0x17f17; continue dispatch; }
    if (memoryAGet(r.ds, 0x055b) == 0x00)
        { pc = 0x17f05; continue dispatch; }
    r.tl = memoryAGet(r.ds, 0x055b);
    memoryASet(r.ds, 0x055b, memoryAGet(r.ds, 0x055b) - 1);
    if (r.tl != 1)
        { pc = 0x17f17; continue dispatch; }
case 0x17f05:
    if (memoryAGet(r.ds, 0x0571) != 0x01)
        { pc = 0x17f17; continue dispatch; }
    frame.pc=2097213;
case 2097213:
yield* sub_18838();
frame.pc=2097214;
case 2097214:;
    if (!flags.carry)
        { pc = 0x17f17; continue dispatch; }
    r.al = memoryAGet(r.ds, 0x057c);
    { pc = 0x17f59; continue dispatch; }
case 0x17f17:
    r.al = memoryAGet(r.ds, 0x057c);
    if (memoryAGet(r.ds, 0x0571) == 0x01)
        { pc = 0x17f36; continue dispatch; }
    flags.carry = r.al < memoryAGet(r.ds, 0x0576);
    r.al -= memoryAGet(r.ds, 0x0576);
    if (!flags.carry)
        { pc = 0x17f7f; continue dispatch; }
    r.al = 0;
    memoryASet(r.ds, 0x0571, 0x01);
    memoryASet(r.ds, 0x0576, 0x01);
    { pc = 0x17f7f; continue dispatch; }
case 0x17f36:
    r.al += memoryAGet(r.ds, 0x0576);
    if (r.al <= 0xe6)
        { pc = 0x17f7f; continue dispatch; }
    if (memoryAGet16(r.ds, 0x0004) != 0x0007)
        { pc = 0x17f52; continue dispatch; }
    if (r.al < 0xf8)
        { pc = 0x17f7f; continue dispatch; }
    r.al = 0xf8;
    memoryASet(r.ds, 0x0551, 0x01);
    { pc = 0x17f7f; continue dispatch; }
case 0x17f52:
    r.al = 0xe6;
    memoryASet(r.ds, 0x0550, 0x00);
case 0x17f59:
    memoryASet(r.ds, 0x0571, 0x00);
    memoryASet(r.ds, 0x0584, 0x00);
    memoryASet16(r.ds, 0x0572, 0x0002);
    memoryASet(r.ds, 0x055b, 0x00);
    memoryASet(r.ds, 0x055a, 0x00);
    if (memoryAGet(r.ds, 0x055c) == 0x00)
        { pc = 0x17f7f; continue dispatch; }
    push(r.ax);
    frame.pc=2097215;
case 2097215:
yield* sub_1ccf2();
frame.pc=2097216;
case 2097216:;
    r.ax = pop();
case 0x17f7f:
    memoryASet(r.ds, 0x057c, r.al);
    flags.carry = r.al < 0x32;
    r.al -= 0x32;
    if (!flags.carry)
        { pc = 0x17f88; continue dispatch; }
    r.al = 0;
case 0x17f88:
    memoryASet(r.ds, 0x057b, r.al);
    r.dl = memoryAGet(r.ds, 0x057b);
    r.cx = memoryAGet16(r.ds, 0x0579);
    frame.pc=2097217;
case 2097217:
yield* sub_19ee0();
frame.pc=2097218;
case 2097218:;
    memoryASet16(r.ds, 0x0563, r.ax);
    if (memoryAGet(r.ds, 0x0583) != 0x00)
        { pc = 0x17fa3; continue dispatch; }
    frame.pc=2097219;
case 2097219:
yield* sub_18413();
frame.pc=2097220;
case 2097220:;
case 0x17fa3:
    frame.pc=2097221;
case 2097221:
yield* sub_18daa();
frame.pc=2097222;
case 2097222:;
    if (flags.carry)
        { pc = 0x17ff4; continue dispatch; }
    frame.pc=2097223;
case 2097223:
yield* sub_19325();
frame.pc=2097224;
case 2097224:;
    if (flags.carry)
        { pc = 0x17ff4; continue dispatch; }
    r.ax = memoryAGet16(r.ds, 0x0563);
    memoryASet16(r.ds, 0x055f, r.ax);
    if (memoryAGet(r.ds, 0x0584) == 0x00)
        { pc = 0x17fd1; continue dispatch; }
    memoryASet16(r.ds, 0x0585, memoryAGet16(r.ds, 0x0585) + 0x0002);
    r.bx = memoryAGet16(r.ds, 0x0585);
    r.bx &= 0x000e;
    r.ax = memoryAGet16(r.ds, r.bx + 4034);
    r.bx = memoryAGet16(r.ds, r.bx + 4050);
    { pc = 0x17fd8; continue dispatch; }
case 0x17fd1:
    r.ax = memoryAGet16(r.ds, 0x0569);
    r.bx = memoryAGet16(r.ds, 0x0567);
case 0x17fd8:
    memoryASet16(r.ds, 0x055d, r.ax);
    memoryASet16(r.ds, 0x0565, r.bx);
    r.al = 0x32;
    r.tl = r.al;
    r.al -= memoryAGet(r.ds, 0x057c);
    if (r.al == 0)
        { pc = 0x1800e; continue dispatch; }
    if (r.tl < memoryAGet(r.ds, 0x057c))
        { pc = 0x1800e; continue dispatch; }
    r.cx = 0x0168;
case 0x17fec:
    if (--r.cx)
        { pc = 0x17fec; continue dispatch; }
    flags.carry = r.bh < r.al;
    r.bh -= r.al;
    if (r.bh == 0)
        { pc = 0x17ff4; continue dispatch; }
    if (!flags.carry)
        { pc = 0x17ffa; continue dispatch; }
case 0x17ff4:
    memoryASet(r.ds, 0x0583, 0x01);
    return;
case 0x17ffa:
    memoryASet16(r.ds, 0x0565, r.bx);
    r.ah = r.bl;
    r.ah <<= 1;
    mul8(r.ah);
    r.ax += memoryAGet16(r.ds, 0x0569);
    memoryASet16(r.ds, 0x055d, r.ax);
    { pc = 0x1804f; continue dispatch; }
case 0x1800e:
    if (memoryAGet16(r.ds, 0x0004) != 0x0007)
        { pc = 0x1801e; continue dispatch; }
    r.al = memoryAGet(r.ds, 0x057b);
    flags.carry = r.al < 0xbb;
    r.al -= 0xbb;
    if (flags.carry)
        { pc = 0x1804f; continue dispatch; }
    if (!flags.carry)
        { pc = 0x1802c; continue dispatch; }
case 0x1801e:
    if (memoryAGet(r.ds, 0x0550) != 0x02)
        { pc = 0x1804f; continue dispatch; }
    r.al = memoryAGet(r.ds, 0x057b);
    r.tl = r.al;
    r.al -= 0x5e;
    if (r.tl < 0x5e)
        { pc = 0x1804f; continue dispatch; }
case 0x1802c:
    flags.carry = r.bh < r.al;
    r.bh -= r.al;
    if (r.bh == 0)
        { pc = 0x18032; continue dispatch; }
    if (!flags.carry)
        { pc = 0x18046; continue dispatch; }
case 0x18032:
    if (memoryAGet16(r.ds, 0x0004) != 0x0007)
        { pc = 0x1803f; continue dispatch; }
    memoryASet(r.ds, 0x0551, 0x01);
    return;
case 0x1803f:
    frame.pc=2097225;
case 2097225:
yield* sub_1793d();
frame.pc=2097226;
case 2097226:;
    frame.pc=2097227;
case 2097227:
yield* sub_1cbfb();
frame.pc=2097228;
case 2097228:;
    return;
case 0x18046:
    memoryASet16(r.ds, 0x0565, r.bx);
    memoryASet(r.ds, 0x0576, 0x02);
case 0x1804f:
    frame.pc=2097229;
case 2097229:
yield* sub_18375();
frame.pc=2097230;
case 2097230:;
    return;
case 0x18053:
    if (memoryAGet16(r.ds, 0x0004) == 0x0007)
        { pc = 0x18061; continue dispatch; }
    if (memoryAGet(r.ds, 0x057b) >= 0xb4)
        { pc = 0x180a8; continue dispatch; }
case 0x18061:
    frame.pc=2097231;
case 2097231:
yield* sub_18838();
frame.pc=2097232;
case 2097232:;
    if (flags.carry)
        { pc = 0x18073; continue dispatch; }
    memoryASet(r.ds, 0x056e, 0x00);
    memoryASet(r.ds, 0x0571, 0x01);
    { pc = 0x180e1; continue dispatch; }
case 0x18073:
    if (memoryAGet16(r.ds, 0x0004) != 0x0000)
        { pc = 0x180a8; continue dispatch; }
    frame.pc=2097233;
case 2097233:
yield* sub_19527();
frame.pc=2097234;
case 2097234:;
    if (flags.carry)
        { pc = 0x18086; continue dispatch; }
    memoryASet(r.ds, 0x056c, 0x00);
    { pc = 0x180a8; continue dispatch; }
case 0x18086:
    if (memoryAGet(r.ds, 0x056c) != 0x00)
        { pc = 0x18090; continue dispatch; }
    frame.pc=2097235;
case 2097235:
yield* sub_1cb4f();
frame.pc=2097236;
case 2097236:;
case 0x18090:
    memoryASet(r.ds, 0x0699, 0x01);
    memoryASet(r.ds, 0x056c, 0x01);
    frame.pc=2097237;
case 2097237:
yield* sub_1a02d();
frame.pc=2097238;
case 2097238:;
    r.dl &= 0x01;
    if (r.dl != 0)
        { pc = 0x180a4; continue dispatch; }
    r.dl = 0xff;
case 0x180a4:
    memoryASet(r.ds, 0x0698, r.dl);
case 0x180a8:
    r.al = memoryAGet(r.ds, 0x056e);
    memoryASet(r.ds, 0x056f, r.al);
    r.al = memoryAGet(r.ds, 0x0698);
    memoryASet(r.ds, 0x056e, r.al);
    r.al = memoryAGet(r.ds, 0x0699);
    memoryASet(r.ds, 0x0571, r.al);
    if (r.al != 0x00)
        { pc = 0x180c1; continue dispatch; }
    { pc = 0x18164; continue dispatch; }
case 0x180c1:
    if (memoryAGet(r.ds, 0x0571) != 0x01)
        { pc = 0x180f9; continue dispatch; }
    if (memoryAGet(r.ds, 0x057b) < 0xb4)
        { pc = 0x180e1; continue dispatch; }
    memoryASet(r.ds, 0x0571, 0x00);
    memoryASet(r.ds, 0x0584, 0x00);
    memoryASet(r.ds, 0x0699, 0x00);
    { pc = 0x18164; continue dispatch; }
case 0x180e1:
    r.ah = 0x01;
    r.al = 0x20;
    memoryASet(r.ds, 0x055b, 0x08);
    if (memoryAGet(r.ds, 0x0550) != 0x01)
        { pc = 0x18121; continue dispatch; }
    memoryASet(r.ds, 0x0550, 0x00);
    { pc = 0x18121; continue dispatch; }
case 0x180f9:
    memoryASet(r.ds, 0x055b, 0x00);
    r.ax = memoryAGet16(r.ds, 0x0572);
    r.bl = r.al;
    if (r.al <= 0x02)
        { pc = 0x18109; continue dispatch; }
    r.al -= 0x02;
case 0x18109:
    memoryASet16(r.ds, 0x0572, r.ax);
    r.ah = 0x08;
    r.al = r.bl;
    r.al ^= 0x0f;
    r.cl = 0x04;
    r.al <<= r.cl;
    if (memoryAGet(r.ds, 0x0550) != 0x01)
        { pc = 0x18121; continue dispatch; }
    memoryASet(r.ds, 0x0550, memoryAGet(r.ds, 0x0550) + 1);
case 0x18121:
    memoryASet(r.ds, 0x0578, r.al);
    memoryASet(r.ds, 0x0576, r.ah);
    memoryASet(r.ds, 0x0577, 0x01);
    memoryASet(r.ds, 0x055c, 0x00);
    r.bl = memoryAGet(r.ds, 0x056e);
    r.bl++;
    r.bl <<= 1;
    if (memoryAGet(r.ds, 0x0571) == 0xff)
        { pc = 0x18144; continue dispatch; }
    r.bl += 0x06;
case 0x18144:
    r.bh = 0;
    r.ax = memoryAGet16(r.ds, r.bx + 4010);
    memoryASet16(r.ds, 0x0569, r.ax);
    r.ax = memoryAGet16(r.ds, r.bx + 4022);
    memoryASet16(r.ds, 0x0567, r.ax);
    memoryASet(r.ds, 0x39e0, 0x00);
    if (memoryAGet(r.ds, 0x127c) == 0x00)
        { pc = 0x18163; continue dispatch; }
    frame.pc=2097239;
case 2097239:
yield* sub_1cb28();
frame.pc=2097240;
case 2097240:;
case 0x18163:
    return;
case 0x18164:
    if (memoryAGet16(r.ds, 0x0004) == 0x0000)
        { pc = 0x18175; continue dispatch; }
    if (memoryAGet16(r.ds, 0x0004) == 0x0007)
        { pc = 0x18175; continue dispatch; }
    frame.pc=2097241;
case 2097241:
yield* sub_1a675();
frame.pc=2097242;
case 2097242:;
case 0x18175:
    frame.pc=2097243;
case 2097243:
yield* sub_181f9();
frame.pc=2097244;
case 2097244:;
    r.dl = memoryAGet(r.ds, 0x057b);
    r.cx = memoryAGet16(r.ds, 0x0579);
    frame.pc=2097245;
case 2097245:
yield* sub_19ee0();
frame.pc=2097246;
case 2097246:;
    memoryASet16(r.ds, 0x0563, r.ax);
    r.al = memoryAGet(r.ds, 0x056e);
    r.al |= memoryAGet(r.ds, 0x0571);
    if (r.al)
        { pc = 0x18193; continue dispatch; }
    frame.pc=2097247;
case 2097247:
yield* sub_18299();
frame.pc=2097248;
case 2097248:;
    return;
case 0x18193:
    frame.pc=2097249;
case 2097249:
yield* sub_18250();
frame.pc=2097250;
case 2097250:;
    memoryASet16(r.ds, 0x055d, r.bx);
    frame.pc=2097251;
case 2097251:
yield* sub_18413();
frame.pc=2097252;
case 2097252:;
    frame.pc=2097253;
case 2097253:
yield* sub_18daa();
frame.pc=2097254;
case 2097254:;
    if (flags.carry)
        return;
    frame.pc=2097255;
case 2097255:
yield* sub_19325();
frame.pc=2097256;
case 2097256:;
    if (flags.carry)
        return;
    r.ax = memoryAGet16(r.ds, 0x0563);
    memoryASet16(r.ds, 0x055f, r.ax);
    memoryASet16(r.ds, 0x0565, 0x0b03);
    frame.pc=2097257;
case 2097257:
yield* sub_18375();
frame.pc=2097258;
case 2097258:;

      return;
    default: throw new Error("Invalid control flow in sub_17b15");
    }
  }
  } finally {execution.leave(frame);}
}

function* sub_181b7() {
  let pc=0;
  const frame=execution.enter('sub_181b7',pc);pc=frame.pc;
  let skipBudget=frame.budget || execution.restoring;
  try {
  if(execution.restoring && execution.pending.length===0) {
    execution.restoring=false;
    if(frame.parked!==null) {yield frame.parked;frame.parked=null;frame.budget=false;}
  }
  dispatch: while (true) {
    if (!skipBudget && (++game.steps & 1023) === 0) {
      frame.pc=pc;frame.budget=true;frame.parked=0;yield 0;
      frame.parked=null;frame.budget=false;
    }
    skipBudget=false;
    switch(pc) {
    case 0:

    r.cx = 0x0b03;
    r.cl -= r.al;
    memoryASet16(r.ds, 0x0565, r.cx);
    if (r.ah == 0xff)
        { pc = 0x181d6; continue dispatch; }
    r.ah = 0;
    r.al <<= 1;
    memoryASet16(r.ds, 0x055d, memoryAGet16(r.ds, 0x055d) + r.ax);
    memoryASet16(r.ds, 0x0579, 0x0000);
    { pc = 0x181e4; continue dispatch; }
case 0x181d6:
    r.ah = 0;
    r.al <<= 1;
    r.al <<= 1;
    r.al <<= 1;
    r.ax += 0x0128;
    memoryASet16(r.ds, 0x0579, r.ax);
case 0x181e4:
    push(r.ds);
    r.es = pop();
    r.si = memoryAGet16(r.ds, 0x055d);
    r.di = 0x000e;
    r.al = 0x03;
    frame.pc=2097153;
case 2097153:
yield* sub_19fa0();
frame.pc=2097154;
case 2097154:;
    memoryASet16(r.ds, 0x055d, 0x000e);

      return;
    default: throw new Error("Invalid control flow in sub_181b7");
    }
  }
  } finally {execution.leave(frame);}
}

function* sub_181f9() {
  let pc=0;
  const frame=execution.enter('sub_181f9',pc);pc=frame.pc;
  let skipBudget=frame.budget || execution.restoring;
  try {
  if(execution.restoring && execution.pending.length===0) {
    execution.restoring=false;
    if(frame.parked!==null) {yield frame.parked;frame.parked=null;frame.budget=false;}
  }
  dispatch: while (true) {
    if (!skipBudget && (++game.steps & 1023) === 0) {
      frame.pc=pc;frame.budget=true;frame.parked=0;yield 0;
      frame.parked=null;frame.budget=false;
    }
    skipBudget=false;
    switch(pc) {
    case 0:

    memoryASet16(r.ds, 0x05f6, 0x0008);
    memoryASet16(r.ds, 0x05f8, 0x0123);
    if (memoryAGet16(r.ds, 0x0004) != 0x0007)
        { pc = 0x18218; continue dispatch; }
    memoryASet16(r.ds, 0x05f6, 0x0024);
    memoryASet16(r.ds, 0x05f8, 0x010f);
case 0x18218:
    r.ax = memoryAGet16(r.ds, 0x0579);
    if (memoryAGet(r.ds, 0x056e) < 0x01)
        { pc = 0x1824e; continue dispatch; }
    if (memoryAGet(r.ds, 0x056e) != 0x01)
        { pc = 0x18237; continue dispatch; }
    r.ax += memoryAGet16(r.ds, 0x0572);
    if (r.ax < memoryAGet16(r.ds, 0x05f8))
        { pc = 0x1824b; continue dispatch; }
    r.ax = memoryAGet16(r.ds, 0x05f8);
    r.ax--;
    memoryASet16(r.ds, 0x0579, r.ax);
    flags.carry = true;
    return;
case 0x18237:
    r.tx = r.ax;
    r.ax -= memoryAGet16(r.ds, 0x0572);
    if (r.tx < memoryAGet16(r.ds, 0x0572))
        { pc = 0x18243; continue dispatch; }
    if (r.ax >= memoryAGet16(r.ds, 0x05f6))
        { pc = 0x1824b; continue dispatch; }
case 0x18243:
    r.ax = memoryAGet16(r.ds, 0x05f6);
    memoryASet16(r.ds, 0x0579, r.ax);
    flags.carry = true;
    return;
case 0x1824b:
    memoryASet16(r.ds, 0x0579, r.ax);
case 0x1824e:
    flags.carry = false;

      return;
    default: throw new Error("Invalid control flow in sub_181f9");
    }
  }
  } finally {execution.leave(frame);}
}

function* sub_18250() {
  let pc=0;
  const frame=execution.enter('sub_18250',pc);pc=frame.pc;
  let skipBudget=frame.budget || execution.restoring;
  try {
  if(execution.restoring && execution.pending.length===0) {
    execution.restoring=false;
    if(frame.parked!==null) {yield frame.parked;frame.parked=null;frame.budget=false;}
  }
  dispatch: while (true) {
    if (!skipBudget && (++game.steps & 1023) === 0) {
      frame.pc=pc;frame.budget=true;frame.parked=0;yield 0;
      frame.parked=null;frame.budget=false;
    }
    skipBudget=false;
    switch(pc) {
    case 0:

    r.al = memoryAGet(r.ds, 0x056e);
    if (r.al == memoryAGet(r.ds, 0x056f))
        { pc = 0x1825f; continue dispatch; }
    memoryASet16(r.ds, 0x0572, 0x0002);
case 0x1825f:
    if (memoryAGet16(r.ds, 0x0572) >= 0x0008)
        { pc = 0x18275; continue dispatch; }
    memoryASet(r.ds, 0x0577, memoryAGet(r.ds, 0x0577) - 1);
    r.al = memoryAGet(r.ds, 0x0577);
    r.al &= 0x03;
    if (r.al != 0)
        { pc = 0x18275; continue dispatch; }
    memoryASet16(r.ds, 0x0572, memoryAGet16(r.ds, 0x0572) + 1);
case 0x18275:
    r.bl = memoryAGet(r.ds, 0x056b);
    r.bl++;
    if (r.bl < 0x06)
        { pc = 0x18282; continue dispatch; }
    r.bl = 0x00;
case 0x18282:
    memoryASet(r.ds, 0x056b, r.bl);
    if (memoryAGet(r.ds, 0x056e) != 0xff)
        { pc = 0x18290; continue dispatch; }
    r.bl += 0x06;
case 0x18290:
    r.bl <<= 1;
    r.bh = 0;
    r.bx = memoryAGet16(r.ds, r.bx + 3962);

      return;
    default: throw new Error("Invalid control flow in sub_18250");
    }
  }
  } finally {execution.leave(frame);}
}

function* sub_18299() {
  let pc=0;
  const frame=execution.enter('sub_18299',pc);pc=frame.pc;
  let skipBudget=frame.budget || execution.restoring;
  try {
  if(execution.restoring && execution.pending.length===0) {
    execution.restoring=false;
    if(frame.parked!==null) {yield frame.parked;frame.parked=null;frame.budget=false;}
  }
  dispatch: while (true) {
    if (!skipBudget && (++game.steps & 1023) === 0) {
      frame.pc=pc;frame.budget=true;frame.parked=0;yield 0;
      frame.parked=null;frame.budget=false;
    }
    skipBudget=false;
    switch(pc) {
    case 0:

    memoryASet16(r.ds, 0x0572, 0x0002);
    memoryASet(r.ds, 0x0577, 0x08);
    if (memoryAGet16(r.ds, 0x0561) != 0x0c02)
        { pc = 0x182b7; continue dispatch; }
    memoryASet(r.ds, 0x056d, memoryAGet(r.ds, 0x056d) + 1);
    if (memoryAGet(r.ds, 0x056d) & 0x07)
        return;
case 0x182b7:
    frame.pc=2097153;
case 2097153:
yield* sub_18413();
frame.pc=2097154;
case 2097154:;
    frame.pc=2097155;
case 2097155:
yield* sub_18daa();
frame.pc=2097156;
case 2097156:;
    if (flags.carry)
        return;
    frame.pc=2097157;
case 2097157:
yield* sub_19325();
frame.pc=2097158;
case 2097158:;
    if (flags.carry)
        return;
    frame.pc=2097159;
case 2097159:
yield* sub_1a02d();
frame.pc=2097160;
case 2097160:;
    r.bl = r.dl;
    r.bx &= 0x000e;
    r.si = memoryAGet16(r.ds, r.bx + 3986);
    r.ax = 0xb800;
    r.es = r.ax;
    r.di = memoryAGet16(r.ds, 0x055f);
    r.bp = 0x05fa;
    memoryASet16(r.ds, 0x0561, 0x0c02);
    r.cx = 0x0602;
    frame.pc=2097161;
case 2097161:
yield* sub_19f65();
frame.pc=2097162;
case 2097162:;
    frame.pc=2097163;
case 2097163:
yield* sub_1a02d();
frame.pc=2097164;
case 2097164:;
    r.bl = r.dl;
    r.bx &= 0x0006;
    r.si = memoryAGet16(r.ds, r.bx + 4002);
    r.di = memoryAGet16(r.ds, 0x055f);
    r.di += 0x00f0;
    r.bp = 0x0612;
    r.cx = 0x0602;
    frame.pc=2097165;
case 2097165:
yield* sub_19f65();
frame.pc=2097166;
case 2097166:;
    memoryASet(r.ds, 0x0583, 0x00);

      return;
    default: throw new Error("Invalid control flow in sub_18299");
    }
  }
  } finally {execution.leave(frame);}
}

function* sub_1830d() {
  let pc=0;
  const frame=execution.enter('sub_1830d',pc);pc=frame.pc;
  let skipBudget=frame.budget || execution.restoring;
  try {
  if(execution.restoring && execution.pending.length===0) {
    execution.restoring=false;
    if(frame.parked!==null) {yield frame.parked;frame.parked=null;frame.budget=false;}
  }
  dispatch: while (true) {
    if (!skipBudget && (++game.steps & 1023) === 0) {
      frame.pc=pc;frame.budget=true;frame.parked=0;yield 0;
      frame.parked=null;frame.budget=false;
    }
    skipBudget=false;
    switch(pc) {
    case 0:

    memoryASet(r.ds, 0x055c, 0x00);
    memoryASet(r.ds, 0x0571, 0x01);
    memoryASet(r.ds, 0x0576, 0x02);
    memoryASet(r.ds, 0x0578, 0x01);
    memoryASet(r.ds, 0x0577, 0xff);
    memoryASet(r.ds, 0x056e, 0x00);
    memoryASet(r.ds, 0x055a, 0x01);
    r.ax = memoryAGet16(r.ds, 0x0fac);
    memoryASet16(r.ds, 0x0569, r.ax);
    r.ax = memoryAGet16(r.ds, 0x0fb8);
    memoryASet16(r.ds, 0x0567, r.ax);
    memoryASet(r.ds, 0x0550, 0x02);

      return;
    default: throw new Error("Invalid control flow in sub_1830d");
    }
  }
  } finally {execution.leave(frame);}
}

function* sub_18342() {
  let pc=0;
  const frame=execution.enter('sub_18342',pc);pc=frame.pc;
  let skipBudget=frame.budget || execution.restoring;
  try {
  if(execution.restoring && execution.pending.length===0) {
    execution.restoring=false;
    if(frame.parked!==null) {yield frame.parked;frame.parked=null;frame.budget=false;}
  }
  dispatch: while (true) {
    if (!skipBudget && (++game.steps & 1023) === 0) {
      frame.pc=pc;frame.budget=true;frame.parked=0;yield 0;
      frame.parked=null;frame.budget=false;
    }
    skipBudget=false;
    switch(pc) {
    case 0:

    r.cx = memoryAGet16(r.ds, 0x0579);
    r.dl = memoryAGet(r.ds, 0x057b);
    frame.pc=2097153;
case 2097153:
yield* sub_19ee0();
frame.pc=2097154;
case 2097154:;
    memoryASet16(r.ds, 0x055f, r.ax);
    frame.pc=2097155;
case 2097155:
yield* sub_18354();
frame.pc=2097156;
case 2097156:;

      return;
    default: throw new Error("Invalid control flow in sub_18342");
    }
  }
  } finally {execution.leave(frame);}
}

function* sub_18354() {
  let pc=0;
  const frame=execution.enter('sub_18354',pc);pc=frame.pc;
  let skipBudget=frame.budget || execution.restoring;
  try {
  if(execution.restoring && execution.pending.length===0) {
    execution.restoring=false;
    if(frame.parked!==null) {yield frame.parked;frame.parked=null;frame.budget=false;}
  }
  dispatch: while (true) {
    if (!skipBudget && (++game.steps & 1023) === 0) {
      frame.pc=pc;frame.budget=true;frame.parked=0;yield 0;
      frame.parked=null;frame.budget=false;
    }
    skipBudget=false;
    switch(pc) {
    case 0:

    r.ax = 0x1010;
    r.es = r.ax;
    r.di = 0x05fa;
    push(r.ds);
    r.si = memoryAGet16(r.ds, 0x055f);
    r.ax = 0xb800;
    r.ds = r.ax;
    r.cx = memoryAGet16(r.es, 0x0561);
    frame.pc=2097153;
case 2097153:
yield* sub_19ffa();
frame.pc=2097154;
case 2097154:;
    r.ds = pop();
    memoryASet(r.ds, 0x0583, 0x00);

      return;
    default: throw new Error("Invalid control flow in sub_18354");
    }
  }
  } finally {execution.leave(frame);}
}

function* sub_18375() {
  let pc=0;
  const frame=execution.enter('sub_18375',pc);pc=frame.pc;
  let skipBudget=frame.budget || execution.restoring;
  try {
  if(execution.restoring && execution.pending.length===0) {
    execution.restoring=false;
    if(frame.parked!==null) {yield frame.parked;frame.parked=null;frame.budget=false;}
  }
  dispatch: while (true) {
    if (!skipBudget && (++game.steps & 1023) === 0) {
      frame.pc=pc;frame.budget=true;frame.parked=0;yield 0;
      frame.parked=null;frame.budget=false;
    }
    skipBudget=false;
    switch(pc) {
    case 0:

    r.ax = 0xb800;
    r.es = r.ax;
    r.di = memoryAGet16(r.ds, 0x055f);
    r.bp = 0x05fa;
    r.si = memoryAGet16(r.ds, 0x055d);
    r.cx = memoryAGet16(r.ds, 0x0565);
    memoryASet16(r.ds, 0x0561, r.cx);
    memoryASet(r.ds, 0x0583, 0x00);
    frame.pc=2097153;
case 2097153:
yield* sub_19f65();
frame.pc=2097154;
case 2097154:;

      return;
    default: throw new Error("Invalid control flow in sub_18375");
    }
  }
  } finally {execution.leave(frame);}
}

function* sub_18396() {
  let pc=0;
  const frame=execution.enter('sub_18396',pc);pc=frame.pc;
  let skipBudget=frame.budget || execution.restoring;
  try {
  if(execution.restoring && execution.pending.length===0) {
    execution.restoring=false;
    if(frame.parked!==null) {yield frame.parked;frame.parked=null;frame.budget=false;}
  }
  dispatch: while (true) {
    if (!skipBudget && (++game.steps & 1023) === 0) {
      frame.pc=pc;frame.budget=true;frame.parked=0;yield 0;
      frame.parked=null;frame.budget=false;
    }
    skipBudget=false;
    switch(pc) {
    case 0:

    r.dl = memoryAGet(r.ds, 0x057b);
    r.cx = memoryAGet16(r.ds, 0x0579);
    flags.carry = r.cx < 0x000c;
    r.cx -= 0x000c;
    if (!flags.carry)
        { pc = 0x183a5; continue dispatch; }
    r.cx = 0;
case 0x183a5:
    if (r.cx < 0x010f)
        { pc = 0x183ae; continue dispatch; }
    r.cx = 0x010e;
case 0x183ae:
    frame.pc=2097153;
case 2097153:
yield* sub_19ee0();
frame.pc=2097154;
case 2097154:;
    memoryASet16(r.ds, 0x0581, r.ax);
    r.di = r.ax;
    r.ax = 0xb800;
    r.es = r.ax;
    r.bp = 0x000e;
    r.si = 0x1679;
    r.cx = 0x1205;
    frame.pc=2097155;
case 2097155:
yield* sub_19efc();
frame.pc=2097156;
case 2097156:;
    r.ah = 0;
    frame.pc=2097157;
case 2097157:
yield* interrupt(0x1a);
frame.pc=2097158;
case 2097158:;
    memoryASet16(r.ds, 0x057f, r.dx);
    memoryASet16(r.ds, 0x5a3c, 0x0000);
    memoryASet16(r.ds, 0x5a3e, 0x0000);
case 0x183db:
    frame.pc=2097159;
case 2097159:
yield* sub_1cc4c();
frame.pc=2097160;
case 2097160:;
    r.ah = 0;
    frame.pc=2097161;
case 2097161:
yield* interrupt(0x1a);
frame.pc=2097162;
case 2097162:;
    r.dx -= memoryAGet16(r.ds, 0x057f);
    if (r.dx < 0x000a)
        { pc = 0x183db; continue dispatch; }
    frame.pc=2097163;
case 2097163:
yield* sub_1cd51();
frame.pc=2097164;
case 2097164:;
    r.di = memoryAGet16(r.ds, 0x0581);
    r.si = 0x000e;
    r.cx = 0x1205;
    memoryASet(r.ds, 0x0583, 0x00);
    frame.pc=2097165;
case 2097165:
yield* sub_19fcd();
frame.pc=2097166;
case 2097166:;
    if (memoryAGet(r.ds, 0x1678) == 0x00)
        return;
    if (memoryAGet(r.ds, 0x1f80) == 0x00)
        return;
    memoryASet(r.ds, 0x1f80, memoryAGet(r.ds, 0x1f80) - 1);

      return;
    default: throw new Error("Invalid control flow in sub_18396");
    }
  }
  } finally {execution.leave(frame);}
}

function* sub_18413() {
  let pc=0;
  const frame=execution.enter('sub_18413',pc);pc=frame.pc;
  let skipBudget=frame.budget || execution.restoring;
  try {
  if(execution.restoring && execution.pending.length===0) {
    execution.restoring=false;
    if(frame.parked!==null) {yield frame.parked;frame.parked=null;frame.budget=false;}
  }
  dispatch: while (true) {
    if (!skipBudget && (++game.steps & 1023) === 0) {
      frame.pc=pc;frame.budget=true;frame.parked=0;yield 0;
      frame.parked=null;frame.budget=false;
    }
    skipBudget=false;
    switch(pc) {
    case 0:

    r.ax = 0xb800;
    r.es = r.ax;
    r.di = memoryAGet16(r.ds, 0x055f);
    r.si = 0x05fa;
    r.cx = memoryAGet16(r.ds, 0x0561);
    frame.pc=2097153;
case 2097153:
yield* sub_19fcd();
frame.pc=2097154;
case 2097154:;

      return;
    default: throw new Error("Invalid control flow in sub_18413");
    }
  }
  } finally {execution.leave(frame);}
}

function* sub_18430() {
  let pc=0;
  const frame=execution.enter('sub_18430',pc);pc=frame.pc;
  let skipBudget=frame.budget || execution.restoring;
  try {
  if(execution.restoring && execution.pending.length===0) {
    execution.restoring=false;
    if(frame.parked!==null) {yield frame.parked;frame.parked=null;frame.budget=false;}
  }
  dispatch: while (true) {
    if (!skipBudget && (++game.steps & 1023) === 0) {
      frame.pc=pc;frame.budget=true;frame.parked=0;yield 0;
      frame.parked=null;frame.budget=false;
    }
    skipBudget=false;
    switch(pc) {
    case 0:

    r.ah = 0;
    frame.pc=2097153;
case 2097153:
yield* interrupt(0x1a);
frame.pc=2097154;
case 2097154:;
    r.ax = r.dx;
    r.ax -= memoryAGet16(r.ds, 0x069f);
    if (r.ax >= 0x0002)
        { pc = 0x18440; continue dispatch; }
    return;
case 0x18440:
    memoryASet16(r.ds, 0x069f, r.dx);
    if (memoryAGet(r.ds, 0x069b) != 0x00)
        { pc = 0x1845e; continue dispatch; }
    frame.pc=2097155;
case 2097155:
yield* sub_184f1();
frame.pc=2097156;
case 2097156:;
    frame.pc=2097157;frame.parked=1;yield 1;
case 2097157: frame.parked=null;







    return;
case 0x1845e:
    r.dx = 0x0201;
    r.al = portRead(r.dx);
    r.al &= 0x10;
    memoryASet(r.ds, 0x069a, r.al);
    memoryASet(r.ds, 0x069e, 0x03);
    frame.pc=2097158;
case 2097158:
yield* sub_185e7();
frame.pc=2097159;
case 2097159:;
    memoryASet16(r.ds, 0x069c, r.ax);
    out(r.dx, r.al);
    r.cx = 0x07d0;
case 0x18476:
    r.al = portRead(r.dx);
    if (r.al & 0x01)
        { pc = 0x1848e; continue dispatch; }
    if (!(memoryAGet(r.ds, 0x069e) & 0x01))
        { pc = 0x1848e; continue dispatch; }
    memoryASet(r.ds, 0x069e, memoryAGet(r.ds, 0x069e) & 0xfe);
    frame.pc=2097160;
case 2097160:
yield* sub_184d1();
frame.pc=2097161;
case 2097161:;
    memoryASet(r.ds, 0x0698, r.bl);
case 0x1848e:
    if (r.al & 0x02)
        { pc = 0x184a5; continue dispatch; }
    if (!(memoryAGet(r.ds, 0x069e) & 0x02))
        { pc = 0x184a5; continue dispatch; }
    memoryASet(r.ds, 0x069e, memoryAGet(r.ds, 0x069e) & 0xfd);
    frame.pc=2097162;
case 2097162:
yield* sub_184d1();
frame.pc=2097163;
case 2097163:;
    memoryASet(r.ds, 0x0699, r.bl);
case 0x184a5:
    if (!(memoryAGet(r.ds, 0x069e) & 0x03))
        return;
    frame.pc=2097164;
case 2097164:
yield* sub_185e7();
frame.pc=2097165;
case 2097165:;
    r.ax -= memoryAGet16(r.ds, 0x069c);
    if (--r.cx && r.ax != 0x1964)
        { pc = 0x18476; continue dispatch; }
    if (!(memoryAGet(r.ds, 0x069e) & 0x01))
        { pc = 0x184c4; continue dispatch; }
    memoryASet(r.ds, 0x0698, 0xff);
case 0x184c4:
    if (!(memoryAGet(r.ds, 0x069e) & 0x02))
        return;
    memoryASet(r.ds, 0x0699, 0xff);

      return;
    default: throw new Error("Invalid control flow in sub_18430");
    }
  }
  } finally {execution.leave(frame);}
}

function* sub_184d1() {
  let pc=0;
  const frame=execution.enter('sub_184d1',pc);pc=frame.pc;
  let skipBudget=frame.budget || execution.restoring;
  try {
  if(execution.restoring && execution.pending.length===0) {
    execution.restoring=false;
    if(frame.parked!==null) {yield frame.parked;frame.parked=null;frame.budget=false;}
  }
  dispatch: while (true) {
    if (!skipBudget && (++game.steps & 1023) === 0) {
      frame.pc=pc;frame.budget=true;frame.parked=0;yield 0;
      frame.parked=null;frame.budget=false;
    }
    skipBudget=false;
    switch(pc) {
    case 0:

    push(r.ax);
    frame.pc=2097153;
case 2097153:
yield* sub_185e7();
frame.pc=2097154;
case 2097154:;
    r.ax -= memoryAGet16(r.ds, 0x069c);
    r.bx = r.ax;
    r.ax = pop();
    if (r.bx >= 0xf5e6)
        { pc = 0x184e5; continue dispatch; }
    r.bl = 0x01;
    return;
case 0x184e5:
    if (r.bx >= 0xfafa)
        { pc = 0x184ee; continue dispatch; }
    r.bl = 0;
    return;
case 0x184ee:
    r.bl = 0xff;

      return;
    default: throw new Error("Invalid control flow in sub_184d1");
    }
  }
  } finally {execution.leave(frame);}
}

function* sub_184f1() {
  let pc=0;
  const frame=execution.enter('sub_184f1',pc);pc=frame.pc;
  let skipBudget=frame.budget || execution.restoring;
  try {
  if(execution.restoring && execution.pending.length===0) {
    execution.restoring=false;
    if(frame.parked!==null) {yield frame.parked;frame.parked=null;frame.budget=false;}
  }
  dispatch: while (true) {
    if (!skipBudget && (++game.steps & 1023) === 0) {
      frame.pc=pc;frame.budget=true;frame.parked=0;yield 0;
      frame.parked=null;frame.budget=false;
    }
    skipBudget=false;
    switch(pc) {
    case 0:

    r.al = memoryAGet(r.ds, 0x06ba);
    if (memoryAGet(r.ds, 0x0697) == 0xfd)
        { pc = 0x18503; continue dispatch; }
    r.al &= memoryAGet(r.ds, 0x06bd);
    r.al &= memoryAGet(r.ds, 0x06be);
case 0x18503:
    r.al ^= 0x80;
    if (!r.al)
        { pc = 0x18509; continue dispatch; }
    r.al = 0x01;
case 0x18509:
    memoryASet(r.ds, 0x0699, r.al);
    r.al = memoryAGet(r.ds, 0x06b8);
    if (memoryAGet(r.ds, 0x0697) == 0xfd)
        { pc = 0x1851e; continue dispatch; }
    r.al &= memoryAGet(r.ds, 0x06bc);
    r.al &= memoryAGet(r.ds, 0x06bf);
case 0x1851e:
    r.al ^= 0x80;
    if (!r.al)
        { pc = 0x18527; continue dispatch; }
    memoryASet(r.ds, 0x0699, 0xff);
case 0x18527:
    r.al = memoryAGet(r.ds, 0x06b9);
    if (memoryAGet(r.ds, 0x0697) == 0xfd)
        { pc = 0x18539; continue dispatch; }
    r.al &= memoryAGet(r.ds, 0x06bc);
    r.al &= memoryAGet(r.ds, 0x06bd);
case 0x18539:
    r.al ^= 0x80;
    if (!r.al)
        { pc = 0x1853f; continue dispatch; }
    r.al = 0x01;
case 0x1853f:
    memoryASet(r.ds, 0x0698, r.al);
    r.al = memoryAGet(r.ds, 0x06bb);
    if (memoryAGet(r.ds, 0x0697) == 0xfd)
        { pc = 0x18554; continue dispatch; }
    r.al &= memoryAGet(r.ds, 0x06be);
    r.al &= memoryAGet(r.ds, 0x06bf);
case 0x18554:
    r.al ^= 0x80;
    if (!r.al)
        { pc = 0x1855d; continue dispatch; }
    memoryASet(r.ds, 0x0698, 0xff);
case 0x1855d:
    r.al = memoryAGet(r.ds, 0x06b7);
    r.cl = 0x03;
    r.al >>= r.cl;
    memoryASet(r.ds, 0x069a, r.al);

      return;
    default: throw new Error("Invalid control flow in sub_184f1");
    }
  }
  } finally {execution.leave(frame);}
}

function* sub_18568() {
  let pc=0;
  const frame=execution.enter('sub_18568',pc);pc=frame.pc;
  let skipBudget=frame.budget || execution.restoring;
  try {
  if(execution.restoring && execution.pending.length===0) {
    execution.restoring=false;
    if(frame.parked!==null) {yield frame.parked;frame.parked=null;frame.budget=false;}
  }
  dispatch: while (true) {
    if (!skipBudget && (++game.steps & 1023) === 0) {
      frame.pc=pc;frame.budget=true;frame.parked=0;yield 0;
      frame.parked=null;frame.budget=false;
    }
    skipBudget=false;
    switch(pc) {
    case 0:

    r.ax = memoryAGet16(r.ds, 0x0693);
    if (r.ax == memoryAGet16(r.ds, 0x0691))
        { pc = 0x18587; continue dispatch; }
    memoryASet16(r.ds, 0x0691, r.ax);
    if (memoryAGet(r.ds, 0x06c0) & 0x80)
        { pc = 0x18588; continue dispatch; }
    r.ax = memoryAGet16(r.ds, 0x0693);
    if (r.ax == memoryAGet16(r.ds, 0x6e00))
        { pc = 0x18587; continue dispatch; }
    frame.pc=2097153;
case 2097153:
yield* sub_1d0a0();
frame.pc=2097154;
case 2097154:;
case 0x18587:
    return;
case 0x18588:
    if (!(memoryAGet(r.ds, 0x06c9) & 0x80))
        { pc = 0x18590; continue dispatch; }
    return;
case 0x18590:
    if (memoryAGet(r.ds, 0x06cc) & 0x80)
        { pc = 0x1859d; continue dispatch; }
    memoryASet(r.ds, 0x1f80, 0x09);
    return;
case 0x1859d:
    if (!(memoryAGet(r.ds, 0x06c1) & 0x80))
        { pc = 0x185d5; continue dispatch; }
    if (memoryAGet(r.ds, 0x06cb) & 0x80)
        { pc = 0x185b1; continue dispatch; }
    memoryASet(r.ds, 0x041c, 0xff);
    return;
case 0x185b1:
    if (memoryAGet(r.ds, 0x06c8) & 0x80)
        { pc = 0x185be; continue dispatch; }
    memoryASet(r.ds, 0x041b, 0xff);
    return;
case 0x185be:
    if (memoryAGet(r.ds, 0x06c7) & 0x80)
        { pc = 0x185d4; continue dispatch; }
    memoryASet(r.ds, 0x0000, ~memoryAGet(r.ds, 0x0000));
    if (memoryAGet(r.ds, 0x0000) != 0x00)
        { pc = 0x185d3; continue dispatch; }
    frame.pc=2097155;
case 2097155:
yield* sub_1cd51();
frame.pc=2097156;
case 2097156:;
case 0x185d3:
    return;
case 0x185d4:
    return;
case 0x185d5:
    frame.pc=2097157;
case 2097157:
yield* sub_186af();
frame.pc=2097158;
case 2097158:;
    r.ax = pop();
    stop();

      return;
    default: throw new Error("Invalid control flow in sub_18568");
    }
  }
  } finally {execution.leave(frame);}
}

function* sub_185da() {
  let pc=0;
  const frame=execution.enter('sub_185da',pc);pc=frame.pc;
  let skipBudget=frame.budget || execution.restoring;
  try {
  if(execution.restoring && execution.pending.length===0) {
    execution.restoring=false;
    if(frame.parked!==null) {yield frame.parked;frame.parked=null;frame.budget=false;}
  }
  dispatch: while (true) {
    if (!skipBudget && (++game.steps & 1023) === 0) {
      frame.pc=pc;frame.budget=true;frame.parked=0;yield 0;
      frame.parked=null;frame.budget=false;
    }
    skipBudget=false;
    switch(pc) {
    case 0:

    r.ax = 0xf000;
    r.es = r.ax;
    r.al = memoryAGet(r.es, 0xfffe);
    memoryASet(r.ds, 0x0697, r.al);

      return;
    default: throw new Error("Invalid control flow in sub_185da");
    }
  }
  } finally {execution.leave(frame);}
}

function* sub_185e7() {
  let pc=0;
  const frame=execution.enter('sub_185e7',pc);pc=frame.pc;
  let skipBudget=frame.budget || execution.restoring;
  try {
  if(execution.restoring && execution.pending.length===0) {
    execution.restoring=false;
    if(frame.parked!==null) {yield frame.parked;frame.parked=null;frame.budget=false;}
  }
  dispatch: while (true) {
    if (!skipBudget && (++game.steps & 1023) === 0) {
      frame.pc=pc;frame.budget=true;frame.parked=0;yield 0;
      frame.parked=null;frame.budget=false;
    }
    skipBudget=false;
    switch(pc) {
    case 0:
frame.pc=2097153;frame.parked=1;yield 1;
case 2097153: frame.parked=null; r.ax=(0x10000-Math.floor(game.time()*1193.182)) & 0xffff;
      return;
    default: throw new Error("Invalid control flow in sub_185e7");
    }
  }
  } finally {execution.leave(frame);}
}

function* sub_18608() {
  let pc=0;
  const frame=execution.enter('sub_18608',pc);pc=frame.pc;
  let skipBudget=frame.budget || execution.restoring;
  try {
  if(execution.restoring && execution.pending.length===0) {
    execution.restoring=false;
    if(frame.parked!==null) {yield frame.parked;frame.parked=null;frame.budget=false;}
  }
  dispatch: while (true) {
    if (!skipBudget && (++game.steps & 1023) === 0) {
      frame.pc=pc;frame.budget=true;frame.parked=0;yield 0;
      frame.parked=null;frame.budget=false;
    }
    skipBudget=false;
    switch(pc) {
    case 0:

    r.dx = 0x03da;
    r.al = portRead(r.dx);
    r.al &= 0x08;
    flags.zero = r.al == 0;

      return;
    default: throw new Error("Invalid control flow in sub_18608");
    }
  }
  } finally {execution.leave(frame);}
}

function* sub_18618() {
  let pc=0;
  const frame=execution.enter('sub_18618',pc);pc=frame.pc;
  let skipBudget=frame.budget || execution.restoring;
  try {
  if(execution.restoring && execution.pending.length===0) {
    execution.restoring=false;
    if(frame.parked!==null) {yield frame.parked;frame.parked=null;frame.budget=false;}
  }
  dispatch: while (true) {
    if (!skipBudget && (++game.steps & 1023) === 0) {
      frame.pc=pc;frame.budget=true;frame.parked=0;yield 0;
      frame.parked=null;frame.budget=false;
    }
    skipBudget=false;
    switch(pc) {
    case 0:

    push(r.ax);
    push(r.es);
    push(r.di);
    push(r.cx);
    r.ax = 0x1010;
    r.es = r.ax;
    flags.direction = false;
    r.di = 0x06b7;
    r.cx = 0x0016;
    r.al = 0x80;
    rep_stosb();
    r.ax = memoryAGet16(r.es, 0x0693);
    r.ax -= 0x0070;
    memoryASet16(r.es, 0x0691, r.ax);
    r.ax = 0x0040;
    r.es = r.ax;
    r.al = memoryAGet(r.es, 0x0012);
    memoryASet(r.cs, 0x13e7, r.al);
    r.cx = pop();
    r.di = pop();
    r.es = pop();
    r.ax = pop();

      return;
    default: throw new Error("Invalid control flow in sub_18618");
    }
  }
  } finally {execution.leave(frame);}
}

function* sub_18649() {
  let pc=0;
  const frame=execution.enter('sub_18649',pc);pc=frame.pc;
  let skipBudget=frame.budget || execution.restoring;
  try {
  if(execution.restoring && execution.pending.length===0) {
    execution.restoring=false;
    if(frame.parked!==null) {yield frame.parked;frame.parked=null;frame.budget=false;}
  }
  dispatch: while (true) {
    if (!skipBudget && (++game.steps & 1023) === 0) {
      frame.pc=pc;frame.budget=true;frame.parked=0;yield 0;
      frame.parked=null;frame.budget=false;
    }
    skipBudget=false;
    switch(pc) {
    case 0:

    r.ax = 0;
    r.es = r.ax;
    r.ax = memoryAGet16(r.es, 0x0024);
    r.bx = memoryAGet16(r.es, 0x0026);
    r.cx = memoryAGet16(r.es, 0x0120);
    r.dx = memoryAGet16(r.es, 0x0122);
    memoryASet16(r.cs, 0x13df, r.ax);
    memoryASet16(r.cs, 0x13e1, r.bx);
    memoryASet16(r.cs, 0x13e3, r.cx);
    memoryASet16(r.cs, 0x13e5, r.dx);
    r.bx = 0x14b3;
    if (memoryAGet(r.ds, 0x0697) != 0xfd)
        { pc = 0x18680; continue dispatch; }
    r.bx = 0x14fb;
case 0x18680:
    flags.interrupts = false;
    memoryASet16(r.es, 0x0024, r.bx);
    memoryASet16(r.es, 0x0026, r.cs);
    if (memoryAGet(r.ds, 0x0697) != 0xfd)
        { pc = 0x186ad; continue dispatch; }
    memoryASet16(r.es, 0x0120, 0x1554);
    memoryASet16(r.es, 0x0122, r.cs);
    r.ax = 0x0040;
    r.es = r.ax;
    r.al = memoryAGet(r.es, 0x0018);
    r.al |= 0x01;
    memoryASet(r.es, 0x0018, r.al);
case 0x186ad:
    flags.interrupts = true;

      return;
    default: throw new Error("Invalid control flow in sub_18649");
    }
  }
  } finally {execution.leave(frame);}
}

function* sub_186af() {
  let pc=0;
  const frame=execution.enter('sub_186af',pc);pc=frame.pc;
  let skipBudget=frame.budget || execution.restoring;
  try {
  if(execution.restoring && execution.pending.length===0) {
    execution.restoring=false;
    if(frame.parked!==null) {yield frame.parked;frame.parked=null;frame.budget=false;}
  }
  dispatch: while (true) {
    if (!skipBudget && (++game.steps & 1023) === 0) {
      frame.pc=pc;frame.budget=true;frame.parked=0;yield 0;
      frame.parked=null;frame.budget=false;
    }
    skipBudget=false;
    switch(pc) {
    case 0:

    r.ax = 0;
    r.es = r.ax;
    r.ax = memoryAGet16(r.cs, 0x13df);
    r.bx = memoryAGet16(r.cs, 0x13e1);
    r.cx = memoryAGet16(r.cs, 0x13e3);
    r.dx = memoryAGet16(r.cs, 0x13e5);
    flags.interrupts = false;
    memoryASet16(r.es, 0x0024, r.ax);
    memoryASet16(r.es, 0x0026, r.bx);
    if (memoryAGet(r.ds, 0x0697) != 0xfd)
        { pc = 0x186e1; continue dispatch; }
    memoryASet16(r.es, 0x0120, r.cx);
    memoryASet16(r.es, 0x0122, r.dx);
case 0x186e1:
    flags.interrupts = true;

      return;
    default: throw new Error("Invalid control flow in sub_186af");
    }
  }
  } finally {execution.leave(frame);}
}

function* sub_18800() {
  let pc=0;
  const frame=execution.enter('sub_18800',pc);pc=frame.pc;
  let skipBudget=frame.budget || execution.restoring;
  try {
  if(execution.restoring && execution.pending.length===0) {
    execution.restoring=false;
    if(frame.parked!==null) {yield frame.parked;frame.parked=null;frame.budget=false;}
  }
  dispatch: while (true) {
    if (!skipBudget && (++game.steps & 1023) === 0) {
      frame.pc=pc;frame.budget=true;frame.parked=0;yield 0;
      frame.parked=null;frame.budget=false;
    }
    skipBudget=false;
    switch(pc) {
    case 0:

    r.bx = memoryAGet16(r.ds, 0x0008);
    r.cl = memoryAGet(r.ds, r.bx + 4110);
case 0x18808:
    frame.pc=2097153;
case 2097153:
yield* sub_1a02d();
frame.pc=2097154;
case 2097154:;
    r.dl &= 0x07;
    if (r.dl > r.cl)
        { pc = 0x18808; continue dispatch; }
    r.dl += memoryAGet(r.ds, r.bx + 4102);
    if (r.dl == memoryAGet(r.ds, 0x1028))
        { pc = 0x18808; continue dispatch; }
    memoryASet(r.ds, 0x1028, r.dl);
    r.bl = r.dl;
    r.cl = memoryAGet(r.ds, r.bx + 4080);
    r.dl = 0x88;
    if (r.cl & 0x80)
        { pc = 0x1882f; continue dispatch; }
    r.dl = 0x90;
case 0x1882f:
    r.cx &= 0x007f;
    r.cx <<= 1;
    r.cx <<= 1;

      return;
    default: throw new Error("Invalid control flow in sub_18800");
    }
  }
  } finally {execution.leave(frame);}
}

function* sub_18838() {
  let pc=0;
  const frame=execution.enter('sub_18838',pc);pc=frame.pc;
  let skipBudget=frame.budget || execution.restoring;
  try {
  if(execution.restoring && execution.pending.length===0) {
    execution.restoring=false;
    if(frame.parked!==null) {yield frame.parked;frame.parked=null;frame.budget=false;}
  }
  dispatch: while (true) {
    if (!skipBudget && (++game.steps & 1023) === 0) {
      frame.pc=pc;frame.budget=true;frame.parked=0;yield 0;
      frame.parked=null;frame.budget=false;
    }
    skipBudget=false;
    switch(pc) {
    case 0:

    if (memoryAGet16(r.ds, 0x0004) != 0x0007)
        { pc = 0x18843; continue dispatch; }
    frame.pc=2097153;
case 2097153:
yield* sub_1a32a();
frame.pc=2097154;
case 2097154:;
    return;
case 0x18843:
    if (memoryAGet16(r.ds, 0x0004) == 0x0000)
        { pc = 0x1884e; continue dispatch; }
    frame.pc=2097155;
case 2097155:
yield* sub_188f6();
frame.pc=2097156;
case 2097156:;
    return;
case 0x1884e:
    r.al = memoryAGet(r.ds, 0x057b);
    r.al &= 0xf8;
    if (r.al == 0x60)
        { pc = 0x18860; continue dispatch; }
    frame.pc=2097157;
case 2097157:
yield* sub_18887();
frame.pc=2097158;
case 2097158:;
    if (flags.carry)
        return;
    frame.pc=2097159;
case 2097159:
yield* sub_189dd();
frame.pc=2097160;
case 2097160:;
    return;
case 0x18860:
    if (memoryAGet(r.ds, 0x0550) >= 0x02)
        { pc = 0x18885; continue dispatch; }
    memoryASet(r.ds, 0x057b, r.al);
    r.al += 0x32;
    memoryASet(r.ds, 0x057c, r.al);
    if (memoryAGet(r.ds, 0x0550) == 0x01)
        { pc = 0x18883; continue dispatch; }
    memoryASet(r.ds, 0x0550, 0x01);
    r.ah = 0;
    frame.pc=2097161;
case 2097161:
yield* interrupt(0x1a);
frame.pc=2097162;
case 2097162:;
    memoryASet16(r.ds, 0x0556, r.dx);
case 0x18883:
    flags.carry = true;
    return;
case 0x18885:
    flags.carry = false;

      return;
    default: throw new Error("Invalid control flow in sub_18838");
    }
  }
  } finally {execution.leave(frame);}
}

function* sub_18887() {
  let pc=0;
  const frame=execution.enter('sub_18887',pc);pc=frame.pc;
  let skipBudget=frame.budget || execution.restoring;
  try {
  if(execution.restoring && execution.pending.length===0) {
    execution.restoring=false;
    if(frame.parked!==null) {yield frame.parked;frame.parked=null;frame.budget=false;}
  }
  dispatch: while (true) {
    if (!skipBudget && (++game.steps & 1023) === 0) {
      frame.pc=pc;frame.budget=true;frame.parked=0;yield 0;
      frame.parked=null;frame.budget=false;
    }
    skipBudget=false;
    switch(pc) {
    case 0:

    r.cl = memoryAGet(r.ds, 0x057b);
    r.cl += 0x02;
    r.cl &= 0xf8;
    r.bx = memoryAGet16(r.ds, 0x0008);
    r.bl = memoryAGet(r.ds, r.bx + 4102);
case 0x18899:
    r.al = memoryAGet(r.ds, r.bx + 4080);
    if (r.al != 0x00)
        { pc = 0x188a8; continue dispatch; }
    memoryASet(r.ds, 0x127c, 0x00);
    flags.carry = false;
    return;
case 0x188a8:
    r.bx++;
    r.ch = 0x88;
    if (r.al & 0x80)
        { pc = 0x188b1; continue dispatch; }
    r.ch = 0x90;
case 0x188b1:
    if (r.cl != r.ch)
        { pc = 0x18899; continue dispatch; }
    r.ax &= 0x007f;
    r.ax <<= 1;
    r.ax <<= 1;
    r.dx = memoryAGet16(r.ds, 0x0579);
    r.dx &= 0xfff8;
    if (r.dx < r.ax)
        { pc = 0x18899; continue dispatch; }
    r.dx = memoryAGet16(r.ds, 0x0579);
    r.dx -= 0x000f;
    r.dx &= 0xfff8;
    if (r.dx > r.ax)
        { pc = 0x18899; continue dispatch; }
    r.ch -= 0x02;
    memoryASet(r.ds, 0x057b, r.ch);
    r.ch += 0x32;
    memoryASet(r.ds, 0x057c, r.ch);
    if (memoryAGet(r.ds, 0x127c) != 0x00)
        { pc = 0x188f4; continue dispatch; }
    memoryASet(r.ds, 0x127c, 0x01);
    frame.pc=2097153;
case 2097153:
yield* sub_1cb3e();
frame.pc=2097154;
case 2097154:;
case 0x188f4:
    flags.carry = true;

      return;
    default: throw new Error("Invalid control flow in sub_18887");
    }
  }
  } finally {execution.leave(frame);}
}

function* sub_188f6() {
  let pc=0;
  const frame=execution.enter('sub_188f6',pc);pc=frame.pc;
  let skipBudget=frame.budget || execution.restoring;
  try {
  if(execution.restoring && execution.pending.length===0) {
    execution.restoring=false;
    if(frame.parked!==null) {yield frame.parked;frame.parked=null;frame.budget=false;}
  }
  dispatch: while (true) {
    if (!skipBudget && (++game.steps & 1023) === 0) {
      frame.pc=pc;frame.budget=true;frame.parked=0;yield 0;
      frame.parked=null;frame.budget=false;
    }
    skipBudget=false;
    switch(pc) {
    case 0:

    memoryASet(r.ds, 0x39e0, 0x00);
    if (memoryAGet(r.ds, 0x0571) != 0x01)
        { pc = 0x1892c; continue dispatch; }
    r.ax = memoryAGet16(r.ds, 0x2650);
    r.ax -= 0x0004;
    r.dl = memoryAGet(r.ds, 0x2652);
    r.dl -= 0x08;
    r.si = 0x000c;
    r.bx = memoryAGet16(r.ds, 0x0579);
    r.dh = memoryAGet(r.ds, 0x057b);
    r.di = 0x0018;
    r.cx = 0x0e10;
    frame.pc=2097153;
case 2097153:
yield* sub_1a059();
frame.pc=2097154;
case 2097154:;
    if (!flags.carry)
        { pc = 0x1892c; continue dispatch; }
    memoryASet(r.ds, 0x0551, 0x01);
    flags.carry = false;
    return;
case 0x1892c:
    if (memoryAGet16(r.ds, 0x0004) != 0x0003)
        { pc = 0x1893e; continue dispatch; }
    frame.pc=2097155;
case 2097155:
yield* sub_1ae73();
frame.pc=2097156;
case 2097156:;
    if (!flags.carry)
        { pc = 0x1893e; continue dispatch; }
    flags.carry = true;
    memoryASet(r.ds, 0x055c, 0x01);
    return;
case 0x1893e:
    r.cl = memoryAGet(r.ds, 0x057b);
    r.cl &= 0xf8;
    r.bx = memoryAGet16(r.ds, 0x0004);
    r.bx <<= 1;
    r.bx = memoryAGet16(r.ds, r.bx + 4713);
case 0x1894f:
    r.ch = memoryAGet(r.ds, r.bx + 4137);
    if (r.ch != 0x00)
        { pc = 0x1895a; continue dispatch; }
    flags.carry = false;
    return;
case 0x1895a:
    r.al = memoryAGet(r.ds, r.bx + 4233);
    memoryASet(r.ds, 0x127b, r.al);
    r.bl <<= 1;
    r.ax = memoryAGet16(r.ds, r.bx + 4521);
    memoryASet16(r.ds, 0x1279, r.ax);
    r.ax = memoryAGet16(r.ds, r.bx + 4329);
    r.bl >>= 1;
    r.bx++;
    if (r.cl != r.ch)
        { pc = 0x1894f; continue dispatch; }
    r.dx = memoryAGet16(r.ds, 0x0579);
    r.dx &= 0xfff8;
    if (r.dx < r.ax)
        { pc = 0x1894f; continue dispatch; }
    r.dx = memoryAGet16(r.ds, 0x0579);
    flags.carry = r.dx < memoryAGet16(r.ds, 0x1279);
    r.dx -= memoryAGet16(r.ds, 0x1279);
    if (!flags.carry)
        { pc = 0x1898d; continue dispatch; }
    r.dx = 0;
case 0x1898d:
    r.dx &= 0xfffc;
    if (r.dx > r.ax)
        { pc = 0x1894f; continue dispatch; }
    memoryASet(r.ds, 0x057b, r.ch);
    r.ch += 0x32;
    memoryASet(r.ds, 0x057c, r.ch);
    r.al = memoryAGet(r.ds, 0x127b);
    memoryASet(r.ds, 0x055c, r.al);
    if (r.al == 0x00)
        { pc = 0x189b0; continue dispatch; }
    memoryASet16(r.ds, 0x0579, memoryAGet16(r.ds, 0x0579) & 0xfffc);
case 0x189b0:
    if (memoryAGet16(r.ds, 0x0004) != 0x0004)
        { pc = 0x189c7; continue dispatch; }
    r.bx--;
    r.tx = r.bx;
    r.bx -= 0x0027;
    if (r.tx < 0x0027)
        { pc = 0x189c7; continue dispatch; }
    if (r.bx >= 0x0010)
        { pc = 0x189c7; continue dispatch; }
    r.bx++;
    memoryASet(r.ds, 0x39e0, r.bl);
case 0x189c7:
    flags.carry = true;

      return;
    default: throw new Error("Invalid control flow in sub_188f6");
    }
  }
  } finally {execution.leave(frame);}
}

function* sub_189c9() {
  let pc=0;
  const frame=execution.enter('sub_189c9',pc);pc=frame.pc;
  let skipBudget=frame.budget || execution.restoring;
  try {
  if(execution.restoring && execution.pending.length===0) {
    execution.restoring=false;
    if(frame.parked!==null) {yield frame.parked;frame.parked=null;frame.budget=false;}
  }
  dispatch: while (true) {
    if (!skipBudget && (++game.steps & 1023) === 0) {
      frame.pc=pc;frame.budget=true;frame.parked=0;yield 0;
      frame.parked=null;frame.budget=false;
    }
    skipBudget=false;
    switch(pc) {
    case 0:

    r.cl = 0x03;
    r.bx >>= r.cl;
    r.ch = r.bl;
    r.cl = 0x03;
    r.bx >>= r.cl;
    r.cl = r.ch;
    r.cl &= 0x07;
    r.ch = 0x80;
    r.ch >>= r.cl;

      return;
    default: throw new Error("Invalid control flow in sub_189c9");
    }
  }
  } finally {execution.leave(frame);}
}

function* sub_189dd() {
  let pc=0;
  const frame=execution.enter('sub_189dd',pc);pc=frame.pc;
  let skipBudget=frame.budget || execution.restoring;
  try {
  if(execution.restoring && execution.pending.length===0) {
    execution.restoring=false;
    if(frame.parked!==null) {yield frame.parked;frame.parked=null;frame.budget=false;}
  }
  dispatch: while (true) {
    if (!skipBudget && (++game.steps & 1023) === 0) {
      frame.pc=pc;frame.budget=true;frame.parked=0;yield 0;
      frame.parked=null;frame.budget=false;
    }
    skipBudget=false;
    switch(pc) {
    case 0:

    r.dl = memoryAGet(r.ds, 0x057b);
    r.dl &= 0xf8;
    r.bx = 0;
    if (r.dl == 0x08)
        { pc = 0x189f9; continue dispatch; }
    r.bl++;
    if (r.dl == 0x28)
        { pc = 0x189f9; continue dispatch; }
    r.bl++;
    if (r.dl != 0x48)
        { pc = 0x18a40; continue dispatch; }
case 0x189f9:
    r.ax = memoryAGet16(r.ds, 0x0579);
    if (r.bx != memoryAGet16(r.ds, 0x052f))
        { pc = 0x18a2c; continue dispatch; }
    if (memoryAGet(r.ds, 0x0525) > 0x03)
        { pc = 0x18a2c; continue dispatch; }
    if (r.bl == 0x01)
        { pc = 0x18a1e; continue dispatch; }
    r.cx = 0x0004;
    r.cl -= memoryAGet(r.ds, 0x0525);
    r.cl <<= 1;
    r.cl <<= 1;
    r.ax += r.cx;
    { pc = 0x18a2c; continue dispatch; }
case 0x18a1e:
    r.ch = 0;
    r.cl = memoryAGet(r.ds, 0x0525);
    r.cl++;
    r.cl <<= 1;
    r.cl <<= 1;
    r.ax -= r.cx;
case 0x18a2c:
    r.bl = memoryAGet(r.ds, r.bx + 4133);
    r.si = r.bx;
    r.bx = r.ax;
    r.bx += 0x000a;
    frame.pc=2097153;
case 2097153:
yield* sub_189c9();
frame.pc=2097154;
case 2097154:;
    if (memoryAGet(r.ds, r.bx + r.si + 4118) & r.ch)
        { pc = 0x18a42; continue dispatch; }
case 0x18a40:
    flags.carry = false;
    return;
case 0x18a42:
    memoryASet(r.ds, 0x057b, r.dl);
    r.dl += 0x32;
    memoryASet(r.ds, 0x057c, r.dl);
    memoryASet16(r.ds, 0x0579, memoryAGet16(r.ds, 0x0579) & 0xfff8);
    memoryASet(r.ds, 0x055c, 0x01);
    flags.carry = true;

      return;
    default: throw new Error("Invalid control flow in sub_189dd");
    }
  }
  } finally {execution.leave(frame);}
}

function* sub_18a60() {
  let pc=0;
  const frame=execution.enter('sub_18a60',pc);pc=frame.pc;
  let skipBudget=frame.budget || execution.restoring;
  try {
  if(execution.restoring && execution.pending.length===0) {
    execution.restoring=false;
    if(frame.parked!==null) {yield frame.parked;frame.parked=null;frame.budget=false;}
  }
  dispatch: while (true) {
    if (!skipBudget && (++game.steps & 1023) === 0) {
      frame.pc=pc;frame.budget=true;frame.parked=0;yield 0;
      frame.parked=null;frame.budget=false;
    }
    skipBudget=false;
    switch(pc) {
    case 0:

    memoryASet(r.ds, 0x1665, 0x00);
    memoryASet(r.ds, 0x1673, 0x00);
    memoryASet(r.ds, 0x1677, 0x00);
    memoryASet(r.ds, 0x1678, 0x00);
    memoryASet16(r.ds, 0x166c, 0x0009);

      return;
    default: throw new Error("Invalid control flow in sub_18a60");
    }
  }
  } finally {execution.leave(frame);}
}

function* sub_18a7b() {
  let pc=0;
  const frame=execution.enter('sub_18a7b',pc);pc=frame.pc;
  let skipBudget=frame.budget || execution.restoring;
  try {
  if(execution.restoring && execution.pending.length===0) {
    execution.restoring=false;
    if(frame.parked!==null) {yield frame.parked;frame.parked=null;frame.budget=false;}
  }
  dispatch: while (true) {
    if (!skipBudget && (++game.steps & 1023) === 0) {
      frame.pc=pc;frame.budget=true;frame.parked=0;yield 0;
      frame.parked=null;frame.budget=false;
    }
    skipBudget=false;
    switch(pc) {
    case 0:

    if (memoryAGet(r.ds, 0x1673) == 0x00)
        { pc = 0x18a8c; continue dispatch; }
    r.ah = 0;
    frame.pc=2097153;
case 2097153:
yield* interrupt(0x1a);
frame.pc=2097154;
case 2097154:;
    if (r.dx != memoryAGet16(r.ds, 0x17ec))
        { pc = 0x18a8d; continue dispatch; }
case 0x18a8c:
    return;
case 0x18a8d:
    memoryASet16(r.ds, 0x17ec, r.dx);
    if (memoryAGet(r.ds, 0x1677) == 0x00)
        { pc = 0x18aaf; continue dispatch; }
    r.ax = memoryAGet16(r.ds, 0x1671);
    r.ax &= 0xfff8;
    r.bx = memoryAGet16(r.ds, 0x0579);
    r.bx &= 0xfff8;
    if (r.ax != r.bx)
        { pc = 0x18aaf; continue dispatch; }
    memoryASet(r.ds, 0x1674, 0x00);
case 0x18aaf:
    memoryASet(r.ds, 0x17e9, memoryAGet(r.ds, 0x17e9) + 1);
    if (memoryAGet16(r.ds, 0x17ea) > 0x0001)
        { pc = 0x18abe; continue dispatch; }
    memoryASet16(r.ds, 0x17ea, memoryAGet16(r.ds, 0x17ea) - 1);
case 0x18abe:
    r.ax = memoryAGet16(r.ds, 0x1671);
    r.dx = memoryAGet16(r.ds, 0x17ea);
    r.cl = 0x03;
    r.dl >>= r.cl;
    if (memoryAGet(r.ds, 0x1674) < 0x01)
        { pc = 0x18ae5; continue dispatch; }
    if (memoryAGet(r.ds, 0x1674) != 0x01)
        { pc = 0x18adf; continue dispatch; }
    r.ax += r.dx;
    if (r.ax < 0x012f)
        { pc = 0x18ae5; continue dispatch; }
    r.ax = 0x012e;
    { pc = 0x18ae5; continue dispatch; }
case 0x18adf:
    flags.carry = r.ax < r.dx;
    r.ax -= r.dx;
    if (!flags.carry)
        { pc = 0x18ae5; continue dispatch; }
    r.ax = 0;
case 0x18ae5:
    memoryASet16(r.ds, 0x1671, r.ax);
    r.bx = memoryAGet16(r.ds, 0x17df);
    r.al = memoryAGet(r.ds, 0x17e9);
    r.al >>= 1;
    r.al += memoryAGet(r.ds, 0x1673);
    r.dl = r.al;
    r.tl = r.al;
    r.al -= memoryAGet(r.ds, 0x1676);
    if (r.tl < memoryAGet(r.ds, 0x1676))
        { pc = 0x18b11; continue dispatch; }
    flags.carry = r.bh < r.al;
    r.bh -= r.al;
    if (r.bh == 0)
        { pc = 0x18b03; continue dispatch; }
    if (!flags.carry)
        { pc = 0x18b11; continue dispatch; }
case 0x18b03:
    memoryASet(r.ds, 0x1673, 0x00);
    memoryASet(r.ds, 0x1678, 0x00);
    frame.pc=2097155;
case 2097155:
yield* sub_18b52();
frame.pc=2097156;
case 2097156:;
case 0x18b10:
    return;
case 0x18b11:
    memoryASet(r.ds, 0x1673, r.dl);
    r.cx = memoryAGet16(r.ds, 0x1671);
    memoryASet16(r.ds, 0x17e1, r.bx);
    frame.pc=2097157;
case 2097157:
yield* sub_19ee0();
frame.pc=2097158;
case 2097158:;
    memoryASet16(r.ds, 0x17e7, r.ax);
    if (memoryAGet(r.ds, 0x17e9) == 0x02)
        { pc = 0x18b2d; continue dispatch; }
    frame.pc=2097159;
case 2097159:
yield* sub_18b52();
frame.pc=2097160;
case 2097160:;
case 0x18b2d:
    frame.pc=2097161;
case 2097161:
yield* sub_18daa();
frame.pc=2097162;
case 2097162:;
    if (flags.carry)
        { pc = 0x18b10; continue dispatch; }
    r.di = memoryAGet16(r.ds, 0x17e7);
    memoryASet16(r.ds, 0x17e5, r.di);
    r.cx = memoryAGet16(r.ds, 0x17e1);
    memoryASet16(r.ds, 0x17e3, r.cx);
    r.ax = 0xb800;
    r.es = r.ax;
    r.si = memoryAGet16(r.ds, 0x17dd);
    r.bp = 0x17ee;
    frame.pc=2097163;
case 2097163:
yield* sub_19efc();
frame.pc=2097164;
case 2097164:;

      return;
    default: throw new Error("Invalid control flow in sub_18a7b");
    }
  }
  } finally {execution.leave(frame);}
}

function* sub_18b52() {
  let pc=0;
  const frame=execution.enter('sub_18b52',pc);pc=frame.pc;
  let skipBudget=frame.budget || execution.restoring;
  try {
  if(execution.restoring && execution.pending.length===0) {
    execution.restoring=false;
    if(frame.parked!==null) {yield frame.parked;frame.parked=null;frame.budget=false;}
  }
  dispatch: while (true) {
    if (!skipBudget && (++game.steps & 1023) === 0) {
      frame.pc=pc;frame.budget=true;frame.parked=0;yield 0;
      frame.parked=null;frame.budget=false;
    }
    skipBudget=false;
    switch(pc) {
    case 0:

    r.ax = 0xb800;
    r.es = r.ax;
    r.di = memoryAGet16(r.ds, 0x17e5);
    r.si = 0x17ee;
    r.cx = memoryAGet16(r.ds, 0x17e3);
    frame.pc=2097153;
case 2097153:
yield* sub_19fcd();
frame.pc=2097154;
case 2097154:;

      return;
    default: throw new Error("Invalid control flow in sub_18b52");
    }
  }
  } finally {execution.leave(frame);}
}

function* sub_18b66() {
  let pc=0;
  const frame=execution.enter('sub_18b66',pc);pc=frame.pc;
  let skipBudget=frame.budget || execution.restoring;
  try {
  if(execution.restoring && execution.pending.length===0) {
    execution.restoring=false;
    if(frame.parked!==null) {yield frame.parked;frame.parked=null;frame.budget=false;}
  }
  dispatch: while (true) {
    if (!skipBudget && (++game.steps & 1023) === 0) {
      frame.pc=pc;frame.budget=true;frame.parked=0;yield 0;
      frame.parked=null;frame.budget=false;
    }
    skipBudget=false;
    switch(pc) {
    case 0:

    r.tl = memoryAGet(r.ds, 0x166a);
    memoryASet(r.ds, 0x166a, memoryAGet(r.ds, 0x166a) - 1);
    if (r.tl == 1)
        { pc = 0x18b6d; continue dispatch; }
case 0x18b6c:
    return;
case 0x18b6d:
    memoryASet(r.ds, 0x166a, 0x0d);
    frame.pc=2097153;
case 2097153:
yield* sub_18608();
frame.pc=2097154;
case 2097154:;
    if (!flags.zero)
        { pc = 0x18b6c; continue dispatch; }
    if (memoryAGet(r.ds, 0x1665) == 0x00)
        { pc = 0x18b81; continue dispatch; }
    frame.pc=2097155;
case 2097155:
yield* sub_18d35();
frame.pc=2097156;
case 2097156:;
case 0x18b81:
    if (memoryAGet(r.ds, 0x1673) != 0x00)
        { pc = 0x18b6c; continue dispatch; }
    if (memoryAGet(r.ds, 0x1665) != 0x00)
        { pc = 0x18bfd; continue dispatch; }
    if (memoryAGet(r.ds, 0x057b) > 0x60)
        { pc = 0x18b6c; continue dispatch; }
    memoryASet(r.ds, 0x1677, 0x00);
    if (memoryAGet(r.ds, 0x0550) != 0x01)
        { pc = 0x18bba; continue dispatch; }
    if (memoryAGet(r.ds, 0x0418) != 0x00)
        { pc = 0x18bba; continue dispatch; }
    r.ah = 0;
    frame.pc=2097157;
case 2097157:
yield* interrupt(0x1a);
frame.pc=2097158;
case 2097158:;
    r.dx -= memoryAGet16(r.ds, 0x0556);
    if (r.dx < 0x0048)
        { pc = 0x18bba; continue dispatch; }
    memoryASet(r.ds, 0x1677, memoryAGet(r.ds, 0x1677) + 1);
case 0x18bba:
    frame.pc=2097159;
case 2097159:
yield* sub_1a02d();
frame.pc=2097160;
case 2097160:;
    if (memoryAGet(r.ds, 0x1677) == 0x00)
        { pc = 0x18bca; continue dispatch; }
    r.dl &= 0x03;
    { pc = 0x18bd2; continue dispatch; }
case 0x18bca:
    r.dl &= 0x0f;
    if (r.dl >= 0x0c)
        { pc = 0x18b6c; continue dispatch; }
case 0x18bd2:
    memoryASet(r.ds, 0x1669, r.dl);
    frame.pc=2097161;
case 2097161:
yield* sub_18d1a();
frame.pc=2097162;
case 2097162:;
    memoryASet16(r.ds, 0x1666, r.cx);
    memoryASet(r.ds, 0x1668, r.dl);
    frame.pc=2097163;
case 2097163:
yield* sub_18d35();
frame.pc=2097164;
case 2097164:;
    if (flags.carry)
        { pc = 0x18bba; continue dispatch; }
    memoryASet(r.ds, 0x1665, 0x1d);
    r.bx = memoryAGet16(r.ds, 0x0008);
    r.bl <<= 1;
    r.ax = memoryAGet16(r.ds, r.bx + 6174);
    memoryASet16(r.ds, 0x166c, r.ax);
    memoryASet(r.ds, 0x1670, 0x01);
case 0x18bfd:
    frame.pc=2097165;
case 2097165:
yield* sub_18d35();
frame.pc=2097166;
case 2097166:;
    if (flags.carry)
        { pc = 0x18c10; continue dispatch; }
    memoryASet(r.ds, 0x1664, 0x00);
    frame.pc=2097167;
case 2097167:
yield* sub_18d7c();
frame.pc=2097168;
case 2097168:;
    if (!flags.carry)
        { pc = 0x18c11; continue dispatch; }
    memoryASet(r.ds, 0x1664, memoryAGet(r.ds, 0x1664) + 1);
case 0x18c10:
    return;
case 0x18c11:
    if (memoryAGet(r.ds, 0x1665) != 0x10)
        { pc = 0x18c20; continue dispatch; }
    r.ah = 0;
    frame.pc=2097169;
case 2097169:
yield* interrupt(0x1a);
frame.pc=2097170;
case 2097170:;
    memoryASet16(r.ds, 0x166e, r.dx);
case 0x18c20:
    if (memoryAGet(r.ds, 0x1665) != 0x0f)
        { pc = 0x18ca6; continue dispatch; }
    r.ah = 0;
    frame.pc=2097171;
case 2097171:
yield* interrupt(0x1a);
frame.pc=2097172;
case 2097172:;
    r.dx -= memoryAGet16(r.ds, 0x166e);
    if (r.dx >= memoryAGet16(r.ds, 0x166c))
        { pc = 0x18ca6; continue dispatch; }
    if (memoryAGet(r.ds, 0x1670) == 0x00)
        { pc = 0x18ca5; continue dispatch; }
    if (memoryAGet(r.ds, 0x1673) != 0x00)
        { pc = 0x18ca5; continue dispatch; }
    if (memoryAGet(r.ds, 0x0418) != 0x00)
        { pc = 0x18ca5; continue dispatch; }
    memoryASet(r.ds, 0x1670, memoryAGet(r.ds, 0x1670) - 1);
    memoryASet(r.ds, 0x1678, 0x01);
    r.al = memoryAGet(r.ds, 0x1668);
    memoryASet(r.ds, 0x1673, r.al);
    frame.pc=2097173;
case 2097173:
yield* sub_1a02d();
frame.pc=2097174;
case 2097174:;
    r.dx &= 0x000f;
    r.dx += memoryAGet16(r.ds, 0x1666);
    memoryASet16(r.ds, 0x1671, r.dx);
    r.al = 0x01;
    if (r.dx < memoryAGet16(r.ds, 0x0579))
        { pc = 0x18c72; continue dispatch; }
    r.al = 0xff;
case 0x18c72:
    memoryASet(r.ds, 0x1674, r.al);
    frame.pc=2097175;
case 2097175:
yield* sub_1a02d();
frame.pc=2097176;
case 2097176:;
    r.bl = r.dl;
    r.bx &= 0x0006;
    r.ax = memoryAGet16(r.ds, r.bx + 6089);
    memoryASet16(r.ds, 0x17dd, r.ax);
    r.ax = memoryAGet16(r.ds, r.bx + 6097);
    memoryASet16(r.ds, 0x17df, r.ax);
    r.bl >>= 1;
    r.al = memoryAGet(r.ds, r.bx + 6105);
    memoryASet(r.ds, 0x1676, r.al);
    memoryASet16(r.ds, 0x17ea, 0x0020);
    memoryASet(r.ds, 0x17e9, 0x01);
    memoryASet(r.ds, 0x1675, 0x00);
case 0x18ca5:
    return;
case 0x18ca6:
    memoryASet(r.ds, 0x1665, memoryAGet(r.ds, 0x1665) - 1);
    r.cx = memoryAGet16(r.ds, 0x1666);
    r.dl = memoryAGet(r.ds, 0x1668);
    if (memoryAGet(r.ds, 0x1665) <= 0x0e)
        { pc = 0x18cc3; continue dispatch; }
    r.dl += memoryAGet(r.ds, 0x1665);
    r.dl -= 0x0e;
    { pc = 0x18cca; continue dispatch; }
case 0x18cc3:
    r.dl += 0x0e;
    r.dl -= memoryAGet(r.ds, 0x1665);
case 0x18cca:
    memoryASet(r.ds, 0x166b, r.dl);
    frame.pc=2097177;
case 2097177:
yield* sub_19ee0();
frame.pc=2097178;
case 2097178:;
    r.di = r.ax;
    r.ax = 0xb800;
    r.es = r.ax;
    flags.direction = false;
    r.cx = 0x0004;
    if (memoryAGet(r.ds, 0x1665) <= 0x0e)
        { pc = 0x18d07; continue dispatch; }
    if (memoryAGet(r.ds, 0x0418) == 0x00)
        { pc = 0x18d02; continue dispatch; }
    r.al = memoryAGet(r.ds, 0x166b);
    r.al -= memoryAGet(r.ds, 0x1668);
    r.ah = 0;
    r.cl = 0x03;
    r.ax <<= r.cl;
    r.ax += 0x15e0;
    r.si = r.ax;
    r.cx = 0x0004;
    rep_movsw();
    return;
case 0x18d02:
    r.ax = 0;
    rep_stosw();
    return;
case 0x18d07:
    r.al = memoryAGet(r.ds, 0x166b);
    r.al -= memoryAGet(r.ds, 0x1668);
    r.ah = 0x0a;
    mul8(r.ah);
    r.ax += 0x2681;
    r.si = r.ax;
    rep_movsw();

      return;
    default: throw new Error("Invalid control flow in sub_18b66");
    }
  }
  } finally {execution.leave(frame);}
}

function* sub_18d1a() {
  let pc=0;
  const frame=execution.enter('sub_18d1a',pc);pc=frame.pc;
  let skipBudget=frame.budget || execution.restoring;
  try {
  if(execution.restoring && execution.pending.length===0) {
    execution.restoring=false;
    if(frame.parked!==null) {yield frame.parked;frame.parked=null;frame.budget=false;}
  }
  dispatch: while (true) {
    if (!skipBudget && (++game.steps & 1023) === 0) {
      frame.pc=pc;frame.budget=true;frame.parked=0;yield 0;
      frame.parked=null;frame.budget=false;
    }
    skipBudget=false;
    switch(pc) {
    case 0:

    r.bh = 0;
    r.bl = r.dl;
    r.bl &= 0x03;
    r.bl <<= 1;
    r.cx = memoryAGet16(r.ds, r.bx + 5720);
    r.bl = r.dl;
    r.bl >>= 1;
    r.bl >>= 1;
    r.bl &= 0x03;
    r.dl = memoryAGet(r.ds, r.bx + 5728);

      return;
    default: throw new Error("Invalid control flow in sub_18d1a");
    }
  }
  } finally {execution.leave(frame);}
}

function* sub_18d35() {
  let pc=0;
  const frame=execution.enter('sub_18d35',pc);pc=frame.pc;
  let skipBudget=frame.budget || execution.restoring;
  try {
  if(execution.restoring && execution.pending.length===0) {
    execution.restoring=false;
    if(frame.parked!==null) {yield frame.parked;frame.parked=null;frame.budget=false;}
  }
  dispatch: while (true) {
    if (!skipBudget && (++game.steps & 1023) === 0) {
      frame.pc=pc;frame.budget=true;frame.parked=0;yield 0;
      frame.parked=null;frame.budget=false;
    }
    skipBudget=false;
    switch(pc) {
    case 0:

    r.ax = memoryAGet16(r.ds, 0x1666);
    r.dl = memoryAGet(r.ds, 0x1668);
    r.bx = memoryAGet16(r.ds, 0x0579);
    r.dh = memoryAGet(r.ds, 0x057b);
    r.si = 0x0020;
    r.di = 0x0018;
    r.cx = 0x0e0f;
    frame.pc=2097153;
case 2097153:
yield* sub_1a059();
frame.pc=2097154;
case 2097154:;
    if (!flags.carry)
        return;
    if (memoryAGet(r.ds, 0x0571) != 0x01)
        { pc = 0x18d7a; continue dispatch; }
    if (memoryAGet(r.ds, 0x055a) != 0x00)
        { pc = 0x18d7a; continue dispatch; }
    if (memoryAGet(r.ds, 0x057b) >= 0x60)
        { pc = 0x18d7a; continue dispatch; }
    if (memoryAGet(r.ds, 0x1665) < 0x05)
        { pc = 0x18d7a; continue dispatch; }
    if (memoryAGet(r.ds, 0x1665) >= 0x19)
        { pc = 0x18d7a; continue dispatch; }
    memoryASet(r.ds, 0x0551, 0x01);
case 0x18d7a:
    flags.carry = true;

      return;
    default: throw new Error("Invalid control flow in sub_18d35");
    }
  }
  } finally {execution.leave(frame);}
}

function* sub_18d7c() {
  let pc=0;
  const frame=execution.enter('sub_18d7c',pc);pc=frame.pc;
  let skipBudget=frame.budget || execution.restoring;
  try {
  if(execution.restoring && execution.pending.length===0) {
    execution.restoring=false;
    if(frame.parked!==null) {yield frame.parked;frame.parked=null;frame.budget=false;}
  }
  dispatch: while (true) {
    if (!skipBudget && (++game.steps & 1023) === 0) {
      frame.pc=pc;frame.budget=true;frame.parked=0;yield 0;
      frame.parked=null;frame.budget=false;
    }
    skipBudget=false;
    switch(pc) {
    case 0:

    r.al = memoryAGet(r.ds, 0x1669);
    if (r.al >= 0x08)
        { pc = 0x18da8; continue dispatch; }
    r.bx = 0x0002;
    if (!(r.al & 0x04))
        { pc = 0x18d8c; continue dispatch; }
    r.bl <<= 1;
case 0x18d8c:
    r.ax = memoryAGet16(r.ds, r.bx + 7984);
    r.ax += 0x0010;
    if (r.ax < memoryAGet16(r.ds, 0x1666))
        { pc = 0x18da8; continue dispatch; }
    flags.carry = r.ax < 0x0030;
    r.ax -= 0x0030;
    if (!flags.carry)
        { pc = 0x18da0; continue dispatch; }
    r.ax = 0;
case 0x18da0:
    if (r.ax > memoryAGet16(r.ds, 0x1666))
        { pc = 0x18da8; continue dispatch; }
    flags.carry = true;
    return;
case 0x18da8:
    flags.carry = false;

      return;
    default: throw new Error("Invalid control flow in sub_18d7c");
    }
  }
  } finally {execution.leave(frame);}
}

function* sub_18daa() {
  let pc=0;
  const frame=execution.enter('sub_18daa',pc);pc=frame.pc;
  let skipBudget=frame.budget || execution.restoring;
  try {
  if(execution.restoring && execution.pending.length===0) {
    execution.restoring=false;
    if(frame.parked!==null) {yield frame.parked;frame.parked=null;frame.budget=false;}
  }
  dispatch: while (true) {
    if (!skipBudget && (++game.steps & 1023) === 0) {
      frame.pc=pc;frame.budget=true;frame.parked=0;yield 0;
      frame.parked=null;frame.budget=false;
    }
    skipBudget=false;
    switch(pc) {
    case 0:

    if (memoryAGet16(r.ds, 0x0004) != 0x0000)
        { pc = 0x18e11; continue dispatch; }
    r.dl = memoryAGet(r.ds, 0x1673);
    if (r.dl == 0x00)
        { pc = 0x18e11; continue dispatch; }
    r.cx = memoryAGet16(r.ds, 0x17df);
    r.tl = r.ch;
    r.ch = r.cl;
    r.cl = r.tl;
    r.si = 0x0010;
    r.ax = memoryAGet16(r.ds, 0x1671);
    r.bx = memoryAGet16(r.ds, 0x0579);
    r.dh = memoryAGet(r.ds, 0x057b);
    r.di = 0x0018;
    r.ch = 0x0e;
    frame.pc=2097153;
case 2097153:
yield* sub_1a059();
frame.pc=2097154;
case 2097154:;
    if (!flags.carry)
        return;
    frame.pc=2097155;
case 2097155:
yield* sub_18413();
frame.pc=2097156;
case 2097156:;
    frame.pc=2097157;
case 2097157:
yield* sub_18b52();
frame.pc=2097158;
case 2097158:;
    frame.pc=2097159;
case 2097159:
yield* sub_1830d();
frame.pc=2097160;
case 2097160:;
    if (memoryAGet(r.ds, 0x1675) != 0x00)
        { pc = 0x18e0f; continue dispatch; }
    memoryASet(r.ds, 0x1675, 0x01);
    frame.pc=2097161;
case 2097161:
yield* sub_18396();
frame.pc=2097162;
case 2097162:;
    r.dl = 0x01;
    if (memoryAGet(r.ds, 0x1674) == 0xff)
        { pc = 0x18dfb; continue dispatch; }
    r.dl = 0xff;
case 0x18dfb:
    memoryASet(r.ds, 0x1674, r.dl);
    memoryASet16(r.ds, 0x17ea, 0x0060);
    memoryASet(r.ds, 0x17e9, 0x01);
    memoryASet(r.ds, 0x055c, 0x00);
case 0x18e0f:
    flags.carry = true;
    return;
case 0x18e11:
    flags.carry = false;

      return;
    default: throw new Error("Invalid control flow in sub_18daa");
    }
  }
  } finally {execution.leave(frame);}
}

function* sub_18e20() {
  let pc=0;
  const frame=execution.enter('sub_18e20',pc);pc=frame.pc;
  let skipBudget=frame.budget || execution.restoring;
  try {
  if(execution.restoring && execution.pending.length===0) {
    execution.restoring=false;
    if(frame.parked!==null) {yield frame.parked;frame.parked=null;frame.budget=false;}
  }
  dispatch: while (true) {
    if (!skipBudget && (++game.steps & 1023) === 0) {
      frame.pc=pc;frame.budget=true;frame.parked=0;yield 0;
      frame.parked=null;frame.budget=false;
    }
    skipBudget=false;
    switch(pc) {
    case 0:

    r.bx = 0;
    r.ah = 0x0b;
    frame.pc=2097153;
case 2097153:
yield* interrupt(0x10);
frame.pc=2097154;
case 2097154:;
    if (memoryAGet16(r.ds, 0x0006) != 0x0007)
        { pc = 0x18e42; continue dispatch; }
    if (memoryAGet(r.ds, 0x0553) == 0x00)
        { pc = 0x18e42; continue dispatch; }
    frame.pc=2097155;
case 2097155:
yield* sub_1c4bb();
frame.pc=2097156;
case 2097156:;
    memoryASet16(r.ds, 0x0579, 0x0098);
    memoryASet(r.ds, 0x057b, 0x5f);
case 0x18e42:
    r.ax = 0xb800;
    r.es = r.ax;
    flags.direction = false;
    memoryASet16(r.ds, 0x1839, 0x0000);
    frame.pc=2097157;
case 2097157:
yield* sub_18e97();
frame.pc=2097158;
case 2097158:;
    frame.pc=2097159;
case 2097159:
yield* sub_1cd51();
frame.pc=2097160;
case 2097160:;
    frame.pc=2097161;
case 2097161:
yield* sub_18f61();
frame.pc=2097162;
case 2097162:;
    if (memoryAGet16(r.ds, 0x0004) != 0x0000)
        { pc = 0x18e79; continue dispatch; }
    if (memoryAGet(r.ds, 0x0553) == 0x00)
        { pc = 0x18e76; continue dispatch; }
    if (memoryAGet16(r.ds, 0x0006) != 0x0007)
        { pc = 0x18e71; continue dispatch; }
    frame.pc=2097163;
case 2097163:
yield* sub_1c543();
frame.pc=2097164;
case 2097164:;
    { pc = 0x18e79; continue dispatch; }
case 0x18e71:
    frame.pc=2097165;
case 2097165:
yield* sub_1aae0();
frame.pc=2097166;
case 2097166:;
    { pc = 0x18e79; continue dispatch; }
case 0x18e76:
    frame.pc=2097167;
case 2097167:
yield* sub_18fa6();
frame.pc=2097168;
case 2097168:;
case 0x18e79:
    if (memoryAGet16(r.ds, 0x0004) == 0x0007)
        { pc = 0x18e8a; continue dispatch; }
    r.ax = 0xaaaa;
    if (memoryAGet16(r.ds, 0x0004) != 0x0002)
        { pc = 0x18e8d; continue dispatch; }
case 0x18e8a:
    r.ax = 0x5555;
case 0x18e8d:
    memoryASet16(r.ds, 0x1839, r.ax);
    frame.pc=2097169;
case 2097169:
yield* sub_18e97();
frame.pc=2097170;
case 2097170:;
    frame.pc=2097171;
case 2097171:
yield* sub_1cd51();
frame.pc=2097172;
case 2097172:;

      return;
    default: throw new Error("Invalid control flow in sub_18e20");
    }
  }
  } finally {execution.leave(frame);}
}

function* sub_18e97() {
  let pc=0;
  const frame=execution.enter('sub_18e97',pc);pc=frame.pc;
  let skipBudget=frame.budget || execution.restoring;
  try {
  if(execution.restoring && execution.pending.length===0) {
    execution.restoring=false;
    if(frame.parked!==null) {yield frame.parked;frame.parked=null;frame.budget=false;}
  }
  dispatch: while (true) {
    if (!skipBudget && (++game.steps & 1023) === 0) {
      frame.pc=pc;frame.budget=true;frame.parked=0;yield 0;
      frame.parked=null;frame.budget=false;
    }
    skipBudget=false;
    switch(pc) {
    case 0:

    frame.pc=2097153;
case 2097153:
yield* sub_1cac6();
frame.pc=2097154;
case 2097154:;
    memoryASet16(r.ds, 0x1835, 0x0001);
    memoryASet(r.ds, 0x1837, 0x08);
    r.cx = memoryAGet16(r.ds, 0x0579);
    r.dl = memoryAGet(r.ds, 0x057b);
    r.cx += 0x000c;
    r.cx &= 0xfff0;
    r.dl += 0x08;
    memoryASet(r.ds, 0x1838, 0x00);
case 0x18ebc:
    frame.pc=2097155;
case 2097155:
yield* sub_1cac7();
frame.pc=2097156;
case 2097156:;
    memoryASet16(r.ds, 0x1832, r.cx);
    memoryASet(r.ds, 0x1834, r.dl);
    frame.pc=2097157;
case 2097157:
yield* sub_19ee0();
frame.pc=2097158;
case 2097158:;
    r.di = r.ax;
    r.bl = memoryAGet(r.ds, 0x1837);
case 0x18ed0:
    r.ax = memoryAGet16(r.ds, 0x1839);
    r.cx = memoryAGet16(r.ds, 0x1835);
    r.cx >>= 1;
    r.cx >>= 1;
    r.cx >>= 1;
    rep_stosw();
    r.cx = memoryAGet16(r.ds, 0x1835);
    r.cx >>= 1;
    r.cx >>= 1;
    r.cx &= 0x00fe;
    r.di -= r.cx;
    r.di ^= 0x2000;
    if (r.di & 0x2000)
        { pc = 0x18efa; continue dispatch; }
    r.di += 0x0050;
case 0x18efa:
    r.tl = r.bl;
    r.bl--;
    if (r.tl != 1)
        { pc = 0x18ed0; continue dispatch; }
    frame.pc=2097159;frame.parked=1;yield 1;
case 2097159: frame.parked=null;

    if (memoryAGet(r.ds, 0x1838) != 0x0f)
        { pc = 0x18f06; continue dispatch; }
    return;
case 0x18f06:
    memoryASet16(r.ds, 0x1835, memoryAGet16(r.ds, 0x1835) + 0x0020);
    memoryASet(r.ds, 0x1837, memoryAGet(r.ds, 0x1837) + 0x10);
    r.cx = memoryAGet16(r.ds, 0x1832);
    r.dl = memoryAGet(r.ds, 0x1834);
    flags.carry = r.cx < 0x0010;
    r.cx -= 0x0010;
    if (!flags.carry)
        { pc = 0x18f24; continue dispatch; }
    r.cx = 0;
    memoryASet(r.ds, 0x1838, memoryAGet(r.ds, 0x1838) | 0x01);
case 0x18f24:
    r.ax = memoryAGet16(r.ds, 0x1835);
    r.ax += r.cx;
    if (r.ax < 0x0140)
        { pc = 0x18f3b; continue dispatch; }
    r.ax = 0x0140;
    r.ax -= r.cx;
    memoryASet16(r.ds, 0x1835, r.ax);
    memoryASet(r.ds, 0x1838, memoryAGet(r.ds, 0x1838) | 0x02);
case 0x18f3b:
    flags.carry = r.dl < 0x08;
    r.dl -= 0x08;
    if (!flags.carry)
        { pc = 0x18f47; continue dispatch; }
    r.dl = 0;
    memoryASet(r.ds, 0x1838, memoryAGet(r.ds, 0x1838) | 0x04);
case 0x18f47:
    r.al = memoryAGet(r.ds, 0x1837);
    flags.carry = (r.al + r.dl) >= 0x100;
    r.al += r.dl;
    if (flags.carry)
        { pc = 0x18f52; continue dispatch; }
    if (r.al < 0xc8)
        { pc = 0x18f5e; continue dispatch; }
case 0x18f52:
    r.al = 0xc8;
    r.al -= r.dl;
    memoryASet(r.ds, 0x1837, r.al);
    memoryASet(r.ds, 0x1838, memoryAGet(r.ds, 0x1838) | 0x08);
case 0x18f5e:
    { pc = 0x18ebc; continue dispatch; }

      return;
    default: throw new Error("Invalid control flow in sub_18e97");
    }
  }
  } finally {execution.leave(frame);}
}

function* sub_18f61() {
  let pc=0;
  const frame=execution.enter('sub_18f61',pc);pc=frame.pc;
  let skipBudget=frame.budget || execution.restoring;
  try {
  if(execution.restoring && execution.pending.length===0) {
    execution.restoring=false;
    if(frame.parked!==null) {yield frame.parked;frame.parked=null;frame.budget=false;}
  }
  dispatch: while (true) {
    if (!skipBudget && (++game.steps & 1023) === 0) {
      frame.pc=pc;frame.budget=true;frame.parked=0;yield 0;
      frame.parked=null;frame.budget=false;
    }
    skipBudget=false;
    switch(pc) {
    case 0:

    if (memoryAGet(r.ds, 0x0697) == 0xfd)
        { pc = 0x18f78; continue dispatch; }
    r.ah = 0x0b;
    r.bh = 0x01;
    r.si = memoryAGet16(r.ds, 0x0004);
    r.bl = memoryAGet(r.ds, r.si + 6227);
    frame.pc=2097153;
case 2097153:
yield* interrupt(0x10);
frame.pc=2097154;
case 2097154:;
    { pc = 0x18f97; continue dispatch; }
case 0x18f78:
    r.si = memoryAGet16(r.ds, 0x0004);
    r.bl = 0x01;
    r.bh = memoryAGet(r.ds, r.si + 6203);
    frame.pc=2097155;
case 2097155:
yield* sub_18f9e();
frame.pc=2097156;
case 2097156:;
    r.bl = 0x02;
    r.bh = memoryAGet(r.ds, r.si + 6211);
    frame.pc=2097157;
case 2097157:
yield* sub_18f9e();
frame.pc=2097158;
case 2097158:;
    r.bl = 0x03;
    r.bh = memoryAGet(r.ds, r.si + 6219);
    frame.pc=2097159;
case 2097159:
yield* sub_18f9e();
frame.pc=2097160;
case 2097160:;
case 0x18f97:
    r.ah = 0x0b;
    r.bx = 0;
    frame.pc=2097161;
case 2097161:
yield* interrupt(0x10);
frame.pc=2097162;
case 2097162:;

      return;
    default: throw new Error("Invalid control flow in sub_18f61");
    }
  }
  } finally {execution.leave(frame);}
}

function* sub_18f9e() {
  let pc=0;
  const frame=execution.enter('sub_18f9e',pc);pc=frame.pc;
  let skipBudget=frame.budget || execution.restoring;
  try {
  if(execution.restoring && execution.pending.length===0) {
    execution.restoring=false;
    if(frame.parked!==null) {yield frame.parked;frame.parked=null;frame.budget=false;}
  }
  dispatch: while (true) {
    if (!skipBudget && (++game.steps & 1023) === 0) {
      frame.pc=pc;frame.budget=true;frame.parked=0;yield 0;
      frame.parked=null;frame.budget=false;
    }
    skipBudget=false;
    switch(pc) {
    case 0:

    r.ax = 0x1000;
    push(r.si);
    frame.pc=2097153;
case 2097153:
yield* interrupt(0x10);
frame.pc=2097154;
case 2097154:;
    r.si = pop();

      return;
    default: throw new Error("Invalid control flow in sub_18f9e");
    }
  }
  } finally {execution.leave(frame);}
}

function* sub_18fa6() {
  let pc=0;
  const frame=execution.enter('sub_18fa6',pc);pc=frame.pc;
  let skipBudget=frame.budget || execution.restoring;
  try {
  if(execution.restoring && execution.pending.length===0) {
    execution.restoring=false;
    if(frame.parked!==null) {yield frame.parked;frame.parked=null;frame.budget=false;}
  }
  dispatch: while (true) {
    if (!skipBudget && (++game.steps & 1023) === 0) {
      frame.pc=pc;frame.budget=true;frame.parked=0;yield 0;
      frame.parked=null;frame.budget=false;
    }
    skipBudget=false;
    switch(pc) {
    case 0:

    if (memoryAGet16(r.ds, 0x0006) != 0x0007)
        { pc = 0x18fb1; continue dispatch; }
    frame.pc=2097153;
case 2097153:
yield* sub_1d270();
frame.pc=2097154;
case 2097154:;
    return;
case 0x18fb1:
    frame.pc=2097155;
case 2097155:
yield* sub_1ca05();
frame.pc=2097156;
case 2097156:;
    r.ax = 0x185b;
    if (memoryAGet(r.ds, 0x0552) == 0x00)
        { pc = 0x18ff6; continue dispatch; }
    r.bx = memoryAGet16(r.ds, 0x1c30);
    memoryASet16(r.ds, 0x1c30, memoryAGet16(r.ds, 0x1c30) + 0x0002);
    r.bx &= 0x0006;
    r.ax = memoryAGet16(r.ds, r.bx + 7206);
    if (memoryAGet(r.ds, 0x1f80) == 0x00)
        { pc = 0x18fda; continue dispatch; }
    memoryASet(r.ds, 0x1f80, memoryAGet(r.ds, 0x1f80) - 1);
case 0x18fda:
    if (memoryAGet(r.ds, 0x0552) != 0xdd)
        { pc = 0x18ff6; continue dispatch; }
    if (memoryAGet16(r.ds, 0x0008) == 0x0000)
        { pc = 0x18ff6; continue dispatch; }
    if (memoryAGet(r.ds, 0x1f80) < 0x01)
        { pc = 0x18ff6; continue dispatch; }
    frame.pc=2097157;
case 2097157:
yield* sub_1ce10();
frame.pc=2097158;
case 2097158:;
    frame.pc=2097159;
case 2097159:
yield* sub_1cd51();
frame.pc=2097160;
case 2097160:;
    return;
case 0x18ff6:
    memoryASet16(r.ds, 0x1c2e, r.ax);
    memoryASet16(r.ds, 0x1c1b, 0x8080);
    memoryASet(r.ds, 0x1c1d, 0x1c);
case 0x19004:
    frame.pc=2097161;
case 2097161:
yield* sub_19047();
frame.pc=2097162;
case 2097162:;
    r.ah = 0;
    frame.pc=2097163;
case 2097163:
yield* interrupt(0x1a);
frame.pc=2097164;
case 2097164:;
    memoryASet16(r.ds, 0x1830, r.dx);
case 0x1900f:
    frame.pc=2097165;
case 2097165:
yield* sub_1ca14();
frame.pc=2097166;
case 2097166:;
    r.ah = 0;
    frame.pc=2097167;
case 2097167:
yield* interrupt(0x1a);
frame.pc=2097168;
case 2097168:;
    if (r.dx == memoryAGet16(r.ds, 0x1830))
        { pc = 0x1900f; continue dispatch; }
    if (memoryAGet(r.ds, 0x1c1d) > 0x14)
        { pc = 0x19032; continue dispatch; }
    r.bh = 0;
    r.bl = memoryAGet(r.ds, 0x1c1d);
    r.bl &= 0x06;
    r.ax = memoryAGet16(r.ds, r.bx + 7198);
    { pc = 0x1903a; continue dispatch; }
case 0x19032:
    r.ax = memoryAGet16(r.ds, 0x1c1b);
    flags.carry = true;
    r.al = rcr(r.al, 0x01);
    r.ah = r.al;
case 0x1903a:
    memoryASet16(r.ds, 0x1c1b, r.ax);
    r.tl = memoryAGet(r.ds, 0x1c1d);
    memoryASet(r.ds, 0x1c1d, memoryAGet(r.ds, 0x1c1d) - 1);
    if (r.tl != 1)
        { pc = 0x19004; continue dispatch; }
    frame.pc=2097169;
case 2097169:
yield* sub_1cd51();
frame.pc=2097170;
case 2097170:;

      return;
    default: throw new Error("Invalid control flow in sub_18fa6");
    }
  }
  } finally {execution.leave(frame);}
}

function* sub_19047() {
  let pc=0;
  const frame=execution.enter('sub_19047',pc);pc=frame.pc;
  let skipBudget=frame.budget || execution.restoring;
  try {
  if(execution.restoring && execution.pending.length===0) {
    execution.restoring=false;
    if(frame.parked!==null) {yield frame.parked;frame.parked=null;frame.budget=false;}
  }
  dispatch: while (true) {
    if (!skipBudget && (++game.steps & 1023) === 0) {
      frame.pc=pc;frame.budget=true;frame.parked=0;yield 0;
      frame.parked=null;frame.budget=false;
    }
    skipBudget=false;
    switch(pc) {
    case 0:

    flags.direction = false;
    push(r.ds);
    r.es = pop();
    r.si = memoryAGet16(r.ds, 0x1c2e);
    r.di = 0x000e;
    r.cx = 0x0060;
case 0x19054:
    lodsw();
    r.ax &= memoryAGet16(r.ds, 0x1c1b);
    stosw();
    if (--r.cx)
        { pc = 0x19054; continue dispatch; }
    r.ax = 0xb800;
    r.es = r.ax;
    r.si = 0x000e;
    r.di = 0x0ed0;
    r.cx = 0x0c08;
    frame.pc=2097153;
case 2097153:
yield* sub_19fcd();
frame.pc=2097154;
case 2097154:;

      return;
    default: throw new Error("Invalid control flow in sub_19047");
    }
  }
  } finally {execution.leave(frame);}
}

function* sub_19070() {
  let pc=0;
  const frame=execution.enter('sub_19070',pc);pc=frame.pc;
  let skipBudget=frame.budget || execution.restoring;
  try {
  if(execution.restoring && execution.pending.length===0) {
    execution.restoring=false;
    if(frame.parked!==null) {yield frame.parked;frame.parked=null;frame.budget=false;}
  }
  dispatch: while (true) {
    if (!skipBudget && (++game.steps & 1023) === 0) {
      frame.pc=pc;frame.budget=true;frame.parked=0;yield 0;
      frame.parked=null;frame.budget=false;
    }
    skipBudget=false;
    switch(pc) {
    case 0:

    memoryASet(r.ds, 0x1cbf, 0x00);
    memoryASet16(r.ds, 0x1ce1, 0x0000);
    memoryASet(r.ds, 0x1cc0, 0x00);
    memoryASet(r.ds, 0x1cc1, 0x00);
    memoryASet(r.ds, 0x1cb8, 0x00);
    memoryASet(r.ds, 0x1cc8, 0xb1);
    frame.pc=2097153;
case 2097153:
yield* sub_1c680();
frame.pc=2097154;
case 2097154:;

      return;
    default: throw new Error("Invalid control flow in sub_19070");
    }
  }
  } finally {execution.leave(frame);}
}

function* sub_19093() {
  let pc=0;
  const frame=execution.enter('sub_19093',pc);pc=frame.pc;
  let skipBudget=frame.budget || execution.restoring;
  try {
  if(execution.restoring && execution.pending.length===0) {
    execution.restoring=false;
    if(frame.parked!==null) {yield frame.parked;frame.parked=null;frame.budget=false;}
  }
  dispatch: while (true) {
    if (!skipBudget && (++game.steps & 1023) === 0) {
      frame.pc=pc;frame.budget=true;frame.parked=0;yield 0;
      frame.parked=null;frame.budget=false;
    }
    skipBudget=false;
    switch(pc) {
    case 0:

    r.ah = 0;
    frame.pc=2097153;
case 2097153:
yield* interrupt(0x1a);
frame.pc=2097154;
case 2097154:;
    r.cx = r.dx;
    r.dx -= memoryAGet16(r.ds, 0x1cc9);
    r.ax = memoryAGet16(r.ds, 0x1ce1);
    r.ax &= 0x0001;
    r.ax += 0x0001;
    if (r.dx >= r.ax)
        { pc = 0x190ab; continue dispatch; }
case 0x190aa:
    return;
case 0x190ab:
    frame.pc=2097155;
case 2097155:
yield* sub_18608();
frame.pc=2097156;
case 2097156:;
    if (flags.zero)
        { pc = 0x190aa; continue dispatch; }
    memoryASet16(r.ds, 0x1cc9, r.cx);
    memoryASet16(r.ds, 0x1ce1, memoryAGet16(r.ds, 0x1ce1) + 1);
    if (memoryAGet(r.ds, 0x1cc1) == 0x00)
        { pc = 0x19112; continue dispatch; }
    r.tl = memoryAGet(r.ds, 0x1cc1);
    memoryASet(r.ds, 0x1cc1, memoryAGet(r.ds, 0x1cc1) - 1);
    if (r.tl != 1)
        { pc = 0x190f9; continue dispatch; }
    frame.pc=2097157;
case 2097157:
yield* sub_1cd51();
frame.pc=2097158;
case 2097158:;
    if (memoryAGet(r.ds, 0x1cb8) == 0x00)
        { pc = 0x190f2; continue dispatch; }
    if (memoryAGet16(r.ds, 0x0004) == 0x0000)
        { pc = 0x190e7; continue dispatch; }
    memoryASet(r.ds, 0x0552, 0xdd);
    memoryASet16(r.ds, 0x0579, 0x00a0);
    memoryASet(r.ds, 0x057b, 0x60);
    return;
case 0x190e7:
    if (memoryAGet(r.ds, 0x1f80) == 0x00)
        { pc = 0x190f2; continue dispatch; }
    memoryASet(r.ds, 0x1f80, memoryAGet(r.ds, 0x1f80) - 1);
case 0x190f2:
    frame.pc=2097159;
case 2097159:
yield* sub_19311();
frame.pc=2097160;
case 2097160:;
    frame.pc=2097161;
case 2097161:
yield* sub_19070();
frame.pc=2097162;
case 2097162:;
    return;
case 0x190f9:
    frame.pc=2097163;
case 2097163:
yield* sub_19252();
frame.pc=2097164;
case 2097164:;
    r.ax = 0x0104;
    r.al -= memoryAGet(r.ds, 0x1cc1);
    if (memoryAGet(r.ds, 0x1cd0) == 0xff)
        { pc = 0x1910c; continue dispatch; }
    r.ah = 0xff;
case 0x1910c:
    frame.pc=2097165;
case 2097165:
yield* sub_19289();
frame.pc=2097166;
case 2097166:;
    { pc = 0x1922b; continue dispatch; }
case 0x19112:
    if (memoryAGet(r.ds, 0x1cb8) == 0x00)
        { pc = 0x1913c; continue dispatch; }
    r.dl = memoryAGet(r.ds, 0x1cb8);
    if (memoryAGet16(r.ds, 0x1cb9) == 0x0000)
        { pc = 0x19132; continue dispatch; }
    memoryASet16(r.ds, 0x1cb9, memoryAGet16(r.ds, 0x1cb9) - 1);
    frame.pc=2097167;
case 2097167:
yield* sub_1a02d();
frame.pc=2097168;
case 2097168:;
    r.dl &= 0x01;
    if (r.dl != 0)
        { pc = 0x19132; continue dispatch; }
    r.dl = 0xff;
case 0x19132:
    memoryASet(r.ds, 0x1cd0, r.dl);
    r.ax = memoryAGet16(r.ds, 0x1cc6);
    { pc = 0x191db; continue dispatch; }
case 0x1913c:
    if (memoryAGet(r.ds, 0x1cbf) != 0x00)
        { pc = 0x191a5; continue dispatch; }
    if (memoryAGet(r.ds, 0x1cc0) != 0x00)
        { pc = 0x19187; continue dispatch; }
    if (memoryAGet(r.ds, 0x1d58) != 0x00)
        { pc = 0x1916d; continue dispatch; }
    if (memoryAGet(r.ds, 0x057b) < 0xb4)
        { pc = 0x1916c; continue dispatch; }
    if (memoryAGet(r.ds, 0x0558) != 0x00)
        { pc = 0x1916c; continue dispatch; }
    frame.pc=2097169;
case 2097169:
yield* sub_1a02d();
frame.pc=2097170;
case 2097170:;
    r.bx = memoryAGet16(r.ds, 0x0008);
    if (r.dl < memoryAGet(r.ds, r.bx + 7377))
        { pc = 0x1916d; continue dispatch; }
case 0x1916c:
    return;
case 0x1916d:
    r.al = 0x01;
    memoryASet16(r.ds, 0x59ba, 0x0000);
    if (memoryAGet16(r.ds, 0x0579) >= 0x00a0)
        { pc = 0x1917f; continue dispatch; }
    r.al = 0xff;
case 0x1917f:
    memoryASet(r.ds, 0x1cd0, r.al);
    memoryASet(r.ds, 0x1cc0, 0x04);
case 0x19187:
    r.tl = memoryAGet(r.ds, 0x1cc0);
    memoryASet(r.ds, 0x1cc0, memoryAGet(r.ds, 0x1cc0) - 1);
    if (r.tl != 1)
        { pc = 0x19195; continue dispatch; }
    memoryASet(r.ds, 0x1cbf, 0x01);
    { pc = 0x191a5; continue dispatch; }
case 0x19195:
    frame.pc=2097171;
case 2097171:
yield* sub_19252();
frame.pc=2097172;
case 2097172:;
    r.al = memoryAGet(r.ds, 0x1cc0);
    r.ah = memoryAGet(r.ds, 0x1cd0);
    frame.pc=2097173;
case 2097173:
yield* sub_19289();
frame.pc=2097174;
case 2097174:;
    { pc = 0x1922b; continue dispatch; }
case 0x191a5:
    memoryASet(r.ds, 0x1d58, 0x00);
    r.ax = memoryAGet16(r.ds, 0x1cc6);
    if (memoryAGet(r.ds, 0x057b) < 0xb4)
        { pc = 0x191db; continue dispatch; }
    if (memoryAGet(r.ds, 0x0558) != 0x00)
        { pc = 0x191db; continue dispatch; }
    frame.pc=2097175;
case 2097175:
yield* sub_1a02d();
frame.pc=2097176;
case 2097176:;
    r.bx = memoryAGet16(r.ds, 0x0008);
    if (r.dl > memoryAGet(r.ds, r.bx + 7385))
        { pc = 0x191db; continue dispatch; }
    if (r.ax > memoryAGet16(r.ds, 0x0579))
        { pc = 0x191d6; continue dispatch; }
    memoryASet(r.ds, 0x1cd0, 0x01);
    { pc = 0x191db; continue dispatch; }
case 0x191d6:
    memoryASet(r.ds, 0x1cd0, 0xff);
case 0x191db:
    if (memoryAGet(r.ds, 0x1cd0) < 0x01)
        { pc = 0x1921f; continue dispatch; }
    if (memoryAGet(r.ds, 0x1cd0) == 0x01)
        { pc = 0x19212; continue dispatch; }
    flags.carry = r.ax < 0x0008;
    r.ax -= 0x0008;
    if (!flags.carry)
        { pc = 0x1921f; continue dispatch; }
    r.ax = 0;
case 0x191eb:
    if (memoryAGet(r.ds, 0x1cb8) == 0x00)
        { pc = 0x191fc; continue dispatch; }
    if (memoryAGet16(r.ds, 0x1cb9) != 0x0000)
        { pc = 0x1921f; continue dispatch; }
    { pc = 0x1920a; continue dispatch; }
case 0x191fc:
    if (memoryAGet(r.ds, 0x057b) < 0xb4)
        { pc = 0x1920a; continue dispatch; }
    if (memoryAGet(r.ds, 0x0558) == 0x00)
        { pc = 0x1921f; continue dispatch; }
case 0x1920a:
    memoryASet(r.ds, 0x1cc1, 0x04);
    { pc = 0x1921f; continue dispatch; }
case 0x19212:
    r.ax += 0x0008;
    if (r.ax < 0x011e)
        { pc = 0x1921f; continue dispatch; }
    r.ax = 0x011e;
    { pc = 0x191eb; continue dispatch; }
case 0x1921f:
    memoryASet16(r.ds, 0x1cc6, r.ax);
    frame.pc=2097177;
case 2097177:
yield* sub_19252();
frame.pc=2097178;
case 2097178:;
    memoryASet16(r.ds, 0x1cc4, 0x0f04);
case 0x1922b:
    r.cx = memoryAGet16(r.ds, 0x1cc6);
    r.dl = memoryAGet(r.ds, 0x1cc8);
    frame.pc=2097179;
case 2097179:
yield* sub_19ee0();
frame.pc=2097180;
case 2097180:;
    memoryASet16(r.ds, 0x1ccd, r.ax);
    if (memoryAGet(r.ds, 0x1cc0) == 0x03)
        { pc = 0x19243; continue dispatch; }
    frame.pc=2097181;
case 2097181:
yield* sub_19311();
frame.pc=2097182;
case 2097182:;
case 0x19243:
    frame.pc=2097183;
case 2097183:
yield* sub_19325();
frame.pc=2097184;
case 2097184:;
    if (flags.carry)
        return;
    r.ax = memoryAGet16(r.ds, 0x1ccd);
    memoryASet16(r.ds, 0x1cbd, r.ax);
    frame.pc=2097185;
case 2097185:
yield* sub_192cb();
frame.pc=2097186;
case 2097186:;

      return;
    default: throw new Error("Invalid control flow in sub_19093");
    }
  }
  } finally {execution.leave(frame);}
}

function* sub_19252() {
  let pc=0;
  const frame=execution.enter('sub_19252',pc);pc=frame.pc;
  let skipBudget=frame.budget || execution.restoring;
  try {
  if(execution.restoring && execution.pending.length===0) {
    execution.restoring=false;
    if(frame.parked!==null) {yield frame.parked;frame.parked=null;frame.budget=false;}
  }
  dispatch: while (true) {
    if (!skipBudget && (++game.steps & 1023) === 0) {
      frame.pc=pc;frame.budget=true;frame.parked=0;yield 0;
      frame.parked=null;frame.budget=false;
    }
    skipBudget=false;
    switch(pc) {
    case 0:

    r.bh = 0;
    if (memoryAGet(r.ds, 0x1cb8) == 0x00)
        { pc = 0x1926b; continue dispatch; }
    memoryASet(r.ds, 0x1ccf, memoryAGet(r.ds, 0x1ccf) + 1);
    r.bl = memoryAGet(r.ds, 0x1ccf);
    r.bl &= 0x06;
    r.bl |= 0x08;
    if (r.bl)
        { pc = 0x19281; continue dispatch; }
case 0x1926b:
    memoryASet(r.ds, 0x1ccf, memoryAGet(r.ds, 0x1ccf) + 0x02);
    r.bl = memoryAGet(r.ds, 0x1ccf);
    r.bl &= 0x02;
    if (memoryAGet(r.ds, 0x1cd0) != 0x01)
        { pc = 0x19281; continue dispatch; }
    r.bl |= 0x04;
case 0x19281:
    r.ax = memoryAGet16(r.ds, r.bx + 5576);
    memoryASet16(r.ds, 0x1cbb, r.ax);

      return;
    default: throw new Error("Invalid control flow in sub_19252");
    }
  }
  } finally {execution.leave(frame);}
}

function* sub_19289() {
  let pc=0;
  const frame=execution.enter('sub_19289',pc);pc=frame.pc;
  let skipBudget=frame.budget || execution.restoring;
  try {
  if(execution.restoring && execution.pending.length===0) {
    execution.restoring=false;
    if(frame.parked!==null) {yield frame.parked;frame.parked=null;frame.budget=false;}
  }
  dispatch: while (true) {
    if (!skipBudget && (++game.steps & 1023) === 0) {
      frame.pc=pc;frame.budget=true;frame.parked=0;yield 0;
      frame.parked=null;frame.budget=false;
    }
    skipBudget=false;
    switch(pc) {
    case 0:

    r.cx = 0x0f04;
    r.cl -= r.al;
    memoryASet16(r.ds, 0x1cc4, r.cx);
    if (r.ah == 0xff)
        { pc = 0x192a8; continue dispatch; }
    r.ah = 0;
    r.al <<= 1;
    memoryASet16(r.ds, 0x1cbb, memoryAGet16(r.ds, 0x1cbb) + r.ax);
    memoryASet16(r.ds, 0x1cc6, 0x0000);
    { pc = 0x192b6; continue dispatch; }
case 0x192a8:
    r.ah = 0;
    r.al <<= 1;
    r.al <<= 1;
    r.al <<= 1;
    r.ax += 0x0120;
    memoryASet16(r.ds, 0x1cc6, r.ax);
case 0x192b6:
    push(r.ds);
    r.es = pop();
    r.si = memoryAGet16(r.ds, 0x1cbb);
    r.di = 0x000e;
    r.al = 0x04;
    frame.pc=2097153;
case 2097153:
yield* sub_19fa0();
frame.pc=2097154;
case 2097154:;
    memoryASet16(r.ds, 0x1cbb, 0x000e);

      return;
    default: throw new Error("Invalid control flow in sub_19289");
    }
  }
  } finally {execution.leave(frame);}
}

function* sub_192cb() {
  let pc=0;
  const frame=execution.enter('sub_192cb',pc);pc=frame.pc;
  let skipBudget=frame.budget || execution.restoring;
  try {
  if(execution.restoring && execution.pending.length===0) {
    execution.restoring=false;
    if(frame.parked!==null) {yield frame.parked;frame.parked=null;frame.budget=false;}
  }
  dispatch: while (true) {
    if (!skipBudget && (++game.steps & 1023) === 0) {
      frame.pc=pc;frame.budget=true;frame.parked=0;yield 0;
      frame.parked=null;frame.budget=false;
    }
    skipBudget=false;
    switch(pc) {
    case 0:

    r.cx = memoryAGet16(r.ds, 0x1cc4);
    memoryASet16(r.ds, 0x1cc2, r.cx);
    r.ax = 0xb800;
    if (memoryAGet(r.ds, 0x1cb8) != 0x00)
        { pc = 0x192ee; continue dispatch; }
    r.es = r.ax;
    r.di = memoryAGet16(r.ds, 0x1cbd);
    r.si = memoryAGet16(r.ds, 0x1cbb);
    r.bp = 0x1c40;
    frame.pc=2097153;
case 2097153:
yield* sub_19efc();
frame.pc=2097154;
case 2097154:;
    return;
case 0x192ee:
    push(r.ds);
    r.ds = r.ax;
    r.es = pop();
    push(r.es);
    push(r.ds);
    r.si = memoryAGet16(r.es, 0x1cbd);
    r.di = 0x1c40;
    frame.pc=2097155;
case 2097155:
yield* sub_19ffa();
frame.pc=2097156;
case 2097156:;
    r.es = pop();
    r.ds = pop();
    r.si = memoryAGet16(r.ds, 0x1cbb);
    r.di = memoryAGet16(r.ds, 0x1cbd);
    r.cx = memoryAGet16(r.ds, 0x1cc4);
    frame.pc=2097157;
case 2097157:
yield* sub_19fcd();
frame.pc=2097158;
case 2097158:;

      return;
    default: throw new Error("Invalid control flow in sub_192cb");
    }
  }
  } finally {execution.leave(frame);}
}

function* sub_19311() {
  let pc=0;
  const frame=execution.enter('sub_19311',pc);pc=frame.pc;
  let skipBudget=frame.budget || execution.restoring;
  try {
  if(execution.restoring && execution.pending.length===0) {
    execution.restoring=false;
    if(frame.parked!==null) {yield frame.parked;frame.parked=null;frame.budget=false;}
  }
  dispatch: while (true) {
    if (!skipBudget && (++game.steps & 1023) === 0) {
      frame.pc=pc;frame.budget=true;frame.parked=0;yield 0;
      frame.parked=null;frame.budget=false;
    }
    skipBudget=false;
    switch(pc) {
    case 0:

    r.ax = 0xb800;
    r.es = r.ax;
    r.di = memoryAGet16(r.ds, 0x1cbd);
    r.si = 0x1c40;
    r.cx = memoryAGet16(r.ds, 0x1cc2);
    frame.pc=2097153;
case 2097153:
yield* sub_19fcd();
frame.pc=2097154;
case 2097154:;

      return;
    default: throw new Error("Invalid control flow in sub_19311");
    }
  }
  } finally {execution.leave(frame);}
}

function* sub_19325() {
  let pc=0;
  const frame=execution.enter('sub_19325',pc);pc=frame.pc;
  let skipBudget=frame.budget || execution.restoring;
  try {
  if(execution.restoring && execution.pending.length===0) {
    execution.restoring=false;
    if(frame.parked!==null) {yield frame.parked;frame.parked=null;frame.budget=false;}
  }
  dispatch: while (true) {
    if (!skipBudget && (++game.steps & 1023) === 0) {
      frame.pc=pc;frame.budget=true;frame.parked=0;yield 0;
      frame.parked=null;frame.budget=false;
    }
    skipBudget=false;
    switch(pc) {
    case 0:

    if (memoryAGet(r.ds, 0x1cb8) != 0x00)
        { pc = 0x19364; continue dispatch; }
    r.al = memoryAGet(r.ds, 0x1cbf);
    r.al |= memoryAGet(r.ds, 0x1cc0);
    r.al |= memoryAGet(r.ds, 0x1cc1);
    if (!r.al)
        { pc = 0x19364; continue dispatch; }
    if (memoryAGet(r.ds, 0x057b) < 0xa3)
        { pc = 0x19364; continue dispatch; }
    if (memoryAGet(r.ds, 0x0558) != 0x00)
        { pc = 0x19364; continue dispatch; }
    r.ax = memoryAGet16(r.ds, 0x1cc6);
    r.ax += 0x0020;
    if (r.ax < memoryAGet16(r.ds, 0x0579))
        { pc = 0x19364; continue dispatch; }
    flags.carry = r.ax < 0x0038;
    r.ax -= 0x0038;
    if (!flags.carry)
        { pc = 0x1935a; continue dispatch; }
    r.ax = 0;
case 0x1935a:
    if (r.ax > memoryAGet16(r.ds, 0x0579))
        { pc = 0x19364; continue dispatch; }
    frame.pc=2097153;
case 2097153:
yield* sub_19366();
frame.pc=2097154;
case 2097154:;
    return;
case 0x19364:
    flags.carry = false;

      return;
    default: throw new Error("Invalid control flow in sub_19325");
    }
  }
  } finally {execution.leave(frame);}
}

function* sub_19366() {
  let pc=0;
  const frame=execution.enter('sub_19366',pc);pc=frame.pc;
  let skipBudget=frame.budget || execution.restoring;
  try {
  if(execution.restoring && execution.pending.length===0) {
    execution.restoring=false;
    if(frame.parked!==null) {yield frame.parked;frame.parked=null;frame.budget=false;}
  }
  dispatch: while (true) {
    if (!skipBudget && (++game.steps & 1023) === 0) {
      frame.pc=pc;frame.budget=true;frame.parked=0;yield 0;
      frame.parked=null;frame.budget=false;
    }
    skipBudget=false;
    switch(pc) {
    case 0:

    if (memoryAGet16(r.ds, 0x0004) != 0x0006)
        { pc = 0x19379; continue dispatch; }
    r.al = memoryAGet(r.ds, 0x057b);
    memoryASet(r.ds, 0x1cc8, r.al);
    r.ax = memoryAGet16(r.ds, 0x0579);
    memoryASet16(r.ds, 0x1cc6, r.ax);
case 0x19379:
    r.ax = memoryAGet16(r.ds, 0x1cc6);
    r.ax += memoryAGet16(r.ds, 0x0579);
    r.ax >>= 1;
    if (r.ax < 0x0118)
        { pc = 0x1938a; continue dispatch; }
    r.ax = 0x0117;
case 0x1938a:
    memoryASet16(r.ds, 0x1cc6, r.ax);
    r.bl = 0x01;
    if (r.ax > 0x00a0)
        { pc = 0x1939e; continue dispatch; }
    r.bl = 0xff;
    r.dx = 0x00a1;
    r.dx -= r.ax;
    { pc = 0x193a3; continue dispatch; }
case 0x1939e:
    r.ax -= 0x009f;
    r.dx = r.ax;
case 0x193a3:
    memoryASet(r.ds, 0x1cb8, r.bl);
    memoryASet(r.ds, 0x1cbf, 0x01);
    memoryASet(r.ds, 0x1cc1, 0x00);
    r.cl = 0x03;
    r.dx >>= r.cl;
    memoryASet16(r.ds, 0x1cb9, r.dx);
    if (memoryAGet16(r.ds, 0x0004) != 0x0006)
        { pc = 0x193ed; continue dispatch; }
    frame.pc=2097153;
case 2097153:
yield* sub_18413();
frame.pc=2097154;
case 2097154:;
    r.al = memoryAGet(r.ds, 0x1cb8);
    push(r.ax);
    memoryASet(r.ds, 0x1cb8, 0x00);
    memoryASet16(r.ds, 0x1cc4, 0x0f04);
    r.ax = memoryAGet16(r.ds, 0x15c8);
    memoryASet16(r.ds, 0x1cbb, r.ax);
    r.cx = memoryAGet16(r.ds, 0x1cc6);
    r.dl = memoryAGet(r.ds, 0x1cc8);
    frame.pc=2097155;
case 2097155:
yield* sub_19ee0();
frame.pc=2097156;
case 2097156:;
    memoryASet16(r.ds, 0x1cbd, r.ax);
    frame.pc=2097157;
case 2097157:
yield* sub_192cb();
frame.pc=2097158;
case 2097158:;
    r.ax = pop();
    memoryASet(r.ds, 0x1cb8, r.al);
case 0x193ed:
    frame.pc=2097159;
case 2097159:
yield* sub_19311();
frame.pc=2097160;
case 2097160:;
    frame.pc=2097161;
case 2097161:
yield* sub_18413();
frame.pc=2097162;
case 2097162:;
    r.ax = 0x0000;
    if (memoryAGet16(r.ds, 0x0579) >= 0x00a0)
        { pc = 0x19401; continue dispatch; }
    r.ax = 0x0122;
case 0x19401:
    memoryASet16(r.ds, 0x0579, r.ax);
    if (memoryAGet16(r.ds, 0x0004) != 0x0000)
        { pc = 0x1940e; continue dispatch; }
    frame.pc=2097163;
case 2097163:
yield* sub_1793d();
frame.pc=2097164;
case 2097164:;
case 0x1940e:
    flags.carry = true;

      return;
    default: throw new Error("Invalid control flow in sub_19366");
    }
  }
  } finally {execution.leave(frame);}
}

function* sub_19410() {
  let pc=0;
  const frame=execution.enter('sub_19410',pc);pc=frame.pc;
  let skipBudget=frame.budget || execution.restoring;
  try {
  if(execution.restoring && execution.pending.length===0) {
    execution.restoring=false;
    if(frame.parked!==null) {yield frame.parked;frame.parked=null;frame.budget=false;}
  }
  dispatch: while (true) {
    if (!skipBudget && (++game.steps & 1023) === 0) {
      frame.pc=pc;frame.budget=true;frame.parked=0;yield 0;
      frame.parked=null;frame.budget=false;
    }
    skipBudget=false;
    switch(pc) {
    case 0:

    r.al = memoryAGet(r.ds, 0x1cbf);
    r.al |= memoryAGet(r.ds, 0x1cc0);
    r.al |= memoryAGet(r.ds, 0x1cc1);
    if (!r.al)
        { pc = 0x19439; continue dispatch; }
    r.ax = memoryAGet16(r.ds, 0x327d);
    r.dl = memoryAGet(r.ds, 0x327f);
    r.si = 0x0010;
    r.bx = memoryAGet16(r.ds, 0x1cc6);
    r.dh = memoryAGet(r.ds, 0x1cc8);
    r.di = 0x0020;
    r.cx = 0x0f1e;
    frame.pc=2097153;
case 2097153:
yield* sub_1a059();
frame.pc=2097154;
case 2097154:;
    return;
case 0x19439:
    flags.carry = false;

      return;
    default: throw new Error("Invalid control flow in sub_19410");
    }
  }
  } finally {execution.leave(frame);}
}

function* sub_19440() {
  let pc=0;
  const frame=execution.enter('sub_19440',pc);pc=frame.pc;
  let skipBudget=frame.budget || execution.restoring;
  try {
  if(execution.restoring && execution.pending.length===0) {
    execution.restoring=false;
    if(frame.parked!==null) {yield frame.parked;frame.parked=null;frame.budget=false;}
  }
  dispatch: while (true) {
    if (!skipBudget && (++game.steps & 1023) === 0) {
      frame.pc=pc;frame.budget=true;frame.parked=0;yield 0;
      frame.parked=null;frame.budget=false;
    }
    skipBudget=false;
    switch(pc) {
    case 0:

    memoryASet(r.ds, 0x1d59, 0x00);

      return;
    default: throw new Error("Invalid control flow in sub_19440");
    }
  }
  } finally {execution.leave(frame);}
}

function* sub_19446() {
  let pc=0;
  const frame=execution.enter('sub_19446',pc);pc=frame.pc;
  let skipBudget=frame.budget || execution.restoring;
  try {
  if(execution.restoring && execution.pending.length===0) {
    execution.restoring=false;
    if(frame.parked!==null) {yield frame.parked;frame.parked=null;frame.budget=false;}
  }
  dispatch: while (true) {
    if (!skipBudget && (++game.steps & 1023) === 0) {
      frame.pc=pc;frame.budget=true;frame.parked=0;yield 0;
      frame.parked=null;frame.budget=false;
    }
    skipBudget=false;
    switch(pc) {
    case 0:

    push(0x7777);
    r.ah = 0;
    frame.pc=2097153;
case 2097153:
yield* interrupt(0x1a);
frame.pc=2097154;
case 2097154:;
    if (r.dx != memoryAGet16(r.ds, 0x1d5a))
        { pc = 0x19451; continue dispatch; }
case 0x19450:
    assert(pop() == 0x7777);
    return;
case 0x19451:
    r.cx = r.dx;
    frame.pc=2097155;
case 2097155:
yield* sub_18608();
frame.pc=2097156;
case 2097156:;
    if (flags.zero)
        { pc = 0x19450; continue dispatch; }
    memoryASet16(r.ds, 0x1d5a, r.cx);
    frame.pc=2097157;
case 2097157:
yield* sub_19527();
frame.pc=2097158;
case 2097158:;
    if (flags.carry)
        { pc = 0x19450; continue dispatch; }
    if (memoryAGet(r.ds, 0x1d59) != 0x00)
        { pc = 0x1949d; continue dispatch; }
    if (memoryAGet(r.ds, 0x057b) == 0x86)
        { pc = 0x1947e; continue dispatch; }
    if (memoryAGet(r.ds, 0x057b) == 0x8e)
        { pc = 0x1947e; continue dispatch; }
    frame.pc=2097159;
case 2097159:
yield* sub_1a02d();
frame.pc=2097160;
case 2097160:;
    if (r.dl > 0x05)
        { pc = 0x19450; continue dispatch; }
case 0x1947e:
    frame.pc=2097161;
case 2097161:
yield* sub_18800();
frame.pc=2097162;
case 2097162:;
    r.dl += 0x03;
    memoryASet(r.ds, 0x1d5e, r.dl);
    frame.pc=2097163;
case 2097163:
yield* sub_1a02d();
frame.pc=2097164;
case 2097164:;
    r.dx &= 0x0007;
    r.cx += r.dx;
    r.cx += 0x0006;
    memoryASet16(r.ds, 0x1d5c, r.cx);
    memoryASet(r.ds, 0x1d59, 0x1b);
case 0x1949d:
    memoryASet(r.ds, 0x1d59, memoryAGet(r.ds, 0x1d59) - 1);
    r.cx = memoryAGet16(r.ds, 0x1d5c);
    r.dl = memoryAGet(r.ds, 0x1d5e);
    if (memoryAGet(r.ds, 0x1d59) <= 0x0d)
        { pc = 0x194c1; continue dispatch; }
    r.dl += memoryAGet(r.ds, 0x1d59);
    r.dl -= 0x0f;
    r.bx = 0x1b02;
    r.bh -= memoryAGet(r.ds, 0x1d59);
    { pc = 0x194cf; continue dispatch; }
case 0x194c1:
    r.dl += 0x0c;
    r.dl -= memoryAGet(r.ds, 0x1d59);
    r.bx = 0x0002;
    r.bh += memoryAGet(r.ds, 0x1d59);
case 0x194cf:
    memoryASet16(r.ds, 0x1d64, r.bx);
    memoryASet(r.ds, 0x1d5f, r.dl);
    frame.pc=2097165;
case 2097165:
yield* sub_19ee0();
frame.pc=2097166;
case 2097166:;
    memoryASet16(r.ds, 0x1d62, r.ax);
    frame.pc=2097167;
case 2097167:
yield* sub_1950c();
frame.pc=2097168;
case 2097168:;
    frame.pc=2097169;
case 2097169:
yield* sub_19527();
frame.pc=2097170;
case 2097170:;
    if (flags.carry)
        { pc = 0x194ec; continue dispatch; }
    if (memoryAGet(r.ds, 0x1d59) != 0x00)
        { pc = 0x194ed; continue dispatch; }
case 0x194ec:
    assert(pop() == 0x7777);
    return;
case 0x194ed:
    r.ax = 0xb800;
    r.es = r.ax;
    r.di = memoryAGet16(r.ds, 0x1d62);
    r.si = 0x1cf0;
    memoryASet16(r.ds, 0x1d60, r.di);
    r.cx = memoryAGet16(r.ds, 0x1d64);
    memoryASet16(r.ds, 0x1d66, r.cx);
    r.bp = 0x1d24;
    frame.pc=2097171;
case 2097171:
yield* sub_19efc();
frame.pc=2097172;
case 2097172:;
    assert(pop() == 0x7777);

      return;
    default: throw new Error("Invalid control flow in sub_19446");
    }
  }
  } finally {execution.leave(frame);}
}

function* sub_1950c() {
  let pc=0;
  const frame=execution.enter('sub_1950c',pc);pc=frame.pc;
  let skipBudget=frame.budget || execution.restoring;
  try {
  if(execution.restoring && execution.pending.length===0) {
    execution.restoring=false;
    if(frame.parked!==null) {yield frame.parked;frame.parked=null;frame.budget=false;}
  }
  dispatch: while (true) {
    if (!skipBudget && (++game.steps & 1023) === 0) {
      frame.pc=pc;frame.budget=true;frame.parked=0;yield 0;
      frame.parked=null;frame.budget=false;
    }
    skipBudget=false;
    switch(pc) {
    case 0:

    if (memoryAGet(r.ds, 0x1d59) == 0x1a)
        return;
    r.ax = 0xb800;
    r.es = r.ax;
    r.di = memoryAGet16(r.ds, 0x1d60);
    r.si = 0x1d24;
    r.cx = memoryAGet16(r.ds, 0x1d66);
    frame.pc=2097153;
case 2097153:
yield* sub_19fcd();
frame.pc=2097154;
case 2097154:;

      return;
    default: throw new Error("Invalid control flow in sub_1950c");
    }
  }
  } finally {execution.leave(frame);}
}

function* sub_19527() {
  let pc=0;
  const frame=execution.enter('sub_19527',pc);pc=frame.pc;
  let skipBudget=frame.budget || execution.restoring;
  try {
  if(execution.restoring && execution.pending.length===0) {
    execution.restoring=false;
    if(frame.parked!==null) {yield frame.parked;frame.parked=null;frame.budget=false;}
  }
  dispatch: while (true) {
    if (!skipBudget && (++game.steps & 1023) === 0) {
      frame.pc=pc;frame.budget=true;frame.parked=0;yield 0;
      frame.parked=null;frame.budget=false;
    }
    skipBudget=false;
    switch(pc) {
    case 0:

    if (memoryAGet(r.ds, 0x1d59) != 0x00)
        { pc = 0x19530; continue dispatch; }
    flags.carry = false;
    return;
case 0x19530:
    r.cx = memoryAGet16(r.ds, 0x1d64);
    r.tl = r.cl;
    r.cl = r.ch;
    r.ch = r.tl;
    r.ax = memoryAGet16(r.ds, 0x1d5c);
    r.dl = memoryAGet(r.ds, 0x1d5f);
    r.si = 0x0010;
    r.bx = memoryAGet16(r.ds, 0x0579);
    r.dh = memoryAGet(r.ds, 0x057b);
    r.di = 0x0018;
    r.ch = 0x0e;
    frame.pc=2097153;
case 2097153:
yield* sub_1a059();
frame.pc=2097154;
case 2097154:;
    if (!flags.carry)
        return;
    memoryASet(r.ds, 0x1d58, 0x01);

      return;
    default: throw new Error("Invalid control flow in sub_19527");
    }
  }
  } finally {execution.leave(frame);}
}

function* sub_19560() {
  let pc=0;
  const frame=execution.enter('sub_19560',pc);pc=frame.pc;
  let skipBudget=frame.budget || execution.restoring;
  try {
  if(execution.restoring && execution.pending.length===0) {
    execution.restoring=false;
    if(frame.parked!==null) {yield frame.parked;frame.parked=null;frame.budget=false;}
  }
  dispatch: while (true) {
    if (!skipBudget && (++game.steps & 1023) === 0) {
      frame.pc=pc;frame.budget=true;frame.parked=0;yield 0;
      frame.parked=null;frame.budget=false;
    }
    skipBudget=false;
    switch(pc) {
    case 0:

    memoryASet16(r.ds, 0x1f6c, 0x0000);
    r.ax = 0;
    r.dl = 0x01;
    if (memoryAGet16(r.ds, 0x0579) > 0x00a0)
        { pc = 0x19577; continue dispatch; }
    r.ax = 0x012c;
    r.dl = 0xff;
case 0x19577:
    memoryASet16(r.ds, 0x1f30, r.ax);
    memoryASet16(r.ds, 0x1f32, r.ax);
    memoryASet16(r.ds, 0x1f34, r.ax);
    memoryASet(r.ds, 0x1f3c, r.dl);
    memoryASet(r.ds, 0x1f3d, r.dl);
    memoryASet(r.ds, 0x1f3e, r.dl);
    memoryASet(r.ds, 0x1f48, 0x01);
    memoryASet(r.ds, 0x1f49, 0x01);
    memoryASet(r.ds, 0x1f4a, 0x01);
    memoryASet(r.ds, 0x1f50, 0x00);
    memoryASet(r.ds, 0x1f51, 0x00);
    memoryASet(r.ds, 0x1f52, 0x00);

      return;
    default: throw new Error("Invalid control flow in sub_19560");
    }
  }
  } finally {execution.leave(frame);}
}

function* sub_195ab() {
  let pc=0;
  const frame=execution.enter('sub_195ab',pc);pc=frame.pc;
  let skipBudget=frame.budget || execution.restoring;
  try {
  if(execution.restoring && execution.pending.length===0) {
    execution.restoring=false;
    if(frame.parked!==null) {yield frame.parked;frame.parked=null;frame.budget=false;}
  }
  dispatch: while (true) {
    if (!skipBudget && (++game.steps & 1023) === 0) {
      frame.pc=pc;frame.budget=true;frame.parked=0;yield 0;
      frame.parked=null;frame.budget=false;
    }
    skipBudget=false;
    switch(pc) {
    case 0:

    r.ah = 0;
    frame.pc=2097153;
case 2097153:
yield* interrupt(0x1a);
frame.pc=2097154;
case 2097154:;
    if (r.dx != memoryAGet16(r.ds, 0x1f65))
        { pc = 0x195b6; continue dispatch; }
case 0x195b5:
    return;
case 0x195b6:
    memoryASet16(r.ds, 0x1f65, r.dx);
    if (memoryAGet(r.ds, 0x055a) != 0x00)
        { pc = 0x195b5; continue dispatch; }
    r.bx = memoryAGet16(r.ds, 0x1f6c);
    r.bx++;
    if (r.bx < 0x0003)
        { pc = 0x195ce; continue dispatch; }
    r.bx = 0x0000;
case 0x195ce:
    memoryASet16(r.ds, 0x1f6c, r.bx);
    frame.pc=2097155;
case 2097155:
yield* sub_1988e();
frame.pc=2097156;
case 2097156:;
    if (flags.carry)
        { pc = 0x195b5; continue dispatch; }
    frame.pc=2097157;
case 2097157:
yield* sub_19797();
frame.pc=2097158;
case 2097158:;
    if (flags.carry)
        { pc = 0x195b5; continue dispatch; }
    r.bx = memoryAGet16(r.ds, 0x1f6c);
    if (memoryAGet(r.ds, r.bx + 8016) == 0x00)
        { pc = 0x1961b; continue dispatch; }
    r.ah = 0;
    frame.pc=2097159;
case 2097159:
yield* interrupt(0x1a);
frame.pc=2097160;
case 2097160:;
    r.bx = memoryAGet16(r.ds, 0x1f6c);
    r.bl <<= 1;
    r.dx -= memoryAGet16(r.ds, r.bx + 8019);
    if (r.dx < 0x0036)
        { pc = 0x195b5; continue dispatch; }
    r.dl = 0x01;
    r.ax = 0x0000;
    if (memoryAGet16(r.ds, 0x0579) > 0x00a0)
        { pc = 0x1960c; continue dispatch; }
    r.ax = 0x012c;
    r.dl = 0xff;
case 0x1960c:
    memoryASet16(r.ds, r.bx + 7984, r.ax);
    r.bl >>= 1;
    memoryASet(r.ds, r.bx + 8016, 0x00);
    memoryASet(r.ds, r.bx + 7996, r.dl);
case 0x1961b:
    r.dl = memoryAGet(r.ds, r.bx + 7996);
    memoryASet(r.ds, r.bx + 7999, r.dl);
    if (memoryAGet(r.ds, 0x1664) == 0x00)
        { pc = 0x19633; continue dispatch; }
    memoryASet16(r.ds, 0x1f69, 0x000c);
    { pc = 0x19648; continue dispatch; }
case 0x19633:
    r.ax = 0x0008;
    if (memoryAGet(r.ds, 0x057b) <= 0x60)
        { pc = 0x1963f; continue dispatch; }
    r.al >>= 1;
case 0x1963f:
    memoryASet16(r.ds, 0x1f69, r.ax);
    if (r.bx != memoryAGet16(r.ds, 0x052f))
        { pc = 0x19655; continue dispatch; }
case 0x19648:
    if (memoryAGet(r.ds, r.bx + 7996) != 0x00)
        { pc = 0x19655; continue dispatch; }
    frame.pc=2097161;
case 2097161:
yield* sub_1a02d();
frame.pc=2097162;
case 2097162:;
    { pc = 0x196ba; continue dispatch; }
case 0x19655:
    if (memoryAGet(r.ds, 0x055c) == 0x00)
        { pc = 0x19696; continue dispatch; }
    r.al = memoryAGet(r.ds, r.bx + 7990);
    if (r.al > memoryAGet(r.ds, 0x057b))
        { pc = 0x19696; continue dispatch; }
    r.al += 0x10;
    if (r.al < memoryAGet(r.ds, 0x057b))
        { pc = 0x19696; continue dispatch; }
    frame.pc=2097163;
case 2097163:
yield* sub_1a02d();
frame.pc=2097164;
case 2097164:;
    r.si = memoryAGet16(r.ds, 0x0008);
    if (r.dl > memoryAGet(r.ds, r.si + 8046))
        { pc = 0x19696; continue dispatch; }
    memoryASet16(r.ds, 0x1f69, 0x000c);
    r.al = 0x01;
    r.bl <<= 1;
    r.cx = memoryAGet16(r.ds, r.bx + 7984);
    r.bl >>= 1;
    if (r.cx < memoryAGet16(r.ds, 0x0579))
        { pc = 0x19693; continue dispatch; }
    r.al = 0xff;
case 0x19693:
    { pc = 0x196c2; continue dispatch; }
case 0x19696:
    r.cl = 0x18;
    if (memoryAGet(r.ds, 0x057b) <= 0x60)
        { pc = 0x196aa; continue dispatch; }
    r.cl = 0x28;
    if (memoryAGet(r.ds, r.bx + 7996) != 0x00)
        { pc = 0x196aa; continue dispatch; }
    r.cl = 0x10;
case 0x196aa:
    frame.pc=2097165;
case 2097165:
yield* sub_1a02d();
frame.pc=2097166;
case 2097166:;
    if (r.dl > r.cl)
        { pc = 0x196c6; continue dispatch; }
    r.al = 0x00;
    if (memoryAGet(r.ds, r.bx + 7996) != 0x00)
        { pc = 0x196c2; continue dispatch; }
case 0x196ba:
    r.al = r.dl;
    r.al &= 0x01;
    if (r.al != 0)
        { pc = 0x196c2; continue dispatch; }
    r.al = 0xff;
case 0x196c2:
    memoryASet(r.ds, r.bx + 7996, r.al);
case 0x196c6:
    r.dl = memoryAGet(r.ds, r.bx + 7996);
    r.bl <<= 1;
    r.ax = memoryAGet16(r.ds, r.bx + 7984);
    if (r.dl < 0x01)
        { pc = 0x196f2; continue dispatch; }
    if (r.dl != 0x01)
        { pc = 0x196e8; continue dispatch; }
    r.ax += memoryAGet16(r.ds, 0x1f69);
    if (r.ax < 0x012f)
        { pc = 0x196f2; continue dispatch; }
    r.ax = 0x012e;
    r.dl = 0xff;
    { pc = 0x196f2; continue dispatch; }
case 0x196e8:
    flags.carry = r.ax < memoryAGet16(r.ds, 0x1f69);
    r.ax -= memoryAGet16(r.ds, 0x1f69);
    if (!flags.carry)
        { pc = 0x196f2; continue dispatch; }
    r.ax = 0;
    r.dl = 0x01;
case 0x196f2:
    memoryASet16(r.ds, r.bx + 7984, r.ax);
    r.bl >>= 1;
    memoryASet(r.ds, r.bx + 7996, r.dl);
    r.dl = memoryAGet(r.ds, r.bx + 7990);
    r.cx = r.ax;
    frame.pc=2097167;
case 2097167:
yield* sub_19ee0();
frame.pc=2097168;
case 2097168:;
    memoryASet16(r.ds, 0x1f4b, r.ax);
    r.bx = memoryAGet16(r.ds, 0x1f6c);
    if (memoryAGet(r.ds, r.bx + 8008) != 0x00)
        { pc = 0x19720; continue dispatch; }
    r.al = memoryAGet(r.ds, r.bx + 7996);
    r.al |= memoryAGet(r.ds, r.bx + 7999);
    if (!r.al)
        { pc = 0x19720; continue dispatch; }
    frame.pc=2097169;
case 2097169:
yield* sub_1977d();
frame.pc=2097170;
case 2097170:;
case 0x19720:
    frame.pc=2097171;
case 2097171:
yield* sub_1988e();
frame.pc=2097172;
case 2097172:;
    if (flags.carry)
        { pc = 0x1972a; continue dispatch; }
    frame.pc=2097173;
case 2097173:
yield* sub_19797();
frame.pc=2097174;
case 2097174:;
    if (!flags.carry)
        { pc = 0x1972b; continue dispatch; }
case 0x1972a:
    return;
case 0x1972b:
    r.bx = memoryAGet16(r.ds, 0x1f6c);
    memoryASet(r.ds, r.bx + 8008, 0x00);
    if (memoryAGet(r.ds, r.bx + 7996) != 0x00)
        { pc = 0x19748; continue dispatch; }
    if (memoryAGet(r.ds, r.bx + 7999) == 0x00)
        return;
    r.si = 0x1e30;
    { pc = 0x19763; continue dispatch; }
case 0x19748:
    r.si = 0x1e50;
    memoryASet(r.ds, r.bx + 8013, memoryAGet(r.ds, r.bx + 8013) + 1);
    if (memoryAGet(r.ds, r.bx + 8013) & 0x01)
        { pc = 0x19759; continue dispatch; }
    r.si += 0x0020;
case 0x19759:
    if (memoryAGet(r.ds, r.bx + 7996) == 0x01)
        { pc = 0x19763; continue dispatch; }
    r.si += 0x0040;
case 0x19763:
    r.bl <<= 1;
    r.di = memoryAGet16(r.ds, 0x1f4b);
    memoryASet16(r.ds, r.bx + 8002, r.di);
    r.ax = 0xb800;
    r.es = r.ax;
    r.bp = memoryAGet16(r.ds, r.bx + 8025);
    r.cx = 0x0802;
    frame.pc=2097175;
case 2097175:
yield* sub_19f65();
frame.pc=2097176;
case 2097176:;

      return;
    default: throw new Error("Invalid control flow in sub_195ab");
    }
  }
  } finally {execution.leave(frame);}
}

function* sub_1977d() {
  let pc=0;
  const frame=execution.enter('sub_1977d',pc);pc=frame.pc;
  let skipBudget=frame.budget || execution.restoring;
  try {
  if(execution.restoring && execution.pending.length===0) {
    execution.restoring=false;
    if(frame.parked!==null) {yield frame.parked;frame.parked=null;frame.budget=false;}
  }
  dispatch: while (true) {
    if (!skipBudget && (++game.steps & 1023) === 0) {
      frame.pc=pc;frame.budget=true;frame.parked=0;yield 0;
      frame.parked=null;frame.budget=false;
    }
    skipBudget=false;
    switch(pc) {
    case 0:

    r.bx = memoryAGet16(r.ds, 0x1f6c);
    r.bl <<= 1;
    r.ax = 0xb800;
    r.es = r.ax;
    r.di = memoryAGet16(r.ds, r.bx + 8002);
    r.si = memoryAGet16(r.ds, r.bx + 8025);
    r.cx = 0x0802;
    frame.pc=2097153;
case 2097153:
yield* sub_19fcd();
frame.pc=2097154;
case 2097154:;

      return;
    default: throw new Error("Invalid control flow in sub_1977d");
    }
  }
  } finally {execution.leave(frame);}
}

function* sub_19797() {
  let pc=0;
  const frame=execution.enter('sub_19797',pc);pc=frame.pc;
  let skipBudget=frame.budget || execution.restoring;
  try {
  if(execution.restoring && execution.pending.length===0) {
    execution.restoring=false;
    if(frame.parked!==null) {yield frame.parked;frame.parked=null;frame.budget=false;}
  }
  dispatch: while (true) {
    if (!skipBudget && (++game.steps & 1023) === 0) {
      frame.pc=pc;frame.budget=true;frame.parked=0;yield 0;
      frame.parked=null;frame.budget=false;
    }
    skipBudget=false;
    switch(pc) {
    case 0:

    r.bx = memoryAGet16(r.ds, 0x1f6c);
    r.dl = memoryAGet(r.ds, r.bx + 7990);
    r.bl <<= 1;
    r.ax = memoryAGet16(r.ds, r.bx + 7984);
    r.si = 0x0010;
    r.bx = memoryAGet16(r.ds, 0x0579);
    r.dh = memoryAGet(r.ds, 0x057b);
    r.di = 0x0018;
    r.cx = 0x0e08;
    frame.pc=2097153;
case 2097153:
yield* sub_1a059();
frame.pc=2097154;
case 2097154:;
    if (flags.carry)
        { pc = 0x197be; continue dispatch; }
    return;
case 0x197be:
    r.bx = memoryAGet16(r.ds, 0x1f6c);
    if (memoryAGet(r.ds, r.bx + 8016) != 0x00)
        { pc = 0x1983c; continue dispatch; }
    if (memoryAGet(r.ds, 0x057c) < 0x26)
        { pc = 0x1983c; continue dispatch; }
    if (memoryAGet(r.ds, 0x055c) == 0x00)
        { pc = 0x1983e; continue dispatch; }
    memoryASet(r.ds, 0x055c, 0x00);
    memoryASet(r.ds, 0x055b, 0x11);
    memoryASet(r.ds, 0x0571, 0x01);
    memoryASet(r.ds, 0x056e, 0x00);
    r.bx = memoryAGet16(r.ds, 0x1f6c);
    r.bl <<= 1;
    r.di = memoryAGet16(r.ds, r.bx + 8002);
    if (memoryAGet16(r.ds, r.bx + 7984) < 0x0010)
        { pc = 0x197ff; continue dispatch; }
    r.di -= 0x0004;
case 0x197ff:
    memoryASet16(r.ds, 0x1f67, r.di);
    r.ax = 0xb800;
    r.es = r.ax;
    r.si = 0x1d70;
    r.bp = 0x000e;
    r.cx = 0x0806;
    frame.pc=2097155;
case 2097155:
yield* sub_19efc();
frame.pc=2097156;
case 2097156:;
    r.ah = 0;
    frame.pc=2097157;
case 2097157:
yield* interrupt(0x1a);
frame.pc=2097158;
case 2097158:;
    memoryASet16(r.ds, 0x1f65, r.dx);
case 0x1981c:
    frame.pc=2097159;
case 2097159:
yield* sub_1ccc0();
frame.pc=2097160;
case 2097160:;
    r.ah = 0;
    frame.pc=2097161;
case 2097161:
yield* interrupt(0x1a);
frame.pc=2097162;
case 2097162:;
    r.dx -= memoryAGet16(r.ds, 0x1f65);
    if (r.dx < 0x0008)
        { pc = 0x1981c; continue dispatch; }
    frame.pc=2097163;
case 2097163:
yield* sub_1cd51();
frame.pc=2097164;
case 2097164:;
    r.di = memoryAGet16(r.ds, 0x1f67);
    r.si = 0x000e;
    r.cx = 0x0806;
    frame.pc=2097165;
case 2097165:
yield* sub_19fcd();
frame.pc=2097166;
case 2097166:;
case 0x1983c:
    flags.carry = true;
    return;
case 0x1983e:
    r.ah = 0;
    frame.pc=2097167;
case 2097167:
yield* interrupt(0x1a);
frame.pc=2097168;
case 2097168:;
    r.bx = memoryAGet16(r.ds, 0x1f6c);
    memoryASet(r.ds, r.bx + 8016, 0x01);
    memoryASet(r.ds, r.bx + 7996, 0x01);
    r.bl <<= 1;
    memoryASet16(r.ds, r.bx + 8019, r.dx);
    frame.pc=2097169;
case 2097169:
yield* sub_18413();
frame.pc=2097170;
case 2097170:;
    r.bx = memoryAGet16(r.ds, 0x1f6c);
    r.bl <<= 1;
    r.si = memoryAGet16(r.ds, r.bx + 8031);
    r.di = memoryAGet16(r.ds, r.bx + 8002);
    r.ax = 0xb800;
    r.es = r.ax;
    r.bp = 0x000e;
    r.cx = 0x0802;
    frame.pc=2097171;
case 2097171:
yield* sub_19efc();
frame.pc=2097172;
case 2097172:;
    frame.pc=2097173;
case 2097173:
yield* sub_18354();
frame.pc=2097174;
case 2097174:;
    r.bx = memoryAGet16(r.ds, 0x1f6c);
    r.al = memoryAGet(r.ds, r.bx + 7993);
    frame.pc=2097175;
case 2097175:
yield* sub_19936();
frame.pc=2097176;
case 2097176:;
    r.ax = 0x03e8;
    r.bx = 0x02ee;
    frame.pc=2097177;
case 2097177:
yield* sub_1cb6b();
frame.pc=2097178;
case 2097178:;
    flags.carry = true;

      return;
    default: throw new Error("Invalid control flow in sub_19797");
    }
  }
  } finally {execution.leave(frame);}
}

function* sub_1988e() {
  let pc=0;
  const frame=execution.enter('sub_1988e',pc);pc=frame.pc;
  let skipBudget=frame.budget || execution.restoring;
  try {
  if(execution.restoring && execution.pending.length===0) {
    execution.restoring=false;
    if(frame.parked!==null) {yield frame.parked;frame.parked=null;frame.budget=false;}
  }
  dispatch: while (true) {
    if (!skipBudget && (++game.steps & 1023) === 0) {
      frame.pc=pc;frame.budget=true;frame.parked=0;yield 0;
      frame.parked=null;frame.budget=false;
    }
    skipBudget=false;
    switch(pc) {
    case 0:

    if (memoryAGet(r.ds, 0x1673) != 0x00)
        { pc = 0x19897; continue dispatch; }
    flags.carry = false;
    return;
case 0x19897:
    r.bx = memoryAGet16(r.ds, 0x1f6c);
    r.dl = memoryAGet(r.ds, r.bx + 7990);
    r.bl <<= 1;
    r.ax = memoryAGet16(r.ds, r.bx + 7984);
    r.si = 0x0010;
    r.di = r.si;
    r.bx = memoryAGet16(r.ds, 0x1671);
    r.dh = memoryAGet(r.ds, 0x1673);
    r.cx = 0x0c08;
    frame.pc=2097153;
case 2097153:
yield* sub_1a059();
frame.pc=2097154;
case 2097154:;

      return;
    default: throw new Error("Invalid control flow in sub_1988e");
    }
  }
  } finally {execution.leave(frame);}
}

function* sub_198c0() {
  let pc=0;
  const frame=execution.enter('sub_198c0',pc);pc=frame.pc;
  let skipBudget=frame.budget || execution.restoring;
  try {
  if(execution.restoring && execution.pending.length===0) {
    execution.restoring=false;
    if(frame.parked!==null) {yield frame.parked;frame.parked=null;frame.budget=false;}
  }
  dispatch: while (true) {
    if (!skipBudget && (++game.steps & 1023) === 0) {
      frame.pc=pc;frame.budget=true;frame.parked=0;yield 0;
      frame.parked=null;frame.budget=false;
    }
    skipBudget=false;
    switch(pc) {
    case 0:

    push(r.ds);
    r.es = pop();
    r.cx = 0x0007;
    r.si = 0x1f82;
case 0x198c8:
    lodsb();
    r.bx = 0x0007;
    r.bx -= r.cx;
    if (--r.cx && r.al == memoryAGet(r.ds, r.bx + 8073))
        { pc = 0x198c8; continue dispatch; }
    if (r.al > memoryAGet(r.ds, r.bx + 8073))
        { pc = 0x198d7; continue dispatch; }
    return;
case 0x198d7:
    r.si = 0x1f82;
    r.di = 0x1f89;
    r.cx = 0x0007;
    rep_movsb();

      return;
    default: throw new Error("Invalid control flow in sub_198c0");
    }
  }
  } finally {execution.leave(frame);}
}

function* sub_198e3() {
  let pc=0;
  const frame=execution.enter('sub_198e3',pc);pc=frame.pc;
  let skipBudget=frame.budget || execution.restoring;
  try {
  if(execution.restoring && execution.pending.length===0) {
    execution.restoring=false;
    if(frame.parked!==null) {yield frame.parked;frame.parked=null;frame.budget=false;}
  }
  dispatch: while (true) {
    if (!skipBudget && (++game.steps & 1023) === 0) {
      frame.pc=pc;frame.budget=true;frame.parked=0;yield 0;
      frame.parked=null;frame.budget=false;
    }
    skipBudget=false;
    switch(pc) {
    case 0:

    r.al = memoryAGet(r.ds, 0x1f80);
    if (r.al != memoryAGet(r.ds, 0x1f81))
        { pc = 0x198ed; continue dispatch; }
    return;
case 0x198ed:
    memoryASet(r.ds, 0x1f81, r.al);
    r.ah = 0;
    r.cl = 0x04;
    r.ax <<= r.cl;
    r.ax += 0x2720;
    r.si = r.ax;
    r.ax = 0xb800;
    r.es = r.ax;
    r.di = 0x1260;
    r.cx = 0x0801;
    frame.pc=2097153;
case 2097153:
yield* sub_19fcd();
frame.pc=2097154;
case 2097154:;

      return;
    default: throw new Error("Invalid control flow in sub_198e3");
    }
  }
  } finally {execution.leave(frame);}
}

function* sub_1990a() {
  let pc=0;
  const frame=execution.enter('sub_1990a',pc);pc=frame.pc;
  let skipBudget=frame.budget || execution.restoring;
  try {
  if(execution.restoring && execution.pending.length===0) {
    execution.restoring=false;
    if(frame.parked!==null) {yield frame.parked;frame.parked=null;frame.budget=false;}
  }
  dispatch: while (true) {
    if (!skipBudget && (++game.steps & 1023) === 0) {
      frame.pc=pc;frame.budget=true;frame.parked=0;yield 0;
      frame.parked=null;frame.budget=false;
    }
    skipBudget=false;
    switch(pc) {
    case 0:

    r.di = 0x1f82;
    frame.pc=2097153;
case 2097153:
yield* sub_19918();
frame.pc=2097154;
case 2097154:;

      return;
    default: throw new Error("Invalid control flow in sub_1990a");
    }
  }
  } finally {execution.leave(frame);}
}

function* sub_19911() {
  let pc=0;
  const frame=execution.enter('sub_19911',pc);pc=frame.pc;
  let skipBudget=frame.budget || execution.restoring;
  try {
  if(execution.restoring && execution.pending.length===0) {
    execution.restoring=false;
    if(frame.parked!==null) {yield frame.parked;frame.parked=null;frame.budget=false;}
  }
  dispatch: while (true) {
    if (!skipBudget && (++game.steps & 1023) === 0) {
      frame.pc=pc;frame.budget=true;frame.parked=0;yield 0;
      frame.parked=null;frame.budget=false;
    }
    skipBudget=false;
    switch(pc) {
    case 0:

    r.di = 0x1f89;
    frame.pc=2097153;
case 2097153:
yield* sub_19918();
frame.pc=2097154;
case 2097154:;

      return;
    default: throw new Error("Invalid control flow in sub_19911");
    }
  }
  } finally {execution.leave(frame);}
}

function* sub_19918() {
  let pc=0;
  const frame=execution.enter('sub_19918',pc);pc=frame.pc;
  let skipBudget=frame.budget || execution.restoring;
  try {
  if(execution.restoring && execution.pending.length===0) {
    execution.restoring=false;
    if(frame.parked!==null) {yield frame.parked;frame.parked=null;frame.budget=false;}
  }
  dispatch: while (true) {
    if (!skipBudget && (++game.steps & 1023) === 0) {
      frame.pc=pc;frame.budget=true;frame.parked=0;yield 0;
      frame.parked=null;frame.budget=false;
    }
    skipBudget=false;
    switch(pc) {
    case 0:

    push(r.ds);
    r.es = pop();
    r.cx = 0x0007;
    r.al = 0;
    rep_stosb();

      return;
    default: throw new Error("Invalid control flow in sub_19918");
    }
  }
  } finally {execution.leave(frame);}
}

function* sub_19922() {
  let pc=0;
  const frame=execution.enter('sub_19922',pc);pc=frame.pc;
  let skipBudget=frame.budget || execution.restoring;
  try {
  if(execution.restoring && execution.pending.length===0) {
    execution.restoring=false;
    if(frame.parked!==null) {yield frame.parked;frame.parked=null;frame.budget=false;}
  }
  dispatch: while (true) {
    if (!skipBudget && (++game.steps & 1023) === 0) {
      frame.pc=pc;frame.budget=true;frame.parked=0;yield 0;
      frame.parked=null;frame.budget=false;
    }
    skipBudget=false;
    switch(pc) {
    case 0:

    r.bx = 0x1f89;
    r.di = 0x12ca;
    frame.pc=2097153;
case 2097153:
yield* sub_19969();
frame.pc=2097154;
case 2097154:;

      return;
    default: throw new Error("Invalid control flow in sub_19922");
    }
  }
  } finally {execution.leave(frame);}
}

function* sub_1992c() {
  let pc=0;
  const frame=execution.enter('sub_1992c',pc);pc=frame.pc;
  let skipBudget=frame.budget || execution.restoring;
  try {
  if(execution.restoring && execution.pending.length===0) {
    execution.restoring=false;
    if(frame.parked!==null) {yield frame.parked;frame.parked=null;frame.budget=false;}
  }
  dispatch: while (true) {
    if (!skipBudget && (++game.steps & 1023) === 0) {
      frame.pc=pc;frame.budget=true;frame.parked=0;yield 0;
      frame.parked=null;frame.budget=false;
    }
    skipBudget=false;
    switch(pc) {
    case 0:

    r.bx = 0x1f82;
    r.di = 0x143c;
    frame.pc=2097153;
case 2097153:
yield* sub_19969();
frame.pc=2097154;
case 2097154:;

      return;
    default: throw new Error("Invalid control flow in sub_1992c");
    }
  }
  } finally {execution.leave(frame);}
}

function* sub_19936() {
  let pc=0;
  const frame=execution.enter('sub_19936',pc);pc=frame.pc;
  let skipBudget=frame.budget || execution.restoring;
  try {
  if(execution.restoring && execution.pending.length===0) {
    execution.restoring=false;
    if(frame.parked!==null) {yield frame.parked;frame.parked=null;frame.budget=false;}
  }
  dispatch: while (true) {
    if (!skipBudget && (++game.steps & 1023) === 0) {
      frame.pc=pc;frame.budget=true;frame.parked=0;yield 0;
      frame.parked=null;frame.budget=false;
    }
    skipBudget=false;
    switch(pc) {
    case 0:

    r.cx = 0x0006;
case 0x19939:
    r.bx = r.cx;
    r.ah = 0x00;
    r.al += memoryAGet(r.ds, r.bx + 8065);
    aaa();
    memoryASet(r.ds, r.bx + 8065, r.al);
    r.al = r.ah;
    if (--r.cx)
        { pc = 0x19939; continue dispatch; }
    frame.pc=2097153;
case 2097153:
yield* sub_1992c();
frame.pc=2097154;
case 2097154:;

      return;
    default: throw new Error("Invalid control flow in sub_19936");
    }
  }
  } finally {execution.leave(frame);}
}

function* sub_1994e() {
  let pc=0;
  const frame=execution.enter('sub_1994e',pc);pc=frame.pc;
  let skipBudget=frame.budget || execution.restoring;
  try {
  if(execution.restoring && execution.pending.length===0) {
    execution.restoring=false;
    if(frame.parked!==null) {yield frame.parked;frame.parked=null;frame.budget=false;}
  }
  dispatch: while (true) {
    if (!skipBudget && (++game.steps & 1023) === 0) {
      frame.pc=pc;frame.budget=true;frame.parked=0;yield 0;
      frame.parked=null;frame.budget=false;
    }
    skipBudget=false;
    switch(pc) {
    case 0:

    push(r.cx);
    push(r.ax);
    push(r.bx);
    flags.carry = false;
    r.tx = flags.carry | (flags.zero << 1);
    push(r.tx);
    r.cx = 0x0007;
case 0x19956:
    r.tx = pop();
    flags.carry = r.tx & 1;
    flags.zero = (r.tx << 1) & 1;
    r.bx = r.cx;
    flags.carry = r.bx == 0;
    r.bx--;
    r.al = memoryAGet(r.ds, r.bx + r.di);
    r.al += memoryAGet(r.ds, r.bx + r.si) + flags.carry;
    aaa();
    memoryASet(r.ds, r.bx + r.di, r.al);
    r.tx = flags.carry | (flags.zero << 1);
    push(r.tx);
    if (--r.cx)
        { pc = 0x19956; continue dispatch; }
    r.tx = pop();
    flags.carry = r.tx & 1;
    flags.zero = (r.tx << 1) & 1;
    r.bx = pop();
    r.ax = pop();
    r.cx = pop();

      return;
    default: throw new Error("Invalid control flow in sub_1994e");
    }
  }
  } finally {execution.leave(frame);}
}

function* sub_19969() {
  let pc=0;
  const frame=execution.enter('sub_19969',pc);pc=frame.pc;
  let skipBudget=frame.budget || execution.restoring;
  try {
  if(execution.restoring && execution.pending.length===0) {
    execution.restoring=false;
    if(frame.parked!==null) {yield frame.parked;frame.parked=null;frame.budget=false;}
  }
  dispatch: while (true) {
    if (!skipBudget && (++game.steps & 1023) === 0) {
      frame.pc=pc;frame.budget=true;frame.parked=0;yield 0;
      frame.parked=null;frame.budget=false;
    }
    skipBudget=false;
    switch(pc) {
    case 0:

    r.ax = 0xb800;
    r.es = r.ax;
    memoryASet16(r.ds, 0x1f90, r.di);
    memoryASet16(r.ds, 0x1f93, r.bx);
    memoryASet(r.ds, 0x1f92, 0x00);
case 0x1997b:
    r.bx = memoryAGet16(r.ds, 0x1f93);
    r.al = memoryAGet(r.ds, r.bx);
    r.ah = 0;
    r.cl = 0x04;
    r.ax <<= r.cl;
    r.ax += 0x2720;
    r.si = r.ax;
    r.di = memoryAGet16(r.ds, 0x1f90);
    r.cx = 0x0801;
    frame.pc=2097153;
case 2097153:
yield* sub_19fcd();
frame.pc=2097154;
case 2097154:;
    memoryASet16(r.ds, 0x1f90, memoryAGet16(r.ds, 0x1f90) + 0x0002);
    memoryASet16(r.ds, 0x1f93, memoryAGet16(r.ds, 0x1f93) + 1);
    memoryASet(r.ds, 0x1f92, memoryAGet(r.ds, 0x1f92) + 1);
    if (memoryAGet(r.ds, 0x1f92) == 0x07)
        return;
    if (memoryAGet(r.ds, 0x1f92) != 0x03)
        { pc = 0x1997b; continue dispatch; }
    memoryASet16(r.ds, 0x1f90, memoryAGet16(r.ds, 0x1f90) + 0x0002);
    { pc = 0x1997b; continue dispatch; }

      return;
    default: throw new Error("Invalid control flow in sub_19969");
    }
  }
  } finally {execution.leave(frame);}
}

function* sub_199c0() {
  let pc=0;
  const frame=execution.enter('sub_199c0',pc);pc=frame.pc;
  let skipBudget=frame.budget || execution.restoring;
  try {
  if(execution.restoring && execution.pending.length===0) {
    execution.restoring=false;
    if(frame.parked!==null) {yield frame.parked;frame.parked=null;frame.budget=false;}
  }
  dispatch: while (true) {
    if (!skipBudget && (++game.steps & 1023) === 0) {
      frame.pc=pc;frame.budget=true;frame.parked=0;yield 0;
      frame.parked=null;frame.budget=false;
    }
    skipBudget=false;
    switch(pc) {
    case 0:

    r.ax = 0xb800;
    r.es = r.ax;
    if (memoryAGet16(r.ds, 0x0004) != 0x0002)
        { pc = 0x19a1e; continue dispatch; }
    flags.direction = false;
    r.di = 0;
    r.ax = 0xaaaa;
    r.cx = 0x0050;
    rep_stosw();
    r.di = 0x2000;
    r.cx = 0x0050;
    rep_stosw();
    memoryASet16(r.ds, 0x2654, 0x0000);
case 0x199e5:
    frame.pc=2097153;
case 2097153:
yield* sub_1a02d();
frame.pc=2097154;
case 2097154:;
    r.dx &= 0x0018;
    if (r.dl == memoryAGet(r.ds, 0x2653))
        { pc = 0x199e5; continue dispatch; }
    memoryASet(r.ds, 0x2653, r.dl);
    r.bx = memoryAGet16(r.ds, 0x2654);
    memoryASet(r.ds, r.bx + 9814, r.dl);
    r.dx += 0x2020;
    r.si = r.dx;
    r.di = r.bx;
    r.di <<= 1;
    r.di += 0x00a0;
    r.cx = 0x0401;
    frame.pc=2097155;
case 2097155:
yield* sub_19fcd();
frame.pc=2097156;
case 2097156:;
    memoryASet16(r.ds, 0x2654, memoryAGet16(r.ds, 0x2654) + 1);
    if (memoryAGet16(r.ds, 0x2654) < 0x0028)
        { pc = 0x199e5; continue dispatch; }
    return;
case 0x19a1e:
    if (memoryAGet16(r.ds, 0x0004) != 0x0007)
        { pc = 0x19a29; continue dispatch; }
    frame.pc=2097157;
case 2097157:
yield* sub_1a23f();
frame.pc=2097158;
case 2097158:;
    return;
case 0x19a29:
    if (memoryAGet16(r.ds, 0x0004) != 0x0006)
        { pc = 0x19a6e; continue dispatch; }
    r.ax = 0;
    frame.pc=2097159;
case 2097159:
yield* sub_19bd0();
frame.pc=2097160;
case 2097160:;
    r.bx = 0x2570;
    r.ax = 0x064a;
    frame.pc=2097161;
case 2097161:
yield* sub_19d54();
frame.pc=2097162;
case 2097162:;
    memoryASet16(r.ds, 0x2650, 0x0048);
    memoryASet(r.ds, 0x2652, 0x38);
    r.ax = 0x0dd2;
    frame.pc=2097163;
case 2097163:
yield* sub_19b88();
frame.pc=2097164;
case 2097164:;
    r.ax = 0x0df6;
    frame.pc=2097165;
case 2097165:
yield* sub_19ba0();
frame.pc=2097166;
case 2097166:;
    r.si = 0x1fa0;
    r.di = 0x067e;
    r.cx = 0x1002;
    frame.pc=2097167;
case 2097167:
yield* sub_19fcd();
frame.pc=2097168;
case 2097168:;
    r.bx = 0x2344;
    r.ax = 0x0b84;
    frame.pc=2097169;
case 2097169:
yield* sub_19d54();
frame.pc=2097170;
case 2097170:;
    frame.pc=2097171;
case 2097171:
yield* sub_1bd77();
frame.pc=2097172;
case 2097172:;
    return;
case 0x19a6e:
    if (memoryAGet16(r.ds, 0x0004) != 0x0005)
        { pc = 0x19abd; continue dispatch; }
    r.ax = 0x0640;
    frame.pc=2097173;
case 2097173:
yield* sub_19bd0();
frame.pc=2097174;
case 2097174:;
    r.bx = 0x2570;
    r.ax = 0x0cb6;
    frame.pc=2097175;
case 2097175:
yield* sub_19d54();
frame.pc=2097176;
case 2097176:;
    memoryASet16(r.ds, 0x2650, 0x00f8);
    memoryASet(r.ds, 0x2652, 0x60);
    r.ax = 0x140e;
    frame.pc=2097177;
case 2097177:
yield* sub_19b88();
frame.pc=2097178;
case 2097178:;
    r.ax = 0x1434;
    frame.pc=2097179;
case 2097179:
yield* sub_19ba0();
frame.pc=2097180;
case 2097180:;
    r.ax = 0x143e;
    frame.pc=2097181;
case 2097181:
yield* sub_19ba0();
frame.pc=2097182;
case 2097182:;
    r.ax = 0x16a0;
    frame.pc=2097183;
case 2097183:
yield* sub_19bb8();
frame.pc=2097184;
case 2097184:;
    r.bx = 0x2344;
    r.ax = 0x1184;
    frame.pc=2097185;
case 2097185:
yield* sub_19d54();
frame.pc=2097186;
case 2097186:;
    r.si = 0x1fe0;
    r.di = 0x0dd6;
    r.cx = 0x1002;
    frame.pc=2097187;
case 2097187:
yield* sub_19fcd();
frame.pc=2097188;
case 2097188:;
    return;
case 0x19abd:
    if (memoryAGet16(r.ds, 0x0004) != 0x0004)
        { pc = 0x19aee; continue dispatch; }
    r.ax = 0x0640;
    frame.pc=2097189;
case 2097189:
yield* sub_19bd0();
frame.pc=2097190;
case 2097190:;
    r.bx = 0x2570;
    r.ax = 0x0cba;
    frame.pc=2097191;
case 2097191:
yield* sub_19d54();
frame.pc=2097192;
case 2097192:;
    memoryASet16(r.ds, 0x2650, 0x0108);
    memoryASet(r.ds, 0x2652, 0x60);
    r.ax = 0x1439;
    frame.pc=2097193;
case 2097193:
yield* sub_19b88();
frame.pc=2097194;
case 2097194:;
    r.ax = 0x16c0;
    frame.pc=2097195;
case 2097195:
yield* sub_19b75();
frame.pc=2097196;
case 2097196:;
    frame.pc=2097197;
case 2097197:
yield* sub_1b1ce();
frame.pc=2097198;
case 2097198:;
    return;
case 0x19aee:
    if (memoryAGet16(r.ds, 0x0004) != 0x0003)
        { pc = 0x19b39; continue dispatch; }
    r.ax = 0x0640;
    frame.pc=2097199;
case 2097199:
yield* sub_19bd0();
frame.pc=2097200;
case 2097200:;
    r.bx = 0x2570;
    r.ax = 0x0c90;
    frame.pc=2097201;
case 2097201:
yield* sub_19d54();
frame.pc=2097202;
case 2097202:;
    memoryASet16(r.ds, 0x2650, 0x0060);
    memoryASet(r.ds, 0x2652, 0x60);
    r.ax = 0x140c;
    frame.pc=2097203;
case 2097203:
yield* sub_19b88();
frame.pc=2097204;
case 2097204:;
    r.ax = 0x1418;
    frame.pc=2097205;
case 2097205:
yield* sub_19ba0();
frame.pc=2097206;
case 2097206:;
    r.bx = 0x2344;
    r.ax = 0x1184;
    frame.pc=2097207;
case 2097207:
yield* sub_19d54();
frame.pc=2097208;
case 2097208:;
    r.bx = 0x2344;
    r.ax = 0x11a2;
    frame.pc=2097209;
case 2097209:
yield* sub_19d54();
frame.pc=2097210;
case 2097210:;
    r.bx = 0x2624;
    r.ax = 0;
    frame.pc=2097211;
case 2097211:
yield* sub_19d54();
frame.pc=2097212;
case 2097212:;
    frame.pc=2097213;
case 2097213:
yield* sub_1ae0b();
frame.pc=2097214;
case 2097214:;
    return;
case 0x19b39:
    r.ax = 0x0640;
    frame.pc=2097215;
case 2097215:
yield* sub_19bd0();
frame.pc=2097216;
case 2097216:;
    r.bx = 0x2570;
    r.ax = 0x0ca0;
    frame.pc=2097217;
case 2097217:
yield* sub_19d54();
frame.pc=2097218;
case 2097218:;
    memoryASet16(r.ds, 0x2650, 0x00a0);
    memoryASet(r.ds, 0x2652, 0x60);
    r.ax = 0x1406;
    frame.pc=2097219;
case 2097219:
yield* sub_19b88();
frame.pc=2097220;
case 2097220:;
    r.bx = 0x2344;
    r.ax = 0x11c4;
    frame.pc=2097221;
case 2097221:
yield* sub_19d54();
frame.pc=2097222;
case 2097222:;
    r.ax = 0x1422;
    frame.pc=2097223;
case 2097223:
yield* sub_19ba0();
frame.pc=2097224;
case 2097224:;
    r.ax = 0x1690;
    frame.pc=2097225;
case 2097225:
yield* sub_19bb8();
frame.pc=2097226;
case 2097226:;
    r.ax = 0x16b6;
    frame.pc=2097227;
case 2097227:
yield* sub_19b75();
frame.pc=2097228;
case 2097228:;

      return;
    default: throw new Error("Invalid control flow in sub_199c0");
    }
  }
  } finally {execution.leave(frame);}
}

function* sub_19b75() {
  let pc=0;
  const frame=execution.enter('sub_19b75',pc);pc=frame.pc;
  let skipBudget=frame.budget || execution.restoring;
  try {
  if(execution.restoring && execution.pending.length===0) {
    execution.restoring=false;
    if(frame.parked!==null) {yield frame.parked;frame.parked=null;frame.budget=false;}
  }
  dispatch: while (true) {
    if (!skipBudget && (++game.steps & 1023) === 0) {
      frame.pc=pc;frame.budget=true;frame.parked=0;yield 0;
      frame.parked=null;frame.budget=false;
    }
    skipBudget=false;
    switch(pc) {
    case 0:

    memoryASet16(r.ds, 0x2634, r.ax);
    r.bx = 0x2384;
    frame.pc=2097153;
case 2097153:
yield* sub_19d54();
frame.pc=2097154;
case 2097154:;
    r.ax = memoryAGet16(r.ds, 0x2634);
    r.bx = 0x238c;
    frame.pc=2097155;
case 2097155:
yield* sub_19d54();
frame.pc=2097156;
case 2097156:;

      return;
    default: throw new Error("Invalid control flow in sub_19b75");
    }
  }
  } finally {execution.leave(frame);}
}

function* sub_19b88() {
  let pc=0;
  const frame=execution.enter('sub_19b88',pc);pc=frame.pc;
  let skipBudget=frame.budget || execution.restoring;
  try {
  if(execution.restoring && execution.pending.length===0) {
    execution.restoring=false;
    if(frame.parked!==null) {yield frame.parked;frame.parked=null;frame.budget=false;}
  }
  dispatch: while (true) {
    if (!skipBudget && (++game.steps & 1023) === 0) {
      frame.pc=pc;frame.budget=true;frame.parked=0;yield 0;
      frame.parked=null;frame.budget=false;
    }
    skipBudget=false;
    switch(pc) {
    case 0:

    memoryASet16(r.ds, 0x2634, r.ax);
    r.si = 0x0008;
case 0x19b8e:
    r.ax = memoryAGet16(r.ds, 0x2634);
    r.bx = memoryAGet16(r.ds, r.si + 9780);
    push(r.si);
    frame.pc=2097153;
case 2097153:
yield* sub_19d54();
frame.pc=2097154;
case 2097154:;
    r.si = pop();
    r.si -= 0x0002;
    if (r.si != 0)
        { pc = 0x19b8e; continue dispatch; }

      return;
    default: throw new Error("Invalid control flow in sub_19b88");
    }
  }
  } finally {execution.leave(frame);}
}

function* sub_19ba0() {
  let pc=0;
  const frame=execution.enter('sub_19ba0',pc);pc=frame.pc;
  let skipBudget=frame.budget || execution.restoring;
  try {
  if(execution.restoring && execution.pending.length===0) {
    execution.restoring=false;
    if(frame.parked!==null) {yield frame.parked;frame.parked=null;frame.budget=false;}
  }
  dispatch: while (true) {
    if (!skipBudget && (++game.steps & 1023) === 0) {
      frame.pc=pc;frame.budget=true;frame.parked=0;yield 0;
      frame.parked=null;frame.budget=false;
    }
    skipBudget=false;
    switch(pc) {
    case 0:

    memoryASet16(r.ds, 0x2634, r.ax);
    r.si = 0x000a;
case 0x19ba6:
    r.ax = memoryAGet16(r.ds, 0x2634);
    r.bx = memoryAGet16(r.ds, r.si + 9788);
    push(r.si);
    frame.pc=2097153;
case 2097153:
yield* sub_19d54();
frame.pc=2097154;
case 2097154:;
    r.si = pop();
    r.si -= 0x0002;
    if (r.si != 0)
        { pc = 0x19ba6; continue dispatch; }

      return;
    default: throw new Error("Invalid control flow in sub_19ba0");
    }
  }
  } finally {execution.leave(frame);}
}

function* sub_19bb8() {
  let pc=0;
  const frame=execution.enter('sub_19bb8',pc);pc=frame.pc;
  let skipBudget=frame.budget || execution.restoring;
  try {
  if(execution.restoring && execution.pending.length===0) {
    execution.restoring=false;
    if(frame.parked!==null) {yield frame.parked;frame.parked=null;frame.budget=false;}
  }
  dispatch: while (true) {
    if (!skipBudget && (++game.steps & 1023) === 0) {
      frame.pc=pc;frame.budget=true;frame.parked=0;yield 0;
      frame.parked=null;frame.budget=false;
    }
    skipBudget=false;
    switch(pc) {
    case 0:

    memoryASet16(r.ds, 0x2634, r.ax);
    r.si = 0x0008;
case 0x19bbe:
    r.ax = memoryAGet16(r.ds, 0x2634);
    r.bx = memoryAGet16(r.ds, r.si + 9798);
    push(r.si);
    frame.pc=2097153;
case 2097153:
yield* sub_19d54();
frame.pc=2097154;
case 2097154:;
    r.si = pop();
    r.si -= 0x0002;
    if (r.si != 0)
        { pc = 0x19bbe; continue dispatch; }

      return;
    default: throw new Error("Invalid control flow in sub_19bb8");
    }
  }
  } finally {execution.leave(frame);}
}

function* sub_19bd0() {
  let pc=0;
  const frame=execution.enter('sub_19bd0',pc);pc=frame.pc;
  let skipBudget=frame.budget || execution.restoring;
  try {
  if(execution.restoring && execution.pending.length===0) {
    execution.restoring=false;
    if(frame.parked!==null) {yield frame.parked;frame.parked=null;frame.budget=false;}
  }
  dispatch: while (true) {
    if (!skipBudget && (++game.steps & 1023) === 0) {
      frame.pc=pc;frame.budget=true;frame.parked=0;yield 0;
      frame.parked=null;frame.budget=false;
    }
    skipBudget=false;
    switch(pc) {
    case 0:

    memoryASet16(r.ds, 0x267e, r.ax);
    r.bx = 0x251c;
    frame.pc=2097153;
case 2097153:
yield* sub_19d54();
frame.pc=2097154;
case 2097154:;
    r.ax = 0;
    flags.direction = false;
    r.di = memoryAGet16(r.ds, 0x267e);
    r.di += 0x0284;
    r.cx = 0x0024;
    rep_stosw();
    r.di = memoryAGet16(r.ds, 0x267e);
    r.di += 0x1184;
    r.cx = 0x0024;
    rep_stosw();
    r.di = memoryAGet16(r.ds, 0x267e);
    r.di += 0x2284;
    r.al = 0x2a;
    frame.pc=2097155;
case 2097155:
yield* sub_19c11();
frame.pc=2097156;
case 2097156:;
    r.di = memoryAGet16(r.ds, 0x267e);
    r.di += 0x22cb;
    r.al = 0xa8;
    frame.pc=2097157;
case 2097157:
yield* sub_19c11();
frame.pc=2097158;
case 2097158:;

      return;
    default: throw new Error("Invalid control flow in sub_19bd0");
    }
  }
  } finally {execution.leave(frame);}
}

function* sub_19c11() {
  let pc=0;
  const frame=execution.enter('sub_19c11',pc);pc=frame.pc;
  let skipBudget=frame.budget || execution.restoring;
  try {
  if(execution.restoring && execution.pending.length===0) {
    execution.restoring=false;
    if(frame.parked!==null) {yield frame.parked;frame.parked=null;frame.budget=false;}
  }
  dispatch: while (true) {
    if (!skipBudget && (++game.steps & 1023) === 0) {
      frame.pc=pc;frame.budget=true;frame.parked=0;yield 0;
      frame.parked=null;frame.budget=false;
    }
    skipBudget=false;
    switch(pc) {
    case 0:

    r.cx = 0x005f;
case 0x19c14:
    memoryASet(r.es, r.di, r.al);
    r.di ^= 0x2000;
    if (r.di & 0x2000)
        { pc = 0x19c24; continue dispatch; }
    r.di += 0x0050;
case 0x19c24:
    if (--r.cx)
        { pc = 0x19c14; continue dispatch; }

      return;
    default: throw new Error("Invalid control flow in sub_19c11");
    }
  }
  } finally {execution.leave(frame);}
}

function* sub_19c30() {
  let pc=0;
  const frame=execution.enter('sub_19c30',pc);pc=frame.pc;
  let skipBudget=frame.budget || execution.restoring;
  try {
  if(execution.restoring && execution.pending.length===0) {
    execution.restoring=false;
    if(frame.parked!==null) {yield frame.parked;frame.parked=null;frame.budget=false;}
  }
  dispatch: while (true) {
    if (!skipBudget && (++game.steps & 1023) === 0) {
      frame.pc=pc;frame.budget=true;frame.parked=0;yield 0;
      frame.parked=null;frame.budget=false;
    }
    skipBudget=false;
    switch(pc) {
    case 0:

    r.ax = 0xb800;
    r.es = r.ax;
    flags.direction = false;
    r.di = 0;
    r.ax = 0xaaaa;
    r.cx = 0x0fa0;
    rep_stosw();
    r.di = 0x2000;
    r.cx = 0x0fa0;
    rep_stosw();
    frame.pc=2097153;frame.parked=1;yield 1;
case 2097153: frame.parked=null;
    frame.pc=2097154;
case 2097154:
yield* sub_19dce();
frame.pc=2097155;
case 2097155:;
    r.bx = 0x28a0;
    r.ax = 0;
    frame.pc=2097156;
case 2097156:
yield* sub_19d54();
frame.pc=2097157;
case 2097157:;
    frame.pc=2097158;
case 2097158:
yield* sub_19c98();
frame.pc=2097159;
case 2097159:;
    frame.pc=2097160;
case 2097160:
yield* sub_19eb4();
frame.pc=2097161;
case 2097161:;
    frame.pc=2097162;
case 2097162:
yield* sub_19dbb();
frame.pc=2097163;
case 2097163:;
    frame.pc=2097164;
case 2097164:
yield* sub_19cb0();
frame.pc=2097165;
case 2097165:;

      return;
    default: throw new Error("Invalid control flow in sub_19c30");
    }
  }
  } finally {execution.leave(frame);}
}

function* sub_19c60() {
  let pc=0;
  const frame=execution.enter('sub_19c60',pc);pc=frame.pc;
  let skipBudget=frame.budget || execution.restoring;
  try {
  if(execution.restoring && execution.pending.length===0) {
    execution.restoring=false;
    if(frame.parked!==null) {yield frame.parked;frame.parked=null;frame.budget=false;}
  }
  dispatch: while (true) {
    if (!skipBudget && (++game.steps & 1023) === 0) {
      frame.pc=pc;frame.budget=true;frame.parked=0;yield 0;
      frame.parked=null;frame.budget=false;
    }
    skipBudget=false;
    switch(pc) {
    case 0:

    r.ax = 0xb800;
    r.es = r.ax;
    flags.direction = false;
    r.di = 0;
    r.ax = 0xaaaa;
    r.cx = 0x0fa0;
    rep_stosw();
    r.di = 0x2000;
    r.cx = 0x0fa0;
    rep_stosw();
    frame.pc=2097153;
case 2097153:
yield* sub_19dce();
frame.pc=2097154;
case 2097154:;
    r.bx = 0x28a0;
    r.ax = 0;
    frame.pc=2097155;
case 2097155:
yield* sub_19d54();
frame.pc=2097156;
case 2097156:;
    frame.pc=2097157;
case 2097157:
yield* sub_19c98();
frame.pc=2097158;
case 2097158:;
    r.ax = memoryAGet16(r.ds, 0x0008);
    push(r.ax);
    memoryASet16(r.ds, 0x0008, 0x0001);
    frame.pc=2097159;
case 2097159:
yield* sub_19eb4();
frame.pc=2097160;
case 2097160:;
    r.ax = pop();
    memoryASet16(r.ds, 0x0008, r.ax);

      return;
    default: throw new Error("Invalid control flow in sub_19c60");
    }
  }
  } finally {execution.leave(frame);}
}

function* sub_19c98() {
  let pc=0;
  const frame=execution.enter('sub_19c98',pc);pc=frame.pc;
  let skipBudget=frame.budget || execution.restoring;
  try {
  if(execution.restoring && execution.pending.length===0) {
    execution.restoring=false;
    if(frame.parked!==null) {yield frame.parked;frame.parked=null;frame.budget=false;}
  }
  dispatch: while (true) {
    if (!skipBudget && (++game.steps & 1023) === 0) {
      frame.pc=pc;frame.budget=true;frame.parked=0;yield 0;
      frame.parked=null;frame.budget=false;
    }
    skipBudget=false;
    switch(pc) {
    case 0:

    r.bx = memoryAGet16(r.ds, 0x6df8);
    r.bx &= 0x0003;
    r.bl <<= 1;
    r.si = memoryAGet16(r.ds, r.bx + 10961);
    r.di = 0x1902;
    r.cx = 0x0801;
    frame.pc=2097153;
case 2097153:
yield* sub_19fcd();
frame.pc=2097154;
case 2097154:;

      return;
    default: throw new Error("Invalid control flow in sub_19c98");
    }
  }
  } finally {execution.leave(frame);}
}

function* sub_19cb0() {
  let pc=0;
  const frame=execution.enter('sub_19cb0',pc);pc=frame.pc;
  let skipBudget=frame.budget || execution.restoring;
  try {
  if(execution.restoring && execution.pending.length===0) {
    execution.restoring=false;
    if(frame.parked!==null) {yield frame.parked;frame.parked=null;frame.budget=false;}
  }
  dispatch: while (true) {
    if (!skipBudget && (++game.steps & 1023) === 0) {
      frame.pc=pc;frame.budget=true;frame.parked=0;yield 0;
      frame.parked=null;frame.budget=false;
    }
    skipBudget=false;
    switch(pc) {
    case 0:

    r.bx = 0x000f;
case 0x19cb3:
    memoryASet(r.ds, r.bx + 4117, 0x00);
    r.tx = r.bx;
    r.bx--;
    if (r.tx != 1)
        { pc = 0x19cb3; continue dispatch; }
    r.di = 0x0140;
    r.bh = 0x80;
    memoryASet16(r.ds, 0x2aca, 0x0000);
    frame.pc=2097153;
case 2097153:
yield* sub_19cf6();
frame.pc=2097154;
case 2097154:;
    r.di = 0x0640;
    r.bh = 0x30;
    memoryASet16(r.ds, 0x2aca, 0x0005);
    frame.pc=2097155;
case 2097155:
yield* sub_19cf6();
frame.pc=2097156;
case 2097156:;
    r.di = 0x0b40;
    r.bh = 0x00;
    memoryASet16(r.ds, 0x2aca, 0x000a);
    frame.pc=2097157;
case 2097157:
yield* sub_19cf6();
frame.pc=2097158;
case 2097158:;
    memoryASet(r.ds, 0x0525, 0x10);
    memoryASet16(r.ds, 0x052f, 0x0000);
    memoryASet(r.ds, 0x0531, 0x01);

      return;
    default: throw new Error("Invalid control flow in sub_19cb0");
    }
  }
  } finally {execution.leave(frame);}
}

function* sub_19cf6() {
  let pc=0;
  const frame=execution.enter('sub_19cf6',pc);pc=frame.pc;
  let skipBudget=frame.budget || execution.restoring;
  try {
  if(execution.restoring && execution.pending.length===0) {
    execution.restoring=false;
    if(frame.parked!==null) {yield frame.parked;frame.parked=null;frame.budget=false;}
  }
  dispatch: while (true) {
    if (!skipBudget && (++game.steps & 1023) === 0) {
      frame.pc=pc;frame.budget=true;frame.parked=0;yield 0;
      frame.parked=null;frame.budget=false;
    }
    skipBudget=false;
    switch(pc) {
    case 0:

    memoryASet(r.ds, 0x2ac9, r.bh);
    memoryASet(r.ds, 0x2ac4, 0x00);
case 0x19cff:
    push(r.di);
    push(r.es);
    r.bx = memoryAGet16(r.ds, 0x0008);
    r.bl = memoryAGet(r.ds, r.bx + 10938);
    r.bh = memoryAGet(r.ds, 0x2ac9);
    r.ax = 0x1010;
    r.es = r.ax;
    r.di = 0x04d7;
    frame.pc=2097153;
case 2097153:
yield* sub_178ad();
frame.pc=2097154;
case 2097154:;
    r.es = pop();
    r.di = pop();
    push(r.di);
    r.si = 0x04d7;
    r.cx = 0x1002;
    frame.pc=2097155;
case 2097155:
yield* sub_19fcd();
frame.pc=2097156;
case 2097156:;
    r.bh = 0;
    r.bl = memoryAGet(r.ds, 0x2ac4);
    r.cl = r.bl;
    r.bl >>= 1;
    r.bl >>= 1;
    r.cl = ~r.cl;
    r.cl &= 0x03;
    r.cl <<= 1;
    r.al = memoryAGet(r.ds, 0x0540);
    r.al <<= r.cl;
    r.si = memoryAGet16(r.ds, 0x2aca);
    memoryASet(r.ds, r.bx + r.si + 4118, memoryAGet(r.ds, r.bx + r.si + 4118) | r.al);
    r.di = pop();
    r.di += 0x0004;
    memoryASet(r.ds, 0x2ac4, memoryAGet(r.ds, 0x2ac4) + 1);
    if (memoryAGet(r.ds, 0x2ac4) < 0x14)
        { pc = 0x19cff; continue dispatch; }

      return;
    default: throw new Error("Invalid control flow in sub_19cf6");
    }
  }
  } finally {execution.leave(frame);}
}

function* sub_19d54() {
  let pc=0;
  const frame=execution.enter('sub_19d54',pc);pc=frame.pc;
  let skipBudget=frame.budget || execution.restoring;
  try {
  if(execution.restoring && execution.pending.length===0) {
    execution.restoring=false;
    if(frame.parked!==null) {yield frame.parked;frame.parked=null;frame.budget=false;}
  }
  dispatch: while (true) {
    if (!skipBudget && (++game.steps & 1023) === 0) {
      frame.pc=pc;frame.budget=true;frame.parked=0;yield 0;
      frame.parked=null;frame.budget=false;
    }
    skipBudget=false;
    switch(pc) {
    case 0:

    r.cx = memoryAGet16(r.ds, r.bx);
    memoryASet16(r.ds, 0x2ac7, r.cx);
    memoryASet16(r.ds, 0x2acc, r.ax);
    r.bx += 0x0002;
case 0x19d60:
    frame.pc=2097153;frame.parked=1;yield 1;
case 2097153: frame.parked=null;
    r.si = memoryAGet16(r.ds, r.bx);
    if (r.si != 0xffff)
        { pc = 0x19d69; continue dispatch; }
    return;
case 0x19d69:
    r.di = memoryAGet16(r.ds, r.bx + 2);
    r.di += memoryAGet16(r.ds, 0x2acc);
    flags.direction = false;
    memoryASet(r.ds, 0x2ad0, r.ch);
    r.ch = 0;
    memoryASet16(r.ds, 0x2ace, r.cx);
case 0x19d7b:
    r.cx = memoryAGet16(r.ds, 0x2ace);
    rep_movsb();
    r.di -= memoryAGet16(r.ds, 0x2ace);
    r.di ^= 0x2000;
    if (r.di & 0x2000)
        { pc = 0x19d92; continue dispatch; }
    r.di += 0x0050;
case 0x19d92:
    r.tl = memoryAGet(r.ds, 0x2ad0);
    memoryASet(r.ds, 0x2ad0, memoryAGet(r.ds, 0x2ad0) - 1);
    if (r.tl != 1)
        { pc = 0x19d7b; continue dispatch; }
    r.bx += 0x0004;
    r.cx = memoryAGet16(r.ds, 0x2ac7);
    { pc = 0x19d60; continue dispatch; }

      return;
    default: throw new Error("Invalid control flow in sub_19d54");
    }
  }
  } finally {execution.leave(frame);}
}

function* sub_19da1() {
  let pc=0;
  const frame=execution.enter('sub_19da1',pc);pc=frame.pc;
  let skipBudget=frame.budget || execution.restoring;
  try {
  if(execution.restoring && execution.pending.length===0) {
    execution.restoring=false;
    if(frame.parked!==null) {yield frame.parked;frame.parked=null;frame.budget=false;}
  }
  dispatch: while (true) {
    if (!skipBudget && (++game.steps & 1023) === 0) {
      frame.pc=pc;frame.budget=true;frame.parked=0;yield 0;
      frame.parked=null;frame.budget=false;
    }
    skipBudget=false;
    switch(pc) {
    case 0:

    memoryASet(r.ds, 0x2ac4, 0x04);
case 0x19da6:
    r.si = 0x2680;
    r.cx = 0x1005;
    push(r.di);
    frame.pc=2097153;
case 2097153:
yield* sub_19fcd();
frame.pc=2097154;
case 2097154:;
    r.di = pop();
    r.di += 0x0014;
    r.tl = memoryAGet(r.ds, 0x2ac4);
    memoryASet(r.ds, 0x2ac4, memoryAGet(r.ds, 0x2ac4) - 1);
    if (r.tl != 1)
        { pc = 0x19da6; continue dispatch; }

      return;
    default: throw new Error("Invalid control flow in sub_19da1");
    }
  }
  } finally {execution.leave(frame);}
}

function* sub_19dbb() {
  let pc=0;
  const frame=execution.enter('sub_19dbb',pc);pc=frame.pc;
  let skipBudget=frame.budget || execution.restoring;
  try {
  if(execution.restoring && execution.pending.length===0) {
    execution.restoring=false;
    if(frame.parked!==null) {yield frame.parked;frame.parked=null;frame.budget=false;}
  }
  dispatch: while (true) {
    if (!skipBudget && (++game.steps & 1023) === 0) {
      frame.pc=pc;frame.budget=true;frame.parked=0;yield 0;
      frame.parked=null;frame.budget=false;
    }
    skipBudget=false;
    switch(pc) {
    case 0:

    r.di = 0x03c5;
    frame.pc=2097153;
case 2097153:
yield* sub_19da1();
frame.pc=2097154;
case 2097154:;
    r.di = 0x08c5;
    frame.pc=2097155;
case 2097155:
yield* sub_19da1();
frame.pc=2097156;
case 2097156:;
    r.di = 0x0dc5;
    frame.pc=2097157;
case 2097157:
yield* sub_19da1();
frame.pc=2097158;
case 2097158:;

      return;
    default: throw new Error("Invalid control flow in sub_19dbb");
    }
  }
  } finally {execution.leave(frame);}
}

function* sub_19dce() {
  let pc=0;
  const frame=execution.enter('sub_19dce',pc);pc=frame.pc;
  let skipBudget=frame.budget || execution.restoring;
  try {
  if(execution.restoring && execution.pending.length===0) {
    execution.restoring=false;
    if(frame.parked!==null) {yield frame.parked;frame.parked=null;frame.budget=false;}
  }
  dispatch: while (true) {
    if (!skipBudget && (++game.steps & 1023) === 0) {
      frame.pc=pc;frame.budget=true;frame.parked=0;yield 0;
      frame.parked=null;frame.budget=false;
    }
    skipBudget=false;
    switch(pc) {
    case 0:

    memoryASet16(r.ds, 0x2ac2, 0x103e);
case 0x19dd4:
    memoryASet16(r.ds, 0x2ac2, memoryAGet16(r.ds, 0x2ac2) + 0x0002);
    r.di = memoryAGet16(r.ds, 0x2ac2);
    if (r.di >= 0x1090)
        { pc = 0x19e02; continue dispatch; }
case 0x19de3:
    frame.pc=2097153;
case 2097153:
yield* sub_1a02d();
frame.pc=2097154;
case 2097154:;
    r.dx &= 0x0030;
    if (r.dl == memoryAGet(r.ds, 0x2ac4))
        { pc = 0x19de3; continue dispatch; }
    memoryASet(r.ds, 0x2ac4, r.dl);
    r.dx += 0x2904;
    r.si = r.dx;
    r.cx = 0x0801;
    frame.pc=2097155;
case 2097155:
yield* sub_19fcd();
frame.pc=2097156;
case 2097156:;
    { pc = 0x19dd4; continue dispatch; }
case 0x19e02:
    r.di = 0x1180;
    r.ax = 0x5655;
    r.cx = 0x0500;
    flags.direction = false;
    rep_stosw();
    r.di = 0x3180;
    r.cx = 0x0500;
    rep_stosw();
    frame.pc=2097157;frame.parked=1;yield 1;
case 2097157: frame.parked=null;
    memoryASet16(r.ds, 0x2ac2, 0x2944);
case 0x19e1c:
    memoryASet(r.ds, 0x2ac4, 0x09);
case 0x19e21:
    frame.pc=2097158;
case 2097158:
yield* sub_1a02d();
frame.pc=2097159;
case 2097159:;
    r.dx &= 0x0776;
    r.dx += 0x12c0;
    r.di = r.dx;
    r.si = memoryAGet16(r.ds, 0x2ac2);
    r.cx = 0x0501;
    frame.pc=2097160;
case 2097160:
yield* sub_19fcd();
frame.pc=2097161;
case 2097161:;
    r.tl = memoryAGet(r.ds, 0x2ac4);
    memoryASet(r.ds, 0x2ac4, memoryAGet(r.ds, 0x2ac4) - 1);
    if (r.tl != 1)
        { pc = 0x19e21; continue dispatch; }
    memoryASet16(r.ds, 0x2ac2, memoryAGet16(r.ds, 0x2ac2) + 0x000a);
    if (memoryAGet16(r.ds, 0x2ac2) < 0x296c)
        { pc = 0x19e1c; continue dispatch; }
    memoryASet(r.ds, 0x2ac4, 0x05);
case 0x19e50:
    frame.pc=2097162;
case 2097162:
yield* sub_1a02d();
frame.pc=2097163;
case 2097163:;
    r.dx &= 0x003e;
    r.dx += 0x3a98;
    r.di = r.dx;
    r.si = 0x296c;
    r.cx = 0x0501;
    frame.pc=2097164;
case 2097164:
yield* sub_19fcd();
frame.pc=2097165;
case 2097165:;
    r.tl = memoryAGet(r.ds, 0x2ac4);
    memoryASet(r.ds, 0x2ac4, memoryAGet(r.ds, 0x2ac4) - 1);
    if (r.tl != 1)
        { pc = 0x19e50; continue dispatch; }

      return;
    default: throw new Error("Invalid control flow in sub_19dce");
    }
  }
  } finally {execution.leave(frame);}
}

function* sub_19e6d() {
  let pc=0;
  const frame=execution.enter('sub_19e6d',pc);pc=frame.pc;
  let skipBudget=frame.budget || execution.restoring;
  try {
  if(execution.restoring && execution.pending.length===0) {
    execution.restoring=false;
    if(frame.parked!==null) {yield frame.parked;frame.parked=null;frame.budget=false;}
  }
  dispatch: while (true) {
    if (!skipBudget && (++game.steps & 1023) === 0) {
      frame.pc=pc;frame.budget=true;frame.parked=0;yield 0;
      frame.parked=null;frame.budget=false;
    }
    skipBudget=false;
    switch(pc) {
    case 0:

    memoryASet16(r.ds, 0x2ac2, r.di);
    r.al = 0x03;
    if (r.di < 0x1720)
        { pc = 0x19e7b; continue dispatch; }
    r.al--;
case 0x19e7b:
    memoryASet(r.ds, 0x2ac4, r.al);
    memoryASet16(r.ds, 0x2ac2, memoryAGet16(r.ds, 0x2ac2) + 0x01e0);
    r.si = 0x2976;
    r.cx = 0x0c05;
    frame.pc=2097153;
case 2097153:
yield* sub_19fcd();
frame.pc=2097154;
case 2097154:;
case 0x19e8d:
    r.di = memoryAGet16(r.ds, 0x2ac2);
    memoryASet16(r.ds, 0x2ac2, memoryAGet16(r.ds, 0x2ac2) + 0x0140);
    r.si = 0x29ee;
    r.cx = 0x0804;
    frame.pc=2097155;
case 2097155:
yield* sub_19fcd();
frame.pc=2097156;
case 2097156:;
    r.tl = memoryAGet(r.ds, 0x2ac4);
    memoryASet(r.ds, 0x2ac4, memoryAGet(r.ds, 0x2ac4) - 1);
    if (r.tl != 1)
        { pc = 0x19e8d; continue dispatch; }
    r.di = memoryAGet16(r.ds, 0x2ac2);
    r.si = 0x2a2e;
    r.cx = 0x0b04;
    frame.pc=2097157;
case 2097157:
yield* sub_19fcd();
frame.pc=2097158;
case 2097158:;

      return;
    default: throw new Error("Invalid control flow in sub_19e6d");
    }
  }
  } finally {execution.leave(frame);}
}

function* sub_19eb4() {
  let pc=0;
  const frame=execution.enter('sub_19eb4',pc);pc=frame.pc;
  let skipBudget=frame.budget || execution.restoring;
  try {
  if(execution.restoring && execution.pending.length===0) {
    execution.restoring=false;
    if(frame.parked!==null) {yield frame.parked;frame.parked=null;frame.budget=false;}
  }
  dispatch: while (true) {
    if (!skipBudget && (++game.steps & 1023) === 0) {
      frame.pc=pc;frame.budget=true;frame.parked=0;yield 0;
      frame.parked=null;frame.budget=false;
    }
    skipBudget=false;
    switch(pc) {
    case 0:

    r.bx = memoryAGet16(r.ds, 0x0008);
    r.bl = memoryAGet(r.ds, r.bx + 10930);
case 0x19ebc:
    memoryASet16(r.ds, 0x2ac5, r.bx);
    r.di = memoryAGet16(r.ds, r.bx + 10886);
    if (r.di != 0x0000)
        { pc = 0x19eca; continue dispatch; }
    return;
case 0x19eca:
    frame.pc=2097153;
case 2097153:
yield* sub_19e6d();
frame.pc=2097154;
case 2097154:;
    r.bx = memoryAGet16(r.ds, 0x2ac5);
    r.bx += 0x0002;
    { pc = 0x19ebc; continue dispatch; }

      return;
    default: throw new Error("Invalid control flow in sub_19eb4");
    }
  }
  } finally {execution.leave(frame);}
}

function* sub_19ee0() {
  let pc=0;
  const frame=execution.enter('sub_19ee0',pc);pc=frame.pc;
  let skipBudget=frame.budget || execution.restoring;
  try {
  if(execution.restoring && execution.pending.length===0) {
    execution.restoring=false;
    if(frame.parked!==null) {yield frame.parked;frame.parked=null;frame.budget=false;}
  }
  dispatch: while (true) {
    if (!skipBudget && (++game.steps & 1023) === 0) {
      frame.pc=pc;frame.budget=true;frame.parked=0;yield 0;
      frame.parked=null;frame.budget=false;
    }
    skipBudget=false;
    switch(pc) {
    case 0:

    r.al = r.dl;
    r.ah = 0x28;
    mul8(r.ah);
    if (!(r.dl & 0x01))
        { pc = 0x19eee; continue dispatch; }
    r.ax += 0x1fd8;
case 0x19eee:
    r.dx = r.cx;
    r.dx >>= 1;
    r.dx >>= 1;
    r.ax += r.dx;
    r.cl &= 0x03;
    r.cl <<= 1;

      return;
    default: throw new Error("Invalid control flow in sub_19ee0");
    }
  }
  } finally {execution.leave(frame);}
}

function* sub_19efc() {
  let pc=0;
  const frame=execution.enter('sub_19efc',pc);pc=frame.pc;
  let skipBudget=frame.budget || execution.restoring;
  try {
  if(execution.restoring && execution.pending.length===0) {
    execution.restoring=false;
    if(frame.parked!==null) {yield frame.parked;frame.parked=null;frame.budget=false;}
  }
  dispatch: while (true) {
    if (!skipBudget && (++game.steps & 1023) === 0) {
      frame.pc=pc;frame.budget=true;frame.parked=0;yield 0;
      frame.parked=null;frame.budget=false;
    }
    skipBudget=false;
    switch(pc) {
    case 0:

    flags.direction = false;
    memoryASet(r.ds, 0x2ae0, r.cl);
    memoryASet(r.ds, 0x2ae2, r.ch);
    r.ch = 0;
    r.dx = 0x0ff0;
case 0x19f0a:

    r.cl = memoryAGet(r.ds, 0x2ae0);
case 0x19f0e:
    r.dx = 0x30c0;
    r.bx = memoryAGet16(r.es, r.di);
    memoryASet16(r.ds, r.bp, r.bx); colorArt.saveWord(r.ds,r.bp,r.es,r.di);
    lodsw();
    memoryASet16(r.ds, 0x2ae3, r.ax);
case 0x19f1c:
    if (r.dl & r.ah)
        { pc = 0x19f22; continue dispatch; }
    r.ah |= r.dl;
case 0x19f22:
    if (r.dh & r.ah)
        { pc = 0x19f28; continue dispatch; }
    r.ah |= r.dh;
case 0x19f28:
    if (r.dl & r.al)
        { pc = 0x19f2e; continue dispatch; }
    r.al |= r.dl;
case 0x19f2e:
    if (r.dh & r.al)
        { pc = 0x19f34; continue dispatch; }
    r.al |= r.dh;
case 0x19f34:
    r.dx ^= 0x33cc;
    if (r.dh & 0x03)
        { pc = 0x19f1c; continue dispatch; }
    r.ax &= r.bx;
    r.ax |= memoryAGet16(r.ds, 0x2ae3);
    colorArt.paintWord(r.es,r.di,r.ds,r.si-2); colorArt.writing=true; stosw(); colorArt.writing=false;
    r.bp += 0x0002;
    if (--r.cx)
        { pc = 0x19f0e; continue dispatch; }
    r.di -= memoryAGet16(r.ds, 0x2ae0);
    r.di -= memoryAGet16(r.ds, 0x2ae0);
    r.di ^= 0x2000;
    if (r.di & 0x2000)
        { pc = 0x19f5e; continue dispatch; }
    r.di += 0x0050;
case 0x19f5e:
    r.tl = memoryAGet(r.ds, 0x2ae2);
    memoryASet(r.ds, 0x2ae2, memoryAGet(r.ds, 0x2ae2) - 1);
    if (r.tl != 1)
        { pc = 0x19f0a; continue dispatch; }

      return;
    default: throw new Error("Invalid control flow in sub_19efc");
    }
  }
  } finally {execution.leave(frame);}
}

function* sub_19f65() {
  let pc=0;
  const frame=execution.enter('sub_19f65',pc);pc=frame.pc;
  let skipBudget=frame.budget || execution.restoring;
  try {
  if(execution.restoring && execution.pending.length===0) {
    execution.restoring=false;
    if(frame.parked!==null) {yield frame.parked;frame.parked=null;frame.budget=false;}
  }
  dispatch: while (true) {
    if (!skipBudget && (++game.steps & 1023) === 0) {
      frame.pc=pc;frame.budget=true;frame.parked=0;yield 0;
      frame.parked=null;frame.budget=false;
    }
    skipBudget=false;
    switch(pc) {
    case 0:

    flags.direction = false;
    memoryASet(r.ds, 0x2ae0, r.cl);
    memoryASet(r.ds, 0x2ae2, r.ch);
    r.ch = 0;
case 0x19f70:
    r.cl = memoryAGet(r.ds, 0x2ae0);
case 0x19f74:
    r.bx = memoryAGet16(r.es, r.di);
    memoryASet16(r.ds, r.bp, r.bx); colorArt.saveWord(r.ds,r.bp,r.es,r.di);
    lodsw();
    r.ax &= r.bx;
    colorArt.paintWord(r.es,r.di,r.ds,r.si-2); colorArt.writing=true; stosw(); colorArt.writing=false;
    r.bp += 0x0002;
    if (--r.cx)
        { pc = 0x19f74; continue dispatch; }
    r.di -= memoryAGet16(r.ds, 0x2ae0);
    r.di -= memoryAGet16(r.ds, 0x2ae0);
    r.di ^= 0x2000;
    if (r.di & 0x2000)
        { pc = 0x19f99; continue dispatch; }
    r.di += 0x0050;
case 0x19f99:
    r.tl = memoryAGet(r.ds, 0x2ae2);
    memoryASet(r.ds, 0x2ae2, memoryAGet(r.ds, 0x2ae2) - 1);
    if (r.tl != 1)
        { pc = 0x19f70; continue dispatch; }

      return;
    default: throw new Error("Invalid control flow in sub_19f65");
    }
  }
  } finally {execution.leave(frame);}
}

function* sub_19fa0() {
  let pc=0;
  const frame=execution.enter('sub_19fa0',pc);pc=frame.pc;
  let skipBudget=frame.budget || execution.restoring;
  try {
  if(execution.restoring && execution.pending.length===0) {
    execution.restoring=false;
    if(frame.parked!==null) {yield frame.parked;frame.parked=null;frame.budget=false;}
  }
  dispatch: while (true) {
    if (!skipBudget && (++game.steps & 1023) === 0) {
      frame.pc=pc;frame.budget=true;frame.parked=0;yield 0;
      frame.parked=null;frame.budget=false;
    }
    skipBudget=false;
    switch(pc) {
    case 0:

    flags.direction = false;
    memoryASet16(r.ds, 0x2ae9, r.si);
    memoryASet(r.ds, 0x2ae0, r.cl);
    memoryASet(r.ds, 0x2ae2, r.ch);
    r.al <<= 1;
    memoryASet(r.ds, 0x2aeb, r.al);
    r.ch = 0;
case 0x19fb4:
    r.cl = memoryAGet(r.ds, 0x2ae0);
    rep_movsw();
    r.cl = memoryAGet(r.ds, 0x2aeb);
    memoryASet16(r.ds, 0x2ae9, memoryAGet16(r.ds, 0x2ae9) + r.cx);
    r.si = memoryAGet16(r.ds, 0x2ae9);
    r.tl = memoryAGet(r.ds, 0x2ae2);
    memoryASet(r.ds, 0x2ae2, memoryAGet(r.ds, 0x2ae2) - 1);
    if (r.tl != 1)
        { pc = 0x19fb4; continue dispatch; }

      return;
    default: throw new Error("Invalid control flow in sub_19fa0");
    }
  }
  } finally {execution.leave(frame);}
}

function* sub_19fcd() {
  let pc=0;
  const frame=execution.enter('sub_19fcd',pc);pc=frame.pc;
  let skipBudget=frame.budget || execution.restoring;
  try {
  if(execution.restoring && execution.pending.length===0) {
    execution.restoring=false;
    if(frame.parked!==null) {yield frame.parked;frame.parked=null;frame.budget=false;}
  }
  dispatch: while (true) {
    if (!skipBudget && (++game.steps & 1023) === 0) {
      frame.pc=pc;frame.budget=true;frame.parked=0;yield 0;
      frame.parked=null;frame.budget=false;
    }
    skipBudget=false;
    switch(pc) {
    case 0:

    flags.direction = false;
    memoryASet(r.ds, 0x2ae0, r.cl);
    memoryASet(r.ds, 0x2ae2, r.ch);
    r.ch = 0;
case 0x19fd8:
    r.cl = memoryAGet(r.ds, 0x2ae0);
    rep_movsw();
    r.di -= memoryAGet16(r.ds, 0x2ae0);
    r.di -= memoryAGet16(r.ds, 0x2ae0);
    r.di ^= 0x2000;
    if (r.di & 0x2000)
        { pc = 0x19ff3; continue dispatch; }
    r.di += 0x0050;
case 0x19ff3:
    r.tl = memoryAGet(r.ds, 0x2ae2);
    memoryASet(r.ds, 0x2ae2, memoryAGet(r.ds, 0x2ae2) - 1);
    if (r.tl != 1)
        { pc = 0x19fd8; continue dispatch; }

      return;
    default: throw new Error("Invalid control flow in sub_19fcd");
    }
  }
  } finally {execution.leave(frame);}
}

function* sub_19ffa() {
  let pc=0;
  const frame=execution.enter('sub_19ffa',pc);pc=frame.pc;
  let skipBudget=frame.budget || execution.restoring;
  try {
  if(execution.restoring && execution.pending.length===0) {
    execution.restoring=false;
    if(frame.parked!==null) {yield frame.parked;frame.parked=null;frame.budget=false;}
  }
  dispatch: while (true) {
    if (!skipBudget && (++game.steps & 1023) === 0) {
      frame.pc=pc;frame.budget=true;frame.parked=0;yield 0;
      frame.parked=null;frame.budget=false;
    }
    skipBudget=false;
    switch(pc) {
    case 0:

    flags.direction = false;
    memoryASet(r.es, 0x2ae0, r.cl);
    memoryASet(r.es, 0x2ae2, r.ch);
    r.ch = 0;
case 0x1a007:
    r.cl = memoryAGet(r.es, 0x2ae0);
    rep_movsw();
    r.si -= memoryAGet16(r.es, 0x2ae0);
    r.si -= memoryAGet16(r.es, 0x2ae0);
    r.si ^= 0x2000;
    if (r.si & 0x2000)
        { pc = 0x1a025; continue dispatch; }
    r.si += 0x0050;
case 0x1a025:
    r.tl = memoryAGet(r.es, 0x2ae2);
    memoryASet(r.es, 0x2ae2, memoryAGet(r.es, 0x2ae2) - 1);
    if (r.tl != 1)
        { pc = 0x1a007; continue dispatch; }

      return;
    default: throw new Error("Invalid control flow in sub_19ffa");
    }
  }
  } finally {execution.leave(frame);}
}

function* sub_1a02d() {
  let pc=0;
  const frame=execution.enter('sub_1a02d',pc);pc=frame.pc;
  let skipBudget=frame.budget || execution.restoring;
  try {
  if(execution.restoring && execution.pending.length===0) {
    execution.restoring=false;
    if(frame.parked!==null) {yield frame.parked;frame.parked=null;frame.budget=false;}
  }
  dispatch: while (true) {
    if (!skipBudget && (++game.steps & 1023) === 0) {
      frame.pc=pc;frame.budget=true;frame.parked=0;yield 0;
      frame.parked=null;frame.budget=false;
    }
    skipBudget=false;
    switch(pc) {
    case 0:

    r.dx = memoryAGet16(r.ds, 0x2ae5);
    r.dl ^= r.dh;
    r.dl >>= 1;
    flags.carry = r.dl & 1;
    r.dl >>= 1;
    memoryASet16(r.ds, 0x2ae5, rcr16(memoryAGet16(r.ds, 0x2ae5), 0x0001));
    r.dx = memoryAGet16(r.ds, 0x2ae5);

      return;
    default: throw new Error("Invalid control flow in sub_1a02d");
    }
  }
  } finally {execution.leave(frame);}
}

function* sub_1a040() {
  let pc=0;
  const frame=execution.enter('sub_1a040',pc);pc=frame.pc;
  let skipBudget=frame.budget || execution.restoring;
  try {
  if(execution.restoring && execution.pending.length===0) {
    execution.restoring=false;
    if(frame.parked!==null) {yield frame.parked;frame.parked=null;frame.budget=false;}
  }
  dispatch: while (true) {
    if (!skipBudget && (++game.steps & 1023) === 0) {
      frame.pc=pc;frame.budget=true;frame.parked=0;yield 0;
      frame.parked=null;frame.budget=false;
    }
    skipBudget=false;
    switch(pc) {
    case 0:

    r.al = 0x00;
    out(0x43, r.al);
    r.al = portRead(0x40);
    r.ah = r.al;
    r.al = portRead(0x40);
    if (r.ax != 0x0000)
        { pc = 0x1a055; continue dispatch; }
    r.ax = 0xfa59;
case 0x1a055:
    memoryASet16(r.ds, 0x2ae5, r.ax);

      return;
    default: throw new Error("Invalid control flow in sub_1a040");
    }
  }
  } finally {execution.leave(frame);}
}

function* sub_1a059() {
  let pc=0;
  const frame=execution.enter('sub_1a059',pc);pc=frame.pc;
  let skipBudget=frame.budget || execution.restoring;
  try {
  if(execution.restoring && execution.pending.length===0) {
    execution.restoring=false;
    if(frame.parked!==null) {yield frame.parked;frame.parked=null;frame.budget=false;}
  }
  dispatch: while (true) {
    if (!skipBudget && (++game.steps & 1023) === 0) {
      frame.pc=pc;frame.budget=true;frame.parked=0;yield 0;
      frame.parked=null;frame.budget=false;
    }
    skipBudget=false;
    switch(pc) {
    case 0:

    r.ax += r.si;
    if (r.ax < r.bx)
        { pc = 0x1a07f; continue dispatch; }
    r.ax -= r.si;
    flags.carry = r.ax < r.di;
    r.ax -= r.di;
    if (!flags.carry)
        { pc = 0x1a067; continue dispatch; }
    r.ax = 0;
case 0x1a067:
    if (r.ax > r.bx)
        { pc = 0x1a07f; continue dispatch; }
    r.dl += r.cl;
    if (r.dl < r.dh)
        { pc = 0x1a07f; continue dispatch; }
    r.dl -= r.cl;
    flags.carry = r.dl < r.ch;
    r.dl -= r.ch;
    if (!flags.carry)
        { pc = 0x1a079; continue dispatch; }
    r.dl = 0;
case 0x1a079:
    if (r.dl > r.dh)
        { pc = 0x1a07f; continue dispatch; }
    flags.carry = true;
    return;
case 0x1a07f:
    flags.carry = false;

      return;
    default: throw new Error("Invalid control flow in sub_1a059");
    }
  }
  } finally {execution.leave(frame);}
}

function* sub_1a090() {
  let pc=0;
  const frame=execution.enter('sub_1a090',pc);pc=frame.pc;
  let skipBudget=frame.budget || execution.restoring;
  try {
  if(execution.restoring && execution.pending.length===0) {
    execution.restoring=false;
    if(frame.parked!==null) {yield frame.parked;frame.parked=null;frame.budget=false;}
  }
  dispatch: while (true) {
    if (!skipBudget && (++game.steps & 1023) === 0) {
      frame.pc=pc;frame.budget=true;frame.parked=0;yield 0;
      frame.parked=null;frame.budget=false;
    }
    skipBudget=false;
    switch(pc) {
    case 0:

    if (memoryAGet16(r.ds, 0x2e8d) < 0x0008)
        { pc = 0x1a098; continue dispatch; }
case 0x1a097:
    return;
case 0x1a098:
    if (memoryAGet(r.ds, 0x069a) != 0x00)
        { pc = 0x1a097; continue dispatch; }
    memoryASet16(r.ds, 0x2e92, 0xffff);
    memoryASet(r.ds, 0x2e91, 0xff);
    r.cx = 0x0007;
case 0x1a0ad:
    r.bx = r.cx;
    r.bx--;
    r.al = memoryAGet(r.ds, 0x057b);
    flags.carry = r.al < memoryAGet(r.ds, r.bx + 11220);
    r.al -= memoryAGet(r.ds, r.bx + 11220);
    if (!flags.carry)
        { pc = 0x1a0bb; continue dispatch; }
    r.al = ~r.al;
case 0x1a0bb:
    if (r.al > memoryAGet(r.ds, 0x2e91))
        { pc = 0x1a0c8; continue dispatch; }
    memoryASet(r.ds, 0x2e91, r.al);
    memoryASet16(r.ds, 0x2e92, r.bx);
case 0x1a0c8:
    if (--r.cx)
        { pc = 0x1a0ad; continue dispatch; }
    if (memoryAGet16(r.ds, 0x2e92) != 0xffff)
        { pc = 0x1a0d8; continue dispatch; }
    memoryASet16(r.ds, 0x2e92, 0x0000);
case 0x1a0d8:
    r.bx = memoryAGet16(r.ds, 0x2e8d);
    r.si = memoryAGet16(r.ds, 0x2e92);
    r.al = memoryAGet(r.ds, r.si + 11220);
    memoryASet(r.ds, r.bx + 11114, r.al);
    memoryASet(r.ds, 0x2e98, r.al);
    r.ax = memoryAGet16(r.ds, 0x0579);
    r.bl <<= 1;
    if (r.ax < 0x0108)
        { pc = 0x1a0f8; continue dispatch; }
    r.ax = 0x0107;
case 0x1a0f8:
    r.ax &= 0x0ffc;
    memoryASet16(r.ds, r.bx + 11098, r.ax);
    memoryASet16(r.ds, 0x2e96, r.ax);
    r.cx = 0x0008;
case 0x1a105:
    r.bx = r.cx;
    r.bx--;
    if (r.bx == memoryAGet16(r.ds, 0x2e8d))
        { pc = 0x1a137; continue dispatch; }
    if (memoryAGet(r.ds, r.bx + 11122) == 0x00)
        { pc = 0x1a137; continue dispatch; }
    push(r.cx);
    r.dl = memoryAGet(r.ds, r.bx + 11114);
    r.bl <<= 1;
    r.ax = memoryAGet16(r.ds, r.bx + 11098);
    r.bx = memoryAGet16(r.ds, 0x2e96);
    r.dh = memoryAGet(r.ds, 0x2e98);
    r.si = 0x0018;
    r.di = r.si;
    r.cx = 0x0f0f;
    frame.pc=2097153;
case 2097153:
yield* sub_1a059();
frame.pc=2097154;
case 2097154:;
    r.cx = pop();
    if (!flags.carry)
        { pc = 0x1a137; continue dispatch; }
    return;
case 0x1a137:
    if (--r.cx)
        { pc = 0x1a105; continue dispatch; }
    frame.pc=2097155;
case 2097155:
yield* sub_18413();
frame.pc=2097156;
case 2097156:;
    if (memoryAGet(r.ds, 0x70f2) == 0x00)
        { pc = 0x1a146; continue dispatch; }
    frame.pc=2097157;
case 2097157:
yield* sub_1d45b();
frame.pc=2097158;
case 2097158:;
case 0x1a146:
    r.bx = memoryAGet16(r.ds, 0x2e8d);
    memoryASet16(r.ds, 0x2e94, r.bx);
    memoryASet(r.ds, r.bx + 11122, 0x01);
    r.dl = memoryAGet(r.ds, r.bx + 11114);
    r.bl <<= 1;
    r.cx = memoryAGet16(r.ds, r.bx + 11098);
    frame.pc=2097159;
case 2097159:
yield* sub_19ee0();
frame.pc=2097160;
case 2097160:;
    r.di = r.ax;
    r.si = 0x2af0;
    r.ax = 0xb800;
    r.es = r.ax;
    r.cx = 0x0f03;
    frame.pc=2097161;
case 2097161:
yield* sub_19fcd();
frame.pc=2097162;
case 2097162:;
    memoryASet16(r.ds, 0x2e8d, 0xffff);
    r.bx = 0;
    r.ah = 0x0b;
    frame.pc=2097163;
case 2097163:
yield* interrupt(0x10);
frame.pc=2097164;
case 2097164:;
    frame.pc=2097165;
case 2097165:
yield* sub_1c06e();
frame.pc=2097166;
case 2097166:;
    if (memoryAGet(r.ds, 0x70f2) == 0x00)
        { pc = 0x1a189; continue dispatch; }
    frame.pc=2097167;
case 2097167:
yield* sub_1d42a();
frame.pc=2097168;
case 2097168:;
case 0x1a189:
    frame.pc=2097169;
case 2097169:
yield* sub_18375();
frame.pc=2097170;
case 2097170:;
    r.ax = 0x03e8;
    r.bx = 0x04a5;
    frame.pc=2097171;
case 2097171:
yield* sub_1cb6b();
frame.pc=2097172;
case 2097172:;

      return;
    default: throw new Error("Invalid control flow in sub_1a090");
    }
  }
  } finally {execution.leave(frame);}
}

function* sub_1a196() {
  let pc=0;
  const frame=execution.enter('sub_1a196',pc);pc=frame.pc;
  let skipBudget=frame.budget || execution.restoring;
  try {
  if(execution.restoring && execution.pending.length===0) {
    execution.restoring=false;
    if(frame.parked!==null) {yield frame.parked;frame.parked=null;frame.budget=false;}
  }
  dispatch: while (true) {
    if (!skipBudget && (++game.steps & 1023) === 0) {
      frame.pc=pc;frame.budget=true;frame.parked=0;yield 0;
      frame.parked=null;frame.budget=false;
    }
    skipBudget=false;
    switch(pc) {
    case 0:

    r.ah = 0;
    frame.pc=2097153;
case 2097153:
yield* interrupt(0x1a);
frame.pc=2097154;
case 2097154:;
    if (r.dx != memoryAGet16(r.ds, 0x2e8f))
        { pc = 0x1a1a1; continue dispatch; }
    return;
case 0x1a1a1:
    memoryASet16(r.ds, 0x2e8f, r.dx);
    if (memoryAGet16(r.ds, 0x2e8d) < 0x0008)
        { pc = 0x1a1dc; continue dispatch; }
    r.cx = 0x0008;
case 0x1a1af:
    r.bx = r.cx;
    r.bx--;
    if (memoryAGet(r.ds, r.bx + 11122) == 0x00)
        { pc = 0x1a1da; continue dispatch; }
    push(r.cx);
    r.dl = memoryAGet(r.ds, r.bx + 11114);
    r.bl <<= 1;
    r.ax = memoryAGet16(r.ds, r.bx + 11098);
    r.si = 0x0018;
    r.di = r.si;
    r.bx = memoryAGet16(r.ds, 0x0579);
    r.dh = memoryAGet(r.ds, 0x057b);
    r.cx = 0x0e0f;
    frame.pc=2097155;
case 2097155:
yield* sub_1a059();
frame.pc=2097156;
case 2097156:;
    r.cx = pop();
    if (flags.carry)
        { pc = 0x1a1e3; continue dispatch; }
case 0x1a1da:
    if (--r.cx)
        { pc = 0x1a1af; continue dispatch; }
case 0x1a1dc:
    memoryASet16(r.ds, 0x2e94, 0xffff);
case 0x1a1e2:
    return;
case 0x1a1e3:
    r.bx = r.cx;
    r.bx--;
    if (r.bx == memoryAGet16(r.ds, 0x2e94))
        { pc = 0x1a1e2; continue dispatch; }
    push(r.bx);
    frame.pc=2097157;
case 2097157:
yield* sub_18413();
frame.pc=2097158;
case 2097158:;
    if (memoryAGet(r.ds, 0x70f2) == 0x00)
        { pc = 0x1a1fa; continue dispatch; }
    frame.pc=2097159;
case 2097159:
yield* sub_1d45b();
frame.pc=2097160;
case 2097160:;
case 0x1a1fa:
    r.bx = pop();
    memoryASet(r.ds, r.bx + 11122, 0x00);
    r.dl = memoryAGet(r.ds, r.bx + 11114);
    memoryASet16(r.ds, 0x2e8d, r.bx);
    r.bl <<= 1;
    r.cx = memoryAGet16(r.ds, r.bx + 11098);
    frame.pc=2097161;
case 2097161:
yield* sub_19ee0();
frame.pc=2097162;
case 2097162:;
    r.di = r.ax;
    r.si = 0x2b7a;
    r.ax = 0xb800;
    r.es = r.ax;
    r.cx = 0x0f03;
    frame.pc=2097163;
case 2097163:
yield* sub_19fcd();
frame.pc=2097164;
case 2097164:;
    if (memoryAGet(r.ds, 0x70f2) == 0x00)
        { pc = 0x1a22b; continue dispatch; }
    frame.pc=2097165;
case 2097165:
yield* sub_1d42a();
frame.pc=2097166;
case 2097166:;
case 0x1a22b:
    frame.pc=2097167;
case 2097167:
yield* sub_18375();
frame.pc=2097168;
case 2097168:;
    r.bx = 0x0001;
    r.ah = 0x0b;
    frame.pc=2097169;
case 2097169:
yield* interrupt(0x10);
frame.pc=2097170;
case 2097170:;
    r.ax = 0x03e8;
    r.bx = 0x0349;
    frame.pc=2097171;
case 2097171:
yield* sub_1cb6b();
frame.pc=2097172;
case 2097172:;

      return;
    default: throw new Error("Invalid control flow in sub_1a196");
    }
  }
  } finally {execution.leave(frame);}
}

function* sub_1a23f() {
  let pc=0;
  const frame=execution.enter('sub_1a23f',pc);pc=frame.pc;
  let skipBudget=frame.budget || execution.restoring;
  try {
  if(execution.restoring && execution.pending.length===0) {
    execution.restoring=false;
    if(frame.parked!==null) {yield frame.parked;frame.parked=null;frame.budget=false;}
  }
  dispatch: while (true) {
    if (!skipBudget && (++game.steps & 1023) === 0) {
      frame.pc=pc;frame.budget=true;frame.parked=0;yield 0;
      frame.parked=null;frame.budget=false;
    }
    skipBudget=false;
    switch(pc) {
    case 0:

    r.ax = 0;
    r.bx = 0x2e24;
    frame.pc=2097153;
case 2097153:
yield* sub_19d54();
frame.pc=2097154;
case 2097154:;
    memoryASet(r.ds, 0x2e8a, 0xbf);
    memoryASet16(r.ds, 0x2e8b, 0x0000);
case 0x1a252:
    memoryASet16(r.ds, 0x2e88, 0x0020);
case 0x1a258:
    r.bx = 0;
    if (memoryAGet(r.ds, 0x2e8a) == 0xbf)
        { pc = 0x1a269; continue dispatch; }
    frame.pc=2097155;
case 2097155:
yield* sub_1a02d();
frame.pc=2097156;
case 2097156:;
    r.bl = r.dl;
    r.bl &= 0x02;
case 0x1a269:
    r.cx = memoryAGet16(r.ds, 0x2e88);
    r.dl = memoryAGet(r.ds, 0x2e8a);
    push(r.bx);
    frame.pc=2097157;
case 2097157:
yield* sub_1a313();
frame.pc=2097158;
case 2097158:;
    r.bx = pop();
    r.si = memoryAGet16(r.ds, 0x2e8b);
    r.ax = memoryAGet16(r.ds, 0x2e88);
    r.cl = 0x04;
    r.ax >>= r.cl;
    flags.carry = r.ax < 0x0002;
    r.ax -= 0x0002;
    if (!flags.carry)
        { pc = 0x1a288; continue dispatch; }
    r.ax = 0;
case 0x1a288:
    if (r.ax < 0x0012)
        { pc = 0x1a290; continue dispatch; }
    r.ax = 0x0011;
case 0x1a290:
    r.dl = memoryAGet(r.ds, r.si + 11227);
    r.dh = 0;
    r.ax += r.dx;
    r.si = r.ax;
    memoryASet(r.ds, r.si + 11234, r.bl);
    memoryASet16(r.ds, 0x2e88, memoryAGet16(r.ds, 0x2e88) + 0x0010);
    if (memoryAGet16(r.ds, 0x2e88) < 0x0111)
        { pc = 0x1a258; continue dispatch; }
    memoryASet16(r.ds, 0x2e8b, memoryAGet16(r.ds, 0x2e8b) + 1);
    memoryASet(r.ds, 0x2e8a, memoryAGet(r.ds, 0x2e8a) - 0x18);
    if (memoryAGet(r.ds, 0x2e8a) >= 0x2f)
        { pc = 0x1a252; continue dispatch; }
    r.ax = 0xffff;
    memoryASet16(r.ds, 0x2e8d, r.ax);
    memoryASet16(r.ds, 0x2e94, r.ax);
    r.ax = 0;
    memoryASet16(r.ds, 0x2b72, r.ax);
    memoryASet16(r.ds, 0x2b74, r.ax);
    memoryASet16(r.ds, 0x2b76, r.ax);
    memoryASet16(r.ds, 0x2b78, r.ax);
    r.cx = memoryAGet16(r.ds, 0x0414);
    if (r.cx != 0x0000)
        { pc = 0x1a2e0; continue dispatch; }
    r.cx++;
    memoryASet16(r.ds, 0x0414, r.cx);
case 0x1a2e0:
    if (r.cx <= 0x0008)
        { pc = 0x1a2e8; continue dispatch; }
    r.cx = 0x0008;
case 0x1a2e8:
    r.bx = r.cx;
    r.bx--;
    memoryASet(r.ds, r.bx + 11122, 0x01);
    r.dl = 0xb0;
    memoryASet(r.ds, r.bx + 11114, r.dl);
    push(r.cx);
    r.bl <<= 1;
    r.cx = memoryAGet16(r.ds, r.bx + 11082);
    memoryASet16(r.ds, r.bx + 11098, r.cx);
    frame.pc=2097159;
case 2097159:
yield* sub_19ee0();
frame.pc=2097160;
case 2097160:;
    r.di = r.ax;
    r.si = 0x2af0;
    r.cx = 0x0f03;
    frame.pc=2097161;
case 2097161:
yield* sub_19fcd();
frame.pc=2097162;
case 2097162:;
    r.cx = pop();
    if (--r.cx)
        { pc = 0x1a2e8; continue dispatch; }

      return;
    default: throw new Error("Invalid control flow in sub_1a23f");
    }
  }
  } finally {execution.leave(frame);}
}

function* sub_1a313() {
  let pc=0;
  const frame=execution.enter('sub_1a313',pc);pc=frame.pc;
  let skipBudget=frame.budget || execution.restoring;
  try {
  if(execution.restoring && execution.pending.length===0) {
    execution.restoring=false;
    if(frame.parked!==null) {yield frame.parked;frame.parked=null;frame.budget=false;}
  }
  dispatch: while (true) {
    if (!skipBudget && (++game.steps & 1023) === 0) {
      frame.pc=pc;frame.budget=true;frame.parked=0;yield 0;
      frame.parked=null;frame.budget=false;
    }
    skipBudget=false;
    switch(pc) {
    case 0:

    push(r.bx);
    frame.pc=2097153;
case 2097153:
yield* sub_19ee0();
frame.pc=2097154;
case 2097154:;
    r.di = r.ax;
    r.ax = 0xb800;
    r.es = r.ax;
    r.bx = pop();
    r.si = memoryAGet16(r.ds, r.bx + 11808);
    r.cx = 0x0802;
    frame.pc=2097155;
case 2097155:
yield* sub_19fcd();
frame.pc=2097156;
case 2097156:;

      return;
    default: throw new Error("Invalid control flow in sub_1a313");
    }
  }
  } finally {execution.leave(frame);}
}

function* sub_1a32a() {
  let pc=0;
  const frame=execution.enter('sub_1a32a',pc);pc=frame.pc;
  let skipBudget=frame.budget || execution.restoring;
  try {
  if(execution.restoring && execution.pending.length===0) {
    execution.restoring=false;
    if(frame.parked!==null) {yield frame.parked;frame.parked=null;frame.budget=false;}
  }
  dispatch: while (true) {
    if (!skipBudget && (++game.steps & 1023) === 0) {
      frame.pc=pc;frame.budget=true;frame.parked=0;yield 0;
      frame.parked=null;frame.budget=false;
    }
    skipBudget=false;
    switch(pc) {
    case 0:

    r.al = memoryAGet(r.ds, 0x057b);
    r.al -= 0x05;
    r.al &= 0xf8;
    r.cx = 0x0007;
case 0x1a334:
    r.bx = r.cx;
    r.bx--;
    if (r.al == memoryAGet(r.ds, r.bx + 11220))
        { pc = 0x1a341; continue dispatch; }
    if (--r.cx)
        { pc = 0x1a334; continue dispatch; }
    { pc = 0x1a37d; continue dispatch; }
case 0x1a341:
    r.ch = r.al;
    r.ax = memoryAGet16(r.ds, 0x0579);
    r.ax += 0x0007;
    r.cl = 0x04;
    r.ax >>= r.cl;
    flags.carry = r.ax < 0x0002;
    r.ax -= 0x0002;
    if (!flags.carry)
        { pc = 0x1a354; continue dispatch; }
    r.ax = 0;
case 0x1a354:
    if (r.ax < 0x0012)
        { pc = 0x1a35c; continue dispatch; }
    r.ax = 0x0011;
case 0x1a35c:
    r.dl = memoryAGet(r.ds, r.bx + 11227);
    r.dh = 0;
    r.ax += r.dx;
    r.si = r.ax;
    if (memoryAGet(r.ds, r.si + 11234) != 0x00)
        { pc = 0x1a37d; continue dispatch; }
    r.ch += 0x05;
    memoryASet(r.ds, 0x057b, r.ch);
    r.ch += 0x32;
    memoryASet(r.ds, 0x057c, r.ch);
    flags.carry = true;
    return;
case 0x1a37d:
    flags.carry = false;

      return;
    default: throw new Error("Invalid control flow in sub_1a32a");
    }
  }
  } finally {execution.leave(frame);}
}

function* sub_1a380() {
  let pc=0;
  const frame=execution.enter('sub_1a380',pc);pc=frame.pc;
  let skipBudget=frame.budget || execution.restoring;
  try {
  if(execution.restoring && execution.pending.length===0) {
    execution.restoring=false;
    if(frame.parked!==null) {yield frame.parked;frame.parked=null;frame.budget=false;}
  }
  dispatch: while (true) {
    if (!skipBudget && (++game.steps & 1023) === 0) {
      frame.pc=pc;frame.budget=true;frame.parked=0;yield 0;
      frame.parked=null;frame.budget=false;
    }
    skipBudget=false;
    switch(pc) {
    case 0:

    r.ah = 0;
    frame.pc=2097153;
case 2097153:
yield* interrupt(0x1a);
frame.pc=2097154;
case 2097154:;
    r.bx = memoryAGet16(r.ds, 0x0004);
    r.bl <<= 1;
    r.cx = memoryAGet16(r.ds, r.bx + 13042);
    r.ax = r.dx;
    r.ax -= memoryAGet16(r.ds, 0x328c);
    if (r.ax >= r.cx)
        { pc = 0x1a399; continue dispatch; }
case 0x1a398:
    return;
case 0x1a399:
    memoryASet16(r.ds, 0x328c, r.dx);
    frame.pc=2097155;
case 2097155:
yield* sub_1a5ea();
frame.pc=2097156;
case 2097156:;
    if (flags.carry)
        { pc = 0x1a398; continue dispatch; }
    frame.pc=2097157;
case 2097157:
yield* sub_19410();
frame.pc=2097158;
case 2097158:;
    if (flags.carry)
        { pc = 0x1a398; continue dispatch; }
    memoryASet(r.ds, 0x32ea, memoryAGet(r.ds, 0x32ea) + 1);
    frame.pc=2097159;
case 2097159:
yield* sub_1a02d();
frame.pc=2097160;
case 2097160:;
    r.al = memoryAGet(r.ds, 0x32ea);
    r.al &= r.dl;
    memoryASet(r.ds, 0x32eb, memoryAGet(r.ds, 0x32eb) ^ r.al);
    r.ax = memoryAGet16(r.ds, 0x327d);
    flags.carry = r.ax < memoryAGet16(r.ds, 0x0579);
    r.ax -= memoryAGet16(r.ds, 0x0579);
    r.dl = 0xff;
    if (!flags.carry)
        { pc = 0x1a3c6; continue dispatch; }
    r.ax = ~r.ax;
    r.dl = 0x01;
case 0x1a3c6:
    memoryASet(r.ds, 0x32ed, r.dl);
    r.bl = memoryAGet(r.ds, 0x327f);
    r.bl += 0x14;
    flags.carry = r.bl < memoryAGet(r.ds, 0x057b);
    r.bl -= memoryAGet(r.ds, 0x057b);
    r.dl = 0xff;
    if (!flags.carry)
        { pc = 0x1a3dd; continue dispatch; }
    r.bl = ~r.bl;
    r.dl = 0x01;
case 0x1a3dd:
    memoryASet(r.ds, 0x32ee, r.dl);
    r.ax >>= 1;
    r.ax >>= 1;
    r.bl >>= 1;
    r.al += r.bl;
    memoryASet(r.ds, 0x32ec, r.al);
    r.bx = memoryAGet16(r.ds, 0x328a);
    if (r.bx < 0x0027)
        { pc = 0x1a3fc; continue dispatch; }
    r.bx = 0x0026;
    memoryASet16(r.ds, 0x328a, r.bx);
case 0x1a3fc:
    if (memoryAGet(r.ds, r.bx + 12942) != 0x00)
        { pc = 0x1a47b; continue dispatch; }
    memoryASet16(r.ds, 0x328a, memoryAGet16(r.ds, 0x328a) - 1);
    r.ah = 0;
    frame.pc=2097161;
case 2097161:
yield* interrupt(0x1a);
frame.pc=2097162;
case 2097162:;
    r.dx -= memoryAGet16(r.ds, 0x0410);
    r.cl = 0x03;
    r.dx >>= r.cl;
    r.al = memoryAGet(r.ds, 0x32ec);
    flags.carry = r.al < r.dl;
    r.al -= r.dl;
    if (!flags.carry)
        { pc = 0x1a41c; continue dispatch; }
    r.al = 0;
case 0x1a41c:
    if (r.al < memoryAGet(r.ds, 0x32eb))
        { pc = 0x1a442; continue dispatch; }
    memoryASet(r.ds, 0x3281, 0x01);
    frame.pc=2097163;
case 2097163:
yield* sub_1a02d();
frame.pc=2097164;
case 2097164:;
    if (r.dl == 0x00)
        { pc = 0x1a43b; continue dispatch; }
    if (r.dl > 0x07)
        { pc = 0x1a43f; continue dispatch; }
    r.dl &= 0x01;
    if (r.dl != 0)
        { pc = 0x1a43b; continue dispatch; }
    r.dl = 0xff;
case 0x1a43b:
    memoryASet(r.ds, 0x3280, r.dl);
case 0x1a43f:
    { pc = 0x1a4dc; continue dispatch; }
case 0x1a442:
    r.al = memoryAGet(r.ds, 0x32eb);
    r.al &= 0x2f;
    if (r.al != 0)
        { pc = 0x1a468; continue dispatch; }
    frame.pc=2097165;
case 2097165:
yield* sub_1a02d();
frame.pc=2097166;
case 2097166:;
    r.dl &= 0x01;
    if (r.dl != 0)
        { pc = 0x1a453; continue dispatch; }
    r.dl = 0xff;
case 0x1a453:
    memoryASet(r.ds, 0x3280, r.dl);
    frame.pc=2097167;
case 2097167:
yield* sub_1a02d();
frame.pc=2097168;
case 2097168:;
    r.dl &= 0x01;
    if (r.dl != 0)
        { pc = 0x1a461; continue dispatch; }
    r.dl = 0xff;
case 0x1a461:
    memoryASet(r.ds, 0x3281, r.dl);
    { pc = 0x1a4dc; continue dispatch; }
case 0x1a468:
    r.al &= 0x07;
    if (r.al != 0)
        { pc = 0x1a4dc; continue dispatch; }
    r.al = memoryAGet(r.ds, 0x32ed);
    memoryASet(r.ds, 0x3280, r.al);
    r.al = memoryAGet(r.ds, 0x32ee);
    memoryASet(r.ds, 0x3281, r.al);
    { pc = 0x1a4dc; continue dispatch; }
case 0x1a47b:
    memoryASet(r.ds, 0x3281, 0x01);
    r.ax = r.bx;
    r.cl = 0x03;
    r.ax <<= r.cl;
    if (memoryAGet16(r.ds, 0x327d) == r.ax)
        { pc = 0x1a499; continue dispatch; }
    r.dl = 0x01;
    if (memoryAGet16(r.ds, 0x327d) < r.ax)
        { pc = 0x1a492; continue dispatch; }
    r.dl = 0xff;
case 0x1a492:
    memoryASet(r.ds, 0x3280, r.dl);
    { pc = 0x1a4dc; continue dispatch; }
case 0x1a499:
    memoryASet(r.ds, 0x3280, 0x00);
    if (memoryAGet(r.ds, 0x327f) != 0xa5)
        { pc = 0x1a4dc; continue dispatch; }
    memoryASet(r.ds, 0x3281, 0x00);
    if (memoryAGet16(r.ds, 0x327a) == 0x0006)
        { pc = 0x1a4b8; continue dispatch; }
    if (memoryAGet16(r.ds, 0x327a) != 0x0012)
        { pc = 0x1a4dc; continue dispatch; }
case 0x1a4b8:
    push(r.bx);
    r.si = 0x31e8;
    r.di = memoryAGet16(r.ds, 0x3282);
    r.cx = 0x1e02;
    r.ax = 0xb800;
    r.es = r.ax;
    frame.pc=2097169;
case 2097169:
yield* sub_19fcd();
frame.pc=2097170;
case 2097170:;
    r.bx = pop();
    memoryASet(r.ds, r.bx + 12942, memoryAGet(r.ds, r.bx + 12942) - 1);
    r.al = memoryAGet(r.ds, r.bx + 12942);
    frame.pc=2097171;
case 2097171:
yield* sub_1a6af();
frame.pc=2097172;
case 2097172:;
    memoryASet(r.ds, 0x3286, 0x01);
case 0x1a4dc:
    r.cx = memoryAGet16(r.ds, 0x327d);
    r.dl = memoryAGet(r.ds, 0x327f);
    memoryASet16(r.ds, 0x32ef, r.cx);
    memoryASet(r.ds, 0x32f1, r.dl);
    if (memoryAGet(r.ds, 0x3280) < 0x01)
        { pc = 0x1a50a; continue dispatch; }
    if (memoryAGet(r.ds, 0x3280) != 0x01)
        { pc = 0x1a503; continue dispatch; }
    r.cx += 0x0008;
    if (r.cx < 0x0131)
        { pc = 0x1a50a; continue dispatch; }
    r.cx = 0x0130;
    { pc = 0x1a50a; continue dispatch; }
case 0x1a503:
    flags.carry = r.cx < 0x0008;
    r.cx -= 0x0008;
    if (!flags.carry)
        { pc = 0x1a50a; continue dispatch; }
    r.cx = 0;
case 0x1a50a:
    r.cx &= 0xfff8;
    memoryASet16(r.ds, 0x327d, r.cx);
    if (memoryAGet(r.ds, 0x3281) < 0x01)
        { pc = 0x1a52e; continue dispatch; }
    if (memoryAGet(r.ds, 0x3281) != 0x01)
        { pc = 0x1a527; continue dispatch; }
    r.dl += 0x02;
    if (r.dl < 0xa6)
        { pc = 0x1a52e; continue dispatch; }
    r.dl = 0xa5;
    { pc = 0x1a52e; continue dispatch; }
case 0x1a527:
    flags.carry = r.dl < 0x02;
    r.dl -= 0x02;
    if (!flags.carry)
        { pc = 0x1a52e; continue dispatch; }
    r.dl = 0;
case 0x1a52e:
    memoryASet(r.ds, 0x327f, r.dl);
    frame.pc=2097173;
case 2097173:
yield* sub_19ee0();
frame.pc=2097174;
case 2097174:;
    memoryASet16(r.ds, 0x3284, r.ax);
    frame.pc=2097175;
case 2097175:
yield* sub_1a5ea();
frame.pc=2097176;
case 2097176:;
    if (!flags.carry)
        { pc = 0x1a558; continue dispatch; }
case 0x1a53d:
    memoryASet(r.ds, 0x3280, 0x00);
    memoryASet(r.ds, 0x3281, 0x00);
    r.cx = memoryAGet16(r.ds, 0x32ef);
    memoryASet16(r.ds, 0x327d, r.cx);
    r.dl = memoryAGet(r.ds, 0x32f1);
    memoryASet(r.ds, 0x327f, r.dl);
    return;
case 0x1a558:
    frame.pc=2097177;
case 2097177:
yield* sub_19410();
frame.pc=2097178;
case 2097178:;
    if (flags.carry)
        { pc = 0x1a53d; continue dispatch; }
    frame.pc=2097179;
case 2097179:
yield* sub_1a5d0();
frame.pc=2097180;
case 2097180:;
    memoryASet16(r.ds, 0x327a, memoryAGet16(r.ds, 0x327a) + 0x0002);
    frame.pc=2097181;
case 2097181:
yield* sub_1a569();
frame.pc=2097182;
case 2097182:;

      return;
    default: throw new Error("Invalid control flow in sub_1a380");
    }
  }
  } finally {execution.leave(frame);}
}

function* sub_1a569() {
  let pc=0;
  const frame=execution.enter('sub_1a569',pc);pc=frame.pc;
  let skipBudget=frame.budget || execution.restoring;
  try {
  if(execution.restoring && execution.pending.length===0) {
    execution.restoring=false;
    if(frame.parked!==null) {yield frame.parked;frame.parked=null;frame.budget=false;}
  }
  dispatch: while (true) {
    if (!skipBudget && (++game.steps & 1023) === 0) {
      frame.pc=pc;frame.budget=true;frame.parked=0;yield 0;
      frame.parked=null;frame.budget=false;
    }
    skipBudget=false;
    switch(pc) {
    case 0:

case 0x1a569:
    r.bx = memoryAGet16(r.ds, 0x327a);
    r.ax = memoryAGet16(r.ds, r.bx + 12896);
    if (r.ax != 0x0000)
        { pc = 0x1a57b; continue dispatch; }
    memoryASet16(r.ds, 0x327a, r.ax);
    { pc = 0x1a569; continue dispatch; }
case 0x1a57b:
    r.si = r.ax;
    r.di = memoryAGet16(r.ds, 0x3284);
    memoryASet16(r.ds, 0x3282, r.di);
    r.bp = 0x31e8;
    r.ax = 0xb800;
    r.es = r.ax;
    r.cx = 0x1e02;
    memoryASet(r.ds, 0x3286, 0x00);
    flags.direction = false;
    memoryASet(r.ds, 0x3289, r.ch);
    r.ch = 0;
    memoryASet16(r.ds, 0x3287, r.cx);
case 0x1a5a0:
    r.cx = memoryAGet16(r.ds, 0x3287);
case 0x1a5a4:
    r.bx = memoryAGet16(r.es, r.di);
    memoryASet16(r.ds, r.bp, r.bx);
    lodsw();
    r.ax |= r.bx;
    stosw();
    r.bp += 0x0002;
    if (--r.cx)
        { pc = 0x1a5a4; continue dispatch; }
    r.di -= memoryAGet16(r.ds, 0x3287);
    r.di -= memoryAGet16(r.ds, 0x3287);
    r.di ^= 0x2000;
    if (r.di & 0x2000)
        { pc = 0x1a5c9; continue dispatch; }
    r.di += 0x0050;
case 0x1a5c9:
    r.tl = memoryAGet(r.ds, 0x3289);
    memoryASet(r.ds, 0x3289, memoryAGet(r.ds, 0x3289) - 1);
    if (r.tl != 1)
        { pc = 0x1a5a0; continue dispatch; }

      return;
    default: throw new Error("Invalid control flow in sub_1a569");
    }
  }
  } finally {execution.leave(frame);}
}

function* sub_1a5d0() {
  let pc=0;
  const frame=execution.enter('sub_1a5d0',pc);pc=frame.pc;
  let skipBudget=frame.budget || execution.restoring;
  try {
  if(execution.restoring && execution.pending.length===0) {
    execution.restoring=false;
    if(frame.parked!==null) {yield frame.parked;frame.parked=null;frame.budget=false;}
  }
  dispatch: while (true) {
    if (!skipBudget && (++game.steps & 1023) === 0) {
      frame.pc=pc;frame.budget=true;frame.parked=0;yield 0;
      frame.parked=null;frame.budget=false;
    }
    skipBudget=false;
    switch(pc) {
    case 0:

    if (memoryAGet(r.ds, 0x3286) != 0x00)
        return;
    r.ax = 0xb800;
    r.es = r.ax;
    r.si = 0x31e8;
    r.di = memoryAGet16(r.ds, 0x3282);
    r.cx = 0x1e02;
    frame.pc=2097153;
case 2097153:
yield* sub_19fcd();
frame.pc=2097154;
case 2097154:;

      return;
    default: throw new Error("Invalid control flow in sub_1a5d0");
    }
  }
  } finally {execution.leave(frame);}
}

function* sub_1a5ea() {
  let pc=0;
  const frame=execution.enter('sub_1a5ea',pc);pc=frame.pc;
  let skipBudget=frame.budget || execution.restoring;
  try {
  if(execution.restoring && execution.pending.length===0) {
    execution.restoring=false;
    if(frame.parked!==null) {yield frame.parked;frame.parked=null;frame.budget=false;}
  }
  dispatch: while (true) {
    if (!skipBudget && (++game.steps & 1023) === 0) {
      frame.pc=pc;frame.budget=true;frame.parked=0;yield 0;
      frame.parked=null;frame.budget=false;
    }
    skipBudget=false;
    switch(pc) {
    case 0:

    if (memoryAGet(r.ds, 0x1cb8) != 0x00)
        { pc = 0x1a633; continue dispatch; }
    if (memoryAGet16(r.ds, 0x0004) != 0x0006)
        { pc = 0x1a603; continue dispatch; }
    if (memoryAGet(r.ds, 0x44bd) == 0x00)
        { pc = 0x1a603; continue dispatch; }
    frame.pc=2097153;
case 2097153:
yield* sub_1b9e0();
frame.pc=2097154;
case 2097154:;
    return;
case 0x1a603:
    r.ax = memoryAGet16(r.ds, 0x327d);
    r.dl = memoryAGet(r.ds, 0x327f);
    r.si = 0x0010;
    r.bx = memoryAGet16(r.ds, 0x0579);
    r.dh = memoryAGet(r.ds, 0x057b);
    r.di = 0x0018;
    r.cx = 0x0e1e;
    frame.pc=2097155;
case 2097155:
yield* sub_1a059();
frame.pc=2097156;
case 2097156:;
    if (!flags.carry)
        { pc = 0x1a633; continue dispatch; }
    if (memoryAGet16(r.ds, 0x0004) != 0x0004)
        { pc = 0x1a62e; continue dispatch; }
    if (memoryAGet(r.ds, 0x39e1) != 0x00)
        { pc = 0x1a631; continue dispatch; }
case 0x1a62e:
    frame.pc=2097157;
case 2097157:
yield* sub_17aa2();
frame.pc=2097158;
case 2097158:;
case 0x1a631:
    flags.carry = true;
    return;
case 0x1a633:
    flags.carry = false;

      return;
    default: throw new Error("Invalid control flow in sub_1a5ea");
    }
  }
  } finally {execution.leave(frame);}
}

function* sub_1a635() {
  let pc=0;
  const frame=execution.enter('sub_1a635',pc);pc=frame.pc;
  let skipBudget=frame.budget || execution.restoring;
  try {
  if(execution.restoring && execution.pending.length===0) {
    execution.restoring=false;
    if(frame.parked!==null) {yield frame.parked;frame.parked=null;frame.budget=false;}
  }
  dispatch: while (true) {
    if (!skipBudget && (++game.steps & 1023) === 0) {
      frame.pc=pc;frame.budget=true;frame.parked=0;yield 0;
      frame.parked=null;frame.budget=false;
    }
    skipBudget=false;
    switch(pc) {
    case 0:

    flags.direction = false;
    r.ax = 0;
    push(r.ds);
    r.es = pop();
    r.di = 0x328e;
    r.cx = 0x0014;
    rep_stosw();
    memoryASet16(r.ds, 0x32b6, 0x00ff);
    memoryASet16(r.ds, 0x327a, 0x0000);
    memoryASet16(r.ds, 0x327d, 0x0000);
    memoryASet(r.ds, 0x327f, 0xa0);
    memoryASet(r.ds, 0x3286, 0x01);
    memoryASet(r.ds, 0x3280, 0x00);
    memoryASet(r.ds, 0x3281, 0x00);
    frame.pc=2097153;
case 2097153:
yield* sub_1a02d();
frame.pc=2097154;
case 2097154:;
    memoryASet(r.ds, 0x32eb, r.dl);
    memoryASet(r.ds, 0x32ea, 0x6c);

      return;
    default: throw new Error("Invalid control flow in sub_1a635");
    }
  }
  } finally {execution.leave(frame);}
}

function* sub_1a675() {
  let pc=0;
  const frame=execution.enter('sub_1a675',pc);pc=frame.pc;
  let skipBudget=frame.budget || execution.restoring;
  try {
  if(execution.restoring && execution.pending.length===0) {
    execution.restoring=false;
    if(frame.parked!==null) {yield frame.parked;frame.parked=null;frame.budget=false;}
  }
  dispatch: while (true) {
    if (!skipBudget && (++game.steps & 1023) === 0) {
      frame.pc=pc;frame.budget=true;frame.parked=0;yield 0;
      frame.parked=null;frame.budget=false;
    }
    skipBudget=false;
    switch(pc) {
    case 0:

    if (memoryAGet(r.ds, 0x057b) < 0xb4)
        return;
    if (memoryAGet(r.ds, 0x056e) == 0x00)
        return;
    r.ax = memoryAGet16(r.ds, 0x0579);
    r.ax += 0x000c;
    r.cl = 0x03;
    r.ax >>= r.cl;
    if (r.ax > 0x0027)
        return;
    if (r.ax == memoryAGet16(r.ds, 0x32b6))
        return;
    memoryASet16(r.ds, 0x32b6, r.ax);
    r.bx = r.ax;
    r.al = memoryAGet(r.ds, r.bx + 12942);
    if (r.al >= 0x04)
        return;
    r.al++;
    memoryASet(r.ds, r.bx + 12942, r.al);
    frame.pc=2097153;
case 2097153:
yield* sub_1a6af();
frame.pc=2097154;
case 2097154:;

      return;
    default: throw new Error("Invalid control flow in sub_1a675");
    }
  }
  } finally {execution.leave(frame);}
}

function* sub_1a6af() {
  let pc=0;
  const frame=execution.enter('sub_1a6af',pc);pc=frame.pc;
  let skipBudget=frame.budget || execution.restoring;
  try {
  if(execution.restoring && execution.pending.length===0) {
    execution.restoring=false;
    if(frame.parked!==null) {yield frame.parked;frame.parked=null;frame.budget=false;}
  }
  dispatch: while (true) {
    if (!skipBudget && (++game.steps & 1023) === 0) {
      frame.pc=pc;frame.budget=true;frame.parked=0;yield 0;
      frame.parked=null;frame.budget=false;
    }
    skipBudget=false;
    switch(pc) {
    case 0:

    r.ah = 0x0a;
    mul8(r.ah);
    r.ax += 0x32b8;
    r.si = r.ax;
    r.di = r.bx;
    r.di <<= 1;
    r.di += 0x1e00;
    r.ax = 0xb800;
    r.es = r.ax;
    r.cx = 0x0501;
    frame.pc=2097153;
case 2097153:
yield* sub_19fcd();
frame.pc=2097154;
case 2097154:;

      return;
    default: throw new Error("Invalid control flow in sub_1a6af");
    }
  }
  } finally {execution.leave(frame);}
}

function* sub_1a6d0() {
  let pc=0;
  const frame=execution.enter('sub_1a6d0',pc);pc=frame.pc;
  let skipBudget=frame.budget || execution.restoring;
  try {
  if(execution.restoring && execution.pending.length===0) {
    execution.restoring=false;
    if(frame.parked!==null) {yield frame.parked;frame.parked=null;frame.budget=false;}
  }
  dispatch: while (true) {
    if (!skipBudget && (++game.steps & 1023) === 0) {
      frame.pc=pc;frame.budget=true;frame.parked=0;yield 0;
      frame.parked=null;frame.budget=false;
    }
    skipBudget=false;
    switch(pc) {
    case 0:

    memoryASet16(r.ds, 0x3511, 0x0000);
    memoryASet(r.ds, 0x351b, 0x00);
case 0x1a6db:
    r.bx = memoryAGet16(r.ds, 0x3511);
    if (memoryAGet(r.ds, r.bx + 13479) == 0x00)
        { pc = 0x1a6e9; continue dispatch; }
case 0x1a6e6:
    { pc = 0x1a7dd; continue dispatch; }
case 0x1a6e9:
    r.si = r.bx;
    r.si <<= 1;
    r.ax = memoryAGet16(r.ds, r.si + 13383);
    r.dl = memoryAGet(r.ds, r.bx + 13431);
    r.di = 0x0000;
    if (r.bx < 0x000c)
        { pc = 0x1a700; continue dispatch; }
    r.di = 0x0002;
case 0x1a700:
    r.si = memoryAGet16(r.ds, r.di + 13587);
    r.cx = memoryAGet16(r.ds, r.di + 13591);
    r.bx = memoryAGet16(r.ds, 0x0579);
    r.dh = memoryAGet(r.ds, 0x057b);
    r.di = 0x0018;
    r.ch = 0x0e;
    frame.pc=2097153;
case 2097153:
yield* sub_1a059();
frame.pc=2097154;
case 2097154:;
    if (!flags.carry)
        { pc = 0x1a6e6; continue dispatch; }
    r.bx = memoryAGet16(r.ds, 0x3511);
    if (r.bx < 0x000c)
        { pc = 0x1a79f; continue dispatch; }
    if (memoryAGet(r.ds, 0x0553) != 0x00)
        { pc = 0x1a79f; continue dispatch; }
    if (memoryAGet(r.ds, 0x05f3) != 0x00)
        { pc = 0x1a79f; continue dispatch; }
    memoryASet(r.ds, 0x0552, 0x01);
    r.cx = memoryAGet16(r.ds, 0x0579);
    flags.carry = r.cx < 0x0008;
    r.cx -= 0x0008;
    if (!flags.carry)
        { pc = 0x1a741; continue dispatch; }
    r.cx = 0;
case 0x1a741:
    if (r.cx < 0x0117)
        { pc = 0x1a74a; continue dispatch; }
    r.cx = 0x0116;
case 0x1a74a:
    r.dl = memoryAGet(r.ds, 0x057b);
    if (r.dl < 0xb5)
        { pc = 0x1a755; continue dispatch; }
    r.dl = 0xb4;
case 0x1a755:
    frame.pc=2097155;
case 2097155:
yield* sub_19ee0();
frame.pc=2097156;
case 2097156:;
    r.di = r.ax;
    r.si = 0x3350;
    r.ax = 0xb800;
    r.es = r.ax;
    r.cx = 0x1205;
    frame.pc=2097157;
case 2097157:
yield* sub_19fcd();
frame.pc=2097158;
case 2097158:;
    frame.pc=2097159;
case 2097159:
yield* sub_1c9c7();
frame.pc=2097160;
case 2097160:;
    r.ah = 0;
    frame.pc=2097161;
case 2097161:
yield* interrupt(0x1a);
frame.pc=2097162;
case 2097162:;
    memoryASet16(r.ds, 0x3509, r.dx);
case 0x1a773:
    push(r.dx);
case 0x1a774:
    frame.pc=2097163;
case 2097163:
yield* sub_1c9d6();
frame.pc=2097164;
case 2097164:;
    frame.pc=2097165;
case 2097165:
yield* sub_18608();
frame.pc=2097166;
case 2097166:;
    if (flags.zero)
        { pc = 0x1a774; continue dispatch; }
    frame.pc=2097167;
case 2097167:
yield* sub_1c9d6();
frame.pc=2097168;
case 2097168:;
    r.dx = pop();
    r.bx = 0x0001;
    if (r.dl & 0x01)
        { pc = 0x1a78a; continue dispatch; }
    r.bl = 0x0f;
case 0x1a78a:
    r.ah = 0x0b;
    frame.pc=2097169;
case 2097169:
yield* interrupt(0x10);
frame.pc=2097170;
case 2097170:;
    frame.pc=2097171;
case 2097171:
yield* sub_1c9d6();
frame.pc=2097172;
case 2097172:;
    r.ah = 0;
    frame.pc=2097173;
case 2097173:
yield* interrupt(0x1a);
frame.pc=2097174;
case 2097174:;
    r.dx -= memoryAGet16(r.ds, 0x3509);
    flags.carry = r.dx < 0x000d;
    if (r.dx < 0x000d)
        { pc = 0x1a773; continue dispatch; }
    return;
case 0x1a79f:
    memoryASet(r.ds, 0x351b, memoryAGet(r.ds, 0x351b) + 1);
    r.ax = 0x05dc;
    r.bx = 0x0425;
    frame.pc=2097175;
case 2097175:
yield* sub_1cb6b();
frame.pc=2097176;
case 2097176:;
    if (memoryAGet(r.ds, 0x351b) != 0x01)
        { pc = 0x1a7b6; continue dispatch; }
    frame.pc=2097177;
case 2097177:
yield* sub_18413();
frame.pc=2097178;
case 2097178:;
case 0x1a7b6:
    r.bx = memoryAGet16(r.ds, 0x3511);
    frame.pc=2097179;
case 2097179:
yield* sub_1a9f1();
frame.pc=2097180;
case 2097180:;
    r.bx = memoryAGet16(r.ds, 0x3511);
    memoryASet(r.ds, r.bx + 13479, 0x01);
    if (r.bx >= 0x000c)
        { pc = 0x1a7dd; continue dispatch; }
    r.tl = memoryAGet(r.ds, 0x3410);
    memoryASet(r.ds, 0x3410, memoryAGet(r.ds, 0x3410) - 1);
    if (r.tl != 1)
        { pc = 0x1a7dd; continue dispatch; }
    if (memoryAGet(r.ds, 0x05f3) != 0x00)
        { pc = 0x1a7dd; continue dispatch; }
    memoryASet(r.ds, 0x0553, 0x01);
case 0x1a7dd:
    memoryASet16(r.ds, 0x3511, memoryAGet16(r.ds, 0x3511) + 1);
    if (memoryAGet16(r.ds, 0x3511) >= 0x0018)
        { pc = 0x1a7eb; continue dispatch; }
    { pc = 0x1a6db; continue dispatch; }
case 0x1a7eb:
    if (memoryAGet(r.ds, 0x351b) == 0x00)
        { pc = 0x1a7f7; continue dispatch; }
    frame.pc=2097181;
case 2097181:
yield* sub_1a86d();
frame.pc=2097182;
case 2097182:;
    flags.carry = true;
    return;
case 0x1a7f7:
    flags.carry = false;

      return;
    default: throw new Error("Invalid control flow in sub_1a6d0");
    }
  }
  } finally {execution.leave(frame);}
}

function* sub_1a7f9() {
  let pc=0;
  const frame=execution.enter('sub_1a7f9',pc);pc=frame.pc;
  let skipBudget=frame.budget || execution.restoring;
  try {
  if(execution.restoring && execution.pending.length===0) {
    execution.restoring=false;
    if(frame.parked!==null) {yield frame.parked;frame.parked=null;frame.budget=false;}
  }
  dispatch: while (true) {
    if (!skipBudget && (++game.steps & 1023) === 0) {
      frame.pc=pc;frame.budget=true;frame.parked=0;yield 0;
      frame.parked=null;frame.budget=false;
    }
    skipBudget=false;
    switch(pc) {
    case 0:

    memoryASet16(r.ds, 0x3411, 0x0000);
    memoryASet16(r.ds, 0x3415, 0x0000);
    memoryASet(r.ds, 0x3410, 0x0c);
    r.cx = 0x0018;
case 0x1a80d:
    r.bx = r.cx;
    r.bx--;
    memoryASet(r.ds, r.bx + 13455, 0x01);
    memoryASet(r.ds, r.bx + 13479, 0x00);
    r.al = memoryAGet(r.ds, r.bx + 13553);
    memoryASet(r.ds, r.bx + 13431, r.al);
    memoryASet(r.ds, r.bx + 13359, 0x01);
    frame.pc=2097153;
case 2097153:
yield* sub_1a02d();
frame.pc=2097154;
case 2097154:;
    r.dl &= 0x01;
    if (r.dl != 0)
        { pc = 0x1a831; continue dispatch; }
    r.dl = ~r.dl;
case 0x1a831:
    memoryASet(r.ds, r.bx + 13335, r.dl);
    r.bx <<= 1;
    frame.pc=2097155;
case 2097155:
yield* sub_1a02d();
frame.pc=2097156;
case 2097156:;
    r.dh = 0;
    memoryASet16(r.ds, r.bx + 13383, r.dx);
    if (--r.cx)
        { pc = 0x1a80d; continue dispatch; }
    r.bx = memoryAGet16(r.ds, 0x0008);
    r.cl = memoryAGet(r.ds, r.bx + 13596);
    r.ch = 0;
case 0x1a84c:
    frame.pc=2097157;
case 2097157:
yield* sub_1a02d();
frame.pc=2097158;
case 2097158:;
    r.dl &= 0x0f;
    if (r.dl >= 0x0c)
        { pc = 0x1a84c; continue dispatch; }
    r.bl = r.dl;
    r.bl += 0x0c;
    r.bh = 0;
    if (memoryAGet(r.ds, r.bx + 13479) != 0x00)
        { pc = 0x1a84c; continue dispatch; }
    memoryASet(r.ds, r.bx + 13479, 0x01);
    if (--r.cx)
        { pc = 0x1a84c; continue dispatch; }

      return;
    default: throw new Error("Invalid control flow in sub_1a7f9");
    }
  }
  } finally {execution.leave(frame);}
}

function* sub_1a86d() {
  let pc=0;
  const frame=execution.enter('sub_1a86d',pc);pc=frame.pc;
  let skipBudget=frame.budget || execution.restoring;
  try {
  if(execution.restoring && execution.pending.length===0) {
    execution.restoring=false;
    if(frame.parked!==null) {yield frame.parked;frame.parked=null;frame.budget=false;}
  }
  dispatch: while (true) {
    if (!skipBudget && (++game.steps & 1023) === 0) {
      frame.pc=pc;frame.budget=true;frame.parked=0;yield 0;
      frame.parked=null;frame.budget=false;
    }
    skipBudget=false;
    switch(pc) {
    case 0:

case 0x1a86d:
    r.cx = 0x000c;
case 0x1a870:
    r.bx = r.cx;
    r.bx += 0x000b;
    if (memoryAGet(r.ds, r.bx + 13479) == 0x00)
        { pc = 0x1a8a2; continue dispatch; }
    r.ax = 0;
    r.dl = 0x01;
    memoryASet(r.ds, r.bx + 13479, r.al);
    if (memoryAGet16(r.ds, 0x0579) > 0x00a0)
        { pc = 0x1a891; continue dispatch; }
    r.ax = 0x012e;
    r.dl = 0xff;
case 0x1a891:
    memoryASet(r.ds, r.bx + 13335, r.dl);
    r.bl <<= 1;
    memoryASet16(r.ds, r.bx + 13383, r.ax);
    r.tl = memoryAGet(r.ds, 0x351b);
    memoryASet(r.ds, 0x351b, memoryAGet(r.ds, 0x351b) - 1);
    if (r.tl != 1)
        { pc = 0x1a86d; continue dispatch; }
    return;
case 0x1a8a2:
    if (--r.cx)
        { pc = 0x1a870; continue dispatch; }

      return;
    default: throw new Error("Invalid control flow in sub_1a86d");
    }
  }
  } finally {execution.leave(frame);}
}

function* sub_1a8a5() {
  let pc=0;
  const frame=execution.enter('sub_1a8a5',pc);pc=frame.pc;
  let skipBudget=frame.budget || execution.restoring;
  try {
  if(execution.restoring && execution.pending.length===0) {
    execution.restoring=false;
    if(frame.parked!==null) {yield frame.parked;frame.parked=null;frame.budget=false;}
  }
  dispatch: while (true) {
    if (!skipBudget && (++game.steps & 1023) === 0) {
      frame.pc=pc;frame.budget=true;frame.parked=0;yield 0;
      frame.parked=null;frame.budget=false;
    }
    skipBudget=false;
    switch(pc) {
    case 0:

    r.ah = 0;
    frame.pc=2097153;
case 2097153:
yield* interrupt(0x1a);
frame.pc=2097154;
case 2097154:;
    if (r.dx != memoryAGet16(r.ds, 0x3509))
        { pc = 0x1a8b0; continue dispatch; }
case 0x1a8af:
    return;
case 0x1a8b0:
    memoryASet16(r.ds, 0x350b, r.dx);
    memoryASet16(r.ds, 0x3415, memoryAGet16(r.ds, 0x3415) + 1);
    r.bx = memoryAGet16(r.ds, 0x3415);
    if (r.bx < 0x0018)
        { pc = 0x1a8d4; continue dispatch; }
    r.bx = 0;
    memoryASet16(r.ds, 0x3415, r.bx);
    memoryASet16(r.ds, 0x3411, memoryAGet16(r.ds, 0x3411) ^ 0x000c);
    memoryASet16(r.ds, 0x3413, memoryAGet16(r.ds, 0x3413) + 0x0008);
    { pc = 0x1a8e7; continue dispatch; }
case 0x1a8d4:
    if (r.bx != 0x000c)
        { pc = 0x1a8ed; continue dispatch; }
    if (memoryAGet(r.ds, 0x0697) != 0xfd)
        { pc = 0x1a8e7; continue dispatch; }
    if (memoryAGet(r.ds, 0x057b) < 0x30)
        { pc = 0x1a8ed; continue dispatch; }
case 0x1a8e7:
    r.ax = memoryAGet16(r.ds, 0x350b);
    memoryASet16(r.ds, 0x3509, r.ax);
case 0x1a8ed:
    r.si = r.bx;
    r.si <<= 1;
    if (memoryAGet(r.ds, r.bx + 13479) != 0x00)
        { pc = 0x1a8af; continue dispatch; }
    frame.pc=2097155;
case 2097155:
yield* sub_1a02d();
frame.pc=2097156;
case 2097156:;
    if (r.dl > 0x10)
        { pc = 0x1a919; continue dispatch; }
    r.dl &= 0x01;
    if (r.dl != 0)
        { pc = 0x1a907; continue dispatch; }
    r.dl = ~r.dl;
case 0x1a907:
    memoryASet(r.ds, r.bx + 13335, r.dl);
    frame.pc=2097157;
case 2097157:
yield* sub_1a02d();
frame.pc=2097158;
case 2097158:;
    r.dl &= 0x01;
    if (r.dl != 0)
        { pc = 0x1a915; continue dispatch; }
    r.dl = ~r.dl;
case 0x1a915:
    memoryASet(r.ds, r.bx + 13359, r.dl);
case 0x1a919:
    r.cx = 0x0004;
    if (r.bx < 0x000c)
        { pc = 0x1a923; continue dispatch; }
    r.cl >>= 1;
case 0x1a923:
    r.ax = memoryAGet16(r.ds, r.si + 13383);
    if (memoryAGet(r.ds, r.bx + 13335) == 0x01)
        { pc = 0x1a93b; continue dispatch; }
    flags.carry = r.ax < r.cx;
    r.ax -= r.cx;
    if (!flags.carry)
        { pc = 0x1a94a; continue dispatch; }
    r.ax = 0;
    memoryASet(r.ds, r.bx + 13335, 0x01);
    { pc = 0x1a94a; continue dispatch; }
case 0x1a93b:
    r.ax += r.cx;
    if (r.ax < 0x012f)
        { pc = 0x1a94a; continue dispatch; }
    r.ax = 0x012e;
    memoryASet(r.ds, r.bx + 13335, 0xff);
case 0x1a94a:
    memoryASet16(r.ds, r.si + 13383, r.ax);
    r.al = memoryAGet(r.ds, r.bx + 13431);
    if (memoryAGet(r.ds, r.bx + 13359) == 0x01)
        { pc = 0x1a96c; continue dispatch; }
    r.al--;
    if (r.al >= memoryAGet(r.ds, r.bx + 13553))
        { pc = 0x1a980; continue dispatch; }
    r.al = memoryAGet(r.ds, r.bx + 13553);
    memoryASet(r.ds, r.bx + 13359, 0x01);
    { pc = 0x1a980; continue dispatch; }
case 0x1a96c:
    r.al++;
    r.dl = memoryAGet(r.ds, r.bx + 13553);
    r.dl += 0x18;
    if (r.al <= r.dl)
        { pc = 0x1a980; continue dispatch; }
    r.al = r.dl;
    memoryASet(r.ds, r.bx + 13359, 0xff);
case 0x1a980:
    memoryASet(r.ds, r.bx + 13431, r.al);
    r.dl = r.al;
    r.cx = memoryAGet16(r.ds, r.si + 13383);
    frame.pc=2097159;
case 2097159:
yield* sub_19ee0();
frame.pc=2097160;
case 2097160:;
    memoryASet16(r.ds, 0x34ef, r.ax);
    r.bx = memoryAGet16(r.ds, 0x3415);
    frame.pc=2097161;
case 2097161:
yield* sub_1a9f1();
frame.pc=2097162;
case 2097162:;
    r.bx = memoryAGet16(r.ds, 0x3415);
    r.si = r.bx;
    r.si <<= 1;
    r.di = memoryAGet16(r.ds, 0x34ef);
    memoryASet16(r.ds, r.si + 13503, r.di);
    memoryASet(r.ds, r.bx + 13455, 0x00);
    r.ax = 0xb800;
    r.es = r.ax;
    if (r.bx < 0x000c)
        { pc = 0x1a9cf; continue dispatch; }
    r.si = r.bx;
    r.cl = 0x03;
    r.si <<= r.cl;
    r.si += memoryAGet16(r.ds, 0x3413);
    r.si &= 0x0018;
    r.si += 0x3330;
    r.cx = 0x0202;
    frame.pc=2097163;
case 2097163:
yield* sub_19fcd();
frame.pc=2097164;
case 2097164:;
    return;
case 0x1a9cf:
    r.si = memoryAGet16(r.ds, 0x3411);
    if (r.bl & 0x01)
        { pc = 0x1a9dc; continue dispatch; }
    r.si ^= 0x000c;
case 0x1a9dc:
    if (memoryAGet(r.ds, r.bx + 13335) == 0x01)
        { pc = 0x1a9e6; continue dispatch; }
    r.si += 0x0018;
case 0x1a9e6:
    r.si += 0x3300;
    r.cx = 0x0601;
    frame.pc=2097165;
case 2097165:
yield* sub_19fcd();
frame.pc=2097166;
case 2097166:;

      return;
    default: throw new Error("Invalid control flow in sub_1a8a5");
    }
  }
  } finally {execution.leave(frame);}
}

function* sub_1a9f1() {
  let pc=0;
  const frame=execution.enter('sub_1a9f1',pc);pc=frame.pc;
  let skipBudget=frame.budget || execution.restoring;
  try {
  if(execution.restoring && execution.pending.length===0) {
    execution.restoring=false;
    if(frame.parked!==null) {yield frame.parked;frame.parked=null;frame.budget=false;}
  }
  dispatch: while (true) {
    if (!skipBudget && (++game.steps & 1023) === 0) {
      frame.pc=pc;frame.budget=true;frame.parked=0;yield 0;
      frame.parked=null;frame.budget=false;
    }
    skipBudget=false;
    switch(pc) {
    case 0:

    if (memoryAGet(r.ds, r.bx + 13455) != 0x00)
        return;
    r.bx <<= 1;
    r.si = 0x3404;
    r.di = memoryAGet16(r.ds, r.bx + 13503);
    r.ax = 0xb800;
    r.es = r.ax;
    r.cx = 0x0601;
    if (r.bx < 0x0018)
        { pc = 0x1aa11; continue dispatch; }
    r.cx = 0x0202;
case 0x1aa11:
    frame.pc=2097153;
case 2097153:
yield* sub_19fcd();
frame.pc=2097154;
case 2097154:;

      return;
    default: throw new Error("Invalid control flow in sub_1a9f1");
    }
  }
  } finally {execution.leave(frame);}
}

function* sub_1aa15() {
  let pc=0;
  const frame=execution.enter('sub_1aa15',pc);pc=frame.pc;
  let skipBudget=frame.budget || execution.restoring;
  try {
  if(execution.restoring && execution.pending.length===0) {
    execution.restoring=false;
    if(frame.parked!==null) {yield frame.parked;frame.parked=null;frame.budget=false;}
  }
  dispatch: while (true) {
    if (!skipBudget && (++game.steps & 1023) === 0) {
      frame.pc=pc;frame.budget=true;frame.parked=0;yield 0;
      frame.parked=null;frame.budget=false;
    }
    skipBudget=false;
    switch(pc) {
    case 0:

    r.ah = 0;
    frame.pc=2097153;
case 2097153:
yield* interrupt(0x1a);
frame.pc=2097154;
case 2097154:;
    r.ax = r.dx;
    r.ax -= memoryAGet16(r.ds, 0x350f);
    if (r.ax < 0x0008)
        return;
    memoryASet16(r.ds, 0x350d, memoryAGet16(r.ds, 0x350d) + 1);
    r.bx = memoryAGet16(r.ds, 0x350d);
    if (r.bx < 0x0028)
        { pc = 0x1aa3b; continue dispatch; }
    r.bx = 0;
    memoryASet16(r.ds, 0x350d, r.bx);
    memoryASet16(r.ds, 0x350f, r.dx);
case 0x1aa3b:
    r.di = r.bx;
    r.di <<= 1;
    if (memoryAGet(r.ds, 0x057b) > 0x07)
        { pc = 0x1aa59; continue dispatch; }
    r.ax = memoryAGet16(r.ds, 0x0579);
    r.cl = 0x02;
    r.ax >>= r.cl;
    r.ax++;
    flags.carry = r.ax < r.di;
    r.ax -= r.di;
    if (!flags.carry)
        { pc = 0x1aa54; continue dispatch; }
    r.ax = ~r.ax;
case 0x1aa54:
    if (r.ax < 0x0004)
        return;
case 0x1aa59:
    r.di += 0x00a0;
    r.al = memoryAGet(r.ds, r.bx + 9814);
    r.al += 0x08;
    memoryASet(r.ds, r.bx + 9814, r.al);
    r.ax &= 0x0018;
    r.ax += 0x2020;
    r.si = r.ax;
    r.ax = 0xb800;
    r.es = r.ax;
    r.cx = 0x0401;
    frame.pc=2097155;
case 2097155:
yield* sub_19fcd();
frame.pc=2097156;
case 2097156:;

      return;
    default: throw new Error("Invalid control flow in sub_1aa15");
    }
  }
  } finally {execution.leave(frame);}
}

function* sub_1aa80() {
  let pc=0;
  const frame=execution.enter('sub_1aa80',pc);pc=frame.pc;
  let skipBudget=frame.budget || execution.restoring;
  try {
  if(execution.restoring && execution.pending.length===0) {
    execution.restoring=false;
    if(frame.parked!==null) {yield frame.parked;frame.parked=null;frame.budget=false;}
  }
  dispatch: while (true) {
    if (!skipBudget && (++game.steps & 1023) === 0) {
      frame.pc=pc;frame.budget=true;frame.parked=0;yield 0;
      frame.parked=null;frame.budget=false;
    }
    skipBudget=false;
    switch(pc) {
    case 0:

    r.ah = 0;
    frame.pc=2097153;
case 2097153:
yield* interrupt(0x1a);
frame.pc=2097154;
case 2097154:;
    r.ax = r.dx;
    r.ax -= memoryAGet16(r.ds, 0x35da);
    if (r.ax >= 0x0006)
        { pc = 0x1aa90; continue dispatch; }
    return;
case 0x1aa90:
    memoryASet16(r.ds, 0x35da, r.dx);
    memoryASet16(r.ds, 0x35d8, memoryAGet16(r.ds, 0x35d8) + 0x0002);
    r.bx = memoryAGet16(r.ds, 0x35d8);
    r.bx &= 0x0006;
    r.si = memoryAGet16(r.ds, r.bx + 13776);
    r.di = 0x15c9;
    r.ax = 0xb800;
    r.es = r.ax;
    r.cx = 0x0a02;
    frame.pc=2097155;
case 2097155:
yield* sub_19fcd();
frame.pc=2097156;
case 2097156:;
    r.ax = 0x00e4;
    r.dl = 0x8a;
    r.si = 0x0010;
    r.bx = memoryAGet16(r.ds, 0x0579);
    r.dh = memoryAGet(r.ds, 0x057b);
    r.di = 0x0018;
    r.cx = 0x0e0a;
    frame.pc=2097157;
case 2097157:
yield* sub_1a059();
frame.pc=2097158;
case 2097158:;
    if (!flags.carry)
        return;
    memoryASet(r.ds, 0x0554, 0x01);

      return;
    default: throw new Error("Invalid control flow in sub_1aa80");
    }
  }
  } finally {execution.leave(frame);}
}

function* sub_1aae0() {
  let pc=0;
  const frame=execution.enter('sub_1aae0',pc);pc=frame.pc;
  let skipBudget=frame.budget || execution.restoring;
  try {
  if(execution.restoring && execution.pending.length===0) {
    execution.restoring=false;
    if(frame.parked!==null) {yield frame.parked;frame.parked=null;frame.budget=false;}
  }
  dispatch: while (true) {
    if (!skipBudget && (++game.steps & 1023) === 0) {
      frame.pc=pc;frame.budget=true;frame.parked=0;yield 0;
      frame.parked=null;frame.budget=false;
    }
    skipBudget=false;
    switch(pc) {
    case 0:

    if (memoryAGet16(r.ds, 0x0006) != 0x0007)
        { pc = 0x1aaea; continue dispatch; }
    { pc = 0x1ab03; continue dispatch; }
case 0x1aaea:
    memoryASet16(r.ds, 0x0414, memoryAGet16(r.ds, 0x0414) + 1);
    memoryASet(r.ds, 0x0418, 0x01);
    r.dx = 0xaaaa;
    frame.pc=2097153;
case 2097153:
yield* sub_1acc6();
frame.pc=2097154;
case 2097154:;
    r.ax = 0;
    memoryASet(r.ds, 0x369f, 0x00);
    frame.pc=2097155;
case 2097155:
yield* sub_1acdc();
frame.pc=2097156;
case 2097156:;
case 0x1ab03:
    r.ah = 0;
    frame.pc=2097157;
case 2097157:
yield* interrupt(0x1a);
frame.pc=2097158;
case 2097158:;
    if (memoryAGet16(r.ds, 0x0006) != 0x0007)
        { pc = 0x1ab1f; continue dispatch; }
    r.dx -= memoryAGet16(r.ds, 0x0412);
    r.ax = 0x2a30;
    flags.carry = r.ax < r.dx;
    r.ax -= r.dx;
    if (!flags.carry)
        { pc = 0x1ab1b; continue dispatch; }
    r.ax = 0;
case 0x1ab1b:
    r.ax >>= 1;
    { pc = 0x1ab3e; continue dispatch; }
case 0x1ab1f:
    r.dx -= memoryAGet16(r.ds, 0x0410);
    r.ax = 0x0546;
    if (memoryAGet16(r.ds, 0x0006) != 0x0006)
        { pc = 0x1ab2f; continue dispatch; }
    r.ax <<= 1;
case 0x1ab2f:
    flags.carry = r.ax < r.dx;
    r.ax -= r.dx;
    if (!flags.carry)
        { pc = 0x1ab35; continue dispatch; }
    r.ax = 0;
case 0x1ab35:
    if (memoryAGet16(r.ds, 0x0006) == 0x0006)
        { pc = 0x1ab3e; continue dispatch; }
    r.ax <<= 1;
case 0x1ab3e:
    memoryASet16(r.ds, 0x3697, r.ax);
    frame.pc=2097159;
case 2097159:
yield* sub_1ad24();
frame.pc=2097160;
case 2097160:;
    r.bx = memoryAGet16(r.ds, 0x0006);
    r.bl <<= 1;
    r.si = memoryAGet16(r.ds, r.bx + 14028);
    r.di = 0x368d;
    frame.pc=2097161;
case 2097161:
yield* sub_1994e();
frame.pc=2097162;
case 2097162:;
    if (memoryAGet16(r.ds, 0x0006) != 0x0007)
        { pc = 0x1ab9e; continue dispatch; }
    r.bx = memoryAGet16(r.ds, 0x0008);
    r.bl <<= 1;
    r.ax = r.bx;
    r.cx = memoryAGet16(r.ds, r.bx + 14044);
    if (memoryAGet16(r.ds, 0x2e8d) >= 0x0008)
        { pc = 0x1ab73; continue dispatch; }
    r.cx <<= 1;
    r.ax += 0x0010;
case 0x1ab73:
    memoryASet16(r.ds, 0x370c, r.ax);
case 0x1ab76:
    r.si = 0x368d;
    r.di = 0x1f82;
    push(r.cx);
    frame.pc=2097163;
case 2097163:
yield* sub_1994e();
frame.pc=2097164;
case 2097164:;
    r.cx = pop();
    if (--r.cx)
        { pc = 0x1ab76; continue dispatch; }
    frame.pc=2097165;
case 2097165:
yield* sub_1ac2a();
frame.pc=2097166;
case 2097166:;
    memoryASet(r.ds, 0x369e, 0x38);
    memoryASet(r.ds, 0x3699, 0x01);
    memoryASet16(r.ds, 0x3722, 0x0044);
    frame.pc=2097167;
case 2097167:
yield* sub_1ac6a();
frame.pc=2097168;
case 2097168:;
    frame.pc=2097169;
case 2097169:
yield* sub_1ac9c();
frame.pc=2097170;
case 2097170:;
    { pc = 0x1abd7; continue dispatch; }
case 0x1ab9e:
    r.si = 0x368d;
    r.di = 0x1f82;
    frame.pc=2097171;
case 2097171:
yield* sub_1994e();
frame.pc=2097172;
case 2097172:;
    memoryASet(r.ds, 0x3699, 0x02);
    memoryASet16(r.ds, 0x3722, 0x001e);
    r.dx = 0xffff;
    frame.pc=2097173;
case 2097173:
yield* sub_1acc6();
frame.pc=2097174;
case 2097174:;
    r.ax = 0x0a8c;
    r.ax -= memoryAGet16(r.ds, 0x3697);
    r.cl = 0x04;
    r.ax >>= r.cl;
    r.al &= 0xf0;
    memoryASet(r.ds, 0x369e, r.al);
    r.ah = 0x28;
    mul8(r.ah);
    memoryASet(r.ds, 0x369f, 0x01);
    frame.pc=2097175;
case 2097175:
yield* sub_1acdc();
frame.pc=2097176;
case 2097176:;
    frame.pc=2097177;
case 2097177:
yield* sub_1ac6a();
frame.pc=2097178;
case 2097178:;
case 0x1abd7:
    r.ah = 0;
    frame.pc=2097179;
case 2097179:
yield* interrupt(0x1a);
frame.pc=2097180;
case 2097180:;
    memoryASet16(r.ds, 0x3695, r.dx);
case 0x1abdf:
    if (memoryAGet16(r.ds, 0x0006) != 0x0007)
        { pc = 0x1abeb; continue dispatch; }
    frame.pc=2097181;
case 2097181:
yield* sub_1cd93();
frame.pc=2097182;
case 2097182:;
    { pc = 0x1abee; continue dispatch; }
case 0x1abeb:
    frame.pc=2097183;
case 2097183:
yield* sub_1ca65();
frame.pc=2097184;
case 2097184:;
case 0x1abee:
    frame.pc=2097185;
case 2097185:
yield* sub_1ac4c();
frame.pc=2097186;
case 2097186:;
    r.dx -= memoryAGet16(r.ds, 0x3695);
    if (r.dx < memoryAGet16(r.ds, 0x3722))
        { pc = 0x1abdf; continue dispatch; }
    r.bx = 0;
    r.ah = 0x0b;
    frame.pc=2097187;
case 2097187:
yield* interrupt(0x10);
frame.pc=2097188;
case 2097188:;
    if (memoryAGet16(r.ds, 0x0006) == 0x0007)
        { pc = 0x1ac0c; continue dispatch; }
    frame.pc=2097189;
case 2097189:
yield* sub_1cd51();
frame.pc=2097190;
case 2097190:;
    return;
case 0x1ac0c:
    r.ax = 0xb800;
    r.es = r.ax;
    r.si = 0x000e;
    r.di = 0x08e4;
    r.cx = 0x0804;
    frame.pc=2097191;
case 2097191:
yield* sub_19fcd();
frame.pc=2097192;
case 2097192:;
    r.si = 0x004e;
    r.di = 0x0c94;
    r.cx = 0x0814;
    frame.pc=2097193;
case 2097193:
yield* sub_19fcd();
frame.pc=2097194;
case 2097194:;

      return;
    default: throw new Error("Invalid control flow in sub_1aae0");
    }
  }
  } finally {execution.leave(frame);}
}

function* sub_1ac2a() {
  let pc=0;
  const frame=execution.enter('sub_1ac2a',pc);pc=frame.pc;
  let skipBudget=frame.budget || execution.restoring;
  try {
  if(execution.restoring && execution.pending.length===0) {
    execution.restoring=false;
    if(frame.parked!==null) {yield frame.parked;frame.parked=null;frame.budget=false;}
  }
  dispatch: while (true) {
    if (!skipBudget && (++game.steps & 1023) === 0) {
      frame.pc=pc;frame.budget=true;frame.parked=0;yield 0;
      frame.parked=null;frame.budget=false;
    }
    skipBudget=false;
    switch(pc) {
    case 0:

    push(r.ds);
    r.es = pop();
    r.ax = 0xb800;
    r.ds = r.ax;
    r.cx = 0x0804;
    r.di = 0x000e;
    r.si = 0x08e4;
    frame.pc=2097153;
case 2097153:
yield* sub_19ffa();
frame.pc=2097154;
case 2097154:;
    r.cx = 0x0814;
    r.di = 0x004e;
    r.si = 0x0c94;
    frame.pc=2097155;
case 2097155:
yield* sub_19ffa();
frame.pc=2097156;
case 2097156:;
    push(r.es);
    r.ds = pop();

      return;
    default: throw new Error("Invalid control flow in sub_1ac2a");
    }
  }
  } finally {execution.leave(frame);}
}

function* sub_1ac4c() {
  let pc=0;
  const frame=execution.enter('sub_1ac4c',pc);pc=frame.pc;
  let skipBudget=frame.budget || execution.restoring;
  try {
  if(execution.restoring && execution.pending.length===0) {
    execution.restoring=false;
    if(frame.parked!==null) {yield frame.parked;frame.parked=null;frame.budget=false;}
  }
  dispatch: while (true) {
    if (!skipBudget && (++game.steps & 1023) === 0) {
      frame.pc=pc;frame.budget=true;frame.parked=0;yield 0;
      frame.parked=null;frame.budget=false;
    }
    skipBudget=false;
    switch(pc) {
    case 0:

    r.ah = 0;
    frame.pc=2097153;
case 2097153:
yield* interrupt(0x1a);
frame.pc=2097154;
case 2097154:;
    push(r.dx);
case 0x1ac51:
    frame.pc=2097155;
case 2097155:
yield* sub_18608();
frame.pc=2097156;
case 2097156:;
    if (flags.zero)
        { pc = 0x1ac51; continue dispatch; }
    r.dx = pop();
    push(r.dx);
    r.bx = 0;
    if (r.dx & 0x0004)
        { pc = 0x1ac64; continue dispatch; }
    r.bl = memoryAGet(r.ds, 0x3699);
case 0x1ac64:
    r.ah = 0x0b;
    frame.pc=2097157;
case 2097157:
yield* interrupt(0x10);
frame.pc=2097158;
case 2097158:;
    r.dx = pop();

      return;
    default: throw new Error("Invalid control flow in sub_1ac4c");
    }
  }
  } finally {execution.leave(frame);}
}

function* sub_1ac6a() {
  let pc=0;
  const frame=execution.enter('sub_1ac6a',pc);pc=frame.pc;
  let skipBudget=frame.budget || execution.restoring;
  try {
  if(execution.restoring && execution.pending.length===0) {
    execution.restoring=false;
    if(frame.parked!==null) {yield frame.parked;frame.parked=null;frame.budget=false;}
  }
  dispatch: while (true) {
    if (!skipBudget && (++game.steps & 1023) === 0) {
      frame.pc=pc;frame.budget=true;frame.parked=0;yield 0;
      frame.parked=null;frame.budget=false;
    }
    skipBudget=false;
    switch(pc) {
    case 0:

    r.ah = 0x02;
    r.dh = memoryAGet(r.ds, 0x369e);
    r.cl = 0x03;
    r.dh >>= r.cl;
    r.dl = 0x12;
    r.bh = 0;
    frame.pc=2097153;
case 2097153:
yield* interrupt(0x10);
frame.pc=2097154;
case 2097154:;
    memoryASet16(r.ds, 0x36a0, 0x0003);
case 0x1ac80:
    r.bx = memoryAGet16(r.ds, 0x36a0);
    r.al = memoryAGet(r.ds, r.bx + 13965);
    r.al += 0x30;
    r.ah = 0x0e;
    r.bl = 0x03;
    frame.pc=2097155;
case 2097155:
yield* interrupt(0x10);
frame.pc=2097156;
case 2097156:;
    memoryASet16(r.ds, 0x36a0, memoryAGet16(r.ds, 0x36a0) + 1);
    if (memoryAGet16(r.ds, 0x36a0) < 0x0007)
        { pc = 0x1ac80; continue dispatch; }

      return;
    default: throw new Error("Invalid control flow in sub_1ac6a");
    }
  }
  } finally {execution.leave(frame);}
}

function* sub_1ac9c() {
  let pc=0;
  const frame=execution.enter('sub_1ac9c',pc);pc=frame.pc;
  let skipBudget=frame.budget || execution.restoring;
  try {
  if(execution.restoring && execution.pending.length===0) {
    execution.restoring=false;
    if(frame.parked!==null) {yield frame.parked;frame.parked=null;frame.budget=false;}
  }
  dispatch: while (true) {
    if (!skipBudget && (++game.steps & 1023) === 0) {
      frame.pc=pc;frame.budget=true;frame.parked=0;yield 0;
      frame.parked=null;frame.budget=false;
    }
    skipBudget=false;
    switch(pc) {
    case 0:

    r.ah = 0x02;
    r.dl = 0x0a;
    r.dh = r.dl;
    r.bx = 0;
    frame.pc=2097153;
case 2097153:
yield* interrupt(0x10);
frame.pc=2097154;
case 2097154:;
    r.bx = memoryAGet16(r.ds, 0x370c);
    r.ax = memoryAGet16(r.ds, r.bx + 14060);
    memoryASet16(r.ds, 0x3720, r.ax);
    r.bx = 0;
case 0x1acb3:
    r.ah = 0x0e;
    r.al = memoryAGet(r.ds, r.bx + 14094);
    push(r.bx);
    r.bl = 0x03;
    frame.pc=2097155;
case 2097155:
yield* interrupt(0x10);
frame.pc=2097156;
case 2097156:;
    r.bx = pop();
    r.bx++;
    if (r.bx < 0x0014)
        { pc = 0x1acb3; continue dispatch; }

      return;
    default: throw new Error("Invalid control flow in sub_1ac9c");
    }
  }
  } finally {execution.leave(frame);}
}

function* sub_1acc6() {
  let pc=0;
  const frame=execution.enter('sub_1acc6',pc);pc=frame.pc;
  let skipBudget=frame.budget || execution.restoring;
  try {
  if(execution.restoring && execution.pending.length===0) {
    execution.restoring=false;
    if(frame.parked!==null) {yield frame.parked;frame.parked=null;frame.budget=false;}
  }
  dispatch: while (true) {
    if (!skipBudget && (++game.steps & 1023) === 0) {
      frame.pc=pc;frame.budget=true;frame.parked=0;yield 0;
      frame.parked=null;frame.budget=false;
    }
    skipBudget=false;
    switch(pc) {
    case 0:

    flags.direction = false;
    r.ax = 0x1010;
    r.es = r.ax;
    r.di = 0x000e;
    r.si = 0x35e0;
    r.cx = 0x001e;
case 0x1acd5:
    lodsw();
    r.ax &= r.dx;
    stosw();
    if (--r.cx)
        { pc = 0x1acd5; continue dispatch; }

      return;
    default: throw new Error("Invalid control flow in sub_1acc6");
    }
  }
  } finally {execution.leave(frame);}
}

function* sub_1acdc() {
  let pc=0;
  const frame=execution.enter('sub_1acdc',pc);pc=frame.pc;
  let skipBudget=frame.budget || execution.restoring;
  try {
  if(execution.restoring && execution.pending.length===0) {
    execution.restoring=false;
    if(frame.parked!==null) {yield frame.parked;frame.parked=null;frame.budget=false;}
  }
  dispatch: while (true) {
    if (!skipBudget && (++game.steps & 1023) === 0) {
      frame.pc=pc;frame.budget=true;frame.parked=0;yield 0;
      frame.parked=null;frame.budget=false;
    }
    skipBudget=false;
    switch(pc) {
    case 0:

    memoryASet16(r.ds, 0x369a, r.ax);
    r.ax = 0xb800;
    r.es = r.ax;
    frame.pc=2097153;
case 2097153:
yield* sub_1ca59();
frame.pc=2097154;
case 2097154:;
    r.ax = 0x1b80;
case 0x1acea:
    r.bx = 0x361c;
    memoryASet16(r.ds, 0x369c, r.ax);
    frame.pc=2097155;
case 2097155:
yield* sub_19d54();
frame.pc=2097156;
case 2097156:;
    if (memoryAGet(r.ds, 0x369f) == 0x00)
        { pc = 0x1ad12; continue dispatch; }
    frame.pc=2097157;
case 2097157:
yield* sub_1ca99();
frame.pc=2097158;
case 2097158:;
    r.ah = 0;
    frame.pc=2097159;
case 2097159:
yield* interrupt(0x1a);
frame.pc=2097160;
case 2097160:;
    memoryASet16(r.ds, 0x3695, r.dx);
case 0x1ad05:
    r.ah = 0;
    frame.pc=2097161;
case 2097161:
yield* interrupt(0x1a);
frame.pc=2097162;
case 2097162:;
    r.dx -= memoryAGet16(r.ds, 0x3695);
    if (r.dx < 0x0002)
        { pc = 0x1ad05; continue dispatch; }
case 0x1ad12:
    r.ax = memoryAGet16(r.ds, 0x369c);
    r.tx = r.ax;
    r.ax -= 0x0280;
    if (r.tx < 0x0280)
        { pc = 0x1ad20; continue dispatch; }
    if (r.ax >= memoryAGet16(r.ds, 0x369a))
        { pc = 0x1acea; continue dispatch; }
case 0x1ad20:
    frame.pc=2097163;
case 2097163:
yield* sub_1cd51();
frame.pc=2097164;
case 2097164:;

      return;
    default: throw new Error("Invalid control flow in sub_1acdc");
    }
  }
  } finally {execution.leave(frame);}
}

function* sub_1ad24() {
  let pc=0;
  const frame=execution.enter('sub_1ad24',pc);pc=frame.pc;
  let skipBudget=frame.budget || execution.restoring;
  try {
  if(execution.restoring && execution.pending.length===0) {
    execution.restoring=false;
    if(frame.parked!==null) {yield frame.parked;frame.parked=null;frame.budget=false;}
  }
  dispatch: while (true) {
    if (!skipBudget && (++game.steps & 1023) === 0) {
      frame.pc=pc;frame.budget=true;frame.parked=0;yield 0;
      frame.parked=null;frame.budget=false;
    }
    skipBudget=false;
    switch(pc) {
    case 0:

    memoryASet16(r.ds, 0x368b, r.ax);
    r.ax = 0;
    memoryASet16(r.ds, 0x368d, r.ax);
    memoryASet16(r.ds, 0x368f, r.ax);
    memoryASet16(r.ds, 0x3691, r.ax);
    memoryASet16(r.ds, 0x3693, r.ax);
    r.bx = 0x3684;
    r.dx = 0x1000;
case 0x1ad3b:
    if (!(memoryAGet16(r.ds, 0x368b) & r.dx))
        { pc = 0x1ad49; continue dispatch; }
    r.si = r.bx;
    r.di = 0x368d;
    frame.pc=2097153;
case 2097153:
yield* sub_1994e();
frame.pc=2097154;
case 2097154:;
case 0x1ad49:
    r.bx -= 0x0007;
    flags.carry = r.dx & 1;
    r.dx >>= 1;
    if (!flags.carry)
        { pc = 0x1ad3b; continue dispatch; }

      return;
    default: throw new Error("Invalid control flow in sub_1ad24");
    }
  }
  } finally {execution.leave(frame);}
}

function* sub_1ad60() {
  let pc=0;
  const frame=execution.enter('sub_1ad60',pc);pc=frame.pc;
  let skipBudget=frame.budget || execution.restoring;
  try {
  if(execution.restoring && execution.pending.length===0) {
    execution.restoring=false;
    if(frame.parked!==null) {yield frame.parked;frame.parked=null;frame.budget=false;}
  }
  dispatch: while (true) {
    if (!skipBudget && (++game.steps & 1023) === 0) {
      frame.pc=pc;frame.budget=true;frame.parked=0;yield 0;
      frame.parked=null;frame.budget=false;
    }
    skipBudget=false;
    switch(pc) {
    case 0:

    memoryASet(r.ds, 0x37af, 0x03);
    r.ax = 0x0001;
    memoryASet16(r.ds, 0x37b0, r.ax);
    memoryASet16(r.ds, 0x37b2, r.ax);
    memoryASet16(r.ds, 0x37b4, r.ax);

      return;
    default: throw new Error("Invalid control flow in sub_1ad60");
    }
  }
  } finally {execution.leave(frame);}
}

function* sub_1ad72() {
  let pc=0;
  const frame=execution.enter('sub_1ad72',pc);pc=frame.pc;
  let skipBudget=frame.budget || execution.restoring;
  try {
  if(execution.restoring && execution.pending.length===0) {
    execution.restoring=false;
    if(frame.parked!==null) {yield frame.parked;frame.parked=null;frame.budget=false;}
  }
  dispatch: while (true) {
    if (!skipBudget && (++game.steps & 1023) === 0) {
      frame.pc=pc;frame.budget=true;frame.parked=0;yield 0;
      frame.parked=null;frame.budget=false;
    }
    skipBudget=false;
    switch(pc) {
    case 0:

    r.ah = 0;
    frame.pc=2097153;
case 2097153:
yield* interrupt(0x1a);
frame.pc=2097154;
case 2097154:;
    if (r.dx != memoryAGet16(r.ds, 0x37b8))
        { pc = 0x1ad7d; continue dispatch; }
    return;
case 0x1ad7d:
    memoryASet16(r.ds, 0x37b8, r.dx);
    memoryASet16(r.ds, 0x37b6, 0x0004);
case 0x1ad87:
    r.bx = memoryAGet16(r.ds, 0x37b6);
    if (memoryAGet16(r.ds, r.bx + 14256) == 0x0000)
        { pc = 0x1adcb; continue dispatch; }
    r.ax = memoryAGet16(r.ds, r.bx + 14243);
    r.dl = 0x18;
    r.si = 0x0010;
    r.bx = memoryAGet16(r.ds, 0x0579);
    r.dh = memoryAGet(r.ds, 0x057b);
    r.di = 0x0018;
    r.cx = 0x0e10;
    frame.pc=2097155;
case 2097155:
yield* sub_1a059();
frame.pc=2097156;
case 2097156:;
    if (!flags.carry)
        { pc = 0x1adcb; continue dispatch; }
    r.ax = 0x0c00;
    r.bx = 0x08fd;
    frame.pc=2097157;
case 2097157:
yield* sub_1cb6b();
frame.pc=2097158;
case 2097158:;
    frame.pc=2097159;
case 2097159:
yield* sub_18413();
frame.pc=2097160;
case 2097160:;
    frame.pc=2097161;
case 2097161:
yield* sub_1b068();
frame.pc=2097162;
case 2097162:;
    r.bx = memoryAGet16(r.ds, 0x37b6);
    frame.pc=2097163;
case 2097163:
yield* sub_1add3();
frame.pc=2097164;
case 2097164:;
    frame.pc=2097165;
case 2097165:
yield* sub_18354();
frame.pc=2097166;
case 2097166:;
    frame.pc=2097167;
case 2097167:
yield* sub_1b044();
frame.pc=2097168;
case 2097168:;
    return;
case 0x1adcb:
    flags.carry = memoryAGet16(r.ds, 0x37b6) < 0x0002;
    memoryASet16(r.ds, 0x37b6, memoryAGet16(r.ds, 0x37b6) - 0x0002);
    if (!flags.carry)
        { pc = 0x1ad87; continue dispatch; }

      return;
    default: throw new Error("Invalid control flow in sub_1ad72");
    }
  }
  } finally {execution.leave(frame);}
}

function* sub_1add3() {
  let pc=0;
  const frame=execution.enter('sub_1add3',pc);pc=frame.pc;
  let skipBudget=frame.budget || execution.restoring;
  try {
  if(execution.restoring && execution.pending.length===0) {
    execution.restoring=false;
    if(frame.parked!==null) {yield frame.parked;frame.parked=null;frame.budget=false;}
  }
  dispatch: while (true) {
    if (!skipBudget && (++game.steps & 1023) === 0) {
      frame.pc=pc;frame.budget=true;frame.parked=0;yield 0;
      frame.parked=null;frame.budget=false;
    }
    skipBudget=false;
    switch(pc) {
    case 0:

    memoryASet16(r.ds, r.bx + 14256, 0x0000);
    push(r.ds);
    r.es = pop();
    flags.direction = false;
    r.ax = 0xaaaa;
    r.di = 0x000e;
    r.si = r.di;
    r.cx = 0x0020;
    rep_stosw();
    r.di = memoryAGet16(r.ds, r.bx + 14249);
    r.ax = 0xb800;
    r.es = r.ax;
    r.cx = 0x1002;
    frame.pc=2097153;
case 2097153:
yield* sub_19fcd();
frame.pc=2097154;
case 2097154:;
    r.tl = memoryAGet(r.ds, 0x37af);
    memoryASet(r.ds, 0x37af, memoryAGet(r.ds, 0x37af) - 1);
    if (r.tl != 1)
        return;
    if (memoryAGet(r.ds, 0x0552) != 0x00)
        return;
    memoryASet(r.ds, 0x0553, 0x01);

      return;
    default: throw new Error("Invalid control flow in sub_1add3");
    }
  }
  } finally {execution.leave(frame);}
}

function* sub_1ae0b() {
  let pc=0;
  const frame=execution.enter('sub_1ae0b',pc);pc=frame.pc;
  let skipBudget=frame.budget || execution.restoring;
  try {
  if(execution.restoring && execution.pending.length===0) {
    execution.restoring=false;
    if(frame.parked!==null) {yield frame.parked;frame.parked=null;frame.budget=false;}
  }
  dispatch: while (true) {
    if (!skipBudget && (++game.steps & 1023) === 0) {
      frame.pc=pc;frame.budget=true;frame.parked=0;yield 0;
      frame.parked=null;frame.budget=false;
    }
    skipBudget=false;
    switch(pc) {
    case 0:

    r.ax = 0xb800;
    r.es = r.ax;
    memoryASet16(r.ds, 0x37a0, 0x066a);
    r.cx = 0x0010;
case 0x1ae19:
    r.ax = 0;
    r.bx = r.ax;
case 0x1ae1d:
    memoryASet(r.ds, 0x37a2, r.al);
    r.ah = 0;
    r.ax += 0x3730;
    r.si = r.ax;
    r.di = memoryAGet16(r.ds, 0x37a0);
    r.di += r.bx;
    push(r.cx);
    r.cx = 0x0801;
    push(r.bx);
    frame.pc=2097153;
case 2097153:
yield* sub_19fcd();
frame.pc=2097154;
case 2097154:;
    r.bx = pop();
    r.cx = pop();
    r.bx += 0x0002;
    if (r.bx < 0x001e)
        { pc = 0x1ae4e; continue dispatch; }
    if (r.bx != 0x001e)
        { pc = 0x1ae45; continue dispatch; }
    r.al = 0x20;
    { pc = 0x1ae1d; continue dispatch; }
case 0x1ae45:
    memoryASet16(r.ds, 0x37a0, memoryAGet16(r.ds, 0x37a0) + 0x0140);
    if (--r.cx)
        { pc = 0x1ae19; continue dispatch; }
    return;
case 0x1ae4e:
    if (memoryAGet(r.ds, 0x37a2) == 0x50)
        { pc = 0x1ae66; continue dispatch; }
    if (r.cl & 0x01)
        { pc = 0x1ae66; continue dispatch; }
    frame.pc=2097155;
case 2097155:
yield* sub_1a02d();
frame.pc=2097156;
case 2097156:;
    if (r.dl < 0x40)
        { pc = 0x1ae66; continue dispatch; }
    r.al = 0x10;
    { pc = 0x1ae1d; continue dispatch; }
case 0x1ae66:
    frame.pc=2097157;
case 2097157:
yield* sub_1a02d();
frame.pc=2097158;
case 2097158:;
    r.al = r.dl;
    r.al -= r.bl;
    r.al &= 0x30;
    r.al += 0x30;
    { pc = 0x1ae1d; continue dispatch; }

      return;
    default: throw new Error("Invalid control flow in sub_1ae0b");
    }
  }
  } finally {execution.leave(frame);}
}

function* sub_1ae73() {
  let pc=0;
  const frame=execution.enter('sub_1ae73',pc);pc=frame.pc;
  let skipBudget=frame.budget || execution.restoring;
  try {
  if(execution.restoring && execution.pending.length===0) {
    execution.restoring=false;
    if(frame.parked!==null) {yield frame.parked;frame.parked=null;frame.budget=false;}
  }
  dispatch: while (true) {
    if (!skipBudget && (++game.steps & 1023) === 0) {
      frame.pc=pc;frame.budget=true;frame.parked=0;yield 0;
      frame.parked=null;frame.budget=false;
    }
    skipBudget=false;
    switch(pc) {
    case 0:

    r.ax = memoryAGet16(r.ds, 0x0579);
    r.ax &= 0xfffc;
    if (r.ax < 0x00a4)
        { pc = 0x1aeaf; continue dispatch; }
    if (r.ax > 0x0118)
        { pc = 0x1aeaf; continue dispatch; }
    r.dl = memoryAGet(r.ds, 0x057b);
    r.dl -= 0x02;
    r.dl &= 0xf8;
    if (!(r.dl & 0x08))
        { pc = 0x1aeaf; continue dispatch; }
    if (r.dl < 0x28)
        { pc = 0x1aeaf; continue dispatch; }
    if (r.dl > 0xa0)
        { pc = 0x1aeaf; continue dispatch; }
    memoryASet16(r.ds, 0x0579, r.ax);
    r.dl += 0x02;
    memoryASet(r.ds, 0x057b, r.dl);
    r.dl += 0x32;
    memoryASet(r.ds, 0x057c, r.dl);
    flags.carry = true;
    return;
case 0x1aeaf:
    flags.carry = false;

      return;
    default: throw new Error("Invalid control flow in sub_1ae73");
    }
  }
  } finally {execution.leave(frame);}
}

function* sub_1aec0() {
  let pc=0;
  const frame=execution.enter('sub_1aec0',pc);pc=frame.pc;
  let skipBudget=frame.budget || execution.restoring;
  try {
  if(execution.restoring && execution.pending.length===0) {
    execution.restoring=false;
    if(frame.parked!==null) {yield frame.parked;frame.parked=null;frame.budget=false;}
  }
  dispatch: while (true) {
    if (!skipBudget && (++game.steps & 1023) === 0) {
      frame.pc=pc;frame.budget=true;frame.parked=0;yield 0;
      frame.parked=null;frame.budget=false;
    }
    skipBudget=false;
    switch(pc) {
    case 0:

    memoryASet(r.ds, 0x3966, 0x08);
    memoryASet(r.ds, 0x396a, 0x01);
    memoryASet(r.ds, 0x3967, 0x00);
    memoryASet(r.ds, 0x396d, 0x02);
    memoryASet16(r.ds, 0x3964, 0x0118);
    memoryASet16(r.ds, 0x396b, 0x0000);

      return;
    default: throw new Error("Invalid control flow in sub_1aec0");
    }
  }
  } finally {execution.leave(frame);}
}

function* sub_1aee1() {
  let pc=0;
  const frame=execution.enter('sub_1aee1',pc);pc=frame.pc;
  let skipBudget=frame.budget || execution.restoring;
  try {
  if(execution.restoring && execution.pending.length===0) {
    execution.restoring=false;
    if(frame.parked!==null) {yield frame.parked;frame.parked=null;frame.budget=false;}
  }
  dispatch: while (true) {
    if (!skipBudget && (++game.steps & 1023) === 0) {
      frame.pc=pc;frame.budget=true;frame.parked=0;yield 0;
      frame.parked=null;frame.budget=false;
    }
    skipBudget=false;
    switch(pc) {
    case 0:

    r.ah = 0;
    frame.pc=2097153;
case 2097153:
yield* interrupt(0x1a);
frame.pc=2097154;
case 2097154:;
    r.ax = r.dx;
    r.ax -= memoryAGet16(r.ds, 0x39c8);
    if (r.ax >= 0x0002)
        { pc = 0x1aef1; continue dispatch; }
case 0x1aef0:
    return;
case 0x1aef1:
    memoryASet16(r.ds, 0x39c8, r.dx);
    frame.pc=2097155;
case 2097155:
yield* sub_1b082();
frame.pc=2097156;
case 2097156:;
    if (flags.carry)
        { pc = 0x1aef0; continue dispatch; }
    frame.pc=2097157;
case 2097157:
yield* sub_1b09e();
frame.pc=2097158;
case 2097158:;
    if (!flags.carry)
        { pc = 0x1af02; continue dispatch; }
    { pc = 0x1afc0; continue dispatch; }
case 0x1af02:
    r.bx = memoryAGet16(r.ds, 0x0008);
    r.bl <<= 1;
    r.ax = memoryAGet16(r.ds, r.bx + 14796);
    memoryASet16(r.ds, 0x39c6, r.ax);
    r.ax = memoryAGet16(r.ds, 0x3964);
    memoryASet16(r.ds, 0x39c3, r.ax);
    r.dl = memoryAGet(r.ds, 0x3966);
    memoryASet(r.ds, 0x39c5, r.dl);
    if (r.dl != 0x08)
        { pc = 0x1af55; continue dispatch; }
    r.ax &= 0xfff8;
    r.dx = memoryAGet16(r.ds, 0x0579);
    r.dx &= 0xfff8;
    flags.carry = r.ax < r.dx;
    if (r.ax != r.dx)
        { pc = 0x1af3d; continue dispatch; }
    memoryASet(r.ds, 0x3967, 0x01);
    memoryASet(r.ds, 0x396e, 0x01);
    { pc = 0x1af55; continue dispatch; }
case 0x1af3d:
    r.ax = memoryAGet16(r.ds, 0x3964);
    if (flags.carry)
        { pc = 0x1af4c; continue dispatch; }
    flags.carry = r.ax < memoryAGet16(r.ds, 0x39c6);
    r.ax -= memoryAGet16(r.ds, 0x39c6);
    if (!flags.carry)
        { pc = 0x1af50; continue dispatch; }
    r.ax = 0;
    { pc = 0x1af50; continue dispatch; }
case 0x1af4c:
    r.ax += memoryAGet16(r.ds, 0x39c6);
case 0x1af50:
    memoryASet16(r.ds, 0x3964, r.ax);
    { pc = 0x1afa9; continue dispatch; }
case 0x1af55:
    r.al = memoryAGet(r.ds, 0x3966);
    memoryASet(r.ds, 0x396e, memoryAGet(r.ds, 0x396e) + 1);
    r.dl = memoryAGet(r.ds, 0x396e);
    r.dl >>= 1;
    r.dl >>= 1;
    r.dl &= 0x03;
    r.dl += 0x02;
    if (memoryAGet(r.ds, 0x3967) == 0x01)
        { pc = 0x1af82; continue dispatch; }
    r.tl = r.al;
    r.al -= r.dl;
    if (r.tl < r.dl)
        { pc = 0x1af79; continue dispatch; }
    if (r.al >= 0x09)
        { pc = 0x1afa6; continue dispatch; }
case 0x1af79:
    r.al = 0x08;
    memoryASet(r.ds, 0x3967, 0x00);
    { pc = 0x1afa6; continue dispatch; }
case 0x1af82:
    r.al += r.dl;
    if (r.al > memoryAGet(r.ds, 0x057b))
        { pc = 0x1afa1; continue dispatch; }
    r.bx = memoryAGet16(r.ds, 0x3964);
    flags.carry = r.bx < memoryAGet16(r.ds, 0x0579);
    r.bx -= memoryAGet16(r.ds, 0x0579);
    if (!flags.carry)
        { pc = 0x1af96; continue dispatch; }
    r.bx = ~r.bx;
case 0x1af96:
    if (r.bx > 0x0030)
        { pc = 0x1afa1; continue dispatch; }
    if (r.al < 0xa0)
        { pc = 0x1afa6; continue dispatch; }
    r.al = 0x9f;
case 0x1afa1:
    memoryASet(r.ds, 0x3967, 0xff);
case 0x1afa6:
    memoryASet(r.ds, 0x3966, r.al);
case 0x1afa9:
    frame.pc=2097159;
case 2097159:
yield* sub_1b082();
frame.pc=2097160;
case 2097160:;
    if (!flags.carry)
        { pc = 0x1afbb; continue dispatch; }
    r.ax = memoryAGet16(r.ds, 0x39c3);
    memoryASet16(r.ds, 0x3964, r.ax);
    r.al = memoryAGet(r.ds, 0x39c5);
    memoryASet(r.ds, 0x3966, r.al);
    return;
case 0x1afbb:
    frame.pc=2097161;
case 2097161:
yield* sub_1b09e();
frame.pc=2097162;
case 2097162:;
    if (!flags.carry)
        { pc = 0x1b01e; continue dispatch; }
case 0x1afc0:
    if (memoryAGet(r.ds, 0x0553) == 0x00)
        { pc = 0x1afc8; continue dispatch; }
    return;
case 0x1afc8:
    r.cx = memoryAGet16(r.ds, 0x0579);
    flags.carry = r.cx < 0x000c;
    r.cx -= 0x000c;
    if (!flags.carry)
        { pc = 0x1afd3; continue dispatch; }
    r.cx = 0;
case 0x1afd3:
    if (r.cx < 0x010f)
        { pc = 0x1afdc; continue dispatch; }
    r.cx = 0x010e;
case 0x1afdc:
    r.dl = memoryAGet(r.ds, 0x057b);
    flags.carry = r.dl < 0x04;
    r.dl -= 0x04;
    if (!flags.carry)
        { pc = 0x1afe7; continue dispatch; }
    r.dl = 0;
case 0x1afe7:
    frame.pc=2097163;
case 2097163:
yield* sub_19ee0();
frame.pc=2097164;
case 2097164:;
    r.di = r.ax;
    r.ax = 0xb800;
    r.es = r.ax;
    r.si = 0x37c0;
    r.bp = 0x000e;
    r.cx = 0x1506;
    frame.pc=2097165;
case 2097165:
yield* sub_19efc();
frame.pc=2097166;
case 2097166:;
    frame.pc=2097167;
case 2097167:
yield* sub_1c924();
frame.pc=2097168;
case 2097168:;
    r.ah = 0;
    frame.pc=2097169;
case 2097169:
yield* interrupt(0x1a);
frame.pc=2097170;
case 2097170:;
    memoryASet16(r.ds, 0x39c8, r.dx);
case 0x1b008:
    frame.pc=2097171;
case 2097171:
yield* sub_1c934();
frame.pc=2097172;
case 2097172:;
    r.ah = 0;
    frame.pc=2097173;
case 2097173:
yield* interrupt(0x1a);
frame.pc=2097174;
case 2097174:;
    r.dx -= memoryAGet16(r.ds, 0x39c8);
    if (r.dx < 0x0009)
        { pc = 0x1b008; continue dispatch; }
    memoryASet(r.ds, 0x0552, 0x01);
    return;
case 0x1b01e:
    r.cx = memoryAGet16(r.ds, 0x3964);
    r.dl = memoryAGet(r.ds, 0x3966);
    frame.pc=2097175;
case 2097175:
yield* sub_19ee0();
frame.pc=2097176;
case 2097176:;
    memoryASet16(r.ds, 0x39ca, r.ax);
    frame.pc=2097177;
case 2097177:
yield* sub_1b068();
frame.pc=2097178;
case 2097178:;
    r.tl = memoryAGet(r.ds, 0x396d);
    memoryASet(r.ds, 0x396d, memoryAGet(r.ds, 0x396d) - 1);
    if (r.tl != 1)
        { pc = 0x1b040; continue dispatch; }
    memoryASet(r.ds, 0x396d, 0x02);
    memoryASet16(r.ds, 0x396b, memoryAGet16(r.ds, 0x396b) ^ 0x0054);
case 0x1b040:
    frame.pc=2097179;
case 2097179:
yield* sub_1b044();
frame.pc=2097180;
case 2097180:;

      return;
    default: throw new Error("Invalid control flow in sub_1aee1");
    }
  }
  } finally {execution.leave(frame);}
}

function* sub_1b044() {
  let pc=0;
  const frame=execution.enter('sub_1b044',pc);pc=frame.pc;
  let skipBudget=frame.budget || execution.restoring;
  try {
  if(execution.restoring && execution.pending.length===0) {
    execution.restoring=false;
    if(frame.parked!==null) {yield frame.parked;frame.parked=null;frame.budget=false;}
  }
  dispatch: while (true) {
    if (!skipBudget && (++game.steps & 1023) === 0) {
      frame.pc=pc;frame.budget=true;frame.parked=0;yield 0;
      frame.parked=null;frame.budget=false;
    }
    skipBudget=false;
    switch(pc) {
    case 0:

    r.ax = 0xb800;
    r.es = r.ax;
    r.di = memoryAGet16(r.ds, 0x39ca);
    memoryASet16(r.ds, 0x3968, r.di);
    r.bp = 0x396f;
    memoryASet(r.ds, 0x396a, 0x00);
    r.si = memoryAGet16(r.ds, 0x396b);
    r.si += 0x38bc;
    r.cx = 0x0e03;
    frame.pc=2097153;
case 2097153:
yield* sub_19efc();
frame.pc=2097154;
case 2097154:;

      return;
    default: throw new Error("Invalid control flow in sub_1b044");
    }
  }
  } finally {execution.leave(frame);}
}

function* sub_1b068() {
  let pc=0;
  const frame=execution.enter('sub_1b068',pc);pc=frame.pc;
  let skipBudget=frame.budget || execution.restoring;
  try {
  if(execution.restoring && execution.pending.length===0) {
    execution.restoring=false;
    if(frame.parked!==null) {yield frame.parked;frame.parked=null;frame.budget=false;}
  }
  dispatch: while (true) {
    if (!skipBudget && (++game.steps & 1023) === 0) {
      frame.pc=pc;frame.budget=true;frame.parked=0;yield 0;
      frame.parked=null;frame.budget=false;
    }
    skipBudget=false;
    switch(pc) {
    case 0:

    r.ax = 0xb800;
    r.es = r.ax;
    if (memoryAGet(r.ds, 0x396a) != 0x00)
        return;
    r.di = memoryAGet16(r.ds, 0x3968);
    r.si = 0x396f;
    r.cx = 0x0e03;
    frame.pc=2097153;
case 2097153:
yield* sub_19fcd();
frame.pc=2097154;
case 2097154:;

      return;
    default: throw new Error("Invalid control flow in sub_1b068");
    }
  }
  } finally {execution.leave(frame);}
}

function* sub_1b082() {
  let pc=0;
  const frame=execution.enter('sub_1b082',pc);pc=frame.pc;
  let skipBudget=frame.budget || execution.restoring;
  try {
  if(execution.restoring && execution.pending.length===0) {
    execution.restoring=false;
    if(frame.parked!==null) {yield frame.parked;frame.parked=null;frame.budget=false;}
  }
  dispatch: while (true) {
    if (!skipBudget && (++game.steps & 1023) === 0) {
      frame.pc=pc;frame.budget=true;frame.parked=0;yield 0;
      frame.parked=null;frame.budget=false;
    }
    skipBudget=false;
    switch(pc) {
    case 0:

    r.ax = memoryAGet16(r.ds, 0x3964);
    r.dl = memoryAGet(r.ds, 0x3966);
    r.si = 0x0018;
    r.bx = memoryAGet16(r.ds, 0x327d);
    r.dh = memoryAGet(r.ds, 0x327f);
    r.di = 0x0010;
    r.cx = 0x1e0e;
    frame.pc=2097153;
case 2097153:
yield* sub_1a059();
frame.pc=2097154;
case 2097154:;

      return;
    default: throw new Error("Invalid control flow in sub_1b082");
    }
  }
  } finally {execution.leave(frame);}
}

function* sub_1b09e() {
  let pc=0;
  const frame=execution.enter('sub_1b09e',pc);pc=frame.pc;
  let skipBudget=frame.budget || execution.restoring;
  try {
  if(execution.restoring && execution.pending.length===0) {
    execution.restoring=false;
    if(frame.parked!==null) {yield frame.parked;frame.parked=null;frame.budget=false;}
  }
  dispatch: while (true) {
    if (!skipBudget && (++game.steps & 1023) === 0) {
      frame.pc=pc;frame.budget=true;frame.parked=0;yield 0;
      frame.parked=null;frame.budget=false;
    }
    skipBudget=false;
    switch(pc) {
    case 0:

    r.ax = memoryAGet16(r.ds, 0x3964);
    r.dl = memoryAGet(r.ds, 0x3966);
    r.si = 0x0018;
    r.di = r.si;
    r.bx = memoryAGet16(r.ds, 0x0579);
    r.dh = memoryAGet(r.ds, 0x057b);
    r.cx = 0x0e0e;
    frame.pc=2097153;
case 2097153:
yield* sub_1a059();
frame.pc=2097154;
case 2097154:;

      return;
    default: throw new Error("Invalid control flow in sub_1b09e");
    }
  }
  } finally {execution.leave(frame);}
}

function* sub_1b0c0() {
  let pc=0;
  const frame=execution.enter('sub_1b0c0',pc);pc=frame.pc;
  let skipBudget=frame.budget || execution.restoring;
  try {
  if(execution.restoring && execution.pending.length===0) {
    execution.restoring=false;
    if(frame.parked!==null) {yield frame.parked;frame.parked=null;frame.budget=false;}
  }
  dispatch: while (true) {
    if (!skipBudget && (++game.steps & 1023) === 0) {
      frame.pc=pc;frame.budget=true;frame.parked=0;yield 0;
      frame.parked=null;frame.budget=false;
    }
    skipBudget=false;
    switch(pc) {
    case 0:

    if (memoryAGet(r.ds, 0x39e1) == 0x00)
        { pc = 0x1b0d4; continue dispatch; }
    r.ah = 0;
    frame.pc=2097153;
case 2097153:
yield* interrupt(0x1a);
frame.pc=2097154;
case 2097154:;
    if (r.dx == memoryAGet16(r.ds, 0x3d16))
        { pc = 0x1b0e9; continue dispatch; }
    { pc = 0x1b165; continue dispatch; }
case 0x1b0d4:
    if (memoryAGet(r.ds, 0x0584) != 0x00)
        { pc = 0x1b0e9; continue dispatch; }
    if (memoryAGet(r.ds, 0x069a) != 0x00)
        { pc = 0x1b0e9; continue dispatch; }
    if (memoryAGet(r.ds, 0x39e0) != 0x00)
        { pc = 0x1b0ea; continue dispatch; }
case 0x1b0e9:
    return;
case 0x1b0ea:
    frame.pc=2097155;
case 2097155:
yield* sub_1b295();
frame.pc=2097156;
case 2097156:;
    if (flags.carry)
        { pc = 0x1b0e9; continue dispatch; }
    r.ah = 0;
    frame.pc=2097157;
case 2097157:
yield* interrupt(0x1a);
frame.pc=2097158;
case 2097158:;
    r.ax = r.dx;
    r.ax -= memoryAGet16(r.ds, 0x3d18);
    if (r.ax < 0x000c)
        { pc = 0x1b0e9; continue dispatch; }
    memoryASet16(r.ds, 0x3d18, r.dx);
    memoryASet(r.ds, 0x055c, 0x00);
    r.bl = memoryAGet(r.ds, 0x39e0);
    r.bl--;
    r.bh = 0;
    r.si = r.bx;
    r.cl = 0x02;
    r.si <<= r.cl;
    r.ax = memoryAGet16(r.ds, r.si + 15450);
    memoryASet16(r.ds, 0x39e2, r.ax);
    r.ax = 0;
    if (r.bl >= 0x03)
        { pc = 0x1b125; continue dispatch; }
    r.al = 0x80;
case 0x1b125:
    memoryASet16(r.ds, 0x39e4, r.ax);
    r.bl = memoryAGet(r.ds, r.bx + 15587);
    r.si = r.bx;
    r.cl = 0x02;
    r.si <<= r.cl;
    r.ax = memoryAGet16(r.ds, r.si + 15450);
    memoryASet16(r.ds, 0x39e6, r.ax);
    r.ax = 0;
    if (r.bl >= 0x03)
        { pc = 0x1b142; continue dispatch; }
    r.al = 0x80;
case 0x1b142:
    memoryASet16(r.ds, 0x39e8, r.ax);
    r.al = memoryAGet(r.ds, r.bx + 4176);
    memoryASet(r.ds, 0x3d05, r.al);
    r.bl <<= 1;
    r.ax = memoryAGet16(r.ds, r.bx + 4407);
    r.ax += 0x0008;
    memoryASet16(r.ds, 0x3d03, r.ax);
    frame.pc=2097159;
case 2097159:
yield* sub_18413();
frame.pc=2097160;
case 2097160:;
    memoryASet(r.ds, 0x39e1, 0x0e);
    memoryASet(r.ds, 0x069a, 0x10);
case 0x1b165:
    if (memoryAGet(r.ds, 0x1cbf) != 0x00)
        { pc = 0x1b16f; continue dispatch; }
    frame.pc=2097161;
case 2097161:
yield* sub_1a5d0();
frame.pc=2097162;
case 2097162:;
case 0x1b16f:
    memoryASet(r.ds, 0x39e1, memoryAGet(r.ds, 0x39e1) - 0x02);
    r.bh = 0;
    r.bl = memoryAGet(r.ds, 0x39e1);
    if (r.bl < 0x08)
        { pc = 0x1b188; continue dispatch; }
    r.di = memoryAGet16(r.ds, 0x39e2);
    r.ax = memoryAGet16(r.ds, 0x39e4);
    { pc = 0x1b1a0; continue dispatch; }
case 0x1b188:
    r.di = memoryAGet16(r.ds, 0x39e6);
    r.al = memoryAGet(r.ds, 0x3d05);
    memoryASet(r.ds, 0x057b, r.al);
    r.al += 0x32;
    memoryASet(r.ds, 0x057c, r.al);
    r.ax = memoryAGet16(r.ds, 0x3d03);
    memoryASet16(r.ds, 0x0579, r.ax);
    r.ax = memoryAGet16(r.ds, 0x39e8);
case 0x1b1a0:
    r.ax += memoryAGet16(r.ds, r.bx + 15622);
    r.si = r.ax;
    r.ax = 0xb800;
    r.es = r.ax;
    r.cx = 0x1002;
    frame.pc=2097163;
case 2097163:
yield* sub_19fcd();
frame.pc=2097164;
case 2097164:;
    if (memoryAGet(r.ds, 0x1cbf) != 0x00)
        { pc = 0x1b1bb; continue dispatch; }
    frame.pc=2097165;
case 2097165:
yield* sub_1a569();
frame.pc=2097166;
case 2097166:;
case 0x1b1bb:
    r.ah = 0;
    frame.pc=2097167;
case 2097167:
yield* interrupt(0x1a);
frame.pc=2097168;
case 2097168:;
    memoryASet16(r.ds, 0x3d16, r.dx);
    if (memoryAGet(r.ds, 0x39e1) != 0x00)
        return;
    frame.pc=2097169;
case 2097169:
yield* sub_18342();
frame.pc=2097170;
case 2097170:;

      return;
    default: throw new Error("Invalid control flow in sub_1b0c0");
    }
  }
  } finally {execution.leave(frame);}
}

function* sub_1b1ce() {
  let pc=0;
  const frame=execution.enter('sub_1b1ce',pc);pc=frame.pc;
  let skipBudget=frame.budget || execution.restoring;
  try {
  if(execution.restoring && execution.pending.length===0) {
    execution.restoring=false;
    if(frame.parked!==null) {yield frame.parked;frame.parked=null;frame.budget=false;}
  }
  dispatch: while (true) {
    if (!skipBudget && (++game.steps & 1023) === 0) {
      frame.pc=pc;frame.budget=true;frame.parked=0;yield 0;
      frame.parked=null;frame.budget=false;
    }
    skipBudget=false;
    switch(pc) {
    case 0:

    r.ax = 0xb800;
    r.es = r.ax;
    memoryASet(r.ds, 0x39e0, 0x00);
    memoryASet(r.ds, 0x39e1, 0x00);
    memoryASet16(r.ds, 0x3cbf, 0x0506);
    memoryASet16(r.ds, 0x3cc1, 0x0000);
case 0x1b1e9:
    r.bx = memoryAGet16(r.ds, 0x3cc1);
    r.cl = memoryAGet(r.ds, r.bx + 15534);
    r.bx = 0;
    r.ch = r.bl;
case 0x1b1f5:
    r.si = 0x3aea;
    frame.pc=2097153;
case 2097153:
yield* sub_1a02d();
frame.pc=2097154;
case 2097154:;
    if (r.dl > 0x30)
        { pc = 0x1b20b; continue dispatch; }
    r.si = 0x3af8;
    if (r.dl & 0x04)
        { pc = 0x1b20b; continue dispatch; }
    r.si = 0x3b02;
case 0x1b20b:
    r.di = memoryAGet16(r.ds, 0x3cbf);
    r.di += r.bx;
    push(r.cx);
    push(r.bx);
    r.cx = 0x0801;
    frame.pc=2097155;
case 2097155:
yield* sub_19fcd();
frame.pc=2097156;
case 2097156:;
    r.bx = pop();
    r.cx = pop();
    r.bx += 0x0002;
    if (--r.cx)
        { pc = 0x1b1f5; continue dispatch; }
    memoryASet16(r.ds, 0x3cbf, memoryAGet16(r.ds, 0x3cbf) + 0x0140);
    memoryASet16(r.ds, 0x3cc1, memoryAGet16(r.ds, 0x3cc1) + 1);
    if (memoryAGet16(r.ds, 0x3cc1) < 0x0011)
        { pc = 0x1b1e9; continue dispatch; }
    r.bx = 0x3c22;
    r.ax = 0;
    frame.pc=2097157;
case 2097157:
yield* sub_19d54();
frame.pc=2097158;
case 2097158:;
    r.bx = 0x3c3e;
    r.ax = 0;
    frame.pc=2097159;
case 2097159:
yield* sub_19d54();
frame.pc=2097160;
case 2097160:;
    r.bx = 0x3c9a;
    r.ax = 0;
    frame.pc=2097161;
case 2097161:
yield* sub_19d54();
frame.pc=2097162;
case 2097162:;
    r.bx = 0x3c56;
    r.ax = 0;
    frame.pc=2097163;
case 2097163:
yield* sub_19d54();
frame.pc=2097164;
case 2097164:;
    r.si = 0x3caa;
    r.di = 0x08ec;
    r.cx = 0x0102;
    r.bp = 0x000e;
    frame.pc=2097165;
case 2097165:
yield* sub_19f65();
frame.pc=2097166;
case 2097166:;
    r.si = 0;
    r.bx = memoryAGet16(r.ds, 0x0008);
    r.cl = 0x03;
    r.bl &= r.cl;
    r.bl <<= r.cl;
case 0x1b26c:
    r.al = memoryAGet(r.ds, r.bx + 15555);
    r.ah = r.al;
    r.cl = 0x04;
    r.al >>= r.cl;
    memoryASet(r.ds, r.si + 15587, r.al);
    memoryASet(r.ds, r.si + 15603, 0x00);
    r.ah &= 0x0f;
    memoryASet(r.ds, r.si + 15588, r.ah);
    memoryASet(r.ds, r.si + 15604, 0x00);
    r.si += 0x0002;
    r.bx++;
    if (r.si < 0x0010)
        { pc = 0x1b26c; continue dispatch; }

      return;
    default: throw new Error("Invalid control flow in sub_1b1ce");
    }
  }
  } finally {execution.leave(frame);}
}

function* sub_1b295() {
  let pc=0;
  const frame=execution.enter('sub_1b295',pc);pc=frame.pc;
  let skipBudget=frame.budget || execution.restoring;
  try {
  if(execution.restoring && execution.pending.length===0) {
    execution.restoring=false;
    if(frame.parked!==null) {yield frame.parked;frame.parked=null;frame.budget=false;}
  }
  dispatch: while (true) {
    if (!skipBudget && (++game.steps & 1023) === 0) {
      frame.pc=pc;frame.budget=true;frame.parked=0;yield 0;
      frame.parked=null;frame.budget=false;
    }
    skipBudget=false;
    switch(pc) {
    case 0:

    r.ax = memoryAGet16(r.ds, 0x327d);
    r.dl = memoryAGet(r.ds, 0x327f);
    r.si = 0x0010;
    r.bx = memoryAGet16(r.ds, 0x0579);
    r.dh = memoryAGet(r.ds, 0x057b);
    r.di = 0x0018;
    r.cx = 0x0e1e;
    frame.pc=2097153;
case 2097153:
yield* sub_1a059();
frame.pc=2097154;
case 2097154:;

      return;
    default: throw new Error("Invalid control flow in sub_1b295");
    }
  }
  } finally {execution.leave(frame);}
}

function* sub_1b2c0() {
  let pc=0;
  const frame=execution.enter('sub_1b2c0',pc);pc=frame.pc;
  let skipBudget=frame.budget || execution.restoring;
  try {
  if(execution.restoring && execution.pending.length===0) {
    execution.restoring=false;
    if(frame.parked!==null) {yield frame.parked;frame.parked=null;frame.budget=false;}
  }
  dispatch: while (true) {
    if (!skipBudget && (++game.steps & 1023) === 0) {
      frame.pc=pc;frame.budget=true;frame.parked=0;yield 0;
      frame.parked=null;frame.budget=false;
    }
    skipBudget=false;
    switch(pc) {
    case 0:

    r.cx = 0x0004;
case 0x1b2c3:
    r.bx = r.cx;
    r.bx--;
    r.si = r.bx;
    r.si <<= 1;
    memoryASet(r.ds, r.bx + 16046, 0x01);
    memoryASet(r.ds, r.bx + 16050, 0x00);
    frame.pc=2097153;
case 2097153:
yield* sub_1b4a7();
frame.pc=2097154;
case 2097154:;
    frame.pc=2097155;
case 2097155:
yield* sub_1a02d();
frame.pc=2097156;
case 2097156:;
    r.dl &= 0x0f;
    r.dl += 0x14;
    memoryASet(r.ds, r.bx + 16054, r.dl);
    if (--r.cx)
        { pc = 0x1b2c3; continue dispatch; }
    memoryASet16(r.ds, 0x3eda, 0x0000);
    memoryASet(r.ds, 0x3ed8, 0x04);

      return;
    default: throw new Error("Invalid control flow in sub_1b2c0");
    }
  }
  } finally {execution.leave(frame);}
}

function* sub_1b2f2() {
  let pc=0;
  const frame=execution.enter('sub_1b2f2',pc);pc=frame.pc;
  let skipBudget=frame.budget || execution.restoring;
  try {
  if(execution.restoring && execution.pending.length===0) {
    execution.restoring=false;
    if(frame.parked!==null) {yield frame.parked;frame.parked=null;frame.budget=false;}
  }
  dispatch: while (true) {
    if (!skipBudget && (++game.steps & 1023) === 0) {
      frame.pc=pc;frame.budget=true;frame.parked=0;yield 0;
      frame.parked=null;frame.budget=false;
    }
    skipBudget=false;
    switch(pc) {
    case 0:

    r.ah = 0;
    frame.pc=2097153;
case 2097153:
yield* interrupt(0x1a);
frame.pc=2097154;
case 2097154:;
    if (r.dx != memoryAGet16(r.ds, 0x3edc))
        { pc = 0x1b2fd; continue dispatch; }
case 0x1b2fc:
    return;
case 0x1b2fd:
    memoryASet16(r.ds, 0x3eda, memoryAGet16(r.ds, 0x3eda) + 1);
    r.bx = memoryAGet16(r.ds, 0x3eda);
    if (r.bx <= 0x0002)
        { pc = 0x1b315; continue dispatch; }
    if (r.bx < 0x0004)
        { pc = 0x1b319; continue dispatch; }
    r.bx = 0;
    memoryASet16(r.ds, 0x3eda, r.bx);
case 0x1b315:
    memoryASet16(r.ds, 0x3edc, r.dx);
case 0x1b319:
    r.si = r.bx;
    r.si <<= 1;
    if (memoryAGet(r.ds, r.bx + 16050) != 0x00)
        { pc = 0x1b2fc; continue dispatch; }
    frame.pc=2097155;
case 2097155:
yield* sub_1b50b();
frame.pc=2097156;
case 2097156:;
    if (!flags.carry)
        { pc = 0x1b32c; continue dispatch; }
    { pc = 0x1b354; continue dispatch; }
case 0x1b32c:
    frame.pc=2097157;
case 2097157:
yield* sub_1b52c();
frame.pc=2097158;
case 2097158:;
    if (flags.carry)
        { pc = 0x1b2fc; continue dispatch; }
    if (memoryAGet(r.ds, r.bx + 16054) != 0x00)
        { pc = 0x1b348; continue dispatch; }
    frame.pc=2097159;
case 2097159:
yield* sub_1b4a7();
frame.pc=2097160;
case 2097160:;
    frame.pc=2097161;
case 2097161:
yield* sub_1a02d();
frame.pc=2097162;
case 2097162:;
    r.dl &= 0x07;
    r.dl += 0x14;
    memoryASet(r.ds, r.bx + 16054, r.dl);
case 0x1b348:
    memoryASet(r.ds, r.bx + 16054, memoryAGet(r.ds, r.bx + 16054) - 1);
    frame.pc=2097163;
case 2097163:
yield* sub_1b50b();
frame.pc=2097164;
case 2097164:;
    if (flags.carry)
        { pc = 0x1b354; continue dispatch; }
    { pc = 0x1b3b1; continue dispatch; }
case 0x1b354:
    if (memoryAGet(r.ds, r.bx + 16046) != 0x00)
        { pc = 0x1b362; continue dispatch; }
    if (memoryAGet(r.ds, r.bx + 16054) < 0x14)
        { pc = 0x1b363; continue dispatch; }
case 0x1b362:
    return;
case 0x1b363:
    frame.pc=2097165;
case 2097165:
yield* sub_18413();
frame.pc=2097166;
case 2097166:;
    frame.pc=2097167;
case 2097167:
yield* sub_1b484();
frame.pc=2097168;
case 2097168:;
    r.bx = memoryAGet16(r.ds, 0x3eda);
    memoryASet(r.ds, r.bx + 16050, 0x01);
    frame.pc=2097169;
case 2097169:
yield* sub_18354();
frame.pc=2097170;
case 2097170:;
    memoryASet(r.ds, 0x055c, 0x00);
    r.tl = memoryAGet(r.ds, 0x3ed8);
    memoryASet(r.ds, 0x3ed8, memoryAGet(r.ds, 0x3ed8) - 1);
    if (r.tl != 1)
        { pc = 0x1b385; continue dispatch; }
    memoryASet(r.ds, 0x0553, 0x01);
case 0x1b385:
    r.al = 0x04;
    r.al -= memoryAGet(r.ds, 0x3ed8);
    r.cl = 0x02;
    r.al <<= r.cl;
    r.ah = 0;
    r.ax += 0x0051;
    r.di = r.ax;
    r.bp = 0x000e;
    r.si = 0x3d20;
    r.ax = 0xb800;
    r.es = r.ax;
    r.cx = 0x0c02;
    frame.pc=2097171;
case 2097171:
yield* sub_19f65();
frame.pc=2097172;
case 2097172:;
    r.ax = 0x03e8;
    r.bx = 0x02ee;
    frame.pc=2097173;
case 2097173:
yield* sub_1cb6b();
frame.pc=2097174;
case 2097174:;
    return;
case 0x1b3b1:
    frame.pc=2097175;
case 2097175:
yield* sub_1b4e4();
frame.pc=2097176;
case 2097176:;
    r.di = memoryAGet16(r.ds, 0x0008);
    r.di <<= 1;
    r.bp = memoryAGet16(r.ds, r.di + 16094);
    frame.pc=2097177;
case 2097177:
yield* sub_1b54c();
frame.pc=2097178;
case 2097178:;
    if (!flags.carry)
        { pc = 0x1b3e0; continue dispatch; }
    if (memoryAGet(r.ds, r.bx + 16054) < 0x02)
        { pc = 0x1b3e0; continue dispatch; }
    r.al = 0x01;
    if (memoryAGet(r.ds, r.bx + 16054) <= 0x11)
        { pc = 0x1b3dc; continue dispatch; }
    if (memoryAGet(r.ds, r.bx + 16054) >= 0x14)
        { pc = 0x1b3e0; continue dispatch; }
    r.al--;
case 0x1b3dc:
    memoryASet(r.ds, r.bx + 16054, r.al);
case 0x1b3e0:
    r.al = memoryAGet(r.ds, r.bx + 16054);
    if (r.al <= 0x01)
        { pc = 0x1b408; continue dispatch; }
    if (r.al < 0x12)
        { pc = 0x1b428; continue dispatch; }
    r.al = 0x01;
    if (memoryAGet16(r.ds, r.si + 16058) >= 0x0003)
        { pc = 0x1b3f7; continue dispatch; }
    r.al = 0x03;
case 0x1b3f7:
    memoryASet(r.ds, r.bx + 16084, memoryAGet(r.ds, r.bx + 16084) + r.al);
    if (memoryAGet(r.ds, r.bx + 16054) < 0x13)
        { pc = 0x1b423; continue dispatch; }
    if (memoryAGet(r.ds, r.bx + 16054) == 0x13)
        { pc = 0x1b41e; continue dispatch; }
    r.ax = 0;
    { pc = 0x1b434; continue dispatch; }
case 0x1b408:
    r.al = 0x01;
    if (memoryAGet16(r.ds, r.si + 16058) >= 0x0003)
        { pc = 0x1b413; continue dispatch; }
    r.al = 0x03;
case 0x1b413:
    memoryASet(r.ds, r.bx + 16084, memoryAGet(r.ds, r.bx + 16084) + r.al);
    if (memoryAGet(r.ds, r.bx + 16054) >= 0x01)
        { pc = 0x1b423; continue dispatch; }
case 0x1b41e:
    r.ax = 0x3db0;
    { pc = 0x1b434; continue dispatch; }
case 0x1b423:
    r.ax = 0x3d80;
    { pc = 0x1b434; continue dispatch; }
case 0x1b428:
    r.al <<= 1;
    r.di = r.ax;
    r.di &= 0x0002;
    r.ax = memoryAGet16(r.ds, r.di + 15840);
case 0x1b434:
    memoryASet16(r.ds, 0x3eca, r.ax);
    r.dl = memoryAGet(r.ds, r.bx + 16084);
    r.cx = memoryAGet16(r.ds, r.si + 16076);
    frame.pc=2097179;
case 2097179:
yield* sub_19ee0();
frame.pc=2097180;
case 2097180:;
    memoryASet16(r.ds, 0x3de4, r.ax);
    frame.pc=2097181;
case 2097181:
yield* sub_1b484();
frame.pc=2097182;
case 2097182:;
    r.bx = memoryAGet16(r.ds, 0x3eda);
    r.si = r.bx;
    r.si <<= 1;
    frame.pc=2097183;
case 2097183:
yield* sub_1b52c();
frame.pc=2097184;
case 2097184:;
    if (!flags.carry)
        { pc = 0x1b456; continue dispatch; }
    return;
case 0x1b456:
    if (memoryAGet16(r.ds, 0x3eca) != 0x0000)
        { pc = 0x1b463; continue dispatch; }
    memoryASet(r.ds, r.bx + 16046, 0x01);
    return;
case 0x1b463:
    memoryASet(r.ds, r.bx + 16046, 0x00);
    r.di = memoryAGet16(r.ds, 0x3de4);
    memoryASet16(r.ds, r.si + 16038, r.di);
    r.ax = 0xb800;
    r.es = r.ax;
    r.bp = memoryAGet16(r.ds, r.si + 16066);
    r.cx = 0x0c02;
    r.si = memoryAGet16(r.ds, 0x3eca);
    frame.pc=2097185;
case 2097185:
yield* sub_19f65();
frame.pc=2097186;
case 2097186:;

      return;
    default: throw new Error("Invalid control flow in sub_1b2f2");
    }
  }
  } finally {execution.leave(frame);}
}

function* sub_1b484() {
  let pc=0;
  const frame=execution.enter('sub_1b484',pc);pc=frame.pc;
  let skipBudget=frame.budget || execution.restoring;
  try {
  if(execution.restoring && execution.pending.length===0) {
    execution.restoring=false;
    if(frame.parked!==null) {yield frame.parked;frame.parked=null;frame.budget=false;}
  }
  dispatch: while (true) {
    if (!skipBudget && (++game.steps & 1023) === 0) {
      frame.pc=pc;frame.budget=true;frame.parked=0;yield 0;
      frame.parked=null;frame.budget=false;
    }
    skipBudget=false;
    switch(pc) {
    case 0:

    r.bx = memoryAGet16(r.ds, 0x3eda);
    r.si = r.bx;
    r.si <<= 1;
    if (memoryAGet(r.ds, r.bx + 16046) != 0x00)
        return;
    r.di = memoryAGet16(r.ds, r.si + 16038);
    r.cx = 0x0c02;
    r.si = memoryAGet16(r.ds, r.si + 16066);
    r.ax = 0xb800;
    r.es = r.ax;
    frame.pc=2097153;
case 2097153:
yield* sub_19fcd();
frame.pc=2097154;
case 2097154:;

      return;
    default: throw new Error("Invalid control flow in sub_1b484");
    }
  }
  } finally {execution.leave(frame);}
}

function* sub_1b4a7() {
  let pc=0;
  const frame=execution.enter('sub_1b4a7',pc);pc=frame.pc;
  let skipBudget=frame.budget || execution.restoring;
  try {
  if(execution.restoring && execution.pending.length===0) {
    execution.restoring=false;
    if(frame.parked!==null) {yield frame.parked;frame.parked=null;frame.budget=false;}
  }
  dispatch: while (true) {
    if (!skipBudget && (++game.steps & 1023) === 0) {
      frame.pc=pc;frame.budget=true;frame.parked=0;yield 0;
      frame.parked=null;frame.budget=false;
    }
    skipBudget=false;
    switch(pc) {
    case 0:

    memoryASet(r.ds, 0x3ed9, 0x20);
case 0x1b4ac:
    frame.pc=2097153;
case 2097153:
yield* sub_1a02d();
frame.pc=2097154;
case 2097154:;
    r.dx &= 0x000f;
    r.di = 0;
case 0x1b4b5:
    if (r.di == r.si)
        { pc = 0x1b4bf; continue dispatch; }
    if (r.dx == memoryAGet16(r.ds, r.di + 16058))
        { pc = 0x1b4ac; continue dispatch; }
case 0x1b4bf:
    r.di += 0x0002;
    if (r.di < 0x0008)
        { pc = 0x1b4b5; continue dispatch; }
    memoryASet16(r.ds, r.si + 16058, r.dx);
    frame.pc=2097155;
case 2097155:
yield* sub_1b4e4();
frame.pc=2097156;
case 2097156:;
    if (memoryAGet(r.ds, 0x3ed9) == 0x00)
        return;
    r.bp = 0x0032;
    frame.pc=2097157;
case 2097157:
yield* sub_1b54c();
frame.pc=2097158;
case 2097158:;
    if (!flags.carry)
        return;
    memoryASet(r.ds, 0x3ed9, memoryAGet(r.ds, 0x3ed9) - 1);
    { pc = 0x1b4ac; continue dispatch; }

      return;
    default: throw new Error("Invalid control flow in sub_1b4a7");
    }
  }
  } finally {execution.leave(frame);}
}

function* sub_1b4e4() {
  let pc=0;
  const frame=execution.enter('sub_1b4e4',pc);pc=frame.pc;
  let skipBudget=frame.budget || execution.restoring;
  try {
  if(execution.restoring && execution.pending.length===0) {
    execution.restoring=false;
    if(frame.parked!==null) {yield frame.parked;frame.parked=null;frame.budget=false;}
  }
  dispatch: while (true) {
    if (!skipBudget && (++game.steps & 1023) === 0) {
      frame.pc=pc;frame.budget=true;frame.parked=0;yield 0;
      frame.parked=null;frame.budget=false;
    }
    skipBudget=false;
    switch(pc) {
    case 0:

    r.di = memoryAGet16(r.ds, r.si + 16058);
    r.al = memoryAGet(r.ds, r.di + 4176);
    r.dl = 0x0a;
    if (r.di >= 0x0003)
        { pc = 0x1b4f5; continue dispatch; }
    r.dl = 0;
case 0x1b4f5:
    r.al -= r.dl;
    r.al += 0x03;
    memoryASet(r.ds, r.bx + 16084, r.al);
    r.di <<= 1;
    r.ax = memoryAGet16(r.ds, r.di + 4407);
    r.ax += 0x0008;
    memoryASet16(r.ds, r.si + 16076, r.ax);

      return;
    default: throw new Error("Invalid control flow in sub_1b4e4");
    }
  }
  } finally {execution.leave(frame);}
}

function* sub_1b50b() {
  let pc=0;
  const frame=execution.enter('sub_1b50b',pc);pc=frame.pc;
  let skipBudget=frame.budget || execution.restoring;
  try {
  if(execution.restoring && execution.pending.length===0) {
    execution.restoring=false;
    if(frame.parked!==null) {yield frame.parked;frame.parked=null;frame.budget=false;}
  }
  dispatch: while (true) {
    if (!skipBudget && (++game.steps & 1023) === 0) {
      frame.pc=pc;frame.budget=true;frame.parked=0;yield 0;
      frame.parked=null;frame.budget=false;
    }
    skipBudget=false;
    switch(pc) {
    case 0:

    push(r.si);
    push(r.bx);
    r.ax = memoryAGet16(r.ds, r.si + 16076);
    r.dl = memoryAGet(r.ds, r.bx + 16084);
    r.si = 0x0010;
    r.bx = memoryAGet16(r.ds, 0x0579);
    r.dh = memoryAGet(r.ds, 0x057b);
    r.di = 0x0018;
    r.cx = 0x0e0c;
    frame.pc=2097153;
case 2097153:
yield* sub_1a059();
frame.pc=2097154;
case 2097154:;
    r.bx = pop();
    r.si = pop();

      return;
    default: throw new Error("Invalid control flow in sub_1b50b");
    }
  }
  } finally {execution.leave(frame);}
}

function* sub_1b52c() {
  let pc=0;
  const frame=execution.enter('sub_1b52c',pc);pc=frame.pc;
  let skipBudget=frame.budget || execution.restoring;
  try {
  if(execution.restoring && execution.pending.length===0) {
    execution.restoring=false;
    if(frame.parked!==null) {yield frame.parked;frame.parked=null;frame.budget=false;}
  }
  dispatch: while (true) {
    if (!skipBudget && (++game.steps & 1023) === 0) {
      frame.pc=pc;frame.budget=true;frame.parked=0;yield 0;
      frame.parked=null;frame.budget=false;
    }
    skipBudget=false;
    switch(pc) {
    case 0:

    push(r.si);
    push(r.bx);
    r.ax = memoryAGet16(r.ds, r.si + 16076);
    r.dl = memoryAGet(r.ds, r.bx + 16084);
    r.si = 0x0010;
    r.bx = memoryAGet16(r.ds, 0x327d);
    r.dh = memoryAGet(r.ds, 0x327f);
    r.di = r.si;
    r.cx = 0x1e0c;
    frame.pc=2097153;
case 2097153:
yield* sub_1a059();
frame.pc=2097154;
case 2097154:;
    r.bx = pop();
    r.si = pop();

      return;
    default: throw new Error("Invalid control flow in sub_1b52c");
    }
  }
  } finally {execution.leave(frame);}
}

function* sub_1b54c() {
  let pc=0;
  const frame=execution.enter('sub_1b54c',pc);pc=frame.pc;
  let skipBudget=frame.budget || execution.restoring;
  try {
  if(execution.restoring && execution.pending.length===0) {
    execution.restoring=false;
    if(frame.parked!==null) {yield frame.parked;frame.parked=null;frame.budget=false;}
  }
  dispatch: while (true) {
    if (!skipBudget && (++game.steps & 1023) === 0) {
      frame.pc=pc;frame.budget=true;frame.parked=0;yield 0;
      frame.parked=null;frame.budget=false;
    }
    skipBudget=false;
    switch(pc) {
    case 0:

    r.ax = memoryAGet16(r.ds, r.si + 16076);
    flags.carry = r.ax < memoryAGet16(r.ds, 0x0579);
    r.ax -= memoryAGet16(r.ds, 0x0579);
    if (!flags.carry)
        { pc = 0x1b558; continue dispatch; }
    r.ax = ~r.ax;
case 0x1b558:
    r.dl = memoryAGet(r.ds, r.bx + 16084);
    flags.carry = r.dl < memoryAGet(r.ds, 0x057b);
    r.dl -= memoryAGet(r.ds, 0x057b);
    if (!flags.carry)
        { pc = 0x1b564; continue dispatch; }
    r.dl = ~r.dl;
case 0x1b564:
    r.dh = 0;
    r.ax += r.dx;
    if (r.ax < r.bp)
        { pc = 0x1b56e; continue dispatch; }
    flags.carry = false;
    return;
case 0x1b56e:
    flags.carry = true;

      return;
    default: throw new Error("Invalid control flow in sub_1b54c");
    }
  }
  } finally {execution.leave(frame);}
}

function* sub_1b570() {
  let pc=0;
  const frame=execution.enter('sub_1b570',pc);pc=frame.pc;
  let skipBudget=frame.budget || execution.restoring;
  try {
  if(execution.restoring && execution.pending.length===0) {
    execution.restoring=false;
    if(frame.parked!==null) {yield frame.parked;frame.parked=null;frame.budget=false;}
  }
  dispatch: while (true) {
    if (!skipBudget && (++game.steps & 1023) === 0) {
      frame.pc=pc;frame.budget=true;frame.parked=0;yield 0;
      frame.parked=null;frame.budget=false;
    }
    skipBudget=false;
    switch(pc) {
    case 0:

    r.ah = 0;
    frame.pc=2097153;
case 2097153:
yield* interrupt(0x1a);
frame.pc=2097154;
case 2097154:;
    if (r.dx != memoryAGet16(r.ds, 0x40b5))
        { pc = 0x1b57b; continue dispatch; }
case 0x1b57a:
    return;
case 0x1b57b:
    memoryASet(r.ds, 0x40ff, memoryAGet(r.ds, 0x40ff) + 1);
    if (!(memoryAGet(r.ds, 0x40ff) & 0x03))
        { pc = 0x1b58a; continue dispatch; }
    memoryASet16(r.ds, 0x40b5, r.dx);
case 0x1b58a:
    if (memoryAGet(r.ds, 0x40aa) < 0xa4)
        { pc = 0x1b57a; continue dispatch; }
    frame.pc=2097155;
case 2097155:
yield* sub_1b75d();
frame.pc=2097156;
case 2097156:;
    frame.pc=2097157;
case 2097157:
yield* sub_1b787();
frame.pc=2097158;
case 2097158:;
    if (flags.carry)
        { pc = 0x1b57a; continue dispatch; }
    frame.pc=2097159;
case 2097159:
yield* sub_1a02d();
frame.pc=2097160;
case 2097160:;
    if (r.dl > 0x30)
        { pc = 0x1b5cc; continue dispatch; }
    frame.pc=2097161;
case 2097161:
yield* sub_1b72b();
frame.pc=2097162;
case 2097162:;
    r.si = memoryAGet16(r.ds, 0x0008);
    r.si <<= 1;
    r.ax = memoryAGet16(r.ds, r.si + 16590);
    if (memoryAGet16(r.ds, 0x40cc) > r.ax)
        { pc = 0x1b5cc; continue dispatch; }
    frame.pc=2097163;
case 2097163:
yield* sub_1cb8d();
frame.pc=2097164;
case 2097164:;
    memoryASet16(r.ds, 0x40c8, 0x00ff);
    r.al = memoryAGet(r.ds, 0x40ca);
    memoryASet(r.ds, 0x40b7, r.al);
    r.al = memoryAGet(r.ds, 0x40cb);
    memoryASet(r.ds, 0x40b8, r.al);
    { pc = 0x1b65e; continue dispatch; }
case 0x1b5cc:
    if (memoryAGet16(r.ds, 0x40c8) > 0x000a)
        { pc = 0x1b5e1; continue dispatch; }
    frame.pc=2097165;
case 2097165:
yield* sub_1a02d();
frame.pc=2097166;
case 2097166:;
    if (r.dl > 0x06)
        { pc = 0x1b5e4; continue dispatch; }
    memoryASet16(r.ds, 0x40c8, 0x00ff);
case 0x1b5e1:
    { pc = 0x1b632; continue dispatch; }
case 0x1b5e4:
    r.bx = memoryAGet16(r.ds, 0x40c8);
    r.si = r.bx;
    r.si <<= 1;
    r.dl = 0;
    r.ax = memoryAGet16(r.ds, 0x40b2);
    r.ax &= 0x0ffc;
    if (r.ax == memoryAGet16(r.ds, r.si + 16606))
        { pc = 0x1b600; continue dispatch; }
    flags.carry = r.dl == 0xff;
    r.dl++;
    if (flags.carry)
        { pc = 0x1b600; continue dispatch; }
    r.dl = 0xff;
case 0x1b600:
    memoryASet(r.ds, 0x40b7, r.dl);
    r.dl = 0;
    r.al = memoryAGet(r.ds, 0x40b4);
    r.al &= 0xfe;
    if (r.al == memoryAGet(r.ds, r.bx + 16628))
        { pc = 0x1b617; continue dispatch; }
    flags.carry = r.dl == 0xff;
    r.dl++;
    if (flags.carry)
        { pc = 0x1b617; continue dispatch; }
    r.dl = 0xff;
case 0x1b617:
    memoryASet(r.ds, 0x40b8, r.dl);
    r.dl |= memoryAGet(r.ds, 0x40b7);
    if (r.dl)
        { pc = 0x1b65e; continue dispatch; }
    frame.pc=2097167;
case 2097167:
yield* sub_1a02d();
frame.pc=2097168;
case 2097168:;
    if (r.dl > 0x10)
        { pc = 0x1b65e; continue dispatch; }
    memoryASet16(r.ds, 0x40c8, 0x00ff);
    frame.pc=2097169;
case 2097169:
yield* sub_1cb8d();
frame.pc=2097170;
case 2097170:;
case 0x1b632:
    frame.pc=2097171;
case 2097171:
yield* sub_1a02d();
frame.pc=2097172;
case 2097172:;
    if (r.dl > 0x30)
        { pc = 0x1b653; continue dispatch; }
    r.dl &= 0x01;
    if (r.dl != 0)
        { pc = 0x1b641; continue dispatch; }
    r.dl = 0xff;
case 0x1b641:
    memoryASet(r.ds, 0x40b7, r.dl);
    frame.pc=2097173;
case 2097173:
yield* sub_1a02d();
frame.pc=2097174;
case 2097174:;
    r.dl &= 0x01;
    if (r.dl != 0)
        { pc = 0x1b64f; continue dispatch; }
    r.dl = 0xff;
case 0x1b64f:
    memoryASet(r.ds, 0x40b8, r.dl);
case 0x1b653:
    frame.pc=2097175;
case 2097175:
yield* sub_1a02d();
frame.pc=2097176;
case 2097176:;
    r.dx &= 0x00ff;
    memoryASet16(r.ds, 0x40c8, r.dx);
case 0x1b65e:
    r.al = memoryAGet(r.ds, 0x40b4);
    if (memoryAGet(r.ds, 0x40b8) < 0x01)
        { pc = 0x1b689; continue dispatch; }
    if (memoryAGet(r.ds, 0x40b8) != 0x01)
        { pc = 0x1b679; continue dispatch; }
    r.al += 0x02;
    if (r.al < 0xa8)
        { pc = 0x1b686; continue dispatch; }
    r.al = 0xa7;
    memoryASet(r.ds, 0x40b8, 0xff);
    { pc = 0x1b686; continue dispatch; }
case 0x1b679:
    r.al -= 0x02;
    if (r.al >= 0x30)
        { pc = 0x1b686; continue dispatch; }
    r.al = 0x30;
    memoryASet(r.ds, 0x40b8, 0x01);
case 0x1b686:
    memoryASet(r.ds, 0x40b4, r.al);
case 0x1b689:
    r.ax = memoryAGet16(r.ds, 0x40b2);
    if (memoryAGet(r.ds, 0x40b7) < 0x01)
        { pc = 0x1b6b6; continue dispatch; }
    if (memoryAGet(r.ds, 0x40b7) != 0x01)
        { pc = 0x1b6a7; continue dispatch; }
    r.ax += 0x0004;
    if (r.ax < 0x0136)
        { pc = 0x1b6b3; continue dispatch; }
    r.ax = 0x0135;
    memoryASet(r.ds, 0x40b7, 0xff);
    { pc = 0x1b6b3; continue dispatch; }
case 0x1b6a7:
    flags.carry = r.ax < 0x0004;
    r.ax -= 0x0004;
    if (!flags.carry)
        { pc = 0x1b6b3; continue dispatch; }
    r.ax = 0;
    memoryASet(r.ds, 0x40b7, 0x01);
case 0x1b6b3:
    memoryASet16(r.ds, 0x40b2, r.ax);
case 0x1b6b6:
    frame.pc=2097177;
case 2097177:
yield* sub_1b75d();
frame.pc=2097178;
case 2097178:;
    r.cx = memoryAGet16(r.ds, 0x40b2);
    r.dl = memoryAGet(r.ds, 0x40b4);
    frame.pc=2097179;
case 2097179:
yield* sub_19ee0();
frame.pc=2097180;
case 2097180:;
    memoryASet16(r.ds, 0x40bc, r.ax);
    r.ax = 0xb800;
    r.es = r.ax;
    if (memoryAGet(r.ds, 0x40b9) != 0x00)
        { pc = 0x1b6e0; continue dispatch; }
    r.si = 0x3f2c;
    r.di = memoryAGet16(r.ds, 0x40ba);
    r.cx = 0x0501;
    frame.pc=2097181;
case 2097181:
yield* sub_19fcd();
frame.pc=2097182;
case 2097182:;
case 0x1b6e0:
    frame.pc=2097183;
case 2097183:
yield* sub_1b787();
frame.pc=2097184;
case 2097184:;
    if (flags.carry)
        return;
    memoryASet(r.ds, 0x40b9, 0x00);
    memoryASet16(r.ds, 0x40be, memoryAGet16(r.ds, 0x40be) + 0x0002);
    r.bx = memoryAGet16(r.ds, 0x40be);
    r.bx &= 0x0006;
    r.si = memoryAGet16(r.ds, r.bx + 16576);
    if (memoryAGet(r.ds, 0x40b7) != 0xff)
        { pc = 0x1b705; continue dispatch; }
    r.si += 0x001e;
case 0x1b705:
    r.di = memoryAGet16(r.ds, 0x40bc);
    memoryASet16(r.ds, 0x40ba, r.di);
    r.bp = 0x3f2c;
    r.cx = 0x0501;
    frame.pc=2097185;
case 2097185:
yield* sub_19efc();
frame.pc=2097186;
case 2097186:;

      return;
    default: throw new Error("Invalid control flow in sub_1b570");
    }
  }
  } finally {execution.leave(frame);}
}

function* sub_1b717() {
  let pc=0;
  const frame=execution.enter('sub_1b717',pc);pc=frame.pc;
  let skipBudget=frame.budget || execution.restoring;
  try {
  if(execution.restoring && execution.pending.length===0) {
    execution.restoring=false;
    if(frame.parked!==null) {yield frame.parked;frame.parked=null;frame.budget=false;}
  }
  dispatch: while (true) {
    if (!skipBudget && (++game.steps & 1023) === 0) {
      frame.pc=pc;frame.budget=true;frame.parked=0;yield 0;
      frame.parked=null;frame.budget=false;
    }
    skipBudget=false;
    switch(pc) {
    case 0:

    if (memoryAGet(r.ds, 0x0571) != 0x00)
        { pc = 0x1b729; continue dispatch; }
    r.al = memoryAGet(r.ds, 0x057b);
    r.al &= 0xf8;
    if (r.al != 0x88)
        { pc = 0x1b729; continue dispatch; }
    flags.carry = true;
    return;
case 0x1b729:
    flags.carry = false;

      return;
    default: throw new Error("Invalid control flow in sub_1b717");
    }
  }
  } finally {execution.leave(frame);}
}

function* sub_1b72b() {
  let pc=0;
  const frame=execution.enter('sub_1b72b',pc);pc=frame.pc;
  let skipBudget=frame.budget || execution.restoring;
  try {
  if(execution.restoring && execution.pending.length===0) {
    execution.restoring=false;
    if(frame.parked!==null) {yield frame.parked;frame.parked=null;frame.budget=false;}
  }
  dispatch: while (true) {
    if (!skipBudget && (++game.steps & 1023) === 0) {
      frame.pc=pc;frame.budget=true;frame.parked=0;yield 0;
      frame.parked=null;frame.budget=false;
    }
    skipBudget=false;
    switch(pc) {
    case 0:

    r.ax = memoryAGet16(r.ds, 0x40b2);
    r.dl = 0x01;
    flags.carry = r.ax < memoryAGet16(r.ds, 0x0579);
    r.ax -= memoryAGet16(r.ds, 0x0579);
    if (!flags.carry)
        { pc = 0x1b73a; continue dispatch; }
    r.ax = ~r.ax;
    r.dl = 0xff;
case 0x1b73a:
    memoryASet(r.ds, 0x40ca, r.dl);
    memoryASet16(r.ds, 0x40cc, r.ax);
    r.al = memoryAGet(r.ds, 0x40b4);
    r.dl = 0x01;
    flags.carry = r.al < memoryAGet(r.ds, 0x057b);
    r.al -= memoryAGet(r.ds, 0x057b);
    if (!flags.carry)
        { pc = 0x1b750; continue dispatch; }
    r.al = ~r.al;
    r.dl = 0xff;
case 0x1b750:
    memoryASet(r.ds, 0x40cb, r.dl);
    r.ah = 0;
    r.ax <<= 1;
    memoryASet16(r.ds, 0x40cc, memoryAGet16(r.ds, 0x40cc) + r.ax);

      return;
    default: throw new Error("Invalid control flow in sub_1b72b");
    }
  }
  } finally {execution.leave(frame);}
}

function* sub_1b75d() {
  let pc=0;
  const frame=execution.enter('sub_1b75d',pc);pc=frame.pc;
  let skipBudget=frame.budget || execution.restoring;
  try {
  if(execution.restoring && execution.pending.length===0) {
    execution.restoring=false;
    if(frame.parked!==null) {yield frame.parked;frame.parked=null;frame.budget=false;}
  }
  dispatch: while (true) {
    if (!skipBudget && (++game.steps & 1023) === 0) {
      frame.pc=pc;frame.budget=true;frame.parked=0;yield 0;
      frame.parked=null;frame.budget=false;
    }
    skipBudget=false;
    switch(pc) {
    case 0:

    r.ax = memoryAGet16(r.ds, 0x40b2);
    r.dl = memoryAGet(r.ds, 0x40b4);
    r.si = 0x0008;
    r.bx = memoryAGet16(r.ds, 0x0579);
    r.dh = memoryAGet(r.ds, 0x057b);
    r.di = 0x0018;
    r.cx = 0x0e05;
    frame.pc=2097153;
case 2097153:
yield* sub_1a059();
frame.pc=2097154;
case 2097154:;
    if (!flags.carry)
        return;
    if (memoryAGet(r.ds, 0x0552) != 0x00)
        return;
    memoryASet(r.ds, 0x0553, 0x01);

      return;
    default: throw new Error("Invalid control flow in sub_1b75d");
    }
  }
  } finally {execution.leave(frame);}
}

function* sub_1b787() {
  let pc=0;
  const frame=execution.enter('sub_1b787',pc);pc=frame.pc;
  let skipBudget=frame.budget || execution.restoring;
  try {
  if(execution.restoring && execution.pending.length===0) {
    execution.restoring=false;
    if(frame.parked!==null) {yield frame.parked;frame.parked=null;frame.budget=false;}
  }
  dispatch: while (true) {
    if (!skipBudget && (++game.steps & 1023) === 0) {
      frame.pc=pc;frame.budget=true;frame.parked=0;yield 0;
      frame.parked=null;frame.budget=false;
    }
    skipBudget=false;
    switch(pc) {
    case 0:

    r.ax = memoryAGet16(r.ds, 0x40b2);
    r.dl = memoryAGet(r.ds, 0x40b4);
    r.si = 0x0008;
    r.bx = memoryAGet16(r.ds, 0x327d);
    r.dh = memoryAGet(r.ds, 0x327f);
    r.di = 0x0010;
    r.cx = 0x1e05;
    frame.pc=2097153;
case 2097153:
yield* sub_1a059();
frame.pc=2097154;
case 2097154:;
    if (!flags.carry)
        return;
    memoryASet(r.ds, 0x40b8, 0xff);

      return;
    default: throw new Error("Invalid control flow in sub_1b787");
    }
  }
  } finally {execution.leave(frame);}
}

function* sub_1b7aa() {
  let pc=0;
  const frame=execution.enter('sub_1b7aa',pc);pc=frame.pc;
  let skipBudget=frame.budget || execution.restoring;
  try {
  if(execution.restoring && execution.pending.length===0) {
    execution.restoring=false;
    if(frame.parked!==null) {yield frame.parked;frame.parked=null;frame.budget=false;}
  }
  dispatch: while (true) {
    if (!skipBudget && (++game.steps & 1023) === 0) {
      frame.pc=pc;frame.budget=true;frame.parked=0;yield 0;
      frame.parked=null;frame.budget=false;
    }
    skipBudget=false;
    switch(pc) {
    case 0:

    r.cx = 0x0090;
    r.dl = 0x86;
    memoryASet16(r.ds, 0x40a8, r.cx);
    memoryASet(r.ds, 0x40aa, r.dl);
    frame.pc=2097153;
case 2097153:
yield* sub_19ee0();
frame.pc=2097154;
case 2097154:;
    memoryASet16(r.ds, 0x40ab, r.ax);
    frame.pc=2097155;
case 2097155:
yield* sub_1b989();
frame.pc=2097156;
case 2097156:;
    memoryASet(r.ds, 0x40af, 0x00);
    memoryASet(r.ds, 0x40b1, 0x00);
    memoryASet(r.ds, 0x40b9, 0x01);
    memoryASet(r.ds, 0x40b8, 0x00);
    memoryASet16(r.ds, 0x40c8, 0x00ff);

      return;
    default: throw new Error("Invalid control flow in sub_1b7aa");
    }
  }
  } finally {execution.leave(frame);}
}

function* sub_1b7db() {
  let pc=0;
  const frame=execution.enter('sub_1b7db',pc);pc=frame.pc;
  let skipBudget=frame.budget || execution.restoring;
  try {
  if(execution.restoring && execution.pending.length===0) {
    execution.restoring=false;
    if(frame.parked!==null) {yield frame.parked;frame.parked=null;frame.budget=false;}
  }
  dispatch: while (true) {
    if (!skipBudget && (++game.steps & 1023) === 0) {
      frame.pc=pc;frame.budget=true;frame.parked=0;yield 0;
      frame.parked=null;frame.budget=false;
    }
    skipBudget=false;
    switch(pc) {
    case 0:

    r.ah = 0;
    frame.pc=2097153;
case 2097153:
yield* interrupt(0x1a);
frame.pc=2097154;
case 2097154:;
    if (r.dx != memoryAGet16(r.ds, 0x40ad))
        { pc = 0x1b7e6; continue dispatch; }
case 0x1b7e5:
    return;
case 0x1b7e6:
    memoryASet16(r.ds, 0x40ad, r.dx);
    if (memoryAGet(r.ds, 0x40aa) >= 0xa4)
        { pc = 0x1b7e5; continue dispatch; }
    frame.pc=2097155;
case 2097155:
yield* sub_1b9b6();
frame.pc=2097156;
case 2097156:;
    if (!flags.carry)
        { pc = 0x1b806; continue dispatch; }
    frame.pc=2097157;
case 2097157:
yield* sub_1b717();
frame.pc=2097158;
case 2097158:;
    if (!flags.carry)
        { pc = 0x1b7e5; continue dispatch; }
    memoryASet(r.ds, 0x0571, 0x01);
    memoryASet(r.ds, 0x055b, 0x10);
    return;
case 0x1b806:
    frame.pc=2097159;
case 2097159:
yield* sub_1b96e();
frame.pc=2097160;
case 2097160:;
    if (!flags.carry)
        { pc = 0x1b879; continue dispatch; }
    if (memoryAGet(r.ds, 0x40af) != 0x00)
        { pc = 0x1b82a; continue dispatch; }
    r.al = memoryAGet(r.ds, 0x056e);
    if (r.al != 0x00)
        { pc = 0x1b827; continue dispatch; }
    r.al++;
    r.bx = memoryAGet16(r.ds, 0x40a8);
    if (r.bx > memoryAGet16(r.ds, 0x0579))
        { pc = 0x1b827; continue dispatch; }
    r.al = 0xff;
case 0x1b827:
    memoryASet(r.ds, 0x40b0, r.al);
case 0x1b82a:
    memoryASet(r.ds, 0x40af, 0x01);
    r.cx = 0x0020;
case 0x1b832:
    r.ax = memoryAGet16(r.ds, 0x0579);
    r.dl = 0x01;
    if (memoryAGet(r.ds, 0x40b0) != 0x01)
        { pc = 0x1b845; continue dispatch; }
    r.ax -= 0x0008;
    r.dl = 0xff;
    { pc = 0x1b848; continue dispatch; }
case 0x1b845:
    r.ax += 0x0008;
case 0x1b848:
    memoryASet16(r.ds, 0x0579, r.ax);
    memoryASet(r.ds, 0x056e, r.dl);
    r.al = memoryAGet(r.ds, 0x057b);
    if (memoryAGet(r.ds, 0x0571) < 0x01)
        { pc = 0x1b869; continue dispatch; }
    if (memoryAGet(r.ds, 0x0571) != 0x01)
        { pc = 0x1b85f; continue dispatch; }
    r.al -= 0x03;
    { pc = 0x1b861; continue dispatch; }
case 0x1b85f:
    r.al += 0x03;
case 0x1b861:
    memoryASet(r.ds, 0x057b, r.al);
    r.al += 0x32;
    memoryASet(r.ds, 0x057c, r.al);
case 0x1b869:
    push(r.cx);
    frame.pc=2097161;
case 2097161:
yield* sub_1b96e();
frame.pc=2097162;
case 2097162:;
    r.cx = pop();
    if (!flags.carry)
        { pc = 0x1b872; continue dispatch; }
    if (--r.cx)
        { pc = 0x1b832; continue dispatch; }
case 0x1b872:
    frame.pc=2097163;
case 2097163:
yield* sub_18413();
frame.pc=2097164;
case 2097164:;
    frame.pc=2097165;
case 2097165:
yield* sub_18342();
frame.pc=2097166;
case 2097166:;
case 0x1b878:
    return;
case 0x1b879:
    if (memoryAGet(r.ds, 0x40b1) != 0x00)
        { pc = 0x1b8d2; continue dispatch; }
    if (memoryAGet(r.ds, 0x40af) == 0x00)
        { pc = 0x1b878; continue dispatch; }
    r.ax = memoryAGet16(r.ds, 0x40a8);
    if (memoryAGet(r.ds, 0x40b0) != 0x01)
        { pc = 0x1b896; continue dispatch; }
    r.ax += 0x0008;
    { pc = 0x1b899; continue dispatch; }
case 0x1b896:
    r.ax -= 0x0008;
case 0x1b899:
    memoryASet16(r.ds, 0x40a8, r.ax);
    frame.pc=2097167;
case 2097167:
yield* sub_1b96e();
frame.pc=2097168;
case 2097168:;
    if (!flags.carry)
        { pc = 0x1b8a2; continue dispatch; }
    return;
case 0x1b8a2:
    r.ax = 0x0c00;
    r.bx = 0x0b54;
    frame.pc=2097169;
case 2097169:
yield* sub_1cb6b();
frame.pc=2097170;
case 2097170:;
    memoryASet(r.ds, 0x40af, 0x00);
    r.cx = memoryAGet16(r.ds, 0x40a8);
    r.dl = memoryAGet(r.ds, 0x40aa);
    frame.pc=2097171;
case 2097171:
yield* sub_19ee0();
frame.pc=2097172;
case 2097172:;
    memoryASet16(r.ds, 0x40ab, r.ax);
    frame.pc=2097173;
case 2097173:
yield* sub_1b9a3();
frame.pc=2097174;
case 2097174:;
    frame.pc=2097175;
case 2097175:
yield* sub_1b989();
frame.pc=2097176;
case 2097176:;
    r.ax = memoryAGet16(r.ds, 0x40a8);
    if (r.ax < 0x0078)
        { pc = 0x1b8d2; continue dispatch; }
    if (r.ax > 0x00a8)
        { pc = 0x1b8d2; continue dispatch; }
    return;
case 0x1b8d2:
    memoryASet(r.ds, 0x40b1, 0x01);
    if (memoryAGet(r.ds, 0x1cbf) == 0x00)
        { pc = 0x1b8ee; continue dispatch; }
    frame.pc=2097177;
case 2097177:
yield* sub_1b717();
frame.pc=2097178;
case 2097178:;
    if (!flags.carry)
        { pc = 0x1b8ed; continue dispatch; }
    memoryASet(r.ds, 0x0571, 0x01);
    memoryASet(r.ds, 0x055b, 0x10);
case 0x1b8ed:
    return;
case 0x1b8ee:
    r.ah = 0;
    frame.pc=2097179;
case 2097179:
yield* interrupt(0x1a);
frame.pc=2097180;
case 2097180:;
    if (r.dx == memoryAGet16(r.ds, 0x40ad))
        { pc = 0x1b8d2; continue dispatch; }
    memoryASet16(r.ds, 0x40ad, r.dx);
    if (memoryAGet(r.ds, 0x0000) == 0x00)
        { pc = 0x1b91c; continue dispatch; }
    r.al = 0xb6;
    out(0x43, r.al);
    r.al = memoryAGet(r.ds, 0x40aa);
    r.ah = 0;
    r.ax <<= 1;
    r.ax <<= 1;
    out(0x42, r.al);
    r.al = r.ah;
    out(0x42, r.al);
    r.al = portRead(0x61);
    r.al |= 0x03;
    out(0x61, r.al);
case 0x1b91c:
    r.dl = memoryAGet(r.ds, 0x40aa);
    if (r.dl >= 0xa4)
        { pc = 0x1b93e; continue dispatch; }
    r.dl += 0x05;
    memoryASet(r.ds, 0x40aa, r.dl);
    r.cx = memoryAGet16(r.ds, 0x40a8);
    frame.pc=2097181;
case 2097181:
yield* sub_19ee0();
frame.pc=2097182;
case 2097182:;
    memoryASet16(r.ds, 0x40ab, r.ax);
    frame.pc=2097183;
case 2097183:
yield* sub_1b9a3();
frame.pc=2097184;
case 2097184:;
    frame.pc=2097185;
case 2097185:
yield* sub_1b989();
frame.pc=2097186;
case 2097186:;
    { pc = 0x1b8ee; continue dispatch; }
case 0x1b93e:
    frame.pc=2097187;
case 2097187:
yield* sub_1cd51();
frame.pc=2097188;
case 2097188:;
    frame.pc=2097189;
case 2097189:
yield* sub_1b9a3();
frame.pc=2097190;
case 2097190:;
    r.bp = 0x401e;
    memoryASet16(r.ds, 0x40a6, memoryAGet16(r.ds, 0x40a6) - 1);
    r.di = memoryAGet16(r.ds, 0x40a6);
    r.si = 0x3f36;
    r.cx = 0x1104;
    frame.pc=2097191;
case 2097191:
yield* sub_19f65();
frame.pc=2097192;
case 2097192:;
    r.ax = memoryAGet16(r.ds, 0x40a8);
    memoryASet16(r.ds, 0x40b2, r.ax);
    r.al = memoryAGet(r.ds, 0x40aa);
    memoryASet(r.ds, 0x40b4, r.al);
    frame.pc=2097193;
case 2097193:
yield* sub_1b72b();
frame.pc=2097194;
case 2097194:;
    r.al = memoryAGet(r.ds, 0x40ca);
    memoryASet(r.ds, 0x40b7, r.al);

      return;
    default: throw new Error("Invalid control flow in sub_1b7db");
    }
  }
  } finally {execution.leave(frame);}
}

function* sub_1b96e() {
  let pc=0;
  const frame=execution.enter('sub_1b96e',pc);pc=frame.pc;
  let skipBudget=frame.budget || execution.restoring;
  try {
  if(execution.restoring && execution.pending.length===0) {
    execution.restoring=false;
    if(frame.parked!==null) {yield frame.parked;frame.parked=null;frame.budget=false;}
  }
  dispatch: while (true) {
    if (!skipBudget && (++game.steps & 1023) === 0) {
      frame.pc=pc;frame.budget=true;frame.parked=0;yield 0;
      frame.parked=null;frame.budget=false;
    }
    skipBudget=false;
    switch(pc) {
    case 0:

    r.ax = memoryAGet16(r.ds, 0x40a8);
    r.dl = memoryAGet(r.ds, 0x40aa);
    r.si = 0x0018;
    r.bx = memoryAGet16(r.ds, 0x0579);
    r.dh = memoryAGet(r.ds, 0x057b);
    r.di = r.si;
    r.cx = 0x0e10;
    frame.pc=2097153;
case 2097153:
yield* sub_1a059();
frame.pc=2097154;
case 2097154:;

      return;
    default: throw new Error("Invalid control flow in sub_1b96e");
    }
  }
  } finally {execution.leave(frame);}
}

function* sub_1b989() {
  let pc=0;
  const frame=execution.enter('sub_1b989',pc);pc=frame.pc;
  let skipBudget=frame.budget || execution.restoring;
  try {
  if(execution.restoring && execution.pending.length===0) {
    execution.restoring=false;
    if(frame.parked!==null) {yield frame.parked;frame.parked=null;frame.budget=false;}
  }
  dispatch: while (true) {
    if (!skipBudget && (++game.steps & 1023) === 0) {
      frame.pc=pc;frame.budget=true;frame.parked=0;yield 0;
      frame.parked=null;frame.budget=false;
    }
    skipBudget=false;
    switch(pc) {
    case 0:

    r.ax = 0xb800;
    r.es = r.ax;
    r.bp = 0x401e;
    r.si = 0x3fbe;
    r.di = memoryAGet16(r.ds, 0x40ab);
    memoryASet16(r.ds, 0x40a6, r.di);
    r.cx = 0x1003;
    frame.pc=2097153;
case 2097153:
yield* sub_19f65();
frame.pc=2097154;
case 2097154:;

      return;
    default: throw new Error("Invalid control flow in sub_1b989");
    }
  }
  } finally {execution.leave(frame);}
}

function* sub_1b9a3() {
  let pc=0;
  const frame=execution.enter('sub_1b9a3',pc);pc=frame.pc;
  let skipBudget=frame.budget || execution.restoring;
  try {
  if(execution.restoring && execution.pending.length===0) {
    execution.restoring=false;
    if(frame.parked!==null) {yield frame.parked;frame.parked=null;frame.budget=false;}
  }
  dispatch: while (true) {
    if (!skipBudget && (++game.steps & 1023) === 0) {
      frame.pc=pc;frame.budget=true;frame.parked=0;yield 0;
      frame.parked=null;frame.budget=false;
    }
    skipBudget=false;
    switch(pc) {
    case 0:

    r.ax = 0xb800;
    r.es = r.ax;
    r.si = 0x401e;
    r.di = memoryAGet16(r.ds, 0x40a6);
    r.cx = 0x1003;
    frame.pc=2097153;
case 2097153:
yield* sub_19fcd();
frame.pc=2097154;
case 2097154:;

      return;
    default: throw new Error("Invalid control flow in sub_1b9a3");
    }
  }
  } finally {execution.leave(frame);}
}

function* sub_1b9b6() {
  let pc=0;
  const frame=execution.enter('sub_1b9b6',pc);pc=frame.pc;
  let skipBudget=frame.budget || execution.restoring;
  try {
  if(execution.restoring && execution.pending.length===0) {
    execution.restoring=false;
    if(frame.parked!==null) {yield frame.parked;frame.parked=null;frame.budget=false;}
  }
  dispatch: while (true) {
    if (!skipBudget && (++game.steps & 1023) === 0) {
      frame.pc=pc;frame.budget=true;frame.parked=0;yield 0;
      frame.parked=null;frame.budget=false;
    }
    skipBudget=false;
    switch(pc) {
    case 0:

    if (memoryAGet(r.ds, 0x327f) < 0x66)
        { pc = 0x1b9d4; continue dispatch; }
    r.ax = memoryAGet16(r.ds, 0x40a8);
    r.ax -= 0x0014;
    if (r.ax > memoryAGet16(r.ds, 0x327d))
        { pc = 0x1b9d4; continue dispatch; }
    r.ax += 0x0030;
    if (r.ax < memoryAGet16(r.ds, 0x327d))
        { pc = 0x1b9d4; continue dispatch; }
    flags.carry = true;
    return;
case 0x1b9d4:
    flags.carry = false;

      return;
    default: throw new Error("Invalid control flow in sub_1b9b6");
    }
  }
  } finally {execution.leave(frame);}
}

function* sub_1b9e0() {
  let pc=0;
  const frame=execution.enter('sub_1b9e0',pc);pc=frame.pc;
  let skipBudget=frame.budget || execution.restoring;
  try {
  if(execution.restoring && execution.pending.length===0) {
    execution.restoring=false;
    if(frame.parked!==null) {yield frame.parked;frame.parked=null;frame.budget=false;}
  }
  dispatch: while (true) {
    if (!skipBudget && (++game.steps & 1023) === 0) {
      frame.pc=pc;frame.budget=true;frame.parked=0;yield 0;
      frame.parked=null;frame.budget=false;
    }
    skipBudget=false;
    switch(pc) {
    case 0:

    r.ax = memoryAGet16(r.ds, 0x327d);
    r.dl = memoryAGet(r.ds, 0x327f);
    r.si = 0x0010;
    r.bx = memoryAGet16(r.ds, 0x0579);
    flags.carry = r.bx < 0x0008;
    r.bx -= 0x0008;
    if (!flags.carry)
        { pc = 0x1b9f5; continue dispatch; }
    r.bx = 0;
case 0x1b9f5:
    r.dh = memoryAGet(r.ds, 0x057b);
    r.dh += 0x03;
    r.di = 0x0028;
    r.cx = 0x0e1e;
    frame.pc=2097153;
case 2097153:
yield* sub_1a059();
frame.pc=2097154;
case 2097154:;

      return;
    default: throw new Error("Invalid control flow in sub_1b9e0");
    }
  }
  } finally {execution.leave(frame);}
}

function* sub_1ba06() {
  let pc=0;
  const frame=execution.enter('sub_1ba06',pc);pc=frame.pc;
  let skipBudget=frame.budget || execution.restoring;
  try {
  if(execution.restoring && execution.pending.length===0) {
    execution.restoring=false;
    if(frame.parked!==null) {yield frame.parked;frame.parked=null;frame.budget=false;}
  }
  dispatch: while (true) {
    if (!skipBudget && (++game.steps & 1023) === 0) {
      frame.pc=pc;frame.budget=true;frame.parked=0;yield 0;
      frame.parked=null;frame.budget=false;
    }
    skipBudget=false;
    switch(pc) {
    case 0:

    r.ah = 0;
    frame.pc=2097153;
case 2097153:
yield* interrupt(0x1a);
frame.pc=2097154;
case 2097154:;
    r.ax = r.dx;
    r.ax -= memoryAGet16(r.ds, 0x44d7);
    r.si = memoryAGet16(r.ds, 0x0008);
    r.si <<= 1;
    if (r.ax > memoryAGet16(r.ds, r.si + 17628))
        { pc = 0x1ba1d; continue dispatch; }
case 0x1ba1c:
    return;
case 0x1ba1d:
    memoryASet16(r.ds, 0x44d7, r.dx);
    if (memoryAGet(r.ds, 0x1cb8) != 0x00)
        { pc = 0x1ba1c; continue dispatch; }
    memoryASet(r.ds, 0x44fc, 0x00);
    r.cx = 0x000c;
case 0x1ba30:
    r.bx = r.cx;
    r.bx--;
    r.bl <<= 1;
    if (memoryAGet16(r.ds, r.bx + 17473) == 0x0000)
        { pc = 0x1baad; continue dispatch; }
    r.ax = memoryAGet16(r.ds, r.bx + 17401);
    if (r.al != memoryAGet(r.ds, 0x057b))
        { pc = 0x1ba8d; continue dispatch; }
    r.ax = memoryAGet16(r.ds, r.bx + 17377);
    flags.carry = r.ax < memoryAGet16(r.ds, 0x0579);
    r.ax -= memoryAGet16(r.ds, 0x0579);
    if (!flags.carry)
        { pc = 0x1ba52; continue dispatch; }
    r.ax = ~r.ax;
case 0x1ba52:
    r.si = memoryAGet16(r.ds, 0x0008);
    r.si <<= 1;
    if (r.ax > memoryAGet16(r.ds, r.si + 17644))
        { pc = 0x1ba8d; continue dispatch; }
    if (memoryAGet16(r.ds, r.bx + 17497) < 0x0002)
        { pc = 0x1ba7c; continue dispatch; }
    r.ax = memoryAGet16(r.ds, r.bx + 17425);
    memoryASet16(r.ds, 0x44da, r.ax);
    frame.pc=2097155;
case 2097155:
yield* sub_1babd();
frame.pc=2097156;
case 2097156:;
    frame.pc=2097157;
case 2097157:
yield* sub_1bad1();
frame.pc=2097158;
case 2097158:;
    frame.pc=2097159;
case 2097159:
yield* sub_1a569();
frame.pc=2097160;
case 2097160:;
    frame.pc=2097161;
case 2097161:
yield* sub_18375();
frame.pc=2097162;
case 2097162:;
    frame.pc=2097163;
case 2097163:
yield* sub_19366();
frame.pc=2097164;
case 2097164:;
    return;
case 0x1ba7c:
    memoryASet16(r.ds, r.bx + 17497, memoryAGet16(r.ds, r.bx + 17497) + 1);
    if (memoryAGet16(r.ds, r.bx + 17497) < 0x0002)
        { pc = 0x1baa0; continue dispatch; }
    memoryASet(r.ds, 0x44fc, memoryAGet(r.ds, 0x44fc) + 1);
    { pc = 0x1baa0; continue dispatch; }
case 0x1ba8d:
    if (memoryAGet16(r.ds, r.bx + 17497) == 0x0000)
        { pc = 0x1baad; continue dispatch; }
    frame.pc=2097165;
case 2097165:
yield* sub_1a02d();
frame.pc=2097166;
case 2097166:;
    if (r.dl > 0x38)
        { pc = 0x1baa0; continue dispatch; }
    memoryASet16(r.ds, r.bx + 17497, memoryAGet16(r.ds, r.bx + 17497) - 1);
case 0x1baa0:
    push(r.cx);
    push(r.bx);
    frame.pc=2097167;
case 2097167:
yield* sub_1bb07();
frame.pc=2097168;
case 2097168:;
    r.bx = pop();
    frame.pc=2097169;
case 2097169:
yield* sub_1bb46();
frame.pc=2097170;
case 2097170:;
    frame.pc=2097171;
case 2097171:
yield* sub_1baf1();
frame.pc=2097172;
case 2097172:;
    r.cx = pop();
case 0x1baad:
    if (--r.cx)
        { pc = 0x1baba; continue dispatch; }
    if (memoryAGet(r.ds, 0x44fc) == 0x00)
        { pc = 0x1bab9; continue dispatch; }
    frame.pc=2097173;
case 2097173:
yield* sub_1c8c1();
frame.pc=2097174;
case 2097174:;
case 0x1bab9:
    return;
case 0x1baba:
    { pc = 0x1ba30; continue dispatch; }

      return;
    default: throw new Error("Invalid control flow in sub_1ba06");
    }
  }
  } finally {execution.leave(frame);}
}

function* sub_1babd() {
  let pc=0;
  const frame=execution.enter('sub_1babd',pc);pc=frame.pc;
  let skipBudget=frame.budget || execution.restoring;
  try {
  if(execution.restoring && execution.pending.length===0) {
    execution.restoring=false;
    if(frame.parked!==null) {yield frame.parked;frame.parked=null;frame.budget=false;}
  }
  dispatch: while (true) {
    if (!skipBudget && (++game.steps & 1023) === 0) {
      frame.pc=pc;frame.budget=true;frame.parked=0;yield 0;
      frame.parked=null;frame.budget=false;
    }
    skipBudget=false;
    switch(pc) {
    case 0:

    if (memoryAGet(r.ds, 0x44bd) == 0x00)
        { pc = 0x1bacd; continue dispatch; }
    frame.pc=2097153;
case 2097153:
yield* sub_1bd33();
frame.pc=2097154;
case 2097154:;
    memoryASet(r.ds, 0x44bd, 0x00);
    return;
case 0x1bacd:
    frame.pc=2097155;
case 2097155:
yield* sub_18413();
frame.pc=2097156;
case 2097156:;

      return;
    default: throw new Error("Invalid control flow in sub_1babd");
    }
  }
  } finally {execution.leave(frame);}
}

function* sub_1bad1() {
  let pc=0;
  const frame=execution.enter('sub_1bad1',pc);pc=frame.pc;
  let skipBudget=frame.budget || execution.restoring;
  try {
  if(execution.restoring && execution.pending.length===0) {
    execution.restoring=false;
    if(frame.parked!==null) {yield frame.parked;frame.parked=null;frame.budget=false;}
  }
  dispatch: while (true) {
    if (!skipBudget && (++game.steps & 1023) === 0) {
      frame.pc=pc;frame.budget=true;frame.parked=0;yield 0;
      frame.parked=null;frame.budget=false;
    }
    skipBudget=false;
    switch(pc) {
    case 0:

    push(r.ds);
    r.es = pop();
    flags.direction = false;
    r.di = 0x000e;
    r.si = r.di;
    r.ax = 0xaaaa;
    r.cx = 0x0041;
    rep_stosw();
    r.ax = 0xb800;
    r.es = r.ax;
    r.di = memoryAGet16(r.ds, 0x44da);
    r.cx = 0x0d05;
    frame.pc=2097153;
case 2097153:
yield* sub_19fcd();
frame.pc=2097154;
case 2097154:;

      return;
    default: throw new Error("Invalid control flow in sub_1bad1");
    }
  }
  } finally {execution.leave(frame);}
}

function* sub_1baf1() {
  let pc=0;
  const frame=execution.enter('sub_1baf1',pc);pc=frame.pc;
  let skipBudget=frame.budget || execution.restoring;
  try {
  if(execution.restoring && execution.pending.length===0) {
    execution.restoring=false;
    if(frame.parked!==null) {yield frame.parked;frame.parked=null;frame.budget=false;}
  }
  dispatch: while (true) {
    if (!skipBudget && (++game.steps & 1023) === 0) {
      frame.pc=pc;frame.budget=true;frame.parked=0;yield 0;
      frame.parked=null;frame.budget=false;
    }
    skipBudget=false;
    switch(pc) {
    case 0:

    if (memoryAGet(r.ds, 0x44d9) == 0x00)
        { pc = 0x1bb02; continue dispatch; }
    if (memoryAGet(r.ds, 0x44bd) == 0x00)
        { pc = 0x1bb03; continue dispatch; }
    frame.pc=2097153;
case 2097153:
yield* sub_1bd4d();
frame.pc=2097154;
case 2097154:;
case 0x1bb02:
    return;
case 0x1bb03:
    frame.pc=2097155;
case 2097155:
yield* sub_18375();
frame.pc=2097156;
case 2097156:;

      return;
    default: throw new Error("Invalid control flow in sub_1baf1");
    }
  }
  } finally {execution.leave(frame);}
}

function* sub_1bb07() {
  let pc=0;
  const frame=execution.enter('sub_1bb07',pc);pc=frame.pc;
  let skipBudget=frame.budget || execution.restoring;
  try {
  if(execution.restoring && execution.pending.length===0) {
    execution.restoring=false;
    if(frame.parked!==null) {yield frame.parked;frame.parked=null;frame.budget=false;}
  }
  dispatch: while (true) {
    if (!skipBudget && (++game.steps & 1023) === 0) {
      frame.pc=pc;frame.budget=true;frame.parked=0;yield 0;
      frame.parked=null;frame.budget=false;
    }
    skipBudget=false;
    switch(pc) {
    case 0:

    memoryASet(r.ds, 0x44d9, 0x00);
    r.ax = memoryAGet16(r.ds, r.bx + 17377);
    r.dx = memoryAGet16(r.ds, r.bx + 17401);
    r.ax -= 0x0014;
    r.si = 0x0028;
    r.bx = memoryAGet16(r.ds, 0x0579);
    r.dh = memoryAGet(r.ds, 0x057b);
    r.cx = 0x0e06;
    r.di = 0x0018;
    frame.pc=2097153;
case 2097153:
yield* sub_1a059();
frame.pc=2097154;
case 2097154:;
    if (!flags.carry)
        return;
    memoryASet(r.ds, 0x44d9, 0x01);
case 0x1bb32:
    frame.pc=2097155;
case 2097155:
yield* sub_18608();
frame.pc=2097156;
case 2097156:;
    if (flags.zero)
        { pc = 0x1bb32; continue dispatch; }
    if (memoryAGet(r.ds, 0x44bd) == 0x00)
        { pc = 0x1bb42; continue dispatch; }
    frame.pc=2097157;
case 2097157:
yield* sub_1bd33();
frame.pc=2097158;
case 2097158:;
    return;
case 0x1bb42:
    frame.pc=2097159;
case 2097159:
yield* sub_18413();
frame.pc=2097160;
case 2097160:;

      return;
    default: throw new Error("Invalid control flow in sub_1bb07");
    }
  }
  } finally {execution.leave(frame);}
}

function* sub_1bb46() {
  let pc=0;
  const frame=execution.enter('sub_1bb46',pc);pc=frame.pc;
  let skipBudget=frame.budget || execution.restoring;
  try {
  if(execution.restoring && execution.pending.length===0) {
    execution.restoring=false;
    if(frame.parked!==null) {yield frame.parked;frame.parked=null;frame.budget=false;}
  }
  dispatch: while (true) {
    if (!skipBudget && (++game.steps & 1023) === 0) {
      frame.pc=pc;frame.budget=true;frame.parked=0;yield 0;
      frame.parked=null;frame.budget=false;
    }
    skipBudget=false;
    switch(pc) {
    case 0:

    r.ax = memoryAGet16(r.ds, r.bx + 17425);
    r.si = memoryAGet16(r.ds, r.bx + 17497);
    r.si <<= 1;
    r.si += 0x4100;
    r.ax += 0x00a7;
    if (memoryAGet16(r.ds, r.bx + 17449) == 0x429c)
        { pc = 0x1bb65; continue dispatch; }
    r.ax -= 0x0006;
    r.si += 0x0006;
case 0x1bb65:
    r.di = r.ax;
    r.ax = 0xb800;
    r.es = r.ax;
    r.cx = 0x0101;
    frame.pc=2097153;
case 2097153:
yield* sub_19fcd();
frame.pc=2097154;
case 2097154:;

      return;
    default: throw new Error("Invalid control flow in sub_1bb46");
    }
  }
  } finally {execution.leave(frame);}
}

function* sub_1bb73() {
  let pc=0;
  const frame=execution.enter('sub_1bb73',pc);pc=frame.pc;
  let skipBudget=frame.budget || execution.restoring;
  try {
  if(execution.restoring && execution.pending.length===0) {
    execution.restoring=false;
    if(frame.parked!==null) {yield frame.parked;frame.parked=null;frame.budget=false;}
  }
  dispatch: while (true) {
    if (!skipBudget && (++game.steps & 1023) === 0) {
      frame.pc=pc;frame.budget=true;frame.parked=0;yield 0;
      frame.parked=null;frame.budget=false;
    }
    skipBudget=false;
    switch(pc) {
    case 0:

    if (memoryAGet(r.ds, 0x1cb8) != 0x00)
        { pc = 0x1bb96; continue dispatch; }
    if (memoryAGet(r.ds, 0x44be) == 0x00)
        { pc = 0x1bb8c; continue dispatch; }
    r.al = memoryAGet(r.ds, 0x44be);
    memoryASet(r.ds, 0x0698, r.al);
    memoryASet(r.ds, 0x0699, 0x00);
case 0x1bb8c:
    r.ah = 0;
    frame.pc=2097153;
case 2097153:
yield* interrupt(0x1a);
frame.pc=2097154;
case 2097154:;
    if (r.dx != memoryAGet16(r.ds, 0x44d3))
        { pc = 0x1bb97; continue dispatch; }
case 0x1bb96:
    return;
case 0x1bb97:
    memoryASet16(r.ds, 0x44d3, r.dx);
    if (memoryAGet(r.ds, 0x0584) == 0x00)
        { pc = 0x1bbc5; continue dispatch; }
    if (memoryAGet(r.ds, 0x44bd) == 0x00)
        { pc = 0x1bbc4; continue dispatch; }
    frame.pc=2097155;
case 2097155:
yield* sub_1bd33();
frame.pc=2097156;
case 2097156:;
    frame.pc=2097157;
case 2097157:
yield* sub_1a5d0();
frame.pc=2097158;
case 2097158:;
    frame.pc=2097159;
case 2097159:
yield* sub_18354();
frame.pc=2097160;
case 2097160:;
    frame.pc=2097161;
case 2097161:
yield* sub_1a569();
frame.pc=2097162;
case 2097162:;
    memoryASet(r.ds, 0x44bd, 0x00);
    memoryASet(r.ds, 0x43e0, 0x01);
    memoryASet(r.ds, 0x44be, 0x00);
case 0x1bbc4:
    return;
case 0x1bbc5:
    if (memoryAGet(r.ds, 0x069a) == 0x00)
        { pc = 0x1bbcf; continue dispatch; }
    { pc = 0x1bc29; continue dispatch; }
case 0x1bbcf:
    r.ax = 0xffff;
    memoryASet16(r.ds, 0x44c1, r.ax);
    memoryASet16(r.ds, 0x44bf, r.ax);
    r.cx = 0x000c;
    r.si = memoryAGet16(r.ds, 0x0579);
    r.dl = memoryAGet(r.ds, 0x057b);
    r.dl += 0x08;
case 0x1bbe6:
    r.bx = r.cx;
    r.bx--;
    if (memoryAGet(r.ds, r.bx + 17604) < 0x01)
        { pc = 0x1bc20; continue dispatch; }
    if (r.dl != memoryAGet(r.ds, r.bx + 17561))
        { pc = 0x1bc20; continue dispatch; }
    r.ax = r.si;
    r.bl <<= 1;
    r.dh = 0xff;
    flags.carry = r.ax < memoryAGet16(r.ds, r.bx + 17537);
    r.ax -= memoryAGet16(r.ds, r.bx + 17537);
    if (!flags.carry)
        { pc = 0x1bc06; continue dispatch; }
    r.ax = ~r.ax;
    r.dh = 0x01;
case 0x1bc06:
    if (r.ax > memoryAGet16(r.ds, 0x44bf))
        { pc = 0x1bc20; continue dispatch; }
    memoryASet16(r.ds, 0x44bf, r.ax);
    r.ax = memoryAGet16(r.ds, r.bx + 17573);
    memoryASet16(r.ds, 0x44d1, r.ax);
    r.bl >>= 1;
    memoryASet16(r.ds, 0x44c1, r.bx);
    memoryASet(r.ds, 0x44c3, r.dh);
case 0x1bc20:
    if (--r.cx)
        { pc = 0x1bbe6; continue dispatch; }
    if (memoryAGet16(r.ds, 0x44c1) < 0x000c)
        { pc = 0x1bc50; continue dispatch; }
case 0x1bc29:
    if (memoryAGet(r.ds, 0x44bd) == 0x00)
        { pc = 0x1bc3b; continue dispatch; }
    frame.pc=2097163;
case 2097163:
yield* sub_1bd33();
frame.pc=2097164;
case 2097164:;
    frame.pc=2097165;
case 2097165:
yield* sub_18375();
frame.pc=2097166;
case 2097166:;
    memoryASet(r.ds, 0x069a, 0x10);
case 0x1bc3b:
    memoryASet(r.ds, 0x44bd, 0x00);
    memoryASet(r.ds, 0x43e0, 0x01);
    memoryASet(r.ds, 0x44d0, 0x00);
    memoryASet(r.ds, 0x44be, 0x00);
    return;
case 0x1bc50:
    if (memoryAGet16(r.ds, 0x44bf) < 0x0004)
        { pc = 0x1bc7b; continue dispatch; }
    if (memoryAGet16(r.ds, 0x44bf) > 0x0008)
        { pc = 0x1bc63; continue dispatch; }
    memoryASet(r.ds, 0x0572, 0x04);
case 0x1bc63:
    r.al = memoryAGet(r.ds, 0x44c3);
    memoryASet(r.ds, 0x0698, r.al);
    memoryASet(r.ds, 0x056e, r.al);
    memoryASet(r.ds, 0x44be, r.al);
    memoryASet(r.ds, 0x0699, 0x00);
    memoryASet(r.ds, 0x0571, 0x00);
    { pc = 0x1bc29; continue dispatch; }
case 0x1bc7b:
    memoryASet(r.ds, 0x44be, 0x00);
    if (memoryAGet(r.ds, 0x44bd) != 0x00)
        { pc = 0x1bc8d; continue dispatch; }
    frame.pc=2097167;
case 2097167:
yield* sub_18413();
frame.pc=2097168;
case 2097168:;
    frame.pc=2097169;
case 2097169:
yield* sub_18354();
frame.pc=2097170;
case 2097170:;
case 0x1bc8d:
    memoryASet(r.ds, 0x44bd, 0x01);
    r.al = 0;
    flags.carry = (memoryAGet(r.ds, 0x44d0) + 0x30) >= 0x100;
    memoryASet(r.ds, 0x44d0, memoryAGet(r.ds, 0x44d0) + 0x30);
    if (!flags.carry)
        { pc = 0x1bc9d; continue dispatch; }
    r.al++;
case 0x1bc9d:
    memoryASet(r.ds, 0x44d5, r.al);
    r.cx = memoryAGet16(r.ds, 0x0579);
    r.cx &= 0x0ffc;
    r.dl = memoryAGet(r.ds, 0x057b);
    r.dl += 0x03;
    if (memoryAGet16(r.ds, 0x44d1) == 0x410c)
        { pc = 0x1bcc5; continue dispatch; }
    r.cx += 0x0008;
    if (r.cx < 0x0127)
        { pc = 0x1bccc; continue dispatch; }
    r.cx = 0x0126;
    { pc = 0x1bccc; continue dispatch; }
case 0x1bcc5:
    flags.carry = r.cx < 0x0008;
    r.cx -= 0x0008;
    if (!flags.carry)
        { pc = 0x1bccc; continue dispatch; }
    r.cx = 0;
case 0x1bccc:
    frame.pc=2097171;
case 2097171:
yield* sub_19ee0();
frame.pc=2097172;
case 2097172:;
    memoryASet16(r.ds, 0x43dc, r.ax);
case 0x1bcd2:
    frame.pc=2097173;
case 2097173:
yield* sub_18608();
frame.pc=2097174;
case 2097174:;
    if (flags.zero)
        { pc = 0x1bcd2; continue dispatch; }
    frame.pc=2097175;
case 2097175:
yield* sub_1bd33();
frame.pc=2097176;
case 2097176:;
    if (memoryAGet(r.ds, 0x44d5) == 0x00)
        { pc = 0x1bd2f; continue dispatch; }
    r.bx = memoryAGet16(r.ds, 0x44c1);
    if (memoryAGet(r.ds, r.bx + 17604) == 0x00)
        { pc = 0x1bd2f; continue dispatch; }
    r.tl = memoryAGet(r.ds, r.bx + 17604);
    memoryASet(r.ds, r.bx + 17604, memoryAGet(r.ds, r.bx + 17604) - 1);
    if (r.tl != 1)
        { pc = 0x1bd17; continue dispatch; }
    push(r.bx);
    r.ax = 0x08fd;
    r.bx = 0x0723;
    frame.pc=2097177;
case 2097177:
yield* sub_1cb6b();
frame.pc=2097178;
case 2097178:;
    r.bx = pop();
    memoryASet(r.ds, 0x0698, 0x00);
    memoryASet(r.ds, 0x44be, 0x00);
    memoryASet(r.ds, 0x069a, 0x10);
    r.tl = memoryAGet(r.ds, 0x44d6);
    memoryASet(r.ds, 0x44d6, memoryAGet(r.ds, 0x44d6) - 1);
    if (r.tl != 1)
        { pc = 0x1bd17; continue dispatch; }
    memoryASet(r.ds, 0x0553, 0x01);
case 0x1bd17:
    push(r.bx);
    frame.pc=2097179;
case 2097179:
yield* sub_1b9e0();
frame.pc=2097180;
case 2097180:;
    r.bx = pop();
    if (!flags.carry)
        { pc = 0x1bd2c; continue dispatch; }
    push(r.bx);
    frame.pc=2097181;
case 2097181:
yield* sub_1a5d0();
frame.pc=2097182;
case 2097182:;
    r.bx = pop();
    frame.pc=2097183;
case 2097183:
yield* sub_1bdf8();
frame.pc=2097184;
case 2097184:;
    frame.pc=2097185;
case 2097185:
yield* sub_1a569();
frame.pc=2097186;
case 2097186:;
    { pc = 0x1bd2f; continue dispatch; }
case 0x1bd2c:
    frame.pc=2097187;
case 2097187:
yield* sub_1bdf8();
frame.pc=2097188;
case 2097188:;
case 0x1bd2f:
    frame.pc=2097189;
case 2097189:
yield* sub_1bd4d();
frame.pc=2097190;
case 2097190:;

      return;
    default: throw new Error("Invalid control flow in sub_1bb73");
    }
  }
  } finally {execution.leave(frame);}
}

function* sub_1bd33() {
  let pc=0;
  const frame=execution.enter('sub_1bd33',pc);pc=frame.pc;
  let skipBudget=frame.budget || execution.restoring;
  try {
  if(execution.restoring && execution.pending.length===0) {
    execution.restoring=false;
    if(frame.parked!==null) {yield frame.parked;frame.parked=null;frame.budget=false;}
  }
  dispatch: while (true) {
    if (!skipBudget && (++game.steps & 1023) === 0) {
      frame.pc=pc;frame.budget=true;frame.parked=0;yield 0;
      frame.parked=null;frame.budget=false;
    }
    skipBudget=false;
    switch(pc) {
    case 0:

    if (memoryAGet(r.ds, 0x43e0) != 0x00)
        return;
    r.di = memoryAGet16(r.ds, 0x43de);
    r.si = 0x43a0;
    r.ax = 0xb800;
    r.es = r.ax;
    r.cx = 0x0a03;
    frame.pc=2097153;
case 2097153:
yield* sub_19fcd();
frame.pc=2097154;
case 2097154:;

      return;
    default: throw new Error("Invalid control flow in sub_1bd33");
    }
  }
  } finally {execution.leave(frame);}
}

function* sub_1bd4d() {
  let pc=0;
  const frame=execution.enter('sub_1bd4d',pc);pc=frame.pc;
  let skipBudget=frame.budget || execution.restoring;
  try {
  if(execution.restoring && execution.pending.length===0) {
    execution.restoring=false;
    if(frame.parked!==null) {yield frame.parked;frame.parked=null;frame.budget=false;}
  }
  dispatch: while (true) {
    if (!skipBudget && (++game.steps & 1023) === 0) {
      frame.pc=pc;frame.budget=true;frame.parked=0;yield 0;
      frame.parked=null;frame.budget=false;
    }
    skipBudget=false;
    switch(pc) {
    case 0:

    memoryASet(r.ds, 0x43e0, 0x00);
    r.ax = 0xb800;
    r.es = r.ax;
    r.di = memoryAGet16(r.ds, 0x43dc);
    memoryASet16(r.ds, 0x43de, r.di);
    r.bp = 0x43a0;
    r.si = memoryAGet16(r.ds, 0x44d1);
    if (memoryAGet(r.ds, 0x44d0) < 0x80)
        { pc = 0x1bd70; continue dispatch; }
    r.si += 0x003c;
case 0x1bd70:
    r.cx = 0x0a03;
    frame.pc=2097153;
case 2097153:
yield* sub_19f65();
frame.pc=2097154;
case 2097154:;

      return;
    default: throw new Error("Invalid control flow in sub_1bd4d");
    }
  }
  } finally {execution.leave(frame);}
}

function* sub_1bd77() {
  let pc=0;
  const frame=execution.enter('sub_1bd77',pc);pc=frame.pc;
  let skipBudget=frame.budget || execution.restoring;
  try {
  if(execution.restoring && execution.pending.length===0) {
    execution.restoring=false;
    if(frame.parked!==null) {yield frame.parked;frame.parked=null;frame.budget=false;}
  }
  dispatch: while (true) {
    if (!skipBudget && (++game.steps & 1023) === 0) {
      frame.pc=pc;frame.budget=true;frame.parked=0;yield 0;
      frame.parked=null;frame.budget=false;
    }
    skipBudget=false;
    switch(pc) {
    case 0:

    push(r.ds);
    r.es = pop();
    r.ax = 0;
    r.di = 0x4441;
    r.cx = 0x000c;
    rep_stosw();
    r.ax = 0xb800;
    r.es = r.ax;
    r.bx = memoryAGet16(r.ds, 0x0008);
    r.cl = memoryAGet(r.ds, r.bx + 17521);
    r.ch = 0;
case 0x1bd92:
    frame.pc=2097153;
case 2097153:
yield* sub_1a02d();
frame.pc=2097154;
case 2097154:;
    r.bl = r.dl;
    r.bx &= 0x001e;
    if (r.bl >= 0x18)
        { pc = 0x1bd92; continue dispatch; }
    if (memoryAGet16(r.ds, r.bx + 17473) != 0x0000)
        { pc = 0x1bd92; continue dispatch; }
    memoryASet16(r.ds, r.bx + 17497, 0x0000);
    memoryASet16(r.ds, r.bx + 17473, 0x0001);
    push(r.cx);
    r.si = memoryAGet16(r.ds, r.bx + 17449);
    r.di = memoryAGet16(r.ds, r.bx + 17425);
    r.cx = 0x0d05;
    frame.pc=2097155;
case 2097155:
yield* sub_19fcd();
frame.pc=2097156;
case 2097156:;
    r.cx = pop();
    if (--r.cx)
        { pc = 0x1bd92; continue dispatch; }
    r.cx = 0x000c;
case 0x1bdc8:
    r.bx = r.cx;
    r.bx--;
    r.si = memoryAGet16(r.ds, 0x0008);
    r.dl = memoryAGet(r.ds, r.si + 17529);
    memoryASet(r.ds, r.bx + 17604, r.dl);
    push(r.cx);
    frame.pc=2097157;
case 2097157:
yield* sub_1bdf8();
frame.pc=2097158;
case 2097158:;
    r.cx = pop();
    if (--r.cx)
        { pc = 0x1bdc8; continue dispatch; }
    memoryASet(r.ds, 0x44d0, 0x00);
    memoryASet(r.ds, 0x44bd, 0x00);
    memoryASet(r.ds, 0x43e0, 0x01);
    memoryASet(r.ds, 0x44d6, 0x0c);
    memoryASet(r.ds, 0x44be, 0x00);

      return;
    default: throw new Error("Invalid control flow in sub_1bd77");
    }
  }
  } finally {execution.leave(frame);}
}

function* sub_1bdf8() {
  let pc=0;
  const frame=execution.enter('sub_1bdf8',pc);pc=frame.pc;
  let skipBudget=frame.budget || execution.restoring;
  try {
  if(execution.restoring && execution.pending.length===0) {
    execution.restoring=false;
    if(frame.parked!==null) {yield frame.parked;frame.parked=null;frame.budget=false;}
  }
  dispatch: while (true) {
    if (!skipBudget && (++game.steps & 1023) === 0) {
      frame.pc=pc;frame.budget=true;frame.parked=0;yield 0;
      frame.parked=null;frame.budget=false;
    }
    skipBudget=false;
    switch(pc) {
    case 0:

    frame.pc=2097153;
case 2097153:
yield* sub_1be18();
frame.pc=2097154;
case 2097154:;
    r.di = r.ax;
    r.al = memoryAGet(r.ds, r.bx + 17604);
    r.ah = 0;
    r.cl = 0x05;
    r.ax <<= r.cl;
    r.ax += 0x41fc;
    r.si = r.ax;
    r.cx = 0x0802;
    r.ax = 0xb800;
    r.es = r.ax;
    frame.pc=2097155;
case 2097155:
yield* sub_19fcd();
frame.pc=2097156;
case 2097156:;

      return;
    default: throw new Error("Invalid control flow in sub_1bdf8");
    }
  }
  } finally {execution.leave(frame);}
}

function* sub_1be18() {
  let pc=0;
  const frame=execution.enter('sub_1be18',pc);pc=frame.pc;
  let skipBudget=frame.budget || execution.restoring;
  try {
  if(execution.restoring && execution.pending.length===0) {
    execution.restoring=false;
    if(frame.parked!==null) {yield frame.parked;frame.parked=null;frame.budget=false;}
  }
  dispatch: while (true) {
    if (!skipBudget && (++game.steps & 1023) === 0) {
      frame.pc=pc;frame.budget=true;frame.parked=0;yield 0;
      frame.parked=null;frame.budget=false;
    }
    skipBudget=false;
    switch(pc) {
    case 0:

    push(r.bx);
    r.dl = memoryAGet(r.ds, r.bx + 17561);
    r.bl <<= 1;
    r.cx = memoryAGet16(r.ds, r.bx + 17537);
    frame.pc=2097153;
case 2097153:
yield* sub_19ee0();
frame.pc=2097154;
case 2097154:;
    r.bx = pop();

      return;
    default: throw new Error("Invalid control flow in sub_1be18");
    }
  }
  } finally {execution.leave(frame);}
}

function* sub_1be30() {
  let pc=0;
  const frame=execution.enter('sub_1be30',pc);pc=frame.pc;
  let skipBudget=frame.budget || execution.restoring;
  try {
  if(execution.restoring && execution.pending.length===0) {
    execution.restoring=false;
    if(frame.parked!==null) {yield frame.parked;frame.parked=null;frame.budget=false;}
  }
  dispatch: while (true) {
    if (!skipBudget && (++game.steps & 1023) === 0) {
      frame.pc=pc;frame.budget=true;frame.parked=0;yield 0;
      frame.parked=null;frame.budget=false;
    }
    skipBudget=false;
    switch(pc) {
    case 0:


      return;
    default: throw new Error("Invalid control flow in sub_1be30");
    }
  }
  } finally {execution.leave(frame);}
}

function* sub_1be40() {
  let pc=0;
  const frame=execution.enter('sub_1be40',pc);pc=frame.pc;
  let skipBudget=frame.budget || execution.restoring;
  try {
  if(execution.restoring && execution.pending.length===0) {
    execution.restoring=false;
    if(frame.parked!==null) {yield frame.parked;frame.parked=null;frame.budget=false;}
  }
  dispatch: while (true) {
    if (!skipBudget && (++game.steps & 1023) === 0) {
      frame.pc=pc;frame.budget=true;frame.parked=0;yield 0;
      frame.parked=null;frame.budget=false;
    }
    skipBudget=false;
    switch(pc) {
    case 0:

    r.ah = 0;
    frame.pc=2097153;
case 2097153:
yield* interrupt(0x1a);
frame.pc=2097154;
case 2097154:;
    if (r.dx != memoryAGet16(r.ds, 0x45b8))
        { pc = 0x1be4b; continue dispatch; }
    return;
case 0x1be4b:
    memoryASet16(r.ds, 0x45b6, memoryAGet16(r.ds, 0x45b6) + 1);
    r.bx = memoryAGet16(r.ds, 0x45b6);
    if (r.bx == 0x0001)
        { pc = 0x1be68; continue dispatch; }
    if (r.bx == 0x0004)
        { pc = 0x1be68; continue dispatch; }
    if (r.bx < 0x0007)
        { pc = 0x1be6c; continue dispatch; }
    r.bx = 0;
    memoryASet16(r.ds, 0x45b6, r.bx);
case 0x1be68:
    memoryASet16(r.ds, 0x45b8, r.dx);
case 0x1be6c:
    frame.pc=2097155;
case 2097155:
yield* sub_1c1fd();
frame.pc=2097156;
case 2097156:;
    frame.pc=2097157;
case 2097157:
yield* sub_1c25d();
frame.pc=2097158;
case 2097158:;
    if (!flags.carry)
        { pc = 0x1be75; continue dispatch; }
case 0x1be74:
    return;
case 0x1be75:
    if (memoryAGet16(r.ds, 0x454f) == 0x0000)
        { pc = 0x1bebc; continue dispatch; }
    r.ah = 0;
    frame.pc=2097159;
case 2097159:
yield* interrupt(0x1a);
frame.pc=2097160;
case 2097160:;
    r.dx -= memoryAGet16(r.ds, 0x454f);
    r.bx = memoryAGet16(r.ds, 0x0008);
    r.bl <<= 1;
    r.ax = memoryAGet16(r.ds, r.bx + 17863);
    if (memoryAGet16(r.ds, 0x45b6) != 0x0000)
        { pc = 0x1be97; continue dispatch; }
    r.ax <<= 1;
case 0x1be97:
    if (r.dx < r.ax)
        { pc = 0x1be74; continue dispatch; }
    memoryASet16(r.ds, 0x454f, 0x0000);
    memoryASet(r.ds, 0x454e, 0x01);
    r.ax = 0x0024;
    if (memoryAGet16(r.ds, 0x0579) > 0x00a0)
        { pc = 0x1beb4; continue dispatch; }
    r.ax = 0x0108;
case 0x1beb4:
    memoryASet16(r.ds, 0x4548, r.ax);
    memoryASet(r.ds, 0x454a, 0x00);
case 0x1bebc:
    frame.pc=2097161;
case 2097161:
yield* sub_1c000();
frame.pc=2097162;
case 2097162:;
    if (!flags.carry)
        { pc = 0x1bec9; continue dispatch; }
    r.bx = memoryAGet16(r.ds, 0x45b6);
    frame.pc=2097163;
case 2097163:
yield* sub_1c1eb();
frame.pc=2097164;
case 2097164:;
    return;
case 0x1bec9:
    if (memoryAGet(r.ds, 0x4553) == 0x00)
        { pc = 0x1bee8; continue dispatch; }
    r.tl = memoryAGet(r.ds, 0x4553);
    memoryASet(r.ds, 0x4553, memoryAGet(r.ds, 0x4553) - 1);
    if (r.tl != 1)
        { pc = 0x1bee5; continue dispatch; }
    r.dl = 0x01;
    if (memoryAGet(r.ds, 0x454a) == 0xff)
        { pc = 0x1bee1; continue dispatch; }
    r.dl = 0xff;
case 0x1bee1:
    memoryASet(r.ds, 0x454a, r.dl);
case 0x1bee5:
    { pc = 0x1bf44; continue dispatch; }
case 0x1bee8:
    r.al = memoryAGet(r.ds, 0x454b);
    if (r.al > memoryAGet(r.ds, 0x057b))
        { pc = 0x1bf44; continue dispatch; }
    if (memoryAGet16(r.ds, 0x45b6) != 0x0006)
        { pc = 0x1beff; continue dispatch; }
    if (memoryAGet(r.ds, 0x057b) < 0x28)
        { pc = 0x1bf0c; continue dispatch; }
case 0x1beff:
    frame.pc=2097165;
case 2097165:
yield* sub_1a02d();
frame.pc=2097166;
case 2097166:;
    r.bx = memoryAGet16(r.ds, 0x0008);
    if (r.dl > memoryAGet(r.ds, r.bx + 17855))
        { pc = 0x1bf44; continue dispatch; }
case 0x1bf0c:
    r.dl = 0;
    r.ax = memoryAGet16(r.ds, 0x4548);
    r.ax &= 0x0ff8;
    r.cx = memoryAGet16(r.ds, 0x0579);
    r.cx &= 0x0ff8;
    if (r.ax == r.cx)
        { pc = 0x1bf26; continue dispatch; }
    r.dl = 0x01;
    if (r.ax < r.cx)
        { pc = 0x1bf26; continue dispatch; }
    r.dl = 0xff;
case 0x1bf26:
    memoryASet(r.ds, 0x454a, r.dl);
    if (memoryAGet(r.ds, 0x057b) < 0x28)
        { pc = 0x1bf44; continue dispatch; }
    if (memoryAGet16(r.ds, 0x45b6) != 0x0006)
        { pc = 0x1bf44; continue dispatch; }
    r.al = 0x01;
    if (r.dl == 0xff)
        { pc = 0x1bf41; continue dispatch; }
    r.al = 0xff;
case 0x1bf41:
    memoryASet(r.ds, 0x454a, r.al);
case 0x1bf44:
    memoryASet16(r.ds, 0x45bc, 0x0008);
    if (memoryAGet(r.ds, 0x4553) == 0x00)
        { pc = 0x1bf57; continue dispatch; }
    memoryASet16(r.ds, 0x45bc, 0x0004);
case 0x1bf57:
    r.ax = memoryAGet16(r.ds, 0x4548);
    if (memoryAGet(r.ds, 0x454a) >= 0x01)
        { pc = 0x1bf76; continue dispatch; }
    frame.pc=2097167;
case 2097167:
yield* sub_1a02d();
frame.pc=2097168;
case 2097168:;
    if (r.dl > 0x10)
        { pc = 0x1bfd1; continue dispatch; }
    r.dl &= 0x01;
    if (r.dl != 0)
        { pc = 0x1bf70; continue dispatch; }
    r.dl = 0xff;
case 0x1bf70:
    memoryASet(r.ds, 0x454a, r.dl);
    { pc = 0x1bfd1; continue dispatch; }
case 0x1bf76:
    if (memoryAGet(r.ds, 0x454a) != 0x01)
        { pc = 0x1bf90; continue dispatch; }
    r.ax += memoryAGet16(r.ds, 0x45bc);
    if (r.ax < 0x010b)
        { pc = 0x1bfa8; continue dispatch; }
    r.ax = 0x010a;
    memoryASet(r.ds, 0x454a, 0xff);
    memoryASet(r.ds, 0x4553, 0x00);
    { pc = 0x1bfa8; continue dispatch; }
case 0x1bf90:
    r.tx = r.ax;
    r.ax -= memoryAGet16(r.ds, 0x45bc);
    if (r.tx < memoryAGet16(r.ds, 0x45bc))
        { pc = 0x1bf9b; continue dispatch; }
    if (r.ax > 0x0024)
        { pc = 0x1bfa8; continue dispatch; }
case 0x1bf9b:
    r.ax = 0x0025;
    memoryASet(r.ds, 0x454a, 0x01);
    memoryASet(r.ds, 0x4553, 0x00);
case 0x1bfa8:
    memoryASet16(r.ds, 0x4548, r.ax);
    memoryASet16(r.ds, 0x4551, memoryAGet16(r.ds, 0x4551) + 0x0002);
    if (memoryAGet16(r.ds, 0x4551) < 0x000c)
        { pc = 0x1bfbd; continue dispatch; }
    memoryASet16(r.ds, 0x4551, 0x0000);
case 0x1bfbd:
    if (memoryAGet(r.ds, 0x4553) != 0x00)
        { pc = 0x1bfd1; continue dispatch; }
    frame.pc=2097169;
case 2097169:
yield* sub_1a02d();
frame.pc=2097170;
case 2097170:;
    if (r.dl > 0x08)
        { pc = 0x1bfd1; continue dispatch; }
    memoryASet(r.ds, 0x454a, 0x00);
case 0x1bfd1:
    r.cx = memoryAGet16(r.ds, 0x4548);
    r.dl = memoryAGet(r.ds, 0x454b);
    frame.pc=2097171;
case 2097171:
yield* sub_19ee0();
frame.pc=2097172;
case 2097172:;
    memoryASet16(r.ds, 0x45ba, r.ax);
    frame.pc=2097173;
case 2097173:
yield* sub_1c25d();
frame.pc=2097174;
case 2097174:;
    if (!flags.carry)
        { pc = 0x1bfe5; continue dispatch; }
    return;
case 0x1bfe5:
    frame.pc=2097175;
case 2097175:
yield* sub_1c000();
frame.pc=2097176;
case 2097176:;
    if (flags.carry)
        { pc = 0x1bff8; continue dispatch; }
    frame.pc=2097177;
case 2097177:
yield* sub_1c17a();
frame.pc=2097178;
case 2097178:;
    frame.pc=2097179;
case 2097179:
yield* sub_1c140();
frame.pc=2097180;
case 2097180:;
    memoryASet(r.ds, 0x45be, 0x00);
    frame.pc=2097181;
case 2097181:
yield* sub_1c0a5();
frame.pc=2097182;
case 2097182:;
case 0x1bff8:
    r.bx = memoryAGet16(r.ds, 0x45b6);
    frame.pc=2097183;
case 2097183:
yield* sub_1c1eb();
frame.pc=2097184;
case 2097184:;

      return;
    default: throw new Error("Invalid control flow in sub_1be40");
    }
  }
  } finally {execution.leave(frame);}
}

function* sub_1c000() {
  let pc=0;
  const frame=execution.enter('sub_1c000',pc);pc=frame.pc;
  let skipBudget=frame.budget || execution.restoring;
  try {
  if(execution.restoring && execution.pending.length===0) {
    execution.restoring=false;
    if(frame.parked!==null) {yield frame.parked;frame.parked=null;frame.budget=false;}
  }
  dispatch: while (true) {
    if (!skipBudget && (++game.steps & 1023) === 0) {
      frame.pc=pc;frame.budget=true;frame.parked=0;yield 0;
      frame.parked=null;frame.budget=false;
    }
    skipBudget=false;
    switch(pc) {
    case 0:

    r.ax = memoryAGet16(r.ds, 0x0579);
    r.dl = memoryAGet(r.ds, 0x057b);
    r.si = 0x0018;
    r.di = r.si;
    r.bx = memoryAGet16(r.ds, 0x4548);
    r.dh = memoryAGet(r.ds, 0x454b);
    r.cx = 0x0c0e;
    frame.pc=2097153;
case 2097153:
yield* sub_1a059();
frame.pc=2097154;
case 2097154:;
    if (!flags.carry)
        return;
    if (memoryAGet16(r.ds, 0x45b6) != 0x0006)
        { pc = 0x1c030; continue dispatch; }
    memoryASet(r.ds, 0x0553, 0x01);
    frame.pc=2097155;
case 2097155:
yield* sub_18413();
frame.pc=2097156;
case 2097156:;
    frame.pc=2097157;
case 2097157:
yield* sub_1c17a();
frame.pc=2097158;
case 2097158:;
    flags.carry = true;
    return;
case 0x1c030:
    frame.pc=2097159;
case 2097159:
yield* sub_18413();
frame.pc=2097160;
case 2097160:;
    frame.pc=2097161;
case 2097161:
yield* sub_1c17a();
frame.pc=2097162;
case 2097162:;
    frame.pc=2097163;
case 2097163:
yield* sub_18375();
frame.pc=2097164;
case 2097164:;
    memoryASet(r.ds, 0x055b, 0x04);
    memoryASet(r.ds, 0x0571, 0x01);
    memoryASet(r.ds, 0x0576, 0x04);
    memoryASet(r.ds, 0x0578, 0x08);
    memoryASet(r.ds, 0x4553, 0x04);
    r.dl = 0x01;
    r.ax = memoryAGet16(r.ds, 0x4548);
    if (r.ax > memoryAGet16(r.ds, 0x0579))
        { pc = 0x1c05f; continue dispatch; }
    r.dl = 0xff;
case 0x1c05f:
    memoryASet(r.ds, 0x454a, r.dl);
    r.ax = 0x0ce4;
    r.bx = 0x123b;
    frame.pc=2097165;
case 2097165:
yield* sub_1cb6b();
frame.pc=2097166;
case 2097166:;
    flags.carry = true;

      return;
    default: throw new Error("Invalid control flow in sub_1c000");
    }
  }
  } finally {execution.leave(frame);}
}

function* sub_1c06e() {
  let pc=0;
  const frame=execution.enter('sub_1c06e',pc);pc=frame.pc;
  let skipBudget=frame.budget || execution.restoring;
  try {
  if(execution.restoring && execution.pending.length===0) {
    execution.restoring=false;
    if(frame.parked!==null) {yield frame.parked;frame.parked=null;frame.budget=false;}
  }
  dispatch: while (true) {
    if (!skipBudget && (++game.steps & 1023) === 0) {
      frame.pc=pc;frame.budget=true;frame.parked=0;yield 0;
      frame.parked=null;frame.budget=false;
    }
    skipBudget=false;
    switch(pc) {
    case 0:

    memoryASet(r.ds, 0x45be, 0x01);
    r.ax = memoryAGet16(r.ds, 0x45b6);
    push(r.ax);
    memoryASet16(r.ds, 0x45b6, 0x0000);
case 0x1c07d:
    r.bx = memoryAGet16(r.ds, 0x45b6);
    frame.pc=2097153;
case 2097153:
yield* sub_1c1fd();
frame.pc=2097154;
case 2097154:;
    if (memoryAGet16(r.ds, 0x454f) != 0x0000)
        { pc = 0x1c095; continue dispatch; }
    frame.pc=2097155;
case 2097155:
yield* sub_1c0a5();
frame.pc=2097156;
case 2097156:;
    r.bx = memoryAGet16(r.ds, 0x45b6);
    frame.pc=2097157;
case 2097157:
yield* sub_1c1eb();
frame.pc=2097158;
case 2097158:;
case 0x1c095:
    memoryASet16(r.ds, 0x45b6, memoryAGet16(r.ds, 0x45b6) + 1);
    if (memoryAGet16(r.ds, 0x45b6) < 0x0007)
        { pc = 0x1c07d; continue dispatch; }
    r.ax = pop();
    memoryASet16(r.ds, 0x45b6, r.ax);

      return;
    default: throw new Error("Invalid control flow in sub_1c06e");
    }
  }
  } finally {execution.leave(frame);}
}

function* sub_1c0a5() {
  let pc=0;
  const frame=execution.enter('sub_1c0a5',pc);pc=frame.pc;
  let skipBudget=frame.budget || execution.restoring;
  try {
  if(execution.restoring && execution.pending.length===0) {
    execution.restoring=false;
    if(frame.parked!==null) {yield frame.parked;frame.parked=null;frame.budget=false;}
  }
  dispatch: while (true) {
    if (!skipBudget && (++game.steps & 1023) === 0) {
      frame.pc=pc;frame.budget=true;frame.parked=0;yield 0;
      frame.parked=null;frame.budget=false;
    }
    skipBudget=false;
    switch(pc) {
    case 0:

    r.cx = 0x0008;
case 0x1c0a8:
    r.bx = r.cx;
    r.bx--;
    if (memoryAGet(r.ds, r.bx + 11122) == 0x00)
        { pc = 0x1c0d3; continue dispatch; }
    push(r.cx);
    r.dl = memoryAGet(r.ds, r.bx + 11114);
    r.bl <<= 1;
    r.ax = memoryAGet16(r.ds, r.bx + 11098);
    r.si = 0x0018;
    r.di = r.si;
    r.bx = memoryAGet16(r.ds, 0x4548);
    r.dh = memoryAGet(r.ds, 0x454b);
    r.cx = 0x0c0f;
    frame.pc=2097153;
case 2097153:
yield* sub_1a059();
frame.pc=2097154;
case 2097154:;
    r.cx = pop();
    if (flags.carry)
        { pc = 0x1c0d6; continue dispatch; }
case 0x1c0d3:
    if (--r.cx)
        { pc = 0x1c0a8; continue dispatch; }
    return;
case 0x1c0d6:
    push(r.cx);
    if (memoryAGet(r.ds, 0x45be) != 0x00)
        { pc = 0x1c0eb; continue dispatch; }
    frame.pc=2097155;
case 2097155:
yield* sub_18413();
frame.pc=2097156;
case 2097156:;
    if (memoryAGet(r.ds, 0x70f2) == 0x00)
        { pc = 0x1c0eb; continue dispatch; }
    frame.pc=2097157;
case 2097157:
yield* sub_1d45b();
frame.pc=2097158;
case 2097158:;
case 0x1c0eb:
    frame.pc=2097159;
case 2097159:
yield* sub_1c17a();
frame.pc=2097160;
case 2097160:;
    r.cx = pop();
    r.bx = r.cx;
    r.bx--;
    memoryASet(r.ds, r.bx + 11122, 0x00);
    r.dl = memoryAGet(r.ds, r.bx + 11114);
    r.bl <<= 1;
    r.cx = memoryAGet16(r.ds, r.bx + 11098);
    frame.pc=2097161;
case 2097161:
yield* sub_19ee0();
frame.pc=2097162;
case 2097162:;
    r.di = r.ax;
    r.si = 0x2b7a;
    r.ax = 0xb800;
    r.es = r.ax;
    r.cx = 0x0f03;
    frame.pc=2097163;
case 2097163:
yield* sub_19fcd();
frame.pc=2097164;
case 2097164:;
    if (memoryAGet(r.ds, 0x45be) != 0x00)
        { pc = 0x1c128; continue dispatch; }
    if (memoryAGet(r.ds, 0x70f2) == 0x00)
        { pc = 0x1c125; continue dispatch; }
    frame.pc=2097165;
case 2097165:
yield* sub_1d42a();
frame.pc=2097166;
case 2097166:;
case 0x1c125:
    frame.pc=2097167;
case 2097167:
yield* sub_18375();
frame.pc=2097168;
case 2097168:;
case 0x1c128:
    r.dx = 0;
    if (memoryAGet16(r.ds, 0x45b6) == 0x0006)
        { pc = 0x1c13b; continue dispatch; }
    r.ah = 0;
    frame.pc=2097169;
case 2097169:
yield* interrupt(0x1a);
frame.pc=2097170;
case 2097170:;
    if (r.dx != 0x0000)
        { pc = 0x1c13b; continue dispatch; }
    r.dx--;
case 0x1c13b:
    memoryASet16(r.ds, 0x454f, r.dx);

      return;
    default: throw new Error("Invalid control flow in sub_1c0a5");
    }
  }
  } finally {execution.leave(frame);}
}

function* sub_1c140() {
  let pc=0;
  const frame=execution.enter('sub_1c140',pc);pc=frame.pc;
  let skipBudget=frame.budget || execution.restoring;
  try {
  if(execution.restoring && execution.pending.length===0) {
    execution.restoring=false;
    if(frame.parked!==null) {yield frame.parked;frame.parked=null;frame.budget=false;}
  }
  dispatch: while (true) {
    if (!skipBudget && (++game.steps & 1023) === 0) {
      frame.pc=pc;frame.budget=true;frame.parked=0;yield 0;
      frame.parked=null;frame.budget=false;
    }
    skipBudget=false;
    switch(pc) {
    case 0:

    memoryASet(r.ds, 0x454e, 0x00);
    r.si = 0x4500;
    if (memoryAGet(r.ds, 0x454a) == 0x00)
        { pc = 0x1c16e; continue dispatch; }
    r.bx = memoryAGet16(r.ds, 0x4551);
    if (memoryAGet(r.ds, 0x4553) == 0x00)
        { pc = 0x1c160; continue dispatch; }
    r.bl &= 0x02;
    r.bl += 0x0c;
case 0x1c160:
    if (memoryAGet(r.ds, 0x454a) != 0xff)
        { pc = 0x1c16a; continue dispatch; }
    r.bx += 0x0010;
case 0x1c16a:
    r.si = memoryAGet16(r.ds, r.bx + 19040);
case 0x1c16e:
    r.di = memoryAGet16(r.ds, 0x45ba);
    memoryASet16(r.ds, 0x454c, r.di);
    frame.pc=2097153;
case 2097153:
yield* sub_1c20f();
frame.pc=2097154;
case 2097154:;

      return;
    default: throw new Error("Invalid control flow in sub_1c140");
    }
  }
  } finally {execution.leave(frame);}
}

function* sub_1c17a() {
  let pc=0;
  const frame=execution.enter('sub_1c17a',pc);pc=frame.pc;
  let skipBudget=frame.budget || execution.restoring;
  try {
  if(execution.restoring && execution.pending.length===0) {
    execution.restoring=false;
    if(frame.parked!==null) {yield frame.parked;frame.parked=null;frame.budget=false;}
  }
  dispatch: while (true) {
    if (!skipBudget && (++game.steps & 1023) === 0) {
      frame.pc=pc;frame.budget=true;frame.parked=0;yield 0;
      frame.parked=null;frame.budget=false;
    }
    skipBudget=false;
    switch(pc) {
    case 0:

    if (memoryAGet(r.ds, 0x454e) != 0x00)
        return;
    r.di = memoryAGet16(r.ds, 0x454c);
    frame.pc=2097153;
case 2097153:
yield* sub_1c238();
frame.pc=2097154;
case 2097154:;

      return;
    default: throw new Error("Invalid control flow in sub_1c17a");
    }
  }
  } finally {execution.leave(frame);}
}

function* sub_1c189() {
  let pc=0;
  const frame=execution.enter('sub_1c189',pc);pc=frame.pc;
  let skipBudget=frame.budget || execution.restoring;
  try {
  if(execution.restoring && execution.pending.length===0) {
    execution.restoring=false;
    if(frame.parked!==null) {yield frame.parked;frame.parked=null;frame.budget=false;}
  }
  dispatch: while (true) {
    if (!skipBudget && (++game.steps & 1023) === 0) {
      frame.pc=pc;frame.budget=true;frame.parked=0;yield 0;
      frame.parked=null;frame.budget=false;
    }
    skipBudget=false;
    switch(pc) {
    case 0:

    memoryASet16(r.ds, 0x45b6, 0x0000);
case 0x1c18f:
    frame.pc=2097153;
case 2097153:
yield* sub_1a02d();
frame.pc=2097154;
case 2097154:;
    r.dx &= 0x007f;
    r.dx += 0x0060;
    memoryASet16(r.ds, 0x4548, r.dx);
    memoryASet(r.ds, 0x454a, 0x00);
    memoryASet(r.ds, 0x454e, 0x01);
    memoryASet16(r.ds, 0x4551, 0x0000);
    memoryASet(r.ds, 0x4553, 0x00);
    r.dx = 0;
    if (memoryAGet16(r.ds, 0x45b6) != 0x0000)
        { pc = 0x1c1c5; continue dispatch; }
    r.ah = 0;
    frame.pc=2097155;
case 2097155:
yield* interrupt(0x1a);
frame.pc=2097156;
case 2097156:;
    if (r.dx != 0x0000)
        { pc = 0x1c1c5; continue dispatch; }
    r.dx--;
case 0x1c1c5:
    memoryASet16(r.ds, 0x454f, r.dx);
    r.bx = memoryAGet16(r.ds, 0x45b6);
    r.al = memoryAGet(r.ds, r.bx + 11220);
    r.al += 0x03;
    memoryASet(r.ds, 0x454b, r.al);
    frame.pc=2097157;
case 2097157:
yield* sub_1c1eb();
frame.pc=2097158;
case 2097158:;
    memoryASet16(r.ds, 0x45b6, memoryAGet16(r.ds, 0x45b6) + 1);
    if (memoryAGet16(r.ds, 0x45b6) < 0x0007)
        { pc = 0x1c18f; continue dispatch; }
    memoryASet16(r.ds, 0x45b6, 0x0000);

      return;
    default: throw new Error("Invalid control flow in sub_1c189");
    }
  }
  } finally {execution.leave(frame);}
}

function* sub_1c1eb() {
  let pc=0;
  const frame=execution.enter('sub_1c1eb',pc);pc=frame.pc;
  let skipBudget=frame.budget || execution.restoring;
  try {
  if(execution.restoring && execution.pending.length===0) {
    execution.restoring=false;
    if(frame.parked!==null) {yield frame.parked;frame.parked=null;frame.budget=false;}
  }
  dispatch: while (true) {
    if (!skipBudget && (++game.steps & 1023) === 0) {
      frame.pc=pc;frame.budget=true;frame.parked=0;yield 0;
      frame.parked=null;frame.budget=false;
    }
    skipBudget=false;
    switch(pc) {
    case 0:

    push(r.ds);
    r.es = pop();
    r.bl <<= 1;
    flags.direction = false;
    r.di = memoryAGet16(r.ds, r.bx + 17832);
    r.si = 0x4548;
    r.cx = 0x000c;
    rep_movsb();

      return;
    default: throw new Error("Invalid control flow in sub_1c1eb");
    }
  }
  } finally {execution.leave(frame);}
}

function* sub_1c1fd() {
  let pc=0;
  const frame=execution.enter('sub_1c1fd',pc);pc=frame.pc;
  let skipBudget=frame.budget || execution.restoring;
  try {
  if(execution.restoring && execution.pending.length===0) {
    execution.restoring=false;
    if(frame.parked!==null) {yield frame.parked;frame.parked=null;frame.budget=false;}
  }
  dispatch: while (true) {
    if (!skipBudget && (++game.steps & 1023) === 0) {
      frame.pc=pc;frame.budget=true;frame.parked=0;yield 0;
      frame.parked=null;frame.budget=false;
    }
    skipBudget=false;
    switch(pc) {
    case 0:

    push(r.ds);
    r.es = pop();
    r.bl <<= 1;
    flags.direction = false;
    r.si = memoryAGet16(r.ds, r.bx + 17832);
    r.di = 0x4548;
    r.cx = 0x000c;
    rep_movsb();

      return;
    default: throw new Error("Invalid control flow in sub_1c1fd");
    }
  }
  } finally {execution.leave(frame);}
}

function* sub_1c20f() {
  let pc=0;
  const frame=execution.enter('sub_1c20f',pc);pc=frame.pc;
  let skipBudget=frame.budget || execution.restoring;
  try {
  if(execution.restoring && execution.pending.length===0) {
    execution.restoring=false;
    if(frame.parked!==null) {yield frame.parked;frame.parked=null;frame.budget=false;}
  }
  dispatch: while (true) {
    if (!skipBudget && (++game.steps & 1023) === 0) {
      frame.pc=pc;frame.budget=true;frame.parked=0;yield 0;
      frame.parked=null;frame.budget=false;
    }
    skipBudget=false;
    switch(pc) {
    case 0:

    r.ax = 0xb800;
    r.es = r.ax;
    flags.direction = false;
    r.dh = 0x0c;
case 0x1c217:
    r.cx = 0x0003;
case 0x1c21a:
    r.bx = memoryAGet16(r.es, r.di);
    lodsw();
    r.ax |= r.bx;
    stosw();
    if (--r.cx)
        { pc = 0x1c21a; continue dispatch; }
    r.di -= 0x0006;
    r.di ^= 0x2000;
    if (r.di & 0x2000)
        { pc = 0x1c233; continue dispatch; }
    r.di += 0x0050;
case 0x1c233:
    r.tl = r.dh;
    r.dh--;
    if (r.tl != 1)
        { pc = 0x1c217; continue dispatch; }

      return;
    default: throw new Error("Invalid control flow in sub_1c20f");
    }
  }
  } finally {execution.leave(frame);}
}

function* sub_1c238() {
  let pc=0;
  const frame=execution.enter('sub_1c238',pc);pc=frame.pc;
  let skipBudget=frame.budget || execution.restoring;
  try {
  if(execution.restoring && execution.pending.length===0) {
    execution.restoring=false;
    if(frame.parked!==null) {yield frame.parked;frame.parked=null;frame.budget=false;}
  }
  dispatch: while (true) {
    if (!skipBudget && (++game.steps & 1023) === 0) {
      frame.pc=pc;frame.budget=true;frame.parked=0;yield 0;
      frame.parked=null;frame.budget=false;
    }
    skipBudget=false;
    switch(pc) {
    case 0:

    r.ax = 0xb800;
    r.es = r.ax;
    flags.direction = false;
    r.dh = 0x0c;
    r.ax = 0x5555;
case 0x1c243:
    r.cx = 0x0003;
    rep_stosw();
    r.di -= 0x0006;
    r.di ^= 0x2000;
    if (r.di & 0x2000)
        { pc = 0x1c258; continue dispatch; }
    r.di += 0x0050;
case 0x1c258:
    r.tl = r.dh;
    r.dh--;
    if (r.tl != 1)
        { pc = 0x1c243; continue dispatch; }

      return;
    default: throw new Error("Invalid control flow in sub_1c238");
    }
  }
  } finally {execution.leave(frame);}
}

function* sub_1c25d() {
  let pc=0;
  const frame=execution.enter('sub_1c25d',pc);pc=frame.pc;
  let skipBudget=frame.budget || execution.restoring;
  try {
  if(execution.restoring && execution.pending.length===0) {
    execution.restoring=false;
    if(frame.parked!==null) {yield frame.parked;frame.parked=null;frame.budget=false;}
  }
  dispatch: while (true) {
    if (!skipBudget && (++game.steps & 1023) === 0) {
      frame.pc=pc;frame.budget=true;frame.parked=0;yield 0;
      frame.parked=null;frame.budget=false;
    }
    skipBudget=false;
    switch(pc) {
    case 0:

    if (memoryAGet(r.ds, 0x70f2) != 0x00)
        { pc = 0x1c266; continue dispatch; }
    flags.carry = false;
    return;
case 0x1c266:
    r.ax = memoryAGet16(r.ds, 0x70f3);
    r.dl = memoryAGet(r.ds, 0x70f5);
    r.si = 0x0010;
    r.bx = memoryAGet16(r.ds, 0x4548);
    r.dh = memoryAGet(r.ds, 0x454b);
    r.di = 0x0018;
    r.cx = 0x0c08;
    frame.pc=2097153;
case 2097153:
yield* sub_1a059();
frame.pc=2097154;
case 2097154:;

      return;
    default: throw new Error("Invalid control flow in sub_1c25d");
    }
  }
  } finally {execution.leave(frame);}
}

function* sub_1c290() {
  let pc=0;
  const frame=execution.enter('sub_1c290',pc);pc=frame.pc;
  let skipBudget=frame.budget || execution.restoring;
  try {
  if(execution.restoring && execution.pending.length===0) {
    execution.restoring=false;
    if(frame.parked!==null) {yield frame.parked;frame.parked=null;frame.budget=false;}
  }
  dispatch: while (true) {
    if (!skipBudget && (++game.steps & 1023) === 0) {
      frame.pc=pc;frame.budget=true;frame.parked=0;yield 0;
      frame.parked=null;frame.budget=false;
    }
    skipBudget=false;
    switch(pc) {
    case 0:

    r.ax = 0xb800;
    r.es = r.ax;
    r.ax = memoryAGet16(r.ds, 0x0579);
    if (r.ax < 0x0117)
        { pc = 0x1c2a0; continue dispatch; }
    r.ax = 0x0116;
case 0x1c2a0:
    flags.carry = r.ax < 0x0010;
    r.ax -= 0x0010;
    if (!flags.carry)
        { pc = 0x1c2a7; continue dispatch; }
    r.ax = 0;
case 0x1c2a7:
    r.ax &= 0x0ff0;
    memoryASet16(r.ds, 0x0579, r.ax);
    memoryASet(r.ds, 0x057b, 0x14);
    flags.carry = r.ax < 0x0080;
    r.ax -= 0x0080;
    if (!flags.carry)
        { pc = 0x1c2b9; continue dispatch; }
    r.ax = ~r.ax;
case 0x1c2b9:
    r.cl = 0x03;
    r.ax >>= r.cl;
    if (r.ax <= 0x000d)
        { pc = 0x1c2c5; continue dispatch; }
    r.ax = 0x000d;
case 0x1c2c5:
    r.ax += 0x0002;
    memoryASet16(r.ds, 0x4d6a, r.ax);
    memoryASet16(r.ds, 0x4dd6, 0x000a);
case 0x1c2d1:
    if (memoryAGet16(r.ds, 0x4dd6) == 0x000a)
        { pc = 0x1c2db; continue dispatch; }
    frame.pc=2097153;
case 2097153:
yield* sub_1cd93();
frame.pc=2097154;
case 2097154:;
case 0x1c2db:
    r.ah = 0;
    frame.pc=2097155;
case 2097155:
yield* interrupt(0x1a);
frame.pc=2097156;
case 2097156:;
    memoryASet16(r.ds, 0x4a80, r.dx);
    r.ax = memoryAGet16(r.ds, 0x0579);
    r.cx = r.ax;
    r.cx &= 0x0ff0;
    if (r.cx != 0x0080)
        { pc = 0x1c2f6; continue dispatch; }
    r.ax = r.cx;
    { pc = 0x1c302; continue dispatch; }
case 0x1c2f6:
    if (r.cx < 0x0080)
        { pc = 0x1c2fe; continue dispatch; }
    r.ax -= memoryAGet16(r.ds, 0x4d6a);
    { pc = 0x1c302; continue dispatch; }
case 0x1c2fe:
    r.ax += memoryAGet16(r.ds, 0x4d6a);
case 0x1c302:
    memoryASet16(r.ds, 0x0579, r.ax);
    if (memoryAGet(r.ds, 0x057b) < 0x54)
        { pc = 0x1c30d; continue dispatch; }
    return;
case 0x1c30d:
    memoryASet(r.ds, 0x057b, memoryAGet(r.ds, 0x057b) + 0x08);
    r.cx = memoryAGet16(r.ds, 0x0579);
    r.cx += 0x0004;
    r.dl = memoryAGet(r.ds, 0x057b);
    frame.pc=2097157;
case 2097157:
yield* sub_19ee0();
frame.pc=2097158;
case 2097158:;
    r.di = r.ax;
    memoryASet16(r.ds, 0x4dd8, r.di);
    r.si = 0x4b8a;
    r.bp = 0x000e;
    r.cx = 0x2007;
    frame.pc=2097159;
case 2097159:
yield* sub_19efc();
frame.pc=2097160;
case 2097160:;
    r.di = memoryAGet16(r.ds, 0x4dd8);
    r.di += 0x00f3;
    r.si = 0x4a82;
    r.cx = 0x0d04;
    frame.pc=2097161;
case 2097161:
yield* sub_19fcd();
frame.pc=2097162;
case 2097162:;
    if (memoryAGet16(r.ds, 0x4dd6) != 0x000a)
        { pc = 0x1c350; continue dispatch; }
    frame.pc=2097163;
case 2097163:
yield* sub_1c95e();
frame.pc=2097164;
case 2097164:;
    frame.pc=2097165;
case 2097165:
yield* sub_1cd84();
frame.pc=2097166;
case 2097166:;
case 0x1c350:
    frame.pc=2097167;
case 2097167:
yield* sub_1cd93();
frame.pc=2097168;
case 2097168:;
    r.ah = 0;
    frame.pc=2097169;
case 2097169:
yield* interrupt(0x1a);
frame.pc=2097170;
case 2097170:;
    r.dx -= memoryAGet16(r.ds, 0x4a80);
    if (r.dx < memoryAGet16(r.ds, 0x4dd6))
        { pc = 0x1c350; continue dispatch; }
    if (memoryAGet16(r.ds, 0x4dd6) != 0x000a)
        { pc = 0x1c371; continue dispatch; }
    frame.pc=2097171;
case 2097171:
yield* sub_1aae0();
frame.pc=2097172;
case 2097172:;
    r.bx = 0;
    r.ah = 0x0b;
    frame.pc=2097173;
case 2097173:
yield* interrupt(0x10);
frame.pc=2097174;
case 2097174:;
case 0x1c371:
    memoryASet16(r.ds, 0x4dd6, 0x0002);
    { pc = 0x1c2d1; continue dispatch; }

      return;
    default: throw new Error("Invalid control flow in sub_1c290");
    }
  }
  } finally {execution.leave(frame);}
}

function* sub_1c37a() {
  let pc=0;
  const frame=execution.enter('sub_1c37a',pc);pc=frame.pc;
  let skipBudget=frame.budget || execution.restoring;
  try {
  if(execution.restoring && execution.pending.length===0) {
    execution.restoring=false;
    if(frame.parked!==null) {yield frame.parked;frame.parked=null;frame.budget=false;}
  }
  dispatch: while (true) {
    if (!skipBudget && (++game.steps & 1023) === 0) {
      frame.pc=pc;frame.budget=true;frame.parked=0;yield 0;
      frame.parked=null;frame.budget=false;
    }
    skipBudget=false;
    switch(pc) {
    case 0:

    r.cx = 0x0003;
case 0x1c37d:
    r.bx = 0x0003;
    r.bx -= r.cx;
    r.bx <<= 1;
    r.ax = memoryAGet16(r.ds, r.bx + 19876);
    memoryASet16(r.ds, 0x4d6a, r.ax);
    r.ax = memoryAGet16(r.ds, r.bx + 19882);
    memoryASet16(r.ds, 0x4d6c, r.ax);
    r.ax = memoryAGet16(r.ds, r.bx + 19864);
    memoryASet16(r.ds, 0x4dcc, r.ax);
    r.ax = memoryAGet16(r.ds, r.bx + 19870);
    memoryASet16(r.ds, 0x4dce, r.ax);
    r.ax = memoryAGet16(r.ds, r.bx + 19888);
    memoryASet16(r.ds, 0x4dd0, r.ax);
    r.ax = memoryAGet16(r.ds, r.bx + 19894);
    memoryASet16(r.ds, 0x4dd2, r.ax);
    r.ax = memoryAGet16(r.ds, r.bx + 19900);
    memoryASet16(r.ds, 0x4dd4, r.ax);
    r.ax = memoryAGet16(r.ds, r.bx + 19858);
    memoryASet16(r.ds, 0x4dca, r.ax);
    r.ax = memoryAGet16(r.ds, r.bx + 19906);
    memoryASet16(r.ds, 0x4dc8, r.ax);
    push(r.cx);
    frame.pc=2097153;
case 2097153:
yield* sub_1c3cb();
frame.pc=2097154;
case 2097154:;
    r.cx = pop();
    if (--r.cx)
        { pc = 0x1c37d; continue dispatch; }

      return;
    default: throw new Error("Invalid control flow in sub_1c37a");
    }
  }
  } finally {execution.leave(frame);}
}

function* sub_1c3cb() {
  let pc=0;
  const frame=execution.enter('sub_1c3cb',pc);pc=frame.pc;
  let skipBudget=frame.budget || execution.restoring;
  try {
  if(execution.restoring && execution.pending.length===0) {
    execution.restoring=false;
    if(frame.parked!==null) {yield frame.parked;frame.parked=null;frame.budget=false;}
  }
  dispatch: while (true) {
    if (!skipBudget && (++game.steps & 1023) === 0) {
      frame.pc=pc;frame.budget=true;frame.parked=0;yield 0;
      frame.parked=null;frame.budget=false;
    }
    skipBudget=false;
    switch(pc) {
    case 0:

    r.cx = 0x0008;
    memoryASet(r.ds, 0x4d91, 0x01);
case 0x1c3d3:
    push(r.cx);
    frame.pc=2097153;
case 2097153:
yield* sub_1cd93();
frame.pc=2097154;
case 2097154:;
    r.cx = pop();
    r.bx = r.cx;
    r.bx--;
    r.bx <<= 1;
    r.ax = memoryAGet16(r.ds, 0x4dcc);
    memoryASet16(r.ds, r.bx + 19786, r.ax);
    r.ax = memoryAGet16(r.ds, 0x4dce);
    memoryASet16(r.ds, r.bx + 19802, r.ax);
    if (--r.cx)
        { pc = 0x1c3d3; continue dispatch; }
    r.ax = 0xb800;
    r.es = r.ax;
    memoryASet(r.ds, 0x4d6e, 0x00);
case 0x1c3f7:
    r.ah = 0;
    frame.pc=2097155;
case 2097155:
yield* interrupt(0x1a);
frame.pc=2097156;
case 2097156:;
    memoryASet16(r.ds, 0x4a80, r.dx);
    r.cx = 0x0008;
case 0x1c402:
    push(r.cx);
    frame.pc=2097157;
case 2097157:
yield* sub_1cd93();
frame.pc=2097158;
case 2097158:;
    r.cx = pop();
    r.bx = r.cx;
    r.bx--;
    r.bx <<= 1;
    push(r.cx);
    push(r.bx);
    if (memoryAGet(r.ds, 0x4d91) == 0x00)
        { pc = 0x1c41a; continue dispatch; }
    if (r.cx != 0x0008)
        { pc = 0x1c435; continue dispatch; }
case 0x1c41a:
    r.cx = memoryAGet16(r.ds, r.bx + 19786);
    r.dx = memoryAGet16(r.ds, r.bx + 19802);
    frame.pc=2097159;
case 2097159:
yield* sub_19ee0();
frame.pc=2097160;
case 2097160:;
    r.di = r.ax;
    r.si = memoryAGet16(r.ds, 0x4dca);
    r.bp = 0x000e;
    r.cx = memoryAGet16(r.ds, 0x4dd4);
    frame.pc=2097161;
case 2097161:
yield* sub_19efc();
frame.pc=2097162;
case 2097162:;
    frame.pc=2097163;frame.parked=1;yield 1;
case 2097163: frame.parked=null;
case 0x1c435:
    r.bx = pop();
    r.cx = pop();
    frame.pc=2097164;
case 2097164:
yield* sub_1c45a();
frame.pc=2097165;
case 2097165:;
    if (--r.cx)
        { pc = 0x1c402; continue dispatch; }
case 0x1c43c:
    frame.pc=2097166;
case 2097166:
yield* sub_1cd93();
frame.pc=2097167;
case 2097167:;
    r.ah = 0;
    frame.pc=2097168;
case 2097168:
yield* interrupt(0x1a);
frame.pc=2097169;
case 2097169:;
    r.dx -= memoryAGet16(r.ds, 0x4a80);
    if (r.dx < memoryAGet16(r.ds, 0x4dc8))
        { pc = 0x1c43c; continue dispatch; }
    memoryASet(r.ds, 0x4d91, 0x00);
    if (memoryAGet(r.ds, 0x4d6e) == 0x00)
        { pc = 0x1c3f7; continue dispatch; }

      return;
    default: throw new Error("Invalid control flow in sub_1c3cb");
    }
  }
  } finally {execution.leave(frame);}
}

function* sub_1c45a() {
  let pc=0;
  const frame=execution.enter('sub_1c45a',pc);pc=frame.pc;
  let skipBudget=frame.budget || execution.restoring;
  try {
  if(execution.restoring && execution.pending.length===0) {
    execution.restoring=false;
    if(frame.parked!==null) {yield frame.parked;frame.parked=null;frame.budget=false;}
  }
  dispatch: while (true) {
    if (!skipBudget && (++game.steps & 1023) === 0) {
      frame.pc=pc;frame.budget=true;frame.parked=0;yield 0;
      frame.parked=null;frame.budget=false;
    }
    skipBudget=false;
    switch(pc) {
    case 0:

    r.ax = memoryAGet16(r.ds, r.bx + 19786);
    if (memoryAGet16(r.ds, r.bx + 19823) < 0x0001)
        { pc = 0x1c48a; continue dispatch; }
    if (memoryAGet16(r.ds, r.bx + 19823) != 0x0001)
        { pc = 0x1c47a; continue dispatch; }
    r.ax += memoryAGet16(r.ds, 0x4d6a);
    if (r.ax <= memoryAGet16(r.ds, 0x4dd0))
        { pc = 0x1c486; continue dispatch; }
    r.ax = memoryAGet16(r.ds, 0x4dd0);
    memoryASet(r.ds, 0x4d6e, memoryAGet(r.ds, 0x4d6e) + 1);
    { pc = 0x1c486; continue dispatch; }
case 0x1c47a:
    flags.carry = r.ax < memoryAGet16(r.ds, 0x4d6a);
    r.ax -= memoryAGet16(r.ds, 0x4d6a);
    if (!flags.carry)
        { pc = 0x1c486; continue dispatch; }
    r.ax = 0;
    memoryASet(r.ds, 0x4d6e, memoryAGet(r.ds, 0x4d6e) + 1);
case 0x1c486:
    memoryASet16(r.ds, r.bx + 19786, r.ax);
case 0x1c48a:
    r.ax = memoryAGet16(r.ds, r.bx + 19802);
    if (memoryAGet16(r.ds, r.bx + 19839) < 0x0001)
        return;
    if (memoryAGet16(r.ds, r.bx + 19839) != 0x0001)
        { pc = 0x1c4aa; continue dispatch; }
    r.ax += memoryAGet16(r.ds, 0x4d6c);
    if (r.ax <= memoryAGet16(r.ds, 0x4dd2))
        { pc = 0x1c4b6; continue dispatch; }
    r.ax = memoryAGet16(r.ds, 0x4dd2);
    memoryASet(r.ds, 0x4d6e, memoryAGet(r.ds, 0x4d6e) + 1);
    { pc = 0x1c4b6; continue dispatch; }
case 0x1c4aa:
    flags.carry = r.ax < memoryAGet16(r.ds, 0x4d6c);
    r.ax -= memoryAGet16(r.ds, 0x4d6c);
    if (!flags.carry)
        { pc = 0x1c4b6; continue dispatch; }
    r.ax = 0;
    memoryASet(r.ds, 0x4d6e, memoryAGet(r.ds, 0x4d6e) + 1);
case 0x1c4b6:
    memoryASet16(r.ds, r.bx + 19802, r.ax);

      return;
    default: throw new Error("Invalid control flow in sub_1c45a");
    }
  }
  } finally {execution.leave(frame);}
}

function* sub_1c4bb() {
  let pc=0;
  const frame=execution.enter('sub_1c4bb',pc);pc=frame.pc;
  let skipBudget=frame.budget || execution.restoring;
  try {
  if(execution.restoring && execution.pending.length===0) {
    execution.restoring=false;
    if(frame.parked!==null) {yield frame.parked;frame.parked=null;frame.budget=false;}
  }
  dispatch: while (true) {
    if (!skipBudget && (++game.steps & 1023) === 0) {
      frame.pc=pc;frame.budget=true;frame.parked=0;yield 0;
      frame.parked=null;frame.budget=false;
    }
    skipBudget=false;
    switch(pc) {
    case 0:

    frame.pc=2097153;
case 2097153:
yield* sub_1cd84();
frame.pc=2097154;
case 2097154:;
    if (memoryAGet(r.ds, 0x0697) == 0xfd)
        { pc = 0x1c4cc; continue dispatch; }
    r.ah = 0x0b;
    r.bx = 0x0101;
    frame.pc=2097155;
case 2097155:
yield* interrupt(0x10);
frame.pc=2097156;
case 2097156:;
case 0x1c4cc:
    frame.pc=2097157;
case 2097157:
yield* sub_1c290();
frame.pc=2097158;
case 2097158:;
    frame.pc=2097159;
case 2097159:
yield* sub_1c37a();
frame.pc=2097160;
case 2097160:;
    frame.pc=2097161;
case 2097161:
yield* sub_1cdef();
frame.pc=2097162;
case 2097162:;
    if (memoryAGet(r.ds, 0x1f80) >= 0x09)
        { pc = 0x1c4e0; continue dispatch; }
    memoryASet(r.ds, 0x1f80, memoryAGet(r.ds, 0x1f80) + 1);
case 0x1c4e0:
    if (memoryAGet16(r.ds, 0x0008) >= 0x0007)
        { pc = 0x1c4eb; continue dispatch; }
    memoryASet16(r.ds, 0x0008, memoryAGet16(r.ds, 0x0008) + 1);
case 0x1c4eb:
    memoryASet16(r.ds, 0x0414, 0x0000);
    r.ah = 0;
    frame.pc=2097163;
case 2097163:
yield* interrupt(0x1a);
frame.pc=2097164;
case 2097164:;
    memoryASet16(r.ds, 0x0412, r.dx);
    frame.pc=2097165;
case 2097165:
yield* sub_1cd51();
frame.pc=2097166;
case 2097166:;

      return;
    default: throw new Error("Invalid control flow in sub_1c4bb");
    }
  }
  } finally {execution.leave(frame);}
}

function* sub_1c500() {
  let pc=0;
  const frame=execution.enter('sub_1c500',pc);pc=frame.pc;
  let skipBudget=frame.budget || execution.restoring;
  try {
  if(execution.restoring && execution.pending.length===0) {
    execution.restoring=false;
    if(frame.parked!==null) {yield frame.parked;frame.parked=null;frame.budget=false;}
  }
  dispatch: while (true) {
    if (!skipBudget && (++game.steps & 1023) === 0) {
      frame.pc=pc;frame.budget=true;frame.parked=0;yield 0;
      frame.parked=null;frame.budget=false;
    }
    skipBudget=false;
    switch(pc) {
    case 0:

    if (memoryAGet(r.ds, 0x0000) == 0x00)
        return;
    r.ah = 0;
    frame.pc=2097153;
case 2097153:
yield* interrupt(0x1a);
frame.pc=2097154;
case 2097154:;
    if (r.dx == memoryAGet16(r.ds, 0x52c4))
        return;
    memoryASet16(r.ds, 0x52c4, r.dx);
    r.bx = memoryAGet16(r.ds, 0x52c6);
    memoryASet16(r.ds, 0x52c6, memoryAGet16(r.ds, 0x52c6) + 0x0002);
    r.ax = memoryAGet16(r.ds, r.bx + 21194);
    if (r.ax != memoryAGet16(r.ds, 0x52c8))
        { pc = 0x1c52c; continue dispatch; }
    frame.pc=2097155;
case 2097155:
yield* sub_1cd51();
frame.pc=2097156;
case 2097156:;
    return;
case 0x1c52c:
    memoryASet16(r.ds, 0x52c8, r.ax);
    r.al = 0xb6;
    out(0x43, r.al);
    r.ax = memoryAGet16(r.ds, 0x52c8);
    out(0x42, r.al);
    r.al = r.ah;
    out(0x42, r.al);
    r.al = portRead(0x61);
    r.al |= 0x03;
    out(0x61, r.al);

      return;
    default: throw new Error("Invalid control flow in sub_1c500");
    }
  }
  } finally {execution.leave(frame);}
}

function* sub_1c543() {
  let pc=0;
  const frame=execution.enter('sub_1c543',pc);pc=frame.pc;
  let skipBudget=frame.budget || execution.restoring;
  try {
  if(execution.restoring && execution.pending.length===0) {
    execution.restoring=false;
    if(frame.parked!==null) {yield frame.parked;frame.parked=null;frame.budget=false;}
  }
  dispatch: while (true) {
    if (!skipBudget && (++game.steps & 1023) === 0) {
      frame.pc=pc;frame.budget=true;frame.parked=0;yield 0;
      frame.parked=null;frame.budget=false;
    }
    skipBudget=false;
    switch(pc) {
    case 0:

    if (memoryAGet16(r.ds, 0x0008) < 0x0002)
        return;
    memoryASet16(r.ds, 0x5016, 0x0000);
    r.ah = 0;
    frame.pc=2097153;
case 2097153:
yield* interrupt(0x1a);
frame.pc=2097154;
case 2097154:;
    memoryASet16(r.ds, 0x52c0, r.dx);
    memoryASet16(r.ds, 0x52c2, r.dx);
    memoryASet16(r.ds, 0x52c4, r.dx);
    memoryASet16(r.ds, 0x52c6, 0x0000);
    memoryASet16(r.ds, 0x52c8, 0x0000);
case 0x1c56c:
    frame.pc=2097155;
case 2097155:
yield* sub_1c598();
frame.pc=2097156;
case 2097156:;
    memoryASet16(r.ds, 0x5016, memoryAGet16(r.ds, 0x5016) ^ 0x0002);
case 0x1c575:
    frame.pc=2097157;
case 2097157:
yield* sub_1c500();
frame.pc=2097158;
case 2097158:;
    r.ah = 0;
    frame.pc=2097159;
case 2097159:
yield* interrupt(0x1a);
frame.pc=2097160;
case 2097160:;
    r.ax = r.dx;
    r.ax -= memoryAGet16(r.ds, 0x52c0);
    if (r.ax < 0x0005)
        { pc = 0x1c575; continue dispatch; }
    memoryASet16(r.ds, 0x52c0, r.dx);
    r.dx -= memoryAGet16(r.ds, 0x52c2);
    if (r.dx < 0x0028)
        { pc = 0x1c56c; continue dispatch; }
    frame.pc=2097161;
case 2097161:
yield* sub_1cd51();
frame.pc=2097162;
case 2097162:;

      return;
    default: throw new Error("Invalid control flow in sub_1c543");
    }
  }
  } finally {execution.leave(frame);}
}

function* sub_1c598() {
  let pc=0;
  const frame=execution.enter('sub_1c598',pc);pc=frame.pc;
  let skipBudget=frame.budget || execution.restoring;
  try {
  if(execution.restoring && execution.pending.length===0) {
    execution.restoring=false;
    if(frame.parked!==null) {yield frame.parked;frame.parked=null;frame.budget=false;}
  }
  dispatch: while (true) {
    if (!skipBudget && (++game.steps & 1023) === 0) {
      frame.pc=pc;frame.budget=true;frame.parked=0;yield 0;
      frame.parked=null;frame.budget=false;
    }
    skipBudget=false;
    switch(pc) {
    case 0:

    r.ax = 0xb800;
    r.es = r.ax;
    r.bx = memoryAGet16(r.ds, 0x0008);
    r.bx <<= 1;
    r.ax = memoryAGet16(r.ds, r.bx + 21166);
    memoryASet16(r.ds, 0x5010, r.ax);
case 0x1c5aa:
    r.bx = memoryAGet16(r.ds, 0x5010);
    r.di = memoryAGet16(r.ds, r.bx);
    if (r.di != 0x0000)
        { pc = 0x1c5b6; continue dispatch; }
    return;
case 0x1c5b6:
    r.bx = memoryAGet16(r.ds, r.bx + 2);
    r.bx ^= memoryAGet16(r.ds, 0x5016);
    r.bx &= 0x0002;
    r.si = memoryAGet16(r.ds, r.bx + 20498);
    r.cx = 0x2304;
    frame.pc=2097153;
case 2097153:
yield* sub_19fcd();
frame.pc=2097154;
case 2097154:;
    frame.pc=2097155;
case 2097155:
yield* sub_1c500();
frame.pc=2097156;
case 2097156:;
    memoryASet16(r.ds, 0x5010, memoryAGet16(r.ds, 0x5010) + 0x0004);
    { pc = 0x1c5aa; continue dispatch; }

      return;
    default: throw new Error("Invalid control flow in sub_1c598");
    }
  }
  } finally {execution.leave(frame);}
}

function* sub_1c5e0() {
  let pc=0;
  const frame=execution.enter('sub_1c5e0',pc);pc=frame.pc;
  let skipBudget=frame.budget || execution.restoring;
  try {
  if(execution.restoring && execution.pending.length===0) {
    execution.restoring=false;
    if(frame.parked!==null) {yield frame.parked;frame.parked=null;frame.budget=false;}
  }
  dispatch: while (true) {
    if (!skipBudget && (++game.steps & 1023) === 0) {
      frame.pc=pc;frame.budget=true;frame.parked=0;yield 0;
      frame.parked=null;frame.budget=false;
    }
    skipBudget=false;
    switch(pc) {
    case 0:

    if (memoryAGet(r.ds, 0x0000) == 0x00)
        return;
    frame.pc=2097153;frame.parked=1;yield 1;
case 2097153: frame.parked=null;
    r.ah = 0;
    frame.pc=2097154;
case 2097154:
yield* interrupt(0x1a);
frame.pc=2097155;
case 2097155:;
    if (r.dx == memoryAGet16(r.ds, 0x5322))
        return;
    memoryASet16(r.ds, 0x5322, r.dx);
    r.bx = memoryAGet16(r.ds, 0x5320);
    r.bl = memoryAGet(r.ds, r.bx + 21388);
    if (r.bl == 0x66)
        { pc = 0x1c60d; continue dispatch; }
    r.bh = 0;
    memoryASet16(r.ds, 0x5320, memoryAGet16(r.ds, 0x5320) + 1);
    if (r.bx != 0x0000)
        { pc = 0x1c611; continue dispatch; }
case 0x1c60d:
    frame.pc=2097156;
case 2097156:
yield* sub_1cd51();
frame.pc=2097157;
case 2097157:;
    return;
case 0x1c611:
    r.al = 0xb6;
    out(0x43, r.al);
    r.ax = memoryAGet16(r.ds, r.bx + 21284);
    out(0x42, r.al);
    r.al = r.ah;
    out(0x42, r.al);
    r.al = portRead(0x61);
    r.al |= 0x03;
    out(0x61, r.al);

      return;
    default: throw new Error("Invalid control flow in sub_1c5e0");
    }
  }
  } finally {execution.leave(frame);}
}

function* sub_1c630() {
  let pc=0;
  const frame=execution.enter('sub_1c630',pc);pc=frame.pc;
  let skipBudget=frame.budget || execution.restoring;
  try {
  if(execution.restoring && execution.pending.length===0) {
    execution.restoring=false;
    if(frame.parked!==null) {yield frame.parked;frame.parked=null;frame.budget=false;}
  }
  dispatch: while (true) {
    if (!skipBudget && (++game.steps & 1023) === 0) {
      frame.pc=pc;frame.budget=true;frame.parked=0;yield 0;
      frame.parked=null;frame.budget=false;
    }
    skipBudget=false;
    switch(pc) {
    case 0:

    r.ax = 0xb800;
    r.es = r.ax;
    r.bx = memoryAGet16(r.ds, 0x0008);
    r.bx &= 0x0007;
    r.bx <<= 1;
    r.ax = r.bx;
    r.bx = memoryAGet16(r.ds, r.bx + 22792);
    r.cl = 0x03;
    r.ax <<= r.cl;
    memoryASet16(r.ds, 0x5918, r.ax);
case 0x1c64c:
    r.di = memoryAGet16(r.ds, r.bx);
    if (r.di == 0xffff)
        return;
    frame.pc=2097153;
case 2097153:
yield* sub_1a02d();
frame.pc=2097154;
case 2097154:;
    r.dx &= 0x000e;
    r.dx += memoryAGet16(r.ds, 0x5918);
    r.si = r.dx;
    r.si = memoryAGet16(r.ds, r.si + 22664);
    r.cx = memoryAGet16(r.ds, r.si + 22616);
    r.si = memoryAGet16(r.ds, r.si + 22604);
    push(r.bx);
    frame.pc=2097155;
case 2097155:
yield* sub_19fcd();
frame.pc=2097156;
case 2097156:;
    r.bx = pop();
    r.bx += 0x0002;
    { pc = 0x1c64c; continue dispatch; }

      return;
    default: throw new Error("Invalid control flow in sub_1c630");
    }
  }
  } finally {execution.leave(frame);}
}

function* sub_1c680() {
  let pc=0;
  const frame=execution.enter('sub_1c680',pc);pc=frame.pc;
  let skipBudget=frame.budget || execution.restoring;
  try {
  if(execution.restoring && execution.pending.length===0) {
    execution.restoring=false;
    if(frame.parked!==null) {yield frame.parked;frame.parked=null;frame.budget=false;}
  }
  dispatch: while (true) {
    if (!skipBudget && (++game.steps & 1023) === 0) {
      frame.pc=pc;frame.budget=true;frame.parked=0;yield 0;
      frame.parked=null;frame.budget=false;
    }
    skipBudget=false;
    switch(pc) {
    case 0:

    memoryASet(r.ds, 0x5b0f, 0x0c);
    memoryASet16(r.ds, 0x5b0c, 0x0001);
    memoryASet16(r.ds, 0x5b12, 0x01ff);
    memoryASet16(r.ds, 0x5b0a, 0x000f);
    memoryASet(r.ds, 0x5b0e, 0x01);

      return;
    default: throw new Error("Invalid control flow in sub_1c680");
    }
  }
  } finally {execution.leave(frame);}
}

function* sub_1c69d() {
  let pc=0;
  const frame=execution.enter('sub_1c69d',pc);pc=frame.pc;
  let skipBudget=frame.budget || execution.restoring;
  try {
  if(execution.restoring && execution.pending.length===0) {
    execution.restoring=false;
    if(frame.parked!==null) {yield frame.parked;frame.parked=null;frame.budget=false;}
  }
  dispatch: while (true) {
    if (!skipBudget && (++game.steps & 1023) === 0) {
      frame.pc=pc;frame.budget=true;frame.parked=0;yield 0;
      frame.parked=null;frame.budget=false;
    }
    skipBudget=false;
    switch(pc) {
    case 0:

    if (memoryAGet(r.ds, 0x0000) == 0x00)
        { pc = 0x1c6d5; continue dispatch; }
    if (memoryAGet(r.ds, 0x1cb8) == 0x00)
        { pc = 0x1c728; continue dispatch; }
    r.ah = 0;
    frame.pc=2097153;
case 2097153:
yield* interrupt(0x1a);
frame.pc=2097154;
case 2097154:;
    if (memoryAGet(r.ds, 0x5b0f) != 0x00)
        { pc = 0x1c6d6; continue dispatch; }
    if (r.dx == memoryAGet16(r.ds, 0x5b10))
        { pc = 0x1c6d5; continue dispatch; }
    memoryASet16(r.ds, 0x5b10, r.dx);
    r.al = 0xb6;
    out(0x43, r.al);
    r.ax = memoryAGet16(r.ds, 0x5b12);
    r.ax &= 0x01ff;
    r.ax += 0x00c8;
    frame.pc=2097155;
case 2097155:
yield* sub_1cab9();
frame.pc=2097156;
case 2097156:;
    memoryASet16(r.ds, 0x5b12, memoryAGet16(r.ds, 0x5b12) - 0x004b);
case 0x1c6d5:
    return;
case 0x1c6d6:
    if (r.dx == memoryAGet16(r.ds, 0x5b10))
        { pc = 0x1c6e4; continue dispatch; }
    memoryASet16(r.ds, 0x5b10, r.dx);
    memoryASet(r.ds, 0x5b0f, memoryAGet(r.ds, 0x5b0f) - 1);
case 0x1c6e4:
    r.tl = memoryAGet(r.ds, 0x5b0e);
    memoryASet(r.ds, 0x5b0e, memoryAGet(r.ds, 0x5b0e) - 1);
    if (r.tl != 1)
        { pc = 0x1c727; continue dispatch; }
    r.al = 0x01;
    if (memoryAGet(r.ds, 0x0697) == 0xfd)
        { pc = 0x1c6f5; continue dispatch; }
    r.al <<= 1;
case 0x1c6f5:
    memoryASet(r.ds, 0x5b0e, r.al);
    frame.pc=2097157;
case 2097157:
yield* sub_1a02d();
frame.pc=2097158;
case 2097158:;
    if (r.dl > 0x04)
        { pc = 0x1c704; continue dispatch; }
    memoryASet16(r.ds, 0x5b0c, memoryAGet16(r.ds, 0x5b0c) + 1);
case 0x1c704:
    if (!(memoryAGet16(r.ds, 0x5b0c) & 0x0001))
        { pc = 0x1c711; continue dispatch; }
    memoryASet16(r.ds, 0x5b0a, memoryAGet16(r.ds, 0x5b0a) + 0x0007);
case 0x1c711:
    r.al = 0xb6;
    out(0x43, r.al);
    frame.pc=2097159;
case 2097159:
yield* sub_1a02d();
frame.pc=2097160;
case 2097160:;
    r.ax = r.dx;
    r.ax &= memoryAGet16(r.ds, 0x5b0a);
    r.ax &= 0x01ff;
    r.ax += 0x0190;
    frame.pc=2097161;
case 2097161:
yield* sub_1cab9();
frame.pc=2097162;
case 2097162:;
case 0x1c727:
    return;
case 0x1c728:
    r.ah = 0;
    frame.pc=2097163;
case 2097163:
yield* interrupt(0x1a);
frame.pc=2097164;
case 2097164:;
    if (memoryAGet(r.ds, 0x5920) == 0x00)
        { pc = 0x1c752; continue dispatch; }
    if (r.dx == memoryAGet16(r.ds, 0x5921))
        { pc = 0x1c792; continue dispatch; }
    memoryASet16(r.ds, 0x5921, r.dx);
    r.tl = memoryAGet(r.ds, 0x5920);
    memoryASet(r.ds, 0x5920, memoryAGet(r.ds, 0x5920) - 1);
    if (r.tl == 1)
        { pc = 0x1c74e; continue dispatch; }
    r.al = 0xb6;
    out(0x43, r.al);
    r.ax = memoryAGet16(r.ds, 0x5923);
    frame.pc=2097165;
case 2097165:
yield* sub_1cab9();
frame.pc=2097166;
case 2097166:;
    return;
case 0x1c74e:
    frame.pc=2097167;
case 2097167:
yield* sub_1cd51();
frame.pc=2097168;
case 2097168:;
    return;
case 0x1c752:
    if (r.dx == memoryAGet16(r.ds, 0x5925))
        { pc = 0x1c792; continue dispatch; }
    r.si = 0x0003;
    r.al = memoryAGet(r.ds, 0x1cbf);
    r.al |= memoryAGet(r.ds, 0x5b07);
    if (r.al)
        { pc = 0x1c779; continue dispatch; }
    r.si = 0x0001;
    if (memoryAGet16(r.ds, 0x0004) != 0x0000)
        { pc = 0x1c779; continue dispatch; }
    r.si--;
    if (memoryAGet(r.ds, 0x1673) == 0x00)
        { pc = 0x1c779; continue dispatch; }
    r.si = 0x0002;
case 0x1c779:
    r.di = r.si;
    r.di <<= 1;
    r.al = memoryAGet(r.ds, 0x0584);
    r.al |= memoryAGet(r.ds, 0x5b07);
    if (r.al)
        { pc = 0x1c793; continue dispatch; }
    r.ax = r.dx;
    r.ax -= memoryAGet16(r.ds, 0x5925);
    if (r.ax >= memoryAGet16(r.ds, r.di + 23026))
        { pc = 0x1c793; continue dispatch; }
case 0x1c792:
    return;
case 0x1c793:
    memoryASet16(r.ds, 0x5925, r.dx);
    if (memoryAGet(r.ds, 0x1cbf) != 0x00)
        { pc = 0x1c7a9; continue dispatch; }
    if (memoryAGet(r.ds, 0x5b07) == 0x00)
        { pc = 0x1c7ce; continue dispatch; }
    memoryASet(r.ds, 0x5b07, memoryAGet(r.ds, 0x5b07) - 1);
case 0x1c7a9:
    memoryASet16(r.ds, 0x592e, 0x1200);
    r.bx = memoryAGet16(r.ds, 0x59ba);
    if (r.bx < 0x0006)
        { pc = 0x1c7be; continue dispatch; }
    r.bx = 0;
    memoryASet16(r.ds, 0x59ba, r.bx);
case 0x1c7be:
    memoryASet16(r.ds, 0x59ba, memoryAGet16(r.ds, 0x59ba) + 0x0002);
    r.ax = memoryAGet16(r.ds, r.bx + 23108);
    memoryASet16(r.ds, 0x592a, r.ax);
    frame.pc=2097169;
case 2097169:
yield* sub_1cd58();
frame.pc=2097170;
case 2097170:;
    return;
case 0x1c7ce:
    if (r.si != 0x0002)
        { pc = 0x1c7eb; continue dispatch; }
    r.al = memoryAGet(r.ds, 0x1673);
    r.ah = 0;
    r.cl = 0x04;
    r.ax <<= r.cl;
    r.ax += 0x0200;
    memoryASet16(r.ds, 0x592a, r.ax);
    memoryASet16(r.ds, 0x592e, 0x1800);
    { pc = 0x1c8bd; continue dispatch; }
case 0x1c7eb:
    r.ax = memoryAGet16(r.ds, r.di + 23042);
    memoryASet16(r.ds, 0x592e, r.ax);
    flags.carry = memoryAGet(r.ds, 0x5927) & 1;
    memoryASet(r.ds, 0x5927, memoryAGet(r.ds, 0x5927) >> 1);
    if (!flags.carry)
        { pc = 0x1c853; continue dispatch; }
    memoryASet16(r.ds, 0x592e, 0x1000);
    memoryASet(r.ds, 0x5927, 0x80);
    memoryASet(r.ds, 0x5928, memoryAGet(r.ds, 0x5928) + 1);
    r.al = memoryAGet(r.ds, 0x5928);
    r.al &= memoryAGet(r.ds, r.si + 23034);
    if (r.al != 0)
        { pc = 0x1c846; continue dispatch; }
    r.dl = memoryAGet(r.ds, r.si + 23050);
    memoryASet(r.ds, 0x5929, memoryAGet(r.ds, 0x5929) + r.dl);
    frame.pc=2097171;
case 2097171:
yield* sub_1a02d();
frame.pc=2097172;
case 2097172:;
    if (r.dl > memoryAGet(r.ds, r.si + 23052))
        { pc = 0x1c828; continue dispatch; }
    r.dl &= 0x07;
    memoryASet(r.ds, 0x592d, r.dl);
case 0x1c828:
    frame.pc=2097173;
case 2097173:
yield* sub_1a02d();
frame.pc=2097174;
case 2097174:;
    r.dx &= 0x00ff;
    r.dx <<= 1;
    r.cl = 0x01;
    if (!(r.dl & 0x02))
        { pc = 0x1c83e; continue dispatch; }
    r.cl = 0xff;
    r.dx += 0x0300;
case 0x1c83e:
    memoryASet16(r.ds, 0x592a, r.dx);
    memoryASet(r.ds, 0x592c, r.cl);
case 0x1c846:
    r.ah = memoryAGet(r.ds, 0x5929);
    r.ah &= memoryAGet(r.ds, r.si + 23036);
    r.al |= r.ah;
    memoryASet(r.ds, 0x5928, r.al);
case 0x1c853:
    if (memoryAGet(r.ds, 0x592c) == 0xff)
        { pc = 0x1c870; continue dispatch; }
    memoryASet16(r.ds, 0x5a54, memoryAGet16(r.ds, 0x5a54) + 0x0002);
    r.bx = memoryAGet16(r.ds, 0x5a54);
    r.bx &= 0x000e;
    r.ax = memoryAGet16(r.ds, r.bx + 23108);
    memoryASet16(r.ds, 0x592a, r.ax);
    { pc = 0x1c883; continue dispatch; }
case 0x1c870:
    if (memoryAGet16(r.ds, 0x592a) > 0x00c8)
        { pc = 0x1c87e; continue dispatch; }
    memoryASet16(r.ds, 0x592a, 0x0500);
case 0x1c87e:
    memoryASet16(r.ds, 0x592a, memoryAGet16(r.ds, 0x592a) - 0x0019);
case 0x1c883:
    if (memoryAGet(r.ds, 0x0584) == 0x00)
        { pc = 0x1c897; continue dispatch; }
    memoryASet16(r.ds, 0x592e, 0x2000);
    memoryASet(r.ds, 0x592c, 0xff);
    if (memoryAGet(r.ds, 0x0584) != 0x00)
        { pc = 0x1c8bd; continue dispatch; }
case 0x1c897:
    r.bl = memoryAGet(r.ds, 0x5928);
    r.bh = 0;
    r.bx += memoryAGet16(r.ds, r.di + 23038);
    r.al = memoryAGet(r.ds, r.bx + 22978);
    r.al &= memoryAGet(r.ds, 0x5927);
    if (r.al != 0)
        { pc = 0x1c8bd; continue dispatch; }
    if (memoryAGet(r.ds, 0x592d) == 0x00)
        return;
    memoryASet(r.ds, 0x592d, memoryAGet(r.ds, 0x592d) - 1);
    r.ax = memoryAGet16(r.ds, r.di + 23046);
    memoryASet16(r.ds, 0x592e, r.ax);
case 0x1c8bd:
    frame.pc=2097175;
case 2097175:
yield* sub_1cd58();
frame.pc=2097176;
case 2097176:;

      return;
    default: throw new Error("Invalid control flow in sub_1c69d");
    }
  }
  } finally {execution.leave(frame);}
}

function* sub_1c8c1() {
  let pc=0;
  const frame=execution.enter('sub_1c8c1',pc);pc=frame.pc;
  let skipBudget=frame.budget || execution.restoring;
  try {
  if(execution.restoring && execution.pending.length===0) {
    execution.restoring=false;
    if(frame.parked!==null) {yield frame.parked;frame.parked=null;frame.budget=false;}
  }
  dispatch: while (true) {
    if (!skipBudget && (++game.steps & 1023) === 0) {
      frame.pc=pc;frame.budget=true;frame.parked=0;yield 0;
      frame.parked=null;frame.budget=false;
    }
    skipBudget=false;
    switch(pc) {
    case 0:

    frame.pc=2097153;
case 2097153:
yield* sub_1cd51();
frame.pc=2097154;
case 2097154:;
    r.ah = 0x0b;
    r.bx = 0x0004;
    frame.pc=2097155;
case 2097155:
yield* interrupt(0x10);
frame.pc=2097156;
case 2097156:;
    r.ah = 0;
    frame.pc=2097157;
case 2097157:
yield* interrupt(0x1a);
frame.pc=2097158;
case 2097158:;
    memoryASet16(r.ds, 0x5ae2, r.dx);
    memoryASet16(r.ds, 0x5ae4, 0x0000);
    r.al = 0x02;
    if (memoryAGet(r.ds, 0x0697) != 0xfd)
        { pc = 0x1c8e4; continue dispatch; }
    r.al >>= 1;
case 0x1c8e4:
    memoryASet(r.ds, 0x5b06, r.al);
case 0x1c8e7:
    if (memoryAGet(r.ds, 0x0000) == 0x00)
        { pc = 0x1c908; continue dispatch; }
    memoryASet16(r.ds, 0x5ae4, memoryAGet16(r.ds, 0x5ae4) + 1);
    r.bx = memoryAGet16(r.ds, 0x5ae4);
    r.cl = memoryAGet(r.ds, 0x5b06);
    r.bx >>= r.cl;
    r.bx &= 0x001f;
    r.al = portRead(0x61);
    r.al ^= memoryAGet(r.ds, r.bx + 23270);
    out(0x61, r.al);
case 0x1c908:
    r.ah = 0;
    frame.pc=2097159;
case 2097159:
yield* interrupt(0x1a);
frame.pc=2097160;
case 2097160:;
    r.dx -= memoryAGet16(r.ds, 0x5ae2);
    if (r.dx < 0x0002)
        { pc = 0x1c8e7; continue dispatch; }
    r.ah = 0x0b;
    r.bx = 0;
    frame.pc=2097161;
case 2097161:
yield* interrupt(0x10);
frame.pc=2097162;
case 2097162:;
    memoryASet(r.ds, 0x5b07, 0x0c);
    frame.pc=2097163;
case 2097163:
yield* sub_1cd51();
frame.pc=2097164;
case 2097164:;

      return;
    default: throw new Error("Invalid control flow in sub_1c8c1");
    }
  }
  } finally {execution.leave(frame);}
}

function* sub_1c924() {
  let pc=0;
  const frame=execution.enter('sub_1c924',pc);pc=frame.pc;
  let skipBudget=frame.budget || execution.restoring;
  try {
  if(execution.restoring && execution.pending.length===0) {
    execution.restoring=false;
    if(frame.parked!==null) {yield frame.parked;frame.parked=null;frame.budget=false;}
  }
  dispatch: while (true) {
    if (!skipBudget && (++game.steps & 1023) === 0) {
      frame.pc=pc;frame.budget=true;frame.parked=0;yield 0;
      frame.parked=null;frame.budget=false;
    }
    skipBudget=false;
    switch(pc) {
    case 0:

    r.ax = 0x0200;
    if (memoryAGet(r.ds, 0x0697) != 0xfd)
        { pc = 0x1c930; continue dispatch; }
    r.ax <<= 1;
case 0x1c930:
    memoryASet16(r.ds, 0x5ad0, r.ax);

      return;
    default: throw new Error("Invalid control flow in sub_1c924");
    }
  }
  } finally {execution.leave(frame);}
}

function* sub_1c934() {
  let pc=0;
  const frame=execution.enter('sub_1c934',pc);pc=frame.pc;
  let skipBudget=frame.budget || execution.restoring;
  try {
  if(execution.restoring && execution.pending.length===0) {
    execution.restoring=false;
    if(frame.parked!==null) {yield frame.parked;frame.parked=null;frame.budget=false;}
  }
  dispatch: while (true) {
    if (!skipBudget && (++game.steps & 1023) === 0) {
      frame.pc=pc;frame.budget=true;frame.parked=0;yield 0;
      frame.parked=null;frame.budget=false;
    }
    skipBudget=false;
    switch(pc) {
    case 0:

    memoryASet16(r.ds, 0x5ad0, memoryAGet16(r.ds, 0x5ad0) + 1);
    r.bx = memoryAGet16(r.ds, 0x5ad0);
    r.dx = r.bx;
    r.cl = 0x09;
    r.dx >>= r.cl;
    r.cl = r.dl;
    r.cl &= 0x0f;
    r.bx >>= r.cl;
    r.bx &= 0x000f;
    r.dl = memoryAGet(r.ds, r.bx + 23250);
    r.dl &= memoryAGet(r.ds, 0x0000);
    r.al = portRead(0x61);
    r.al &= 0xfc;
    r.al |= r.dl;
    out(0x61, r.al);

      return;
    default: throw new Error("Invalid control flow in sub_1c934");
    }
  }
  } finally {execution.leave(frame);}
}

function* sub_1c95e() {
  let pc=0;
  const frame=execution.enter('sub_1c95e',pc);pc=frame.pc;
  let skipBudget=frame.budget || execution.restoring;
  try {
  if(execution.restoring && execution.pending.length===0) {
    execution.restoring=false;
    if(frame.parked!==null) {yield frame.parked;frame.parked=null;frame.budget=false;}
  }
  dispatch: while (true) {
    if (!skipBudget && (++game.steps & 1023) === 0) {
      frame.pc=pc;frame.budget=true;frame.parked=0;yield 0;
      frame.parked=null;frame.budget=false;
    }
    skipBudget=false;
    switch(pc) {
    case 0:

    memoryASet16(r.ds, 0x5acb, 0x01f4);
case 0x1c964:
    frame.pc=2097153;
case 2097153:
yield* sub_1c99e();
frame.pc=2097154;
case 2097154:;
    memoryASet16(r.ds, 0x5acb, memoryAGet16(r.ds, 0x5acb) - 0x001e);
    if (memoryAGet16(r.ds, 0x5acb) > 0x00c8)
        { pc = 0x1c964; continue dispatch; }
    memoryASet16(r.ds, 0x5acb, 0x01f4);
case 0x1c97a:
    frame.pc=2097155;
case 2097155:
yield* sub_1c99e();
frame.pc=2097156;
case 2097156:;
    memoryASet16(r.ds, 0x5acb, memoryAGet16(r.ds, 0x5acb) - 0x0014);
    if (memoryAGet16(r.ds, 0x5acb) > 0x012c)
        { pc = 0x1c97a; continue dispatch; }
case 0x1c98a:
    frame.pc=2097157;
case 2097157:
yield* sub_1c99e();
frame.pc=2097158;
case 2097158:;
    memoryASet16(r.ds, 0x5acb, memoryAGet16(r.ds, 0x5acb) + 0x001e);
    if (memoryAGet16(r.ds, 0x5acb) < 0x0320)
        { pc = 0x1c98a; continue dispatch; }
    frame.pc=2097159;
case 2097159:
yield* sub_1cd51();
frame.pc=2097160;
case 2097160:;

      return;
    default: throw new Error("Invalid control flow in sub_1c95e");
    }
  }
  } finally {execution.leave(frame);}
}

function* sub_1c99e() {
  let pc=0;
  const frame=execution.enter('sub_1c99e',pc);pc=frame.pc;
  let skipBudget=frame.budget || execution.restoring;
  try {
  if(execution.restoring && execution.pending.length===0) {
    execution.restoring=false;
    if(frame.parked!==null) {yield frame.parked;frame.parked=null;frame.budget=false;}
  }
  dispatch: while (true) {
    if (!skipBudget && (++game.steps & 1023) === 0) {
      frame.pc=pc;frame.budget=true;frame.parked=0;yield 0;
      frame.parked=null;frame.budget=false;
    }
    skipBudget=false;
    switch(pc) {
    case 0:

    r.cx = 0x1000;
    if (memoryAGet(r.ds, 0x0697) != 0xfd)
        { pc = 0x1c9aa; continue dispatch; }
    r.cx >>= 1;
case 0x1c9aa:
    if (--r.cx)
        { pc = 0x1c9aa; continue dispatch; }
    if (memoryAGet(r.ds, 0x0000) == 0x00)
        return;
    r.al = 0xb6;
    out(0x43, r.al);
    r.ax = memoryAGet16(r.ds, 0x5acb);
    out(0x42, r.al);
    r.al = r.ah;
    out(0x42, r.al);
    r.al = portRead(0x61);
    r.al |= 0x03;
    out(0x61, r.al);

      return;
    default: throw new Error("Invalid control flow in sub_1c99e");
    }
  }
  } finally {execution.leave(frame);}
}

function* sub_1c9c7() {
  let pc=0;
  const frame=execution.enter('sub_1c9c7',pc);pc=frame.pc;
  let skipBudget=frame.budget || execution.restoring;
  try {
  if(execution.restoring && execution.pending.length===0) {
    execution.restoring=false;
    if(frame.parked!==null) {yield frame.parked;frame.parked=null;frame.budget=false;}
  }
  dispatch: while (true) {
    if (!skipBudget && (++game.steps & 1023) === 0) {
      frame.pc=pc;frame.budget=true;frame.parked=0;yield 0;
      frame.parked=null;frame.budget=false;
    }
    skipBudget=false;
    switch(pc) {
    case 0:

    frame.pc=2097153;
case 2097153:
yield* sub_1cd51();
frame.pc=2097154;
case 2097154:;
    memoryASet(r.ds, 0x5acf, 0x00);
    memoryASet16(r.ds, 0x5acd, 0x0008);

      return;
    default: throw new Error("Invalid control flow in sub_1c9c7");
    }
  }
  } finally {execution.leave(frame);}
}

function* sub_1c9d6() {
  let pc=0;
  const frame=execution.enter('sub_1c9d6',pc);pc=frame.pc;
  let skipBudget=frame.budget || execution.restoring;
  try {
  if(execution.restoring && execution.pending.length===0) {
    execution.restoring=false;
    if(frame.parked!==null) {yield frame.parked;frame.parked=null;frame.budget=false;}
  }
  dispatch: while (true) {
    if (!skipBudget && (++game.steps & 1023) === 0) {
      frame.pc=pc;frame.budget=true;frame.parked=0;yield 0;
      frame.parked=null;frame.budget=false;
    }
    skipBudget=false;
    switch(pc) {
    case 0:

    memoryASet(r.ds, 0x5acf, memoryAGet(r.ds, 0x5acf) + 1);
    r.dl = 0;
    r.al = memoryAGet(r.ds, 0x5acf);
    r.al &= 0x3f;
    if (r.al != 0)
        { pc = 0x1c9e7; continue dispatch; }
    memoryASet16(r.ds, 0x5acd, memoryAGet16(r.ds, 0x5acd) + 1);
case 0x1c9e7:
    r.bx = memoryAGet16(r.ds, 0x5acd);
    r.cl = 0x02;
    r.bx >>= r.cl;
    r.bl &= 0x1f;
    if (r.al < r.bl)
        { pc = 0x1c9f8; continue dispatch; }
    r.dl = 0x02;
case 0x1c9f8:
    r.dl &= memoryAGet(r.ds, 0x0000);
    r.al = portRead(0x61);
    r.al &= 0xfd;
    r.al |= r.dl;
    out(0x61, r.al);

      return;
    default: throw new Error("Invalid control flow in sub_1c9d6");
    }
  }
  } finally {execution.leave(frame);}
}

function* sub_1ca05() {
  let pc=0;
  const frame=execution.enter('sub_1ca05',pc);pc=frame.pc;
  let skipBudget=frame.budget || execution.restoring;
  try {
  if(execution.restoring && execution.pending.length===0) {
    execution.restoring=false;
    if(frame.parked!==null) {yield frame.parked;frame.parked=null;frame.budget=false;}
  }
  dispatch: while (true) {
    if (!skipBudget && (++game.steps & 1023) === 0) {
      frame.pc=pc;frame.budget=true;frame.parked=0;yield 0;
      frame.parked=null;frame.budget=false;
    }
    skipBudget=false;
    switch(pc) {
    case 0:

    memoryASet16(r.ds, 0x5a85, 0x0000);
    r.ah = 0;
    frame.pc=2097153;
case 2097153:
yield* interrupt(0x1a);
frame.pc=2097154;
case 2097154:;
    memoryASet16(r.ds, 0x5a83, r.dx);

      return;
    default: throw new Error("Invalid control flow in sub_1ca05");
    }
  }
  } finally {execution.leave(frame);}
}

function* sub_1ca14() {
  let pc=0;
  const frame=execution.enter('sub_1ca14',pc);pc=frame.pc;
  let skipBudget=frame.budget || execution.restoring;
  try {
  if(execution.restoring && execution.pending.length===0) {
    execution.restoring=false;
    if(frame.parked!==null) {yield frame.parked;frame.parked=null;frame.budget=false;}
  }
  dispatch: while (true) {
    if (!skipBudget && (++game.steps & 1023) === 0) {
      frame.pc=pc;frame.budget=true;frame.parked=0;yield 0;
      frame.parked=null;frame.budget=false;
    }
    skipBudget=false;
    switch(pc) {
    case 0:

    if (memoryAGet(r.ds, 0x0000) == 0x00)
        return;
    r.ah = 0;
    frame.pc=2097153;
case 2097153:
yield* interrupt(0x1a);
frame.pc=2097154;
case 2097154:;
    r.ax = r.dx;
    r.ax -= memoryAGet16(r.ds, 0x5a83);
    if (r.ax < 0x0002)
        return;
    memoryASet16(r.ds, 0x5a83, r.dx);
    r.bx = memoryAGet16(r.ds, 0x5a85);
    memoryASet16(r.ds, 0x5a85, memoryAGet16(r.ds, 0x5a85) + 0x0002);
    if (memoryAGet(r.ds, 0x0552) == 0x00)
        { pc = 0x1ca4b; continue dispatch; }
    r.ax = memoryAGet16(r.ds, r.bx + 23203);
    if (r.ax != 0x0000)
        { pc = 0x1ca4f; continue dispatch; }
    frame.pc=2097155;
case 2097155:
yield* sub_1cd51();
frame.pc=2097156;
case 2097156:;
    return;
case 0x1ca4b:
    r.ax = memoryAGet16(r.ds, r.bx + 23175);
case 0x1ca4f:
    push(r.ax);
    r.al = 0xb6;
    out(0x43, r.al);
    r.ax = pop();
    frame.pc=2097157;
case 2097157:
yield* sub_1cab9();
frame.pc=2097158;
case 2097158:;

      return;
    default: throw new Error("Invalid control flow in sub_1ca14");
    }
  }
  } finally {execution.leave(frame);}
}

function* sub_1ca59() {
  let pc=0;
  const frame=execution.enter('sub_1ca59',pc);pc=frame.pc;
  let skipBudget=frame.budget || execution.restoring;
  try {
  if(execution.restoring && execution.pending.length===0) {
    execution.restoring=false;
    if(frame.parked!==null) {yield frame.parked;frame.parked=null;frame.budget=false;}
  }
  dispatch: while (true) {
    if (!skipBudget && (++game.steps & 1023) === 0) {
      frame.pc=pc;frame.budget=true;frame.parked=0;yield 0;
      frame.parked=null;frame.budget=false;
    }
    skipBudget=false;
    switch(pc) {
    case 0:

    memoryASet16(r.ds, 0x5a62, 0x0000);
    memoryASet(r.ds, 0x5a82, 0x00);

      return;
    default: throw new Error("Invalid control flow in sub_1ca59");
    }
  }
  } finally {execution.leave(frame);}
}

function* sub_1ca65() {
  let pc=0;
  const frame=execution.enter('sub_1ca65',pc);pc=frame.pc;
  let skipBudget=frame.budget || execution.restoring;
  try {
  if(execution.restoring && execution.pending.length===0) {
    execution.restoring=false;
    if(frame.parked!==null) {yield frame.parked;frame.parked=null;frame.budget=false;}
  }
  dispatch: while (true) {
    if (!skipBudget && (++game.steps & 1023) === 0) {
      frame.pc=pc;frame.budget=true;frame.parked=0;yield 0;
      frame.parked=null;frame.budget=false;
    }
    skipBudget=false;
    switch(pc) {
    case 0:

    if (memoryAGet(r.ds, 0x0000) == 0x00)
        { pc = 0x1ca76; continue dispatch; }
    r.ah = 0;
    frame.pc=2097153;
case 2097153:
yield* interrupt(0x1a);
frame.pc=2097154;
case 2097154:;
    if (r.dx != memoryAGet16(r.ds, 0x5a80))
        { pc = 0x1ca77; continue dispatch; }
case 0x1ca76:
    return;
case 0x1ca77:
    memoryASet16(r.ds, 0x5a80, r.dx);
    memoryASet(r.ds, 0x5a82, memoryAGet(r.ds, 0x5a82) + 1);
    r.al = 0xb6;
    out(0x43, r.al);
    r.bx = memoryAGet16(r.ds, 0x5a62);
    if (memoryAGet(r.ds, 0x5a82) & 0x01)
        { pc = 0x1ca91; continue dispatch; }
    r.bx += 0x0002;
case 0x1ca91:
    r.ax = memoryAGet16(r.ds, r.bx + 23140);
    frame.pc=2097155;
case 2097155:
yield* sub_1cab9();
frame.pc=2097156;
case 2097156:;

      return;
    default: throw new Error("Invalid control flow in sub_1ca65");
    }
  }
  } finally {execution.leave(frame);}
}

function* sub_1ca99() {
  let pc=0;
  const frame=execution.enter('sub_1ca99',pc);pc=frame.pc;
  let skipBudget=frame.budget || execution.restoring;
  try {
  if(execution.restoring && execution.pending.length===0) {
    execution.restoring=false;
    if(frame.parked!==null) {yield frame.parked;frame.parked=null;frame.budget=false;}
  }
  dispatch: while (true) {
    if (!skipBudget && (++game.steps & 1023) === 0) {
      frame.pc=pc;frame.budget=true;frame.parked=0;yield 0;
      frame.parked=null;frame.budget=false;
    }
    skipBudget=false;
    switch(pc) {
    case 0:

    if (memoryAGet(r.ds, 0x0000) == 0x00)
        return;
    push(r.bx);
    push(r.ax);
    r.al = 0xb6;
    out(0x43, r.al);
    r.bx = memoryAGet16(r.ds, 0x5a62);
    memoryASet16(r.ds, 0x5a62, memoryAGet16(r.ds, 0x5a62) + 0x0002);
    r.ax = memoryAGet16(r.ds, r.bx + 23140);
    frame.pc=2097153;
case 2097153:
yield* sub_1cab9();
frame.pc=2097154;
case 2097154:;
    r.ax = pop();
    r.bx = pop();

      return;
    default: throw new Error("Invalid control flow in sub_1ca99");
    }
  }
  } finally {execution.leave(frame);}
}

function* sub_1cab9() {
  let pc=0;
  const frame=execution.enter('sub_1cab9',pc);pc=frame.pc;
  let skipBudget=frame.budget || execution.restoring;
  try {
  if(execution.restoring && execution.pending.length===0) {
    execution.restoring=false;
    if(frame.parked!==null) {yield frame.parked;frame.parked=null;frame.budget=false;}
  }
  dispatch: while (true) {
    if (!skipBudget && (++game.steps & 1023) === 0) {
      frame.pc=pc;frame.budget=true;frame.parked=0;yield 0;
      frame.parked=null;frame.budget=false;
    }
    skipBudget=false;
    switch(pc) {
    case 0:

    out(0x42, r.al);
    r.al = r.ah;
    out(0x42, r.al);
    r.al = portRead(0x61);
    r.al |= 0x03;
    out(0x61, r.al);

      return;
    default: throw new Error("Invalid control flow in sub_1cab9");
    }
  }
  } finally {execution.leave(frame);}
}

function* sub_1cac6() {
  let pc=0;
  const frame=execution.enter('sub_1cac6',pc);pc=frame.pc;
  let skipBudget=frame.budget || execution.restoring;
  try {
  if(execution.restoring && execution.pending.length===0) {
    execution.restoring=false;
    if(frame.parked!==null) {yield frame.parked;frame.parked=null;frame.budget=false;}
  }
  dispatch: while (true) {
    if (!skipBudget && (++game.steps & 1023) === 0) {
      frame.pc=pc;frame.budget=true;frame.parked=0;yield 0;
      frame.parked=null;frame.budget=false;
    }
    skipBudget=false;
    switch(pc) {
    case 0:


      return;
    default: throw new Error("Invalid control flow in sub_1cac6");
    }
  }
  } finally {execution.leave(frame);}
}

function* sub_1cac7() {
  let pc=0;
  const frame=execution.enter('sub_1cac7',pc);pc=frame.pc;
  let skipBudget=frame.budget || execution.restoring;
  try {
  if(execution.restoring && execution.pending.length===0) {
    execution.restoring=false;
    if(frame.parked!==null) {yield frame.parked;frame.parked=null;frame.budget=false;}
  }
  dispatch: while (true) {
    if (!skipBudget && (++game.steps & 1023) === 0) {
      frame.pc=pc;frame.budget=true;frame.parked=0;yield 0;
      frame.parked=null;frame.budget=false;
    }
    skipBudget=false;
    switch(pc) {
    case 0:

    if (memoryAGet(r.ds, 0x0000) == 0x00)
        return;
    push(r.ax);
    push(r.cx);
    push(r.dx);
    r.al = 0xb6;
    out(0x43, r.al);
    r.bx = memoryAGet16(r.ds, 0x5a56);
    r.bx &= 0x0006;
    memoryASet16(r.ds, 0x5a56, memoryAGet16(r.ds, 0x5a56) + 0x0002);
    r.ax = memoryAGet16(r.ds, r.bx + 23130);
    frame.pc=2097153;
case 2097153:
yield* sub_1cab9();
frame.pc=2097154;
case 2097154:;
    r.dx = pop();
    r.cx = pop();
    r.ax = pop();

      return;
    default: throw new Error("Invalid control flow in sub_1cac7");
    }
  }
  } finally {execution.leave(frame);}
}

function* sub_1caed() {
  let pc=0;
  const frame=execution.enter('sub_1caed',pc);pc=frame.pc;
  let skipBudget=frame.budget || execution.restoring;
  try {
  if(execution.restoring && execution.pending.length===0) {
    execution.restoring=false;
    if(frame.parked!==null) {yield frame.parked;frame.parked=null;frame.budget=false;}
  }
  dispatch: while (true) {
    if (!skipBudget && (++game.steps & 1023) === 0) {
      frame.pc=pc;frame.budget=true;frame.parked=0;yield 0;
      frame.parked=null;frame.budget=false;
    }
    skipBudget=false;
    switch(pc) {
    case 0:

    memoryASet(r.ds, 0x5927, 0x80);
    memoryASet(r.ds, 0x5928, 0x00);
    memoryASet(r.ds, 0x5929, 0x00);
    memoryASet16(r.ds, 0x592a, 0x0500);
    memoryASet(r.ds, 0x592c, 0xff);
    memoryASet(r.ds, 0x592d, 0x00);
    memoryASet(r.ds, 0x5920, 0x00);
    memoryASet(r.ds, 0x5b07, 0x00);
    memoryASet16(r.ds, 0x5b08, 0x0000);
    memoryASet16(r.ds, 0x5b0c, 0x0001);
    memoryASet(r.ds, 0x5b0e, 0x01);

      return;
    default: throw new Error("Invalid control flow in sub_1caed");
    }
  }
  } finally {execution.leave(frame);}
}

function* sub_1cb28() {
  let pc=0;
  const frame=execution.enter('sub_1cb28',pc);pc=frame.pc;
  let skipBudget=frame.budget || execution.restoring;
  try {
  if(execution.restoring && execution.pending.length===0) {
    execution.restoring=false;
    if(frame.parked!==null) {yield frame.parked;frame.parked=null;frame.budget=false;}
  }
  dispatch: while (true) {
    if (!skipBudget && (++game.steps & 1023) === 0) {
      frame.pc=pc;frame.budget=true;frame.parked=0;yield 0;
      frame.parked=null;frame.budget=false;
    }
    skipBudget=false;
    switch(pc) {
    case 0:

    if (memoryAGet(r.ds, 0x1cbf) != 0x00)
        { pc = 0x1cb38; continue dispatch; }
    r.bx = 0x0390;
    r.cx = 0x1800;
    frame.pc=2097153;
case 2097153:
yield* sub_1cbd3();
frame.pc=2097154;
case 2097154:;
case 0x1cb38:
    memoryASet(r.ds, 0x127c, 0x00);

      return;
    default: throw new Error("Invalid control flow in sub_1cb28");
    }
  }
  } finally {execution.leave(frame);}
}

function* sub_1cb3e() {
  let pc=0;
  const frame=execution.enter('sub_1cb3e',pc);pc=frame.pc;
  let skipBudget=frame.budget || execution.restoring;
  try {
  if(execution.restoring && execution.pending.length===0) {
    execution.restoring=false;
    if(frame.parked!==null) {yield frame.parked;frame.parked=null;frame.budget=false;}
  }
  dispatch: while (true) {
    if (!skipBudget && (++game.steps & 1023) === 0) {
      frame.pc=pc;frame.budget=true;frame.parked=0;yield 0;
      frame.parked=null;frame.budget=false;
    }
    skipBudget=false;
    switch(pc) {
    case 0:

    if (memoryAGet(r.ds, 0x1cbf) != 0x00)
        return;
    r.bx = 0x0400;
    r.cx = 0x1800;
    frame.pc=2097153;
case 2097153:
yield* sub_1cbd3();
frame.pc=2097154;
case 2097154:;

      return;
    default: throw new Error("Invalid control flow in sub_1cb3e");
    }
  }
  } finally {execution.leave(frame);}
}

function* sub_1cb4f() {
  let pc=0;
  const frame=execution.enter('sub_1cb4f',pc);pc=frame.pc;
  let skipBudget=frame.budget || execution.restoring;
  try {
  if(execution.restoring && execution.pending.length===0) {
    execution.restoring=false;
    if(frame.parked!==null) {yield frame.parked;frame.parked=null;frame.budget=false;}
  }
  dispatch: while (true) {
    if (!skipBudget && (++game.steps & 1023) === 0) {
      frame.pc=pc;frame.budget=true;frame.parked=0;yield 0;
      frame.parked=null;frame.budget=false;
    }
    skipBudget=false;
    switch(pc) {
    case 0:

    r.bx = 0x07d0;
    r.cx = 0x1800;
    frame.pc=2097153;
case 2097153:
yield* sub_1cbd3();
frame.pc=2097154;
case 2097154:;
    r.bx = 0x0a6e;
    r.cx = 0x1800;
    frame.pc=2097155;
case 2097155:
yield* sub_1cbd3();
frame.pc=2097156;
case 2097156:;
    r.bx = 0x0dec;
    r.cx = 0x1800;
    frame.pc=2097157;
case 2097157:
yield* sub_1cbd3();
frame.pc=2097158;
case 2097158:;

      return;
    default: throw new Error("Invalid control flow in sub_1cb4f");
    }
  }
  } finally {execution.leave(frame);}
}

function* sub_1cb6b() {
  let pc=0;
  const frame=execution.enter('sub_1cb6b',pc);pc=frame.pc;
  let skipBudget=frame.budget || execution.restoring;
  try {
  if(execution.restoring && execution.pending.length===0) {
    execution.restoring=false;
    if(frame.parked!==null) {yield frame.parked;frame.parked=null;frame.budget=false;}
  }
  dispatch: while (true) {
    if (!skipBudget && (++game.steps & 1023) === 0) {
      frame.pc=pc;frame.budget=true;frame.parked=0;yield 0;
      frame.parked=null;frame.budget=false;
    }
    skipBudget=false;
    switch(pc) {
    case 0:

    if (memoryAGet(r.ds, 0x0000) == 0x00)
        return;
    memoryASet16(r.ds, 0x5923, r.bx);
    push(r.ax);
    r.al = 0xb6;
    out(0x43, r.al);
    r.ax = pop();
    frame.pc=2097153;
case 2097153:
yield* sub_1cab9();
frame.pc=2097154;
case 2097154:;
    memoryASet(r.ds, 0x5920, 0x02);
    r.ah = 0;
    frame.pc=2097155;
case 2097155:
yield* interrupt(0x1a);
frame.pc=2097156;
case 2097156:;
    memoryASet16(r.ds, 0x5921, r.dx);

      return;
    default: throw new Error("Invalid control flow in sub_1cb6b");
    }
  }
  } finally {execution.leave(frame);}
}

function* sub_1cb8d() {
  let pc=0;
  const frame=execution.enter('sub_1cb8d',pc);pc=frame.pc;
  let skipBudget=frame.budget || execution.restoring;
  try {
  if(execution.restoring && execution.pending.length===0) {
    execution.restoring=false;
    if(frame.parked!==null) {yield frame.parked;frame.parked=null;frame.budget=false;}
  }
  dispatch: while (true) {
    if (!skipBudget && (++game.steps & 1023) === 0) {
      frame.pc=pc;frame.budget=true;frame.parked=0;yield 0;
      frame.parked=null;frame.budget=false;
    }
    skipBudget=false;
    switch(pc) {
    case 0:

    if (memoryAGet(r.ds, 0x0000) == 0x00)
        return;
    if (memoryAGet(r.ds, 0x5920) != 0x00)
        return;
    frame.pc=2097153;
case 2097153:
yield* sub_1a02d();
frame.pc=2097154;
case 2097154:;
    r.ax = r.dx;
    r.ax &= 0x007f;
    r.ax += 0x00aa;
    r.bx = r.ax;
    r.ax += 0x001e;
    frame.pc=2097155;
case 2097155:
yield* sub_1cb6b();
frame.pc=2097156;
case 2097156:;

      return;
    default: throw new Error("Invalid control flow in sub_1cb8d");
    }
  }
  } finally {execution.leave(frame);}
}

function* sub_1cbaf() {
  let pc=0;
  const frame=execution.enter('sub_1cbaf',pc);pc=frame.pc;
  let skipBudget=frame.budget || execution.restoring;
  try {
  if(execution.restoring && execution.pending.length===0) {
    execution.restoring=false;
    if(frame.parked!==null) {yield frame.parked;frame.parked=null;frame.budget=false;}
  }
  dispatch: while (true) {
    if (!skipBudget && (++game.steps & 1023) === 0) {
      frame.pc=pc;frame.budget=true;frame.parked=0;yield 0;
      frame.parked=null;frame.budget=false;
    }
    skipBudget=false;
    switch(pc) {
    case 0:

    if (memoryAGet(r.ds, 0x0000) == 0x00)
        return;
    r.ax = 0x1200;
    r.bx = 0x1312;
    r.ax += memoryAGet16(r.ds, 0x5b08);
    r.bx += memoryAGet16(r.ds, 0x5b08);
    memoryASet16(r.ds, 0x5b08, memoryAGet16(r.ds, 0x5b08) + 0x015e);
    frame.pc=2097153;
case 2097153:
yield* sub_1cb6b();
frame.pc=2097154;
case 2097154:;
    memoryASet(r.ds, 0x5b07, 0x18);

      return;
    default: throw new Error("Invalid control flow in sub_1cbaf");
    }
  }
  } finally {execution.leave(frame);}
}

function* sub_1cbd3() {
  let pc=0;
  const frame=execution.enter('sub_1cbd3',pc);pc=frame.pc;
  let skipBudget=frame.budget || execution.restoring;
  try {
  if(execution.restoring && execution.pending.length===0) {
    execution.restoring=false;
    if(frame.parked!==null) {yield frame.parked;frame.parked=null;frame.budget=false;}
  }
  dispatch: while (true) {
    if (!skipBudget && (++game.steps & 1023) === 0) {
      frame.pc=pc;frame.budget=true;frame.parked=0;yield 0;
      frame.parked=null;frame.budget=false;
    }
    skipBudget=false;
    switch(pc) {
    case 0:

    if (memoryAGet(r.ds, 0x0000) == 0x00)
        return;
    r.al = 0xb6;
    out(0x43, r.al);
    r.ax = r.bx;
    out(0x42, r.al);
    r.al = r.ah;
    out(0x42, r.al);
    r.al = portRead(0x61);
    r.al |= 0x03;
    out(0x61, r.al);
    if (memoryAGet(r.ds, 0x0697) != 0xfd)
        { pc = 0x1cbf5; continue dispatch; }
    r.cx >>= 1;
case 0x1cbf5:
    if (--r.cx)
        { pc = 0x1cbf5; continue dispatch; }
    frame.pc=2097153;
case 2097153:
yield* sub_1cd51();
frame.pc=2097154;
case 2097154:;

      return;
    default: throw new Error("Invalid control flow in sub_1cbd3");
    }
  }
  } finally {execution.leave(frame);}
}

function* sub_1cbfb() {
  let pc=0;
  const frame=execution.enter('sub_1cbfb',pc);pc=frame.pc;
  let skipBudget=frame.budget || execution.restoring;
  try {
  if(execution.restoring && execution.pending.length===0) {
    execution.restoring=false;
    if(frame.parked!==null) {yield frame.parked;frame.parked=null;frame.budget=false;}
  }
  dispatch: while (true) {
    if (!skipBudget && (++game.steps & 1023) === 0) {
      frame.pc=pc;frame.budget=true;frame.parked=0;yield 0;
      frame.parked=null;frame.budget=false;
    }
    skipBudget=false;
    switch(pc) {
    case 0:

    r.al = portRead(0x61);
    r.al &= 0xfe;
    out(0x61, r.al);
    r.ah = 0;
    frame.pc=2097153;
case 2097153:
yield* interrupt(0x1a);
frame.pc=2097154;
case 2097154:;
    memoryASet16(r.ds, 0x5a40, r.dx);
    memoryASet16(r.ds, 0x5a42, 0x0000);
case 0x1cc0f:
    r.ax = memoryAGet16(r.ds, 0x5a42);
    r.cl = 0x06;
    r.ax >>= r.cl;
    if (r.ax != 0)
        { pc = 0x1cc19; continue dispatch; }
    r.ax++;
case 0x1cc19:
    r.cx = r.ax;
case 0x1cc1b:
    push(r.cx);
    r.ah = 0;
    frame.pc=2097155;
case 2097155:
yield* interrupt(0x1a);
frame.pc=2097156;
case 2097156:;
    r.cx = pop();
    r.dx -= memoryAGet16(r.ds, 0x5a40);
    if (r.dx < 0x0002)
        { pc = 0x1cc1b; continue dispatch; }
    if (r.dx >= 0x0007)
        { pc = 0x1cc48; continue dispatch; }
    if (--r.cx)
        { pc = 0x1cc1b; continue dispatch; }
    frame.pc=2097157;
case 2097157:
yield* sub_1a02d();
frame.pc=2097158;
case 2097158:;
    r.dl &= 0x02;
    r.dl &= memoryAGet(r.ds, 0x0000);
    r.al = portRead(0x61);
    r.al ^= r.dl;
    out(0x61, r.al);
    memoryASet16(r.ds, 0x5a42, memoryAGet16(r.ds, 0x5a42) + 0x0007);
    { pc = 0x1cc0f; continue dispatch; }
case 0x1cc48:
    frame.pc=2097159;
case 2097159:
yield* sub_1cd51();
frame.pc=2097160;
case 2097160:;

      return;
    default: throw new Error("Invalid control flow in sub_1cbfb");
    }
  }
  } finally {execution.leave(frame);}
}

function* sub_1cc4c() {
  let pc=0;
  const frame=execution.enter('sub_1cc4c',pc);pc=frame.pc;
  let skipBudget=frame.budget || execution.restoring;
  try {
  if(execution.restoring && execution.pending.length===0) {
    execution.restoring=false;
    if(frame.parked!==null) {yield frame.parked;frame.parked=null;frame.budget=false;}
  }
  dispatch: while (true) {
    if (!skipBudget && (++game.steps & 1023) === 0) {
      frame.pc=pc;frame.budget=true;frame.parked=0;yield 0;
      frame.parked=null;frame.budget=false;
    }
    skipBudget=false;
    switch(pc) {
    case 0:

    if (memoryAGet(r.ds, 0x0000) == 0x00)
        { pc = 0x1cc64; continue dispatch; }
    frame.pc=2097153;
case 2097153:
yield* sub_185e7();
frame.pc=2097154;
case 2097154:;
    r.bx = memoryAGet16(r.ds, 0x5a16);
    r.tx = r.bx;
    r.bx -= r.ax;
    if (r.tx < r.ax)
        { pc = 0x1cc65; continue dispatch; }
    if (r.bx > 0x0260)
        { pc = 0x1cc65; continue dispatch; }
case 0x1cc64:
    return;
case 0x1cc65:
    memoryASet16(r.ds, 0x5a16, r.ax);
    r.al = 0xb6;
    out(0x43, r.al);
    memoryASet16(r.ds, 0x5a18, memoryAGet16(r.ds, 0x5a18) + 1);
    r.bx = memoryAGet16(r.ds, 0x5a18);
    r.bx &= 0x001e;
    r.ax = memoryAGet16(r.ds, 0x5a3c);
    r.ax &= 0x03ff;
    if (r.ax < 0x0180)
        { pc = 0x1cc89; continue dispatch; }
    r.cx = 0x0180;
    r.cx -= r.ax;
    r.tx = r.cx;
    r.cx = r.ax;
    r.ax = r.tx;
case 0x1cc89:
    r.ax >>= 1;
    r.ax >>= 1;
    r.ax += memoryAGet16(r.ds, r.bx + 23066);
    r.bx = 0x0001;
    if (memoryAGet(r.ds, 0x0697) != 0xfd)
        { pc = 0x1cc9d; continue dispatch; }
    r.bl <<= 1;
case 0x1cc9d:
    memoryASet16(r.ds, 0x5a3e, memoryAGet16(r.ds, 0x5a3e) + r.bx);
    r.bx <<= 1;
    r.bx <<= 1;
    memoryASet16(r.ds, 0x5a3c, memoryAGet16(r.ds, 0x5a3c) + r.bx);
    r.dx = memoryAGet16(r.ds, 0x5a3e);
    r.cl = 0x03;
    r.dx >>= r.cl;
    r.ax += r.dx;
    out(0x42, r.al);
    r.al = r.ah;
    out(0x42, r.al);
    r.al = portRead(0x61);
    r.al |= 0x03;
    out(0x61, r.al);

      return;
    default: throw new Error("Invalid control flow in sub_1cc4c");
    }
  }
  } finally {execution.leave(frame);}
}

function* sub_1ccc0() {
  let pc=0;
  const frame=execution.enter('sub_1ccc0',pc);pc=frame.pc;
  let skipBudget=frame.budget || execution.restoring;
  try {
  if(execution.restoring && execution.pending.length===0) {
    execution.restoring=false;
    if(frame.parked!==null) {yield frame.parked;frame.parked=null;frame.budget=false;}
  }
  dispatch: while (true) {
    if (!skipBudget && (++game.steps & 1023) === 0) {
      frame.pc=pc;frame.budget=true;frame.parked=0;yield 0;
      frame.parked=null;frame.budget=false;
    }
    skipBudget=false;
    switch(pc) {
    case 0:

    if (memoryAGet(r.ds, 0x0000) == 0x00)
        { pc = 0x1ccd1; continue dispatch; }
    r.ah = 0;
    frame.pc=2097153;
case 2097153:
yield* interrupt(0x1a);
frame.pc=2097154;
case 2097154:;
    if (r.dx != memoryAGet16(r.ds, 0x5a14))
        { pc = 0x1ccd2; continue dispatch; }
case 0x1ccd1:
    return;
case 0x1ccd2:
    memoryASet16(r.ds, 0x5a14, r.dx);
    r.al = 0xb6;
    out(0x43, r.al);
    frame.pc=2097155;
case 2097155:
yield* sub_1a02d();
frame.pc=2097156;
case 2097156:;
    r.ax = r.dx;
    r.ax &= 0x0070;
    r.ax += 0x0200;
    out(0x42, r.al);
    r.al = r.ah;
    out(0x42, r.al);
    r.al = portRead(0x61);
    r.al |= 0x03;
    out(0x61, r.al);

      return;
    default: throw new Error("Invalid control flow in sub_1ccc0");
    }
  }
  } finally {execution.leave(frame);}
}

function* sub_1ccf2() {
  let pc=0;
  const frame=execution.enter('sub_1ccf2',pc);pc=frame.pc;
  let skipBudget=frame.budget || execution.restoring;
  try {
  if(execution.restoring && execution.pending.length===0) {
    execution.restoring=false;
    if(frame.parked!==null) {yield frame.parked;frame.parked=null;frame.budget=false;}
  }
  dispatch: while (true) {
    if (!skipBudget && (++game.steps & 1023) === 0) {
      frame.pc=pc;frame.budget=true;frame.parked=0;yield 0;
      frame.parked=null;frame.budget=false;
    }
    skipBudget=false;
    switch(pc) {
    case 0:

    memoryASet16(r.ds, 0x5a12, 0x0338);
    r.ah = 0;
    frame.pc=2097153;
case 2097153:
yield* interrupt(0x1a);
frame.pc=2097154;
case 2097154:;
    memoryASet16(r.ds, 0x5a10, r.dx);
    frame.pc=2097155;
case 2097155:
yield* sub_185e7();
frame.pc=2097156;
case 2097156:;
    memoryASet16(r.ds, 0x5a0e, r.ax);
case 0x1cd06:
    frame.pc=2097157;
case 2097157:
yield* sub_185e7();
frame.pc=2097158;
case 2097158:;
    r.dx = r.ax;
    r.ax -= memoryAGet16(r.ds, 0x5a0e);
    if (r.ax < 0x9c40)
        { pc = 0x1cd40; continue dispatch; }
    memoryASet16(r.ds, 0x5a0e, r.dx);
    if (memoryAGet(r.ds, 0x0000) == 0x00)
        { pc = 0x1cd40; continue dispatch; }
    r.al = 0xb6;
    out(0x43, r.al);
    frame.pc=2097159;
case 2097159:
yield* sub_1a02d();
frame.pc=2097160;
case 2097160:;
    r.ax = r.dx;
    r.ax &= 0x07ff;
    r.ax += memoryAGet16(r.ds, 0x5a12);
    memoryASet16(r.ds, 0x5a12, memoryAGet16(r.ds, 0x5a12) - 0x0002);
    out(0x42, r.al);
    r.al = r.ah;
    out(0x42, r.al);
    r.al = portRead(0x61);
    r.al |= 0x03;
    out(0x61, r.al);
case 0x1cd40:
    r.ah = 0;
    frame.pc=2097161;
case 2097161:
yield* interrupt(0x1a);
frame.pc=2097162;
case 2097162:;
    r.dx -= memoryAGet16(r.ds, 0x5a10);
    if (r.dx < 0x0002)
        { pc = 0x1cd06; continue dispatch; }
    frame.pc=2097163;
case 2097163:
yield* sub_1cd51();
frame.pc=2097164;
case 2097164:;

      return;
    default: throw new Error("Invalid control flow in sub_1ccf2");
    }
  }
  } finally {execution.leave(frame);}
}

function* sub_1cd51() {
  let pc=0;
  const frame=execution.enter('sub_1cd51',pc);pc=frame.pc;
  let skipBudget=frame.budget || execution.restoring;
  try {
  if(execution.restoring && execution.pending.length===0) {
    execution.restoring=false;
    if(frame.parked!==null) {yield frame.parked;frame.parked=null;frame.budget=false;}
  }
  dispatch: while (true) {
    if (!skipBudget && (++game.steps & 1023) === 0) {
      frame.pc=pc;frame.budget=true;frame.parked=0;yield 0;
      frame.parked=null;frame.budget=false;
    }
    skipBudget=false;
    switch(pc) {
    case 0:

    r.al = portRead(0x61);
    r.al &= 0xfc;
    out(0x61, r.al);

      return;
    default: throw new Error("Invalid control flow in sub_1cd51");
    }
  }
  } finally {execution.leave(frame);}
}

function* sub_1cd58() {
  let pc=0;
  const frame=execution.enter('sub_1cd58',pc);pc=frame.pc;
  let skipBudget=frame.budget || execution.restoring;
  try {
  if(execution.restoring && execution.pending.length===0) {
    execution.restoring=false;
    if(frame.parked!==null) {yield frame.parked;frame.parked=null;frame.budget=false;}
  }
  dispatch: while (true) {
    if (!skipBudget && (++game.steps & 1023) === 0) {
      frame.pc=pc;frame.budget=true;frame.parked=0;yield 0;
      frame.parked=null;frame.budget=false;
    }
    skipBudget=false;
    switch(pc) {
    case 0:

    r.al = 0xb6;
    out(0x43, r.al);
    r.ax = memoryAGet16(r.ds, 0x592a);
    out(0x42, r.al);
    r.al = r.ah;
    out(0x42, r.al);
    r.al = portRead(0x61);
    r.al |= 0x03;
    out(0x61, r.al);
    frame.pc=2097153;
case 2097153:
yield* sub_185e7();
frame.pc=2097154;
case 2097154:;
    r.cx = r.ax;
case 0x1cd70:
    frame.pc=2097155;
case 2097155:
yield* sub_185e7();
frame.pc=2097156;
case 2097156:;
    r.dx = r.cx;
    r.dx -= r.ax;
    if (r.dx < memoryAGet16(r.ds, 0x592e))
        { pc = 0x1cd70; continue dispatch; }
    r.al = portRead(0x61);
    r.al &= 0xfc;
    out(0x61, r.al);

      return;
    default: throw new Error("Invalid control flow in sub_1cd58");
    }
  }
  } finally {execution.leave(frame);}
}

function* sub_1cd84() {
  let pc=0;
  const frame=execution.enter('sub_1cd84',pc);pc=frame.pc;
  let skipBudget=frame.budget || execution.restoring;
  try {
  if(execution.restoring && execution.pending.length===0) {
    execution.restoring=false;
    if(frame.parked!==null) {yield frame.parked;frame.parked=null;frame.budget=false;}
  }
  dispatch: while (true) {
    if (!skipBudget && (++game.steps & 1023) === 0) {
      frame.pc=pc;frame.budget=true;frame.parked=0;yield 0;
      frame.parked=null;frame.budget=false;
    }
    skipBudget=false;
    switch(pc) {
    case 0:

    memoryASet16(r.ds, 0x59be, 0x0000);
    r.ah = 0;
    frame.pc=2097153;
case 2097153:
yield* interrupt(0x1a);
frame.pc=2097154;
case 2097154:;
    memoryASet16(r.ds, 0x59c0, r.dx);

      return;
    default: throw new Error("Invalid control flow in sub_1cd84");
    }
  }
  } finally {execution.leave(frame);}
}

function* sub_1cd93() {
  let pc=0;
  const frame=execution.enter('sub_1cd93',pc);pc=frame.pc;
  let skipBudget=frame.budget || execution.restoring;
  try {
  if(execution.restoring && execution.pending.length===0) {
    execution.restoring=false;
    if(frame.parked!==null) {yield frame.parked;frame.parked=null;frame.budget=false;}
  }
  dispatch: while (true) {
    if (!skipBudget && (++game.steps & 1023) === 0) {
      frame.pc=pc;frame.budget=true;frame.parked=0;yield 0;
      frame.parked=null;frame.budget=false;
    }
    skipBudget=false;
    switch(pc) {
    case 0:

    if (memoryAGet(r.ds, 0x0000) == 0x00)
        { pc = 0x1cda9; continue dispatch; }
    r.ah = 0;
    frame.pc=2097153;
case 2097153:
yield* interrupt(0x1a);
frame.pc=2097154;
case 2097154:;
    r.ax = r.dx;
    r.ax -= memoryAGet16(r.ds, 0x59c0);
    if (r.ax >= 0x0002)
        { pc = 0x1cdaa; continue dispatch; }
case 0x1cda9:
    return;
case 0x1cdaa:
    memoryASet16(r.ds, 0x59c0, r.dx);
    r.bx = memoryAGet16(r.ds, 0x59be);
    r.bx &= 0x00fe;
    if (r.bx < 0x0086)
        { pc = 0x1cdc2; continue dispatch; }
    r.bx = 0;
    memoryASet16(r.ds, 0x59be, r.bx);
case 0x1cdc2:
    memoryASet16(r.ds, 0x59be, memoryAGet16(r.ds, 0x59be) + 0x0002);
    r.ax = memoryAGet16(r.ds, r.bx + 22836);
    r.cx = memoryAGet16(r.ds, 0x59bc);
    memoryASet16(r.ds, 0x59bc, r.ax);
    if (r.ax != r.cx)
        { pc = 0x1cdda; continue dispatch; }
    frame.pc=2097155;
case 2097155:
yield* sub_1cd51();
frame.pc=2097156;
case 2097156:;
    return;
case 0x1cdda:
    r.cx = r.ax;
    r.al = 0xb6;
    out(0x43, r.al);
    r.ax = r.cx;
    out(0x42, r.al);
    r.al = r.ah;
    out(0x42, r.al);
    r.al = portRead(0x61);
    r.al |= 0x03;
    out(0x61, r.al);

      return;
    default: throw new Error("Invalid control flow in sub_1cd93");
    }
  }
  } finally {execution.leave(frame);}
}

function* sub_1cdef() {
  let pc=0;
  const frame=execution.enter('sub_1cdef',pc);pc=frame.pc;
  let skipBudget=frame.budget || execution.restoring;
  try {
  if(execution.restoring && execution.pending.length===0) {
    execution.restoring=false;
    if(frame.parked!==null) {yield frame.parked;frame.parked=null;frame.budget=false;}
  }
  dispatch: while (true) {
    if (!skipBudget && (++game.steps & 1023) === 0) {
      frame.pc=pc;frame.budget=true;frame.parked=0;yield 0;
      frame.parked=null;frame.budget=false;
    }
    skipBudget=false;
    switch(pc) {
    case 0:

case 0x1cdef:
    if (memoryAGet(r.ds, 0x0000) == 0x00)
        return;
    frame.pc=2097153;
case 2097153:
yield* sub_1cd93();
frame.pc=2097154;
case 2097154:;
    if (memoryAGet16(r.ds, 0x59be) < 0x007c)
        { pc = 0x1cdef; continue dispatch; }

      return;
    default: throw new Error("Invalid control flow in sub_1cdef");
    }
  }
  } finally {execution.leave(frame);}
}

function* sub_1ce10() {
  let pc=0;
  const frame=execution.enter('sub_1ce10',pc);pc=frame.pc;
  let skipBudget=frame.budget || execution.restoring;
  try {
  if(execution.restoring && execution.pending.length===0) {
    execution.restoring=false;
    if(frame.parked!==null) {yield frame.parked;frame.parked=null;frame.budget=false;}
  }
  dispatch: while (true) {
    if (!skipBudget && (++game.steps & 1023) === 0) {
      frame.pc=pc;frame.budget=true;frame.parked=0;yield 0;
      frame.parked=null;frame.budget=false;
    }
    skipBudget=false;
    switch(pc) {
    case 0:

    r.ah = 0;
    frame.pc=2097153;
case 2097153:
yield* interrupt(0x1a);
frame.pc=2097154;
case 2097154:;
    memoryASet16(r.ds, 0x5f66, r.dx);
    memoryASet16(r.ds, 0x5f60, 0x0000);
case 0x1ce1e:
    r.ax = 0xb800;
    r.es = r.ax;
    r.bx = memoryAGet16(r.ds, 0x5f60);
    memoryASet16(r.ds, 0x5f60, memoryAGet16(r.ds, 0x5f60) + 0x0002);
    r.bx &= 0x0002;
    r.si = memoryAGet16(r.ds, r.bx + 24418);
    r.di = 0x0a74;
    r.cx = 0x4404;
    frame.pc=2097155;
case 2097155:
yield* sub_19fcd();
frame.pc=2097156;
case 2097156:;
case 0x1ce3d:
    frame.pc=2097157;
case 2097157:
yield* sub_1ca14();
frame.pc=2097158;
case 2097158:;
    r.ah = 0;
    frame.pc=2097159;
case 2097159:
yield* interrupt(0x1a);
frame.pc=2097160;
case 2097160:;
    r.ax = r.dx;
    r.ax -= memoryAGet16(r.ds, 0x5f66);
    if (r.ax < 0x0004)
        { pc = 0x1ce3d; continue dispatch; }
    memoryASet16(r.ds, 0x5f66, r.dx);
    if (memoryAGet16(r.ds, 0x5f60) != 0x0004)
        { pc = 0x1ce66; continue dispatch; }
    r.si = 0x5f68;
    r.di = 0x0668;
    r.cx = 0x1004;
    frame.pc=2097161;
case 2097161:
yield* sub_19fcd();
frame.pc=2097162;
case 2097162:;
case 0x1ce66:
    r.bx = memoryAGet16(r.ds, 0x5f60);
    r.tx = r.bx;
    r.bx -= 0x0008;
    if (r.tx < 0x0008)
        { pc = 0x1ce81; continue dispatch; }
    if (r.bx >= 0x0006)
        { pc = 0x1ce81; continue dispatch; }
    r.si = 0x5fe8;
    r.di = memoryAGet16(r.ds, r.bx + 24804);
    r.cx = 0x1506;
    frame.pc=2097163;
case 2097163:
yield* sub_19fcd();
frame.pc=2097164;
case 2097164:;
case 0x1ce81:
    if (memoryAGet16(r.ds, 0x5f60) < 0x0010)
        { pc = 0x1ce1e; continue dispatch; }
    frame.pc=2097165;
case 2097165:
yield* sub_1cd51();
frame.pc=2097166;
case 2097166:;

      return;
    default: throw new Error("Invalid control flow in sub_1ce10");
    }
  }
  } finally {execution.leave(frame);}
}

function* sub_1ce90() {
  let pc=0;
  const frame=execution.enter('sub_1ce90',pc);pc=frame.pc;
  let skipBudget=frame.budget || execution.restoring;
  try {
  if(execution.restoring && execution.pending.length===0) {
    execution.restoring=false;
    if(frame.parked!==null) {yield frame.parked;frame.parked=null;frame.budget=false;}
  }
  dispatch: while (true) {
    if (!skipBudget && (++game.steps & 1023) === 0) {
      frame.pc=pc;frame.budget=true;frame.parked=0;yield 0;
      frame.parked=null;frame.budget=false;
    }
    skipBudget=false;
    switch(pc) {
    case 0:





    r.ax = 0xb800;
    r.ds = r.ax;
    r.ax = 0x55aa;
    memoryASet16(r.ds, 0x0000, r.ax);
    r.ax = memoryAGet16(r.ds, 0x0000);
    if (r.ax != 0x55aa)
        { pc = 0x1cec6; continue dispatch; }
    r.si = 0x60f0;
    frame.pc=2097153;
case 2097153:
yield* sub_1cece();
frame.pc=2097154;
case 2097154:;
    r.ax = 0x0040;
    r.ds = r.ax;
    r.ax = memoryAGet16(r.ds, 0x0010);
    r.al &= 0xcf;
    r.al |= 0x10;
    memoryASet16(r.ds, 0x0010, r.ax);
    r.ax = 0x0004;
    frame.pc=2097155;
case 2097155:
yield* interrupt(0x10);
frame.pc=2097156;
case 2097156:;
case 0x1cec5:
    return;
case 0x1cec6:
    r.si = 0x6112;
    frame.pc=2097157;
case 2097157:
yield* sub_1cece();
frame.pc=2097158;
case 2097158:;
case 0x1cecc:
    { pc = 0x1cecc; continue dispatch; }

      return;
    default: throw new Error("Invalid control flow in sub_1ce90");
    }
  }
  } finally {execution.leave(frame);}
}

function* sub_1cece() {
  let pc=0;
  const frame=execution.enter('sub_1cece',pc);pc=frame.pc;
  let skipBudget=frame.budget || execution.restoring;
  try {
  if(execution.restoring && execution.pending.length===0) {
    execution.restoring=false;
    if(frame.parked!==null) {yield frame.parked;frame.parked=null;frame.budget=false;}
  }
  dispatch: while (true) {
    if (!skipBudget && (++game.steps & 1023) === 0) {
      frame.pc=pc;frame.budget=true;frame.parked=0;yield 0;
      frame.parked=null;frame.budget=false;
    }
    skipBudget=false;
    switch(pc) {
    case 0:

    r.ax = 0x1010;
    r.ds = r.ax;
    frame.pc=2097153;
case 2097153:
yield* sub_1d05b();
frame.pc=2097154;
case 2097154:;

      return;
    default: throw new Error("Invalid control flow in sub_1cece");
    }
  }
  } finally {execution.leave(frame);}
}

function* sub_1cee0() {
  let pc=0;
  const frame=execution.enter('sub_1cee0',pc);pc=frame.pc;
  let skipBudget=frame.budget || execution.restoring;
  try {
  if(execution.restoring && execution.pending.length===0) {
    execution.restoring=false;
    if(frame.parked!==null) {yield frame.parked;frame.parked=null;frame.budget=false;}
  }
  dispatch: while (true) {
    if (!skipBudget && (++game.steps & 1023) === 0) {
      frame.pc=pc;frame.budget=true;frame.parked=0;yield 0;
      frame.parked=null;frame.budget=false;
    }
    skipBudget=false;
    switch(pc) {
    case 0:

    flags.direction = false;
    memoryASet16(r.ds, 0x0004, 0x0000);
    frame.pc=2097153;
case 2097153:
yield* sub_18a60();
frame.pc=2097154;
case 2097154:;
    frame.pc=2097155;
case 2097155:
yield* sub_19560();
frame.pc=2097156;
case 2097156:;
    frame.pc=2097157;
case 2097157:
yield* sub_19c60();
frame.pc=2097158;
case 2097158:;
    r.ax = 0xb800;
    r.es = r.ax;
    r.si = 0x6152;
    r.cx = 0x1d0b;
    r.di = 0x00bd;
    frame.pc=2097159;
case 2097159:
yield* sub_19fcd();
frame.pc=2097160;
case 2097160:;
    r.si = 0x63d0;
    r.cx = 0x160e;
    r.di = 0x069e;
    frame.pc=2097161;
case 2097161:
yield* sub_19fcd();
frame.pc=2097162;
case 2097162:;
    r.si = 0x6638;
    r.cx = 0x0c03;
    r.di = 0x0a78;
    frame.pc=2097163;
case 2097163:
yield* sub_19fcd();
frame.pc=2097164;
case 2097164:;
    r.si = 0x6680;
    r.cx = 0x080e;
    r.di = 0x0ca8;
    frame.pc=2097165;
case 2097165:
yield* sub_19fcd();
frame.pc=2097166;
case 2097166:;
    r.si = 0x6760;
    r.cx = 0x0b0c;
    r.di = 0x1d6e;
    frame.pc=2097167;
case 2097167:
yield* sub_19fcd();
frame.pc=2097168;
case 2097168:;
    r.si = 0x6868;
    r.cx = 0x0804;
    r.di = 0x1dec;
    frame.pc=2097169;
case 2097169:
yield* sub_19fcd();
frame.pc=2097170;
case 2097170:;
    memoryASet16(r.ds, 0x6a8d, 0x0000);
    frame.pc=2097171;
case 2097171:
yield* sub_1d06b();
frame.pc=2097172;
case 2097172:;
    memoryASet16(r.ds, 0x0579, 0x0000);
    frame.pc=2097173;
case 2097173:
yield* sub_1793d();
frame.pc=2097174;
case 2097174:;
    memoryASet(r.ds, 0x057b, 0x60);
    memoryASet(r.ds, 0x057c, 0x92);
    frame.pc=2097175;
case 2097175:
yield* sub_19922();
frame.pc=2097176;
case 2097176:;
    frame.pc=2097177;
case 2097177:
yield* sub_1992c();
frame.pc=2097178;
case 2097178:;
    memoryASet(r.ds, 0x1f80, 0x09);
    memoryASet(r.ds, 0x1f81, 0xff);
    frame.pc=2097179;
case 2097179:
yield* sub_198e3();
frame.pc=2097180;
case 2097180:;
    frame.pc=2097181;
case 2097181:
yield* sub_19070();
frame.pc=2097182;
case 2097182:;
    memoryASet(r.ds, 0x0698, 0x00);
    memoryASet(r.ds, 0x0699, 0x00);
    memoryASet(r.ds, 0x6a8a, 0x00);
    r.ax = memoryAGet16(r.ds, 0x0693);
    memoryASet16(r.ds, 0x6150, r.ax);
case 0x1cf84:
    r.ah = 0;
    frame.pc=2097183;
case 2097183:
yield* interrupt(0x1a);
frame.pc=2097184;
case 2097184:;
    memoryASet16(r.ds, 0x6a8b, r.dx);
    memoryASet16(r.ds, 0x5322, r.dx);
    memoryASet16(r.ds, 0x6a93, r.dx);
    r.dx -= 0x0030;
    memoryASet16(r.ds, 0x6a88, r.dx);
    memoryASet16(r.ds, 0x5320, 0x0000);
case 0x1cfa1: game.phase="title";
    r.ah = 0;
    frame.pc=2097185;
case 2097185:
yield* interrupt(0x1a);
frame.pc=2097186;
case 2097186:;
    r.ax = r.dx;
    r.ax -= memoryAGet16(r.ds, 0x6a93);
    if (r.ax < 0x0024)
        { pc = 0x1cfb9; continue dispatch; }
    memoryASet16(r.ds, 0x6a93, r.dx);
    push(r.dx);
    frame.pc=2097187;
case 2097187:
yield* sub_1d06b();
frame.pc=2097188;
case 2097188:;
    r.dx = pop();
case 0x1cfb9:
    r.dx -= memoryAGet16(r.ds, 0x6a8b);
    r.ax = memoryAGet16(r.ds, 0x56da);
    if (memoryAGet(r.ds, 0x041a) == 0x00)
        { pc = 0x1cfd0; continue dispatch; }
    r.ax += 0x0048;
    if (r.dx >= r.ax)
        { pc = 0x1cf84; continue dispatch; }
    { pc = 0x1cfd7; continue dispatch; }
case 0x1cfd0:
    r.ax += 0x0006;
    if (r.dx > r.ax)
        return;
case 0x1cfd7:
    frame.pc=2097189;
case 2097189:
yield* sub_1c5e0();
frame.pc=2097190;
case 2097190:;
    frame.pc=2097191;
case 2097191:
yield* sub_1d004();
frame.pc=2097192;
case 2097192:;
    if (memoryAGet(r.ds, 0x069b) == 0x00)
        { pc = 0x1cffa; continue dispatch; }
    r.dx = 0x0201;
    r.al = portRead(r.dx);
    r.al &= 0x10;
    if (r.al == 0)
        { pc = 0x1cff3; continue dispatch; }
    memoryASet(r.ds, 0x6a8a, 0x01);
    { pc = 0x1cffa; continue dispatch; }
case 0x1cff3:
    if (memoryAGet(r.ds, 0x6a8a) != 0x00)
        return;
case 0x1cffa:
    r.ax = memoryAGet16(r.ds, 0x6150);
    if (r.ax == memoryAGet16(r.ds, 0x0693))
        { pc = 0x1cfa1; continue dispatch; }

      return;
    default: throw new Error("Invalid control flow in sub_1cee0");
    }
  }
  } finally {execution.leave(frame);}
}

function* sub_1d004() {
  let pc=0;
  const frame=execution.enter('sub_1d004',pc);pc=frame.pc;
  let skipBudget=frame.budget || execution.restoring;
  try {
  if(execution.restoring && execution.pending.length===0) {
    execution.restoring=false;
    if(frame.parked!==null) {yield frame.parked;frame.parked=null;frame.budget=false;}
  }
  dispatch: while (true) {
    if (!skipBudget && (++game.steps & 1023) === 0) {
      frame.pc=pc;frame.budget=true;frame.parked=0;yield 0;
      frame.parked=null;frame.budget=false;
    }
    skipBudget=false;
    switch(pc) {
    case 0:

    if (memoryAGet16(r.ds, 0x0579) > 0x0020)
        { pc = 0x1d012; continue dispatch; }
    memoryASet(r.ds, 0x0698, 0x01);
    { pc = 0x1d04c; continue dispatch; }
case 0x1d012:
    if (memoryAGet16(r.ds, 0x0579) < 0x0120)
        { pc = 0x1d021; continue dispatch; }
    memoryASet(r.ds, 0x0698, 0xff);
    { pc = 0x1d04c; continue dispatch; }
case 0x1d021:
    r.ah = 0;
    frame.pc=2097153;
case 2097153:
yield* interrupt(0x1a);
frame.pc=2097154;
case 2097154:;
    r.ax = r.dx;
    r.ax -= memoryAGet16(r.ds, 0x6a88);
    if (r.ax < 0x0012)
        { pc = 0x1d04c; continue dispatch; }
    memoryASet16(r.ds, 0x6a88, r.dx);
    frame.pc=2097155;
case 2097155:
yield* sub_1a02d();
frame.pc=2097156;
case 2097156:;
    memoryASet(r.ds, 0x0698, 0x00);
    if (r.dl > 0xa0)
        { pc = 0x1d04c; continue dispatch; }
    r.dl &= 0x01;
    if (r.dl != 0)
        { pc = 0x1d048; continue dispatch; }
    r.dl = 0xff;
case 0x1d048:
    memoryASet(r.ds, 0x0698, r.dl);
case 0x1d04c:
    frame.pc=2097157;
case 2097157:
yield* sub_18608();
frame.pc=2097158;
case 2097158:;
    if (flags.zero)
        return;
    memoryASet16(r.ds, 0x0572, 0x0004);
    frame.pc=2097159;
case 2097159:
yield* sub_17b15();
frame.pc=2097160;
case 2097160:;

      return;
    default: throw new Error("Invalid control flow in sub_1d004");
    }
  }
  } finally {execution.leave(frame);}
}

function* sub_1d05b() {
  let pc=0;
  const frame=execution.enter('sub_1d05b',pc);pc=frame.pc;
  let skipBudget=frame.budget || execution.restoring;
  try {
  if(execution.restoring && execution.pending.length===0) {
    execution.restoring=false;
    if(frame.parked!==null) {yield frame.parked;frame.parked=null;frame.budget=false;}
  }
  dispatch: while (true) {
    if (!skipBudget && (++game.steps & 1023) === 0) {
      frame.pc=pc;frame.budget=true;frame.parked=0;yield 0;
      frame.parked=null;frame.budget=false;
    }
    skipBudget=false;
    switch(pc) {
    case 0:

case 0x1d05b:
    lodsb();
    if (r.al == 0x00)
        return;
    push(r.si);
    r.bl = 0x02;
    r.ah = 0x0e;
    frame.pc=2097153;
case 2097153:
yield* interrupt(0x10);
frame.pc=2097154;
case 2097154:;
    r.si = pop();
    { pc = 0x1d05b; continue dispatch; }

      return;
    default: throw new Error("Invalid control flow in sub_1d05b");
    }
  }
  } finally {execution.leave(frame);}
}

function* sub_1d06b() {
  let pc=0;
  const frame=execution.enter('sub_1d06b',pc);pc=frame.pc;
  let skipBudget=frame.budget || execution.restoring;
  try {
  if(execution.restoring && execution.pending.length===0) {
    execution.restoring=false;
    if(frame.parked!==null) {yield frame.parked;frame.parked=null;frame.budget=false;}
  }
  dispatch: while (true) {
    if (!skipBudget && (++game.steps & 1023) === 0) {
      frame.pc=pc;frame.budget=true;frame.parked=0;yield 0;
      frame.parked=null;frame.budget=false;
    }
    skipBudget=false;
    switch(pc) {
    case 0:

    r.ax = 0xb800;
    r.es = r.ax;
    memoryASet16(r.ds, 0x6a8d, memoryAGet16(r.ds, 0x6a8d) + 0x0002);
    r.bx = memoryAGet16(r.ds, 0x6a8d);
    r.bx &= 0x0002;
    r.si = memoryAGet16(r.ds, r.bx + 27279);
    r.cx = 0x0c0a;
    r.di = 0x1d38;
    frame.pc=2097153;
case 2097153:
yield* sub_19fcd();
frame.pc=2097154;
case 2097154:;

      return;
    default: throw new Error("Invalid control flow in sub_1d06b");
    }
  }
  } finally {execution.leave(frame);}
}

function* sub_1d08b() {
  let pc=0;
  const frame=execution.enter('sub_1d08b',pc);pc=frame.pc;
  let skipBudget=frame.budget || execution.restoring;
  try {
  if(execution.restoring && execution.pending.length===0) {
    execution.restoring=false;
    if(frame.parked!==null) {yield frame.parked;frame.parked=null;frame.budget=false;}
  }
  dispatch: while (true) {
    if (!skipBudget && (++game.steps & 1023) === 0) {
      frame.pc=pc;frame.budget=true;frame.parked=0;yield 0;
      frame.parked=null;frame.budget=false;
    }
    skipBudget=false;
    switch(pc) {
    case 0:

    r.dl = 0x00;
    r.bh = r.dl;
    r.ah = 0x02;
    frame.pc=2097153;
case 2097153:
yield* interrupt(0x10);
frame.pc=2097154;
case 2097154:;

      return;
    default: throw new Error("Invalid control flow in sub_1d08b");
    }
  }
  } finally {execution.leave(frame);}
}

function* sub_1d0a0() {
  let pc=0;
  const frame=execution.enter('sub_1d0a0',pc);pc=frame.pc;
  let skipBudget=frame.budget || execution.restoring;
  try {
  if(execution.restoring && execution.pending.length===0) {
    execution.restoring=false;
    if(frame.parked!==null) {yield frame.parked;frame.parked=null;frame.budget=false;}
  }
  dispatch: while (true) {
    if (!skipBudget && (++game.steps & 1023) === 0) {
      frame.pc=pc;frame.budget=true;frame.parked=0;yield 0;
      frame.parked=null;frame.budget=false;
    }
    skipBudget=false;
    switch(pc) {
    case 0:
game.phase="paused";

    frame.pc=2097153;
case 2097153:
yield* sub_1cd51();
frame.pc=2097154;
case 2097154:;
    r.ah = 0;
    frame.pc=2097155;
case 2097155:
yield* interrupt(0x1a);
frame.pc=2097156;
case 2097156:;
    memoryASet16(r.ds, 0x6dfc, r.dx);
    memoryASet16(r.ds, 0x6dfe, r.cx);
    push(r.ds);
    push(r.ds);
    r.es = pop();
    r.ax = 0xb800;
    r.ds = r.ax;
    r.si = 0x0dca;
    r.di = 0x000e;
    r.cx = 0x1020;
    frame.pc=2097157;
case 2097157:
yield* sub_19ffa();
frame.pc=2097158;
case 2097158:;
    r.ds = pop();
    r.dx = 0x0b05;
    r.bh = 0x00;
    r.ah = 0x02;
    frame.pc=2097159;
case 2097159:
yield* interrupt(0x10);
frame.pc=2097160;
case 2097160:;
    r.si = 0x6d91;
    flags.direction = false;
    frame.pc=2097161;
case 2097161:
yield* sub_1d05b();
frame.pc=2097162;
case 2097162:;
    r.dx = 0x0c05;
    r.bh = 0x00;
    r.ah = 0x02;
    frame.pc=2097163;
case 2097163:
yield* interrupt(0x10);
frame.pc=2097164;
case 2097164:;
    r.si = 0x6db2;
    if (memoryAGet(r.ds, 0x069b) == 0x00)
        { pc = 0x1d0ea; continue dispatch; }
    r.si = 0x6dd3;
case 0x1d0ea:
    flags.direction = false;
    frame.pc=2097165;
case 2097165:
yield* sub_1d05b();
frame.pc=2097166;
case 2097166:;
    frame.pc=2097167;
case 2097167:
yield* sub_1d1c7();
frame.pc=2097168;
case 2097168:;
    r.ax = 0xb800;
    r.es = r.ax;
    r.si = 0x000e;
    r.di = 0x0dca;
    r.cx = 0x1020;
    frame.pc=2097169;
case 2097169:
yield* sub_19fcd();
frame.pc=2097170;
case 2097170:;
    r.ah = 0x01;
    r.cx = memoryAGet16(r.ds, 0x6dfe);
    r.dx = memoryAGet16(r.ds, 0x6dfc);
    frame.pc=2097171;
case 2097171:
yield* interrupt(0x1a);
frame.pc=2097172;
case 2097172:;
    r.ax = memoryAGet16(r.ds, 0x0693);
    memoryASet16(r.ds, 0x6e00, r.ax);

game.phase="playing";
      return;
    default: throw new Error("Invalid control flow in sub_1d0a0");
    }
  }
  } finally {execution.leave(frame);}
}

function* sub_1d115() {
  let pc=0;
  const frame=execution.enter('sub_1d115',pc);pc=frame.pc;
  let skipBudget=frame.budget || execution.restoring;
  try {
  if(execution.restoring && execution.pending.length===0) {
    execution.restoring=false;
    if(frame.parked!==null) {yield frame.parked;frame.parked=null;frame.budget=false;}
  }
  dispatch: while (true) {
    if (!skipBudget && (++game.steps & 1023) === 0) {
      frame.pc=pc;frame.budget=true;frame.parked=0;yield 0;
      frame.parked=null;frame.budget=false;
    }
    skipBudget=false;
    switch(pc) {
    case 0:
frame.pc=2097183;
case 2097183:
yield* sub_1cd51();
frame.pc=2097184;
case 2097184:;
  frame.pc=2097185;
case 2097185:
yield* sub_1d1fd();
frame.pc=2097186;
case 2097186:;
  memoryASet(r.ds, 0x069b, 0);
  memoryASet16(r.ds, 0x6d8f, 2);
  {pc=0x1d14c;continue dispatch;}

    frame.pc=2097153;
case 2097153:
yield* sub_1cd51();
frame.pc=2097154;
case 2097154:;
case 0x1d118:
    frame.pc=2097155;
case 2097155:
yield* sub_1d1fd();
frame.pc=2097156;
case 2097156:;
    memoryASet16(r.ds, 0x6d8f, 0x0000);
    frame.pc=2097157;
case 2097157:
yield* sub_1d1e1();
frame.pc=2097158;
case 2097158:;
case 0x1d124:
    r.ax = memoryAGet16(r.ds, 0x0693);
case 0x1d127: game.phase="keyboard";
    frame.pc=2097159;frame.parked=1;yield 1;
case 2097159: frame.parked=null;
    if (r.ax == memoryAGet16(r.ds, 0x0693))
        { pc = 0x1d127; continue dispatch; }
    if (!(memoryAGet(r.ds, 0x06c1) & 0x80))
        { pc = 0x1d142; continue dispatch; }
    if (memoryAGet(r.ds, 0x06c2) & 0x80)
        { pc = 0x1d124; continue dispatch; }
    memoryASet(r.ds, 0x069b, 0x00);
    { pc = 0x1d14c; continue dispatch; }
case 0x1d142:
    frame.pc=2097160;
case 2097160:
yield* sub_1d215();
frame.pc=2097161;
case 2097161:;
    if (flags.carry)
        { pc = 0x1d118; continue dispatch; }
    memoryASet(r.ds, 0x069b, 0x01);
case 0x1d14c:
    r.cx = 0x0005;
case 0x1d14f:
    push(r.cx);
    frame.pc=2097162;
case 2097162:
yield* sub_1d1e1();
frame.pc=2097163;
case 2097163:;
    r.cx = pop();
    if (--r.cx)
        { pc = 0x1d14f; continue dispatch; }
case 0x1d156:
    r.ax = memoryAGet16(r.ds, 0x0693);
case 0x1d159: game.phase="difficulty";
    frame.pc=2097164;frame.parked=1;yield 1;
case 2097164: frame.parked=null;
    if (r.ax == memoryAGet16(r.ds, 0x0693))
        { pc = 0x1d159; continue dispatch; }
    r.ax = 0;
    if (!(memoryAGet(r.ds, 0x06c3) & 0x80))
        { pc = 0x1d180; continue dispatch; }
    r.ax++;
    if (!(memoryAGet(r.ds, 0x06c4) & 0x80))
        { pc = 0x1d180; continue dispatch; }
    r.ax++;
    if (!(memoryAGet(r.ds, 0x06c5) & 0x80))
        { pc = 0x1d180; continue dispatch; }
    r.ax++;
    if (memoryAGet(r.ds, 0x06c6) & 0x80)
        { pc = 0x1d156; continue dispatch; }
case 0x1d180:
    memoryASet16(r.ds, 0x6df8, r.ax);
    r.cx = 0x0005;
case 0x1d186:
    push(r.cx);
    frame.pc=2097165;
case 2097165:
yield* sub_1d1e1();
frame.pc=2097166;
case 2097166:;
    r.cx = pop();
    if (--r.cx)
        { pc = 0x1d186; continue dispatch; }
    if (memoryAGet(r.ds, 0x069b) == 0x00)
        { pc = 0x1d1ae; continue dispatch; }
    memoryASet16(r.ds, 0x6d8f, 0x0020);
    frame.pc=2097167;
case 2097167:
yield* sub_1d1e1();
frame.pc=2097168;
case 2097168:;
    frame.pc=2097169;
case 2097169:
yield* sub_1d1e1();
frame.pc=2097170;
case 2097170:;
    memoryASet16(r.ds, 0x6d8f, 0x0018);
    frame.pc=2097171;
case 2097171:
yield* sub_1d1e1();
frame.pc=2097172;
case 2097172:;
    frame.pc=2097173;
case 2097173:
yield* sub_1d1e1();
frame.pc=2097174;
case 2097174:;
    { pc = 0x1d1c3; continue dispatch; }
case 0x1d1ae:
    memoryASet16(r.ds, 0x6d8f, 0x001c);
    frame.pc=2097175;
case 2097175:
yield* sub_1d1e1();
frame.pc=2097176;
case 2097176:;
    frame.pc=2097177;
case 2097177:
yield* sub_1d1e1();
frame.pc=2097178;
case 2097178:;
    memoryASet16(r.ds, 0x6d8f, 0x0016);
    frame.pc=2097179;
case 2097179:
yield* sub_1d1e1();
frame.pc=2097180;
case 2097180:;
case 0x1d1c3: game.phase="ready";
    frame.pc=2097181;
case 2097181:
yield* sub_1d1c7();
frame.pc=2097182;
case 2097182:;

      return;
    default: throw new Error("Invalid control flow in sub_1d115");
    }
  }
  } finally {execution.leave(frame);}
}

function* sub_1d1c7() {
  let pc=0;
  const frame=execution.enter('sub_1d1c7',pc);pc=frame.pc;
  let skipBudget=frame.budget || execution.restoring;
  try {
  if(execution.restoring && execution.pending.length===0) {
    execution.restoring=false;
    if(frame.parked!==null) {yield frame.parked;frame.parked=null;frame.budget=false;}
  }
  dispatch: while (true) {
    if (!skipBudget && (++game.steps & 1023) === 0) {
      frame.pc=pc;frame.budget=true;frame.parked=0;yield 0;
      frame.parked=null;frame.budget=false;
    }
    skipBudget=false;
    switch(pc) {
    case 0:

    if (memoryAGet(r.ds, 0x069b) == 0x00)
        { pc = 0x1d1d7; continue dispatch; }
case 0x1d1ce:
    r.dx = 0x0201;
    r.al = portRead(r.dx);
    r.al &= 0x10;
    if (r.al != 0)
        { pc = 0x1d1ce; continue dispatch; }
    return;
case 0x1d1d7:
    r.ax = memoryAGet16(r.ds, 0x0693);
case 0x1d1da:
    frame.pc=2097153;frame.parked=1;yield 1;
case 2097153: frame.parked=null;
    if (r.ax == memoryAGet16(r.ds, 0x0693))
        { pc = 0x1d1da; continue dispatch; }

      return;
    default: throw new Error("Invalid control flow in sub_1d1c7");
    }
  }
  } finally {execution.leave(frame);}
}

function* sub_1d1e1() {
  let pc=0;
  const frame=execution.enter('sub_1d1e1',pc);pc=frame.pc;
  let skipBudget=frame.budget || execution.restoring;
  try {
  if(execution.restoring && execution.pending.length===0) {
    execution.restoring=false;
    if(frame.parked!==null) {yield frame.parked;frame.parked=null;frame.budget=false;}
  }
  dispatch: while (true) {
    if (!skipBudget && (++game.steps & 1023) === 0) {
      frame.pc=pc;frame.budget=true;frame.parked=0;yield 0;
      frame.parked=null;frame.budget=false;
    }
    skipBudget=false;
    switch(pc) {
    case 0:

    r.bx = memoryAGet16(r.ds, 0x6d8f);
    r.dx = memoryAGet16(r.ds, r.bx + 28003);
    frame.pc=2097153;
case 2097153:
yield* sub_1d08b();
frame.pc=2097154;
case 2097154:;
    r.bx = memoryAGet16(r.ds, 0x6d8f);
    memoryASet16(r.ds, 0x6d8f, memoryAGet16(r.ds, 0x6d8f) + 0x0002);
    r.si = memoryAGet16(r.ds, r.bx + 27959);
    frame.pc=2097155;
case 2097155:
yield* sub_1d05b();
frame.pc=2097156;
case 2097156:;

      return;
    default: throw new Error("Invalid control flow in sub_1d1e1");
    }
  }
  } finally {execution.leave(frame);}
}

function* sub_1d1fd() {
  let pc=0;
  const frame=execution.enter('sub_1d1fd',pc);pc=frame.pc;
  let skipBudget=frame.budget || execution.restoring;
  try {
  if(execution.restoring && execution.pending.length===0) {
    execution.restoring=false;
    if(frame.parked!==null) {yield frame.parked;frame.parked=null;frame.budget=false;}
  }
  dispatch: while (true) {
    if (!skipBudget && (++game.steps & 1023) === 0) {
      frame.pc=pc;frame.budget=true;frame.parked=0;yield 0;
      frame.parked=null;frame.budget=false;
    }
    skipBudget=false;
    switch(pc) {
    case 0:

    flags.direction = false;
    r.ax = 0xb800;
    r.es = r.ax;
    r.ax = 0;
    r.di = r.ax;
    r.cx = 0x0fa0;
    rep_stosw();
    r.di = 0x2000;
    r.cx = 0x0fa0;
    rep_stosw();

      return;
    default: throw new Error("Invalid control flow in sub_1d1fd");
    }
  }
  } finally {execution.leave(frame);}
}

function* sub_1d215() {
  let pc=0;
  const frame=execution.enter('sub_1d215',pc);pc=frame.pc;
  let skipBudget=frame.budget || execution.restoring;
  try {
  if(execution.restoring && execution.pending.length===0) {
    execution.restoring=false;
    if(frame.parked!==null) {yield frame.parked;frame.parked=null;frame.budget=false;}
  }
  dispatch: while (true) {
    if (!skipBudget && (++game.steps & 1023) === 0) {
      frame.pc=pc;frame.budget=true;frame.parked=0;yield 0;
      frame.parked=null;frame.budget=false;
    }
    skipBudget=false;
    switch(pc) {
    case 0:

    frame.pc=2097153;
case 2097153:
yield* interrupt(0x11);
frame.pc=2097154;
case 2097154:;
    if (!(r.ax & 0x1000))
        { pc = 0x1d226; continue dispatch; }
    frame.pc=2097155;
case 2097155:
yield* sub_1d23f();
frame.pc=2097156;
case 2097156:;
    if (!flags.carry)
        return;
    frame.pc=2097157;
case 2097157:
yield* sub_1d23f();
frame.pc=2097158;
case 2097158:;
    if (!flags.carry)
        return;
case 0x1d226:
    memoryASet16(r.ds, 0x6d8f, 0x0024);
    r.cx = 0x0004;
case 0x1d22f:
    frame.pc=2097159;
case 2097159:
yield* sub_1d1e1();
frame.pc=2097160;
case 2097160:;
    if (--r.cx)
        { pc = 0x1d22f; continue dispatch; }
    r.ax = memoryAGet16(r.ds, 0x0693);
case 0x1d237:
    if (r.ax == memoryAGet16(r.ds, 0x0693))
        { pc = 0x1d237; continue dispatch; }
    flags.carry = true;

      return;
    default: throw new Error("Invalid control flow in sub_1d215");
    }
  }
  } finally {execution.leave(frame);}
}

function* sub_1d23f() {
  let pc=0;
  const frame=execution.enter('sub_1d23f',pc);pc=frame.pc;
  let skipBudget=frame.budget || execution.restoring;
  try {
  if(execution.restoring && execution.pending.length===0) {
    execution.restoring=false;
    if(frame.parked!==null) {yield frame.parked;frame.parked=null;frame.budget=false;}
  }
  dispatch: while (true) {
    if (!skipBudget && (++game.steps & 1023) === 0) {
      frame.pc=pc;frame.budget=true;frame.parked=0;yield 0;
      frame.parked=null;frame.budget=false;
    }
    skipBudget=false;
    switch(pc) {
    case 0:

    r.dx = 0x0201;
    out(r.dx, r.al);
    r.ah = 0;
    frame.pc=2097153;
case 2097153:
yield* interrupt(0x1a);
frame.pc=2097154;
case 2097154:;
    memoryASet16(r.ds, 0x6dfa, r.dx);
case 0x1d24b:
    r.dx = 0x0201;
    r.al = portRead(r.dx);
    if (r.al & 0x03)
        { pc = 0x1d255; continue dispatch; }
    flags.carry = false;
    return;
case 0x1d255:
    r.ah = 0;
    frame.pc=2097155;
case 2097155:
yield* interrupt(0x1a);
frame.pc=2097156;
case 2097156:;
    r.dx -= memoryAGet16(r.ds, 0x6dfa);
    if (r.dx < 0x0012)
        { pc = 0x1d24b; continue dispatch; }
    flags.carry = true;

      return;
    default: throw new Error("Invalid control flow in sub_1d23f");
    }
  }
  } finally {execution.leave(frame);}
}

function* sub_1d270() {
  let pc=0;
  const frame=execution.enter('sub_1d270',pc);pc=frame.pc;
  let skipBudget=frame.budget || execution.restoring;
  try {
  if(execution.restoring && execution.pending.length===0) {
    execution.restoring=false;
    if(frame.parked!==null) {yield frame.parked;frame.parked=null;frame.budget=false;}
  }
  dispatch: while (true) {
    if (!skipBudget && (++game.steps & 1023) === 0) {
      frame.pc=pc;frame.budget=true;frame.parked=0;yield 0;
      frame.parked=null;frame.budget=false;
    }
    skipBudget=false;
    switch(pc) {
    case 0:

    flags.direction = false;
    push(r.ds);
    r.es = pop();
    r.di = 0x000e;
    r.cx = 0x0024;
    r.ax = 0;
    rep_stosw();
    memoryASet16(r.ds, 0x6f24, 0x0025);
    r.ax = 0xb800;
    r.es = r.ax;
case 0x1d288:
    frame.pc=2097153;
case 2097153:
yield* sub_18608();
frame.pc=2097154;
case 2097154:;
    if (flags.zero)
        { pc = 0x1d288; continue dispatch; }
    r.si = 0x000e;
    r.di = memoryAGet16(r.ds, 0x6f24);
    r.cx = 0x0c03;
    frame.pc=2097155;
case 2097155:
yield* sub_19fcd();
frame.pc=2097156;
case 2097156:;
    memoryASet16(r.ds, 0x6f24, memoryAGet16(r.ds, 0x6f24) + 0x01e0);
    r.si = 0x6e10;
    r.di = memoryAGet16(r.ds, 0x6f24);
    r.cx = 0x0c03;
    frame.pc=2097157;
case 2097157:
yield* sub_19fcd();
frame.pc=2097158;
case 2097158:;
case 0x1d2ad:
    r.ah = 0;
    frame.pc=2097159;
case 2097159:
yield* interrupt(0x1a);
frame.pc=2097160;
case 2097160:;
    if (r.dx == memoryAGet16(r.ds, 0x6f26))
        { pc = 0x1d2ad; continue dispatch; }
    memoryASet16(r.ds, 0x6f26, r.dx);
    if (memoryAGet(r.ds, 0x0000) == 0x00)
        { pc = 0x1d2d7; continue dispatch; }
    r.al = 0xb6;
    out(0x43, r.al);
    r.ax = memoryAGet16(r.ds, 0x6f24);
    r.ax >>= 1;
    out(0x42, r.al);
    r.al = r.ah;
    out(0x42, r.al);
    r.al = portRead(0x61);
    r.al |= 0x03;
    out(0x61, r.al);
case 0x1d2d7:
    if (memoryAGet16(r.ds, 0x6f24) < 0x1a40)
        { pc = 0x1d288; continue dispatch; }
    r.si = 0x6e58;
    r.di = memoryAGet16(r.ds, 0x6f24);
    r.cx = 0x1106;
    frame.pc=2097161;
case 2097161:
yield* sub_19fcd();
frame.pc=2097162;
case 2097162:;
case 0x1d2ec:
    r.ah = 0;
    frame.pc=2097163;
case 2097163:
yield* interrupt(0x1a);
frame.pc=2097164;
case 2097164:;
    if (r.dx == memoryAGet16(r.ds, 0x6f28))
        { pc = 0x1d2ec; continue dispatch; }
    memoryASet16(r.ds, 0x6f28, r.dx);
    if (memoryAGet(r.ds, 0x0000) == 0x00)
        { pc = 0x1d316; continue dispatch; }
    r.al = 0xb6;
    out(0x43, r.al);
    r.ax = 0x0c00;
    if (!(r.dl & 0x01))
        { pc = 0x1d310; continue dispatch; }
    r.ax = 0x0b54;
case 0x1d310:
    out(0x42, r.al);
    r.al = r.ah;
    out(0x42, r.al);
case 0x1d316:
    r.dx -= memoryAGet16(r.ds, 0x6f26);
    if (r.dx < 0x0012)
        { pc = 0x1d2ec; continue dispatch; }
    frame.pc=2097165;
case 2097165:
yield* sub_1cd51();
frame.pc=2097166;
case 2097166:;

      return;
    default: throw new Error("Invalid control flow in sub_1d270");
    }
  }
  } finally {execution.leave(frame);}
}

function* sub_1d330() {
  let pc=0;
  const frame=execution.enter('sub_1d330',pc);pc=frame.pc;
  let skipBudget=frame.budget || execution.restoring;
  try {
  if(execution.restoring && execution.pending.length===0) {
    execution.restoring=false;
    if(frame.parked!==null) {yield frame.parked;frame.parked=null;frame.budget=false;}
  }
  dispatch: while (true) {
    if (!skipBudget && (++game.steps & 1023) === 0) {
      frame.pc=pc;frame.budget=true;frame.parked=0;yield 0;
      frame.parked=null;frame.budget=false;
    }
    skipBudget=false;
    switch(pc) {
    case 0:

    memoryASet(r.ds, 0x70f2, 0x00);

      return;
    default: throw new Error("Invalid control flow in sub_1d330");
    }
  }
  } finally {execution.leave(frame);}
}

function* sub_1d336() {
  let pc=0;
  const frame=execution.enter('sub_1d336',pc);pc=frame.pc;
  let skipBudget=frame.budget || execution.restoring;
  try {
  if(execution.restoring && execution.pending.length===0) {
    execution.restoring=false;
    if(frame.parked!==null) {yield frame.parked;frame.parked=null;frame.budget=false;}
  }
  dispatch: while (true) {
    if (!skipBudget && (++game.steps & 1023) === 0) {
      frame.pc=pc;frame.budget=true;frame.parked=0;yield 0;
      frame.parked=null;frame.budget=false;
    }
    skipBudget=false;
    switch(pc) {
    case 0:

    r.ah = 0;
    frame.pc=2097153;
case 2097153:
yield* interrupt(0x1a);
frame.pc=2097154;
case 2097154:;
    if (r.dx != memoryAGet16(r.ds, 0x70ee))
        { pc = 0x1d341; continue dispatch; }
    return;
case 0x1d341:
    memoryASet16(r.ds, 0x70ee, r.dx);
    frame.pc=2097155;
case 2097155:
yield* sub_1d4d6();
frame.pc=2097156;
case 2097156:;
    if (!flags.carry)
        { pc = 0x1d359; continue dispatch; }
    frame.pc=2097157;
case 2097157:
yield* sub_18413();
frame.pc=2097158;
case 2097158:;
    frame.pc=2097159;
case 2097159:
yield* sub_1d45b();
frame.pc=2097160;
case 2097160:;
    frame.pc=2097161;
case 2097161:
yield* sub_18375();
frame.pc=2097162;
case 2097162:;
    memoryASet(r.ds, 0x70f2, 0x00);
    return;
case 0x1d359:
    if (memoryAGet(r.ds, 0x70f2) != 0x00)
        { pc = 0x1d3ce; continue dispatch; }
case 0x1d360:
    frame.pc=2097163;
case 2097163:
yield* sub_1a02d();
frame.pc=2097164;
case 2097164:;
    r.bx = r.dx;
    r.bx &= 0x001f;
    if (r.bl < 0x10)
        { pc = 0x1d396; continue dispatch; }
    r.bl -= 0x10;
    if (r.bl > 0x09)
        { pc = 0x1d360; continue dispatch; }
    r.dl = 0x01;
    if (r.bl < 0x05)
        { pc = 0x1d37f; continue dispatch; }
    r.dl = 0xff;
case 0x1d37f:
    memoryASet(r.ds, 0x70f6, r.dl);
    memoryASet(r.ds, 0x70f5, 0x06);
    r.bl <<= 1;
    r.ax = memoryAGet16(r.ds, r.bx + 28856);
    r.ax += 0x0004;
    memoryASet16(r.ds, 0x70f3, r.ax);
    { pc = 0x1d3b8; continue dispatch; }
case 0x1d396:
    r.ax = 0x000c;
    r.dl = 0x01;
    if (!(r.bl & 0x08))
        { pc = 0x1d3a5; continue dispatch; }
    r.ax = 0x0120;
    r.dl = 0xff;
case 0x1d3a5:
    memoryASet16(r.ds, 0x70f3, r.ax);
    memoryASet(r.ds, 0x70f6, r.dl);
    r.bl &= 0x07;
    r.al = memoryAGet(r.ds, r.bx + 28848);
    r.al += 0x08;
    memoryASet(r.ds, 0x70f5, r.al);
case 0x1d3b8:
    memoryASet(r.ds, 0x70f2, 0x01);
    memoryASet(r.ds, 0x70f7, 0x01);
    memoryASet16(r.ds, 0x70f0, 0x0000);
    memoryASet16(r.ds, 0x70ec, 0xffff);
case 0x1d3ce:
    if (memoryAGet16(r.ds, 0x70f0) >= 0x00a0)
        { pc = 0x1d3db; continue dispatch; }
    memoryASet16(r.ds, 0x70f0, memoryAGet16(r.ds, 0x70f0) + 0x0004);
case 0x1d3db:
    memoryASet(r.ds, 0x70f5, memoryAGet(r.ds, 0x70f5) + 0x02);
    if (memoryAGet(r.ds, 0x70f5) > 0xbf)
        { pc = 0x1d404; continue dispatch; }
    if (memoryAGet(r.ds, 0x70f6) == 0x01)
        { pc = 0x1d3f7; continue dispatch; }
    r.tx = memoryAGet16(r.ds, 0x70f3);
    memoryASet16(r.ds, 0x70f3, memoryAGet16(r.ds, 0x70f3) - 0x0005);
    if (r.tx < 0x0005)
        { pc = 0x1d404; continue dispatch; }
    { pc = 0x1d40d; continue dispatch; }
case 0x1d3f7:
    memoryASet16(r.ds, 0x70f3, memoryAGet16(r.ds, 0x70f3) + 0x0005);
    if (memoryAGet16(r.ds, 0x70f3) < 0x012c)
        { pc = 0x1d40d; continue dispatch; }
case 0x1d404:
    memoryASet(r.ds, 0x70f2, 0x00);
    frame.pc=2097165;
case 2097165:
yield* sub_1d45b();
frame.pc=2097166;
case 2097166:;
    return;
case 0x1d40d:
    r.cx = memoryAGet16(r.ds, 0x70f3);
    r.dl = memoryAGet(r.ds, 0x70f5);
    frame.pc=2097167;
case 2097167:
yield* sub_19ee0();
frame.pc=2097168;
case 2097168:;
    memoryASet16(r.ds, 0x70fa, r.ax);
    frame.pc=2097169;
case 2097169:
yield* sub_1d4d6();
frame.pc=2097170;
case 2097170:;
    if (flags.carry)
        { pc = 0x1d404; continue dispatch; }
    frame.pc=2097171;
case 2097171:
yield* sub_1d475();
frame.pc=2097172;
case 2097172:;
    frame.pc=2097173;
case 2097173:
yield* sub_1d45b();
frame.pc=2097174;
case 2097174:;
    frame.pc=2097175;
case 2097175:
yield* sub_1d42a();
frame.pc=2097176;
case 2097176:;

      return;
    default: throw new Error("Invalid control flow in sub_1d336");
    }
  }
  } finally {execution.leave(frame);}
}

function* sub_1d42a() {
  let pc=0;
  const frame=execution.enter('sub_1d42a',pc);pc=frame.pc;
  let skipBudget=frame.budget || execution.restoring;
  try {
  if(execution.restoring && execution.pending.length===0) {
    execution.restoring=false;
    if(frame.parked!==null) {yield frame.parked;frame.parked=null;frame.budget=false;}
  }
  dispatch: while (true) {
    if (!skipBudget && (++game.steps & 1023) === 0) {
      frame.pc=pc;frame.budget=true;frame.parked=0;yield 0;
      frame.parked=null;frame.budget=false;
    }
    skipBudget=false;
    switch(pc) {
    case 0:

    r.ax = 0xb800;
    r.es = r.ax;
    memoryASet(r.ds, 0x70f7, 0x00);
    r.ax = memoryAGet16(r.ds, 0x70f0);
    r.ax &= 0x01e0;
    r.ax += 0x6f30;
    if (memoryAGet(r.ds, 0x70f6) == 0xff)
        { pc = 0x1d447; continue dispatch; }
    r.ax += 0x00c0;
case 0x1d447:
    r.si = r.ax;
    r.di = memoryAGet16(r.ds, 0x70fa);
    memoryASet16(r.ds, 0x70f8, r.di);
    r.bp = 0x70cc;
    r.cx = 0x0802;
    frame.pc=2097153;
case 2097153:
yield* sub_19efc();
frame.pc=2097154;
case 2097154:;

      return;
    default: throw new Error("Invalid control flow in sub_1d42a");
    }
  }
  } finally {execution.leave(frame);}
}

function* sub_1d45b() {
  let pc=0;
  const frame=execution.enter('sub_1d45b',pc);pc=frame.pc;
  let skipBudget=frame.budget || execution.restoring;
  try {
  if(execution.restoring && execution.pending.length===0) {
    execution.restoring=false;
    if(frame.parked!==null) {yield frame.parked;frame.parked=null;frame.budget=false;}
  }
  dispatch: while (true) {
    if (!skipBudget && (++game.steps & 1023) === 0) {
      frame.pc=pc;frame.budget=true;frame.parked=0;yield 0;
      frame.parked=null;frame.budget=false;
    }
    skipBudget=false;
    switch(pc) {
    case 0:

    if (memoryAGet(r.ds, 0x70f7) != 0x00)
        return;
    r.ax = 0xb800;
    r.es = r.ax;
    r.si = 0x70cc;
    r.di = memoryAGet16(r.ds, 0x70f8);
    r.cx = 0x0802;
    frame.pc=2097153;
case 2097153:
yield* sub_19fcd();
frame.pc=2097154;
case 2097154:;

      return;
    default: throw new Error("Invalid control flow in sub_1d45b");
    }
  }
  } finally {execution.leave(frame);}
}

function* sub_1d475() {
  let pc=0;
  const frame=execution.enter('sub_1d475',pc);pc=frame.pc;
  let skipBudget=frame.budget || execution.restoring;
  try {
  if(execution.restoring && execution.pending.length===0) {
    execution.restoring=false;
    if(frame.parked!==null) {yield frame.parked;frame.parked=null;frame.budget=false;}
  }
  dispatch: while (true) {
    if (!skipBudget && (++game.steps & 1023) === 0) {
      frame.pc=pc;frame.budget=true;frame.parked=0;yield 0;
      frame.parked=null;frame.budget=false;
    }
    skipBudget=false;
    switch(pc) {
    case 0:

    r.al = memoryAGet(r.ds, 0x70f5);
    r.al -= 0x08;
    r.al &= 0xf8;
    r.cx = 0x0007;
case 0x1d47f:
    r.bx = r.cx;
    r.bx--;
    if (r.al == memoryAGet(r.ds, r.bx + 11220))
        { pc = 0x1d48b; continue dispatch; }
    if (--r.cx)
        { pc = 0x1d47f; continue dispatch; }
case 0x1d48a:
    return;
case 0x1d48b:
    r.ax = memoryAGet16(r.ds, 0x70f3);
    r.cl = 0x04;
    r.ax >>= r.cl;
    r.tx = r.ax;
    r.ax -= 0x0002;
    if (r.tx < 0x0002)
        { pc = 0x1d48a; continue dispatch; }
    if (r.ax >= 0x0010)
        { pc = 0x1d48a; continue dispatch; }
    r.di = r.ax;
    r.dl = memoryAGet(r.ds, r.bx + 11227);
    r.dh = 0;
    r.ax += r.dx;
    if (r.ax == memoryAGet16(r.ds, 0x70ec))
        { pc = 0x1d48a; continue dispatch; }
    memoryASet16(r.ds, 0x70ec, r.ax);
    r.si = r.ax;
    memoryASet(r.ds, r.si + 11234, memoryAGet(r.ds, r.si + 11234) ^ 0x02);
    r.al = memoryAGet(r.ds, r.si + 11234);
    r.ah = 0;
    r.di <<= 1;
    r.cx = memoryAGet16(r.ds, r.di + 28924);
    r.dl = memoryAGet(r.ds, r.bx + 28960);
    push(r.ax);
    push(r.cx);
    push(r.dx);
    frame.pc=2097153;
case 2097153:
yield* sub_1d45b();
frame.pc=2097154;
case 2097154:;
    r.dx = pop();
    r.cx = pop();
    r.bx = pop();
    frame.pc=2097155;
case 2097155:
yield* sub_1a313();
frame.pc=2097156;
case 2097156:;
    frame.pc=2097157;
case 2097157:
yield* sub_1d42a();
frame.pc=2097158;
case 2097158:;

      return;
    default: throw new Error("Invalid control flow in sub_1d475");
    }
  }
  } finally {execution.leave(frame);}
}

function* sub_1d4d6() {
  let pc=0;
  const frame=execution.enter('sub_1d4d6',pc);pc=frame.pc;
  let skipBudget=frame.budget || execution.restoring;
  try {
  if(execution.restoring && execution.pending.length===0) {
    execution.restoring=false;
    if(frame.parked!==null) {yield frame.parked;frame.parked=null;frame.budget=false;}
  }
  dispatch: while (true) {
    if (!skipBudget && (++game.steps & 1023) === 0) {
      frame.pc=pc;frame.budget=true;frame.parked=0;yield 0;
      frame.parked=null;frame.budget=false;
    }
    skipBudget=false;
    switch(pc) {
    case 0:

    if (memoryAGet(r.ds, 0x70f2) != 0x00)
        { pc = 0x1d4df; continue dispatch; }
    flags.carry = false;
    return;
case 0x1d4df:
    r.ax = memoryAGet16(r.ds, 0x70f3);
    r.dl = memoryAGet(r.ds, 0x70f5);
    r.si = 0x0010;
    r.bx = memoryAGet16(r.ds, 0x0579);
    r.dh = memoryAGet(r.ds, 0x057b);
    r.di = 0x0018;
    r.cx = 0x0e08;
    frame.pc=2097153;
case 2097153:
yield* sub_1a059();
frame.pc=2097154;
case 2097154:;
    if (!flags.carry)
        return;
    memoryASet(r.ds, 0x0571, 0x01);
    memoryASet(r.ds, 0x0576, 0x02);
    memoryASet(r.ds, 0x0578, 0x20);
    memoryASet(r.ds, 0x055b, 0x08);
    r.ax = 0x091d;
    r.bx = 0x0ce4;
    frame.pc=2097155;
case 2097155:
yield* sub_1cb6b();
frame.pc=2097156;
case 2097156:;
    flags.carry = true;

      return;
    default: throw new Error("Invalid control flow in sub_1d4d6");
    }
  }
  } finally {execution.leave(frame);}
}
const original_sub_19f65=sub_19f65;
sub_19f65=function*() {
  if(!execution.restoring)colorArt.beginBlit('sub_19f65');
  try {yield* original_sub_19f65();} finally {colorArt.endBlit();}
};

const original_sub_19efc=sub_19efc;
sub_19efc=function*() {
  if(!execution.restoring)colorArt.beginBlit('sub_19efc');
  try {yield* original_sub_19efc();} finally {colorArt.endBlit();}
};

const original_sub_19fcd=sub_19fcd;
sub_19fcd=function*() {
  if(!execution.restoring && r.es===0xb800)colorArt.skinStatic(r.ds,r.si,r.cx);
  yield* original_sub_19fcd();
};

const original_sub_1b1ce=sub_1b1ce;
sub_1b1ce=function*() {
  yield* original_sub_1b1ce();
  colorArt.captureCheese();
};

const ROUTINES={start,sub_17230,sub_176d0,sub_17863,sub_17888,sub_178ad,sub_1790e,sub_17930,sub_1793d,sub_179d1,sub_17aa2,sub_17b15,sub_181b7,sub_181f9,sub_18250,sub_18299,sub_1830d,sub_18342,sub_18354,sub_18375,sub_18396,sub_18413,sub_18430,sub_184d1,sub_184f1,sub_18568,sub_185da,sub_185e7,sub_18608,sub_18618,sub_18649,sub_186af,sub_18800,sub_18838,sub_18887,sub_188f6,sub_189c9,sub_189dd,sub_18a60,sub_18a7b,sub_18b52,sub_18b66,sub_18d1a,sub_18d35,sub_18d7c,sub_18daa,sub_18e20,sub_18e97,sub_18f61,sub_18f9e,sub_18fa6,sub_19047,sub_19070,sub_19093,sub_19252,sub_19289,sub_192cb,sub_19311,sub_19325,sub_19366,sub_19410,sub_19440,sub_19446,sub_1950c,sub_19527,sub_19560,sub_195ab,sub_1977d,sub_19797,sub_1988e,sub_198c0,sub_198e3,sub_1990a,sub_19911,sub_19918,sub_19922,sub_1992c,sub_19936,sub_1994e,sub_19969,sub_199c0,sub_19b75,sub_19b88,sub_19ba0,sub_19bb8,sub_19bd0,sub_19c11,sub_19c30,sub_19c60,sub_19c98,sub_19cb0,sub_19cf6,sub_19d54,sub_19da1,sub_19dbb,sub_19dce,sub_19e6d,sub_19eb4,sub_19ee0,sub_19efc,sub_19f65,sub_19fa0,sub_19fcd,sub_19ffa,sub_1a02d,sub_1a040,sub_1a059,sub_1a090,sub_1a196,sub_1a23f,sub_1a313,sub_1a32a,sub_1a380,sub_1a569,sub_1a5d0,sub_1a5ea,sub_1a635,sub_1a675,sub_1a6af,sub_1a6d0,sub_1a7f9,sub_1a86d,sub_1a8a5,sub_1a9f1,sub_1aa15,sub_1aa80,sub_1aae0,sub_1ac2a,sub_1ac4c,sub_1ac6a,sub_1ac9c,sub_1acc6,sub_1acdc,sub_1ad24,sub_1ad60,sub_1ad72,sub_1add3,sub_1ae0b,sub_1ae73,sub_1aec0,sub_1aee1,sub_1b044,sub_1b068,sub_1b082,sub_1b09e,sub_1b0c0,sub_1b1ce,sub_1b295,sub_1b2c0,sub_1b2f2,sub_1b484,sub_1b4a7,sub_1b4e4,sub_1b50b,sub_1b52c,sub_1b54c,sub_1b570,sub_1b717,sub_1b72b,sub_1b75d,sub_1b787,sub_1b7aa,sub_1b7db,sub_1b96e,sub_1b989,sub_1b9a3,sub_1b9b6,sub_1b9e0,sub_1ba06,sub_1babd,sub_1bad1,sub_1baf1,sub_1bb07,sub_1bb46,sub_1bb73,sub_1bd33,sub_1bd4d,sub_1bd77,sub_1bdf8,sub_1be18,sub_1be30,sub_1be40,sub_1c000,sub_1c06e,sub_1c0a5,sub_1c140,sub_1c17a,sub_1c189,sub_1c1eb,sub_1c1fd,sub_1c20f,sub_1c238,sub_1c25d,sub_1c290,sub_1c37a,sub_1c3cb,sub_1c45a,sub_1c4bb,sub_1c500,sub_1c543,sub_1c598,sub_1c5e0,sub_1c630,sub_1c680,sub_1c69d,sub_1c8c1,sub_1c924,sub_1c934,sub_1c95e,sub_1c99e,sub_1c9c7,sub_1c9d6,sub_1ca05,sub_1ca14,sub_1ca59,sub_1ca65,sub_1ca99,sub_1cab9,sub_1cac6,sub_1cac7,sub_1caed,sub_1cb28,sub_1cb3e,sub_1cb4f,sub_1cb6b,sub_1cb8d,sub_1cbaf,sub_1cbd3,sub_1cbfb,sub_1cc4c,sub_1ccc0,sub_1ccf2,sub_1cd51,sub_1cd58,sub_1cd84,sub_1cd93,sub_1cdef,sub_1ce10,sub_1ce90,sub_1cece,sub_1cee0,sub_1d004,sub_1d05b,sub_1d06b,sub_1d08b,sub_1d0a0,sub_1d115,sub_1d1c7,sub_1d1e1,sub_1d1fd,sub_1d215,sub_1d23f,sub_1d270,sub_1d330,sub_1d336,sub_1d42a,sub_1d45b,sub_1d475,sub_1d4d6};
const ROUTINE_PCS={"start": [0, 2097153, 2097154], "sub_17230": [0, 2097153, 2097154, 2097155, 2097156, 2097157, 2097158, 2097159, 2097160, 2097161, 2097162, 94831, 2097163, 2097164, 2097165, 2097166, 94869, 2097167, 2097168, 2097169, 2097170, 2097171, 2097172, 94897, 2097173, 2097174, 2097175, 2097176, 2097177, 2097178, 2097179, 2097180, 2097181, 2097182, 94931, 2097183, 2097184, 2097185, 2097186, 94942, 2097187, 2097188, 2097189, 2097190, 2097191, 2097192, 2097193, 2097194, 2097195, 2097196, 95011, 2097197, 2097198, 2097199, 2097200, 2097201, 2097202, 2097203, 2097204, 95079, 2097205, 2097206, 95088, 2097207, 2097208, 2097209, 2097210, 2097211, 2097212, 2097213, 2097214, 2097215, 2097216, 2097217, 2097218, 2097219, 2097220, 95109, 95119, 2097221, 2097222, 95132, 95142, 2097223, 2097224, 2097225, 2097226, 2097227, 2097228, 95169, 2097229, 2097230, 2097231, 2097232, 2097233, 2097234, 2097235, 2097236, 2097237, 2097238, 2097239, 2097240, 2097241, 2097242, 95207, 2097243, 2097244, 95253, 2097245, 2097246, 95290, 2097247, 2097248, 95308, 95322, 95336, 95353, 95376, 2097249, 2097250, 2097251, 2097252, 2097253, 2097254, 2097255, 2097256, 2097257, 2097258, 2097259, 2097260, 2097261, 2097262, 2097263, 2097264, 95406, 2097265, 2097266, 2097267, 2097268, 2097269, 2097270, 2097271, 2097272, 2097273, 2097274, 2097275, 2097276, 2097277, 2097278, 2097279, 2097280, 95450, 2097281, 2097282, 2097283, 2097284, 2097285, 2097286, 2097287, 2097288, 2097289, 2097290, 2097291, 2097292, 2097293, 2097294, 95477, 2097295, 2097296, 2097297, 2097298, 2097299, 2097300, 2097301, 2097302, 2097303, 2097304, 2097305, 2097306, 2097307, 2097308, 95507, 2097309, 2097310, 95510, 95534, 2097311, 2097312, 2097313, 2097314, 2097315, 2097316, 2097317, 2097318, 2097319, 2097320, 2097321, 2097322, 2097323, 2097324, 95561, 2097325, 2097326, 2097327, 2097328, 2097329, 2097330, 2097331, 2097332, 2097333, 2097334, 2097335, 2097336, 2097337, 2097338, 2097339, 2097340, 95609, 2097341, 2097342, 2097343, 2097344, 2097345, 2097346, 2097347, 2097348, 2097349, 2097350, 2097351, 2097352, 2097353, 2097354, 95636, 2097355, 2097356, 2097357, 2097358, 2097359, 2097360, 2097361, 2097362, 2097363, 2097364, 2097365, 2097366, 2097367, 2097368, 2097369, 2097370, 95684, 2097371, 2097372, 2097373, 2097374, 2097375, 2097376, 2097377, 2097378, 2097379, 2097380, 2097381, 2097382, 2097383, 2097384, 2097385, 2097386, 95714, 2097387, 2097388, 2097389, 2097390, 2097391, 2097392, 2097393, 2097394, 2097395, 2097396, 2097397, 2097398, 2097399, 2097400, 2097401, 2097402, 95762, 2097403, 2097404, 2097405, 2097406, 2097407, 2097408, 2097409, 2097410, 2097411, 2097412, 2097413, 2097414, 95786, 2097415, 2097416, 2097417, 2097418, 2097419, 2097420, 2097421, 2097422, 2097423, 2097424, 2097425, 2097426, 2097427, 2097428, 95831, 95841, 95851, 95863, 2097429, 2097430, 95881, 2097431, 2097432, 2097433, 2097434, 2097435, 2097436, 2097437, 2097438, 2097439, 2097440, 95912, 2097441, 2097442, 2097443, 2097444, 2097445, 2097446, 2097447, 2097448, 2097449, 2097450, 2097451, 2097452], "sub_176d0": [0, 95958, 95959, 2097153, 2097154, 2097155, 2097156, 96015, 2097157, 2097158, 96038, 2097159, 2097160, 96060, 2097161, 2097162, 96083, 2097163, 2097164, 2097165, 2097166, 96101, 96105, 2097167, 2097168, 2097169, 2097170, 96158, 2097171, 2097172, 96172, 2097173, 2097174, 96179, 96206, 96239, 96253, 96256, 96289, 96291, 96331, 96352], "sub_17863": [0, 96372, 96382], "sub_17888": [0, 96420, 96425], "sub_178ad": [0, 2097153, 2097154, 96468, 96469, 2097155, 2097156, 2097157, 2097158, 2097159, 2097160, 96503, 96512, 96518], "sub_1790e": [0, 2097153, 2097154, 96541, 96550], "sub_17930": [0], "sub_1793d": [0, 96591, 2097153, 2097154, 2097155, 2097156, 2097157, 2097158], "sub_179d1": [0, 96741, 96751, 2097153, 2097154, 2097155, 2097156, 96821, 2097157, 2097158, 2097159, 2097160], "sub_17aa2": [0, 96944, 96962, 96981, 96993, 97001], "sub_17b15": [0, 2097153, 2097154, 97068, 97069, 97081, 97084, 97101, 2097155, 2097156, 97110, 97131, 97145, 97155, 97185, 2097157, 2097158, 97218, 97228, 2097159, 2097160, 2097161, 2097162, 97257, 2097163, 2097164, 97286, 97318, 2097165, 2097166, 97354, 97374, 97383, 97406, 2097167, 2097168, 97434, 97454, 97462, 97488, 97508, 97517, 97532, 97534, 2097169, 2097170, 97561, 97579, 97584, 97603, 97617, 97631, 97644, 97667, 97684, 97717, 97723, 2097171, 2097172, 97728, 2097173, 2097174, 97733, 97735, 2097175, 2097176, 2097177, 2097178, 2097179, 2097180, 2097181, 2097182, 97755, 97756, 2097183, 2097184, 97761, 97762, 97794, 97795, 2097185, 2097186, 97813, 2097187, 2097188, 2097189, 2097190, 2097191, 2097192, 97840, 2097193, 2097194, 2097195, 2097196, 2097197, 2097198, 2097199, 2097200, 97867, 97868, 2097201, 2097202, 2097203, 2097204, 2097205, 2097206, 2097207, 2097208, 2097209, 2097210, 97935, 97942, 97943, 97946, 97956, 2097211, 2097212, 97984, 98014, 98022, 98033, 98053, 2097213, 2097214, 98071, 98102, 98130, 98137, 2097215, 2097216, 98175, 98184, 2097217, 2097218, 2097219, 2097220, 98211, 2097221, 2097222, 2097223, 2097224, 98257, 98264, 98284, 98292, 98298, 98318, 98334, 98348, 98354, 98367, 2097225, 2097226, 2097227, 2097228, 98374, 98383, 2097229, 2097230, 98387, 98401, 2097231, 2097232, 98419, 2097233, 2097234, 98438, 2097235, 2097236, 98448, 2097237, 2097238, 98468, 98472, 98497, 98529, 98553, 98569, 98593, 98628, 2097239, 2097240, 98659, 98660, 2097241, 2097242, 98677, 2097243, 2097244, 2097245, 2097246, 2097247, 2097248, 98707, 2097249, 2097250, 2097251, 2097252, 2097253, 2097254, 2097255, 2097256, 2097257, 2097258], "sub_181b7": [0, 98774, 98788, 2097153, 2097154], "sub_181f9": [0, 98840, 98871, 98883, 98891, 98894], "sub_18250": [0, 98911, 98933, 98946, 98960], "sub_18299": [0, 98999, 2097153, 2097154, 2097155, 2097156, 2097157, 2097158, 2097159, 2097160, 2097161, 2097162, 2097163, 2097164, 2097165, 2097166], "sub_1830d": [0], "sub_18342": [0, 2097153, 2097154, 2097155, 2097156], "sub_18354": [0, 2097153, 2097154], "sub_18375": [0, 2097153, 2097154], "sub_18396": [0, 99237, 99246, 2097153, 2097154, 2097155, 2097156, 2097157, 2097158, 99291, 2097159, 2097160, 2097161, 2097162, 2097163, 2097164, 2097165, 2097166], "sub_18413": [0, 2097153, 2097154], "sub_18430": [0, 2097153, 2097154, 99392, 2097155, 2097156, 2097157, 99422, 2097158, 2097159, 99446, 2097160, 2097161, 99470, 2097162, 2097163, 99493, 2097164, 2097165, 99524], "sub_184d1": [0, 2097153, 2097154, 99557, 99566], "sub_184f1": [0, 99587, 99593, 99614, 99623, 99641, 99647, 99668, 99677], "sub_18568": [0, 2097153, 2097154, 99719, 99720, 99728, 99741, 99761, 99774, 2097155, 2097156, 99795, 99796, 99797, 2097157, 2097158], "sub_185da": [0], "sub_185e7": [0, 2097153], "sub_18608": [0], "sub_18618": [0], "sub_18649": [0, 99968, 100013], "sub_186af": [0, 100065], "sub_18800": [0, 100360, 2097153, 2097154, 100399], "sub_18838": [0, 2097153, 2097154, 100419, 2097155, 2097156, 100430, 2097157, 2097158, 2097159, 2097160, 100448, 2097161, 2097162, 100483, 100485], "sub_18887": [0, 100505, 100520, 100529, 2097153, 2097154, 100596], "sub_188f6": [0, 2097153, 2097154, 100652, 2097155, 2097156, 100670, 100687, 100698, 100749, 100784, 100807], "sub_189c9": [0], "sub_189dd": [0, 100857, 100894, 100908, 2097153, 2097154, 100928, 100930], "sub_18a60": [0], "sub_18a7b": [0, 2097153, 2097154, 101004, 101005, 101039, 101054, 101087, 101093, 101123, 2097155, 2097156, 101136, 101137, 2097157, 2097158, 2097159, 2097160, 101165, 2097161, 2097162, 2097163, 2097164], "sub_18b52": [0, 2097153, 2097154], "sub_18b66": [0, 101228, 101229, 2097153, 2097154, 2097155, 2097156, 101249, 2097157, 2097158, 101306, 2097159, 2097160, 101322, 101330, 2097161, 2097162, 2097163, 2097164, 101373, 2097165, 2097166, 2097167, 2097168, 101392, 101393, 2097169, 2097170, 101408, 2097171, 2097172, 2097173, 2097174, 101490, 2097175, 2097176, 101541, 101542, 101571, 101578, 2097177, 2097178, 101634, 101639], "sub_18d1a": [0], "sub_18d35": [0, 2097153, 2097154, 101754], "sub_18d7c": [0, 101772, 101792, 101800], "sub_18daa": [0, 2097153, 2097154, 2097155, 2097156, 2097157, 2097158, 2097159, 2097160, 2097161, 2097162, 101883, 101903, 101905], "sub_18e20": [0, 2097153, 2097154, 2097155, 2097156, 101954, 2097157, 2097158, 2097159, 2097160, 2097161, 2097162, 2097163, 2097164, 102001, 2097165, 2097166, 102006, 2097167, 2097168, 102009, 102026, 102029, 2097169, 2097170, 2097171, 2097172], "sub_18e97": [0, 2097153, 2097154, 102076, 2097155, 2097156, 2097157, 2097158, 102096, 102138, 2097159, 102150, 102180, 102203, 102215, 102226, 102238], "sub_18f61": [0, 2097153, 2097154, 102264, 2097155, 2097156, 2097157, 2097158, 2097159, 2097160, 102295, 2097161, 2097162], "sub_18f9e": [0, 2097153, 2097154], "sub_18fa6": [0, 2097153, 2097154, 102321, 2097155, 2097156, 102362, 2097157, 2097158, 2097159, 2097160, 102390, 102404, 2097161, 2097162, 2097163, 2097164, 102415, 2097165, 2097166, 2097167, 2097168, 102450, 102458, 2097169, 2097170], "sub_19047": [0, 102484, 2097153, 2097154], "sub_19070": [0, 2097153, 2097154], "sub_19093": [0, 2097153, 2097154, 102570, 102571, 2097155, 2097156, 2097157, 2097158, 102631, 102642, 2097159, 2097160, 2097161, 2097162, 102649, 2097163, 2097164, 102668, 2097165, 2097166, 102674, 2097167, 2097168, 102706, 102716, 2097169, 2097170, 102764, 102765, 102783, 102791, 102805, 2097171, 2097172, 2097173, 2097174, 102821, 2097175, 2097176, 102870, 102875, 102891, 102908, 102922, 102930, 102943, 2097177, 2097178, 102955, 2097179, 2097180, 2097181, 2097182, 102979, 2097183, 2097184, 2097185, 2097186], "sub_19252": [0, 103019, 103041], "sub_19289": [0, 103080, 103094, 2097153, 2097154], "sub_192cb": [0, 2097153, 2097154, 103150, 2097155, 2097156, 2097157, 2097158], "sub_19311": [0, 2097153, 2097154], "sub_19325": [0, 103258, 2097153, 2097154, 103268], "sub_19366": [0, 103289, 103306, 103326, 103331, 2097153, 2097154, 2097155, 2097156, 2097157, 2097158, 103405, 2097159, 2097160, 2097161, 2097162, 103425, 2097163, 2097164, 103438], "sub_19410": [0, 2097153, 2097154, 103481], "sub_19440": [0], "sub_19446": [0, 2097153, 2097154, 103504, 103505, 2097155, 2097156, 2097157, 2097158, 2097159, 2097160, 103550, 2097161, 2097162, 2097163, 2097164, 103581, 103617, 103631, 2097165, 2097166, 2097167, 2097168, 2097169, 2097170, 103660, 103661, 2097171, 2097172], "sub_1950c": [0, 2097153, 2097154], "sub_19527": [0, 103728, 2097153, 2097154], "sub_19560": [0, 103799], "sub_195ab": [0, 2097153, 2097154, 103861, 103862, 103886, 2097155, 2097156, 2097157, 2097158, 2097159, 2097160, 103948, 103963, 103987, 103999, 104008, 2097161, 2097162, 104021, 2097163, 2097164, 104083, 104086, 104106, 2097165, 2097166, 104122, 104130, 104134, 104168, 104178, 2097167, 2097168, 2097169, 2097170, 104224, 2097171, 2097172, 2097173, 2097174, 104234, 104235, 104264, 104281, 104291, 2097175, 2097176], "sub_1977d": [0, 2097153, 2097154], "sub_19797": [0, 2097153, 2097154, 104382, 104447, 2097155, 2097156, 2097157, 2097158, 104476, 2097159, 2097160, 2097161, 2097162, 2097163, 2097164, 2097165, 2097166, 104508, 104510, 2097167, 2097168, 2097169, 2097170, 2097171, 2097172, 2097173, 2097174, 2097175, 2097176, 2097177, 2097178], "sub_1988e": [0, 104599, 2097153, 2097154], "sub_198c0": [0, 104648, 104663], "sub_198e3": [0, 104685, 2097153, 2097154], "sub_1990a": [0, 2097153, 2097154], "sub_19911": [0, 2097153, 2097154], "sub_19918": [0], "sub_19922": [0, 2097153, 2097154], "sub_1992c": [0, 2097153, 2097154], "sub_19936": [0, 104761, 2097153, 2097154], "sub_1994e": [0, 104790], "sub_19969": [0, 104827, 2097153, 2097154], "sub_199c0": [0, 104933, 2097153, 2097154, 2097155, 2097156, 104990, 2097157, 2097158, 105001, 2097159, 2097160, 2097161, 2097162, 2097163, 2097164, 2097165, 2097166, 2097167, 2097168, 2097169, 2097170, 2097171, 2097172, 105070, 2097173, 2097174, 2097175, 2097176, 2097177, 2097178, 2097179, 2097180, 2097181, 2097182, 2097183, 2097184, 2097185, 2097186, 2097187, 2097188, 105149, 2097189, 2097190, 2097191, 2097192, 2097193, 2097194, 2097195, 2097196, 2097197, 2097198, 105198, 2097199, 2097200, 2097201, 2097202, 2097203, 2097204, 2097205, 2097206, 2097207, 2097208, 2097209, 2097210, 2097211, 2097212, 2097213, 2097214, 105273, 2097215, 2097216, 2097217, 2097218, 2097219, 2097220, 2097221, 2097222, 2097223, 2097224, 2097225, 2097226, 2097227, 2097228], "sub_19b75": [0, 2097153, 2097154, 2097155, 2097156], "sub_19b88": [0, 105358, 2097153, 2097154], "sub_19ba0": [0, 105382, 2097153, 2097154], "sub_19bb8": [0, 105406, 2097153, 2097154], "sub_19bd0": [0, 2097153, 2097154, 2097155, 2097156, 2097157, 2097158], "sub_19c11": [0, 105492, 105508], "sub_19c30": [0, 2097153, 2097154, 2097155, 2097156, 2097157, 2097158, 2097159, 2097160, 2097161, 2097162, 2097163, 2097164, 2097165], "sub_19c60": [0, 2097153, 2097154, 2097155, 2097156, 2097157, 2097158, 2097159, 2097160], "sub_19c98": [0, 2097153, 2097154], "sub_19cb0": [0, 105651, 2097153, 2097154, 2097155, 2097156, 2097157, 2097158], "sub_19cf6": [0, 105727, 2097153, 2097154, 2097155, 2097156], "sub_19d54": [0, 105824, 2097153, 105833, 105851, 105874], "sub_19da1": [0, 105894, 2097153, 2097154], "sub_19dbb": [0, 2097153, 2097154, 2097155, 2097156, 2097157, 2097158], "sub_19dce": [0, 105940, 105955, 2097153, 2097154, 2097155, 2097156, 105986, 2097157, 106012, 106017, 2097158, 2097159, 2097160, 2097161, 106064, 2097162, 2097163, 2097164, 2097165], "sub_19e6d": [0, 106107, 2097153, 2097154, 106125, 2097155, 2097156, 2097157, 2097158], "sub_19eb4": [0, 106172, 106186, 2097153, 2097154], "sub_19ee0": [0, 106222], "sub_19efc": [0, 106250, 106254, 106268, 106274, 106280, 106286, 106292, 106334], "sub_19f65": [0, 106352, 106356, 106393], "sub_19fa0": [0, 106420], "sub_19fcd": [0, 106456, 106483], "sub_19ffa": [0, 106503, 106533], "sub_1a02d": [0], "sub_1a040": [0, 106581], "sub_1a059": [0, 106599, 106617, 106623], "sub_1a090": [0, 106647, 106648, 106669, 106683, 106696, 106712, 106744, 106757, 2097153, 2097154, 106807, 2097155, 2097156, 2097157, 2097158, 106822, 2097159, 2097160, 2097161, 2097162, 2097163, 2097164, 2097165, 2097166, 2097167, 2097168, 106889, 2097169, 2097170, 2097171, 2097172], "sub_1a196": [0, 2097153, 2097154, 106913, 106927, 2097155, 2097156, 106970, 106972, 106978, 106979, 2097157, 2097158, 2097159, 2097160, 107002, 2097161, 2097162, 2097163, 2097164, 2097165, 2097166, 107051, 2097167, 2097168, 2097169, 2097170, 2097171, 2097172], "sub_1a23f": [0, 2097153, 2097154, 107090, 107096, 2097155, 2097156, 107113, 2097157, 2097158, 107144, 107152, 107232, 107240, 2097159, 2097160, 2097161, 2097162], "sub_1a313": [0, 2097153, 2097154, 2097155, 2097156], "sub_1a32a": [0, 107316, 107329, 107348, 107356, 107389], "sub_1a380": [0, 2097153, 2097154, 107416, 107417, 2097155, 2097156, 2097157, 2097158, 2097159, 2097160, 107462, 107485, 107516, 2097161, 2097162, 107548, 2097163, 2097164, 107579, 107583, 107586, 2097165, 2097166, 107603, 2097167, 2097168, 107617, 107624, 107643, 107666, 107673, 107704, 2097169, 2097170, 2097171, 2097172, 107740, 107779, 107786, 107815, 107822, 2097173, 2097174, 2097175, 2097176, 107837, 107864, 2097177, 2097178, 2097179, 2097180, 2097181, 2097182], "sub_1a569": [0, 107881, 107899, 107936, 107940, 107977], "sub_1a5d0": [0, 2097153, 2097154], "sub_1a5ea": [0, 2097153, 2097154, 108035, 2097155, 2097156, 108078, 2097157, 2097158, 108081, 108083], "sub_1a635": [0, 2097153, 2097154], "sub_1a675": [0, 2097153, 2097154], "sub_1a6af": [0, 2097153, 2097154], "sub_1a6d0": [0, 108251, 108262, 108265, 108288, 2097153, 2097154, 108353, 108362, 108373, 2097155, 2097156, 2097157, 2097158, 2097159, 2097160, 2097161, 2097162, 108403, 108404, 2097163, 2097164, 2097165, 2097166, 2097167, 2097168, 108426, 2097169, 2097170, 2097171, 2097172, 2097173, 2097174, 108447, 2097175, 2097176, 2097177, 2097178, 108470, 2097179, 2097180, 108509, 108523, 2097181, 2097182, 108535], "sub_1a7f9": [0, 108557, 2097153, 2097154, 108593, 2097155, 2097156, 108620, 2097157, 2097158], "sub_1a86d": [0, 108653, 108656, 108689, 108706], "sub_1a8a5": [0, 2097153, 2097154, 108719, 108720, 108756, 108775, 108781, 2097155, 2097156, 108807, 2097157, 2097158, 108821, 108825, 108835, 108859, 108874, 108908, 108928, 2097159, 2097160, 2097161, 2097162, 2097163, 2097164, 109007, 109020, 109030, 2097165, 2097166], "sub_1a9f1": [0, 109073, 2097153, 2097154], "sub_1aa15": [0, 2097153, 2097154, 109115, 109140, 109145, 2097155, 2097156], "sub_1aa80": [0, 2097153, 2097154, 109200, 2097155, 2097156, 2097157, 2097158], "sub_1aae0": [0, 109290, 2097153, 2097154, 2097155, 2097156, 109315, 2097157, 2097158, 109339, 109343, 109359, 109365, 109374, 2097159, 2097160, 2097161, 2097162, 109427, 109430, 2097163, 2097164, 2097165, 2097166, 2097167, 2097168, 2097169, 2097170, 109470, 2097171, 2097172, 2097173, 2097174, 2097175, 2097176, 2097177, 2097178, 109527, 2097179, 2097180, 109535, 2097181, 2097182, 109547, 2097183, 2097184, 109550, 2097185, 2097186, 2097187, 2097188, 2097189, 2097190, 109580, 2097191, 2097192, 2097193, 2097194], "sub_1ac2a": [0, 2097153, 2097154, 2097155, 2097156], "sub_1ac4c": [0, 2097153, 2097154, 109649, 2097155, 2097156, 109668, 2097157, 2097158], "sub_1ac6a": [0, 2097153, 2097154, 109696, 2097155, 2097156], "sub_1ac9c": [0, 2097153, 2097154, 109747, 2097155, 2097156], "sub_1acc6": [0, 109781], "sub_1acdc": [0, 2097153, 2097154, 109802, 2097155, 2097156, 2097157, 2097158, 2097159, 2097160, 109829, 2097161, 2097162, 109842, 109856, 2097163, 2097164], "sub_1ad24": [0, 109883, 2097153, 2097154, 109897], "sub_1ad60": [0], "sub_1ad72": [0, 2097153, 2097154, 109949, 109959, 2097155, 2097156, 2097157, 2097158, 2097159, 2097160, 2097161, 2097162, 2097163, 2097164, 2097165, 2097166, 2097167, 2097168, 110027], "sub_1add3": [0, 2097153, 2097154], "sub_1ae0b": [0, 110105, 110109, 2097153, 2097154, 110149, 110158, 2097155, 2097156, 110182, 2097157, 2097158], "sub_1ae73": [0, 110255], "sub_1aec0": [0], "sub_1aee1": [0, 2097153, 2097154, 110320, 110321, 2097155, 2097156, 2097157, 2097158, 110338, 110397, 110412, 110416, 110421, 110457, 110466, 110486, 110497, 110502, 110505, 2097159, 2097160, 110523, 2097161, 2097162, 110528, 110536, 110547, 110556, 110567, 2097163, 2097164, 2097165, 2097166, 2097167, 2097168, 2097169, 2097170, 110600, 2097171, 2097172, 2097173, 2097174, 110622, 2097175, 2097176, 2097177, 2097178, 110656, 2097179, 2097180], "sub_1b044": [0, 2097153, 2097154], "sub_1b068": [0, 2097153, 2097154], "sub_1b082": [0, 2097153, 2097154], "sub_1b09e": [0, 2097153, 2097154], "sub_1b0c0": [0, 2097153, 2097154, 110804, 110825, 110826, 2097155, 2097156, 2097157, 2097158, 110885, 110914, 2097159, 2097160, 110949, 2097161, 2097162, 110959, 110984, 111008, 2097163, 2097164, 2097165, 2097166, 111035, 2097167, 2097168, 2097169, 2097170], "sub_1b1ce": [0, 111081, 111093, 2097153, 2097154, 111115, 2097155, 2097156, 2097157, 2097158, 2097159, 2097160, 2097161, 2097162, 2097163, 2097164, 2097165, 2097166, 111212], "sub_1b295": [0, 2097153, 2097154], "sub_1b2c0": [0, 111299, 2097153, 2097154, 2097155, 2097156], "sub_1b2f2": [0, 2097153, 2097154, 111356, 111357, 111381, 111385, 2097155, 2097156, 111404, 2097157, 2097158, 2097159, 2097160, 2097161, 2097162, 111432, 2097163, 2097164, 111444, 111458, 111459, 2097165, 2097166, 2097167, 2097168, 2097169, 2097170, 111493, 2097171, 2097172, 2097173, 2097174, 111537, 2097175, 2097176, 2097177, 2097178, 111580, 111584, 111607, 111624, 111635, 111646, 111651, 111656, 111668, 2097179, 2097180, 2097181, 2097182, 2097183, 2097184, 111702, 111715, 2097185, 2097186], "sub_1b484": [0, 2097153, 2097154], "sub_1b4a7": [0, 111788, 2097153, 2097154, 111797, 111807, 2097155, 2097156, 2097157, 2097158], "sub_1b4e4": [0, 111861], "sub_1b50b": [0, 2097153, 2097154], "sub_1b52c": [0, 2097153, 2097154], "sub_1b54c": [0, 111960, 111972, 111982], "sub_1b570": [0, 2097153, 2097154, 111994, 111995, 112010, 2097155, 2097156, 2097157, 2097158, 2097159, 2097160, 2097161, 2097162, 2097163, 2097164, 112076, 2097165, 2097166, 112097, 112100, 112128, 112151, 2097167, 2097168, 2097169, 2097170, 112178, 2097171, 2097172, 112193, 2097173, 2097174, 112207, 112211, 2097175, 2097176, 112222, 112249, 112262, 112265, 112295, 112307, 112310, 2097177, 2097178, 2097179, 2097180, 2097181, 2097182, 112352, 2097183, 2097184, 112389, 2097185, 2097186], "sub_1b717": [0, 112425], "sub_1b72b": [0, 112442, 112464], "sub_1b75d": [0, 2097153, 2097154], "sub_1b787": [0, 2097153, 2097154], "sub_1b7aa": [0, 2097153, 2097154, 2097155, 2097156], "sub_1b7db": [0, 2097153, 2097154, 112613, 112614, 2097155, 2097156, 2097157, 2097158, 112646, 2097159, 2097160, 112679, 112682, 112690, 112709, 112712, 112735, 112737, 112745, 2097161, 2097162, 112754, 2097163, 2097164, 2097165, 2097166, 112760, 112761, 112790, 112793, 2097167, 2097168, 112802, 2097169, 2097170, 2097171, 2097172, 2097173, 2097174, 2097175, 2097176, 112850, 2097177, 2097178, 112877, 112878, 2097179, 2097180, 112924, 2097181, 2097182, 2097183, 2097184, 2097185, 2097186, 112958, 2097187, 2097188, 2097189, 2097190, 2097191, 2097192, 2097193, 2097194], "sub_1b96e": [0, 2097153, 2097154], "sub_1b989": [0, 2097153, 2097154], "sub_1b9a3": [0, 2097153, 2097154], "sub_1b9b6": [0, 113108], "sub_1b9e0": [0, 113141, 2097153, 2097154], "sub_1ba06": [0, 2097153, 2097154, 113180, 113181, 113200, 113234, 2097155, 2097156, 2097157, 2097158, 2097159, 2097160, 2097161, 2097162, 2097163, 2097164, 113276, 113293, 2097165, 2097166, 113312, 2097167, 2097168, 2097169, 2097170, 2097171, 2097172, 113325, 2097173, 2097174, 113337, 113338], "sub_1babd": [0, 2097153, 2097154, 113357, 2097155, 2097156], "sub_1bad1": [0, 2097153, 2097154], "sub_1baf1": [0, 2097153, 2097154, 113410, 113411, 2097155, 2097156], "sub_1bb07": [0, 2097153, 2097154, 113458, 2097155, 2097156, 2097157, 2097158, 113474, 2097159, 2097160], "sub_1bb46": [0, 113509, 2097153, 2097154], "sub_1bb73": [0, 113548, 2097153, 2097154, 113558, 113559, 2097155, 2097156, 2097157, 2097158, 2097159, 2097160, 2097161, 2097162, 113604, 113605, 113615, 113638, 113670, 113696, 113705, 2097163, 2097164, 2097165, 2097166, 113723, 113744, 113763, 113787, 2097167, 2097168, 2097169, 2097170, 113805, 113821, 113861, 113868, 2097171, 2097172, 113874, 2097173, 2097174, 2097175, 2097176, 2097177, 2097178, 113943, 2097179, 2097180, 2097181, 2097182, 2097183, 2097184, 2097185, 2097186, 113964, 2097187, 2097188, 113967, 2097189, 2097190], "sub_1bd33": [0, 2097153, 2097154], "sub_1bd4d": [0, 114032, 2097153, 2097154], "sub_1bd77": [0, 114066, 2097153, 2097154, 2097155, 2097156, 114120, 2097157, 2097158], "sub_1bdf8": [0, 2097153, 2097154, 2097155, 2097156], "sub_1be18": [0, 2097153, 2097154], "sub_1be30": [0], "sub_1be40": [0, 2097153, 2097154, 114251, 114280, 114284, 2097155, 2097156, 2097157, 2097158, 114292, 114293, 2097159, 2097160, 114327, 114356, 114364, 2097161, 2097162, 2097163, 2097164, 114377, 114401, 114405, 114408, 114431, 2097165, 2097166, 114444, 114470, 114497, 114500, 114519, 2097167, 2097168, 114544, 114550, 114576, 114587, 114600, 114621, 2097169, 2097170, 114641, 2097171, 2097172, 2097173, 2097174, 114661, 2097175, 2097176, 2097177, 2097178, 2097179, 2097180, 2097181, 2097182, 114680, 2097183, 2097184], "sub_1c000": [0, 2097153, 2097154, 2097155, 2097156, 2097157, 2097158, 114736, 2097159, 2097160, 2097161, 2097162, 2097163, 2097164, 114783, 2097165, 2097166], "sub_1c06e": [0, 114813, 2097153, 2097154, 2097155, 2097156, 2097157, 2097158, 114837], "sub_1c0a5": [0, 114856, 2097153, 2097154, 114899, 114902, 2097155, 2097156, 2097157, 2097158, 114923, 2097159, 2097160, 2097161, 2097162, 2097163, 2097164, 2097165, 2097166, 114981, 2097167, 2097168, 114984, 2097169, 2097170, 115003], "sub_1c140": [0, 115040, 115050, 115054, 2097153, 2097154], "sub_1c17a": [0, 2097153, 2097154], "sub_1c189": [0, 115087, 2097153, 2097154, 2097155, 2097156, 115141, 2097157, 2097158], "sub_1c1eb": [0], "sub_1c1fd": [0], "sub_1c20f": [0, 115223, 115226, 115251], "sub_1c238": [0, 115267, 115288], "sub_1c25d": [0, 115302, 2097153, 2097154], "sub_1c290": [0, 115360, 115367, 115385, 115397, 115409, 2097153, 2097154, 115419, 2097155, 2097156, 115446, 115454, 115458, 115469, 2097157, 2097158, 2097159, 2097160, 2097161, 2097162, 2097163, 2097164, 2097165, 2097166, 115536, 2097167, 2097168, 2097169, 2097170, 2097171, 2097172, 2097173, 2097174, 115569], "sub_1c37a": [0, 115581, 2097153, 2097154], "sub_1c3cb": [0, 115667, 2097153, 2097154, 115703, 2097155, 2097156, 115714, 2097157, 2097158, 115738, 2097159, 2097160, 2097161, 2097162, 2097163, 115765, 2097164, 2097165, 115772, 2097166, 2097167, 2097168, 2097169], "sub_1c45a": [0, 115834, 115846, 115850, 115882, 115894], "sub_1c4bb": [0, 2097153, 2097154, 2097155, 2097156, 115916, 2097157, 2097158, 2097159, 2097160, 2097161, 2097162, 115936, 115947, 2097163, 2097164, 2097165, 2097166], "sub_1c500": [0, 2097153, 2097154, 2097155, 2097156, 116012], "sub_1c543": [0, 2097153, 2097154, 116076, 2097155, 2097156, 116085, 2097157, 2097158, 2097159, 2097160, 2097161, 2097162], "sub_1c598": [0, 116138, 116150, 2097153, 2097154, 2097155, 2097156], "sub_1c5e0": [0, 2097153, 2097154, 2097155, 116237, 2097156, 2097157, 116241], "sub_1c630": [0, 116300, 2097153, 2097154, 2097155, 2097156], "sub_1c680": [0], "sub_1c69d": [0, 2097153, 2097154, 2097155, 2097156, 116437, 116438, 116452, 116469, 2097157, 2097158, 116484, 116497, 2097159, 2097160, 2097161, 2097162, 116519, 116520, 2097163, 2097164, 2097165, 2097166, 116558, 2097167, 2097168, 116562, 116601, 116626, 116627, 116649, 116670, 2097169, 2097170, 116686, 116715, 2097171, 2097172, 116776, 2097173, 2097174, 116798, 116806, 116819, 116848, 116862, 116867, 116887, 116925, 2097175, 2097176], "sub_1c8c1": [0, 2097153, 2097154, 2097155, 2097156, 2097157, 2097158, 116964, 116967, 117000, 2097159, 2097160, 2097161, 2097162, 2097163, 2097164], "sub_1c924": [0, 117040], "sub_1c934": [0], "sub_1c95e": [0, 117092, 2097153, 2097154, 117114, 2097155, 2097156, 117130, 2097157, 2097158, 2097159, 2097160], "sub_1c99e": [0, 117162], "sub_1c9c7": [0, 2097153, 2097154], "sub_1c9d6": [0, 117223, 117240], "sub_1ca05": [0, 2097153, 2097154], "sub_1ca14": [0, 2097153, 2097154, 2097155, 2097156, 117323, 117327, 2097157, 2097158], "sub_1ca59": [0], "sub_1ca65": [0, 2097153, 2097154, 117366, 117367, 117393, 2097155, 2097156], "sub_1ca99": [0, 2097153, 2097154], "sub_1cab9": [0], "sub_1cac6": [0], "sub_1cac7": [0, 2097153, 2097154], "sub_1caed": [0], "sub_1cb28": [0, 2097153, 2097154, 117560], "sub_1cb3e": [0, 2097153, 2097154], "sub_1cb4f": [0, 2097153, 2097154, 2097155, 2097156, 2097157, 2097158], "sub_1cb6b": [0, 2097153, 2097154, 2097155, 2097156], "sub_1cb8d": [0, 2097153, 2097154, 2097155, 2097156], "sub_1cbaf": [0, 2097153, 2097154], "sub_1cbd3": [0, 117749, 2097153, 2097154], "sub_1cbfb": [0, 2097153, 2097154, 117775, 117785, 117787, 2097155, 2097156, 2097157, 2097158, 117832, 2097159, 2097160], "sub_1cc4c": [0, 2097153, 2097154, 117860, 117861, 117897, 117917], "sub_1ccc0": [0, 2097153, 2097154, 117969, 117970, 2097155, 2097156], "sub_1ccf2": [0, 2097153, 2097154, 2097155, 2097156, 118022, 2097157, 2097158, 2097159, 2097160, 118080, 2097161, 2097162, 2097163, 2097164], "sub_1cd51": [0], "sub_1cd58": [0, 2097153, 2097154, 118128, 2097155, 2097156], "sub_1cd84": [0, 2097153, 2097154], "sub_1cd93": [0, 2097153, 2097154, 118185, 118186, 118210, 2097155, 2097156, 118234], "sub_1cdef": [0, 118255, 2097153, 2097154], "sub_1ce10": [0, 2097153, 2097154, 118302, 2097155, 2097156, 118333, 2097157, 2097158, 2097159, 2097160, 2097161, 2097162, 118374, 2097163, 2097164, 118401, 2097165, 2097166], "sub_1ce90": [0, 2097153, 2097154, 2097155, 2097156, 118469, 118470, 2097157, 2097158, 118476], "sub_1cece": [0, 2097153, 2097154], "sub_1cee0": [0, 2097153, 2097154, 2097155, 2097156, 2097157, 2097158, 2097159, 2097160, 2097161, 2097162, 2097163, 2097164, 2097165, 2097166, 2097167, 2097168, 2097169, 2097170, 2097171, 2097172, 2097173, 2097174, 2097175, 2097176, 2097177, 2097178, 2097179, 2097180, 2097181, 2097182, 118660, 2097183, 2097184, 118689, 2097185, 2097186, 2097187, 2097188, 118713, 118736, 118743, 2097189, 2097190, 2097191, 2097192, 118771, 118778], "sub_1d004": [0, 118802, 118817, 2097153, 2097154, 2097155, 2097156, 118856, 118860, 2097157, 2097158, 2097159, 2097160], "sub_1d05b": [0, 118875, 2097153, 2097154], "sub_1d06b": [0, 2097153, 2097154], "sub_1d08b": [0, 2097153, 2097154], "sub_1d0a0": [0, 2097153, 2097154, 2097155, 2097156, 2097157, 2097158, 2097159, 2097160, 2097161, 2097162, 2097163, 2097164, 119018, 2097165, 2097166, 2097167, 2097168, 2097169, 2097170, 2097171, 2097172], "sub_1d115": [0, 2097183, 2097184, 2097185, 2097186, 2097153, 2097154, 119064, 2097155, 2097156, 2097157, 2097158, 119076, 119079, 2097159, 119106, 2097160, 2097161, 119116, 119119, 2097162, 2097163, 119126, 119129, 2097164, 119168, 119174, 2097165, 2097166, 2097167, 2097168, 2097169, 2097170, 2097171, 2097172, 2097173, 2097174, 119214, 2097175, 2097176, 2097177, 2097178, 2097179, 2097180, 119235, 2097181, 2097182], "sub_1d1c7": [0, 119246, 119255, 119258, 2097153], "sub_1d1e1": [0, 2097153, 2097154, 2097155, 2097156], "sub_1d1fd": [0], "sub_1d215": [0, 2097153, 2097154, 2097155, 2097156, 2097157, 2097158, 119334, 119343, 2097159, 2097160, 119351], "sub_1d23f": [0, 2097153, 2097154, 119371, 119381, 2097155, 2097156], "sub_1d270": [0, 119432, 2097153, 2097154, 2097155, 2097156, 2097157, 2097158, 119469, 2097159, 2097160, 119511, 2097161, 2097162, 119532, 2097163, 2097164, 119568, 119574, 2097165, 2097166], "sub_1d330": [0], "sub_1d336": [0, 2097153, 2097154, 119617, 2097155, 2097156, 2097157, 2097158, 2097159, 2097160, 2097161, 2097162, 119641, 119648, 2097163, 2097164, 119679, 119702, 119717, 119736, 119758, 119771, 119799, 119812, 2097165, 2097166, 119821, 2097167, 2097168, 2097169, 2097170, 2097171, 2097172, 2097173, 2097174, 2097175, 2097176], "sub_1d42a": [0, 119879, 2097153, 2097154], "sub_1d45b": [0, 2097153, 2097154], "sub_1d475": [0, 119935, 119946, 119947, 2097153, 2097154, 2097155, 2097156, 2097157, 2097158], "sub_1d4d6": [0, 120031, 2097153, 2097154, 2097155, 2097156]};
const ROUTINE_CALLS={"start": {"2097153": "sub_17230"}, "sub_17230": {"2097153": "sub_1ce90", "2097155": "sub_185da", "2097157": "sub_18649", "2097159": "sub_18618", "2097161": "interrupt", "2097163": "interrupt", "2097165": "sub_18f61", "2097167": "sub_1a040", "2097169": "sub_19911", "2097171": "sub_1990a", "2097173": "sub_198c0", "2097175": "sub_18f61", "2097177": "sub_1cd51", "2097179": "sub_1cee0", "2097181": "sub_1cd51", "2097183": "sub_1cd51", "2097185": "sub_1d115", "2097187": "sub_1990a", "2097189": "sub_18f61", "2097191": "sub_1cd51", "2097193": "interrupt", "2097195": "sub_1cd51", "2097197": "sub_19c30", "2097199": "sub_1c630", "2097201": "sub_1cd51", "2097203": "sub_179d1", "2097205": "sub_1793d", "2097207": "sub_19070", "2097209": "sub_18a60", "2097211": "sub_19440", "2097213": "sub_19560", "2097215": "sub_19922", "2097217": "sub_1992c", "2097219": "sub_1caed", "2097221": "sub_18568", "2097223": "sub_18430", "2097225": "sub_17b15", "2097227": "sub_19093", "2097229": "sub_1c69d", "2097231": "sub_176d0", "2097233": "sub_18b66", "2097235": "sub_18a7b", "2097237": "sub_19446", "2097239": "sub_195ab", "2097241": "sub_198e3", "2097243": "interrupt", "2097245": "sub_1a02d", "2097247": "sub_1a02d", "2097249": "sub_18e20", "2097251": "sub_199c0", "2097253": "sub_179d1", "2097255": "sub_19070", "2097257": "sub_1a635", "2097259": "sub_1d330", "2097261": "sub_1c189", "2097263": "sub_1caed", "2097265": "sub_18568", "2097267": "sub_18430", "2097269": "sub_1c69d", "2097271": "sub_17b15", "2097273": "sub_1d336", "2097275": "sub_1a196", "2097277": "sub_1a090", "2097279": "sub_1be40", "2097281": "sub_18e20", "2097283": "sub_199c0", "2097285": "sub_1be30", "2097287": "sub_179d1", "2097289": "sub_1a635", "2097291": "sub_19070", "2097293": "sub_1caed", "2097295": "sub_18568", "2097297": "sub_18430", "2097299": "sub_1c69d", "2097301": "sub_1bb73", "2097303": "sub_1ba06", "2097305": "sub_17b15", "2097307": "sub_19093", "2097309": "sub_1a380", "2097311": "sub_18e20", "2097313": "sub_199c0", "2097315": "sub_1b7aa", "2097317": "sub_179d1", "2097319": "sub_1a635", "2097321": "sub_19070", "2097323": "sub_1caed", "2097325": "sub_18568", "2097327": "sub_18430", "2097329": "sub_1c69d", "2097331": "sub_1b7db", "2097333": "sub_1b570", "2097335": "sub_17b15", "2097337": "sub_1a380", "2097339": "sub_19093", "2097341": "sub_18e20", "2097343": "sub_199c0", "2097345": "sub_179d1", "2097347": "sub_1a635", "2097349": "sub_19070", "2097351": "sub_1b2c0", "2097353": "sub_1caed", "2097355": "sub_18568", "2097357": "sub_18430", "2097359": "sub_1c69d", "2097361": "sub_17b15", "2097363": "sub_1b0c0", "2097365": "sub_1b2f2", "2097367": "sub_1a380", "2097369": "sub_19093", "2097371": "sub_18e20", "2097373": "sub_199c0", "2097375": "sub_179d1", "2097377": "sub_1a635", "2097379": "sub_19070", "2097381": "sub_1ad60", "2097383": "sub_1aec0", "2097385": "sub_1caed", "2097387": "sub_18568", "2097389": "sub_18430", "2097391": "sub_1c69d", "2097393": "sub_17b15", "2097395": "sub_1aee1", "2097397": "sub_1ad72", "2097399": "sub_1a380", "2097401": "sub_19093", "2097403": "sub_18e20", "2097405": "sub_199c0", "2097407": "sub_179d1", "2097409": "sub_1a635", "2097411": "sub_19070", "2097413": "sub_1caed", "2097415": "sub_18568", "2097417": "sub_18430", "2097419": "sub_1c69d", "2097421": "sub_17b15", "2097423": "sub_1a380", "2097425": "sub_19093", "2097427": "sub_1aa80", "2097429": "sub_18e20", "2097431": "sub_18e20", "2097433": "sub_199c0", "2097435": "sub_1a7f9", "2097437": "sub_179d1", "2097439": "sub_1caed", "2097441": "sub_18568", "2097443": "sub_18430", "2097445": "sub_1c69d", "2097447": "sub_17b15", "2097449": "sub_1a8a5", "2097451": "sub_1aa15"}, "sub_176d0": {"2097153": "sub_18608", "2097155": "interrupt", "2097157": "sub_17888", "2097159": "sub_1a02d", "2097161": "sub_1a02d", "2097163": "sub_1a02d", "2097165": "sub_17888", "2097167": "sub_178ad", "2097169": "sub_17863", "2097171": "sub_17863", "2097173": "sub_17863"}, "sub_17863": {}, "sub_17888": {}, "sub_178ad": {"2097153": "sub_1a02d", "2097155": "sub_1a02d", "2097157": "sub_1790e", "2097159": "sub_1790e"}, "sub_1790e": {"2097153": "sub_1a02d"}, "sub_17930": {}, "sub_1793d": {"2097153": "sub_19ee0", "2097155": "sub_18354", "2097157": "sub_17930"}, "sub_179d1": {"2097153": "sub_19ee0", "2097155": "sub_18354", "2097157": "sub_17930", "2097159": "interrupt"}, "sub_17aa2": {}, "sub_17b15": {"2097153": "interrupt", "2097155": "sub_18608", "2097157": "sub_1cbaf", "2097159": "sub_19ee0", "2097161": "sub_19f65", "2097163": "interrupt", "2097165": "interrupt", "2097167": "sub_181f9", "2097169": "sub_19ee0", "2097171": "sub_18608", "2097173": "sub_18608", "2097175": "sub_18413", "2097177": "sub_18375", "2097179": "sub_1a6d0", "2097181": "sub_18375", "2097183": "sub_18daa", "2097185": "sub_181f9", "2097187": "sub_18250", "2097189": "sub_181b7", "2097191": "sub_18413", "2097193": "sub_18daa", "2097195": "sub_19325", "2097197": "sub_19ee0", "2097199": "sub_18375", "2097201": "sub_19ee0", "2097203": "sub_18413", "2097205": "sub_18daa", "2097207": "sub_19325", "2097209": "sub_18375", "2097211": "sub_181f9", "2097213": "sub_18838", "2097215": "sub_1ccf2", "2097217": "sub_19ee0", "2097219": "sub_18413", "2097221": "sub_18daa", "2097223": "sub_19325", "2097225": "sub_1793d", "2097227": "sub_1cbfb", "2097229": "sub_18375", "2097231": "sub_18838", "2097233": "sub_19527", "2097235": "sub_1cb4f", "2097237": "sub_1a02d", "2097239": "sub_1cb28", "2097241": "sub_1a675", "2097243": "sub_181f9", "2097245": "sub_19ee0", "2097247": "sub_18299", "2097249": "sub_18250", "2097251": "sub_18413", "2097253": "sub_18daa", "2097255": "sub_19325", "2097257": "sub_18375"}, "sub_181b7": {"2097153": "sub_19fa0"}, "sub_181f9": {}, "sub_18250": {}, "sub_18299": {"2097153": "sub_18413", "2097155": "sub_18daa", "2097157": "sub_19325", "2097159": "sub_1a02d", "2097161": "sub_19f65", "2097163": "sub_1a02d", "2097165": "sub_19f65"}, "sub_1830d": {}, "sub_18342": {"2097153": "sub_19ee0", "2097155": "sub_18354"}, "sub_18354": {"2097153": "sub_19ffa"}, "sub_18375": {"2097153": "sub_19f65"}, "sub_18396": {"2097153": "sub_19ee0", "2097155": "sub_19efc", "2097157": "interrupt", "2097159": "sub_1cc4c", "2097161": "interrupt", "2097163": "sub_1cd51", "2097165": "sub_19fcd"}, "sub_18413": {"2097153": "sub_19fcd"}, "sub_18430": {"2097153": "interrupt", "2097155": "sub_184f1", "2097158": "sub_185e7", "2097160": "sub_184d1", "2097162": "sub_184d1", "2097164": "sub_185e7"}, "sub_184d1": {"2097153": "sub_185e7"}, "sub_184f1": {}, "sub_18568": {"2097153": "sub_1d0a0", "2097155": "sub_1cd51", "2097157": "sub_186af"}, "sub_185da": {}, "sub_185e7": {}, "sub_18608": {}, "sub_18618": {}, "sub_18649": {}, "sub_186af": {}, "sub_18800": {"2097153": "sub_1a02d"}, "sub_18838": {"2097153": "sub_1a32a", "2097155": "sub_188f6", "2097157": "sub_18887", "2097159": "sub_189dd", "2097161": "interrupt"}, "sub_18887": {"2097153": "sub_1cb3e"}, "sub_188f6": {"2097153": "sub_1a059", "2097155": "sub_1ae73"}, "sub_189c9": {}, "sub_189dd": {"2097153": "sub_189c9"}, "sub_18a60": {}, "sub_18a7b": {"2097153": "interrupt", "2097155": "sub_18b52", "2097157": "sub_19ee0", "2097159": "sub_18b52", "2097161": "sub_18daa", "2097163": "sub_19efc"}, "sub_18b52": {"2097153": "sub_19fcd"}, "sub_18b66": {"2097153": "sub_18608", "2097155": "sub_18d35", "2097157": "interrupt", "2097159": "sub_1a02d", "2097161": "sub_18d1a", "2097163": "sub_18d35", "2097165": "sub_18d35", "2097167": "sub_18d7c", "2097169": "interrupt", "2097171": "interrupt", "2097173": "sub_1a02d", "2097175": "sub_1a02d", "2097177": "sub_19ee0"}, "sub_18d1a": {}, "sub_18d35": {"2097153": "sub_1a059"}, "sub_18d7c": {}, "sub_18daa": {"2097153": "sub_1a059", "2097155": "sub_18413", "2097157": "sub_18b52", "2097159": "sub_1830d", "2097161": "sub_18396"}, "sub_18e20": {"2097153": "interrupt", "2097155": "sub_1c4bb", "2097157": "sub_18e97", "2097159": "sub_1cd51", "2097161": "sub_18f61", "2097163": "sub_1c543", "2097165": "sub_1aae0", "2097167": "sub_18fa6", "2097169": "sub_18e97", "2097171": "sub_1cd51"}, "sub_18e97": {"2097153": "sub_1cac6", "2097155": "sub_1cac7", "2097157": "sub_19ee0"}, "sub_18f61": {"2097153": "interrupt", "2097155": "sub_18f9e", "2097157": "sub_18f9e", "2097159": "sub_18f9e", "2097161": "interrupt"}, "sub_18f9e": {"2097153": "interrupt"}, "sub_18fa6": {"2097153": "sub_1d270", "2097155": "sub_1ca05", "2097157": "sub_1ce10", "2097159": "sub_1cd51", "2097161": "sub_19047", "2097163": "interrupt", "2097165": "sub_1ca14", "2097167": "interrupt", "2097169": "sub_1cd51"}, "sub_19047": {"2097153": "sub_19fcd"}, "sub_19070": {"2097153": "sub_1c680"}, "sub_19093": {"2097153": "interrupt", "2097155": "sub_18608", "2097157": "sub_1cd51", "2097159": "sub_19311", "2097161": "sub_19070", "2097163": "sub_19252", "2097165": "sub_19289", "2097167": "sub_1a02d", "2097169": "sub_1a02d", "2097171": "sub_19252", "2097173": "sub_19289", "2097175": "sub_1a02d", "2097177": "sub_19252", "2097179": "sub_19ee0", "2097181": "sub_19311", "2097183": "sub_19325", "2097185": "sub_192cb"}, "sub_19252": {}, "sub_19289": {"2097153": "sub_19fa0"}, "sub_192cb": {"2097153": "sub_19efc", "2097155": "sub_19ffa", "2097157": "sub_19fcd"}, "sub_19311": {"2097153": "sub_19fcd"}, "sub_19325": {"2097153": "sub_19366"}, "sub_19366": {"2097153": "sub_18413", "2097155": "sub_19ee0", "2097157": "sub_192cb", "2097159": "sub_19311", "2097161": "sub_18413", "2097163": "sub_1793d"}, "sub_19410": {"2097153": "sub_1a059"}, "sub_19440": {}, "sub_19446": {"2097153": "interrupt", "2097155": "sub_18608", "2097157": "sub_19527", "2097159": "sub_1a02d", "2097161": "sub_18800", "2097163": "sub_1a02d", "2097165": "sub_19ee0", "2097167": "sub_1950c", "2097169": "sub_19527", "2097171": "sub_19efc"}, "sub_1950c": {"2097153": "sub_19fcd"}, "sub_19527": {"2097153": "sub_1a059"}, "sub_19560": {}, "sub_195ab": {"2097153": "interrupt", "2097155": "sub_1988e", "2097157": "sub_19797", "2097159": "interrupt", "2097161": "sub_1a02d", "2097163": "sub_1a02d", "2097165": "sub_1a02d", "2097167": "sub_19ee0", "2097169": "sub_1977d", "2097171": "sub_1988e", "2097173": "sub_19797", "2097175": "sub_19f65"}, "sub_1977d": {"2097153": "sub_19fcd"}, "sub_19797": {"2097153": "sub_1a059", "2097155": "sub_19efc", "2097157": "interrupt", "2097159": "sub_1ccc0", "2097161": "interrupt", "2097163": "sub_1cd51", "2097165": "sub_19fcd", "2097167": "interrupt", "2097169": "sub_18413", "2097171": "sub_19efc", "2097173": "sub_18354", "2097175": "sub_19936", "2097177": "sub_1cb6b"}, "sub_1988e": {"2097153": "sub_1a059"}, "sub_198c0": {}, "sub_198e3": {"2097153": "sub_19fcd"}, "sub_1990a": {"2097153": "sub_19918"}, "sub_19911": {"2097153": "sub_19918"}, "sub_19918": {}, "sub_19922": {"2097153": "sub_19969"}, "sub_1992c": {"2097153": "sub_19969"}, "sub_19936": {"2097153": "sub_1992c"}, "sub_1994e": {}, "sub_19969": {"2097153": "sub_19fcd"}, "sub_199c0": {"2097153": "sub_1a02d", "2097155": "sub_19fcd", "2097157": "sub_1a23f", "2097159": "sub_19bd0", "2097161": "sub_19d54", "2097163": "sub_19b88", "2097165": "sub_19ba0", "2097167": "sub_19fcd", "2097169": "sub_19d54", "2097171": "sub_1bd77", "2097173": "sub_19bd0", "2097175": "sub_19d54", "2097177": "sub_19b88", "2097179": "sub_19ba0", "2097181": "sub_19ba0", "2097183": "sub_19bb8", "2097185": "sub_19d54", "2097187": "sub_19fcd", "2097189": "sub_19bd0", "2097191": "sub_19d54", "2097193": "sub_19b88", "2097195": "sub_19b75", "2097197": "sub_1b1ce", "2097199": "sub_19bd0", "2097201": "sub_19d54", "2097203": "sub_19b88", "2097205": "sub_19ba0", "2097207": "sub_19d54", "2097209": "sub_19d54", "2097211": "sub_19d54", "2097213": "sub_1ae0b", "2097215": "sub_19bd0", "2097217": "sub_19d54", "2097219": "sub_19b88", "2097221": "sub_19d54", "2097223": "sub_19ba0", "2097225": "sub_19bb8", "2097227": "sub_19b75"}, "sub_19b75": {"2097153": "sub_19d54", "2097155": "sub_19d54"}, "sub_19b88": {"2097153": "sub_19d54"}, "sub_19ba0": {"2097153": "sub_19d54"}, "sub_19bb8": {"2097153": "sub_19d54"}, "sub_19bd0": {"2097153": "sub_19d54", "2097155": "sub_19c11", "2097157": "sub_19c11"}, "sub_19c11": {}, "sub_19c30": {"2097154": "sub_19dce", "2097156": "sub_19d54", "2097158": "sub_19c98", "2097160": "sub_19eb4", "2097162": "sub_19dbb", "2097164": "sub_19cb0"}, "sub_19c60": {"2097153": "sub_19dce", "2097155": "sub_19d54", "2097157": "sub_19c98", "2097159": "sub_19eb4"}, "sub_19c98": {"2097153": "sub_19fcd"}, "sub_19cb0": {"2097153": "sub_19cf6", "2097155": "sub_19cf6", "2097157": "sub_19cf6"}, "sub_19cf6": {"2097153": "sub_178ad", "2097155": "sub_19fcd"}, "sub_19d54": {}, "sub_19da1": {"2097153": "sub_19fcd"}, "sub_19dbb": {"2097153": "sub_19da1", "2097155": "sub_19da1", "2097157": "sub_19da1"}, "sub_19dce": {"2097153": "sub_1a02d", "2097155": "sub_19fcd", "2097158": "sub_1a02d", "2097160": "sub_19fcd", "2097162": "sub_1a02d", "2097164": "sub_19fcd"}, "sub_19e6d": {"2097153": "sub_19fcd", "2097155": "sub_19fcd", "2097157": "sub_19fcd"}, "sub_19eb4": {"2097153": "sub_19e6d"}, "sub_19ee0": {}, "sub_19efc": {}, "sub_19f65": {}, "sub_19fa0": {}, "sub_19fcd": {}, "sub_19ffa": {}, "sub_1a02d": {}, "sub_1a040": {}, "sub_1a059": {}, "sub_1a090": {"2097153": "sub_1a059", "2097155": "sub_18413", "2097157": "sub_1d45b", "2097159": "sub_19ee0", "2097161": "sub_19fcd", "2097163": "interrupt", "2097165": "sub_1c06e", "2097167": "sub_1d42a", "2097169": "sub_18375", "2097171": "sub_1cb6b"}, "sub_1a196": {"2097153": "interrupt", "2097155": "sub_1a059", "2097157": "sub_18413", "2097159": "sub_1d45b", "2097161": "sub_19ee0", "2097163": "sub_19fcd", "2097165": "sub_1d42a", "2097167": "sub_18375", "2097169": "interrupt", "2097171": "sub_1cb6b"}, "sub_1a23f": {"2097153": "sub_19d54", "2097155": "sub_1a02d", "2097157": "sub_1a313", "2097159": "sub_19ee0", "2097161": "sub_19fcd"}, "sub_1a313": {"2097153": "sub_19ee0", "2097155": "sub_19fcd"}, "sub_1a32a": {}, "sub_1a380": {"2097153": "interrupt", "2097155": "sub_1a5ea", "2097157": "sub_19410", "2097159": "sub_1a02d", "2097161": "interrupt", "2097163": "sub_1a02d", "2097165": "sub_1a02d", "2097167": "sub_1a02d", "2097169": "sub_19fcd", "2097171": "sub_1a6af", "2097173": "sub_19ee0", "2097175": "sub_1a5ea", "2097177": "sub_19410", "2097179": "sub_1a5d0", "2097181": "sub_1a569"}, "sub_1a569": {}, "sub_1a5d0": {"2097153": "sub_19fcd"}, "sub_1a5ea": {"2097153": "sub_1b9e0", "2097155": "sub_1a059", "2097157": "sub_17aa2"}, "sub_1a635": {"2097153": "sub_1a02d"}, "sub_1a675": {"2097153": "sub_1a6af"}, "sub_1a6af": {"2097153": "sub_19fcd"}, "sub_1a6d0": {"2097153": "sub_1a059", "2097155": "sub_19ee0", "2097157": "sub_19fcd", "2097159": "sub_1c9c7", "2097161": "interrupt", "2097163": "sub_1c9d6", "2097165": "sub_18608", "2097167": "sub_1c9d6", "2097169": "interrupt", "2097171": "sub_1c9d6", "2097173": "interrupt", "2097175": "sub_1cb6b", "2097177": "sub_18413", "2097179": "sub_1a9f1", "2097181": "sub_1a86d"}, "sub_1a7f9": {"2097153": "sub_1a02d", "2097155": "sub_1a02d", "2097157": "sub_1a02d"}, "sub_1a86d": {}, "sub_1a8a5": {"2097153": "interrupt", "2097155": "sub_1a02d", "2097157": "sub_1a02d", "2097159": "sub_19ee0", "2097161": "sub_1a9f1", "2097163": "sub_19fcd", "2097165": "sub_19fcd"}, "sub_1a9f1": {"2097153": "sub_19fcd"}, "sub_1aa15": {"2097153": "interrupt", "2097155": "sub_19fcd"}, "sub_1aa80": {"2097153": "interrupt", "2097155": "sub_19fcd", "2097157": "sub_1a059"}, "sub_1aae0": {"2097153": "sub_1acc6", "2097155": "sub_1acdc", "2097157": "interrupt", "2097159": "sub_1ad24", "2097161": "sub_1994e", "2097163": "sub_1994e", "2097165": "sub_1ac2a", "2097167": "sub_1ac6a", "2097169": "sub_1ac9c", "2097171": "sub_1994e", "2097173": "sub_1acc6", "2097175": "sub_1acdc", "2097177": "sub_1ac6a", "2097179": "interrupt", "2097181": "sub_1cd93", "2097183": "sub_1ca65", "2097185": "sub_1ac4c", "2097187": "interrupt", "2097189": "sub_1cd51", "2097191": "sub_19fcd", "2097193": "sub_19fcd"}, "sub_1ac2a": {"2097153": "sub_19ffa", "2097155": "sub_19ffa"}, "sub_1ac4c": {"2097153": "interrupt", "2097155": "sub_18608", "2097157": "interrupt"}, "sub_1ac6a": {"2097153": "interrupt", "2097155": "interrupt"}, "sub_1ac9c": {"2097153": "interrupt", "2097155": "interrupt"}, "sub_1acc6": {}, "sub_1acdc": {"2097153": "sub_1ca59", "2097155": "sub_19d54", "2097157": "sub_1ca99", "2097159": "interrupt", "2097161": "interrupt", "2097163": "sub_1cd51"}, "sub_1ad24": {"2097153": "sub_1994e"}, "sub_1ad60": {}, "sub_1ad72": {"2097153": "interrupt", "2097155": "sub_1a059", "2097157": "sub_1cb6b", "2097159": "sub_18413", "2097161": "sub_1b068", "2097163": "sub_1add3", "2097165": "sub_18354", "2097167": "sub_1b044"}, "sub_1add3": {"2097153": "sub_19fcd"}, "sub_1ae0b": {"2097153": "sub_19fcd", "2097155": "sub_1a02d", "2097157": "sub_1a02d"}, "sub_1ae73": {}, "sub_1aec0": {}, "sub_1aee1": {"2097153": "interrupt", "2097155": "sub_1b082", "2097157": "sub_1b09e", "2097159": "sub_1b082", "2097161": "sub_1b09e", "2097163": "sub_19ee0", "2097165": "sub_19efc", "2097167": "sub_1c924", "2097169": "interrupt", "2097171": "sub_1c934", "2097173": "interrupt", "2097175": "sub_19ee0", "2097177": "sub_1b068", "2097179": "sub_1b044"}, "sub_1b044": {"2097153": "sub_19efc"}, "sub_1b068": {"2097153": "sub_19fcd"}, "sub_1b082": {"2097153": "sub_1a059"}, "sub_1b09e": {"2097153": "sub_1a059"}, "sub_1b0c0": {"2097153": "interrupt", "2097155": "sub_1b295", "2097157": "interrupt", "2097159": "sub_18413", "2097161": "sub_1a5d0", "2097163": "sub_19fcd", "2097165": "sub_1a569", "2097167": "interrupt", "2097169": "sub_18342"}, "sub_1b1ce": {"2097153": "sub_1a02d", "2097155": "sub_19fcd", "2097157": "sub_19d54", "2097159": "sub_19d54", "2097161": "sub_19d54", "2097163": "sub_19d54", "2097165": "sub_19f65"}, "sub_1b295": {"2097153": "sub_1a059"}, "sub_1b2c0": {"2097153": "sub_1b4a7", "2097155": "sub_1a02d"}, "sub_1b2f2": {"2097153": "interrupt", "2097155": "sub_1b50b", "2097157": "sub_1b52c", "2097159": "sub_1b4a7", "2097161": "sub_1a02d", "2097163": "sub_1b50b", "2097165": "sub_18413", "2097167": "sub_1b484", "2097169": "sub_18354", "2097171": "sub_19f65", "2097173": "sub_1cb6b", "2097175": "sub_1b4e4", "2097177": "sub_1b54c", "2097179": "sub_19ee0", "2097181": "sub_1b484", "2097183": "sub_1b52c", "2097185": "sub_19f65"}, "sub_1b484": {"2097153": "sub_19fcd"}, "sub_1b4a7": {"2097153": "sub_1a02d", "2097155": "sub_1b4e4", "2097157": "sub_1b54c"}, "sub_1b4e4": {}, "sub_1b50b": {"2097153": "sub_1a059"}, "sub_1b52c": {"2097153": "sub_1a059"}, "sub_1b54c": {}, "sub_1b570": {"2097153": "interrupt", "2097155": "sub_1b75d", "2097157": "sub_1b787", "2097159": "sub_1a02d", "2097161": "sub_1b72b", "2097163": "sub_1cb8d", "2097165": "sub_1a02d", "2097167": "sub_1a02d", "2097169": "sub_1cb8d", "2097171": "sub_1a02d", "2097173": "sub_1a02d", "2097175": "sub_1a02d", "2097177": "sub_1b75d", "2097179": "sub_19ee0", "2097181": "sub_19fcd", "2097183": "sub_1b787", "2097185": "sub_19efc"}, "sub_1b717": {}, "sub_1b72b": {}, "sub_1b75d": {"2097153": "sub_1a059"}, "sub_1b787": {"2097153": "sub_1a059"}, "sub_1b7aa": {"2097153": "sub_19ee0", "2097155": "sub_1b989"}, "sub_1b7db": {"2097153": "interrupt", "2097155": "sub_1b9b6", "2097157": "sub_1b717", "2097159": "sub_1b96e", "2097161": "sub_1b96e", "2097163": "sub_18413", "2097165": "sub_18342", "2097167": "sub_1b96e", "2097169": "sub_1cb6b", "2097171": "sub_19ee0", "2097173": "sub_1b9a3", "2097175": "sub_1b989", "2097177": "sub_1b717", "2097179": "interrupt", "2097181": "sub_19ee0", "2097183": "sub_1b9a3", "2097185": "sub_1b989", "2097187": "sub_1cd51", "2097189": "sub_1b9a3", "2097191": "sub_19f65", "2097193": "sub_1b72b"}, "sub_1b96e": {"2097153": "sub_1a059"}, "sub_1b989": {"2097153": "sub_19f65"}, "sub_1b9a3": {"2097153": "sub_19fcd"}, "sub_1b9b6": {}, "sub_1b9e0": {"2097153": "sub_1a059"}, "sub_1ba06": {"2097153": "interrupt", "2097155": "sub_1babd", "2097157": "sub_1bad1", "2097159": "sub_1a569", "2097161": "sub_18375", "2097163": "sub_19366", "2097165": "sub_1a02d", "2097167": "sub_1bb07", "2097169": "sub_1bb46", "2097171": "sub_1baf1", "2097173": "sub_1c8c1"}, "sub_1babd": {"2097153": "sub_1bd33", "2097155": "sub_18413"}, "sub_1bad1": {"2097153": "sub_19fcd"}, "sub_1baf1": {"2097153": "sub_1bd4d", "2097155": "sub_18375"}, "sub_1bb07": {"2097153": "sub_1a059", "2097155": "sub_18608", "2097157": "sub_1bd33", "2097159": "sub_18413"}, "sub_1bb46": {"2097153": "sub_19fcd"}, "sub_1bb73": {"2097153": "interrupt", "2097155": "sub_1bd33", "2097157": "sub_1a5d0", "2097159": "sub_18354", "2097161": "sub_1a569", "2097163": "sub_1bd33", "2097165": "sub_18375", "2097167": "sub_18413", "2097169": "sub_18354", "2097171": "sub_19ee0", "2097173": "sub_18608", "2097175": "sub_1bd33", "2097177": "sub_1cb6b", "2097179": "sub_1b9e0", "2097181": "sub_1a5d0", "2097183": "sub_1bdf8", "2097185": "sub_1a569", "2097187": "sub_1bdf8", "2097189": "sub_1bd4d"}, "sub_1bd33": {"2097153": "sub_19fcd"}, "sub_1bd4d": {"2097153": "sub_19f65"}, "sub_1bd77": {"2097153": "sub_1a02d", "2097155": "sub_19fcd", "2097157": "sub_1bdf8"}, "sub_1bdf8": {"2097153": "sub_1be18", "2097155": "sub_19fcd"}, "sub_1be18": {"2097153": "sub_19ee0"}, "sub_1be30": {}, "sub_1be40": {"2097153": "interrupt", "2097155": "sub_1c1fd", "2097157": "sub_1c25d", "2097159": "interrupt", "2097161": "sub_1c000", "2097163": "sub_1c1eb", "2097165": "sub_1a02d", "2097167": "sub_1a02d", "2097169": "sub_1a02d", "2097171": "sub_19ee0", "2097173": "sub_1c25d", "2097175": "sub_1c000", "2097177": "sub_1c17a", "2097179": "sub_1c140", "2097181": "sub_1c0a5", "2097183": "sub_1c1eb"}, "sub_1c000": {"2097153": "sub_1a059", "2097155": "sub_18413", "2097157": "sub_1c17a", "2097159": "sub_18413", "2097161": "sub_1c17a", "2097163": "sub_18375", "2097165": "sub_1cb6b"}, "sub_1c06e": {"2097153": "sub_1c1fd", "2097155": "sub_1c0a5", "2097157": "sub_1c1eb"}, "sub_1c0a5": {"2097153": "sub_1a059", "2097155": "sub_18413", "2097157": "sub_1d45b", "2097159": "sub_1c17a", "2097161": "sub_19ee0", "2097163": "sub_19fcd", "2097165": "sub_1d42a", "2097167": "sub_18375", "2097169": "interrupt"}, "sub_1c140": {"2097153": "sub_1c20f"}, "sub_1c17a": {"2097153": "sub_1c238"}, "sub_1c189": {"2097153": "sub_1a02d", "2097155": "interrupt", "2097157": "sub_1c1eb"}, "sub_1c1eb": {}, "sub_1c1fd": {}, "sub_1c20f": {}, "sub_1c238": {}, "sub_1c25d": {"2097153": "sub_1a059"}, "sub_1c290": {"2097153": "sub_1cd93", "2097155": "interrupt", "2097157": "sub_19ee0", "2097159": "sub_19efc", "2097161": "sub_19fcd", "2097163": "sub_1c95e", "2097165": "sub_1cd84", "2097167": "sub_1cd93", "2097169": "interrupt", "2097171": "sub_1aae0", "2097173": "interrupt"}, "sub_1c37a": {"2097153": "sub_1c3cb"}, "sub_1c3cb": {"2097153": "sub_1cd93", "2097155": "interrupt", "2097157": "sub_1cd93", "2097159": "sub_19ee0", "2097161": "sub_19efc", "2097164": "sub_1c45a", "2097166": "sub_1cd93", "2097168": "interrupt"}, "sub_1c45a": {}, "sub_1c4bb": {"2097153": "sub_1cd84", "2097155": "interrupt", "2097157": "sub_1c290", "2097159": "sub_1c37a", "2097161": "sub_1cdef", "2097163": "interrupt", "2097165": "sub_1cd51"}, "sub_1c500": {"2097153": "interrupt", "2097155": "sub_1cd51"}, "sub_1c543": {"2097153": "interrupt", "2097155": "sub_1c598", "2097157": "sub_1c500", "2097159": "interrupt", "2097161": "sub_1cd51"}, "sub_1c598": {"2097153": "sub_19fcd", "2097155": "sub_1c500"}, "sub_1c5e0": {"2097154": "interrupt", "2097156": "sub_1cd51"}, "sub_1c630": {"2097153": "sub_1a02d", "2097155": "sub_19fcd"}, "sub_1c680": {}, "sub_1c69d": {"2097153": "interrupt", "2097155": "sub_1cab9", "2097157": "sub_1a02d", "2097159": "sub_1a02d", "2097161": "sub_1cab9", "2097163": "interrupt", "2097165": "sub_1cab9", "2097167": "sub_1cd51", "2097169": "sub_1cd58", "2097171": "sub_1a02d", "2097173": "sub_1a02d", "2097175": "sub_1cd58"}, "sub_1c8c1": {"2097153": "sub_1cd51", "2097155": "interrupt", "2097157": "interrupt", "2097159": "interrupt", "2097161": "interrupt", "2097163": "sub_1cd51"}, "sub_1c924": {}, "sub_1c934": {}, "sub_1c95e": {"2097153": "sub_1c99e", "2097155": "sub_1c99e", "2097157": "sub_1c99e", "2097159": "sub_1cd51"}, "sub_1c99e": {}, "sub_1c9c7": {"2097153": "sub_1cd51"}, "sub_1c9d6": {}, "sub_1ca05": {"2097153": "interrupt"}, "sub_1ca14": {"2097153": "interrupt", "2097155": "sub_1cd51", "2097157": "sub_1cab9"}, "sub_1ca59": {}, "sub_1ca65": {"2097153": "interrupt", "2097155": "sub_1cab9"}, "sub_1ca99": {"2097153": "sub_1cab9"}, "sub_1cab9": {}, "sub_1cac6": {}, "sub_1cac7": {"2097153": "sub_1cab9"}, "sub_1caed": {}, "sub_1cb28": {"2097153": "sub_1cbd3"}, "sub_1cb3e": {"2097153": "sub_1cbd3"}, "sub_1cb4f": {"2097153": "sub_1cbd3", "2097155": "sub_1cbd3", "2097157": "sub_1cbd3"}, "sub_1cb6b": {"2097153": "sub_1cab9", "2097155": "interrupt"}, "sub_1cb8d": {"2097153": "sub_1a02d", "2097155": "sub_1cb6b"}, "sub_1cbaf": {"2097153": "sub_1cb6b"}, "sub_1cbd3": {"2097153": "sub_1cd51"}, "sub_1cbfb": {"2097153": "interrupt", "2097155": "interrupt", "2097157": "sub_1a02d", "2097159": "sub_1cd51"}, "sub_1cc4c": {"2097153": "sub_185e7"}, "sub_1ccc0": {"2097153": "interrupt", "2097155": "sub_1a02d"}, "sub_1ccf2": {"2097153": "interrupt", "2097155": "sub_185e7", "2097157": "sub_185e7", "2097159": "sub_1a02d", "2097161": "interrupt", "2097163": "sub_1cd51"}, "sub_1cd51": {}, "sub_1cd58": {"2097153": "sub_185e7", "2097155": "sub_185e7"}, "sub_1cd84": {"2097153": "interrupt"}, "sub_1cd93": {"2097153": "interrupt", "2097155": "sub_1cd51"}, "sub_1cdef": {"2097153": "sub_1cd93"}, "sub_1ce10": {"2097153": "interrupt", "2097155": "sub_19fcd", "2097157": "sub_1ca14", "2097159": "interrupt", "2097161": "sub_19fcd", "2097163": "sub_19fcd", "2097165": "sub_1cd51"}, "sub_1ce90": {"2097153": "sub_1cece", "2097155": "interrupt", "2097157": "sub_1cece"}, "sub_1cece": {"2097153": "sub_1d05b"}, "sub_1cee0": {"2097153": "sub_18a60", "2097155": "sub_19560", "2097157": "sub_19c60", "2097159": "sub_19fcd", "2097161": "sub_19fcd", "2097163": "sub_19fcd", "2097165": "sub_19fcd", "2097167": "sub_19fcd", "2097169": "sub_19fcd", "2097171": "sub_1d06b", "2097173": "sub_1793d", "2097175": "sub_19922", "2097177": "sub_1992c", "2097179": "sub_198e3", "2097181": "sub_19070", "2097183": "interrupt", "2097185": "interrupt", "2097187": "sub_1d06b", "2097189": "sub_1c5e0", "2097191": "sub_1d004"}, "sub_1d004": {"2097153": "interrupt", "2097155": "sub_1a02d", "2097157": "sub_18608", "2097159": "sub_17b15"}, "sub_1d05b": {"2097153": "interrupt"}, "sub_1d06b": {"2097153": "sub_19fcd"}, "sub_1d08b": {"2097153": "interrupt"}, "sub_1d0a0": {"2097153": "sub_1cd51", "2097155": "interrupt", "2097157": "sub_19ffa", "2097159": "interrupt", "2097161": "sub_1d05b", "2097163": "interrupt", "2097165": "sub_1d05b", "2097167": "sub_1d1c7", "2097169": "sub_19fcd", "2097171": "interrupt"}, "sub_1d115": {"2097153": "sub_1cd51", "2097155": "sub_1d1fd", "2097157": "sub_1d1e1", "2097160": "sub_1d215", "2097162": "sub_1d1e1", "2097165": "sub_1d1e1", "2097167": "sub_1d1e1", "2097169": "sub_1d1e1", "2097171": "sub_1d1e1", "2097173": "sub_1d1e1", "2097175": "sub_1d1e1", "2097177": "sub_1d1e1", "2097179": "sub_1d1e1", "2097181": "sub_1d1c7", "2097183": "sub_1cd51", "2097185": "sub_1d1fd"}, "sub_1d1c7": {}, "sub_1d1e1": {"2097153": "sub_1d08b", "2097155": "sub_1d05b"}, "sub_1d1fd": {}, "sub_1d215": {"2097153": "interrupt", "2097155": "sub_1d23f", "2097157": "sub_1d23f", "2097159": "sub_1d1e1"}, "sub_1d23f": {"2097153": "interrupt", "2097155": "interrupt"}, "sub_1d270": {"2097153": "sub_18608", "2097155": "sub_19fcd", "2097157": "sub_19fcd", "2097159": "interrupt", "2097161": "sub_19fcd", "2097163": "interrupt", "2097165": "sub_1cd51"}, "sub_1d330": {}, "sub_1d336": {"2097153": "interrupt", "2097155": "sub_1d4d6", "2097157": "sub_18413", "2097159": "sub_1d45b", "2097161": "sub_18375", "2097163": "sub_1a02d", "2097165": "sub_1d45b", "2097167": "sub_19ee0", "2097169": "sub_1d4d6", "2097171": "sub_1d475", "2097173": "sub_1d45b", "2097175": "sub_1d42a"}, "sub_1d42a": {"2097153": "sub_19efc"}, "sub_1d45b": {"2097153": "sub_19fcd"}, "sub_1d475": {"2097153": "sub_1d45b", "2097155": "sub_1a313", "2097157": "sub_1d42a"}, "sub_1d4d6": {"2097153": "sub_1a059", "2097155": "sub_1cb6b"}};
