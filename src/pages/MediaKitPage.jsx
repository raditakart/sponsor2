import { motion } from 'framer-motion';

export default function ContactPage({ language = 'en' }) {
  const copy = language === 'ro'
    ? {
        kicker: 'Contact',
        title: 'Aici incep discutiile de parteneriat.',
        subtitle: 'Pentru sponsorizari, invitatii la curse, activari de brand sau o propunere personalizata, cel mai simplu este sa ne scrii direct pe email.',
        call: 'office@alexradita.com',
        back: 'Inapoi la propunere',
        qk: 'Contact rapid',
        qt: 'Proiect de curse construit pentru parteneriate selective.',
        qb: 'Trimite-ne un email la office@alexradita.com si iti raspundem cu urmatorii pasi potriviti pentru discutie.',
      }
    : {
        kicker: 'Contact',
        title: 'This is where partnership conversations start.',
        subtitle: 'For sponsorships, race-weekend presence, brand activation, or a tailored package, the best first step is a direct email.',
        call: 'office@alexradita.com',
        back: 'Back to proposal',
        qk: 'Quick contact',
        qt: 'A racing project built for selective brand partnerships.',
        qb: 'Email office@alexradita.com and we will reply with the right next step for the discussion.',
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
          <a className="contact-button contact-button-primary" href="mailto:office@alexradita.com">
            {copy.call}
          </a>
          <a className="contact-button" href="#/proposal">
            {copy.back}
          </a>
        </div>
      </motion.section>

      <section className="cta-panel contact-summary">
        <div>
          <p className="hero-kicker">{copy.qk}</p>
          <h2>{copy.qt}</h2>
        </div>
        <p>{copy.qb}</p>
      </section>
    </main>
  );
}