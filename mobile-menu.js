/* eslint-disable no-multi-str */
const hdr = document.querySelector('.pg-hdr'); // the header element
const btn = document.querySelector('.btn'); // the opening button
const logo = document.querySelector('.pg-hdr h3');
const navBar = document.querySelector('.dsk-btn')
const navLinks = document.querySelectorAll('.nav-link');
const rightArrow = document.querySelectorAll('r-arrow');

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
  flex-direction: column;\
  justify-content: start;');

  navBar.setAttribute('style', '\
  display: flex;\
  flex-direction: column;\
  width: 100%;\
  max-width: 327px;\
  height: 184px;\
  font-size: 24px;')

  logo.setAttribute('style', 'display: none;');

  btn.setAttribute('style', 'display: none');

  hdr.appendChild(cross); // add cross to the header
}

btn.addEventListener('click', open); // calling the opening function

/** *********** The closing function *************** */
function close() {
  hdr.removeAttribute('style'); // remove the style attribute
  btn.removeAttribute('style'); // remove the style attribute
  hdr.removeChild(cross); // remove cross from header
  logo.removeAttribute('style') // remove the style attribute
}

cross.addEventListener('click', close); // calling the closing function and reset the header