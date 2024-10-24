let offset = 0; //смещение от левого края
const sliderLine = document.querySelector('.catalog__slider-line');

document.querySelector('.catalog__right').addEventListener('click', function(){
    offset += 900
    if (offset > 1800){
        offset = 0;
    }
    sliderLine.style.left = -offset + 'px';
});

document.querySelector('.catalog__left').addEventListener('click', function(){
    offset -= 900
    if (offset < 0){
        offset = 1800;
    }
    sliderLine.style.left = -offset + 'px';
});

document.querySelector("header").addEventListener("click",function() {
   document.getElementById("burger").addEventListener.toggle("open")
});