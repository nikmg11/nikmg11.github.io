
$(document).ready(function () {

    $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function () {
        $(this)
            .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
            .closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
    });

    $('.catalog_item_link').each(function (i) {
        $(this).on('click', function (e) {
            e.preventDefault();
            $('.catalog_item__contant').eq(i).toggleClass('catalog_item__contant_active');
            $('.catalog_item__list').eq(i).toggleClass('catalog_item__list_active');
        })
    })

    $('.catalog_item__back').each(function (i) {
        $(this).on('click', function (e) {
            e.preventDefault();
            $('.catalog_item__contant').eq(i).toggleClass('catalog_item__contant_active');
            $('.catalog_item__list').eq(i).toggleClass('catalog_item__list_active');
        })
    })

    // modal
   $('[data-modal=consultation]').on('click', function(){
        $('.overlay, #consultation').fadeIn('slow');
   });
   $('.modall__close').on('click', function() {
    $('.overlay, #consultation, #thanks, #order').fadeOut('slow');
   });
  
   $('.catalog_item__btn').each(function(i) {
    $(this).on('click', function() {
        $('#order .modall__descr').text($('.catalog_item__subtitle').eq(i).text());
        $('.overlay, #order').fadeIn('slow');
    })
   })

  

   function valideForms(form){
    $(form).validate({
        rules:{
            name: {
                required: true,
                minlength:4
            },
            phone: "required",
            email: {
                required: true,
                email: true
            }
        },
        messages: {
            name: { 
                required: "веди имя",
                minlength: jQuery.validator.format("пиши {0} букав")
              
                
            },
            phone:{
                required: "води номер мобилки",
                
            },
            email: {
                required: "пиши адрес сюда",
                email: "пиши правду собака"
            }
        }
   });
   }
   valideForms('#consultation-form');
   valideForms('#consultation form');
   valideForms('#order form');


   $('form').submit(function(e) {
        e.preventDefault();

        if(!$(this).valid()) {
            return;
        }

        $.ajax({
            type:"POST",
            url: "mailer/smart.php",
            data: $(this).serealize()
        }).done(function() {
            $(this).find("input").val("");

            $('form').trigger('reset');
        });
        return false;
   });

   //scrool button

            $(window).scroll(function() {
                if($(this).scrollTop() > 1600) {
                    $('.page_up').fadeIn();
                }
                else {
                    $('.page_up').fadeOut();
                }
            });

    new WOW().init();

        // Получаем элементы страницы
    const slider = document.querySelectorAll('.catalog_item__contackt_img')
    const overlay = document.createElement('div')
    overlay.classList.add('overlay')
    slider.forEach(slider => {
        // ваш код для каждого слайдера
        // Добавляем обработчики событий для изображений в слайдере
    slider.querySelectorAll('img').forEach((img) => {
        img.addEventListener('click', () => {
        // Создаем новый элемент изображения
        const fullImg = new Image()
        fullImg.src = img.src
        fullImg.alt = img.alt
    
        // Добавляем элемент в оверлей
        overlay.innerHTML = ''
        overlay.appendChild(fullImg)
    
        // Отображаем оверлей на странице
        document.body.appendChild(overlay)
        overlay.style.display = 'block'
        })
    });
    
    // Добавляем обработчик события для закрытия оверлея
    overlay.addEventListener('click', (event) => {
        if (event.target === overlay) {
        overlay.style.display = 'none'
        }
    })
    });

    function clearOverlay() {
        overlay.innerHTML = ''; // очищаем содержимое оверлея
        overlay.remove(); // удаляем оверлей из DOM
      }
      
      overlay.addEventListener('click', function(event) {
        if (event.target === overlay) {
          clearOverlay(); // вызываем функцию очистки после щелчка на оверлее
        }
      });
      
      function closeOverlay() {
         clearOverlay(); // также можно вызвать эту функцию для закрытия оверлея из другого кода
      };






    

    
        
   

});