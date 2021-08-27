/* eslint-disable no-multi-str */
/* eslint-disable no-plusplus */
const hdr = document.querySelector('.pg-hdr'); // the header element
const btn = document.querySelector('.btn'); // the opening button
const logo = document.querySelector('.pg-hdr h3');
const navBar = document.querySelector('.dsk-btn');
const navLinks = document.querySelectorAll('.nav-link');
const rightArrow = document.querySelectorAll('.r-arrow');
const navIcon = document.querySelector('.nav-icon');

/** ******* The closig button *********** */
const cross = document.createElement('button');
cross.setAttribute('style', '\
width: max-content;\
background: none;\
font-weight: 500;\
font-size: 38px;\
border: none;\
align-self: end;\
cursor: pointer;');
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

  navBar.setAttribute('style', '\
  display: flex;\
  flex-direction: column;\
  width: 100%;\
  max-width: 100%;\
  height: 184px;\
  font-size: 24px;\
  padding: 16px 15px;\
  margin-top: 18px;');

  navIcon.setAttribute('style', 'display: none;');

  logo.setAttribute('style', 'display: none;');

  btn.setAttribute('style', 'display: none');

  hdr.appendChild(cross); // add cross to the header

  for (let i = 0; i < rightArrow.length; i++) {
    rightArrow[i].setAttribute('style', 'display: initial;');
  }
}

btn.addEventListener('click', open); // calling the opening function

/** *********** The closing function *************** */
function close() {
  hdr.removeAttribute('style'); // remove the style attribute
  btn.removeAttribute('style'); // remove the style attribute
  hdr.removeChild(cross); // remove cross from header
  logo.removeAttribute('style'); // remove the style attribute
  navBar.removeAttribute('style');
  navIcon.removeAttribute('style');

  for (let i = 0; i < rightArrow.length; i++) {
    rightArrow[i].removeAttribute('style');
  }
}

for (let i = 0; i < navLinks.length; i++) {
  navLinks[i].addEventListener('click', close); // Use nav links to close the the mobile menu
}

cross.addE, close); // calling the closing function and reset the headerventListener('click'
