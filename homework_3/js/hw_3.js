// Тернарный оператор. Switch case

/* 1. Записать в виде switch case. В консоли должно отразиться только одно значение
if (a === ‘block’) {
console.log(‘block’)
} else if (a === ‘none’) {
console.log(‘none’)
} else if (a === ‘inline’) {
console.log(‘inline’)
} else {
console.log(‘other’)
} */
var a = 'none';

switch (a) {
  case 'block':
  console.log('block'); break;
  case 'none':
  console.log('none'); break;
  case 'inline':
  console.log('inline'); break;
  default:
  console.log('other');
}

//2. Из задач по условному оператору if else выполнить задачи 1, 2 и 3 в виде тернарного оператор
//2.1 Если переменная равна “hidden”, присвоить ей значение “visible”, иначе - “hidden”
a === 'hidden'
  ? a = 'visible'
  : a = 'hidden';

console.log(a);


/* 2.2 Используя if, записать условие:
a.  если переменная равна нулю, присвоить ей 1;
b. если меньше нуля - строку “less then zero”;
c. если больше нуля - используя оператор “присвоение”, переменную умножить на 10
(использовать краткую запись) */
let myLet = -3;

myLet === 0
  ? myLet = 1
  : myLet < 0
    ? myLet = 'less then zero'
    : myLet *= 10;

console.log(myLet);

/* 2.3 Написать условие если возраст машины больше 5 лет то нужно вывести в консоль сообщение 'Need
Repair' и свойство needRepair в объекте car изменить на true; иначе изменить на false */
let car = {
  name: 'Lexus',
  age: 10,
  create: 2008,
  needRepair: false
};

car.age > 5
  ? (console.log('Need Repair'), car.needRepair = true)
  : car.needRepair = false;


//Циклы

/* 1. На основе строки “i am in the easycode” сделать новую строку где первые буквы каждого слова
будут в верхнем регистре. Использовать for или while. */

let myString = 'i am in the easycode';
let myArray = myString.split(' ');

for (let i = 0; i < myArray.length; i++) {
  myArray[i] = (myArray[i][0].toUpperCase() + myArray[i].slice(1));
}

myString = (myArray.join(' '));

console.log(myString);

/* 2. Дана строка “tseb eht ma i”. Используя циклы, сделать строку-перевертыш (то есть последняя буква
становится первой, предпоследняя - второй итд) */
let bestString = 'tseb eht ma i';
let reverseString = '';

let y = (bestString.length - 1);
while (y >= 0) {
  reverseString += bestString[y];
  y--;
}

console.log(reverseString);

/* 3. Факториал числа - произведение всех натуральных чисел от 1 до n
включительно: 3! = 3*2*1, 5! = 5*4*3*2*1. С помощью циклов вычислить факториал числа 10.
Использовать for */
let myNumber = 10;
let factorial = 1;

for (let x = 2; x <= myNumber; x++) {
  factorial *= x;
}

console.log(factorial);

/* 4. На основе строки “JavaScript is a pretty good language” сделать новую строку,
где каждое слово начинается с большой буквы, а пробелы удалены. Использовать for. */
let longString = 'JavaScript is a pretty good language';
let newString = '';

for (let n = 0; n < longString.length; n++) {
  if (longString[n] === ' ' && n !== longString.length - 1) {
    newString += longString[n+1].toUpperCase();
  } else if (longString[n - 1] === ' ' && n !== 0) {
    continue;
  } else {
    newString += longString[n];
  }
}

console.log(newString);
/* Хотела какой-нибудь новый способ, чтобы не повторять решение со split из задания 1, получилось вот так.
Но все-таки он более громоздкий и кажется мне менее читаемым, потому решила потренироваться дальше со split, этот вариант ниже */

let secondArray = longString.split(' ');

for (let i = 0; i < secondArray.length; i++) {
  secondArray[i] = (secondArray[i][0].toUpperCase() + secondArray[i].slice(1));
}

let secondString = (secondArray.join(''));

console.log(secondString);


/* 5. Найти все нечетные числа в массиве от 1 до 15 включительно и вывести их в консоль. Массив [1, 2,
3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15] Использовать for of */

let newArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

for (let value of newArray) {
  if (value % 2 !== 0) {
    console.log(value);
  }
}

/* 6. Дан объект. Перебрать объект и если значение в свойстве это строка то переписать ее всю в верхнем регистре.
Использовать for in. */

let list = {
 name: 'denis',
 work: 'easycode',
 age: 29
}

for (let prop in list) {
  if (typeof(list[prop]) === 'string') {
    list[prop] = list[prop].toUpperCase();
  }
}

console.log(list);
