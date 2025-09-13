const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(500, window.innerWidth / window.innerHeight, 0.1, 1000);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setAnimationLoop(animate);
document.body.appendChild(renderer.domElement);

// Box
const cubegeometry = new THREE.BoxGeometry(1, 1, 1);
const cubematerial = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
const cube = new THREE.Mesh( cubegeometry, cubematerial);
scene.add( cube );

// Cone
const conegeometry = new THREE.ConeGeometry( 1, 2, 6 ); 
const conematerial = new THREE.MeshBasicMaterial( {color: 0xffff00} );
const cone = new THREE.Mesh( conegeometry, conematerial ); 
cone.position.x = 3;
scene.add( cone );

// Cylinder
const cylindergeometry = new THREE.CylinderGeometry( 1, 1, 2, 6 ); 
const cylindermaterial = new THREE.MeshBasicMaterial( {color: 0x0000ff} ); 
const cylinder = new THREE.Mesh( cylindergeometry, cylindermaterial ); 
cylinder.position.x = -3;
scene.add( cylinder );

// Sphere
const spheregeometry = new THREE.SphereGeometry( 1, 18, 16 ); 
const spherematerial = new THREE.MeshBasicMaterial( { color: 0xff0000 } ); 
const sphere = new THREE.Mesh( spheregeometry, spherematerial ); 
sphere.position.x = -7;
scene.add( sphere );

// Torus
const torusgeometry = new THREE.TorusGeometry( 1, 0.5, 18, 33 ); 
const torusmaterial = new THREE.MeshBasicMaterial( { color: 0xff69b4 } ); 
const torus = new THREE.Mesh( torusgeometry, torusmaterial ); 
torus.position.x = 7;
scene.add( torus );

camera.position.z = 5;

function animate(time) {
    
    const t = time * 0.001;

    cube.rotation.y += 0.01;
    cube.position.y = Math.sin(t) * 0.5;
    cube.rotation.x += 0.01;

    cone.rotation.y += 0.01;
    cone.position.y = Math.sin(t + 1) * 0.5;
    cone.rotation.x += 0.01;

    cylinder.rotation.y += 0.01;
    cylinder.position.y = Math.sin(t + 2) * 0.5;
    cylinder.rotation.x += 0.01;

    sphere.rotation.y += 0.01;
    sphere.position.y = Math.sin(t + 3) * 0.5;
    sphere.rotation.x += 0.01;

    torus.rotation.y += 0.01;
    torus.position.y = Math.sin(t + 4) * 0.5;
    torus.rotation.x += 0.01;

    renderer.render( scene, camera );
}
