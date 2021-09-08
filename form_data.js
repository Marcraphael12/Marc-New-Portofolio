/* eslint-disable no-multi-str */
/* eslint-disable no-plusplus */
/* eslint-disable quotes */
/* eslint-disable prefer-destructuring */

const email = document.querySelector('.email');

email.addEventListener("keyup", function (event) {
  if(email.validity.typeMismatch) {
    email.setCustomValidity("Hey dear, Sorry but i'm waiting an email here!");
  } else {
    email.setCustomValidity("");
  }
});
