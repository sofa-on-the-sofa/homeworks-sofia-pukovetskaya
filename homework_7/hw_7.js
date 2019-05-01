// 1. Найти параграф и получить его текстовое содержимое (только текст!)
let paragraph = document.querySelector('p');

console.log(paragraph.innerHTML);


/* 2. Создать функцию, которая принимает в качестве аргумента узел DOM и возвращает информацию
(в виде объекта) о типе узла, об имени узла и о количестве дочерних узлов (если детей нет - 0). */
let list = document.querySelector('ul');

let getNodeInfo = (node) => {
  let nodeType = node.nodeType;
  let nodeName = node.nodeName;
  let nodeChildrenQuantity = node.children.length;

  let nodeInfo = {
    nodeType,
    nodeName,
    nodeChildrenQuantity
  }

  return nodeInfo;
}

console.log(getNodeInfo(list));


// 3. Получить массив, который состоит из текстового содержимого ссылок внутри списка: getTextFromUl(ul) ---> ["Link1", "Link2", "Link3"]
let arrayWithLinksText = [];
let listOfLinks = document.querySelectorAll('li a');

Array.prototype.forEach.call(listOfLinks, (element) => arrayWithLinksText.push(element.innerHTML));

console.log(arrayWithLinksText);

//Или так. Очень похоже на предыдущий вариант, конечно, просто хотела попробовать с Array.from
let secondArrayWithLinksText = [];
let arrayFromLinks = Array.from(document.querySelectorAll('li a'));

arrayFromLinks.forEach((element) => secondArrayWithLinksText.push(element.innerHTML));

console.log(secondArrayWithLinksText);


/* 4. В параграфе заменить все дочерние текстовые узлы на “-text-” (вложенные теги должны остаться). Конечный результат:
-text-<a href="#">reprehendunt</a>-text-<mark>nemore</mark>-text- */
let paragraphChildren = paragraph.childNodes;

paragraphChildren.forEach((element) => element.data = '-text-');


// 5. Найти в коде список ul и добавить класс “list”
list.classList.add('list');

console.log(list); //просто чтобы посмотреть на результат


// 6. Найти в коде ссылку, находящуюся после списка ul, и добавить id=link
let linkAfterList = document.querySelector('ul ~ a');

linkAfterList.setAttribute('id', 'link');

console.log(linkAfterList);


// 7. На li через один (начиная с самого первого) установить класс “item”
let listOfLi = Array.from(document.querySelectorAll('li'));

listOfLi.forEach((element) => {
  if (listOfLi.indexOf(element) % 2 === 0) {
    element.classList.add('item');
  }
});

console.log(listOfLi);


//8. На все ссылки в примере установить класс “custom-link”
let allLinks = document.querySelectorAll('a');

allLinks.forEach((element) => element.classList.add('custom-link'));

console.log(allLinks);


/* 9. Не используя innerHTML, добавить в список несколько li с классом ‘new-item’ и текстом ‘item’ + номер li:
<ul>
<li><a href="#">Link1</a></li>
...
<li class=”new-item”>item 5</li>
<li class=”new-item”>item 6</li>
</ul>
Вручную номер li не ставить оно должно подставляться в зависимости от кол-ва лишек в списке. */

//делала с учетом того, что лектор просила применить createDocumentFragment и создать столько же лишек, сколько их было изначально
let fragment = document.createDocumentFragment();
let counter = listOfLi.length + 1;

listOfLi.forEach((element) => {
    let liElement = document.createElement('li');

    liElement.classList.add('new-item');
    liElement.innerText = `item ${counter}`;
    counter++;

    fragment.appendChild(liElement);
});

list.appendChild(fragment);


// 10. В каждую ссылку, которая находятся внутри списка ul  добавить по тегу strong (в каждую ссылку один - strong)
Array.prototype.forEach.call(listOfLinks, (element) => {
    let strongElement = document.createElement('strong');

    strongElement.innerText = `${element.innerHTML}`;
    element.innerHTML = '';
    //на лекции договорились не просто добавлять стронг, а оборачивать в него текст внутри ссылки, другого способа не придумала

    element.appendChild(strongElement);
});


/* 11. В начало документа (в начало body) добавить картинку img с атрибутами src и alt (текст придумайте сами).
В src добавьте реальный url к картинке. Для создания элемента используйте метод createElement. */
let imgElement = document.createElement('img');

imgElement.setAttribute('src', 'https://images.unsplash.com/photo-1556515268-97d056bdb5a7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60');
imgElement.setAttribute('alt', 'Mountains');

document.body.insertBefore(imgElement, document.body.firstElementChild);


// 12. Найти на странице элемент mark, добавить в конец содержимого текст “green” и на элемент установить класс green
let elementMark = document.querySelector('mark');
let markInitialText = elementMark.textContent;

elementMark.textContent = `${markInitialText} green`;
elementMark.classList.add('green');

console.log(elementMark);


//13. Отсортировать li внутри списка в обратном порядке (по тексту внутри)
let arrayOfLi = Array.from(document.querySelectorAll('li'));
let reverseArrayOfLi = arrayOfLi.sort((prev, next) => -1);

for (let i = 0; i < reverseArrayOfLi.length; i++) {
    list.appendChild(reverseArrayOfLi[i]);
}
