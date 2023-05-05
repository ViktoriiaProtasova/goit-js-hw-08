import throttle from 'lodash.throttle';
import debounce from 'lodash.debounce';

// Отримання відомостей форми та елементів введення
const form = document.querySelector('form');
const emailInput = document.querySelector('[type="email"]');
const messageInput = document.querySelector('[name="message"]');

// Функція для збереження даних у локальне сховище
const saveFormState = throttle(function () {
  const state = {
    email: emailInput.value,
    message: messageInput.value,
  };
  localStorage.setItem('feedback-form-state', JSON.stringify(state));
}, 500);

// Додати обробник події для введення
form.addEventListener(
  'input',
  debounce(event => {
    saveFormState();
  }, 1500)
);

// Відновити стан форми після завантаження сторінки
window.addEventListener('load', function () {
  const state = localStorage.getItem('feedback-form-state');
  if (state) {
    const { email, message } = JSON.parse(state);
    emailInput.value = email;
    messageInput.value = message;
  }
});

// Очистити сховище і поля форми gід час сабміту форми
form.addEventListener('submit', submitedForm);

function submitedForm(event) {
  event.preventDefault();
  const state = {
    email: emailInput.value,
    message: messageInput.value,
  };

  localStorage.removeItem('feedback-form-state');

  console.log(state);

  emailInput.value = '';
  messageInput.value = '';
}
