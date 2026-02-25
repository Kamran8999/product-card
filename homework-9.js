/* 4 - Разработать логику для кнопки "Подписаться", при нажатии на которую мы будем выводить 
консоль лог в виде объекта: { email: 'введенная почта' } */

const subscribeForm = document.querySelector(".subscribe-form");

subscribeForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const form = event.target;
  const formData = new FormData(form);
  const formValues = Object.fromEntries(formData.entries());
  console.log(formValues);
});

/* 5 - Создать кнопку "Регистрация", разработать логику, при нажатии на нопку должна открыться модальное окно */

const registrationButton = document.querySelector(".registration-button");
const registrationModal = document.querySelector(".registration-modal");
const closeModalButton = document.querySelector(".close-modal-button");

registrationButton.addEventListener('click', ( ) => {
  registrationModal.classList.add('modal-showed');
});

closeModalButton.addEventListener('click', ( ) => {
  registrationModal.classList.remove('modal-showed');
});

/* 6 - Разработать логику для модального окна регистрации, все поля модалки должны иметь валидацию. Если пользователь ввел два 
разных пароля или форма невалидна регистрация в данном случае отклоняется, а пользователь получает уведомление. Если регистрация успешна - 
выводим значения формы в лог. Такдже необходимо к объекту добавить свойство "createdOn" которая будет указывать на время создания.
Далее необходимо создать внешнюю переменную "user" и присвоить ему этот объект. После успешной регистрации модалка должна закрыться. */

let user;
const registrationForm = document.querySelector(".registration-form");

registrationForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const form = event.target; 
   if (!form.checkValidity()) {
    alert("Регистарция отклонена")
    return;
  };
  const registrationFormData = new FormData(form);
  const userData = Object.fromEntries(registrationFormData.entries());
  if (userData.password !== userData["repeat-password"]) {
    alert("Пароли не совпадают")
    return;
  };
  userData.createdOn = new Date(); 
  user = userData;
  console.log(userData);
  registrationModal.classList.remove('modal-showed');
});