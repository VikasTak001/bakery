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

slidMenuBlog.addEventListener(
    'click',
    function () {
        slidMenuBloger.classList.toggle('open');
        rotate.classList.toggle('rotation');
        if (!a) {
            slidMenuBloger.classList.toggle('fullopen');
            a =!a;
        }
    }
);

menuBars.addEventListener(
    'click',
    function () {
        bars.classList.toggle('menuBarsHide');
        cross.classList.toggle('crossVisiable');
        menu.classList.toggle('navMenuVisible');
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