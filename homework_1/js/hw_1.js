//String

let string = 'some test string';

// Получить первую и последнюю буквы строки
console.log (string.length);
console.log (string[0]);
console.log (string[15]);

// Сделать первую и последнюю буквы в верхнем регистре
let myString = string[0].toUpperCase() + string.slice(1,15) + string[15].toUpperCase();
console.log (myString);

// Найти положение слова ‘string’ в строке
console.log (string.indexOf('string'));

// Найти положение второго пробела
console.log (string.indexOf(' ', string.indexOf(' ') + 1));

// Получить строку с 5-го символа длиной 4 буквы
console.log (string.substr(5,4));

// Получить строку с 5-го по 9-й символы
console.log (string.slice(5,9));

// Получить новую строку из исходной путем удаления последних 6-и символов
console.log (string.slice(0,-6));

// Из двух переменных a=20 и b=16 получить переменную string, в которой будет содержаться текст “2016”
let a = 20;
let b = 16;
string = `${a}${b}`;
console.log(string);


//Number

// Получить число pi из Math и округлить его до 2-х знаков после точки
console.log (Math.PI.toFixed(2));

// Используя Math, найти максимальное и минимальное числа из представленного ряда 15, 11, 16, 12, 51, 12, 13, 51
console.log (Math.max(15, 11, 16, 12, 51, 12, 13, 51));
console.log (Math.min(15, 11, 16, 12, 51, 12, 13, 51));

//Работа с Math.random: Получить случайное число и округлить его до двух цифр после запятой
console.log (Math.random().toFixed(2));

//Работа с Math.random: Получить случайное целое число от 0 до X. X - любое произвольное число
console.log (Math.floor(Math.random() * (24+1)));

//Проверить результат вычисления 0.6 + 0.7 - как привести к нормальному виду (1.3)?
console.log (0.6 + 0.7 == 1.3);
console.log (0.6 + 0.7);
let correctNum = 0.6 + 0.7;
console.log (+correctNum.toFixed(10));

//Получить число из строки ‘100$’
console.log (parseInt('100$'));