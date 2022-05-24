/* Burger */
const burger = document.querySelector('.burger');
const navbar = document.querySelector('.navigation');
if (burger) {
    burger.addEventListener('click', function (e) {
        document.body.classList.toggle('lock')
        burger.classList.toggle('active');
        navbar.classList.toggle('active');
    });
}
const itemslist = document.querySelector('.item_list')
itemslist.addEventListener('click', function (e) {
    document.body.classList.remove('_lock')
    burger.classList.remove('active');
    navbar.classList.remove('active');
});

/* Product slider */

const image = document.querySelectorAll('.slider_item');
const sliderLine = document.querySelector('.product_slider_line');
const sliderImg = document.querySelectorAll('.slider_img')
let count = 0;
let width;

function init(){
    console.log('resize')
    width = document.querySelector('.product_slider').offsetWidth;
    sliderLine.style.width = width*image.length + 'px';
    sliderImg.forEach(item => {
        item.style.width = width + 'px';
    })
    rollSlider();
}

window.addEventListener('resize', init)
init()

document
  .querySelector('.slider_button_next')
  .addEventListener('click', function () {
    count++;
    if(count >= image.length){
        count = 0
    }
    rollSlider();
});
document
  .querySelector('.slider_button_prev')
  .addEventListener('click', function () {
    count--;
    if(count < 0){
        count = image.length - 1;
    }
    rollSlider();
});

function rollSlider() {
    sliderLine.style.transform = 'translate(-' + count * width + 'px)';
}
