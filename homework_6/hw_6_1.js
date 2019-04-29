// 1. Получить в консоль head
console.log(document.head);


// 2. Получить в консоль body
console.log(document.body);


// 3. Получить все дочерние элементы body и вывести их в консоль
console.log(document.body.children);

//4. а) Вывести в консоль первый div и все его дочерние узлы
let divByQuerySelector = document.querySelector('div');

let divChildren = divByQuerySelector.children;

console.log(divByQuerySelector, divChildren);
/* возможно, такая запись избыточна, поскольку мы все равно получаем в консоли элемент с вложенностью.
но формулировки задач не всегда однозначны, я решила сделать так */

// 4. б) Вывести в консоль первый div и все его дочерние узлы, кроме первого и последнего
console.log(divByQuerySelector);

for (var i = 1; i < divChildren.length - 1; i++) {
    console.log(divChildren[i]);
  }
