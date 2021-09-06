/* eslint-disable no-multi-str */
/* eslint-disable no-plusplus */

/* Const and var declaration */
const container = document.createElement('div');
const aside = document.createElement('aside');
const openProject = document.querySelectorAll('.see-project');
const closeProject = document.createElement('button');

/* Basic script */


for (var i = 0; i < openProject.length; i++) {
	openProject[i].addEventListener('click', () => {
		sct2.appendChild(aside);
	});
}
