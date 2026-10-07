# Color art

`alley.png` and `rooms.png` were generated from screenshots of the supplied
game, using a warm DOS/Amiga pixel-art direction. They are material and color
references, not collision maps. The room atlas has two columns and four rows,
ordered: living room, aquarium, bookcase, cheese, birdcage, dogs, romance, title.
The generator changed the romance composition; the renderer uses the original
heart and ornamental masks, and transfers colors only.

`original-reference-atlas.png` is the contact sheet supplied as visual guidance.
`alley-native.png` (320×200) and `rooms-native.png` (640×800) are compact,
nearest-neighbor game rasters prepared by `tools/prepare-art.cjs`. All art is
embedded in the single-file build; no online image service is used at runtime.

The final game uses original pixel masks to prevent generated art from
changing object sizes, platform heights, or the feel of animation. The
background, furniture, characters and room colors are applied by
`src/color-art.js`. The original CGA framebuffer is retained in full.
