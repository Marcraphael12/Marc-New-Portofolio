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
h1.innerHTML = 'Multi - Post stories';
h1.classList.add('title');

title.classList.add('popup-title');
title.appendChild(h1);
title.appendChild(closeProject);

const popupImage = document.createElement('img');
popupImage.classList.add('popup-image');

const popupText = document.createElement('p');
popupText.classList.add('popup-text');

const technologie1 = document.createElement('li');
technologie1.innerHTML = text.html;
technologie1.classList.add('tech', 'popup-tech');

const technologie2 = document.createElement('li');
technologie2.innerHTML = text.ror;
technologie2.classList.add('tech', 'popup-tech');
const technologie3 = document.createElement('li');

technologie3.innerHTML = text.css;
technologie3.classList.add('tech', 'popup-tech');
const technologie4 = document.createElement('li');

technologie4.innerHTML = text.github;
technologie4.classList.add('tech', 'popup-tech');
technologie4.style.borderRight = '2px solid #646369';

const technologies = document.createElement('ul');
technologies.classList.add('techs', 'popup-techs');
technologies.appendChild(technologie1);
technologies.appendChild(technologie2);
technologies.appendChild(technologie3);
technologies.appendChild(technologie4);

function mediaqueries(e) {
  if (e.matches) { // If media query matches
    technologie4.style.display = 'none';
    popupText.innerHTML = text.txtMobile;
    popupImage.setAttribute('src', image.imgMobile);
		h1.style.fontSize = '20px';
  } else {
    h1.style.fontSize = '40px';
    technologie4.style.display = 'flex';
    popupText.innerHTML = text.txtDesktop;
    popupImage.setAttribute('src', image.imgDesktop);
  }
}

let media = window.matchMedia("(max-width: 600px)");
mediaqueries(media);
media.addListener(mediaqueries);

container.classList.add('project-card');
container.appendChild(title);
container.appendChild(popupImage);
container.appendChild(popupText);
container.appendChild(technologies);

for (var i = 0; i < openProject.length; i++) {
  openProject[i].addEventListener('click', () => {
  aside.appendChild(container);
  sct2.appendChild(aside);
  });
}

closeProject.addEventListener('click', () => {
  sct2.removeChild(aside);
});
