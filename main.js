
import * as THREE from 'three';

import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
// import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
// const loader = new GLTFLoader();

const container = document.getElementById('three-container');
const width = container.clientWidth;
const height = container.clientHeight;

const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);

camera.position.set(0, 0, 20);
camera.lookAt(0, 0, 0);

const renderer = new THREE.WebGLRenderer();
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
renderer.setSize(width, height);
renderer.setAnimationLoop(animate);

container.appendChild(renderer.domElement);


const scene = new THREE.Scene();

const cubeGeometry = new THREE.BoxGeometry(4, 2, 2);
const cubeMaterial = new THREE.MeshBasicMaterial({ color: 0x0000ff });
const cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
scene.add(cube);


// const points = [];
// points.push(new THREE.Vector3(- 10, 0, 0));
// points.push(new THREE.Vector3(0, 10, 0));
// points.push(new THREE.Vector3(10, 0, 0));

const coords = [
  [-10, 0, 0],
  [0, 10, 0],
  [10, 0, 0]
];
const points = coords.map(c => new THREE.Vector3(...c));

const lineGeometry = new THREE.BufferGeometry().setFromPoints(points);
const lineMaterial = new THREE.LineBasicMaterial({ color: 0x00ff00 });
const line = new THREE.Line(lineGeometry, lineMaterial);
scene.add(line);


const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true; // 启用惯性
controls.enablePan = true;    // 启用平移
controls.enableZoom = true;   // 启用缩放
controls.target.set(0, 0, 0); // 设置旋转中心点为原点


function animate(time) {
  scene.rotation.y += 0.01; // 每帧绕 y 轴增加一点旋转
  controls.update();
  renderer.render(scene, camera);
}

function Resize() {
  const width = container.clientWidth;
  const height = container.clientHeight;
  camera.aspect = width / height;
  camera.updateProjectionMatrix();
  renderer.setSize(width, height);
}
Resize();
window.addEventListener('resize', Resize);

// render();





