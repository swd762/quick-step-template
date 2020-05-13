// disable hover on cards in mobile width
let cards = $('.product-item');
if ($(window).width() <= 900) {
    for (let i = 0; i < cards.length; i++) {
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
$('.navbar-mobile__hamburger').bind('click', function (e) {
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
});
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


// Slowly links transition
$(".slowly").on("click", function (event) {
    event.preventDefault();
    var id = $(this).attr('href'),
        top = $(id).offset().top;
    $('body,html').animate({scrollTop: top}, 100);
});
// ***

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
// ** slider for mob goods pics
$('.goodsPic').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    // fade: true,
    dots: true,
    centerMode: false,
    // adaptiveHeight: true
});


// ** fancy lightbox gallery for cards

$(".fancybox").fancybox();


// ** nav links in goods card

$nav_links = $('.goods-card-main__content-nav ul li');
$nav_links_content = $('.goods-card-main__content-description');

for (let i = 0; i <$nav_links.length ; i++) {
    $($nav_links[i]).on('click', function (e) {
        e.preventDefault();
        for (let j = 0; j <$nav_links.length ; j++) {
            $($nav_links[j]).removeClass('selected');
            $($nav_links_content).removeClass('active');
        }
        $(this).addClass('selected');
        $($nav_links_content[i]).addClass('active');
    });
}
// ** ** **

// ******

let radio = $('.rb-js-1');
let content = $('.rb-dst-js-1');

console.log (radio);
console.log (content);

for (let i = 0; i <radio.length ; i++) {
    $(radio[i]).click(function (e) {
        let target = $(content[i]);
        $('.rb-dst-js-1').not(target).removeClass('selected');
        target.addClass('selected');
    })
}
//

if ($(window).width() <= 900) {
    for (let i = 0; i <radio.length ; i++) {
         $(content[i]).insertAfter(radio[i]);
         $(content[i]).find('.delivery-data__variant-comment').insertAfter(radio[i]);
     }
}
