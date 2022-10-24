import { Color } from 'three';
import { IfcViewerAPI } from 'web-ifc-viewer';

export const viewerHandler = (project) => {
  const container = document.getElementById('model-viewer');
  const viewer = new IfcViewerAPI({
    container,
    backgroundColor: new Color(0xffffff),
  });

  setCameraPosition(viewer, project.cameraPosition);

  loadIfc(viewer, project.ifcPath);
};

function setCameraPosition(viewer, cameraPosition) {
  const cameraControls = viewer.context.getIfcCamera().cameraControls;

  cameraControls.distance = cameraPosition.distance;
  cameraControls.rotate(
    cameraPosition.azimuthAngle,
    cameraPosition.polarAngle
  );
}

async function loadIfc(viewer, url) {
  await viewer.IFC.loadIfcUrl(url);
}
