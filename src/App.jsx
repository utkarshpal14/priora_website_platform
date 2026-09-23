import { motion } from 'framer-motion'
import { ArrowUpRight, Bell, Calendar, Check, CheckSquare, ChevronRight, Flame, Gamepad2, Globe, Layers, Menu, Monitor, ShieldCheck, Smartphone, Sparkles, Target, Timer, Trophy, X, Zap } from 'lucide-react'
import { Link, Navigate, NavLink, Route, Routes, useLocation, useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { games, products } from './data'
import { initGA, trackPageView } from './analytics'
import PrioraPrivacyPolicy from './PrioraPrivacyPolicy'
import PrioraTerms from './PrioraTerms'
import PrioraSupport from './PrioraSupport'
import { getRouteMeta, DEFAULT_KEYWORDS, DEFAULT_IMAGE } from './seoData'

const nav = [['Products', '/products'], ['Games', '/games'], ['About', '/about'], ['Support', '/support']]
const allItems = [...products, ...games]
const fade = { initial: { opacity: 0, y: 12 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: .35 } }

function Logo() { return <Link to="/" className="logo"><span>p</span> priorapp</Link> }

function Header() {
  const [open, setOpen] = useState(false)
  useEffect(() => {
    const close = e => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', close)
    return () => window.removeEventListener('keydown', close)
  }, [])
  return (
    <header className="header">
      <div className="container header-content">
        <Logo />
        <nav className={open ? 'nav open' : 'nav'}>
          {nav.map(([label, path]) => (
            <NavLink key={path} to={path} onClick={() => setOpen(false)}>
              {label}
            </NavLink>
          ))}
          <Link className="nav-cta" to="/products/priora" onClick={() => setOpen(false)}>
            Open Priora <ArrowUpRight size={16} />
          </Link>
        </nav>
        <button
          className="icon-btn menu-btn"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>
    </header>
  )
}

function Footer() {
  return (
    <footer>
      <div className="container footer-grid">
        <div>
          <Logo />
          <p className="footer-note">PriorApp is a growing directory of useful apps, games, and digital tools.</p>
          <a className="footer-email" href="mailto:priorahq@gmail.com">
            priorahq@gmail.com <ArrowUpRight size={14} />
          </a>
          <a className="footer-linkedin" href="https://www.linkedin.com/in/utkarshpal14" target="_blank" rel="noreferrer">
            <span className="linkedin-icon" aria-hidden="true">in</span> Connect on LinkedIn <ArrowUpRight size={13} />
          </a>
        </div>
        <div className="footer-links">
          <div>
            <small>Directory</small>
            <Link to="/products">Products</Link>
            <Link to="/games">Games</Link>
            <Link to="/about">About</Link>
          </div>
          <div>
            <small>Support</small>
            <Link to="/support">All support</Link>
            <Link to="/support/priora">Priora support</Link>
            <Link to="/support/blockzu">Blockzu support</Link>
            <Link to="/privacy-policy">Privacy</Link>
            <Link to="/terms">Terms</Link>
          </div>
          <div>
            <small>Featured</small>
            <Link to="/products/priora">Priora Planner</Link>
            <Link to="/games/blockzu">Blockzu Block Puzzle</Link>
            <a href="https://priorapp.netlify.app/" target="_blank" rel="noreferrer">Priora Web App</a>
            <a href="https://blockzu.priorapp.co.in/" target="_blank" rel="noreferrer">Play Blockzu Online</a>
          </div>
        </div>
      </div>
      <div className="container footer-bottom">
        <span>© {new Date().getFullYear()} PriorApp</span>
        <span>Privacy-first by default.</span>
        <span>priorapp.co.in</span>
      </div>
    </footer>
  )
}

function NotFound() {
  return (
    <main>
      <section className="directory-header">
        <div className="container">
          <Badge>404 / Not found</Badge>
          <h1>That page is not here.</h1>
          <p>The link may be outdated, or the page may have moved.</p>
          <Link className="button primary" to="/">
            Back to PriorApp <ArrowUpRight size={16} />
          </Link>
        </div>
      </section>
    </main>
  )
}

function PageMeta({ pathname }) {
  useEffect(() => {
    initGA()
  }, [])

  useEffect(() => {
    const meta = getRouteMeta(pathname)
    document.title = meta.title

    const setMetaTag = (selector, attribute, value) => {
      let el = document.querySelector(selector)
      if (!el && value) {
        el = document.createElement('meta')
        const matches = selector.match(/meta\[([a-zA-Z0-9_-]+)=["']?([^"']+)["']?\]/)
        if (matches) {
          el.setAttribute(matches[1], matches[2])
        }
        document.head.appendChild(el)
      }
      if (el && value) {
        el.setAttribute(attribute, value)
      }
    }

    setMetaTag('meta[name="description"]', 'content', meta.description)
    setMetaTag('meta[name="keywords"]', 'content', meta.keywords || DEFAULT_KEYWORDS)
    setMetaTag('meta[property="og:title"]', 'content', meta.title)
    setMetaTag('meta[property="og:description"]', 'content', meta.description)
    setMetaTag('meta[property="og:url"]', 'content', meta.canonical)
    setMetaTag('meta[property="og:image"]', 'content', meta.image || DEFAULT_IMAGE)
    setMetaTag('meta[property="og:image:secure_url"]', 'content', meta.image || DEFAULT_IMAGE)
    setMetaTag('meta[name="twitter:title"]', 'content', meta.title)
    setMetaTag('meta[name="twitter:description"]', 'content', meta.description)
    setMetaTag('meta[name="twitter:image"]', 'content', meta.image || DEFAULT_IMAGE)

    let canonicalLink = document.querySelector('link[rel="canonical"]')
    if (!canonicalLink) {
      canonicalLink = document.createElement('link')
      canonicalLink.setAttribute('rel', 'canonical')
      document.head.appendChild(canonicalLink)
    }
    canonicalLink.setAttribute('href', meta.canonical)

    trackPageView(pathname, meta.title)
  }, [pathname])
  return null
}

function Layout({ children }) {
  const location = useLocation()
  return (
    <>
      <PageMeta pathname={location.pathname} />
      <Header />
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.2 }}
      >
        {children}
      </motion.div>
      <Footer />
    </>
  )
}

