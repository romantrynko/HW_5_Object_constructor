// 1.
//-  Створити функцію конструктор для об'єкту який описує теги
// Властивості
// -назва тегу
// - опис його дій
// - масив з атрибутами (2-3 атрибути максимум)
// Кожен атрибут описати як окремий який буде містити
// -назву атрибуту
// -опис дії атрибуту
// інформацію брати з htmlbook.ru
//Таким чином описати теги
//  -a
//  -div
//  -h1
//  -span
//  -input
//  -form
//  -option
//  -select

// function Tag (tagName, tagAction, attributes = []) {
//         this.tagName = tagName;
//         this.tagAction = tagAction;
//         this.attributes = attributes;

//         this.addAttributes = function (attName, attAction) {
//             this.attributes.push(attName)
//             this.attributes.push(attAction)
//         }   

//     }

// let aTag = new Tag('a', 'является одним из важных элементов HTML и предназначен для создания ссылок.')
// aTag.addAttributes('rev', 'Отношения между текущим и ссылаемым документами.')
// aTag.addAttributes('target', 'Имя окна или фрейма, куда браузер будет загружать документ.')

// let divTag = new Tag('div', 'является блочным элементом и предназначен для выделения фрагмента документа с целью изменения вида содержимого.')
// divTag.addAttributes('align', 'Задает выравнивание содержимого тега <div>')
// divTag.addAttributes('title', 'Добавляет всплывающую подсказку к содержимому.')

// let h1Tag = new Tag('h1', 'представляет собой наиболее важный заголовок первого уровня')
// h1Tag.addAttributes('align', 'Определяет выравнивание заголовка.')
// h1Tag.addAttributes('lang', 'Браузер использует значение параметра для правильного отображения некоторых национальных символов.')

// let spanTag = new Tag('span', 'предназначен для определения строчных элементов документа.')
// spanTag.addAttributes('hidden', 'Скрывает содержимое элемента от просмотра.')
// spanTag.addAttributes('style', 'Применяется для определения стиля элемента с помощью правил CSS.')

// let inputTag = new Tag('input', 'является одним из разносторонних элементов формы и позволяет создавать разные элементы интерфейса и обеспечить взаимодействие с пользователем.')
// inputTag.addAttributes('border', 'Толщина рамки вокруг изображения.')
// inputTag.addAttributes('list', 'Указывает на список вариантов, которые можно выбирать при вводе текста.')

// let formTag = new Tag('form', 'Связывает поле с формой по её идентификатору.')
// formTag.addAttributes('autocomplete', 'Включает автозаполнение полей формы.')
// formTag.addAttributes('novalidate', 'Отменяет встроенную проверку данных формы на корректность ввода.')

// let optionTag = new Tag('option', 'определяет отдельные пункты списка, создаваемого с помощью контейнера "<select>"')
// optionTag.addAttributes('value', 'Значение пункта списка, которое будет отправлено на сервер или прочитано с помощью скриптов.')
// optionTag.addAttributes('selected', 'Заранее устанавливает определенный пункт списка выделенным.')

// let selectTag = new Tag('select', 'позволяет создать элемент интерфейса в виде раскрывающегося списка')
// selectTag.addAttributes('required', 'Список обязателен для выбора перед отправкой формы.')
// selectTag.addAttributes('multiple', 'Позволяет одновременно выбирать сразу несколько элементов списка.')

// console.log(aTag, divTag, h1Tag, spanTag, inputTag, formTag, optionTag, selectTag);

//========================================================================================================================================================================================



// 2.
// -  Створити класс  для об'єкту який описує теги
//  Властивості
//  -назва тегу
//  - опис його дій
//  - масив з атрибутами (2-3 атрибути максимум)
//  Кожен атрибут описати як окремий який буде містити
//  -назву атрибуту
//  -опис дії атрибуту
//  інформацію брати з htmlbook.ru

//  Таким чином описати теги
//  -a
//  -div
//  -h1
//  -span
//  -input
//  -form
//  -option
//  -select

// class Tag {
//     constructor(tagName, tagAction, attributes = []) {
//         this.tagName = tagName;
//         this.tagAction = tagAction;
//         this.attributes = attributes;
//     }
// }

// class Attributes {
//     constructor(attName, attAction) {
//         this.attName = attName;
//         this.attAction = attAction;
//     }
// }

// let aTag = new Tag('a', 'является одним из важных элементов HTML и предназначен для создания ссылок.')
// aTag.attributes[0] = new Attributes('rev', 'Отношения между текущим и ссылаемым документами.')
// aTag.attributes[1] = new Attributes('target', 'Имя окна или фрейма, куда браузер будет загружать документ.')

// let divTag = new Tag('div', 'является блочным элементом и предназначен для выделения фрагмента документа с целью изменения вида содержимого.')
// divTag.attributes[0] = new Attributes('align', 'Задает выравнивание содержимого тега <div>')
// divTag.attributes[1] = new Attributes('title', 'Добавляет всплывающую подсказку к содержимому.')

