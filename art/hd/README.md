# Hand-drawn HD presentation assets

Generated watercolor and ink masters: `alley.png`, `rooms.png`, `sprites.png`,
`props.png`, `furniture.png`, `details.png`, `materials.png`, `animation.png`,
and the isolated clothesline pose `hanging.png`.
The corresponding WebP files are embedded in the standalone HTML.

The alley master includes weathered fence graffiti. The playable renderer
retains the original game's graffiti coordinates and lettering through native
raster brush anchors, rather than replacing the fence with a whole generated
scene. Window, furniture, cheese-hole and character art is fitted to native
positions and bounding rectangles. Generated room compositions are donors,
not new collision maps or level layouts.

`src/hd-art.js` renders at 1280×800 inside the same corrected 4:3 display.
Character movement is interpolated visually between native updates. The animation atlas supplies four cat walk, four terrier run and four goldfish swim frames, plus jumping, falling, swimming and swatting cat poses. Actor identity comes from recovered drawing routines and native entity slots, including the fish copy blitter and the custom broom drawing loop. Native
RAM, input, sprite masks, collision geometry and animation timing are unchanged.
Horizontal clothesline movement is a separate browser control improvement;
the HD renderer keeps its original hanging mask and smooths movement along it.
The animation sheet has uneven rows and columns, so extraction uses its
transparent gutters rather than an equal grid. The static donor sheet uses
individual source rectangles so the mouse has no neighboring cat paw and the
broom retains its full handle. The isolated hanging illustration is anchored
to the original clothesline sprite rectangle. Partially visible jump
sprites crop the corresponding illustration rows at their full original scale.
Background provenance follows the original save/restore blitters, and browser
checkpoints preserve the HD presentation state too.

To refresh the compact assets after replacing masters:

```sh
node tools/prepare-hd.cjs
python3 tools/build.py
```

The optional conversion step needs Playwright and Chromium. It only encodes
PNG masters as WebP; it does not edit their artwork.
