// CAROUSEL

var carousel = document.querySelector('.carousel');
var images = document.querySelectorAll('.carousel img');
var imageWidth = images[0].clientWidth;
var currentIndex = 0;

function slideNext() {
    currentIndex++;
    if (currentIndex > images.length - 1) {
      currentIndex = 0;
    }
    carousel.style.transition = 'transform 0.5s ease';
    carousel.style.transform = 'translateX(' + (-imageWidth * currentIndex) + 'px)';
  }

function slidePrevious() {
  currentIndex--;
  if (currentIndex < 0) {
    currentIndex = images.length - 1;
  }
  carousel.style.transform = 'translateX(' + (-imageWidth * currentIndex) + 'px)';
}

setInterval(slideNext, 3000);


