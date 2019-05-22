//Замыкания

/* 1. Создайте функцию которая бы умела делать:
minus(10)(6); // 4
minus(5)(6); // -1
minus(10)(); // 10
minus()(6); // -6
minus()(); // 0
Подсказка, функция minus должна возвращать другую функцию. */
function minus(a = 0) {
    return function(b = 0) {
        return a - b;
    }
}

console.log(minus(10)(6));
console.log(minus(5)(6));
console.log(minus(10)());
console.log(minus()(6));
console.log(minus()());
 

/* 2.Реализовать функцию, которая умножает и умеет запоминать возвращаемый результат между вызовами:
function multiplyMaker ...
const multiply = multiplyMaker(2);
multiply(2); // 4 (2 * 2)
multiply(1); // 4 (4 * 1)
multiply(3); // 12 (4 * 3)
multiply(10); // 120 (12 * 10) */
function multiplyMaker (value) {
	return function(multiplier) {
		return value *= multiplier;
	}
}

const multiply = multiplyMaker(2);

console.log(multiply(2));
console.log(multiply(1));
console.log(multiply(3));
console.log(multiply(10));
 

/* 3. Реализовать модуль, который работает со строкой и имеет методы:
a. установить строку
i. если передано пустое значение, то установить пустую строку
ii. если передано число, число привести к строке
b. получить строку
c. получить длину строки
d. получить строку-перевертыш
Пример:
модуль.установитьСтроку(‘abcde’);
модуль.получитьСтроку(); // ‘abcde’
модуль.получитьДлину(); // 5 */
let workWithString = (function() {
    let input = '';

    function setString (str) {
        if (!str) {
            return input;
        } else {
            if (typeof str !== 'string') {
                return input = String(str);
            } else {
                input = str;
            }
        }
        return input;
    }

    function getString () {
        return input;
    }

    function strLength() {
        return input.length;
    }

    function getReverse (){
       let reversedString = '';

       let i = (input.length - 1);

       while (i >= 0) {
			reversedString += input[i];
  			i--;
  	   }
       return reversedString;
    }

    return {
        setString,
        getString,
        strLength,
        getReverse
    }
})();

let value = (763);

console.log(workWithString.setString(value));
console.log(workWithString.getString(value));
console.log(workWithString.strLength(value));
console.log(workWithString.getReverse(value));

 
/* 4. Создайте модуль “калькулятор”, который умеет складывать, умножать, вычитать, делить
и возводить в степень. Конечное значение округлить до двух знаков после точки
(значение должно храниться в обычной переменной, не в this).
модуль.установитьЗначение(10); // значение = 10
модуль.прибавить(5); // значение += 5
модуль.умножить(2); // значение *= 2
модуль.узнатьЗначение(); // вывести в консоль 30 (здесь надо округлить)
Также можно вызывать методы цепочкой:
модуль.установитьЗначение(10).вСтепень(2).узнатьЗначение(); // 100 */
let calculator = (function() {
	let number;

    function setVal(value) {
        number = value;
        return this;  
    }

    function add(value) {
        number += value;
        return this;
    }

    function multiply(value) {
        number *= value;
        return this;
    }

    function subtract(value) {
        number -= value;
        return this;
    }

    function divide(value) {
        number /= value;
        return this;
    }

    function exponent(value) {
        number = Math.pow(number, value);
        return this;
    }

    function getValue() {
        number = Math.round(number * 100) / 100;
        return number;
    }

    return {
        setVal,
        add,
        multiply,
        subtract,
        divide,
        exponent,
        getValue
    }
})();

console.log(calculator.setVal(10).getValue());
console.log(calculator.add(5).divide(2).getValue());
console.log(calculator.exponent(3).getValue());



//Конструкторы

/* 1.Создать конструктор для производства автомобилей. Конструктор должен принимать
марку автомобиля и возраст машины. Конструктор должен иметь метод, который возвращает
марку, и второй метод, который возвращает год производства машины (год текущий минус
возраст машины, использовать Date для получения текущего года)
var lexus = new Car(‘lexus’, 2);
lexus.получитьМарку(); // “Lexus”
lexus.получитьГодВыпуска(); // 2017 (2019-2);
Марка машины всегда должна возвращаться с большой буквы! */
function MakeCar(model, age) {
    this.getModel = function () {
    	let carModel = model[0].toUpperCase() + model.slice(1);
    	return carModel;
    }

    this.getYear = function () {
    	let makingYear = new Date().getFullYear() - age;
    	return makingYear;
    }
}

let lexus = new MakeCar('lexus', 2);

console.log(lexus.getModel());
console.log(lexus.getYear());


//2.Написать конструктор, который умеет элементарно шифровать строки (например, сделать из строки строку-перевертыш,
//или заменить все символы их цифровым представлением, или любой другой метод).
//Конструктор при инициализации получает строку и имеет следующие методы:
    // a. показать оригинальную строку
    // b. показать зашифрованную строку
    // Строки не должны быть доступны через this, только с помощью методов.
 function StrEncrypter(str) {
    this.getStr = function() {
    	return str;
    }

    this.getEncryptedStr = function() {
    	let encryptedStr = '';

        let i = (str.length - 1);
        while (i >= 0) {
			 encryptedStr += str[i];
  			 i--;
  		}
    	return encryptedStr;
    }
}    

let word = ('hello');
let result = new StrEncrypter(word);

console.log(result.getStr());
console.log(result.getEncryptedStr());