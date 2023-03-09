
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
});