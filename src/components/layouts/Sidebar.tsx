import React, { useState, useEffect } from 'react';
import { Download, Sun, Moon, Globe, Send, Mail } from 'lucide-react';
import { PORTFOLIO_DATA } from '../../data/portfolioData';
import { GithubIcon, LinkedinIcon } from '../SocialIcons';
import { useTheme } from '../../context/ThemeContext';
import { useLanguage } from '../../context/LanguageContext';
import { TRANSLATIONS } from '../../data/translations';
import { useLenis } from 'lenis/react';
import profilePhoto from '../../assets/about-photo.png';

const NAV_SECTIONS = [
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'education', label: 'Education' },
  { id: 'contact', label: 'Contact' },
];

export const Sidebar: React.FC = () => {
  const lenis = useLenis();
  const { theme, toggleTheme } = useTheme();
  const { language, toggleLanguage } = useLanguage();
  const t = TRANSLATIONS[language].hero;
  const { name, role, github, linkedin, email, cvUrl } = PORTFOLIO_DATA.personalInfo;
  const [activeSection, setActiveSection] = useState('about');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;
      for (let i = NAV_SECTIONS.length - 1; i >= 0; i--) {
        const el = document.getElementById(NAV_SECTIONS[i].id);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(NAV_SECTIONS[i].id);
          break;
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault();
    const targetEl = document.getElementById(sectionId);
    if (targetEl) {
      if (lenis) {
        lenis.scrollTo(targetEl, { offset: -32 });
      } else {
        targetEl.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <aside className="split-sidebar">
      {/* Top: Identity */}
      <div>
        {/* Profile Photo */}
        <div style={{ marginBottom: '1.5rem' }}>
          <img
            src={profilePhoto}
            alt={name}
            style={{
              width: '120px',
              height: '120px',
              objectFit: 'cover',
              objectPosition: 'top center',
              border: '2px solid var(--border-subtle)',
            }}
          />
        </div>

        {/* Name & Role */}
        <h1
          style={{
            fontSize: 'clamp(2rem, 3.5vw, 2.8rem)',
            fontWeight: 700,
            letterSpacing: '-0.03em',
            lineHeight: 1.1,
            marginBottom: '0.35rem',
          }}
        >
          {name}
        </h1>

        <h2
          style={{
            fontSize: '1.15rem',
            fontWeight: 500,
            color: 'var(--color-garnet)',
            marginBottom: '0.75rem',
            lineHeight: 1.3,
          }}
        >
          {role}
        </h2>

        <p
          style={{
            fontSize: '0.92rem',
            color: 'var(--text-muted)',
            lineHeight: 1.6,
            fontWeight: 300,
            maxWidth: '340px',
          }}
        >
          {t.subtitle}
        </p>

        {/* Nav Scroll Spy */}
        <nav className="sidebar-nav">
          {NAV_SECTIONS.map((section) => (
            <a
              key={section.id}
              href={`#${section.id}`}
              onClick={(e) => handleNavClick(e, section.id)}
              className={`sidebar-nav-link${activeSection === section.id ? ' active' : ''}`}
            >
              {section.label}
            </a>
          ))}
        </nav>
      </div>

      {/* Bottom: Social + CTA + Toggles */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
        {/* CTA Buttons */}
        <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
          <a href={cvUrl} download className="btn btn-outline" style={{ fontSize: '0.85rem', padding: '9px 16px' }}>
            <Download size={15} /> {t.downloadCv}
          </a>
          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, 'contact')}
            className="btn btn-primary"
            style={{ fontSize: '0.85rem', padding: '9px 16px' }}
          >
            <Send size={14} /> Hire Me
          </a>
        </div>

        {/* Social Links */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <a href={github} target="_blank" rel="noreferrer" className="btn-icon" title="GitHub">
            <GithubIcon size={18} />
          </a>
          <a href={linkedin} target="_blank" rel="noreferrer" className="btn-icon" title="LinkedIn">
            <LinkedinIcon size={18} />
          </a>
          <a href={`mailto:${email}`} className="btn-icon" title="Email">
            <Mail size={18} />
          </a>

          {/* Separator */}
          <div style={{ width: '1px', height: '24px', backgroundColor: 'var(--border-subtle)', margin: '0 0.25rem' }} />

          {/* Language Toggle */}
          <button
            onClick={toggleLanguage}
            className="btn-icon"
            title={`Switch to ${language === 'id' ? 'English' : 'Bahasa Indonesia'}`}
            style={{ fontWeight: 700, fontSize: '0.78rem', display: 'flex', alignItems: 'center', gap: '3px', width: 'auto', padding: '0 10px' }}
          >
            <Globe size={14} style={{ color: 'var(--color-blue)' }} />
            {language.toUpperCase()}
          </button>

          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="btn-icon"
            title={`Switch to ${theme === 'dark' ? 'Light' : 'Dark'} Mode`}
          >
            {theme === 'dark'
              ? <Sun size={17} style={{ color: '#fbbf24' }} />
              : <Moon size={17} style={{ color: 'var(--color-blue)' }} />
            }
          </button>
        </div>
      </div>
    </aside>
  );
};
