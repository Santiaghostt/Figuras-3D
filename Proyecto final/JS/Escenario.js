const scene = new THREE.Scene();
var loader = new THREE.TextureLoader()
loader.load('../imagenes/fondo.png', function(textura){
	scene.background = textura;
});

//camara
const camera = new THREE.PerspectiveCamera(90, window.innerWidth / window.innerHeight, 0.1, 1000);

//render
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

//modelo 3d
const gltfLoader = new THREE.GLTFLoader();

//Baogan
gltfLoader.load('../modelos/Baogan/scene.gltf',
(gltf) =>{
    var loaderObjeto = gltf.scene;
    loaderObjeto.scale.set(30,30,30);

    loaderObjeto.position.z = 450;
    loaderObjeto.position.y = -100;
    loaderObjeto.position.x = -30;
    scene.add(loaderObjeto);

    console.log('carga completa');
    
//Dragcontrols

const DragControls = new THREE.DragControls( [loaderObjeto], camera, renderer.domElement );
DragControls.deactivate();
DragControls.activate();

}, ()=>{
    console.log('cargando');
}, ()=>{
    console.log('error');
}
); 

//Evita
gltfLoader.load('../modelos/Evita/scene.gltf',
(gltf) =>{
    var loaderObjeto2 = gltf.scene;
    loaderObjeto2.scale.set(150,150,150);

    loaderObjeto2.position.y =-320;
    loaderObjeto2.position.z =10;
    loaderObjeto2.position.x =-1100;
    scene.add(loaderObjeto2);
    
    console.log('carga completa');

//Dragcontrols

const DragControls1 = new THREE.DragControls( [loaderObjeto2], camera, renderer.domElement );
DragControls1.deactivate();
DragControls1.activate();

}, ()=>{
    console.log('cargando');
}, ()=>{
    console.log('error');
}
);

//Evito
gltfLoader.load('../modelos/Evito/scene.gltf',
(gltf) =>{
    var loaderObjeto3 = gltf.scene;
    loaderObjeto3.scale.set(300,300,300);
    loaderObjeto3.position.z =90;
    loaderObjeto3.position.y =-700;
    loaderObjeto3.position.x =582;
    scene.add(loaderObjeto3);
    
    console.log('carga completa');

//Dragcontrols

const DragControls2 = new THREE.DragControls( [loaderObjeto3], camera, renderer.domElement );
DragControls2.deactivate();
DragControls2.activate();

}, ()=>{
    console.log('cargando');
}, ()=>{
    console.log(error);
}
);

//luces
const Light1 = new THREE.DirectionalLight(0xffffff, 1)
Light1.position.set(6,6,6)
scene.add(Light1)

const luz = new THREE.AmbientLight(0xffffff,1)
scene.add(luz)

camera.position.z = 950;

function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
}
animate();
