
const hamburger = document.querySelector('.hamburger'),
    menu = document.querySelector('.menu'),
    closeElem = document.querySelector('.menu__close');    
    menuItems = document.querySelectorAll('.menu__link');

hamburger.addEventListener('click', () => {
    menu.classList.add('active');
    menuItems.forEach(function(element) {
        element.classList.add('show'); // Добавить класс ко всем элементам
      });
    
});

closeElem.addEventListener('click', () => {
    menu.classList.remove('active');
    menuItems.forEach(function(element) {
        element.classList.remove('show'); // Добавить класс ко всем элементам
      });
});

// скрипт для появления анимации
new WOW().init();


const counters = document.querySelectorAll('.progres__size'),
      lines = document.querySelectorAll('.progres__divider span');

        counters.forEach( (item, i) => {
          lines[i].style.width = item.innerHTML;
        });
