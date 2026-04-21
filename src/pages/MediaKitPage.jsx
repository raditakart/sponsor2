import { motion } from 'framer-motion';

export default function ContactPage({ language = 'en' }) {
  const copy = language === 'ro'
    ? {
        kicker: 'Contact',
        title: 'Hai sa discutam despre un parteneriat.',
        subtitle: 'Daca vrei sa discutam optiuni de sponsorizare, prezenta la cursa, vizibilitate de brand sau un pachet personalizat, aici este punctul de plecare.',
        call: 'Email: office@aleradita.com',
      }
    : {
        kicker: 'Contact',
        title: "Let's connect",
        subtitle: 'Thank you for wanting to reach out.',
        call: 'Email: office@aleradita.com',
      };
  return (
    <main className="page page-accent">
      <motion.section
        className="hero-panel contact-hero"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <div className="contact-hero-main">
          <div>
            <p className="hero-kicker">{copy.kicker}</p>
            <h1>{copy.title}</h1>
          </div>
          <p className="hero-copy">{copy.subtitle}</p>
          <div className="contact-actions">
            <a className="contact-button contact-button-primary" href="mailto:office@aleradita.com">
              {copy.call}
            </a>
          </div>
        </div>
        <div className="contact-hero-media">
          <img src="/images/contact.jpeg" alt="Contact" loading="lazy" />
        </div>
      </motion.section>

    </main>
  );
}