function Badge({ children }) { return <span className="badge">{children}</span> }
function ProductMark({ item, large = false, small = false }) {
  return (
    <div className={`product-mark ${item.accent || 'royal'} ${large ? 'large' : ''} ${small ? 'small' : ''}`}>
      {item.logoAsset ? <img src={item.logoAsset} alt={item.name} /> : item.logo}
    </div>
  )
}
function PlatformIcon({ platform }) {
  return platform === 'Android' ? <Smartphone size={15} /> : platform === 'Web/PWA' ? <Globe size={15} /> : platform === 'Browser' ? <Gamepad2 size={15} /> : <Monitor size={15} />
}
function PlatformLinks({ item }) {
  return (
    <div className="platform-links">
      {item.platforms.map(platform => (
        <a href={item.links?.[platform] || '#'} key={platform} className="button secondary" target="_blank" rel="noreferrer">
          <PlatformIcon platform={platform} />
          {platform === 'Android' ? (item.category?.includes('Puzzle') || item.category === 'Casual Puzzle' ? 'Play on Android' : 'Get on Google Play') : platform === 'Web/PWA' ? (item.category?.includes('Puzzle') || item.category === 'Casual Puzzle' ? 'Play Online (Web)' : 'Open Web App') : `Play on ${platform}`}
          <ArrowUpRight size={14} />
        </a>
      ))}
    </div>
  )
}

function ProductCard({ item, game = false }) {
  return item.status !== 'Available' ? (
    <ComingSoonCard type={game ? 'Game' : 'Product'} title={item.name} label={item.description} game={game} />
  ) : (
    <motion.article className={`item-card ${game ? 'game-item-card' : ''}`} {...fade}>
      <div className="card-top">
        <ProductMark item={item} small={game} />
        <Badge>{item.status}</Badge>
      </div>
      <div className="card-body">
        <span className="card-category">{game ? (item.category || 'Casual Block Puzzle') : item.category}</span>
        <h3>{item.name}</h3>
        <p>{item.description}</p>
      </div>
      <Link className="text-link" to={`/${game ? 'games' : 'products'}/${item.slug}`}>
        {game ? 'Play & details' : 'View details'} <ChevronRight size={15} />
      </Link>
    </motion.article>
  )
}

