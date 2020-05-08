
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



    $('.main').toggleClass('is-search-padding');
    $('.search-bar').toggleClass('hidden');
});
// ** ** **

// ** mob menu activete
$('.navbar-mobile__hamburger').bind('click',function (e) {
    e.preventDefault();
    $(this).toggleClass('expanded-menu');
    $('.mobile-menu').slideToggle(300, function () {
        $('.mobile-menu').toggleClass('active');

        // hide links in menu bar
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

// ** slider main page **
$('.banner-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    // fade: true,
    dots: true,
    centerMode: false,
    // adaptiveHeight: true
});

// ** slider goods card

$('.panel').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.thumbs'
});
$('.thumbs').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: '<button class="making-arrow-prev"></button>',
    nextArrow: '<button class="making-arrow-next"></button>',
    asNavFor: '.panel',
    dots: false,
    centerMode: false,
    adaptiveHeight: false,
    focusOnSelect: true
});