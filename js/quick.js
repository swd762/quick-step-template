
// disable hover on cards in mobile width
let cards = $('.product-item');
if ($(window).width() <= 900) {
    for (let i = 0; i <cards.length ; i++) {
        cards[i].classList.remove('desktop--hover');
    }
}
// ** ** **


// ** ** **

// ** searchbar activate mobile
$('.navbar-mobile__search').bind('click', function (e) {
    e.preventDefault();
    $('.navbar-mobile__wrapper').toggleClass('is-search');
    $('.header-mobile').toggleClass('is-search');
    $('.search-bar').toggleClass('hidden');
});
// ** ** **

// ** mob menu activete
$('.navbar-mobile__hamburger').bind('click',function (e) {
    e.preventDefault();
    $(this).toggleClass('expanded-menu');
    $('.mobile-menu').slideToggle(300, function () {
        $('.mobile-menu').toggleClass('active');

        $('.navbar-mobile__search').toggle();
        $('.navbar-mobile__tel').toggle();
        $('.navbar-mobile__cart').toggle();
    })
});
// ** ** **

// ** activate sub menus in mobile
$('.has-children').click(function (e) {
    // e.preventDefault();
    $(this).next('.child').children('.sub-menu__content').toggleClass('active');
});
$('.sub-menu__content .title-link').click(function (e) {
    e.preventDefault();
    $(this).parent().parent().toggleClass('active');
});
// ** ** **


// ** extra in stock page
$('.stock-card__extra-link').click(function (e) {
        e.preventDefault();
        $(this).toggleClass('extend');
        $(this).parent().next('.stock-card__main-extra').slideToggle('active');
});
// ******

// ** more link in account **
$('.account__order-history-card-more').click(function (e) {
        e.preventDefault();
        $(this).next().slideToggle('active');
})
// ******


// Инициализация b-lazy
var bLazy = new Blazy();

