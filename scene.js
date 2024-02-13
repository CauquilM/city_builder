//Handles all the scene management
import {BoxGeometry, Color, Mesh, MeshBasicMaterial, PerspectiveCamera, Scene, WebGLRenderer} from "three";

export function createScene() {
    //Initial scene setup
    const gameWindow = document.getElementById('mainScene');

    // We create a threeJS scene
    const scene = new Scene();

    //We define the color of the background
    scene.background = new Color('aquamarine'); // Hexadecimal representation of RGB (102, 153, 255)


    //Create the camera
    //We set the FOV (genre les yeux voient à 180°), the ratio of the scene, the closest objects won't be rendered and the farest
    const camera = new PerspectiveCamera(75, window.innerWidth / window.innerHeight);

    //This will draw all our objects and all
    const renderer = new WebGLRenderer();

    //We set the size of the renderer to the size of the window
    renderer.setSize(gameWindow.offsetWidth, gameWindow.offsetHeight);

    //We attach the renderer to the game window
    gameWindow.appendChild((renderer.domElement));

    /*const geometry = new BoxGeometry( 1, 1, 1 );
    const material = new MeshBasicMaterial( { color: 'chocolate' } );
    const mesh = new Mesh( geometry, material );
    scene.add( mesh );

    camera.position.z = 5;*/

    /* This function draws the scene */
    function draw() {
        /*mesh.rotation.x += 0.01;
        mesh.rotation.y += 0.01;*/
        /*So the rendered knows what to render*/
        renderer.render(scene, camera);
    }

    /*This function starts the renderer loop*/
    function start() {
        renderer.setAnimationLoop(draw);
    }

    /*This function stops the renderer loop*/
    function stop() {
        renderer.setAnimationLoop(null);
    }

    // We return all functions so we can access them
    return {
        start, stop
    }
}