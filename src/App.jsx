import { useEffect, useState } from 'react';
import { HashRouter, Navigate, NavLink, Route, Routes } from 'react-router-dom';
import AboutPage from './pages/AboutPage';
import CalendarPage from './pages/CalendarPage';
import PartnersPage from './pages/PartnersPage';
import MediaKitPage from './pages/MediaKitPage';
import NewsPage from './pages/NewsPage';
import LegacyProposalPage from './pages/LegacyProposalPage';

const navCopy = {
  en: {
    about: 'About',
    partners: 'Partners',
    news: 'News',
    proposal: 'Proposal',
    calendar: 'Calendar',
    contact: 'Contact',
  },
  ro: {
    about: 'Despre',
    partners: 'Parteneri',
    news: 'Noutati',
    proposal: 'Propunere',
    calendar: 'Calendar',
    contact: 'Contact',
  },
};

function Navbar({ language, onLanguageChange }) {
  const copy = navCopy[language] ?? navCopy.en;

  return (
    <header className="app-nav-wrap">
      <nav className="app-nav">
        <div className="brand-cluster">
          <NavLink className="brand" to="/">
            <span className="brand-mark" aria-hidden="true" />
            <span>Alexandru Radita</span>
          </NavLink>
          <div className="brand-socials" aria-label="Social profiles">
            <a href="https://www.instagram.com/alexraditaracing/" target="_blank" rel="noreferrer" className="social-icon" aria-label="Instagram">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2Zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5a4.25 4.25 0 0 0 4.25 4.25h8.5a4.25 4.25 0 0 0 4.25-4.25v-8.5a4.25 4.25 0 0 0-4.25-4.25h-8.5Zm8.88 1.12a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 1.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7Z"/>
              </svg>
            </a>
            <a href="https://www.tiktok.com/@alexradita_" target="_blank" rel="noreferrer" className="social-icon" aria-label="TikTok">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M14.5 3h2.1c.2 1.2.9 2.2 2 2.8.8.5 1.8.7 2.9.7V8a8 8 0 0 1-4.9-1.7v7.5a6.3 6.3 0 1 1-6.3-6.3c.4 0 .8 0 1.2.1v2a4.4 4.4 0 0 0-1.2-.2 4.4 4.4 0 1 0 4.4 4.4V3Z"/>
              </svg>
            </a>
          </div>
        </div>

        <div className="app-nav-links">
          <NavLink className={({ isActive }) => `app-nav-link${isActive ? ' active' : ''}`} to="/" end>
            {copy.about}
          </NavLink>
          <NavLink className={({ isActive }) => `app-nav-link${isActive ? ' active' : ''}`} to="/partners">
            {copy.partners}
          </NavLink>
          <NavLink className={({ isActive }) => `app-nav-link${isActive ? ' active' : ''}`} to="/news">
            {copy.news}
          </NavLink>
          <NavLink className={({ isActive }) => `app-nav-link${isActive ? ' active' : ''}`} to="/proposal">
            {copy.proposal}
          </NavLink>
          <NavLink className={({ isActive }) => `app-nav-link${isActive ? ' active' : ''}`} to="/calendar">
            {copy.calendar}
          </NavLink>
          <NavLink className={({ isActive }) => `app-nav-link${isActive ? ' active' : ''}`} to="/contact">
            {copy.contact}
          </NavLink>

          <div className="lang-switch" aria-label="Language selection">
            <select value={language} onChange={(event) => onLanguageChange(event.target.value)}>
              <option value="en">EN</option>
              <option value="ro">RO</option>
            </select>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default function App() {
  const [language, setLanguage] = useState(() => {
    const savedLanguage = localStorage.getItem('site-language');
    return savedLanguage === 'ro' ? 'ro' : 'en';
  });

  useEffect(() => {
    document.documentElement.lang = language;
    localStorage.setItem('site-language', language);
  }, [language]);

  return (
    <HashRouter>
      <div className="app-shell">
        <Navbar language={language} onLanguageChange={setLanguage} />
        <div className="app-main">
          <Routes>
            <Route path="/" element={<AboutPage language={language} />} />
            <Route path="/calendar" element={<CalendarPage language={language} />} />
            <Route path="/partners" element={<PartnersPage language={language} />} />
            <Route path="/contact" element={<MediaKitPage language={language} />} />
            <Route path="/news" element={<NewsPage language={language} />} />
            <Route path="/proposal" element={<LegacyProposalPage language={language} />} />

            <Route path="/media-kit" element={<Navigate to="/contact" replace />} />
            <Route path="/legacy" element={<Navigate to="/proposal" replace />} />
          </Routes>
        </div>
      </div>
    </HashRouter>
  );
}
