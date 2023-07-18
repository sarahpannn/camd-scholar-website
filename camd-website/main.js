import * as THREE from 'three';
import'./style.css';
import gsap from 'gsap';
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls';

// Scene
const scene = new THREE.Scene();

// Create a torus knot
const geometry = new THREE.TorusKnotGeometry(2.5, 1, 150, 16, 4, 5);
// const geometry = new THREE.SphereGeometry(3, 64, 64);

// This hex code represents a vibrant magenta color and can be seen as a 
// combination of red and blue, symbolizing the convergence of human intelligence 
// (represented by red) and machine intelligence (represented by blue) in the 
// field of AI. The green component is absent, indicating that AI extends beyond 
// the traditional realm of natural processes.
const material = new THREE.MeshPhongMaterial({ color: "#FF00FF" });
const mesh = new THREE.Mesh(geometry, material);
scene.add(mesh);

// Sizes
const sizes = {
  width: window.innerWidth,
  height: window.innerHeight,
}

// Light
const light = new THREE.PointLight(0xffffff, 1, 100);
light.position.set(0, 10, 10);
scene.add(light);

// Camera
const camera = new THREE.PerspectiveCamera(
  45, 
  sizes.width / sizes.height, 
  0.1, 
  100);
camera.position.z = 20;
scene.add(camera)

// Renderer
const canvas = document.querySelector('.webgl');
const renderer = new THREE.WebGLRenderer({ canvas });
renderer.setSize(sizes.width, sizes.height);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
renderer.render(scene, camera);

// Controls
const controls = new OrbitControls(camera, canvas);
controls.enableDamping = true;
controls.enablePan = false;
controls.enableZoom = false;
// controls.autoRotate = true;
// controls.autoRotateSpeed = 0.5;

// Resize
window.addEventListener('resize', () => {
  sizes.width = window.innerWidth;
  sizes.height = window.innerHeight;
  // Update camera
  camera.aspect = sizes.width / sizes.height;
  camera.updateProjectionMatrix();
  renderer.setSize(sizes.width, sizes.height);
})



const loop = () => {
  controls.update();
  mesh.rotation.x += 0.005;
  mesh.rotation.y += 0.003;
  renderer.render(scene, camera);
  window.requestAnimationFrame(loop);
}
loop()


const tl = gsap.timeline({defaults: {durations : 1}});
tl.fromTo(mesh.scale, {x: 0, y: 0, z: 0}, {x: 1, y: 1, z: 1})
tl.fromTo('nav', {y:"-100%"}, {y:"0%"})
tl.fromTo(".title", {opacity:0}, {opacity:1})