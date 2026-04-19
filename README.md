# CV Library — Professional CV Templates for Afghanistan's Job Market

A free, open-source collection of 60+ professional CV templates based on real Afghan job postings from ACBAR. Built for Afghan job seekers targeting NGO, INGO, private sector, and government roles. Deploys on GitHub Pages — no backend required.

**Live site:** [github/ewazfakor](https://github.com/ewazfakor)

---

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Project Structure](#project-structure)
- [Sectors](#sectors)
- [Getting Started](#getting-started)
- [Adding Your Own CVs](#adding-your-own-cvs)
- [Deploying to GitHub Pages](#deploying-to-github-pages)
- [Customization](#customization)
- [Technologies Used](#technologies-used)
- [License](#license)

---

## Overview

This project provides a static website hosting professional CV templates across 10 key job sectors in Afghanistan. Job titles are sourced from real ACBAR postings and include mid-level roles such as:

- **Education**: Education Officer, District Teacher Educator, Youth Educator
- **Medical & Health**: Vaccinator, Midwife, Nurse, PSS Counselor
- **Data & MEAL**: MEAL Officer, M&E Officer, Data Management Officer
- **IT**: IT Network Officer, MIS Officer, CLIC Operator
- **Protection**: Protection Officer, Social Worker, MHPSS Counsellor
- **Logistics**: Procurement & Logistics Officer, Supply Chain Specialist
- **WASH**: WASH Engineer, Hygiene Promoter, Livelihoods Assistant

All CVs are tailored for the Afghan job market with sections for Dari/Pashto/English language skills and Afghanistan-specific experience.

---

## Features

- **60+ CV Templates** across 10 professional sectors
- **Real Afghan job titles** sourced from ACBAR job postings
- **Category browsing** — click any sector to see 6 tailored CV cards
- **One-click downloads** — each CV card has a download button for instant PDF access
- **Search functionality** — find CVs by job title, sector, or keyword
- **Responsive design** — works on desktop, tablet, and mobile
- **Animated counters** and scroll-triggered fade-in effects
- **Mobile hamburger menu** for easy navigation
- **Zero backend required** — fully static, deploys anywhere
- **SEO-ready** with proper meta tags and semantic HTML

---

## Project Structure

```
cv-library/
├── index.html              # Homepage / Main Landing Page
├── category.html           # Category detail page (shows 6 CV cards with download buttons)
├── css/
│   └── style.css           # All styling
├── js/
│   ├── script.js           # Homepage interactivity (search, animations, mobile menu)
│   └── category.js         # Category page interactivity (CV card rendering, downloads)
├── cvs/
│   ├── category1/          # Education
│   │   ├── cv_01.pdf
│   │   ├── cv_02.pdf
│   │   ├── cv_03.pdf
│   │   ├── cv_04.pdf
│   │   ├── cv_05.pdf
│   │   └── cv_06.pdf
│   ├── category2/          # Business, Finance & Administration
│   ├── category3/          # Engineering & Technical
│   ├── category4/          # Medical & Health
│   ├── category5/          # Data Management & MEAL
│   ├── category6/          # Computer Science & IT
│   ├── category7/          # Humanitarian & Program Management
│   ├── category8/          # Logistics & Supply Chain
│   ├── category9/          # Protection & Social Services
│   └── category10/         # WASH & Livelihoods
└── README.md               # This file
```

---

## Categories

| Sector Folder | Name | CV Count | Sample Roles |
|--------------|------|----------|-------------|
| `cvs/category1/` | Education | 6 | Education Officer, District Teacher Educator, Youth Educator |
| `cvs/category2/` | Business, Finance & Administration | 6 | Admin/Finance Assistant, HR Officer, Data Entry Assistant |
| `cvs/category3/` | Engineering & Technical | 6 | WASH Engineer, HVAC Technician, Site Engineer |
| `cvs/category4/` | Medical & Health | 6 | Vaccinator, Midwife, Nurse, PSS Counselor |
| `cvs/category5/` | Data Management & MEAL | 6 | MEAL Officer, M&E Officer, Data Management Officer |
| `cvs/category6/` | Computer Science & IT | 6 | IT Network Officer, MIS Officer, CLIC Operator |
| `cvs/category7/` | Humanitarian & Program Management | 6 | Project Officer, Field Officer, ECCD Officer |
| `cvs/category8/` | Logistics & Supply Chain | 6 | Procurement/Logistics Officer, Supply Chain Specialist |
| `cvs/category9/` | Protection & Social Services | 6 | Protection Officer, Social Worker, MHPSS Counsellor |
| `cvs/category10/` | WASH & Livelihoods | 6 | WASH Engineer, Hygiene Promoter, Livelihoods Assistant |

---

## Getting Started

### 1. Clone or Download

```bash
git clone https://github.com/yourusername/cv-library.git
cd cv-library
```

Or download the ZIP and extract it.

### 2. Open Locally

Simply open `index.html` in your web browser. No server required.

Alternatively, use a local development server:

```bash
# Using Python 3
python -m http.server 8000

# Using Node.js (npx)
npx serve .

# Using VS Code Live Server extension
# Right-click index.html > "Open with Live Server"
```

Then visit `http://localhost:8000` in your browser.

---

## How It Works

1. **Homepage** (`index.html`) — Browse 10 category cards. Each card shows the category name, description, and number of CVs available.
2. **Category Page** (`category.html?cat=categoryN`) — Click any category card to see 6 individual CV templates with descriptive job titles.
3. **Download** — Click the green **Download** button on any CV card to save the PDF directly to your device.

The entire flow is client-side — no server, no database, no API calls. Just static HTML, CSS, and JavaScript.

---

## Adding Your Own CVs

### Option A: Replace Demo PDFs

1. Navigate to the relevant category folder under `cvs/`
2. Replace the demo PDF files with your own CV templates
3. Keep the same naming convention: `cv_01.pdf`, `cv_02.pdf`, etc.

### Option B: Add More CVs to an Existing Category

1. Open `js/script.js`
2. Find the `categories` array and update the `count` value for your category
3. Add your new PDF files to the corresponding folder

Example — adding 2 more CVs to Category 1:

```javascript
{
  id: 1,
  title: 'Education',
  description: 'Teaching and educational management professionals',
  count: 8,        // Changed from 6 to 8
  folder: 'category1',
}
```

Then add `cv_07.pdf` and `cv_08.pdf` to `cvs/category1/`.

### Option C: Add a New Category

1. Create a new folder: `cvs/category11/`
2. Add your PDF files inside it
3. Add a new entry to the `categories` array in `js/script.js`

```javascript
{
  id: 11,
  title: 'Your New Category',
  description: 'Brief description here',
  count: 6,
  folder: 'category11',
}
```

---

## Deploying to GitHub Pages

### Step 1: Push to GitHub

```bash
git init
git add .
git commit -m "Initial commit - CV Library"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/cv-library.git
git push -u origin main
```

### Step 2: Enable GitHub Pages

1. Go to your repository on GitHub
2. Navigate to **Settings > Pages**
3. Under **Source**, select **Deploy from a branch**
4. Select the `main` branch and `/ (root)` folder
5. Click **Save**

### Step 3: Access Your Site

Your site will be live at:
```
https://YOUR_USERNAME.github.io/cv-library/
```

It may take 1-2 minutes for the first deployment.

---

## Customization

### Change Colors

Edit `css/style.css` and modify the CSS variables at the top:

```css
:root {
  --color-dark-grey: #36454F;
  --color-muted-blue: #7393B3;
  --color-warm-grey: #E5E4E2;
  --color-sage-green: #8A9A5B;
  --color-sage-green-hover: #7A8A4B;
  --color-light-sage: #F5F7F0;
  --color-text-grey: #6B7280;
  --color-white: #FFFFFF;
}
```

### Change Fonts

The project uses Google Fonts (Plus Jakarta Sans for headings, Inter for body text). To change:

1. Update the `<link>` tag in `index.html` (in the `<head>`)
2. Update `--font-heading` and `--font-body` in `css/style.css`

### Update Contact Info / Footer

Edit the `<footer>` section in `index.html`.

---

## Technologies Used

| Technology | Purpose |
|-----------|---------|
| HTML5 | Semantic page structure (homepage + category detail page) |
| CSS3 | Styling, animations, responsive grid |
| Vanilla JavaScript | Search, animations, mobile menu, CV card rendering |
| Google Fonts | Plus Jakarta Sans & Inter typography |
| SVG (inline) | Icons (no icon library dependency) |
| GitHub Pages | Free static hosting |

No frameworks, no build tools, no npm packages — just clean, modern web standards.

---

## License

This project is open source and available under the [MIT License](LICENSE).

The CV templates are provided as **demo/placeholder files** for educational and structural purposes. Replace them with your own professionally designed CV templates before publishing.

---

## Credits

- Designed for the Afghan job market
- Fonts by [Google Fonts](https://fonts.google.com/)
- Built for deployment on [GitHub Pages](https://pages.github.com/)

---

**Questions or suggestions?** Open an issue on GitHub or contribute a pull request.
