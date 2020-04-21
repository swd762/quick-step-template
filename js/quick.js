// disable hover on cards in mobile width
let cards = $('.product-item');
console.log(cards);

if ($(window).width() <= 900) {
    for (let i = 0; i <cards.length ; i++) {
        cards[i].classList.remove('desktop--hover');
    }
}
// ** ** **

// Инициализация b-lazy
var bLazy = new Blazy();

