import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

const scene = new THREE.Scene();
const boxarea = document.getElementById("box");

const geomodel = new THREE.CapsuleGeometry( 1, 1, 4, 8, 1 );
const material = new THREE.MeshBasicMaterial({ color: "red",
    wireframe: true
 });
const box = new THREE.Mesh(geomodel, material);
scene.add(box);

const size = {
    width: 700,
    height: 500
};

const camera = new THREE.PerspectiveCamera(75, size.width / size.height, 0.1, 1000);
camera.position.set(1, 1, 5);

const control = new OrbitControls(camera, boxarea);
control.enableDamping = true;

const renderer = new THREE.WebGLRenderer({
    canvas: boxarea
});
renderer.setSize(size.width, size.height);

// Ab OrbitControls sahi kaam karega


const tick = () => {
    box.rotation.x += 0.012;
    box.rotation.y += 0.012;
    box.rotation.z += 0.012;
    control.update();

    renderer.render(scene, camera);
    window.requestAnimationFrame(tick);
}

tick();