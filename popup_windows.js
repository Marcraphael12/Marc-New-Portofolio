/* See project's button */
const prjt = document.querySelectorAll('.see-project');

/** ********* The card element ******** */
const card = document.createElement('div');
card.setAttribute('style', '\
height: 90%;\
width: 90%;\
background: white;\
display: flex;\
margin: 0 auto;\
padding: 0 10px;\
align-items: center;\
flex-direction: column;');

/** ********* The modal element ******** */
const modal = document.createElement('aside'); // Consider modal as an aside element
modal.setAttribute('style', '\
height: 100%;\
width: 100vw;\
background: #191765;\
position: fixed;\
top: 0;\
left: 0;\
display: flex;\
align-items: center;\
overflow: scroll;');
modal.appendChild(card);

/** ***** Opening and closing functions part ******** */
function openProject() { // open the modal
  document.body.appendChild(modal);
}
for (let i = 0; i < prjt.length-1; i++) {
  prjt[i].addEventListener('click', openProject);
}