// let h1Tag = new Tag('h1', 'представляет собой наиболее важный заголовок первого уровня')
// h1Tag.attributes[0] = new Attributes('align', 'Определяет выравнивание заголовка.')
// h1Tag.attributes[1] = new Attributes('lang', 'Браузер использует значение параметра для правильного отображения некоторых национальных символов.')

// let spanTag = new Tag('span', 'предназначен для определения строчных элементов документа.')
// spanTag.attributes[0] = new Attributes('hidden', 'Скрывает содержимое элемента от просмотра.')
// spanTag.attributes[1] = new Attributes('style', 'Применяется для определения стиля элемента с помощью правил CSS.')

// let inputTag = new Tag('input', 'является одним из разносторонних элементов формы и позволяет создавать разные элементы интерфейса и обеспечить взаимодействие с пользователем.')
// inputTag.attributes[0] = new Attributes('border', 'Толщина рамки вокруг изображения.')
// inputTag.attributes[1] = new Attributes('list', 'Указывает на список вариантов, которые можно выбирать при вводе текста.')

// let formTag = new Tag('form', 'Связывает поле с формой по её идентификатору.')
// formTag.attributes[0] = new Attributes('autocomplete', 'Включает автозаполнение полей формы.')
// formTag.attributes[1] = new Attributes('novalidate', 'Отменяет встроенную проверку данных формы на корректность ввода.')

// let optionTag = new Tag('option', 'определяет отдельные пункты списка, создаваемого с помощью контейнера "<select>"')
// optionTag.attributes[0] = new Attributes('value', 'Значение пункта списка, которое будет отправлено на сервер или прочитано с помощью скриптов.')
// optionTag.attributes[1] = new Attributes('selected', 'Заранее устанавливает определенный пункт списка выделенным.')

// let selectTag = new Tag('select', 'позволяет создать элемент интерфейса в виде раскрывающегося списка')
// selectTag.attributes[0] = new Attributes('required', 'Список обязателен для выбора перед отправкой формы.')
// selectTag.attributes[1] = new Attributes('multiple', 'Позволяет одновременно выбирать сразу несколько элементов списка.')

// console.log(aTag, divTag, h1Tag, spanTag, inputTag, formTag, optionTag, selectTag);

//========================================================================================================================================================================================



// 3.
// - Створити об'єкт car, 
// з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. 
// додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, 
//      і доавляет його в поточний об'єкт car

// let car = {
//     model: 'Accord',
//     manufacturer: 'Honda',
//     prodYear: 2014,
//     maxSpeed: 220,
//     engCapacity: 2.4
// }

// function drive () {
//     console.log(`їдемо зі швидкістю ${car.maxSpeed} кілометрів на годину`);
// }

// function info () {
//     console.log(`model: ${car.model}, manufacturer: ${car.manufacturer}, prodYear: ${car.prodYear}, maxSpeed: ${car.maxSpeed}, engCapacity: ${car.engCapacity}`);
//     console.log(car);
// }

// function increaseMaxSpeed (newSpeed) {
//     car.maxSpeed = newSpeed;
//     console.log(car.maxSpeed);
// }

// function changeYear (newValue) {
//     car.prodYear = newValue;
//     console.log(car.prodYear);
// }

// function addDriver (driver) {
//     car.driver = driver;
// }

// let driver = {
//     name: 'Roman',
//     age: 31
// }

// drive();
// info();
// increaseMaxSpeed(270);
// changeYear(2019);
// addDriver(driver);

//========================================================================================================================================================================================



// 4.
// Створити функцію конструктор яка дозволяє створювати об'єкти car, 
// з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. 
// додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car

// function Car (model, manufacturer, prodYear, maxSpeed, engCapacity) {
//     this.model = model;
//     this.manufacturer = manufacturer;
//     this.prodYear = prodYear;
//     this.maxSpeed = maxSpeed;
//     this.engCapacity = engCapacity;

//     this.drive = function() {
//         console.log(`їдемо зі швидкістю ${this.maxSpeed} кілометрів на годину`);
//     }
        
//     this.info = function() {
//         console.log(`model: ${this.model}, manufacturer: ${this.manufacturer}, prodYear: ${this.prodYear}, maxSpeed: ${this.maxSpeed}, engCapacity: ${this.engCapacity}`);
//         console.log(toyota);
//     }
        
//     this.increaseMaxSpeed = function(newSpeed) {
//         this.maxSpeed = newSpeed;
//         console.log(this.maxSpeed);
//     }
        
//     this.changeYear = function(newValue) {
//         this.prodYear = newValue;
//         console.log(this.prodYear);
//     }
        
//     this.addDriver = function(driver) {
//         this.driver = driver;
//         console.log(driver);
//     }

