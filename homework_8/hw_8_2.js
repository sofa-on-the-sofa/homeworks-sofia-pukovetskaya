/* Реализовать примитивный дропдаун. Изначально все dropdown-menu скрыты через класс .d-none. При клике на dropdown-item
должен отображаться блок dropdown-menu который вложен именно в тот dropdown-item на котором произошел клик.
При повторном клике на этот же dropdown-item блок dropdown-menu должен закрыться. При клике на любой другой dropdown-item
уже открытый dropdown-menu должен закрываться а на тот который кликнули открываться. */
let menu = document.querySelector('.menu');
let dropdownMenu = document.querySelectorAll('.dropdown-menu');

menu.addEventListener('click', (event) => {
  let target = event.target;

  if (target.parentElement.className === 'dropdown-item') {
    if (target.nextElementSibling.className.includes('d-none')) {
      dropdownMenu.forEach((element) => {
        if (!element.className.includes('d-none')) {
          element.classList.add('d-none');
        }
      });
      target.nextElementSibling.classList.remove('d-none');
    } else {
      target.nextElementSibling.classList.add('d-none');
    }
  }
});
