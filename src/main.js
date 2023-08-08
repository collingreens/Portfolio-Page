import '/styles/modern-normalize.css'
import '/styles/style.css'
import '/styles/components/header.css'
import '/styles/components/hero.css'
import '/styles/components/about.css'
import '/styles/components/featured.css'
import '/styles/components/work.css'
import '/styles/components/mobile-nav.css'
import '/styles/components/footer.css'
import '/styles/utils.css'


import mobileNav from '/src/utils/mobile-nav';
import darkMode from './utils/dark-mode';

mobileNav();
darkMode();


let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
window.plusSlides = function(n) {
    showSlides(slideIndex += n)
 }

// Thumbnail image controls


function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("featured__slide");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
} 

$( function() {
  $( "#accordion").accordion();
});