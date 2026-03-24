export default function ContactPage() {
  return (
    <main className="page page-accent">
      <section className="hero-panel contact-hero">
        <div>
          <p className="hero-kicker">Contact</p>
          <h1>Let&apos;s talk about a sponsorship fit.</h1>
        </div>
        <p className="hero-copy">
          If you want to discuss sponsorship options, race-weekend presence, partner visibility, or a
          custom package, this page gives you a dedicated place to start the conversation.
        </p>
        <div className="contact-actions">
          <a className="contact-button contact-button-primary" href="tel:+40761636161">
            Call +40 761 636 161
          </a>
          <a className="contact-button" href="#/">
            Back to proposal
          </a>
        </div>
      </section>

      <section className="grid-panel contact-grid">
        <article className="info-card contact-card">
          <span>Direct contact</span>
          <h2>Alexandru Radita</h2>
          <p>Phone: +40 761 636 161</p>
          <p>Best for first contact, sponsor discussions, and proposal follow-up.</p>
        </article>
        <article className="info-card contact-card">
          <span>Team</span>
          <h2>Formula K Romania</h2>
          <p>Category: Rotax Max Challenge Senior</p>
          <p>Use this route to frame the project clearly when discussing partnership scope.</p>
        </article>
        <article className="info-card contact-card">
          <span>What to include</span>
          <h2>Your inquiry</h2>
          <p>Company name, budget range, preferred visibility, and target campaign period.</p>
          <p>This makes it easier to respond with a relevant package instead of a generic answer.</p>
        </article>
      </section>

      <section className="cta-panel contact-summary">
        <div>
          <p className="hero-kicker">Quick summary</p>
          <h2>National and international karting exposure.</h2>
        </div>
        <p>
          Sponsorship conversations can now live on a dedicated page instead of being mixed into the
          proposal deck. If needed, this page can be expanded next with a contact form, media assets,
          or sponsor FAQ sections.
        </p>
      </section>
    </main>
  );
}