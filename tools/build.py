"""Translate Alley Cat's recovered routines into cooperative JavaScript.

The program's control flow is compiled ahead of time, not decoded at runtime.
Assets come from the user-supplied executable, verified against the reference.
"""
from pathlib import Path
import base64
import hashlib
import json
import re

ROOT = Path(__file__).resolve().parent.parent
EXPECTED = '4979c8867826e08881d1d4bec95c95d6bc1ac70fd21050ccdb4f733a50d7bfdd'
binary = (ROOT / 'reference/game.exe').read_bytes()
assert hashlib.sha256(binary).hexdigest() == EXPECTED, 'Wrong game version'
source = (ROOT / 'reference/cat.cpp').read_text()
source = re.sub(r'/\*.*?\*/|//[^\n]*', '', source, flags=re.S)
registers = r'\b(ax|bx|cx|dx|ah|bh|ch|dh|al|bl|cl|dl|si|di|bp|sp|cs|ds|es|ss|tx|tl)\b'
functions = []
routine_pcs = {}
routine_calls = {}
for match in re.finditer(r'void (\w+)\(\)\s*\{', source):
    name = match[1]
    depth, pos = 1, match.end()
    begin = pos
    while depth:
        depth += (source[pos] == '{') - (source[pos] == '}')
        pos += 1
    body = source[begin:pos-1]
    if name == 'start':
        body = 'r.cs=0x1723; r.ds=0x1713; r.es=0x1713; r.ss=0x1000; r.sp=0x100; yield* sub_17230();'
    elif name == 'sub_185e7':
        # The original PIT counter counts DOWN at 1.193182 MHz.
        body = 'yield 1; r.ax=(0x10000-Math.floor(game.time()*1193.182)) & 0xffff;'
    else:
        # Expand the single recovered jump table before converting labels.
        body = re.sub(r'switch \(bx\)\s*\{(.*?)\}', lambda m: '\n'.join(
            f'if (bx == {n}) goto {target};' for n, target in
            re.findall(r'case (\d+): goto (\w+);', m[1])) + '\nthrow new Error("Invalid room dispatch");', body, flags=re.S)
        body = re.sub(r'\b(sub_[0-9a-f]+)\(\);', r'yield* \1();', body)
        body = body.replace('sync();', 'yield 1;')
        body = re.sub(r'interrupt\(([^)]*)\);', r'yield* interrupt(\1);', body)
        body = re.sub(r'in\((\w+),\s*([^)]*)\);', r'\1 = portRead(\2);', body)
        body = re.sub(r'\bmul\(', 'mul8(', body)
        body = re.sub(r'(\w+)<[^>]+>\(', r'\1(', body)
        # rcr has both byte and word overloads in the recovered C++.
        body = body.replace('rcr(memoryAGet16', 'rcr16(memoryAGet16')
        body = re.sub(registers, r'r.\1', body)
        body = re.sub(r'goto (loc_[0-9a-f]+);', lambda m:
            '{ pc = 0x' + m[1][4:] + '; continue dispatch; }', body)
        body = re.sub(r'^(loc_[0-9a-f]+):', lambda m: 'case 0x' + m[1][4:] + ':', body, flags=re.M)
    if name == 'sub_1cee0':
        # Advertise readiness only after initialization and input capture.
        body = body.replace('case 0x1cfa1:', 'case 0x1cfa1: game.phase="title";')
    before_loop = ''
    if name == 'sub_1d115':
        # The browser always supplies keyboard-equivalent input. Skip the DOS
        # hardware joystick question, clear the screen, then print difficulty.
        before_loop = '''yield* sub_1cd51();
  yield* sub_1d1fd();
  memoryASet(r.ds, 0x069b, 0);
  memoryASet16(r.ds, 0x6d8f, 2);
  pc = 0x1d14c;'''
        body = body.replace('case 0x1d127:', 'case 0x1d127: game.phase="keyboard";')
        body = body.replace('case 0x1d159:', 'case 0x1d159: game.phase="difficulty";')
        body = body.replace('case 0x1d1c3:', 'case 0x1d1c3: game.phase="ready";')
    if name == 'sub_17230':
        body = body.replace('case 0x172de:', 'case 0x172de: game.phase="booting";')
        body = body.replace('case 0x17385:', 'case 0x17385: game.phase="playing";')
        body = body.replace('case 0x173e7:', 'case 0x173e7: game.phase="entering";')
        for label in ['174ae','174f5','17549','17594','175e2','1762a','176a8']:
            body = body.replace('case 0x'+label+':', 'case 0x'+label+': game.phase="playing";')
    if name == 'sub_1d0a0':
        body = 'game.phase="paused";\n' + body + '\ngame.phase="playing";'
    # Keep a separate color layer through the original save/restore blitters.
    # The game RAM and the CGA raster remain the authoritative simulation.
    if name in ('sub_19f65', 'sub_19efc', 'sub_1a569'):
        body = body.replace('memoryASet16(r.ds, r.bp, r.bx);',
            'memoryASet16(r.ds, r.bp, r.bx); colorArt.saveWord(r.ds,r.bp,r.es,r.di);')
        body = body.replace('stosw();',
            'colorArt.paintWord(r.es,r.di,r.ds,r.si-2); colorArt.writing=true; stosw(); colorArt.writing=false;')
    # Each cooperative yield and call gets an explicit continuation. The
    # native generator stack can then be rebuilt without replaying gameplay.
    continuation = 0x200000
    calls = {}
    def resumable(match):
        global continuation
        call = match[0].startswith('yield*')
        statement = match[0]
        continuation += 1
        at = continuation
        if call:
            calls[at] = re.search(r'yield\* (\w+)', statement)[1]
            continuation += 1
            after = continuation
            return f'frame.pc={at};\ncase {at}:\n{statement}\nframe.pc={after};\ncase {after}:;'
        value = re.search(r'yield\s+(\d)', statement)[1]
        return f'frame.pc={at};frame.parked={value};{statement}\ncase {at}: frame.parked=null;'
    body = re.sub(r'yield\* (?:sub_[0-9a-f]+|interrupt)\([^;]*\);|yield [01];', resumable, body)
    # Initialization before dispatch is itself made resumable, so restoring
    # the difficulty screen never clears it or replays its setup.
    if before_loop:
        before_loop = re.sub(r'pc = (0x[0-9a-f]+);', r'{pc=\1;continue dispatch;}', before_loop)
        body = re.sub(r'yield\* (?:sub_[0-9a-f]+|interrupt)\([^;]*\);', resumable, before_loop) + '\n' + body
    routine_pcs[name] = [0] + [int(pc, 0) for pc in re.findall(r'case (0x[0-9a-f]+|\d+):', body)]
    routine_calls[name] = calls
    functions.append(f'''function* {name}() {{
  let pc=0;
  const frame=execution.enter('{name}',pc);pc=frame.pc;
  let skipBudget=frame.budget || execution.restoring;
  try {{
  if(execution.restoring && execution.pending.length===0) {{
    execution.restoring=false;
    if(frame.parked!==null) {{yield frame.parked;frame.parked=null;frame.budget=false;}}
  }}
  dispatch: while (true) {{
    if (!skipBudget && (++game.steps & 1023) === 0) {{
      frame.pc=pc;frame.budget=true;frame.parked=0;yield 0;
      frame.parked=null;frame.budget=false;
    }}
    skipBudget=false;
    switch(pc) {{
    case 0:
{body}
      return;
    default: throw new Error("Invalid control flow in {name}");
    }}
  }}
  }} finally {{execution.leave(frame);}}
}}''')
translated = '\n\n'.join(functions)
translated = '\n'.join(line.rstrip() for line in translated.split('\n'))
# Wrap only presentation blitters. Their registers, branches and RAM writes
# still come from the unmodified recovered routines.
for name in ('sub_19f65', 'sub_19efc'):
    translated += f'''\nconst original_{name}={name};
{name}=function*() {{
  if(!execution.restoring)colorArt.beginBlit('{name}');
  try {{yield* original_{name}();}} finally {{colorArt.endBlit();}}
}};\n'''
translated += '''\nconst original_sub_19fcd=sub_19fcd;
sub_19fcd=function*() {
  if(!execution.restoring && r.es===0xb800)colorArt.skinStatic(r.ds,r.si,r.cx);
  if(!execution.restoring)colorArt.beginBlit('sub_19fcd');
  else if(colorArt.blits.at(-1)?.name!=='sub_19fcd')colorArt.blits.push({name:'sub_19fcd',kind:null,width:0,height:0,source:0,bytes:new Uint8Array()});
  try {yield* original_sub_19fcd();}finally {colorArt.endBlit();}
};\n'''
translated += '''\nconst original_sub_1a569=sub_1a569;
sub_1a569=function*() {
  if(!execution.restoring) {
    let index=memoryAGet16(r.ds,0x327a),source=memoryAGet16(r.ds,index+12896);
    if(!source)source=memoryAGet16(r.ds,12896);
    colorArt.beginBlit('sub_1a569',{caller:'sub_1a569',source,width:16,height:30,es:0xb800,di:memoryAGet16(r.ds,0x3284)});
  }
  else if(colorArt.blits.at(-1)?.name!=='sub_1a569')colorArt.blits.push({name:'sub_1a569',kind:null,width:0,height:0,source:0,bytes:new Uint8Array()});
  try {yield* original_sub_1a569();}finally {colorArt.endBlit();}
};\n'''
translated += '''\nconst original_sub_1b1ce=sub_1b1ce;
sub_1b1ce=function*() {
  yield* original_sub_1b1ce();
  colorArt.captureCheese();
};\n'''
translated += '\nconst ROUTINES={' + ','.join(routine_pcs) + '};\n'
translated += 'const ROUTINE_PCS=' + json.dumps(routine_pcs) + ';\n'
translated += 'const ROUTINE_CALLS=' + json.dumps(routine_calls) + ';\n'
(ROOT / 'src/routines.js').write_text('// Ahead-of-time translation of the matching Alley Cat binary.\n' + translated)
encoded = base64.b64encode(binary).decode()
assets = f'const GAME_BYTES = Uint8Array.from(atob("{encoded}"), c=>c.charCodeAt(0));\n'
# A standard IBM PC ROM font is needed by the original BIOS teletype calls.
assets += (ROOT / 'src/font.js').read_text()
art_assets = {}
for key, file in [('alley','alley-native.png'), ('rooms','rooms-native.png')]:
    path = ROOT/'art'/file
    if path.exists():
        art_assets[key] = 'data:image/png;base64,' + base64.b64encode(path.read_bytes()).decode()
