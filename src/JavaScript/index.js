import { navbar } from "../../Components/Navbar.js";
import { footer } from "../../Components/Footer.js";
import { Card } from "../../Components/Card.js";
import { searchbar } from "../../Components/searchbar.js";
import { mockData } from "../../mock-data/home-page-card-mock-data.js";

const myCardEle = document.getElementById('myCard')

async function fetchPosts() {
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts`) 
  return await response.json()
}

window.onload = async function () {

  // fetch(`https://jsonplaceholder.typicode.com/posts`)
  // .then(res => res.json())
  // .then(json => {
  //   json.map(data => {
  //     myCardEle.innerHTML += Card(data)
  //   })
  // })

  const posts = await fetchPosts()

  posts.map(data => {
    myCardEle.innerHTML += Card(data)
  })

}


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
  injectComponent("searchbar", searchbar());
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
