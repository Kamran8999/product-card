// 3. Создать структуру и реализовать наследуемость классов 

export class Airliner{
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