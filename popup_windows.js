/* eslint-disable no-multi-str */
/* eslint-disable no-plusplus */

const container = document.createElement('div');
const title = document.createElement('div');
const aside = document.createElement('aside');
const openProject = document.querySelectorAll('.see-project');
const closeProject = document.createElement('button');

/* Basic script */

closeProject.innerHTML = '&times;';
closeProject.classList.add('close-project');

const h1 = document.createElement('h1');
h1.innerHTML = 'Multi - Post stories'

title.classList.add('popup-title');
title.appendChild(h1);
title.appendChild(closeProject);

container.classList.add('project-card');
container.appendChild(title)

for (var i = 0; i < openProject.length; i++) {
	openProject[i].addEventListener('click', () => {
		aside.appendChild(container);
		sct2.appendChild(aside);
	});
}

closeProject.addEventListener('click', () => {
	sct2.removeChild(aside);
});
