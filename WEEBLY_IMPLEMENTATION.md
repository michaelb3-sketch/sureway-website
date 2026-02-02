# Weebly Implementation Guide

## Step 1: Update Navigation

In Weebly Editor, reduce navigation to 5 pages:

| Keep | Rename To | Action |
|------|-----------|--------|
| Home | Home | Keep |
| Ministry & Leadership | Ministry & Beliefs | Rename |
| Sermons | Sermons | Keep (add Milk/Meat content) |
| Gospel on that Beat | Bible Bars | Rename |
| Contact Us | Visit Us | Rename, add location info |

**Delete or Hide:** Milk, Meat, Salvation, Prayer, More Resources, Gallery

---

## Step 2: Inject Custom CSS

Go to **Settings → SEO → Header Code** and paste:

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Lora:ital,wght@0,400;0,500;0,600;1,400&family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400&display=swap" rel="stylesheet">
```

Go to **Theme → Edit HTML/CSS → main.less** (or Custom CSS area) and paste the CSS below.

---

## Step 3: Custom CSS

```css
/* ===== SUREWAY CHURCH - NEW VINTAGE THEME ===== */

:root {
  --parchment: #F5F0E6;
  --cream: #FAF7F0;
  --slate: #2C3E50;
  --navy: #1A2A3A;
  --sage: #3A5A40;
  --copper: #B87333;
  --gold: #C9A227;
  --text-primary: #2B2B2B;
  --text-secondary: #4A4A4A;
  --text-muted: #6B6B6B;
  --border: #C4B69C;
}

/* Global */
body {
  background-color: var(--parchment) !important;
  font-family: 'Lora', Georgia, serif !important;
  color: var(--text-primary) !important;
  line-height: 1.7 !important;
}

/* Header */
.wsite-header {
  background-color: var(--slate) !important;
  border-bottom: 3px solid var(--gold) !important;
}

.wsite-logo {
  font-family: 'Playfair Display', Georgia, serif !important;
  color: var(--cream) !important;
  letter-spacing: 0.08em !important;
  text-transform: uppercase !important;
}

/* Navigation */
.wsite-nav-container a,
.wsite-menu-default a {
  font-family: 'Inter', sans-serif !important;
  color: var(--cream) !important;
  font-size: 0.85rem !important;
  font-weight: 500 !important;
  letter-spacing: 0.04em !important;
  text-transform: uppercase !important;
}

.wsite-nav-container a:hover,
.wsite-menu-default a:hover {
  color: var(--gold) !important;
}

/* Headings */
h1, .wsite-content-title {
  font-family: 'Playfair Display', Georgia, serif !important;
  color: var(--slate) !important;
  font-weight: 500 !important;
}

h2, .wsite-headline {
  font-family: 'Playfair Display', Georgia, serif !important;
  color: var(--sage) !important;
}

/* Paragraphs */
.wsite-text, .paragraph {
  font-family: 'Lora', Georgia, serif !important;
  color: var(--text-secondary) !important;
  line-height: 1.8 !important;
}

/* Buttons */
.wsite-button,
.wsite-button-inner {
  font-family: 'Inter', sans-serif !important;
  background-color: var(--sage) !important;
  color: var(--cream) !important;
  text-transform: uppercase !important;
  letter-spacing: 0.06em !important;
  font-weight: 600 !important;
  border-radius: 2px !important;
}

.wsite-button:hover {
  background-color: #2d4832 !important;
}

/* Footer */
.wsite-footer {
  background-color: var(--slate) !important;
  border-top: 3px solid var(--gold) !important;
  color: var(--cream) !important;
}

.wsite-footer a {
  color: var(--gold) !important;
}

/* Sections & Cards */
.wsite-section-bg-color {
  background-color: var(--cream) !important;
}

/* Scripture Bars (use Weebly section with bg) */
.scripture-bar,
.wsite-section-bg-image {
  background-color: var(--navy) !important;
  color: var(--cream) !important;
  text-align: center !important;
  font-family: 'Playfair Display', Georgia, serif !important;
  font-style: italic !important;
}

/* Links */
a {
  color: var(--copper) !important;
}

a:hover {
  color: var(--sage) !important;
}

/* Labels/Accents */
.wsite-subtitle,
.section-label {
  font-family: 'Inter', sans-serif !important;
  font-size: 0.75rem !important;
  font-weight: 600 !important;
  letter-spacing: 0.2em !important;
  text-transform: uppercase !important;
  color: var(--copper) !important;
}
```

---

## Step 4: Update Page Content

### Homepage
1. Add tagline: "Faith. Hope. Love. The sure way."
2. Add anchor scripture: 2 Peter 1:10
3. Update welcome statement with manifesto copy

### Ministry & Beliefs
1. Add four pillars: Relational God, Upside-Down Kingdom, Identity, Relationships
2. Add Prayer section from current Prayer page

### Sermons
1. Create Milk section (link existing 6 pages)
2. Create Meat section
3. Add Countermeasures feature

### Bible Bars
1. Update intro copy
2. Keep existing video embeds

### Visit Us
1. Combine location from current Contact page
2. Add schedule and Zoom info

---

## Quick Reference: Color Codes

| Token | Hex | Use For |
|-------|-----|---------|
| Parchment | #F5F0E6 | Page backgrounds |
| Cream | #FAF7F0 | Cards, sections |
| Slate | #2C3E50 | Header, footer, headings |
| Navy | #1A2A3A | Scripture bars, accents |
| Sage | #3A5A40 | Buttons, secondary headings |
| Copper | #B87333 | Labels, links |
| Gold | #C9A227 | Borders, highlights |
