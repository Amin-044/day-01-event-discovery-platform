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

function findEvent(id) {
  return allEvents.find(function (item) { return item.id === id; });
}

function loadStore(key, fallback) {
  try {
    return JSON.parse(localStorage.getItem(key)) || fallback;
  } catch (error) {
    return fallback;
  }
}

function saveStore(key, value) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    // localStorage may be blocked in some browsers.
  }
}

// ---------- Page state ----------
let currentCategory = "all";
let searchTerm = "";
let locationTerm = "";
let showSaved = false;
let favorites = loadStore("akFavorites", []);
let currentEventId = null;
let currentUser = loadStore("akUser", null);
let sortOrder = "none"; // "none", "low-to-high", "high-to-low"
let recentlyViewed = loadStore("akRecentlyViewed", []);
let bookings = loadStore("akBookings", []);
let bookingSearchTerm = "";
let bookingStatusFilter = "all"; // "all", "confirmed", "cancelled"

// ---------- Elements ----------
const byId = function (id) { return document.getElementById(id); };

const eventGrid = byId("eventGrid"), trendingGrid = byId("trendingGrid"),
  recentlyViewedGrid = byId("recentlyViewedGrid"), recentlyViewedSection = byId("recentlyViewed"),
  noResults = byId("noResults"), noResultsText = byId("noResultsText"),
  searchForm = byId("searchForm"), searchInput = byId("searchInput"),
  locationInput = byId("locationInput"), savedBtn = byId("savedBtn"), clearFilters = byId("clearFilters");

const modal = byId("eventModal"), modalImg = byId("modalImg"),
  modalCategory = byId("modalCategory"), modalTitle = byId("modalTitle"),
  modalDesc = byId("modalDesc"), modalDate = byId("modalDate"),
  modalLocation = byId("modalLocation"), modalPrice = byId("modalPrice"),
  modalClose = byId("modalClose"), modalRegister = byId("modalRegister");

const eventDetails = byId("eventDetails"), registerPanel = byId("registerPanel"),
  backToDetails = byId("backToDetails"), regEventTitle = byId("regEventTitle"),
  regEventInfo = byId("regEventInfo"), registerForm = byId("registerForm"),
  registerSuccess = byId("registerSuccess"), successEvent = byId("successEvent"),
  successNote = byId("successNote"), registerDone = byId("registerDone"),
  regName = byId("regName"), regEmail = byId("regEmail"),
  regPhone = byId("regPhone"), regTickets = byId("regTickets"),
  regNameError = byId("regNameError"), regEmailError = byId("regEmailError"),
  regPhoneError = byId("regPhoneError"), regTicketsError = byId("regTicketsError");

const summaryEventName = byId("summaryEventName"), summaryTicketPrice = byId("summaryTicketPrice"),
  summaryQuantity = byId("summaryQuantity"), summaryTotal = byId("summaryTotal");

const bookingsGrid = byId("bookingsGrid"), noBookings = byId("noBookings"),
  bookingsTableBody = byId("bookingsTableBody"), bookingsTableContainer = byId("bookingsTableContainer"),
  summaryTotalBookings = byId("summaryTotalBookings"), summaryTotalAmount = byId("summaryTotalAmount"),
  bookingSearchInput = byId("bookingSearchInput"), filterAllBookings = byId("filterAllBookings"),
  filterConfirmedBookings = byId("filterConfirmedBookings"), filterCancelledBookings = byId("filterCancelledBookings"),
  exportBookingsCSV = byId("exportBookingsCSV");

// Dashboard elements
const totalBookingsCount = byId("totalBookingsCount"), upcomingEventsCount = byId("upcomingEventsCount"),
  cancelledBookingsCount = byId("cancelledBookingsCount"), totalAmountSpent = byId("totalAmountSpent"),
  dashboardRecentlyViewed = byId("dashboardRecentlyViewed"), noDashboardRecentlyViewed = byId("noDashboardRecentlyViewed");

// Edit booking modal
const editBookingModal = byId("editBookingModal"), editBookingClose = byId("editBookingClose"),
  editBookingForm = byId("editBookingForm"), editBookingId = byId("editBookingId"),
  editName = byId("editName"), editEmail = byId("editEmail"),
  editPhone = byId("editPhone"), editTickets = byId("editTickets"),
  editNameError = byId("editNameError"), editEmailError = byId("editEmailError"),
  editPhoneError = byId("editPhoneError"), editTicketsError = byId("editTicketsError"),
  editBookingSubtitle = byId("editBookingSubtitle"), editSummaryTicketPrice = byId("editSummaryTicketPrice"),
  editSummaryQuantity = byId("editSummaryQuantity"), editSummaryTotal = byId("editSummaryTotal");

