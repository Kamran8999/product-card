import { Drink } from "./Drink.js";

export class Lemonade extends Drink {
  constructor(name, size, price, calorieСontent, taste, sweetness, sparkling) {
    super(name, size, price);
    this.calorieСontent = calorieСontent;
    this.taste = taste;
    this.sweetness = sweetness;
    this.sparkling = sparkling;
  };
  
  prepareDrink() {
    this.setTemperature(5);
  };
};