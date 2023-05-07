$(document).ready(function(){
    $('.carosel').slick({
        
        infinite: true,
        speed: 700,
        slidesToShow: 1,
        prevArrow: '<button type="button" class="slick-prev"><img src="../icons/Arrow-left.png"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="../icons/Arrow-right.png"></button>',
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    
                    arrows: false
                }
            }
        ]
    });

    new WOW().init();

    //modal
    $('[data-modal=consultation]').on('click', function(){
        $('.overlay, #consultation').fadeIn('slow');
   });
   $('.modall__close').on('click', function() {
    $('.overlay, #consultation, #thanks, #order').fadeOut('slow');
   });
  
   $('.section_2_btn').each(function(i) {
    $(this).on('click', function() {
        $('#order .modall__descr').text($('.sectin_2_h2').eq(i).text());
        $('.overlay, #order').fadeIn('slow');
    })
   })
  });

  $('.consultation_btn').each(function(i) {
    $(this).on('click', function() {
        
        $('.overlay, #consultation').fadeIn('slow');
    })
});