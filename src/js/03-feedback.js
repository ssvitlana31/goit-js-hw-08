import throttle from 'lodash.throttle';

const LOCAL_KEY = 'feedback-form-state';

const formEl = document.querySelector('.feedback-form');
formEl.addEventListener('input', throttle(onInputData, 500));
formEl.addEventListener('submit', onFormSubmit);

let dataForm = JSON.parse(localStorage.getItem(LOCAL_KEY)) || {};
const { email, message } = formEl.elements;
reloadForm();

function onInputData(e) {
  dataForm = { email: email.value, message: message.value };
  localStorage.setItem(LOCAL_KEY, JSON.stringify(dataForm));
}

function reloadForm() {
  if (dataForm) {
    email.value = dataForm.email || '';
    message.value = dataForm.message || '';
  }
}

function onFormSubmit(e) {
  e.preventDefault();

  if (email.value === '' || message.value === '')
    return alert(`Invalid data entered!!!`);
  console.log({ email: email.value, message: message.value });

  localStorage.removeItem(LOCAL_KEY);
  e.currentTarget.reset();
  dataForm = {};
}
