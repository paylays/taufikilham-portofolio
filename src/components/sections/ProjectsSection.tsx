import React, { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { getPortfolioData } from '../../data/portfolioData';
import { ProjectDetailModal } from '../ProjectDetailModal';
import { useLanguage } from '../../context/LanguageContext';
import { TRANSLATIONS } from '../../data/translations';

export const ProjectsSection: React.FC = () => {
  const { language } = useLanguage();
  const t = TRANSLATIONS[language].projects;
  const { projects } = getPortfolioData(language);
  // Store the id, not the object, so an open case study follows a language switch
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const selectedProject = projects.find((p) => p.id === selectedId) ?? null;

  return (
    <section id="projects" className="section" aria-labelledby="projects-title">
      <h2 id="projects-title" className="section-title">{t.title}</h2>
      <p className="section-desc">{t.desc}</p>

      <ul className="entry-list">
        {projects.map((project) => (
          <li key={project.id} id={`project-${project.id}`}>
            <p className={`entry-tag${project.isAward ? ' entry-tag--award' : ''}`}>{project.tag}</p>
            <h3 className="entry-title">{project.title}</h3>
            <p>{project.summary}</p>
            <p className="entry-meta">
              {[project.role, project.stack.join(', ')].filter(Boolean).join(' · ')}
            </p>
            <div className="entry-links">
              <button type="button" className="text-link" onClick={() => setSelectedId(project.id)}>
                {t.caseStudy}
              </button>
              {project.demoUrl && (
                // The arrow marks links that leave the site
                <a href={project.demoUrl} target="_blank" rel="noreferrer" className="text-link">
                  {t.live} <ArrowUpRight size={14} />
                </a>
              )}
              <a href={project.githubUrl} target="_blank" rel="noreferrer" className="text-link">
                {t.code} <ArrowUpRight size={14} />
              </a>
            </div>
          </li>
        ))}
      </ul>

      <ProjectDetailModal project={selectedProject} onClose={() => setSelectedId(null)} />
    </section>
  );
};
