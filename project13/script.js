// Создание тегов с помощью js

// Добавить h1 в main
// const title = document.createElement("h1")
// title.innerText = "Мой заголовок"

// const main = document.querySelector("main")
// main.appendChild(title)

// Добавить h2 в main
// const main = document.querySelector("main")
// main.innerHTML += `<section>
//                     <h2>Мой заголовок</h2>
//                     <p>Hello</p>
//                   </section>`

// main.innerHTML = main.innerHTML + `<section></section>`

// Добавить тег p с текстом "Hello" в main. 
// const main = document.querySelector("main")

// Добавить 100 тегов p с текстом "Hello" в main. цикл for.
// for(let i = 0; i < 100; i++) {
//     main.innerHTML += "<p>Hello</p>"
// }
// Добавить 100 тегов p текстом от 1 до 100, используя цикл for
// <p>1</p> <p>2</p> <p>3</p> <p>4</p> <p>5</p>
// for(let i = 0; i < 100; i++) {
//     main.innerHTML += `<p>${i + 1}</p>`
// }

// Есть массив имен names, отобразить каждое имя из массива в теге p
// const names = ["Arsen", "Sergej", "Illya", "Artur"]
// main.innerHTML += `<p>${names[0]}</p>`
// main.innerHTML += `<p>${names[1]}</p>`

// for(let i = 0; i < names.length; i++) {
//    main.innerHTML += `<p>${names[i]}</p>`
// }

// let name = ""
// for(let i = 0; i < names.length; i++) {
//     name = "," + names[i] // "Arsen, Sergej, Illya, Artur"
// }
// main.innerHTML += `<p>${names.join(" ")}</p>`

// вручную добавить тег p. main.innerHTML = `<p>${names[3]}</p>`

// 1. Отобразить в консоли каждое имя
// 2. Отобразить каждое имя в теге p

// let number = 10
//     // number = number + 20 // number = 10 + 20; number = 30
//     number += 20 // number = number + 20


// Есть массив ссылок. Для каждой ссылки массива создать тег img, в свойство src положить ссылку
// const images = ["https://i.pinimg.com/736x/34/0f/37/340f37ae4f36826f3571a2f9c64544ec.jpg", 
//     "https://img1.akspic.ru/previews/7/4/7/9/6/169747/169747-ikanvas-art-pechat_na_holste-poster-oblako-500x.jpg", 
//     "https://s1.1zoom.ru/big0/52/Love_Sunrises_and_sunsets_Fingers_Hands_Heart_Sun_532758_1280x897.jpg"]

// for(let i = 0; i < images.length; i++) {
//     main.innerHTML += `<img src=${images[i]}>`
// }


// <img src="names[0]">  <img src="names[1]">  <img src="names[2]">


// Есть массив объектов. Для каждого объекта отобразить тег a, в href положить ссылки
// const links = [
//     {
//         name: "Google",
//         link: "https://google.com"
//     },
//     {
//         name: "Facebook",
//         link: "https://facebook.com"
//     },
//     {
//         name: "Instagram",
//         link: "https://instagram.com"
//     },
// ]

// for(let i = 0; i < links.length; i++) {
//     main.innerHTML += `<a href="${links[i].link}">${links[i].name}</a>`
// }

// Создать элемент. Найти

// <a href="https://youtube.com">Youtube</a>. links[0].name = "Google" links[0].link = http://gogoel.com


// Есть массив products. Для каждого продукта отобразить разметку
// const products = [
//     {
//         name: "Iphone 14",
//         price: 70000
//     },
//     {
//         name: "Iphone 13",
//         price: 60000
//     },
//     {
//         name: "Samsung S30",
//         price: 65000
//     }
// ]
// main.innerHTML += `<div class="product">
//                         <h5>${products[0].name}</h5>
//                         <p>${products[0].price}</p>
//                     </div>`

// for(let i = 0; i < products.length; i++) {
//     main.innerHTML += `
//                     <div class="product">
//                         <h5>${products[i].name}</h5>
//                         <p>${products[i].price}</p>
//                     </div>
//                     `
// }

