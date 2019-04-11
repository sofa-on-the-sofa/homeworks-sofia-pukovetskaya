// Функции высшего порядка

/* 1. Создать две функции и дать им осмысленные названия:
- первая функция принимает массив и колбэк (одна для всех вызовов)
- вторая функция (колбэк) обрабатывает каждый элемент массива (для каждого вызова свой
callback) */

let stringsArr = ['my', 'name', 'is', 'Trinity'];
let numbersArr = [10, 20 , 30];
let usersArr = [{age: 45, name: 'Jhon'}, {age: 20, name: 'Aaron'}];
let reverseArr = ['abc', '123'];

function firstFunc(arr, callback) {
  let newString = '';
  arr.forEach(function(currentEl) {
    newString += callback(currentEl);
  });

  return 'New value: ' + newString;
}

function toUppercase(element) {
  return element[0].toUpperCase() + element.slice(1);
}

function multiplyTen(element) {
  return element * 10 + ', ';
}

function getUserInfo(element) {
  return `${element.name} is ${element.age}, `;
}

function invert(element) {
  let myString = '';

  let i = (element.length - 1);
  while (i >= 0) {
    myString += element[i];
    i--;
  }
    return myString + ', ';
}

console.log(firstFunc(stringsArr, toUppercase));
console.log(firstFunc(numbersArr, multiplyTen));
console.log(firstFunc(usersArr, getUserInfo));
console.log(firstFunc(reverseArr, invert));


// 2. Написать аналог метода every

let someArray = [12, 8, 6];

function every(arr, callback) {
    if (Array.isArray(arr)) {
    for (let value of arr) {
      if (!callback(value)) {
        return false;
      }
    }
    return true;
  }
};

function checkFive(i, index, arr) {
  return i > 5;
}

console.log(every(someArray, checkFive));


//Перебирающие методы

/* 1. На основе массива [1,2,3,5,8,9,10] сформировать новый массив,
каждый элемент которого будет хранить информацию о числе и его четности:
[{digit: 1, odd: true}, {digit: 2, odd: false}, {digit: 3, odd: true}...] */

let firstArray = [1, 2, 3, 5, 8, 9, 10];
let secondArray = [];

firstArray.forEach(function(currentEl) {
  if (currentEl % 2 === 0) {
    secondArray.push({digit: currentEl, odd:  false});
  } else {
    secondArray.push({digit: currentEl, odd: true});
  }
  return secondArray;
});

console.log(secondArray);

/* 2. Проверить, содержит ли массив [12, 4, 50, 1, 0, 18, 40] элементы, равные нулю. Если да -
вернуть false.*/

let initialArray = [12, 4, 50, 1, 0, 18, 40];

let isZero = initialArray.every(function(value) {
    return value !== 0;
});

console.log(isZero);


/* 3. Проверить, содержит ли массив ['yes', 'hello', 'no', 'easycode', 'what'] хотя бы одно слово длиной
больше 3х букв. Если да - вернуть true */

let wordsArray = ['yes', 'hello', 'no', 'easycode', 'what'];

let longerThanThree = wordsArray.some(function(item) {
  return item.length > 3;
});

console.log(longerThanThree);

/* 4. Дан массив объектов, где каждый объект содержит информацию о букве и месте её положения
в строке {буква: “a”, позиция_в_предложении: 1}. Напишите функцию, которая из элементов массива соберет и вернёт
строку, основываясь на index каждой буквы. Например:
[{char:"H",index:0}, {char:"i",index: 1}, {char:"!",index:2}] → “Hi!” */

let characters = [{char: 'a', index: 12}, {char: 'w', index: 8}, {char: 'Y', index: 10}, {char: 'p', index: 3}, {char: 'p', index: 2},
{char: 'N', index: 6}, {char: ' ', index: 5}, {char: 'y', index: 4}, {char: 'r', index: 13}, {char: 'H', index: 0},
{char: 'e', index: 11}, {char: 'a', index: 1}, {char: ' ', index: 9}, {char: '!', index: 14}, {char: 'e', index: 7}];

function getString(arr) {
  let sortedCharacters = arr.sort(function(prev, next) {
    return prev.index - next.index;
  })

//поскольку мы не прошли reduce, и самостоятельно не получилось с ним разобраться, использовала другой понятный мне способ
  let charactersArray = sortedCharacters.map(function(character, index, sortedCharacters) {
    return character.char;
  })

  let string = charactersArray.join('');
  return string;
};

console.log(getString(characters));


//Метод Sort

/* 1. Отсортируйте массив массивов так, чтобы вначале располагались наименьшие массивы
(размер массива определяется его длиной): [ [14, 45], [1], ['a', 'c', 'd'] ] → [ [1], [14, 45], ['a', 'c', 'd'] ] */

let randomArray = [ [14, 45], [1], ['a', 'c', 'd'] ];

let sortedArray = randomArray.sort(function(prev, next) {
	  return prev.length - next.length;
});

console.log(sortedArray);

// 2. Есть массив объектов. Отсортировать их по возрастающему количеству ядер (cores).

let cpuArray = [
{cpu: 'intel', info: {cores: 2, сache: 3}},
{cpu: 'intel', info: {cores: 4, сache: 4}},
{cpu: 'amd', info: {cores: 1, сache: 1}},
{cpu: 'intel', info: {cores: 3, сache: 2}},
{cpu: 'amd', info: {cores: 4, сache: 2}}
];


let sortedCpuArray = cpuArray.sort(function(prev, next) {
	  return prev.info.cores - next.info.cores;
});

console.log(sortedCpuArray);


/* 3. Создать функцию, которая будет принимать массив продуктов и две цены. Функция должна
вернуть все продукты, цена которых находится в указанном диапазоне, и сортировать от дешевых к
дорогим */

let products = [
{title: 'prod1', price: 5.2}, {title: 'prod2', price: 0.18},
{title: 'prod3', price: 15}, {title: 'prod4', price: 25},
{title: 'prod5', price: 18.9}, {title: 'prod6', price: 8},
{title: 'prod7', price: 19}, {title: 'prod8', price: 63}
];


function filterCollection(arr, price1, price2) {
  let filteredProducts = arr.filter(function(currentEl) {
    return currentEl.price >= price1 && currentEl.price <= price2;
  })

  let sortedProducts = filteredProducts.sort(function(prev, next) {
    return prev.price - next.price;
  })
  return sortedProducts;
};


console.log(filterCollection(products, 5, 20));