import { ArrowUpRight } from 'lucide-react'

const sections = [
  ['1. Introduction & Account-Free Design', 'Welcome to Blockzu, a free casual 8x8 block puzzle game developed and published by Priora. Blockzu is designed to be enjoyed instantly without any mandatory account registration or login. By downloading, accessing, or playing Blockzu on Android, web browsers, or as a Progressive Web App (PWA), you agree to the collection and use of information in accordance with this Privacy Policy.'],
  ['2. Local Game Data', 'Blockzu stores your core gameplay data locally on your device or in your web browser storage. This includes:\n\n• High scores and personal records\n• Virtual coin balance and earned bounties\n• Unlocked block and board themes\n• Daily missions and quest progress\n• Combo statistics, line clear records, and games played\n• Settings and preferences (audio volume, vibration toggles, theme choices)\n\nThis information is stored locally on your device and is not transmitted to or stored on Priora servers.'],
  ['3. Information Automatically Collected', 'To ensure game reliability, diagnose crashes, and support free gameplay through advertisements, certain technical information may be collected automatically by integrated third-party service providers (such as Google AdMob and Google Play Services):\n\n• Device hardware model, manufacturer, and screen resolution\n• Operating system version (e.g., Android version)\n• Web browser type and language preferences (for web/PWA players)\n• Internet Protocol (IP) address (used for approximate country-level geographic location and network routing)\n• Google Advertising Identifier (GAID / AAID)\n• Crash logs, app performance telemetry, and ad interaction events'],
  ['4. Third-Party Advertising & Ad Partners', 'Blockzu displays advertisements to support ongoing development and keep the game 100% free to play. We partner with certified third-party ad networks, primarily Google AdMob (for Android) and Google AdSense / Google H5 Games Ads (for Web).\n\nThese advertising partners may use cookies, advertising identifiers (GAID), and SDKs to deliver, personalize, and measure advertisements.\n\nFor more details on how Google manages advertising data, please review:\n• Google Privacy Policy: https://policies.google.com/privacy\n• Google AdMob Policies: https://support.google.com/admob'],
  ['5. Rewarded Advertisements (100% Optional)', 'Blockzu may offer optional rewarded video advertisements. Players may voluntarily choose to watch a short sponsored video in exchange for in-game bonuses (such as extra coins or second-chance game revives). Watching rewarded advertisements is entirely voluntary and is never required to progress in the game.'],
  ['6. Anonymous Analytics & Diagnostics', 'We may collect aggregated, non-personally identifiable diagnostic and analytics metrics to improve game performance and responsiveness. This includes average session length, feature usage rates, rewarded ad completion rates, frame rate metrics, and crash stack traces. Analytics data is used solely to maintain application health and optimize user experience.'],
  ['7. Data Deletion & Storage Management', 'Because Blockzu stores your gameplay data locally on your device, you have complete control over your data and can permanently delete all stored game progress at any time:\n\n• Android App: Open Settings → Apps → Blockzu → Storage & Cache → tap "Clear Storage" (or "Clear Data").\n• Web Browser / PWA: Clear your browser cookies and site storage for priorapp.co.in / blockzu.priorapp.co.in, or uninstall the PWA from your device.\n\nNote: Clearing local data permanently resets your high scores, coin balances, and unlocked themes.'],
  ['8. Personalized Ads & Advertising Controls (Opt-Out)', 'You have the right to limit or opt out of personalized interest-based advertising at any time through your device settings:\n\n• Android: Navigate to Settings → Google → Ads → select "Reset Advertising ID" or "Delete Advertising ID".\n• Web Browser: Adjust your browser tracking prevention settings or opt out via the Digital Advertising Alliance (aboutads.info/choices).\n\nWhen personalized ads are disabled, you will still see advertisements, but they will be contextual rather than based on your browsing interests.'],
  ['9. GDPR & EEA/UK User Consent (Google UMP)', 'For players located in the European Economic Area (EEA), Switzerland, and the United Kingdom, Blockzu utilizes Google\'s User Messaging Platform (UMP) consent SDK to present transparent consent choices regarding cookies and personalized advertising in full compliance with the General Data Protection Regulation (GDPR). You may modify your consent choices at any time.'],
  ['10. Children\'s Privacy', 'Blockzu is designed and rated for a general audience (Everyone). We do not knowingly collect or solicit personal information from children under 13 years of age (or the applicable legal age in your jurisdiction). In accordance with Google Play Families Policy and COPPA, advertising delivered in child-directed environments is non-personalized. If you believe a child has provided us with personal data, please contact us immediately for prompt investigation and removal.'],
  ['11. Security & Data Protection', 'We implement reasonable technical, operational, and administrative safeguards to protect any data associated with Blockzu. However, no method of electronic transmission over the Internet or digital storage can be guaranteed to be 100% secure.'],
  ['12. Google Play Data Safety Summary', 'For full transparency in accordance with the Google Play Console Data Safety requirements:\n\n• Data Collected: Device IDs, Advertising IDs (GAID), Crash & Diagnostic logs.\n• Data Shared with Third Parties: Yes (Google AdMob for ad delivery and measurement).\n• Encryption in Transit: Yes, all network communications use standard HTTPS / TLS encryption.\n• Data Deletion Mechanism: Yes, users can erase all stored data anytime via "Clear Data" in device settings.\n• Account Creation: Not required.\n• In-App Purchases: None (Free-to-Play).\n• Precise Location: Never collected (no GPS permissions requested).'],
  ['13. Changes to This Privacy Policy', 'We may periodically update this Privacy Policy to reflect changes in our legal obligations, features, or advertising integrations. Any updates will be posted directly on this page with an updated "Last Updated" date. Your continued use of Blockzu following any revisions indicates your acceptance of the updated policy.']
]

