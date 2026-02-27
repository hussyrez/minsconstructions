# Mins Constructions — Static Website Plan

## Context

Build a minimalist, mobile-friendly static website for **Mins Constructions**, a rendering company in South East Melbourne. The site needs three pages (Home, Contact, About Us) using Bootstrap 5.3.8 via CDN. The key feature is a before/after photo gallery on the Home page driven by a JSON manifest file.

**Hosting**: GitHub Pages (static files served directly from the repo).

## Folder Structure

```
minscons/
├── index.html                  # Home page (hero + gallery)
├── about.html                  # About Us page
├── contact.html                # Contact page with form
├── css/
│   └── custom.css              # Brand colors + minimal overrides
├── js/
│   └── gallery.js              # Fetches manifest.json, renders photo cards
├── photos/
│   └── manifest.json           # JSON listing all before/after photo pairs
│   └── (photo files)           # e.g. 1_Cranbourne_Smith_before.jpg
├── images/
│   └── (logo, favicon)
└── PLAN.md                     # This plan — project reference document
```

## Shared Layout (all 3 pages)

Each HTML file includes the full markup (no templating — acceptable for 3 pages):
- **Bootstrap 5.3.8 CDN** (CSS + JS bundle)
- **Sticky dark navbar** — brand logo left, nav links (Home, About Us, Contact) right, mobile hamburger toggle
- **Footer** — copyright, tagline "Rendering Specialists — South East Melbourne"
- **`css/custom.css`** linked after Bootstrap

Active nav link set per-page via `class="nav-link active" aria-current="page"`.

## Page Details

### 1. Home (`index.html`)

**Hero section**: Dark background (`#1a1a2e`), white text, company name, tagline, 2-3 sentence intro, CTA button "Get a Free Quote" linking to `contact.html`.

**Gallery section** ("Our Work"):
- `gallery.js` fetches `photos/manifest.json` and renders cards into a `<div id="gallery" class="row">`
- Each card: `col-12 col-md-6 col-lg-4`, contains suburb as title, job#/builder as subtitle, before/after images side-by-side (`col-6` each within the card)
- On mobile the cards stack full-width but before/after remain side-by-side within each card
- Images use `loading="lazy"` for performance
- Graceful fallback message if fetch fails

**`photos/manifest.json`** format:
```json
[
  {
    "jobNo": "1",
    "suburb": "Cranbourne",
    "builder": "Smith Homes",
    "before": "1_Cranbourne_SmithHomes_before.jpg",
    "after": "1_Cranbourne_SmithHomes_after.jpg"
  }
]
```

Adding a new job = drop 2 photos in `photos/` + add 1 entry to `manifest.json`. No HTML changes needed.

### 2. About Us (`about.html`)

Centered content column (`col-lg-8`):
- Company intro paragraph
- "What We Do" — rendering services description
- "Why Choose Us" — bullet points (experience, quality, pricing, free quotes)
- "Service Areas" — list of SE Melbourne suburbs
- CTA button to contact page

### 3. Contact (`contact.html`)

Two-column layout (`col-lg-5` + `col-lg-7`), stacks on mobile:
- **Left**: Phone, email, service area, business hours
- **Right**: Contact form (name, email, phone, message, submit)
- Form uses **Formspree** (`action="https://formspree.io/f/YOUR_ID"`) — no backend needed, swap in real ID when ready

## Styling (`css/custom.css`)

~40 lines total. Bootstrap handles everything else.

| Role | Color |
|------|-------|
| Primary/Accent | `#e77f24` (construction orange) — buttons, links |
| Hero background | `#1a1a2e` (dark navy) |
| Navbar/Footer | `#212529` (Bootstrap dark) |
| Light sections | `#f8f9fa` (Bootstrap light) |

Custom CSS covers: brand color overrides for `.btn-primary`, hero section padding/colors, gallery card hover lift, footer link styling. No web fonts — system font stack for fastest load.

## GitHub Pages Hosting

- Deploy from the **main branch root** (`/`) — no subdirectory or `docs/` folder needed since all files are at the root
- All asset paths are relative (`css/custom.css`, `js/gallery.js`, `photos/manifest.json`) — works out of the box on GitHub Pages
- No build step required — GitHub Pages serves the files as-is
- `fetch('photos/manifest.json')` works on GitHub Pages (served over HTTPS, no CORS issues)
- To enable: repo Settings → Pages → Source: "Deploy from a branch" → Branch: `main` / `/ (root)`

## Implementation Order

1. Initialize git repo and save `PLAN.md` (this plan) to the project root
2. Create folder structure (`css/`, `js/`, `photos/`, `images/`)
3. Build `index.html` — full skeleton with navbar, hero, gallery container, footer
4. Create `css/custom.css` — brand colors and minimal overrides
5. Create `photos/manifest.json` — with sample entries
6. Create `js/gallery.js` — fetch + render logic
7. Create `about.html` — copy layout from index, replace content
8. Create `contact.html` — copy layout from index, add form
9. Test all pages

## Verification

1. Serve locally: `python3 -m http.server 8000` (required — `fetch()` won't work via `file://`)
2. Open `http://localhost:8000` — verify hero section renders, gallery loads photos from manifest
3. Resize browser / use DevTools mobile view — confirm responsive layout at all breakpoints
4. Test navbar hamburger on mobile
5. Navigate all 3 pages, confirm active link highlights correctly
6. Submit contact form (verify Formspree integration or placeholder behavior)
7. Add/remove an entry in `manifest.json` — confirm gallery updates without HTML changes
8. Push to GitHub and enable Pages — verify site loads at `https://<username>.github.io/<repo>/`

## How to Add New Before/After Photos

1. Resize/compress photos to max ~1200px wide (use squoosh.app or similar)
2. Name them following the convention: `jobNo_suburb_builder_before.jpg` and `jobNo_suburb_builder_after.jpg`
3. Drop both files into the `photos/` folder
4. Add an entry to `photos/manifest.json`:
   ```json
   {
     "jobNo": "3",
     "suburb": "Narre Warren",
     "builder": "ABC Homes",
     "before": "3_NarreWarren_ABCHomes_before.jpg",
     "after": "3_NarreWarren_ABCHomes_after.jpg"
   }
   ```
5. Commit and push — the gallery updates automatically
