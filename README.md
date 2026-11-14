# Pulse — Event Discovery Website

Pulse is a simple event discovery website made for the Day 01 frontend assignment. It helps users find concerts, conferences, workshops, sports events and more in one place.

The website is built with only **HTML, CSS and JavaScript**. It does not need a server, database or any framework — you can open `index.html` directly in a browser.

![Pulse desktop preview](screenshots/preview-desktop.jpg)

<p align="center">
  <img src="screenshots/preview-mobile.jpg" alt="Pulse on mobile" width="240">
</p>

---

## What the Website Includes

- **Navigation bar** — Home, Events, Categories, About, Login and Get Started. The links scroll to their sections.
- **Hero section** — a short introduction, event-name search, location search and a search button.
- **Featured Events** — 6 event cards with image, name, date, time, venue, city, category and a **View Details** button.
- **Categories** — Technology, Music, Business, Sports, Workshops and Education. Clicking a category filters the events.
- **Trending Now** — 3 popular events shown in a separate dark section.
- **About section** — a short explanation of what Pulse offers.
- **Newsletter** — an email form that checks for empty or invalid emails before showing a success message.
- **Footer** — social links, quick links and contact details.

## Main Features

- Event category filtering and event-name search.
- City/venue search that works together with the category filter.
- Favourite (heart) button that saves events in `localStorage`.
- A **Saved** filter to show only favourited events.
- Event details popup with description, date, location and price.
- A "No events found" message with a **Clear Filters** button.
- Responsive layout for desktop, tablet and mobile.
- Mobile hamburger menu on small screens.

## Technologies Used

- **HTML5** — semantic page structure.
- **CSS3** — Flexbox, CSS Grid and media queries for the responsive layout.
- **JavaScript** — event data, DOM rendering, filtering, favourites, popup and form validation.

## Folder Structure

```text
day-01-event-discovery-platform/
├── index.html
├── css/
│   └── style.css
├── js/
│   └── app.js
├── images/
├── screenshots/
└── README.md
```

## How to Run

1. Download or copy the project folder.
2. Open `index.html` in any browser.

That's it — no installation or server is required. If you use VS Code, you can also open it with the **Live Server** extension.

## How It Works

All event information is stored in two arrays inside `js/app.js`: `events` (6 featured events) and `trending` (3 events). JavaScript builds the cards from this data, applies the active category and search terms, and re-renders the grid.

The favourite buttons save event ids in `localStorage` under the key `pulseFavorites`. The details popup is a simple hidden `<div>` that is filled with the selected event's data and shown with an `open` class.

## Note

The Poppins font is loaded from Google Fonts. If there is no internet connection, the website automatically falls back to Arial and everything else still works.
