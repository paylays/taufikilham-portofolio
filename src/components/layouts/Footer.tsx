import React from 'react';
import { Heart } from 'lucide-react';
import { PORTFOLIO_DATA } from '../../data/portfolioData';
import { useLanguage } from '../../context/LanguageContext';
import { TRANSLATIONS } from '../../data/translations';

export const Footer: React.FC = () => {
  const { name } = PORTFOLIO_DATA.personalInfo;
  const { language } = useLanguage();
  const t = TRANSLATIONS[language].footer;

  return (
    <footer
      style={{
        borderTop: '1px solid var(--border-subtle)',
        padding: '2rem 0',
        transition: 'var(--transition-theme)',
      }}
    >
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          fontSize: '0.8rem',
          color: 'var(--text-dim)',
          flexWrap: 'wrap',
          gap: '0.5rem',
        }}
      >
        <p>© {new Date().getFullYear()} {name}. {t.rights}</p>
        <p style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
          {t.builtWith}{' '}
          <Heart size={13} style={{ color: 'var(--color-garnet)', flexShrink: 0 }} />
        </p>
      </div>
    </footer>
  );
};
