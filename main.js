var message = prompt("Введите ваш номер телефона:");
var isOk = true;

if (message.length < 13  message.length > 13) {
  alert(
    "Поле не должно быть пустым и телефон должен быть заполнен в формате +380735070205"
  );
  isOk = false;
}

if (isOk && message[0] !== 43) {
  alert("Телефон должен вводться в формате +380735070205");

  isOk = false;
}

if (isOk === true) {
  for (var char of message.slice(1)) {
    var code = char.charCodeAt();
    if (code < 48  code > 57) {
      alert("Номер телефона должен состоять только из цифр");

      isOk = false;
      break;
    }
    console.log(code);
  }
}

if (isOk) {
  alert("Спасибо)");
}