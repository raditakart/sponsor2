import { HashRouter, NavLink, Route, Routes } from 'react-router-dom';
import LegacyProposalPage from './pages/LegacyProposalPage';
import ContactPage from './pages/MediaKitPage';

function Navbar() {
  return (
    <header className="app-nav-wrap">
      <nav className="app-nav">
        <NavLink className="brand" to="/">
          <span className="brand-mark" aria-hidden="true" />
          <span>Alexandru Radita</span>
        </NavLink>

        <div className="app-nav-links">
          <NavLink className={({ isActive }) => `app-nav-link${isActive ? ' active' : ''}`} to="/" end>
            About
          </NavLink>
          <NavLink className={({ isActive }) => `app-nav-link${isActive ? ' active' : ''}`} to="/contact">
            Contact
          </NavLink>
        </div>
      </nav>
    </header>
  );
}

export default function App() {
  return (
    <HashRouter>
      <div className="app-shell">
        <Navbar />
        <div className="app-main">
          <Routes>
            <Route path="/" element={<LegacyProposalPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </div>
      </div>
    </HashRouter>
  );
}
