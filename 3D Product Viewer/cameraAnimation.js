export function setupCameraAnimation(camera) {
  window.addEventListener('mousedown', () => autoRotate = false);
  window.addEventListener('mouseup', () => setTimeout(() => autoRotate = true, 3000));
}
