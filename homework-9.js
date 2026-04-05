import { Modal } from './Modal.js';
import { Form } from './Form.js';

/* 4 - Разработать логику для кнопки "Подписаться", при нажатии на которую мы будем выводить 
консоль лог в виде объекта: { email: 'введенная почта' } */

const subscribeForm = document.querySelector(".subscribe-form");

const getFormData = (form) => {
  const formData = new FormData(form);
  const formValues = Object.fromEntries(formData.entries());
  return formValues;
};

subscribeForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const form = event.target;
  const formValues = getFormData(form);
  console.log(formValues);
});

/* 5 - Создать кнопку "Регистрация", разработать логику, при нажатии на нопку должна открыться модальное окно */

/* 10 ДЗ  4. Создать класс для модального окна который будет принимать 1 параметр через конструктор - id. 
Внутри класса должны быть методы для открытия, закрытия, проверки открыто ли сейчас модальное окно, а также метод
который слушает кнопку (крестик) для закрытия модалки и закрывает модалку и вызывать в конструкторе */

const registrationModal = new Modal('reg-modal');
const registrationButton = document.querySelector(".registration-button");
registrationButton.addEventListener('click', ( ) => registrationModal.open());


/* 6 - Разработать логику для модального окна регистрации, все поля модалки должны иметь валидацию. Если пользователь ввел два 
разных пароля или форма невалидна регистрация в данном случае отклоняется, а пользователь получает уведомление. Если регистрация успешна - 
выводим значения формы в лог. Такдже необходимо к объекту добавить свойство "createdOn" которая будет указывать на время создания.
Далее необходимо создать внешнюю переменную "user" и присвоить ему этот объект. После успешной регистрации модалка должна закрыться. */

/* 10 ДЗ  5. Реализовать класс для формы под названием "Form". Он бдует принимать один параметр - id формы. 
Внутри класса должны быть иетоды для получения всех значений формы, 
для проверки валидности формы, для сброса значений формы. */


const registrationForm = new Form('reg-form');

registrationForm.formElement.addEventListener('submit', (event) => {
  event.preventDefault();
  if (!registrationForm.isValid()) {
    alert("Регистрация отклонена");
    return;
  };
  const formData = registrationForm.getFormData(registrationForm.formElement);
  if (formData.password !== formData["repeat-password"]) {
    alert("Пароли не совпадают")
    return;
  };
  formData.createdOn = new Date();
  console.log(formData);
  registrationForm.reset();
  registrationModal.close(); 
});