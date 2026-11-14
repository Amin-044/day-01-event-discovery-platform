/* =========================================================
   AK - Event Discovery Website
   Event data, filters, search, favourites, modal and form
   ========================================================= */

// ---------- Event data ----------
const events = [
  {
    id: "e1",
    title: "Tech Innovators Summit",
    category: "Technology",
    date: "20 Dec 2026",
    time: "10:00 AM",
    venue: "Moscone Center",
    location: "San Francisco, CA",
    price: "$249",
    image: "images/event-tech.jpg",
    description:
      "A full-day summit with talks on artificial intelligence, web development and the future of technology. Meet founders, developers and students from across the country."
  },
  {
    id: "e2",
    title: "Neon Nights Music Festival",
    category: "Music",
    date: "28 Dec 2026",
    time: "7:00 PM",
    venue: "Skyline Amphitheatre",
    location: "Los Angeles, CA",
    price: "$89",
    image: "images/event-music.jpg",
    description:
      "An open-air night of live music, lights and food trucks. Featuring local bands, DJs and a headline performance to close the evening."
  },
  {
    id: "e3",
    title: "Startup Founders Meetup",
    category: "Business",
    date: "5 Jan 2027",
    time: "6:30 PM",
    venue: "The Grand Hall",
    location: "New York, NY",
    price: "$120",
    image: "images/event-startup.jpg",
    description:
      "A networking evening for founders, investors and students interested in startups. Short talks followed by open networking and refreshments."
  },
  {
    id: "e4",
    title: "City Half Marathon",
    category: "Sports",
    date: "12 Jan 2027",
    time: "6:00 AM",
    venue: "Riverside Park",
    location: "Chicago, IL",
    price: "$35",
    image: "images/event-sports.jpg",
    description:
      "Run 21 kilometres through the city with water stations and cheering points along the route. Finishers receive a medal and a free breakfast."
  },
  {
    id: "e5",
    title: "UI/UX Design Workshop",
    category: "Workshops",
    date: "18 Jan 2027",
    time: "11:00 AM",
    venue: "Studio 14",
    location: "Austin, TX",
    price: "Free",
    image: "images/event-workshop.jpg",
    description:
      "A hands-on workshop covering wireframes, colour and usability basics. Bring a laptop and leave with a small design project for your portfolio."
  },
  {
    id: "e6",
    title: "Future of Learning Conference",
    category: "Education",
    date: "25 Jan 2027",
    time: "9:00 AM",
    venue: "Oxford Union",
    location: "London, UK",
    price: "$75",
    image: "images/event-education.jpg",
    description:
      "Teachers, students and researchers discuss new ways of learning, online education and the role of technology in the classroom."
  }
];

const trending = [
  {
    id: "t1",
    title: "Echoes Festival 2027",
    category: "Music",
    date: "14 Feb 2027",
    time: "4:00 PM",
    venue: "Parque das Nações",
    location: "Lisbon, Portugal",
    price: "€199",
    attendees: "8.6k going",
    image: "images/event-festival.jpg",
    description:
      "Three days of music, art and food across four stages. This year's line-up includes local and international artists."
  },
  {
    id: "t2",
    title: "Web3 Horizon Summit",
    category: "Technology",
    date: "2 Mar 2027",
    time: "10:00 AM",
    venue: "World Trade Centre",
    location: "Dubai, UAE",
    price: "$320",
    attendees: "5.1k going",
    image: "images/event-summit.jpg",
    description:
      "A conference focused on blockchain, digital payments and the next generation of web applications. Talks, demos and networking sessions."
  },
  {
    id: "t3",
    title: "Creator Economy Live",
    category: "Business",
    date: "20 Mar 2027",
    time: "11:00 AM",
    venue: "Kraftwerk Berlin",
    location: "Berlin, Germany",
    price: "€140",
    attendees: "4.3k going",
    image: "images/event-creator.jpg",
    description:
      "A one-day event for content creators, freelancers and small business owners. Learn about pricing, platforms and building an audience."
  }
];

const allEvents = events.concat(trending);

// ---------- Page state ----------
let currentCategory = "all";
let searchTerm = "";
let locationTerm = "";
let showSaved = false;
let favorites = [];

try {
  favorites = JSON.parse(localStorage.getItem("akFavorites")) || [];
} catch (error) {
  favorites = [];
}

