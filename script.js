document.addEventListener("DOMContentLoaded", function () {
  // Get DOM elements
  const toggleBtn = document.getElementById("toggleBtn");
  const navMenu = document.getElementById("navMenu");
  const hamburgerIcon = document.getElementById("hamburgerIcon");
  const closeIcon = document.getElementById("closeIcon");

  // Check if elements exist before adding event listener
  if (toggleBtn && navMenu && hamburgerIcon && closeIcon) {
    toggleBtn.addEventListener("click", () => {
      navMenu.classList.toggle("active");
      hamburgerIcon.classList.toggle("hidden");
      closeIcon.classList.toggle("hidden");
    });
  } else {
    console.error("One or more elements not found in the DOM");
  }

  // Close menu when clicking on a link
  const navLinks = document.querySelectorAll(".nav-link");
  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      navMenu.classList.remove("active");
      hamburgerIcon.classList.remove("hidden");
      closeIcon.classList.add("hidden");
    });
  });
});

// WhatsApp number
const whatsappNumber = "919211313899"; // Format: country code + number without spaces or special characters

function showPopup(title, duration, description, requirements, message) {
  // Set popup content
  document.getElementById("popup-title").textContent = title;
  document.getElementById(
    "popup-duration"
  ).textContent = `Duration: ${duration}`;
  document.getElementById("popup-description").textContent = description;

  // Process requirements (split by newline and create list items)
  const requirementsList = document.getElementById("requirements-list");
  requirementsList.innerHTML = "";
  const reqItems = requirements.split("\n");

  reqItems.forEach((item) => {
    if (item.trim() !== "") {
      const li = document.createElement("li");
      li.textContent = item;
      requirementsList.appendChild(li);
    }
  });

  // Set up WhatsApp link with pre-filled message
  const encodedMessage = encodeURIComponent(message);
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
  document.getElementById("whatsapp-link").href = whatsappLink;

  // Show popup
  document.getElementById("popup").classList.add("active");
  document.body.style.overflow = "hidden"; // Prevent scrolling
}

function hidePopup() {
  document.getElementById("popup").classList.remove("active");
  document.body.style.overflow = ""; // Re-enable scrolling
}

// Close popup when clicking outside content
document.getElementById("popup").addEventListener("click", function (e) {
  if (e.target === this) {
    hidePopup();
  }
});

// Close popup with Escape key
document.addEventListener("keydown", function (e) {
  if (e.key === "Escape") {
    hidePopup();
  }
});

// Country popup functions
function showCountryPopup(country) {
  document.getElementById(country + "-popup").classList.add("active");
  document.body.style.overflow = "hidden";
}

function hideCountryPopup() {
  document.querySelectorAll(".country-popup-overlay").forEach((popup) => {
    popup.classList.remove("active");
  });
  document.body.style.overflow = "auto";
}

// Close when clicking outside content box
document.querySelectorAll(".country-popup-overlay").forEach((popup) => {
  popup.addEventListener("click", function (e) {
    if (e.target === this) {
      hideCountryPopup();
    }
  });
});

// Previous JavaScript remains the same

// Duplicate university logos for seamless scrolling
document.addEventListener("DOMContentLoaded", function () {
  const scroller = document.querySelector(".university-scroller");
  const logos = scroller.innerHTML;
  scroller.innerHTML = logos + logos; // Duplicate content

  // Add slight random delay to hover effects for depth
  document.querySelectorAll(".university-logo").forEach((logo, index) => {
    logo.style.transitionDelay = `${index * 0.03}s`;
  });
});

// Duplicate university logos for seamless scrolling
document.addEventListener("DOMContentLoaded", function () {
  const scroller = document.querySelector(".university-scroller");
  const logos = scroller.innerHTML;
  scroller.innerHTML = logos + logos; // Duplicate content

  // Add slight random delay to hover effects for depth
  document.querySelectorAll(".university-logo").forEach((logo, index) => {
    logo.style.transitionDelay = `${index * 0.03}s`;
  });
});

