import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { GUI } from 'three/examples/jsm/libs/lil-gui.module.min.js'; // Use lil-gui

// --- Basic Scene Setup ---
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);
renderer.shadowMap.enabled = true; // Enable shadows for more realistic lighting

const controls = new OrbitControls(camera, renderer.domElement);
camera.position.set(5, 5, 10);
controls.update();

// --- Floor (Plane) ---
const planeGeometry = new THREE.PlaneGeometry(20, 20);
const planeMaterial = new THREE.MeshStandardMaterial({ color: 0xaaaaaa, side: THREE.DoubleSide });
const plane = new THREE.Mesh(planeGeometry, planeMaterial);
plane.rotation.x = -Math.PI / 2;
plane.receiveShadow = true; // Plane can receive shadows
scene.add(plane);

// --- Meshes (Sphere, Box, Torus) ---
const material = new THREE.MeshStandardMaterial({ color: 0x00ff00, roughness: 0.4, metallic: 0.1 }); // Physically based material

const sphere = new THREE.Mesh(new THREE.SphereGeometry(1, 32, 32), material);
sphere.position.set(-3, 1, 0);
sphere.castShadow = true;
sphere.receiveShadow = true;
scene.add(sphere);

const box = new THREE.Mesh(new THREE.BoxGeometry(1.5, 1.5, 1.5), material);
box.position.set(0, 0.75, 0);
box.castShadow = true;
box.receiveShadow = true;
scene.add(box);

const torus = new THREE.Mesh(new THREE.TorusGeometry(1, 0.4, 16, 100), material);
torus.position.set(3, 1.2, 0);
torus.castShadow = true;
torus.receiveShadow = true;
scene.add(torus);

// --- Lights ---
const ambientLight = new THREE.AmbientLight(0xffffff, 0.5); // Soft white light
scene.add(ambientLight);

const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
directionalLight.position.set(5, 10, 7.5);
directionalLight.castShadow = true;
scene.add(directionalLight);

const pointLight = new THREE.PointLight(0xffffff, 1, 50); // Light from a single point in all directions
pointLight.position.set(-5, 5, 0);
pointLight.castShadow = true;
scene.add(pointLight);

// Optional: Light helpers to visualize light positions
// scene.add(new THREE.DirectionalLightHelper(directionalLight, 1));
// scene.add(new THREE.PointLightHelper(pointLight, 0.5));

// --- GUI Setup ---
const gui = new GUI();

// Ambient Light Controls
const ambientFolder = gui.addFolder('Ambient Light');
ambientFolder.add(ambientLight, 'intensity', 0, 2, 0.1).name('Intensity');
ambientFolder.add(ambientLight, 'visible').name('Toggle On/Off');

// Directional Light Controls
const directionalFolder = gui.addFolder('Directional Light');
directionalFolder.add(directionalLight, 'intensity', 0, 2, 0.1).name('Intensity');
directionalFolder.add(directionalLight, 'visible').name('Toggle On/Off');
directionalFolder.add(directionalLight.position, 'x', -10, 10, 0.1).name('Position X');
directionalFolder.add(directionalLight.position, 'y', -10, 10, 0.1).name('Position Y');
directionalFolder.add(directionalLight.position, 'z', -10, 10, 0.1).name('Position Z');

// Point Light Controls
const pointFolder = gui.addFolder('Point Light');
pointFolder.add(pointLight, 'intensity', 0, 3, 0.1).name('Intensity');
pointFolder.add(pointLight, 'visible').name('Toggle On/Off');
pointFolder.add(pointLight.position, 'x', -10, 10, 0.1).name('Position X');
pointFolder.add(pointLight.position, 'y', -10, 10, 0.1).name('Position Y');
pointFolder.add(pointLight.position, 'z', -10, 10, 0.1).name('Position Z');

// Material Controls (Optional but good for playground)
const materialFolder = gui.addFolder('Material');
materialFolder.add(material, 'roughness', 0, 1, 0.01).name('Roughness');
materialFolder.add(material, 'metalness', 0, 1, 0.01).name('Metalness');

// --- Animation Loop ---
function animate() {
    requestAnimationFrame(animate);
    controls.update();
    renderer.render(scene, camera);
}

animate();

// Handle window resize
window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});
