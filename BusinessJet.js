// 3. Создать структуру и реализовать наследуемость классов 
import { Airliner } from "./Airliner.js";

export class BusinessJet extends Airliner{
  constructor(company, manufacturer, model, seatCount, price) {
    super(company, manufacturer, model, seatCount);
    this.price = price;
  };
  
  showInfoBusinessJet() {
    super.showInfoAirplane();
    console.log(`Стоимость: ${this.price}`);
  };
};