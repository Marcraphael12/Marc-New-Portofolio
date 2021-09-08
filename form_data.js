/* eslint-disable no-multi-str */
/* eslint-disable no-plusplus */
/* eslint-disable quotes */
/* eslint-disable prefer-destructuring */

const email = document.querySelector('.email');
const inputs = document.querySelectorAll('.input');

email.addEventListener("keyup", function (event) {
  if(email.validity.typeMismatch) {
    email.setCustomValidity("Hey dear, Sorry but i'm waiting an email here!");
  } else {
    email.setCustomValidity("");
  }
});

for (let i = 0; i < inputs.length; i++) {
	inputs[i].addEventListener("keyup", function (event) {
		if (inputs[i].validity.valid) {
			inputs[i].style.border = '2px solid green';
		}
		else {
			inputs[i].style.border = '2px solid red';
		}
	});
}