// Создать h2, в котором нужно посчитать цену всех продуктов и вывести ее после всех продуктов
// посчитать сумму используя цикл for
// let sum = 0
// for(let i = 0; i < products.length; i++) {
//     sum += products[i].price
// }
// main.innerHTML += `<h2>Сумма всех товаров: ${sum}</h2>`

/*
    `<div class="product">
        <h5>Iphone 14</h5>
        <p>70000 </p>
    </div>` 
*/
/*
    <div class="product">
            <h5>Product Name</h5>
            <p>Product price</p>
    </div>
*/

/*
    let number = 10
        number = 20


    main = {
        innerHTML: "<h1>Hello</h1>"
    }
    main.innerHTML = "<section></section>"

    innerHTML - свойство, которое позволяет получить или назначить html содержимое тега
    1. Поиск элемента, куда хотим поместить тег
    2. Добавляем тег с помощью innerHTML

    document.createElement принимает аргументом строчное название тега
    element.innerText позволяет получить или назначить текст тега

    1. Создание элемента. createElement("h1")
    2. Добавление текста в тег. innerText
    3. Поиск элемента, куда хотим поместить тег
    4. Добавление созданного тега в найденные элемент. appendChild()
*/


// Задача. Есть массив users. Для каждого пользователя отобразить разметку внутри section. 
const users = [
    {
        email: "test@gmail.com",
        login: "Test"
    },
    {
        email: "starta@gmail.com",
        login: "Starta University"
    },
    {
        email: "admin@gmail.com",
        login: "Admin"
    },
]

const usersContainer = document.querySelector(".users-container")

for(let i = 0; i < users.length; i++) {
    usersContainer.innerHTML += `
        <div class="user">
            <h5>${users[i].email}</h5>
            <p>${users[i].login}</p>
        </div>
    `
}
// Переписать код написанный с помощью for на forEach()


/*
    <div class="user">
        <h5>Email</h5>
        <p>Login</p>
    </div>

    innerHTML = `<h1>Hello</h1>`
    for()
*/


// Задача. Есть массив posts. Для каждого поста из массива отобразить разметку в posts-container

const posts = [
    {
        title: "My first title",
        descr: "My descr",
        author: "Test"
    },
    {
        title: "My second title",
        descr: "My second descr",
        author: "Admin"
    },
    {
        title: "My third title",
        descr: "My third descr",
        author: "Starta University"
    },
]

const postsContainer = document.querySelector(".posts-container")

// for(let i = 0; i < posts.length; i++) {
//     // console.log(posts[i])
//     postsContainer.innerHTML += `
//         <div class="post">
//             <h6> ${posts[i].title} </h6>
//             <p> ${posts[i].author} </p>
//             <p> ${posts[i].descr} </p>
//         </div>
//     `
// }

posts.forEach(function(post) {
    postsContainer.innerHTML += `
        <div class="post">
            <h6> ${post.title} </h6>
            <p> ${post.author} </p>
            <p> ${post.descr} </p>
        </div>
    `
})

/*
    array.forEach(callback) - выполняет функцию для каждого элемента массив

    callback принимает несколько параметров
        1. текущий элемент, каждый элемент
        2. индекс
        3. массив  

    <div class="post">
        <h6> Title </h6>
        <p> Author </p>
        <p> Descr </p>
    </div>
*/

// Задача. Есть массив чисел. Отобразить каждый элемент массива в консоли с помощью forEach
const numbers = [10, 30, 25, 60, 13]

numbers.forEach(function(number) {
    console.log(number)
})

/*
    1. number = 10. console.log(10)
    2. number = 30. console.log(30)
    3. number = 25. console.log(25)
    4. number = 60. console.log(60)
    5. number = 13. console.log(13)
*/

// Задача. Есть массив имен. Отобразить каждое имя в консоли с добавлением строки "привет"
const names = ["Arsen", "Anastasia", "Lera", "Natalia"]

names.forEach(function(name) {
    console.log(`привет, ${name}`)
})

// "Привет, Arsen" // Привет, Anastasia

