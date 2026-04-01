export default function CalendarPage({ language = 'en' }) {
  const copy = language === 'ro'
    ? {
        kicker: 'Calendar',
        title: 'Calendar Sezon 2026',
        subtitle: 'Urmareste toate datele, seriile si locatiile de curse din 2026.',
        focusKicker: 'Focus Sezon',
        focusTitle: 'De la winter trophy pana la etapele finale Superfinal.',
        focusBody: 'Sezonul include evenimente nationale si internationale, cu vizibilitate puternica in Romania si pe circuite cheie din Europa.',
        disclaimer: '*sub rezerva modificarilor',
      }
    : {
        kicker: 'Calendar',
        title: '2026 Racing Season Calendar',
        subtitle: 'Track all race dates, series, and venues for 2026.',
        focusKicker: 'Season Focus',
        focusTitle: 'From winter trophy to the final Superfinal stages.',
        focusBody: 'This season includes both national and international events, with strong visibility in Romania and key European circuits.',
        disclaimer: '*subject to change',
      };
  const events = [
    { date: '21-22 FEB', name: 'ROK WINTER TROPHY', location: 'South Garda Karting' },
    { date: '27 FEB - 1 MAR', name: 'RMC CE 1', location: 'Jesolo' },
    { date: '8-10 MAY', name: 'RMC RO 1', location: 'Prejmer' },
    { date: '29-31 MAY', name: 'RMC RO 2', location: 'București' },
    { date: '12-14 JUN', name: 'RMC RO 3', location: 'București' },
    { date: '3-5 JUL', name: 'RMC RO 4', location: 'Târgu Secuiesc' },
    { date: '28-30 AUG', name: 'RMC RO 5', location: 'Târgu Secuiesc' },
    { date: '4-6 SEP', name: 'TRANSYLVANIAN TROPHY', location: 'Prejmer' },
    { date: '25-27 SEP', name: 'RMC RO 6', location: 'București' },
    { date: '13-17 OCT', name: 'ROK SUPERFINAL', location: 'South Garda Karting' },
    { date: '7-9 NOV', name: 'MOJO TROPHY', location: 'Jesolo' },
  ];

  return (
    <main className="page page-accent page-calendar">
      <section className="hero-panel calendar-hero">
        <div>
          <p className="hero-kicker">{copy.kicker}</p>
          <h1>{copy.title}</h1>
        </div>
        <p className="hero-copy">{copy.subtitle}</p>
      </section>

      <section className="calendar-event-list">
        <ol className="calendar-event-list-items">
          {events.map((event) => (
            <li className="calendar-event-row" key={`${event.date}-${event.name}`}>
              <div className="event-row-left">
                <span className="event-date">{event.date}</span>
                <span className="event-location">{event.location}</span>
              </div>
              <div className="event-row-right">
                <span className="event-name">{event.name}</span>
              </div>
            </li>
          ))}
        </ol>
        <p className="calendar-disclaimer">{copy.disclaimer}</p>
      </section>

      <section className="cta-panel calendar-summary">
        <div>
          <p className="hero-kicker">{copy.focusKicker}</p>
          <h2>{copy.focusTitle}</h2>
        </div>
        <p>{copy.focusBody}</p>
        <p className="calendar-disclaimer">{copy.disclaimer}</p>
      </section>
    </main>
  );
}
