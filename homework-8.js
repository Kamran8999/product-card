/* 2 - Создать файл js, где будет хранится массив объектов, которые представляют собой продуктовые карточки из верстки. */

import { productCards } from "./products.js";

/* 3 - Создать и реализовать шаблон для продуктовых карточек */

const productTemplate = document.getElementById('product-template');
const productsContainer = document.querySelector('.products-container');

/* 4 - При помощи метода "reduce()" получить массив объектов, где ключем является название продукта, а значением - его описание */

const productDescriptions = productCards.reduce((descriptions, product) => {
  descriptions[product.name] = product.description
  return descriptions
}, {});

console.log(productDescriptions);

/* 5 - Разработать функцию, которая при запуске выводит сообщение "Сколько карточек отобразить? От 1 до 5"
и в зависимости от результата - будет выводить введенное количество. Также должна быть защита от ввода других значений */

const productCountPrompt = +prompt("Сколько карточек отобразить? От 1 до 5");

const validateAndSliceProducts = (productCount, products) => {
  if (productCount <=5 && productCount > 0) {
    const selectedProducts = products.slice(0, productCount)
    return selectedProducts
  } else {
    alert("Неккоректное значение, введите число от 1 до 5")
    return
  }
};

const showProducts = (products) => {
  products.forEach(product => {
    const productClone = productTemplate.content.cloneNode(true);
    productClone.querySelector('.image-product').src = product.image;
    productClone.querySelector('.product-category').textContent = product.category;
    productClone.querySelector('.product-name').textContent = product.name;
    productClone.querySelector('.product-description').textContent = product.description;
    productClone.querySelector('.product-compound').innerHTML = product.compound.map(item => `<li>${item}</li>`).join("");
    productClone.querySelector('.product-price-label').textContent = product.priceLabel;
    productClone.querySelector('.product-price').textContent = product.price + " \u20BD";
    productsContainer.appendChild(productClone);
  })
};

const selectedProducts = validateAndSliceProducts(productCountPrompt, productCards);

if (selectedProducts) {
  showProducts(selectedProducts)
};
