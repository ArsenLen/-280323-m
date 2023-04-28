// DOM. Поиск элементов, изменение текста, атрибутов

// // Селектор по тегу
// const title = document.querySelector("h1")
// console.log(title)

// // Селектор по классу
// const text = document.querySelector(".description")
// console.log(text)

// // Вложенный селектор 
// const text1 = document.querySelector("section p")
// console.log(text1)

// // Селектор по id
// const googleLink = document.querySelector("#google-link") 
// console.log(googleLink)

// Задача. Найти второй section. Найти тег p с текстом "Lorem". Найти h2 с текстом My Post Title.
// Найти тег а с текстом "Ссылка"
// const container = document.querySelector(".container")
// console.log(container)

// const text = document.querySelector(".text")
// console.log(text)

// const title = document.querySelector(".container h2")
// console.log(title)

// const link = document.querySelector(".link")
// console.log(link)

// const texts = document.querySelectorAll("p")
// console.log(texts)

// Найти все теги с классом description

// const array = [1, 2, 3, 4, 5]
// console.log(array)

/*
    Навигация по DOM.
    document.querySelector(селектор) - метод, который позволяет найти элемент по селектору.
        Находит первый попавшийся элемент по селектору
        Если элемента с таким селектором не существует, то возвращается null

    document.querySelectorAll(селектор) - метод, который позволяет найти элементы по селектору
        Находим все элементы по селекторы


    Селекторы:
        1. по названию тегу - h1
        2. по классу - .item, .img
        3. по id - #id

    const obj = {
        name: "Arsen",
        age: 25
    }

    const h1 = {
        innerText: "Hello World",
        style: {
            backgroundColor: "yellow"
        }
    }
*/

// Задача. Поменять текст в теге h1 на "Привет Мир"
// const title = document.querySelector("h1")
// title.innerText = "Привет, Мир"

// Задача. Поменять текст внутри ссылки Google на "Ссылка на гугл"
// const link = document.querySelector("#google-link")
// link.innerText = "Ссылка на гугл"

// Задача. Найти все теги p и поменять везде текст на "Мой текст"
// const texts = document.querySelectorAll("p")
// console.log(texts)
// texts[0].innerText = "Мой текст"
// texts[1].innerText = "Мой текст"
// texts[2].innerText = "Мой текст"
// texts[3].innerText = "Мой текст"

// for(let i = 0; i < texts.length; i++) {
//     texts[i].innerText = "Мой текст"
// }

// Задача. Во всех ссылках поменять текст на "Link"
// const links = document.querySelectorAll("a")
// for(let i = 0; i < links.length; i++) {
//     links[i].innerText = "Link"
// }

/*
    texts.length = 4; 
    1. let i = 0; 0 < 4 - true; texts[0].innerText = "Мой текст", i++, i = 1
    2. i = 1; 1 < 4 - true; texts[1].innerText = "Мой текст", i++, i = 2
    3. i = 2; 2 < 4 - true; texts[2].innerText = "Мой текст", i++, i = 3
    4. i = 3; 3 < 4 - true; texts[3].innerText = "Мой текст", i++, i = 4
    5. i = 4; 4 < 4 - false; ВЫХОД ИЗ ЦИКЛА
*/


/*
    const texts = [p, p, p, p] - массив тегов p 


    const names = ["Arsen", "Lia", "Artur"]

    for(let i = 0; i < names.length; i++) {
        names[i].toUpperCase()
    }

    innerText - свойство тега, в котором отображается текст, 
        позволяет получить или изменить текст внутри тега
    const title = {
        innerText: "Hello World"
    }
    console.log(title.innerText)

    const product = {
        name: "Iphone13"
        price: 60000
    }
    product.price


    const texts = [p, p, p, p]
    texts[0].innerText = "Мой текст"
    texts[1].innerText = "Мой текст"
    texts[2].innerText = "Мой текст"
    texts[3].innerText = "Мой текст"

    const names = ["Arsen", "Lia", "Artur"]
    names[0].toUpperCase() // ARSEN
    names[1].toUpperCase() // LIA
    names[2].toUpperCase() // "ARTUR"
*/

// Методы getAttribute(), setAttribute()

const link = document.querySelector("#google-link")
const href = link.getAttribute("href")
console.log(href)

// Задача. Отобразить в консоли значение атрибута src первого тега img
const img = document.querySelector("img")
const src = img.getAttribute("src")
console.log(src)

// ctrl + c

// Задача. Получить атрибут src всех картинок, используя цикл for
const images = document.querySelectorAll("img") // [img, img]
for(let i = 0; i < images.length; i++) {
    const src = images[i].getAttribute("src")
    console.log(src)
}
