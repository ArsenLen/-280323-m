// Объект

const laptop = {
    RAM: "4 Гбайт", // свойство
    country: "Китай",
    price: 20000,
    currency: "руб",
    color: ["black", "grey", "white"],
    additional_info: {
        warranty: "24 месяца",
        class: "Обычный"
    } 
}

// Задача. В консоли отобразить цену ноутбука
// console.log(`${laptop.price} ${laptop.currency}`) // laptop.price + " " + laptop.currency
// // Задача. В консоли отобразить гарантию ноутбука
// console.log(laptop.additional_info.warranty)
// // Задача. В консоли отобразить любой цвет ноутбука
// console.log(laptop.color[1])


// Задача. Создать объект product, со свойствами price, name. price - цена продукта, name - название
// Вывести по отдельности в консоли price, name.
// const product = {
//     name: "Iphone 14",
//     price: 50000
// }
// console.log(`${product.name}, ${product.price}`)
// console.log(product.price)

// ФИЛЬТРАЦИЯ, СУММА, ВЫВОД ТОВАРОВ --------------------------------
// Массив объектов - [{}, {}, {}, {}, {}] - [0, 1, 2, 3, 4]
// const products = [
//     {
//         name: "Iphone 14",
//         price: 50000
//     },
//     {
//         name: "Iphone 13",
//         price: 40000
//     },
//     {
//         name: "Samsung G25",
//         price: 45000
//     }
// ]

// Задача. Вывести названия товаров, цена которых больше 40000
// if(products[0].price > 50000) {
//     console.log(products[0].name)
// }
// if(products[1].price > 50000) {
//     console.log(products[1].name)
// }
// for(let i = 0; i < products.length; i++) {
//     if(products[i].price > 40000) {
//         console.log(products[i].name)
//     }
// }




// console.log(products[0].name)
// console.log(products[1].name)
// Задача. Вывести название всех товаров в консоли. ("Название: {name}"). Помимо названия, вывести цену
// (Название: {name}. Цена: {price})
// for(let i = 0; i < products.length; i++) {
//     console.log(`Название: ${products[i].name}. Цена: ${products[i].price}`)
// }

// Задача. Вывести сумму всех товаров в массиве products
// let sum = 0
// // sum = sum + products[0].price // sum = 0 + 50000 = 50000
// // sum = sum + products[1].price // sum = 50000 + 40000 = 90000
// for(let i = 0; i < products.length; i++) {
//     sum = sum + products[i].price // sum+=products[i].price
// }
// console.log(sum)


// Задача. Есть массив чисел numbers, посчитать сумму этих чисел
// const numbers = [10, 20, 30, 40, 50]
// let sum = 0 // начальное значение суммы
// // sum = sum + numbers[0] // 0 + 10 = 10
// // sum = sum + numbers[1] // 10 + 20 = 30
// // sum = sum + numbers[2] // 30 + 30 = 60
// for(let i = 0; i < numbers.length; i++) {
//     sum = sum + numbers[i] // sum += numbers[i].     i+= 2 === i++ === i = i + 2
// }
// console.log(sum)

/*
    numbers.lenght = 5; sum = 0
    1. let i = 0; 0 < 5 - true; sum = sum + numbers[0]; sum = 0 + 10 = 10; i++, i = 1
    2. i = 1; 1 < 5 - true; sum = 10 + 20 = 30; i++, i = 2
    3. i = 2; 2 < 5 - true; sum = 30 + 30 = 60; i++, i = 3
    4. i = 3; 3 < 5 - true; sum = 60 + 40 = 100; i++, i = 4
    5. i = 4; 4 < 5 - true; sum = 100 + 50 = 150; i++, i = 5
    6. i = 5; 5 < 5 - false. ВЫХОД ИЗ ЦИКЛА
*/

// ---------------------------------------

const products = [
    {
        title: "TV Samsung",
        category: "TV",
        price: 40000 
    },
    {
        title: "TV Xiaomi",
        category: "TV",
        price: 42000 
    },
    {
        title: "Iphone 14",
        category: "phone",
        price: 50000 
    },
    {
        title: "HP 1065",
        category: "laptop",
        price: 70000 
    },
    {
        title: "ACER G575",
        category: "laptop",
        price: 63000 
    },
]
// Задача 1. Вывести название и категорию каждого товара в консоли в виде 
// (Название товара: {title} и его категория {category}) 
// for(let i = 0; i < products.length; i++) {
//     console.log(`Название товара: ${products[i].title} и его категория ${products[i].category}`)
// }

// Задача 2. Вывести названия товаров, цена которых больше 45000
// for(let i = 0; i < products.length; i++) {
//     if(products[i].price > 45000) {
//         console.log(products[i].title)
//     }
// }

// Задача 3. Вывести название и цену товаров, у которых категория TV
// for(let i = 0; i < products.length; i++) {
//     if(products[i].category == "laptop") {
//         console.log(`Название товара: ${products[i].title} и его цена ${products[i].price}`)
//     }
// }

// Задача 4. Вывести цену товаров, но, если цена товара больше 45000, то выводим ее со скидкой 10%
// for(let i = 0; i < products.length; i++) {
//     if(products[i].price > 45000) {
//         console.log(products[i].price * 0.9)
//     } else {
//         console.log(products[i].price)
//     }
// }

// Есть массив names, нужно все буквы имен перевести в верхний регистр (Arsen -> ARSEN) 
// и положить в новый массив.
const names = ["Arsen", "Ivan", "Lera", "Anastasiia"]
const newNames = [] // ["ARSEN", "IVAN", "LERA", "ANASTASIIA"]
// const newName = ""
for(let i = 0; i < names.length; i++) {
    const newName = names[i].toUpperCase() // метод toUpperCase() позволяет перевести строку в верхний регистр
    newNames.push(newName)
}
console.log(newNames)

/*
        Math.pow(10, 2) 
    цена - 70000. 
    1. 70000 * 0.1 = 7000(скидка). 70000 - 7000 = 63000
    2. 70000 * 0.9 = 63000 - цена товара с учетом

    "title" == "title" -- true
    "Title" == "title" -- false
    "apple" == "title" -- false
*/

// let num = 20
// num+= 50 // num = num + 50; num = 20 + 50; num = 70


/*
    Массив - частный случай объекта, в котором ключами являются числа от 0 до N

    const obj = {
        country: "China"
    }

    const arr = [
        0: "China"
    ]

    const obj = {
        key: value,
        ключ: значение
    }
*/