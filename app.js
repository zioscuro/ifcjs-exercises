const projects = [
  'https://ifcjs.github.io/ifcjs-crash-course/sample-apps/01/',
  'https://ifcjs.github.io/ifcjs-crash-course/sample-apps/02/',
  'https://ifcjs.github.io/ifcjs-crash-course/sample-apps/03/',
  'https://ifcjs.github.io/ifcjs-crash-course/sample-apps/04/',
  'https://ifcjs.github.io/ifcjs-crash-course/sample-apps/05/',
];

const main = document.querySelector('main');

for (let project of projects) {
  const card = document.createElement('article');
  card.classList.add('card');

  const icon = document.createElement('i');
  icon.classList.add('fa-solid');
  icon.classList.add('fa-building');

  const projectTitle = document.createElement('h2');
  projectTitle.classList.add('card-title');
  projectTitle.textContent = `Project ${projects.indexOf(project) + 1}`;

  const projectDescription = document.createElement('p');
  projectDescription.classList.add('project-description');
  projectDescription.textContent = 'this is a sample project for now...';

  const viewButton = document.createElement('a');
  viewButton.classList.add('card-link');
  viewButton.href = './project.html';
  viewButton.textContent = 'view';

  card.appendChild(icon);
  card.appendChild(projectTitle);
  card.appendChild(projectDescription);
  card.appendChild(viewButton);

  main.appendChild(card);
}