// Story content data
const stories = {
  anjali: {
    flag: "🇨🇭",
    name: "Sunita R.",
    university: "Geneva School of Diplomacy, Switzerland",
    quote:
      "I always wanted to study international relations in Europe but didn't know where to start. Globetrek helped me discover a niche program in Switzerland that perfectly matched my interests. They supported me from application to visa to accommodation. Today, I'm studying at one of the most diplomatic hubs in the world!",
  },
  karthik: {
    flag: "🇬🇧",
    name: "Dhruv Chauhan.",
    university: "University of Portsmouth, UK",
    quote:
      "Coming from a technical background, I wanted a fast-track top-up program in the UK. Globetrek guided me to the perfect fit at Portsmouth London campus. I had an offer within 10 days, and my visa was approved in under 3 weeks. Their team made the process simple and stress-free.",
  },
  shivani: {
    flag: "🇨🇦",
    name: "Shivani T.",
    university: "Seneca College, Canada",
    quote:
      "From course selection to SOPs and GIC funding guidance, Globetrek was there for me every step of the way. What I loved most was their honesty, no false promises, just clear communication. I'm now pursuing a business diploma in Toronto and couldn't be happier.",
  },
  aditya: {
    flag: "🇦🇺",
    name: "Tanishq Jayank.",
    university: "Deakin University, Australia",
    quote:
      "I had multiple refusals before approaching Globetrek. They helped rebuild my profile and guided me into a course that matched my goals and visa credibility. I not only got accepted but also received a partial scholarship!",
  },
  fatima: {
    flag: "🇺🇸",
    name: "Fatima S.",
    university: "Arizona State University, USA",
    quote:
      "What impressed me most was Globetrek's attention to detail. They helped me craft a strong SOP, assisted with financial planning, and made sure my visa application was bulletproof. I'm now living my dream in the U.S.",
  },
};

function showStory(student) {
  const story = stories[student];
  const content = `
    <div class="story-flag">${story.flag}</div>
    <h3>${story.name}</h3>
    <h4>${story.university}</h4>
    <p class="testimonial">"${story.quote}"</p>
  `;
  document.getElementById("story-content").innerHTML = content;
  document.getElementById("story-display").style.display = "block";
}

function hideStory() {
  document.getElementById("story-display").style.display = "none";
}

// Show WhatsApp form
function showWhatsAppForm() {
  document.getElementById("contact-options").style.display = "none";
  document.getElementById("whatsapp-form").style.display = "block";
}

// Hide WhatsApp form
function hideWhatsAppForm() {
  document.getElementById("whatsapp-form").style.display = "none";
  document.getElementById("contact-options").style.display = "block";
}

// Show call option
function showCallOption() {
  document.getElementById("contact-options").style.display = "none";
  document.getElementById("call-confirmation").style.display = "block";
}

// Show WhatsApp instead of call
function showWhatsAppInstead() {
  document.getElementById("call-confirmation").style.display = "none";
  showWhatsAppForm();
}

// Send data via WhatsApp
function sendViaWhatsApp(event) {
  event.preventDefault();

  const name = document.getElementById("wa-name").value;
  const phone = document.getElementById("wa-phone").value;
  const interest = document.getElementById("wa-interest").value;

  if (!name || !phone || !interest) {
    alert("Please fill all required fields");
    return;
  }

  // Format WhatsApp message
  const message = `Hello Globetrek!%0A%0AI'm interested in your services.%0A%0A*Name:* ${name}%0A*Phone:* ${phone}%0A*Interest:* ${interest}%0A%0APlease contact me.`;

  // Open WhatsApp with pre-filled message
  window.open(`https://wa.me/919211313899?text=${message}`, "_blank");

  // Reset form
  document.getElementById("student-form").reset();
  hideWhatsAppForm();
}

