/* 3 - Создать объект на основе следующих данных: Имя, фамилия, 
почта, работа, должность, возраст, страна, город, статус отношений 
и так далее. Подобрать правильное название для переменной. */

const person = {
  firstname: "Камран",
  lastname: "Шамшиев",
  age: 19,
  mail: "kamran.shamshiyev.22@gmail.com",
  job: "Developer",
  position: "Junior Frontend Developer",
  country: "Россия",
  city: "Новый Уренгой",
  relationshipStatus: "холост",
}


/* 4 - Создать объект, который будет хранить данные об автомобиле (марка, модель, год выпуска, цвет, вид коробки). 
Добавить дополнительное свойство - владелец авто, значением которого будет ОБЪЕКТ, описанный в пункте №3. 
Также добавлять отдельной строкой     car owner*/ 

const car = {
  carMake: "Hyundai",
  model: "Tucson",
  modelYear: 2020,
  color: "Dusk Blue",
  transmissionType: "Automatic transmission",
  carOwner: person
}


/* 5 - Написать функцию которая аргументом будет принимать объект, описанный в пункте №4. Она проверяет, 
есть ли в объекте свойство "максимальная скорость", если нет - добавляет его и задает значение, если есть - 
прекращает выполнение (ничего не делает) */

const checkMaxSpeed = (car) => {
  if ("maxSpeed" in car) {
    console.log(`Максимальная скорость равна ${car.maxSpeed}`)
    return
  }
  
    car.maxSpeed = 240
    console.log(`Максимальная скорость автомобиля ${car.maxSpeed}`)
}

checkMaxSpeed(car)


/* 6 - Написать функцию, которая получает первым аргументом  — объект, 
а вторым аргументом — свойство объекта, которое нужно вывести и выводит его значение. */

const outputObject = (object, property) => {
  console.log(object[property])
}

const user = {
  name: "Kamran"
}

outputObject(user, "name")


/* 7 - Создать массив, который содержит названия продуктов (строки) */

const products = [
  "Молоко",
  "Овсянка",
  "Хлеб",
  "Йогурт",
  "Шоколад",
  "Сыр"
]


/* 8 - Создать массив, состоящий из объектов, где объект представляет собой книгу 
(название, автор, год выпуска, цвет обложки, жанр) (3-5 книг). После, используя известный метод массив, 
добавить еще одну книгу в конец списка. */
 
const setBooks = [
  { name: "Атомные привычки", author: "Джеймс Клир", yearRelease: 2020, coverColor: "Белый", genre: "Личная эффективность"},
  { name: "Этичный хакинг", author: "Юрген Эбнер", yearRelease: 2025, coverColor: "Темно-зеленый", genre: "Компьютерная литература"},
  { name: "Война и мир", author: "Лев Толстой", yearRelease: 1868, coverColor: "бордовый", genre: "Роман-эпопея"},
  { name: "Мидлмарч", author: "Джордж Элиот", yearRelease: 1871, coverColor: "синий", genre: "Роман"},
  { name: "Унесенные ветром", author: "Маргарет Митчелл", yearRelease: 1936, coverColor: "бежевый", genre: "Драма"},
]
setBooks.push({ name: "Властелин колец. Братство кольца", author: "Джон Рональд Руэл Толкин", yearRelease: 1954, coverColor: "черный", genre: "Фэнтези"})

console.log(setBooks)


/* 9 - Создать еще один массив, состоящих из тех же книг, но относящийся к определенной вселенной 
(Гарри Поттер, Марвел и так далее). С помощью известного нам метода массива или оператора, объединить эти два массива в один */

const booksFantasy = [
  {name: "Властелин колец. Две крепости", author: "Джон Рональд Руэл Толкин", yearRelease: 1954, coverColor: "черный", genre: "Фэнтези"},
  {name: "Властелин колец. Возвращение короля", author: "Джон Рональд Руэл Толкин", yearRelease: 1954, coverColor: "черный", genre: "Фэнтези"}
]

const allBooks = [...setBooks, ...booksFantasy]
console.log(allBooks)


/* 10 - Написать функцию, которая принимает массив сущностей с задания №9. 
Добавить новое свойство для объекта "isRare" и в зависимости от года выпуска книги (или какой-то логики, связанной с вашей сущностью), 
установить true или false. Если книга выпущена позже 2000 года, устанавливаем true (да, это редкий), нет - false (значит это не редкий). */

 const isBookRare =  (rareBook) => {
  return rareBook.map((allBooks)=> {
    
    if (allBooks.yearRelease > 2000) {
      allBooks.isRare = true 
    } else {
      allBooks.isRare = false
    }
    
    return allBooks
  })
 }
 
 isBookRare(allBooks) 