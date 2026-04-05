/* 4. Создать класс для модального окна который будет принимать 1 параметр через конструктор - id. 
Внутри класса должны быть методы для открытия, закрытия, проверки открыто ли сейчас модальное окно, а также метод
который слушает кнопку (крестик) для закрытия модалки и закрывает модалку и вызывать в конструкторе
*/

export class Modal {
  constructor(id) {
    this.modalElement = document.getElementById(id);
    this.setupCloseButton();
  };
  
  open() {
    this.modalElement.classList.add('modal-showed');
  };
  
  close() {
    this.modalElement.classList.remove('modal-showed');
  };
  
  isOpen() {
    return this.modalElement.classList.contains('modal-showed');
  };
  
  setupCloseButton() {
    this.modalElement.querySelector(".close-modal-button").addEventListener('click', () => {
      this.close();
    });
  };
};

