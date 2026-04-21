import { useState } from 'react';

export default function CalendarPage({ language = 'en' }) {
  const [openRaceKey, setOpenRaceKey] = useState(null);
  const [showAllEvents, setShowAllEvents] = useState(false);

  const copy = language === 'ro'
    ? {
        kicker: 'Calendar',
        title: 'Calendar Sezon 2026',
        disclaimer: '*sub rezerva modificarilor',
      viewAll: 'Vezi tot',
      showLess: 'Arata mai putin',
        finished: 'Finalizat',
        scheduled: 'Programat',
        viewResults: 'Vezi rezultatele',
        hideResults: 'Ascunde rezultatele',
        resultsTitle: 'Calificări & cursă',
        resultsPending: 'Rezultatele detaliate vor fi adăugate în curând.',
      }
    : {
        kicker: 'Calendar',
        title: '2026 Racing Season Calendar',
        disclaimer: '*subject to change',
      viewAll: 'View all',
      showLess: 'Show less',
        finished: 'Finished',
        scheduled: 'Scheduled',
        viewResults: 'View results',
        hideResults: 'Hide results',
        resultsTitle: 'Qualifying & Race Results',
        resultsPending: 'Detailed qualifying and race results will be added soon.',
      };

  const events = [
    {
      key: 'rok-winter-trophy',
      date: '21-22 FEB',
      name: 'ROK WINTER TROPHY',
      location: 'South Garda Karting',
      results: language === 'ro'
        ? [
            'Calificări: P32.',
            'Cursă: DSQ.',
          ]
        : [
            'Qualifying: P32.',
            'Race: DSQ.',
          ],
    },
    {
      key: 'rmc-ce-1',
      date: '27 FEB - 1 MAR',
      name: 'RMC CE 1',
      location: 'Jesolo',
      results: language === 'ro'
        ? [
            'Calificări: P30.',
            'Cursă: P32.',
          ]
        : [
            'Qualifying: P30.',
            'Race: P32.',
          ],
    },
    { key: 'rmc-ro-1', date: '8-10 MAY', name: 'RMC RO 1', location: 'Prejmer' },
    { key: 'rmc-ro-2', date: '29-31 MAY', name: 'RMC RO 2', location: 'București' },
    { key: 'rmc-ro-3', date: '12-14 JUN', name: 'RMC RO 3', location: 'București' },
    { key: 'rmc-ro-4', date: '3-5 JUL', name: 'RMC RO 4', location: 'Târgu Secuiesc' },
    { key: 'rmc-ro-5', date: '28-30 AUG', name: 'RMC RO 5', location: 'Târgu Secuiesc' },
    { key: 'transylvanian-trophy', date: '4-6 SEP', name: 'TRANSYLVANIAN TROPHY', location: 'Prejmer' },
    { key: 'rmc-ro-6', date: '25-27 SEP', name: 'RMC RO 6', location: 'București' },
    { key: 'rok-superfinal', date: '13-17 OCT', name: 'ROK SUPERFINAL', location: 'South Garda Karting' },
    { key: 'mojo-trophy', date: '7-9 NOV', name: 'MOJO TROPHY', location: 'Jesolo' },
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

  const todayStart = new Date();
  todayStart.setHours(0, 0, 0, 0);

  return (
    <main className="page page-accent page-calendar">
      <section className="hero-panel calendar-hero">
        <div className="calendar-hero-main">
          <div>
            <p className="hero-kicker">{copy.kicker}</p>
            <h1>{copy.title}</h1>
          </div>
          <div className="calendar-hero-media">
            <img src="/images/calendar.jpeg" alt="Racing calendar" loading="lazy" />
          </div>
        </div>
      </section>

      <section className="calendar-event-list">
        <ol className={`calendar-event-list-items${showAllEvents ? ' is-expanded' : ''}`}>
          {events.map((event) => {
            const { end } = parseEventRange(event.date);
            end.setHours(0, 0, 0, 0);
            const isFinished = end < todayStart;
            const isOpen = openRaceKey === event.key;

            return (
              <li className="calendar-event-card" key={event.key}>
                {isFinished ? (
                  <button
                    type="button"
                    className={`calendar-event-row calendar-event-toggle${isOpen ? ' is-open' : ''}`}
                    onClick={() => setOpenRaceKey(isOpen ? null : event.key)}
                    aria-expanded={isOpen}
                  >
                    <div className="event-row-left">
                      <span className="event-date">{event.date}</span>
                      <span className="event-location">{event.location}</span>
                    </div>
                    <div className="event-row-right">
                      <span className="event-status finished">{copy.finished}</span>
                      <span className="event-name">{event.name}</span>
                      <span className="event-toggle-text">{isOpen ? `${copy.hideResults} −` : `${copy.viewResults} +`}</span>
                    </div>
                  </button>
                ) : (
                  <div className="calendar-event-row">
                    <div className="event-row-left">
                      <span className="event-date">{event.date}</span>
                      <span className="event-location">{event.location}</span>
                    </div>
                    <div className="event-row-right">
                      <span className="event-status scheduled">{copy.scheduled}</span>
                      <span className="event-name">{event.name}</span>
                    </div>
                  </div>
                )}

                {isFinished && isOpen && (
                  <div className="calendar-event-results">
                    <p className="calendar-event-results-title">{copy.resultsTitle}</p>
                    <ul>
                      {(event.results?.length ? event.results : [copy.resultsPending]).map((result, index) => (
                        <li key={`${event.key}-result-${index}`}>{result}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </li>
            );
          })}
        </ol>
        <button className="calendar-view-all" type="button" onClick={() => setShowAllEvents((value) => !value)}>
          {showAllEvents ? copy.showLess : copy.viewAll}
        </button>
        <p className="calendar-disclaimer">{copy.disclaimer}</p>
      </section>
    </main>
  );
}
