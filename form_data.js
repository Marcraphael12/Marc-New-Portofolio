const email = document.querySelector('.email');
const inputs = document.querySelectorAll('.input');
const lowerCase = (str) => /[a-z]/.test(str) && !/[A-Z]/.test(str); // functio to test if the email value is lower Case only

email.addEventListener('keyup', () => {
  if (email.validity.typeMismatch) {
    email.setCustomValidity('Hey dear, Sorry but i\'m waiting an email here!');
  } else {
    email.setCustomValidity('');
  }

  if (!lowerCase(email.value)) {
    email.setCustomValidity('Hey dear, use lower case only please!');
  }
});

for (let i = 0; i < inputs.length; i += 1) {
  inputs[i].addEventListener('keyup', () => {
    if (inputs[i].validity.valid) {
      inputs[i].style.border = '2px solid green';
    } else {
      inputs[i].style.border = '2px solid red';
    }
  });
}

// Local Storage
const name = document.querySelector('.name');
const message = document.querySelector('.message');
const textFields = document.querySelectorAll('input, textarea');

const saveData = (user, data) => localStorage.setItem(user, JSON.stringify(data));
const getData = (user) => JSON.parse(localStorage.getItem(user));

const formData = getData('formData');
if (formData !== null) {
  name.value = formData.name;
  email.value = formData.email;
  message.value = formData.message;
}

textFields.forEach((e) => {
  e.addEventListener('input', () => {
    const user = {
      name: name.value,
      email: email.value,
      message: message.value,
    };
    saveData('formData', user);
  });
});
