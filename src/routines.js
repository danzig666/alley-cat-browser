// Ahead-of-time translation of the matching Alley Cat binary.
function* start() {
  let pc=0;
  
  dispatch: while (true) {
    if ((++game.steps & 1023) === 0) yield 0;
    switch(pc) {
    case 0:
r.cs=0x1723; r.ds=0x1713; r.es=0x1713; r.ss=0x1000; r.sp=0x100; yield* sub_17230();
      return;
    default: throw new Error("Invalid control flow in start");
    }
  }
}

function* sub_17230() {
  let pc=0;
  
  dispatch: while (true) {
    if ((++game.steps & 1023) === 0) yield 0;
    switch(pc) {
    case 0:

    push(r.ds);
    r.ax = 0x0000;
    push(r.ax);
    yield* sub_1ce90();
    r.ax = 0x1010;
    r.ds = r.ax;
    yield* sub_185da();
    memoryASet(r.ds, 0x0690, 0x04);
    memoryASet16(r.ds, 0x6df8, 0x0000);
    memoryASet(r.ds, 0x069b, 0x00);
    yield* sub_18649();
    yield* sub_18618();
    r.ax = memoryAGet16(r.ds, 0x0693);
    r.ax += 0x0240;
    memoryASet16(r.ds, 0x6e00, r.ax);
    r.ax = 0x0004;
    yield* interrupt(0x10);
    r.al = 0x04;
    if (memoryAGet(r.ds, 0x0697) == 0xfd)
        { pc = 0x1726f; continue dispatch; }
    r.al = 0x06;
case 0x1726f:
    memoryASet(r.ds, 0x0690, r.al);
    r.ah = 0x0b;
    r.bx = 0x0101;
    yield* interrupt(0x10);
    memoryASet16(r.ds, 0x0416, 0x0000);
    memoryASet16(r.ds, 0x0004, 0x0000);
    yield* sub_18f61();
    if (memoryAGet(r.ds, 0x0697) == 0xfd)
        { pc = 0x17295; continue dispatch; }
    r.dx = 0x03d9;
    r.al = 0x20;
    out(r.dx, r.al);
case 0x17295:
    yield* sub_1a040();
    yield* sub_19911();
    yield* sub_1990a();
    memoryASet(r.ds, 0x041a, 0x00);
    r.ax = 0xffff;
    memoryASet16(r.ds, 0x041d, r.ax);
    memoryASet16(r.ds, 0x041f, r.ax);
    memoryASet(r.ds, 0x0000, 0xff);
case 0x172b1:
    yield* sub_198c0();
    memoryASet16(r.ds, 0x0008, 0x0000);
    memoryASet16(r.ds, 0x0004, 0x0000);
    yield* sub_18f61();
    yield* sub_1cd51();
    yield* sub_1cee0();
    yield* sub_1cd51();
    if (memoryAGet(r.ds, 0x041a) != 0x00)
        { pc = 0x172de; continue dispatch; }
case 0x172d3:
    yield* sub_1cd51();
    yield* sub_1d115();
    memoryASet(r.ds, 0x041a, 0x01);
case 0x172de: game.phase="booting";
    r.ax = memoryAGet16(r.ds, 0x6df8);
    memoryASet16(r.ds, 0x0008, r.ax);
    memoryASet(r.ds, 0x1f80, 0x03);
    yield* sub_1990a();
    memoryASet16(r.ds, 0x0004, 0x0000);
    yield* sub_18f61();
    yield* sub_1cd51();
    memoryASet16(r.ds, 0x1c30, 0x0000);
    r.ah = 0;
    yield* interrupt(0x1a);
    memoryASet16(r.ds, 0x0412, r.dx);
    memoryASet16(r.ds, 0x0414, 0x0000);
    memoryASet(r.ds, 0x0418, 0x00);
    memoryASet(r.ds, 0x0419, 0x00);
    memoryASet(r.ds, 0x041c, 0x00);
    memoryASet(r.ds, 0x041b, 0x00);
    yield* sub_1cd51();
case 0x17323:
    if (memoryAGet(r.ds, 0x1f80) == 0x00)
        { pc = 0x172b1; continue dispatch; }
    if (memoryAGet(r.ds, 0x041b) != 0x00)
        { pc = 0x172de; continue dispatch; }
    if (memoryAGet(r.ds, 0x041c) != 0x00)
        { pc = 0x172d3; continue dispatch; }
    yield* sub_19c30();
    yield* sub_1c630();
    memoryASet(r.ds, 0x1f81, 0xff);
    yield* sub_1cd51();
    memoryASet16(r.ds, 0x0004, 0x0000);
    if (memoryAGet(r.ds, 0x0419) == 0x00)
        { pc = 0x17367; continue dispatch; }
    yield* sub_179d1();
    memoryASet(r.ds, 0x0550, 0x02);
    memoryASet(r.ds, 0x0576, 0x01);
    memoryASet(r.ds, 0x0578, 0x20);
    { pc = 0x17370; continue dispatch; }
case 0x17367:
    memoryASet16(r.ds, 0x0579, 0x0000);
    yield* sub_1793d();
case 0x17370:
    yield* sub_19070();
    yield* sub_18a60();
    yield* sub_19440();
    yield* sub_19560();
    yield* sub_19922();
    yield* sub_1992c();
    yield* sub_1caed();
case 0x17385: game.phase="playing";
    if (memoryAGet(r.ds, 0x1f80) != 0x00)
        { pc = 0x1738f; continue dispatch; }
    { pc = 0x172b1; continue dispatch; }
case 0x1738f:
    yield* sub_18568();
    if (memoryAGet(r.ds, 0x041c) == 0x00)
        { pc = 0x1739c; continue dispatch; }
    { pc = 0x172d3; continue dispatch; }
case 0x1739c:
    if (memoryAGet(r.ds, 0x041b) == 0x00)
        { pc = 0x173a6; continue dispatch; }
    { pc = 0x172de; continue dispatch; }
case 0x173a6:
    yield* sub_18430();
    yield* sub_17b15();
    yield* sub_19093();
    if (memoryAGet(r.ds, 0x1cb8) != 0x00)
        { pc = 0x173c1; continue dispatch; }
    memoryASet(r.ds, 0x040f, memoryAGet(r.ds, 0x040f) + 1);
    if (memoryAGet(r.ds, 0x040f) & 0x03)
        { pc = 0x17385; continue dispatch; }
case 0x173c1:
    yield* sub_1c69d();
    yield* sub_176d0();
    yield* sub_18b66();
    yield* sub_18a7b();
    yield* sub_19446();
    yield* sub_195ab();
    yield* sub_198e3();
    if (memoryAGet(r.ds, 0x0551) == 0x00)
        { pc = 0x17385; continue dispatch; }
    if (memoryAGet(r.ds, 0x1f80) != 0x00)
        { pc = 0x173e7; continue dispatch; }
    { pc = 0x172b1; continue dispatch; }
case 0x173e7: game.phase="entering";
    r.ah = 0;
    yield* interrupt(0x1a);
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
    yield* sub_1a02d();
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
    yield* sub_1a02d();
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
    yield* sub_18e20();
    yield* sub_199c0();
    yield* sub_179d1();
    yield* sub_19070();
    yield* sub_1a635();
    yield* sub_1d330();
    yield* sub_1c189();
    yield* sub_1caed();
case 0x174ae: game.phase="playing";
    yield* sub_18568();
    yield* sub_18430();
    yield* sub_1c69d();
    yield* sub_17b15();
    yield* sub_1d336();
    yield* sub_1a196();
    yield* sub_1a090();
    yield* sub_1be40();
    r.al = memoryAGet(r.ds, 0x0551);
    r.al |= memoryAGet(r.ds, 0x0553);
    r.al |= memoryAGet(r.ds, 0x041c);
    r.al |= memoryAGet(r.ds, 0x041b);
    if (!r.al)
        { pc = 0x174ae; continue dispatch; }
    { pc = 0x17657; continue dispatch; }
case 0x174da:
    memoryASet16(r.ds, 0x0004, 0x0006);
    yield* sub_18e20();
    yield* sub_199c0();
    yield* sub_1be30();
    yield* sub_179d1();
    yield* sub_1a635();
    yield* sub_19070();
    yield* sub_1caed();
case 0x174f5: game.phase="playing";
    yield* sub_18568();
    yield* sub_18430();
    yield* sub_1c69d();
    yield* sub_1bb73();
    yield* sub_1ba06();
    yield* sub_17b15();
    if (memoryAGet(r.ds, 0x1cb8) == 0x00)
        { pc = 0x17513; continue dispatch; }
    yield* sub_19093();
    { pc = 0x17516; continue dispatch; }
case 0x17513:
    yield* sub_1a380();
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
    yield* sub_18e20();
    yield* sub_199c0();
    yield* sub_1b7aa();
    yield* sub_179d1();
    yield* sub_1a635();
    yield* sub_19070();
    yield* sub_1caed();
case 0x17549: game.phase="playing";
    yield* sub_18568();
    yield* sub_18430();
    yield* sub_1c69d();
    yield* sub_1b7db();
    yield* sub_1b570();
    yield* sub_17b15();
    yield* sub_1a380();
    yield* sub_19093();
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
    yield* sub_18e20();
    yield* sub_199c0();
    yield* sub_179d1();
    yield* sub_1a635();
    yield* sub_19070();
    yield* sub_1b2c0();
    yield* sub_1caed();
case 0x17594: game.phase="playing";
    yield* sub_18568();
    yield* sub_18430();
    yield* sub_1c69d();
    yield* sub_17b15();
    yield* sub_1b0c0();
    yield* sub_1b2f2();
    yield* sub_1a380();
    yield* sub_19093();
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
    yield* sub_18e20();
    yield* sub_199c0();
    yield* sub_179d1();
    yield* sub_1a635();
    yield* sub_19070();
    yield* sub_1ad60();
    yield* sub_1aec0();
    yield* sub_1caed();
case 0x175e2: game.phase="playing";
    yield* sub_18568();
    yield* sub_18430();
    yield* sub_1c69d();
    yield* sub_17b15();
    yield* sub_1aee1();
    yield* sub_1ad72();
    yield* sub_1a380();
    yield* sub_19093();
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
    yield* sub_18e20();
    yield* sub_199c0();
    yield* sub_179d1();
    yield* sub_1a635();
    yield* sub_19070();
    yield* sub_1caed();
case 0x1762a: game.phase="playing";
    yield* sub_18568();
    yield* sub_18430();
    yield* sub_1c69d();
    yield* sub_17b15();
    yield* sub_1a380();
    yield* sub_19093();
    yield* sub_1aa80();
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
    yield* sub_18e20();
    { pc = 0x17323; continue dispatch; }
case 0x17689:
    memoryASet16(r.ds, 0x0004, 0x0002);
    yield* sub_18e20();
    yield* sub_199c0();
    yield* sub_1a7f9();
    yield* sub_179d1();
    memoryASet(r.ds, 0x1cbf, 0x00);
    memoryASet(r.ds, 0x1cb8, 0x00);
    yield* sub_1caed();
case 0x176a8: game.phase="playing";
    yield* sub_18568();
    yield* sub_18430();
    yield* sub_1c69d();
    yield* sub_17b15();
    yield* sub_1a8a5();
    yield* sub_1aa15();
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
}

function* sub_176d0() {
  let pc=0;
  
  dispatch: while (true) {
    if ((++game.steps & 1023) === 0) yield 0;
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
    yield* sub_18608();
    if (!flags.zero)
        { pc = 0x176d6; continue dispatch; }
    if (memoryAGet(r.ds, 0x055a) != 0x00)
        { pc = 0x176d6; continue dispatch; }
    if (memoryAGet(r.ds, 0x1673) != 0x00)
        { pc = 0x176d6; continue dispatch; }
    r.ah = 0;
    yield* interrupt(0x1a);
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
    yield* sub_17888();
    if (flags.zero)
        { pc = 0x1773c; continue dispatch; }
    r.al = memoryAGet(r.ds, 0x0525);
    r.al += memoryAGet(r.ds, r.bx + 1321);
    if (r.al < 0x04)
        { pc = 0x176d6; continue dispatch; }
case 0x17726:
    yield* sub_1a02d();
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
    yield* sub_1a02d();
    if (r.dl > 0x40)
        { pc = 0x17769; continue dispatch; }
case 0x17753:
    yield* sub_1a02d();
    r.dl &= 0x03;
    if (r.dl == 0x03)
        { pc = 0x17753; continue dispatch; }
    r.bl = r.dl;
    yield* sub_17888();
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
    yield* sub_178ad();
    if (memoryAGet16(r.ds, 0x052f) == 0x0001)
        { pc = 0x1779e; continue dispatch; }
    flags.carry = memoryAGet(r.ds, 0x0540) & 1;
    memoryASet(r.ds, 0x0540, memoryAGet(r.ds, 0x0540) >> 1);
    yield* sub_17863();
    flags.carry = memoryAGet(r.ds, 0x0540) & 1;
    memoryASet(r.ds, 0x0540, memoryAGet(r.ds, 0x0540) >> 1);
    { pc = 0x177ac; continue dispatch; }
case 0x1779e:
    r.al = memoryAGet(r.ds, 0x0540);
    r.al >>= 1;
    flags.carry = r.al & 1;
    r.al >>= 1;
    yield* sub_17863();
    flags.carry = memoryAGet(r.ds, 0x0540) & 1;
    memoryASet(r.ds, 0x0540, memoryAGet(r.ds, 0x0540) >> 1);
case 0x177ac:
    yield* sub_17863();
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
}

function* sub_17863() {
  let pc=0;
  
  dispatch: while (true) {
    if ((++game.steps & 1023) === 0) yield 0;
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
}

function* sub_17888() {
  let pc=0;
  
  dispatch: while (true) {
    if ((++game.steps & 1023) === 0) yield 0;
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
}

function* sub_178ad() {
  let pc=0;
  
  dispatch: while (true) {
    if ((++game.steps & 1023) === 0) yield 0;
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
    yield* sub_1a02d();
    if (r.dl < r.bl)
        { pc = 0x178d4; continue dispatch; }
    if (r.dh > r.bh)
        { pc = 0x178d5; continue dispatch; }
case 0x178d4:
    return;
case 0x178d5:
    yield* sub_1a02d();
    if (r.dl < 0x18)
        { pc = 0x178f7; continue dispatch; }
    if (r.dl < 0x60)
        { pc = 0x17900; continue dispatch; }
    push(r.di);
    yield* sub_1790e();
    r.al <<= 1;
    memoryASet(r.ds, 0x0540, r.al);
    r.di = pop();
    r.di += 0x0002;
    yield* sub_1790e();
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
}

function* sub_1790e() {
  let pc=0;
  
  dispatch: while (true) {
    if ((++game.steps & 1023) === 0) yield 0;
    switch(pc) {
    case 0:

    yield* sub_1a02d();
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
}

function* sub_17930() {
  let pc=0;
  
  dispatch: while (true) {
    if ((++game.steps & 1023) === 0) yield 0;
    switch(pc) {
    case 0:

    memoryASet16(r.ds, 0x057d, 0x0000);
    memoryASet16(r.ds, 0x0684, 0x0000);

      return;
    default: throw new Error("Invalid control flow in sub_17930");
    }
  }
}

function* sub_1793d() {
  let pc=0;
  
  dispatch: while (true) {
    if ((++game.steps & 1023) === 0) yield 0;
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
    yield* sub_19ee0();
    memoryASet16(r.ds, 0x055f, r.ax);
    memoryASet16(r.ds, 0x0561, 0x0b03);
    yield* sub_18354();
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
    yield* sub_17930();

      return;
    default: throw new Error("Invalid control flow in sub_1793d");
    }
  }
}

function* sub_179d1() {
  let pc=0;
  
  dispatch: while (true) {
    if ((++game.steps & 1023) === 0) yield 0;
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
    yield* sub_19ee0();
    memoryASet16(r.ds, 0x055f, r.ax);
    r.ax = memoryAGet16(r.ds, 0x0fb2);
    memoryASet16(r.ds, 0x0569, r.ax);
    r.ax = memoryAGet16(r.ds, 0x0fbe);
    memoryASet16(r.ds, 0x0567, r.ax);
    memoryASet16(r.ds, 0x0561, r.ax);
    yield* sub_18354();
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
    yield* sub_17930();
    if (memoryAGet16(r.ds, 0x0004) != 0x0002)
        return;
    memoryASet(r.ds, 0x0576, 0x10);
    memoryASet16(r.ds, 0x0574, 0x0010);
    r.ah = 0;
    yield* interrupt(0x1a);
    memoryASet16(r.ds, 0x05f1, r.dx);
    memoryASet(r.ds, 0x05f3, 0x00);
    memoryASet(r.ds, 0x05f4, 0x05);
    memoryASet(r.ds, 0x05f5, 0x01);

      return;
    default: throw new Error("Invalid control flow in sub_179d1");
    }
  }
}

function* sub_17aa2() {
  let pc=0;
  
  dispatch: while (true) {
    if ((++game.steps & 1023) === 0) yield 0;
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
}

function* sub_17b15() {
  let pc=0;
  
  dispatch: while (true) {
    if ((++game.steps & 1023) === 0) yield 0;
    switch(pc) {
    case 0:

    r.ah = 0;
    yield* interrupt(0x1a);
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
    yield* sub_18608();
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
    yield* sub_1cbaf();
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
    yield* sub_19ee0();
    r.di = r.ax;
    r.si = 0x064e;
    r.ax = 0xb800;
    r.es = r.ax;
    r.bp = 0x000e;
    r.cx = 0x0503;
    yield* sub_19f65();
case 0x17be9:
    memoryASet(r.ds, 0x056e, 0x00);
    memoryASet(r.ds, 0x0571, 0x01);
    memoryASet(r.ds, 0x05f3, 0x01);
    memoryASet(r.ds, 0x0576, 0x20);
    r.bx = 0;
    r.ah = 0x0b;
    yield* interrupt(0x10);
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
    yield* interrupt(0x10);
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
    yield* sub_181f9();
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
    yield* sub_19ee0();
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
    yield* sub_18608();
    if (!flags.zero)
        { pc = 0x17dbb; continue dispatch; }
case 0x17dc0:
    yield* sub_18608();
    if (flags.zero)
        { pc = 0x17dc0; continue dispatch; }
case 0x17dc5:
    if (--r.cx)
        { pc = 0x17dc5; continue dispatch; }
case 0x17dc7:
    yield* sub_18413();
    r.ax = memoryAGet16(r.ds, 0x0563);
    memoryASet16(r.ds, 0x055f, r.ax);
    yield* sub_18375();
    yield* sub_1a6d0();
    if (!flags.carry)
        { pc = 0x17ddb; continue dispatch; }
    yield* sub_18375();
case 0x17ddb:
    return;
case 0x17ddc:
    yield* sub_18daa();
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
    yield* sub_181f9();
    { pc = 0x17e4c; continue dispatch; }
case 0x17e15:
    yield* sub_18250();
    memoryASet16(r.ds, 0x055d, r.bx);
    r.al = memoryAGet(r.ds, 0x0558);
    r.ah = memoryAGet(r.ds, 0x056e);
    yield* sub_181b7();
    if (memoryAGet(r.ds, 0x0558) == 0x02)
        { pc = 0x17e30; continue dispatch; }
    yield* sub_18413();
case 0x17e30:
    yield* sub_18daa();
    if (flags.carry)
        { pc = 0x17e4b; continue dispatch; }
    yield* sub_19325();
    if (flags.carry)
        { pc = 0x17e4b; continue dispatch; }
    r.dl = memoryAGet(r.ds, 0x057b);
    r.cx = memoryAGet16(r.ds, 0x0579);
    yield* sub_19ee0();
    memoryASet16(r.ds, 0x055f, r.ax);
    yield* sub_18375();
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
    yield* sub_19ee0();
    memoryASet16(r.ds, 0x0563, r.ax);
    yield* sub_18413();
    yield* sub_18daa();
    if (flags.carry)
        { pc = 0x17e96; continue dispatch; }
    yield* sub_19325();
    if (flags.carry)
        { pc = 0x17e96; continue dispatch; }
    r.ax = memoryAGet16(r.ds, 0x0563);
    memoryASet16(r.ds, 0x055f, r.ax);
    memoryASet16(r.ds, 0x0565, 0x0e03);
    memoryASet16(r.ds, 0x055d, 0x09da);
    yield* sub_18375();
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
    yield* sub_181f9();
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
    yield* sub_18838();
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
    yield* sub_1ccf2();
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
    yield* sub_19ee0();
    memoryASet16(r.ds, 0x0563, r.ax);
    if (memoryAGet(r.ds, 0x0583) != 0x00)
        { pc = 0x17fa3; continue dispatch; }
    yield* sub_18413();
case 0x17fa3:
    yield* sub_18daa();
    if (flags.carry)
        { pc = 0x17ff4; continue dispatch; }
    yield* sub_19325();
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
    yield* sub_1793d();
    yield* sub_1cbfb();
    return;
case 0x18046:
    memoryASet16(r.ds, 0x0565, r.bx);
    memoryASet(r.ds, 0x0576, 0x02);
case 0x1804f:
    yield* sub_18375();
    return;
case 0x18053:
    if (memoryAGet16(r.ds, 0x0004) == 0x0007)
        { pc = 0x18061; continue dispatch; }
    if (memoryAGet(r.ds, 0x057b) >= 0xb4)
        { pc = 0x180a8; continue dispatch; }
case 0x18061:
    yield* sub_18838();
    if (flags.carry)
        { pc = 0x18073; continue dispatch; }
    memoryASet(r.ds, 0x056e, 0x00);
    memoryASet(r.ds, 0x0571, 0x01);
    { pc = 0x180e1; continue dispatch; }
case 0x18073:
    if (memoryAGet16(r.ds, 0x0004) != 0x0000)
        { pc = 0x180a8; continue dispatch; }
    yield* sub_19527();
    if (flags.carry)
        { pc = 0x18086; continue dispatch; }
    memoryASet(r.ds, 0x056c, 0x00);
    { pc = 0x180a8; continue dispatch; }
case 0x18086:
    if (memoryAGet(r.ds, 0x056c) != 0x00)
        { pc = 0x18090; continue dispatch; }
    yield* sub_1cb4f();
case 0x18090:
    memoryASet(r.ds, 0x0699, 0x01);
    memoryASet(r.ds, 0x056c, 0x01);
    yield* sub_1a02d();
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
    yield* sub_1cb28();
case 0x18163:
    return;
case 0x18164:
    if (memoryAGet16(r.ds, 0x0004) == 0x0000)
        { pc = 0x18175; continue dispatch; }
    if (memoryAGet16(r.ds, 0x0004) == 0x0007)
        { pc = 0x18175; continue dispatch; }
    yield* sub_1a675();
case 0x18175:
    yield* sub_181f9();
    r.dl = memoryAGet(r.ds, 0x057b);
    r.cx = memoryAGet16(r.ds, 0x0579);
    yield* sub_19ee0();
    memoryASet16(r.ds, 0x0563, r.ax);
    r.al = memoryAGet(r.ds, 0x056e);
    r.al |= memoryAGet(r.ds, 0x0571);
    if (r.al)
        { pc = 0x18193; continue dispatch; }
    yield* sub_18299();
    return;
case 0x18193:
    yield* sub_18250();
    memoryASet16(r.ds, 0x055d, r.bx);
    yield* sub_18413();
    yield* sub_18daa();
    if (flags.carry)
        return;
    yield* sub_19325();
    if (flags.carry)
        return;
    r.ax = memoryAGet16(r.ds, 0x0563);
    memoryASet16(r.ds, 0x055f, r.ax);
    memoryASet16(r.ds, 0x0565, 0x0b03);
    yield* sub_18375();

      return;
    default: throw new Error("Invalid control flow in sub_17b15");
    }
  }
}

function* sub_181b7() {
  let pc=0;
  
  dispatch: while (true) {
    if ((++game.steps & 1023) === 0) yield 0;
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
    yield* sub_19fa0();
    memoryASet16(r.ds, 0x055d, 0x000e);

      return;
    default: throw new Error("Invalid control flow in sub_181b7");
    }
  }
}

function* sub_181f9() {
  let pc=0;
  
  dispatch: while (true) {
    if ((++game.steps & 1023) === 0) yield 0;
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
}

function* sub_18250() {
  let pc=0;
  
  dispatch: while (true) {
    if ((++game.steps & 1023) === 0) yield 0;
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
}

function* sub_18299() {
  let pc=0;
  
  dispatch: while (true) {
    if ((++game.steps & 1023) === 0) yield 0;
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
    yield* sub_18413();
    yield* sub_18daa();
    if (flags.carry)
        return;
    yield* sub_19325();
    if (flags.carry)
        return;
    yield* sub_1a02d();
    r.bl = r.dl;
    r.bx &= 0x000e;
    r.si = memoryAGet16(r.ds, r.bx + 3986);
    r.ax = 0xb800;
    r.es = r.ax;
    r.di = memoryAGet16(r.ds, 0x055f);
    r.bp = 0x05fa;
    memoryASet16(r.ds, 0x0561, 0x0c02);
    r.cx = 0x0602;
    yield* sub_19f65();
    yield* sub_1a02d();
    r.bl = r.dl;
    r.bx &= 0x0006;
    r.si = memoryAGet16(r.ds, r.bx + 4002);
    r.di = memoryAGet16(r.ds, 0x055f);
    r.di += 0x00f0;
    r.bp = 0x0612;
    r.cx = 0x0602;
    yield* sub_19f65();
    memoryASet(r.ds, 0x0583, 0x00);

      return;
    default: throw new Error("Invalid control flow in sub_18299");
    }
  }
}

function* sub_1830d() {
  let pc=0;
  
  dispatch: while (true) {
    if ((++game.steps & 1023) === 0) yield 0;
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
}

function* sub_18342() {
  let pc=0;
  
  dispatch: while (true) {
    if ((++game.steps & 1023) === 0) yield 0;
    switch(pc) {
    case 0:

    r.cx = memoryAGet16(r.ds, 0x0579);
    r.dl = memoryAGet(r.ds, 0x057b);
    yield* sub_19ee0();
    memoryASet16(r.ds, 0x055f, r.ax);
    yield* sub_18354();

      return;
    default: throw new Error("Invalid control flow in sub_18342");
    }
  }
}

function* sub_18354() {
  let pc=0;
  
  dispatch: while (true) {
    if ((++game.steps & 1023) === 0) yield 0;
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
    yield* sub_19ffa();
    r.ds = pop();
    memoryASet(r.ds, 0x0583, 0x00);

      return;
    default: throw new Error("Invalid control flow in sub_18354");
    }
  }
}

function* sub_18375() {
  let pc=0;
  
  dispatch: while (true) {
    if ((++game.steps & 1023) === 0) yield 0;
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
    yield* sub_19f65();

      return;
    default: throw new Error("Invalid control flow in sub_18375");
    }
  }
}

function* sub_18396() {
  let pc=0;
  
  dispatch: while (true) {
    if ((++game.steps & 1023) === 0) yield 0;
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
    yield* sub_19ee0();
    memoryASet16(r.ds, 0x0581, r.ax);
    r.di = r.ax;
    r.ax = 0xb800;
    r.es = r.ax;
    r.bp = 0x000e;
    r.si = 0x1679;
    r.cx = 0x1205;
    yield* sub_19efc();
    r.ah = 0;
    yield* interrupt(0x1a);
    memoryASet16(r.ds, 0x057f, r.dx);
    memoryASet16(r.ds, 0x5a3c, 0x0000);
    memoryASet16(r.ds, 0x5a3e, 0x0000);
case 0x183db:
    yield* sub_1cc4c();
    r.ah = 0;
    yield* interrupt(0x1a);
    r.dx -= memoryAGet16(r.ds, 0x057f);
    if (r.dx < 0x000a)
        { pc = 0x183db; continue dispatch; }
    yield* sub_1cd51();
    r.di = memoryAGet16(r.ds, 0x0581);
    r.si = 0x000e;
    r.cx = 0x1205;
    memoryASet(r.ds, 0x0583, 0x00);
    yield* sub_19fcd();
    if (memoryAGet(r.ds, 0x1678) == 0x00)
        return;
    if (memoryAGet(r.ds, 0x1f80) == 0x00)
        return;
    memoryASet(r.ds, 0x1f80, memoryAGet(r.ds, 0x1f80) - 1);

      return;
    default: throw new Error("Invalid control flow in sub_18396");
    }
  }
}

function* sub_18413() {
  let pc=0;
  
  dispatch: while (true) {
    if ((++game.steps & 1023) === 0) yield 0;
    switch(pc) {
    case 0:

    r.ax = 0xb800;
    r.es = r.ax;
    r.di = memoryAGet16(r.ds, 0x055f);
    r.si = 0x05fa;
    r.cx = memoryAGet16(r.ds, 0x0561);
    yield* sub_19fcd();

      return;
    default: throw new Error("Invalid control flow in sub_18413");
    }
  }
}

function* sub_18430() {
  let pc=0;
  
  dispatch: while (true) {
    if ((++game.steps & 1023) === 0) yield 0;
    switch(pc) {
    case 0:

    r.ah = 0;
    yield* interrupt(0x1a);
    r.ax = r.dx;
    r.ax -= memoryAGet16(r.ds, 0x069f);
    if (r.ax >= 0x0002)
        { pc = 0x18440; continue dispatch; }
    return;
case 0x18440:
    memoryASet16(r.ds, 0x069f, r.dx);
    if (memoryAGet(r.ds, 0x069b) != 0x00)
        { pc = 0x1845e; continue dispatch; }
    yield* sub_184f1();
    yield 1;







    return;
case 0x1845e:
    r.dx = 0x0201;
    r.al = portRead(r.dx);
    r.al &= 0x10;
    memoryASet(r.ds, 0x069a, r.al);
    memoryASet(r.ds, 0x069e, 0x03);
    yield* sub_185e7();
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
    yield* sub_184d1();
    memoryASet(r.ds, 0x0698, r.bl);
case 0x1848e:
    if (r.al & 0x02)
        { pc = 0x184a5; continue dispatch; }
    if (!(memoryAGet(r.ds, 0x069e) & 0x02))
        { pc = 0x184a5; continue dispatch; }
    memoryASet(r.ds, 0x069e, memoryAGet(r.ds, 0x069e) & 0xfd);
    yield* sub_184d1();
    memoryASet(r.ds, 0x0699, r.bl);
case 0x184a5:
    if (!(memoryAGet(r.ds, 0x069e) & 0x03))
        return;
    yield* sub_185e7();
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
}

function* sub_184d1() {
  let pc=0;
  
  dispatch: while (true) {
    if ((++game.steps & 1023) === 0) yield 0;
    switch(pc) {
    case 0:

    push(r.ax);
    yield* sub_185e7();
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
}

function* sub_184f1() {
  let pc=0;
  
  dispatch: while (true) {
    if ((++game.steps & 1023) === 0) yield 0;
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
}

function* sub_18568() {
  let pc=0;
  
  dispatch: while (true) {
    if ((++game.steps & 1023) === 0) yield 0;
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
    yield* sub_1d0a0();
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
    yield* sub_1cd51();
case 0x185d3:
    return;
case 0x185d4:
    return;
case 0x185d5:
    yield* sub_186af();
    r.ax = pop();
    stop();

      return;
    default: throw new Error("Invalid control flow in sub_18568");
    }
  }
}

function* sub_185da() {
  let pc=0;
  
  dispatch: while (true) {
    if ((++game.steps & 1023) === 0) yield 0;
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
}

function* sub_185e7() {
  let pc=0;
  
  dispatch: while (true) {
    if ((++game.steps & 1023) === 0) yield 0;
    switch(pc) {
    case 0:
yield 1; r.ax=(0x10000-Math.floor(game.time()*1193.182)) & 0xffff;
      return;
    default: throw new Error("Invalid control flow in sub_185e7");
    }
  }
}

function* sub_18608() {
  let pc=0;
  
  dispatch: while (true) {
    if ((++game.steps & 1023) === 0) yield 0;
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
}

function* sub_18618() {
  let pc=0;
  
  dispatch: while (true) {
    if ((++game.steps & 1023) === 0) yield 0;
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
}

function* sub_18649() {
  let pc=0;
  
  dispatch: while (true) {
    if ((++game.steps & 1023) === 0) yield 0;
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
}

function* sub_186af() {
  let pc=0;
  
  dispatch: while (true) {
    if ((++game.steps & 1023) === 0) yield 0;
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
}

function* sub_18800() {
  let pc=0;
  
  dispatch: while (true) {
    if ((++game.steps & 1023) === 0) yield 0;
    switch(pc) {
    case 0:

    r.bx = memoryAGet16(r.ds, 0x0008);
    r.cl = memoryAGet(r.ds, r.bx + 4110);
case 0x18808:
    yield* sub_1a02d();
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
}

function* sub_18838() {
  let pc=0;
  
  dispatch: while (true) {
    if ((++game.steps & 1023) === 0) yield 0;
    switch(pc) {
    case 0:

    if (memoryAGet16(r.ds, 0x0004) != 0x0007)
        { pc = 0x18843; continue dispatch; }
    yield* sub_1a32a();
    return;
case 0x18843:
    if (memoryAGet16(r.ds, 0x0004) == 0x0000)
        { pc = 0x1884e; continue dispatch; }
    yield* sub_188f6();
    return;
case 0x1884e:
    r.al = memoryAGet(r.ds, 0x057b);
    r.al &= 0xf8;
    if (r.al == 0x60)
        { pc = 0x18860; continue dispatch; }
    yield* sub_18887();
    if (flags.carry)
        return;
    yield* sub_189dd();
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
    yield* interrupt(0x1a);
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
}

function* sub_18887() {
  let pc=0;
  
  dispatch: while (true) {
    if ((++game.steps & 1023) === 0) yield 0;
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
    yield* sub_1cb3e();
case 0x188f4:
    flags.carry = true;

      return;
    default: throw new Error("Invalid control flow in sub_18887");
    }
  }
}

function* sub_188f6() {
  let pc=0;
  
  dispatch: while (true) {
    if ((++game.steps & 1023) === 0) yield 0;
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
    yield* sub_1a059();
    if (!flags.carry)
        { pc = 0x1892c; continue dispatch; }
    memoryASet(r.ds, 0x0551, 0x01);
    flags.carry = false;
    return;
case 0x1892c:
    if (memoryAGet16(r.ds, 0x0004) != 0x0003)
        { pc = 0x1893e; continue dispatch; }
    yield* sub_1ae73();
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
}

function* sub_189c9() {
  let pc=0;
  
  dispatch: while (true) {
    if ((++game.steps & 1023) === 0) yield 0;
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
}

function* sub_189dd() {
  let pc=0;
  
  dispatch: while (true) {
    if ((++game.steps & 1023) === 0) yield 0;
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
    yield* sub_189c9();
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
}

function* sub_18a60() {
  let pc=0;
  
  dispatch: while (true) {
    if ((++game.steps & 1023) === 0) yield 0;
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
}

function* sub_18a7b() {
  let pc=0;
  
  dispatch: while (true) {
    if ((++game.steps & 1023) === 0) yield 0;
    switch(pc) {
    case 0:

    if (memoryAGet(r.ds, 0x1673) == 0x00)
        { pc = 0x18a8c; continue dispatch; }
    r.ah = 0;
    yield* interrupt(0x1a);
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
    yield* sub_18b52();
case 0x18b10:
    return;
case 0x18b11:
    memoryASet(r.ds, 0x1673, r.dl);
    r.cx = memoryAGet16(r.ds, 0x1671);
    memoryASet16(r.ds, 0x17e1, r.bx);
    yield* sub_19ee0();
    memoryASet16(r.ds, 0x17e7, r.ax);
    if (memoryAGet(r.ds, 0x17e9) == 0x02)
        { pc = 0x18b2d; continue dispatch; }
    yield* sub_18b52();
case 0x18b2d:
    yield* sub_18daa();
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
    yield* sub_19efc();

      return;
    default: throw new Error("Invalid control flow in sub_18a7b");
    }
  }
}

function* sub_18b52() {
  let pc=0;
  
  dispatch: while (true) {
    if ((++game.steps & 1023) === 0) yield 0;
    switch(pc) {
    case 0:

    r.ax = 0xb800;
    r.es = r.ax;
    r.di = memoryAGet16(r.ds, 0x17e5);
    r.si = 0x17ee;
    r.cx = memoryAGet16(r.ds, 0x17e3);
    yield* sub_19fcd();

      return;
    default: throw new Error("Invalid control flow in sub_18b52");
    }
  }
}

function* sub_18b66() {
  let pc=0;
  
  dispatch: while (true) {
    if ((++game.steps & 1023) === 0) yield 0;
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
    yield* sub_18608();
    if (!flags.zero)
        { pc = 0x18b6c; continue dispatch; }
    if (memoryAGet(r.ds, 0x1665) == 0x00)
        { pc = 0x18b81; continue dispatch; }
    yield* sub_18d35();
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
    yield* interrupt(0x1a);
    r.dx -= memoryAGet16(r.ds, 0x0556);
    if (r.dx < 0x0048)
        { pc = 0x18bba; continue dispatch; }
    memoryASet(r.ds, 0x1677, memoryAGet(r.ds, 0x1677) + 1);
case 0x18bba:
    yield* sub_1a02d();
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
    yield* sub_18d1a();
    memoryASet16(r.ds, 0x1666, r.cx);
    memoryASet(r.ds, 0x1668, r.dl);
    yield* sub_18d35();
    if (flags.carry)
        { pc = 0x18bba; continue dispatch; }
    memoryASet(r.ds, 0x1665, 0x1d);
    r.bx = memoryAGet16(r.ds, 0x0008);
    r.bl <<= 1;
    r.ax = memoryAGet16(r.ds, r.bx + 6174);
    memoryASet16(r.ds, 0x166c, r.ax);
    memoryASet(r.ds, 0x1670, 0x01);
case 0x18bfd:
    yield* sub_18d35();
    if (flags.carry)
        { pc = 0x18c10; continue dispatch; }
    memoryASet(r.ds, 0x1664, 0x00);
    yield* sub_18d7c();
    if (!flags.carry)
        { pc = 0x18c11; continue dispatch; }
    memoryASet(r.ds, 0x1664, memoryAGet(r.ds, 0x1664) + 1);
case 0x18c10:
    return;
case 0x18c11:
    if (memoryAGet(r.ds, 0x1665) != 0x10)
        { pc = 0x18c20; continue dispatch; }
    r.ah = 0;
    yield* interrupt(0x1a);
    memoryASet16(r.ds, 0x166e, r.dx);
case 0x18c20:
    if (memoryAGet(r.ds, 0x1665) != 0x0f)
        { pc = 0x18ca6; continue dispatch; }
    r.ah = 0;
    yield* interrupt(0x1a);
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
    yield* sub_1a02d();
    r.dx &= 0x000f;
    r.dx += memoryAGet16(r.ds, 0x1666);
    memoryASet16(r.ds, 0x1671, r.dx);
    r.al = 0x01;
    if (r.dx < memoryAGet16(r.ds, 0x0579))
        { pc = 0x18c72; continue dispatch; }
    r.al = 0xff;
case 0x18c72:
    memoryASet(r.ds, 0x1674, r.al);
    yield* sub_1a02d();
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
    yield* sub_19ee0();
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
}

function* sub_18d1a() {
  let pc=0;
  
  dispatch: while (true) {
    if ((++game.steps & 1023) === 0) yield 0;
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
}

function* sub_18d35() {
  let pc=0;
  
  dispatch: while (true) {
    if ((++game.steps & 1023) === 0) yield 0;
    switch(pc) {
    case 0:

    r.ax = memoryAGet16(r.ds, 0x1666);
    r.dl = memoryAGet(r.ds, 0x1668);
    r.bx = memoryAGet16(r.ds, 0x0579);
    r.dh = memoryAGet(r.ds, 0x057b);
    r.si = 0x0020;
    r.di = 0x0018;
    r.cx = 0x0e0f;
    yield* sub_1a059();
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
}

function* sub_18d7c() {
  let pc=0;
  
  dispatch: while (true) {
    if ((++game.steps & 1023) === 0) yield 0;
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
}

function* sub_18daa() {
  let pc=0;
  
  dispatch: while (true) {
    if ((++game.steps & 1023) === 0) yield 0;
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
    yield* sub_1a059();
    if (!flags.carry)
        return;
    yield* sub_18413();
    yield* sub_18b52();
    yield* sub_1830d();
    if (memoryAGet(r.ds, 0x1675) != 0x00)
        { pc = 0x18e0f; continue dispatch; }
    memoryASet(r.ds, 0x1675, 0x01);
    yield* sub_18396();
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
}

function* sub_18e20() {
  let pc=0;
  
  dispatch: while (true) {
    if ((++game.steps & 1023) === 0) yield 0;
    switch(pc) {
    case 0:

    r.bx = 0;
    r.ah = 0x0b;
    yield* interrupt(0x10);
    if (memoryAGet16(r.ds, 0x0006) != 0x0007)
        { pc = 0x18e42; continue dispatch; }
    if (memoryAGet(r.ds, 0x0553) == 0x00)
        { pc = 0x18e42; continue dispatch; }
    yield* sub_1c4bb();
    memoryASet16(r.ds, 0x0579, 0x0098);
    memoryASet(r.ds, 0x057b, 0x5f);
case 0x18e42:
    r.ax = 0xb800;
    r.es = r.ax;
    flags.direction = false;
    memoryASet16(r.ds, 0x1839, 0x0000);
    yield* sub_18e97();
    yield* sub_1cd51();
    yield* sub_18f61();
    if (memoryAGet16(r.ds, 0x0004) != 0x0000)
        { pc = 0x18e79; continue dispatch; }
    if (memoryAGet(r.ds, 0x0553) == 0x00)
        { pc = 0x18e76; continue dispatch; }
    if (memoryAGet16(r.ds, 0x0006) != 0x0007)
        { pc = 0x18e71; continue dispatch; }
    yield* sub_1c543();
    { pc = 0x18e79; continue dispatch; }
case 0x18e71:
    yield* sub_1aae0();
    { pc = 0x18e79; continue dispatch; }
case 0x18e76:
    yield* sub_18fa6();
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
    yield* sub_18e97();
    yield* sub_1cd51();

      return;
    default: throw new Error("Invalid control flow in sub_18e20");
    }
  }
}

function* sub_18e97() {
  let pc=0;
  
  dispatch: while (true) {
    if ((++game.steps & 1023) === 0) yield 0;
    switch(pc) {
    case 0:

    yield* sub_1cac6();
    memoryASet16(r.ds, 0x1835, 0x0001);
    memoryASet(r.ds, 0x1837, 0x08);
    r.cx = memoryAGet16(r.ds, 0x0579);
    r.dl = memoryAGet(r.ds, 0x057b);
    r.cx += 0x000c;
    r.cx &= 0xfff0;
    r.dl += 0x08;
    memoryASet(r.ds, 0x1838, 0x00);
case 0x18ebc:
    yield* sub_1cac7();
    memoryASet16(r.ds, 0x1832, r.cx);
    memoryASet(r.ds, 0x1834, r.dl);
    yield* sub_19ee0();
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
    yield 1;

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
}

function* sub_18f61() {
  let pc=0;
  
  dispatch: while (true) {
    if ((++game.steps & 1023) === 0) yield 0;
    switch(pc) {
    case 0:

    if (memoryAGet(r.ds, 0x0697) == 0xfd)
        { pc = 0x18f78; continue dispatch; }
    r.ah = 0x0b;
    r.bh = 0x01;
    r.si = memoryAGet16(r.ds, 0x0004);
    r.bl = memoryAGet(r.ds, r.si + 6227);
    yield* interrupt(0x10);
    { pc = 0x18f97; continue dispatch; }
case 0x18f78:
    r.si = memoryAGet16(r.ds, 0x0004);
    r.bl = 0x01;
    r.bh = memoryAGet(r.ds, r.si + 6203);
    yield* sub_18f9e();
    r.bl = 0x02;
    r.bh = memoryAGet(r.ds, r.si + 6211);
    yield* sub_18f9e();
    r.bl = 0x03;
    r.bh = memoryAGet(r.ds, r.si + 6219);
    yield* sub_18f9e();
case 0x18f97:
    r.ah = 0x0b;
    r.bx = 0;
    yield* interrupt(0x10);

      return;
    default: throw new Error("Invalid control flow in sub_18f61");
    }
  }
}

function* sub_18f9e() {
  let pc=0;
  
  dispatch: while (true) {
    if ((++game.steps & 1023) === 0) yield 0;
    switch(pc) {
    case 0:

    r.ax = 0x1000;
    push(r.si);
    yield* interrupt(0x10);
    r.si = pop();

      return;
    default: throw new Error("Invalid control flow in sub_18f9e");
    }
  }
}

function* sub_18fa6() {
  let pc=0;
  
  dispatch: while (true) {
    if ((++game.steps & 1023) === 0) yield 0;
    switch(pc) {
    case 0:

    if (memoryAGet16(r.ds, 0x0006) != 0x0007)
        { pc = 0x18fb1; continue dispatch; }
    yield* sub_1d270();
    return;
case 0x18fb1:
    yield* sub_1ca05();
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
    yield* sub_1ce10();
    yield* sub_1cd51();
    return;
case 0x18ff6:
    memoryASet16(r.ds, 0x1c2e, r.ax);
    memoryASet16(r.ds, 0x1c1b, 0x8080);
    memoryASet(r.ds, 0x1c1d, 0x1c);
case 0x19004:
    yield* sub_19047();
    r.ah = 0;
    yield* interrupt(0x1a);
    memoryASet16(r.ds, 0x1830, r.dx);
case 0x1900f:
    yield* sub_1ca14();
    r.ah = 0;
    yield* interrupt(0x1a);
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
    yield* sub_1cd51();

      return;
    default: throw new Error("Invalid control flow in sub_18fa6");
    }
  }
}

function* sub_19047() {
  let pc=0;
  
  dispatch: while (true) {
    if ((++game.steps & 1023) === 0) yield 0;
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
    yield* sub_19fcd();

      return;
    default: throw new Error("Invalid control flow in sub_19047");
    }
  }
}

function* sub_19070() {
  let pc=0;
  
  dispatch: while (true) {
    if ((++game.steps & 1023) === 0) yield 0;
    switch(pc) {
    case 0:

    memoryASet(r.ds, 0x1cbf, 0x00);
    memoryASet16(r.ds, 0x1ce1, 0x0000);
    memoryASet(r.ds, 0x1cc0, 0x00);
    memoryASet(r.ds, 0x1cc1, 0x00);
    memoryASet(r.ds, 0x1cb8, 0x00);
    memoryASet(r.ds, 0x1cc8, 0xb1);
    yield* sub_1c680();

      return;
    default: throw new Error("Invalid control flow in sub_19070");
    }
  }
}

function* sub_19093() {
  let pc=0;
  
  dispatch: while (true) {
    if ((++game.steps & 1023) === 0) yield 0;
    switch(pc) {
    case 0:

    r.ah = 0;
    yield* interrupt(0x1a);
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
    yield* sub_18608();
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
    yield* sub_1cd51();
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
    yield* sub_19311();
    yield* sub_19070();
    return;
case 0x190f9:
    yield* sub_19252();
    r.ax = 0x0104;
    r.al -= memoryAGet(r.ds, 0x1cc1);
    if (memoryAGet(r.ds, 0x1cd0) == 0xff)
        { pc = 0x1910c; continue dispatch; }
    r.ah = 0xff;
case 0x1910c:
    yield* sub_19289();
    { pc = 0x1922b; continue dispatch; }
case 0x19112:
    if (memoryAGet(r.ds, 0x1cb8) == 0x00)
        { pc = 0x1913c; continue dispatch; }
    r.dl = memoryAGet(r.ds, 0x1cb8);
    if (memoryAGet16(r.ds, 0x1cb9) == 0x0000)
        { pc = 0x19132; continue dispatch; }
    memoryASet16(r.ds, 0x1cb9, memoryAGet16(r.ds, 0x1cb9) - 1);
    yield* sub_1a02d();
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
    yield* sub_1a02d();
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
    yield* sub_19252();
    r.al = memoryAGet(r.ds, 0x1cc0);
    r.ah = memoryAGet(r.ds, 0x1cd0);
    yield* sub_19289();
    { pc = 0x1922b; continue dispatch; }
case 0x191a5:
    memoryASet(r.ds, 0x1d58, 0x00);
    r.ax = memoryAGet16(r.ds, 0x1cc6);
    if (memoryAGet(r.ds, 0x057b) < 0xb4)
        { pc = 0x191db; continue dispatch; }
    if (memoryAGet(r.ds, 0x0558) != 0x00)
        { pc = 0x191db; continue dispatch; }
    yield* sub_1a02d();
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
    yield* sub_19252();
    memoryASet16(r.ds, 0x1cc4, 0x0f04);
case 0x1922b:
    r.cx = memoryAGet16(r.ds, 0x1cc6);
    r.dl = memoryAGet(r.ds, 0x1cc8);
    yield* sub_19ee0();
    memoryASet16(r.ds, 0x1ccd, r.ax);
    if (memoryAGet(r.ds, 0x1cc0) == 0x03)
        { pc = 0x19243; continue dispatch; }
    yield* sub_19311();
case 0x19243:
    yield* sub_19325();
    if (flags.carry)
        return;
    r.ax = memoryAGet16(r.ds, 0x1ccd);
    memoryASet16(r.ds, 0x1cbd, r.ax);
    yield* sub_192cb();

      return;
    default: throw new Error("Invalid control flow in sub_19093");
    }
  }
}

function* sub_19252() {
  let pc=0;
  
  dispatch: while (true) {
    if ((++game.steps & 1023) === 0) yield 0;
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
}

function* sub_19289() {
  let pc=0;
  
  dispatch: while (true) {
    if ((++game.steps & 1023) === 0) yield 0;
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
    yield* sub_19fa0();
    memoryASet16(r.ds, 0x1cbb, 0x000e);

      return;
    default: throw new Error("Invalid control flow in sub_19289");
    }
  }
}

function* sub_192cb() {
  let pc=0;
  
  dispatch: while (true) {
    if ((++game.steps & 1023) === 0) yield 0;
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
    yield* sub_19efc();
    return;
case 0x192ee:
    push(r.ds);
    r.ds = r.ax;
    r.es = pop();
    push(r.es);
    push(r.ds);
    r.si = memoryAGet16(r.es, 0x1cbd);
    r.di = 0x1c40;
    yield* sub_19ffa();
    r.es = pop();
    r.ds = pop();
    r.si = memoryAGet16(r.ds, 0x1cbb);
    r.di = memoryAGet16(r.ds, 0x1cbd);
    r.cx = memoryAGet16(r.ds, 0x1cc4);
    yield* sub_19fcd();

      return;
    default: throw new Error("Invalid control flow in sub_192cb");
    }
  }
}

function* sub_19311() {
  let pc=0;
  
  dispatch: while (true) {
    if ((++game.steps & 1023) === 0) yield 0;
    switch(pc) {
    case 0:

    r.ax = 0xb800;
    r.es = r.ax;
    r.di = memoryAGet16(r.ds, 0x1cbd);
    r.si = 0x1c40;
    r.cx = memoryAGet16(r.ds, 0x1cc2);
    yield* sub_19fcd();

      return;
    default: throw new Error("Invalid control flow in sub_19311");
    }
  }
}

function* sub_19325() {
  let pc=0;
  
  dispatch: while (true) {
    if ((++game.steps & 1023) === 0) yield 0;
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
    yield* sub_19366();
    return;
case 0x19364:
    flags.carry = false;

      return;
    default: throw new Error("Invalid control flow in sub_19325");
    }
  }
}

function* sub_19366() {
  let pc=0;
  
  dispatch: while (true) {
    if ((++game.steps & 1023) === 0) yield 0;
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
    yield* sub_18413();
    r.al = memoryAGet(r.ds, 0x1cb8);
    push(r.ax);
    memoryASet(r.ds, 0x1cb8, 0x00);
    memoryASet16(r.ds, 0x1cc4, 0x0f04);
    r.ax = memoryAGet16(r.ds, 0x15c8);
    memoryASet16(r.ds, 0x1cbb, r.ax);
    r.cx = memoryAGet16(r.ds, 0x1cc6);
    r.dl = memoryAGet(r.ds, 0x1cc8);
    yield* sub_19ee0();
    memoryASet16(r.ds, 0x1cbd, r.ax);
    yield* sub_192cb();
    r.ax = pop();
    memoryASet(r.ds, 0x1cb8, r.al);
case 0x193ed:
    yield* sub_19311();
    yield* sub_18413();
    r.ax = 0x0000;
    if (memoryAGet16(r.ds, 0x0579) >= 0x00a0)
        { pc = 0x19401; continue dispatch; }
    r.ax = 0x0122;
case 0x19401:
    memoryASet16(r.ds, 0x0579, r.ax);
    if (memoryAGet16(r.ds, 0x0004) != 0x0000)
        { pc = 0x1940e; continue dispatch; }
    yield* sub_1793d();
case 0x1940e:
    flags.carry = true;

      return;
    default: throw new Error("Invalid control flow in sub_19366");
    }
  }
}

function* sub_19410() {
  let pc=0;
  
  dispatch: while (true) {
    if ((++game.steps & 1023) === 0) yield 0;
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
    yield* sub_1a059();
    return;
case 0x19439:
    flags.carry = false;

      return;
    default: throw new Error("Invalid control flow in sub_19410");
    }
  }
}

function* sub_19440() {
  let pc=0;
  
  dispatch: while (true) {
    if ((++game.steps & 1023) === 0) yield 0;
    switch(pc) {
    case 0:

    memoryASet(r.ds, 0x1d59, 0x00);

      return;
    default: throw new Error("Invalid control flow in sub_19440");
    }
  }
}

function* sub_19446() {
  let pc=0;
  
  dispatch: while (true) {
    if ((++game.steps & 1023) === 0) yield 0;
    switch(pc) {
    case 0:

    push(0x7777);
    r.ah = 0;
    yield* interrupt(0x1a);
    if (r.dx != memoryAGet16(r.ds, 0x1d5a))
        { pc = 0x19451; continue dispatch; }
case 0x19450:
    assert(pop() == 0x7777);
    return;
case 0x19451:
    r.cx = r.dx;
    yield* sub_18608();
    if (flags.zero)
        { pc = 0x19450; continue dispatch; }
    memoryASet16(r.ds, 0x1d5a, r.cx);
    yield* sub_19527();
    if (flags.carry)
        { pc = 0x19450; continue dispatch; }
    if (memoryAGet(r.ds, 0x1d59) != 0x00)
        { pc = 0x1949d; continue dispatch; }
    if (memoryAGet(r.ds, 0x057b) == 0x86)
        { pc = 0x1947e; continue dispatch; }
    if (memoryAGet(r.ds, 0x057b) == 0x8e)
        { pc = 0x1947e; continue dispatch; }
    yield* sub_1a02d();
    if (r.dl > 0x05)
        { pc = 0x19450; continue dispatch; }
case 0x1947e:
    yield* sub_18800();
    r.dl += 0x03;
    memoryASet(r.ds, 0x1d5e, r.dl);
    yield* sub_1a02d();
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
    yield* sub_19ee0();
    memoryASet16(r.ds, 0x1d62, r.ax);
    yield* sub_1950c();
    yield* sub_19527();
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
    yield* sub_19efc();
    assert(pop() == 0x7777);

      return;
    default: throw new Error("Invalid control flow in sub_19446");
    }
  }
}

function* sub_1950c() {
  let pc=0;
  
  dispatch: while (true) {
    if ((++game.steps & 1023) === 0) yield 0;
    switch(pc) {
    case 0:

    if (memoryAGet(r.ds, 0x1d59) == 0x1a)
        return;
    r.ax = 0xb800;
    r.es = r.ax;
    r.di = memoryAGet16(r.ds, 0x1d60);
    r.si = 0x1d24;
    r.cx = memoryAGet16(r.ds, 0x1d66);
    yield* sub_19fcd();

      return;
    default: throw new Error("Invalid control flow in sub_1950c");
    }
  }
}

function* sub_19527() {
  let pc=0;
  
  dispatch: while (true) {
    if ((++game.steps & 1023) === 0) yield 0;
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
    yield* sub_1a059();
    if (!flags.carry)
        return;
    memoryASet(r.ds, 0x1d58, 0x01);

      return;
    default: throw new Error("Invalid control flow in sub_19527");
    }
  }
}

function* sub_19560() {
  let pc=0;
  
  dispatch: while (true) {
    if ((++game.steps & 1023) === 0) yield 0;
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
}

function* sub_195ab() {
  let pc=0;
  
  dispatch: while (true) {
    if ((++game.steps & 1023) === 0) yield 0;
    switch(pc) {
    case 0:

    r.ah = 0;
    yield* interrupt(0x1a);
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
    yield* sub_1988e();
    if (flags.carry)
        { pc = 0x195b5; continue dispatch; }
    yield* sub_19797();
    if (flags.carry)
        { pc = 0x195b5; continue dispatch; }
    r.bx = memoryAGet16(r.ds, 0x1f6c);
    if (memoryAGet(r.ds, r.bx + 8016) == 0x00)
        { pc = 0x1961b; continue dispatch; }
    r.ah = 0;
    yield* interrupt(0x1a);
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
    yield* sub_1a02d();
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
    yield* sub_1a02d();
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
    yield* sub_1a02d();
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
    yield* sub_19ee0();
    memoryASet16(r.ds, 0x1f4b, r.ax);
    r.bx = memoryAGet16(r.ds, 0x1f6c);
    if (memoryAGet(r.ds, r.bx + 8008) != 0x00)
        { pc = 0x19720; continue dispatch; }
    r.al = memoryAGet(r.ds, r.bx + 7996);
    r.al |= memoryAGet(r.ds, r.bx + 7999);
    if (!r.al)
        { pc = 0x19720; continue dispatch; }
    yield* sub_1977d();
case 0x19720:
    yield* sub_1988e();
    if (flags.carry)
        { pc = 0x1972a; continue dispatch; }
    yield* sub_19797();
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
    yield* sub_19f65();

      return;
    default: throw new Error("Invalid control flow in sub_195ab");
    }
  }
}

function* sub_1977d() {
  let pc=0;
  
  dispatch: while (true) {
    if ((++game.steps & 1023) === 0) yield 0;
    switch(pc) {
    case 0:

    r.bx = memoryAGet16(r.ds, 0x1f6c);
    r.bl <<= 1;
    r.ax = 0xb800;
    r.es = r.ax;
    r.di = memoryAGet16(r.ds, r.bx + 8002);
    r.si = memoryAGet16(r.ds, r.bx + 8025);
    r.cx = 0x0802;
    yield* sub_19fcd();

      return;
    default: throw new Error("Invalid control flow in sub_1977d");
    }
  }
}

function* sub_19797() {
  let pc=0;
  
  dispatch: while (true) {
    if ((++game.steps & 1023) === 0) yield 0;
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
    yield* sub_1a059();
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
    yield* sub_19efc();
    r.ah = 0;
    yield* interrupt(0x1a);
    memoryASet16(r.ds, 0x1f65, r.dx);
case 0x1981c:
    yield* sub_1ccc0();
    r.ah = 0;
    yield* interrupt(0x1a);
    r.dx -= memoryAGet16(r.ds, 0x1f65);
    if (r.dx < 0x0008)
        { pc = 0x1981c; continue dispatch; }
    yield* sub_1cd51();
    r.di = memoryAGet16(r.ds, 0x1f67);
    r.si = 0x000e;
    r.cx = 0x0806;
    yield* sub_19fcd();
case 0x1983c:
    flags.carry = true;
    return;
case 0x1983e:
    r.ah = 0;
    yield* interrupt(0x1a);
    r.bx = memoryAGet16(r.ds, 0x1f6c);
    memoryASet(r.ds, r.bx + 8016, 0x01);
    memoryASet(r.ds, r.bx + 7996, 0x01);
    r.bl <<= 1;
    memoryASet16(r.ds, r.bx + 8019, r.dx);
    yield* sub_18413();
    r.bx = memoryAGet16(r.ds, 0x1f6c);
    r.bl <<= 1;
    r.si = memoryAGet16(r.ds, r.bx + 8031);
    r.di = memoryAGet16(r.ds, r.bx + 8002);
    r.ax = 0xb800;
    r.es = r.ax;
    r.bp = 0x000e;
    r.cx = 0x0802;
    yield* sub_19efc();
    yield* sub_18354();
    r.bx = memoryAGet16(r.ds, 0x1f6c);
    r.al = memoryAGet(r.ds, r.bx + 7993);
    yield* sub_19936();
    r.ax = 0x03e8;
    r.bx = 0x02ee;
    yield* sub_1cb6b();
    flags.carry = true;

      return;
    default: throw new Error("Invalid control flow in sub_19797");
    }
  }
}

function* sub_1988e() {
  let pc=0;
  
  dispatch: while (true) {
    if ((++game.steps & 1023) === 0) yield 0;
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
    yield* sub_1a059();

      return;
    default: throw new Error("Invalid control flow in sub_1988e");
    }
  }
}

function* sub_198c0() {
  let pc=0;
  
  dispatch: while (true) {
    if ((++game.steps & 1023) === 0) yield 0;
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
}

function* sub_198e3() {
  let pc=0;
  
  dispatch: while (true) {
    if ((++game.steps & 1023) === 0) yield 0;
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
    yield* sub_19fcd();

      return;
    default: throw new Error("Invalid control flow in sub_198e3");
    }
  }
}

function* sub_1990a() {
  let pc=0;
  
  dispatch: while (true) {
    if ((++game.steps & 1023) === 0) yield 0;
    switch(pc) {
    case 0:

    r.di = 0x1f82;
    yield* sub_19918();

      return;
    default: throw new Error("Invalid control flow in sub_1990a");
    }
  }
}

function* sub_19911() {
  let pc=0;
  
  dispatch: while (true) {
    if ((++game.steps & 1023) === 0) yield 0;
    switch(pc) {
    case 0:

    r.di = 0x1f89;
    yield* sub_19918();

      return;
    default: throw new Error("Invalid control flow in sub_19911");
    }
  }
}

function* sub_19918() {
  let pc=0;
  
  dispatch: while (true) {
    if ((++game.steps & 1023) === 0) yield 0;
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
}

function* sub_19922() {
  let pc=0;
  
  dispatch: while (true) {
    if ((++game.steps & 1023) === 0) yield 0;
    switch(pc) {
    case 0:

    r.bx = 0x1f89;
    r.di = 0x12ca;
    yield* sub_19969();

      return;
    default: throw new Error("Invalid control flow in sub_19922");
    }
  }
}

function* sub_1992c() {
  let pc=0;
  
  dispatch: while (true) {
    if ((++game.steps & 1023) === 0) yield 0;
    switch(pc) {
    case 0:

    r.bx = 0x1f82;
    r.di = 0x143c;
    yield* sub_19969();

      return;
    default: throw new Error("Invalid control flow in sub_1992c");
    }
  }
}

function* sub_19936() {
  let pc=0;
  
  dispatch: while (true) {
    if ((++game.steps & 1023) === 0) yield 0;
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
    yield* sub_1992c();

      return;
    default: throw new Error("Invalid control flow in sub_19936");
    }
  }
}

function* sub_1994e() {
  let pc=0;
  
  dispatch: while (true) {
    if ((++game.steps & 1023) === 0) yield 0;
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
}

function* sub_19969() {
  let pc=0;
  
  dispatch: while (true) {
    if ((++game.steps & 1023) === 0) yield 0;
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
    yield* sub_19fcd();
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
}

function* sub_199c0() {
  let pc=0;
  
  dispatch: while (true) {
    if ((++game.steps & 1023) === 0) yield 0;
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
    yield* sub_1a02d();
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
    yield* sub_19fcd();
    memoryASet16(r.ds, 0x2654, memoryAGet16(r.ds, 0x2654) + 1);
    if (memoryAGet16(r.ds, 0x2654) < 0x0028)
        { pc = 0x199e5; continue dispatch; }
    return;
case 0x19a1e:
    if (memoryAGet16(r.ds, 0x0004) != 0x0007)
        { pc = 0x19a29; continue dispatch; }
    yield* sub_1a23f();
    return;
case 0x19a29:
    if (memoryAGet16(r.ds, 0x0004) != 0x0006)
        { pc = 0x19a6e; continue dispatch; }
    r.ax = 0;
    yield* sub_19bd0();
    r.bx = 0x2570;
    r.ax = 0x064a;
    yield* sub_19d54();
    memoryASet16(r.ds, 0x2650, 0x0048);
    memoryASet(r.ds, 0x2652, 0x38);
    r.ax = 0x0dd2;
    yield* sub_19b88();
    r.ax = 0x0df6;
    yield* sub_19ba0();
    r.si = 0x1fa0;
    r.di = 0x067e;
    r.cx = 0x1002;
    yield* sub_19fcd();
    r.bx = 0x2344;
    r.ax = 0x0b84;
    yield* sub_19d54();
    yield* sub_1bd77();
    return;
case 0x19a6e:
    if (memoryAGet16(r.ds, 0x0004) != 0x0005)
        { pc = 0x19abd; continue dispatch; }
    r.ax = 0x0640;
    yield* sub_19bd0();
    r.bx = 0x2570;
    r.ax = 0x0cb6;
    yield* sub_19d54();
    memoryASet16(r.ds, 0x2650, 0x00f8);
    memoryASet(r.ds, 0x2652, 0x60);
    r.ax = 0x140e;
    yield* sub_19b88();
    r.ax = 0x1434;
    yield* sub_19ba0();
    r.ax = 0x143e;
    yield* sub_19ba0();
    r.ax = 0x16a0;
    yield* sub_19bb8();
    r.bx = 0x2344;
    r.ax = 0x1184;
    yield* sub_19d54();
    r.si = 0x1fe0;
    r.di = 0x0dd6;
    r.cx = 0x1002;
    yield* sub_19fcd();
    return;
case 0x19abd:
    if (memoryAGet16(r.ds, 0x0004) != 0x0004)
        { pc = 0x19aee; continue dispatch; }
    r.ax = 0x0640;
    yield* sub_19bd0();
    r.bx = 0x2570;
    r.ax = 0x0cba;
    yield* sub_19d54();
    memoryASet16(r.ds, 0x2650, 0x0108);
    memoryASet(r.ds, 0x2652, 0x60);
    r.ax = 0x1439;
    yield* sub_19b88();
    r.ax = 0x16c0;
    yield* sub_19b75();
    yield* sub_1b1ce();
    return;
case 0x19aee:
    if (memoryAGet16(r.ds, 0x0004) != 0x0003)
        { pc = 0x19b39; continue dispatch; }
    r.ax = 0x0640;
    yield* sub_19bd0();
    r.bx = 0x2570;
    r.ax = 0x0c90;
    yield* sub_19d54();
    memoryASet16(r.ds, 0x2650, 0x0060);
    memoryASet(r.ds, 0x2652, 0x60);
    r.ax = 0x140c;
    yield* sub_19b88();
    r.ax = 0x1418;
    yield* sub_19ba0();
    r.bx = 0x2344;
    r.ax = 0x1184;
    yield* sub_19d54();
    r.bx = 0x2344;
    r.ax = 0x11a2;
    yield* sub_19d54();
    r.bx = 0x2624;
    r.ax = 0;
    yield* sub_19d54();
    yield* sub_1ae0b();
    return;
case 0x19b39:
    r.ax = 0x0640;
    yield* sub_19bd0();
    r.bx = 0x2570;
    r.ax = 0x0ca0;
    yield* sub_19d54();
    memoryASet16(r.ds, 0x2650, 0x00a0);
    memoryASet(r.ds, 0x2652, 0x60);
    r.ax = 0x1406;
    yield* sub_19b88();
    r.bx = 0x2344;
    r.ax = 0x11c4;
    yield* sub_19d54();
    r.ax = 0x1422;
    yield* sub_19ba0();
    r.ax = 0x1690;
    yield* sub_19bb8();
    r.ax = 0x16b6;
    yield* sub_19b75();

      return;
    default: throw new Error("Invalid control flow in sub_199c0");
    }
  }
}

function* sub_19b75() {
  let pc=0;
  
  dispatch: while (true) {
    if ((++game.steps & 1023) === 0) yield 0;
    switch(pc) {
    case 0:

    memoryASet16(r.ds, 0x2634, r.ax);
    r.bx = 0x2384;
    yield* sub_19d54();
    r.ax = memoryAGet16(r.ds, 0x2634);
    r.bx = 0x238c;
    yield* sub_19d54();

      return;
    default: throw new Error("Invalid control flow in sub_19b75");
    }
  }
}

function* sub_19b88() {
  let pc=0;
  
  dispatch: while (true) {
    if ((++game.steps & 1023) === 0) yield 0;
    switch(pc) {
    case 0:

    memoryASet16(r.ds, 0x2634, r.ax);
    r.si = 0x0008;
case 0x19b8e:
    r.ax = memoryAGet16(r.ds, 0x2634);
    r.bx = memoryAGet16(r.ds, r.si + 9780);
    push(r.si);
    yield* sub_19d54();
    r.si = pop();
    r.si -= 0x0002;
    if (r.si != 0)
        { pc = 0x19b8e; continue dispatch; }

      return;
    default: throw new Error("Invalid control flow in sub_19b88");
    }
  }
}

function* sub_19ba0() {
  let pc=0;
  
  dispatch: while (true) {
    if ((++game.steps & 1023) === 0) yield 0;
    switch(pc) {
    case 0:

    memoryASet16(r.ds, 0x2634, r.ax);
    r.si = 0x000a;
case 0x19ba6:
    r.ax = memoryAGet16(r.ds, 0x2634);
    r.bx = memoryAGet16(r.ds, r.si + 9788);
    push(r.si);
    yield* sub_19d54();
    r.si = pop();
    r.si -= 0x0002;
    if (r.si != 0)
        { pc = 0x19ba6; continue dispatch; }

      return;
    default: throw new Error("Invalid control flow in sub_19ba0");
    }
  }
}

function* sub_19bb8() {
  let pc=0;
  
  dispatch: while (true) {
    if ((++game.steps & 1023) === 0) yield 0;
    switch(pc) {
    case 0:

    memoryASet16(r.ds, 0x2634, r.ax);
    r.si = 0x0008;
case 0x19bbe:
    r.ax = memoryAGet16(r.ds, 0x2634);
    r.bx = memoryAGet16(r.ds, r.si + 9798);
    push(r.si);
    yield* sub_19d54();
    r.si = pop();
    r.si -= 0x0002;
    if (r.si != 0)
        { pc = 0x19bbe; continue dispatch; }

      return;
    default: throw new Error("Invalid control flow in sub_19bb8");
    }
  }
}

function* sub_19bd0() {
  let pc=0;
  
  dispatch: while (true) {
    if ((++game.steps & 1023) === 0) yield 0;
    switch(pc) {
    case 0:

    memoryASet16(r.ds, 0x267e, r.ax);
    r.bx = 0x251c;
    yield* sub_19d54();
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
    yield* sub_19c11();
    r.di = memoryAGet16(r.ds, 0x267e);
    r.di += 0x22cb;
    r.al = 0xa8;
    yield* sub_19c11();

      return;
    default: throw new Error("Invalid control flow in sub_19bd0");
    }
  }
}

function* sub_19c11() {
  let pc=0;
  
  dispatch: while (true) {
    if ((++game.steps & 1023) === 0) yield 0;
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
}

function* sub_19c30() {
  let pc=0;
  
  dispatch: while (true) {
    if ((++game.steps & 1023) === 0) yield 0;
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
    yield 1;
    yield* sub_19dce();
    r.bx = 0x28a0;
    r.ax = 0;
    yield* sub_19d54();
    yield* sub_19c98();
    yield* sub_19eb4();
    yield* sub_19dbb();
    yield* sub_19cb0();

      return;
    default: throw new Error("Invalid control flow in sub_19c30");
    }
  }
}

function* sub_19c60() {
  let pc=0;
  
  dispatch: while (true) {
    if ((++game.steps & 1023) === 0) yield 0;
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
    yield* sub_19dce();
    r.bx = 0x28a0;
    r.ax = 0;
    yield* sub_19d54();
    yield* sub_19c98();
    r.ax = memoryAGet16(r.ds, 0x0008);
    push(r.ax);
    memoryASet16(r.ds, 0x0008, 0x0001);
    yield* sub_19eb4();
    r.ax = pop();
    memoryASet16(r.ds, 0x0008, r.ax);

      return;
    default: throw new Error("Invalid control flow in sub_19c60");
    }
  }
}

function* sub_19c98() {
  let pc=0;
  
  dispatch: while (true) {
    if ((++game.steps & 1023) === 0) yield 0;
    switch(pc) {
    case 0:

    r.bx = memoryAGet16(r.ds, 0x6df8);
    r.bx &= 0x0003;
    r.bl <<= 1;
    r.si = memoryAGet16(r.ds, r.bx + 10961);
    r.di = 0x1902;
    r.cx = 0x0801;
    yield* sub_19fcd();

      return;
    default: throw new Error("Invalid control flow in sub_19c98");
    }
  }
}

function* sub_19cb0() {
  let pc=0;
  
  dispatch: while (true) {
    if ((++game.steps & 1023) === 0) yield 0;
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
    yield* sub_19cf6();
    r.di = 0x0640;
    r.bh = 0x30;
    memoryASet16(r.ds, 0x2aca, 0x0005);
    yield* sub_19cf6();
    r.di = 0x0b40;
    r.bh = 0x00;
    memoryASet16(r.ds, 0x2aca, 0x000a);
    yield* sub_19cf6();
    memoryASet(r.ds, 0x0525, 0x10);
    memoryASet16(r.ds, 0x052f, 0x0000);
    memoryASet(r.ds, 0x0531, 0x01);

      return;
    default: throw new Error("Invalid control flow in sub_19cb0");
    }
  }
}

function* sub_19cf6() {
  let pc=0;
  
  dispatch: while (true) {
    if ((++game.steps & 1023) === 0) yield 0;
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
    yield* sub_178ad();
    r.es = pop();
    r.di = pop();
    push(r.di);
    r.si = 0x04d7;
    r.cx = 0x1002;
    yield* sub_19fcd();
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
}

function* sub_19d54() {
  let pc=0;
  
  dispatch: while (true) {
    if ((++game.steps & 1023) === 0) yield 0;
    switch(pc) {
    case 0:

    r.cx = memoryAGet16(r.ds, r.bx);
    memoryASet16(r.ds, 0x2ac7, r.cx);
    memoryASet16(r.ds, 0x2acc, r.ax);
    r.bx += 0x0002;
case 0x19d60:
    yield 1;
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
}

function* sub_19da1() {
  let pc=0;
  
  dispatch: while (true) {
    if ((++game.steps & 1023) === 0) yield 0;
    switch(pc) {
    case 0:

    memoryASet(r.ds, 0x2ac4, 0x04);
case 0x19da6:
    r.si = 0x2680;
    r.cx = 0x1005;
    push(r.di);
    yield* sub_19fcd();
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
}

function* sub_19dbb() {
  let pc=0;
  
  dispatch: while (true) {
    if ((++game.steps & 1023) === 0) yield 0;
    switch(pc) {
    case 0:

    r.di = 0x03c5;
    yield* sub_19da1();
    r.di = 0x08c5;
    yield* sub_19da1();
    r.di = 0x0dc5;
    yield* sub_19da1();

      return;
    default: throw new Error("Invalid control flow in sub_19dbb");
    }
  }
}

function* sub_19dce() {
  let pc=0;
  
  dispatch: while (true) {
    if ((++game.steps & 1023) === 0) yield 0;
    switch(pc) {
    case 0:

    memoryASet16(r.ds, 0x2ac2, 0x103e);
case 0x19dd4:
    memoryASet16(r.ds, 0x2ac2, memoryAGet16(r.ds, 0x2ac2) + 0x0002);
    r.di = memoryAGet16(r.ds, 0x2ac2);
    if (r.di >= 0x1090)
        { pc = 0x19e02; continue dispatch; }
case 0x19de3:
    yield* sub_1a02d();
    r.dx &= 0x0030;
    if (r.dl == memoryAGet(r.ds, 0x2ac4))
        { pc = 0x19de3; continue dispatch; }
    memoryASet(r.ds, 0x2ac4, r.dl);
    r.dx += 0x2904;
    r.si = r.dx;
    r.cx = 0x0801;
    yield* sub_19fcd();
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
    yield 1;
    memoryASet16(r.ds, 0x2ac2, 0x2944);
case 0x19e1c:
    memoryASet(r.ds, 0x2ac4, 0x09);
case 0x19e21:
    yield* sub_1a02d();
    r.dx &= 0x0776;
    r.dx += 0x12c0;
    r.di = r.dx;
    r.si = memoryAGet16(r.ds, 0x2ac2);
    r.cx = 0x0501;
    yield* sub_19fcd();
    r.tl = memoryAGet(r.ds, 0x2ac4);
    memoryASet(r.ds, 0x2ac4, memoryAGet(r.ds, 0x2ac4) - 1);
    if (r.tl != 1)
        { pc = 0x19e21; continue dispatch; }
    memoryASet16(r.ds, 0x2ac2, memoryAGet16(r.ds, 0x2ac2) + 0x000a);
    if (memoryAGet16(r.ds, 0x2ac2) < 0x296c)
        { pc = 0x19e1c; continue dispatch; }
    memoryASet(r.ds, 0x2ac4, 0x05);
case 0x19e50:
    yield* sub_1a02d();
    r.dx &= 0x003e;
    r.dx += 0x3a98;
    r.di = r.dx;
    r.si = 0x296c;
    r.cx = 0x0501;
    yield* sub_19fcd();
    r.tl = memoryAGet(r.ds, 0x2ac4);
    memoryASet(r.ds, 0x2ac4, memoryAGet(r.ds, 0x2ac4) - 1);
    if (r.tl != 1)
        { pc = 0x19e50; continue dispatch; }

      return;
    default: throw new Error("Invalid control flow in sub_19dce");
    }
  }
}

function* sub_19e6d() {
  let pc=0;
  
  dispatch: while (true) {
    if ((++game.steps & 1023) === 0) yield 0;
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
    yield* sub_19fcd();
case 0x19e8d:
    r.di = memoryAGet16(r.ds, 0x2ac2);
    memoryASet16(r.ds, 0x2ac2, memoryAGet16(r.ds, 0x2ac2) + 0x0140);
    r.si = 0x29ee;
    r.cx = 0x0804;
    yield* sub_19fcd();
    r.tl = memoryAGet(r.ds, 0x2ac4);
    memoryASet(r.ds, 0x2ac4, memoryAGet(r.ds, 0x2ac4) - 1);
    if (r.tl != 1)
        { pc = 0x19e8d; continue dispatch; }
    r.di = memoryAGet16(r.ds, 0x2ac2);
    r.si = 0x2a2e;
    r.cx = 0x0b04;
    yield* sub_19fcd();

      return;
    default: throw new Error("Invalid control flow in sub_19e6d");
    }
  }
}

function* sub_19eb4() {
  let pc=0;
  
  dispatch: while (true) {
    if ((++game.steps & 1023) === 0) yield 0;
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
    yield* sub_19e6d();
    r.bx = memoryAGet16(r.ds, 0x2ac5);
    r.bx += 0x0002;
    { pc = 0x19ebc; continue dispatch; }

      return;
    default: throw new Error("Invalid control flow in sub_19eb4");
    }
  }
}

function* sub_19ee0() {
  let pc=0;
  
  dispatch: while (true) {
    if ((++game.steps & 1023) === 0) yield 0;
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
}

function* sub_19efc() {
  let pc=0;
  
  dispatch: while (true) {
    if ((++game.steps & 1023) === 0) yield 0;
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
}

function* sub_19f65() {
  let pc=0;
  
  dispatch: while (true) {
    if ((++game.steps & 1023) === 0) yield 0;
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
}

function* sub_19fa0() {
  let pc=0;
  
  dispatch: while (true) {
    if ((++game.steps & 1023) === 0) yield 0;
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
}

function* sub_19fcd() {
  let pc=0;
  
  dispatch: while (true) {
    if ((++game.steps & 1023) === 0) yield 0;
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
}

function* sub_19ffa() {
  let pc=0;
  
  dispatch: while (true) {
    if ((++game.steps & 1023) === 0) yield 0;
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
}

function* sub_1a02d() {
  let pc=0;
  
  dispatch: while (true) {
    if ((++game.steps & 1023) === 0) yield 0;
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
}

function* sub_1a040() {
  let pc=0;
  
  dispatch: while (true) {
    if ((++game.steps & 1023) === 0) yield 0;
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
}

function* sub_1a059() {
  let pc=0;
  
  dispatch: while (true) {
    if ((++game.steps & 1023) === 0) yield 0;
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
}

function* sub_1a090() {
  let pc=0;
  
  dispatch: while (true) {
    if ((++game.steps & 1023) === 0) yield 0;
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
    yield* sub_1a059();
    r.cx = pop();
    if (!flags.carry)
        { pc = 0x1a137; continue dispatch; }
    return;
case 0x1a137:
    if (--r.cx)
        { pc = 0x1a105; continue dispatch; }
    yield* sub_18413();
    if (memoryAGet(r.ds, 0x70f2) == 0x00)
        { pc = 0x1a146; continue dispatch; }
    yield* sub_1d45b();
case 0x1a146:
    r.bx = memoryAGet16(r.ds, 0x2e8d);
    memoryASet16(r.ds, 0x2e94, r.bx);
    memoryASet(r.ds, r.bx + 11122, 0x01);
    r.dl = memoryAGet(r.ds, r.bx + 11114);
    r.bl <<= 1;
    r.cx = memoryAGet16(r.ds, r.bx + 11098);
    yield* sub_19ee0();
    r.di = r.ax;
    r.si = 0x2af0;
    r.ax = 0xb800;
    r.es = r.ax;
    r.cx = 0x0f03;
    yield* sub_19fcd();
    memoryASet16(r.ds, 0x2e8d, 0xffff);
    r.bx = 0;
    r.ah = 0x0b;
    yield* interrupt(0x10);
    yield* sub_1c06e();
    if (memoryAGet(r.ds, 0x70f2) == 0x00)
        { pc = 0x1a189; continue dispatch; }
    yield* sub_1d42a();
case 0x1a189:
    yield* sub_18375();
    r.ax = 0x03e8;
    r.bx = 0x04a5;
    yield* sub_1cb6b();

      return;
    default: throw new Error("Invalid control flow in sub_1a090");
    }
  }
}

function* sub_1a196() {
  let pc=0;
  
  dispatch: while (true) {
    if ((++game.steps & 1023) === 0) yield 0;
    switch(pc) {
    case 0:

    r.ah = 0;
    yield* interrupt(0x1a);
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
    yield* sub_1a059();
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
    yield* sub_18413();
    if (memoryAGet(r.ds, 0x70f2) == 0x00)
        { pc = 0x1a1fa; continue dispatch; }
    yield* sub_1d45b();
case 0x1a1fa:
    r.bx = pop();
    memoryASet(r.ds, r.bx + 11122, 0x00);
    r.dl = memoryAGet(r.ds, r.bx + 11114);
    memoryASet16(r.ds, 0x2e8d, r.bx);
    r.bl <<= 1;
    r.cx = memoryAGet16(r.ds, r.bx + 11098);
    yield* sub_19ee0();
    r.di = r.ax;
    r.si = 0x2b7a;
    r.ax = 0xb800;
    r.es = r.ax;
    r.cx = 0x0f03;
    yield* sub_19fcd();
    if (memoryAGet(r.ds, 0x70f2) == 0x00)
        { pc = 0x1a22b; continue dispatch; }
    yield* sub_1d42a();
case 0x1a22b:
    yield* sub_18375();
    r.bx = 0x0001;
    r.ah = 0x0b;
    yield* interrupt(0x10);
    r.ax = 0x03e8;
    r.bx = 0x0349;
    yield* sub_1cb6b();

      return;
    default: throw new Error("Invalid control flow in sub_1a196");
    }
  }
}

function* sub_1a23f() {
  let pc=0;
  
  dispatch: while (true) {
    if ((++game.steps & 1023) === 0) yield 0;
    switch(pc) {
    case 0:

    r.ax = 0;
    r.bx = 0x2e24;
    yield* sub_19d54();
    memoryASet(r.ds, 0x2e8a, 0xbf);
    memoryASet16(r.ds, 0x2e8b, 0x0000);
case 0x1a252:
    memoryASet16(r.ds, 0x2e88, 0x0020);
case 0x1a258:
    r.bx = 0;
    if (memoryAGet(r.ds, 0x2e8a) == 0xbf)
        { pc = 0x1a269; continue dispatch; }
    yield* sub_1a02d();
    r.bl = r.dl;
    r.bl &= 0x02;
case 0x1a269:
    r.cx = memoryAGet16(r.ds, 0x2e88);
    r.dl = memoryAGet(r.ds, 0x2e8a);
    push(r.bx);
    yield* sub_1a313();
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
    yield* sub_19ee0();
    r.di = r.ax;
    r.si = 0x2af0;
    r.cx = 0x0f03;
    yield* sub_19fcd();
    r.cx = pop();
    if (--r.cx)
        { pc = 0x1a2e8; continue dispatch; }

      return;
    default: throw new Error("Invalid control flow in sub_1a23f");
    }
  }
}

function* sub_1a313() {
  let pc=0;
  
  dispatch: while (true) {
    if ((++game.steps & 1023) === 0) yield 0;
    switch(pc) {
    case 0:

    push(r.bx);
    yield* sub_19ee0();
    r.di = r.ax;
    r.ax = 0xb800;
    r.es = r.ax;
    r.bx = pop();
    r.si = memoryAGet16(r.ds, r.bx + 11808);
    r.cx = 0x0802;
    yield* sub_19fcd();

      return;
    default: throw new Error("Invalid control flow in sub_1a313");
    }
  }
}

function* sub_1a32a() {
  let pc=0;
  
  dispatch: while (true) {
    if ((++game.steps & 1023) === 0) yield 0;
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
}

function* sub_1a380() {
  let pc=0;
  
  dispatch: while (true) {
    if ((++game.steps & 1023) === 0) yield 0;
    switch(pc) {
    case 0:

    r.ah = 0;
    yield* interrupt(0x1a);
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
    yield* sub_1a5ea();
    if (flags.carry)
        { pc = 0x1a398; continue dispatch; }
    yield* sub_19410();
    if (flags.carry)
        { pc = 0x1a398; continue dispatch; }
    memoryASet(r.ds, 0x32ea, memoryAGet(r.ds, 0x32ea) + 1);
    yield* sub_1a02d();
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
    yield* interrupt(0x1a);
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
    yield* sub_1a02d();
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
    yield* sub_1a02d();
    r.dl &= 0x01;
    if (r.dl != 0)
        { pc = 0x1a453; continue dispatch; }
    r.dl = 0xff;
case 0x1a453:
    memoryASet(r.ds, 0x3280, r.dl);
    yield* sub_1a02d();
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
    yield* sub_19fcd();
    r.bx = pop();
    memoryASet(r.ds, r.bx + 12942, memoryAGet(r.ds, r.bx + 12942) - 1);
    r.al = memoryAGet(r.ds, r.bx + 12942);
    yield* sub_1a6af();
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
    yield* sub_19ee0();
    memoryASet16(r.ds, 0x3284, r.ax);
    yield* sub_1a5ea();
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
    yield* sub_19410();
    if (flags.carry)
        { pc = 0x1a53d; continue dispatch; }
    yield* sub_1a5d0();
    memoryASet16(r.ds, 0x327a, memoryAGet16(r.ds, 0x327a) + 0x0002);
    yield* sub_1a569();

      return;
    default: throw new Error("Invalid control flow in sub_1a380");
    }
  }
}

function* sub_1a569() {
  let pc=0;
  
  dispatch: while (true) {
    if ((++game.steps & 1023) === 0) yield 0;
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
}

function* sub_1a5d0() {
  let pc=0;
  
  dispatch: while (true) {
    if ((++game.steps & 1023) === 0) yield 0;
    switch(pc) {
    case 0:

    if (memoryAGet(r.ds, 0x3286) != 0x00)
        return;
    r.ax = 0xb800;
    r.es = r.ax;
    r.si = 0x31e8;
    r.di = memoryAGet16(r.ds, 0x3282);
    r.cx = 0x1e02;
    yield* sub_19fcd();

      return;
    default: throw new Error("Invalid control flow in sub_1a5d0");
    }
  }
}

function* sub_1a5ea() {
  let pc=0;
  
  dispatch: while (true) {
    if ((++game.steps & 1023) === 0) yield 0;
    switch(pc) {
    case 0:

    if (memoryAGet(r.ds, 0x1cb8) != 0x00)
        { pc = 0x1a633; continue dispatch; }
    if (memoryAGet16(r.ds, 0x0004) != 0x0006)
        { pc = 0x1a603; continue dispatch; }
    if (memoryAGet(r.ds, 0x44bd) == 0x00)
        { pc = 0x1a603; continue dispatch; }
    yield* sub_1b9e0();
    return;
case 0x1a603:
    r.ax = memoryAGet16(r.ds, 0x327d);
    r.dl = memoryAGet(r.ds, 0x327f);
    r.si = 0x0010;
    r.bx = memoryAGet16(r.ds, 0x0579);
    r.dh = memoryAGet(r.ds, 0x057b);
    r.di = 0x0018;
    r.cx = 0x0e1e;
    yield* sub_1a059();
    if (!flags.carry)
        { pc = 0x1a633; continue dispatch; }
    if (memoryAGet16(r.ds, 0x0004) != 0x0004)
        { pc = 0x1a62e; continue dispatch; }
    if (memoryAGet(r.ds, 0x39e1) != 0x00)
        { pc = 0x1a631; continue dispatch; }
case 0x1a62e:
    yield* sub_17aa2();
case 0x1a631:
    flags.carry = true;
    return;
case 0x1a633:
    flags.carry = false;

      return;
    default: throw new Error("Invalid control flow in sub_1a5ea");
    }
  }
}

function* sub_1a635() {
  let pc=0;
  
  dispatch: while (true) {
    if ((++game.steps & 1023) === 0) yield 0;
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
    yield* sub_1a02d();
    memoryASet(r.ds, 0x32eb, r.dl);
    memoryASet(r.ds, 0x32ea, 0x6c);

      return;
    default: throw new Error("Invalid control flow in sub_1a635");
    }
  }
}

function* sub_1a675() {
  let pc=0;
  
  dispatch: while (true) {
    if ((++game.steps & 1023) === 0) yield 0;
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
    yield* sub_1a6af();

      return;
    default: throw new Error("Invalid control flow in sub_1a675");
    }
  }
}

function* sub_1a6af() {
  let pc=0;
  
  dispatch: while (true) {
    if ((++game.steps & 1023) === 0) yield 0;
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
    yield* sub_19fcd();

      return;
    default: throw new Error("Invalid control flow in sub_1a6af");
    }
  }
}

function* sub_1a6d0() {
  let pc=0;
  
  dispatch: while (true) {
    if ((++game.steps & 1023) === 0) yield 0;
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
    yield* sub_1a059();
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
    yield* sub_19ee0();
    r.di = r.ax;
    r.si = 0x3350;
    r.ax = 0xb800;
    r.es = r.ax;
    r.cx = 0x1205;
    yield* sub_19fcd();
    yield* sub_1c9c7();
    r.ah = 0;
    yield* interrupt(0x1a);
    memoryASet16(r.ds, 0x3509, r.dx);
case 0x1a773:
    push(r.dx);
case 0x1a774:
    yield* sub_1c9d6();
    yield* sub_18608();
    if (flags.zero)
        { pc = 0x1a774; continue dispatch; }
    yield* sub_1c9d6();
    r.dx = pop();
    r.bx = 0x0001;
    if (r.dl & 0x01)
        { pc = 0x1a78a; continue dispatch; }
    r.bl = 0x0f;
case 0x1a78a:
    r.ah = 0x0b;
    yield* interrupt(0x10);
    yield* sub_1c9d6();
    r.ah = 0;
    yield* interrupt(0x1a);
    r.dx -= memoryAGet16(r.ds, 0x3509);
    flags.carry = r.dx < 0x000d;
    if (r.dx < 0x000d)
        { pc = 0x1a773; continue dispatch; }
    return;
case 0x1a79f:
    memoryASet(r.ds, 0x351b, memoryAGet(r.ds, 0x351b) + 1);
    r.ax = 0x05dc;
    r.bx = 0x0425;
    yield* sub_1cb6b();
    if (memoryAGet(r.ds, 0x351b) != 0x01)
        { pc = 0x1a7b6; continue dispatch; }
    yield* sub_18413();
case 0x1a7b6:
    r.bx = memoryAGet16(r.ds, 0x3511);
    yield* sub_1a9f1();
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
    yield* sub_1a86d();
    flags.carry = true;
    return;
case 0x1a7f7:
    flags.carry = false;

      return;
    default: throw new Error("Invalid control flow in sub_1a6d0");
    }
  }
}

function* sub_1a7f9() {
  let pc=0;
  
  dispatch: while (true) {
    if ((++game.steps & 1023) === 0) yield 0;
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
    yield* sub_1a02d();
    r.dl &= 0x01;
    if (r.dl != 0)
        { pc = 0x1a831; continue dispatch; }
    r.dl = ~r.dl;
case 0x1a831:
    memoryASet(r.ds, r.bx + 13335, r.dl);
    r.bx <<= 1;
    yield* sub_1a02d();
    r.dh = 0;
    memoryASet16(r.ds, r.bx + 13383, r.dx);
    if (--r.cx)
        { pc = 0x1a80d; continue dispatch; }
    r.bx = memoryAGet16(r.ds, 0x0008);
    r.cl = memoryAGet(r.ds, r.bx + 13596);
    r.ch = 0;
case 0x1a84c:
    yield* sub_1a02d();
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
}

function* sub_1a86d() {
  let pc=0;
  
  dispatch: while (true) {
    if ((++game.steps & 1023) === 0) yield 0;
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
}

function* sub_1a8a5() {
  let pc=0;
  
  dispatch: while (true) {
    if ((++game.steps & 1023) === 0) yield 0;
    switch(pc) {
    case 0:

    r.ah = 0;
    yield* interrupt(0x1a);
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
    yield* sub_1a02d();
    if (r.dl > 0x10)
        { pc = 0x1a919; continue dispatch; }
    r.dl &= 0x01;
    if (r.dl != 0)
        { pc = 0x1a907; continue dispatch; }
    r.dl = ~r.dl;
case 0x1a907:
    memoryASet(r.ds, r.bx + 13335, r.dl);
    yield* sub_1a02d();
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
    yield* sub_19ee0();
    memoryASet16(r.ds, 0x34ef, r.ax);
    r.bx = memoryAGet16(r.ds, 0x3415);
    yield* sub_1a9f1();
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
    yield* sub_19fcd();
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
    yield* sub_19fcd();

      return;
    default: throw new Error("Invalid control flow in sub_1a8a5");
    }
  }
}

function* sub_1a9f1() {
  let pc=0;
  
  dispatch: while (true) {
    if ((++game.steps & 1023) === 0) yield 0;
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
    yield* sub_19fcd();

      return;
    default: throw new Error("Invalid control flow in sub_1a9f1");
    }
  }
}

function* sub_1aa15() {
  let pc=0;
  
  dispatch: while (true) {
    if ((++game.steps & 1023) === 0) yield 0;
    switch(pc) {
    case 0:

    r.ah = 0;
    yield* interrupt(0x1a);
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
    yield* sub_19fcd();

      return;
    default: throw new Error("Invalid control flow in sub_1aa15");
    }
  }
}

function* sub_1aa80() {
  let pc=0;
  
  dispatch: while (true) {
    if ((++game.steps & 1023) === 0) yield 0;
    switch(pc) {
    case 0:

    r.ah = 0;
    yield* interrupt(0x1a);
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
    yield* sub_19fcd();
    r.ax = 0x00e4;
    r.dl = 0x8a;
    r.si = 0x0010;
    r.bx = memoryAGet16(r.ds, 0x0579);
    r.dh = memoryAGet(r.ds, 0x057b);
    r.di = 0x0018;
    r.cx = 0x0e0a;
    yield* sub_1a059();
    if (!flags.carry)
        return;
    memoryASet(r.ds, 0x0554, 0x01);

      return;
    default: throw new Error("Invalid control flow in sub_1aa80");
    }
  }
}

function* sub_1aae0() {
  let pc=0;
  
  dispatch: while (true) {
    if ((++game.steps & 1023) === 0) yield 0;
    switch(pc) {
    case 0:

    if (memoryAGet16(r.ds, 0x0006) != 0x0007)
        { pc = 0x1aaea; continue dispatch; }
    { pc = 0x1ab03; continue dispatch; }
case 0x1aaea:
    memoryASet16(r.ds, 0x0414, memoryAGet16(r.ds, 0x0414) + 1);
    memoryASet(r.ds, 0x0418, 0x01);
    r.dx = 0xaaaa;
    yield* sub_1acc6();
    r.ax = 0;
    memoryASet(r.ds, 0x369f, 0x00);
    yield* sub_1acdc();
case 0x1ab03:
    r.ah = 0;
    yield* interrupt(0x1a);
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
    yield* sub_1ad24();
    r.bx = memoryAGet16(r.ds, 0x0006);
    r.bl <<= 1;
    r.si = memoryAGet16(r.ds, r.bx + 14028);
    r.di = 0x368d;
    yield* sub_1994e();
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
    yield* sub_1994e();
    r.cx = pop();
    if (--r.cx)
        { pc = 0x1ab76; continue dispatch; }
    yield* sub_1ac2a();
    memoryASet(r.ds, 0x369e, 0x38);
    memoryASet(r.ds, 0x3699, 0x01);
    memoryASet16(r.ds, 0x3722, 0x0044);
    yield* sub_1ac6a();
    yield* sub_1ac9c();
    { pc = 0x1abd7; continue dispatch; }
case 0x1ab9e:
    r.si = 0x368d;
    r.di = 0x1f82;
    yield* sub_1994e();
    memoryASet(r.ds, 0x3699, 0x02);
    memoryASet16(r.ds, 0x3722, 0x001e);
    r.dx = 0xffff;
    yield* sub_1acc6();
    r.ax = 0x0a8c;
    r.ax -= memoryAGet16(r.ds, 0x3697);
    r.cl = 0x04;
    r.ax >>= r.cl;
    r.al &= 0xf0;
    memoryASet(r.ds, 0x369e, r.al);
    r.ah = 0x28;
    mul8(r.ah);
    memoryASet(r.ds, 0x369f, 0x01);
    yield* sub_1acdc();
    yield* sub_1ac6a();
case 0x1abd7:
    r.ah = 0;
    yield* interrupt(0x1a);
    memoryASet16(r.ds, 0x3695, r.dx);
case 0x1abdf:
    if (memoryAGet16(r.ds, 0x0006) != 0x0007)
        { pc = 0x1abeb; continue dispatch; }
    yield* sub_1cd93();
    { pc = 0x1abee; continue dispatch; }
case 0x1abeb:
    yield* sub_1ca65();
case 0x1abee:
    yield* sub_1ac4c();
    r.dx -= memoryAGet16(r.ds, 0x3695);
    if (r.dx < memoryAGet16(r.ds, 0x3722))
        { pc = 0x1abdf; continue dispatch; }
    r.bx = 0;
    r.ah = 0x0b;
    yield* interrupt(0x10);
    if (memoryAGet16(r.ds, 0x0006) == 0x0007)
        { pc = 0x1ac0c; continue dispatch; }
    yield* sub_1cd51();
    return;
case 0x1ac0c:
    r.ax = 0xb800;
    r.es = r.ax;
    r.si = 0x000e;
    r.di = 0x08e4;
    r.cx = 0x0804;
    yield* sub_19fcd();
    r.si = 0x004e;
    r.di = 0x0c94;
    r.cx = 0x0814;
    yield* sub_19fcd();

      return;
    default: throw new Error("Invalid control flow in sub_1aae0");
    }
  }
}

function* sub_1ac2a() {
  let pc=0;
  
  dispatch: while (true) {
    if ((++game.steps & 1023) === 0) yield 0;
    switch(pc) {
    case 0:

    push(r.ds);
    r.es = pop();
    r.ax = 0xb800;
    r.ds = r.ax;
    r.cx = 0x0804;
    r.di = 0x000e;
    r.si = 0x08e4;
    yield* sub_19ffa();
    r.cx = 0x0814;
    r.di = 0x004e;
    r.si = 0x0c94;
    yield* sub_19ffa();
    push(r.es);
    r.ds = pop();

      return;
    default: throw new Error("Invalid control flow in sub_1ac2a");
    }
  }
}

function* sub_1ac4c() {
  let pc=0;
  
  dispatch: while (true) {
    if ((++game.steps & 1023) === 0) yield 0;
    switch(pc) {
    case 0:

    r.ah = 0;
    yield* interrupt(0x1a);
    push(r.dx);
case 0x1ac51:
    yield* sub_18608();
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
    yield* interrupt(0x10);
    r.dx = pop();

      return;
    default: throw new Error("Invalid control flow in sub_1ac4c");
    }
  }
}

function* sub_1ac6a() {
  let pc=0;
  
  dispatch: while (true) {
    if ((++game.steps & 1023) === 0) yield 0;
    switch(pc) {
    case 0:

    r.ah = 0x02;
    r.dh = memoryAGet(r.ds, 0x369e);
    r.cl = 0x03;
    r.dh >>= r.cl;
    r.dl = 0x12;
    r.bh = 0;
    yield* interrupt(0x10);
    memoryASet16(r.ds, 0x36a0, 0x0003);
case 0x1ac80:
    r.bx = memoryAGet16(r.ds, 0x36a0);
    r.al = memoryAGet(r.ds, r.bx + 13965);
    r.al += 0x30;
    r.ah = 0x0e;
    r.bl = 0x03;
    yield* interrupt(0x10);
    memoryASet16(r.ds, 0x36a0, memoryAGet16(r.ds, 0x36a0) + 1);
    if (memoryAGet16(r.ds, 0x36a0) < 0x0007)
        { pc = 0x1ac80; continue dispatch; }

      return;
    default: throw new Error("Invalid control flow in sub_1ac6a");
    }
  }
}

function* sub_1ac9c() {
  let pc=0;
  
  dispatch: while (true) {
    if ((++game.steps & 1023) === 0) yield 0;
    switch(pc) {
    case 0:

    r.ah = 0x02;
    r.dl = 0x0a;
    r.dh = r.dl;
    r.bx = 0;
    yield* interrupt(0x10);
    r.bx = memoryAGet16(r.ds, 0x370c);
    r.ax = memoryAGet16(r.ds, r.bx + 14060);
    memoryASet16(r.ds, 0x3720, r.ax);
    r.bx = 0;
case 0x1acb3:
    r.ah = 0x0e;
    r.al = memoryAGet(r.ds, r.bx + 14094);
    push(r.bx);
    r.bl = 0x03;
    yield* interrupt(0x10);
    r.bx = pop();
    r.bx++;
    if (r.bx < 0x0014)
        { pc = 0x1acb3; continue dispatch; }

      return;
    default: throw new Error("Invalid control flow in sub_1ac9c");
    }
  }
}

function* sub_1acc6() {
  let pc=0;
  
  dispatch: while (true) {
    if ((++game.steps & 1023) === 0) yield 0;
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
}

function* sub_1acdc() {
  let pc=0;
  
  dispatch: while (true) {
    if ((++game.steps & 1023) === 0) yield 0;
    switch(pc) {
    case 0:

    memoryASet16(r.ds, 0x369a, r.ax);
    r.ax = 0xb800;
    r.es = r.ax;
    yield* sub_1ca59();
    r.ax = 0x1b80;
case 0x1acea:
    r.bx = 0x361c;
    memoryASet16(r.ds, 0x369c, r.ax);
    yield* sub_19d54();
    if (memoryAGet(r.ds, 0x369f) == 0x00)
        { pc = 0x1ad12; continue dispatch; }
    yield* sub_1ca99();
    r.ah = 0;
    yield* interrupt(0x1a);
    memoryASet16(r.ds, 0x3695, r.dx);
case 0x1ad05:
    r.ah = 0;
    yield* interrupt(0x1a);
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
    yield* sub_1cd51();

      return;
    default: throw new Error("Invalid control flow in sub_1acdc");
    }
  }
}

function* sub_1ad24() {
  let pc=0;
  
  dispatch: while (true) {
    if ((++game.steps & 1023) === 0) yield 0;
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
    yield* sub_1994e();
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
}

function* sub_1ad60() {
  let pc=0;
  
  dispatch: while (true) {
    if ((++game.steps & 1023) === 0) yield 0;
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
}

function* sub_1ad72() {
  let pc=0;
  
  dispatch: while (true) {
    if ((++game.steps & 1023) === 0) yield 0;
    switch(pc) {
    case 0:

    r.ah = 0;
    yield* interrupt(0x1a);
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
    yield* sub_1a059();
    if (!flags.carry)
        { pc = 0x1adcb; continue dispatch; }
    r.ax = 0x0c00;
    r.bx = 0x08fd;
    yield* sub_1cb6b();
    yield* sub_18413();
    yield* sub_1b068();
    r.bx = memoryAGet16(r.ds, 0x37b6);
    yield* sub_1add3();
    yield* sub_18354();
    yield* sub_1b044();
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
}

function* sub_1add3() {
  let pc=0;
  
  dispatch: while (true) {
    if ((++game.steps & 1023) === 0) yield 0;
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
    yield* sub_19fcd();
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
}

function* sub_1ae0b() {
  let pc=0;
  
  dispatch: while (true) {
    if ((++game.steps & 1023) === 0) yield 0;
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
    yield* sub_19fcd();
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
    yield* sub_1a02d();
    if (r.dl < 0x40)
        { pc = 0x1ae66; continue dispatch; }
    r.al = 0x10;
    { pc = 0x1ae1d; continue dispatch; }
case 0x1ae66:
    yield* sub_1a02d();
    r.al = r.dl;
    r.al -= r.bl;
    r.al &= 0x30;
    r.al += 0x30;
    { pc = 0x1ae1d; continue dispatch; }

      return;
    default: throw new Error("Invalid control flow in sub_1ae0b");
    }
  }
}

function* sub_1ae73() {
  let pc=0;
  
  dispatch: while (true) {
    if ((++game.steps & 1023) === 0) yield 0;
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
}

function* sub_1aec0() {
  let pc=0;
  
  dispatch: while (true) {
    if ((++game.steps & 1023) === 0) yield 0;
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
}

function* sub_1aee1() {
  let pc=0;
  
  dispatch: while (true) {
    if ((++game.steps & 1023) === 0) yield 0;
    switch(pc) {
    case 0:

    r.ah = 0;
    yield* interrupt(0x1a);
    r.ax = r.dx;
    r.ax -= memoryAGet16(r.ds, 0x39c8);
    if (r.ax >= 0x0002)
        { pc = 0x1aef1; continue dispatch; }
case 0x1aef0:
    return;
case 0x1aef1:
    memoryASet16(r.ds, 0x39c8, r.dx);
    yield* sub_1b082();
    if (flags.carry)
        { pc = 0x1aef0; continue dispatch; }
    yield* sub_1b09e();
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
    yield* sub_1b082();
    if (!flags.carry)
        { pc = 0x1afbb; continue dispatch; }
    r.ax = memoryAGet16(r.ds, 0x39c3);
    memoryASet16(r.ds, 0x3964, r.ax);
    r.al = memoryAGet(r.ds, 0x39c5);
    memoryASet(r.ds, 0x3966, r.al);
    return;
case 0x1afbb:
    yield* sub_1b09e();
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
    yield* sub_19ee0();
    r.di = r.ax;
    r.ax = 0xb800;
    r.es = r.ax;
    r.si = 0x37c0;
    r.bp = 0x000e;
    r.cx = 0x1506;
    yield* sub_19efc();
    yield* sub_1c924();
    r.ah = 0;
    yield* interrupt(0x1a);
    memoryASet16(r.ds, 0x39c8, r.dx);
case 0x1b008:
    yield* sub_1c934();
    r.ah = 0;
    yield* interrupt(0x1a);
    r.dx -= memoryAGet16(r.ds, 0x39c8);
    if (r.dx < 0x0009)
        { pc = 0x1b008; continue dispatch; }
    memoryASet(r.ds, 0x0552, 0x01);
    return;
case 0x1b01e:
    r.cx = memoryAGet16(r.ds, 0x3964);
    r.dl = memoryAGet(r.ds, 0x3966);
    yield* sub_19ee0();
    memoryASet16(r.ds, 0x39ca, r.ax);
    yield* sub_1b068();
    r.tl = memoryAGet(r.ds, 0x396d);
    memoryASet(r.ds, 0x396d, memoryAGet(r.ds, 0x396d) - 1);
    if (r.tl != 1)
        { pc = 0x1b040; continue dispatch; }
    memoryASet(r.ds, 0x396d, 0x02);
    memoryASet16(r.ds, 0x396b, memoryAGet16(r.ds, 0x396b) ^ 0x0054);
case 0x1b040:
    yield* sub_1b044();

      return;
    default: throw new Error("Invalid control flow in sub_1aee1");
    }
  }
}

function* sub_1b044() {
  let pc=0;
  
  dispatch: while (true) {
    if ((++game.steps & 1023) === 0) yield 0;
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
    yield* sub_19efc();

      return;
    default: throw new Error("Invalid control flow in sub_1b044");
    }
  }
}

function* sub_1b068() {
  let pc=0;
  
  dispatch: while (true) {
    if ((++game.steps & 1023) === 0) yield 0;
    switch(pc) {
    case 0:

    r.ax = 0xb800;
    r.es = r.ax;
    if (memoryAGet(r.ds, 0x396a) != 0x00)
        return;
    r.di = memoryAGet16(r.ds, 0x3968);
    r.si = 0x396f;
    r.cx = 0x0e03;
    yield* sub_19fcd();

      return;
    default: throw new Error("Invalid control flow in sub_1b068");
    }
  }
}

function* sub_1b082() {
  let pc=0;
  
  dispatch: while (true) {
    if ((++game.steps & 1023) === 0) yield 0;
    switch(pc) {
    case 0:

    r.ax = memoryAGet16(r.ds, 0x3964);
    r.dl = memoryAGet(r.ds, 0x3966);
    r.si = 0x0018;
    r.bx = memoryAGet16(r.ds, 0x327d);
    r.dh = memoryAGet(r.ds, 0x327f);
    r.di = 0x0010;
    r.cx = 0x1e0e;
    yield* sub_1a059();

      return;
    default: throw new Error("Invalid control flow in sub_1b082");
    }
  }
}

function* sub_1b09e() {
  let pc=0;
  
  dispatch: while (true) {
    if ((++game.steps & 1023) === 0) yield 0;
    switch(pc) {
    case 0:

    r.ax = memoryAGet16(r.ds, 0x3964);
    r.dl = memoryAGet(r.ds, 0x3966);
    r.si = 0x0018;
    r.di = r.si;
    r.bx = memoryAGet16(r.ds, 0x0579);
    r.dh = memoryAGet(r.ds, 0x057b);
    r.cx = 0x0e0e;
    yield* sub_1a059();

      return;
    default: throw new Error("Invalid control flow in sub_1b09e");
    }
  }
}

function* sub_1b0c0() {
  let pc=0;
  
  dispatch: while (true) {
    if ((++game.steps & 1023) === 0) yield 0;
    switch(pc) {
    case 0:

    if (memoryAGet(r.ds, 0x39e1) == 0x00)
        { pc = 0x1b0d4; continue dispatch; }
    r.ah = 0;
    yield* interrupt(0x1a);
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
    yield* sub_1b295();
    if (flags.carry)
        { pc = 0x1b0e9; continue dispatch; }
    r.ah = 0;
    yield* interrupt(0x1a);
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
    yield* sub_18413();
    memoryASet(r.ds, 0x39e1, 0x0e);
    memoryASet(r.ds, 0x069a, 0x10);
case 0x1b165:
    if (memoryAGet(r.ds, 0x1cbf) != 0x00)
        { pc = 0x1b16f; continue dispatch; }
    yield* sub_1a5d0();
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
    yield* sub_19fcd();
    if (memoryAGet(r.ds, 0x1cbf) != 0x00)
        { pc = 0x1b1bb; continue dispatch; }
    yield* sub_1a569();
case 0x1b1bb:
    r.ah = 0;
    yield* interrupt(0x1a);
    memoryASet16(r.ds, 0x3d16, r.dx);
    if (memoryAGet(r.ds, 0x39e1) != 0x00)
        return;
    yield* sub_18342();

      return;
    default: throw new Error("Invalid control flow in sub_1b0c0");
    }
  }
}

function* sub_1b1ce() {
  let pc=0;
  
  dispatch: while (true) {
    if ((++game.steps & 1023) === 0) yield 0;
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
    yield* sub_1a02d();
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
    yield* sub_19fcd();
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
    yield* sub_19d54();
    r.bx = 0x3c3e;
    r.ax = 0;
    yield* sub_19d54();
    r.bx = 0x3c9a;
    r.ax = 0;
    yield* sub_19d54();
    r.bx = 0x3c56;
    r.ax = 0;
    yield* sub_19d54();
    r.si = 0x3caa;
    r.di = 0x08ec;
    r.cx = 0x0102;
    r.bp = 0x000e;
    yield* sub_19f65();
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
}

function* sub_1b295() {
  let pc=0;
  
  dispatch: while (true) {
    if ((++game.steps & 1023) === 0) yield 0;
    switch(pc) {
    case 0:

    r.ax = memoryAGet16(r.ds, 0x327d);
    r.dl = memoryAGet(r.ds, 0x327f);
    r.si = 0x0010;
    r.bx = memoryAGet16(r.ds, 0x0579);
    r.dh = memoryAGet(r.ds, 0x057b);
    r.di = 0x0018;
    r.cx = 0x0e1e;
    yield* sub_1a059();

      return;
    default: throw new Error("Invalid control flow in sub_1b295");
    }
  }
}

function* sub_1b2c0() {
  let pc=0;
  
  dispatch: while (true) {
    if ((++game.steps & 1023) === 0) yield 0;
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
    yield* sub_1b4a7();
    yield* sub_1a02d();
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
}

function* sub_1b2f2() {
  let pc=0;
  
  dispatch: while (true) {
    if ((++game.steps & 1023) === 0) yield 0;
    switch(pc) {
    case 0:

    r.ah = 0;
    yield* interrupt(0x1a);
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
    yield* sub_1b50b();
    if (!flags.carry)
        { pc = 0x1b32c; continue dispatch; }
    { pc = 0x1b354; continue dispatch; }
case 0x1b32c:
    yield* sub_1b52c();
    if (flags.carry)
        { pc = 0x1b2fc; continue dispatch; }
    if (memoryAGet(r.ds, r.bx + 16054) != 0x00)
        { pc = 0x1b348; continue dispatch; }
    yield* sub_1b4a7();
    yield* sub_1a02d();
    r.dl &= 0x07;
    r.dl += 0x14;
    memoryASet(r.ds, r.bx + 16054, r.dl);
case 0x1b348:
    memoryASet(r.ds, r.bx + 16054, memoryAGet(r.ds, r.bx + 16054) - 1);
    yield* sub_1b50b();
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
    yield* sub_18413();
    yield* sub_1b484();
    r.bx = memoryAGet16(r.ds, 0x3eda);
    memoryASet(r.ds, r.bx + 16050, 0x01);
    yield* sub_18354();
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
    yield* sub_19f65();
    r.ax = 0x03e8;
    r.bx = 0x02ee;
    yield* sub_1cb6b();
    return;
case 0x1b3b1:
    yield* sub_1b4e4();
    r.di = memoryAGet16(r.ds, 0x0008);
    r.di <<= 1;
    r.bp = memoryAGet16(r.ds, r.di + 16094);
    yield* sub_1b54c();
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
    yield* sub_19ee0();
    memoryASet16(r.ds, 0x3de4, r.ax);
    yield* sub_1b484();
    r.bx = memoryAGet16(r.ds, 0x3eda);
    r.si = r.bx;
    r.si <<= 1;
    yield* sub_1b52c();
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
    yield* sub_19f65();

      return;
    default: throw new Error("Invalid control flow in sub_1b2f2");
    }
  }
}

function* sub_1b484() {
  let pc=0;
  
  dispatch: while (true) {
    if ((++game.steps & 1023) === 0) yield 0;
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
    yield* sub_19fcd();

      return;
    default: throw new Error("Invalid control flow in sub_1b484");
    }
  }
}

function* sub_1b4a7() {
  let pc=0;
  
  dispatch: while (true) {
    if ((++game.steps & 1023) === 0) yield 0;
    switch(pc) {
    case 0:

    memoryASet(r.ds, 0x3ed9, 0x20);
case 0x1b4ac:
    yield* sub_1a02d();
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
    yield* sub_1b4e4();
    if (memoryAGet(r.ds, 0x3ed9) == 0x00)
        return;
    r.bp = 0x0032;
    yield* sub_1b54c();
    if (!flags.carry)
        return;
    memoryASet(r.ds, 0x3ed9, memoryAGet(r.ds, 0x3ed9) - 1);
    { pc = 0x1b4ac; continue dispatch; }

      return;
    default: throw new Error("Invalid control flow in sub_1b4a7");
    }
  }
}

function* sub_1b4e4() {
  let pc=0;
  
  dispatch: while (true) {
    if ((++game.steps & 1023) === 0) yield 0;
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
}

function* sub_1b50b() {
  let pc=0;
  
  dispatch: while (true) {
    if ((++game.steps & 1023) === 0) yield 0;
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
    yield* sub_1a059();
    r.bx = pop();
    r.si = pop();

      return;
    default: throw new Error("Invalid control flow in sub_1b50b");
    }
  }
}

function* sub_1b52c() {
  let pc=0;
  
  dispatch: while (true) {
    if ((++game.steps & 1023) === 0) yield 0;
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
    yield* sub_1a059();
    r.bx = pop();
    r.si = pop();

      return;
    default: throw new Error("Invalid control flow in sub_1b52c");
    }
  }
}

function* sub_1b54c() {
  let pc=0;
  
  dispatch: while (true) {
    if ((++game.steps & 1023) === 0) yield 0;
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
}

function* sub_1b570() {
  let pc=0;
  
  dispatch: while (true) {
    if ((++game.steps & 1023) === 0) yield 0;
    switch(pc) {
    case 0:

    r.ah = 0;
    yield* interrupt(0x1a);
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
    yield* sub_1b75d();
    yield* sub_1b787();
    if (flags.carry)
        { pc = 0x1b57a; continue dispatch; }
    yield* sub_1a02d();
    if (r.dl > 0x30)
        { pc = 0x1b5cc; continue dispatch; }
    yield* sub_1b72b();
    r.si = memoryAGet16(r.ds, 0x0008);
    r.si <<= 1;
    r.ax = memoryAGet16(r.ds, r.si + 16590);
    if (memoryAGet16(r.ds, 0x40cc) > r.ax)
        { pc = 0x1b5cc; continue dispatch; }
    yield* sub_1cb8d();
    memoryASet16(r.ds, 0x40c8, 0x00ff);
    r.al = memoryAGet(r.ds, 0x40ca);
    memoryASet(r.ds, 0x40b7, r.al);
    r.al = memoryAGet(r.ds, 0x40cb);
    memoryASet(r.ds, 0x40b8, r.al);
    { pc = 0x1b65e; continue dispatch; }
case 0x1b5cc:
    if (memoryAGet16(r.ds, 0x40c8) > 0x000a)
        { pc = 0x1b5e1; continue dispatch; }
    yield* sub_1a02d();
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
    yield* sub_1a02d();
    if (r.dl > 0x10)
        { pc = 0x1b65e; continue dispatch; }
    memoryASet16(r.ds, 0x40c8, 0x00ff);
    yield* sub_1cb8d();
case 0x1b632:
    yield* sub_1a02d();
    if (r.dl > 0x30)
        { pc = 0x1b653; continue dispatch; }
    r.dl &= 0x01;
    if (r.dl != 0)
        { pc = 0x1b641; continue dispatch; }
    r.dl = 0xff;
case 0x1b641:
    memoryASet(r.ds, 0x40b7, r.dl);
    yield* sub_1a02d();
    r.dl &= 0x01;
    if (r.dl != 0)
        { pc = 0x1b64f; continue dispatch; }
    r.dl = 0xff;
case 0x1b64f:
    memoryASet(r.ds, 0x40b8, r.dl);
case 0x1b653:
    yield* sub_1a02d();
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
    yield* sub_1b75d();
    r.cx = memoryAGet16(r.ds, 0x40b2);
    r.dl = memoryAGet(r.ds, 0x40b4);
    yield* sub_19ee0();
    memoryASet16(r.ds, 0x40bc, r.ax);
    r.ax = 0xb800;
    r.es = r.ax;
    if (memoryAGet(r.ds, 0x40b9) != 0x00)
        { pc = 0x1b6e0; continue dispatch; }
    r.si = 0x3f2c;
    r.di = memoryAGet16(r.ds, 0x40ba);
    r.cx = 0x0501;
    yield* sub_19fcd();
case 0x1b6e0:
    yield* sub_1b787();
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
    yield* sub_19efc();

      return;
    default: throw new Error("Invalid control flow in sub_1b570");
    }
  }
}

function* sub_1b717() {
  let pc=0;
  
  dispatch: while (true) {
    if ((++game.steps & 1023) === 0) yield 0;
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
}

function* sub_1b72b() {
  let pc=0;
  
  dispatch: while (true) {
    if ((++game.steps & 1023) === 0) yield 0;
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
}

function* sub_1b75d() {
  let pc=0;
  
  dispatch: while (true) {
    if ((++game.steps & 1023) === 0) yield 0;
    switch(pc) {
    case 0:

    r.ax = memoryAGet16(r.ds, 0x40b2);
    r.dl = memoryAGet(r.ds, 0x40b4);
    r.si = 0x0008;
    r.bx = memoryAGet16(r.ds, 0x0579);
    r.dh = memoryAGet(r.ds, 0x057b);
    r.di = 0x0018;
    r.cx = 0x0e05;
    yield* sub_1a059();
    if (!flags.carry)
        return;
    if (memoryAGet(r.ds, 0x0552) != 0x00)
        return;
    memoryASet(r.ds, 0x0553, 0x01);

      return;
    default: throw new Error("Invalid control flow in sub_1b75d");
    }
  }
}

function* sub_1b787() {
  let pc=0;
  
  dispatch: while (true) {
    if ((++game.steps & 1023) === 0) yield 0;
    switch(pc) {
    case 0:

    r.ax = memoryAGet16(r.ds, 0x40b2);
    r.dl = memoryAGet(r.ds, 0x40b4);
    r.si = 0x0008;
    r.bx = memoryAGet16(r.ds, 0x327d);
    r.dh = memoryAGet(r.ds, 0x327f);
    r.di = 0x0010;
    r.cx = 0x1e05;
    yield* sub_1a059();
    if (!flags.carry)
        return;
    memoryASet(r.ds, 0x40b8, 0xff);

      return;
    default: throw new Error("Invalid control flow in sub_1b787");
    }
  }
}

function* sub_1b7aa() {
  let pc=0;
  
  dispatch: while (true) {
    if ((++game.steps & 1023) === 0) yield 0;
    switch(pc) {
    case 0:

    r.cx = 0x0090;
    r.dl = 0x86;
    memoryASet16(r.ds, 0x40a8, r.cx);
    memoryASet(r.ds, 0x40aa, r.dl);
    yield* sub_19ee0();
    memoryASet16(r.ds, 0x40ab, r.ax);
    yield* sub_1b989();
    memoryASet(r.ds, 0x40af, 0x00);
    memoryASet(r.ds, 0x40b1, 0x00);
    memoryASet(r.ds, 0x40b9, 0x01);
    memoryASet(r.ds, 0x40b8, 0x00);
    memoryASet16(r.ds, 0x40c8, 0x00ff);

      return;
    default: throw new Error("Invalid control flow in sub_1b7aa");
    }
  }
}

function* sub_1b7db() {
  let pc=0;
  
  dispatch: while (true) {
    if ((++game.steps & 1023) === 0) yield 0;
    switch(pc) {
    case 0:

    r.ah = 0;
    yield* interrupt(0x1a);
    if (r.dx != memoryAGet16(r.ds, 0x40ad))
        { pc = 0x1b7e6; continue dispatch; }
case 0x1b7e5:
    return;
case 0x1b7e6:
    memoryASet16(r.ds, 0x40ad, r.dx);
    if (memoryAGet(r.ds, 0x40aa) >= 0xa4)
        { pc = 0x1b7e5; continue dispatch; }
    yield* sub_1b9b6();
    if (!flags.carry)
        { pc = 0x1b806; continue dispatch; }
    yield* sub_1b717();
    if (!flags.carry)
        { pc = 0x1b7e5; continue dispatch; }
    memoryASet(r.ds, 0x0571, 0x01);
    memoryASet(r.ds, 0x055b, 0x10);
    return;
case 0x1b806:
    yield* sub_1b96e();
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
    yield* sub_1b96e();
    r.cx = pop();
    if (!flags.carry)
        { pc = 0x1b872; continue dispatch; }
    if (--r.cx)
        { pc = 0x1b832; continue dispatch; }
case 0x1b872:
    yield* sub_18413();
    yield* sub_18342();
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
    yield* sub_1b96e();
    if (!flags.carry)
        { pc = 0x1b8a2; continue dispatch; }
    return;
case 0x1b8a2:
    r.ax = 0x0c00;
    r.bx = 0x0b54;
    yield* sub_1cb6b();
    memoryASet(r.ds, 0x40af, 0x00);
    r.cx = memoryAGet16(r.ds, 0x40a8);
    r.dl = memoryAGet(r.ds, 0x40aa);
    yield* sub_19ee0();
    memoryASet16(r.ds, 0x40ab, r.ax);
    yield* sub_1b9a3();
    yield* sub_1b989();
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
    yield* sub_1b717();
    if (!flags.carry)
        { pc = 0x1b8ed; continue dispatch; }
    memoryASet(r.ds, 0x0571, 0x01);
    memoryASet(r.ds, 0x055b, 0x10);
case 0x1b8ed:
    return;
case 0x1b8ee:
    r.ah = 0;
    yield* interrupt(0x1a);
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
    yield* sub_19ee0();
    memoryASet16(r.ds, 0x40ab, r.ax);
    yield* sub_1b9a3();
    yield* sub_1b989();
    { pc = 0x1b8ee; continue dispatch; }
case 0x1b93e:
    yield* sub_1cd51();
    yield* sub_1b9a3();
    r.bp = 0x401e;
    memoryASet16(r.ds, 0x40a6, memoryAGet16(r.ds, 0x40a6) - 1);
    r.di = memoryAGet16(r.ds, 0x40a6);
    r.si = 0x3f36;
    r.cx = 0x1104;
    yield* sub_19f65();
    r.ax = memoryAGet16(r.ds, 0x40a8);
    memoryASet16(r.ds, 0x40b2, r.ax);
    r.al = memoryAGet(r.ds, 0x40aa);
    memoryASet(r.ds, 0x40b4, r.al);
    yield* sub_1b72b();
    r.al = memoryAGet(r.ds, 0x40ca);
    memoryASet(r.ds, 0x40b7, r.al);

      return;
    default: throw new Error("Invalid control flow in sub_1b7db");
    }
  }
}

function* sub_1b96e() {
  let pc=0;
  
  dispatch: while (true) {
    if ((++game.steps & 1023) === 0) yield 0;
    switch(pc) {
    case 0:

    r.ax = memoryAGet16(r.ds, 0x40a8);
    r.dl = memoryAGet(r.ds, 0x40aa);
    r.si = 0x0018;
    r.bx = memoryAGet16(r.ds, 0x0579);
    r.dh = memoryAGet(r.ds, 0x057b);
    r.di = r.si;
    r.cx = 0x0e10;
    yield* sub_1a059();

      return;
    default: throw new Error("Invalid control flow in sub_1b96e");
    }
  }
}

function* sub_1b989() {
  let pc=0;
  
  dispatch: while (true) {
    if ((++game.steps & 1023) === 0) yield 0;
    switch(pc) {
    case 0:

    r.ax = 0xb800;
    r.es = r.ax;
    r.bp = 0x401e;
    r.si = 0x3fbe;
    r.di = memoryAGet16(r.ds, 0x40ab);
    memoryASet16(r.ds, 0x40a6, r.di);
    r.cx = 0x1003;
    yield* sub_19f65();

      return;
    default: throw new Error("Invalid control flow in sub_1b989");
    }
  }
}

function* sub_1b9a3() {
  let pc=0;
  
  dispatch: while (true) {
    if ((++game.steps & 1023) === 0) yield 0;
    switch(pc) {
    case 0:

    r.ax = 0xb800;
    r.es = r.ax;
    r.si = 0x401e;
    r.di = memoryAGet16(r.ds, 0x40a6);
    r.cx = 0x1003;
    yield* sub_19fcd();

      return;
    default: throw new Error("Invalid control flow in sub_1b9a3");
    }
  }
}

function* sub_1b9b6() {
  let pc=0;
  
  dispatch: while (true) {
    if ((++game.steps & 1023) === 0) yield 0;
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
}

function* sub_1b9e0() {
  let pc=0;
  
  dispatch: while (true) {
    if ((++game.steps & 1023) === 0) yield 0;
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
    yield* sub_1a059();

      return;
    default: throw new Error("Invalid control flow in sub_1b9e0");
    }
  }
}

function* sub_1ba06() {
  let pc=0;
  
  dispatch: while (true) {
    if ((++game.steps & 1023) === 0) yield 0;
    switch(pc) {
    case 0:

    r.ah = 0;
    yield* interrupt(0x1a);
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
    yield* sub_1babd();
    yield* sub_1bad1();
    yield* sub_1a569();
    yield* sub_18375();
    yield* sub_19366();
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
    yield* sub_1a02d();
    if (r.dl > 0x38)
        { pc = 0x1baa0; continue dispatch; }
    memoryASet16(r.ds, r.bx + 17497, memoryAGet16(r.ds, r.bx + 17497) - 1);
case 0x1baa0:
    push(r.cx);
    push(r.bx);
    yield* sub_1bb07();
    r.bx = pop();
    yield* sub_1bb46();
    yield* sub_1baf1();
    r.cx = pop();
case 0x1baad:
    if (--r.cx)
        { pc = 0x1baba; continue dispatch; }
    if (memoryAGet(r.ds, 0x44fc) == 0x00)
        { pc = 0x1bab9; continue dispatch; }
    yield* sub_1c8c1();
case 0x1bab9:
    return;
case 0x1baba:
    { pc = 0x1ba30; continue dispatch; }

      return;
    default: throw new Error("Invalid control flow in sub_1ba06");
    }
  }
}

function* sub_1babd() {
  let pc=0;
  
  dispatch: while (true) {
    if ((++game.steps & 1023) === 0) yield 0;
    switch(pc) {
    case 0:

    if (memoryAGet(r.ds, 0x44bd) == 0x00)
        { pc = 0x1bacd; continue dispatch; }
    yield* sub_1bd33();
    memoryASet(r.ds, 0x44bd, 0x00);
    return;
case 0x1bacd:
    yield* sub_18413();

      return;
    default: throw new Error("Invalid control flow in sub_1babd");
    }
  }
}

function* sub_1bad1() {
  let pc=0;
  
  dispatch: while (true) {
    if ((++game.steps & 1023) === 0) yield 0;
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
    yield* sub_19fcd();

      return;
    default: throw new Error("Invalid control flow in sub_1bad1");
    }
  }
}

function* sub_1baf1() {
  let pc=0;
  
  dispatch: while (true) {
    if ((++game.steps & 1023) === 0) yield 0;
    switch(pc) {
    case 0:

    if (memoryAGet(r.ds, 0x44d9) == 0x00)
        { pc = 0x1bb02; continue dispatch; }
    if (memoryAGet(r.ds, 0x44bd) == 0x00)
        { pc = 0x1bb03; continue dispatch; }
    yield* sub_1bd4d();
case 0x1bb02:
    return;
case 0x1bb03:
    yield* sub_18375();

      return;
    default: throw new Error("Invalid control flow in sub_1baf1");
    }
  }
}

function* sub_1bb07() {
  let pc=0;
  
  dispatch: while (true) {
    if ((++game.steps & 1023) === 0) yield 0;
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
    yield* sub_1a059();
    if (!flags.carry)
        return;
    memoryASet(r.ds, 0x44d9, 0x01);
case 0x1bb32:
    yield* sub_18608();
    if (flags.zero)
        { pc = 0x1bb32; continue dispatch; }
    if (memoryAGet(r.ds, 0x44bd) == 0x00)
        { pc = 0x1bb42; continue dispatch; }
    yield* sub_1bd33();
    return;
case 0x1bb42:
    yield* sub_18413();

      return;
    default: throw new Error("Invalid control flow in sub_1bb07");
    }
  }
}

function* sub_1bb46() {
  let pc=0;
  
  dispatch: while (true) {
    if ((++game.steps & 1023) === 0) yield 0;
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
    yield* sub_19fcd();

      return;
    default: throw new Error("Invalid control flow in sub_1bb46");
    }
  }
}

function* sub_1bb73() {
  let pc=0;
  
  dispatch: while (true) {
    if ((++game.steps & 1023) === 0) yield 0;
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
    yield* interrupt(0x1a);
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
    yield* sub_1bd33();
    yield* sub_1a5d0();
    yield* sub_18354();
    yield* sub_1a569();
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
    yield* sub_1bd33();
    yield* sub_18375();
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
    yield* sub_18413();
    yield* sub_18354();
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
    yield* sub_19ee0();
    memoryASet16(r.ds, 0x43dc, r.ax);
case 0x1bcd2:
    yield* sub_18608();
    if (flags.zero)
        { pc = 0x1bcd2; continue dispatch; }
    yield* sub_1bd33();
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
    yield* sub_1cb6b();
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
    yield* sub_1b9e0();
    r.bx = pop();
    if (!flags.carry)
        { pc = 0x1bd2c; continue dispatch; }
    push(r.bx);
    yield* sub_1a5d0();
    r.bx = pop();
    yield* sub_1bdf8();
    yield* sub_1a569();
    { pc = 0x1bd2f; continue dispatch; }
case 0x1bd2c:
    yield* sub_1bdf8();
case 0x1bd2f:
    yield* sub_1bd4d();

      return;
    default: throw new Error("Invalid control flow in sub_1bb73");
    }
  }
}

function* sub_1bd33() {
  let pc=0;
  
  dispatch: while (true) {
    if ((++game.steps & 1023) === 0) yield 0;
    switch(pc) {
    case 0:

    if (memoryAGet(r.ds, 0x43e0) != 0x00)
        return;
    r.di = memoryAGet16(r.ds, 0x43de);
    r.si = 0x43a0;
    r.ax = 0xb800;
    r.es = r.ax;
    r.cx = 0x0a03;
    yield* sub_19fcd();

      return;
    default: throw new Error("Invalid control flow in sub_1bd33");
    }
  }
}

function* sub_1bd4d() {
  let pc=0;
  
  dispatch: while (true) {
    if ((++game.steps & 1023) === 0) yield 0;
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
    yield* sub_19f65();

      return;
    default: throw new Error("Invalid control flow in sub_1bd4d");
    }
  }
}

function* sub_1bd77() {
  let pc=0;
  
  dispatch: while (true) {
    if ((++game.steps & 1023) === 0) yield 0;
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
    yield* sub_1a02d();
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
    yield* sub_19fcd();
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
    yield* sub_1bdf8();
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
}

function* sub_1bdf8() {
  let pc=0;
  
  dispatch: while (true) {
    if ((++game.steps & 1023) === 0) yield 0;
    switch(pc) {
    case 0:

    yield* sub_1be18();
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
    yield* sub_19fcd();

      return;
    default: throw new Error("Invalid control flow in sub_1bdf8");
    }
  }
}

function* sub_1be18() {
  let pc=0;
  
  dispatch: while (true) {
    if ((++game.steps & 1023) === 0) yield 0;
    switch(pc) {
    case 0:

    push(r.bx);
    r.dl = memoryAGet(r.ds, r.bx + 17561);
    r.bl <<= 1;
    r.cx = memoryAGet16(r.ds, r.bx + 17537);
    yield* sub_19ee0();
    r.bx = pop();

      return;
    default: throw new Error("Invalid control flow in sub_1be18");
    }
  }
}

function* sub_1be30() {
  let pc=0;
  
  dispatch: while (true) {
    if ((++game.steps & 1023) === 0) yield 0;
    switch(pc) {
    case 0:


      return;
    default: throw new Error("Invalid control flow in sub_1be30");
    }
  }
}

function* sub_1be40() {
  let pc=0;
  
  dispatch: while (true) {
    if ((++game.steps & 1023) === 0) yield 0;
    switch(pc) {
    case 0:

    r.ah = 0;
    yield* interrupt(0x1a);
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
    yield* sub_1c1fd();
    yield* sub_1c25d();
    if (!flags.carry)
        { pc = 0x1be75; continue dispatch; }
case 0x1be74:
    return;
case 0x1be75:
    if (memoryAGet16(r.ds, 0x454f) == 0x0000)
        { pc = 0x1bebc; continue dispatch; }
    r.ah = 0;
    yield* interrupt(0x1a);
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
    yield* sub_1c000();
    if (!flags.carry)
        { pc = 0x1bec9; continue dispatch; }
    r.bx = memoryAGet16(r.ds, 0x45b6);
    yield* sub_1c1eb();
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
    yield* sub_1a02d();
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
    yield* sub_1a02d();
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
    yield* sub_1a02d();
    if (r.dl > 0x08)
        { pc = 0x1bfd1; continue dispatch; }
    memoryASet(r.ds, 0x454a, 0x00);
case 0x1bfd1:
    r.cx = memoryAGet16(r.ds, 0x4548);
    r.dl = memoryAGet(r.ds, 0x454b);
    yield* sub_19ee0();
    memoryASet16(r.ds, 0x45ba, r.ax);
    yield* sub_1c25d();
    if (!flags.carry)
        { pc = 0x1bfe5; continue dispatch; }
    return;
case 0x1bfe5:
    yield* sub_1c000();
    if (flags.carry)
        { pc = 0x1bff8; continue dispatch; }
    yield* sub_1c17a();
    yield* sub_1c140();
    memoryASet(r.ds, 0x45be, 0x00);
    yield* sub_1c0a5();
case 0x1bff8:
    r.bx = memoryAGet16(r.ds, 0x45b6);
    yield* sub_1c1eb();

      return;
    default: throw new Error("Invalid control flow in sub_1be40");
    }
  }
}

function* sub_1c000() {
  let pc=0;
  
  dispatch: while (true) {
    if ((++game.steps & 1023) === 0) yield 0;
    switch(pc) {
    case 0:

    r.ax = memoryAGet16(r.ds, 0x0579);
    r.dl = memoryAGet(r.ds, 0x057b);
    r.si = 0x0018;
    r.di = r.si;
    r.bx = memoryAGet16(r.ds, 0x4548);
    r.dh = memoryAGet(r.ds, 0x454b);
    r.cx = 0x0c0e;
    yield* sub_1a059();
    if (!flags.carry)
        return;
    if (memoryAGet16(r.ds, 0x45b6) != 0x0006)
        { pc = 0x1c030; continue dispatch; }
    memoryASet(r.ds, 0x0553, 0x01);
    yield* sub_18413();
    yield* sub_1c17a();
    flags.carry = true;
    return;
case 0x1c030:
    yield* sub_18413();
    yield* sub_1c17a();
    yield* sub_18375();
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
    yield* sub_1cb6b();
    flags.carry = true;

      return;
    default: throw new Error("Invalid control flow in sub_1c000");
    }
  }
}

function* sub_1c06e() {
  let pc=0;
  
  dispatch: while (true) {
    if ((++game.steps & 1023) === 0) yield 0;
    switch(pc) {
    case 0:

    memoryASet(r.ds, 0x45be, 0x01);
    r.ax = memoryAGet16(r.ds, 0x45b6);
    push(r.ax);
    memoryASet16(r.ds, 0x45b6, 0x0000);
case 0x1c07d:
    r.bx = memoryAGet16(r.ds, 0x45b6);
    yield* sub_1c1fd();
    if (memoryAGet16(r.ds, 0x454f) != 0x0000)
        { pc = 0x1c095; continue dispatch; }
    yield* sub_1c0a5();
    r.bx = memoryAGet16(r.ds, 0x45b6);
    yield* sub_1c1eb();
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
}

function* sub_1c0a5() {
  let pc=0;
  
  dispatch: while (true) {
    if ((++game.steps & 1023) === 0) yield 0;
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
    yield* sub_1a059();
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
    yield* sub_18413();
    if (memoryAGet(r.ds, 0x70f2) == 0x00)
        { pc = 0x1c0eb; continue dispatch; }
    yield* sub_1d45b();
case 0x1c0eb:
    yield* sub_1c17a();
    r.cx = pop();
    r.bx = r.cx;
    r.bx--;
    memoryASet(r.ds, r.bx + 11122, 0x00);
    r.dl = memoryAGet(r.ds, r.bx + 11114);
    r.bl <<= 1;
    r.cx = memoryAGet16(r.ds, r.bx + 11098);
    yield* sub_19ee0();
    r.di = r.ax;
    r.si = 0x2b7a;
    r.ax = 0xb800;
    r.es = r.ax;
    r.cx = 0x0f03;
    yield* sub_19fcd();
    if (memoryAGet(r.ds, 0x45be) != 0x00)
        { pc = 0x1c128; continue dispatch; }
    if (memoryAGet(r.ds, 0x70f2) == 0x00)
        { pc = 0x1c125; continue dispatch; }
    yield* sub_1d42a();
case 0x1c125:
    yield* sub_18375();
case 0x1c128:
    r.dx = 0;
    if (memoryAGet16(r.ds, 0x45b6) == 0x0006)
        { pc = 0x1c13b; continue dispatch; }
    r.ah = 0;
    yield* interrupt(0x1a);
    if (r.dx != 0x0000)
        { pc = 0x1c13b; continue dispatch; }
    r.dx--;
case 0x1c13b:
    memoryASet16(r.ds, 0x454f, r.dx);

      return;
    default: throw new Error("Invalid control flow in sub_1c0a5");
    }
  }
}

function* sub_1c140() {
  let pc=0;
  
  dispatch: while (true) {
    if ((++game.steps & 1023) === 0) yield 0;
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
    yield* sub_1c20f();

      return;
    default: throw new Error("Invalid control flow in sub_1c140");
    }
  }
}

function* sub_1c17a() {
  let pc=0;
  
  dispatch: while (true) {
    if ((++game.steps & 1023) === 0) yield 0;
    switch(pc) {
    case 0:

    if (memoryAGet(r.ds, 0x454e) != 0x00)
        return;
    r.di = memoryAGet16(r.ds, 0x454c);
    yield* sub_1c238();

      return;
    default: throw new Error("Invalid control flow in sub_1c17a");
    }
  }
}

function* sub_1c189() {
  let pc=0;
  
  dispatch: while (true) {
    if ((++game.steps & 1023) === 0) yield 0;
    switch(pc) {
    case 0:

    memoryASet16(r.ds, 0x45b6, 0x0000);
case 0x1c18f:
    yield* sub_1a02d();
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
    yield* interrupt(0x1a);
    if (r.dx != 0x0000)
        { pc = 0x1c1c5; continue dispatch; }
    r.dx--;
case 0x1c1c5:
    memoryASet16(r.ds, 0x454f, r.dx);
    r.bx = memoryAGet16(r.ds, 0x45b6);
    r.al = memoryAGet(r.ds, r.bx + 11220);
    r.al += 0x03;
    memoryASet(r.ds, 0x454b, r.al);
    yield* sub_1c1eb();
    memoryASet16(r.ds, 0x45b6, memoryAGet16(r.ds, 0x45b6) + 1);
    if (memoryAGet16(r.ds, 0x45b6) < 0x0007)
        { pc = 0x1c18f; continue dispatch; }
    memoryASet16(r.ds, 0x45b6, 0x0000);

      return;
    default: throw new Error("Invalid control flow in sub_1c189");
    }
  }
}

function* sub_1c1eb() {
  let pc=0;
  
  dispatch: while (true) {
    if ((++game.steps & 1023) === 0) yield 0;
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
}

function* sub_1c1fd() {
  let pc=0;
  
  dispatch: while (true) {
    if ((++game.steps & 1023) === 0) yield 0;
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
}

function* sub_1c20f() {
  let pc=0;
  
  dispatch: while (true) {
    if ((++game.steps & 1023) === 0) yield 0;
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
}

function* sub_1c238() {
  let pc=0;
  
  dispatch: while (true) {
    if ((++game.steps & 1023) === 0) yield 0;
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
}

function* sub_1c25d() {
  let pc=0;
  
  dispatch: while (true) {
    if ((++game.steps & 1023) === 0) yield 0;
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
    yield* sub_1a059();

      return;
    default: throw new Error("Invalid control flow in sub_1c25d");
    }
  }
}

function* sub_1c290() {
  let pc=0;
  
  dispatch: while (true) {
    if ((++game.steps & 1023) === 0) yield 0;
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
    yield* sub_1cd93();
case 0x1c2db:
    r.ah = 0;
    yield* interrupt(0x1a);
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
    yield* sub_19ee0();
    r.di = r.ax;
    memoryASet16(r.ds, 0x4dd8, r.di);
    r.si = 0x4b8a;
    r.bp = 0x000e;
    r.cx = 0x2007;
    yield* sub_19efc();
    r.di = memoryAGet16(r.ds, 0x4dd8);
    r.di += 0x00f3;
    r.si = 0x4a82;
    r.cx = 0x0d04;
    yield* sub_19fcd();
    if (memoryAGet16(r.ds, 0x4dd6) != 0x000a)
        { pc = 0x1c350; continue dispatch; }
    yield* sub_1c95e();
    yield* sub_1cd84();
case 0x1c350:
    yield* sub_1cd93();
    r.ah = 0;
    yield* interrupt(0x1a);
    r.dx -= memoryAGet16(r.ds, 0x4a80);
    if (r.dx < memoryAGet16(r.ds, 0x4dd6))
        { pc = 0x1c350; continue dispatch; }
    if (memoryAGet16(r.ds, 0x4dd6) != 0x000a)
        { pc = 0x1c371; continue dispatch; }
    yield* sub_1aae0();
    r.bx = 0;
    r.ah = 0x0b;
    yield* interrupt(0x10);
case 0x1c371:
    memoryASet16(r.ds, 0x4dd6, 0x0002);
    { pc = 0x1c2d1; continue dispatch; }

      return;
    default: throw new Error("Invalid control flow in sub_1c290");
    }
  }
}

function* sub_1c37a() {
  let pc=0;
  
  dispatch: while (true) {
    if ((++game.steps & 1023) === 0) yield 0;
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
    yield* sub_1c3cb();
    r.cx = pop();
    if (--r.cx)
        { pc = 0x1c37d; continue dispatch; }

      return;
    default: throw new Error("Invalid control flow in sub_1c37a");
    }
  }
}

function* sub_1c3cb() {
  let pc=0;
  
  dispatch: while (true) {
    if ((++game.steps & 1023) === 0) yield 0;
    switch(pc) {
    case 0:

    r.cx = 0x0008;
    memoryASet(r.ds, 0x4d91, 0x01);
case 0x1c3d3:
    push(r.cx);
    yield* sub_1cd93();
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
    yield* interrupt(0x1a);
    memoryASet16(r.ds, 0x4a80, r.dx);
    r.cx = 0x0008;
case 0x1c402:
    push(r.cx);
    yield* sub_1cd93();
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
    yield* sub_19ee0();
    r.di = r.ax;
    r.si = memoryAGet16(r.ds, 0x4dca);
    r.bp = 0x000e;
    r.cx = memoryAGet16(r.ds, 0x4dd4);
    yield* sub_19efc();
    yield 1; 
case 0x1c435:
    r.bx = pop();
    r.cx = pop();
    yield* sub_1c45a();
    if (--r.cx)
        { pc = 0x1c402; continue dispatch; }
case 0x1c43c:
    yield* sub_1cd93();
    r.ah = 0;
    yield* interrupt(0x1a);
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
}

function* sub_1c45a() {
  let pc=0;
  
  dispatch: while (true) {
    if ((++game.steps & 1023) === 0) yield 0;
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
}

function* sub_1c4bb() {
  let pc=0;
  
  dispatch: while (true) {
    if ((++game.steps & 1023) === 0) yield 0;
    switch(pc) {
    case 0:

    yield* sub_1cd84();
    if (memoryAGet(r.ds, 0x0697) == 0xfd)
        { pc = 0x1c4cc; continue dispatch; }
    r.ah = 0x0b;
    r.bx = 0x0101;
    yield* interrupt(0x10);
case 0x1c4cc:
    yield* sub_1c290();
    yield* sub_1c37a();
    yield* sub_1cdef();
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
    yield* interrupt(0x1a);
    memoryASet16(r.ds, 0x0412, r.dx);
    yield* sub_1cd51();

      return;
    default: throw new Error("Invalid control flow in sub_1c4bb");
    }
  }
}

function* sub_1c500() {
  let pc=0;
  
  dispatch: while (true) {
    if ((++game.steps & 1023) === 0) yield 0;
    switch(pc) {
    case 0:

    if (memoryAGet(r.ds, 0x0000) == 0x00)
        return;
    r.ah = 0;
    yield* interrupt(0x1a);
    if (r.dx == memoryAGet16(r.ds, 0x52c4))
        return;
    memoryASet16(r.ds, 0x52c4, r.dx);
    r.bx = memoryAGet16(r.ds, 0x52c6);
    memoryASet16(r.ds, 0x52c6, memoryAGet16(r.ds, 0x52c6) + 0x0002);
    r.ax = memoryAGet16(r.ds, r.bx + 21194);
    if (r.ax != memoryAGet16(r.ds, 0x52c8))
        { pc = 0x1c52c; continue dispatch; }
    yield* sub_1cd51();
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
}

function* sub_1c543() {
  let pc=0;
  
  dispatch: while (true) {
    if ((++game.steps & 1023) === 0) yield 0;
    switch(pc) {
    case 0:

    if (memoryAGet16(r.ds, 0x0008) < 0x0002)
        return;
    memoryASet16(r.ds, 0x5016, 0x0000);
    r.ah = 0;
    yield* interrupt(0x1a);
    memoryASet16(r.ds, 0x52c0, r.dx);
    memoryASet16(r.ds, 0x52c2, r.dx);
    memoryASet16(r.ds, 0x52c4, r.dx);
    memoryASet16(r.ds, 0x52c6, 0x0000);
    memoryASet16(r.ds, 0x52c8, 0x0000);
case 0x1c56c:
    yield* sub_1c598();
    memoryASet16(r.ds, 0x5016, memoryAGet16(r.ds, 0x5016) ^ 0x0002);
case 0x1c575:
    yield* sub_1c500();
    r.ah = 0;
    yield* interrupt(0x1a);
    r.ax = r.dx;
    r.ax -= memoryAGet16(r.ds, 0x52c0);
    if (r.ax < 0x0005)
        { pc = 0x1c575; continue dispatch; }
    memoryASet16(r.ds, 0x52c0, r.dx);
    r.dx -= memoryAGet16(r.ds, 0x52c2);
    if (r.dx < 0x0028)
        { pc = 0x1c56c; continue dispatch; }
    yield* sub_1cd51();

      return;
    default: throw new Error("Invalid control flow in sub_1c543");
    }
  }
}

function* sub_1c598() {
  let pc=0;
  
  dispatch: while (true) {
    if ((++game.steps & 1023) === 0) yield 0;
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
    yield* sub_19fcd();
    yield* sub_1c500();
    memoryASet16(r.ds, 0x5010, memoryAGet16(r.ds, 0x5010) + 0x0004);
    { pc = 0x1c5aa; continue dispatch; }

      return;
    default: throw new Error("Invalid control flow in sub_1c598");
    }
  }
}

function* sub_1c5e0() {
  let pc=0;
  
  dispatch: while (true) {
    if ((++game.steps & 1023) === 0) yield 0;
    switch(pc) {
    case 0:

    if (memoryAGet(r.ds, 0x0000) == 0x00)
        return;
    yield 1; 
    r.ah = 0;
    yield* interrupt(0x1a);
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
    yield* sub_1cd51();
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
}

function* sub_1c630() {
  let pc=0;
  
  dispatch: while (true) {
    if ((++game.steps & 1023) === 0) yield 0;
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
    yield* sub_1a02d();
    r.dx &= 0x000e;
    r.dx += memoryAGet16(r.ds, 0x5918);
    r.si = r.dx;
    r.si = memoryAGet16(r.ds, r.si + 22664);
    r.cx = memoryAGet16(r.ds, r.si + 22616);
    r.si = memoryAGet16(r.ds, r.si + 22604);
    push(r.bx);
    yield* sub_19fcd();
    r.bx = pop();
    r.bx += 0x0002;
    { pc = 0x1c64c; continue dispatch; }

      return;
    default: throw new Error("Invalid control flow in sub_1c630");
    }
  }
}

function* sub_1c680() {
  let pc=0;
  
  dispatch: while (true) {
    if ((++game.steps & 1023) === 0) yield 0;
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
}

function* sub_1c69d() {
  let pc=0;
  
  dispatch: while (true) {
    if ((++game.steps & 1023) === 0) yield 0;
    switch(pc) {
    case 0:

    if (memoryAGet(r.ds, 0x0000) == 0x00)
        { pc = 0x1c6d5; continue dispatch; }
    if (memoryAGet(r.ds, 0x1cb8) == 0x00)
        { pc = 0x1c728; continue dispatch; }
    r.ah = 0;
    yield* interrupt(0x1a);
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
    yield* sub_1cab9();
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
    yield* sub_1a02d();
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
    yield* sub_1a02d();
    r.ax = r.dx;
    r.ax &= memoryAGet16(r.ds, 0x5b0a);
    r.ax &= 0x01ff;
    r.ax += 0x0190;
    yield* sub_1cab9();
case 0x1c727:
    return;
case 0x1c728:
    r.ah = 0;
    yield* interrupt(0x1a);
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
    yield* sub_1cab9();
    return;
case 0x1c74e:
    yield* sub_1cd51();
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
    yield* sub_1cd58();
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
    yield* sub_1a02d();
    if (r.dl > memoryAGet(r.ds, r.si + 23052))
        { pc = 0x1c828; continue dispatch; }
    r.dl &= 0x07;
    memoryASet(r.ds, 0x592d, r.dl);
case 0x1c828:
    yield* sub_1a02d();
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
    yield* sub_1cd58();

      return;
    default: throw new Error("Invalid control flow in sub_1c69d");
    }
  }
}

function* sub_1c8c1() {
  let pc=0;
  
  dispatch: while (true) {
    if ((++game.steps & 1023) === 0) yield 0;
    switch(pc) {
    case 0:

    yield* sub_1cd51();
    r.ah = 0x0b;
    r.bx = 0x0004;
    yield* interrupt(0x10);
    r.ah = 0;
    yield* interrupt(0x1a);
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
    yield* interrupt(0x1a);
    r.dx -= memoryAGet16(r.ds, 0x5ae2);
    if (r.dx < 0x0002)
        { pc = 0x1c8e7; continue dispatch; }
    r.ah = 0x0b;
    r.bx = 0;
    yield* interrupt(0x10);
    memoryASet(r.ds, 0x5b07, 0x0c);
    yield* sub_1cd51();

      return;
    default: throw new Error("Invalid control flow in sub_1c8c1");
    }
  }
}

function* sub_1c924() {
  let pc=0;
  
  dispatch: while (true) {
    if ((++game.steps & 1023) === 0) yield 0;
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
}

function* sub_1c934() {
  let pc=0;
  
  dispatch: while (true) {
    if ((++game.steps & 1023) === 0) yield 0;
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
}

function* sub_1c95e() {
  let pc=0;
  
  dispatch: while (true) {
    if ((++game.steps & 1023) === 0) yield 0;
    switch(pc) {
    case 0:

    memoryASet16(r.ds, 0x5acb, 0x01f4);
case 0x1c964:
    yield* sub_1c99e();
    memoryASet16(r.ds, 0x5acb, memoryAGet16(r.ds, 0x5acb) - 0x001e);
    if (memoryAGet16(r.ds, 0x5acb) > 0x00c8)
        { pc = 0x1c964; continue dispatch; }
    memoryASet16(r.ds, 0x5acb, 0x01f4);
case 0x1c97a:
    yield* sub_1c99e();
    memoryASet16(r.ds, 0x5acb, memoryAGet16(r.ds, 0x5acb) - 0x0014);
    if (memoryAGet16(r.ds, 0x5acb) > 0x012c)
        { pc = 0x1c97a; continue dispatch; }
case 0x1c98a:
    yield* sub_1c99e();
    memoryASet16(r.ds, 0x5acb, memoryAGet16(r.ds, 0x5acb) + 0x001e);
    if (memoryAGet16(r.ds, 0x5acb) < 0x0320)
        { pc = 0x1c98a; continue dispatch; }
    yield* sub_1cd51();

      return;
    default: throw new Error("Invalid control flow in sub_1c95e");
    }
  }
}

function* sub_1c99e() {
  let pc=0;
  
  dispatch: while (true) {
    if ((++game.steps & 1023) === 0) yield 0;
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
}

function* sub_1c9c7() {
  let pc=0;
  
  dispatch: while (true) {
    if ((++game.steps & 1023) === 0) yield 0;
    switch(pc) {
    case 0:

    yield* sub_1cd51();
    memoryASet(r.ds, 0x5acf, 0x00);
    memoryASet16(r.ds, 0x5acd, 0x0008);

      return;
    default: throw new Error("Invalid control flow in sub_1c9c7");
    }
  }
}

function* sub_1c9d6() {
  let pc=0;
  
  dispatch: while (true) {
    if ((++game.steps & 1023) === 0) yield 0;
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
}

function* sub_1ca05() {
  let pc=0;
  
  dispatch: while (true) {
    if ((++game.steps & 1023) === 0) yield 0;
    switch(pc) {
    case 0:

    memoryASet16(r.ds, 0x5a85, 0x0000);
    r.ah = 0;
    yield* interrupt(0x1a);
    memoryASet16(r.ds, 0x5a83, r.dx);

      return;
    default: throw new Error("Invalid control flow in sub_1ca05");
    }
  }
}

function* sub_1ca14() {
  let pc=0;
  
  dispatch: while (true) {
    if ((++game.steps & 1023) === 0) yield 0;
    switch(pc) {
    case 0:

    if (memoryAGet(r.ds, 0x0000) == 0x00)
        return;
    r.ah = 0;
    yield* interrupt(0x1a);
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
    yield* sub_1cd51();
    return;
case 0x1ca4b:
    r.ax = memoryAGet16(r.ds, r.bx + 23175);
case 0x1ca4f:
    push(r.ax);
    r.al = 0xb6;
    out(0x43, r.al);
    r.ax = pop();
    yield* sub_1cab9();

      return;
    default: throw new Error("Invalid control flow in sub_1ca14");
    }
  }
}

function* sub_1ca59() {
  let pc=0;
  
  dispatch: while (true) {
    if ((++game.steps & 1023) === 0) yield 0;
    switch(pc) {
    case 0:

    memoryASet16(r.ds, 0x5a62, 0x0000);
    memoryASet(r.ds, 0x5a82, 0x00);

      return;
    default: throw new Error("Invalid control flow in sub_1ca59");
    }
  }
}

function* sub_1ca65() {
  let pc=0;
  
  dispatch: while (true) {
    if ((++game.steps & 1023) === 0) yield 0;
    switch(pc) {
    case 0:

    if (memoryAGet(r.ds, 0x0000) == 0x00)
        { pc = 0x1ca76; continue dispatch; }
    r.ah = 0;
    yield* interrupt(0x1a);
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
    yield* sub_1cab9();

      return;
    default: throw new Error("Invalid control flow in sub_1ca65");
    }
  }
}

function* sub_1ca99() {
  let pc=0;
  
  dispatch: while (true) {
    if ((++game.steps & 1023) === 0) yield 0;
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
    yield* sub_1cab9();
    r.ax = pop();
    r.bx = pop();

      return;
    default: throw new Error("Invalid control flow in sub_1ca99");
    }
  }
}

function* sub_1cab9() {
  let pc=0;
  
  dispatch: while (true) {
    if ((++game.steps & 1023) === 0) yield 0;
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
}

function* sub_1cac6() {
  let pc=0;
  
  dispatch: while (true) {
    if ((++game.steps & 1023) === 0) yield 0;
    switch(pc) {
    case 0:


      return;
    default: throw new Error("Invalid control flow in sub_1cac6");
    }
  }
}

function* sub_1cac7() {
  let pc=0;
  
  dispatch: while (true) {
    if ((++game.steps & 1023) === 0) yield 0;
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
    yield* sub_1cab9();
    r.dx = pop();
    r.cx = pop();
    r.ax = pop();

      return;
    default: throw new Error("Invalid control flow in sub_1cac7");
    }
  }
}

function* sub_1caed() {
  let pc=0;
  
  dispatch: while (true) {
    if ((++game.steps & 1023) === 0) yield 0;
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
}

function* sub_1cb28() {
  let pc=0;
  
  dispatch: while (true) {
    if ((++game.steps & 1023) === 0) yield 0;
    switch(pc) {
    case 0:

    if (memoryAGet(r.ds, 0x1cbf) != 0x00)
        { pc = 0x1cb38; continue dispatch; }
    r.bx = 0x0390;
    r.cx = 0x1800;
    yield* sub_1cbd3();
case 0x1cb38:
    memoryASet(r.ds, 0x127c, 0x00);

      return;
    default: throw new Error("Invalid control flow in sub_1cb28");
    }
  }
}

function* sub_1cb3e() {
  let pc=0;
  
  dispatch: while (true) {
    if ((++game.steps & 1023) === 0) yield 0;
    switch(pc) {
    case 0:

    if (memoryAGet(r.ds, 0x1cbf) != 0x00)
        return;
    r.bx = 0x0400;
    r.cx = 0x1800;
    yield* sub_1cbd3();

      return;
    default: throw new Error("Invalid control flow in sub_1cb3e");
    }
  }
}

function* sub_1cb4f() {
  let pc=0;
  
  dispatch: while (true) {
    if ((++game.steps & 1023) === 0) yield 0;
    switch(pc) {
    case 0:

    r.bx = 0x07d0;
    r.cx = 0x1800;
    yield* sub_1cbd3();
    r.bx = 0x0a6e;
    r.cx = 0x1800;
    yield* sub_1cbd3();
    r.bx = 0x0dec;
    r.cx = 0x1800;
    yield* sub_1cbd3();

      return;
    default: throw new Error("Invalid control flow in sub_1cb4f");
    }
  }
}

function* sub_1cb6b() {
  let pc=0;
  
  dispatch: while (true) {
    if ((++game.steps & 1023) === 0) yield 0;
    switch(pc) {
    case 0:

    if (memoryAGet(r.ds, 0x0000) == 0x00)
        return;
    memoryASet16(r.ds, 0x5923, r.bx);
    push(r.ax);
    r.al = 0xb6;
    out(0x43, r.al);
    r.ax = pop();
    yield* sub_1cab9();
    memoryASet(r.ds, 0x5920, 0x02);
    r.ah = 0;
    yield* interrupt(0x1a);
    memoryASet16(r.ds, 0x5921, r.dx);

      return;
    default: throw new Error("Invalid control flow in sub_1cb6b");
    }
  }
}

function* sub_1cb8d() {
  let pc=0;
  
  dispatch: while (true) {
    if ((++game.steps & 1023) === 0) yield 0;
    switch(pc) {
    case 0:

    if (memoryAGet(r.ds, 0x0000) == 0x00)
        return;
    if (memoryAGet(r.ds, 0x5920) != 0x00)
        return;
    yield* sub_1a02d();
    r.ax = r.dx;
    r.ax &= 0x007f;
    r.ax += 0x00aa;
    r.bx = r.ax;
    r.ax += 0x001e;
    yield* sub_1cb6b();

      return;
    default: throw new Error("Invalid control flow in sub_1cb8d");
    }
  }
}

function* sub_1cbaf() {
  let pc=0;
  
  dispatch: while (true) {
    if ((++game.steps & 1023) === 0) yield 0;
    switch(pc) {
    case 0:

    if (memoryAGet(r.ds, 0x0000) == 0x00)
        return;
    r.ax = 0x1200;
    r.bx = 0x1312;
    r.ax += memoryAGet16(r.ds, 0x5b08);
    r.bx += memoryAGet16(r.ds, 0x5b08);
    memoryASet16(r.ds, 0x5b08, memoryAGet16(r.ds, 0x5b08) + 0x015e);
    yield* sub_1cb6b();
    memoryASet(r.ds, 0x5b07, 0x18);

      return;
    default: throw new Error("Invalid control flow in sub_1cbaf");
    }
  }
}

function* sub_1cbd3() {
  let pc=0;
  
  dispatch: while (true) {
    if ((++game.steps & 1023) === 0) yield 0;
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
    yield* sub_1cd51();

      return;
    default: throw new Error("Invalid control flow in sub_1cbd3");
    }
  }
}

function* sub_1cbfb() {
  let pc=0;
  
  dispatch: while (true) {
    if ((++game.steps & 1023) === 0) yield 0;
    switch(pc) {
    case 0:

    r.al = portRead(0x61);
    r.al &= 0xfe;
    out(0x61, r.al);
    r.ah = 0;
    yield* interrupt(0x1a);
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
    yield* interrupt(0x1a);
    r.cx = pop();
    r.dx -= memoryAGet16(r.ds, 0x5a40);
    if (r.dx < 0x0002)
        { pc = 0x1cc1b; continue dispatch; }
    if (r.dx >= 0x0007)
        { pc = 0x1cc48; continue dispatch; }
    if (--r.cx)
        { pc = 0x1cc1b; continue dispatch; }
    yield* sub_1a02d();
    r.dl &= 0x02;
    r.dl &= memoryAGet(r.ds, 0x0000);
    r.al = portRead(0x61);
    r.al ^= r.dl;
    out(0x61, r.al);
    memoryASet16(r.ds, 0x5a42, memoryAGet16(r.ds, 0x5a42) + 0x0007);
    { pc = 0x1cc0f; continue dispatch; }
case 0x1cc48:
    yield* sub_1cd51();

      return;
    default: throw new Error("Invalid control flow in sub_1cbfb");
    }
  }
}

function* sub_1cc4c() {
  let pc=0;
  
  dispatch: while (true) {
    if ((++game.steps & 1023) === 0) yield 0;
    switch(pc) {
    case 0:

    if (memoryAGet(r.ds, 0x0000) == 0x00)
        { pc = 0x1cc64; continue dispatch; }
    yield* sub_185e7();
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
}

function* sub_1ccc0() {
  let pc=0;
  
  dispatch: while (true) {
    if ((++game.steps & 1023) === 0) yield 0;
    switch(pc) {
    case 0:

    if (memoryAGet(r.ds, 0x0000) == 0x00)
        { pc = 0x1ccd1; continue dispatch; }
    r.ah = 0;
    yield* interrupt(0x1a);
    if (r.dx != memoryAGet16(r.ds, 0x5a14))
        { pc = 0x1ccd2; continue dispatch; }
case 0x1ccd1:
    return;
case 0x1ccd2:
    memoryASet16(r.ds, 0x5a14, r.dx);
    r.al = 0xb6;
    out(0x43, r.al);
    yield* sub_1a02d();
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
}

function* sub_1ccf2() {
  let pc=0;
  
  dispatch: while (true) {
    if ((++game.steps & 1023) === 0) yield 0;
    switch(pc) {
    case 0:

    memoryASet16(r.ds, 0x5a12, 0x0338);
    r.ah = 0;
    yield* interrupt(0x1a);
    memoryASet16(r.ds, 0x5a10, r.dx);
    yield* sub_185e7();
    memoryASet16(r.ds, 0x5a0e, r.ax);
case 0x1cd06:
    yield* sub_185e7();
    r.dx = r.ax;
    r.ax -= memoryAGet16(r.ds, 0x5a0e);
    if (r.ax < 0x9c40)
        { pc = 0x1cd40; continue dispatch; }
    memoryASet16(r.ds, 0x5a0e, r.dx);
    if (memoryAGet(r.ds, 0x0000) == 0x00)
        { pc = 0x1cd40; continue dispatch; }
    r.al = 0xb6;
    out(0x43, r.al);
    yield* sub_1a02d();
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
    yield* interrupt(0x1a);
    r.dx -= memoryAGet16(r.ds, 0x5a10);
    if (r.dx < 0x0002)
        { pc = 0x1cd06; continue dispatch; }
    yield* sub_1cd51();

      return;
    default: throw new Error("Invalid control flow in sub_1ccf2");
    }
  }
}

function* sub_1cd51() {
  let pc=0;
  
  dispatch: while (true) {
    if ((++game.steps & 1023) === 0) yield 0;
    switch(pc) {
    case 0:

    r.al = portRead(0x61);
    r.al &= 0xfc;
    out(0x61, r.al);

      return;
    default: throw new Error("Invalid control flow in sub_1cd51");
    }
  }
}

function* sub_1cd58() {
  let pc=0;
  
  dispatch: while (true) {
    if ((++game.steps & 1023) === 0) yield 0;
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
    yield* sub_185e7();
    r.cx = r.ax;
case 0x1cd70:
    yield* sub_185e7();
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
}

function* sub_1cd84() {
  let pc=0;
  
  dispatch: while (true) {
    if ((++game.steps & 1023) === 0) yield 0;
    switch(pc) {
    case 0:

    memoryASet16(r.ds, 0x59be, 0x0000);
    r.ah = 0;
    yield* interrupt(0x1a);
    memoryASet16(r.ds, 0x59c0, r.dx);

      return;
    default: throw new Error("Invalid control flow in sub_1cd84");
    }
  }
}

function* sub_1cd93() {
  let pc=0;
  
  dispatch: while (true) {
    if ((++game.steps & 1023) === 0) yield 0;
    switch(pc) {
    case 0:

    if (memoryAGet(r.ds, 0x0000) == 0x00)
        { pc = 0x1cda9; continue dispatch; }
    r.ah = 0;
    yield* interrupt(0x1a);
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
    yield* sub_1cd51();
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
}

function* sub_1cdef() {
  let pc=0;
  
  dispatch: while (true) {
    if ((++game.steps & 1023) === 0) yield 0;
    switch(pc) {
    case 0:

case 0x1cdef:
    if (memoryAGet(r.ds, 0x0000) == 0x00)
        return;
    yield* sub_1cd93();
    if (memoryAGet16(r.ds, 0x59be) < 0x007c)
        { pc = 0x1cdef; continue dispatch; }

      return;
    default: throw new Error("Invalid control flow in sub_1cdef");
    }
  }
}

function* sub_1ce10() {
  let pc=0;
  
  dispatch: while (true) {
    if ((++game.steps & 1023) === 0) yield 0;
    switch(pc) {
    case 0:

    r.ah = 0;
    yield* interrupt(0x1a);
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
    yield* sub_19fcd();
case 0x1ce3d:
    yield* sub_1ca14();
    r.ah = 0;
    yield* interrupt(0x1a);
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
    yield* sub_19fcd();
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
    yield* sub_19fcd();
case 0x1ce81:
    if (memoryAGet16(r.ds, 0x5f60) < 0x0010)
        { pc = 0x1ce1e; continue dispatch; }
    yield* sub_1cd51();

      return;
    default: throw new Error("Invalid control flow in sub_1ce10");
    }
  }
}

function* sub_1ce90() {
  let pc=0;
  
  dispatch: while (true) {
    if ((++game.steps & 1023) === 0) yield 0;
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
    yield* sub_1cece();
    r.ax = 0x0040;
    r.ds = r.ax;
    r.ax = memoryAGet16(r.ds, 0x0010);
    r.al &= 0xcf;
    r.al |= 0x10;
    memoryASet16(r.ds, 0x0010, r.ax);
    r.ax = 0x0004;
    yield* interrupt(0x10);
case 0x1cec5:
    return;
case 0x1cec6:
    r.si = 0x6112;
    yield* sub_1cece();
case 0x1cecc:
    { pc = 0x1cecc; continue dispatch; }

      return;
    default: throw new Error("Invalid control flow in sub_1ce90");
    }
  }
}

function* sub_1cece() {
  let pc=0;
  
  dispatch: while (true) {
    if ((++game.steps & 1023) === 0) yield 0;
    switch(pc) {
    case 0:

    r.ax = 0x1010;
    r.ds = r.ax;
    yield* sub_1d05b();

      return;
    default: throw new Error("Invalid control flow in sub_1cece");
    }
  }
}

function* sub_1cee0() {
  let pc=0;
  
  dispatch: while (true) {
    if ((++game.steps & 1023) === 0) yield 0;
    switch(pc) {
    case 0:

    flags.direction = false;
    memoryASet16(r.ds, 0x0004, 0x0000);
    yield* sub_18a60();
    yield* sub_19560();
    yield* sub_19c60();
    r.ax = 0xb800;
    r.es = r.ax;
    r.si = 0x6152;
    r.cx = 0x1d0b;
    r.di = 0x00bd;
    yield* sub_19fcd();
    r.si = 0x63d0;
    r.cx = 0x160e;
    r.di = 0x069e;
    yield* sub_19fcd();
    r.si = 0x6638;
    r.cx = 0x0c03;
    r.di = 0x0a78;
    yield* sub_19fcd();
    r.si = 0x6680;
    r.cx = 0x080e;
    r.di = 0x0ca8;
    yield* sub_19fcd();
    r.si = 0x6760;
    r.cx = 0x0b0c;
    r.di = 0x1d6e;
    yield* sub_19fcd();
    r.si = 0x6868;
    r.cx = 0x0804;
    r.di = 0x1dec;
    yield* sub_19fcd();
    memoryASet16(r.ds, 0x6a8d, 0x0000);
    yield* sub_1d06b();
    memoryASet16(r.ds, 0x0579, 0x0000);
    yield* sub_1793d();
    memoryASet(r.ds, 0x057b, 0x60);
    memoryASet(r.ds, 0x057c, 0x92);
    yield* sub_19922();
    yield* sub_1992c();
    memoryASet(r.ds, 0x1f80, 0x09);
    memoryASet(r.ds, 0x1f81, 0xff);
    yield* sub_198e3();
    yield* sub_19070();
    memoryASet(r.ds, 0x0698, 0x00);
    memoryASet(r.ds, 0x0699, 0x00);
    memoryASet(r.ds, 0x6a8a, 0x00);
    r.ax = memoryAGet16(r.ds, 0x0693);
    memoryASet16(r.ds, 0x6150, r.ax);
case 0x1cf84:
    r.ah = 0;
    yield* interrupt(0x1a);
    memoryASet16(r.ds, 0x6a8b, r.dx);
    memoryASet16(r.ds, 0x5322, r.dx);
    memoryASet16(r.ds, 0x6a93, r.dx);
    r.dx -= 0x0030;
    memoryASet16(r.ds, 0x6a88, r.dx);
    memoryASet16(r.ds, 0x5320, 0x0000);
case 0x1cfa1: game.phase="title";
    r.ah = 0;
    yield* interrupt(0x1a);
    r.ax = r.dx;
    r.ax -= memoryAGet16(r.ds, 0x6a93);
    if (r.ax < 0x0024)
        { pc = 0x1cfb9; continue dispatch; }
    memoryASet16(r.ds, 0x6a93, r.dx);
    push(r.dx);
    yield* sub_1d06b();
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
    yield* sub_1c5e0();
    yield* sub_1d004();
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
}

function* sub_1d004() {
  let pc=0;
  
  dispatch: while (true) {
    if ((++game.steps & 1023) === 0) yield 0;
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
    yield* interrupt(0x1a);
    r.ax = r.dx;
    r.ax -= memoryAGet16(r.ds, 0x6a88);
    if (r.ax < 0x0012)
        { pc = 0x1d04c; continue dispatch; }
    memoryASet16(r.ds, 0x6a88, r.dx);
    yield* sub_1a02d();
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
    yield* sub_18608();
    if (flags.zero)
        return;
    memoryASet16(r.ds, 0x0572, 0x0004);
    yield* sub_17b15();

      return;
    default: throw new Error("Invalid control flow in sub_1d004");
    }
  }
}

function* sub_1d05b() {
  let pc=0;
  
  dispatch: while (true) {
    if ((++game.steps & 1023) === 0) yield 0;
    switch(pc) {
    case 0:

case 0x1d05b:
    lodsb();
    if (r.al == 0x00)
        return;
    push(r.si);
    r.bl = 0x02;
    r.ah = 0x0e;
    yield* interrupt(0x10);
    r.si = pop();
    { pc = 0x1d05b; continue dispatch; }

      return;
    default: throw new Error("Invalid control flow in sub_1d05b");
    }
  }
}

function* sub_1d06b() {
  let pc=0;
  
  dispatch: while (true) {
    if ((++game.steps & 1023) === 0) yield 0;
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
    yield* sub_19fcd();

      return;
    default: throw new Error("Invalid control flow in sub_1d06b");
    }
  }
}

function* sub_1d08b() {
  let pc=0;
  
  dispatch: while (true) {
    if ((++game.steps & 1023) === 0) yield 0;
    switch(pc) {
    case 0:

    r.dl = 0x00;
    r.bh = r.dl;
    r.ah = 0x02;
    yield* interrupt(0x10);

      return;
    default: throw new Error("Invalid control flow in sub_1d08b");
    }
  }
}

function* sub_1d0a0() {
  let pc=0;
  
  dispatch: while (true) {
    if ((++game.steps & 1023) === 0) yield 0;
    switch(pc) {
    case 0:
game.phase="paused";

    yield* sub_1cd51();
    r.ah = 0;
    yield* interrupt(0x1a);
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
    yield* sub_19ffa();
    r.ds = pop();
    r.dx = 0x0b05;
    r.bh = 0x00;
    r.ah = 0x02;
    yield* interrupt(0x10);
    r.si = 0x6d91;
    flags.direction = false;
    yield* sub_1d05b();
    r.dx = 0x0c05;
    r.bh = 0x00;
    r.ah = 0x02;
    yield* interrupt(0x10);
    r.si = 0x6db2;
    if (memoryAGet(r.ds, 0x069b) == 0x00)
        { pc = 0x1d0ea; continue dispatch; }
    r.si = 0x6dd3;
case 0x1d0ea:
    flags.direction = false;
    yield* sub_1d05b();
    yield* sub_1d1c7();
    r.ax = 0xb800;
    r.es = r.ax;
    r.si = 0x000e;
    r.di = 0x0dca;
    r.cx = 0x1020;
    yield* sub_19fcd();
    r.ah = 0x01;
    r.cx = memoryAGet16(r.ds, 0x6dfe);
    r.dx = memoryAGet16(r.ds, 0x6dfc);
    yield* interrupt(0x1a);
    r.ax = memoryAGet16(r.ds, 0x0693);
    memoryASet16(r.ds, 0x6e00, r.ax);

game.phase="playing";
      return;
    default: throw new Error("Invalid control flow in sub_1d0a0");
    }
  }
}

function* sub_1d115() {
  let pc=0;
  yield* sub_1cd51();
  yield* sub_1d1fd();
  memoryASet(r.ds, 0x069b, 0);
  memoryASet16(r.ds, 0x6d8f, 2);
  pc = 0x1d14c;
  dispatch: while (true) {
    if ((++game.steps & 1023) === 0) yield 0;
    switch(pc) {
    case 0:

    yield* sub_1cd51();
case 0x1d118:
    yield* sub_1d1fd();
    memoryASet16(r.ds, 0x6d8f, 0x0000);
    yield* sub_1d1e1();
case 0x1d124:
    r.ax = memoryAGet16(r.ds, 0x0693);
case 0x1d127: game.phase="keyboard";
    yield 1;
    if (r.ax == memoryAGet16(r.ds, 0x0693))
        { pc = 0x1d127; continue dispatch; }
    if (!(memoryAGet(r.ds, 0x06c1) & 0x80))
        { pc = 0x1d142; continue dispatch; }
    if (memoryAGet(r.ds, 0x06c2) & 0x80)
        { pc = 0x1d124; continue dispatch; }
    memoryASet(r.ds, 0x069b, 0x00);
    { pc = 0x1d14c; continue dispatch; }
case 0x1d142:
    yield* sub_1d215();
    if (flags.carry)
        { pc = 0x1d118; continue dispatch; }
    memoryASet(r.ds, 0x069b, 0x01);
case 0x1d14c:
    r.cx = 0x0005;
case 0x1d14f:
    push(r.cx);
    yield* sub_1d1e1();
    r.cx = pop();
    if (--r.cx)
        { pc = 0x1d14f; continue dispatch; }
case 0x1d156:
    r.ax = memoryAGet16(r.ds, 0x0693);
case 0x1d159: game.phase="difficulty";
    yield 1;
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
    yield* sub_1d1e1();
    r.cx = pop();
    if (--r.cx)
        { pc = 0x1d186; continue dispatch; }
    if (memoryAGet(r.ds, 0x069b) == 0x00)
        { pc = 0x1d1ae; continue dispatch; }
    memoryASet16(r.ds, 0x6d8f, 0x0020);
    yield* sub_1d1e1();
    yield* sub_1d1e1();
    memoryASet16(r.ds, 0x6d8f, 0x0018);
    yield* sub_1d1e1();
    yield* sub_1d1e1();
    { pc = 0x1d1c3; continue dispatch; }
case 0x1d1ae:
    memoryASet16(r.ds, 0x6d8f, 0x001c);
    yield* sub_1d1e1();
    yield* sub_1d1e1();
    memoryASet16(r.ds, 0x6d8f, 0x0016);
    yield* sub_1d1e1();
case 0x1d1c3: game.phase="ready";
    yield* sub_1d1c7();

      return;
    default: throw new Error("Invalid control flow in sub_1d115");
    }
  }
}

function* sub_1d1c7() {
  let pc=0;
  
  dispatch: while (true) {
    if ((++game.steps & 1023) === 0) yield 0;
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
    yield 1;
    if (r.ax == memoryAGet16(r.ds, 0x0693))
        { pc = 0x1d1da; continue dispatch; }

      return;
    default: throw new Error("Invalid control flow in sub_1d1c7");
    }
  }
}

function* sub_1d1e1() {
  let pc=0;
  
  dispatch: while (true) {
    if ((++game.steps & 1023) === 0) yield 0;
    switch(pc) {
    case 0:

    r.bx = memoryAGet16(r.ds, 0x6d8f);
    r.dx = memoryAGet16(r.ds, r.bx + 28003);
    yield* sub_1d08b();
    r.bx = memoryAGet16(r.ds, 0x6d8f);
    memoryASet16(r.ds, 0x6d8f, memoryAGet16(r.ds, 0x6d8f) + 0x0002);
    r.si = memoryAGet16(r.ds, r.bx + 27959);
    yield* sub_1d05b();

      return;
    default: throw new Error("Invalid control flow in sub_1d1e1");
    }
  }
}

function* sub_1d1fd() {
  let pc=0;
  
  dispatch: while (true) {
    if ((++game.steps & 1023) === 0) yield 0;
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
}

function* sub_1d215() {
  let pc=0;
  
  dispatch: while (true) {
    if ((++game.steps & 1023) === 0) yield 0;
    switch(pc) {
    case 0:

    yield* interrupt(0x11);
    if (!(r.ax & 0x1000))
        { pc = 0x1d226; continue dispatch; }
    yield* sub_1d23f();
    if (!flags.carry)
        return;
    yield* sub_1d23f();
    if (!flags.carry)
        return;
case 0x1d226:
    memoryASet16(r.ds, 0x6d8f, 0x0024);
    r.cx = 0x0004;
case 0x1d22f:
    yield* sub_1d1e1();
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
}

function* sub_1d23f() {
  let pc=0;
  
  dispatch: while (true) {
    if ((++game.steps & 1023) === 0) yield 0;
    switch(pc) {
    case 0:

    r.dx = 0x0201;
    out(r.dx, r.al);
    r.ah = 0;
    yield* interrupt(0x1a);
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
    yield* interrupt(0x1a);
    r.dx -= memoryAGet16(r.ds, 0x6dfa);
    if (r.dx < 0x0012)
        { pc = 0x1d24b; continue dispatch; }
    flags.carry = true;

      return;
    default: throw new Error("Invalid control flow in sub_1d23f");
    }
  }
}

function* sub_1d270() {
  let pc=0;
  
  dispatch: while (true) {
    if ((++game.steps & 1023) === 0) yield 0;
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
    yield* sub_18608();
    if (flags.zero)
        { pc = 0x1d288; continue dispatch; }
    r.si = 0x000e;
    r.di = memoryAGet16(r.ds, 0x6f24);
    r.cx = 0x0c03;
    yield* sub_19fcd();
    memoryASet16(r.ds, 0x6f24, memoryAGet16(r.ds, 0x6f24) + 0x01e0);
    r.si = 0x6e10;
    r.di = memoryAGet16(r.ds, 0x6f24);
    r.cx = 0x0c03;
    yield* sub_19fcd();
case 0x1d2ad:
    r.ah = 0;
    yield* interrupt(0x1a);
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
    yield* sub_19fcd();
case 0x1d2ec:
    r.ah = 0;
    yield* interrupt(0x1a);
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
    yield* sub_1cd51();

      return;
    default: throw new Error("Invalid control flow in sub_1d270");
    }
  }
}

function* sub_1d330() {
  let pc=0;
  
  dispatch: while (true) {
    if ((++game.steps & 1023) === 0) yield 0;
    switch(pc) {
    case 0:

    memoryASet(r.ds, 0x70f2, 0x00);

      return;
    default: throw new Error("Invalid control flow in sub_1d330");
    }
  }
}

function* sub_1d336() {
  let pc=0;
  
  dispatch: while (true) {
    if ((++game.steps & 1023) === 0) yield 0;
    switch(pc) {
    case 0:

    r.ah = 0;
    yield* interrupt(0x1a);
    if (r.dx != memoryAGet16(r.ds, 0x70ee))
        { pc = 0x1d341; continue dispatch; }
    return;
case 0x1d341:
    memoryASet16(r.ds, 0x70ee, r.dx);
    yield* sub_1d4d6();
    if (!flags.carry)
        { pc = 0x1d359; continue dispatch; }
    yield* sub_18413();
    yield* sub_1d45b();
    yield* sub_18375();
    memoryASet(r.ds, 0x70f2, 0x00);
    return;
case 0x1d359:
    if (memoryAGet(r.ds, 0x70f2) != 0x00)
        { pc = 0x1d3ce; continue dispatch; }
case 0x1d360:
    yield* sub_1a02d();
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
    yield* sub_1d45b();
    return;
case 0x1d40d:
    r.cx = memoryAGet16(r.ds, 0x70f3);
    r.dl = memoryAGet(r.ds, 0x70f5);
    yield* sub_19ee0();
    memoryASet16(r.ds, 0x70fa, r.ax);
    yield* sub_1d4d6();
    if (flags.carry)
        { pc = 0x1d404; continue dispatch; }
    yield* sub_1d475();
    yield* sub_1d45b();
    yield* sub_1d42a();

      return;
    default: throw new Error("Invalid control flow in sub_1d336");
    }
  }
}

function* sub_1d42a() {
  let pc=0;
  
  dispatch: while (true) {
    if ((++game.steps & 1023) === 0) yield 0;
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
    yield* sub_19efc();

      return;
    default: throw new Error("Invalid control flow in sub_1d42a");
    }
  }
}

function* sub_1d45b() {
  let pc=0;
  
  dispatch: while (true) {
    if ((++game.steps & 1023) === 0) yield 0;
    switch(pc) {
    case 0:

    if (memoryAGet(r.ds, 0x70f7) != 0x00)
        return;
    r.ax = 0xb800;
    r.es = r.ax;
    r.si = 0x70cc;
    r.di = memoryAGet16(r.ds, 0x70f8);
    r.cx = 0x0802;
    yield* sub_19fcd();

      return;
    default: throw new Error("Invalid control flow in sub_1d45b");
    }
  }
}

function* sub_1d475() {
  let pc=0;
  
  dispatch: while (true) {
    if ((++game.steps & 1023) === 0) yield 0;
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
    yield* sub_1d45b();
    r.dx = pop();
    r.cx = pop();
    r.bx = pop();
    yield* sub_1a313();
    yield* sub_1d42a();

      return;
    default: throw new Error("Invalid control flow in sub_1d475");
    }
  }
}

function* sub_1d4d6() {
  let pc=0;
  
  dispatch: while (true) {
    if ((++game.steps & 1023) === 0) yield 0;
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
    yield* sub_1a059();
    if (!flags.carry)
        return;
    memoryASet(r.ds, 0x0571, 0x01);
    memoryASet(r.ds, 0x0576, 0x02);
    memoryASet(r.ds, 0x0578, 0x20);
    memoryASet(r.ds, 0x055b, 0x08);
    r.ax = 0x091d;
    r.bx = 0x0ce4;
    yield* sub_1cb6b();
    flags.carry = true;

      return;
    default: throw new Error("Invalid control flow in sub_1d4d6");
    }
  }
}
const original_sub_19f65=sub_19f65;
sub_19f65=function*() {
  colorArt.beginBlit('sub_19f65');
  try {yield* original_sub_19f65();} finally {colorArt.endBlit();}
};

const original_sub_19efc=sub_19efc;
sub_19efc=function*() {
  colorArt.beginBlit('sub_19efc');
  try {yield* original_sub_19efc();} finally {colorArt.endBlit();}
};

const original_sub_19fcd=sub_19fcd;
sub_19fcd=function*() {
  if(r.es===0xb800)colorArt.skinStatic(r.ds,r.si,r.cx);
  yield* original_sub_19fcd();
};

const original_sub_1b1ce=sub_1b1ce;
sub_1b1ce=function*() {
  yield* original_sub_1b1ce();
  colorArt.captureCheese();
};
