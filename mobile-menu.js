/* eslint-disable no-multi-str */
/* eslint-disable no-plusplus */
const hdr = document.querySelector('.pg-hdr'); // the header element
const btn = document.querySelector('.btn'); // the opening button
const logo = document.querySelector('.pg-hdr h3'); // The logo name
const navBar = document.querySelector('.dsk-btn'); // The desktop navigation bar
const navLinks = document.querySelectorAll('.nav-link'); // The navigation links inside the nav bar
const rightArrow = document.querySelectorAll('.r-arrow'); // The right arrow after the nav links
const navIcon = document.querySelector('.nav-icon'); // The mail icon

/** ******* The closig button *********** */
const cross = document.createElement('button'); // The cross button to close mobile menu
cross.classList.add('closing-button');
cross.innerHTML = '&times;';

/** ********* The opening function ************** */
function open() {
  hdr.setAttribute('style', '\
  height: 100vh;\
  width: 100%;\
  margin-top: 0;\
  position: fixed;\
  padding: 40px;\
  background-color: #191765;\
  flex-direction: column-reverse;\
  justify-content: start;\
  align-items: initial;');

  navBar.classList.toggle('mobile-nav');

  navIcon.setAttribute('style', 'display: none;');

  logo.setAttribute('style', 'display: none;');

  btn.setAttribute('style', 'display: none');

  hdr.appendChild(cross); // add cross to the header

  for (let i = 0; i < rightArrow.length; i++) { // Add the right arrow to every nav link
    rightArrow[i].setAttribute('style', 'display: initial;');
  }
}

btn.addEventListener('click', open); // calling the opening function

/** *********** The closing function *************** */
function close() { // Reseting the header to the original
  hdr.removeAttribute('style');
  btn.removeAttribute('style');
  hdr.removeChild(cross);
  logo.removeAttribute('style');
  navBar.classList.remove('mobile-nav');
  navIcon.removeAttribute('style');

  for (let i = 0; i < rightArrow.length; i++) {
    rightArrow[i].removeAttribute('style');
  }
}

for (let i = 0; i < navLinks.length; i++) {
  navLinks[i].addEventListener('click', close); // Use nav links to close the the mobile menu
}

cross.addEventListener('click', close); // calling the closing function and reset the headerventListener('click')