assets += 'const COLOR_ART_ASSETS = ' + json.dumps(art_assets) + ';\n'
hd_assets={key:'data:image/webp;base64,'+base64.b64encode((ROOT/'art/hd'/f'{key}.webp').read_bytes()).decode() for key in ['alley','rooms','sprites','props','furniture','details','materials','animation']}
assets += 'const HD_ART_ASSETS = ' + json.dumps(hd_assets) + ';\n'
piano_assets={path.stem:base64.b64encode(path.read_bytes()).decode() for path in sorted((ROOT/'audio/piano').glob('*.mp3'))}
assets += 'const PIANO_ASSETS = ' + json.dumps(piano_assets) + ';\n'
parts = [assets, (ROOT/'src/engine.js').read_text(), (ROOT/'src/color-art.js').read_text(),
         (ROOT/'src/hd-art.js').read_text(), (ROOT/'src/piano.js').read_text(),
         translated, (ROOT/'src/saves.js').read_text(), (ROOT/'src/app.js').read_text()]
template = (ROOT/'src/page.html').read_text()
html = template.replace('/* INLINE_STYLE */', (ROOT/'src/style.css').read_text())
html = html.replace('/* INLINE_GAME */', '\n'.join(parts))
(ROOT/'alley-cat.html').write_text(html)
(ROOT/'index.html').write_text(html)
print(f'Built {len(functions)} JavaScript routines; self-contained page: {len(html):,} bytes')
