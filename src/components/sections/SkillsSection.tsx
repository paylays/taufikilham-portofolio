import React from 'react';
import { getPortfolioData } from '../../data/portfolioData';
import { useLanguage } from '../../context/LanguageContext';
import { TRANSLATIONS } from '../../data/translations';

export const SkillsSection: React.FC = () => {
  const { language } = useLanguage();
  const t = TRANSLATIONS[language].stack;
  const { stack } = getPortfolioData(language);

  return (
    <section id="stack" className="section" aria-labelledby="stack-title">
      <h2 id="stack-title" className="section-title">{t.title}</h2>

      <dl className="stack-list">
        {stack.map((group) => (
          <div key={group.label} className="stack-row">
            <dt>{group.label}</dt>
            <dd>
              {group.items.map((item, i) => (
                <React.Fragment key={item}>
                  {i > 0 && ', '}
                  <span className="stack-item">{item}</span>
                </React.Fragment>
              ))}
            </dd>
          </div>
        ))}
      </dl>
    </section>
  );
};
