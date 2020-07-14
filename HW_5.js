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


class Tag {
    constructor(tagName, tagAction, attributes = []) {
        this.tagName = tagName;
        this.tagAction = tagAction;
        this.attributes = attributes;
    }
}

class Attributes {
    constructor(attName, attAction) {
        this.attName = attName;
        this.attAction = attAction;
    }
}

let aTag = new Tag('a', 'является одним из важных элементов HTML и предназначен для создания ссылок.')
aTag.attributes[0] = new Attributes('rev', 'Отношения между текущим и ссылаемым документами.')
aTag.attributes[1] = new Attributes('target', 'Имя окна или фрейма, куда браузер будет загружать документ.')

let divTag = new Tag('div', 'является блочным элементом и предназначен для выделения фрагмента документа с целью изменения вида содержимого.')
divTag.attributes[0] = new Attributes('align', 'Задает выравнивание содержимого тега <div>')
divTag.attributes[1] = new Attributes('title', 'Добавляет всплывающую подсказку к содержимому.')

let h1Tag = new Tag('h1', 'представляет собой наиболее важный заголовок первого уровня')
h1Tag.attributes[0] = new Attributes('align', 'Определяет выравнивание заголовка.')
h1Tag.attributes[1] = new Attributes('lang', 'Браузер использует значение параметра для правильного отображения некоторых национальных символов.')

let spanTag = new Tag('span', 'предназначен для определения строчных элементов документа.')
spanTag.attributes[0] = new Attributes('hidden', 'Скрывает содержимое элемента от просмотра.')
spanTag.attributes[1] = new Attributes('style', 'Применяется для определения стиля элемента с помощью правил CSS.')

let inputTag = new Tag('input', 'является одним из разносторонних элементов формы и позволяет создавать разные элементы интерфейса и обеспечить взаимодействие с пользователем.')
inputTag.attributes[0] = new Attributes('border', 'Толщина рамки вокруг изображения.')
inputTag.attributes[1] = new Attributes('list', 'Указывает на список вариантов, которые можно выбирать при вводе текста.')

let formTag = new Tag('form', 'Связывает поле с формой по её идентификатору.')
formTag.attributes[0] = new Attributes('autocomplete', 'Включает автозаполнение полей формы.')
formTag.attributes[1] = new Attributes('novalidate', 'Отменяет встроенную проверку данных формы на корректность ввода.')

let optionTag = new Tag('option', 'определяет отдельные пункты списка, создаваемого с помощью контейнера "<select>"')
optionTag.attributes[0] = new Attributes('value', 'Значение пункта списка, которое будет отправлено на сервер или прочитано с помощью скриптов.')
optionTag.attributes[1] = new Attributes('selected', 'Заранее устанавливает определенный пункт списка выделенным.')

let selectTag = new Tag('select', 'позволяет создать элемент интерфейса в виде раскрывающегося списка')
selectTag.attributes[0] = new Attributes('required', 'Список обязателен для выбора перед отправкой формы.')
selectTag.attributes[1] = new Attributes('multiple', 'Позволяет одновременно выбирать сразу несколько элементов списка.')

console.log(aTag, divTag, h1Tag, spanTag, inputTag, formTag, optionTag, selectTag);