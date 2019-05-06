/* Реализовать примитивный дропдаун. Изначально все dropdown-menu скрыты через класс .d-none. При клике на dropdown-item
должен отображаться блок dropdown-menu который вложен именно в тот dropdown-item на котором произошел клик.
При повторном клике на этот же dropdown-item блок dropdown-menu должен закрыться. При клике на любой другой dropdown-item
уже открытый dropdown-menu должен закрываться а на тот который кликнули открываться. */
let menu = document.querySelector('.menu');

menu.addEventListener('click', ({target}) => {
  const li = target.tagName === 'LI' ? target : target.closest('li');
  const divLi = li.querySelector('.dropdown-menu');

  if (divLi) {
    divLi.classList.toggle('d-none');

    menu.querySelectorAll('.dropdown-menu').forEach((item) => {
        if(item !== divLi) item.classList.add('d-none');
    });
  }
});
