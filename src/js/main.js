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
