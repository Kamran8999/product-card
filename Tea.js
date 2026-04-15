import { Drink } from "./Drink.js";

export class Tea extends Drink {
  constructor(name, size, price, origin, variet, brewingTime, strength) {
    super(name, size, price);
    this.origin = origin;
    this.variet = variet;
    this.brewingTime = brewingTime;
    this.strength = strength;
  };
  
  serveDrink() {
    super.prepareDrink(80);
    super.serveDrink();
  };
};