const coffeeUL = document.getElementById("coffeeUL")
const emailTextbox = document.getElementById("emailTextbox")
const typeTextbox = document.getElementById("typeTextbox")
const sizeTextbox = document.getElementById("sizeTextbox")
const priceTextbox = document.getElementById("priceTextbox")

const saveButton = document.getElementById("saveButton")

saveButton.addEventListener(`click`, function() {

    const email = emailTextbox.value 
    const type = typeTextbox.value
    const size = sizeTextbox.value
    const price = priceTextbox.value

    let request = new XMLHttpRequest()
    request.open(`POST`, 'https://troubled-peaceful-hell.glitch.me/orders')
    request.setRequestHeader('Content-Type', 'application/json')
    request.addEventListener('load', function() {
        console.log(this.responseText)
        const coffee = JSON.parse(this.responseText)
        const coffeeItem = `<li class="coffee">
        <b>${coffee.email}</b>
        <b>${coffee.type}</b>
        <b>${coffee.size}</b>
        <b>${coffee.price}</b>`
        coffeeUL.insertAdjacentHTML('beforeend', coffeeItem)
        console.log(coffee)


    })
    const body = {
        email: email,
        type: type,
        size: size,
        price: price
    }
    request.send(JSON.stringify(body))

})