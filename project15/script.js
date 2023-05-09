// Обработка отправки форм

const form = document.querySelector("form")
const productName = document.querySelector(".product-name")
const productPrice = document.querySelector(".product-price")

const products = [
    {
        name: "Велосипед",
        price: 70000,
    },
    {
        name: "Самокат",
        price: 50000
    }
]

form.addEventListener("submit", function(event) {
    event.preventDefault() // отменяет действия события по умолчанию
    
    const newProduct = {
        name: productName.value, // данные введенные в инпут Name
        price: Number(productPrice.value) // данные введеные в инпут Price
    }
    products.push(newProduct) // добавляем объект newProduct в массив products

    clearInputs() // функция очистки полей ввода 
})

function clearInputs() {
    productName.value = ""
    productPrice.value = ""
}


/*
    submit - событие отправки формы

    свойство value у input хранит введенную пользователем информацию
*/