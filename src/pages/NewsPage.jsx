import { motion } from 'framer-motion';

const articles = [
  {
    id: 1,
    title: 'Rotax Max Challenge Romania, Etapa 3 – O etapă cu de toate pentru Alexandru Radita',
    date: 'August 29, 2025',
    source: 'Apex Motorsport News',
    excerpt: 'Etapa 3 din Rotax Max Challenge Romania s-a desfășurat la AMC Kart, fiind o nouă etapă cu multe momente interesante și dueluri spectaculoase la toate clasele.',
    image: 'https://apexmotorsportnews.ro/wp-content/uploads/2025/08/WhatsApp-Image-2025-08-15-at-12.35.40.jpeg',
    link: 'https://apexmotorsportnews.ro/rotax-max-challenge-romania-etapa-3-o-etapa-cu-de-toate-pentru-alexandru-radita/',
  },
  {
    id: 2,
    title: 'Rotax Max Challenge Etapa 4 – Weekend perfect pentru Alex Radita',
    date: 'September 9, 2025',
    source: 'Apex Motorsport News',
    excerpt: 'Etapa 4 din Rotax Max Challenge Romania a fost un weekend perfect pentru Alexandru Radita, cu performanțe remarcabile în ambele curse.',
    image: 'https://apexmotorsportnews.ro/wp-content/uploads/2025/09/a12a85cf-d332-42cf-9eb7-38657b7f290f.jpg',
    link: 'https://apexmotorsportnews.ro/rotax-max-challenge-etapa-4-weekend-perfect-pentru-alex-radita/',
  },
  {
    id: 3,
    title: 'Premiera F1: The movie',
    date: 'June 27, 2025',
    source: 'Apex Motorsport News',
    excerpt: 'F1: The Movie, documentarul oficial al Formulei 1, a avut premiera în România pe 27 iunie, la Cinema City din Băneasa Shopping City, în prezența a numeroase personalități din lumea sportului cu motor.',
    image: 'https://apexmotorsportnews.ro/wp-content/uploads/2025/07/1000023010.jpg',
    link: 'https://apexmotorsportnews.ro/premiera-f1-the-movie/',
  },
];

export default function NewsPage() {
  return (
    <main className="page page-accent news-page">
      <section className="hero-panel news-hero">
        <div>
          <p className="hero-kicker">News & Articles</p>
          <h1>Latest from the track</h1>
        </div>
        <p className="hero-copy">
          Stay updated with the latest news, insights, and coverage of Alexandru Radita's racing season and professional achievements.
        </p>
      </section>

      <section className="news-grid">
        {articles.map((article, index) => (
          <motion.article
            key={article.id}
            className="news-card"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: index * 0.1 }}
            whileHover={{ y: -6, transition: { duration: 0.2 } }}
          >
            <div className="news-image">
              <img src={article.image} alt={article.title} />
            </div>
            <div className="news-content">
              <div className="news-meta">
                <span className="news-date">{article.date}</span>
                <span className="news-source">{article.source}</span>
              </div>
              <h2>{article.title}</h2>
              <p>{article.excerpt}</p>
              <a href={article.link} className="news-link" target="_blank" rel="noreferrer">
                Read Article
              </a>
            </div>
          </motion.article>
        ))}
      </section>

      <section className="cta-panel news-cta">
        <h2>Have a Story to Share?</h2>
        <p>
          Journalists, media partners, and content creators are welcome to reach out. Contact us to discuss press opportunities, interviews, or exclusive coverage.
        </p>
      </section>
    </main>
  );
}
