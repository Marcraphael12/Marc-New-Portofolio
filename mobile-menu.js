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

function removed(e) {
  e.style.display = 'none';
}

function displayed(e) {
  e.style.display = 'initial';
}

/** ********* The opening function ************** */
function open() {
  hdr.classList.toggle('mobile-header');
  navBar.classList.toggle('mobile-nav');

  removed(navIcon);
  removed(logo);
  removed(btn);

  hdr.appendChild(cross); // add cross to the header

  for (let i = 0; i < rightArrow.length; i++) { // Add the right arrow to every nav link
    rightArrow[i].style.display = 'initial';
  }
}

btn.addEventListener('click', open); // calling the opening function

/** *********** The closing function *************** */
function close() { // Reseting the header to the original
  hdr.classList.remove('mobile-header');
  navBar.classList.remove('mobile-nav');
  hdr.removeChild(cross);

  displayed(btn);
  displayed(logo);
  displayed(navIcon);

  for (let i = 0; i < rightArrow.length; i++) {
    rightArrow[i].style.display = 'none';
  }
}

for (let i = 0; i < navLinks.length; i++) {
  navLinks[i].addEventListener('click', close); // Use nav links to close the the mobile menu
}

cross.addEventListener('click', close); // calling the closing function and reset the headerventListener('click')