function fieldsFor() {
  return Array.prototype.map.call(arguments, function (input) {
    return { input: input, error: byId(input.id + "Error") };
  });
}

const editBookingFields = fieldsFor(editName, editEmail, editPhone, editTickets);
const registerFields = fieldsFor(regName, regEmail, regPhone, regTickets);

const newsletterForm = byId("newsletterForm"), emailInput = byId("emailInput"),
  newsletterMsg = byId("newsletterMsg"), menuBtn = byId("menuBtn"), navMenu = byId("navMenu"),
  loginBtn = byId("loginBtn"), signupBtn = byId("signupBtn");

const authModal = byId("authModal"), authClose = byId("authClose"),
  loginPanel = byId("loginPanel"), signupPanel = byId("signupPanel"),
  loginForm = byId("loginForm"), signupForm = byId("signupForm"),
  loginEmail = byId("loginEmail"), loginPassword = byId("loginPassword"),
  loginEmailError = byId("loginEmailError"), loginPasswordError = byId("loginPasswordError"),
  signupName = byId("signupName"), signupEmail = byId("signupEmail"),
  signupPassword = byId("signupPassword"), signupConfirm = byId("signupConfirm"),
  signupNameError = byId("signupNameError"), signupEmailError = byId("signupEmailError"),
  signupPasswordError = byId("signupPasswordError"), signupConfirmError = byId("signupConfirmError"),
  showSignup = byId("showSignup"), showLogin = byId("showLogin"),
  authSuccess = byId("authSuccess"), authSuccessText = byId("authSuccessText"), authDone = byId("authDone");

const confirmModal = byId("confirmModal"), confirmClose = byId("confirmClose"),
  confirmCancelBtn = byId("confirmCancel"), confirmOk = byId("confirmOk"),
  confirmIcon = byId("confirmIcon"), confirmTitle = byId("confirmTitle"),
  confirmMessage = byId("confirmMessage");
let confirmAction = null;

const loginFields = fieldsFor(loginEmail, loginPassword);
const signupFields = fieldsFor(signupName, signupEmail, signupPassword, signupConfirm);

const authFields = loginFields.concat(signupFields);

// ---------- Favourites / Recently Viewed ----------
function saveFavorites() { saveStore("akFavorites", favorites); }
function saveRecentlyViewed() { saveStore("akRecentlyViewed", recentlyViewed); }

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
  updateDashboard();
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
  updateDashboard();
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
  var event = findEvent(currentEventId);

  if (!event) {
    return;
  }

  var ticketCount = Number(regTickets.value);

  summaryEventName.textContent = event.title;
  summaryTicketPrice.textContent = formatPrice(event.price);
  summaryQuantity.textContent = ticketCount;
  summaryTotal.textContent = formatPrice(event.price * ticketCount);
}

// ---------- Bookings ----------
function saveBookings() { saveStore("akBookings", bookings); }

function createBooking(eventId, name, email, phone, ticketCount) {
  var event = findEvent(eventId);

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
    status: "Confirmed"
  };

  bookings.unshift(booking);
  saveBookings();
  updateDashboard();
  return booking;
}

function editBooking(bookingId, name, email, phone, ticketCount) {
  var bookingIndex = bookings.findIndex(function (booking) {
    return booking.id === bookingId;
  });

  if (bookingIndex === -1) {
    return null;
  }

  var booking = bookings[bookingIndex];
  var totalAmount = booking.ticketPrice * ticketCount;

  bookings[bookingIndex] = {
    id: booking.id,
    eventId: booking.eventId,
    eventTitle: booking.eventTitle,
    eventDate: booking.eventDate,
    eventTime: booking.eventTime,
    venue: booking.venue,
    location: booking.location,
    ticketPrice: booking.ticketPrice,
    ticketCount: ticketCount,
    totalAmount: totalAmount,
    bookingDate: booking.bookingDate,
    customerName: name,
    customerEmail: email,
    customerPhone: phone,
    status: booking.status
  };

  saveBookings();
  return bookings[bookingIndex];
}

