import * as THREE from './three.module.js';
import { OrbitControls } from './OrbitControls.js';

import { initScene } from './initScene.js';
import { createProduct } from './createProduct.js';
import { addLighting } from './addLighting.js';
import { setupInteractions } from './interaction.js';
import { setupCameraAnimation } from './cameraAnimation.js';

let scene, camera, renderer, controls, clock;
let autoRotate = true;

// Call the shared initScene function and receive setup variables
({ scene, camera, renderer, controls, clock } = initScene(THREE, OrbitControls));

createProduct(scene);
addLighting(scene);
setupInteractions(scene, camera, renderer);
setupCameraAnimation(camera);
animate();

function animate() {
  requestAnimationFrame(animate);
  const elapsed = clock.getElapsedTime();

  if (autoRotate) {
    camera.position.x = Math.sin(elapsed * 0.5) * 6;
    camera.position.z = Math.cos(elapsed * 0.5) * 6;
    camera.lookAt(0, 1.5, 0);
  } else {
    controls.update();
  }

  renderer.render(scene, camera);
}
