// 2. Импортировать все js файлы в главный "main.js"
import './homework-4.js';
import './homework-5.js';
import './homework-6.js';
import './homework-7.js';
import './homework-8.js';
import './homework-9.js'; 
import { Airliner } from './Airliner.js';
import { BusinessJet } from './BusinessJet.js';
import { Drink } from './Drink.js';
import { Cafe } from './Cafe.js';
import { Coffee } from './Coffee.js';
import { Lemonade } from './lemonade.js';
import { Tea } from './Tea.js';
import { Cocktail } from './Сocktail.js';

Drink.Coffee = Coffee;
Drink.Tea = Tea;
Drink.Lemonade = Lemonade;


const emiratesPlane = new Airliner('Emirates', 'Airbus', 'A380-800', 644);
const saudiArabianPlane = new Airliner('Saudi Arabian', 'Boeing', '787 Dreamliner', 330);
const netJetsPlane = new BusinessJet('NetJets', 'Cessna', 'Citation Latitude', 9, '16млн$');
emiratesPlane.showInfoAirplane();
saudiArabianPlane.showInfoAirplane();
netJetsPlane.showInfoBusinessJet();

// 11 ДЗ ООП
const latte = new Coffee("Latte", "250мл", "300 руб.", "Робуста", "Цельное молоко 3%", "Тонкий", "шоколадный сироп");
const orderLatte = new Cafe("Avril Resto Cafe", "ул. Губкина, дом 4");
console.log(orderLatte.getInfo());
orderLatte.drinkOrder(latte);
console.log(latte.getInfo());

const chineTea = new Tea("Лунцзин", "300мл", "450 руб.", "Китай", "Зеленый чай", "5-20 сек.", "мягкий");
const orderTea = new Cafe("MADO", "мкр. Восточный, дом 5/2");
console.log(orderTea.getInfo());
orderTea.drinkOrder(chineTea);
console.log(chineTea.getInfo());

const natakhtariLemonade = new Lemonade("Natakhtari GEO", "0.5 л.", "120 руб.", "45 ккал", "Виноград", "12 г.", "газированный");
const orderLemonade = new Cafe("MADO", "мкр. Восточный, дом 5/2");
console.log(orderLemonade.getInfo());
orderLemonade.drinkOrder(natakhtariLemonade);
console.log(natakhtariLemonade.getInfo());

const strawberryCocktail = new Cocktail("Strawberry Cocktail", "250 мл.", "330 руб.", "Клубничный", "Шоколадный сироп", "Средний", "без топпинга");
const orderCocktail = new Cafe("Sensum Coffe", "мкр. Мирный, дом 7/8");
console.log(orderCocktail.getInfo());
orderCocktail.drinkOrder(strawberryCocktail);
console.log(strawberryCocktail.getInfo());