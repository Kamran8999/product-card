// Покраска первой карточки

const firstProductCard = document.querySelector('.card-container')
const changeColorFirstCardButton = document.querySelector('#change-color-first-card')

changeColorFirstCardButton.addEventListener('click', () => {
  firstProductCard.style.backgroundColor = '#66dde4bb';
})


// Покраска всех карточек 

const productCards = document.querySelectorAll('.card-container')
const changeColorAllCardButton = document.querySelector('#change-color-all-card')

changeColorAllCardButton.addEventListener('click', () => {
  productCards.forEach((card) =>  card.style.backgroundColor = '#a8e1cf99')
}) 


// Кнопка открытия вкладки Google

const openGoogleButton = document.querySelector('#open-google-button')

openGoogleButton.addEventListener('click', () => {
  const linkGoogle = 'https://google.com';
  window.open(linkGoogle)
})


// Вывод consoleLog и alert

const outputLogButton = document.querySelector('#output-console-log');

outputLogButton.addEventListener('click', () => outputConsoleLog('ДЗ №4'))

function outputConsoleLog(message) {
  alert('Вы нажали на кнопку')
  console.log(message)
}


// Вывод на консоль заголовка при наведении

const pageTitle = document.querySelector('.title-catalog')

pageTitle.addEventListener('mouseover', function() {
  console.log(pageTitle.textContent)
})


// Кнопка меняющяя цвет при нажатии

const colorToggleButton = document.querySelector('#button-changing-color')

colorToggleButton.addEventListener('click', () => {
  colorToggleButton.classList.toggle('bg-turquoise');
})
