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
    venue: "Bengaluru International Exhibition Centre",
    location: "Bengaluru, Karnataka",
    price: "₹2,499",
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
    venue: "MMRDA Grounds",
    location: "Mumbai, Maharashtra",
    price: "₹1,499",
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
    venue: "T-Hub Auditorium",
    location: "Hyderabad, Telangana",
    price: "₹999",
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
    venue: "Marine Drive",
    location: "Mumbai, Maharashtra",
    price: "₹499",
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
    venue: "91springboard",
    location: "Pune, Maharashtra",
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
    venue: "India Habitat Centre",
    location: "New Delhi, Delhi",
    price: "₹799",
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
    venue: "Mahalaxmi Racecourse",
    location: "Mumbai, Maharashtra",
    price: "₹2,499",
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
    venue: "Hyderabad International Convention Centre",
    location: "Hyderabad, Telangana",
    price: "₹3,999",
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
    venue: "The Leela Palace",
    location: "Bengaluru, Karnataka",
    price: "₹1,499",
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
let currentEventId = null;
let currentUser = null;

try {
  favorites = JSON.parse(localStorage.getItem("akFavorites")) || [];
} catch (error) {
  favorites = [];
}

try {
  currentUser = JSON.parse(localStorage.getItem("akUser")) || null;
} catch (error) {
  currentUser = null;
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

const eventDetails = document.getElementById("eventDetails");
const registerPanel = document.getElementById("registerPanel");
const backToDetails = document.getElementById("backToDetails");
const regEventTitle = document.getElementById("regEventTitle");
const regEventInfo = document.getElementById("regEventInfo");
const registerForm = document.getElementById("registerForm");
const registerSuccess = document.getElementById("registerSuccess");
const successEvent = document.getElementById("successEvent");
const successNote = document.getElementById("successNote");
const registerDone = document.getElementById("registerDone");
const regName = document.getElementById("regName");
const regEmail = document.getElementById("regEmail");
const regPhone = document.getElementById("regPhone");
const regTickets = document.getElementById("regTickets");
const regNameError = document.getElementById("regNameError");
const regEmailError = document.getElementById("regEmailError");
const regPhoneError = document.getElementById("regPhoneError");
const regTicketsError = document.getElementById("regTicketsError");

const registerFields = [
  { input: regName, error: regNameError },
  { input: regEmail, error: regEmailError },
  { input: regPhone, error: regPhoneError },
  { input: regTickets, error: regTicketsError }
];

const newsletterForm = document.getElementById("newsletterForm");
const emailInput = document.getElementById("emailInput");
const newsletterMsg = document.getElementById("newsletterMsg");

const menuBtn = document.getElementById("menuBtn");
const navMenu = document.getElementById("navMenu");

const loginBtn = document.getElementById("loginBtn");
const signupBtn = document.getElementById("signupBtn");

const authModal = document.getElementById("authModal");
const authClose = document.getElementById("authClose");
const loginPanel = document.getElementById("loginPanel");
const signupPanel = document.getElementById("signupPanel");
const loginForm = document.getElementById("loginForm");
const signupForm = document.getElementById("signupForm");
const loginEmail = document.getElementById("loginEmail");
const loginPassword = document.getElementById("loginPassword");
const loginEmailError = document.getElementById("loginEmailError");
const loginPasswordError = document.getElementById("loginPasswordError");
const signupName = document.getElementById("signupName");
const signupEmail = document.getElementById("signupEmail");
const signupPassword = document.getElementById("signupPassword");
const signupConfirm = document.getElementById("signupConfirm");
const signupNameError = document.getElementById("signupNameError");
const signupEmailError = document.getElementById("signupEmailError");
const signupPasswordError = document.getElementById("signupPasswordError");
const signupConfirmError = document.getElementById("signupConfirmError");
const showSignup = document.getElementById("showSignup");
const showLogin = document.getElementById("showLogin");
const authSuccess = document.getElementById("authSuccess");
const authSuccessText = document.getElementById("authSuccessText");
const authDone = document.getElementById("authDone");

const loginFields = [
  { input: loginEmail, error: loginEmailError },
  { input: loginPassword, error: loginPasswordError }
];

const signupFields = [
  { input: signupName, error: signupNameError },
  { input: signupEmail, error: signupEmailError },
  { input: signupPassword, error: signupPasswordError },
  { input: signupConfirm, error: signupConfirmError }
];

const authFields = loginFields.concat(signupFields);

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
function resetModal() {
  eventDetails.hidden = false;
  registerPanel.hidden = true;
  registerSuccess.hidden = true;
  registerForm.hidden = false;
  registerForm.reset();
  modal.setAttribute("aria-labelledby", "modalTitle");

  registerFields.forEach(function (field) {
    setFieldError(field.input, field.error, "");
  });
}

function openModal(id) {
  const event = allEvents.find(function (item) {
    return item.id === id;
  });

  if (!event) {
    return;
  }

  currentEventId = event.id;
  resetModal();

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
  currentEventId = null;
  resetModal();
}

function openRegisterPanel() {
  const event = allEvents.find(function (item) {
    return item.id === currentEventId;
  });

  if (!event) {
    return;
  }

  eventDetails.hidden = true;
  registerPanel.hidden = false;
  registerSuccess.hidden = true;
  registerForm.hidden = false;
  registerForm.reset();

  regEventTitle.textContent = event.title;
  regEventInfo.textContent =
    event.date + " · " + event.venue + ", " + event.location + " · Entry: " + event.price;

  modal.setAttribute("aria-labelledby", "registerTitle");
  regName.focus();
}

function closeRegisterPanel() {
  eventDetails.hidden = false;
  registerPanel.hidden = true;
  modal.setAttribute("aria-labelledby", "modalTitle");
}

// ---------- Registration validation ----------
function validateName(value) {
  const name = value.trim();

  if (name.length < 3 || !/^[A-Za-z ]+$/.test(name)) {
    return "Enter your full name using letters only.";
  }

  return "";
}

function validateEmail(value) {
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim())) {
    return "Enter a valid email address.";
  }

  return "";
}

