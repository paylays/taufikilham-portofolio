import React from 'react';
import { getPortfolioData } from '../../data/portfolioData';
import { useLanguage } from '../../context/LanguageContext';
import { TRANSLATIONS } from '../../data/translations';

export const EducationSection: React.FC = () => {
  const { language } = useLanguage();
  const t = TRANSLATIONS[language].education;
  const { education } = getPortfolioData(language);

  return (
    <section id="education" className="section" aria-labelledby="education-title">
      <h2 id="education-title" className="section-title">{t.title}</h2>

      <div className="entry-list">
        <div>
          <div className="entry-head">
            <h3 className="entry-title">{education.degree}</h3>
            <span className="entry-period">{education.period}</span>
          </div>
          <p>{education.institution}</p>
          <p className="entry-meta">{t.gpa} {education.gpa}</p>
          <p className="entry-meta">
            {t.thesis}: <i lang="id">{education.thesisTitle}</i>
            {education.thesisTranslation && ` (${education.thesisTranslation})`}
          </p>
          <a href={`#project-${education.thesisProjectId}`} className="text-link">{t.thesisProject}</a>
        </div>
      </div>
    </section>
  );
};
