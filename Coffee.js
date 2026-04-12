import { Drink } from "./Drink.js";

export class Coffee extends Drink {
  constructor(name, size, price, typeGrain, typeMilk, grindingDegree, syrup) {
    super(name, size, price);
    this.typeGrain = typeGrain;
    this.typeMilk = typeMilk;
    this.grindingDegree = grindingDegree;
    this.syrup = syrup;
  };
  
  prepareDrink() {
    this.setTemperature(90);
  };
};
