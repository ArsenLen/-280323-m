// Массив - коллекция данных
// const numbers = [10, 0, 70, 1000, 95] // массив чисел
// const names = ["Arsen", "Artur", "Maria"] // массив строк [0, 1, 2]

// console.log(numbers[3])
// console.log(names[2])

// // length - свойство длины массива, количество элементов в массиве
// console.log(numbers.length)

// Задача. Запросить два раза имена пользователей с помощью prompt и записать их в массив
// push() - добавить элемент в конец массива
// const names = []
// names.push(prompt("Введите ваше имя"))
// names.push(prompt("Введите еще одно имя"))
// names.push(prompt("Введите третье имя"))
// names.push(prompt("Введите 4 имя"))
// names.push(prompt("Введите 4 имя"))
// console.log(names)

// 1. Отобразить в консоли значение "Maria" из массива names
// 2. В уведомление (alert()) отобразить первое число(10) из массива numbers

// Цикл - повторяющиеся операции
// for(let i = 0; i < 10; i++) {
//     console.log(i)
// }
/*
    1. let i = 0, 0 < 10 - true, console.log("привет"), i++, i = 0 => i = 1,
    2. i = 1, 1 < 10 - true, console.log("Привет"), i++, i = 1 => i = 2,
    3. i = 2, 2 < 10 - true, console.log("Привет"), i++, i = 2 => i = 3,
    4. i = 3, 3 < 10 - true, console.log("Привет"), i++, i = 3 => i = 4,
    5. i = 4, 4 < 10 - true, console.log("Привет"), i++, i = 4 => i = 5, 
    6. i = 5, 5 < 10 - true, console.log("Привет"), i++, i = 5 => i = 6,
    7. i = 6, 6 < 10 - true, console.log("Привет"), i++, i = 6 => i = 7,
    8. i = 7, 7 < 10 - true, console.log("Привет"), i++, i = 7 => i = 8,
    9. i = 8, 8 < 10 - true, console.log("привет"), i++, i = 8 => i = 9,
    10. i = 9, 9 < 10 - true, console.log("Привет"), i++, i = 9 => i = 10,
    11. i = 10, 10 < 10 - false - Выходим из цикла
*/

// В консоли отобразить 100 раз "Hello World"
// for(let i = 0; i < 10; i++) {
//     console.log("Hello World")
// }

// Задача. Запросить 5 имен у пользователя и добавить их в массив names
// const names = []
// for(let i = 0; i < 5; i++) {
//     names.push(prompt(`Введите имя № ${i + 1}`))
//     console.log(names)
// }

// Задача. Отобразить каждое число из массива numbers в консоли. "Число 100" "Число 300"
// const numbers = [100, 300, 500, 1, 700, 1000, 520]
// console.log(`Число ${numbers[0]}`) // 100 "Число" + numbers[0]
// console.log(`Число ${numbers[1]}`)
// console.log(`Число ${numbers[2]}`)
// console.log(`Число ${numbers[3]}`)

// for(let i = 0; i < numbers.length; i++) {
//     console.log(`Число ${numbers[i]}`)
// }
/*
    numbers.length - длина массива, длина массива numbers = 4
    1. let i = 0; 0 < 4 - true;  console.log(`Число ${numbers[0]}`), Число 100, i++, i = 1
    2. i = 1, 1 < 4 - true; console.log(`Число ${numbers[1]}`), Число 300, i++, i = 2
    3. i = 2, 2 < 4 - true; console.log(`Число ${numbers[2]}`), Число 500, i++, i = 3
    4. i = 3, 3 < 4 - true; console.log(`Число ${numbers[3]}`), Число 1, i++, i = 4
    5. i = 4, 4 < 4 - false. ВЫХОД ИЗ ЦИКЛА
*/

// Задача. Есть массив names. Нужно в консоли отобразить каждое имя со словом "Привет". 
// const names = ["Arsen", "Lia", "Nadia", "Maria"] // "Привет, Арсен". "Привет, Lia", "Привет Nadia"

// for(let i = 0; i < names.length; i++) {
//     console.log(`Привет, ${names[i]}`)
// }

/*
    names.length = 4
    1. let i = 0; 0 < 4 - true, console.log("Привет, names[0]") -> Привет, Arsen; i++
    2. i = 1, 1 < 4 - true, console.log("Привет, names[1]") -> Привет, Lia, i++
    3. i = 2, 2 < 4 - true, console.log("Привет, names[2]") -> Привет, Nadia, i++
    4. i = 3, 3 < 4 - true, console.log("Привет, names[3]") -> Привет, Maria, i++
    5. i = 4, 4 < 4 - false, ВЫХОД ИЗ ЦИКЛА
*/

// Задача. Есть массив чисел. В консоли вывести квадраты каждого из чисел. 
const numbers = [10, 4, 15, 32, 8] // 100, 16, 225, ?, 64
for(let i = 0; i < numbers.length; i++) {
    console.log(numbers[i] * numbers[i])
    console.log(numbers[i]**2)
    console.log(Math.pow(numbers[i], 2))
}


/*
    const num = 10
    0) num * num = 100
    1) num ** 10 = 100
        2) Math.pow(10, 2) = 100

    for(инициализация; условие; шаг) {
        тело цикла
    }
    1. инициализация - создаем счетчик
    2. условие - момент, когда повторения завершаются
    3. шаг - после каждого действия, увеличиваем шаг счетчика, до момента завершения. i++ - увеличение на 1

    Алгоритм работы цикла:
        1. Выполняется начало - let i = 0
        2. Выполняется условие - i < 10
            Если условие true - выполняется действие console.log("Привет")
        3. Выполняется шаг - i++. Увеличиваем переменную i на 1, Опять переходим к п.2
            Если false - цикл завершается
*/
 
/* 
    const name1 = prompt("Введите ваше имя")
    names.push(name1)

    1. Спросить имя пользователя и вывести его в консоли
    const username = prompt("Как вас зовут?")
    console.log(`Привет, ${username}`)
    
    2. Запросить три числа. 
        const number1 = prompt("Введите число")
        const number2 = prompt("Введите второе число")
        const number3 = prompt("Введите третье число")

    const numbers = []
    const number = 10
*/