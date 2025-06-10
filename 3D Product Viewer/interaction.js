import * as THREE from './three.module.js';

export function setupInteractions(scene, camera, renderer) {
  const raycaster = new THREE.Raycaster();
  const mouse = new THREE.Vector2();

  // Add DOM element for popup
  let popup = document.getElementById('popup');
  if (!popup) {
    popup = document.createElement('div');
    popup.id = 'popup';
    popup.style.position = 'absolute';
    popup.style.display = 'none';
    popup.style.background = 'rgba(0, 0, 0, 0.8)';
    popup.style.color = 'white';
    popup.style.padding = '4px 8px';
    popup.style.borderRadius = '4px';
    popup.style.fontSize = '14px';
    document.body.appendChild(popup);
  }

  window.addEventListener('click', (event) => {
    mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
    mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

    raycaster.setFromCamera(mouse, camera);
    const intersects = raycaster.intersectObjects(scene.children);

    if (intersects.length > 0) {
      const clicked = intersects[0].object;
      const originalColor = clicked.material.color.clone();
      const originalScale = clicked.scale.clone();

      // Color flash
      clicked.material.color.set(	0x381819); // Highlight orange
      clicked.scale.multiplyScalar(1.2);    // Scale up

      // Show popup near mouse
      popup.innerText = `${clicked.name}: `;
      popup.style.left = `${event.clientX + 10}px`;
      popup.style.top = `${event.clientY + 10}px`;
      popup.style.display = 'block';

      // Restore after 500ms
      setTimeout(() => {
        clicked.material.color.copy(originalColor);
        clicked.scale.copy(originalScale);
        popup.style.display = 'none';
      }, 500);
    }
  });
}