// Function to reset counter to 0
function resetCounter(id) {
  const element = document.getElementById(id);
  element.textContent = "0" + (id === "success-rate" ? "%" : "+");
}

// Function to animate counting
function animateCounter(id, target, duration = 2000) {
  const element = document.getElementById(id);
  let start = parseInt(element.textContent) || 0;
  if (id === "success-rate") {
    start = parseFloat(element.textContent) || 0;
  }
  const increment = (target - start) / (duration / 16);
  let current = start;

  // Clear any existing animation
  if (element.timer) clearInterval(element.timer);

  element.timer = setInterval(() => {
    current += increment;
    if (
      (increment > 0 && current >= target) ||
      (increment < 0 && current <= target)
    ) {
      clearInterval(element.timer);
      current = target;
    }

    if (id === "success-rate") {
      element.textContent = current.toFixed(current < target ? 1 : 0) + "%";
    } else {
      element.textContent = Math.floor(current) + "+";
    }
  }, 16);
}

// Initialize Intersection Observer
function initContinuousCounters() {
  const counters = [
    { id: "students-placed", target: 500 },
    { id: "universities", target: 350 },
    { id: "countries", target: 20 },
    { id: "success-rate", target: 98 },
  ];

  const options = {
    root: null,
    rootMargin: "0px",
    threshold: 0.5,
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      const id = entry.target.id;
      const counter = counters.find((c) => c.id === id);

      if (entry.isIntersecting) {
        animateCounter(id, counter.target);
      } else {
        // Reset when out of view (optional)
        // resetCounter(id);
      }
    });
  }, options);

  // Observe all counter elements
  document.querySelectorAll(".stat-number").forEach((el) => {
    observer.observe(el);
  });
}

// Initialize when DOM is loaded
document.addEventListener("DOMContentLoaded", initContinuousCounters);

function animateIcon(element) {
  // Add pop animation
  element.style.transform = "scale(0.85)";

  // Reset after animation
  setTimeout(function () {
    element.style.transform = "scale(1)";
  }, 200);

  // Allow link to open after animation
  setTimeout(function () {
    window.open(element.href, element.target || "_self");
  }, 300);
}

// Mobile menu toggle
document.getElementById("mobileMenuBtn").addEventListener("click", function () {
  document.getElementById("navMenu").classList.toggle("active");
});

// Dropdown toggle for mobile
document.querySelectorAll(".dropdown-toggle").forEach((toggle) => {
  toggle.addEventListener("click", function () {
    const dropdown = this.parentElement;
    dropdown.classList.toggle("active");
  });
});

// Course popup functions
function showPopup(
  title,
  duration,
  description,
  requirements,
  whatsappMessage
) {
  document.getElementById("popup-title").textContent = title;
  document.getElementById(
    "popup-duration"
  ).textContent = `Duration: ${duration}`;
  document.getElementById("popup-description").textContent = description;

  // Clear previous requirements
  const requirementsList = document.getElementById("requirements-list");
  requirementsList.innerHTML = "";

  // Add new requirements
  const requirementsArray = requirements.split("\n");
  requirementsArray.forEach((req) => {
    if (req.trim()) {
      const li = document.createElement("li");
      li.textContent = req;
      requirementsList.appendChild(li);
    }
  });

  // Set WhatsApp link with custom message
  const encodedMessage = encodeURIComponent(whatsappMessage);
  document.getElementById(
    "whatsapp-link"
  ).href = `https://wa.me/919311331899?text=${encodedMessage}`;

  // Show popup
  document.getElementById("popup").classList.add("active");
  document.body.style.overflow = "hidden";
}

function hidePopup() {
  document.getElementById("popup").classList.remove("active");
  document.body.style.overflow = "auto";
}

// Close popup when clicking outside content
document.getElementById("popup").addEventListener("click", function (e) {
  if (e.target === this) {
    hidePopup();
  }
});

// Country content functions
function showCountryContent(country) {
  document.getElementById(country + "-content").classList.add("active");
  document.body.style.overflow = "hidden";
}

