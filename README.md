# Mins Constructions

Website for **Mins Constructions** — licenced rendering specialists serving Melbourne and South East suburbs.

**Live site:** [minsconstructions.com.au](https://minsconstructions.com.au)

## Pages

| Page | URL | Description |
|------|-----|-------------|
| Home | `index.html` | Hero, interactive services, gallery reel, FAQ, service areas |
| Render & Texture | `render-texture-melbourne.html` | Cement rendering, acrylic rendering, texture coatings |
| Moulding | `moulding-melbourne.html` | Decorative mouldings and architectural features |
| Cladding | `cladding-melbourne.html` | External cladding systems and Hebel rendering |
| About Us | `about.html` | Company story, feature cards, project photos, reviews |
| Contact | `contact.html` | Contact form, phone, email, business hours |

## Tech Stack

- HTML5, CSS3, vanilla JavaScript
- Bootstrap 5.3.8 (CDN)
- Instrument Serif (Google Fonts) for display headings
- No build tools or frameworks
- GitHub Pages hosting

## Local Development

```bash
python3 -m http.server 8000
```

Then open [localhost:8000](http://localhost:8000).

## Project Structure

```
minscons/
├── index.html                          # Homepage
├── about.html                          # About us
├── contact.html                        # Contact form
├── render-texture-melbourne.html       # Render & Texture service page
├── moulding-melbourne.html             # Moulding service page
├── cladding-melbourne.html             # Cladding service page
├── css/custom.css                      # All custom styles
├── js/gallery.js                       # Gallery reel + lightbox modal
├── images/
│   ├── logo.svg                        # M lettermark logo
│   ├── favicon-32.png                  # 32x32 favicon
│   └── favicon-16.png                  # 16x16 favicon
├── photos/
│   ├── gallery/                        # Project photos + manifest.json
│   └── site/                           # Site images (hero photo)
├── robots.txt                          # Crawler config
├── sitemap.xml                         # XML sitemap (6 pages)
├── PLAN.md                             # Project plan
├── STYLE.md                            # Design system & conventions
├── DEPLOYMENT.md                       # GitHub Pages setup guide
└── LICENSE                             # All Rights Reserved
```

## Adding Gallery Photos

1. Drop the image into `photos/gallery/`
2. Add an entry to `photos/gallery/manifest.json`:
   ```json
   {"file": "photo-name.jpg", "location": "Suburb"}
   ```
3. Commit and push

## SEO

- Schema.org structured data: LocalBusiness, WebSite, BreadcrumbList, FAQPage, Service, Review
- Keyword-optimised titles, meta descriptions, and Open Graph tags on all pages
- FAQ sections with matching FAQPage schema for featured snippet eligibility
- 22 suburbs listed in service areas and LocalBusiness areaServed
- Sitemap and robots.txt configured

## License

All Rights Reserved. See [LICENSE](LICENSE) for details.
