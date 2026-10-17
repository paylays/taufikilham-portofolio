import React from 'react';
import { Download } from 'lucide-react';
import { getPortfolioData } from '../../data/portfolioData';
import { useLanguage } from '../../context/LanguageContext';
import { TRANSLATIONS } from '../../data/translations';
import {
  ReactIcon, VueIcon, NodejsIcon, LaravelIcon, MysqlIcon, PostgresIcon,
} from '../TechBrandIcons';

// The stack the projects below actually use
const CORE_STACK = [
  { name: 'React', icon: <ReactIcon size={14} /> },
  { name: 'Vue', icon: <VueIcon size={14} /> },
  { name: 'Node.js', icon: <NodejsIcon size={14} /> },
  { name: 'Laravel', icon: <LaravelIcon size={14} /> },
  { name: 'MySQL', icon: <MysqlIcon size={14} /> },
  { name: 'PostgreSQL', icon: <PostgresIcon size={14} /> },
];

export const IntroSection: React.FC = () => {
  const { language } = useLanguage();
  const t = TRANSLATIONS[language].intro;
  const { name, cvUrl, avatar } = getPortfolioData(language).personalInfo;

  return (
    <section className="prose" aria-labelledby="intro-title">
      <div className="intro-head">
        <img src={avatar} alt={t.photoAlt} width={72} height={72} className="avatar" />
        <h1 id="intro-title" className="intro-name">{name}</h1>
      </div>

      <p>{t.hello}</p>

      <div className="chip-rows">
        <div className="chip-row">
          <span className="chip-row-label">{t.awardLabel}</span>
          <span className="chip chip--award">{t.awardChip}</span>
        </div>
        <div className="chip-row">
          <span className="chip-row-label">{t.stackLabel}</span>
          {CORE_STACK.map((item) => (
            <span key={item.name} className="chip">
              {item.icon}
              {item.name}
            </span>
          ))}
        </div>
      </div>

      <p>{t.award}</p>
      <p>{t.inUse}</p>
      <p>{t.looking}</p>

      <div className="actions">
        <a href={cvUrl} download="Taufik-Ilham-CV.pdf" className="text-link">
          <Download size={16} /> {t.downloadCv}
        </a>
        <a href="#contact" className="text-link">{t.contactMe}</a>
      </div>

      <p>{t.personal}</p>
    </section>
  );
};
