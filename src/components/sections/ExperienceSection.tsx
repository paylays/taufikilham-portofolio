import React from 'react';
import { getPortfolioData } from '../../data/portfolioData';
import type { ExperienceItem } from '../../data/portfolioData';
import { useLanguage } from '../../context/LanguageContext';
import { TRANSLATIONS } from '../../data/translations';

const ExperienceList: React.FC<{ items: ExperienceItem[]; projectLinkLabel: string }> = ({
  items,
  projectLinkLabel,
}) => (
  <ul className="entry-list">
    {items.map((item) => (
      <li key={item.id}>
        <div className="entry-head">
          <h3 className="entry-title">{item.role}</h3>
          <span className="entry-period">{item.period}</span>
        </div>
        <p>{item.organization}</p>
        <ul className="entry-highlights">
          {item.highlights.map((highlight) => (
            <li key={highlight}>{highlight}</li>
          ))}
        </ul>
        {(item.projectId || item.organizationUrl) && (
          <div className="entry-links">
            {item.projectId && (
              <a href={`#project-${item.projectId}`} className="text-link">{projectLinkLabel}</a>
            )}
            {item.organizationUrl && (
              <a href={item.organizationUrl} target="_blank" rel="noreferrer" className="text-link">
                {new URL(item.organizationUrl).hostname}
              </a>
            )}
          </div>
        )}
      </li>
    ))}
  </ul>
);

export const ExperienceSection: React.FC = () => {
  const { language } = useLanguage();
  const t = TRANSLATIONS[language].experience;
  const { work, organizations } = getPortfolioData(language);

  return (
    <>
      <section id="experience" className="section" aria-labelledby="experience-title">
        <h2 id="experience-title" className="section-title">{t.title}</h2>
        <ExperienceList items={work} projectLinkLabel={t.seeProject} />
      </section>

      <section id="organizations" className="section" aria-labelledby="organizations-title">
        <h2 id="organizations-title" className="section-title">{t.organizationsTitle}</h2>
        <ExperienceList items={organizations} projectLinkLabel={t.seeProject} />
      </section>
    </>
  );
};
