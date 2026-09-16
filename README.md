# Synergy Hub Africa

### Design · Build · Consultancy

A premium, single-page corporate website for an architectural design, building, and consultancy firm operating across Africa.

---

## Tech Stack

| Category | Technology |
|----------|------------|
| **Framework** | React 19 + Vite 8 |
| **Styling** | Vanilla CSS3 (dark/gold theme) |
| **Icons** | Google Material Symbols (subsetted, self-hosted) |
| **Fonts** | Inter + JetBrains Mono (Google Fonts) |
| **Routing** | React Router v7 |
| **Hosting** | Vercel |

---

## Project Structure

```
synergy_hub/
├── index.html                    # Entry point, Material Symbol font subset
├── package.json                  # npm scripts and dependencies
├── vite.config.js                # Vite + React plugin config
├── vercel.json                   # Vercel deployment config
├── public/
│   └── images/                   # Portfolio & hero images (served as-is)
├── src/
│   ├── main.jsx                  # React entry, BrowserRouter
│   ├── App.jsx                   # Routes + preloader/scroll-to-top
│   ├── assets/
│   │   └── logo.png              # Company logo
│   ├── components/
│   │   ├── Navbar.jsx            # Fixed navbar, mobile drawer, WhatsApp dropdown
│   │   ├── Footer.jsx            # Footer with contact/social
│   │   ├── FloatingWhatsApp.jsx  # Floating WhatsApp FAB
│   │   ├── Preloader.jsx         # Branded loading animation
│   │   └── ScrollTop.jsx         # Scroll-to-top button
│   ├── hooks/
│   │   ├── useReveal.js          # IntersectionObserver scroll reveal
│   │   ├── useCounters.js        # Animated stat counters
│   │   └── useParticles.js       # Hero particle effect
│   ├── pages/
│   │   ├── HomePage.jsx          # Hero, About, Services, Portfolio, Contact
│   │   ├── AboutPage.jsx         # Company story, team, values
│   │   └── ServicesPage.jsx      # Service detail cards
│   └── styles/
│       └── style.css             # All styles (~1700 lines)
└── images/                       # Raw source images (gitignored)
```

---

## Getting Started

### Prerequisites

- Node.js 18+
- npm

### Local Setup

```bash
git clone https://github.com/kevwasonga/synergy_hub.git
cd synergy_hub
npm install
npm run dev
```

The dev server starts at **http://localhost:1112/**.

### Production Build

```bash
npm run build    # outputs to dist/
npm run preview  # preview the build locally
```

---

## Deployment

### Vercel

Push to `main` — Vercel auto-deploys using the config in `vercel.json`:

```json
{
  "buildCommand": "npm run build",
  "installCommand": "npm install",
  "outputDirectory": "dist"
}
```

---

## Key Features

- **Dark/gold premium theme** — `#0a0a0a` background, `#c8a96e` gold accents
- **WhatsApp integration** — Two numbers (+254 737 654264, +254 794 980 508) via dropdown pickers across navbar, hero, floating FAB, footer, and contact section
- **Scroll reveal animations** — Sections animate into view on scroll via IntersectionObserver
- **Animated stat counters** — Hero stats count up when visible
- **Floating particles** — Animated particle effect in the hero
- **Contact form with fallback** — Detects blocked mail clients and offers WhatsApp as fallback
- **Portfolio with lazy loading** — Images probe for file existence before displaying
- **Responsive** — Optimized for mobile (≤600px), tablet (≤768px), and desktop (≥1024px)
- **Skip-to-content** — Accessibility link for keyboard navigation
- **Preloader** — Branded loading animation (1.2s timeout)

---

## Contact

| Method | Details |
|--------|---------|
| **Phone** | +254 794 980 508 |
| **WhatsApp** | +254 737 654264 |
| **Email** | [synergyhubafrica01@gmail.com](mailto:synergyhubafrica01@gmail.com) |

---

**Building Dreams, Shaping Futures**

© 2026 Synergy Hub Africa. All rights reserved.
