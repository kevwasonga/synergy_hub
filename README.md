
# SYNERGY HUB AFRICA

### Design | Build | Consultancy

![Python](https://img.shields.io/badge/Python-3.10%2B-3776AB?style=for-the-badge&logo=python&logoColor=white)
![Flask](https://img.shields.io/badge/Flask-3.0%2B-000000?style=for-the-badge&logo=flask&logoColor=white)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Responsive](https://img.shields.io/badge/Responsive-Yes-00C853?style=for-the-badge)

---

## Table of Contents

- [Project Overview](#project-overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Installation](#installation)
- [Usage](#usage)
- [Deployment](#deployment)
- [WhatsApp Integration](#whatsapp-integration)
- [Customization](#customization)
- [Browser Support](#browser-support)
- [License](#license)
- [Contact](#contact)

---

## Project Overview

**Synergy Hub Africa** is a premium, single-page corporate website built with **Python Flask**, designed to represent an architectural design, building, and consultancy firm operating across Africa. The website embodies the brand's identity — **DESIGN | BUILD | CONSULTANCY** — through a sleek, dark-themed interface with gold-accented visual elements, smooth animations, and a fully responsive layout.

The site serves as a digital storefront, enabling potential clients to:

- Explore the firm's services (Design, Build, Consultancy)
- View a curated portfolio of past projects
- Learn about the company's mission and values
- Initiate direct contact via phone, email, or WhatsApp
- Submit project inquiries through a contact form

---

## Features

### Visual & UI/UX
- **Dark Architectural Theme** — Premium black/gold colour scheme reflecting high-end design aesthetics
- **Animated Hero Section** — Full-screen hero with floating particles, concentric animated rings, and a live stat counter
- **Scroll Reveal Animations** — Sections fade and slide into view as the user scrolls, with staggered delays
- **CSS Preloader** — Branded loading animation displayed while assets initialise
- **Smooth Navigation** — Fixed navbar with scroll-aware styling, mobile hamburger menu, and active section highlighting
- **Portfolio Hover Overlays** — Project cards reveal detailed descriptions on hover with smooth transitions

### Functional
- **WhatsApp Integration** — Two dedicated WhatsApp contact buttons (0799609700 and 0794980508) via `wa.me` direct links, both as floating side buttons and in-page CTAs
- **Contact Form** — In-page inquiry form with name, email, phone, service selection, and message fields
- **Responsive Design** — Fully adaptive layout across desktop, tablet, and mobile viewports
- **Scroll-to-Top Button** — Appears after scrolling past the fold for convenient navigation
- **SEO Metadata** — Proper meta tags for description and keywords

### Performance
- **Lightweight** — No heavy frameworks; pure CSS3 animations and vanilla JavaScript
- **Fast Load Times** — Minimal dependencies, optimised asset delivery via Flask's static file serving
- **External CDN** — Font Awesome icons and Google Fonts loaded from CDN for performance

---

## Tech Stack

| Category       | Technology                          |
|----------------|-------------------------------------|
| **Backend**    | Python 3.10+, Flask 3.0+            |
| **Frontend**   | HTML5, CSS3, JavaScript (Vanilla)   |
| **Icons**      | Font Awesome 6.5 (CDN)              |
| **Fonts**      | Google Poppins (CDN)                |
| **Template**   | Jinja2 (Flask built-in)             |
| **Animations** | Pure CSS3 keyframes, Intersection Observer API |
| **Version Control** | Git + GitHub                    |
| **Deployment** | Compatible with Render, Railway, Heroku, PythonAnywhere, VPS |

---

## Project Structure

```
synergy_hub/
├── app.py                     # Flask application entry point (routes & server)
├── requirements.txt           # Python package dependencies
├── run.sh                     # Convenience shell script for local execution
├── static/
│   ├── css/
│   │   └── style.css          # Complete stylesheet (~1500 lines)
│   ├── js/
│   │   └── main.js            # Client-side interactivity & animations
│   └── images/                # Reserved for future media assets
├── templates/
│   ├── base.html              # Base layout: nav, footer, preloader, WhatsApp widgets
│   └── index.html             # Single-page content: all sections (extends base)
├── DESIGN SERVICES FEE NOTE.pdf   # Reference fee proposal document
├── Synergy_Hub_Africa_Website_Code.pdf  # Original website specification
└── .git/                      # Git repository data
```

### File Descriptions

| File | Purpose |
|------|---------|
| `app.py` | Defines Flask routes (`/`, `/about`, `/services`, `/portfolio`, `/contact`, `/send_message`) and starts the development server |
| `templates/base.html` | Root template containing the `<head>`, navigation bar, footer, floating WhatsApp buttons, scroll-to-top button, preloader, and all external CDN links |
| `templates/index.html` | Extends `base.html` and implements all page sections: Hero, About, Services, Why Us, Portfolio, and Contact |
| `static/css/style.css` | Comprehensive stylesheet covering layout, typography, animations, responsiveness, and component-level styling |
| `static/js/main.js` | Handles preloader dismissal, scroll-based navbar styling, mobile menu toggle, Intersection Observer for reveal animations, particle generation, counter animation, form submission feedback, and active nav highlighting |

---

## Installation

### Prerequisites

- **Python 3.10 or higher**
- **pip** (Python package manager)
- **Git** (for version control)

### Local Setup

```bash
# 1. Clone the repository
git clone https://github.com/kevwasonga/synergy_hub.git
cd synergy_hub

# 2. Create a virtual environment (recommended)
python3 -m venv venv

# 3. Activate the virtual environment
# Linux / macOS:
source venv/bin/activate
# Windows:
# venv\Scripts\activate

# 4. Install dependencies
pip install -r requirements.txt

# 5. Run the application
python app.py
```

The server will start at **http://localhost:5000**.

---

## Usage

### Development Server

```bash
python app.py
```

- Default host: `0.0.0.0` (accessible on your network)
- Default port: `5000`
- Debug mode is enabled for hot-reloading during development

### Production Server

For production, use a WSGI server such as **Gunicorn**:

```bash
pip install gunicorn
gunicorn -w 4 -b 0.0.0.0:8000 app:app
```

Or with **Waitress** (Windows-compatible):

```bash
pip install waitress
waitress-serve --port=8000 app:app
```

---

## Deployment

### Deploy to Render

1. Push the repository to GitHub
2. Create a new **Web Service** on [Render](https://render.com)
3. Connect your GitHub repository
4. Set:
   - **Build Command**: `pip install -r requirements.txt`
   - **Start Command**: `gunicorn -w 4 -b 0.0.0.0:8000 app:app`

### Deploy to PythonAnywhere

1. Upload the project files via the PythonAnywhere file manager or clone from GitHub
2. Set up a virtual environment and install dependencies
3. Configure a **Web app** with WSGI pointing to `app.py`

### Deploy to Railway

1. Create a new project on [Railway](https://railway.com)
2. Connect your GitHub repository
3. Railway auto-detects Python/Flask projects; no additional configuration needed

---

## WhatsApp Integration

The website provides **two WhatsApp contact channels** that link directly to chat via `wa.me` URLs:

| Contact     | Number        | WhatsApp Link                                                   |
|-------------|---------------|-----------------------------------------------------------------|
| Ezekiel     | `0799609700`  | [Chat on WhatsApp](https://wa.me/254799609700)                  |
| Odera       | `0794980508`  | [Chat on WhatsApp](https://wa.me/254794980508)                  |

### Where WhatsApp Buttons Appear

1. **Floating Buttons** (bottom-right corner, every page)
   - Fixed-position green buttons that persist across scroll
   - Each button shows a tooltip with the contact name on hover
2. **Navigation CTA** (top-right of navbar)
   - "WhatsApp" button styled prominently in the nav bar
3. **Contact Section** (in-page)
   - Two styled WhatsApp buttons alongside phone and email details
4. **Hero Section** (above the fold)
   - "WhatsApp Us" CTA button as a primary action

All WhatsApp links include a pre-filled message: *"Hello Synergy Hub Africa! I'd like to inquire about your services."*

---

## Customization

### Changing Brand Colours

Edit the CSS custom properties in `static/css/style.css`:

```css
:root {
  --primary: #c8a96e;        /* Gold accent */
  --primary-dark: #a8883e;   /* Darker gold */
  --primary-light: #e8d5a8;  /* Lighter gold */
  --dark: #0a0a0a;           /* Background */
  --dark-2: #111111;
  --dark-3: #1a1a1a;
  --dark-4: #222222;
  --text: #f5f5f5;
  --text-muted: #999999;
}
```

### Modifying Content

- **Text content** — Edit the Jinja2 templates in `templates/index.html`
- **Portfolio items** — Find the `.portfolio-grid` section and add/remove cards with your project data
- **Services** — Update the `.services-grid` section in `index.html`
- **Contact details** — Update phone numbers, email, and WhatsApp links in both `templates/base.html` and `templates/index.html`

### Adding New Sections

1. Create the section HTML in `templates/index.html`
2. Add the corresponding CSS in `static/css/style.css`
3. If the section should appear in the navigation, add a link in `templates/base.html`

### Adding Images

Place image files in `static/images/` and reference them in templates:

```html
<img src="{{ url_for('static', filename='images/your-image.jpg') }}" alt="...">
```

---

## Browser Support

| Browser | Support |
|---------|---------|
| Chrome  | 90+     |
| Firefox | 88+     |
| Safari  | 14+     |
| Edge    | 90+     |
| Opera   | 76+     |
| Mobile Safari | 14+ |
| Android Chrome | 90+ |

The site uses CSS Grid, Flexbox, CSS Custom Properties, and the Intersection Observer API — all widely supported in modern browsers.

---

## Roadmap

- [ ] Backend email delivery for the contact form (SMTP integration)
- [ ] Blog / news section for company updates
- [ ] Image gallery with lightbox for portfolio
- [ ] Client testimonials carousel
- [ ] Multi-language support (English / Swahili)
- [ ] Dark/light theme toggle
- [ ] Admin dashboard for managing portfolio items

---

## Contributing

Contributions are welcome. Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/your-feature`)
3. Commit your changes (`git commit -m 'Add your feature'`)
4. Push to the branch (`git push origin feature/your-feature`)
5. Open a Pull Request

---

## License

This project is proprietary software owned by **Synergy Hub Africa**. All rights reserved.

---

## Contact

**Synergy Hub Africa**  
Design | Build | Consultancy

| Method        | Details                                |
|---------------|----------------------------------------|
| **Phone**     | +254 799 609 700 / +254 794 980 508    |
| **Email**     | [synergyhubafrica@gmail.com](mailto:synergyhubafrica@gmail.com) |
| **WhatsApp**  | [0799609700](https://wa.me/254799609700) / [0794980508](https://wa.me/254794980508) |

---

<p align="center">
  <strong>Building Dreams, Shaping Futures</strong><br>
  &copy; 2026 Synergy Hub Africa. All rights reserved.
</p>
