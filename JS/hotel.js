const hideButton = document.getElementById("hide-search-section");
const hotelSearchContainer = document.getElementById("hotel-container");
const hotelSearchButton = document.getElementById("search-hotel-btn");

hideButton.addEventListener("click", () => {
  hotelSearchContainer.style.display = "none";
  hotelSearchButton.style.display = "block";
});

hotelSearchButton.addEventListener("click", () => {
  hotelSearchContainer.style.display = "block";
  hotelSearchButton.style.display = "none";
});

// Advanced search toggle
document
  .getElementById("advanced-toggle")
  .addEventListener("click", function () {
    const options = document.getElementById("advanced-options");
    const icon = this.querySelector("svg");
    options.classList.toggle("hidden");
    options.classList.add("grid");
    icon.classList.toggle("rotate-180");
  });

// Tab functionality
const tabButtons = document.querySelectorAll(".tab-button");
tabButtons.forEach((button) => {
  button.addEventListener("click", () => {
    // Remove active styles from all buttons
    tabButtons.forEach((btn) => {
      btn.classList.remove("border-blue-500", "text-blue-600");
      btn.classList.add(
        "border-transparent",
        "text-gray-500",
        "hover:text-gray-700",
        "hover:border-gray-300"
      );
    });

    // Add active styles to clicked button
    button.classList.add("border-blue-500", "text-blue-600");
    button.classList.remove(
      "border-transparent",
      "text-gray-500",
      "hover:text-gray-700",
      "hover:border-gray-300"
    );

    // Hide all tab contents
    document.querySelectorAll(".tab-content").forEach((content) => {
      content.classList.add("hidden");
    });

    // Show selected tab content
    const tabId = button.getAttribute("data-tab");
    document.getElementById(tabId).classList.remove("hidden");
  });
});

// Simple carousel functionality
const carousel = document.querySelector(".testimonial-carousel");
const slides = document.querySelectorAll(".testimonial-slide");
const dots = document.querySelectorAll(".carousel-dot");
let currentSlide = 0;

function goToSlide(index) {
  const slideWidth = slides[0].offsetWidth + 24; // 24 is the gap
  carousel.scrollTo({
    left: index * slideWidth,
    behavior: "smooth",
  });
  currentSlide = index;
  updateDots();
}

function updateDots() {
  dots.forEach((dot, index) => {
    if (index === currentSlide) {
      dot.classList.remove("bg-gray-300");
      dot.classList.add("bg-blue-600");
      dot.style.width = "16px";
    } else {
      dot.classList.remove("bg-blue-600");
      dot.classList.add("bg-gray-300");
      dot.style.width = "8px";
    }
  });
}

// Dot navigation
dots.forEach((dot, index) => {
  dot.addEventListener("click", () => goToSlide(index));
});

// Previous/next buttons
document.querySelector(".carousel-prev").addEventListener("click", () => {
  goToSlide((currentSlide - 1 + slides.length) % slides.length);
});

document.querySelector(".carousel-next").addEventListener("click", () => {
  goToSlide((currentSlide + 1) % slides.length);
});

// Initialize dots
updateDots();
