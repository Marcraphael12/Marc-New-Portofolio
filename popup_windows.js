/* eslint-disable no-multi-str */
/* eslint-disable no-plusplus */
/* eslint-disable quotes */

const projects = [
  {
  id: 'card1',
    name: "Multi - Post stories",

    description: ["A daily selection of privately personalized reads; no accounts or sign-ups required.\
  has been the industry's standard dummy text ever since the 1500s, when an unknown printer\
  took a standard dummy text.",

  "Lorem Ipsum is simply dummy text of the printing and typesetting industry.\
  Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took\
  a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and\
  typesetting  ever since the 1500s, when an unknown printer took a galley of type veris lapoa todoe.",

  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the\
  industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and\
  scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry.\
  Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown Lorem Ipsum\
  is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard\
  dummy text ever since the 1500s, when an unknown printer took a galley of type and scramble."],

    image: ['./images/photos/Img_Placeholder.png', './images/photos/project_img_smal.png', './images/photos/project_img.png'],

    technologies: ["css", "html", "Bootstrap", "Ruby", 'Ruby on rails', 'Github'],
  button: ['See Project', 'See live', 'See source'],
    links: ['https://www.google.com', 'https://github.com/Marcraphael12'],
  },

  {
  id: 'card2',
    name: "Multi - Post stories",

    description: ["A daily selection of privately personalized reads; no accounts or sign-ups required.\
  has been the industry's standard dummy text ever since the 1500s, when an unknown printer\
  took a standard dummy text.",

  "Lorem Ipsum is simply dummy text of the printing and typesetting industry.\
  Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took\
  a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and\
  typesetting  ever since the 1500s, when an unknown printer took a galley of type veris lapoa todoe.",

  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the\
  industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and\
  scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry.\
  Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown Lorem Ipsum\
  is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard\
  dummy text ever since the 1500s, when an unknown printer took a galley of type and scramble."],

    image: ['./images/photos/Img_Placeholder.png', './images/photos/project_img_smal.png', './images/photos/project_img.png'],

    technologies: ["css", "html", "Bootstrap", "Ruby", 'Ruby on rails', 'Github'],
  button: ['See Project', 'See live', 'See source'],
    links: ['https://www.google.com', 'https://github.com/Marcraphael12'],
  },

  {
  id: 'card3',
    name: "Multi - Post stories",

    description: ["A daily selection of privately personalized reads; no accounts or sign-ups required.\
  has been the industry's standard dummy text ever since the 1500s, when an unknown printer\
  took a standard dummy text.",

  "Lorem Ipsum is simply dummy text of the printing and typesetting industry.\
  Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took\
  a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and\
  typesetting  ever since the 1500s, when an unknown printer took a galley of type veris lapoa todoe.",

  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the\
  industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and\
  scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry.\
  Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown Lorem Ipsum\
  is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard\
  dummy text ever since the 1500s, when an unknown printer took a galley of type and scramble."],

    image: ['./images/photos/Img_Placeholder.png', './images/photos/project_img_smal.png', './images/photos/project_img.png'],

    technologies: ["css", "html", "Bootstrap", "Ruby", 'Ruby on rails', 'Github'],
  button: ['See Project', 'See live', 'See source'],
    links: ['https://www.google.com', 'https://github.com/Marcraphael12'],
  },

  {
  id: 'card4',
    name: "Multi - Post stories",

    description: ["A daily selection of privately personalized reads; no accounts or sign-ups required.\
  has been the industry's standard dummy text ever since the 1500s, when an unknown printer\
  took a standard dummy text.",

  "Lorem Ipsum is simply dummy text of the printing and typesetting industry.\
  Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took\
  a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and\
  typesetting  ever since the 1500s, when an unknown printer took a galley of type veris lapoa todoe.",

  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the\
  industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and\
  scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry.\
  Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown Lorem Ipsum\
  is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard\
  dummy text ever since the 1500s, when an unknown printer took a galley of type and scramble."],

    image: ['./images/photos/Img_Placeholder.png', './images/photos/project_img_smal.png', './images/photos/project_img.png'],

    technologies: ["css", "html", "Bootstrap", "Ruby", 'Ruby on rails', 'Github'],
  button: ['See Project', 'See live', 'See source'],
    links: ['https://www.google.com', 'https://github.com/Marcraphael12'],
  }
];

/* Basic script */

const cardsContainer = document.querySelector('.work-list');

// The cards
const card = document.createElement('li'); // the card
card.classList.add('work-list-item');

const image1 = document.createElement('img');
image1.setAttribute('src', projects[0].image[0]);
image1.classList.add('work-img');
card.append(image1);

const block1 = document.createElement('div');
block1.classList.add('block');
card.append(block1);

const name1 = document.createElement('h3');
name1.innerHTML = projects[0].name;
block1.append(name1);

const para1 = document.createElement('p');
para1.classList.add('work-para');
para1.innerHTML = projects[0].description[0];
block1.append(para1);

const techList = document.createElement('ul');
techList.classList.add('techs');
techList.innerHTML = `<li class="tech">${projects[0].technologies[0]}</li>
<li class="tech">${projects[0].technologies[1]}</li>
<li class="tech">${projects[0].technologies[2]}</li>
<li class="tech">${projects[0].technologies[3]}</li>`;
block1.append(techList);

const seeProject = document.createElement('button');
seeProject.classList.add('see-project');
seeProject.innerHTML = projects[0].button[0];
block1.append(seeProject);

for (let i = 1; i < 5; i++) {
  cardsContainer.append(card.cloneNode(true));
}

// The popup window
const popupContainer = document.querySelector('.popup-container');
// popupContainer.classList.add('popup-container');

const popup = document.createElement('div');
popup.classList.add('popup');
popupContainer.append(popup);
