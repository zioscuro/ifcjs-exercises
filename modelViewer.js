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

  // 1 SCENA
  const scene = new Scene();
  const axes = new AxesHelper();
  const grid = new GridHelper();
  scene.add(axes, grid);

  //2 OGGETTI

  //3 CAMERA
  const camera = new PerspectiveCamera(
    75,
    canvas.clientWidth / canvas.clientHeight
  );
  camera.position.x = 1;
  camera.position.y = 1;
  camera.position.z = 1;
  scene.add(camera);

  //4 RENDERER
  const renderer = new WebGLRenderer({
    canvas: canvas,
  });
  renderer.setSize(canvas.clientWidth, canvas.clientHeight, false);
  renderer.setClearColor(0xffffff);

  //5 LUCI
  const light = new DirectionalLight(0xffffff, 1);
  light.position.set(1, 1, 0.5);
  const baseLight = new AmbientLight(0xffffff, 1);
  scene.add(light, baseLight);

  //6 CONTROLLI CAMERA
  CameraControls.install({ THREE: subsetOfTHREE });
  const clock = new Clock();
  const cameraControls = new CameraControls(camera, canvas);
  // cameraControls.setLookAt(15, 15, 15, 0, 10, 0);

  //7 RAYCASTING ED ETICHETTE

  // 8 GESTIONE RESIZE ED ANIMAZIONE
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
