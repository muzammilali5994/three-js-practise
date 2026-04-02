const scene = new THREE.Scene();

const geomodel = new THREE.BoxGeometry(2,2,2);
const material = new THREE.MeshBasicMaterial({color:"red"});

const box = new THREE.Mesh(geomodel,material);

scene.add(box);

const size = {
    width:700,
    height:500
}
const camera = new THREE.PerspectiveCamera(75, size.width / size.height, 0.1, 1000)
camera.position.z=4;
camera.position.x=2;

scene.add(camera);

const boxarea = document.getElementById("box");

const renderer = new THREE.WebGLRenderer({
    canvas: boxarea // This connects the code to your <canvas id="box">
});
renderer.setSize(size.width,size.height);

renderer.render(scene,camera);
