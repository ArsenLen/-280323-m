// Обработка отправки форм

const form = document.querySelector("form")
const productName = document.querySelector(".product-name")
const productPrice = document.querySelector(".product-price")
const productsContainer = document.querySelector(".products-container")

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
    showProducts() // рендерим продукты после добавления
    clearInputs() // функция очистки полей ввода 
    showNotification() // вызов уведомления
})

function clearInputs() {
    productName.value = ""
    productPrice.value = ""
}


// Отображение (рендер) продуктов в HTML
function showProducts() {
    productsContainer.innerHTML = ""
    products.forEach(function(product, index) {
        productsContainer.innerHTML += `
            <div class="product">
                <p class="product-card-name">${product.name}</p>
                <p class="product-card-price">${product.price}</p>
                <button class="product-card-btn" id=${index}> X </button>
            </div>
        `
    })
    onHover() // вызов функции "при наведении"
    deleteProduct() // вызов функции удаления продукта
}
showProducts() // первый раз отображаем продукты

// Функция появления кнопки при наведении 
function onHover() {
    const productsCards = document.querySelectorAll(".product")
    productsCards.forEach(function(card) {
        card.addEventListener("mouseover", function() {
            const button = card.querySelector("button")
            button.style.display = "block"
        })
        // При отведении курсора, прятать кнопку button. mouseout - событие отведения мыши
        card.addEventListener("mouseout", function() {
            const button = card.querySelector("button")
            button.style.display = "none"
        })
    })
}

// При нажатии на кнопки с крестиком в консоли отображать "удалено"
function deleteProduct() {
    const deleteButtons = document.querySelectorAll(".product-card-btn")
    deleteButtons.forEach(function(btn) {
        btn.addEventListener("click", function() {
            const id = btn.id // получаем id элемента
            products.splice(id, 1) // удаляем элемент с заданным индексом из массива products
            showProducts()
        })
    })
}
// Отображение уведомления
function showNotification() {
    const notification = document.querySelector(".notification")
    notification.style.display = "block"
    setTimeout(function() {
        notification.style.display = "none"
    }, 2000)
}



/*
    setTimeout(callback, millisecond) - метод планирования, вызывает callback через N миллисекунд

    const names = ["Arsen", "Ivan", "Sergey", "Elena"] // [0, 1, 2, 3]
    names.splice(2, 1)

    names.splice(1, 2) // ["Arsen", "Elena"]


    const array = [1, 2, 3, 4, 5]
    const array = [{name: "Arsen"}]

    const products = [{}, {}, {}]

    array.forEach(function(el) {
        console.log(el.name) // 1, 2, 3, 4, 5
    })

    <div class="product">
        <p class="product-card-name">Велосипед</p>
        <p class="product-card-price">40000</p>
        <button class="product-card-btn"> X </button>
    </div>
*/

/*
    submit - событие отправки формы

    свойство value у input хранит введенную пользователем информацию
*/