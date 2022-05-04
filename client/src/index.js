import * as THREE from 'https://unpkg.com/three@0.140.0/build/three.module.js';
import RENDERER from './modules/renderer/renderer.js';
import ASSETS from './modules/atlas/assets.js';

export default {
  THREE:THREE,
  ASSETS:ASSETS,
};
ASSETS.load().then(assets => {
  console.log(assets)
});

RENDERER.init();