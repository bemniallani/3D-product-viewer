import * as THREE from './three.module.js';

export function createProduct(scene) {
  const mainMaterial = new THREE.MeshStandardMaterial({
    color: 0x2E1E1E,
    roughness: 0.4,
    metalness: 0.2
  });

  const body = new THREE.Mesh(new THREE.SphereGeometry(1, 32, 32), mainMaterial);
  body.position.y = 1;
  body.name = 'Body';
  scene.add(body);

  const neck = new THREE.Mesh(new THREE.CylinderGeometry(0.3, 0.3, 1.2, 32), mainMaterial);
  neck.position.y = 2.2;
  neck.name = 'Neck';
  scene.add(neck);

  const lid = new THREE.Mesh(new THREE.ConeGeometry(0.25, 0.4, 32), mainMaterial);
  lid.position.y = 2.9;
  lid.name = 'Lid';
  scene.add(lid);

  const spout = new THREE.Mesh(new THREE.CylinderGeometry(0.1, 0.1, 1.6, 32), mainMaterial);
  spout.rotation.z = Math.PI / 1.45;
  spout.position.set(0.7, 1.15, 0);
  spout.name = 'Spout';
  scene.add(spout);

  const handle = new THREE.Mesh(new THREE.TorusGeometry(0.8, 0.05, 16, 100, Math.PI), mainMaterial);
  handle.rotation.z = Math.PI / 2;
  handle.position.set(-0.3, 1.5, 0);
  handle.name = 'Handle';
  scene.add(handle);
}
