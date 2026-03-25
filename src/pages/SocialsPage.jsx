import { useEffect } from 'react';

export default function SocialsPage() {
  const instagramPosts = [
    'https://www.instagram.com/p/DVGnXnwjLQY/?img_index=1',
    'https://www.instagram.com/p/DVtzDFCjX0u/?img_index=1',
    'https://www.instagram.com/p/DUyK68BDMim/',
  ];
  const tiktokPosts = [
    'https://www.tiktok.com/@alexradita_/photo/7585828951759654166?lang=ro-RO',
    'https://www.tiktok.com/@alexradita_/video/7528058254694337814?lang=ro-RO',
    'https://www.tiktok.com/@alexradita_/video/7558762229705788694?lang=ro-RO',
  ];

  return (
    <main className="page page-accent socials-page">
      <section className="hero-panel socials-hero">
        <div>
          <p className="hero-kicker">Socials</p>
          <h1>Follow Alexandru Radita on Instagram and TikTok</h1>
        </div>
        <p className="hero-copy">
          Keep up with the latest track action, sponsorship updates, and event highlights from the 2026 season.
        </p>
      </section>

      <section className="socials-feed">
        <h2>Instagram Feed (@alexraditaracing)</h2>
        {instagramPosts.map((post) => (
          <div key={post} className="social-post-entry">
            <div className="social-post-placeholder">
              <img
                src={`https://via.placeholder.com/400x300.png?text=Instagram+Post`}
                alt="Instagram post placeholder"
                style={{ width: '100%', height: 'auto', borderRadius: '8px' }}
              />
            </div>
            <p>View this post on Instagram</p>
            <button className="social-open-modal" onClick={() => window.open(post, '_blank')}>
              Open in new tab
            </button>
          </div>
        ))}

        <h2>TikTok Feed (@alexradita_)</h2>
        {tiktokPosts.map((post) => (
          <div key={post} className="social-post-entry">
            <div className="social-post-placeholder">
              <img
                src={`https://via.placeholder.com/400x300.png?text=TikTok+Post`}
                alt="TikTok post placeholder"
                style={{ width: '100%', height: 'auto', borderRadius: '8px' }}
              />
            </div>
            <p>View this post on TikTok</p>
            <button className="social-open-modal" onClick={() => window.open(post, '_blank')}>
              Open in new tab
            </button>
          </div>
        ))}
      </section>

      <section className="cta-panel socials-summary">
        <p>
          Click "Open in new tab" to view the full post. Update the post URLs in <code>src/pages/SocialsPage.jsx</code> if needed.
        </p>
      </section>
    </main>
  );
}
