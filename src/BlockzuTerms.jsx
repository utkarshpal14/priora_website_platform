import { ArrowUpRight } from 'lucide-react'

const sections = [
  ['1. Acceptance of Terms', 'Welcome to Blockzu, a block puzzle game developed and published by Priora / PriorApp. These Terms of Service ("Terms") govern your use of Blockzu on Android devices, web browsers, and Progressive Web Apps (PWAs).\n\nBy downloading, installing, accessing, or playing Blockzu, you confirm that you have read, understood, and agree to be bound by these Terms and all applicable laws and regulations. If you do not agree with any part of these Terms, please do not use Blockzu.'],
  ['2. License to Use', 'Priora grants you a limited, personal, non-exclusive, non-transferable, and revocable license to access and play Blockzu for individual, non-commercial entertainment purposes.\n\nYou agree not to:\n• Copy, distribute, duplicate, or redistribute the game or its assets\n• Reverse engineer, decompile, disassemble, or derive the source code of Blockzu\n• Bypass, tamper with, or circumvent game rules, scoring systems, or technical restrictions\n• Use automated tools, scripts, bots, macros, or cheats\n• Exploit Blockzu for any unlawful, commercial, or unauthorized purpose'],
  ['3. Gameplay & Virtual Items (Coins & Themes)', 'Blockzu includes in-game virtual items, including virtual coins, unlocked themes, missions, achievements, multiplier streaks, and player statistics.\n\n• Virtual items have no real-world monetary value and cannot be redeemed, sold, or refunded for real currency.\n• Virtual items cannot be transferred between users or accounts.\n• Virtual items remain the intellectual property of Priora.\n• Because gameplay data is stored locally on your device, game progress, coins, and unlocks may be lost upon clearing device cache, uninstalling the game, or switching devices.'],
  ['4. Advertisements & Monetization', 'Blockzu is free to play and is supported by third-party advertising partners, including Google AdMob, Google AdSense, and Google H5 Games Ads.\n\n• Advertisements may include banners, interstitials, and rewarded video ads.\n• Rewarded ads are 100% optional: players may choose to watch a sponsored video to receive in-game bounties (e.g., bonus coins or game revives).\n• Priora does not guarantee the continuous availability of advertisements or third-party ad inventory.'],
  ['5. Offline & Online Functionality', 'Blockzu is built to support offline gameplay without an active internet connection. However, certain features (such as receiving updated advertisements, claiming ad-based rewards, analytics reporting, and external store links) require an active internet connection.'],
  ['6. User Conduct & Fair Play', 'You agree to use Blockzu in a lawful and respectful manner. You must not exploit software bugs, manipulate game state memory, disrupt game performance, distribute malicious code, or interfere with other users. Priora reserves the right to restrict access to anyone engaging in fraudulent or abusive practices.'],
  ['7. Intellectual Property', 'All rights, title, and interest in and to Blockzu—including but not limited to the game software, source code, game mechanics, 3D graphics, visual effects, logos, artwork, audio, sound effects, UI design, and branding—are owned exclusively by Priora / PriorApp and protected by copyright, trademark, and intellectual property laws. Unauthorized reproduction or commercial use is strictly prohibited.'],
  ['8. Updates, Balance & Modifications', 'Priora reserves the right to update, modify, balance, or adjust game rules, progression rates, theme costs, coin bounties, and features at any time. We may release patches, bug fixes, and new content updates. Continued use of Blockzu following any update constitutes your acceptance of such changes.'],
  ['9. Disclaimer of Warranties', 'Blockzu is provided on an "AS IS" and "AS AVAILABLE" basis without warranties of any kind, whether express, implied, or statutory. To the fullest extent permitted by law, Priora disclaims all warranties, including merchantability, fitness for a particular purpose, non-infringement, continuous uptime, and error-free operation. Your use of the game is solely at your own risk.'],
  ['10. Limitation of Liability', 'To the maximum extent permitted by applicable law, Priora, PriorApp, and their operators, affiliates, and partners shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including loss of gameplay progress, local data loss, device issues, or business interruption arising out of or related to your use of Blockzu. Your sole remedy for dissatisfaction is to stop playing the game.'],
  ['11. Third-Party Services & Links', 'Blockzu may integrate or link to third-party services, including Google Play Services and Google AdMob. These third parties operate under their own independent terms and privacy practices. Priora is not responsible for the content or practices of any third-party services.'],
  ['12. Privacy Policy', 'Your privacy is essential to us. Your use of Blockzu is also governed by the Blockzu Privacy Policy, which details how technical data and local game state are handled.'],
  ['13. Governing Law & Dispute Resolution', 'These Terms of Service shall be governed by, construed, and enforced in accordance with the laws of India, without regard to its conflict of law principles. Any dispute or claim arising out of or relating to these Terms shall be subject to the exclusive jurisdiction of the competent courts located in India.'],
  ['14. Changes to These Terms', 'Priora may revise and update these Terms of Service periodically. Any updates will be posted on this page with an updated "Last Updated" date. Continued use of Blockzu following posted updates signifies your binding acceptance of the revised Terms.']
]

export default function BlockzuTerms() {
  return (
    <main>
      <section className="directory-header policy-header">
        <div className="container">
          <span className="badge">Blockzu / Legal</span>
          <h1>Terms of Service for Blockzu.</h1>
          <p>Effective September 2026 • Last updated September 25, 2026</p>
        </div>
      </section>
      <section className="section compact-section policy-content">
        <div className="container narrow">
          <p className="policy-lead">
            Welcome to Blockzu. These Terms of Service ("Terms") govern your access to and use of the Blockzu block puzzle game on Android, Web browsers, and Progressive Web Apps (PWAs). Blockzu is developed and operated by Priora / PriorApp.
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
            <h2>15. Contact Information</h2>
            <p>
              If you have any questions or inquiries regarding these Terms of Service, please contact us:
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
              <strong>Terms of Service URL:</strong> <a className="policy-link" href="https://priorapp.co.in/terms/blockzu">priorapp.co.in/terms/blockzu <ArrowUpRight size={14} /></a>
            </p>
            <p>
              <strong>Privacy Policy URL:</strong> <a className="policy-link" href="https://priorapp.co.in/privacy/blockzu">priorapp.co.in/privacy/blockzu <ArrowUpRight size={14} /></a>
            </p>
            <p style={{ marginTop: '16px', color: '#64748B', fontSize: '13px' }}>
              © 2026 Priora. All Rights Reserved.
            </p>
          </section>
        </div>
      </section>
    </main>
  )
}
