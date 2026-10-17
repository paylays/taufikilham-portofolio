import React from 'react';
import { getPortfolioData } from '../../data/portfolioData';
import { useLanguage } from '../../context/LanguageContext';
import { TRANSLATIONS } from '../../data/translations';

export const CredentialsSection: React.FC = () => {
  const { language } = useLanguage();
  const t = TRANSLATIONS[language].credentials;
  const { credentials } = getPortfolioData(language);

  return (
    <section id="credentials" className="section" aria-labelledby="credentials-title">
      <h2 id="credentials-title" className="section-title">{t.title}</h2>

      <ul className="entry-list entry-list--tight">
        {credentials.map((item) => (
          <li key={item.id}>
            <h3 className={`entry-title${item.isAward ? ' entry-title--award' : ''}`}>{item.name}</h3>
            <p className="entry-meta">
              {item.issuer} · {item.date}
              {item.credentialId && (
                <>
                  {' · '}{t.number} <span className="mono">{item.credentialId}</span>
                </>
              )}
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
};