function validatePhone(value) {
  let digits = value.replace(/[\s\-()]/g, "");

  if (digits.indexOf("+91") === 0) {
    digits = digits.slice(3);
  }

  if (digits.indexOf("0") === 0) {
    digits = digits.slice(1);
  }

  if (!/^[6-9][0-9]{9}$/.test(digits)) {
    return "Enter a valid 10-digit mobile number starting with 6-9.";
  }

  return "";
}

function validateTickets(value) {
  const count = Number(value);

  if (!Number.isInteger(count) || count < 1 || count > 5) {
    return "Choose between 1 and 5 tickets.";
  }

  return "";
}

function setFieldError(input, errorElement, message) {
  input.classList.toggle("input-error", Boolean(message));
  input.setAttribute("aria-invalid", message ? "true" : "false");
  errorElement.textContent = message;
}

// ---------- Login / Signup ----------
function validatePassword(value) {
  if (value.length < 6) {
    return "Password must be at least 6 characters.";
  }

  return "";
}

function validateConfirmPassword(value) {
  if (value === "") {
    return "Please confirm your password.";
  }

  if (value !== signupPassword.value) {
    return "Passwords do not match.";
  }

  return "";
}

function updateAuthUI() {
  if (currentUser) {
    loginBtn.textContent = "Logout";
    loginBtn.setAttribute("aria-label", "Log out " + currentUser.name);
  } else {
    loginBtn.textContent = "Login";
    loginBtn.setAttribute("aria-label", "Log in");
  }
}

function saveUser(user) {
  currentUser = user;

  try {
    localStorage.setItem("akUser", JSON.stringify(user));
  } catch (error) {
    // localStorage may be blocked in some browsers.
  }

  updateAuthUI();
}

function clearUser() {
  currentUser = null;

  try {
    localStorage.removeItem("akUser");
  } catch (error) {
    // localStorage may be blocked in some browsers.
  }

  updateAuthUI();
}

function resetAuthModal() {
  loginForm.reset();
  signupForm.reset();

  authFields.forEach(function (field) {
    setFieldError(field.input, field.error, "");
  });
}

function showAuthPanel(mode) {
  loginPanel.hidden = mode !== "login";
  signupPanel.hidden = mode !== "signup";
  authSuccess.hidden = true;
  authModal.setAttribute("aria-labelledby", mode === "login" ? "authTitle" : "signupTitle");

  authFields.forEach(function (field) {
    setFieldError(field.input, field.error, "");
  });

  if (mode === "login") {
    loginEmail.focus();
  } else {
    signupName.focus();
  }
}

function openAuthModal(mode) {
  resetAuthModal();
  authModal.classList.add("open");
  document.body.style.overflow = "hidden";
  navMenu.classList.remove("open");
  menuBtn.textContent = "☰";
  menuBtn.setAttribute("aria-expanded", "false");
  showAuthPanel(mode);
}

