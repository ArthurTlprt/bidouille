
function placeOnALine( array, numberOfFigure, spaceBetweenFigure, geometry, material, x, y) {

	for(var i=0; i < numberOfFigure; i++) {
		array.push(new THREE.Mesh( geometry, material ));
		scene.add( array[i] );
		array[i].position.x = x;
		array[i].position.y = y;
		array[i].position.z = i*30;
	}

}

function placeLineOnALine( square, numberOfLine, spaceBetweenLine, geometry, material, x, y) {

	for(var i=0; i<10; i++) {

		var array = [];
		placeOnALine(array, 9, 30, geometry, material, i*30, y);
		square.push(array);
	}
}

{
	var scene = new THREE.Scene();
	var camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 );
	camera.position.x = 30*4;
	camera.position.y = 30*4;
	camera.position.z = 0;
	var renderer = new THREE.WebGLRenderer();
	renderer.setSize( window.innerWidth, window.innerHeight );
	document.body.appendChild( renderer.domElement );

	var light = new THREE.AmbientLight( '#ffffff', 3 );
	light.position.set( 0, 0, 0 );
	scene.add( light );

	var geometry = new THREE.TorusGeometry( 10, 3, 16, 100 );
	var material = new THREE.MeshNormalMaterial({color: 0x7777ff});

	var cube = [];
	for(var i=0; i<9; i++) {
		var square = [];
		placeLineOnALine( square, 9, 30, geometry, material, 0, i*30);
		cube.push(square);
	}

	var render = function () {

		camera.position.z += 0.5;
		requestAnimationFrame( render );

		renderer.render(scene, camera);
	};

	render();

}
