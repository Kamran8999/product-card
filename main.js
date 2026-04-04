// 2. Импортировать все js файлы в главный "main.js"
import './homework-4.js';
import './homework-5.js';
import './homework-6.js';
import './homework-7.js';
import './homework-8.js';
import './homework-9.js'; 
import { Modal } from './Modal.js';
import { Form } from './Form.js';

// 3. Создать структуру и реализовать наследуемость классов 

class Airliner{
  constructor(company, manufacturer, model, seatCount) {
    this.company = company;
    this.manufacturer = manufacturer;
    this.model = model;
    this.seatCount = seatCount;
  };
  
  showInfoAirplane() {
    console.log(`Авиакомпания: ${this.company}, Производитель: ${this.manufacturer}, Модель: ${this.model}, Количество мест: ${this.seatCount}`);
  };
};

class BusinessJet extends Airliner{
  constructor(company, manufacturer, model, seatCount, price) {
    super(company, manufacturer, model, seatCount);
    this.price = price;
  };
  
  showInfoBusinessJet() {
    super.showInfoAirplane();
    console.log(`Стоимость: ${this.price}`);
  };
};

const emiratesPlane = new Airliner('Emirates', 'Airbus', 'A380-800', 644);
const saudiArabianPlane = new Airliner('Saudi Arabian', 'Boeing', '787 Dreamliner', 330);
const netJetsPlane = new BusinessJet('NetJets', 'Cessna', 'Citation Latitude', 9, '16млн$');
emiratesPlane.showInfoAirplane();
saudiArabianPlane.showInfoAirplane();
netJetsPlane.showInfoBusinessJet();


/* 4. Создать класс для модального окна который будет принимать 1 параметр через конструктор - id. 
Внутри класса должны быть методы для открытия, закрытия, проверки открыто ли сейчас модальное окно, а также метод
который слушает кнопку (крестик) для закрытия модалки и закрывает модалку и вызывать в конструкторе
*/

const registrationModal = new Modal('reg-modal');
const registrationButton = document.querySelector(".registration-button");
registrationButton.addEventListener('click', ( ) => registrationModal.open());


/* 5. Реализовать класс для формы под названием "Form". Он бдует принимать один параметр - id формы. 
Внутри класса должны быть иетоды для получения всех значений формы, 
для проверки валидности формы, для сброса значений формы. */

const registrationForm = new Form('reg-form');

registrationForm.formElement.addEventListener('submit', (event) => {
  event.preventDefault();
  if (!registrationForm.isValid()) {
    alert("Регистрация отклонена");
    return;
  };
  const formData = registrationForm.getFormData();
  if (formData.password !== formData["repeat-password"]) {
    alert("Пароли не совпадают")
    return;
  };
  formData.createdOn = new Date();
  console.log(formData);
  registrationForm.reset();
  registrationModal.close(); 
});