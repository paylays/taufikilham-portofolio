import React, { useState, useEffect } from 'react';
import { Sun, Moon, Menu, X, Send, Globe } from 'lucide-react';
import { useLenis } from 'lenis/react';
import { useTheme } from '../../context/ThemeContext';
import { useLanguage } from '../../context/LanguageContext';
import { TRANSLATIONS } from '../../data/translations';

const NAV_LINKS = [
  { id: 'about', labelKey: 'about' },
  { id: 'skills', labelKey: 'skills' },
  { id: 'projects', labelKey: 'projects' },
  { id: 'education', labelKey: 'education' },
  { id: 'contact', labelKey: 'contact' },
] as const;

export const Navbar: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const { language, toggleLanguage } = useLanguage();
  const lenis = useLenis();
  const t = TRANSLATIONS[language].nav;
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetEl = document.getElementById(sectionId);
    if (targetEl) {
      if (lenis) {
        lenis.scrollTo(targetEl, { offset: -72 });
      } else {
        targetEl.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const navLabels: Record<string, string> = {
    about: t.about,
    skills: t.skills,
    projects: t.projects,
    education: t.education,
    contact: t.contact,
  };

  return (
    <header
      className="mobile-navbar"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        width: '100%',
        height: '64px',
        zIndex: 1000,
        display: 'none', /* hidden on desktop, shown via media query */
        backgroundColor: isScrolled || mobileMenuOpen ? 'var(--nav-bg)' : 'transparent',
        backdropFilter: isScrolled || mobileMenuOpen ? 'blur(12px)' : 'none',
        WebkitBackdropFilter: isScrolled || mobileMenuOpen ? 'blur(12px)' : 'none',
        borderBottom: isScrolled || mobileMenuOpen ? '1px solid var(--border-subtle)' : '1px solid transparent',
        transition: 'background-color 0.3s ease, backdrop-filter 0.3s ease, border-color 0.3s ease',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 1.25rem',
      }}
    >
      {/* Brand */}
      <span style={{ fontSize: '1.2rem', fontWeight: 700, fontFamily: 'var(--font-heading)', letterSpacing: '-0.02em' }}>
        <span className="text-gradient-blue">Ilham</span>
        <span style={{ color: 'var(--color-garnet)', marginLeft: '2px' }}>.</span>
      </span>

      {/* Controls */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
        <button onClick={toggleLanguage} className="btn-icon" style={{ fontWeight: 700, fontSize: '0.78rem', width: 'auto', padding: '0 8px' }} aria-label="Toggle Language">
          <Globe size={14} style={{ color: 'var(--color-blue)', marginRight: '2px' }} />
          {language.toUpperCase()}
        </button>
        <button onClick={toggleTheme} className="btn-icon" aria-label="Toggle Theme">
          {theme === 'dark' ? <Sun size={18} style={{ color: '#fbbf24' }} /> : <Moon size={18} style={{ color: 'var(--color-blue)' }} />}
        </button>
        <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="btn-icon" aria-label="Toggle Mobile Menu">
          {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          style={{
            position: 'fixed',
            top: '64px',
            left: 0,
            right: 0,
            backgroundColor: 'var(--bg-card)',
            borderBottom: '1px solid var(--border-subtle)',
            padding: '1.25rem 1.5rem 1.75rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem',
            animation: 'fadeIn 0.2s ease',
            boxShadow: 'var(--shadow-lg)',
            zIndex: 1001,
          }}
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={(e) => handleNavClick(e, link.id)}
              style={{
                textDecoration: 'none',
                color: 'var(--text-main)',
                fontWeight: 500,
                fontSize: '1rem',
                padding: '8px 0',
              }}
            >
              {navLabels[link.id] || link.id}
            </a>
          ))}
          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, 'contact')}
            className="btn btn-primary"
            style={{ width: '100%', marginTop: '0.5rem' }}
          >
            <Send size={15} /> Hire Me
          </a>
        </div>
      )}

      <style>{`
        /* Show mobile navbar only on tablet and below */
        @media (max-width: 1024px) {
          .mobile-navbar {
            display: flex !important;
          }
        }
      `}</style>
    </header>
  );
};
