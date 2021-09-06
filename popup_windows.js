/* eslint-disable no-multi-str */
/* eslint-disable no-plusplus */
const aside = document.createElement('aside');
const openProject = document.querySelectorAll('.see-project');

for (var i = 0; i < openProject.length; i++) {
	openProject[i].addEventListener('click', () => {
		sct2.appendChild(aside);
	})
}
