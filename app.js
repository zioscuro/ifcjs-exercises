const projects = [
  {
    name: 'project 1',
    link: 'https://ifcjs.github.io/ifcjs-crash-course/sample-apps/01/',
  },
  {
    name: 'project 2',
    link: 'https://ifcjs.github.io/ifcjs-crash-course/sample-apps/02/',
  },
  {
    name: 'project 3',
    link: 'https://ifcjs.github.io/ifcjs-crash-course/sample-apps/03/',
  },
  {
    name: 'project 4',
    link: 'https://ifcjs.github.io/ifcjs-crash-course/sample-apps/04/',
  },
  {
    name: 'project 5',
    link: 'https://ifcjs.github.io/ifcjs-crash-course/sample-apps/05/',
  },
];

const header = document.querySelector('header');
const main = document.querySelector('main');

const galleryTitle = document.createElement('h1');
galleryTitle.textContent = 'Zioscuro Project Gallery';

header.classList.add('home-header');
header.appendChild(galleryTitle);

main.classList.add('card-container');
main.classList.add('animate__animated');
main.classList.add('animate__zoomIn');

for (let project of projects) {
  const card = document.createElement('article');
  card.classList.add('card');

  const icon = document.createElement('i');
  icon.classList.add('fa-solid');
  icon.classList.add('fa-building');

  const projectTitle = document.createElement('h2');
  projectTitle.classList.add('card-title');
  projectTitle.textContent = project.name;

  const projectDescription = document.createElement('p');
  projectDescription.classList.add('project-description');
  projectDescription.textContent = 'this is a sample project for now...';

  const viewButton = document.createElement('button');
  viewButton.classList.add('card-link');
  viewButton.textContent = 'view';

  card.appendChild(icon);
  card.appendChild(projectTitle);
  card.appendChild(projectDescription);
  card.appendChild(viewButton);

  main.appendChild(card);
}

const viewButtons = document.querySelectorAll('.card-link');

viewButtons.forEach((link) => {
  link.addEventListener('click', () => {
    while (header.firstChild) {
      header.removeChild(header.firstChild);
    }
    header.classList.remove('home-header');
    header.classList.add('project-header');

    const headerNav = document.createElement('nav');

    const projectNavTitle = document.createElement('h1');
    projectNavTitle.textContent = 'project 1';

    const projectNavButton = document.createElement('button');
    projectNavButton.textContent = 'home';

    headerNav.appendChild(projectNavTitle);
    headerNav.appendChild(projectNavButton);

    header.appendChild(headerNav);

    while (main.firstChild) {
      main.removeChild(main.firstChild);
    }

    main.classList.remove('card-container');
    main.classList.remove('animate__animated');
    main.classList.remove('animate__zoomIn');

    main.classList.add('project-container');

    const projectInfo = document.createElement('section');
    projectInfo.classList.add('project-info');
    projectInfo.classList.add('animate__animated');
    projectInfo.classList.add('animate__fadeInLeft');

    const infoName = document.createElement('h4');
    infoName.textContent = 'sample project';

    projectInfo.appendChild(infoName);

    const modelContainer = document.createElement('section');
    modelContainer.classList.add('model-container');
    modelContainer.classList.add('animate__animated');
    modelContainer.classList.add('animate__fadeInRight');

    const modelIframe = document.createElement('iframe');
    modelIframe.setAttribute(
      'src',
      'https://ifcjs.github.io/ifcjs-crash-course/sample-apps/01/'
    );
    modelIframe.setAttribute('frameborder', '0');

    modelContainer.appendChild(modelIframe);

    main.appendChild(projectInfo);
    main.appendChild(modelContainer);

    projectNavButton.addEventListener('click', () => {
      while (header.firstChild) {
        header.removeChild(header.firstChild);
      }
      while (main.firstChild) {
        main.removeChild(main.firstChild);
      }

      header.classList.remove('project-header');
      header.classList.add('home-header');
      header.appendChild(galleryTitle);

      main.classList.remove('project-container');
      main.classList.add('card-container');
      main.classList.add('animate__animated');
      main.classList.add('animate__zoomIn');

      for (let project of projects) {
        const card = document.createElement('article');
        card.classList.add('card');

        const icon = document.createElement('i');
        icon.classList.add('fa-solid');
        icon.classList.add('fa-building');

        const projectTitle = document.createElement('h2');
        projectTitle.classList.add('card-title');
        projectTitle.textContent = project.name;

        const projectDescription = document.createElement('p');
        projectDescription.classList.add('project-description');
        projectDescription.textContent = 'this is a sample project for now...';

        const viewButton = document.createElement('button');
        viewButton.classList.add('card-link');
        viewButton.textContent = 'view';

        card.appendChild(icon);
        card.appendChild(projectTitle);
        card.appendChild(projectDescription);
        card.appendChild(viewButton);

        main.appendChild(card);
      }
    });
  });
});
