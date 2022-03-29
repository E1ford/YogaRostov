/* Индекс слайда по умолчанию */
var slideIndex = 1;
showSlides(slideIndex);

/* Функция увеличивает индекс на 1, показывает следующй слайд*/
function plusSlide() {
  stopAndStartTimeout();
  showSlides((slideIndex += 1));
}

/* Функция уменьшяет индекс на 1, показывает предыдущий слайд*/
function minusSlide() {
  stopAndStartTimeout();
  showSlides((slideIndex -= 1));
}

/* Устанавливает текущий слайд */
function currentSlide(n) {
  stopAndStartTimeout();
  showSlides((slideIndex = n));
}

/* Основная функция слайдера */
function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName('item');
  var dots = document.getElementsByClassName('slider-dots_item');
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(' active', '');
  }
  slides[slideIndex - 1].style.display = 'block';
  dots[slideIndex - 1].className += ' active';
}
//остановка и повторный запуск интервала при переключении слайда
let aa;
function stopAndStartTimeout() {
  clearInterval(aa);

  aa = setInterval(function () {
    plusSlide();
  }, 6000);
}

stopAndStartTimeout();
let width =
  document.documentElement.clientWidth <= '700' ||
  window.screen.availWidth <= '700' ||
  window.screen.width <= '700';
if (width) {
  document.addEventListener('DOMContentLoaded', ready);
  function ready() {
    let mapa = document.querySelector('.some_map');
    let childrenMap = mapa.firstElementChild;
    childrenMap.width = '350px';
    childrenMap.height = '250px';
  }
}
console.log(width);
