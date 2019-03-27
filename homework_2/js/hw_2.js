//Преобразование примитивов

//Чему равно а, почему?
let a = 0 || 'string'; //a = 'string', потому что 0 равен false
a = 1 && 'string'; //a = 'string', оба операнда равны true, потому выводится последний; если операнды поменять местами, будет выводится 1
a = null || 25; //a = 25, потому что null равен false, а 25 равно true; ИЛИ ищет хотя бы одно true
a = null && 25; //a = null; оба операнда - false; используется оператор И, если встречается false, то дальше смотреть уже не будет
a = null || 0 || 35; //a = 35, потому что 35 - это единственный операнд, равный true
a = null && 0 && 35; //a = null, потому что оператор И, встречая первый false, дальше не перебирает

//Что отобразится в консоли. Почему?
12 + 14 + '12' //'2612'; операции выполняются последовательно: сначала складываются числа 12 и 14, затем результат склеивается со строкой
3 + 2 - '1' //4; любые арифметические операции, кроме +, приводят к числовому типу, потому выражение аналогично 3 + 2 - 1
'3' + 2 - 1 //31; первые два операнда склеиваются в строку, затем происходит преобразование к числовому типу
true + 2 //3; true равно 1, далее - преобразование к числовому типу 
+'10' + 1 //11; унарный оператор + преобразовывает строку в число
undefined + 2 //NaN; при преобразовании в число undefined становится NaN
null + 5 //5; при преобразовании в число null становится 0
true + undefined //NaN; при преобразовании в число true становится 1, а undefined - NaN

//If else

//1. Если переменная равна “hidden”, присвоить ей значение “visible”, иначе - “hidden”
if (a === 'hidden') {
  a = 'visible';
} else {
  a = 'hidden';
}

console.log(a);

/* 2. Используя if, записать условие:
a.  если переменная равна нулю, присвоить ей 1;
b. если меньше нуля - строку “less then zero”;
c. если больше нуля - используя оператор “присвоение”, переменную умножить на 10 (использовать краткую запись) */
let myLet = 5;

if (myLet === 0) {
  myLet = 1;
} else if (myLet < 0) {
  myLet = 'less then zero';
} else {
  myLet *= 10;
}

console.log(myLet);

/* 3. Дан объект let car = { name: 'Lexus', age: 10, create: 2008, needRepair: false }.
Написать условие если возраст машины больше 5 лет то нужно вывести в консоль сообщение 'Need
Repair' и свойство needRepair в объекте car изменить на true; иначе изменить на false. */
let car = {
  name: 'Lexus',
  age: 10,
  create: 2008,
  needRepair: false
};

if (car.age > 5) {
  console.log('Need Repair');
  car.needRepair = true;
} else {
  car.needRepair = false;
}

/* 4. Дан объект let item = { name: 'Intel core i7', price: '100$', discount: '15%' }.
Написать условие если у item есть поле discount и там есть значение то в объекте item создать
поле priceWithDiscount и записать туда цену с учетом скидки и вывести ее в консоль, обратите
внимание что поля discount и price это строки и вам из них нужно получить числа чтобы выполнить
расчет. иначе если поля discount нет то вывести просто поле price в консоль. */
let item = {
  name: 'Intel core i7',
  price: '100$',
  discount: '15%'
};

if (item.discount && (item.discount !== null || item.discount !== undefined || item.discount !== '' || item.discount !== NaN)) {
  item.priceWithDiscount = parseInt(item.price) - (parseInt(item.price) * parseInt(item.discount) / 100);
  console.log(item.priceWithDiscount + '$');
} else {
  console.log(item.price);
}

/* 5. Написать условие если цена товара больше или равна минимальной цене и меньше или равна максимальной
цене то вывести в консоль название этого товара, иначе вывести в консоль что товаров не найдено. */
let product = {
 name: 'Яблоко',
 price: '10$'
};
let min = 10; // минимальная цена
let max = 20; // максимальная цена

if (parseInt(product.price) >= min && parseInt(product.price) <= max) {
  console.log(product.name);
} else {
  console.log('Товаров не найдено');
}

//Objects

//1. Создать объект с полем product, равным ‘iphone’
let myObject = {product: 'iphone'}

//2. Добавить в объект поле price, равное 1000 и поле currency, равное ‘dollar’
myObject.price = 1000;
myObject.currency = 'dollar';
//3. Добавить поле details, которое будет содержать объект с полями model и color
myObject.details = {
  model: '3g',
  color: 'zima blue'
}
