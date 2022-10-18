import {
  AmbientLight,
  AxesHelper,
  DirectionalLight,
  GridHelper,
  PerspectiveCamera,
  Scene,
  WebGLRenderer,
} from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

import { IFCLoader } from 'web-ifc-three/IFCLoader';

export const viewerHandler = (project) => {
  //Creates the Three.js scene
  const scene = new Scene();

  //Object to store the size of the viewport
  const size = {
    width: document.querySelector('.model-container').offsetWidth,
    height: document.querySelector('.model-container').offsetHeight,
  };

  // console.log(window.innerWidth)

  // console.log(document.querySelector('.model-container'))
  // console.log(canvasWidth)
  // console.log(canvasHeight)

  //Creates the camera (point of view of the user)
  const camera = new PerspectiveCamera(75, size.width / size.height);
  camera.position.z = project.cameraPosition.z;
  camera.position.y = project.cameraPosition.y;
  camera.position.x = project.cameraPosition.x;  

  //Creates the lights of the scene
  const lightColor = 0xffffff;

  const ambientLight = new AmbientLight(lightColor, 0.5);
  scene.add(ambientLight);

  const directionalLight = new DirectionalLight(lightColor, 2);
  directionalLight.position.set(0, 10, 0);
  scene.add(directionalLight);

  //Sets up the renderer, fetching the canvas of the HTML
  const threeCanvas = document.getElementById('model-viewer');
  const renderer = new WebGLRenderer({ canvas: threeCanvas, alpha: true });
  renderer.setSize(size.width, size.height);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

  // //Creates grids and axes in the scene
  // const grid = new GridHelper(50, 30);
  // scene.add(grid);

  // const axes = new AxesHelper();
  // axes.material.depthTest = false;
  // axes.renderOrder = 1;
  // scene.add(axes);

  // load model
  loadModel(scene, project);

  //Creates the orbit controls (to navigate the scene)
  const controls = new OrbitControls(camera, threeCanvas);
  controls.enableDamping = true;
  controls.target.set(-2, 0, 0);

  controlsCameraPosition()

  // console.log(controls.object.position)

  //Animation loop
  const animate = () => {
    controls.update();
    renderer.render(scene, camera);
    requestAnimationFrame(animate);
  };

  animate();

  //Adjust the viewport to the size of the browser
  window.addEventListener('resize', () => {
    const canvas = document.querySelector('.model-container');

    (size.width = canvas.offsetWidth), (size.height = canvas.offsetHeight);
    camera.aspect = size.width / size.height;
    camera.updateProjectionMatrix();
    renderer.setSize(size.width, size.height);
  });
};

const loadModel = async (scene, project) => {
  const ifcLoader = new IFCLoader();

  const ifcURL = project.ifcPath;
  const model = await ifcLoader.loadAsync(ifcURL);
  scene.add(model);
};

const controlsCameraPosition = () => {
  setInterval(() => console.log(controls.object.position) ,1000)
}