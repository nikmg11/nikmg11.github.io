
$(document).ready(function () {
    $('.section_4_slayder').slick({

        infinite: true,
        speed: 700,
        slidesToShow: 1,
        prevArrow: '<button type="button" class="slick-prev"><img src="../icons/section_slider/chevron-left-solid.png"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="../icons/section_slider/chevron-right-solid.png"></button>',
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    
                    arrows: false
                }
            }
        ]

    });
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

});