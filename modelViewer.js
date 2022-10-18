import {
  Scene,
  PerspectiveCamera,
  WebGLRenderer,
  Vector2,
  Vector3,
  Vector4,
  Quaternion,
  Matrix4,
  Spherical,
  Box3,
  Sphere,
  Raycaster,
  MathUtils,
  MOUSE,
  Clock,
  AxesHelper,
  GridHelper,
  DirectionalLight,
  AmbientLight,
  BoxGeometry,
  MeshPhongMaterial,
  Mesh,
} from 'three';

import CameraControls from 'camera-controls';

const subsetOfTHREE = {
  MOUSE,
  Vector2,
  Vector3,
  Vector4,
  Quaternion,
  Matrix4,
  Spherical,
  Box3,
  Sphere,
  Raycaster,
  MathUtils: {
    DEG2RAD: MathUtils.DEG2RAD,
    clamp: MathUtils.clamp,
  },
};

export function viewerHandler() {
  const canvas = document.querySelector('#model-viewer');

  const scene = new Scene();
  const axes = new AxesHelper();
  const grid = new GridHelper();
  scene.add(axes, grid);

  createSceneObjects(scene)

  const camera = new PerspectiveCamera(
    75,
    canvas.clientWidth / canvas.clientHeight
  );
  camera.position.x = 1;
  camera.position.y = 1;
  camera.position.z = 1;
  scene.add(camera);

  const renderer = new WebGLRenderer({
    canvas: canvas,
  });
  renderer.setSize(canvas.clientWidth, canvas.clientHeight, false);
  renderer.setClearColor(0xffffff);

  const light = new DirectionalLight(0xffffff, 1);
  light.position.set(1, 1, 0.5);
  const baseLight = new AmbientLight(0xffffff, 1);
  scene.add(light, baseLight);

  CameraControls.install({ THREE: subsetOfTHREE });
  const clock = new Clock();
  const cameraControls = new CameraControls(camera, canvas);

  window.addEventListener('resize', () => {
    camera.aspect = canvas.clientWidth / canvas.clientHeight;
    camera.updateProjectionMatrix();

    renderer.setSize(canvas.clientWidth, canvas.clientHeight, false);
  });

  function animate() {
    const delta = clock.getDelta();
    cameraControls.update(delta);

    renderer.render(scene, camera);

    requestAnimationFrame(animate);
  }

  animate();
}

function createSceneObjects(scene) {
  const geometry = new BoxGeometry(0.5, 0.5, 0.5);
  const material = new MeshPhongMaterial({ color: 'orange' });
  const cubeMesh = new Mesh(geometry, material);
  scene.add(cubeMesh);
}

