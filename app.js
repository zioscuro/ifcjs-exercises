const projects = [
  {
    id: 'project-001',
    name: 'project 1',
    author: 'zioscuro',
    client: 'ifc.js crash course',
    year: '2022',
    type: 'conceptual design',
    description: 'this is a sample project for now...',
    link: 'https://ifcjs.github.io/ifcjs-crash-course/sample-apps/01/',
  },
  {
    id: 'project-002',
    name: 'project 2',
    author: 'zioscuro',
    client: 'ifc.js crash course',
    year: '2022',
    type: 'conceptual design',
    description: 'this is a sample project for now...',
    link: 'https://ifcjs.github.io/ifcjs-crash-course/sample-apps/02/',
  },
  {
    id: 'project-003',
    name: 'project 3',
    author: 'zioscuro',
    client: 'ifc.js crash course',
    year: '2022',
    type: 'conceptual design',
    description: 'this is a sample project for now...',
    link: 'https://ifcjs.github.io/ifcjs-crash-course/sample-apps/03/',
  },
  {
    id: 'project-004',
    name: 'project 4',
    author: 'zioscuro',
    client: 'ifc.js crash course',
    year: '2022',
    type: 'conceptual design',
    description: 'this is a sample project for now...',
    link: 'https://ifcjs.github.io/ifcjs-crash-course/sample-apps/04/',
  },
  {
    id: 'project-005',
    name: 'project 5',
    author: 'zioscuro',
    client: 'ifc.js crash course',
    year: '2022',
    type: 'conceptual design',
    description: 'this is a sample project for now...',
    link: 'https://ifcjs.github.io/ifcjs-crash-course/sample-apps/05/',
  },
];

const header = document.querySelector('header');
const main = document.querySelector('main');

const renderHome = function renderHomePage() {
  clearHeader();
  renderHomeHeader();

  clearMain();
  main.classList.add('card-container');
  main.classList.add('animate__animated');
  main.classList.add('animate__zoomIn');

  for (let project of projects) {
    const card = document.createElement('article');
    card.classList.add('card');
    card.id = project.id;

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
    viewButton.addEventListener('click', (e) => {
      const selectedProject = projects.find(
        (project) => project.id === e.target.parentElement.id
      );
      renderProject(selectedProject);
    });

    card.appendChild(icon);
    card.appendChild(projectTitle);
    card.appendChild(projectDescription);
    card.appendChild(viewButton);

    main.appendChild(card);
  }
};

