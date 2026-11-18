# AK - Event Discovery Website

Hey! This is **AK**, a small event discovery website I made for my frontend assignment. The idea is simple — instead of searching on ten different sites, you can find concerts, conferences, workshops, sports events and all that in one place.

I built it using only **HTML, CSS and JavaScript**. No framework, no server, no database. Just open `index.html` in a browser and it works.

## Screenshots

![AK on desktop](screenshots/Desktop%20preview.jpg)

Want to see the whole page? [Here is the full desktop screenshot](screenshots/newdesktop.jpg).

---

## What you can do on this site

- Search events by name — results change while you type
- Search by **city or venue**
- Filter events by category: Technology, Music, Business, Sports, Workshops and Education
- Sort events by price (low to high or high to low)
- See the number of events left after filtering
- Click the heart button to save an event, and use the **Saved** button to see them
- Click **View Details** to open an event — the last 3 events you open show up in a **Recently Viewed** section
- **Log in first, then register** for an event — the form fills your name and email automatically
- See a **booking summary** with ticket price, quantity and total amount before you confirm
- Check all your confirmed tickets in the **My Bookings** section, or cancel one if you change your mind
- Login / Signup forms for practice
- Subscribe with the newsletter form (it checks the email first)
- Hamburger menu on mobile, everything is responsive

## How to run it

1. Download or copy this folder.
2. Open `index.html` in Chrome (or any browser).

That's it, nothing to install. If you are using VS Code, you can also use the **Live Server** extension.

## Files in this folder

```text
Event Dictionery/
├── index.html          all the sections of the page
├── css/
│   └── style.css       styling and media queries
├── js/
│   └── app.js          event data + all the JavaScript
├── images/             event photos, hero images and the logo
├── screenshots/        screenshots of the website
└── README.md           this file
```

## How I made it (brief explanation)

All the events are stored as objects in an array inside `app.js`. JavaScript takes that array and creates the event cards, so I didn't have to write them by hand. When you type in the search box or click a category, I filter the array and render the cards again.

For the search I used a small delay (300ms debounce) so the filtering doesn't run on every single keystroke. Favourites, recently viewed events, the logged-in user and bookings are all saved in `localStorage`, so they are still there after you close the browser. I wrapped those calls in `try...catch` so the page doesn't break if a browser blocks storage. The popups are just hidden `div`s that get an `open` class when you click a button.

For the design I used CSS Grid for the cards, Flexbox for alignment, CSS variables for colours and media queries for tablet and mobile sizes. The navbar has a glass kind of effect using `backdrop-filter`, and it gets a shadow when you scroll.

### About the booking part

When you click **Register Now** without logging in, the event popup closes and the login popup opens with a small note telling you to log in first. After logging in, the registration form is filled with your name and email. Changing the number of tickets updates the total amount instantly (₹ price × tickets, or "Free" for free events).

When the form is valid, I create a booking object with a booking ID (`BK` + timestamp), event details, tickets, total amount and the booking date, then save it in `localStorage`. The **My Bookings** section reads that list and shows one card per booking. The cancel button asks for confirmation first, then removes that booking from the list and saves it again. The category card counts are also calculated from the event array instead of being typed in HTML, so they never go out of sync.

## What I added in this update

- A **My Bookings** section with booking cards and a cancel button
- A booking summary that calculates the total when you change the number of tickets
- Registration now needs login first, and the form is pre-filled with your details
- Bookings are saved in `localStorage` under `akBookings`
- Category event counts are now calculated automatically with JavaScript
- Moved the Trending section higher up on the page

## Stuff I learned from this project

- Rendering cards with JavaScript instead of writing them in HTML
- Using `localStorage` to save things in the browser
- CSS Grid (and how it is different from Flexbox)
- Making a page actually work on mobile with media queries
- Basic form validation in JavaScript
- How filter and sort can work together without breaking each other
- Calculating a total from form values and updating it live
- Using `confirm()` before deleting something

## Small note

The Poppins font is loaded from Google Fonts. If there is no internet, it falls back to Arial and the rest of the site still works fine.

Made by Amin-044 for the frontend assignment 🎉
