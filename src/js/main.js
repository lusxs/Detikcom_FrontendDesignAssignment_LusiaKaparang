// Function to handle smooth scrolling behavior
function smoothScrollTo(target) {
  document.querySelector(target).scrollIntoView({
    behavior: "smooth",
  });
}

// Smooth scrolling behavior when clicking on links
document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const target = this.getAttribute("href");
      smoothScrollTo(target);
    });
  });
});

// running picture
function runLogoSlideshow() {
  const slider = document.querySelector(".slider");
  const sliderWrapper = document.querySelector(".slider-wrapper");
  const logoItems = document.querySelectorAll(".logo-item");
  const logoItemWidth = logoItems[0].clientWidth;
  let currentPosition = 0;

  sliderWrapper.style.width = `${logoItemWidth * logoItems.length}px`;

  function moveSlider() {
    currentPosition += logoItemWidth;

    if (currentPosition >= sliderWrapper.clientWidth) {
      currentPosition = 0;
    }

    sliderWrapper.style.transform = `translateX(-${currentPosition}px)`;
  }

  setInterval(moveSlider, 1000);
}

document.addEventListener("DOMContentLoaded", runLogoSlideshow);