function cancelBooking(bookingId) {
  var bookingIndex = bookings.findIndex(function (booking) {
    return booking.id === bookingId;
  });

  if (bookingIndex !== -1) {
    bookings[bookingIndex].status = "Cancelled";
    saveBookings();
    renderBookings();
    updateDashboard();
  }
}

function deleteBooking(bookingId) {
  bookings = bookings.filter(function (booking) {
    return booking.id !== bookingId;
  });

  saveBookings();
  renderBookings();
  updateDashboard();
}

function getFilteredBookings() {
  return bookings.filter(function (booking) {
    // Search filter
    if (bookingSearchTerm) {
      var eventName = booking.eventTitle.toLowerCase();
      if (!eventName.includes(bookingSearchTerm)) {
        return false;
      }
    }

    // Status filter
    if (bookingStatusFilter !== "all") {
      if (bookingStatusFilter === "confirmed" && booking.status !== "Confirmed") {
        return false;
      }
      if (bookingStatusFilter === "cancelled" && booking.status !== "Cancelled") {
        return false;
      }
    }

    return true;
  });
}

function renderBookings() {
  if (!bookingsTableBody || !noBookings || !bookingsTableContainer) {
    return;
  }

  if (bookings.length === 0) {
    bookingsTableBody.innerHTML = "";
    bookingsTableContainer.hidden = true;
    noBookings.hidden = false;
    if (summaryTotalBookings) summaryTotalBookings.textContent = "0";
    if (summaryTotalAmount) summaryTotalAmount.textContent = "₹0";
    return;
  }

  var filteredBookings = getFilteredBookings();

  // Calculate totals (from all bookings, not just filtered)
  var totalBookings = bookings.length;
  var totalAmount = bookings
    .filter(function (b) { return b.status === "Confirmed"; })
    .reduce(function (sum, b) { return sum + b.totalAmount; }, 0);

  if (summaryTotalBookings) summaryTotalBookings.textContent = totalBookings;
  if (summaryTotalAmount) summaryTotalAmount.textContent = formatPrice(totalAmount);

  // Show message if no filtered results
  if (filteredBookings.length === 0) {
    bookingsTableBody.innerHTML = "";
    bookingsTableContainer.hidden = true;
    noBookings.hidden = false;
    noBookings.querySelector("p").textContent = "No bookings match your search or filter.";
    return;
  }

  noBookings.hidden = true;
  bookingsTableContainer.hidden = false;

  bookingsTableBody.innerHTML = filteredBookings
    .map(function (booking) {
      var statusClass = booking.status.toLowerCase();
      var actionsHtml = booking.status === "Confirmed"
        ? '<div class="booking-actions">' +
            '<button class="btn-edit" type="button" data-edit-booking="' + booking.id + '">Edit</button>' +
            '<button class="btn-delete" type="button" data-cancel-booking="' + booking.id + '">Cancel</button>' +
          '</div>'
        : '<div class="booking-actions">' +
            '<button class="btn-delete" type="button" data-delete-booking="' + booking.id + '">Delete</button>' +
          '</div>';

      return (
        '<tr>' +
          '<td class="booking-id-cell">' + booking.id + '</td>' +
          '<td class="event-name-cell">' + booking.eventTitle + '</td>' +
          '<td>' + booking.eventDate + '<br><small style="color: #888;">' + booking.eventTime + '</small></td>' +
          '<td>' + booking.ticketCount + ' × ' + formatPrice(booking.ticketPrice) + '</td>' +
          '<td class="amount-cell">' + formatPrice(booking.totalAmount) + '</td>' +
          '<td><span class="status-badge ' + statusClass + '">' + booking.status + '</span></td>' +
          '<td>' + actionsHtml + '</td>' +
        '</tr>'
      );
    })
    .join("");
  refreshScrollEffects();
}

function updateBookingFilterButtons() {
  if (!filterAllBookings || !filterConfirmedBookings || !filterCancelledBookings) {
    return;
  }

  filterAllBookings.classList.toggle("active", bookingStatusFilter === "all");
  filterConfirmedBookings.classList.toggle("active", bookingStatusFilter === "confirmed");
  filterCancelledBookings.classList.toggle("active", bookingStatusFilter === "cancelled");
}

