// 1. По нажатию на кнопку "btn-msg" должен появиться алерт с тем текстом который находится в атрибуте data-text у кнопки.
let messageButton = document.querySelector('#btn-msg');

messageButton.addEventListener('click', () => alert(messageButton.dataset.text));


/* 2. При наведении указателя мыши на "btn-msg", кнопка становится красной; когда указатель мыши покидает кнопку,
она становится прежнего цвета. Цвет менять можно через добавление класса. */
messageButton.addEventListener('mouseover', () => messageButton.classList.add('red'));
messageButton.addEventListener('mouseout', () => messageButton.classList.remove('red'));


// 3. При нажатии на любой узел документа показать в элементе с id=tag имя тега нажатого элемента.
let body = document.body;
let tag = document.querySelector('#tag');

//вот первый вариант, но второй мне все-таки кажется лучше
// body.addEventListener('click', (e) => tag.textContent = 'Tag: ' +  e.target.tagName);

//второй вариант. на самом деле, не очень-то и отличается, но все-таки)
let textContent = tag.textContent;

body.addEventListener('click', (e) => tag.textContent = textContent + e.target.tagName);


// 4. При нажатии на кнопку btn-generate добавлять в список ul элемент списка Li с текстом Item + порядковый номер Li по списку, т.е Item 3, Item 4 и т.д
let generateButton = document.querySelector('#btn-generate');
let list = document.querySelector('ul');

generateButton.addEventListener('click', () => {
  let liElement = document.createElement('li');

  liElement.innerText = `Item ${document.querySelectorAll('li').length + 1}`;
  list.appendChild(liElement);
});
