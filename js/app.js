/* ==========================================================================
   PULSE — app.js
   Event data, rendering, search & filtering, favorites, modal, countdown,
   theme switching, form validation and scroll behaviour.
   ========================================================================== */
(function () {
  "use strict";

  /* ------------------------------------------------------------------ */
  /* Helpers                                                             */
  /* ------------------------------------------------------------------ */
  const $ = (selector, scope = document) => scope.querySelector(selector);
  const $$ = (selector, scope = document) => Array.from(scope.querySelectorAll(selector));

  const dateAt = (daysFromNow, hour = 0, minute = 0) => {
    const date = new Date();
    date.setHours(0, 0, 0, 0);
    date.setDate(date.getDate() + daysFromNow);
    date.setHours(hour, minute, 0, 0);
    return date;
  };

  const fmtMonth = new Intl.DateTimeFormat("en-US", { month: "short" });
  const fmtShort = new Intl.DateTimeFormat("en-US", { weekday: "short", month: "short", day: "numeric" });
  const fmtFull = new Intl.DateTimeFormat("en-US", { weekday: "short", month: "short", day: "numeric", year: "numeric" });
  const fmtTime = new Intl.DateTimeFormat("en-US", { hour: "numeric", minute: "2-digit" });

  const debounce = (fn, wait = 220) => {
    let timer;
    return (...args) => {
      clearTimeout(timer);
      timer = setTimeout(() => fn(...args), wait);
    };
  };

  const storage = {
    get(key, fallback) {
      try {
        const value = localStorage.getItem(key);
        return value === null ? fallback : value;
      } catch (error) {
        return fallback;
      }
    },
    set(key, value) {
      try {
        localStorage.setItem(key, value);
      } catch (error) {
        /* Storage can be disabled — the site still works without it. */
      }
    }
  };

  const escapeHTML = (value) =>
    String(value).replace(/[&<>"']/g, (character) => {
      const map = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" };
      return map[character];
    });

  /* ------------------------------------------------------------------ */
  /* Event data                                                          */
  /* Dates are relative to today so the demo always has upcoming events. */
  /* ------------------------------------------------------------------ */
  const CATEGORIES = ["Technology", "Music", "Business", "Sports", "Workshops", "Education"];

  const EVENTS = [
    {
      id: "ev-1",
      title: "Neon Frequencies",
      category: "Music",
      date: dateAt(9, 19, 0),
      venue: "Skyline Amphitheatre",
      city: "Los Angeles, CA",
      price: 89,
      currency: "$",
      image: "images/event-music.jpg",
      imageAlt: "Crowd with hands in the air under stage lights at a live music event",
      attendees: "3.2k going",
      description:
        "A late-night collision of synthwave, laser art and a 40-piece string section. Neon Frequencies returns with a brand-new stage show built for the amphitheatre's open sky."
    },
    {
      id: "ev-2",
      title: "Frontier AI Summit",
      category: "Technology",
      date: dateAt(13, 9, 30),
      venue: "Moscone West",
      city: "San Francisco, CA",
      price: 249,
      currency: "$",
      image: "images/event-ai.jpg",
      imageAlt: "A team collaborating around laptops in a bright modern workspace",
      attendees: "2.1k going",
      description:
        "Two stages, forty speakers and zero hype. Meet the researchers and founders shipping the systems that will define the next decade of computing."
    },
    {
      id: "ev-3",
      title: "Founders Table: Series A",
      category: "Business",
      date: dateAt(17, 18, 0),
      venue: "The Grand Hall",
      city: "New York, NY",
      price: 120,
      currency: "$",
      image: "images/event-startup.jpg",
      imageAlt: "Colleagues in conversation during a business networking session",
      attendees: "840 going",
      description:
        "An honest, off-the-record dinner for founders raising their first institutional round. Three investors, twelve seats, real numbers — no pitch decks required."
    },
    {
      id: "ev-4",
      title: "Midnight City Run",
      category: "Sports",
      date: dateAt(20, 21, 0),
      venue: "Riverside Park",
      city: "Chicago, IL",
      price: 35,
      currency: "$",
      image: "images/event-sports.jpg",
      imageAlt: "Runners taking part in a city race at golden hour",
      attendees: "5.7k going",
      description:
        "A 10K through the city after dark, lit by projection art and powered by three live drum crews. Finishers get a medal and a very good hot chocolate."
    },
    {
      id: "ev-5",
      title: "Clay & Code: Design Lab",
      category: "Workshops",
      date: dateAt(23, 10, 0),
      venue: "Studio 14",
      city: "Austin, TX",
      price: 0,
      currency: "$",
      image: "images/event-workshop.jpg",
      imageAlt: "Participants working together at tables during a hands-on workshop",
      attendees: "120 going",
      description:
        "A hands-on morning exploring physical prototyping for digital products. We'll sketch, sculpt and stress-test ideas with clay before touching a screen. Materials included."
    },
    {
      id: "ev-6",
      title: "Future of Learning Forum",
      category: "Education",
      date: dateAt(27, 9, 0),
      venue: "Oxford Union",
      city: "London, UK",
      price: 75,
      currency: "$",
      image: "images/event-education.jpg",
      imageAlt: "Speaker addressing an audience in a wood-panelled lecture theatre",
      attendees: "1.4k going",
      description:
        "Educators, researchers and students gather to reimagine how we learn. Expect candid keynotes on AI in the classroom and a lively closing debate."
    },
    {
      id: "ev-7",
      title: "Warehouse Sessions 09",
      category: "Music",
      date: dateAt(30, 22, 0),
      venue: "Pier 42",
      city: "Brooklyn, NY",
      price: 45,
      currency: "$",
      image: "images/event-warehouse.jpg",
      imageAlt: "Concert stage bathed in dramatic lighting with a large audience",
      attendees: "4.8k going",
      description:
        "Four rooms, six DJs and a sound system built for the space. Warehouse Sessions is the late-night institution Brooklyn keeps coming back to."
    },
    {
      id: "ev-8",
      title: "Sunrise Flow Fest",
      category: "Sports",
      date: dateAt(34, 6, 30),
      venue: "Ocean Deck",
      city: "Santa Monica, CA",
      price: 28,
      currency: "$",
      image: "images/event-yoga.jpg",
      imageAlt: "Group practising yoga together in a bright studio",
      attendees: "760 going",
      description:
        "Start the day with a 60-minute flow as the sun comes up over the Pacific. All levels welcome, mats provided, coffee and pastries afterwards."
    },
    {
      id: "ev-9",
      title: "Product Craft Bootcamp",
      category: "Workshops",
      date: dateAt(38, 9, 0),
      venue: "Hub 22",
      city: "Seattle, WA",
      price: 180,
      currency: "$",
      image: "images/event-tech.jpg",
      imageAlt: "Conference audience listening to a presentation in a large auditorium",
      attendees: "300 going",
      description:
        "A full-day intensive on discovery, prototyping and product storytelling. Bring a real problem — leave with a tested concept and a sharper point of view."
    }
  ];

  const TRENDING = [
    {
      id: "tr-1",
      title: "Echoes Festival 2026",
      category: "Music",
      date: dateAt(45, 16, 0),
      venue: "Parque das Nações",
      city: "Lisbon, PT",
      price: 199,
      currency: "€",
      image: "images/event-festival.jpg",
      imageAlt: "Crowd silhouetted against purple festival lights",
      attendees: "8.6k going",
      description:
        "Three days of music, art and food across four stages on Lisbon's waterfront. This year's line-up spans ambient, Afrobeats and everything in between."
    },
    {
      id: "tr-2",
      title: "Web3 Horizon",
      category: "Technology",
      date: dateAt(53, 10, 0),
      venue: "Dubai World Trade Centre",
      city: "Dubai, UAE",
      price: 320,
      currency: "$",
      image: "images/event-summit.jpg",
      imageAlt: "Large conference hall with an audience facing a lit stage",
      attendees: "5.1k going",
      description:
        "The builders' conference for the decentralised web. No moon talk — just infrastructure, payments and the products finding real traction."
    },
    {
      id: "tr-3",
      title: "The Creator Economy Live",
      category: "Business",
      date: dateAt(61, 11, 0),
      venue: "Kraftwerk Berlin",
      city: "Berlin, DE",
      price: 140,
      currency: "€",
      image: "images/event-creator.jpg",
      imageAlt: "Audience at an industry conference with notebooks and laptops",
      attendees: "4.3k going",
      description:
        "One day with the people building the next generation of independent media. Pricing, platforms and the messy business of being your own brand."
    }
  ];

  const ALL_EVENTS = [...EVENTS, ...TRENDING];

  /* ------------------------------------------------------------------ */
  /* State                                                               */
  /* ------------------------------------------------------------------ */
  const validIds = new Set(ALL_EVENTS.map((event) => event.id));

  const loadFavorites = () => {
    try {
      const stored = JSON.parse(storage.get("pulse-favorites", "[]"));
      return Array.isArray(stored) ? stored.filter((id) => validIds.has(id)) : [];
    } catch (error) {
      return [];
    }
  };

  const state = {
    category: "all",
    query: "",
    location: "",
    savedOnly: false,
    favorites: new Set(loadFavorites())
  };

  /* ------------------------------------------------------------------ */
  /* DOM references                                                      */
  /* ------------------------------------------------------------------ */
  const dom = {
    html: document.documentElement,
    header: $("#siteHeader"),
    themeToggle: $("#themeToggle"),
    themeMeta: $('meta[name="theme-color"]'),
    navToggle: $("#navToggle"),
    mobileNav: $("#mobileNav"),
    navLinks: $$(".nav-link"),
    searchForm: $("#searchForm"),
    eventSearch: $("#eventSearch"),
    locationSearch: $("#locationSearch"),
    filterChips: $("#filterChips"),
    savedToggle: $("#savedToggle"),
    savedCount: $("#savedCount"),
    resultsCount: $("#resultsCount"),
    eventsGrid: $("#eventsGrid"),
    emptyState: $("#emptyState"),
    resetFilters: $("#resetFilters"),
    trendingGrid: $("#trendingGrid"),
    modal: $("#eventModal"),
    modalImage: $("#modalImage"),
    modalCategory: $("#modalCategory"),
    modalDateChip: $("#modalDateChip"),
    modalKicker: $("#modalKicker"),
    modalTitle: $("#modalTitle"),
    modalDesc: $("#modalDesc"),
    modalDateTime: $("#modalDateTime"),
    modalLocation: $("#modalLocation"),
    modalPrice: $("#modalPrice"),
    modalFav: $("#modalFav"),
    modalFavLabel: $("#modalFavLabel"),
    modalReserve: $("#modalReserve"),
    modalClose: $("#modalClose"),
    newsletterForm: $("#newsletterForm"),
    newsletterEmail: $("#newsletterEmail"),
    newsletterMsg: $("#newsletterMsg"),
    newsletterSuccess: $("#newsletterSuccess"),
    toast: $("#toast")
  };

  /* ------------------------------------------------------------------ */
  /* Small shared helpers                                                */
  /* ------------------------------------------------------------------ */
  const priceLabel = (event) =>
    event.price === 0 ? "Free" : `${event.currency}${event.price.toLocaleString("en-US")}`;

  const findEvent = (id) => ALL_EVENTS.find((event) => event.id === id);

  let toastTimer;
  const showToast = (message) => {
    dom.toast.textContent = message;
    dom.toast.classList.add("show");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => dom.toast.classList.remove("show"), 3000);
  };

  /* ------------------------------------------------------------------ */
  /* Featured events: filters, search and rendering                      */
  /* ------------------------------------------------------------------ */
  const syncSavedCount = () => {
    dom.savedCount.textContent = String(state.favorites.size);
    dom.savedToggle.setAttribute("aria-pressed", String(state.savedOnly));
  };

  const syncChips = () => {
    $$(".chip", dom.filterChips).forEach((chip) => {
      chip.classList.toggle("is-active", chip.dataset.category === state.category);
    });
  };

  const getFilteredEvents = () =>
    EVENTS.filter((event) => {
      if (state.category !== "all" && event.category !== state.category) return false;
      if (state.savedOnly && !state.favorites.has(event.id)) return false;

      if (state.query) {
        const haystack = `${event.title} ${event.category} ${event.city} ${event.venue} ${event.description}`.toLowerCase();
        if (!haystack.includes(state.query)) return false;
      }

      if (state.location) {
        const place = `${event.city} ${event.venue}`.toLowerCase();
        if (!place.includes(state.location)) return false;
      }

      return true;
    });

  const eventCardHTML = (event, index) => {
    const saved = state.favorites.has(event.id);
    const isFree = event.price === 0;

    return `
      <article class="event-card" style="animation-delay:${Math.min(index * 45, 320)}ms">
        <div class="event-media-wrap">
          <div class="event-media">
            <img src="${event.image}" alt="${escapeHTML(event.imageAlt)}" width="1000" height="667" loading="lazy">
            <span class="badge badge-category">${escapeHTML(event.category)}</span>
            <button class="fav-btn" type="button" data-fav="${event.id}" aria-pressed="${saved}"
              aria-label="${saved ? "Remove" : "Save"} ${escapeHTML(event.title)} ${saved ? "from" : "to"} your saved events">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round" aria-hidden="true">
                <path d="M12 20.4s-7.5-4.6-7.5-10A4.2 4.2 0 0 1 12 7.5a4.2 4.2 0 0 1 7.5 2.9c0 5.4-7.5 10-7.5 10z"/>
              </svg>
            </button>
          </div>
          <div class="date-chip" aria-hidden="true">
            <span>${fmtMonth.format(event.date)}</span>
            <strong>${event.date.getDate()}</strong>
          </div>
        </div>

        <div class="event-body">
          <p class="event-city">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 1 1 16 0z"/><circle cx="12" cy="10" r="2.6"/>
            </svg>
            ${escapeHTML(event.city)}
          </p>
          <h3>${escapeHTML(event.title)}</h3>
          <p class="event-venue">${fmtShort.format(event.date)} · ${fmtTime.format(event.date)} · ${escapeHTML(event.venue)}</p>

          <div class="event-foot">
            <div class="event-price">
              <span>${isFree ? "Entry" : "From"}</span>
              <strong>${priceLabel(event)}</strong>
            </div>
            <button class="btn btn-outline btn-sm" type="button" data-event="${event.id}">
              View details
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                <path d="M5 12h14M13 6l6 6-6 6"/>
              </svg>
            </button>
          </div>
        </div>
      </article>
    `;
  };

  const updateEmptyState = () => {
    const title = $("h3", dom.emptyState);
    const copy = $("p", dom.emptyState);

    if (state.savedOnly && state.favorites.size === 0) {
      title.textContent = "Nothing saved yet.";
      copy.textContent = "Tap the heart on any event to build your shortlist. It stays saved on this device.";
    } else if (state.savedOnly) {
      title.textContent = "No saved events match these filters.";
      copy.textContent = "Try clearing the category or search filters to see more of your saved events.";
    } else {
      title.textContent = "No events match that search.";
      copy.textContent = "Try a different keyword, another city, or clear your filters to see everything.";
    }
  };

  const renderEvents = () => {
    const results = getFilteredEvents();

    dom.eventsGrid.innerHTML = results.map(eventCardHTML).join("");
    dom.emptyState.hidden = results.length !== 0;

    dom.resultsCount.textContent =
      results.length === EVENTS.length
        ? `${EVENTS.length} events`
        : `${results.length} of ${EVENTS.length} events`;

    if (results.length === 0) updateEmptyState();
    syncChips();
    syncSavedCount();
  };

  const renderFilters = () => {
    const categories = [{ value: "all", label: "All events" }].concat(
      CATEGORIES.map((category) => ({ value: category, label: category }))
    );

    dom.filterChips.innerHTML = categories
      .map(
        (category) =>
          `<button class="chip${category.value === state.category ? " is-active" : ""}" type="button" data-category="${category.value}">${category.label}</button>`
      )
      .join("");
  };

  const resetAllFilters = () => {
    state.category = "all";
    state.query = "";
    state.location = "";
    state.savedOnly = false;
    dom.eventSearch.value = "";
    dom.locationSearch.value = "";
    renderEvents();
  };

  const readSearchInputs = () => {
    state.query = dom.eventSearch.value.trim().toLowerCase();
    state.location = dom.locationSearch.value.trim().toLowerCase();
  };

  const scrollToFeatured = () => {
    $("#featured").scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const initSearch = () => {
    const liveSearch = debounce(() => {
      readSearchInputs();
      state.savedOnly = false;
      renderEvents();
    });

    dom.eventSearch.addEventListener("input", liveSearch);
    dom.locationSearch.addEventListener("input", liveSearch);

    dom.searchForm.addEventListener("submit", (event) => {
      event.preventDefault();
      readSearchInputs();
      // The hero search is global: clear any previously selected category.
      state.category = "all";
      state.savedOnly = false;
      renderEvents();
      scrollToFeatured();

      if (getFilteredEvents().length === 0) {
        showToast("No matches yet — try a broader search.");
      }
    });
  };

  const initFilters = () => {
    dom.filterChips.addEventListener("click", (event) => {
      const chip = event.target.closest(".chip");
      if (!chip) return;

      state.category = chip.dataset.category;
      state.savedOnly = false;
      renderEvents();
    });

    dom.savedToggle.addEventListener("click", () => {
      state.savedOnly = !state.savedOnly;
      renderEvents();

      if (state.savedOnly && state.favorites.size === 0) {
        showToast("Nothing saved yet — tap a heart to start your shortlist.");
      }
    });

    dom.resetFilters.addEventListener("click", () => {
      resetAllFilters();
      dom.eventSearch.focus({ preventScroll: true });
    });

    // Category cards filter the featured grid, then bring it into view.
    $$(".category-card").forEach((card) => {
      card.addEventListener("click", () => {
        state.category = card.dataset.category;
        state.query = "";
        state.location = "";
        state.savedOnly = false;
        dom.eventSearch.value = "";
        dom.locationSearch.value = "";
        renderEvents();
        scrollToFeatured();
        showToast(`Showing ${card.dataset.category.toLowerCase()} events.`);
      });
    });
  };

  /* ------------------------------------------------------------------ */
  /* Trending events                                                     */
  /* ------------------------------------------------------------------ */
  const trendingCardHTML = (event, index) =>
    `<article class="trend-card" style="animation-delay:${index * 80}ms">
      <img src="${event.image}" alt="${escapeHTML(event.imageAlt)}" width="1000" height="667" loading="lazy">
      <span class="trend-rank">0${index + 1}</span>
      <span class="trend-badge">✦ Trending</span>
      <div class="trend-content">
        <p class="trend-cat">${escapeHTML(event.category)} · ${escapeHTML(event.attendees)}</p>
        <h3>${escapeHTML(event.title)}</h3>
        <p>${fmtShort.format(event.date)} · ${escapeHTML(event.city)}</p>
        <div class="trend-foot">
          <span class="trend-price">From <strong>${priceLabel(event)}</strong></span>
          <button class="trend-open" type="button" data-event="${event.id}" aria-label="View details for ${escapeHTML(event.title)}">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <path d="M7 17L17 7M8 7h9v9"/>
            </svg>
          </button>
        </div>
      </div>
    </article>`;

  const renderTrending = () => {
    dom.trendingGrid.innerHTML = TRENDING.map(trendingCardHTML).join("");
  };

  /* ------------------------------------------------------------------ */
  /* Countdown                                                           */
  /* ------------------------------------------------------------------ */
  const initCountdown = () => {
    const target = TRENDING[0].date.getTime();
    const days = $("#cdDays");
    const hours = $("#cdHours");
    const minutes = $("#cdMins");
    const seconds = $("#cdSecs");
    if (!days || !hours || !minutes || !seconds) return;

    const pad = (value) => String(value).padStart(2, "0");
    let timer;

    const tick = () => {
      const remaining = Math.max(0, target - Date.now());
      const totalSeconds = Math.floor(remaining / 1000);

      days.textContent = pad(Math.floor(totalSeconds / 86400));
      hours.textContent = pad(Math.floor((totalSeconds % 86400) / 3600));
      minutes.textContent = pad(Math.floor((totalSeconds % 3600) / 60));
      seconds.textContent = pad(totalSeconds % 60);

      if (remaining === 0) clearInterval(timer);
    };

    tick();
    timer = setInterval(tick, 1000);
    window.addEventListener("pagehide", () => clearInterval(timer), { once: true });
  };

  /* ------------------------------------------------------------------ */
  /* Favorites                                                           */
  /* ------------------------------------------------------------------ */
  const persistFavorites = () => {
    storage.set("pulse-favorites", JSON.stringify(Array.from(state.favorites)));
  };

  const refreshFavoriteButtons = (id, isSaved) => {
    $$(`[data-fav="${id}"]`).forEach((button) => {
      const event = findEvent(id);
      button.setAttribute("aria-pressed", String(isSaved));
      if (event) {
        button.setAttribute(
          "aria-label",
          `${isSaved ? "Remove" : "Save"} ${event.title} ${isSaved ? "from" : "to"} your saved events`
        );
      }
      button.classList.remove("pop");
      void button.offsetWidth; // restart the pop animation
      button.classList.add("pop");
    });

    if (dom.modalFav.dataset.id === id) {
      dom.modalFav.setAttribute("aria-pressed", String(isSaved));
      dom.modalFavLabel.textContent = isSaved ? "Saved to your list" : "Save event";
    }
  };

  const toggleFavorite = (id) => {
    const event = findEvent(id);
    if (!event) return;

    const isSaved = state.favorites.has(id);

    if (isSaved) {
      state.favorites.delete(id);
    } else {
      state.favorites.add(id);
    }

    persistFavorites();
    refreshFavoriteButtons(id, !isSaved);
    syncSavedCount();

    showToast(isSaved ? `Removed “${event.title}” from saved.` : `Saved “${event.title}” to your shortlist.`);

    if (state.savedOnly) renderEvents();
  };

  const initEventButtons = () => {
    [dom.eventsGrid, dom.trendingGrid].forEach((grid) => {
      grid.addEventListener("click", (event) => {
        const favButton = event.target.closest("[data-fav]");
        if (favButton) {
          toggleFavorite(favButton.dataset.fav);
          return;
        }

        const detailButton = event.target.closest("[data-event]");
        if (detailButton) openModal(detailButton.dataset.event);
      });
    });
  };

  /* ------------------------------------------------------------------ */
  /* Event details modal                                                 */
  /* ------------------------------------------------------------------ */
  const lockScroll = (locked) => {
    document.body.style.overflow = locked ? "hidden" : "";
  };

  function openModal(id) {
    const event = findEvent(id);
    if (!event) return;

    dom.modalImage.src = event.image;
    dom.modalImage.alt = event.imageAlt;
    dom.modalCategory.textContent = event.category;
    dom.modalDateChip.textContent = fmtShort.format(event.date);
    dom.modalKicker.textContent = `${event.category} · ${event.attendees}`;
    dom.modalTitle.textContent = event.title;
    dom.modalDesc.textContent = event.description;
    dom.modalDateTime.textContent = `${fmtFull.format(event.date)} · ${fmtTime.format(event.date)}`;
    dom.modalLocation.textContent = `${event.venue}, ${event.city}`;
    dom.modalPrice.textContent =
      event.price === 0 ? "Free entry · registration required" : `From ${priceLabel(event)} · general admission`;

    dom.modalFav.dataset.id = event.id;
    const isSaved = state.favorites.has(event.id);
    dom.modalFav.setAttribute("aria-pressed", String(isSaved));
    dom.modalFavLabel.textContent = isSaved ? "Saved to your list" : "Save event";

    dom.modalReserve.dataset.id = event.id;

    if (!dom.modal.open) {
      dom.modal.showModal();
      lockScroll(true);
    }
  }

  const closeModal = () => {
    if (dom.modal.open) dom.modal.close();
    lockScroll(false);
  };

  const initModal = () => {
    dom.modalClose.addEventListener("click", closeModal);

    // Clicking the backdrop (the dialog itself, outside .modal-inner) closes it.
    dom.modal.addEventListener("click", (event) => {
      if (event.target === dom.modal) closeModal();
    });

    dom.modal.addEventListener("close", () => lockScroll(false));
    dom.modal.addEventListener("cancel", () => lockScroll(false));

    // Some embedded browsers fail to deliver the native close event, so watch
    // the open attribute as well and keep the page scroll state in sync.
    if ("MutationObserver" in window) {
      new MutationObserver(() => {
        if (!dom.modal.open) lockScroll(false);
      }).observe(dom.modal, { attributes: true, attributeFilter: ["open"] });
    }

    // Explicit Escape handling so the scroll lock is always released, even in
    // browsers that do not deliver the native dialog events reliably.
    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape" && dom.modal.open) {
        event.preventDefault();
        closeModal();
      }
    });

    dom.modalFav.addEventListener("click", () => {
      if (dom.modalFav.dataset.id) toggleFavorite(dom.modalFav.dataset.id);
    });

    dom.modalReserve.addEventListener("click", () => {
      const event = findEvent(dom.modalReserve.dataset.id);
      if (!event) return;
      const message =
        event.price === 0
          ? `You're registered for ${event.title}. Details are on their way.`
          : `Spot reserved for ${event.title}. Check your inbox to complete payment.`;
      showToast(message);
    });
  };

  /* ------------------------------------------------------------------ */
  /* Newsletter validation                                               */
  /* ------------------------------------------------------------------ */
  const initNewsletter = () => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[A-Za-z]{2,}$/;
    const inputWrap = dom.newsletterEmail.closest(".newsletter-input");

    const setError = (message) => {
      dom.newsletterMsg.textContent = message;
      dom.newsletterMsg.classList.remove("is-success");
      dom.newsletterEmail.setAttribute("aria-invalid", "true");
      inputWrap.classList.add("invalid");
    };

    const clearError = () => {
      dom.newsletterMsg.textContent = "";
      dom.newsletterMsg.classList.remove("is-success");
      dom.newsletterEmail.removeAttribute("aria-invalid");
      inputWrap.classList.remove("invalid");
    };

    dom.newsletterEmail.addEventListener("input", clearError);

    dom.newsletterForm.addEventListener("submit", (event) => {
      event.preventDefault();
      const value = dom.newsletterEmail.value.trim();

      if (!value) {
        setError("Please enter your email address.");
        dom.newsletterEmail.focus();
        return;
      }

      if (!emailPattern.test(value)) {
        setError("That email doesn't look right — try name@example.com.");
        dom.newsletterEmail.focus();
        return;
      }

      clearError();
      dom.newsletterForm.hidden = true;
      dom.newsletterSuccess.hidden = false;
      dom.newsletterSuccess.querySelector("p").textContent = `We've added ${value} to the list. Your first edit lands this Thursday.`;
      showToast("You're on the Pulse list. See you Thursday.");
    });
  };

  /* ------------------------------------------------------------------ */
  /* Theme                                                               */
  /* ------------------------------------------------------------------ */
  const applyTheme = (theme, { notify = false, persist = false } = {}) => {
    dom.html.setAttribute("data-theme", theme);
    dom.themeToggle.setAttribute("aria-label", theme === "dark" ? "Switch to light mode" : "Switch to dark mode");
    if (dom.themeMeta) dom.themeMeta.setAttribute("content", theme === "dark" ? "#0B0C09" : "#F5F2EA");
    if (persist) storage.set("pulse-theme", theme);
    if (notify) showToast(theme === "dark" ? "Lights off. Dark mode is on." : "Lights on. Light mode is back.");
  };

  const initTheme = () => {
    const current = dom.html.getAttribute("data-theme") === "dark" ? "dark" : "light";
    applyTheme(current);

    dom.themeToggle.addEventListener("click", () => {
      const next = dom.html.getAttribute("data-theme") === "dark" ? "light" : "dark";
      applyTheme(next, { notify: true, persist: true });
    });

    // Follow the OS only while the user has not made an explicit choice.
    const media = window.matchMedia("(prefers-color-scheme: dark)");
    const handleSystemTheme = (event) => {
      if (!storage.get("pulse-theme", null)) applyTheme(event.matches ? "dark" : "light");
    };

    if (typeof media.addEventListener === "function") {
      media.addEventListener("change", handleSystemTheme);
    }
  };

  /* ------------------------------------------------------------------ */
  /* Navigation, mobile drawer, scrollspy                                */
  /* ------------------------------------------------------------------ */
  const closeMenu = () => {
    dom.mobileNav.classList.remove("is-open");
    dom.navToggle.classList.remove("is-open");
    dom.navToggle.setAttribute("aria-expanded", "false");
    dom.mobileNav.setAttribute("aria-hidden", "true");
    document.body.classList.remove("menu-open");
  };

  const toggleMenu = () => {
    const isOpen = dom.mobileNav.classList.toggle("is-open");
    dom.navToggle.classList.toggle("is-open", isOpen);
    dom.navToggle.setAttribute("aria-expanded", String(isOpen));
    dom.mobileNav.setAttribute("aria-hidden", String(!isOpen));
    document.body.classList.toggle("menu-open", isOpen);
    if (isOpen) dom.mobileNav.querySelector("a")?.focus({ preventScroll: true });
  };

  const updateActiveNav = () => {
    const offset = window.scrollY + 160;
    let active = "home";

    ["home", "featured", "categories", "about"].forEach((id) => {
      const section = document.getElementById(id);
      if (!section) return;
      const top = section.getBoundingClientRect().top + window.scrollY;
      if (top <= offset) active = id;
    });

    dom.navLinks.forEach((link) => {
      link.classList.toggle("is-active", link.dataset.nav === active);
    });
  };

  const initNavigation = () => {
    dom.navToggle.addEventListener("click", toggleMenu);
    dom.mobileNav.addEventListener("click", (event) => {
      if (event.target.closest("a")) closeMenu();
    });

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") closeMenu();
    });

    window.addEventListener("resize", () => {
      if (window.innerWidth > 980) closeMenu();
    });

    [dom.themeToggle, $("#loginBtn"), $("#mobileLoginBtn")].forEach((button) => {
      if (!button || button === dom.themeToggle) return;
      button.addEventListener("click", () => {
        showToast("Member login is coming soon — join the weekly edit below in the meantime.");
        if (button.id === "mobileLoginBtn") closeMenu();
      });
    });
  };

  /* ------------------------------------------------------------------ */
  /* Scroll effects & reveal animations                                  */
  /* ------------------------------------------------------------------ */
  const initScrollEffects = () => {
    let ticking = false;

    const update = () => {
      dom.header.classList.toggle("scrolled", window.scrollY > 12);
      updateActiveNav();
      ticking = false;
    };

    window.addEventListener(
      "scroll",
      () => {
        if (ticking) return;
        ticking = true;
        window.requestAnimationFrame(update);
      },
      { passive: true }
    );

    update();
  };

  const initReveal = () => {
    const elements = $$("[data-reveal]");

    if (!("IntersectionObserver" in window)) {
      elements.forEach((element) => element.classList.add("is-visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );

    elements.forEach((element) => observer.observe(element));
  };

  /* ------------------------------------------------------------------ */
  /* Boot                                                                */
  /* ------------------------------------------------------------------ */
  const init = () => {
    renderFilters();
    renderEvents();
    renderTrending();
    syncSavedCount();
    initCountdown();
    initSearch();
    initFilters();
    initEventButtons();
    initModal();
    initNewsletter();
    initTheme();
    initNavigation();
    initScrollEffects();
    initReveal();

    const year = $("#year");
    if (year) year.textContent = String(new Date().getFullYear());

    // Reset transient UI when the user returns via the back/forward cache.
    window.addEventListener("pageshow", (event) => {
      if (!event.persisted) return;
      dom.header.classList.toggle("scrolled", window.scrollY > 12);
      lockScroll(false);
    });
  };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init, { once: true });
  } else {
    init();
  }
})();