export default function BlockzuPrivacyPolicy() {
  return (
    <main>
      <section className="directory-header policy-header">
        <div className="container">
          <span className="badge">Blockzu / Legal</span>
          <h1>Privacy policy for Blockzu.</h1>
          <p>Effective September 2026 • Last updated September 25, 2026</p>
        </div>
      </section>
      <section className="section compact-section policy-content">
        <div className="container narrow">
          <p className="policy-lead">
            Welcome to Blockzu, a free 8x8 block puzzle game developed and published by Priora.
            Your privacy and trust are our top priorities. This Privacy Policy explains what information may be collected when you play Blockzu on Android, Web browsers, and Progressive Web Apps (PWAs), how that information is utilized, and the choices available to you.
          </p>
          {sections.map(([title, body]) => (
            <section className="policy-block" key={title}>
              <h2>{title}</h2>
              {body.split('\n\n').map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </section>
          ))}
          <section className="policy-block">
            <h2>14. Contact Us</h2>
            <p>
              If you have any questions, concerns, or requests regarding this Privacy Policy or your data, please reach out to:
            </p>
            <p>
              <strong>Developer:</strong> Priora / PriorApp Platform
            </p>
            <p>
              <strong>Email:</strong> <a className="policy-link" href="mailto:priorahq@gmail.com">priorahq@gmail.com <ArrowUpRight size={14} /></a>
            </p>
            <p>
              <strong>Website:</strong> <a className="policy-link" href="https://priorapp.co.in">priorapp.co.in <ArrowUpRight size={14} /></a>
            </p>
            <p>
              <strong>Game Portal:</strong> <a className="policy-link" href="https://blockzu.priorapp.co.in">blockzu.priorapp.co.in <ArrowUpRight size={14} /></a>
            </p>
            <p>
              <strong>Privacy Policy URL:</strong> <a className="policy-link" href="https://priorapp.co.in/privacy/blockzu">priorapp.co.in/privacy/blockzu <ArrowUpRight size={14} /></a>
            </p>
          </section>
        </div>
      </section>
    </main>
  )
}
