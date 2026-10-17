import React from 'react';
import { getPortfolioData } from '../../data/portfolioData';
import { useLanguage } from '../../context/LanguageContext';

export const Footer: React.FC = () => {
  const { language } = useLanguage();
  const { name, location } = getPortfolioData(language).personalInfo;

  return (
    <footer className="site-footer">
      <hr className="divider" />
      <p>© {new Date().getFullYear()} {name} · {location}</p>
    </footer>
  );
};