function hideCountryContent() {
  document.querySelectorAll(".country-content").forEach((content) => {
    content.classList.remove("active");
  });
  document.body.style.overflow = "auto";
}

// Close when clicking outside content box
document.querySelectorAll(".country-content").forEach((content) => {
  content.addEventListener("click", function (e) {
    if (e.target === this) {
      hideCountryContent();
    }
  });
});

// Add click events to country items
document.querySelectorAll(".country-item").forEach((item) => {
  item.addEventListener("click", function () {
    const countryClass = Array.from(this.classList).find(
      (cls) =>
        cls !== "country-item" &&
        !cls.startsWith("country-") &&
        cls !== "uk" &&
        cls !== "canada" &&
        cls !== "swiss" &&
        cls !== "australia" &&
        cls !== "usa" &&
        cls !== "germany" &&
        cls !== "france" &&
        cls !== "netherlands"
    );
    if (countryClass) {
      showCountryContent(countryClass);
    }
  });
});

function showPopup(
  title,
  duration,
  description,
  requirements,
  whatsappMessage
) {
  document.getElementById("popup-title").textContent = title;
  document.getElementById(
    "popup-duration"
  ).textContent = `Duration: ${duration}`;
  document.getElementById("popup-description").textContent = description;

  // Clear previous requirements
  const requirementsList = document.getElementById("requirements-list");
  requirementsList.innerHTML = "";

  // Add new requirements
  const requirementsArray = requirements.split("\n");
  requirementsArray.forEach((req) => {
    if (req.trim()) {
      const li = document.createElement("li");
      li.textContent = req;
      requirementsList.appendChild(li);
    }
  });

  // Set WhatsApp link with custom message
  const encodedMessage = encodeURIComponent(whatsappMessage);
  // document.getElementById(
  //   "whatsapp-link"
  // ).href = `https://?text=${encodedMessage}`;

  // Show popup
  document.getElementById("popup").classList.add("active");
  document.body.style.overflow = "hidden";
}

function hidePopup() {
  document.getElementById("popup").classList.remove("active");
  document.body.style.overflow = "auto";
}

// Close popup when clicking outside content
document.getElementById("popup").addEventListener("click", function (e) {
  if (e.target === this) {
    hidePopup();
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const serviceBoxes = document.querySelectorAll(".service-box");

  // Add mouseenter event to each service box for quick popup
  serviceBoxes.forEach((box) => {
    box.addEventListener("mouseenter", function () {
      this.style.transform = "translateY(-10px)";
      this.style.boxShadow = "0 15px 30px rgba(0, 0, 0, 0.2)";

      // Add quick zoom effect to the popup
      const popup = this.querySelector(".service-popup");
      popup.style.transform = "translate(-50%, -50%) scale(1)";
      popup.style.opacity = "1";
      popup.style.pointerEvents = "auto";
    });

    box.addEventListener("mouseleave", function () {
      this.style.transform = "";
      this.style.boxShadow = "0 8px 20px rgba(0, 0, 0, 0.1)";

      // Remove zoom effect from the popup
      const popup = this.querySelector(".service-popup");
      popup.style.transform = "translate(-50%, -50%) scale(0)";
      popup.style.opacity = "0";
      popup.style.pointerEvents = "none";
    });
  });
});

// Country popup functions
function showCountryPopup(country) {
  document.getElementById(country + "-popup").classList.add("active");
  document.body.style.overflow = "hidden";
}

function hideCountryPopup() {
  document.querySelectorAll(".country-popup-overlay").forEach((popup) => {
    popup.classList.remove("active");
  });
  document.body.style.overflow = "auto";
}

// Close when clicking outside content box
document.querySelectorAll(".country-popup-overlay").forEach((popup) => {
  popup.addEventListener("click", function (e) {
    if (e.target === this) {
      hideCountryPopup();
    }
  });
});
