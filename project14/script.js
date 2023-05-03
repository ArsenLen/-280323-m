// Обработка событий
// При клике на кнопку в консоли отобразить "Hello"
// При клике на кнопку увеличивать значение в теге h1 на 1
// const button = document.querySelector(".btn")
// const title = document.querySelector("h1")
// const button1 = document.querySelector(".btn-1")

// let counter = 0
// button.addEventListener("click", function() {
//     counter++
//     title.innerText = counter
// })

// button1.addEventListener("click", function() {
//     counter--
//     title.innerText = counter
// })

// Создать кнопку "Декремент (-1)" и при нажатии на нее уменшать значение в h1 на 1

/*
    1. Находим элемент, на который хотим повесить слушатель. querySelector("selector")
    2. Вешаем слушатель события. addEventListener("type", callback)
    3. Определяем тип события
    4. Создаем функцию, внутри которой описываем нужные действия

    element.addEventListener("type", callback)

    type - тип события; click, submit, change, scroll
    callback - функция обратного вызова; вызов функции передается другой функции
*/

// function sum(a, b) {
//     return a + b
// }

// sum(10, 15) // immediately invoke function - немедленный вызов функции


/*
    При нажатии на каждую из кнопок менять цвет фона body на соответствующий

    element.style - свойство отвечающее за стили элемента
        element.style.fontSize = "30px"

    main = {
        style: {
            color: "black",
            fontSize: "26px"
        }
    }

    main.style.color = "green"

*/

const body = document.body // querySelector("body")
// При нажатии на кнопки менять цвет на соответствующий
const buttons = document.querySelectorAll("button") // [button, button, button, button]
// При нажатии на каждую кнопку, в консоли выводить "hello"
for(let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function(event) {
        if(event.target.id == "img") {
            body.style.backgroundImage = "url(./img8.jpg)"
        } else {
            const color = event.target.id
            body.style.backgroundColor = color
        }
    })
}

// Задача. Если после картинки нажимаем на цвет, то цвет не меняется. Сделать так, чтобы после
// нажатия на картинку можно было поменять и цвет


// При нажатии на кнопку red, поменять цвет фона body на красный.
// const redButton = document.querySelector("#red")
// const blueButton = document.querySelector("#blue")
// const yellowButton = document.querySelector("#yellow")
// const greenButton = document.querySelector("#green")

// redButton.addEventListener("click", function(event) {
//     console.log(event)
//     body.style.backgroundColor = "red"
//     // redButton.style.fontSize = "60px" // font-size -> fontSize. margin
// })
// // При нажатии на кнопки, менять цвет фона body на соответствующий
// blueButton.addEventListener("click", function() {
//     body.style.backgroundColor = "blue"
//     // redButton.style.color = "white"
// })
// yellowButton.addEventListener("click", function() {
//     body.style.backgroundColor = "yellow"
// })
// greenButton.addEventListener("click", function() {
//     body.style.backgroundColor = "green"
// })


/*
    При любом событии создается объект события - event object
    В event содержится вся информация о произошедшем событии
    В свойстве target содержится элемент, который инициировал событие
    При нажатии на кнопку red, event.target - это и есть сама кнопка red
*/

/*
    селекторы:
        1. по тегу - h1 {}. querySelector("h1")
        2. по классу - .item {}, .btn{} || querySelector(".btn")
        3. по id - #red {}, #blue {} || querySelector("#red") 
*/