import React, { useState } from 'react';
import { ExternalLink, ArrowUpRight } from 'lucide-react';
import { getPortfolioData } from '../../data/portfolioData';
import type { Project } from '../../data/portfolioData';
import { ProjectDetailModal } from '../ProjectDetailModal';
import { GithubIcon } from '../SocialIcons';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import { useLanguage } from '../../context/LanguageContext';
import { TRANSLATIONS } from '../../data/translations';

export const ProjectsSection: React.FC = () => {
  const { language } = useLanguage();
  const data = getPortfolioData(language);
  const projects = data.projects;
  const t = TRANSLATIONS[language].projects;
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const { ref: headerRef, isVisible: headerVisible } = useScrollReveal({ threshold: 0.2 });
  const { ref: listRef, isVisible: listVisible } = useScrollReveal({ threshold: 0.05 });

  return (
    <section id="projects" className="section-block">
      {/* Section Label */}
      <div
        ref={headerRef}
        style={{
          marginBottom: '2.5rem',
          opacity: headerVisible ? undefined : 0,
          animation: headerVisible ? 'slideUpFade 0.6s cubic-bezier(0.16,1,0.3,1) both' : 'none',
        }}
      >
        <span style={{ fontSize: '0.82rem', fontWeight: 600, color: 'var(--color-garnet)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
          {t.subtitle}
        </span>
        <h2 style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.5rem)', fontWeight: 600, marginTop: '0.3rem' }}>
          {t.titleMain} <span className="text-gradient-blue">{t.titleHighlight}</span>
        </h2>
        <p style={{ color: 'var(--text-muted)', maxWidth: '500px', marginTop: '0.4rem', fontWeight: 300, fontSize: '0.95rem' }}>
          {t.desc}
        </p>
      </div>

      {/* Project Cards — hover reveal style */}
      <div
        ref={listRef}
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '0',
        }}
      >
        {projects.map((project, idx) => (
          <div
            key={project.id}
            className="project-card"
            onClick={() => setSelectedProject(project)}
            style={{
              opacity: listVisible ? undefined : 0,
              animation: listVisible
                ? `slideUpFade 0.5s cubic-bezier(0.16,1,0.3,1) ${idx * 80}ms both`
                : 'none',
            }}
          >
            {/* Thumbnail */}
            <div style={{ flexShrink: 0 }}>
              <img
                src={project.image}
                alt={project.title}
                className="project-card-img"
              />
            </div>

            {/* Details */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem', justifyContent: 'center' }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '0.75rem' }}>
                <h3 className="project-card-title">
                  {project.title}
                </h3>
                <ArrowUpRight size={18} style={{ color: 'var(--text-dim)', flexShrink: 0, marginTop: '3px' }} />
              </div>

              <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', lineHeight: 1.6, fontWeight: 300 }}>
                {project.shortDescription}
              </p>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginTop: '0.25rem' }}>
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    style={{
                      fontSize: '0.75rem',
                      fontWeight: 500,
                      padding: '3px 10px',
                      backgroundColor: 'var(--color-blue-glow)',
                      color: 'var(--color-blue)',
                    }}
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Action links — stop propagation so card click doesn't fire */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginTop: '0.25rem' }}>
                {project.demoUrl && (
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    style={{
                      fontSize: '0.82rem',
                      fontWeight: 500,
                      color: 'var(--color-blue)',
                      textDecoration: 'none',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '4px',
                    }}
                  >
                    <ExternalLink size={13} /> Live
                  </a>
                )}
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  style={{
                    fontSize: '0.82rem',
                    fontWeight: 500,
                    color: 'var(--text-muted)',
                    textDecoration: 'none',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '4px',
                  }}
                >
                  <GithubIcon size={13} /> Code
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      <ProjectDetailModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </section>
  );
};
