/* 1. Создать функцию, которая принимает два элемента. Функция проверяет, является ли первый элемент родителем для второго:
isParent(parent, child);
isParent(document.body.children[0], document.querySelector('mark'));
true так как первый див является родительским элементом для mark
isParent(document.querySelector('ul'), document.querySelector('mark'));
false так ul НЕ является родительским элементом для mark */
let parent = document.querySelector('article');
let child = document.querySelector('mark');

function isParent(parent, child) {
    return parent.contains(child);
}

console.log(isParent(parent, child));

//2. Получить список всех ссылок, которые не находятся внутри списка ul
let allLinks = document.links;

for (let el of allLinks) {
    if (!el.closest('li')) {
        console.log(el);
    }
}

//3. Найти элемент, который находится перед и после списка ul
console.log(document.querySelector('ul').previousElementSibling);
console.log(document.querySelector('ul').nextElementSibling);

//4. Посчитать количество элементов li в списке
console.log(document.querySelectorAll('ul li').length);
