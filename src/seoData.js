import { products, games } from './data.js'

export const SITE_URL = 'https://priorapp.co.in'
export const DEFAULT_IMAGE = `${SITE_URL}/priora_icons_assets/priora-logo-horizontal-v5.png`
export const DEFAULT_KEYWORDS = 'Priora, PriorApp, productivity app, task management, daily planning, goal tracking, reminders, schedules, deadlines, focus sessions, pomodoro timer, habit tracker, todo list app, android productivity app, web pwa planner, block puzzle game, block blast, block block blast, bockzur, blockzur, blockzu, 8x8 block puzzle, casual block puzzle, free online puzzle games'

export const staticRouteMeta = {
  '/': {
    title: 'PriorApp – Apps, Games & Digital Products',
    description: 'Priora is a productivity app for task management, reminders, goal tracking, schedules, deadlines, focus sessions, and daily planning. Discover Priora and other digital products from PriorApp.',
    canonical: `${SITE_URL}/`,
    image: DEFAULT_IMAGE,
    keywords: DEFAULT_KEYWORDS,
  },
  '/about': {
    title: 'About PriorApp',
    description: 'Learn about PriorApp, our flagship productivity app Priora, and the ecosystem of apps, games and digital products we build.',
    canonical: `${SITE_URL}/about`,
    image: DEFAULT_IMAGE,
    keywords: 'PriorApp, about PriorApp, independent apps, Priora, digital products, software developer portfolio, productivity tools, indie games',
  },
  '/products': {
    title: 'Products Directory | PriorApp',
    description: 'Explore Priora and other productivity apps, tools, and digital products from PriorApp.',
    canonical: `${SITE_URL}/products`,
    image: DEFAULT_IMAGE,
    keywords: 'PriorApp products, productivity apps, Priora, task management app, habit tracker, planner app, digital tools directory',
  },
  '/products/priora': {
    title: 'Priora – Productivity App for Task Management & Daily Planning | PriorApp',
    description: 'Priora is a productivity app for task management, reminders, goal tracking, schedules, deadlines, focus sessions, and daily planning across Android and Web.',
    canonical: `${SITE_URL}/products/priora`,
    image: `${SITE_URL}/priora_icons_assets/priora-icon-v5-512.png`,
    keywords: 'Priora, productivity app, task management, daily planning, goal tracking, reminders, schedules, deadlines, focus sessions, pomodoro timer, habit tracker, todo list app, android productivity app, web pwa planner',
  },
  '/products/focusflow': {
    title: 'Focusflow | PriorApp',
    description: 'A considered space for building focus rituals that last.',
    canonical: `${SITE_URL}/products/focusflow`,
    image: DEFAULT_IMAGE,
    keywords: 'Focusflow, focus app, deep work, pomodoro timer, productivity rituals, PriorApp',
  },
  '/games': {
    title: 'Games Directory | Free Block Puzzle & Arcade Games | PriorApp',
    description: 'Explore free online games from PriorApp, including Blockzu (the addictive 8x8 block puzzle and block blast game), Orbit Run, and upcoming casual indie releases.',
    canonical: `${SITE_URL}/games`,
    image: DEFAULT_IMAGE,
    keywords: 'block puzzle game, block puzzle, block blast, block block blast, bockzur, blockzur, blockzu, 8x8 block puzzle, casual block puzzle, online puzzle games, free block games, priorapp games, free casual games',
  },
  '/games/blockzu': {
    title: 'Blockzu – Casual 8x8 Block Puzzle Game | Block Blast & Combo Puzzle | PriorApp Games',
    description: 'Play Blockzu free online! A modern, addictive 8x8 block puzzle game with block blast mechanics. Fit shapes, blast rows and columns, chain combo multipliers, and beat high scores with zero ads during gameplay. Try Blockzu (bockzur / block blast) on web & Android.',
    canonical: `${SITE_URL}/games/blockzu`,
    image: `${SITE_URL}/blockzu_assets/blockzu-banner.png`,
    keywords: 'block puzzle game, block puzzle, block blast, block block blast, bockzur, blockzur, blockzu, 8x8 block puzzle, block blast online, block blast adventure, free block puzzle online, brick puzzle game, wood block puzzle, casual block puzzle, relaxing block game, block drop, puzzle block blast, priorapp games, free casual games',
  },
  '/support/blockzu': {
    title: 'Blockzu Support & FAQ | Block Puzzle Game Help | PriorApp Games',
    description: 'Find help, gameplay guides, controls, FAQ, and support for Blockzu 8x8 block puzzle game.',
    canonical: `${SITE_URL}/support/blockzu`,
    image: `${SITE_URL}/blockzu_assets/blockzu-icon.png`,
    keywords: 'Blockzu support, block puzzle help, bockzur guide, how to play blockzu, block blast FAQ, block puzzle game assistance, PriorApp Games',
  },
  '/privacy/blockzu': {
    title: 'Blockzu Privacy Policy | PriorApp Games',
    description: 'Read the privacy policy and data protection practices for Blockzu 8x8 block puzzle game.',
    canonical: `${SITE_URL}/privacy/blockzu`,
    image: `${SITE_URL}/blockzu_assets/blockzu-icon.png`,
    keywords: 'Blockzu privacy policy, bockzur privacy, block puzzle data protection, PriorApp Games legal',
  },
  '/terms/blockzu': {
    title: 'Blockzu Terms of Service | PriorApp Games',
    description: 'Read the terms of service and usage conditions for Blockzu 8x8 block puzzle game.',
    canonical: `${SITE_URL}/terms/blockzu`,
    image: `${SITE_URL}/blockzu_assets/blockzu-icon.png`,
    keywords: 'Blockzu terms of service, bockzur terms, block puzzle game terms, PriorApp Games',
  },
  '/games/orbit-run': {
    title: 'Orbit Run | PriorApp',
    description: 'A small, satisfying arcade journey through impossible orbits.',
    canonical: `${SITE_URL}/games/orbit-run`,
    image: DEFAULT_IMAGE,
    keywords: 'Orbit Run, arcade game, indie game, space runner, PriorApp Games',
  },
  '/games/coming-soon': {
    title: 'Coming Soon – Games | PriorApp',
    description: 'New playful projects and games are taking shape at PriorApp.',
    canonical: `${SITE_URL}/games/coming-soon`,
    image: DEFAULT_IMAGE,
    keywords: 'PriorApp upcoming games, indie game releases, casual games coming soon',
  },
  '/faq': {
    title: 'Frequently Asked Questions - Priora & PriorApp',
    description: 'Find answers to frequently asked questions about Priora task management, reminders, focus sessions, and PriorApp.',
    canonical: `${SITE_URL}/faq`,
    image: DEFAULT_IMAGE,
    keywords: 'Priora FAQ, task manager questions, PriorApp help, productivity app support',
  },
  '/support': {
    title: 'Support Center | PriorApp',
    description: 'Find help, documentation, and support resources for PriorApp products or contact our team.',
    canonical: `${SITE_URL}/support`,
    image: DEFAULT_IMAGE,
    keywords: 'PriorApp support, customer support, Priora help, Blockzu help, contact developer',
  },
  '/support/priora': {
    title: 'Priora Support & FAQ | PriorApp',
    description: 'Get help, report an issue, or send feedback about Priora productivity app.',
    canonical: `${SITE_URL}/support/priora`,
    image: `${SITE_URL}/priora_icons_assets/priora-icon-v5-512.png`,
    keywords: 'Priora support, task manager help, daily planner support, PriorApp customer service',
  },
  '/privacy-policy': {
    title: 'Privacy Policy - PriorApp',
    description: 'Read the PriorApp privacy policy and data protection principles across our digital products.',
    canonical: `${SITE_URL}/privacy-policy`,
    image: DEFAULT_IMAGE,
    keywords: 'PriorApp privacy policy, data privacy, user privacy protection, GDPR compliance',
  },
  '/privacy/priora': {
    title: 'Priora Privacy Policy | PriorApp',
    description: 'Read the comprehensive privacy policy and data handling practices for Priora productivity platform.',
    canonical: `${SITE_URL}/privacy/priora`,
    image: `${SITE_URL}/priora_icons_assets/priora-icon-v5-512.png`,
    keywords: 'Priora privacy policy, productivity app data safety, local-first privacy',
  },
  '/terms': {
    title: 'Terms of Service - PriorApp',
    description: 'Read the terms of service and conditions for PriorApp products and digital services.',
    canonical: `${SITE_URL}/terms`,
    image: DEFAULT_IMAGE,
    keywords: 'PriorApp terms of service, user agreement, terms and conditions',
  },
  '/terms/priora': {
    title: 'Priora Terms of Service | PriorApp',
    description: 'Read the terms of service for Priora productivity platform.',
    canonical: `${SITE_URL}/terms/priora`,
    image: `${SITE_URL}/priora_icons_assets/priora-icon-v5-512.png`,
    keywords: 'Priora terms of service, software license, productivity platform terms',
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
    return {
      ...staticRouteMeta[normalized],
      keywords: staticRouteMeta[normalized].keywords || DEFAULT_KEYWORDS
    }
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
        keywords: item.keywords || DEFAULT_KEYWORDS,
      }
    }
  }

  const gameMatch = normalized.match(/^\/games\/([^/]+)$/)
  if (gameMatch) {
    const item = games.find(g => g.slug === gameMatch[1])
    if (item) {
      return {
        title: `${item.name} – Casual Block Puzzle Game | PriorApp Games`,
        description: item.detail || item.description || `Explore ${item.name} from PriorApp.`,
        canonical: `${SITE_URL}${normalized}`,
        image: item.logoAsset ? `${SITE_URL}${item.logoAsset}` : DEFAULT_IMAGE,
        keywords: item.keywords || 'block puzzle game, block blast, bockzur, blockzu, 8x8 block puzzle, casual block puzzle, priorapp games',
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
      keywords: `${name} support, ${name} help, PriorApp support`,
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
      keywords: `${name} privacy policy, data protection, PriorApp`,
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
      keywords: `${name} terms of service, user agreement, PriorApp`,
    }
  }

  return {
    title: 'Page Not Found | PriorApp',
    description: 'The page you requested could not be found on PriorApp.',
    canonical: `${SITE_URL}${normalized}`,
    image: DEFAULT_IMAGE,
    keywords: DEFAULT_KEYWORDS,
  }
}

export function getAllRoutes() {
  const routes = Object.keys(staticRouteMeta)
  return routes
}
