import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { getPortfolioData } from '../../data/portfolioData';
import { GithubIcon, LinkedinIcon } from '../SocialIcons';
import { useTheme } from '../../context/ThemeContext';
import { useLanguage } from '../../context/LanguageContext';
import { TRANSLATIONS } from '../../data/translations';

export const Header: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const { language, toggleLanguage } = useLanguage();
  const t = TRANSLATIONS[language].header;
  const { name, github, linkedin } = getPortfolioData(language).personalInfo;

  return (
    <header id="top" className="site-header">
      <a href="#top" className="site-name">{name}</a>

      <nav className="site-nav-links" aria-label={t.navLabel}>
        <a href="#projects" className="nav-link">{t.projects}</a>
        <a href="#experience" className="nav-link">{t.experience}</a>
        <a href="#contact" className="nav-link">{t.contact}</a>
      </nav>

      <div className="site-utilities">
        <button
          type="button"
          className="icon-button lang-button"
          onClick={toggleLanguage}
          aria-label={t.switchLanguage}
          title={t.switchLanguage}
        >
          {t.switchLanguageShort}
        </button>
        <button
          type="button"
          className="icon-button"
          onClick={toggleTheme}
          aria-label={theme === 'dark' ? t.lightTheme : t.darkTheme}
          title={theme === 'dark' ? t.lightTheme : t.darkTheme}
        >
          {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
        </button>
        <a href={github} target="_blank" rel="noreferrer" className="icon-button" aria-label="GitHub" title="GitHub">
          <GithubIcon size={18} />
        </a>
        <a href={linkedin} target="_blank" rel="noreferrer" className="icon-button" aria-label="LinkedIn" title="LinkedIn">
          <LinkedinIcon size={18} />
        </a>
      </div>
    </header>
  );
};
