import { Drink } from "./Drink.js";

export class Cocktail extends Drink{
  constructor(name, size, price, taste, syrup, iceLevel, toppings) {
    super(name, size, price);
    this.taste = taste;
    this.syrup = syrup;
    this.iceLevel = iceLevel;
    this.toppings = toppings;
  };
};