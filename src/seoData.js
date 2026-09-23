import { products, games } from './data.js'

export const SITE_URL = 'https://priorapp.co.in'
export const DEFAULT_IMAGE = `${SITE_URL}/priora_icons_assets/priora-logo-horizontal-v5.png`
export const DEFAULT_KEYWORDS = 'Priora, PriorApp, productivity app, task management, daily planning, goal tracking, reminders, schedules, deadlines, focus sessions, pomodoro timer, habit tracker, todo list app, android productivity app, web pwa planner'

export const staticRouteMeta = {
  '/': {
    title: 'PriorApp – Apps, Games & Digital Products',
    description: 'Priora is a productivity app for task management, reminders, goal tracking, schedules, deadlines, focus sessions, and daily planning. Discover Priora and other digital products from PriorApp.',
    canonical: `${SITE_URL}/`,
    image: DEFAULT_IMAGE,
  },
  '/about': {
    title: 'About PriorApp',
    description: 'Learn about PriorApp, our flagship productivity app Priora, and the ecosystem of apps, games and digital products we build.',
    canonical: `${SITE_URL}/about`,
    image: DEFAULT_IMAGE,
  },
  '/products': {
    title: 'Products Directory | PriorApp',
    description: 'Explore Priora and other productivity apps, tools, and digital products from PriorApp.',
    canonical: `${SITE_URL}/products`,
    image: DEFAULT_IMAGE,
  },
  '/products/priora': {
    title: 'Priora – Productivity App for Task Management & Daily Planning | PriorApp',
    description: 'Priora is a productivity app for task management, reminders, goal tracking, schedules, deadlines, focus sessions, and daily planning across Android and Web.',
    canonical: `${SITE_URL}/products/priora`,
    image: `${SITE_URL}/priora_icons_assets/priora-icon-v5-512.png`,
  },
  '/products/focusflow': {
    title: 'Focusflow | PriorApp',
    description: 'A considered space for building focus rituals that last.',
    canonical: `${SITE_URL}/products/focusflow`,
    image: DEFAULT_IMAGE,
  },
  '/games/blockzu': {
    title: 'Blockzu — Casual 8x8 Block Puzzle Game | Play Online Free | PriorApp Games',
    description: 'Play Blockzu free online! A modern, addictive 8x8 block puzzle game. Place shapes, clear full rows and columns, trigger satisfying combos, and beat your high score.',
    canonical: `${SITE_URL}/games/blockzu`,
    image: `${SITE_URL}/blockzu_assets/blockzu-banner.svg`,
  },
  '/support/blockzu': {
    title: 'Blockzu Support & FAQ | PriorApp Games',
    description: 'Find help, game guides, controls, and support for Blockzu block puzzle game.',
    canonical: `${SITE_URL}/support/blockzu`,
    image: `${SITE_URL}/blockzu_assets/blockzu-icon.svg`,
  },
  '/privacy/blockzu': {
    title: 'Blockzu Privacy Policy | PriorApp Games',
    description: 'Read the privacy policy and data protection practices for Blockzu game.',
    canonical: `${SITE_URL}/privacy/blockzu`,
    image: `${SITE_URL}/blockzu_assets/blockzu-icon.svg`,
  },
  '/terms/blockzu': {
    title: 'Blockzu Terms of Service | PriorApp Games',
    description: 'Read the terms of service and conditions for Blockzu game.',
    canonical: `${SITE_URL}/terms/blockzu`,
    image: `${SITE_URL}/blockzu_assets/blockzu-icon.svg`,
  },
  '/games': {
    title: 'Games Directory | PriorApp',
    description: 'Explore playful projects, arcade journeys, and indie games from PriorApp.',
    canonical: `${SITE_URL}/games`,
    image: DEFAULT_IMAGE,
  },
  '/games/orbit-run': {
    title: 'Orbit Run | PriorApp',
    description: 'A small, satisfying arcade journey through impossible orbits.',
    canonical: `${SITE_URL}/games/orbit-run`,
    image: DEFAULT_IMAGE,
  },
  '/games/coming-soon': {
    title: 'Coming Soon – Games | PriorApp',
    description: 'New playful projects and games are taking shape at PriorApp.',
    canonical: `${SITE_URL}/games/coming-soon`,
    image: DEFAULT_IMAGE,
  },
  '/faq': {
    title: 'Frequently Asked Questions - Priora & PriorApp',
    description: 'Find answers to frequently asked questions about Priora task management, reminders, focus sessions, and PriorApp.',
    canonical: `${SITE_URL}/faq`,
    image: DEFAULT_IMAGE,
  },
  '/support': {
    title: 'Support Center | PriorApp',
    description: 'Find help, documentation, and support resources for PriorApp products or contact our team.',
    canonical: `${SITE_URL}/support`,
    image: DEFAULT_IMAGE,
  },
  '/support/priora': {
    title: 'Priora Support & FAQ | PriorApp',
    description: 'Get help, report an issue, or send feedback about Priora productivity app.',
    canonical: `${SITE_URL}/support/priora`,
    image: `${SITE_URL}/priora_icons_assets/priora-icon-v5-512.png`,
  },
  '/privacy-policy': {
    title: 'Privacy Policy - PriorApp',
    description: 'Read the PriorApp privacy policy and data protection principles across our digital products.',
    canonical: `${SITE_URL}/privacy-policy`,
    image: DEFAULT_IMAGE,
  },
  '/privacy/priora': {
    title: 'Priora Privacy Policy | PriorApp',
    description: 'Read the comprehensive privacy policy and data handling practices for Priora productivity platform.',
    canonical: `${SITE_URL}/privacy/priora`,
    image: `${SITE_URL}/priora_icons_assets/priora-icon-v5-512.png`,
  },
  '/terms': {
    title: 'Terms of Service - PriorApp',
    description: 'Read the terms of service and conditions for PriorApp products and digital services.',
    canonical: `${SITE_URL}/terms`,
    image: DEFAULT_IMAGE,
  },
  '/terms/priora': {
    title: 'Priora Terms of Service | PriorApp',
    description: 'Read the terms of service for Priora productivity platform.',
    canonical: `${SITE_URL}/terms/priora`,
    image: `${SITE_URL}/priora_icons_assets/priora-icon-v5-512.png`,
  },
}

