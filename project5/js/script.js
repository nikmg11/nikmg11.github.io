
$(document).ready(function(){
    $('.promo__slide').slick({
        autoplay: true,
        fade: true,
        speed: 1000,
        infinite: true,
        prevArrow: '<button type="button" class="slick-prev"><img src="icons/right.svg"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="icons/right.svg"></button>',
        responsive: [
            {
              breakpoint: 1500,
              settings: {
                arrows: false,
              }
            },
        ]
    });
  });

// HAMBURGER MENU

window.addEventListener('DOMContentLoaded', () => {
  const menu = document.querySelector('.navbar'),
  menuItem = document.querySelectorAll('.navbar__item'),
  hamburger = document.querySelector('.hamburger');

  hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('hamburger_active');
      menu.classList.toggle('navbar_active');
  });

  menuItem.forEach(item => {
      item.addEventListener('click', () => {
          hamburger.classList.toggle('hamburger_active');
          menu.classList.toggle('navbar_active');
      })
  })
});

// WOW 
new WOW().init();
