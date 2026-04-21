import { useEffect } from 'react';

export default function AboutPage({ language = 'en' }) {
  useEffect(() => {
    const slides = document.querySelectorAll('.slide');
    const dots = document.querySelectorAll('.nd');

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const index = Array.from(slides).indexOf(entry.target);
          dots.forEach(dot => dot.classList.remove('on'));
          if (dots[index]) dots[index].classList.add('on');
        }
      });
    }, { threshold: 0.4 });

    slides.forEach(slide => observer.observe(slide));

    return () => observer.disconnect();
  }, []);

  const copy = language === 'ro'
    ? {
        heroEyebrow: 'Pilot profesionist de karting',
        heroDesc: 'Pilot de curse din Romania',
        heroBtn: 'Afla mai mult',
        driverEyebrow: '01 · Povestea mea',
        driverTitle: 'Despre',
        driverTitleAccent: 'Mine',
        p1: 'Ma numesc Alexandru Radita, iar prima data cand am urcat intr-un kart a fost in februarie 2024, la 12 ani. Nu mai condusesem niciodata pana atunci, dar din primul tur am stiut ca asta vreau sa fac. Am inceput sa merg saptamanal, iar in cateva luni ajunsesem in top split pe leaderboard-urile de rentals.',
        p2: 'In vara lui 2024 am participat la primul meu test camp profesionist - cinci zile alaturi de piloti si antrenori experimentati. Sunt convins ca am fost cel mai rapid pilot de acolo. Dar la acel moment nu ne permiteam sa concuram profesionist, asa ca am continuat: rentals, sprint races, progres in fiecare saptamana.',
        p3: 'In iunie 2025, totul s-a schimbat. Am primit o oportunitate reala de test, iar potentialul meu a fost remarcat imediat. Am petrecut toata vara cu cinci zile de test pe saptamana, pregatindu-mi debutul in Rotax Max Challenge Romania.',
        p4: 'De atunci am concurat in patru etape nationale si doua evenimente internationale in Italia - ROK Winter Trophy la Lonato si etapa RMC Central & Eastern Europe la Jesolo. Am trecut de la primul kart la curse pe circuite europene in doar doi ani, iar asta e doar inceputul.',
        cardMeta: 'Romania · 14 ani',
        statYears: '2',
        statYearsUnit: 'ani',
        statYearsLabel: 'De la primul kart',
        statBest: 'P6',
        statBestLabel: 'Cea mai buna clasare',
        statNational: '4',
        statNationalLabel: 'Curse nationale',
        statIntl: '2',
        statIntlLabel: 'Curse internationale',
        newsKicker: 'Noutati',
        newsTitle: 'Ultimele stiri',
        read: 'Citeste articolul',
        age: 'Varsta',
        nationality: 'Nationalitate',
        recordEyebrow: 'Rezultate',
        recordTitle: 'Performanta in sezon',
        qualifying: 'Calificari',
        grid: 'Grila',
        final: 'Finala',
        heat4: 'Mansa 4',
        race: 'Cursa',
        touch: 'Ia legatura',
        team: 'Echipa',
        phone: 'Telefon',
      }
    : {
        heroEyebrow: 'Professional Karting Driver',
        heroDesc: 'Racing driver from Romania',
        heroBtn: 'Learn more',
        driverEyebrow: '01 · My Story',
        driverTitle: 'About',
        driverTitleAccent: 'Me',
        p1: 'My name is Alexandru Radita, and I first sat in a kart in February 2024, aged 12. I had never done it before, but the moment I got on track, I knew this was what I wanted to do with my life. I started going every week, and within months I was at the top split of the rental leaderboards.',
        p2: 'In the summer of 2024, I attended my first professional test camp - five days with experienced drivers and coaches. I am confident I was the quickest driver there. But at the time, we could not afford to race professionally. So I kept showing up, kept doing rentals and sprint races, kept getting faster.',
        p3: 'In June 2025, everything changed. I was given a serious test opportunity and my potential was recognised immediately. I spent the entire summer doing five test days a week to prepare, and made my competitive debut in the Rotax Max Challenge Romania shortly after.',
        p4: 'Since then I have raced in four national rounds and two international events in Italy - the ROK Winter Trophy in Lonato and the RMC Central & Eastern European round in Jesolo. I went from never having driven a kart to racing on European circuits in just two years, and this is only the beginning.',
        cardMeta: 'Romania · Age 14',
        statYears: '2',
        statYearsUnit: 'yrs',
        statYearsLabel: 'Since First Kart',
        statBest: 'P6',
        statBestLabel: 'Best Race Finish',
        statNational: '4',
        statNationalLabel: 'National Races',
        statIntl: '2',
        statIntlLabel: 'Intl. Races',
        newsKicker: 'News',
        newsTitle: 'Latest Articles',
        read: 'Read Article',
        age: 'Age',
        nationality: 'Nationality',
        recordEyebrow: 'Track Record',
        recordTitle: 'Season Performance',
        qualifying: 'Qualifying',
        grid: 'Grid',
        final: 'Final',
        heat4: 'Heat 4',
        race: 'Race',
        touch: 'Get in Touch',
        team: 'Team',
        phone: 'Phone',
      };

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

  const goToSection = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <main className="about-page">
      <style jsx>{`
        /* ════════════════════════════════════════
           TOKENS (Preserved)
        ═════════════════════════════════════════ */
        :root {
          --red:     #E8001D;
          --orange:  #FF6B00;
          --teal:    #009B8D;
          --dark:    #FFFFFF;
          --dark2:   #FBFAF7;
          --dark3:   #F4F1EB;
          --card:    #FFFFFF;
          --border:  rgba(18,34,41,0.10);
          --gray:    #6B7785;
          --muted:   #55646D;
          --white:   #0D1C24;
          --accent:  #009B8D;
        }
        .about-page{background:linear-gradient(180deg,#fff 0%,#fbfaf7 100%); color:#0D1C24;}
        img{display:block;max-width:100%}

        /* ════════════════════════════════════════
           NAV DOTS
        ═════════════════════════════════════════ */
        .nav-dots{
          position:fixed;right:20px;top:50%;
          transform:translateY(-50%);
          display:flex;flex-direction:column;gap:10px;
          z-index:1000;
        }
        .nd{
          width:8px;height:8px;border-radius:50%;
          background:rgba(18,34,41,0.18);
          border:none;cursor:pointer;
          transition:background .25s,transform .25s;
          padding:0;
        }
        .nd:hover,.nd.on{background:var(--red);transform:scale(1.4)}

        /* ════════════════════════════════════════
           SHARED SLIDE
        ═════════════════════════════════════════ */
        .slide{
          min-height:100vh;
          width:100%;
          position:relative;
          overflow:hidden;
          display:flex;
          flex-direction:column;
          justify-content:center;
          padding:72px 88px;
        }
        @media(max-width:900px){.slide{padding:48px 28px}}

        /* ════════════════════════════════════════
           TYPOGRAPHY HELPERS
        ═════════════════════════════════════════ */
        .eyebrow{
          font-family:'Barlow Condensed',sans-serif;
          font-size:11px;font-weight:600;
          letter-spacing:5px;text-transform:uppercase;
          color:var(--red);
          display:flex;align-items:center;gap:12px;
          margin-bottom:18px;
        }
        .eyebrow::before{content:'';display:block;width:32px;height:2px;background:var(--red)}

        .display{
          font-family:'Teko',sans-serif;
          font-weight:700;
          line-height:.9;
          text-transform:uppercase;
          letter-spacing:-1px;
        }

        /* ════════════════════════════════════════
           SECTIONS
        ═════════════════════════════════════════ */
        #s1{
          padding:0;
          min-height:100vh;
          display:grid;
          grid-template-columns:1fr 1fr;
        }
        @media(max-width:900px){
          #s1{
            grid-template-columns:1fr;
            min-height:auto;
          }
        }

        .cover-img{
          position:relative;
          overflow:hidden;
          min-height:420px;
        }
        .cover-img img{
          width:100%;height:100%;
          object-fit:cover;object-position:top center;
        }
        .cover-img::after{
          content:'';
          position:absolute;inset:0;
          background:linear-gradient(to right, transparent 60%, var(--dark) 100%);
        }

        .cover-content{
          display:flex;
          flex-direction:column;
          justify-content:center;
          padding:72px 64px 72px 56px;
          background:linear-gradient(180deg, rgba(255,255,255,0.98), rgba(247,245,241,0.96));
        }
        @media(max-width:900px){
          .cover-img{
            display:block;
            min-height:320px;
          }
          .cover-img::after{
            background:linear-gradient(to top, rgba(255,255,255,0.18) 0%, transparent 45%);
          }
          .cover-content{padding:34px 22px 38px}
        }

        .cover-name{font-size:clamp(60px,8vw,100px)}
        .cover-name span{color:var(--red)}

        .cover-desc{
          margin-top:28px;
          font-size:17px;
          color:var(--muted);
          line-height:1.7;
          max-width:420px;
        }

        .cover-proposal-btn{
          display:inline-flex;
          align-items:center;
          justify-content:center;
          margin-top:22px;
          padding:11px 16px;
          border-radius:999px;
          border:1px solid rgba(232,0,29,0.45);
          background:rgba(232,0,29,0.10);
          color:#0D1C24;
          font-family:'Barlow Condensed',sans-serif;
          font-size:12px;
          letter-spacing:0.14em;
          text-transform:uppercase;
          text-decoration:none;
          transition:transform .2s ease, background .2s ease, border-color .2s ease;
          width:fit-content;
        }
        .cover-proposal-btn:hover{
          transform:translateY(-2px);
          border-color:rgba(255,107,0,.55);
          background:rgba(255,107,0,.16);
        }

        /* DRIVER STATS CARD */
        #s2{background:var(--dark2)}
        .s2-grid{
          display:grid;
          grid-template-columns:1fr 420px;
          gap:72px;align-items:start;
        }
        @media(max-width:1100px){.s2-grid{grid-template-columns:1fr;gap:48px}}

        .about-body{font-size:17px;color:var(--muted);line-height:1.8}
        .about-body p+p{margin-top:22px}

        .driver-card{
          background:linear-gradient(180deg, rgba(255,255,255,0.99), rgba(247,245,241,0.97));
          border:1px solid var(--border);
          box-shadow:0 18px 50px rgba(15,24,29,0.08);
          position:sticky;top:40px;
        }
        .driver-card img{width:100%; height:320px; object-fit:cover;}
        .driver-card-body{padding:24px}
        .driver-name{font-family:'Teko',sans-serif; font-size:32px; font-weight:700; text-transform:uppercase;}
        .driver-name span{color:var(--red)}
        .driver-meta{font-size:12px; letter-spacing:3px; text-transform:uppercase; color:var(--gray); margin-bottom:20px;}

        .driver-stats{
          display:grid;grid-template-columns:1fr 1fr;
          gap:1px;background:var(--border);
          border-top:1px solid var(--border);
        }
        .ds{background:var(--dark3); padding:16px;}
        .ds .n{font-family:'Teko',sans-serif; font-size:36px; font-weight:700; color:var(--white); line-height:1;}
        .ds .n em{font-style:normal; font-size:.5em; margin-left:4px; letter-spacing:.03em; color:var(--muted)}
        .ds .l{font-size:11px; letter-spacing:2px; text-transform:uppercase; color:var(--gray); margin-top:3px}

        .about-news-wrap {
          margin-top: 42px;
          display: grid;
          gap: 18px;
        }

        .about-news-wrap .news-grid {
          grid-template-columns: repeat(3, minmax(0, 1fr));
        }

        @media(max-width:1100px) {
          .about-news-wrap .news-grid {
            grid-template-columns: 1fr;
          }
        }

        .about-journey-wrap {
          margin-top: 34px;
          border: 1px solid var(--border);
          background: var(--dark3);
          padding: 24px;
        }

        .about-journey-wrap .display {
          font-size: clamp(36px, 4.6vw, 58px);
          margin: 0 0 24px;
        }

        .about-journey-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 16px;
        }

        @media(max-width:1100px) {
          .about-journey-grid {
            grid-template-columns: 1fr;
          }
        }

        .about-journey-col {
          display: grid;
          gap: 12px;
        }

        .about-journey-item {
          background: var(--card);
          border: 1px solid var(--border);
          border-left: 3px solid var(--red);
          padding: 14px;
        }

        .about-journey-date {
          font-family: 'Barlow Condensed', sans-serif;
          font-size: 12px;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: var(--red);
        }

        .about-journey-title {
          margin-top: 6px;
          font-family: 'Barlow Condensed', sans-serif;
          font-size: 19px;
          color: var(--white);
        }

        .about-journey-desc {
          margin-top: 8px;
          font-size: 14px;
          line-height: 1.6;
          color: var(--muted);
        }

        /* GALLERY */
        #s3{padding:0; min-height:auto; display:grid; grid-template-columns:2fr 1fr 1fr; height:520px;}
        @media(max-width:900px){#s3{grid-template-columns:1fr; height:auto}}
        .gallery-cell{overflow:hidden; position:relative}
        .gallery-cell img{width:100%; height:100%; object-fit:cover; transition:transform .6s ease;}
        .gallery-cell:hover img{transform:scale(1.05)}

        /* RESULTS */
        #s4{background:var(--dark)}
        .results-wrap{display:grid; grid-template-columns:repeat(3,1fr); gap:14px;}
        @media(max-width:1100px){.results-wrap{grid-template-columns:repeat(2,1fr)}}
        @media(max-width:700px){.results-wrap{grid-template-columns:1fr}}
        .rc{background:var(--card); border:1px solid var(--border); border-left:3px solid var(--red); padding:24px 22px;}
        .rrow{display:flex; justify-content:space-between; padding:5px 0; border-bottom:1px solid rgba(18,34,41,.08); font-size:13px;}
        .pos{font-family:'Barlow Condensed',sans-serif; font-weight:600; color:var(--white);}

        /* CONTACT */
        #s5{background:var(--dark2); min-height:60vh;}
        .contact-body{padding:72px 88px;}
        .contact-head{font-family:'Teko',sans-serif; font-size:64px; text-transform:uppercase; margin-bottom:20px;}
        .contact-head em{color:var(--red); font-style:normal;}
        .cdetails{display:flex; flex-wrap:wrap; gap:40px;}
        .ci label{display:block; font-size:10px; letter-spacing:3px; text-transform:uppercase; color:var(--gray); margin-bottom:5px}
        .ci strong{font-family:'Barlow Condensed',sans-serif; font-size:22px; font-weight:400; color:var(--white)}

        .footer{
          background:var(--dark3); padding:20px 88px;
          display:flex; justify-content:space-between; align-items:center;
          border-top:1px solid var(--border);
          font-size:11px; letter-spacing:2px; text-transform:uppercase; color:var(--gray);
        }
        .footer-logo{font-family:'Teko',sans-serif; font-size:24px; font-weight:700; color:var(--white);}
        .footer-logo span{color:var(--red)}
      `}</style>

      <nav className="nav-dots">
        <button className="nd on" onClick={() => goToSection('s1')}></button>
        <button className="nd" onClick={() => goToSection('s2')}></button>
        <button className="nd" onClick={() => goToSection('s3')}></button>
      </nav>

      <section className="slide" id="s1">
        <div className="cover-img">
          <img src="/images/alexandru-hero.JPG" alt="Alexandru Radita racing" />
        </div>
        <div className="cover-content">
          <div className="eyebrow">{copy.heroEyebrow}</div>
          <h1 className="display cover-name">
            Alexandru<br/><span>Radita</span>
          </h1>
          <p className="cover-desc">{copy.heroDesc}</p>
          <button className="cover-proposal-btn" type="button" onClick={() => goToSection('s2')}>
            {copy.heroBtn}
          </button>
        </div>
      </section>

      <section className="slide" id="s2">
        <div className="s2-grid">
          <div className="about-content">
            <div className="eyebrow">{copy.driverEyebrow}</div>
            <h2 className="display" style={{fontSize: 'clamp(44px, 6vw, 80px)', marginBottom: '48px'}}>
              {copy.driverTitle}<br />{copy.driverTitleAccent}
            </h2>
            <div className="about-body">
              <p>{copy.p1}</p>
              <p>{copy.p2}</p>
              <p>{copy.p3}</p>
              <p>{copy.p4}</p>
            </div>
          </div>

          <div className="driver-card">
            <img src="/images/alexandru-portrait.JPG" alt="Alexandru Radita portrait" />
            <div className="driver-card-body">
              <div className="driver-name">Alex <span>Radita</span></div>
              <div className="driver-meta">{copy.cardMeta}</div>
              <div className="driver-stats">
                <div className="ds"><div className="n">{copy.statYears}<em>{copy.statYearsUnit}</em></div><div className="l">{copy.statYearsLabel}</div></div>
                <div className="ds"><div className="n">{copy.statBest}</div><div className="l">{copy.statBestLabel}</div></div>
                <div className="ds"><div className="n">{copy.statNational}</div><div className="l">{copy.statNationalLabel}</div></div>
                <div className="ds"><div className="n">{copy.statIntl}</div><div className="l">{copy.statIntlLabel}</div></div>
              </div>
            </div>
          </div>
        </div>

        <div className="about-news-wrap">
          <section className="about-journey-wrap">
            <div className="eyebrow">02 · Career</div>
            <h3 className="display">My Journey</h3>
            <div className="about-journey-grid">
              <div className="about-journey-col">
                <article className="about-journey-item">
                  <div className="about-journey-date">February 2024</div>
                  <div className="about-journey-title">I Drive a Kart for the First Time</div>
                  <p className="about-journey-desc">Age 12, first rental session. I was immediately hooked. I started going every week and quickly worked my way to the top split of the leaderboards.</p>
                </article>
                <article className="about-journey-item">
                  <div className="about-journey-date">Summer 2024</div>
                  <div className="about-journey-title">First Professional Test Camp</div>
                  <p className="about-journey-desc">Five days with a professional team. No laptimes shared, but I came away knowing I belonged at this level. We just needed to find a way to make it happen financially.</p>
                </article>
                <article className="about-journey-item">
                  <div className="about-journey-date">2024-June 2025</div>
                  <div className="about-journey-title">Grinding - Rentals and Sprint Races</div>
                  <p className="about-journey-desc">While we figured out funding, I kept racing. Sprint races, rentals, every session I could get. Building pace and experience one lap at a time.</p>
                </article>
                <article className="about-journey-item">
                  <div className="about-journey-date">June 2025</div>
                  <div className="about-journey-title">My First Professional Opportunity</div>
                  <p className="about-journey-desc">I test with a new team. They see something. We agree to race together and I immediately begin an intensive block of five test days per week ahead of my debut.</p>
                </article>
              </div>

              <div className="about-journey-col">
                <article className="about-journey-item">
                  <div className="about-journey-date">Summer 2025</div>
                  <div className="about-journey-title">My Racing Debut - RMC Romania</div>
                  <p className="about-journey-desc">I qualify P12 from 18 on debut and score P8 in my very first Final. For a first competitive race with a full professional setup, I was happy with that.</p>
                </article>
                <article className="about-journey-item">
                  <div className="about-journey-date">Summer-Autumn 2025</div>
                  <div className="about-journey-title">National Season - 3 More Rounds</div>
                  <p className="about-journey-desc">I complete the full national championship including the Transylvania Trophy, qualifying inside the top 7 at every event. Consistency I am proud of as a full rookie.</p>
                </article>
                <article className="about-journey-item">
                  <div className="about-journey-date">February 2026</div>
                  <div className="about-journey-title">First International Race - ROK Lonato</div>
                  <p className="about-journey-desc">My first time on an international circuit. South Garda Karting, Lonato. Against Europe&apos;s best junior karters. Steep learning curve, but I would come back.</p>
                </article>
                <article className="about-journey-item">
                  <div className="about-journey-date">March 2026</div>
                  <div className="about-journey-title">RMC Central and Eastern Europe - Jesolo</div>
                  <p className="about-journey-desc">My second international event. I finished Heat 4 P11 in group against 70+ drivers, the result that told me I can compete at this level. More to come.</p>
                </article>
              </div>
            </div>
          </section>

          <div>
            <div className="eyebrow">{copy.newsKicker}</div>
            <h3 className="display" style={{ fontSize: '42px', margin: 0 }}>{copy.newsTitle}</h3>
          </div>
          <section className="news-grid">
            {articles.map((article) => (
              <article key={article.id} className="news-card">
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
                    {copy.read}
                  </a>
                </div>
              </article>
            ))}
          </section>
        </div>
      </section>

      <section className="slide" id="s3">
        <div className="gallery-cell">
          <img src="/images/gallery-racing.JPG" alt="Racing action" />
        </div>
        <div className="gallery-cell">
          <img src="/images/gallery-technical.JPG" alt="Technical setup" />
        </div>
        <div className="gallery-cell">
          <img src="/images/gallery-team3.JPG" alt="Team work" />
        </div>
      </section>

      <footer className="footer">
        <div className="footer-logo">Alexandru <span>Radita</span></div>
        <span>© 2026 Official Driver Page</span>
      </footer>
    </main>
  );
}