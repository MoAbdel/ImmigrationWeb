# SoCal Immigration Services

A professional, bilingual (English/Arabic) multi-page website for immigration services with detailed service pages.

## Features

- **Multi-Page Architecture**: Dedicated pages for each service category with comprehensive information
- **Bilingual Support**: Toggle between English and Arabic with full RTL support across all pages
- **Responsive Design**: Mobile-friendly layout that works on all devices
- **Modern Tech Stack**: Built with React, React Router, Tailwind CSS, and Lucide icons
- **Professional Design**: Clean, trustworthy aesthetic inspired by leading immigration websites
- **Detailed Service Information**: Each service page includes processing times, eligibility, and detailed descriptions
- **Interactive Navigation**: Clickable service cards that navigate to dedicated service pages

## Tech Stack

- React 18 (Functional Components with Hooks)
- React Router DOM (Client-side routing)
- Vite (Build tool)
- Tailwind CSS (Styling)
- Lucide React (Icons)
- Google Fonts (Merriweather & Inter)

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/moabdel/immigrationweb.git
cd immigrationweb
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## Build for Production

```bash
npm run build
```

The production-ready files will be in the `dist` folder.

## Preview Production Build

```bash
npm run preview
```

## Pages & Structure

### Home Page (`/`)
1. **Navigation Bar**: Logo, menu links, and language toggle
2. **Hero Section**: Compelling headline with call-to-action
3. **Services Section**: Four clickable service category cards
4. **Why Choose Us**: Three key value propositions
5. **Footer**: Contact information and social media links

### Service Pages
Each service page includes detailed information with hero section, service descriptions, process overview, and CTAs:

1. **Visas & Family** (`/services/visas-family`)
   - Family Petitions
   - K1 Fiancé Visa
   - B1-B2 Visas & Extensions
   - H-1B Work Visa

2. **Status & Citizenship** (`/services/status-citizenship`)
   - Citizenship (Naturalization)
   - Adjustment of Status
   - Green Card Replacement/Renewal
   - Asylum / Refugee Status

3. **Legal Documents** (`/services/legal-documents`)
   - Affidavit of Support
   - Work Authorization (EAD)
   - Travel Document (Advance Parole)
   - SSI/SSA/Disability Services

4. **Professional Services** (`/services/professional-services`)
   - Translation Services
   - Notary Public Services
   - Divorce Filing Services

## Customization

- Update contact information in `src/App.jsx` (footer section)
- Modify color scheme in `tailwind.config.js`
- Replace hero background image URL in the hero section
- Add your logo by replacing the text logo in the navbar

## License

All rights reserved © 2024 SoCal Immigration Services
