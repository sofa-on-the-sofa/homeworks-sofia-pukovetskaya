// Arrow functions

/* Переделать функцию с использованием функции-стрелки (в методе reduce тоже использовать arrow function):

function sum() {
  const params = Array.prototype.slice.call(arguments);

  if (!params.length) return 0;

  return params.reduce(function (prev, next) { return prev + next; });
}

sum(1, 2, 3, 4); // 10
sum(); // 0 */
// Array.prototype.forEach.call(listOfLinks, (element) => arrayWithLinksText.push(element.innerHTML));

let sum = (...props) => {
  if (!props.length) return 0;

  return props.reduce((prev, next) => prev + next);
}

console.log(sum(1, 2, 3, 4));
console.log(sum());



// Деструктурирующее присваивание

/* 1. Используя rest оператор и деструктуризацию, создать функцию, которая принимает любое количество аргументов и возвращает объект, содержащий первый аргумент и массив из остатка:

func(‘a’, ‘b’, ‘c’, ‘d’) →
{
  first: ‘a’,
  other: [‘b’, ‘c’, ‘d’]
} */

let foo = (...props) => {
	const [first, ...other] = props;
	return {first, other};
};

console.log(foo('a', 'b', 'c', 'd'));

/* 2. Организовать функцию getInfo, которая принимает объект вида
{ name: ...,  info: { employees: [...], partners: [ … ]  } }
и выводит в консоль имя (если имени нет, показывать ‘Unknown’) и первые две компании из массива partners:

const organisation = {
  name: 'Google',
  info: { employees: [‘Vlad’, ‘Olga’], partners: ['Microsoft', 'Facebook', 'Xing']   }
};
getInfo(organisation); →
Name: Google
Partners: Microsoft Facebook */

const organisation = {
  name: 'Google',
  info: { employees: ['Vlad', 'Olga'], partners: ['Microsoft', 'Facebook', 'Xing'] }
};

let getInfo = ({name = 'Unknown', info: {partners: [first, second]}}) => `Name: ${name}; Partners: ${first}, ${second}`;

console.log(getInfo(organisation));


//This. Контекст вызова функции.

/* 1. Создать объект, который описывает ширину и высоту
прямоугольника, а также может посчитать площадь фигуры:
const rectangle = {width:..., height:..., getSquare:...}; */

let rectangle = {
  width: 13,
  height: 4,
  getSquare: function() {
    return this.width * this.height;
  }
};

console.log(rectangle.getSquare());

/* 2. Создать объект, у которого будет цена товара и его скидка, а также
два метода: для получения цены и для расчета цены с учетом скидки:
const price = {
    price: 10,
    discount: '15%',
... };
price.getPrice(); // 10
price.getPriceWithDiscount(); // 8.5 */

let price = {
  price: 10,
  discount: '15%',
  getPrice: function() {
    return this.price;
  },
  getPriceWithDiscount: function() {
    let currentPrice = this.price;
    let currentDiscount = this.discount;
    return currentPrice - (currentPrice / 100) * parseInt(currentDiscount);
  }
};

console.log(price.getPrice());
console.log(price.getPriceWithDiscount());

/* 3. Создать объект, у которого будет поле высота и метод “увеличить
высоту на один”. Метод должен возвращать новую высоту:
object.height = 10;
object.inc(); // придумать свое название для метода
object.height; // 11; */

let object = {
  height: 10,
  increaseHeight: function() {
    return ++this.height;
  }
};

console.log(object.increaseHeight());
console.log(object.height);

/* 4. Создать объект “вычислитель”, у которого есть числовое свойство
“значение” и методы “удвоить”, “прибавить один”, “отнять один”.
Методы можно вызывать через точку, образуя цепочку методов:
const numerator = {
    value: 1,
    double: function () {...},
    plusOne: function () {...},
    minusOne: function () {...},
}
numerator.double().plusOne().plusOne().minusOne();
numerator.value // 3 */

const numerator = {
  value: 1,
  double: function() {
    this.value = this.value * 2;
    return this;
  },
  plusOne: function() {
    this.value = this.value + 1;
    return this;
  },
  minusOne: function() {
    this.value = this.value - 1;
    return this;
  }
};

numerator.double().plusOne().plusOne().minusOne();

console.log(numerator.value);


/* 5. Создать объект с розничной ценой и количеством продуктов. Этот
объект должен содержать метод для получения общей стоимости всех товаров (цена * количество продуктов) */

const retail = {
  price: '7 $',
  quantity: 24,
  getTotalCost: function() {
    return parseInt(this.price) * this.quantity;
  }
};

console.log(retail.getTotalCost());

/* 6. Создать объект из предыдущей задачи. Создать второй объект, который описывает количество деталей и цену за одну деталь.
 Для второго объекта нужно узнать общую стоимость всех деталей, но нельзя создавать новые функции и методы.
 Для этого “позаимствуйте” метод из предыдущего объекта. */

const details = {
  quantity: 200,
  price: '3 $'
};

console.log(retail.getTotalCost.call(details));

/* 7. Даны объект и функция:
let sizes = {width: 5, height: 10},
getSquare = function () {return this.width * this.height};
Не изменяя функцию или объект, получить результат функции
getSquare для объекта sizes */

let sizes = {
  width: 5,
  height: 10
};

getSquare = function() {
  return this.width * this.height;
};

console.log(getSquare.call(sizes));

/* 8. let element = {
    height: 25,
    getHeight: function () {return this.height;}
};
let getElementHeight = element.getHeight;
getElementHeight(); // undefined
Измените функцию getElementHeight таким образом, чтобы можно
было вызвать getElementHeight() и получить 25. */

let element = {
  height: 25,
  getHeight: function() {
    return this.height;
  }
};

let getElementHeight = element.getHeight.bind(element);

console.log(getElementHeight());
