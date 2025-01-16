import { navbar } from "../../Components/Navbar.js";
import { footer } from "../../Components/Footer.js";
import { Card } from "../../Components/Card.js";
import { mockData } from "../../mock-data/home-page-card-mock-data.js";

const myCardEle = document.getElementById("myCard");

window.onload = function () {
  mockData.forEach((data) => {
    myCardEle.innerHTML += Card(data);
  });
};


// Function to inject components
function injectComponent(containerId, component) {
  const container = document.getElementById(containerId);
  if (container) {
    container.innerHTML = component;
  }
}

// Inject navbar and footer on DOMContentLoaded
document.addEventListener("DOMContentLoaded", () => {
  injectComponent("navbar", navbar());
  injectComponent("footer", footer());
});

// JavaScript for Slider Navigation
 // Get the necessary elements
  const slider = document.getElementById('slider');
  const prevButton = document.getElementById('prev');
  const nextButton = document.getElementById('next');
  const slides = document.querySelectorAll('#slider > div');
  const totalSlides = slides.length;
  
  // Set an initial slide index
  let currentSlideIndex = 0;

  // Function to update the slider's position
  function updateSliderPosition() {
    const slideWidth = slides[0].offsetWidth; // Get the width of one slide
    slider.style.transform = `translateX(-${currentSlideIndex * slideWidth}px)`;
  }

  // Handle "Previous" button click
  prevButton.addEventListener('click', function() {
    if (currentSlideIndex > 0) {
      currentSlideIndex--;
    } else {
      currentSlideIndex = totalSlides - 1; // Loop back to the last slide
    }
    updateSliderPosition();
  });

  // Handle "Next" button click
  nextButton.addEventListener('click', function() {
    if (currentSlideIndex < totalSlides - 1) {
      currentSlideIndex++;
    } else {
      currentSlideIndex = 0; // Loop back to the first slide
    }
    updateSliderPosition();
  });

  // Optional: Automatically move to the next slide every 5 seconds
  setInterval(function() {
    nextButton.click();
  }, 5000); // 5000ms = 5 seconds