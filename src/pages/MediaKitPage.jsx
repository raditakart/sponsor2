import { motion } from 'framer-motion';

export default function ContactPage({ language = 'en' }) {
  const copy = language === 'ro'
    ? {
        kicker: 'Contact',
        title: 'Hai sa discutam despre un parteneriat.',
        subtitle: 'Daca vrei sa discutam optiuni de sponsorizare, prezenta la cursa, vizibilitate de brand sau un pachet personalizat, aici este punctul de plecare.',
        call: 'Suna +40 761 636 161',
        back: 'Inapoi la propunere',
        c1s: 'Contact direct',
        c1h: 'Alexandru Radita',
        c1p1: 'Telefon: +40 761 636 161',
        c1p2: 'Ideal pentru primul contact, discutii de sponsorizare si follow-up pe propunere.',
        c2s: 'Echipa',
        c2h: 'Formula K Romania',
        c2p1: 'Categorie: Rotax Max Challenge Senior',
        c2p2: 'Canalul potrivit pentru a defini clar proiectul si scopul parteneriatului.',
        c3s: 'Ce sa incluzi',
        c3h: 'Mesajul tau',
        c3p1: 'Nume companie, buget estimativ, vizibilitatea dorita si perioada campaniei.',
        c3p2: 'Asa putem raspunde rapid cu un pachet relevant, nu unul generic.',
        qk: 'Rezumat rapid',
        qt: 'Expunere nationala si internationala in karting.',
      }
    : {
        kicker: 'Contact',
        title: "Let's talk about a sponsorship fit.",
        subtitle: 'If you want to discuss sponsorship options, race-weekend presence, partner visibility, or a custom package, this page gives you a dedicated place to start the conversation.',
        call: 'Call +40 761 636 161',
        back: 'Back to proposal',
        c1s: 'Direct contact',
        c1h: 'Alexandru Radita',
        c1p1: 'Phone: +40 761 636 161',
        c1p2: 'Best for first contact, sponsor discussions, and proposal follow-up.',
        c2s: 'Team',
        c2h: 'Formula K Romania',
        c2p1: 'Category: Rotax Max Challenge Senior',
        c2p2: 'Use this route to frame the project clearly when discussing partnership scope.',
        c3s: 'What to include',
        c3h: 'Your inquiry',
        c3p1: 'Company name, budget range, preferred visibility, and target campaign period.',
        c3p2: 'This makes it easier to respond with a relevant package instead of a generic answer.',
        qk: 'Quick summary',
        qt: 'National and international karting exposure.',
      };
  return (
    <main className="page page-accent">
      <motion.section
        className="hero-panel contact-hero"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <div>
          <p className="hero-kicker">{copy.kicker}</p>
          <h1>{copy.title}</h1>
        </div>
        <p className="hero-copy">{copy.subtitle}</p>
        <div className="contact-actions">
          <a className="contact-button contact-button-primary" href="tel:+40761636161">
            {copy.call}
          </a>
          <a className="contact-button" href="#/">
            {copy.back}
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
          <span>{copy.c1s}</span>
          <h2>{copy.c1h}</h2>
          <p>{copy.c1p1}</p>
          <p>{copy.c1p2}</p>
        </motion.article>
        <motion.article
          className="info-card contact-card"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 }
          }}
          transition={{ duration: 0.5 }}
        >
          <span>{copy.c2s}</span>
          <h2>{copy.c2h}</h2>
          <p>{copy.c2p1}</p>
          <p>{copy.c2p2}</p>
        </motion.article>
        <motion.article
          className="info-card contact-card"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 }
          }}
          transition={{ duration: 0.5 }}
        >
          <span>{copy.c3s}</span>
          <h2>{copy.c3h}</h2>
          <p>{copy.c3p1}</p>
          <p>{copy.c3p2}</p>
        </motion.article>
      </motion.section>

      <section className="cta-panel contact-summary">
        <div>
          <p className="hero-kicker">{copy.qk}</p>
          <h2>{copy.qt}</h2>
        </div>
        <p>
          
        </p>
      </section>
    </main>
  );
}