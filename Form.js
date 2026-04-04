/* 5. Реализовать класс для формы под названием "Form". Он бдует принимать один параметр - id формы. 
Внутри класса должны быть иетоды для получения всех значений формы, 
для проверки валидности формы, для сброса значений формы. */

export class Form{
  constructor(id) {
    this.id = id;
    this.formElement = document.getElementById(id);
  };
  
  getFormData() { 
    const inputs = this.formElement.querySelectorAll('input');
    const formData = {};
    inputs.forEach((field) => {
      formData[field.name] = field.value;
    });
    return formData;
  };
  
  isValid() {
    return this.formElement.checkValidity();
  };
  
  reset() {
    this.formElement.reset();
  }
}