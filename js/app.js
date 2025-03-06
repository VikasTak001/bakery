var slidMenuBlog = document.querySelector('#blog');
var slidMenuBloger = document.querySelector('#bloger');
var rotate = document.querySelector('.rotate');
var menuBars = document.querySelector('#menuBars');
var bars = document.querySelector('#bars');
var cross = document.querySelector('#cross');
var menu = document.querySelector('.NavMenu');
var opt = document.querySelector('#optHidden');
var lavel2 = document.querySelector('#lavel23');
var a = true;
var body = document.querySelector('body');
var vodo = document.querySelector('#vdo');
var ain = document.querySelector('#ain');
var mobi = 2;
if (window.innerWidth <= 991){
    mobi = 1;
}

slidMenuBlog.addEventListener(
    'click',
    function () {
        slidMenuBloger.classList.toggle('open');
        rotate.classList.toggle('rotation');
        if (!a) {
            slidMenuBloger.classList.toggle('fullopen');
            a = !a;
        }
    }
);

menuBars.addEventListener(
    'click',
    function () {
        bars.classList.toggle('menuBarsHide');
        cross.classList.toggle('crossVisiable');
        menu.classList.toggle('navMenuVisible');
        body.classList.toggle('body');
    }
);

lavel2.addEventListener(
    'click',
    function () {
        opt.classList.toggle('optVisible');
        slidMenuBloger.classList.toggle('fullopen');
        a = !a;
        return a;
    }
);
var vdoOpen = document.querySelector('#vdoOpen');

vodo.addEventListener(
    'click',
    function () {
        vdoOpen.classList.add('dark-overlayVisible');
        body.classList.add('body');
    }
);
vdoOpen.addEventListener(
    'click',
    function () {
        vdoOpen.classList.remove('dark-overlayVisible');
        body.classList.remove('body');
    }
);
$('.m5-container').slick(
    {
        infinite: true,
        slidesToShow: mobi,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        dots: true,
        arrows: false,
        pauseOnHover: false,
        speed: 1000
    }
);