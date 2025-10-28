// 🐢 sprite_registry.js — OO_Turtles (v1.0)
// Runtime linkage between logical turtle classes and ArtDirector_node assets

// Import YAML manifest (requires a bundler or loader that supports YAML imports;
// if running vanilla browser JS, you can pre-load this as a JSON object)
import manifest from '../assets/manifests/prompts/graphic_asset_prompt_manifest_v1.yaml';

// Build a map: { speciesId -> [assetPaths] }
const SPRITE_MAP = Object.fromEntries(
  manifest.species.map(s => [s.id, s.assets])
);

// Optional helper: retrieve sprite list by class name or species ID
function getSpritesFor(species) {
  if (!species) return [];
  const key = species.toLowerCase();
  return SPRITE_MAP[key] || [];
}

// Export for use in turtle classes or renderer
export { SPRITE_MAP, getSpritesFor };

// ---------------------------------------------------------------------------
// Usage example inside turtles.js:
//
// import { getSpritesFor } from './sprite_registry.js';
//
// class RedEaredSlider extends Turtle {
//   constructor(...args) {
//     super(...args);
//     this.sprites = getSpritesFor('redearedslider');
//   }
// }
// ---------------------------------------------------------------------------
