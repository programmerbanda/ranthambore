// Enhanced Hotel Data with Real Hotel Information
const hotels = [
  {
    id: "tiger-safari-resort",
    name: "Tiger Safari Resort",
    images: [
      "/Images/hotel1-1.jpg",
      "/Images/hotel1-2.jpg",
      "/Images/hotel1-3.jpg",
    ],
    location: "Ranthambhore Road, Sawai Madhopur, Rajasthan 322001",
    description:
      "A luxury wildlife resort offering premium accommodations with stunning views of Ranthambhore National Park. Experience the wilderness in comfort with world-class amenities.",
    amenities: [
      "Free Wi-Fi",
      "Swimming Pool",
      "Wildlife Safari",
      "Spa & Wellness",
      "Multi-Cuisine Restaurant",
      "Room Service",
      "Parking",
    ],
    prices: { standard: 8500, deluxe: 12000, suite: 18000 },
    roomImages: {
      standard: "/Images/standard-room-1.jpg",
      deluxe: "/Images/deluxe-room-1.jpg",
      suite: "/Images/suite-room-1.jpg",
    },
  },
  {
    id: "ranthambhore-regency",
    name: "Ranthambhore Regency",
    images: [
      "/Images/hotel2-1.jpg",
      "/Images/hotel2-2.jpg",
      "/Images/hotel2-3.jpg",
    ],
    location: "Ranthambhore National Park, Sawai Madhopur, Rajasthan 322001",
    description:
      "An elegant heritage hotel blending traditional Rajasthani architecture with modern luxury. Perfect for wildlife enthusiasts and cultural explorers.",
    amenities: [
      "Heritage Architecture",
      "Cultural Programs",
      "Wildlife Library",
      "Ayurvedic Spa",
      "Organic Garden",
      "Butler Service",
      "Conference Hall",
    ],
    prices: { standard: 9500, deluxe: 14000, suite: 22000 },
    roomImages: {
      standard: "/Images/standard-room-2.jpg",
      deluxe: "/Images/deluxe-room-2.jpg",
      suite: "/Images/suite-room-2.jpg",
    },
  },
  {
    id: "jungle-retreat",
    name: "Jungle Retreat Ranthambhore",
    images: [
      "/Images/hotel3-1.jpg",
      "/Images/hotel3-2.jpg",
      "/Images/hotel3-3.jpg",
    ],
    location:
      "Village Khilchipur, Ranthambhore, Sawai Madhopur, Rajasthan 322001",
    description:
      "A boutique eco-resort nestled in the wilderness, offering an intimate connection with nature while providing luxury accommodations and personalized service.",
    amenities: [
      "Eco-Friendly",
      "Nature Walks",
      "Bird Watching",
      "Campfire Evenings",
      "Yoga Deck",
      "Organic Meals",
      "Photography Tours",
    ],
    prices: { standard: 7500, deluxe: 11000, suite: 16500 },
    roomImages: {
      standard: "/Images/standard-room-3.jpg",
      deluxe: "/Images/deluxe-room-3.jpg",
      suite: "/Images/suite-room-3.jpg",
    },
  },
  {
    id: "royal-tiger-palace",
    name: "Royal Tiger Palace",
    images: [
      "/Images/hotel4-1.jpg",
      "/Images/hotel4-2.jpg",
      "/Images/hotel4-3.jpg",
    ],
    location: "Ranthambhore Fort Road, Sawai Madhopur, Rajasthan 322001",
    description:
      "A magnificent palace hotel offering royal luxury with panoramic views of Ranthambhore Fort. Experience the grandeur of Rajasthani hospitality.",
    amenities: [
      "Palace Architecture",
      "Fort Views",
      "Royal Dining",
      "Vintage Car Collection",
      "Horse Safari",
      "Traditional Music",
      "Luxury Spa",
    ],
    prices: { standard: 12000, deluxe: 18000, suite: 28000 },
    roomImages: {
      standard: "/Images/standard-room-4.jpg",
      deluxe: "/Images/deluxe-room-4.jpg",
      suite: "/Images/suite-room-4.jpg",
    },
  },
  // Hotels from hotel.html page
  {
    id: "grand-plaza-hotel",
    name: "Grand Plaza Hotel",
    images: [
      "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    ],
    location: "New York, USA",
    description:
      "A luxury hotel in the heart of New York with stunning city views and world-class amenities",
    amenities: [
      "Free Wi-Fi",
      "Business Center",
      "Fitness Center",
      "Spa & Wellness",
      "Fine Dining",
      "Room Service",
      "Concierge",
      "Valet Parking",
    ],
    prices: { standard: 14950, deluxe: 19900, suite: 29850 }, // Converting $199 to INR approx
    roomImages: {
      standard:
        "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      deluxe:
        "https://images.unsplash.com/photo-1618773928121-c32242e63f39?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      suite:
        "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    },
  },
  {
    id: "paradise-beach-resort",
    name: "Paradise Beach Resort",
    images: [
      "https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=800&q=80",
      "https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    ],
    location: "Maldives",
    description:
      "An eco-friendly beach resort in the Maldives with crystal clear waters and overwater villas",
    amenities: [
      "Private Beach",
      "Overwater Villas",
      "Diving Center",
      "Spa & Wellness",
      "Water Sports",
      "Eco-Friendly",
      "All-Inclusive",
      "Butler Service",
    ],
    prices: { standard: 26215, deluxe: 34950, suite: 52425 }, // Converting $349 to INR approx
    roomImages: {
      standard:
        "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      deluxe:
        "https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      suite:
        "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    },
  },
  {
    id: "alpine-retreat",
    name: "Alpine Retreat",
    images: [
      "https://images.unsplash.com/photo-1564501049412-61c2a3083791?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    ],
    location: "Swiss Alps, Switzerland",
    description:
      "A luxury mountain retreat in the Swiss Alps with world-class spa facilities and breathtaking views",
    amenities: [
      "Mountain Views",
      "Luxury Spa",
      "Skiing",
      "Hiking Trails",
      "Gourmet Restaurant",
      "Wellness Center",
      "Heated Pool",
      "Concierge",
    ],
    prices: { standard: 20925, deluxe: 27900, suite: 41850 }, // Converting $279 to INR approx
    roomImages: {
      standard:
        "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      deluxe:
        "https://images.unsplash.com/photo-1618773928121-c32242e63f39?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      suite:
        "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    },
  },
];

// Skeleton Loader
document.getElementById("skeleton-loader").classList.remove("hidden");
setTimeout(() => {
  document.getElementById("skeleton-loader").classList.add("hidden");
  document.querySelector(".hotel-details").classList.remove("hidden");
  document.querySelector(".booking-form").classList.remove("hidden");
}, 1000);

// Enhanced Load Hotel Data Function - Use URL params directly, remove hardcoded fallback
function loadHotelData(hotelId) {
  // Get URL parameters inside the function
  const urlParams = new URLSearchParams(window.location.search);

  console.log("Loading hotel data for:", hotelId);
  console.log("URL Params:", urlParams.toString());
  console.log("All URL params:");
  for (const [key, value] of urlParams) {
    console.log(`${key}: ${value}`);
  }

  let hotel = null;

  // Always use URL parameters if available (prioritize dynamic data)
  if (urlParams.get("hotelName") || urlParams.get("hotelImage")) {
    console.log("Creating dynamic hotel from URL params");
    // Convert USD price to INR (approximate conversion)
    const usdPrice = parseInt(urlParams.get("hotelPrice")) || 199;
    const inrPrice = Math.round(usdPrice * 75); // Approximate conversion rate

    hotel = {
      id: hotelId || "dynamic-hotel",
      name: urlParams.get("hotelName") || "Selected Hotel",
      images: [
        urlParams.get("hotelImage") || "/Images/default-hotel-1.jpg",
        urlParams.get("hotelImage2") ||
          urlParams.get("hotelImage") ||
          "/Images/default-hotel-2.jpg",
        urlParams.get("hotelImage3") ||
          urlParams.get("hotelImage") ||
          "/Images/default-hotel-3.jpg",
      ],
      location: urlParams.get("hotelLocation") || "Prime Location",
      description:
        urlParams.get("hotelDescription") ||
        "A premium hotel offering comfortable accommodation with excellent amenities and services for a memorable stay.",
      amenities: urlParams.get("hotelAmenities")
        ? urlParams.get("hotelAmenities").split(",")
        : [
            "Free Wi-Fi",
            "Business Center",
            "Fitness Center",
            "Spa & Wellness",
            "Fine Dining",
            "Room Service",
            "Concierge",
            "Valet Parking",
          ],
      prices: {
        standard: inrPrice,
        deluxe: Math.round(inrPrice * 1.3),
        suite: Math.round(inrPrice * 2),
      },
      roomImages: {
        standard:
          "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        deluxe:
          "https://images.unsplash.com/photo-1618773928121-c32242e63f39?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        suite:
          "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      },
    };
  } else {
    // Find hotel by ID from predefined hotels array
    hotel = hotels.find((h) => h.id === hotelId);
  }

  // Use first hotel as fallback only if no URL params and no matching hotel
  if (!hotel) {
    console.log("Using fallback hotel");
    hotel = hotels[0];
  }

  console.log("Final hotel object:", hotel);

  // Update page title
  document.title = `Book ${hotel.name} - Ranthambhore 360`;

  // Update hotel information on page
  const hotelNameEl = document.getElementById("hotel-name");
  const hotelLocationEl = document.getElementById("hotel-location");
  const hotelDescriptionEl = document.getElementById("hotel-description");

  if (hotelNameEl) hotelNameEl.textContent = hotel.name;
  if (hotelLocationEl) hotelLocationEl.textContent = hotel.location;
  if (hotelDescriptionEl) hotelDescriptionEl.textContent = hotel.description;

  // Update amenities display
  const amenitiesContainer = document.querySelector(
    ".hotel-details .grid.grid-cols-2"
  );
  if (amenitiesContainer && hotel.amenities) {
    amenitiesContainer.innerHTML = "";
    hotel.amenities.forEach((amenity) => {
      const amenityDiv = document.createElement("div");
      amenityDiv.className =
        "flex items-center gap-2 bg-gray-50 rounded-lg p-2.5 hover:bg-gray-100 transition-colors duration-200";

      // Get icon for amenity
      let iconClass = "fas fa-check text-blue-600";
      if (amenity.toLowerCase().includes("wifi"))
        iconClass = "fas fa-wifi text-blue-600";
      else if (amenity.toLowerCase().includes("pool"))
        iconClass = "fas fa-swimming-pool text-cyan-600";
      else if (
        amenity.toLowerCase().includes("fitness") ||
        amenity.toLowerCase().includes("gym")
      )
        iconClass = "fas fa-dumbbell text-green-600";
      else if (amenity.toLowerCase().includes("spa"))
        iconClass = "fas fa-spa text-pink-600";
      else if (
        amenity.toLowerCase().includes("restaurant") ||
        amenity.toLowerCase().includes("dining")
      )
        iconClass = "fas fa-utensils text-purple-600";
      else if (amenity.toLowerCase().includes("concierge"))
        iconClass = "fas fa-concierge-bell text-amber-600";
      else if (amenity.toLowerCase().includes("parking"))
        iconClass = "fas fa-parking text-gray-600";
      else if (amenity.toLowerCase().includes("business"))
        iconClass = "fas fa-briefcase text-blue-600";
      else if (amenity.toLowerCase().includes("center"))
        iconClass = "fas fa-building text-indigo-600";
      else if (amenity.toLowerCase().includes("valet"))
        iconClass = "fas fa-car text-purple-600";

      amenityDiv.innerHTML = `
                            <div class="w-6 h-6 bg-gray-100 rounded-md flex items-center justify-center">
                                <i class="${iconClass} text-xs"></i>
                            </div>
                            <span class="text-xs font-medium text-gray-700">${amenity}</span>
                        `;
      amenitiesContainer.appendChild(amenityDiv);
    });
  }

  // Update pricing display - find the pricing section more specifically
  const pricingSections = document.querySelectorAll(
    ".hotel-details .bg-white.border"
  );
  let priceSection = null;
  pricingSections.forEach((section) => {
    if (
      section.textContent.includes("Room Rates") ||
      section.querySelector("h3")?.textContent?.includes("Room Rates")
    ) {
      priceSection = section;
    }
  });

  if (priceSection && hotel.prices) {
    const priceContent = priceSection.querySelector(".space-y-3");
    if (priceContent) {
      priceContent.innerHTML = `
                            <div class="flex items-center justify-between py-2 border-b border-gray-100 last:border-b-0">
                                <div>
                                    <span class="text-sm font-medium text-gray-900">Standard Room</span>
                                    <p class="text-xs text-gray-500">Queen bed, city view</p>
                                </div>
                                <div class="text-right">
                                    <div class="text-sm font-semibold text-gray-900">₹${hotel.prices.standard.toLocaleString(
                                      "en-IN"
                                    )}</div>
                                    <div class="text-xs text-gray-500">per night</div>
                                </div>
                            </div>
                            <div class="flex items-center justify-between py-2 border-b border-gray-100 last:border-b-0">
                                <div>
                                    <span class="text-sm font-medium text-gray-900">Deluxe Room</span>
                                    <p class="text-xs text-gray-500">King bed, premium view</p>
                                </div>
                                <div class="text-right">
                                    <div class="text-sm font-semibold text-gray-900">₹${hotel.prices.deluxe.toLocaleString(
                                      "en-IN"
                                    )}</div>
                                    <div class="text-xs text-gray-500">per night</div>
                                </div>
                            </div>
                            <div class="flex items-center justify-between py-2">
                                <div>
                                    <span class="text-sm font-medium text-gray-900">Suite</span>
                                    <p class="text-xs text-gray-500">Premium suite, best view</p>
                                </div>
                                <div class="text-right">
                                    <div class="text-sm font-semibold text-gray-900">₹${hotel.prices.suite.toLocaleString(
                                      "en-IN"
                                    )}</div>
                                    <div class="text-xs text-gray-500">per night</div>
                                </div>
                            </div>
                        `;
    }
  }

  // Update Carousel Images with error handling
  const carouselImages = document.querySelectorAll(".carousel-image");
  carouselImages.forEach((img, index) => {
    if (hotel.images[index]) {
      img.src = hotel.images[index];
      img.alt = `${hotel.name} Image ${index + 1}`;

      // Add error handler for missing images
      img.onerror = function () {
        this.src = `https://via.placeholder.com/600x300?text=${encodeURIComponent(
          hotel.name
        )}+Image+${index + 1}`;
      };
    }
  });

  // Update Room Type Options
  const roomTypeSelect = document.getElementById("room-type");
  if (roomTypeSelect && hotel.prices) {
    roomTypeSelect.innerHTML = `
                        <option value="standard">Standard Room (₹${hotel.prices.standard.toLocaleString(
                          "en-IN"
                        )}/night)</option>
                        <option value="deluxe">Deluxe Room (₹${hotel.prices.deluxe.toLocaleString(
                          "en-IN"
                        )}/night)</option>
                        <option value="suite">Suite (₹${hotel.prices.suite.toLocaleString(
                          "en-IN"
                        )}/night)</option>
                    `;
  }

  // Store current hotel globally for other functions
  window.currentHotel = hotel;

  // Update guest limits and room images
  const roomTypeValue = roomTypeSelect ? roomTypeSelect.value : "standard";
//   updateGuestLimit(hotel, roomTypeValue);
  updateRoomImage(hotel, roomTypeValue);
  updatePrice();

  console.log("Hotel data loaded successfully!");
}

// Get Hotel ID from URL Parameters
const urlParams = new URLSearchParams(window.location.search);
const hotelId = urlParams.get("hotelId");
const hotelName = urlParams.get("hotelName");
const hotelImage = urlParams.get("hotelImage");
const hotelLocation = urlParams.get("hotelLocation");
const hotelPrice = urlParams.get("hotelPrice");

// Always try to load hotel data - function will handle URL params vs fallback
loadHotelData(hotelId);

// Smooth Scroll to Form
window.addEventListener("load", () => {
  document
    .querySelector(".booking-form")
    .scrollIntoView({ behavior: "smooth" });
});

// Carousel with Autoplay
const images = document.querySelectorAll(".carousel-image");
const dotsContainer = document.getElementById("carousel-dots");
let currentImage = 0;
let autoplayInterval;

images.forEach((_, index) => {
  const dot = document.createElement("span");
  dot.classList.add(
    "h-2",
    "w-2",
    "bg-gray-400",
    "rounded-full",
    "mx-1",
    "cursor-pointer",
    "cursor-scale"
  );
  if (index === 0) dot.classList.add("bg-gray-800");
  dot.addEventListener("click", () => showImage(index));
  dotsContainer.appendChild(dot);
});

document.getElementById("prev-btn").addEventListener("click", () => {
  showImage(currentImage - 1 < 0 ? images.length - 1 : currentImage - 1);
});

document.getElementById("next-btn").addEventListener("click", () => {
  showImage(currentImage + 1 >= images.length ? 0 : currentImage + 1);
});

function showImage(index) {
  images[currentImage].classList.add("hidden");
  images[index].classList.remove("hidden");
  dotsContainer.children[currentImage].classList.remove("bg-gray-800");
  dotsContainer.children[index].classList.add("bg-gray-800");
  currentImage = index;
}

function startAutoplay() {
  autoplayInterval = setInterval(() => {
    showImage(currentImage + 1 >= images.length ? 0 : currentImage + 1);
  }, 5000);
}

document
  .getElementById("carousel")
  .addEventListener("mouseenter", () => clearInterval(autoplayInterval));
document
  .getElementById("carousel")
  .addEventListener("mouseleave", startAutoplay);
startAutoplay();

// Date Restrictions and Improved Calendar
const today = new Date();
const checkInInput = document.getElementById("check-in");
const checkOutInput = document.getElementById("check-out");
if (checkInInput)
  checkInInput.setAttribute("min", today.toISOString().split("T")[0]);
if (checkOutInput)
  checkOutInput.setAttribute("min", today.toISOString().split("T")[0]);

// Dummy unavailable dates
const unavailableDates = ["2025-08-10", "2025-08-15", "2025-08-20"];

function generateCalendar(inputId, calendarId, monthOffset = 0) {
  const calendar = document.getElementById(calendarId);
  calendar.innerHTML = "";
  const date = new Date();
  date.setMonth(date.getMonth() + monthOffset);
  date.setDate(1);
  const month = date.getMonth();
  const year = date.getFullYear();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const firstDay = new Date(year, month, 1).getDay();

  // Navigation
  calendar.innerHTML += `
                <div class="flex justify-between mb-2">
                    <button type="button" class="text-indigo-600 hover:text-indigo-800" onclick="generateCalendar('${inputId}', '${calendarId}', ${
    monthOffset - 1
  })">◄</button>
                    <div class="font-semibold">${date.toLocaleString(
                      "default",
                      { month: "long" }
                    )} ${year}</div>
                    <button type="button" class="text-indigo-600 hover:text-indigo-800" onclick="generateCalendar('${inputId}', '${calendarId}', ${
    monthOffset + 1
  })">►</button>
                </div>
            `;
  ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].forEach((day) => {
    calendar.innerHTML += `<div class="calendar-day font-medium">${day}</div>`;
  });
  for (let i = 0; i < firstDay; i++) {
    calendar.innerHTML += `<div class="calendar-day"></div>`;
  }
  for (let i = 1; i <= daysInMonth; i++) {
    const dateStr = `${year}-${String(month + 1).padStart(2, "0")}-${String(
      i
    ).padStart(2, "0")}`;
    const isDisabled =
      unavailableDates.includes(dateStr) || new Date(dateStr) < today;
    const checkInInputEl = document.getElementById("check-in");
    const checkOutInputEl = document.getElementById("check-out");
    const isInRange =
      checkInInputEl &&
      checkOutInputEl &&
      checkInInputEl.value &&
      checkOutInputEl.value &&
      dateStr > checkInInputEl.value &&
      dateStr < checkOutInputEl.value;
    calendar.innerHTML += `<div class="calendar-day ${
      isDisabled ? "disabled" : ""
    } ${
      (checkInInputEl && checkInInputEl.value === dateStr) ||
      (checkOutInputEl && checkOutInputEl.value === dateStr)
        ? "selected"
        : ""
    } ${isInRange ? "in-range" : ""}" data-date="${dateStr}">${i}</div>`;
  }
  document
    .querySelectorAll(
      `#${calendarId} .calendar-day:not(.disabled):not(.font-medium)`
    )
    .forEach((day) => {
      day.addEventListener("click", () => {
        document.getElementById(inputId).value = day.dataset.date;
        calendar.classList.add("hidden");
        updatePrice();
        updateProgress();
        if (inputId === "check-in") {
          const checkInInputEl = document.getElementById("check-in");
          const checkOutInputEl = document.getElementById("check-out");
          if (checkInInputEl && checkOutInputEl && checkInInputEl.value) {
            const checkInDate = new Date(checkInInputEl.value);
            const nextDay = new Date(checkInDate);
            nextDay.setDate(checkInDate.getDate() + 1);
            checkOutInputEl.setAttribute(
              "min",
              nextDay.toISOString().split("T")[0]
            );
          }
        }
      });
    });
}

if (checkInInput) {
  checkInInput.addEventListener("click", () => {
    const calendar = document.getElementById("calendar-check-in");
    if (calendar) {
      calendar.classList.toggle("hidden");
      generateCalendar("check-in", "calendar-check-in");
    }
  });
  checkInInput.addEventListener("change", updatePrice);
}

if (checkOutInput) {
  checkOutInput.addEventListener("click", () => {
    const calendar = document.getElementById("calendar-check-out");
    if (calendar) {
      calendar.classList.toggle("hidden");
      generateCalendar("check-out", "calendar-check-out");
    }
  });
  checkOutInput.addEventListener("change", updatePrice);
}

// Guest Details and Dynamic Limit - with better error handling
const guestsSelect = document.getElementById("guests");
const guestDetails = document.getElementById("guest-details");
const roomTypeSelect = document.getElementById("room-type");

// Don't return early, just log warnings and continue
if (!guestsSelect) console.warn("Guests select element not found");
if (!guestDetails) console.warn("Guest details container not found");
if (!roomTypeSelect) console.warn("Room type select not found");

if (guestsSelect && guestDetails) {
  guestsSelect.addEventListener("change", () => {
    const numGuests = parseInt(guestsSelect.value);
    guestDetails.innerHTML = "";
    for (let i = 1; i <= numGuests; i++) {
      const div = document.createElement("div");
      div.className = "mb-4 animate-form";
      div.innerHTML = `
                        <label for="guest-name-${i}" class="block text-sm font-medium text-gray-700">Guest ${i} Name:</label>
                        <input type="text" id="guest-name-${i}" name="guest-name-${i}" placeholder="Enter guest name" list="name-suggestions" class="mt-1 p-2 w-full border rounded-md focus:ring-indigo-500 focus:border-indigo-500 focus:scale-105 transition-transform duration-200" required aria-describedby="guest-name-${i}-error" autocomplete="name">
                        <p id="guest-name-${i}-error" class="text-red-500 text-sm hidden animate-pulse">Please enter a valid name</p>
                    `;
      guestDetails.appendChild(div);
      const guestInput = document.getElementById(`guest-name-${i}`);
      if (guestInput) {
        guestInput.addEventListener("input", validateRealTime);
      }
    }
    updatePrice();
    updateProgress();
  });
}

// Dynamic Guest Limit
if (roomTypeSelect) {
  roomTypeSelect.addEventListener("change", () => {
    const hotel = window.currentHotel || hotels[0];
    updateGuestLimit(hotel, roomTypeSelect.value);
    updateRoomImage(hotel, roomTypeSelect.value);
    updatePrice();
  });
}
// Room Image Update
function updateRoomImage(hotel, roomType) {
  const roomImage = document.getElementById("room-image");
  if (!roomImage || !hotel || !hotel.roomImages) {
    console.warn("Missing elements for room image update");
    return;
  }

  const imageSrc =
    hotel.roomImages[roomType] ||
    hotel.roomImages.standard ||
    "https://via.placeholder.com/150x100?text=Room+Image";
  roomImage.src = imageSrc;
  roomImage.alt = `${
    roomType.charAt(0).toUpperCase() + roomType.slice(1)
  } Room`;

  // Add error handling for room image
  roomImage.onerror = function () {
    this.src = "https://via.placeholder.com/150x100?text=Room+Image";
  };
}

// Enhanced Price Calculator with detailed breakdown
function updatePrice() {
  try {
    const hotel = window.currentHotel || hotels[0];
    const checkInInput = document.getElementById("check-in");
    const checkOutInput = document.getElementById("check-out");
    const roomTypeSelect = document.getElementById("room-type");
    const totalPriceEl = document.getElementById("total-price");
    const roomChargesEl = document.getElementById("room-charges");
    const taxesFeesEl = document.getElementById("taxes-fees");
    const discountAmountEl = document.getElementById("discount-amount");
    const savingsIndicator = document.getElementById("savings-indicator");
    const savingsAmountEl = document.getElementById("savings-amount");

    if (!checkInInput || !checkOutInput || !roomTypeSelect || !totalPriceEl) {
      console.warn("Price calculation elements not found");
      return;
    }

    const checkIn = new Date(checkInInput.value);
    const checkOut = new Date(checkOutInput.value);
    const roomType = roomTypeSelect.value;
    let roomCharges = 0;
    let taxesAndFees = 0;
    let discount = 0;
    let total = 0;

    if (
      checkIn &&
      checkOut &&
      checkOut > checkIn &&
      hotel &&
      hotel.prices &&
      hotel.prices[roomType]
    ) {
      const nights = Math.ceil((checkOut - checkIn) / (1000 * 60 * 60 * 24));
      roomCharges = hotel.prices[roomType] * nights;
      taxesAndFees = Math.round(roomCharges * 0.12); // 12% taxes

      const promoCodeInput = document.getElementById("promo-code");
      if (promoCodeInput && promoCodeInput.value) {
        if (promoCodeInput.value === "SAVE10") {
          discount = Math.round(roomCharges * 0.1);
        } else if (promoCodeInput.value === "WELCOME5") {
          discount = Math.round(roomCharges * 0.05);
        } else if (promoCodeInput.value === "FIRST15") {
          discount = Math.round(roomCharges * 0.15);
        }
      }

      total = roomCharges + taxesAndFees - discount;

      // Show/hide savings indicator
      if (discount > 0) {
        savingsIndicator.classList.remove("hidden");
        if (savingsAmountEl) {
          savingsAmountEl.textContent = `₹${discount.toLocaleString("en-IN")}`;
        }
      } else {
        savingsIndicator.classList.add("hidden");
      }
    }

    // Update all price elements
    totalPriceEl.textContent = `₹${total.toLocaleString("en-IN")}`;
    if (roomChargesEl)
      roomChargesEl.textContent = `₹${roomCharges.toLocaleString("en-IN")}`;
    if (taxesFeesEl)
      taxesFeesEl.textContent = `₹${taxesAndFees.toLocaleString("en-IN")}`;
    if (discountAmountEl)
      discountAmountEl.textContent = `-₹${discount.toLocaleString("en-IN")}`;

    updateProgress();
  } catch (error) {
    console.error("Error updating price:", error);
  }
}
// Enhanced Real-Time Validation with Visual Feedback
function validateRealTime(event) {
  const input = event.target;
  const errors = [];

  // Add visual feedback classes
  const addValidClass = () => {
    input.classList.remove("border-red-300", "bg-red-50");
    input.classList.add("border-green-300", "bg-green-50");
    setTimeout(() => {
      input.classList.remove("border-green-300", "bg-green-50");
      input.classList.add("border-gray-200");
    }, 2000);
  };

  const addInvalidClass = () => {
    input.classList.remove("border-green-300", "bg-green-50");
    input.classList.add("border-red-300", "bg-red-50", "animate-pulse");
    setTimeout(() => {
      input.classList.remove("animate-pulse");
    }, 1000);
  };

  if (input.id === "name" || input.id.startsWith("guest-name-")) {
    const errorElement = document.getElementById(`${input.id}-error`);
    if (!input.value || !/^[a-zA-Z\s]+$/.test(input.value)) {
      errorElement.classList.remove("hidden");
      addInvalidClass();
      errors.push(
        `Please enter a valid ${
          input.id.startsWith("guest-name-") ? "guest " : ""
        }name (letters only)`
      );
    } else {
      errorElement.classList.add("hidden");
      addValidClass();
    }
  } else if (input.id === "email") {
    const errorElement = document.getElementById("email-error");
    if (!input.value || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(input.value)) {
      errorElement.classList.remove("hidden");
      addInvalidClass();
      errors.push("Please enter a valid email");
    } else {
      errorElement.classList.add("hidden");
      addValidClass();
    }
  } else if (input.id === "phone") {
    const errorElement = document.getElementById("phone-error");
    if (!input.value || !/^\d{10}$/.test(input.value)) {
      errorElement.classList.remove("hidden");
      addInvalidClass();
      errors.push("Please enter a valid 10-digit phone number");
    } else {
      errorElement.classList.add("hidden");
      addValidClass();
    }
  }
  updateErrorSummary(errors);
}

document
  .querySelectorAll('#booking-form input:not([type="date"])')
  .forEach((input) => {
    input.addEventListener("input", validateRealTime);
  });

document
  .querySelectorAll("#booking-form input, #booking-form select")
  .forEach((input) => {
    input.addEventListener("input", updateProgress);
  });

// Enhanced Booking Confirmation System
function generateBookingConfirmation() {
  const hotel = window.currentHotel || hotels[0];
  const checkInInput = document.getElementById("check-in");
  const checkOutInput = document.getElementById("check-out");
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const phone = document.getElementById("phone").value;
  const roomType = document.getElementById("room-type").value;
  const guests = document.getElementById("guests").value;
  const totalPrice = document.getElementById("total-price").textContent;

  // Generate realistic booking details
  const bookingId = "HTL" + Date.now().toString().slice(-8);
  const confirmationNumber =
    "CNF" + Math.random().toString(36).substr(2, 8).toUpperCase();
  const bookingDate = new Date().toLocaleDateString("en-IN", {
    day: "numeric",
    month: "long",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });

  const checkInFormatted = new Date(checkInInput.value).toLocaleDateString(
    "en-IN",
    {
      weekday: "long",
      day: "numeric",
      month: "long",
      year: "numeric",
    }
  );

  const checkOutFormatted = new Date(checkOutInput.value).toLocaleDateString(
    "en-IN",
    {
      weekday: "long",
      day: "numeric",
      month: "long",
      year: "numeric",
    }
  );

  const nights = Math.ceil(
    (new Date(checkOutInput.value) - new Date(checkInInput.value)) /
      (1000 * 60 * 60 * 24)
  );

  return {
    bookingId,
    confirmationNumber,
    bookingDate,
    hotel: hotel.name,
    hotelAddress: hotel.location,
    guestName: name,
    email,
    phone,
    checkIn: checkInFormatted,
    checkOut: checkOutFormatted,
    nights,
    roomType: roomType.charAt(0).toUpperCase() + roomType.slice(1) + " Room",
    guests,
    totalAmount: totalPrice,
    status: "CONFIRMED",
    paymentStatus: "PAID",
  };
}

function showBookingSuccessModal(bookingData) {
  // Create and show professional booking confirmation modal
  const modalHTML = `
                    <div id="booking-success-modal" class="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
                        <div class="bg-white rounded-3xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto animate__animated animate__bounceIn">
                            <!-- Header Section -->
                            <div class="bg-gradient-to-r from-green-500 to-emerald-600 text-white p-6 rounded-t-3xl text-center">
                                <div class="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4 animate-pulse">
                                    <i class="fas fa-check-circle text-4xl text-white"></i>
                                </div>
                                <h2 class="text-3xl font-bold mb-2">🎉 Booking Confirmed!</h2>
                                <p class="text-green-100 font-medium">Your reservation has been successfully processed</p>
                                <div class="mt-4 inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                                    <i class="fas fa-shield-check text-white"></i>
                                    <span class="text-sm font-semibold">100% Secure Booking</span>
                                </div>
                            </div>
                            
                            <!-- Booking Details Section -->
                            <div class="p-6 space-y-6">
                                <!-- Booking ID & Status -->
                                <div class="grid grid-cols-2 gap-4">
                                    <div class="bg-blue-50 rounded-xl p-4 text-center">
                                        <p class="text-sm text-gray-600 mb-1">Booking ID</p>
                                        <p class="text-xl font-black text-blue-600">${bookingData.bookingId}</p>
                                    </div>
                                    <div class="bg-green-50 rounded-xl p-4 text-center">
                                        <p class="text-sm text-gray-600 mb-1">Status</p>
                                        <div class="inline-flex items-center gap-2">
                                            <span class="w-3 h-3 bg-green-500 rounded-full animate-pulse"></span>
                                            <p class="text-lg font-bold text-green-600">${bookingData.status}</p>
                                        </div>
                                    </div>
                                </div>
                                
                                <!-- Hotel Information -->
                                <div class="bg-gradient-to-r from-gray-50 to-blue-50 rounded-xl p-6">
                                    <h3 class="text-lg font-bold text-gray-800 mb-3 flex items-center gap-2">
                                        <i class="fas fa-hotel text-blue-600"></i>
                                        Hotel Details
                                    </h3>
                                    <div class="space-y-2">
                                        <p class="text-xl font-bold text-gray-900">${bookingData.hotel}</p>
                                        <p class="text-gray-600 flex items-start gap-2">
                                            <i class="fas fa-map-marker-alt text-red-500 mt-1"></i>
                                            ${bookingData.hotelAddress}
                                        </p>
                                    </div>
                                </div>
                                
                                <!-- Guest Information -->
                                <div class="grid lg:grid-cols-2 gap-4">
                                    <div class="bg-purple-50 rounded-xl p-4">
                                        <h4 class="font-bold text-gray-800 mb-3 flex items-center gap-2">
                                            <i class="fas fa-user text-purple-600"></i>
                                            Guest Details
                                        </h4>
                                        <div class="space-y-2 text-sm">
                                            <p><span class="font-semibold text-gray-700">Name:</span> ${bookingData.guestName}</p>
                                            <p><span class="font-semibold text-gray-700">Email:</span> ${bookingData.email}</p>
                                            <p><span class="font-semibold text-gray-700">Phone:</span> ${bookingData.phone}</p>
                                            <p><span class="font-semibold text-gray-700">Guests:</span> ${bookingData.guests} Person(s)</p>
                                        </div>
                                    </div>
                                    
                                    <div class="bg-amber-50 rounded-xl p-4">
                                        <h4 class="font-bold text-gray-800 mb-3 flex items-center gap-2">
                                            <i class="fas fa-bed text-amber-600"></i>
                                            Room Details
                                        </h4>
                                        <div class="space-y-2 text-sm">
                                            <p><span class="font-semibold text-gray-700">Room Type:</span> ${bookingData.roomType}</p>
                                            <p><span class="font-semibold text-gray-700">Duration:</span> ${bookingData.nights} Night(s)</p>
                                            <p class="text-2xl font-black text-amber-600 mt-2">${bookingData.totalAmount}</p>
                                            <p class="text-xs text-gray-500">All taxes included</p>
                                        </div>
                                    </div>
                                </div>
                                
                                <!-- Check-in/Check-out Timeline -->
                                <div class="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-xl p-6">
                                    <h4 class="font-bold text-gray-800 mb-4 flex items-center gap-2">
                                        <i class="fas fa-calendar-check text-indigo-600"></i>
                                        Stay Timeline
                                    </h4>
                                    <div class="grid lg:grid-cols-2 gap-6">
                                        <div class="text-center">
                                            <div class="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                                                <i class="fas fa-sign-in-alt text-2xl text-green-600"></i>
                                            </div>
                                            <p class="text-sm text-gray-600 mb-1">Check-in</p>
                                            <p class="font-bold text-gray-900">${bookingData.checkIn}</p>
                                            <p class="text-xs text-gray-500 mt-1">After 2:00 PM</p>
                                        </div>
                                        <div class="text-center">
                                            <div class="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-3">
                                                <i class="fas fa-sign-out-alt text-2xl text-red-600"></i>
                                            </div>
                                            <p class="text-sm text-gray-600 mb-1">Check-out</p>
                                            <p class="font-bold text-gray-900">${bookingData.checkOut}</p>
                                            <p class="text-xs text-gray-500 mt-1">Before 12:00 PM</p>
                                        </div>
                                    </div>
                                </div>
                                
                                <!-- Payment Information -->
                                <div class="bg-gradient-to-r from-green-50 to-emerald-50 border-2 border-green-200 rounded-xl p-4">
                                    <div class="flex items-center justify-between">
                                        <div class="flex items-center gap-3">
                                            <div class="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                                                <i class="fas fa-credit-card text-green-600"></i>
                                            </div>
                                            <div>
                                                <p class="font-bold text-gray-800">Payment Status</p>
                                                <p class="text-sm text-gray-600">Transaction completed securely</p>
                                            </div>
                                        </div>
                                        <div class="text-right">
                                            <span class="inline-flex items-center gap-2 bg-green-100 text-green-800 text-sm font-bold px-3 py-1 rounded-full">
                                                <i class="fas fa-check-circle"></i>
                                                ${bookingData.paymentStatus}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                
                                <!-- Booking Date -->
                                <div class="text-center text-sm text-gray-500 bg-gray-50 rounded-lg p-3">
                                    <p>Booking made on: <span class="font-semibold text-gray-700">${bookingData.bookingDate}</span></p>
                                    <p class="mt-1">Confirmation Number: <span class="font-mono font-bold text-blue-600">${bookingData.confirmationNumber}</span></p>
                                </div>
                                
                                <!-- Action Buttons -->
                                <div class="flex flex-col gap-3 pt-4 border-t border-gray-200">
                                    <button id="download-confirmation" class="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-4 px-6 rounded-xl font-bold text-lg hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2">
                                        <i class="fas fa-download"></i>
                                        Download Confirmation PDF
                                    </button>
                                    
                                    <div class="grid grid-cols-2 gap-3">
                                        <button id="share-booking-details" class="bg-blue-500 text-white py-3 px-4 rounded-xl font-semibold hover:bg-blue-600 transition-colors flex items-center justify-center gap-2">
                                            <i class="fas fa-share-alt"></i>
                                            Share Details
                                        </button>
                                        <button id="close-booking-modal" class="bg-gray-500 text-white py-3 px-4 rounded-xl font-semibold hover:bg-gray-600 transition-colors flex items-center justify-center gap-2">
                                            <i class="fas fa-times"></i>
                                            Close
                                        </button>
                                    </div>
                                    
                                    <!-- Contact Support -->
                                    <div class="text-center mt-4 p-4 bg-blue-50 rounded-xl">
                                        <p class="text-sm text-gray-600 mb-2">Need help with your booking?</p>
                                        <div class="flex justify-center gap-4 text-sm">
                                            <a href="tel:8076438491" class="flex items-center gap-1 text-blue-600 hover:text-blue-800 font-semibold">
                                                <i class="fas fa-phone"></i>
                                                8076438491
                                            </a>
                                            <a href="mailto:ranthambore360@gmail.com" class="flex items-center gap-1 text-blue-600 hover:text-blue-800 font-semibold">
                                                <i class="fas fa-envelope"></i>
                                                Support Email
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                `;

  // Add modal to page
  document.body.insertAdjacentHTML("beforeend", modalHTML);

  // Add event listeners
  setTimeout(() => {
    document
      .getElementById("close-booking-modal")
      .addEventListener("click", () => {
        document.getElementById("booking-success-modal").remove();
      });

    document
      .getElementById("download-confirmation")
      .addEventListener("click", () => {
        // Simulate PDF download
        const link = document.createElement("a");
        link.href =
          "data:text/plain;charset=utf-8,Booking Confirmation\n" +
          "Booking ID: " +
          bookingData.bookingId +
          "\n" +
          "Hotel: " +
          bookingData.hotel +
          "\n" +
          "Guest: " +
          bookingData.guestName +
          "\n" +
          "Check-in: " +
          bookingData.checkIn +
          "\n" +
          "Check-out: " +
          bookingData.checkOut +
          "\n" +
          "Total: " +
          bookingData.totalAmount;
        link.download = `Hotel_Booking_${bookingData.bookingId}.txt`;
        link.click();

        // Show success message
        const successMsg = document.createElement("div");
        successMsg.className =
          "fixed top-4 right-4 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg z-50 animate-pulse";
        successMsg.innerHTML =
          '<i class="fas fa-download mr-2"></i>Confirmation downloaded!';
        document.body.appendChild(successMsg);
        setTimeout(() => successMsg.remove(), 3000);
      });

    document
      .getElementById("share-booking-details")
      .addEventListener("click", () => {
        const shareText =
          `🏨 Hotel Booking Confirmed!\n\n` +
          `📋 Booking ID: ${bookingData.bookingId}\n` +
          `🏩 Hotel: ${bookingData.hotel}\n` +
          `👤 Guest: ${bookingData.guestName}\n` +
          `📅 Check-in: ${bookingData.checkIn}\n` +
          `📅 Check-out: ${bookingData.checkOut}\n` +
          `💰 Total: ${bookingData.totalAmount}\n\n` +
          `✅ Status: ${bookingData.status}\n` +
          `Booked via Ranthambore 360`;

        if (navigator.share) {
          navigator.share({
            title: "Hotel Booking Confirmed",
            text: shareText,
          });
        } else {
          navigator.clipboard.writeText(shareText).then(() => {
            const successMsg = document.createElement("div");
            successMsg.className =
              "fixed top-4 right-4 bg-blue-500 text-white px-6 py-3 rounded-lg shadow-lg z-50 animate-pulse";
            successMsg.innerHTML =
              '<i class="fas fa-copy mr-2"></i>Booking details copied!';
            document.body.appendChild(successMsg);
            setTimeout(() => successMsg.remove(), 3000);
          });
        }
      });

    // Auto-close modal after 30 seconds
    setTimeout(() => {
      const modal = document.getElementById("booking-success-modal");
      if (modal) {
        modal.style.animation = "fadeOut 0.5s ease-out";
        setTimeout(() => modal.remove(), 500);
      }
    }, 30000);
  }, 100);
}

// Form Submission with Professional Confirmation
function handleSubmit(event) {
  event.preventDefault();
  let isValid = true;
  const errors = [];

  const checkInInput = document.getElementById("check-in");
  const checkOutInput = document.getElementById("check-out");
  const guestsSelect = document.getElementById("guests");
  const guestDetails = document.getElementById("guest-details");
  const today = new Date();
  const unavailableDates = ["2025-08-10", "2025-08-15", "2025-08-20"];

  // Enhanced Form Validation with Animation
  const validateField = (fieldId, value, validator, errorMsg) => {
    const errorElement = document.getElementById(`${fieldId}-error`);
    const inputElement = document.getElementById(fieldId);

    if (!validator(value)) {
      errorElement.classList.remove("hidden");
      inputElement.classList.add(
        "border-red-300",
        "bg-red-50",
        "animate-shake"
      );
      setTimeout(() => inputElement.classList.remove("animate-shake"), 500);
      errors.push(errorMsg);
      isValid = false;
    } else {
      errorElement.classList.add("hidden");
      inputElement.classList.remove("border-red-300", "bg-red-50");
      inputElement.classList.add("border-green-300", "bg-green-50");
      setTimeout(() => {
        inputElement.classList.remove("border-green-300", "bg-green-50");
      }, 1000);
    }
  };

  // Validate Name
  const name = document.getElementById("name").value;
  validateField(
    "name",
    name,
    (val) => val && /^[a-zA-Z\s]+$/.test(val),
    "Please enter a valid name (letters only)"
  );

  // Validate Email
  const email = document.getElementById("email").value;
  validateField(
    "email",
    email,
    (val) => val && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val),
    "Please enter a valid email"
  );

  // Validate Phone
  const phone = document.getElementById("phone").value;
  validateField(
    "phone",
    phone,
    (val) => val && /^\d{10}$/.test(val),
    "Please enter a valid 10-digit phone number"
  );

  // Validate Dates
  const checkIn = new Date(checkInInput.value);
  const checkOut = new Date(checkOutInput.value);
  const checkInError = document.getElementById("check-in-error");
  const checkOutError = document.getElementById("check-out-error");
  if (
    !checkInInput.value ||
    checkIn < today ||
    unavailableDates.includes(checkInInput.value)
  ) {
    checkInError.classList.remove("hidden");
    errors.push("Please select a valid check-in date");
    isValid = false;
  } else {
    checkInError.classList.add("hidden");
  }
  if (!checkOutInput.value || checkOut <= checkIn) {
    checkOutError.classList.remove("hidden");
    errors.push("Check-out must be after check-in");
    isValid = false;
  } else {
    checkOutError.classList.add("hidden");
  }

  // Validate Guest Names
  const numGuests = parseInt(guestsSelect.value);
  for (let i = 1; i <= numGuests; i++) {
    const guestName = document.getElementById(`guest-name-${i}`)?.value;
    const guestError = document.getElementById(`guest-name-${i}-error`);
    if (guestName && !/^[a-zA-Z\s]+$/.test(guestName)) {
      guestError.classList.remove("hidden");
      errors.push(`Please enter a valid name for Guest ${i}`);
      isValid = false;
    } else if (guestError) {
      guestError.classList.add("hidden");
    }
  }

  // Update Error Summary
  updateErrorSummary(errors);

  if (isValid) {
    const btn = document.getElementById("book-now-btn");
    const btnText = document.getElementById("btn-text");
    const spinner = document.getElementById("loading-spinner");
    btn.disabled = true;
    btnText.classList.add("hidden");
    spinner.classList.remove("hidden");

    // Simulate realistic booking processing time
    setTimeout(() => {
      btn.disabled = false;
      btnText.classList.remove("hidden");
      spinner.classList.add("hidden");

      // Generate and show professional booking confirmation
      const bookingData = generateBookingConfirmation();
      showBookingSuccessModal(bookingData);

      // Reset form after showing confirmation
      setTimeout(() => {
        document.getElementById("booking-form").reset();
        guestDetails.innerHTML = "";
        document.getElementById("total-price").textContent = "₹0";
        updateProgress();
      }, 1000);
    }, 1500); // 2.5 seconds processing time for realism
  }
}

function updateErrorSummary(errors) {
  const errorSummary = document.getElementById("error-summary");
  const errorList = document.getElementById("error-list");
  if (errors.length > 0) {
    errorSummary.classList.remove("hidden");
    errorList.innerHTML = errors.map((error) => `<li>${error}</li>`).join("");
  } else {
    errorSummary.classList.add("hidden");
  }
}

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

