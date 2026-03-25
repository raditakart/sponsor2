import { motion } from 'framer-motion';

export default function ContactPage() {
  return (
    <main className="page page-accent">
      <motion.section
        className="hero-panel contact-hero"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
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
      </motion.section>

      <motion.section
        className="grid-panel contact-grid"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: {
              staggerChildren: 0.2
            }
          }
        }}
      >
        <motion.article
          className="info-card contact-card"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 }
          }}
            transition={{ duration: 0.5 }}
        >
          <span>Direct contact</span>
          <h2>Alexandru Radita</h2>
          <p>Phone: +40 761 636 161</p>
          <p>Best for first contact, sponsor discussions, and proposal follow-up.</p>
        </motion.article>
        <motion.article
          className="info-card contact-card"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 }
          }}
          transition={{ duration: 0.5 }}
        >
          <span>Team</span>
          <h2>Formula K Romania</h2>
          <p>Category: Rotax Max Challenge Senior</p>
          <p>Use this route to frame the project clearly when discussing partnership scope.</p>
        </motion.article>
        <motion.article
          className="info-card contact-card"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 }
          }}
          transition={{ duration: 0.5 }}
        >
          <span>What to include</span>
          <h2>Your inquiry</h2>
          <p>Company name, budget range, preferred visibility, and target campaign period.</p>
          <p>This makes it easier to respond with a relevant package instead of a generic answer.</p>
        </motion.article>
      </motion.section>

      <section className="cta-panel contact-summary">
        <div>
          <p className="hero-kicker">Quick summary</p>
          <h2>National and international karting exposure.</h2>
        </div>
        <p>
          
        </p>
      </section>
    </main>
  );
}