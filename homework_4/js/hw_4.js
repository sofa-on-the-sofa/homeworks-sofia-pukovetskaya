/* 1. Создать функцию multiply, которая будет принимать любое количество чисел и возвращать
их произведение: multiply(1,2,3) = 6 (1*2*3)
Если нет ни одного аргумента, вернуть ноль: multiply() // 0 */
function multiply() {
	let result = 1;

	if (arguments.length === 0) {
			result = 0;
	} else {
		for (let i = 0; i < arguments.length; i++) {
			result *= arguments[i];
		}
	}
	return result;
}

console.log(multiply(6, 8, 2));
console.log(multiply());


/* 2. Создать функцию, которая принимает строку и возвращает строку-перевертыш:
reverseString(‘test’) // “tset”. */
function reverseString(firstString) {
	let reverse = '';

	let y = (firstString.length - 1);
	while (y >= 0) {
	  reverse += firstString[y];
	  y--;
	}

	return reverse;
}

console.log (reverseString('looc'));

/* 3. Создать функцию, которая в качестве аргумента принимает строку из букв и возвращает строку,
где каждый символ разделен пробелом и заменен на юникод-значение символа:
getCodeStringFromText(‘hello’) // “104 101 108 108 111” */
function getCodeStringFromText(charString) {
		charArray = charString.split('');
		let workArray = [];

		for (let char of charArray) {
			workArray.push(char.charCodeAt(0));
		}

		let resultString = workArray.join(' ');
		return resultString;
}
console.log(getCodeStringFromText('Hello'));

/* 4. Создать функцию угадай число. Она принимает число от 1-10 (обязательно проверить что
число не больше 10 и не меньше 0). Генерирует рандомное число от 1-10 и сравнивает с
переданным числом если они совпали то возвращает “Вы выиграли” если нет то “Вы не угадали
ваше число 8 а выпало число 5”. Числа в строке указаны как пример вы подставляете реальные
числа. */
function guessNumber(j) {
	if (j > 0 && j <=10) {
			let checkNumber = Math.floor(Math.random() * 10) + 1;

			if (checkNumber === j) {
				return 'Вы выиграли';
			} else {
				return `Вы не угадали, ваше число ${j} а выпало число ${checkNumber}`
			}
	} else {
		return 'Выберите число от 1 до 10'
	}
}

console.log(guessNumber(5));


/* 5. Создать функцию, которая принимает число n и возвращает массив, заполненный числами от 1 до
n: getArray(10); // [1,2,3,4,5,6,7,8,9,10] */
function getArray(n) {
	let myArray = [];

	if (n > 0) {
		for (let k = 1; k <= n; k++) {
			myArray.push(k);
		}
	} else {
		for (let k = 1; k >= n; k--) {
			myArray.push(k);
		}
	}

	return myArray;
}

console.log(getArray(-7));


/* 6. Создать функцию, которая принимает массив, а возвращает новый массив с дублированными
элементами входного массива:
doubleArray([1,2,3]) // [1,2,3,1,2,3] */
function doubleArray(n) {
	return n.concat(n);
}

console.log(doubleArray([1,2,3]));

/* 7. Создать функцию, которая принимает произвольное (любое) число массивов и удаляет из каждого
массива первый элемент, а возвращает массив из оставшихся значений:
changeCollection([1,2,3], [‘a’, ’b’, ‘c’]) → [ [2,3], [‘b’, ‘c’] ], changeCollection([1,2,3]) → [ [2,3] ] и т.д. */
function changeCollection() {
	let longArray = [];

	for (let item of arguments) {
		item.shift();
		longArray.push(item);
	}

	return longArray;
}

console.log(changeCollection([1,2,3], ['a', 'b', 'c']));

/* 8. Создать функцию которая принимает массив пользователей, поле на которое хочу проверить и
значение на которое хочу проверять. Проверять что все аргументы переданы. Возвращать новый
массив с пользователями соответсвующие указанным параметрам.
funcGetUsers(users, “gender”, “male”); // [ {name: “Denis”, age: “29”, gender: “male”} , {name: “Ivan”, age: “20”, gender: “male”} ] */
let testArray = [{name: 'Kira', age: '27', gender: 'female'}, {name: 'Denis', age: '29', gender: 'male'}, {name: 'Ivan', age: '20', gender: 'male'}]

function funcGetUsers(usersArray, property, value) {
	let filteredArray = [];

	if (arguments.length === 3) {
		for (let user of usersArray) {
			for (let prop in user) {
				if (prop === property && user[prop] === value) {
					filteredArray.push(user);
				}
			}
		}
		return filteredArray;
	} else {
		console.log('Should be 3 arguments');
	}
}

console.log(funcGetUsers(testArray, 'gender', 'female'));