// }

// let toyota = new Car('RAV-4', 'TOYOTA', 2019, 190, 2.0);

// toyota.drive();
// toyota.info();
// toyota.increaseMaxSpeed(240);
// toyota.changeYear(2020);

// let driver = {
//     name: 'Nazar',
//     age: 27
// }

// toyota.addDriver(driver)

//========================================================================================================================================================================================



// 5.
// - Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car

// class Car {
//     constructor(model, manufacturer, prodYear, maxSpeed, engCapacity) {
//         this.model = model;
//         this.manufacturer = manufacturer;
//         this.prodYear = prodYear;
//         this.maxSpeed = maxSpeed;
//         this.engCapacity = engCapacity;
//     }

//     drive () {
//         console.log(`їдемо зі швидкістю ${this.maxSpeed} кілометрів на годину`);
//     }

//     info () {
//         console.log(`model: ${this.model}, manufacturer: ${this.manufacturer}, prodYear: ${this.prodYear}, maxSpeed: ${this.maxSpeed}, engCapacity: ${this.engCapacity}`);
//     }

//     increaseMaxSpeed (newSpeed) {
//         this.maxSpeed = newSpeed;
//         console.log(this.maxSpeed);
//     }

//     changeYear (newValue) {
//         this.prodYear = newValue;
//         console.log(this.prodYear);
//     }

//     addDriver (driver) {
//         console.log(driver);
//     }
  
// }

// let honda = new Car('Accord', 'Honda', 2014, 220, 2.4);

// honda.drive();
// honda.info();
// honda.increaseMaxSpeed(280);
// honda.changeYear(2020);

// let driver = {
//     name: 'Roman',
//     age: 31
// }

// honda.addDriver(driver)

//========================================================================================================================================================================================



// 6.
// -створити класс попелюшка з полями ім'я, вік, розмір ноги
// --Створити 10 попелюшок , покласти їх в масив
// --Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
// -- за допоиоги циклу знайти яка попелюшка повинна бути з принцом

// class Cinderella {
//     constructor(name, age, footSize) {
//         this.name = name;
//         this.age = age;
//         this.footSize = footSize;
//     }
// }

// let vika = new Cinderella('Vika', 20, 36);
// let ania = new Cinderella('Ania', 21, 37);
// let nata = new Cinderella('Nata', 22, 38);
// let olia = new Cinderella('Olia', 23, 35);
// let tina = new Cinderella('Tina', 24, 34);
// let rita = new Cinderella('Rita', 25, 36);
// let tania = new Cinderella('Tania', 26, 36);
// let lilia = new Cinderella('Lilia', 27, 37);
// let lena = new Cinderella('Lena', 28, 39);
// let gosha = new Cinderella('Gosha', 29, 38);

// const cindArray = [vika, ania, nata, olia, tina, rita, tania, lilia, lena, gosha];
// console.log(cindArray);

// let arnold = {
//     name: 'Arnold', 
//     age: 35, 
//     shoeSize: 39

// };
    

// for (let i = 0; i < cindArray.length; i++) {
//     if (cindArray[i].footSize === arnold.shoeSize){
//         console.log(`${arnold.name} will merry ${cindArray[i].name}`);
//     }
// }

//========================================================================================================================================================================================



// 7.
// -створити функцію конструктор попелюшка з полями ім'я, вік, розмір ноги
// --Створити 10 попелюшок , покласти їх в масив
// --Сторити об'єкт типу "принц" за допомоги функції конструктора з полями ім'я, вік, туфелька яку він знайшов, та функцію "пошук попелюшки"
// -- функція повинна приймати масив попелюшок, та шукає ту котра йому підходить

function Cinderella (name, age, footSize) {
    this.name = name;
    this.age = age;
    this.footSize = footSize;
}

let vika = new Cinderella('Vika', 20, 36);
let ania = new Cinderella('Ania', 21, 37);
let nata = new Cinderella('Nata', 22, 38);
let olia = new Cinderella('Olia', 23, 35);
let tina = new Cinderella('Tina', 24, 34);
let rita = new Cinderella('Rita', 25, 36);
let tania = new Cinderella('Tania', 26, 36);
let lilia = new Cinderella('Lilia', 27, 37);
let lena = new Cinderella('Lena', 28, 39);
let gosha = new Cinderella('Gosha', 29, 38);

const cindArray = [vika, ania, nata, olia, tina, rita, tania, lilia, lena, gosha];
console.log(cindArray);


function Prince (name, age, shoeSize){
    this.name = name;
    this.age = age;
    this.shoeSize = shoeSize;
}

let makdak = new Prince ('Makdak', 31, 35);

function cinderSearch (arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].footSize === makdak.shoeSize){
            console.log(`${makdak.name} will merry ${arr[i].name}`);
        }
    }
}


cinderSearch(cindArray);