// ---------- Elements ----------
const eventGrid = document.getElementById("eventGrid");
const trendingGrid = document.getElementById("trendingGrid");
const noResults = document.getElementById("noResults");
const searchForm = document.getElementById("searchForm");
const searchInput = document.getElementById("searchInput");
const locationInput = document.getElementById("locationInput");
const savedBtn = document.getElementById("savedBtn");
const clearFilters = document.getElementById("clearFilters");

const modal = document.getElementById("eventModal");
const modalImg = document.getElementById("modalImg");
const modalCategory = document.getElementById("modalCategory");
const modalTitle = document.getElementById("modalTitle");
const modalDesc = document.getElementById("modalDesc");
const modalDate = document.getElementById("modalDate");
const modalLocation = document.getElementById("modalLocation");
const modalPrice = document.getElementById("modalPrice");
const modalClose = document.getElementById("modalClose");
const modalRegister = document.getElementById("modalRegister");

const newsletterForm = document.getElementById("newsletterForm");
const emailInput = document.getElementById("emailInput");
const newsletterMsg = document.getElementById("newsletterMsg");

const menuBtn = document.getElementById("menuBtn");
const navMenu = document.getElementById("navMenu");

// ---------- Favourites ----------
function saveFavorites() {
  try {
    localStorage.setItem("akFavorites", JSON.stringify(favorites));
  } catch (error) {
    // localStorage may be blocked in some browsers.
  }
}

function toggleFavorite(id) {
  if (favorites.includes(id)) {
    favorites = favorites.filter(function (item) {
      return item !== id;
    });
  } else {
    favorites.push(id);
  }

  saveFavorites();
  renderEvents();
}

// ---------- Filtering ----------
function getFilteredEvents() {
  return events.filter(function (event) {
    if (currentCategory !== "all" && event.category !== currentCategory) {
      return false;
    }

    if (showSaved && !favorites.includes(event.id)) {
      return false;
    }

    if (searchTerm) {
      const text = (
        event.title + " " + event.category + " " + event.venue + " " + event.location
      ).toLowerCase();

      if (!text.includes(searchTerm)) {
        return false;
      }
    }

    if (locationTerm) {
      const place = (event.location + " " + event.venue).toLowerCase();

      if (!place.includes(locationTerm)) {
        return false;
      }
    }

    return true;
  });
}

function updateFilterButtons() {
  const categoryButtons = document.querySelectorAll(".filter-btn[data-category]");

  categoryButtons.forEach(function (button) {
    button.classList.toggle("active", button.dataset.category === currentCategory);
  });

  savedBtn.classList.toggle("active", showSaved);
  savedBtn.setAttribute("aria-pressed", showSaved ? "true" : "false");
  savedBtn.textContent = "♥ Saved (" + favorites.length + ")";
}

// ---------- Rendering ----------
function createEventCard(event) {
  const isSaved = favorites.includes(event.id);

  return `
    <article class="event-card">
      <div class="card-image">
        <img src="${event.image}" alt="${event.title}" loading="lazy">
        <span class="category-badge">${event.category}</span>
        <button class="fav-btn ${isSaved ? "active" : ""}" type="button"
          data-fav="${event.id}" aria-label="Save ${event.title}" aria-pressed="${isSaved}">♥</button>
      </div>
      <div class="card-body">
        <h3>${event.title}</h3>
        <p class="meta">📅 ${event.date} · ${event.time}</p>
        <p class="meta">📍 ${event.venue}, ${event.location}</p>
        <div class="card-footer">
          <span class="price">${event.price}</span>
          <button class="btn btn-small" type="button" data-details="${event.id}">View Details</button>
        </div>
      </div>
    </article>
  `;
}

function renderEvents() {
  const filteredEvents = getFilteredEvents();

  eventGrid.innerHTML = filteredEvents.map(createEventCard).join("");
  noResults.hidden = filteredEvents.length > 0;

  updateFilterButtons();
}

function renderTrending() {
  trendingGrid.innerHTML = trending
    .map(function (event, index) {
      return `
        <article class="trend-card">
          <div class="trend-image">
            <img src="${event.image}" alt="${event.title}" loading="lazy">
            <span class="rank-badge">#${index + 1} Trending</span>
          </div>
          <div class="trend-body">
            <span class="trend-category">${event.category} · ${event.attendees}</span>
            <h3>${event.title}</h3>
            <p class="meta">📅 ${event.date} · ${event.time}</p>
            <p class="meta">📍 ${event.venue}, ${event.location}</p>
            <div class="card-footer">
              <span class="price">${event.price}</span>
              <button class="btn btn-small" type="button" data-details="${event.id}">Details</button>
            </div>
          </div>
        </article>
      `;
    })
    .join("");
}

