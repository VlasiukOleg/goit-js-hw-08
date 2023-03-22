import throttle from 'lodash.throttle';

const STORAGE_KEY = 'feedback-form-state';

const formEl = document.querySelector('.feedback-form');

const formData = {};

formEl.addEventListener('input', throttle(onChangeInput, 10000));
formEl.addEventListener('submit', onSubmitForm);

onCheckLocalStorage();

function onChangeInput({ target }) {
  const { value } = target;

  localStorage.setItem('STORAGE_KEY', JSON.stringify(formData));

  formData[target.name] = value;
}

function onSubmitForm(event) {
  event.preventDefault();

  localStorage.removeItem('STORAGE_KEY');

  formEl.reset();

  console.log(formData);
}

function onCheckLocalStorage() {
  const savedData = localStorage.getItem('STORAGE_KEY');
  const parsedData = JSON.parse(savedData);

  if (savedData) {
    formEl.elements.email.value = parsedData.email || '';
    formEl.elements.message.value = parsedData.message || '';
  }
}
