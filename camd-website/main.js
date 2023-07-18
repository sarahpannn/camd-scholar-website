import * as THREE from 'three';

// Scene
const scene = new THREE.Scene();

// Create a torus knot
const geometry = new THREE.TorusKnotGeometry(3, 1, 150, 16, 4, 5);
// const geometry = new THREE.SphereGeometry(3, 64, 64);

// This hex code represents a vibrant magenta color and can be seen as a 
// combination of red and blue, symbolizing the convergence of human intelligence 
// (represented by red) and machine intelligence (represented by blue) in the 
// field of AI. The green component is absent, indicating that AI extends beyond 
// the traditional realm of natural processes.
const material = new THREE.MeshStandardMaterial({ color: "#FF00FF" });
const mesh = new THREE.Mesh(geometry, material);
scene.add(mesh);

// Light
const light = new THREE.PointLight(0xffffff, 1, 100);
light.position.set(0, 10, 10);
scene.add(light);

// Camera
const camera = new THREE.PerspectiveCamera(45, 800 /600);
camera.position.z = 20;
scene.add(camera)

// Renderer
const canvas = document.querySelector('.webgl');
const renderer = new THREE.WebGLRenderer({ canvas });
renderer.setSize(800, 600);
renderer.render(scene, camera);
