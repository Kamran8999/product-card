/* 3 - функция, которая принимает 2 параметра: город и температуру и выводит 
сообщение в консоль "Сейчас в X температура  — Y градусов по Цельсию" */

function showWeather(country, temperature) {
  console.log(`Сейчас в ${country} температура - ${temperature} градусов по Цельсию`)
}

showWeather('Баку', '5')


/* 4 - создать переменную, которая хранит внутри себя скорость света. Создать функцию, которая принимает 1 аргумент - скорость, 
внутри функции происходит проверка: если переданная скорость выше скорости света - выводится лог (Сверхсветовая скорость), если ниже - 
(Субсветовая скорость), если равна - ("Скорость света") */

const SPEED_LIGHT = 299792458;

function compareSpeed(mySpeed) {
  if (mySpeed > SPEED_LIGHT) {
    console.log("Сверхсветовая скорость")
  } else if (mySpeed < SPEED_LIGHT) {
    console.log("Субсветовая скорость")
  } else {
    console.log("Скорость света")
  }
}

compareSpeed(299)


/* 5 - Создать переменную №1, которая содержит продукт и переменную №2, которая содержит его цену. Далее создаем функцию, 
которая принимает 1 параметр - текущий бюджет, внутри функции происходит проверка: 
если бюджет превышает цену товара - выводим лог "(ваше название товара) 
приобретён. Спасибо за покупку!", если нет - обсчитываем разницу и выводим лог "Вам не хватает X$, пополните баланс". */

const productName = "Молоко"
const productPrice = 89

const purchasingProduct = (myBudget) => {
  if (myBudget > productPrice) {
    const surplus = myBudget - productPrice
    console.log(`${productName} приобретено, ваш баланс ${surplus} рублей. Спасибо за покупку!`)
  } else {
    const flaw = productPrice - myBudget 
    console.log(`Вам не хватает ${flaw} рублей, пополните ваш баланс`)
  }
}

purchasingProduct(120)


/* 6 - Создать 1 функцию и именовать её по своему усмотрению */
/* 7 - Создать 3 переменных и именовать их по своему усмотрению */

var carNumber = "А839РО72"
let carColor = "Черный"
const сarMake = "BMW M4"

const сheckingMachineSpeed = (carSpeed) => {
  if (carSpeed > 60 && carSpeed < 100) {
    console.log(`Превышение скорости, ул. Восточный, номер авто: ${carNumber}, цвет: ${carColor}, марка: ${сarMake}. Штраф 1000 рублей`)
  } else if (carSpeed > 100 && carSpeed < 250) {
    console.log(`Превышение скорости, ул. Восточный, номер авто: ${carNumber}, цвет: ${carColor}, марка: ${сarMake}. Штраф 5000 рублей`)
  } else if (carSpeed > 250) {
    console.log(`Превышение скорости, ул. Восточный, номер авто: ${carNumber}, цвет: ${carColor}, марка: ${сarMake}. Штраф 10000 рублей`)
  }
}

сheckingMachineSpeed(20)