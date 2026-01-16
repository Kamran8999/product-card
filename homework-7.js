import {userСomments} from "./comments.js"

/* 2 - Создать массив чисел от 1 до 10. Отфильтровать таким образом, чтобы мы получили массив из чисел начиная с 5. */
 
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const newArrayNumbers = numbers.filter(number => number >= [5])

console.log(newArrayNumbers)

/* 3 -  Создать массив строк любой сущности и проверить, есть ли в массиве какая-то определенная сущность. */

const phoneManufacturers = ["Apple", "Samsung", "Xiaomi", "Honor", "Huawei", "Google Pixel", "Tecno", "Realme"]

const hasAppleManufacturer = phoneManufacturers.includes("Apple")

console.log(hasAppleManufacturer)

/* 4 - Написать функцию, которая принимает аргументом массив и ихменяет его порядок на противоположный. 
Перевернуть две предыдущих массива. */

const flipArray = (array) => {
  array.reverse()
  console.log(array)
}

flipArray(newArrayNumbers)
flipArray(phoneManufacturers)

/* 5 - Добавить файл comments.js, в нём создать константу и в него поместить первые 10 объектов из массива по ссылке */

/* 6 - Сделать константу экспортируемой, добавив ключевое слово "export". */

/* 7 - Вывести в консоль массив тех комментариев, почта пользователей которых содержит ".com". */

const commentsWithComEmail = userСomments.filter(comment => comment.email.includes(".com"))

console.log(commentsWithComEmail)

/* 8 - Перебрать массив таким образом, что бы пользователи с id <= 5 имели postId: 2, 
а те, у кого id > 5, имели postId: 1 */

const commentsWithUpdatedPostId = userСomments.map(comment => {
  return {...comment, postId: comment.id <= 5 ? 2 : 1}
})

console.log(commentsWithUpdatedPostId)

/* 9 - Перебрать массив, что бы объекты состояли только из id и name */

const commentsArrayName = userСomments.map(({id, name}) => ({id, name}));

console.log(commentsArrayName)

/* 10 - Перебрать массив и добавить объектам свойство isInvalid и проверить длину сообщения: 
если длина тела сообщения больше 180 символов - установить true, меньше - false. */

const commentsWithValidation  = userСomments.map(comment => {
  return {...comment, isInvalid: comment.body.length > 180}
})

console.log(commentsWithValidation)

/* 11 - Вывести массив почт и провернуть тоже самое с помощью метода map */

const userEmails = userСomments.reduce((emails, comment) => {
  emails.push(comment.email)
  return emails;
}, [])

console.log(userEmails)

// с использвоанием метода "map"

const emails = userСomments.map(comment => comment.email);

console.log(emails)

/* 12 - Перебрать массив с задания №11, привести его к строке. */

const emailsAsString = emails.toString()
const emailsString  = emails.join()

console.log(emailsAsString )
console.log(emailsString)