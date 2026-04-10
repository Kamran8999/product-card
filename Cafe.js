// 11 ДЗ ООП

export class Cafe{
  constructor(name, location) {
    this.name = name;
    this.location = location;
  };
  
  getInfo() {
    return {
      name: this.name, 
      location: this.location, 
    };
  };
  
  drinkOrder(drink) {
    drink.serveDrink();
  };
};