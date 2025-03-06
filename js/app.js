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
var dots = document.querySelectorAll('.m5dot');
var m5cBoxes = document.querySelectorAll('.m5-cBoxes');

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
for(dot of dots){
    dot.addEventListener(
        'click',
        function () {
            var thisNum = Number(this.id);
            dotsIndex = thisNum;
            for(dot of dots){
                dot.classList.remove('m5dotActive');
            }
            this.classList.add('m5dotActive');
            for(var i=0; i<m5cBoxes.length; i++){
                m5cBoxes[i].style.transform = `translateX(-${thisNum * 108.3}%)`;
            }
        }
    );
}
var dotsIndex = 1;
setInterval(
    function(){
        for(dot of dots){
            dot.classList.remove('m5dotActive');
        }
        dots[dotsIndex].classList.add('m5dotActive');
        for(var ii=0; ii<m5cBoxes.length; ii++){
            m5cBoxes[ii].style.transition = `1s`;
            m5cBoxes[ii].style.transform = `translateX(-${dotsIndex * 108.3}%)`;
        }
        dotsIndex++;
        if(dotsIndex == dots.length){
            dotsIndex = 0;
        }
    },5000
);