//Handles all the scene management
import {Color, PerspectiveCamera, Scene, WebGLRenderer} from "three";

export function createScene() {
    //Initial scene setup
    const gameWindow = document.getElementById('scene');
    let gameWindowSize = gameWindow.offsetWidth / gameWindow.offsetHeight;

    // We create a threeJS scene
    const scene = new Scene();

    //We define the color of the background
    scene.background = new Color('102', '153', '255');

    //Create the camera
    //We set the FOV (genre les yeux voient à 180°), the ratio of the scene, the closest objects won't be rendered and the farest
    const camera = PerspectiveCamera(75, gameWindowSize, 0.1, 1000);

    //This will draw all our objects and all
    const renderer = WebGLRenderer();

    //We set the size of the renderer to the size of the window
    renderer.setSize(gameWindowSize);

    //We attach the renderer to the game window
    gameWindow.appendChild((renderer.domElement));

    /* This function draws the scene */
    function draw() {
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