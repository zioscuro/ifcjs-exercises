import { Color } from 'three';
import { IfcViewerAPI } from 'web-ifc-viewer';

export const viewerHandler = (project) => {
  console.log(project.ifcPath)

  const container = document.getElementById('model-viewer');
  const viewer = new IfcViewerAPI({
    container,
    backgroundColor: new Color(0xffffff),
  });
  
  async function loadIfc(url) {
    await viewer.IFC.loadIfcUrl(url); 
  }
  
  loadIfc(project.ifcPath);
};
