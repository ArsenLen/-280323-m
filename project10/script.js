// функция (function declaration) - переиспользуемый блок кода


// const num1 = 20
// const num2 = 50
// console.log('Переменная 1', num1)
// console.log('Переменная 2', num2)
// console.log('Сумма', num1 + num2)

// const num3 = 20
// const num4 = 50
// console.log('Переменная 1', num3)
// console.log('Переменная 2', num4)
// console.log('Сумма', num3 + num4)

// function showVariablesSum() {
//     const num1 = 20
//     const num2 = 50
//     console.log('Переменная 1', num1)
//     console.log('Переменная 2', num2)
//     console.log('Сумма', num1 + num2)
// }
// showVariablesSum() // 
// showVariablesSum() 


// showVariablesSum(20, 50) // Вызов функции
// showVariablesSum(100, 200) // Вызов функции 
// showVariablesSum(700, 1000) // Вызов функции


// Задача. Создать функцию, которая получает два числовых параметра и в консоли отображает их
// а) сумму б) разность в) произведение г) деление

// function calc(x, y) {
//     console.log(x + y)
//     console.log(x - y)
//     console.log(x * y)
//     console.log(x / y)
// } 
// calc(100, 20)
// calc(8, 4)

// Задача. Создать функцию, которая получает два числовых параметра и в консоли отображает площадь
// S = a * b.  "Длина комнаты = {a}, ширина = {b}. Площадь = {S}" 

// function calcRoomSquare(a, b) {
//     const s = a * b
//     console.log(`Длина комнаты = ${a}, ширина = ${b}. Площадь = ${s}`)
// }

// const length = +prompt("Введите длину комнаты")
// const width = +prompt("Введите ширину комнаты")
// calcRoomSquare(length, width)

// Задача. Создать функцию, которая принимает имя, переводит его в верхний регистр
// и отображает в консоли. string.toUpperCase(). function toUpperCase() { // алгоритм перевода символов в верхний регистр }
// function showNameUpperCase(name) {
//     console.log(name.toUpperCase())
// }
// const userName = prompt("Введите имя") // вводит имя, мы его сохраняем в переменную userName
// showNameUpperCase(userName) // Вызов функции с переменной userName
// showNameUpperCase(prompt("введите имя"))

// function showName() {
//     const userName = prompt("Введите имя")
//     console.log(userName.toUpperCase())
// }
// showName()

// +prompt() // 10

// Задача. Создать функцию, которая принимает положительное целое число и в консоли отображает
// числа от 0 до введенного числа.   fnName(50) -> 0, 1, 2, 3, 4, 5, 6, 7

// function showNumbersZeroToNumber(number) {
//     for(let i = 0; i <= number; i++) {
//         console.log(i)
//     }
// }
// const limit = +prompt("Введите ваше число")
// showNumbersZeroToNumber(limit)


// Задача. Создать функцию, которая принимает массив и в консоли отображает каждое значение этого массива
// fnName([1, 2, 3, 4, 5]) // 1, 2, 3, 4, 5
// fnName(["Arsen", "Ivan", "Artur", "Maria"]) // Arsen, Ivan, Artur, Maria
// function showArrayElements(array) {
//     for(let i = 0; i < array.length; i++) {
//         console.log(array[i])
//     }
// }
// const numbers = [10, 20, 30, 40, 50]
// showArrayElements(numbers)
// showArrayElements(["apple", "banana", "orange"])
// showArrayElements([{name: "Arsen"}, {name: "Lera"}])

// Задача. Создать функцию, которая принимает имя и фамилию. В консоли выводить склееную строку
// "Имя Фамилия". fnName("Arsen", "Iusupov") --> "Arsen Iusupov"
// *Запросите имя и фамилию у пользователя с помощью prompt()
// function showFullName(name, surname) {
//     console.log(name + surname)
// }
// showFullName("Arsen", "Iusupov")

// Задача. Создать функцию, которая должна принимать число, умножать его на 2, возводить в 3ю степерь
// и отнимать начальное число. 5 -> 5*2 -> 10^3 -> 100 - 5 = 95
function calc(number) {
    const result = (number * 2) ** 3 - number
    return result
}
console.log(result) // result is not defined -
const myNumber = calc(10)
console.log(myNumber) 
alert(myNumber)

// Создать функцию, которая принимает два числа, возводит их в квадрат, суммирует и возвращает результат
// выполнения этих математических действий. 2, 4 ->  2**2 4^2 -> 4 + 16 => 20

/*
    1. Вызывается функция calc(10)
    2. Происходят математические операции в функции calc
    3. Функция возвращает результат выполнения мат. действие return result
    4. Возвращенный функцией результат присваиваем в переменную myNumber
    5. Отображаем в консоли переменную myNumber
*/

// Задача. Есть массив numbers, нужно вывести в консоли каждое число массива numbers
// const numbers = [10, 20, 30, 40, 50]
// const names = ["Arsen", "Ivan", "Artur", "Maria"]
// for(let i = 0; i < names.length; i++) {
//     console.log(names[i])
// }
// for(let i = 0; i < numbers.length; i++) {
//     console.log(numbers[i])
// }


// Задача. Создать цикл for, который отображает числа от 0 до 10
// for(let i = 0; i <= 100; i++) {
//     console.log(i)
// }

/*
    const URL = "https://api.com/api" - главный адрес
    const POST_URL = URL + "/posts" -> https://api.com/api/posts - посты 

    "Длина комнаты" + a + "Ширина=" + b + "Площадь" + a*b
    В названии функции чаще всего присутствует глагол. 

    function fnName(параметры) {
        тело функции
    }
*/

