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
    price: 2499,
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
    price: 1499,
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
    price: 999,
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
    price: 499,
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
    price: 0,
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
    price: 799,
    image: "images/event-education.jpg",
    description:
      "Teachers, students and researchers discuss new ways of learning, online education and the role of technology in the classroom."
  },
  {
    id: "e7",
    title: "Digital Marketing Bootcamp",
    category: "Business",
    date: "2 Feb 2027",
    time: "10:00 AM",
    venue: "WeWork Galaxy",
    location: "Bengaluru, Karnataka",
    price: 1999,
    image: "images/event-startup.jpg",
    description:
      "Learn SEO, social media marketing, content strategy and analytics in this intensive two-day bootcamp led by industry experts."
  },
  {
    id: "e8",
    title: "Jazz Under the Stars",
    category: "Music",
    date: "14 Feb 2027",
    time: "7:30 PM",
    venue: "Nehru Park",
    location: "New Delhi, Delhi",
    price: 899,
    image: "images/UTS.jpg",
    description:
      "An evening of smooth jazz performed by renowned artists in an open-air setting. Bring your loved ones for a romantic musical experience."
  },
  {
    id:"e9",
    title: "Photography Masterclass",
    category: "Workshops",
    date: "8 Feb 2027",
    time: "2:00 PM",
    venue: "Creative arts studio",
    location: "Jaipur, Rajasthan",
    price: 1299,
    image: "images/photographer.jpg",
    description:
      "Learn professional photography techniques including lighting, composition, and post-processing. Bring your camera and capture stunning images."
  },
  {
    id: "e10",
    title: "AI & Machine Learning Expo",
    category: "Technology",
    date: "22 Feb 2027",
    time: "9:00 AM",
    venue: "Pragati Maidan Convention Centre",
    location: "New Delhi, Delhi",
    price: 3499,
    image: "images/event-tech.jpg",
    description:
      "Explore the latest in AI and machine learning with live demos, expert panels, and networking opportunities. Connect with industry leaders and innovators."
  },
  {
    id: "e11",
    title: "Indie Music Night",
    category: "Music",
    date: "28 Feb 2027",
    time: "8:00 PM",
    venue: "Blue Frog",
    location: "Mumbai, Maharashtra",
    price: 699,
    image: "images/event-music.jpg",
    description:
      "Experience the best of independent music with performances from emerging artists. A night of acoustic sets, storytelling, and great vibes."
  },
  {
    id: "e12",
    title: "Youth Leadership Summit",
    category: "Education",
    date: "10 Mar 2027",
    time: "10:00 AM",
    venue: "Christ University",
    location: "Bengaluru, Karnataka",
    price: 0,
    image: "images/event-education.jpg",
    description:
      "Free summit for students and young professionals focused on leadership skills, career planning, and personal development. Featuring inspiring speakers and workshops."
  },
  {
    id: "e13",
    title: "Cricket Premier League Match",
    category: "Sports",
    date: "15 Mar 2027",
    time: "3:00 PM",
    venue: "Wankhede Stadium",
    location: "Mumbai, Maharashtra",
    price: 1299,
    image: "images/event-sports.jpg",
    description:
      "Watch an exciting T20 cricket match live at the iconic Wankhede Stadium. Premium seating with great views and stadium atmosphere."
  },
  {
    id: "e14",
    title: "Public Speaking Bootcamp",
    category: "Workshops",
    date: "20 Mar 2027",
    time: "10:00 AM",
    venue: "Skillbox Training Centre",
    location: "Pune, Maharashtra",
    price: 1599,
    image: "images/event-workshop.jpg",
    description:
      "Overcome stage fright and master the art of public speaking. Two-day intensive bootcamp with practical exercises, video feedback, and expert coaching."
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
    price: 2499,
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
    price: 3999,
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
    price: 1499,
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
let sortOrder = "none"; // "none", "low-to-high", "high-to-low"
let recentlyViewed = [];
let bookings = [];

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

try {
  recentlyViewed = JSON.parse(localStorage.getItem("akRecentlyViewed")) || [];
} catch (error) {
  recentlyViewed = [];
}

try {
  bookings = JSON.parse(localStorage.getItem("akBookings")) || [];
} catch (error) {
  bookings = [];
}

// ---------- Elements ----------
const eventGrid = document.getElementById("eventGrid");
const trendingGrid = document.getElementById("trendingGrid");
const recentlyViewedGrid = document.getElementById("recentlyViewedGrid");
const recentlyViewedSection = document.getElementById("recentlyViewed");
const noResults = document.getElementById("noResults");
const noResultsText = document.getElementById("noResultsText");
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

const summaryEventName = document.getElementById("summaryEventName");
const summaryTicketPrice = document.getElementById("summaryTicketPrice");
const summaryQuantity = document.getElementById("summaryQuantity");
const summaryTotal = document.getElementById("summaryTotal");

const bookingsGrid = document.getElementById("bookingsGrid");
const noBookings = document.getElementById("noBookings");

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

// ---------- Recently Viewed ----------
function saveRecentlyViewed() {
  try {
    localStorage.setItem("akRecentlyViewed", JSON.stringify(recentlyViewed));
  } catch (error) {
    // localStorage may be blocked in some browsers.
  }
}

function addToRecentlyViewed(id) {
  // Remove if already exists
  recentlyViewed = recentlyViewed.filter(function (item) {
    return item !== id;
  });

  // Add to the beginning
  recentlyViewed.unshift(id);

  // Keep only the last 3 viewed events
  if (recentlyViewed.length > 3) {
    recentlyViewed = recentlyViewed.slice(0, 3);
  }

  saveRecentlyViewed();
  renderRecentlyViewed();
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
  renderRecentlyViewed(); // Update recently viewed if favorites changed
}

// ---------- Filtering & Sorting ----------
function getFilteredEvents() {
  var filtered = events.filter(function (event) {
    // Category filter
    if (currentCategory !== "all" && event.category !== currentCategory) {
      return false;
    }

    // Saved filter
    if (showSaved && !favorites.includes(event.id)) {
      return false;
    }

    // Search by event name 
    if (searchTerm) {
      var text = (
        event.title + " " + event.category + " " + event.venue + " " + event.location
      ).toLowerCase();

      if (!text.includes(searchTerm)) {
        return false;
      }
    }

    // Location filter
    if (locationTerm) {
      var place = (event.location + " " + event.venue).toLowerCase();

      if (!place.includes(locationTerm)) {
        return false;
      }
    }

    return true;
  });

  // Task 3: Sorting by price
  if (sortOrder === "low-to-high") {
    filtered.sort(function (a, b) {
      return a.price - b.price;
    });
  } else if (sortOrder === "high-to-low") {
    filtered.sort(function (a, b) {
      return b.price - a.price;
    });
  }

  return filtered;
}

// Helper function to format price for display
function formatPrice(price) {
  if (price === 0) {
    return "Free";
  }
  return "₹" + price.toLocaleString("en-IN");
}

// ---------- Booking Summary ----------
function updateBookingSummary() {
  var event = allEvents.find(function (item) {
    return item.id === currentEventId;
  });

  if (!event) {
    return;
  }

  var ticketCount = Number(regTickets.value);

  summaryEventName.textContent = event.title;
  summaryTicketPrice.textContent = formatPrice(event.price);
  summaryQuantity.textContent = ticketCount;

  if (event.price === 0) {
    summaryTotal.textContent = "Free";
  } else {
    var total = event.price * ticketCount;
    summaryTotal.textContent = "₹" + total.toLocaleString("en-IN");
  }
}

// ---------- Bookings ----------
function saveBookings() {
  try {
    localStorage.setItem("akBookings", JSON.stringify(bookings));
  } catch (error) {
    // localStorage may be blocked in some browsers.
  }
}

function createBooking(eventId, name, email, phone, ticketCount) {
  var event = allEvents.find(function (item) {
    return item.id === eventId;
  });

  if (!event) {
    return null;
  }

  var totalAmount = event.price * ticketCount;
  var bookingDate = new Date().toLocaleDateString("en-IN", {
    day: "2-digit",
    month: "short",
    year: "numeric"
  });

  var booking = {
    id: "BK" + Date.now(),
    eventId: event.id,
    eventTitle: event.title,
    eventDate: event.date,
    eventTime: event.time,
    venue: event.venue,
    location: event.location,
    ticketPrice: event.price,
    ticketCount: ticketCount,
    totalAmount: totalAmount,
    bookingDate: bookingDate,
    customerName: name,
    customerEmail: email,
    customerPhone: phone,
    status: "confirmed"
  };

  bookings.unshift(booking);
  saveBookings();
  return booking;
}

function cancelBooking(bookingId) {
  bookings = bookings.filter(function (booking) {
    return booking.id !== bookingId;
  });

  saveBookings();
  renderBookings();
}

function renderBookings() {
  if (!bookingsGrid || !noBookings) {
    return;
  }

  if (bookings.length === 0) {
    bookingsGrid.innerHTML = "";
    noBookings.hidden = false;
    return;
  }

  noBookings.hidden = true;

  bookingsGrid.innerHTML = bookings
    .map(function (booking) {
      return (
        '<div class="booking-card">' +
          '<div class="booking-card-header">' +
            '<h3>' + booking.eventTitle + '</h3>' +
            '<span class="booking-status">CONFIRMED</span>' +
          '</div>' +
          '<div class="booking-card-body">' +
            '<div class="booking-detail">' +
              '<span class="booking-detail-label">Event Date</span>' +
              '<span class="booking-detail-value">' + booking.eventDate + ' · ' + booking.eventTime + '</span>' +
            '</div>' +
            '<div class="booking-detail">' +
              '<span class="booking-detail-label">Booking Date</span>' +
              '<span class="booking-detail-value">' + booking.bookingDate + '</span>' +
            '</div>' +
            '<div class="booking-detail">' +
              '<span class="booking-detail-label">Venue</span>' +
              '<span class="booking-detail-value">' + booking.venue + ', ' + booking.location + '</span>' +
            '</div>' +
            '<div class="booking-detail">' +
              '<span class="booking-detail-label">Tickets</span>' +
              '<span class="booking-detail-value">' + booking.ticketCount + ' × ' + formatPrice(booking.ticketPrice) + '</span>' +
            '</div>' +
            '<div class="booking-detail">' +
              '<span class="booking-detail-label">Total Amount</span>' +
              '<span class="booking-detail-value total-amount">' + formatPrice(booking.totalAmount) + '</span>' +
            '</div>' +
          '</div>' +
          '<div class="booking-card-footer">' +
            '<span class="booking-id">Booking ID: ' + booking.id + '</span>' +
            '<button class="btn-cancel" type="button" data-cancel-booking="' + booking.id + '">Cancel Booking</button>' +
          '</div>' +
        '</div>'
      );
    })
    .join("");
}

function updateFilterButtons() {
  var categoryButtons = document.querySelectorAll(".filter-btn[data-category]");

  categoryButtons.forEach(function (button) {
    button.classList.toggle("active", button.dataset.category === currentCategory);
  });

  savedBtn.classList.toggle("active", showSaved);
  savedBtn.setAttribute("aria-pressed", showSaved ? "true" : "false");
  savedBtn.textContent = "♥ Saved (" + favorites.length + ")";
}

// ---------- Update Category Counts ----------
function updateCategoryCounts() {
  var categoryCounts = {};

  // Count events in each category
  events.forEach(function (event) {
    if (categoryCounts[event.category]) {
      categoryCounts[event.category]++;
    } else {
      categoryCounts[event.category] = 1;
    }
  });

  // Update each category card
  var categoryCards = document.querySelectorAll(".category-card");
  categoryCards.forEach(function (card) {
    var category = card.dataset.category;
    var countElement = card.querySelector("p");

    if (countElement && categoryCounts[category]) {
      var count = categoryCounts[category];
      countElement.textContent = count + (count === 1 ? " Event" : " Events");
    } else if (countElement) {
      countElement.textContent = "0 Events";
    }
  });
}

// ---------- No results message ----------
function updateNoResultsMessage() {
  var messages = [];

  if (searchTerm) {
    messages.push('"' + searchInput.value.trim() + '"');
  }

  if (locationTerm) {
    messages.push('in "' + locationInput.value.trim() + '"');
  }

  if (currentCategory !== "all") {
    messages.push("in " + currentCategory);
  }

  if (showSaved) {
    messages.push("in your saved events");
  }

  if (messages.length > 0) {
    noResultsText.textContent = "No events found for " + messages.join(" ") + ". Try a different search or category.";
  } else {
    noResultsText.textContent = "No events found. Try a different search or category.";
  }
}

// ---------- Rendering ----------
function createEventCard(event) {
  var isSaved = favorites.includes(event.id);

  return (
    '<article class="event-card">' +
      '<div class="card-image">' +
        '<img src="' + event.image + '" alt="' + event.title + '" loading="lazy">' +
        '<span class="category-badge">' + event.category + '</span>' +
        '<button class="fav-btn ' + (isSaved ? "active" : "") + '" type="button" ' +
          'data-fav="' + event.id + '" aria-label="Save ' + event.title + '" aria-pressed="' + isSaved + '">♥</button>' +
      '</div>' +
      '<div class="card-body">' +
        '<h3>' + event.title + '</h3>' +
        '<p class="meta">📅 ' + event.date + ' · ' + event.time + '</p>' +
        '<p class="meta">📍 ' + event.venue + ', ' + event.location + '</p>' +
        '<div class="card-footer">' +
          '<span class="price">' + formatPrice(event.price) + '</span>' +
          '<button class="btn btn-small" type="button" data-details="' + event.id + '">View Details</button>' +
        '</div>' +
      '</div>' +
    '</article>'
  );
}

function renderEvents() {
  var filteredEvents = getFilteredEvents();

  eventGrid.innerHTML = filteredEvents.map(createEventCard).join("");

  // Task 2: display a message when no events are found
  var hasResults = filteredEvents.length > 0;
  noResults.hidden = hasResults;

  if (!hasResults) {
    updateNoResultsMessage();
  }

  updateFilterButtons();
  updateEventCount(filteredEvents.length);
}

// Task 3: Display total number of events currently shown
function updateEventCount(count) {
  var eventCountElement = document.getElementById("eventCount");
  if (eventCountElement) {
    eventCountElement.textContent = count + " event" + (count !== 1 ? "s" : "") + " found";
  }
}

function renderTrending() {
  trendingGrid.innerHTML = trending
    .map(function (event, index) {
      return (
        '<article class="trend-card">' +
          '<div class="trend-image">' +
            '<img src="' + event.image + '" alt="' + event.title + '" loading="lazy">' +
            '<span class="rank-badge">#' + (index + 1) + ' Trending</span>' +
          '</div>' +
          '<div class="trend-body">' +
            '<span class="trend-category">' + event.category + ' · ' + event.attendees + '</span>' +
            '<h3>' + event.title + '</h3>' +
            '<p class="meta">📅 ' + event.date + ' · ' + event.time + '</p>' +
            '<p class="meta">📍 ' + event.venue + ', ' + event.location + '</p>' +
            '<div class="card-footer">' +
              '<span class="price">' + formatPrice(event.price) + '</span>' +
              '<button class="btn btn-small" type="button" data-details="' + event.id + '">Details</button>' +
            '</div>' +
          '</div>' +
        '</article>'
      );
    })
    .join("");
}

function renderRecentlyViewed() {
  if (!recentlyViewedGrid || !recentlyViewedSection) {
    return;
  }

  // Get the events corresponding to recently viewed IDs
  var recentEvents = recentlyViewed
    .map(function (id) {
      return allEvents.find(function (event) {
        return event.id === id;
      });
    })
    .filter(function (event) {
      return event !== undefined;
    });

  // Show or hide the section based on whether there are recently viewed events
  if (recentEvents.length === 0) {
    recentlyViewedSection.hidden = true;
    return;
  }

  recentlyViewedSection.hidden = false;

  recentlyViewedGrid.innerHTML = recentEvents
    .map(function (event) {
      var isSaved = favorites.includes(event.id);
      return (
        '<article class="event-card">' +
          '<div class="card-image">' +
            '<img src="' + event.image + '" alt="' + event.title + '" loading="lazy">' +
            '<span class="category-badge">' + event.category + '</span>' +
            '<button class="fav-btn ' + (isSaved ? "active" : "") + '" type="button" ' +
              'data-fav="' + event.id + '" aria-label="Save ' + event.title + '" aria-pressed="' + isSaved + '">♥</button>' +
          '</div>' +
          '<div class="card-body">' +
            '<h3>' + event.title + '</h3>' +
            '<p class="meta">📅 ' + event.date + ' · ' + event.time + '</p>' +
            '<p class="meta">📍 ' + event.venue + ', ' + event.location + '</p>' +
            '<div class="card-footer">' +
              '<span class="price">' + formatPrice(event.price) + '</span>' +
              '<button class="btn btn-small" type="button" data-details="' + event.id + '">View Details</button>' +
            '</div>' +
          '</div>' +
        '</article>'
      );
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
  var event = allEvents.find(function (item) {
    return item.id === id;
  });

  if (!event) {
    return;
  }

  currentEventId = event.id;

  // Add to recently viewed
  addToRecentlyViewed(event.id);

  resetModal();

  modalImg.src = event.image;
  modalImg.alt = event.title;
  modalCategory.textContent = event.category;
  modalTitle.textContent = event.title;
  modalDesc.textContent = event.description;
  modalDate.textContent = event.date + " · " + event.time;
  modalLocation.textContent = event.venue + ", " + event.location;
  modalPrice.textContent = formatPrice(event.price);

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
  // Check if user is logged in
  if (!currentUser) {
    closeModal();
    openAuthModal("login");

    // Show a message to inform user
    setTimeout(function() {
      var loginPanel = document.getElementById("loginPanel");
      if (loginPanel && !loginPanel.hidden) {
        var messageDiv = document.createElement("div");
        messageDiv.className = "auth-info-message";
        messageDiv.textContent = "Please log in to register for events.";
        messageDiv.style.cssText = "margin-bottom: 16px; padding: 12px; border-radius: 6px; background: #fff3cd; color: #856404; font-size: 14px; text-align: center; border: 1px solid #ffeaa7;";

        var form = document.getElementById("loginForm");
        if (form && form.parentNode) {
          form.parentNode.insertBefore(messageDiv, form);
        }
      }
    }, 100);

    return;
  }

  var event = allEvents.find(function (item) {
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

  // Pre-fill form with user data
  if (currentUser.name) {
    regName.value = currentUser.name;
  }
  if (currentUser.email) {
    regEmail.value = currentUser.email;
  }

  regEventTitle.textContent = event.title;
  regEventInfo.textContent =
    event.date + " · " + event.venue + ", " + event.location + " · Entry: " + formatPrice(event.price);

  updateBookingSummary();

  modal.setAttribute("aria-labelledby", "registerTitle");
  regPhone.focus();
}

function closeRegisterPanel() {
  eventDetails.hidden = false;
  registerPanel.hidden = true;
  modal.setAttribute("aria-labelledby", "modalTitle");
}

// ---------- Registration validation ----------
function validateName(value) {
  var name = value.trim();

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
  var digits = value.replace(/[\s\-()]/g, "");

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
  var count = Number(value);

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

function showAuthSuccessMessage(message) {
  loginPanel.hidden = true;
  signupPanel.hidden = true;
  authSuccessText.textContent = message;
  authSuccess.hidden = false;
  authDone.focus();
}

// ---------- Debounce for live search ----------
var searchTimeout = null;

function handleLiveSearch() {
  clearTimeout(searchTimeout);
  searchTimeout = setTimeout(function () {
    searchTerm = searchInput.value.trim().toLowerCase();
    locationTerm = locationInput.value.trim().toLowerCase();
    renderEvents();
  }, 300);
}

// ---------- Event listeners ----------

// Task 2 — Search by name: triggers on form submit and live as user types
searchForm.addEventListener("submit", function (event) {
  event.preventDefault();

  searchTerm = searchInput.value.trim().toLowerCase();
  locationTerm = locationInput.value.trim().toLowerCase();
  showSaved = false;

  renderEvents();
  document.getElementById("events").scrollIntoView({ behavior: "smooth" });
});

// Live search on typing (debounced)
searchInput.addEventListener("input", handleLiveSearch);
locationInput.addEventListener("input", handleLiveSearch);

// Task 3 — Category-based event filtering
document.querySelectorAll(".filter-btn[data-category]").forEach(function (button) {
  button.addEventListener("click", function () {
    currentCategory = button.dataset.category;
    showSaved = false;
    renderEvents();
  });
});

// Task 3: Sort events by price
var sortSelect = document.getElementById("sortSelect");
if (sortSelect) {
  sortSelect.addEventListener("change", function () {
    sortOrder = sortSelect.value;
    renderEvents();
  });
}

// Task 3: Clear all filters button
var clearAllFiltersBtn = document.getElementById("clearAllFilters");
if (clearAllFiltersBtn) {
  clearAllFiltersBtn.addEventListener("click", function () {
    currentCategory = "all";
    searchTerm = "";
    locationTerm = "";
    showSaved = false;
    sortOrder = "none";
    searchInput.value = "";
    locationInput.value = "";
    if (sortSelect) {
      sortSelect.value = "none";
    }
    renderEvents();
  });
}

// Category cards also filter events
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
  var favButton = event.target.closest("[data-fav]");

  if (favButton) {
    toggleFavorite(favButton.dataset.fav);
    return;
  }

  var detailsButton = event.target.closest("[data-details]");

  if (detailsButton) {
    openModal(detailsButton.dataset.details);
    return;
  }

  var cancelButton = event.target.closest("[data-cancel-booking]");

  if (cancelButton) {
    var bookingId = cancelButton.dataset.cancelBooking;
    var confirmed = confirm("Are you sure you want to cancel this booking?");

    if (confirmed) {
      cancelBooking(bookingId);
    }
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

// Recalculate total when ticket count changes
regTickets.addEventListener("change", function () {
  updateBookingSummary();
});

registerForm.addEventListener("submit", function (event) {
  event.preventDefault();

  var nameError = validateName(regName.value);
  var emailError = validateEmail(regEmail.value);
  var phoneError = validatePhone(regPhone.value);
  var ticketsError = validateTickets(regTickets.value);

  setFieldError(regName, regNameError, nameError);
  setFieldError(regEmail, regEmailError, emailError);
  setFieldError(regPhone, regPhoneError, phoneError);
  setFieldError(regTickets, regTicketsError, ticketsError);

  if (nameError || emailError || phoneError || ticketsError) {
    var firstInvalid = nameError
      ? regName
      : emailError
      ? regEmail
      : phoneError
      ? regPhone
      : regTickets;

    firstInvalid.focus();
    return;
  }

  var selectedEvent = allEvents.find(function (item) {
    return item.id === currentEventId;
  });
  var ticketCount = Number(regTickets.value);
  var ticketText = ticketCount === 1 ? "1 ticket" : ticketCount + " tickets";

  // Save booking to localStorage
  createBooking(
    currentEventId,
    regName.value.trim(),
    regEmail.value.trim(),
    regPhone.value.trim(),
    ticketCount
  );

  renderBookings();

  successEvent.textContent = selectedEvent ? selectedEvent.title : "your event";
  successNote.textContent = ticketText + " · Confirmation sent to " + regEmail.value.trim();

  registerForm.hidden = true;
  registerSuccess.hidden = false;
  registerDone.focus();
});

// ---------- Newsletter ----------
newsletterForm.addEventListener("submit", function (event) {
  event.preventDefault();

  var email = emailInput.value.trim();
  var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

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
  var isOpen = navMenu.classList.toggle("open");

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

// ---------- Header scroll effect ----------
window.addEventListener("scroll", function () {
  var header = document.querySelector(".header");

  if (window.scrollY > 10) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
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

  var emailError = validateEmail(loginEmail.value);
  var passwordError = validatePassword(loginPassword.value);

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

  var email = loginEmail.value.trim().toLowerCase();
  var name = currentUser && currentUser.email === email ? currentUser.name : email.split("@")[0];

  saveUser({ name: name, email: email });
  showAuthSuccessMessage("Logged in successfully. Welcome back, " + name + "!");
});

signupForm.addEventListener("submit", function (event) {
  event.preventDefault();

  var nameError = validateName(signupName.value);
  var emailError = validateEmail(signupEmail.value);
  var passwordError = validatePassword(signupPassword.value);
  var confirmError = validateConfirmPassword(signupConfirm.value);

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

  var name = signupName.value.trim();
  var email = signupEmail.value.trim().toLowerCase();

  saveUser({ name: name, email: email });
  showAuthSuccessMessage("Account created. Welcome to AK, " + name + "!");
});

// ---------- Start ----------
updateAuthUI();
renderEvents();
renderTrending();
renderRecentlyViewed();
renderBookings();
updateCategoryCounts();