function exportBookingsToCSV() {
  var filteredBookings = getFilteredBookings();

  if (filteredBookings.length === 0) {
    alert("No bookings to export.");
    return;
  }

  // CSV header
  var csvContent = "Booking ID,Event Name,Event Date,Event Time,Venue,Location,Customer Name,Email,Phone,Tickets,Ticket Price,Total Amount,Booking Date,Status\n";

  // CSV rows
  filteredBookings.forEach(function (booking) {
    var row = [
      booking.id,
      '"' + booking.eventTitle.replace(/"/g, '""') + '"',
      booking.eventDate,
      booking.eventTime,
      '"' + booking.venue.replace(/"/g, '""') + '"',
      '"' + booking.location.replace(/"/g, '""') + '"',
      '"' + booking.customerName.replace(/"/g, '""') + '"',
      booking.customerEmail,
      booking.customerPhone,
      booking.ticketCount,
      booking.ticketPrice,
      booking.totalAmount,
      booking.bookingDate,
      booking.status
    ].join(",");

    csvContent += row + "\n";
  });

  // Create download link
  var blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
  var link = document.createElement("a");
  var url = URL.createObjectURL(blob);

  link.setAttribute("href", url);
  link.setAttribute("download", "AK_Bookings_" + new Date().toISOString().split("T")[0] + ".csv");
  link.style.visibility = "hidden";

  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
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

// ---------- Dashboard Functions ----------
function getRecentEvents() {
  return recentlyViewed
    .map(findEvent)
    .filter(function (event) { return event !== undefined; });
}

function updateDashboard() {
  if (!totalBookingsCount || !upcomingEventsCount || !cancelledBookingsCount || !totalAmountSpent) {
    return;
  }

  var confirmedBookings = bookings.filter(function (b) { return b.status === "Confirmed"; });
  var cancelledBookings = bookings.filter(function (b) { return b.status === "Cancelled"; });

  var totalAmount = confirmedBookings.reduce(function (sum, b) { return sum + b.totalAmount; }, 0);

  totalBookingsCount.textContent = bookings.length;
  upcomingEventsCount.textContent = confirmedBookings.length;
  cancelledBookingsCount.textContent = cancelledBookings.length;
  totalAmountSpent.textContent = formatPrice(totalAmount);

  renderDashboardRecentlyViewed();
}

function renderDashboardRecentlyViewed() {
  if (!dashboardRecentlyViewed || !noDashboardRecentlyViewed) {
    return;
  }

  var recentEvents = getRecentEvents();

  if (recentEvents.length === 0) {
    dashboardRecentlyViewed.innerHTML = "";
    noDashboardRecentlyViewed.hidden = false;
    return;
  }

  noDashboardRecentlyViewed.hidden = true;

  dashboardRecentlyViewed.innerHTML = recentEvents.map(createEventCard).join("");
  refreshScrollEffects();
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
    '<article class="event-card reveal">' +
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
  refreshScrollEffects();
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
        '<article class="trend-card reveal">' +
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
  refreshScrollEffects();
}

function renderRecentlyViewed() {
  if (!recentlyViewedGrid || !recentlyViewedSection) {
    return;
  }

  var recentEvents = getRecentEvents();

  // Show or hide the section based on whether there are recently viewed events
  if (recentEvents.length === 0) {
    recentlyViewedSection.hidden = true;
    return;
  }

  recentlyViewedSection.hidden = false;

  recentlyViewedGrid.innerHTML = recentEvents.map(createEventCard).join("");
  refreshScrollEffects();
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
  var event = findEvent(id);

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

function openConfirmModal(icon, title, message, okLabel, action) {
  confirmIcon.textContent = icon;
  confirmTitle.textContent = title;
  confirmMessage.textContent = message;
  confirmOk.textContent = okLabel;
  confirmAction = action;
  confirmModal.classList.add("open");
  document.body.style.overflow = "hidden";
  confirmOk.focus();
}

function closeConfirmModal() {
  confirmModal.classList.remove("open");
  document.body.style.overflow = modal.classList.contains("open") ? "hidden" : "";
  confirmAction = null;
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

  var event = findEvent(currentEventId);

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
  saveStore("akUser", user);
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
    openConfirmModal(
      "⚠️",
      "Cancel this booking?",
      "This booking will be marked as cancelled. You can delete it later.",
      "Yes, cancel it",
      function () { cancelBooking(bookingId); }
    );
    return;
  }

  var editButton = event.target.closest("[data-edit-booking]");
  if (editButton) {
    openEditBookingModal(editButton.dataset.editBooking);
  }

  var deleteButton = event.target.closest("[data-delete-booking]");
  if (deleteButton) {
    var delBookingId = deleteButton.dataset.deleteBooking;
    openConfirmModal(
      "🗑️",
      "Delete this booking?",
      "This booking will be permanently removed and cannot be recovered.",
      "Yes, delete it",
      function () { deleteBooking(delBookingId); }
    );
  }
});

confirmClose.addEventListener("click", closeConfirmModal);
confirmCancelBtn.addEventListener("click", closeConfirmModal);
confirmModal.addEventListener("click", function (event) {
  if (event.target === confirmModal) {
    closeConfirmModal();
  }
});
confirmOk.addEventListener("click", function () {
  var action = confirmAction;
  closeConfirmModal();
  if (action) action();
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

  if (confirmModal.classList.contains("open")) {
    closeConfirmModal();
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

  var selectedEvent = findEvent(currentEventId);
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

// ---------- Scroll effects (sticky decks, reveal on scroll, progress) ----------
var scrollDecks = Array.prototype.slice.call(document.querySelectorAll("[data-deck='sticky']"));
var headerEl = document.querySelector(".header");
var revealObserver = null;
var scrollTicking = false;
var lastScrollY = window.scrollY;
var lastScrollTime = performance.now();
var scrollSway = 0;
var swayDecaying = false;

function clampValue(value, min, max) {
  return Math.max(min, Math.min(max, value));
}

function sizeDecks() {
  var viewportHeight = window.innerHeight;
  var offset = headerEl ? headerEl.offsetHeight : 68;

  scrollDecks.forEach(function (deck) {
    if (deck.hidden) return;

    var height = deck.offsetHeight;
    // Short decks pin under the header. Tall decks scroll normally until
    // their bottom reaches the bottom of the screen, then they pin there.
    deck.style.top = Math.min(offset, viewportHeight - height) + "px";
  });
}

function updateScrollProgress() {
  var maxScroll = document.documentElement.scrollHeight - window.innerHeight;
  var progress = maxScroll > 0 ? clampValue(window.scrollY / maxScroll, 0, 1) : 0;
  document.documentElement.style.setProperty("--progress", progress.toFixed(3));
}

function observeReveals() {
  var items = document.querySelectorAll(".reveal:not(.in-view)");

  if (!("IntersectionObserver" in window)) {
    items.forEach(function (item) { item.classList.add("in-view"); });
    return;
  }

  if (!revealObserver) {
    revealObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("in-view");
          revealObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1, rootMargin: "0px 0px -40px 0px" });
  }

  items.forEach(function (item) { revealObserver.observe(item); });
}

function refreshScrollEffects() {
  sizeDecks();
  observeReveals();
  updateScrollProgress();
}

function decaySway() {
  scrollSway *= 0.88;
  document.documentElement.style.setProperty("--sw", scrollSway.toFixed(2));

  if (Math.abs(scrollSway) > 0.05) {
    requestAnimationFrame(decaySway);
  } else {
    swayDecaying = false;
  }
}

function onScrollFrame() {
  scrollTicking = false;

  var y = window.scrollY;
  headerEl.classList.toggle("scrolled", y > 10);

  var now = performance.now();
  var elapsed = Math.max(8, now - lastScrollTime);
  var velocity = ((y - lastScrollY) / elapsed) * 16;

  lastScrollY = y;
  lastScrollTime = now;

  scrollSway += (clampValue(velocity, -14, 14) - scrollSway) * 0.18;
  scrollSway *= 0.88;
  document.documentElement.style.setProperty("--sw", scrollSway.toFixed(2));

  if (!swayDecaying && Math.abs(scrollSway) > 0.05) {
    swayDecaying = true;
    requestAnimationFrame(decaySway);
  }

  updateScrollProgress();
}

window.addEventListener("scroll", function () {
  if (!scrollTicking) {
    scrollTicking = true;
    requestAnimationFrame(onScrollFrame);
  }
}, { passive: true });

window.addEventListener("resize", sizeDecks);
window.addEventListener("load", refreshScrollEffects);

if ("ResizeObserver" in window) {
  var deckResizeObserver = new ResizeObserver(function () { sizeDecks(); });
  scrollDecks.forEach(function (deck) { deckResizeObserver.observe(deck); });
}

if (document.fonts && document.fonts.ready) {
  document.fonts.ready.then(refreshScrollEffects);
}

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

// ---------- Edit Booking Modal Functions ----------
function openEditBookingModal(bookingId) {
  var booking = bookings.find(function (b) { return b.id === bookingId; });
  if (!booking) return;

  editBookingId.value = booking.id;
  editName.value = booking.customerName;
  editEmail.value = booking.customerEmail;
  editPhone.value = booking.customerPhone;
  editTickets.value = booking.ticketCount;
  editBookingSubtitle.textContent = "Editing booking for " + booking.eventTitle;

  // Update summary
  editSummaryTicketPrice.textContent = formatPrice(booking.ticketPrice);
  editSummaryQuantity.textContent = booking.ticketCount;
  editSummaryTotal.textContent = formatPrice(booking.totalAmount);

  editBookingModal.classList.add("open");
  document.body.style.overflow = "hidden";
}

function closeEditBookingModal() {
  editBookingModal.classList.remove("open");
  document.body.style.overflow = "";
  editBookingForm.reset();
  editBookingFields.forEach(function (field) {
    setFieldError(field.input, field.error, "");
  });
}

function updateEditBookingSummary() {
  var bookingId = editBookingId.value;
  var booking = bookings.find(function (b) { return b.id === bookingId; });
  if (!booking) return;

  var ticketCount = Number(editTickets.value);
  editSummaryQuantity.textContent = ticketCount;
  editSummaryTotal.textContent = formatPrice(booking.ticketPrice * ticketCount);
}

editBookingClose.addEventListener("click", closeEditBookingModal);
editBookingModal.addEventListener("click", function (event) {
  if (event.target === editBookingModal) {
    closeEditBookingModal();
  }
});

editTickets.addEventListener("change", updateEditBookingSummary);

editBookingForm.addEventListener("submit", function (event) {
  event.preventDefault();

  var nameError = validateName(editName.value);
  var emailError = validateEmail(editEmail.value);
  var phoneError = validatePhone(editPhone.value);
  var ticketsError = validateTickets(editTickets.value);

  setFieldError(editName, editNameError, nameError);
  setFieldError(editEmail, editEmailError, emailError);
  setFieldError(editPhone, editPhoneError, phoneError);
  setFieldError(editTickets, editTicketsError, ticketsError);

  if (nameError || emailError || phoneError || ticketsError) {
    return;
  }

  var bookingId = editBookingId.value;
  var updatedName = editName.value.trim();
  var updatedEmail = editEmail.value.trim();
  var updatedPhone = editPhone.value.trim();
  var updatedTickets = Number(editTickets.value);

  editBooking(bookingId, updatedName, updatedEmail, updatedPhone, updatedTickets);
  closeEditBookingModal();
  renderBookings();
  updateDashboard();
});

// ---------- Bookings Search & Filter ----------
var bookingSearchTimeout = null;

if (bookingSearchInput) {
  bookingSearchInput.addEventListener("input", function () {
    clearTimeout(bookingSearchTimeout);
    bookingSearchTimeout = setTimeout(function () {
      bookingSearchTerm = bookingSearchInput.value.trim().toLowerCase();
      renderBookings();
    }, 300);
  });
}

if (filterAllBookings) {
  filterAllBookings.addEventListener("click", function () {
    bookingStatusFilter = "all";
    updateBookingFilterButtons();
    renderBookings();
  });
}

if (filterConfirmedBookings) {
  filterConfirmedBookings.addEventListener("click", function () {
    bookingStatusFilter = "confirmed";
    updateBookingFilterButtons();
    renderBookings();
  });
}

if (filterCancelledBookings) {
  filterCancelledBookings.addEventListener("click", function () {
    bookingStatusFilter = "cancelled";
    updateBookingFilterButtons();
    renderBookings();
  });
}

if (exportBookingsCSV) {
  exportBookingsCSV.addEventListener("click", exportBookingsToCSV);
}

// ---------- Start ----------
updateAuthUI();
renderEvents();
renderTrending();
renderRecentlyViewed();
renderBookings();
updateDashboard();
updateCategoryCounts();
updateBookingFilterButtons();
refreshScrollEffects();