function closeAuthModal() {
  authModal.classList.remove("open");
  document.body.style.overflow = modal.classList.contains("open") ? "hidden" : "";
  resetAuthModal();
}

function showAuthSuccess(message) {
  loginPanel.hidden = true;
  signupPanel.hidden = true;
  authSuccessText.textContent = message;
  authSuccess.hidden = false;
  authDone.focus();
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
  if (event.key !== "Escape") {
    return;
  }

  if (modal.classList.contains("open")) {
    closeModal();
  }

  if (authModal.classList.contains("open")) {
    closeAuthModal();
  }
});

modalRegister.addEventListener("click", openRegisterPanel);
backToDetails.addEventListener("click", closeRegisterPanel);
registerDone.addEventListener("click", closeModal);

registerFields.forEach(function (field) {
  field.input.addEventListener("input", function () {
    setFieldError(field.input, field.error, "");
  });
});

registerForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const nameError = validateName(regName.value);
  const emailError = validateEmail(regEmail.value);
  const phoneError = validatePhone(regPhone.value);
  const ticketsError = validateTickets(regTickets.value);

  setFieldError(regName, regNameError, nameError);
  setFieldError(regEmail, regEmailError, emailError);
  setFieldError(regPhone, regPhoneError, phoneError);
  setFieldError(regTickets, regTicketsError, ticketsError);

  if (nameError || emailError || phoneError || ticketsError) {
    const firstInvalid = nameError
      ? regName
      : emailError
      ? regEmail
      : phoneError
      ? regPhone
      : regTickets;

    firstInvalid.focus();
    return;
  }

  const selectedEvent = allEvents.find(function (item) {
    return item.id === currentEventId;
  });
  const ticketCount = Number(regTickets.value);
  const ticketText = ticketCount === 1 ? "1 ticket" : ticketCount + " tickets";

  successEvent.textContent = selectedEvent ? selectedEvent.title : "your event";
  successNote.textContent = ticketText + " · Confirmation sent to " + regEmail.value.trim();

  registerForm.hidden = true;
  registerSuccess.hidden = false;
  registerDone.focus();
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

// ---------- Login / Signup ----------
loginBtn.addEventListener("click", function () {
  if (currentUser) {
    clearUser();
    return;
  }

  openAuthModal("login");
});

signupBtn.addEventListener("click", function () {
  openAuthModal("signup");
});

authClose.addEventListener("click", closeAuthModal);
authDone.addEventListener("click", closeAuthModal);

authModal.addEventListener("click", function (event) {
  if (event.target === authModal) {
    closeAuthModal();
  }
});

showSignup.addEventListener("click", function () {
  showAuthPanel("signup");
});

showLogin.addEventListener("click", function () {
  showAuthPanel("login");
});

authFields.forEach(function (field) {
  field.input.addEventListener("input", function () {
    setFieldError(field.input, field.error, "");
  });
});

loginForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const emailError = validateEmail(loginEmail.value);
  const passwordError = validatePassword(loginPassword.value);

  setFieldError(loginEmail, loginEmailError, emailError);
  setFieldError(loginPassword, loginPasswordError, passwordError);

  if (emailError) {
    loginEmail.focus();
    return;
  }

  if (passwordError) {
    loginPassword.focus();
    return;
  }

  const email = loginEmail.value.trim().toLowerCase();
  const name = currentUser && currentUser.email === email ? currentUser.name : email.split("@")[0];

  saveUser({ name: name, email: email });
  showAuthSuccess("Logged in successfully. Welcome back, " + name + "!");
});

signupForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const nameError = validateName(signupName.value);
  const emailError = validateEmail(signupEmail.value);
  const passwordError = validatePassword(signupPassword.value);
  const confirmError = validateConfirmPassword(signupConfirm.value);

  setFieldError(signupName, signupNameError, nameError);
  setFieldError(signupEmail, signupEmailError, emailError);
  setFieldError(signupPassword, signupPasswordError, passwordError);
  setFieldError(signupConfirm, signupConfirmError, confirmError);

  if (nameError) {
    signupName.focus();
    return;
  }

  if (emailError) {
    signupEmail.focus();
    return;
  }

  if (passwordError) {
    signupPassword.focus();
    return;
  }

  if (confirmError) {
    signupConfirm.focus();
    return;
  }

  const name = signupName.value.trim();
  const email = signupEmail.value.trim().toLowerCase();

  saveUser({ name: name, email: email });
  showAuthSuccess("Account created. Welcome to AK, " + name + "!");
});

// ---------- Start ----------
updateAuthUI();
renderEvents();
renderTrending();
