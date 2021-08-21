/* eslint-disable no-multi-str */
const hdr = document.querySelector('.pg-hdr'); // the header element
const btn = document.querySelector('.btn'); // the opening button
const logo = document.querySelector('.pg-hdr h3');

/** ******* The closig button *********** */
const cross = document.createElement('button');
cross.setAttribute('style', '\
width: max-content;\
background: none;\
font-weight: 500;\
font-size: 24px;\
border: none;\
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