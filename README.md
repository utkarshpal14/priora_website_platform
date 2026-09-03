# PriorApp Website Platform

Phase 1 frontend foundation for PriorApp, the digital product ecosystem at `priorapp.co.in`.

## Run locally

```bash
npm install
npm run dev
```

Build for production with `npm run build` and preview with `npm run preview`.

## Folder structure

```text
.
├── PRD.md
├── index.html
├── package.json
├── vite.config.js
└── src
    ├── App.jsx       # routes, shared components, and page compositions
    ├── data.js       # local product/game records for v1
    ├── main.jsx      # React entry point and router bootstrap
    └── styles.css    # responsive visual system
```

## Component architecture

`App.jsx` contains the shared UI primitives and page-level compositions: `Header`, `Footer`, `Layout`, `PlatformLinks`, `ProductCard`, `DirectoryHeader`, `Listing`, `Detail`, `Availability`, `ResourcePage`, and `InfoPage`. Product and game pages are driven by local records in `data.js`, making future catalog expansion a data change rather than a layout rewrite.

Priora is the first product record and is used as the homepage flagship feature. Platform buttons are generated from each record's available platforms and show Google Play/Web actions for Priora.

Priora's Web/PWA destination is `https://priorapp.netlify.app/`. Users can open it in a browser and use the browser's install/add-to-home-screen flow, including on iPhone where supported.

## Routing architecture

React Router provides:

- `/` homepage with Priora feature and ecosystem previews
- `/products` and `/products/:slug`
- `/games` and `/games/:slug`
- `/about`
- `/support`
- `/privacy-policy`
- `/terms`
- `/support/:slug`, `/privacy/:slug`, `/terms/:slug` reusable product/game resource routes

Backend, admin, analytics, blog, and FastAPI work are intentionally outside Phase 1.

## Screenshots / mockups

The homepage is a compact directory entry point. Priora detail pages use the supplied six-screen gallery, concrete feature list, install/open actions, availability matrix, and product-specific resource links. Run `npm run dev`, then capture `/`, `/products`, and `/products/priora` at desktop (1440px) and mobile (390px) widths for review.
