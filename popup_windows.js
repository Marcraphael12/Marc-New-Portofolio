/* eslint-disable no-multi-str */
/* eslint-disable no-plusplus */

const container = document.createElement('div');
const title = document.createElement('div');
const aside = document.createElement('aside');
const openProject = document.querySelectorAll('.see-project');
const closeProject = document.createElement('button');

const image = {
  imgDesktop: './images/photos/project_img.png',
  imgMobile: './images/photos/project_img_smal.png'
}

const text = {
  txtDesktop: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the\
  industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and\
  scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry\
  . Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown Lorem Ipsum\
  is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard\
  dummy text ever since the 1500s, when an unknown printer took a galley of type and scramble.",

  txtMobile: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.\
  Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown\
  printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy\
  text of the printing and typesetting  ever since the 1500s, when an unknown printer took a\
  galley of type veris lapoa todoe.",

  html: 'html',
  css: 'css',
  ror: 'Ruby on Rails',
  github: 'Github'
}

/* Basic script */

closeProject.innerHTML = '&times;';
closeProject.classList.add('close-project');

const h1 = document.createElement('h1');
h1.innerHTML = 'Multi - Post stories'

title.classList.add('popup-title');
title.appendChild(h1);
title.appendChild(closeProject);

const popupImage = document.createElement('img');
popupImage.classList.add('popup-image');

const popupText = document.createElement('p');
popupText.classList.add('popup-text');

function switchText(e) {
  if (e.matches) { // If media query matches
    popupText.innerHTML = text.txtMobile;
    popupImage.setAttribute('src', image.imgMobile);
  } else {
    popupText.innerHTML = text.txtDesktop;
    popupImage.setAttribute('src', image.imgDesktop);
  }
}

let media = window.matchMedia("(max-width: 600px)");
switchText(media);
media.addListener(switchText);

container.classList.add('project-card');
container.appendChild(title);
container.appendChild(popupImage);
container.appendChild(popupText);

for (var i = 0; i < openProject.length; i++) {
  openProject[i].addEventListener('click', () => {
  aside.appendChild(container);
  sct2.appendChild(aside);
  });
}

closeProject.addEventListener('click', () => {
  sct2.removeChild(aside);
});
