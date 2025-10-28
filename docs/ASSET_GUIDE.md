/docs/ASSET_GUIDE.md
🎨 Visual Asset Guide — OO_Turtles
Purpose

Defines the art direction, naming scheme, and prompt style for Sora / diffusion asset generation.

1. Style Guide

Look & Feel: Naturalistic 16-bit sprite aesthetic; real species colors with diagram clarity.

Lighting: Neutral overhead, soft shadow.

Perspective: ¾ top down for consistency across species.

Resolution: 128×128 px base; scalable to 256×256.

Format: PNG with transparent background + WebP fallback.

2. Directory Layout

```
src/assets/sprite_turtles/
│
├─ redearedslider/
│   ├─ sprite_red_eared_slider.png
│   └─ sprite_red_eared_slider_alt.png
├─ mdeserttortoise/
│   ├─ sprite_mdesert_tortoise.png
│   └─ sprite_mdesert_tortoise_alt.png
├─ commonsnapping/
│   ├─ sprite_snapping_turtle.png
│   └─ sprite_snapping_turtle_alt.png
└─ NAWood/
    ├─ sprite_NAWood_turtle.png
    └─ sprite_NAWood_turtle_alt.png
```

3. Prompt Composition Checklist (for Sora)

Each prompt should include:

species name + identifier (e.g., “Desert Tortoise 16-bit sprite”),

perspective (¾ view),

lighting and environment context (“neutral studio light, isolated background”),

art style (“pixel art, SNES era palette, clean outline”),

optional action (“walking animation frame 1”).

4. File Naming Convention

[sprite]_[species]_[variant|v###].png
Examples:

sprite_red_eared_slider_alt.png

sprite_mdesert_tortoise_v002.png

5. Future Assets

background_water_surface.png

background_sandbank.png

ui_overlay_hud.png
These will share the same palette and lighting parameters.

✅ Status: All four species sprites complete (v002).
Next: integrate prompt manifests and animation frames.