export function normalizePathname(pathname = '/') {
  if (!pathname || pathname === '/') return '/'
  return pathname.replace(/\/+$/, '')
}

export function getCanonicalUrl(pathname = '/') {
  const normalized = normalizePathname(pathname)
  return normalized === '/' ? `${SITE_URL}/` : `${SITE_URL}${normalized}`
}

export function getRouteMeta(pathname = '/') {
  const normalized = normalizePathname(pathname)

  if (staticRouteMeta[normalized]) {
    return staticRouteMeta[normalized]
  }

  const allItems = [...products, ...games]

  const productMatch = normalized.match(/^\/products\/([^/]+)$/)
  if (productMatch) {
    const item = products.find(p => p.slug === productMatch[1])
    if (item) {
      return {
        title: `${item.name} | PriorApp`,
        description: item.detail || item.description || `Explore ${item.name} from PriorApp.`,
        canonical: `${SITE_URL}${normalized}`,
        image: item.logoAsset ? `${SITE_URL}${item.logoAsset}` : DEFAULT_IMAGE,
      }
    }
  }

  const gameMatch = normalized.match(/^\/games\/([^/]+)$/)
  if (gameMatch) {
    const item = games.find(g => g.slug === gameMatch[1])
    if (item) {
      return {
        title: `${item.name} | PriorApp`,
        description: item.description || `Explore ${item.name} from PriorApp.`,
        canonical: `${SITE_URL}${normalized}`,
        image: DEFAULT_IMAGE,
      }
    }
  }

  const supportMatch = normalized.match(/^\/support\/([^/]+)$/)
  if (supportMatch) {
    const item = allItems.find(i => i.slug === supportMatch[1])
    const name = item ? item.name : 'Product'
    return {
      title: `${name} Support | PriorApp`,
      description: `Find help and documentation for ${name} by PriorApp.`,
      canonical: `${SITE_URL}${normalized}`,
      image: DEFAULT_IMAGE,
    }
  }

  const privacyMatch = normalized.match(/^\/privacy\/([^/]+)$/)
  if (privacyMatch) {
    const item = allItems.find(i => i.slug === privacyMatch[1])
    const name = item ? item.name : 'Product'
    return {
      title: `${name} Privacy Policy | PriorApp`,
      description: `Read the privacy policy for ${name} on PriorApp.`,
      canonical: `${SITE_URL}${normalized}`,
      image: DEFAULT_IMAGE,
    }
  }

  const termsMatch = normalized.match(/^\/terms\/([^/]+)$/)
  if (termsMatch) {
    const item = allItems.find(i => i.slug === termsMatch[1])
    const name = item ? item.name : 'Product'
    return {
      title: `${name} Terms | PriorApp`,
      description: `Read the terms of service for ${name} on PriorApp.`,
      canonical: `${SITE_URL}${normalized}`,
      image: DEFAULT_IMAGE,
    }
  }

  return {
    title: 'Page Not Found | PriorApp',
    description: 'The page you requested could not be found on PriorApp.',
    canonical: `${SITE_URL}${normalized}`,
    image: DEFAULT_IMAGE,
  }
}

export function getAllRoutes() {
  const routes = Object.keys(staticRouteMeta)
  return routes
}