const renderProject = function renderProjectPage(project) {
  clearHeader();
  renderProjectHeader(project.name);

  clearMain();
  main.classList.add('project-container');

  const projectInfo = document.createElement('section');
  projectInfo.classList.add('project-info');
  projectInfo.classList.add('animate__animated');
  projectInfo.classList.add('animate__fadeInLeft');

  const infoList = document.createElement('ul');

  // name
  const infoListName = document.createElement('li');

  const infoNameTitle = document.createElement('h4');
  infoNameTitle.textContent = 'name';

  const infoNameContent = document.createElement('p');
  infoNameContent.textContent = project.name;

  infoListName.appendChild(infoNameTitle);
  infoListName.appendChild(infoNameContent);

  infoList.appendChild(infoListName);

  // author
  const infoListAuthor = document.createElement('li');

  const infoAuthorTitle = document.createElement('h4');
  infoAuthorTitle.textContent = 'author';

  const infoAuthorContent = document.createElement('p');
  infoAuthorContent.textContent = project.author;

  infoListAuthor.appendChild(infoAuthorTitle);
  infoListAuthor.appendChild(infoAuthorContent);

  infoList.appendChild(infoListAuthor);

  // client
  const infoListClient = document.createElement('li');

  const infoClientTitle = document.createElement('h4');
  infoClientTitle.textContent = 'client';

  const infoClientContent = document.createElement('p');
  infoClientContent.textContent = project.client;

  infoListClient.appendChild(infoClientTitle);
  infoListClient.appendChild(infoClientContent);

  infoList.appendChild(infoListClient);

  // year
  const infoListYear = document.createElement('li');

  const infoYearTitle = document.createElement('h4');
  infoYearTitle.textContent = 'year';

  const infoYearContent = document.createElement('p');
  infoYearContent.textContent = project.year;

  infoListYear.appendChild(infoYearTitle);
  infoListYear.appendChild(infoYearContent);

  infoList.appendChild(infoListYear);

  // type
  const infoListType = document.createElement('li');

  const infoTypeTitle = document.createElement('h4');
  infoTypeTitle.textContent = 'type';

  const infoTypeContent = document.createElement('p');
  infoTypeContent.textContent = project.type;

  infoListType.appendChild(infoTypeTitle);
  infoListType.appendChild(infoTypeContent);

  infoList.appendChild(infoListType);

  // description
  const infoListDescription = document.createElement('li');

  const infoDescriptionTitle = document.createElement('h4');
  infoDescriptionTitle.textContent = 'description';

  const infoDescriptionContent = document.createElement('p');
  infoDescriptionContent.textContent = project.description;

  infoListDescription.appendChild(infoDescriptionTitle);
  infoListDescription.appendChild(infoDescriptionContent);

  infoList.appendChild(infoListDescription);

  projectInfo.appendChild(infoList);

  const modelContainer = document.createElement('section');
  modelContainer.classList.add('model-container');
  modelContainer.classList.add('animate__animated');
  modelContainer.classList.add('animate__fadeInRight');

  const modelIframe = document.createElement('iframe');
  modelIframe.setAttribute('src', project.link);
  modelIframe.setAttribute('frameborder', '0');

  const modelNav = document.createElement('nav');
  modelNav.classList.add('project-options');

  // ruler command
  const rulerCommand = document.createElement('button');
  const rulerIcon = document.createElement('i');
  rulerIcon.classList.add('fa-solid');
  rulerIcon.classList.add('fa-ruler');

  rulerCommand.appendChild(rulerIcon);
  modelNav.appendChild(rulerCommand);

  // cube command
  const cubeCommand = document.createElement('button');
  const cubeIcon = document.createElement('i');
  cubeIcon.classList.add('fa-solid');
  cubeIcon.classList.add('fa-cube');

  cubeCommand.appendChild(cubeIcon);
  modelNav.appendChild(cubeCommand);

  // glasses command
  const glassesCommand = document.createElement('button');
  const glassesIcon = document.createElement('i');
  glassesIcon.classList.add('fa-solid');
  glassesIcon.classList.add('fa-glasses');

  glassesCommand.appendChild(glassesIcon);
  modelNav.appendChild(glassesCommand);

  // info command
  const infoCommand = document.createElement('button');
  const infoIcon = document.createElement('i');
  infoIcon.classList.add('fa-solid');
  infoIcon.classList.add('fa-circle-info');

  infoCommand.appendChild(infoIcon);
  modelNav.appendChild(infoCommand);

  modelContainer.appendChild(modelIframe);
  modelContainer.appendChild(modelNav);

  main.appendChild(projectInfo);
  main.appendChild(modelContainer);
};

const clearHeader = function clearHeaderSection() {
  while (header.firstChild) {
    header.removeChild(header.firstChild);
  }
  header.classList.remove('project-header');
  header.classList.remove('home-header');
};

const clearMain = function clearMainSection() {
  while (main.firstChild) {
    main.removeChild(main.firstChild);
  }
  main.classList.remove('project-container');
  main.classList.remove('card-container');
  main.classList.remove('animate__animated');
  main.classList.remove('animate__zoomIn');
};

const renderHomeHeader = function renderHomePageHeader() {
  header.classList.add('home-header');

  const galleryTitle = document.createElement('h1');
  galleryTitle.textContent = 'Zioscuro Project Gallery';
  header.appendChild(galleryTitle);
};

const renderProjectHeader = function renderProjectPageHeader(projectName) {
  header.classList.add('project-header');

  const headerNav = document.createElement('nav');

  const projectNavTitle = document.createElement('h1');
  projectNavTitle.textContent = projectName;

  const projectNavButton = document.createElement('button');
  projectNavButton.textContent = 'home';
  projectNavButton.addEventListener('click', renderHome);

  headerNav.appendChild(projectNavTitle);
  headerNav.appendChild(projectNavButton);
  header.appendChild(headerNav);
};

renderHome();
