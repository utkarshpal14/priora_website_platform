import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { staticRouteMeta, getRouteMeta, getAllRoutes, DEFAULT_IMAGE, DEFAULT_KEYWORDS } from '../src/seoData.js'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const distDir = path.resolve(__dirname, '../dist')

function updateTag(html, regex, replacement) {
  if (regex.test(html)) {
    return html.replace(regex, replacement)
  }
  return html
}

function generateRouteHtml(templateHtml, route) {
  const meta = getRouteMeta(route)
  let html = templateHtml

  // Update Title
  html = html.replace(/<title>[\s\S]*?<\/title>/i, `<title>${escapeHtml(meta.title)}<\/title>`)

  // Update Meta Description
  html = updateTag(
    html,
    /<meta\s+name=["']description["']\s+content=["'][^"']*["']\s*\/?>/i,
    `<meta name="description" content="${escapeAttribute(meta.description)}" />`
  )

  // Update Meta Keywords
  html = updateTag(
    html,
    /<meta\s+name=["']keywords["']\s+content=["'][^"']*["']\s*\/?>/i,
    `<meta name="keywords" content="${escapeAttribute(meta.keywords || DEFAULT_KEYWORDS)}" />`
  )

  // Update Canonical
  html = updateTag(
    html,
    /<link\s+rel=["']canonical["']\s+href=["'][^"']*["']\s*\/?>/i,
    `<link rel="canonical" href="${escapeAttribute(meta.canonical)}" />`
  )

  // Update Open Graph tags
  html = updateTag(
    html,
    /<meta\s+property=["']og:title["']\s+content=["'][^"']*["']\s*\/?>/i,
    `<meta property="og:title" content="${escapeAttribute(meta.title)}" />`
  )
  html = updateTag(
    html,
    /<meta\s+property=["']og:description["']\s+content=["'][^"']*["']\s*\/?>/i,
    `<meta property="og:description" content="${escapeAttribute(meta.description)}" />`
  )
  html = updateTag(
    html,
    /<meta\s+property=["']og:url["']\s+content=["'][^"']*["']\s*\/?>/i,
    `<meta property="og:url" content="${escapeAttribute(meta.canonical)}" />`
  )
  html = updateTag(
    html,
    /<meta\s+property=["']og:image["']\s+content=["'][^"']*["']\s*\/?>/i,
    `<meta property="og:image" content="${escapeAttribute(meta.image || DEFAULT_IMAGE)}" />`
  )
  html = updateTag(
    html,
    /<meta\s+property=["']og:image:secure_url["']\s+content=["'][^"']*["']\s*\/?>/i,
    `<meta property="og:image:secure_url" content="${escapeAttribute(meta.image || DEFAULT_IMAGE)}" />`
  )

  // Update Twitter tags
  html = updateTag(
    html,
    /<meta\s+name=["']twitter:title["']\s+content=["'][^"']*["']\s*\/?>/i,
    `<meta name="twitter:title" content="${escapeAttribute(meta.title)}" />`
  )
  html = updateTag(
    html,
    /<meta\s+name=["']twitter:description["']\s+content=["'][^"']*["']\s*\/?>/i,
    `<meta name="twitter:description" content="${escapeAttribute(meta.description)}" />`
  )
  html = updateTag(
    html,
    /<meta\s+name=["']twitter:image["']\s+content=["'][^"']*["']\s*\/?>/i,
    `<meta name="twitter:image" content="${escapeAttribute(meta.image || DEFAULT_IMAGE)}" />`
  )

  // Specific Structured Schema for Blockzu
  if (route === '/games/blockzu') {
    const gameSchema = `
    <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "VideoGame",
      "name": "Blockzu",
      "alternateName": ["bockzur", "blockzur", "Block Blast Online", "8x8 Block Puzzle Game"],
      "description": "Blockzu is an addictive 8x8 block puzzle game and block blast experience. Fit shapes, clear lines, and blast combos.",
      "genre": ["Casual", "Puzzle", "Block Puzzle", "Brain Training"],
      "gamePlatform": ["Web Browser", "Android", "PWA"],
      "applicationCategory": "Game",
      "operatingSystem": "Any",
      "keywords": "block puzzle game, block blast, block block blast, bockzur, 8x8 block puzzle, casual block puzzle",
      "author": {
        "@type": "Organization",
        "name": "PriorApp Games",
        "url": "https://priorapp.co.in"
      },
      "publisher": {
        "@type": "Organization",
        "name": "PriorApp",
        "url": "https://priorapp.co.in"
      },
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD",
        "availability": "https://schema.org/InStock"
      }
    }
    </script>`
    html = html.replace('</head>', `${gameSchema}
  </head>`)
  }

  return html
}

function escapeHtml(str) {
  return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
}

function escapeAttribute(str) {
  return str.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/'/g, '&#39;')
}

function prerender() {
  const indexPath = path.join(distDir, 'index.html')
  if (!fs.existsSync(indexPath)) {
    console.error('Error: dist/index.html not found. Run "vite build" first.')
    process.exit(1)
  }

  const templateHtml = fs.readFileSync(indexPath, 'utf-8')
  const routes = getAllRoutes()

  console.log(`[prerender] Generating static SEO HTML for ${routes.length} routes...`)

  for (const route of routes) {
    const routeHtml = generateRouteHtml(templateHtml, route)

    if (route === '/') {
      fs.writeFileSync(indexPath, routeHtml, 'utf-8')
      console.log(`  ✓ Prerendered ${route} -> dist/index.html`)
    } else {
      // Remove leading slash and create directory
      const cleanRoute = route.replace(/^\/+/, '').replace(/\/+$/, '')
      const targetDir = path.join(distDir, cleanRoute)
      fs.mkdirSync(targetDir, { recursive: true })
      const targetFile = path.join(targetDir, 'index.html')
      fs.writeFileSync(targetFile, routeHtml, 'utf-8')
      console.log(`  ✓ Prerendered ${route} -> dist/${cleanRoute}/index.html`)
    }
  }

  console.log('[prerender] All routes successfully prerendered with dynamic canonicals & unique metadata!')
}

prerender()
