/* 5. Реализовать класс для формы под названием "Form". Он бдует принимать один параметр - id формы. 
Внутри класса должны быть иетоды для получения всех значений формы, 
для проверки валидности формы, для сброса значений формы. */

export class Form {
  constructor(id) {
    this.formElement = document.getElementById(id);
  };
  
  getFormData(form) { 
    const formData = new FormData(form);
    const formValues = Object.fromEntries(formData.entries());
    return formValues;
  };
  
  isValid() {
    return this.formElement.checkValidity();
  };
  
  reset() {
    this.formElement.reset();
  };
};