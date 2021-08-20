/* eslint-disable no-multi-str */
const hdr = document.querySelector('.pg-hdr'); // the header element
const btn = document.querySelector('.btn'); // the opening button

/** ******* The closig button *********** */
const cross = document.createElement('button');
cross.setAttribute('style', '\
width: max-content;\
background: none;\
font-weight: 500;\
font-size: 20px;\
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
  background-color: blue;\
  flex-direction: column-reverse;\
  justify-content: flex-end;');

  btn.setAttribute('style', 'display: none');

  hdr.appendChild(cross); // add cross to the header
}

btn.addEventListener('click', open); // calling the opening function

/** *********** The closing function *************** */
function close() {
  hdr.removeAttribute('style'); // remove the style attribute
  btn.removeAttribute('style'); // remove the style attribute
  hdr.removeChild(cross); // remove cross from header
}

cross.addEventListener('click', close); // calling the closing function and reset the header