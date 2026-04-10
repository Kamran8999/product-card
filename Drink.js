// 11 ДЗ ООП

export class Drink{
  #temperature  
  constructor(name, size, price) {
    this.name = name;
    this.size = size;
    this.price = price;
    this.#temperature = 0;
  };
  
  getInfo() {
    return {
      name: this.name, 
      size: this.size, 
      price: this.price, 
      temperature: this.#temperature,
    };
  };
  
  getTemperature() {
    return this.#temperature;
  };
  
  setTemperature(temperature) {
    if (temperature >= -10 && temperature <= 100) {
      this.#temperature = temperature;
    } else console.log("Значение превышает допустимый диапазон");
  };
  
  #prepareDrink() {
    if (this instanceof Drink.Coffee) {
      this.setTemperature(90);
    } else if (this instanceof Drink.Tea) {
      this.setTemperature(80);
    } else if (this instanceof Drink.Lemonade) {
      this.setTemperature(2);
    } else {
      this.setTemperature(1);
    };
  };
  
  serveDrink() {
    this.#prepareDrink();
    console.log(`Ваш ${this.name} готов!`);
  };
};