// ---------- Modal ----------
function openModal(id) {
  const event = allEvents.find(function (item) {
    return item.id === id;
  });

  if (!event) {
    return;
  }

  modalImg.src = event.image;
  modalImg.alt = event.title;
  modalCategory.textContent = event.category;
  modalTitle.textContent = event.title;
  modalDesc.textContent = event.description;
  modalDate.textContent = event.date + " · " + event.time;
  modalLocation.textContent = event.venue + ", " + event.location;
  modalPrice.textContent = event.price;

  modal.classList.add("open");
  document.body.style.overflow = "hidden";
  modalClose.focus();
}

function closeModal() {
  modal.classList.remove("open");
  document.body.style.overflow = "";
}

// ---------- Event listeners ----------
searchForm.addEventListener("submit", function (event) {
  event.preventDefault();

  searchTerm = searchInput.value.trim().toLowerCase();
  locationTerm = locationInput.value.trim().toLowerCase();
  showSaved = false;

  renderEvents();
  document.getElementById("events").scrollIntoView({ behavior: "smooth" });
});

document.querySelectorAll(".filter-btn[data-category]").forEach(function (button) {
  button.addEventListener("click", function () {
    currentCategory = button.dataset.category;
    showSaved = false;
    renderEvents();
  });
});

document.querySelectorAll(".category-card").forEach(function (card) {
  card.addEventListener("click", function () {
    currentCategory = card.dataset.category;
    showSaved = false;
    searchTerm = "";
    locationTerm = "";
    searchInput.value = "";
    locationInput.value = "";

    renderEvents();
    document.getElementById("events").scrollIntoView({ behavior: "smooth" });
  });
});

savedBtn.addEventListener("click", function () {
  showSaved = !showSaved;
  renderEvents();
});

clearFilters.addEventListener("click", function () {
  currentCategory = "all";
  searchTerm = "";
  locationTerm = "";
  showSaved = false;
  searchInput.value = "";
  locationInput.value = "";

  renderEvents();
});

document.addEventListener("click", function (event) {
  const favButton = event.target.closest("[data-fav]");

  if (favButton) {
    toggleFavorite(favButton.dataset.fav);
    return;
  }

  const detailsButton = event.target.closest("[data-details]");

  if (detailsButton) {
    openModal(detailsButton.dataset.details);
  }
});

modalClose.addEventListener("click", closeModal);

modal.addEventListener("click", function (event) {
  if (event.target === modal) {
    closeModal();
  }
});

document.addEventListener("keydown", function (event) {
  if (event.key === "Escape" && modal.classList.contains("open")) {
    closeModal();
  }
});

modalRegister.addEventListener("click", function () {
  alert("Registration successful! This is a demo website.");
  closeModal();
});

// ---------- Newsletter ----------
newsletterForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const email = emailInput.value.trim();
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (email === "") {
    newsletterMsg.textContent = "Please enter your email address.";
    newsletterMsg.className = "form-msg error";
    return;
  }

  if (!emailPattern.test(email)) {
    newsletterMsg.textContent = "Please enter a valid email address.";
    newsletterMsg.className = "form-msg error";
    return;
  }

  newsletterMsg.textContent = "Thank you for subscribing! Check your inbox for weekly events.";
  newsletterMsg.className = "form-msg success";
  newsletterForm.reset();
});

emailInput.addEventListener("input", function () {
  newsletterMsg.textContent = "";
  newsletterMsg.className = "form-msg";
});

// ---------- Mobile menu ----------
menuBtn.addEventListener("click", function () {
  const isOpen = navMenu.classList.toggle("open");

  menuBtn.textContent = isOpen ? "✕" : "☰";
  menuBtn.setAttribute("aria-label", isOpen ? "Close menu" : "Open menu");
  menuBtn.setAttribute("aria-expanded", isOpen ? "true" : "false");
});

navMenu.querySelectorAll("a").forEach(function (link) {
  link.addEventListener("click", function () {
    navMenu.classList.remove("open");
    menuBtn.textContent = "☰";
    menuBtn.setAttribute("aria-expanded", "false");
  });
});

// ---------- Login button ----------
document.getElementById("loginBtn").addEventListener("click", function () {
  alert("Login is not available in this demo. Subscribe below for event updates!");
});

// ---------- Start ----------
renderEvents();
renderTrending();
