import { navbar } from "../../Components/Navbar.js";
import { footer } from "../../Components/Footer.js";

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
const slider = document.getElementById("slider");
const prevButton = document.getElementById("prev");
const nextButton = document.getElementById("next");

// Get the total number of slides and the width of each slide
const slides = slider.children;
const totalSlides = slides.length;
const slideWidth = slider.clientWidth;

let currentIndex = 0;

// Function to update the slider position
function updateSliderPosition() {
  slider.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
}

// Event listeners for navigation buttons
nextButton.addEventListener("click", () => {
  if (currentIndex < totalSlides - 1) {
    currentIndex++;
    updateSliderPosition();
  } else {
    currentIndex = 0; // Loop back to the first slide
    updateSliderPosition();
  }
});

prevButton.addEventListener("click", () => {
  if (currentIndex > 0) {
    currentIndex--;
    updateSliderPosition();
  } else {
    currentIndex = totalSlides - 1; // Loop back to the last slide
    updateSliderPosition();
  }
});

// Optional: Auto-slide functionality
let autoSlide = setInterval(() => {
  nextButton.click();
}, 5000); // Change slide every 5 seconds

// Pause auto-slide on hover
const sliderContainer = document.querySelector(
  ".relative.w-full.h-screen.overflow-hidden"
);
sliderContainer.addEventListener("mouseover", () => clearInterval(autoSlide));
sliderContainer.addEventListener("mouseout", () => {
  autoSlide = setInterval(() => {
    nextButton.click();
  }, 5000);
});
