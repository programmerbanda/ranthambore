const logo = document.querySelector(".logo");
logo.addEventListener("click", () => {
  window.location.href = "index.html";
});

const chambalBtn = document.querySelector(".chambalBtn");
const hotelBtn = document.querySelector(".hotelBtn");
const tourBtn = document.querySelector(".tourBtn");
const safariBtn = document.querySelector(".safariBtn");

chambalBtn.addEventListener("click", () => {
  window.location.href = "chambal.html";
});
hotelBtn.addEventListener("click", () => {
  window.location.href = "hotel.html";
});
tourBtn.addEventListener("click", () => {
  window.location.href = "package-booking.html";
});
safariBtn.addEventListener("click", () => {
  window.location.href = "safari.html";
  console.log("safari Button clicked");
});

document.addEventListener("DOMContentLoaded", function () {
  const mobileMenuBtn = document.getElementById("mobile-menu-btn");
  const mobileMenu = document.getElementById("mobile-menu");

  if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener("click", function () {
      mobileMenu.classList.toggle("hidden");
    });
  }

  // Close mobile menu when clicking outside
  document.addEventListener("click", function (event) {
    if (
      mobileMenu &&
      !mobileMenu.contains(event.target) &&
      !mobileMenuBtn.contains(event.target)
    ) {
      mobileMenu.classList.add("hidden");
    }
  });
});