function ComingSoonCard({ type = 'Product', title, label = 'A new idea is taking shape.', game = false }) {
  const isGame = game || type === 'Game'
  return (
    <motion.article className={`coming-card ${isGame ? 'game-coming-card' : ''}`} {...fade}>
      <div className="coming-blur"><span>{isGame ? '✦' : 'p'}</span></div>
      <Badge>Coming soon</Badge>
      <h3>{title || `More ${type.toLowerCase()}s, soon.`}</h3>
      <p>{label}</p>
    </motion.article>
  )
}

function DirectoryHeader({ eyebrow, title, body }) {
  return (
    <section className="directory-header">
      <div className="container">
        <Badge>{eyebrow}</Badge>
        <h1>{title}</h1>
        <p>{body}</p>
      </div>
    </section>
  )
}

function Home() {
  return (
    <main>
      <section className="home-hero">
        <div className="container home-hero-grid">
          <div>
            <Badge>PriorApp / Ecosystem directory</Badge>
            <h1>Useful things,<br /><em>in one place.</em></h1>
            <p>Discover productivity apps, casual block puzzle games, and digital tools from PriorApp.</p>
            <div className="hero-actions">
              <Link className="button primary" to="/products/priora">
                Open Priora <ArrowUpRight size={17} />
              </Link>
              <Link className="button quiet" to="/games/blockzu">
                Play Blockzu Game
              </Link>
            </div>
          </div>
          <div className="hero-feature">
            <div className="hero-feature-top">
              <Badge>Featured product</Badge>
              <span>01 / 02</span>
            </div>
            <ProductMark item={products[0]} large />
            <h2>Priora</h2>
            <p>Productivity app for task management, goals, reminders, schedules, deadlines, focus sessions, and daily planning.</p>
            <PlatformLinks item={products[0]} />
          </div>
        </div>
      </section>
      <section className="proof-strip">
        <div className="container proof-grid">
          <strong>Built and tested with early beta users.</strong>
          <span>For students, developers, and professionals.</span>
          <span className="proof-stat">500+ <small>tasks completed in beta</small></span>
        </div>
      </section>

      {/* Priora Flagship SEO & Feature Spotlight */}
      <section className="section compact-section seo-spotlight">
        <div className="container">
          <div className="spotlight-intro">
            <Badge>Priora / Productivity App</Badge>
            <h2>Calm productivity for daily planning and deep focus.</h2>
            <p>
              Priora is a productivity app for task management, goals, reminders, schedules, deadlines, focus sessions, and daily planning. It provides a structured, uncluttered workspace designed to help you stay organized and maintain steady momentum every day.
            </p>
          </div>
          <div className="spotlight-grid">
            <motion.div className="spotlight-card" {...fade}>
              <div className="spotlight-icon"><CheckSquare size={18} /></div>
              <h3>Task Management & Planning</h3>
              <p>Organize daily to-dos, subtasks, priorities, and project workflows with clear structure.</p>
            </motion.div>
            <motion.div className="spotlight-card" {...fade}>
              <div className="spotlight-icon"><Target size={18} /></div>
              <h3>Goals & Milestones</h3>
              <p>Set meaningful goals, break them into trackable milestones, and monitor completion rates.</p>
            </motion.div>
            <motion.div className="spotlight-card" {...fade}>
              <div className="spotlight-icon"><Bell size={18} /></div>
              <h3>Reminders & Schedules</h3>
              <p>Stay ahead of calendar schedules, deadlines, morning summaries, and recurring reminders.</p>
            </motion.div>
            <motion.div className="spotlight-card" {...fade}>
              <div className="spotlight-icon"><Timer size={18} /></div>
              <h3>Focus Sessions</h3>
              <p>Run timed, distraction-free focus sessions to sustain deep concentration during work sprints.</p>
            </motion.div>
          </div>
          <div className="spotlight-bottom">
            <div>
              <span className="muted-label">Available on Android & Web PWA</span>
              <p style={{ margin: 0, fontSize: '14px', color: 'var(--ink)', fontWeight: 600 }}>
                Free to use across mobile and desktop browsers.
              </p>
            </div>
            <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
              <Link className="button primary" to="/products/priora">
                View Priora details <ArrowUpRight size={15} />
              </Link>
              <a className="button secondary" href="https://priorapp.netlify.app/" target="_blank" rel="noreferrer">
                Open web app <ArrowUpRight size={15} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="section compact-section">
        <div className="container">
          <div className="section-row">
            <div>
              <Badge>Products</Badge>
              <h2>Find your next useful thing.</h2>
            </div>
            <Link className="text-link" to="/products">
              View all products <ArrowUpRight size={16} />
            </Link>
          </div>
          <div className="cards-grid">
            {products.map(item => <ProductCard item={item} key={item.slug} />)}
            <ComingSoonCard type="Product" label="New productivity tools are being shaped for the ecosystem." />
          </div>
        </div>
      </section>

      {/* Compact Games Section */}
      <section className="section compact-section games-strip">
        <div className="container">
          <div className="section-row">
            <div>
              <Badge>Games / Block Puzzles & Arcade</Badge>
              <h2>Small worlds to explore.</h2>
            </div>
            <Link className="text-link" to="/games">
              View all games <ArrowUpRight size={16} />
            </Link>
          </div>
          <div className="cards-grid games-cards-grid">
            {games.map(item => <ProductCard item={item} game key={item.slug} />)}
            <ComingSoonCard type="Game" label="More playful projects are on the horizon." game />
          </div>
        </div>
      </section>
    </main>
  )
}

