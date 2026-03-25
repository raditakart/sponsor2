import { motion } from 'framer-motion';

const partners = [
  {
    name: 'Osteomedicare',
    website: 'https://www.osteomedicare.ro',
    description: 'Integrated musculoskeletal wellness platform combining advanced orthopedic diagnostics with personalized rehabilitation to restore peak mobility and joint health.',
    image: '/images/osteomedicare.png',
    imageClass: 'osteomedicare-logo',
    fallback: 'https://via.placeholder.com/420x260.png?text=Osteomedicare',
  },
  {
    name: 'MaraLogistics',
    website: 'https://www.maralogistics.ro',
    description: 'A premier freight forwarding specialist with over 25 years of experience, providing tailored global transport, warehousing, and customs assistance solutions.',
    image: '/images/MaraLogistics.png',
    fallback: 'https://via.placeholder.com/420x260.png?text=MaraLogistics',
  },
  {
    name: 'AIMotor',
    website: 'https://www.aimotor.eu',
    description: 'AI-powered motorsport engineering platform that transforms telemetry and video data into actionable coaching insights for karting and sim racing performance.',
    image: '/images/aimotor.png',
    imageClass: 'aimotor-logo',
    fallback: 'https://via.placeholder.com/420x260.png?text=AIMotor',
  },
];

export default function PartnersPage() {
  return (
    <main className="page page-accent partners-page">
      <section className="hero-panel partners-hero">
        <div>
          <p className="hero-kicker">Partners</p>
          <h1>Official sponsors and technical partners 2026</h1>
        </div>
        <p className="hero-copy">
          Proudly supported by world-class logistics, transport and engineering specialists fueling Alexandru Radita’s racing season.
        </p>
      </section>

      <section className="partner-grid">
        {partners.map((partner, index) => (
          <motion.article
            key={partner.name}
            className="partner-card"
            initial={{ opacity: 0, y: 20, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.45, delay: index * 0.1 }}
            whileHover={{ scale: 1.02, y: -4 }}
          >
            <div className="partner-image-wrap">
              <img
                src={partner.image}
                alt={`${partner.name} logo`}
                className={partner.imageClass || ''}
                onError={(e) => {
                  if (partner.fallback) {
                    e.currentTarget.src = partner.fallback;
                  }
                }}
              />
            </div>
            <div className="partner-content">
              <h2>{partner.name}</h2>
              <p>{partner.description}</p>
              <a href={partner.website} target="_blank" rel="noreferrer" className="partner-link">
                Visit website
              </a>
            </div>
          </motion.article>
        ))}
      </section>

      <section className="cta-panel partners-cta">
        <h2>Join the Team</h2>
        <p>
          Interested in partnering for the 2026 season? Reach out via Contact to explore branded activation, logistics coordination, and trackside exposure. 
        </p>
      </section>
    </main>
  );
}
