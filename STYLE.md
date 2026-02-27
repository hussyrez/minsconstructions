# Mins Constructions — Style & Development Guide

This document defines the design system, conventions, and patterns used across the website. Follow this guide for all future edits to maintain consistency.

## Brand Colours

| CSS Variable | Hex | Usage |
|---|---|---|
| `--mc-primary` | `#e77f24` | Buttons, accent text, icons, links, service icons, contact icons |
| `--mc-dark` | `#1a1a2e` | Hero backgrounds, dark sections |
| Bootstrap `bg-dark` | `#212529` | Navbar, footer |
| Bootstrap `bg-light` | `#f8f9fa` | Alternating section backgrounds |
| White | `#ffffff` | Default section backgrounds, cards |

## Typography

- **No web fonts** — system font stack via Bootstrap default
- Headings: Bootstrap default weights (`fw-bold` for hero H1)
- Body: Bootstrap default (`1rem`)
- Use `.text-accent` class for orange-coloured text

## CSS Architecture

- **One file**: `css/custom.css` linked after Bootstrap CDN
- All custom styles use `.class` selectors — no IDs for styling
- CSS variables defined in `:root` — always use variables, never hardcode hex
- Keep it minimal — Bootstrap classes handle layout, spacing, grid

## Layout Conventions

### Shared Across All Pages
- **Navbar**: `.navbar-dark .bg-dark .sticky-top` with `container` inside
- **Active link**: `class="nav-link active" aria-current="page"` on current page
- **Footer**: `.bg-dark .text-light .py-4` — copyright + tagline, centred

### Section Alternation Pattern
Alternate section backgrounds for visual separation:
```
Dark hero → White section → Light grey section → White section → ...
```
Use `bg-white`, `bg-light`, or no class (default white).

### Container Pattern
Every section uses:
```html
<section class="py-5 bg-light">
  <div class="container">
    <h2 class="text-center mb-4">Section Heading</h2>
    ...
  </div>
</section>
```

## Component Patterns

### Cards (Services, Contact)
- `.card .border-0 .shadow-sm` — no border, subtle shadow
- `.card-body .p-4` — generous padding
- Hover lift: `transform: translateY(-4px)` with `transition: transform 0.2s ease`

### Service Icons (Home page)
- 60x60px orange circle: `.service-icon`
- Unicode character inside, white on orange

### Contact Icons
- 44x44px orange circle: `.contact-icon`
- Flexbox centred, `min-width: 44px`

### Buttons
- Primary: `.btn-primary` — orange (`--mc-primary`), darker on hover
- Outline: `.btn-outline-light` — white border, fills on hover
- Full-width: add `.w-100`
- Large: `.btn-lg`
- Side-by-side on desktop, stacked on mobile: `col-12 col-sm-6` with `w-100`

### Hero Sections
- Home: `.hero` — sticky, dark navy, contains `.hero-box` with white border + rounded corners
- Contact: `.contact-hero` — dark navy, centred text, no sticky
- Both use `padding: 3.5-5rem 0`

### Parallax Image (Home)
- `.content-overlay` wraps everything below hero (z-index: 1, bg-white)
- Hero is `position: sticky; top: 0; z-index: 0` — content scrolls over it
- Image uses `<img>` tag (not background-image) for full visibility, no cropping

### Gallery Reel (Home)
- Single item carousel with Prev/Next buttons
- Before photo on top, after photo on bottom
- `.gallery-reel` max-width 600px, centred
- Controlled by `js/gallery.js` reading `photos/gallery/manifest.json`

### Review Carousel (About)
- Auto-scrolling left to right, pauses on hover
- Cards duplicated in HTML for seamless infinite loop
- `.review-scroll-wrapper` overflow hidden, `.review-scroll-track` flex + CSS animation
- `.review-card` fixed 300px width
- Stars: `&#9733;` (filled) `&#9734;` (empty), colour `#f5a623`

### "Why Choose Us" List
- Two columns (`col-md-6`)
- Each item: orange checkmark `&#10003;` + heading + description
- Uses `d-flex align-items-start` layout

## Folder Structure

```
minscons/
├── index.html              # Home: hero + parallax photo + services grid + gallery reel
├── about.html              # About: welcome + after photos + services detail + why choose us + reviews + CTA
├── contact.html            # Contact: hero + form (left) + details (right)
├── css/
│   └── custom.css          # All custom styles
├── js/
│   └── gallery.js          # Gallery reel logic
├── photos/
│   ├── gallery/            # Before/after photos + manifest.json
│   └── site/               # Site asset images (home_page.jpg etc.)
├── images/                 # Logo, favicon
├── PLAN.md                 # Project plan
├── STYLE.md                # This file
├── DEPLOYMENT.md           # GitHub Pages deployment instructions
├── note.txt                # Pre-launch checklist
├── LICENSE                 # All rights reserved
├── robots.txt              # SEO crawler config
├── sitemap.xml             # SEO sitemap
└── .gitignore              # .claude/, .DS_Store
```

## Adding New Gallery Photos

1. Name files: `jobNo_suburb_before.jpg` and `jobNo_suburb_after.jpg`
2. Drop into `photos/gallery/`
3. Add entry to `photos/gallery/manifest.json`:
   ```json
   {
     "jobNo": "3",
     "suburb": "Narre Warren",
     "builder": "",
     "before": "3_narrewarren_before.jpg",
     "after": "3_narrewarren_after.jpg"
   }
   ```
4. Commit and push

## Adding Site Images

Place in `photos/site/` — reference as `photos/site/filename.jpg`

## SEO Conventions

- Every page has: unique `<title>`, `<meta description>`, canonical URL, Open Graph tags
- Geo meta tags: `AU-VIC`, `South East Melbourne`
- `index.html` has Schema.org `LocalBusiness` JSON-LD
- Target keywords: Melbourne rendering service, rendering specialist, licenced renderers, Southeast Melbourne, render construction
- `robots.txt` and `sitemap.xml` at project root

## Contact Form

- Uses **Web3Forms** (free, 250 submissions/month)
- Action: `https://api.web3forms.com/submit`
- Hidden field: `access_key` — replace `YOUR_ACCESS_KEY_HERE` with real key
- Hidden `botcheck` checkbox for spam protection
