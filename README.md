# 👨🏻‍💻 Eduard Ferré — Personal Portfolio

<div align="center">

[![Portfolio Preview](https://github.com/user-attachments/assets/77c9a0a7-1ab3-498a-b484-3ef5dafe395a)](https://eduardferre.dev)

[![Live Site](https://img.shields.io/badge/Live_Site-eduardferre.dev-FF5D01?style=flat&logo=astro&logoColor=white)](https://eduardferre.dev)
![Astro](https://img.shields.io/badge/Astro-FF5D01?style=flat&logo=astro&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS_v4-06B6D4?style=flat&logo=tailwind-css&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat&logo=typescript&logoColor=white)
![Vercel](https://img.shields.io/badge/Deployed_on_Vercel-000000?style=flat&logo=vercel&logoColor=white)

</div>

---

## 📌 Overview

Personal portfolio built with **Astro**, **Tailwind CSS v4**, and **TypeScript**. Showcases professional experience, projects, and background — available in **English** and **Spanish**, with full support for **light/dark/system** themes.

---

## ✨ Features

- 🌐 **Internationalization (i18n)** — English & Spanish via Astro's built-in i18n routing
- 🎨 **Light / Dark / System theme** — persisted preference with smooth toggle
- ⚡ **Static site generation** — zero JS overhead, blazing-fast loads
- 📈 **Analytics & Speed Insights** — via Vercel's official integrations
- 🤖 **robots.txt** — auto-generated with `astro-robots-txt`
- 📱 **Fully responsive** — optimized for all screen sizes
- ♿ **Accessible** — semantic HTML and keyboard-navigable UI
- 🔡 **Onest Variable Font** — via `@fontsource-variable/onest`

---

## 🛠️ Tech Stack

| Layer      | Technology                                                    |
| ---------- | ------------------------------------------------------------- |
| Framework  | [Astro 5](https://astro.build/)                               |
| Styling    | [Tailwind CSS v4](https://tailwindcss.com/) (via Vite plugin) |
| Language   | TypeScript                                                    |
| Font       | Onest Variable (`@fontsource-variable/onest`)                 |
| Deployment | [Vercel](https://vercel.com/)                                 |
| Analytics  | `@vercel/analytics` + `@vercel/speed-insights`                |
| SEO        | `astro-robots-txt`                                            |

---

## 📁 Project Structure

```
portfolio-eduardferre/
├── public/                  # Static assets (favicon, OG image, etc.)
├── src/
│   ├── components/          # Astro UI components
│   │   ├── AboutMe.astro
│   │   ├── Badge.astro
│   │   ├── Experience.astro
│   │   ├── ExperienceItem.astro
│   │   ├── Footer.astro
│   │   ├── Header.astro
│   │   ├── Hero.astro
│   │   ├── LinkButton.astro
│   │   ├── LinkInLine.astro
│   │   ├── ProjectItem.astro
│   │   ├── Projects.astro
│   │   ├── SectionContainer.astro
│   │   ├── SocialBadge.astro
│   │   ├── TechBadge.astro
│   │   └── ThemeToggle.astro
│   ├── i18n/
│   │   ├── ui.ts            # Translation strings (en / es)
│   │   └── utils.ts         # `useTranslations` helper
│   ├── icons/               # SVG icon components
│   ├── layouts/
│   │   └── Layout.astro     # Base HTML layout with SEO meta tags
│   ├── pages/
│   │   ├── index.astro      # English (default) homepage
│   │   ├── es/
│   │   │   └── index.astro  # Spanish homepage
│   │   └── components.astro # Component showcase (dev reference)
│   └── styles/              # Global CSS entry point
├── astro.config.mjs         # Astro configuration (i18n, Vercel adapter, Tailwind)
├── tsconfig.json
└── package.json
```

---

## 🌍 Internationalization

The site uses Astro's built-in i18n with:

- **Default locale**: `en` (no URL prefix → `eduardferre.dev/`)
- **Additional locale**: `es` (prefixed → `eduardferre.dev/es/`)

All strings are defined in [`src/i18n/ui.ts`](./src/i18n/ui.ts) and consumed via the `useTranslations(lang)` helper from [`src/i18n/utils.ts`](./src/i18n/utils.ts).

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) ≥ 18  
- [Bun](https://bun.sh/) *(optional, used as package manager lock)*

### Installation

```bash
# Clone the repository
git clone https://github.com/eduardferre/portfolio-eduardferre.git
cd portfolio-eduardferre

# Install dependencies
npm install
```

### Development

```bash
npm run dev
# → http://localhost:4321
```

### Build & Preview

```bash
npm run build    # Type-check + build static output
npm run preview  # Preview the production build locally
```

---

## 📜 Available Scripts

| Script            | Description                         |
| ----------------- | ----------------------------------- |
| `npm run dev`     | Start local dev server              |
| `npm run build`   | Type-check and build for production |
| `npm run preview` | Preview production build            |
| `npm run astro`   | Run Astro CLI commands              |

---

## 📦 Deployment

The site is deployed on **Vercel** via the `@astrojs/vercel` adapter with **static output** mode. Any push to `main` triggers an automatic deployment.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/eduardferre/portfolio-eduardferre)

---

## 📄 License

This project is open source and available for inspiration. If you use significant portions of this code, a credit back is appreciated.

---

<div align="center">

Made with ❤️ by [Eduard Ferré](https://eduardferre.dev) · Deployed on [Vercel](https://vercel.com)

</div>
