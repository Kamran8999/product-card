// 3. Создать структуру и реализовать наследуемость классов 
import { Airliner } from "./Airliner.js";

export class BusinessJet extends Airliner {
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