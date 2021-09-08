/* eslint-disable no-multi-str */
/* eslint-disable no-plusplus */
/* eslint-disable quotes */
/* eslint-disable prefer-destructuring */

const email = document.querySelector('.email');
const inputs = document.querySelectorAll('.input');
const lowerCase = (str) => /[a-z]/.test(str) && !/[A-Z]/.test(str); // functio to test if the email value is lower Case only

email.addEventListener("keyup", () => {
  if (email.validity.typeMismatch) {
    email.setCustomValidity("Hey dear, Sorry but i'm waiting an email here!");
  } else {
    email.setCustomValidity("");
  }

  if (!lowerCase(email.value)) {
    email.setCustomValidity("Hey dear, use lower case only please!");
  }
});

for (let i = 0; i < inputs.length; i++) {
  inputs[i].addEventListener("keyup", () => {
    if (inputs[i].validity.valid) {
      inputs[i].style.border = '2px solid green';
    } else {
      inputs[i].style.border = '2px solid red';
    }
  });
}
