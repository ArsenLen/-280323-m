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
        name: productName.value,
        price: Number(productPrice.value)
    }
    products.push(newProduct)
})

/*
    submit - событие отправки формы

    свойство value у input хранит введенную пользователем информацию
*/