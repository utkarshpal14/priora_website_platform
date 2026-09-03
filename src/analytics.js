const GA_MEASUREMENT_ID = import.meta.env.VITE_GA_ID || 'G-BL2R3V98EP'

export function initGA() {
  if (!GA_MEASUREMENT_ID || typeof window === 'undefined') return

  if (document.getElementById('ga-gtag-script')) return

  const script = document.createElement('script')
  script.id = 'ga-gtag-script'
  script.async = true
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`
  document.head.appendChild(script)

  window.dataLayer = window.dataLayer || []
  function gtag() {
    window.dataLayer.push(arguments)
  }
  window.gtag = gtag

  gtag('js', new Date())
  gtag('config', GA_MEASUREMENT_ID, {
    send_page_view: false,
  })
}

export function trackPageView(path, title) {
  if (!GA_MEASUREMENT_ID || typeof window === 'undefined') return
  if (typeof window.gtag === 'function') {
    window.gtag('config', GA_MEASUREMENT_ID, {
      page_path: path,
      page_title: title || document.title,
    })
  }
}
