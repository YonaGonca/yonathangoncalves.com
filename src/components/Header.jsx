import { useState } from "react";
import { Link } from "react-router-dom";
import { useSite } from "../context/SiteContext";

const LANGUAGES = ["en", "fr", "pt", "es"];

export default function Header() {
  const { toggleDarkMode, language, setLanguage, t } = useSite();
  const [menuOpen, setMenuOpen] = useState(false);
  const [langMenuOpen, setLangMenuOpen] = useState(false);

  return (
    <header id="site-header">
      <nav className="nav container" aria-label="Main navigation">
        <Link to="/" className="nav-logo">
          <img src="/assets/images/atom.png" alt="Yonathan Gonçalves Portfolio - Logo" />
          Yonathan Gonçalves
        </Link>

        <div className={`menu${menuOpen ? " show-menu" : ""}`} id="nav-menu">
          <ul className="nav-list">
            <li className="nav-item">
              <Link to="/projects" className="nav-link" onClick={() => setMenuOpen(false)}>
                {t("Projects")}
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/about-me" className="nav-link" onClick={() => setMenuOpen(false)}>
                {t("About Me")}
              </Link>
            </li>
            <li className="nav-item">
              <a
                href="#container_contactme"
                className="nav-link"
                onClick={() => setMenuOpen(false)}
              >
                {t("Contact Me")}
              </a>
            </li>
          </ul>

          <i
            className="nav-close ri-close-line"
            id="nav-close"
            aria-label="Close menu"
            onClick={() => setMenuOpen(false)}
          ></i>
        </div>

        <div className="nav-actions">
          <div
            className="nav-language"
            id="language-btn"
            aria-label="Select language"
            onClick={() => setLangMenuOpen((prev) => !prev)}
          >
            {language.toUpperCase()}
          </div>
          <div
            className={`language-options${langMenuOpen ? " show" : ""}`}
            id="language-options"
          >
            {LANGUAGES.map((lang) => (
              <div
                key={lang}
                className="language-option"
                data-lang={lang}
                onClick={() => {
                  setLanguage(lang);
                  setLangMenuOpen(false);
                }}
              >
                {lang.toUpperCase()}
              </div>
            ))}
          </div>

          <i
            className="ri-moon-line nav-darkmode"
            id="darkmode-btn"
            aria-label="Toggle dark mode"
            onClick={toggleDarkMode}
          ></i>

          <i
            className="nav-toggle ri-menu-line"
            id="nav-toggle"
            aria-label="Open main menu"
            onClick={() => setMenuOpen(true)}
          ></i>
        </div>
      </nav>
    </header>
  );
}
