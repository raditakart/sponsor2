import layoutPrejmerImage from '../../images/layout-prejmer.JPG';

export default function CalendarPage({ language = 'en' }) {
  const fallbackLayoutImage = layoutPrejmerImage;

  const copy = language === 'ro'
    ? {
        kicker: 'Calendar',
        title: 'Calendar Sezon 2026',
        subtitle: 'Urmareste toate datele, seriile si locatiile de curse din 2026.',
        nextEyebrow: 'Urmatorul eveniment',
        autoAdvance: 'Aceasta sectiune trece automat la urmatorul eveniment programat dupa incheierea celui curent.',
        daysLeft: 'zile ramase',
        dayLeft: 'zi ramasa',
        focusKicker: 'Focus Sezon',
        focusTitle: 'De la winter trophy pana la etapele finale Superfinal.',
        focusBody: 'Sezonul include evenimente nationale si internationale, cu vizibilitate puternica in Romania si pe circuite cheie din Europa.',
        disclaimer: '*sub rezerva modificarilor',
      }
    : {
        kicker: 'Calendar',
        title: '2026 Racing Season Calendar',
        subtitle: 'Track all race dates, series, and venues for 2026.',
        nextEyebrow: 'Next Event',
        autoAdvance: 'This section automatically advances to the next scheduled event once the current event has passed.',
        daysLeft: 'days left',
        dayLeft: 'day left',
        focusKicker: 'Season Focus',
        focusTitle: 'From winter trophy to the final Superfinal stages.',
        focusBody: 'This season includes both national and international events, with strong visibility in Romania and key European circuits.',
        disclaimer: '*subject to change',
      };
  const events = [
    { date: '21-22 FEB', name: 'ROK WINTER TROPHY', location: 'South Garda Karting', layoutImage: fallbackLayoutImage },
    { date: '27 FEB - 1 MAR', name: 'RMC CE 1', location: 'Jesolo', layoutImage: fallbackLayoutImage },
    { date: '8-10 MAY', name: 'RMC RO 1', location: 'Prejmer', layoutImage: fallbackLayoutImage },
    { date: '29-31 MAY', name: 'RMC RO 2', location: 'București', layoutImage: fallbackLayoutImage },
    { date: '12-14 JUN', name: 'RMC RO 3', location: 'București', layoutImage: fallbackLayoutImage },
    { date: '3-5 JUL', name: 'RMC RO 4', location: 'Târgu Secuiesc', layoutImage: fallbackLayoutImage },
    { date: '28-30 AUG', name: 'RMC RO 5', location: 'Târgu Secuiesc', layoutImage: fallbackLayoutImage },
    { date: '4-6 SEP', name: 'TRANSYLVANIAN TROPHY', location: 'Prejmer', layoutImage: fallbackLayoutImage },
    { date: '25-27 SEP', name: 'RMC RO 6', location: 'București', layoutImage: fallbackLayoutImage },
    { date: '13-17 OCT', name: 'ROK SUPERFINAL', location: 'South Garda Karting', layoutImage: fallbackLayoutImage },
    { date: '7-9 NOV', name: 'MOJO TROPHY', location: 'Jesolo', layoutImage: fallbackLayoutImage },
  ];

  const monthMap = { JAN: 0, FEB: 1, MAR: 2, APR: 3, MAY: 4, JUN: 5, JUL: 6, AUG: 7, SEP: 8, OCT: 9, NOV: 10, DEC: 11 };

  const parseEventRange = (dateText) => {
    const normalized = dateText.toUpperCase().replace(/\s+/g, ' ').trim().replace(/\s*-\s*/g, '-');

    const sameMonthMatch = normalized.match(/^(\d{1,2})-(\d{1,2})\s([A-Z]{3})$/);
    const splitMonthMatch = normalized.match(/^(\d{1,2})\s([A-Z]{3})-(\d{1,2})\s([A-Z]{3})$/);
    const singleDayMatch = normalized.match(/^(\d{1,2})\s([A-Z]{3})$/);
    const year = new Date().getFullYear();

    if (sameMonthMatch) {
      const [, startDayText, endDayText, monthKey] = sameMonthMatch;
      const month = monthMap[monthKey] ?? 0;
      return {
        start: new Date(year, month, Number(startDayText)),
        end: new Date(year, month, Number(endDayText)),
      };
    }

    if (splitMonthMatch) {
      const [, startDayText, startMonthKey, endDayText, endMonthKey] = splitMonthMatch;
      return {
        start: new Date(year, monthMap[startMonthKey] ?? 0, Number(startDayText)),
        end: new Date(year, monthMap[endMonthKey] ?? 0, Number(endDayText)),
      };
    }

    if (singleDayMatch) {
      const [, dayText, monthKey] = singleDayMatch;
      const month = monthMap[monthKey] ?? 0;
      const point = new Date(year, month, Number(dayText));
      return { start: point, end: point };
    }

    const fallback = new Date(year, 0, 1);
    return { start: fallback, end: fallback };
  };

  const getNextEvent = () => {
    const today = new Date();
    const todayStart = new Date(today.getFullYear(), today.getMonth(), today.getDate());
    const next = events.find((event) => {
      const { end } = parseEventRange(event.date);
      return end >= todayStart;
    });
    return next || events[events.length - 1];
  };

  const nextEvent = getNextEvent();
  let daysUntilEvent = null;
  if (nextEvent) {
    const { start } = parseEventRange(nextEvent.date);
    const today = new Date();
    start.setHours(0, 0, 0, 0);
    today.setHours(0, 0, 0, 0);
    const diffMs = start - today;
    daysUntilEvent = Math.ceil(diffMs / (1000 * 60 * 60 * 24));
  }

  return (
    <main className="page page-accent page-calendar">
      <section className="hero-panel calendar-hero">
        <div>
          <p className="hero-kicker">{copy.kicker}</p>
          <h1>{copy.title}</h1>
        </div>
        <p className="hero-copy">{copy.subtitle}</p>
      </section>

      <section className="hero-panel calendar-next-event-panel">
        <div className="calendar-next-event-image">
          <img
            src={nextEvent.layoutImage ?? fallbackLayoutImage}
            alt="Track layout"
            onError={(event) => {
              event.currentTarget.onerror = null;
              event.currentTarget.src = fallbackLayoutImage;
            }}
          />
        </div>
        <div className="calendar-next-event-info">
          <p className="hero-kicker">{copy.nextEyebrow}</p>
          <h2>{nextEvent.name}</h2>
          <p>{nextEvent.date} · {nextEvent.location}</p>
          {typeof daysUntilEvent === 'number' && daysUntilEvent >= 0 && (
            <div className="days-until-event">
              <span className="days-number">{daysUntilEvent}</span>
              <span className="days-label">{daysUntilEvent === 1 ? copy.dayLeft : copy.daysLeft}</span>
            </div>
          )}
          <p>{copy.autoAdvance}</p>
        </div>
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
