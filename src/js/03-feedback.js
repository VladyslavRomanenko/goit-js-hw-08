import throttle from 'lodash.throttle';
const formRef = document.querySelector('.feedback-form');
const emailRef = document.querySelector('[name="email"]');
const messageRef = document.querySelector('[name="message"]');

// Збереження даних з інпуту в localStorage
const saveDataToLocaleStorage = event => {
  event.preventDefault();
  const formData = { email: emailRef.value, message: messageRef.value };
  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
};

formRef.addEventListener('input', throttle(saveDataToLocaleStorage, 500));

//заповнення полів при завантаженні

const loadDataFromLocaleStorage = () => {
  const savedData = localStorage.getItem('feedback-form-state');
  if (savedData) {
    const formData = JSON.parse(savedData);
    emailRef.value = formData.email;
    messageRef.value = formData.message;
  }
  return savedData;
};

window.addEventListener('load', loadDataFromLocaleStorage);

//очищення після submit

const clearDataFromLocaleAndResetForm = event => {
  event.preventDefault();
  const data = loadDataFromLocaleStorage();
  console.log(data);

  //   const savedData = JSON.parse(localStorage.getItem('feedback-form-state'));
  //   const formData = { email: savedData.email, message: savedData.message };
  //   console.log(formData);

  localStorage.removeItem('feedback-form-state');
  formRef.reset();
};
formRef.addEventListener('submit', clearDataFromLocaleAndResetForm);
