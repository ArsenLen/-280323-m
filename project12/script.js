// Задача. Создать функцию, которая принимает число и возвращает массив от 0 до этого числа.
// fnName(5) (не включая последнее число) // 0, 1, 2, 3, 4. цикл, push 

// function getArray(number) {
//     const numbers = []
//     for(let i = 0; i <= number; i++) {
//         numbers.push(i)
//     }
//     return numbers
// }
// // getArray(5)
// console.log(getArray(5))
// console.log(getArray(10))

// Задача. Создать функцию, которая принимает 2 числа и возвращает массив от меньшего числа к большему
// Функция всегда принимает сначала меньшее, а потом большее число. getArray(1, 10)
// Функция всегда принимает сначала большее, а потом меньшее. 
// getArray(2, 6) -> [1, 2, 3, 4, 5]

// function getArray(number1, number2) {
//     const numbers = []
//     for(let i = number2; i <= number1; i++) {
//         numbers.push(i)
//     }
//     return numbers
// }
// // const num1 = +prompt("Введите первое число") // "2" -> 2. "2" + "2" = "22"
// // const num2 = +prompt("Введите второе число")
// console.log(getArray(7, 3))

// Модифицировать функцию getArray таким образом, чтобы она принимала два числа
// и возвращала массив от меньшего к большему. Не важно, сначала передаем большее или меньшее. 
// function getArray(number1, number2) {
//     const numbers = []
//     if(number1 < number2) {
//         for(let i = number1; i <= number2; i++) {
//             numbers.push(i)
//         }
//     } else {
//         for(let i = number2; i <= number1; i++) {
//             numbers.push(i)
//         }
//     }
//     return numbers
// }

// console.log(getArray(3, 7))
// console.log(getArray(7, 3))

// Есть массив numbers, нужно вывести в консоль только четные числа из массива
const numbers = [5, 10, 15, 23, 28, 32]
for(let i = 0; i < numbers.length; i++) {
    if(numbers[i] % 2 == 0) {
        console.log(numbers[i])
    }
}



/*
    numbers[i] > 50

    number % 2 == 0
    % - остаток от деления

    При делении на 2, если в остатке 0 - то число четное, иначе - нечетное
    10 % 2 = 0
    5 % 2 = 1

    10/2 = 5. 0 -ост ЧЕТ
    5/2 = 2. 1-ост НЕЧЕТ
    15/2 = 7. 1- ост НЕЧЕТ
    28/2 = 14. 0 - ост ЧЕТ
    23/2 = 11. 1 - ост НЕЧЕТ
*/

/*
    getArray(7, 3)
    1. let i = 7; 7 >= 3; push(), i++, 8
    2. i = 8; 8 >= 3; push(), i++, 9
    3. i = 9; 9 >=

    1. i = 10; 10 < 2 - false, ВЫХОД ИЗ ЦИКЛА, []


    for(let i = 0; i < 5; i++) {
        console.log(i)
    }
    1. i = 0; 0 < 5 - true; numbers.push(0), i++, i = 1 [] -> [0]
    2. i = 1; 1 < 5 - true; numbers.push(1), i++, i = 2 [0] -> [0, 1]
    3. i = 2; 2 < 5 - true; console.log(2); i++, i = 3 [0, 1] -> [0, 1, 2]
    4. i = 3; 3 < 5 - true; console.log(3); i++, i = 4 [0, 1, 2] => [0, 1, 2, 3]
    5. i = 4; 4 < 5 - true; console.log(4); i++, i = 5 [0, 1, 2, 3] => [0, 1, 2, 3, 4]
    6. i = 5; 5 <= 5 - TRUE; numbers.push(5)


    for(let i = 0; i < 7; i++) {
        console.log(i)
    }

    0, 1, 2, 3, 4, 5, 6, 7, 8, 9 

    0 - 1 - 2 - 3 - 4
*/