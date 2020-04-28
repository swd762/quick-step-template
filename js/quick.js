
// disable hover on cards in mobile width
let cards = $('.product-item');
if ($(window).width() <= 900) {
    for (let i = 0; i <cards.length ; i++) {
        cards[i].classList.remove('desktop--hover');
    }
}
// ** ** **

// fixed menu activate
// $(window).scroll(function () {
//     if($(this).scrollTop()>165) {
//         $('header.header').addClass('menu-fixed');
//     } else {
//         $('header.header').removeClass('menu-fixed');
//     }
// })

// ** ** **

// ** searchbar activate mobile
    $('.navbar-mobile__search').bind('click', function (e) {
        e.preventDefault();
        $('.navbar-mobile__wrapper').toggleClass('is-search');
        $('.header-mobile').toggleClass('is-search');
        $('.search-bar').toggleClass('hidden');
    })

// ** ** **

    $('.navbar-mobile__hamburger').bind('click',function (e) {
        e.preventDefault();
        $('.mobile-menu').slideToggle(300, function () {
            $('.mobile-menu').toggleClass('active');
        })

    })
$menus = $('.mobile-menu');
$('.has-children').click(function (e) {
    // e.preventDefault();
    $(this).next('.child').children('.sub-menu__content').toggleClass('active');
});
$('.sub-menu__content .title-link').click(function (e) {
    e.preventDefault();
    $(this).parent().parent().toggleClass('active');
});


    // $menus = $('.mobile-menu>.has-children');
// for (let i = 0; i <$menus.length ; i++) {
//     $menus
// }








// ***

// Инициализация b-lazy
var bLazy = new Blazy();

