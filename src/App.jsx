import { motion } from 'framer-motion'
import { ArrowUpRight, Bell, Calendar, Check, CheckSquare, ChevronRight, Gamepad2, Globe, Menu, Monitor, Smartphone, Sparkles, Target, Timer, X } from 'lucide-react'
import { Link, Navigate, NavLink, Route, Routes, useLocation, useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { games, products } from './data'
import { initGA, trackPageView } from './analytics'
import PrioraPrivacyPolicy from './PrioraPrivacyPolicy'
import PrioraTerms from './PrioraTerms'
import PrioraSupport from './PrioraSupport'

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
      <div className="container nav-wrap">
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
            <Link to="/privacy-policy">Privacy</Link>
            <Link to="/terms">Terms</Link>
          </div>
          <div>
            <small>Priora</small>
            <a href="https://play.google.com" target="_blank" rel="noreferrer">Google Play</a>
            <a href="https://priorapp.netlify.app/" target="_blank" rel="noreferrer">Web app / PWA</a>
            <Link to="/products/priora">Product details</Link>
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

const staticPageMeta = {
  '/': ['PriorApp – Apps, Games & Digital Products', 'Discover Priora and future apps, games, and digital products from PriorApp.'],
  '/products': ['Products | PriorApp', 'Explore useful apps and tools designed by PriorApp.'],
  '/games': ['Games | PriorApp', 'Explore playful projects from PriorApp.'],
  '/about': ['About PriorApp', 'Learn about PriorApp and the thoughtful digital products we are building.'],
  '/faq': ['Frequently Asked Questions - PriorApp', 'Find answers to frequently asked questions about Priora and PriorApp.'],
  '/support': ['Support | PriorApp', 'Find help for PriorApp products or contact our support team.'],
  '/support/priora': ['Frequently Asked Questions - PriorApp', 'Get help, report an issue, or send feedback about Priora.'],
  '/privacy-policy': ['Priora Privacy Policy', 'Read the shared PriorApp privacy policy.'],
  '/privacy/priora': ['Priora Privacy Policy', 'Read the privacy policy for Priora.'],
  '/terms': ['Priora Terms of Service', 'Read the terms for PriorApp products and services.'],
  '/terms/priora': ['Priora Terms of Service', 'Read the terms of service for Priora.'],
  '/products/priora': ['Priora | PriorApp', 'Priora brings tasks, goals, projects, and focus sessions into one calm workspace.'],
}

function getPageMeta(pathname) {
  if (staticPageMeta[pathname]) {
    return staticPageMeta[pathname]
  }

  const productMatch = pathname.match(/^\/products\/([^/]+)$/)
  if (productMatch) {
    const item = products.find(p => p.slug === productMatch[1])
    if (item) return [`${item.name} | PriorApp`, item.detail || item.description || `Explore ${item.name} from PriorApp.`]
  }

  const gameMatch = pathname.match(/^\/games\/([^/]+)$/)
  if (gameMatch) {
    const item = games.find(g => g.slug === gameMatch[1])
    if (item) return [`${item.name} | PriorApp`, item.description || `Explore ${item.name} from PriorApp.`]
  }

  const supportMatch = pathname.match(/^\/support\/([^/]+)$/)
  if (supportMatch) {
    const item = allItems.find(i => i.slug === supportMatch[1])
    const name = item ? item.name : 'Product'
    return [`${name} Support | PriorApp`, `Find help and documentation for ${name} by PriorApp.`]
  }

  const privacyMatch = pathname.match(/^\/privacy\/([^/]+)$/)
  if (privacyMatch) {
    const item = allItems.find(i => i.slug === privacyMatch[1])
    const name = item ? item.name : 'Product'
    return [`${name} Privacy Policy | PriorApp`, `Read the privacy policy for ${name} on PriorApp.`]
  }

  const termsMatch = pathname.match(/^\/terms\/([^/]+)$/)
  if (termsMatch) {
    const item = allItems.find(i => i.slug === termsMatch[1])
    const name = item ? item.name : 'Product'
    return [`${name} Terms | PriorApp`, `Read the terms of service for ${name} on PriorApp.`]
  }

  return ['Page Not Found | PriorApp', 'The page you requested could not be found on PriorApp.']
}

function PageMeta({ pathname }) {
  useEffect(() => {
    initGA()
  }, [])

  useEffect(() => {
    const [title, description] = getPageMeta(pathname)
    document.title = title
    document.querySelector('meta[name="description"]')?.setAttribute('content', description)
    document.querySelector('meta[property="og:title"]')?.setAttribute('content', title)
    document.querySelector('meta[property="og:description"]')?.setAttribute('content', description)
    document.querySelector('meta[property="og:url"]')?.setAttribute('content', `https://priorapp.co.in${pathname}`)
    document.querySelector('meta[name="twitter:title"]')?.setAttribute('content', title)
    document.querySelector('meta[name="twitter:description"]')?.setAttribute('content', description)
    trackPageView(pathname, title)
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
function ProductMark({ item, large = false }) { return <div className={`product-mark ${item.accent} ${large ? 'large' : ''}`}>{item.logoAsset ? <img src={item.logoAsset} alt={item.name} /> : item.logo}</div> }
function PlatformIcon({ platform }) { return platform === 'Android' ? <Smartphone size={16} /> : platform === 'Web/PWA' ? <Globe size={16} /> : platform === 'Browser' ? <Gamepad2 size={16} /> : <Monitor size={16} /> }
function PlatformLinks({ item }) { return <div className="platform-links">{item.platforms.map(platform => <a href={item.links?.[platform] || '#'} key={platform} className="button secondary" target="_blank" rel="noreferrer"><PlatformIcon platform={platform} />{platform === 'Android' ? 'Get on Google Play' : platform === 'Web/PWA' ? 'Open Web App' : `Play on ${platform}`}<ArrowUpRight size={15} /></a>)}</div> }

function ProductCard({ item, game = false }) {
  return item.status !== 'Available' ? (
    <ComingSoonCard type={game ? 'Game' : 'Product'} title={item.name} label={item.description} />
  ) : (
    <motion.article className="item-card" {...fade}>
      <div className="card-top">
        <ProductMark item={item} />
        <Badge>{item.status}</Badge>
      </div>
      <div>
        <span className="card-category">{game ? 'Game' : item.category}</span>
        <h3>{item.name}</h3>
        <p>{item.description}</p>
      </div>
      <Link className="text-link" to={`/${game ? 'games' : 'products'}/${item.slug}`}>
        View details <ChevronRight size={16} />
      </Link>
    </motion.article>
  )
}

function ComingSoonCard({ type = 'Product', title, label = 'A new idea is taking shape.' }) {
  return (
    <motion.article className="coming-card" {...fade}>
      <div className="coming-blur"><span>{type === 'Game' ? '✦' : 'p'}</span></div>
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
            <p>Discover apps, games, and digital tools from PriorApp.</p>
            <div className="hero-actions">
              <Link className="button primary" to="/products/priora">
                Open Priora <ArrowUpRight size={17} />
              </Link>
              <Link className="button quiet" to="/products">
                Browse directory
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
            <p>Tasks, goals, projects, and focus sessions in one calm workspace.</p>
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
            <Badge>Flagship productivity app</Badge>
            <h2>Priora brings tasks, goals, reminders, and focus into one calm workspace.</h2>
            <p>
              Priora is an all-in-one productivity app designed to simplify daily planning, task management, and goal tracking. Organize your schedules, set deadline reminders, run deep work focus sessions, and maintain personal momentum—all in one distraction-free interface.
            </p>
          </div>
          <div className="spotlight-grid">
            <motion.div className="spotlight-card" {...fade}>
              <div className="spotlight-icon"><CheckSquare size={18} /></div>
              <h3>Task Management & Planning</h3>
              <p>Organize daily to-dos, prioritize urgent actions, manage subtasks, and track multi-stage projects with clarity.</p>
            </motion.div>
            <motion.div className="spotlight-card" {...fade}>
              <div className="spotlight-icon"><Target size={18} /></div>
              <h3>Goal & Milestone Tracking</h3>
              <p>Break ambitious goals into structured milestones, monitor completion rates, and celebrate steady progress.</p>
            </motion.div>
            <motion.div className="spotlight-card" {...fade}>
              <div className="spotlight-icon"><Bell size={18} /></div>
              <h3>Smart Reminders & Schedules</h3>
              <p>Stay on top of calendar schedules, deadlines, morning summaries, and recurring reminders effortlessly.</p>
            </motion.div>
            <motion.div className="spotlight-card" {...fade}>
              <div className="spotlight-icon"><Timer size={18} /></div>
              <h3>Focus Sessions & Deep Work</h3>
              <p>Power through work sprints with distraction-free focus timers, productivity streak tracking, and personal insights.</p>
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
                Explore Priora details <ArrowUpRight size={15} />
              </Link>
              <a className="button secondary" href="https://priorapp.netlify.app/" target="_blank" rel="noreferrer">
                Open web app <ArrowUpRight size={15} />
              </a>
            </div>
          </div>
        </div>
      </section>

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
      <section className="section compact-section games-strip">
        <div className="container">
          <div className="section-row">
            <div>
              <Badge>Games</Badge>
              <h2>Small worlds to explore.</h2>
            </div>
            <Link className="text-link" to="/games">
              View all games <ArrowUpRight size={16} />
            </Link>
          </div>
          <div className="cards-grid">
            {games.map(item => <ProductCard item={item} game key={item.slug} />)}
            <ComingSoonCard type="Game" label="More playful projects are on the horizon." />
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
        eyebrow={game ? 'Games' : 'Products'}
        title={game ? 'Playful projects from PriorApp.' : 'The PriorApp product directory.'}
        body={game ? 'Current and future games, collected in one place.' : 'Apps and tools designed to be useful, focused, and easy to access.'}
      />
      <section className="section compact-section listing">
        <div className="container">
          <div className="listing-meta">
            <span>{items.length + 1} {game ? 'games' : 'products'}</span>
            <span>All projects</span>
          </div>
          <div className="cards-grid">
            {items.map(item => <ProductCard item={item} game={game} key={item.slug} />)}
            <ComingSoonCard
              type={game ? 'Game' : 'Product'}
              label={game ? 'More playful projects are on the horizon.' : 'New productivity tools are being shaped for the ecosystem.'}
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
            {!game && item.platforms.length > 0 && <PlatformLinks item={item} />}
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
      ? `This product-specific policy for ${item.name} will be updated with the final release documentation.`
      : `These product-specific terms for ${item.name} will be updated with the final release documentation.`

  return (
    <main>
      <DirectoryHeader eyebrow={`${item.name} / ${label}`} title={`${label} for ${item.name}.`} body={body} />
      <section className="section compact-section resource">
        <div className="container narrow">
          <div className="resource-contact">
            <Badge>{kind === 'support' ? 'Contact' : 'Documentation'}</Badge>
            <h2>{kind === 'support' ? 'We read every message.' : `${label} information`}</h2>
            <p>{kind === 'support' ? 'For feedback, bug reports, and feature requests, email priorahq@gmail.com.' : body}</p>
            {kind === 'support' && (
              <a className="button primary" href="mailto:priorahq@gmail.com">
                Email support <ArrowUpRight size={16} />
              </a>
            )}
          </div>
          <div className="resource-sections">
            <h3>{kind === 'support' ? 'Frequently asked questions' : 'Legal & compliance'}</h3>
            <p>
              For any questions regarding {item.name}, reach out to the PriorApp team at <a href="mailto:priorahq@gmail.com" style={{ color: 'var(--teal)', fontWeight: 600 }}>priorahq@gmail.com</a>.
            </p>
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
