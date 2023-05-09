// Задача. Есть массив состоящий из имен. Вывести каждое имя в консоли используя for(), forEach()
// const names = ["Arsen", "Anastasia", "Artur", "Natalia"]

// for(let i = 0; i < names.length; i++) {
//     console.log(names[i])
// }

// names.forEach(function(name) {
//     console.log(name)
// })

// Задача. Есть массив чисел. Каждое число возвести в квадрат и вывести в консоли, используя forEach()
// const numbers = [10, 3, 13, 4, 100, 15]

// numbers.forEach(function(number) {
//     console.log(number ** 2)
// })

// Задача. Есть массив заголовков. 
// 1. Вывести в консоли каждый заголовок, используя forEach()
// 2. Создать h3 для каждого заголовка в массиве titles
// const titles = ["Мой первый заголовок", "Lorem Ipsum", "Технологии Web"]
// const main = document.querySelector("main")

// titles.forEach(function(title) {
//     main.innerHTML += `<h3>${title}</h3>`
// })


// Задача. Для каждого элемента массива texts вывести разметку. forEach.
// const texts = [
//     {
//         title: "Мой первый заголовок",
//         descr: "Мое первое описание"
//     },
//     {
//         title: "Lorem Ipsum",
//         descr: "Lorem Ipsum dolor sit amet."
//     },
//     {
//         title: "Технологии WEB-разработки",
//         descr: "HTML, CSS, JS, PYTHON, PHP"
//     }
// ]
// const main = document.querySelector("main")


// texts.forEach(function(text, index) {
//     main.innerHTML += `
//         <div class="item-${index + 1}">
//             <h3>${text.title}</h3>
//             <p>${text.descr}</p>
//         </div>
//     `
// })


// Задача. Есть массив объектов со словами на русском и английском.
// Для каждого объекта отобразить разметку
// const words = [
//     {
//         eng: "event",
//         ru: "событие"
//     },
//     {
//         eng: "variable",
//         ru: "переменная"
//     },
//     {
//         eng: "title",
//         ru: "заголовок"
//     },
//     {
//         eng: "description",
//         ru: "описание"
//     }
// ]
// const main = document.querySelector("main")


// words.forEach(function(word) {
//     main.innerHTML += `
//         <div>
//             <p>${word.eng}</p>
//             <p>${word.ru}</p>
//         </div>
//     `  
// })
/*
    let word = {
        eng:,
        ru:
    }
*/

// words[1].eng 
// word - каждый объект. word.eng || word.ru
/*
    <div>
        <p>ENG</p>
        <p>RU</p>
    <div>
*/ 


// Задача. Есть массив. Каждый элемент массива отобразить в теге h3.
// 1. Для каждого элемента отобразить разметку
// 2. При нажатии на каждую карточку в консоли отобразить "hello"
// 3. При нажатии на каждую карточку, перекрашивать ее в зеленый, а текст внутри нее на белый

const todos = ["Вынести мусор", "Закончить создание проекта", "Загрузить картинки",
    "Пойти на тренировку", "Убраться"]

const main = document.querySelector("main")

function showTodos() {
    todos.forEach(function(todo) {
        main.innerHTML += `
            <div class="todo">
                <h3>${todo}</h3>
            </div>
        `
    })
}
showTodos() // отображаем карточки
/* Весь код ниже будет запускаться после того, как карточки создались */
const todoList = document.querySelectorAll(".todo") // [elem, elem, elem]


// 3. При нажатии на каждую карточку, перекрашивать ее в зеленый, а текст внутри нее на белый
// 4. При втором нажатии на каждую карточку, возвращать исходные стили
todoList.forEach(function(todo) {
    todo.addEventListener("click", function() {
        todo.classList.toggle("done")
    })
})

// 5. Создать кнопку
const btn = document.querySelector(".btn")
btn.addEventListener("click", function() {
    todoList.forEach(function(todo) {
        todo.classList.add("done")
    })
})

/*
    ["Arsen", ""]
    2+1 = array[3]
*/

/*
    .classList - позволяет добавить, удалить, переключить класс у элемента
        element.classList.add("className") - добавить
        element.classList.remove("className") - удалить
        element.classList.toggle("сlassName") - переключить
            если у элемента есть класс, удаляем его. если у элемента нет класса - добавлем
*/

// element.addEventListener("type", function(event) {  })
// element.style.fontSize = "28px"

/*
    <div class="todo">
        <h3>TODO</h3>
    </div>
*/

/*
    div:nth-child(3) {
        background-color: "red";
    }

    [0, 1, 2, 3, 4, 5]

    obj = {
        title: "Hello"
    }
    obj.title

    innerHTML
    <div>
        <h3>TITLE</h3>
        <p>DESCR</p>
    </div>
*/

/* 
    element.innerHTML - добавить HTML в элемент

    names[i] - каждый элемент массива. names[0], names[1], names[2], names[3]
    name - каждый элемент массива. 

    array.forEach(function(item) {

    })
*/
