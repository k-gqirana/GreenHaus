// ------------------- Functionality for NavBar ------------------- //

document.addEventListener("DOMContentLoaded", function () {
  const navToggle = document.querySelector(".nav-toggle");
  const navItems = document.querySelector(".nav-items");

  navToggle.addEventListener("click", function () {
    navItems.classList.toggle("active");
  });
});

// --------------------------------------------------------------- //

// -------------------- Animation for Carousel -------------------- //

const slides = document.querySelectorAll(".carousel-slide");
const prevButton = document.querySelector(".fa-chevron-left");
const nextButton = document.querySelector(".fa-chevron-right");
let currentSlide = 0;

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.style.display = i === index ? "block" : "none";
  });
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}

function prevSlide() {
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  showSlide(currentSlide);
}

// Auto-scroll the carousel every 3 seconds
const autoScrollInterval = setInterval(nextSlide, 3000);

// Attach click event listeners to the previous and next buttons
prevButton.addEventListener("click", () => {
  clearInterval(autoScrollInterval); // Stop auto-scrolling
  prevSlide();
});

nextButton.addEventListener("click", () => {
  clearInterval(autoScrollInterval); // Stop auto-scrolling
  nextSlide();
});

// Display the initial slide
showSlide(currentSlide);

// ---------------------------------------------------------------- //
