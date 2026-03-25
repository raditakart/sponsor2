import { useEffect } from 'react';

export default function AboutPage() {
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

  const calendarEvents = [
    { date: '21-22 FEB', name: 'ROK WINTER TROPHY', location: 'South Garda Karting', layoutImage: '/images/layout-south-garda.jpg' },
    { date: '27 FEB - 1 MAR', name: 'RMC CE 1', location: 'Jesolo', layoutImage: '/images/layout-jesolo.jpg' },
    { date: '8-10 MAY', name: 'RMC RO 1', location: 'Prejmer', layoutImage: '/images/layout-prejmer.png' },
    { date: '29-31 MAY', name: 'RMC RO 2', location: 'București', layoutImage: '/images/layout-bucuresti.jpg' },
    { date: '12-14 JUN', name: 'RMC RO 3', location: 'București', layoutImage: '/images/layout-bucuresti.jpg' },
    { date: '3-5 JUL', name: 'RMC RO 4', location: 'Târgu Secuiesc', layoutImage: '/images/layout-targu-secuesc.jpg' },
    { date: '28-30 AUG', name: 'RMC RO 5', location: 'Târgu Secuiesc', layoutImage: '/images/layout-targu-secuesc.jpg' },
    { date: '4-6 SEP', name: 'TRANSYLVANIAN TROPHY', location: 'Prejmer', layoutImage: '/images/layout-prejmer.jpg' },
    { date: '25-27 SEP', name: 'RMC RO 6', location: 'București', layoutImage: '/images/layout-bucuresti.jpg' },
    { date: '13-17 OCT', name: 'ROK SUPERFINAL', location: 'South Garda Karting', layoutImage: '/images/layout-south-garda.jpg' },
    { date: '7-9 NOV', name: 'MOJO TROPHY', location: 'Jesolo', layoutImage: '/images/layout-jesolo.jpg' },
  ];

  const monthMap = { JAN: 0, FEB: 1, MAR: 2, APR: 3, MAY: 4, JUN: 5, JUL: 6, AUG: 7, SEP: 8, OCT: 9, NOV: 10, DEC: 11 };

  const parseEventRange = (dateText) => {
    const [rangePart, monthPart] = dateText.split(' ');
    const [startDayText, endDayText] = rangePart.split('-');
    const monthKey = monthPart.slice(0, 3).toUpperCase();
    const year = new Date().getFullYear();
    const startDay = Number(startDayText);
    const endDay = Number(endDayText || startDayText);

    const month = monthMap[monthKey] ?? 0;
    const start = new Date(year, month, startDay);
    const end = new Date(year, month, endDay);

    return { start, end };
  };

  const getNextEvent = () => {
    const today = new Date();
    const next = calendarEvents.find((event) => {
      const { end } = parseEventRange(event.date);
      return end >= today;
    });
    return next || calendarEvents[calendarEvents.length - 1];
  };


  const nextEvent = getNextEvent();

  // Calculate days until next event
  let daysUntilEvent = null;
  if (nextEvent) {
    const { start } = parseEventRange(nextEvent.date);
    const today = new Date();
    // Zero out time for accurate day diff
    start.setHours(0,0,0,0);
    today.setHours(0,0,0,0);
    const diffMs = start - today;
    daysUntilEvent = Math.ceil(diffMs / (1000 * 60 * 60 * 24));
  }

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
          --teal:    #00B4A0;
          --dark:    #07090D;
          --dark2:   #0D1017;
          --dark3:   #141820;
          --card:    #1A202C;
          --border:  rgba(255,255,255,0.07);
        /* DAYS UNTIL EVENT COUNTER */
        .days-until-event {
          display: flex;
          align-items: baseline;
          gap: 10px;
          margin: 10px 0 0 0;
        }
        .days-number {
          font-family: 'Teko', sans-serif;
          font-size: 44px;
          font-weight: 700;
          color: var(--red);
          line-height: 1;
        }
        .days-label {
          font-size: 16px;
          color: var(--muted);
          font-family: 'Barlow', sans-serif;
          font-weight: 500;
          margin-left: 2px;
        }
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
          background:rgba(255,255,255,0.18);
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
        @media(max-width:900px){#s1{grid-template-columns:1fr}}

        .cover-img{
          position:relative;
          overflow:hidden;
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
          background:var(--dark);
        }
        @media(max-width:900px){
          .cover-img{display:none}
          .cover-content{padding:60px 28px}
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
          background:var(--dark3);
          border:1px solid var(--border);
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
        .ds .l{font-size:11px; letter-spacing:2px; text-transform:uppercase; color:var(--gray); margin-top:3px}

        /* GALLERY */
        #s3{padding:0; min-height:auto; display:grid; grid-template-columns:2fr 1fr 1fr; height:520px;}
        @media(max-width:900px){#s3{grid-template-columns:1fr; height:auto}}
        .gallery-cell{overflow:hidden; position:relative}
        .gallery-cell img{width:100%; height:100%; object-fit:cover; transition:transform .6s ease;}
        .gallery-cell:hover img{transform:scale(1.05)}

        .next-event-panel{
          display:grid;
          grid-template-columns:1.1fr 1fr;
          gap:24px;
          align-items:center;
          padding:40px 32px;
          background:var(--dark2);
          border:1px solid var(--border);
          border-radius:14px;
          margin:24px 0;
        }
        .next-event-image{overflow:hidden; border-radius:12px; min-height:260px;}
        .next-event-image img{width:100%; height:100%; object-fit:cover;}
        .next-event-info{display:flex; flex-direction:column; gap:12px;}
        @media(max-width:900px){
          .next-event-panel{grid-template-columns:1fr;}
          .next-event-image{min-height:200px;}
        }

        /* RESULTS */
        #s4{background:var(--dark)}
        .results-wrap{display:grid; grid-template-columns:repeat(3,1fr); gap:14px;}
        @media(max-width:1100px){.results-wrap{grid-template-columns:repeat(2,1fr)}}
        @media(max-width:700px){.results-wrap{grid-template-columns:1fr}}
        .rc{background:var(--card); border:1px solid var(--border); border-left:3px solid var(--red); padding:24px 22px;}
        .rrow{display:flex; justify-content:space-between; padding:5px 0; border-bottom:1px solid rgba(255,255,255,.04); font-size:13px;}
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
          background:var(--dark); padding:20px 88px;
          display:flex; justify-content:space-between; align-items:center;
          border-top:1px solid var(--border);
          font-size:11px; letter-spacing:2px; text-transform:uppercase; color:var(--gray);
        }
        .footer-logo{font-family:'Teko',sans-serif; font-size:24px; font-weight:700; color:var(--white);}
        .footer-logo span{color:var(--red)}

        /* DAYS UNTIL EVENT COUNTER */
        .days-until-event {
          display: flex;
          align-items: baseline;
          gap: 10px;
          margin: 10px 0 0 0;
        }
        .days-number {
          font-family: 'Teko', sans-serif;
          font-size: 44px;
          font-weight: 700;
          color: var(--red);
          line-height: 1;
        }
        .days-label {
          font-size: 16px;
          color: var(--muted);
          font-family: 'Barlow', sans-serif;
          font-weight: 500;
          margin-left: 2px;
        }
      `}</style>

      <nav className="nav-dots">
        <button className="nd on" onClick={() => goToSection('s1')}></button>
        <button className="nd" onClick={() => goToSection('s2')}></button>
        <button className="nd" onClick={() => goToSection('s3')}></button>
        <button className="nd" onClick={() => goToSection('s4')}></button>
        <button className="nd" onClick={() => goToSection('s5')}></button>
      </nav>

      <section className="slide" id="s1">
        <div className="cover-img">
          <img src="/images/alexandru-hero.JPG" alt="Alexandru Radita racing" />
        </div>
        <div className="cover-content">
          <div className="eyebrow">Professional Karting Driver</div>
          <h1 className="display cover-name">
            Alexandru<br/><span>Radita</span>
          </h1>
          <p className="cover-desc">
            Competing in the Rotax Max Challenge — Senior.
            Representing Formula K Romania with a focus on precision, speed, and consistent top-tier performance.
          </p>
        </div>
      </section>

      <section className="slide" id="s2">
        <div className="s2-grid">
          <div className="about-content">
            <div className="eyebrow">The Driver</div>
            <h2 className="display" style={{fontSize: '48px', marginBottom: '32px'}}>Behind the Wheel</h2>
            <div className="about-body">
              <p>Alexandru Radita is a 14-year-old racing driver from Romania, currently competing in the <strong>Rotax Max Challenge — Senior</strong> category.</p>
              <p>Representing <strong>Formula K Romania</strong>, Alex has established himself as a serious contender on the national circuit, known for his technical feedback and race-winning pace.</p>
              <p>His focus for the 2026 season remains on the podium, utilizing a disciplined approach to both physical training and technical preparation with the team.</p>
            </div>
          </div>

          <div className="driver-card">
            <img src="/images/alexandru-portrait.JPG" alt="Alexandru Radita portrait" />
            <div className="driver-card-body">
              <div className="driver-name">Alexandru <span>Radita</span></div>
              <div className="driver-meta">Rotax Max Senior · #14</div>
              <div className="driver-stats">
                <div className="ds"><div className="n">14</div><div className="l">Age</div></div>
                <div className="ds"><div className="n">ROU</div><div className="l">Nationality</div></div>
              </div>
            </div>
          </div>
        </div>
      </section>


      <section className="slide" id="s2a">
        <div className="next-event-panel">
          <div className="next-event-image">
            <img src={nextEvent.layoutImage ?? '/images/layout-default.jpg'} alt="Track layout" />
          </div>
          <div className="next-event-info">
            <div className="eyebrow">Next Event</div>
            <h2 className="display" style={{ fontSize: '40px', marginBottom: '18px' }}>{nextEvent.name}</h2>
            <p className="about-body">{nextEvent.date} · {nextEvent.location}</p>
            {typeof daysUntilEvent === 'number' && daysUntilEvent >= 0 && (
              <div className="days-until-event">
                <span className="days-number">{daysUntilEvent}</span>
                <span className="days-label">day{daysUntilEvent === 1 ? '' : 's'} left</span>
              </div>
            )}
            <p className="about-body">This section automatically advances to the next scheduled event once the current event has passed.</p>
          </div>
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

      <section className="slide" id="s4">
        <div className="eyebrow">Track Record</div>
        <h2 className="display" style={{fontSize: '48px', marginBottom: '48px'}}>Season Performance</h2>
        <div className="results-wrap">
          <div className="rc">
            <div className="flag-line">🇷🇴 Romanian Cup</div>
            <h3>Rotax Max Senior</h3>
            <div className="rrow"><span className="stage">Qualifying</span><span className="pos">P1</span></div>
            <div className="rrow"><span className="stage">Pre-Final</span><span className="pos">P2</span></div>
            <div className="rrow"><span className="stage">Final</span><span className="pos" style={{color: '#4ade80'}}>P1</span></div>
          </div>
          <div className="rc">
            <div className="flag-line">🇷🇴 National Championship</div>
            <h3>Rotax Max Senior</h3>
            <div className="rrow"><span className="stage">Round 1</span><span className="pos">P3</span></div>
            <div className="rrow"><span className="stage">Round 2</span><span className="pos">P1</span></div>
            <div className="rrow"><span className="stage">Round 3</span><span className="pos">P2</span></div>
          </div>
          <div className="rc" style={{background: 'rgba(255,255,255,0.02)', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
            <span className="display" style={{color: 'var(--gray)', fontSize: '24px'}}>RACE YOUR WAY</span>
          </div>
        </div>
      </section>

      <section className="slide" id="s5">
        <div className="contact-body">
          <h2 className="contact-head">Get in <em>Touch</em></h2>
          <div className="cdetails">
            <div className="ci"><label>Team</label><strong>Formula K Romania</strong></div>
            <div className="ci"><label>Phone</label><strong>+40 761636161</strong></div>
            <div className="ci"><label>Nationality</label><strong>Romanian 🇷🇴</strong></div>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="footer-logo">Alexandru <span>Radita</span></div>
        <span>© 2026 Official Driver Page</span>
      </footer>
    </main>
  );
}