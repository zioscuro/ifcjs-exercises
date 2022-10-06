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
    viewButton.addEventListener('click', renderProject);

    card.appendChild(icon);
    card.appendChild(projectTitle);
    card.appendChild(projectDescription);
    card.appendChild(viewButton);

    main.appendChild(card);
  }
};

const renderProject = function renderProjectPage() {
  clearHeader();
  renderProjectHeader();

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
  infoNameContent.textContent = 'sample project';

  infoListName.appendChild(infoNameTitle);
  infoListName.appendChild(infoNameContent);

  infoList.appendChild(infoListName);

  // author
  const infoListAuthor = document.createElement('li');

  const infoAuthorTitle = document.createElement('h4');
  infoAuthorTitle.textContent = 'author';

  const infoAuthorContent = document.createElement('p');
  infoAuthorContent.textContent = 'zioscuro';

  infoListAuthor.appendChild(infoAuthorTitle);
  infoListAuthor.appendChild(infoAuthorContent);

  infoList.appendChild(infoListAuthor);

  // client
  const infoListClient = document.createElement('li');

  const infoClientTitle = document.createElement('h4');
  infoClientTitle.textContent = 'client';

  const infoClientContent = document.createElement('p');
  infoClientContent.textContent = 'ifc.js crash course';

  infoListClient.appendChild(infoClientTitle);
  infoListClient.appendChild(infoClientContent);

  infoList.appendChild(infoListClient);

  // year
  const infoListYear = document.createElement('li');

  const infoYearTitle = document.createElement('h4');
  infoYearTitle.textContent = 'year';

  const infoYearContent = document.createElement('p');
  infoYearContent.textContent = '2022';

  infoListYear.appendChild(infoYearTitle);
  infoListYear.appendChild(infoYearContent);

  infoList.appendChild(infoListYear);

  // type
  const infoListType = document.createElement('li');

  const infoTypeTitle = document.createElement('h4');
  infoTypeTitle.textContent = 'type';

  const infoTypeContent = document.createElement('p');
  infoTypeContent.textContent = 'conceptual design';

  infoListType.appendChild(infoTypeTitle);
  infoListType.appendChild(infoTypeContent);

  infoList.appendChild(infoListType);

  // description
  const infoListDescription = document.createElement('li');

  const infoDescriptionTitle = document.createElement('h4');
  infoDescriptionTitle.textContent = 'description';

  const infoDescriptionContent = document.createElement('p');
  infoDescriptionContent.textContent =
    'lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint facere officia earum tempora deserunt commodi vero corporis, porro inventore, totam quis, voluptate culpa autem natus! Ea quaerat harum perspiciatis reiciendis sunt temporibus voluptatum iusto, impedit dolor id qui dignissimos.';

  infoListDescription.appendChild(infoDescriptionTitle);
  infoListDescription.appendChild(infoDescriptionContent);

  infoList.appendChild(infoListDescription);

  projectInfo.appendChild(infoList);

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

const renderProjectHeader = function renderProjectPageHeader() {
  header.classList.add('project-header');

  const headerNav = document.createElement('nav');

  const projectNavTitle = document.createElement('h1');
  projectNavTitle.textContent = 'project 1';

  const projectNavButton = document.createElement('button');
  projectNavButton.textContent = 'home';
  projectNavButton.addEventListener('click', renderHome);

  headerNav.appendChild(projectNavTitle);
  headerNav.appendChild(projectNavButton);
  header.appendChild(headerNav);
};

renderHome();
