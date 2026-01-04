/* 3 - Создать объект на основе своих данных */

const person = {
  firstname: "Kamran",
  lastname: "Shamshiyev",
  age: 19,
  mail: "kamran.shamshiyev.22@gmail.com",
  job: "Developer",
  position: "Junior Frontend Developer",
  country: "Russia",
  city: "Novy Urengoy",
  relationshipStatus: "single",
}

/* 4 - Создать объект с данными об автомобиле. Также добавить дополнительное свойство - владелец авто */ 

const car = {
  carMake: "Hyundai",
  model: "Tucson",
  modelYear: 2020,
  color: "Dusk Blue",
  transmissionType: "Automatic transmission",
}

car.carOwner = person
console.log(car)

/* 5 - Разработать функцию которая принимает объект и проверяет наличие свойства 
"максимальная скорость", если нет - добавляет его и задает значение, если есть - прекращает выполнение  */

const addMaxSpeed = (carInfo) => {
  if ("maxSpeed" in carInfo) {
    return;
  }
    carInfo.maxSpeed = 240
}

addMaxSpeed(car)

/* 6 - Написать функцию, которая получает первым аргументом  — объект, 
а вторым аргументом — свойство объекта, которое нужно вывести и выводит его значение. */

const outputAircraftInfo = (airplane, model) => {
  console.log(airplane[model])
}

const airplaneInfo = {
  model: "Airbus 380-800"
}

outputAircraftInfo(airplaneInfo, "model")

/* 7 - Создать массив, который содержит названия продуктов (строки) */

const products = [
  "milk",
  "oatmeal",
  "nuts",
  "bread",
  "chocolate",
  "cheese"
];

/* 8 - Создать массив, состоящий из объектов книг (или что-то своё), далее добавить еще один массив 
в конец списка при помощи метода или оператора*/
 
const footballTeams = [
  { 
    teamName: "Manchester City", 
    league: "Premier League",
    dateFoundation: 1880,
    clubPresident: "Khaldoon Al Mubarak",
    headСoach: "Pep Guardiola", 
    teamCaptain: "Bernardo Silva"
  },
  
  { 
    teamName: "Arsenal", 
    league: "Premier League",
    dateFoundation: 1886,
    clubPresident: "Ken Friar",
    headСoach: "Mikel Arteta", 
    teamCaptain: "Martin Edegaard"
  },
  
  { 
    teamName: "Real Madrid", 
    league: "Laliga",
    dateFoundation: 1902,
    clubPresident: "Florentino Perez",
    headСoach: "Xabi Alonso", 
    teamCaptain: "Dani Carvajal"
  },
  
  { 
    teamName: "Paris Saint-Germain", 
    league: "Ligue 1",
    dateFoundation: 1970,
    clubPresident: "Nasser Al-Khelaifi",
    headСoach: "Luis Enrique", 
    teamCaptain: "Marquinhos"
  },
  
  { 
    teamName: "Al-Hilal",
    league: "Saudi Pro League",
    dateFoundation: 1957,
    clubPresident: "Fahad bin Nafel",
    headСoach: "Simone Inzaghi", 
    teamCaptain: "Salim al-Dawsari"
  },
];

footballTeams.push(
  { 
    teamName: "Milan",
    league: "Serie A",
    dateFoundation: 1899,
    clubPresident: "Paolo Scaroni",
    headСoach: "Massimiliano Allegri", 
    teamCaptain: "Mike Manyan"
  }
)

console.log(footballTeams)

/* 9 - Создать еще один массив и соединить с массивом с предыдущего задания. С помощью метода массива или оператора, 
объединить эти два массива в один */

const seriaAClub = [
  {
    teamName: "Inter Milan",
    league: "Serie A",
    dateFoundation: 1908,
    clubPresident: "Giuseppe Marotta",
    headСoach: "Christian Chivu", 
    teamCaptain: "Lautaro Martinez"
  },
  
  {
    teamName: "Juventus",
    league: "Serie A",
    dateFoundation: 1897,
    clubPresident: "Gianluca Ferrero",
    headСoach: "Luciano Spalletti", 
    teamCaptain: "Manuel Locatelli"
  }
];

const allFootballTeams = [...footballTeams, ...seriaAClub]
console.log(allFootballTeams)

/* 10 - Написать функцию, которая принимает массив сущностей с предыдущего задания. 
Далее добавить новое свойство "isRare" для объекта, которая будет принимать true или false в зависимости от года создания команды. */

 const isFootballTeamOld = (oldClub) => {
  return oldClub.map(allFootballTeams => {
    
    allFootballTeams.isOld = allFootballTeams.dateFoundation < 1900
    return allFootballTeams
  })
 }
 
 isFootballTeamOld(allFootballTeams) 