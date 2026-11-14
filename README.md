# Pulse — Event Discovery Platform

A premium, fully responsive event discovery landing page built for **Day 01** of the frontend assignment. Pulse helps people find concerts, conferences, workshops and matches worth leaving the house for — with a curated editorial feel instead of a generic template.

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black)
![Lighthouse](https://img.shields.io/badge/Lighthouse-100%20%2F%20100%20%2F%20100-2c7a3f?style=flat-square)

---

## Preview

![Pulse desktop landing page](screenshots/preview-desktop.jpg)

<p align="center">
  <img src="screenshots/preview-mobile.jpg" alt="Pulse mobile landing page" width="260">
</p>

The screenshots above are the first viewport. Full-page captures are included in the repository:

- `screenshots/desktop.jpg` — full desktop page (light)
- `screenshots/desktop-dark.jpg` — full desktop page (dark mode)
- `screenshots/mobile.jpg` — full mobile page (390 px)

---

## Overview

Pulse is a single-page event discovery experience: a bold editorial hero, a searchable event grid, browsable categories, a live countdown, an about section and a validated newsletter signup. Everything is built with semantic HTML, modern CSS and dependency-free JavaScript — no frameworks, no build step.

**Design direction:** warm cream canvas, near-black ink, electric-lime accents and a coral highlight, paired with Bricolage Grotesque, Instrument Serif and Manrope. Ticket stubs, rotated stickers and a marquee ticker give it a physical, printed-poster personality.

---

## Features

### Core requirements

- **Sticky header** with Home, Explore Events, Categories, About, Log in and a “Get started” CTA. Links smooth-scroll to real sections and the active link updates on scroll.
- **Responsive mobile navigation** — full-screen drawer with numbered links, scroll lock, Escape-to-close and focus management.
- **Hero section** with headline, supporting copy, dual search (event name + city/venue) and a primary CTA.
- **9 featured event cards** (requirement: at least 6), each with image, name, date, time, venue, city, category badge, price and a **View details** action.
- **Category filtering** across 7 chips (All + 6 categories). The six category tiles below also filter the grid and scroll to it.
- **Live event-name search** (debounced) plus location search, combinable with the active category.
- **6 category cards** — Technology, Music, Business, Sports, Workshops, Education — with per-category counts.
- **3 distinct trending cards** with rank, badge, category, date, city and price, each opening the same details view.
- **Newsletter form** with real validation: empty and malformed emails show inline errors; a valid email swaps the form for a success state.
- **Footer** with social links, quick links, contact details, legal links and back-to-top.
- **Empty state** with a one-click “Clear filters” recovery action and a live results counter.

### Bonus features

- **Live countdown** to the next headline event (days / hours / minutes / seconds, updates every second).
- **Light / dark theme** toggle that follows the OS preference on first visit, remembers the user’s choice and avoids a flash of the wrong theme.
- **Event details popup** using the native `<dialog>` element, with image, description, date/time, venue, entry price, reserve action and save toggle.
- **Favorites / shortlist** stored in `localStorage`, with a Saved filter, live count, pop animation and toast feedback.
- **Polished motion** — scroll-reveal, marquee ticker, hover states, rotating badges — all disabled under `prefers-reduced-motion`.
- **Accessibility** — skip link, landmarks, labelled controls, visible focus rings, ARIA live regions, keyboard-dismissable modal and AA-contrast text.

---

## Tech stack

| Layer | Choice |
| --- | --- |
| Markup | Semantic HTML5, inline SVG icons, native `<dialog>` |
| Styling | CSS3 — custom properties, Flexbox, Grid, `clamp()`, `color-mix()`, container-free responsive layout |
| Behaviour | Vanilla JavaScript (ES6+) — DOM rendering, event delegation, `IntersectionObserver`, `localStorage` |
| Type | Bricolage Grotesque, Instrument Serif, Manrope via Google Fonts |
| Imagery | 15 local photographs in `images/` |

No packages, bundlers or frameworks are required.

---

## Project structure

```text
day-01-event-discovery-platform/
├── index.html                 # Semantic page structure, SVGs, modal, footer
├── css/
│   └── style.css              # Design tokens, themes, layout, components, responsive rules
├── js/
│   └── app.js                 # Data, rendering, filtering, favorites, modal, validation
├── images/                    # 15 local event/hero photographs
├── screenshots/
│   ├── desktop.jpg            # Full-page desktop (light)
│   ├── desktop-dark.jpg       # Full-page desktop (dark)
│   ├── mobile.jpg             # Full-page mobile (390 px)
│   ├── preview-desktop.jpg    # First-viewport crop used above
│   └── preview-mobile.jpg     # First-viewport crop used above
└── README.md
```

> When publishing, name the repository **`day-01-event-discovery-platform`** to match the submission brief.

---

## Run locally

The site is fully static, so any static server works.

```bash
# from the project folder
python -m http.server 5500
```

Then open <http://localhost:5500>.

Alternatively, open the folder in VS Code and use the **Live Server** extension, or double-click `index.html` (all features work from the filesystem too).

---

## How it works

### Data-driven cards

`js/app.js` holds two arrays — `EVENTS` (9 items) and `TRENDING` (3 items) — each with an id, title, category, date, venue, city, price, image and description. Cards, filter chips and trending cards are rendered from this data at boot, so adding an event is a one-object change. Event dates are generated relative to “today”, which keeps the countdown and the “upcoming” copy fresh whenever the demo is opened.

### Filtering & search

A single `state` object tracks `category`, `query`, `location`, `savedOnly` and the favorites set. `getFilteredEvents()` applies each condition in sequence and returns the visible list; one render function updates the grid, the empty state, the results count, the chips and the saved counter. Search input is debounced at 220 ms, and submitting the hero form clears the category so the search stays global.

### Favorites

Favorites are a `Set` mirrored to `localStorage` under `pulse-favorites`. Because the grid re-renders, clicks are handled by event delegation on the grid containers. Toggling a favorite updates every matching button, the modal state, the saved count and shows a toast. Invalid or stale ids are filtered out on load.

### Event modal

Details open in a native `<dialog>` via `showModal()`, which gives focus trapping and backdrop behaviour for free. The page scroll is locked while it is open. Some embedded Chromium builds do not dispatch the native `close`/`cancel` events reliably, so the implementation also releases the lock directly on close, listens for **Escape** explicitly and watches the dialog’s `open` attribute with a `MutationObserver`.

### Theme

An inline script in `<head>` applies the saved theme (or the OS preference) before first paint. The toggle persists the choice under `pulse-theme`. All colours are custom properties, so both themes share the same component styles.

### Validation

The newsletter field is validated on submit with a pragmatic email pattern. Errors set `aria-invalid`, show a message in a live region and add a shake animation; typing clears the error. A valid address replaces the form with a confirmation panel that echoes the address.

---

## Responsive behaviour

| Width | Layout |
| --- | --- |
| > 1120 px | Two-column hero, 3-column event/category/trending grids, 4-column footer |
| ≤ 1120 px | Hero stacks to one column so the search fields stay comfortable |
| ≤ 980 px | Desktop nav becomes a hamburger menu; grids drop to 2 columns |
| ≤ 860 px | Trending cards become a single column; countdown goes full-width |
| ≤ 720 px | Single-column event cards, stacked search panel, reduced spacing, 2-column categories |
| ≤ 480 px | Single-column categories, compact hero, simplified footer |

The page was audited at **1440, 1280, 1100, 1024, 980, 900, 820, 768, 720, 600, 480, 390 and 360 px** — zero horizontal overflow at every width.

---

## Quality checks

- **Lighthouse (local build):** Accessibility **100**, Best Practices **100**, SEO **100**.
- **Console:** no errors during load or interaction tests.
- **Functional tests:** category filters, combined search, location search, reset and empty state, favorites persistence, saved-only filter, modal open/close/save/reserve, newsletter empty/invalid/success, theme persistence, mobile drawer state.
- **Images:** all 15 local photos verified and included in the full-page captures.
- **Keyboard:** skip link, visible focus styles, Escape closes the modal and mobile menu.

---

## Challenge & solution

**Challenge 1 — the hero broke between tablet and desktop.** At roughly 1000–1100 px the two-column hero squeezed the “What” and “Where” search fields down to ~127 px, making them awkward to use.  
**Solution:** move the hero’s stacking breakpoint up to 1120 px, while leaving the navigation and card grids at their own breakpoints. The search panel now always has room to breathe, and the single-column hero reads well on tablets.

**Challenge 2 — the modal left the page scroll-locked.** The native dialog closed visually, but its `close` event did not fire in the embedded Chromium test environment, so `body { overflow: hidden }` stayed behind.  
**Solution:** release the lock in the close handler, add an explicit Escape listener, and observe the dialog’s `open` attribute as a final fallback. Closing by button, backdrop or keyboard now always restores scrolling.

**Challenge 3 — full-page screenshots had missing images.** Lazy-loaded images below the fold never entered the capture viewport.  
**Solution:** the capture script sets every image to eager loading, scrolls the full page, waits for `document.fonts.ready` and each image’s load/error event, then captures beyond the viewport.

---

## What I learned

- How to structure a multi-section landing page around a small design system (tokens, spacing scale, type scale) instead of one-off styles.
- Building a filter pipeline that composes category, text, location and saved-state conditions without duplicating render logic.
- Using event delegation to keep dynamically rendered cards interactive across re-renders.
- The practical differences between `hidden`, `display: none` and the `hidden` attribute inside grids and dialogs.
- How localStorage, system theme preferences and pre-paint scripts fit together to avoid flicker.
- Why testing intermediate breakpoints — not just “desktop” and “mobile” — matters for a genuinely responsive result.
- How native `<dialog>` behaves across engines, and how to add resilient fallbacks without giving up its accessibility benefits.

---

## Credits

- **Fonts:** [Bricolage Grotesque](https://fonts.google.com/specimen/Bricolage+Grotesque), [Instrument Serif](https://fonts.google.com/specimen/Instrument+Serif) and [Manrope](https://fonts.google.com/specimen/Manrope) via Google Fonts.
- **Photography:** sourced from [Unsplash](https://unsplash.com) for demo purposes and stored locally in `images/`.
- **Design & code:** original work for the Day 01 assignment. All event names, venues, prices and copy are fictional.

---

## Submission checklist

- [x] Header navigation with working section links and Login / Get started actions
- [x] Hero with event-name and location search plus CTA
- [x] 9 featured event cards with image, name, date, time, location and category
- [x] 6 category cards and working category filtering
- [x] Functional event-name search
- [x] 3 distinct trending event cards
- [x] Newsletter with email validation
- [x] Footer with social links, quick links and contact details
- [x] Flexbox + CSS Grid, responsive media queries
- [x] JavaScript DOM manipulation and event handling
- [x] Desktop and mobile screenshots
- [x] README with setup, features, challenge/solution and learnings
- [ ] Publish the repository as `day-01-event-discovery-platform`
- [ ] Add the live demo URL after deployment
