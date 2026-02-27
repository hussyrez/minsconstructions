# Mins Constructions — Project Plan

## Overview

Static website for **Mins Constructions**, a licenced rendering company in South East Melbourne. Built with Bootstrap 5.3.8 (CDN), hosted on GitHub Pages.

## Pages

### Home (`index.html`)
- **Sticky hero** with company name, "Professional Rendering Services In Melbourne" subheading
- **Hero box** (white border, rounded corners) with 2-column feature list and two CTA buttons (Call Now + Get a Free Quote, stack on mobile)
- **Parallax photo** (`photos/site/home_page.jpg`) — full image, scrolls over sticky hero via `.content-overlay` wrapper
- **Services grid** — 9 service cards in 3-column layout (Cement, Acrylic, Texture Coating, Sand & Cement Repairs, Render Cladding, Wall Rendering, Hebel, Float & Set, Concrete)
- **Gallery reel** — single-item carousel with before (top) / after (bottom), Prev/Next navigation, driven by `photos/gallery/manifest.json`
- **Schema.org LocalBusiness** JSON-LD structured data

### About Us (`about.html`)
- **Welcome section** — company story and values
- **After photos** — showcases completed work from gallery
- **Rendering services detail** — 4 technique cards (Smooth, Textured, Pigmented Finish, Membrane Colouring)
- **Why Choose Us** — 6 items in 2 columns with orange checkmarks
- **Customer reviews** — auto-scrolling carousel (6 reviews, duplicated for seamless loop, pauses on hover)
- **CTA section** — "Ready to Get Started?"

### Contact (`contact.html`)
- **Dark hero banner** — "Get In Touch" heading
- **Form (left, col-lg-7)** — Name, Phone, Email, Suburb, Service dropdown, Message, full-width submit button inside shadow card
- **Details (right, col-lg-5)** — Contact details card with orange circle icons + "Prefer to Call?" dark card with Call Now button
- **Web3Forms** integration (free, 250 submissions/month)

## Tech Stack

- HTML5, CSS3, vanilla JavaScript
- Bootstrap 5.3.8 via CDN (CSS + JS bundle)
- No build tools, no frameworks, no server-side code
- GitHub Pages hosting from main branch root

## Folder Structure

```
minscons/
├── index.html, about.html, contact.html
├── css/custom.css
├── js/gallery.js
├── photos/gallery/          (before/after photos + manifest.json)
├── photos/site/             (site asset images)
├── images/                  (logo, favicon)
├── PLAN.md, STYLE.md, DEPLOYMENT.md, note.txt, LICENSE
├── robots.txt, sitemap.xml
└── .gitignore
```

## SEO

- Keyword-optimised titles, meta descriptions, Open Graph tags on all pages
- Schema.org LocalBusiness JSON-LD on home page
- Canonical URLs, geo meta tags (AU-VIC)
- `robots.txt` + `sitemap.xml`
- Target keywords: Melbourne rendering service, rendering specialist, licenced renderers, Southeast Melbourne, render construction

## Before Going Live

See `note.txt` for the pre-launch checklist and `DEPLOYMENT.md` for GitHub Pages setup instructions.

## Reference Files

- `STYLE.md` — complete design system, component patterns, and conventions for future edits
- `DEPLOYMENT.md` — step-by-step GitHub Pages hosting guide
- `LICENSE` — All Rights Reserved, no copying or reuse permitted
