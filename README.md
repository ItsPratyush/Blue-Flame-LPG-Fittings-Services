# Blue Flame LPG Fittings and Services

A professional corporate website for Blue Flame LPG Fittings and Services — a specialized LPG equipment trading and sourcing company based in Nashik, Maharashtra, India, serving East African markets.

## Technology Stack

- **React.js** — Component-based UI
- **Vite** — Fast build tool and development server
- **Tailwind CSS v4** — Utility-first styling
- **Lucide React** — Icon library

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) v18 or higher
- npm v9 or higher

### Installation

```bash
npm install
```

### Development Server

```bash
npm run dev
```

This will start a local development server, typically at `http://localhost:5173/`.

### Production Build

```bash
npm run build
```

The production-ready files will be generated in the `dist/` directory.

### Preview Production Build

```bash
npm run preview
```

## GitHub Pages Deployment

This project is configured for automatic deployment to GitHub Pages using GitHub Actions.

### Setup

1. Push this repository to GitHub.
2. Go to **Settings** → **Pages** in your GitHub repository.
3. Under **Source**, select **GitHub Actions**.
4. Push to the `main` branch to trigger automatic deployment.

The GitHub Actions workflow is located at `.github/workflows/deploy.yml`.

### Manual Deployment

If you prefer to deploy manually:

```bash
npm run build
```

Then upload the contents of the `dist/` folder to your GitHub Pages hosting.

### Base Path Configuration

The Vite `base` path is configured in `vite.config.js`. Update it to match your repository name:

```js
// vite.config.js
export default defineConfig({
  base: '/your-repository-name/',
})
```

## Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Navbar.jsx
│   ├── Hero.jsx
│   ├── SectionHeading.jsx
│   ├── ProductCard.jsx
│   ├── ProductModal.jsx
│   ├── ApplicationCard.jsx
│   ├── CapabilityTimeline.jsx
│   ├── ContactForm.jsx
│   ├── BackToTop.jsx
│   └── Footer.jsx
├── sections/            # Page sections
│   ├── AboutSection.jsx
│   ├── ProductsSection.jsx
│   ├── ApplicationsSection.jsx
│   ├── CapabilitiesSection.jsx
│   ├── MarketsSection.jsx
│   ├── WhyChooseUsSection.jsx
│   └── ContactSection.jsx
├── data/                # Static content and configuration
│   ├── company.js       # Company info, nav links, capabilities
│   ├── products.js      # Product categories and items
│   └── applications.js  # Application areas
├── hooks/
│   └── useScrollReveal.js
├── App.jsx              # Main application component
├── main.jsx             # Entry point
└── index.css            # Global styles and Tailwind config
```

## Configuration

### Company Information

All company details (name, email, phone, location) are centralized in `src/data/company.js`. Update this file to change contact information.

### Product Data

Product categories and items are defined in `src/data/products.js`. Add, remove or modify products by editing this file.

### Images

All image URLs are defined in the data files (`products.js`, `applications.js`). They currently use Unsplash URLs and can be replaced with your own images.

## Contact Form

The contact form is frontend-only. It validates fields and opens the user's default email application with a pre-filled `mailto:` link. No backend server is required.

The email address is configured in `src/data/company.js` under `companyInfo.email`.

## License

© 2026 Blue Flame LPG Fittings and Services. All Rights Reserved.
