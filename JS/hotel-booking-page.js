// Initialize all advanced features
document.addEventListener("DOMContentLoaded", function () {
  // Toast Notification System
  const notyf = new Notyf({
    duration: 4000,
    position: { x: "right", y: "top" },
    types: [
      {
        type: "success",
        background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
        icon: {
          className: "fas fa-check-circle",
          tagName: "i",
          color: "white",
        },
      },
      {
        type: "error",
        background: "linear-gradient(135deg, #ef4444 0%, #dc2626 100%)",
        icon: {
          className: "fas fa-exclamation-circle",
          tagName: "i",
          color: "white",
        },
      },
    ],
  });

  // Theme Switcher
  const themeToggle = document.getElementById("theme-toggle");
  const themeIcon = document.getElementById("theme-icon");
  let isDarkMode = false;

  themeToggle.addEventListener("click", () => {
    isDarkMode = !isDarkMode;
    document.documentElement.setAttribute(
      "data-theme",
      isDarkMode ? "dark" : "light"
    );
    themeIcon.className = isDarkMode
      ? "fas fa-sun text-yellow-400 text-lg"
      : "fas fa-moon text-white text-lg";
    notyf.success(`Switched to ${isDarkMode ? "dark" : "light"} mode`);

    // Update body background for dark mode
    if (isDarkMode) {
      document.body.style.background =
        "linear-gradient(135deg, #1a202c 0%, #2d3748 100%)";
    } else {
      document.body.style.background =
        "linear-gradient(135deg, #667eea 0%, #764ba2 100%)";
    }
  });

  // Search & Filter Panel
  const filterPanel = document.getElementById("search-filter-panel");
  const toggleFilterBtn = document.getElementById("toggle-filter-panel");
  const closeFilterBtn = document.getElementById("close-filter-panel");

  toggleFilterBtn.addEventListener("click", () => {
    filterPanel.style.transform = "translateX(0)";
  });

  closeFilterBtn.addEventListener("click", () => {
    filterPanel.style.transform = "translateX(-100%)";
  });

  // Price Range Filter
  const priceRange = document.getElementById("price-range");
  const priceRangeValue = document.getElementById("price-range-value");

  priceRange.addEventListener("input", (e) => {
    const value = parseInt(e.target.value);
    priceRangeValue.textContent = `₹${value.toLocaleString("en-IN")}`;
  });

  // Star Rating Filter
  const starFilters = document.querySelectorAll(".star-filter");
  let selectedRating = 0;

  starFilters.forEach((star, index) => {
    star.addEventListener("click", () => {
      selectedRating = index + 1;
      starFilters.forEach((s, i) => {
        s.style.color = i < selectedRating ? "#facc15" : "#d1d5db";
      });
    });
  });

  // Apply Filters
  document.getElementById("apply-filters").addEventListener("click", () => {
    const priceMax = document.getElementById("price-range").value;
    const selectedAmenities = Array.from(
      document.querySelectorAll(".amenity-filter:checked")
    ).map((cb) => cb.value);

    notyf.success(
      `Filters applied: Max price ₹${parseInt(priceMax).toLocaleString(
        "en-IN"
      )}, ${selectedRating} stars, ${selectedAmenities.length} amenities`
    );
    filterPanel.style.transform = "translateX(-100%)";
  });

  // Payment Modal
  const paymentModal = document.getElementById("payment-modal");
  const closePaymentModal = document.getElementById("close-payment-modal");
  const paymentMethods = document.querySelectorAll(".payment-method-card");
  const cardForm = document.getElementById("card-payment-form");
  const upiForm = document.getElementById("upi-payment-form");
  const walletForm = document.getElementById("wallet-payment-form");

  // Show payment modal when book now is clicked
  document.getElementById("book-now-btn").addEventListener("click", (e) => {
    e.preventDefault();
    const totalPrice = document.getElementById("total-price").textContent;
    document.getElementById("payment-total").textContent =
      totalPrice.split(": ")[1] || "₹0";
    paymentModal.classList.remove("hidden");
  });

  closePaymentModal.addEventListener("click", () => {
    paymentModal.classList.add("hidden");
  });

  // Payment method selection
  paymentMethods.forEach((method) => {
    method.addEventListener("click", () => {
      // Reset all methods
      paymentMethods.forEach((m) => {
        m.classList.remove("border-indigo-500", "bg-indigo-50");
        m.classList.add("border-gray-200");
      });

      // Highlight selected method
      method.classList.remove("border-gray-200");
      method.classList.add("border-indigo-500", "bg-indigo-50");

      // Show appropriate form
      cardForm.classList.add("hidden");
      upiForm.classList.add("hidden");
      walletForm.classList.add("hidden");

      const methodType = method.getAttribute("data-method");
      if (methodType === "card") {
        cardForm.classList.remove("hidden");
      } else if (methodType === "upi") {
        upiForm.classList.remove("hidden");
      } else if (methodType === "wallet") {
        walletForm.classList.remove("hidden");
      }
    });
  });

  // Process Payment
  document.getElementById("process-payment").addEventListener("click", () => {
    const loadingOverlay = document.getElementById("loading-overlay");
    loadingOverlay.classList.remove("hidden");

    setTimeout(() => {
      loadingOverlay.classList.add("hidden");
      paymentModal.classList.add("hidden");
      notyf.success("Payment successful! Booking confirmed.");

      // Generate booking ID
      const bookingId = "HTL" + Date.now().toString().slice(-8);
      setTimeout(() => {
        alert(
          `Booking confirmed!\nBooking ID: ${bookingId}\nCheck your email for details.`
        );
      }, 1000);
    }, 2000);
  });

  // Image Lightbox
  const lightbox = document.getElementById("image-lightbox");
  const lightboxImage = document.getElementById("lightbox-image");
  const closeLightbox = document.getElementById("close-lightbox");
  const carouselImages = document.querySelectorAll(".carousel-image");

  carouselImages.forEach((img, index) => {
    img.addEventListener("click", () => {
      lightboxImage.src = img.src;
      lightboxImage.alt = img.alt;
      lightbox.classList.remove("hidden");
    });
  });

  closeLightbox.addEventListener("click", () => {
    lightbox.classList.add("hidden");
  });

  // Progress Bar
  function updateProgressBar() {
    const scrollTop = window.pageYOffset;
    const docHeight = document.body.scrollHeight - window.innerHeight;
    const scrollPercent = (scrollTop / docHeight) * 100;
    document.getElementById("progress-bar").style.width = scrollPercent + "%";
  }

  window.addEventListener("scroll", updateProgressBar);

  // PWA Installation
  let deferredPrompt;
  window.addEventListener("beforeinstallprompt", (e) => {
    e.preventDefault();
    deferredPrompt = e;

    // Show install button
    const installBtn = document.createElement("button");
    installBtn.innerHTML = '<i class="fas fa-download mr-2"></i>Install App';
    installBtn.className =
      "fixed bottom-4 right-4 bg-indigo-600 text-white px-4 py-2 rounded-full shadow-lg hover:bg-indigo-700 transition-colors z-50";
    installBtn.addEventListener("click", () => {
      deferredPrompt.prompt();
      deferredPrompt.userChoice.then((choiceResult) => {
        if (choiceResult.outcome === "accepted") {
          notyf.success("App installed successfully!");
        }
        deferredPrompt = null;
        installBtn.remove();
      });
    });
    document.body.appendChild(installBtn);
  });

  // Keyboard Shortcuts
  document.addEventListener("keydown", (e) => {
    if (e.ctrlKey || e.metaKey) {
      switch (e.key) {
        case "f":
          e.preventDefault();
          document.getElementById("toggle-filter-panel").click();
          break;
        case "d":
          e.preventDefault();
          themeToggle.click();
          break;
      }
    }
    if (e.key === "Escape") {
      paymentModal.classList.add("hidden");
      lightbox.classList.add("hidden");
      filterPanel.style.transform = "translateX(-100%)";
    }
  });

  // Initialize tooltips
  const tooltips = document.querySelectorAll("[data-tooltip]");
  tooltips.forEach((tooltip) => {
    tooltip.addEventListener("mouseenter", (e) => {
      const tooltipText = e.target.getAttribute("data-tooltip");
      notyf.success(tooltipText);
    });
  });

  // Auto-save form data
  const formInputs = document.querySelectorAll(
    "#booking-form input, #booking-form select"
  );
  formInputs.forEach((input) => {
    input.addEventListener("input", () => {
      localStorage.setItem("booking_" + input.name, input.value);
    });

    // Load saved data
    const savedValue = localStorage.getItem("booking_" + input.name);
    if (savedValue) {
      input.value = savedValue;
    }
  });

  // Scroll to Top
  const scrollToTopBtn = document.getElementById("scroll-to-top");

  window.addEventListener("scroll", () => {
    if (window.pageYOffset > 300) {
      scrollToTopBtn.style.opacity = "1";
      scrollToTopBtn.style.visibility = "visible";
    } else {
      scrollToTopBtn.style.opacity = "0";
      scrollToTopBtn.style.visibility = "hidden";
    }
  });

  scrollToTopBtn.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });

  // Booking Confirmation Modal
  function showBookingConfirmation(bookingData) {
    const modal = document.getElementById("booking-confirmation-modal");
    document.getElementById("confirmation-booking-id").textContent =
      bookingData.id;
    document.getElementById("confirmation-amount").textContent =
      bookingData.amount;
    document.getElementById("confirmation-checkin").textContent =
      bookingData.checkin;
    document.getElementById("confirmation-checkout").textContent =
      bookingData.checkout;
    modal.classList.remove("hidden");
  }

  document
    .getElementById("close-confirmation")
    .addEventListener("click", () => {
      document
        .getElementById("booking-confirmation-modal")
        .classList.add("hidden");
    });

  document.getElementById("download-receipt").addEventListener("click", () => {
    notyf.success("Receipt download started!");
    // In real app, this would generate and download a PDF
  });

  document.getElementById("share-booking").addEventListener("click", () => {
    const bookingId = document.getElementById(
      "confirmation-booking-id"
    ).textContent;
    const message = `🎉 Hotel Booking Confirmed!\n\nBooking ID: ${bookingId}\nBooked via Ranthambore 360`;
    if (navigator.share) {
      navigator.share({
        title: "Hotel Booking Confirmed",
        text: message,
        url: window.location.href,
      });
    } else {
      // Fallback to copy to clipboard
      navigator.clipboard.writeText(message).then(() => {
        notyf.success("Booking details copied to clipboard!");
      });
    }
  });

  // Remove Quick Actions Toolbar code (no longer needed)

  // Enhanced Form Submission with Confirmation Modal
  const originalHandleSubmit = window.handleSubmit;
  window.handleSubmit = function (event) {
    event.preventDefault();
    let isValid = true;
    const errors = [];

    // ... (existing validation code remains the same)

    if (isValid) {
      const btn = document.getElementById("book-now-btn");
      const btnText = document.getElementById("btn-text");
      const spinner = document.getElementById("loading-spinner");
      btn.disabled = true;
      btnText.classList.add("hidden");
      spinner.classList.remove("hidden");

      setTimeout(() => {
        btn.disabled = false;
        btnText.classList.remove("hidden");
        spinner.classList.add("hidden");

        // Show confirmation modal instead of alert
        const bookingId = "HTL" + Date.now().toString().slice(-8);
        const bookingData = {
          id: bookingId,
          amount:
            document.getElementById("total-price").textContent.split(": ")[1] ||
            "₹0",
          checkin: document.getElementById("check-in").value,
          checkout: document.getElementById("check-out").value,
        };

        showBookingConfirmation(bookingData);
        notyf.success("Booking confirmed successfully!");

        // Reset form
        document.getElementById("booking-form").reset();
        document.getElementById("guest-details").innerHTML = "";
        document.getElementById("total-price").textContent = "Total Price: ₹0";
        updateProgress();
      }, 2000);
    }
  };

  // Professional Touch: Auto-focus first field
  setTimeout(() => {
    const firstInput = document.querySelector(
      '#booking-form input[type="date"]'
    );
    if (firstInput) {
      firstInput.focus();
    }
  }, 1500);

  // Initialize with success message
  notyf.success("Professional hotel booking system loaded! 🏨");
});
// </script>

// <!-- PWA Manifest -->
// <script>
// Register service worker for PWA
if ("serviceWorker" in navigator) {
  navigator.serviceWorker
    .register("/sw.js")
    .then((registration) => console.log("SW registered:", registration))
    .catch((error) => console.log("SW registration failed:", error));
}
