/* eslint-disable no-multi-str */
/* eslint-disable no-plusplus */

/* Const and var declaration */
const container = document.createElement('div');
const aside = document.createElement('aside');
const openProject = document.querySelectorAll('.see-project');
const closeProject = document.createElement('button');

/* Basic script */

closeProject.innerHTML = '&times;';
closeProject.classList.add('close-project')

for (var i = 0; i < openProject.length; i++) {
	openProject[i].addEventListener('click', () => {
		aside.appendChild(closeProject);
		sct2.appendChild(aside);
	});
}

closeProject.addEventListener('click', () => {
	sct2.removeChild(aside);
});