function Listing({ type }) {
  const game = type === 'games'
  const items = game ? games : products
  return (
    <main>
      <DirectoryHeader
        eyebrow={game ? 'Games / Block Puzzles' : 'Products'}
        title={game ? 'Playful block puzzles & indie games.' : 'The PriorApp product directory.'}
        body={game ? 'Discover Blockzu (the addictive 8x8 block puzzle game & block blast adventure) and upcoming casual games.' : 'Apps and tools designed to be useful, focused, and easy to access.'}
      />
      <section className={`section compact-section listing ${game ? 'games-listing-section' : ''}`}>
        <div className="container">
          <div className="listing-meta">
            <span>{items.length + 1} {game ? 'games' : 'products'}</span>
            <span>{game ? 'Block Puzzles & Arcade' : 'All projects'}</span>
          </div>
          <div className={`cards-grid ${game ? 'games-cards-grid' : ''}`}>
            {items.map(item => <ProductCard item={item} game={game} key={item.slug} />)}
            <ComingSoonCard
              type={game ? 'Game' : 'Product'}
              label={game ? 'More playful projects are on the horizon.' : 'New productivity tools are being shaped for the ecosystem.'}
              game={game}
            />
          </div>
        </div>
      </section>
    </main>
  )
}

function Availability({ item }) {
  const planned = ['iOS', 'Desktop']
  return (
    <section className="availability compact-availability">
      <div className="container">
        <div className="availability-head">
          <div>
            <Badge>Availability</Badge>
            <h2>Where to find {item.name}.</h2>
          </div>
          <p>Capabilities and access options at a glance.</p>
        </div>
        <div className="availability-table">
          {item.platforms.map(platform => (
            <div key={platform}>
              <PlatformIcon platform={platform} />
              <strong>{platform}</strong>
              <span>Available</span>
              {item.links?.[platform] && (
                <a href={item.links[platform]} target="_blank" rel="noreferrer">
                  Open <ArrowUpRight size={14} />
                </a>
              )}
            </div>
          ))}
          {planned.map(platform => (
            <div className="planned" key={platform}>
              <Monitor />
              <strong>{platform}</strong>
              <span>Planned</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Detail({ type }) {
  const { slug } = useParams()
  const game = type === 'games'
  const list = game ? games : products
  const item = list.find(x => x.slug === slug)

  if (!item) {
    return <NotFound />
  }

  return (
    <main>
      <section className="detail-header">
        <div className="container detail-header-grid">
          <div>
            <Badge>{game ? 'Game' : item.category} / {item.status}</Badge>
            <h1>{item.name}</h1>
            <p>{item.detail || item.description}</p>
            {item.platforms.length > 0 && <PlatformLinks item={item} />}
            <div className="detail-links inline">
              <Badge>More information</Badge>
              <div>
                <Link to={`/support/${item.slug}`}>Support <ArrowUpRight size={15} /></Link>
                <Link to={`/privacy/${item.slug}`}>Privacy policy <ArrowUpRight size={15} /></Link>
                <Link to={`/terms/${item.slug}`}>Terms <ArrowUpRight size={15} /></Link>
              </div>
            </div>
          </div>
          <ProductMark item={item} large />
        </div>
      </section>
      {item.screenshots && item.screenshots.length > 0 && (
        <section className="section detail-section">
          <div className="container">
            <div className="section-row">
              <div>
                <Badge>Product screenshots</Badge>
                <h2>See {item.name} in action.</h2>
              </div>
              <span className="muted-label">{item.screenshots.length} screens</span>
            </div>
            <div className="detail-screenshots">
              {item.screenshots.map(file => (
                <img
                  key={file}
                  src={`/priora_screenshots/${file}`}
                  alt={`${item.name} ${file.replace('.png', '').replaceAll('-', ' ')} screen`}
                  loading="lazy"
                />
              ))}
            </div>
          </div>
        </section>
      )}
      {item.features && item.features.length > 0 && (
        <section className="section detail-section">
          <div className="container detail-content">
            <div>
              <Badge>Features</Badge>
              <h2>Everything in one view.</h2>
            </div>
            <ul className="feature-list simple">
              {item.features.map(feature => (
                <li key={feature}>
                  <Check size={16} />
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      {/* Dedicated Blockzu SEO & Gameplay Spotlight */}
      {item.slug === 'blockzu' && (
        <section className="section compact-section seo-spotlight">
          <div className="container">
            <div className="spotlight-intro">
              <Badge>Blockzu / Block Puzzle Game</Badge>
              <h2>The ultimate 8x8 block puzzle & block blast experience.</h2>
              <p>
                Blockzu (also searched as bockzur or block blast puzzle) is a free casual block puzzle game designed for crisp mental stimulation and relaxing play. Fit polyomino shapes onto the 8x8 grid, clear vertical and horizontal rows, trigger explosive combo blast multipliers, and beat your personal best.
              </p>
            </div>
            <div className="spotlight-grid">
              <motion.div className="spotlight-card" {...fade}>
                <div className="spotlight-icon"><Layers size={18} /></div>
                <h3>8x8 Block Grid Placement</h3>
                <p>Drag geometric polyomino blocks into the 8x8 matrix. Strategically position shapes to keep board spaces open for tricky 3x3 pieces.</p>
              </motion.div>
              <motion.div className="spotlight-card" {...fade}>
                <div className="spotlight-icon"><Flame size={18} /></div>
                <h3>Block Blast Combos & Streaks</h3>
                <p>Clear multiple rows and columns simultaneously to trigger block blast combo multipliers, earning massive score bonuses.</p>
              </motion.div>
              <motion.div className="spotlight-card" {...fade}>
                <div className="spotlight-icon"><ShieldCheck size={18} /></div>
                <h3>Zero Gameplay Ads</h3>
                <p>Enjoy uninterrupted, fluid flow. No popups or forced video ads during active gameplay or between swift restart rounds.</p>
              </motion.div>
              <motion.div className="spotlight-card" {...fade}>
                <div className="spotlight-icon"><Trophy size={18} /></div>
                <h3>Themes, Missions & Offline</h3>
                <p>Unlock custom themes (Sapphire, Neon, Sunset), complete daily missions, and play 100% offline on Android or Web browser.</p>
              </motion.div>
            </div>
            <div className="spotlight-bottom">
              <div>
                <span className="muted-label">Play Online Free • No Download Needed</span>
                <p style={{ margin: 0, fontSize: '14px', color: 'var(--ink)', fontWeight: 600 }}>
                  Play Blockzu (bockzur / block blast) directly in your browser or install on Android.
                </p>
              </div>
              <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
                <a className="button primary" href="https://blockzu.priorapp.co.in/" target="_blank" rel="noreferrer">
                  Play Blockzu Online <Gamepad2 size={16} />
                </a>
                <Link className="button secondary" to="/support/blockzu">
                  Game Guide & FAQ <ArrowUpRight size={15} />
                </Link>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Priora Flagship Spotlight */}
      {item.slug === 'priora' && (
        <section className="section compact-section seo-spotlight">
          <div className="container">
            <div className="spotlight-intro">
              <Badge>Productivity features</Badge>
              <h2>Everything built for daily planning, task execution, and deep focus.</h2>
              <p>
                Priora is an all-in-one productivity app designed to keep your work structured and intentional. Combine daily to-do lists, milestone-based goals, schedule reminders, and focus timers in one distraction-free space.
              </p>
            </div>
            <div className="spotlight-grid">
              <motion.div className="spotlight-card" {...fade}>
                <div className="spotlight-icon"><CheckSquare size={18} /></div>
                <h3>Task Management & Planning</h3>
                <p>Create tasks, manage subtasks, organize priority levels, and plan your day with structured to-do lists.</p>
              </motion.div>
              <motion.div className="spotlight-card" {...fade}>
                <div className="spotlight-icon"><Target size={18} /></div>
                <h3>Goal & Milestone Tracking</h3>
                <p>Define clear personal and project goals, break them into trackable milestones, and celebrate steady progress.</p>
              </motion.div>
              <motion.div className="spotlight-card" {...fade}>
                <div className="spotlight-icon"><Bell size={18} /></div>
                <h3>Smart Reminders & Schedules</h3>
                <p>Stay ahead of deadlines, daily agendas, and upcoming commitments with timely notifications.</p>
              </motion.div>
              <motion.div className="spotlight-card" {...fade}>
                <div className="spotlight-icon"><Timer size={18} /></div>
                <h3>Focus Sessions & Deep Work</h3>
                <p>Run timed work sprints with distraction-free focus sessions to build consistency and momentum.</p>
              </motion.div>
            </div>
          </div>
        </section>
      )}
      {!game && item.platforms.length > 0 && <Availability item={item} />}
    </main>
  )
}

function ResourcePageFallback({ kind }) {
  const { slug } = useParams()
  if (kind === 'terms' && slug === 'priora') return <PrioraTerms />
  if (kind === 'support' && slug === 'priora') return <PrioraSupport />
  if (kind === 'privacy' && slug === 'priora') return <PrioraPrivacyPolicy />

  const item = allItems.find(x => x.slug === slug)
  if (!item) return <NotFound />

  const label = kind === 'support' ? 'Support' : kind === 'privacy' ? 'Privacy policy' : 'Terms & conditions'
  const body =
    kind === 'support'
      ? `Need help with ${item.name}? Email priorahq@gmail.com with your device, context, and what you expected to happen.`
      : kind === 'privacy'
      ? `This product-specific policy for ${item.name} explains data protection and privacy practices.`
      : `These product-specific terms for ${item.name} describe conditions of use.`

  return (
    <main>
      <DirectoryHeader eyebrow={`${item.name} / ${label}`} title={`${label} for ${item.name}.`} body={body} />
      <section className="section compact-section resource">
        <div className="container narrow">
          <div className="resource-contact">
            <Badge>{kind === 'support' ? 'Contact & FAQ' : 'Documentation'}</Badge>
            <h2>{kind === 'support' ? 'We read every message.' : `${label} information`}</h2>
            <p>{kind === 'support' ? `For feedback, bug reports, and assistance with ${item.name}, email priorahq@gmail.com.` : body}</p>
            {kind === 'support' && (
              <a className="button primary" href="mailto:priorahq@gmail.com">
                Email support <ArrowUpRight size={16} />
              </a>
            )}
          </div>
          <div className="resource-sections">
            <h3>{kind === 'support' ? `Frequently asked questions about ${item.name}` : 'Legal & compliance'}</h3>
            {kind === 'support' && slug === 'blockzu' ? (
              <div style={{ marginTop: '16px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <div className="info-block">
                  <h4 style={{ margin: '0 0 6px', fontSize: '16px' }}>How do I score points and combos in Blockzu?</h4>
                  <p style={{ margin: 0, fontSize: '14px', color: 'var(--muted)' }}>
                    Place blocks onto the 8x8 grid to fill rows or columns. Clearing a line gives points. Clearing multiple rows or columns in a single turn triggers a block blast combo with exponential multiplier points.
                  </p>
                </div>
                <div className="info-block">
                  <h4 style={{ margin: '0 0 6px', fontSize: '16px' }}>Can I play Blockzu (bockzur) offline?</h4>
                  <p style={{ margin: 0, fontSize: '14px', color: 'var(--muted)' }}>
                    Yes! On Android, Blockzu is fully playable offline. On web browsers, once loaded, the PWA caches assets so you can play without an active internet connection.
                  </p>
                </div>
                <div className="info-block">
                  <h4 style={{ margin: '0 0 6px', fontSize: '16px' }}>Are there ads while playing the block puzzle?</h4>
                  <p style={{ margin: 0, fontSize: '14px', color: 'var(--muted)' }}>
                    No, Blockzu never interrupts your active puzzle gameplay with popup or video ads. Ads only appear on side banners or when you voluntarily choose to watch a rewarded ad to revive or earn extra coins.
                  </p>
                </div>
              </div>
            ) : (
              <p>
                For any questions regarding {item.name}, reach out to the PriorApp team at <a href="mailto:priorahq@gmail.com" style={{ color: 'var(--teal)', fontWeight: 600 }}>priorahq@gmail.com</a>.
              </p>
            )}
          </div>
        </div>
      </section>
    </main>
  )
}

function InfoPage({ title, eyebrow, intro, sections }) {
  const supportPage = eyebrow === 'Support center'
  return (
    <main>
      <DirectoryHeader eyebrow={eyebrow} title={title} body={intro} />
      <section className="section compact-section resource">
        <div className="container narrow">
          {supportPage && (
            <div className="contact-panel">
              <Badge>Contact</Badge>
              <h2>Connect with PriorApp.</h2>
              <p>For general support, product questions, feedback, and collaboration, contact us at <a href="mailto:priorahq@gmail.com">priorahq@gmail.com</a>.</p>
              <div className="contact-actions">
                <a className="button primary" href="mailto:priorahq@gmail.com">
                  Email us <ArrowUpRight size={15} />
                </a>
                <a className="button secondary" href="https://www.linkedin.com/in/utkarshpal14" target="_blank" rel="noreferrer">
                  Connect on LinkedIn <ArrowUpRight size={15} />
                </a>
              </div>
            </div>
          )}
          {sections.map(section => (
            <motion.div className="info-block" {...fade} key={section.title}>
              <h2>{section.title}</h2>
              <p>{section.body.replaceAll('support@priorapp.co.in', 'priorahq@gmail.com')}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </main>
  )
}

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Listing type="products" />} />
        <Route path="/products/:slug" element={<Detail type="products" />} />
        <Route path="/games" element={<Listing type="games" />} />
        <Route path="/games/:slug" element={<Detail type="games" />} />
        <Route path="/support" element={
          <InfoPage
            eyebrow="Support center"
            title="Find help for PriorApp products."
            intro="Choose a product or email our support team directly."
            sections={allItems.map(item => ({
              title: item.name,
              body: `Get help, report an issue, or send feedback at priorahq@gmail.com. Visit /support/${item.slug} for product-specific support.`
            }))}
          />
        } />
        <Route path="/support/priora" element={<PrioraSupport />} />
        <Route path="/faq" element={<PrioraSupport />} />
        <Route path="/support/:slug" element={<ResourcePageFallback kind="support" />} />
        <Route path="/privacy-policy" element={
          <InfoPage
            eyebrow="Legal"
            title="PriorApp privacy policy."
            intro="Our shared policy hub. Product-specific policies are available at /privacy/:slug."
            sections={[{ title: 'Privacy-first by default', body: 'Product-specific policy pages are available for each product and game.' }]}
          />
        } />
        <Route path="/privacy/priora" element={<PrioraPrivacyPolicy />} />
        <Route path="/privacy/:slug" element={<ResourcePageFallback kind="privacy" />} />
        <Route path="/terms" element={
          <InfoPage
            eyebrow="Legal"
            title="PriorApp terms & conditions."
            intro="Our shared terms hub. Product-specific terms are available at /terms/:slug."
            sections={[{ title: 'Using PriorApp', body: 'Product-specific terms pages are available for each product and game.' }]}
          />
        } />
        <Route path="/terms/priora" element={<PrioraTerms />} />
        <Route path="/terms/:slug" element={<ResourcePageFallback kind="terms" />} />
        <Route path="/about" element={
          <InfoPage
            eyebrow="About PriorApp"
            title="A home for useful digital products."
            intro="PriorApp is an independent ecosystem of apps, games, and tools. Priora is our flagship product, with more projects taking shape around it."
            sections={[
              { title: 'One directory, many directions', body: 'This site makes it easy to discover what PriorApp is building, open what is ready, and find the documentation every product needs.' },
              { title: 'Built with care', body: 'We focus on clear interfaces, sensible defaults, and products that respect your attention.' }
            ]}
          />
        } />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Layout>
  )
}

export default App
