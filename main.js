
var message = prompt("Введите ваш номер телефона:")
var isError = false
var isOk = true
console.log()
if (message[0] < 43 || message[0] > 43) {
        console.log(`error`)
        alert('Номер телефона должен начинаться на +')
        isError = true
        isOk = false
    }
for (var char of message.slice(1)) {
    var code = char.charCodeAt()
    if (message.length < 13 || message.length > 13) {
        console.log(`error`)
        alert('Номер телефона должен быть длиной 13 символов')
        isError = true
        isOk = false
    }
    if (code < 48 || code > 57) {
        console.log(`error`)
        alert('Номер телефона должен состоять только из цифр')
        isError = true
        isOk = false
        break
    }
    console.log(code)
}
if (isError) {
    alert("Введите корректный номер. Например: +380735070005")
}
if (isOk) {
    alert("Спасибо)")
}
