var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 );
camera.position.z = 200;

var renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

var light = new THREE.AmbientLight( '#f2f2f2' ); // soft white light
scene.add( light );

var sun_geometry = new THREE.SphereGeometry( 3, 32, 32 );
var sun_material = new THREE.MeshPhongMaterial({ map: THREE.ImageUtils.loadTexture('./images/sunmap.jpg',THREE.SphericalRefractionMapping) });
var sun = new THREE.Mesh( sun_geometry, sun_material );
scene.add( sun );

var earth_geometry = new THREE.SphereGeometry( 1, 32, 32 );
var earth_material = new THREE.MeshPhongMaterial({ map: THREE.ImageUtils.loadTexture('./images/earthmap.jpg',THREE.SphericalRefractionMapping) });
var earth = new THREE.Mesh( earth_geometry, earth_material );
scene.add( earth );

var theta = 0;

var render = function () {
  requestAnimationFrame( render );

  camera.position.z -= 0.5;

  theta += 0.01
  earth.rotation.z += 0.01;
  earth.position.x = 10 * Math.cos(theta);
  earth.position.y = 10 * Math.sin(theta);

  renderer.render(scene, camera);
};

render();
