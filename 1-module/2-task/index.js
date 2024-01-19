function print(text) {
  console.log(text);
}

function isValid(name) {
return name === null || //сначала проверяем на null, так как у null нет property length.
  name.length < 4 || 
  name.match(' ') ? false : true; //проверка наличия пробелов, можно name.includes(...)
}

function sayHello() {
  let userName = prompt('Введите ваше имя');

  if (isValid(userName)) {
    print(`Welcome back, ${userName}!`);
  } else {
    print('Некорректное имя');
  }
}
