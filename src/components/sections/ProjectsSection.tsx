import React, { useState, useEffect } from 'react';
import { ExternalLink, Info, ChevronLeft, ChevronRight, Pause, Play, LayoutGrid, SlidersHorizontal } from 'lucide-react';
import { PORTFOLIO_DATA } from '../../data/portfolioData';
import type { Project } from '../../data/portfolioData';
import { ProjectDetailModal } from '../ProjectDetailModal';
import { GithubIcon } from '../SocialIcons';
import { useScrollReveal } from '../../hooks/useScrollReveal';

import { useLanguage } from '../../context/LanguageContext';
import { TRANSLATIONS } from '../../data/translations';

export const ProjectsSection: React.FC = () => {
  const projects = PORTFOLIO_DATA.projects;
  const { language } = useLanguage();
  const t = TRANSLATIONS[language].projects;
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoplay, setIsAutoplay] = useState(true);
  const [viewMode, setViewMode] = useState<'slider' | 'grid'>('slider');

  const { ref: headerRef, isVisible: headerVisible } = useScrollReveal({ threshold: 0.2 });
  const { ref: controlsRef, isVisible: controlsVisible } = useScrollReveal({ threshold: 0.1 });
  const { ref: contentRef, isVisible: contentVisible } = useScrollReveal({ threshold: 0.1 });

  useEffect(() => {
    if (!isAutoplay || projects.length <= 1 || viewMode !== 'slider') return;
    const interval = setInterval(() => setCurrentIndex(prev => (prev + 1) % projects.length), 4500);
    return () => clearInterval(interval);
  }, [isAutoplay, projects.length, viewMode]);

  const handleNext = () => setCurrentIndex(prev => (prev + 1) % projects.length);
  const handlePrev = () => setCurrentIndex(prev => (prev - 1 + projects.length) % projects.length);
  const activeProject = projects[currentIndex] || projects[0];

  return (
    <section
      id="projects"
      style={{ padding: '5.5rem 0', backgroundColor: 'var(--bg-secondary)', transition: 'var(--transition-theme)', position: 'relative' }}
      onMouseEnter={() => setIsAutoplay(false)}
      onMouseLeave={() => setIsAutoplay(true)}
    >
      <div className="container">

        {/* Section Header — slide up */}
        <div
          ref={headerRef}
          style={{
            textAlign: 'center',
            marginBottom: '2.5rem',
            opacity: headerVisible ? undefined : 0,
            animation: headerVisible ? 'slideUpFade 0.65s cubic-bezier(0.16,1,0.3,1) both' : 'none'
          }}
        >
          <span style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--color-garnet)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
            {t.subtitle}
          </span>
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 2.7rem)', fontWeight: 600, marginTop: '0.4rem' }}>
            {t.titleMain} <span className="text-gradient-blue">{t.titleHighlight}</span>
          </h2>
          <p style={{ color: 'var(--text-muted)', maxWidth: '500px', margin: '0.4rem auto 0', fontWeight: 300 }}>
            {t.desc}
          </p>
          <div style={{ width: '50px', height: '4px', backgroundColor: 'var(--color-blue)', margin: '12px auto 0', borderRadius: '2px' }} />
        </div>

        {/* Controls Bar — View Mode & Navigation Arrows */}
        <div
          ref={controlsRef}
          className="projects-controls"
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '1rem',
            marginBottom: '2.5rem',
            opacity: controlsVisible ? undefined : 0,
            animation: controlsVisible ? 'slideUpFade 0.6s cubic-bezier(0.16,1,0.3,1) 0.1s both' : 'none'
          }}
        >
          {/* View Mode Toggle */}
          <div style={{ display: 'inline-flex', alignItems: 'center', padding: '4px', borderRadius: '12px', backgroundColor: 'var(--bg-card)', border: '1px solid var(--border-subtle)', boxShadow: 'var(--shadow-sm)' }}>
            <button onClick={() => setViewMode('slider')} title="Slider View" style={{ padding: '6px 14px', borderRadius: '8px', fontSize: '0.82rem', fontWeight: viewMode === 'slider' ? 600 : 400, border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '6px', backgroundColor: viewMode === 'slider' ? 'var(--color-blue)' : 'transparent', color: viewMode === 'slider' ? '#ffffff' : 'var(--text-muted)', transition: 'all 0.25s ease' }}>
              <SlidersHorizontal size={14} /> Slider
            </button>
            <button onClick={() => setViewMode('grid')} title="Grid View" style={{ padding: '6px 14px', borderRadius: '8px', fontSize: '0.82rem', fontWeight: viewMode === 'grid' ? 600 : 400, border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '6px', backgroundColor: viewMode === 'grid' ? 'var(--color-blue)' : 'transparent', color: viewMode === 'grid' ? '#ffffff' : 'var(--text-muted)', transition: 'all 0.25s ease' }}>
              <LayoutGrid size={14} /> Grid
            </button>
          </div>

          {/* Slider Prev / Next Controls */}
          {viewMode === 'slider' && (
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <button onClick={() => setIsAutoplay(!isAutoplay)} className="btn-icon" title={isAutoplay ? 'Pause' : 'Play'}>
                {isAutoplay ? <Pause size={16} /> : <Play size={16} />}
              </button>
              <button onClick={handlePrev} className="btn-icon" title="Previous Project"><ChevronLeft size={20} /></button>
              <button onClick={handleNext} className="btn-icon" title="Next Project" style={{ backgroundColor: 'var(--color-blue)', color: '#ffffff', border: 'none' }}>
                <ChevronRight size={20} />
              </button>
            </div>
          )}
        </div>

        {/* Content Area — slide up with delay */}
        <div
          ref={contentRef}
          style={{
            opacity: contentVisible ? undefined : 0,
            animation: contentVisible ? 'slideUpFade 0.7s cubic-bezier(0.16,1,0.3,1) 0.2s both' : 'none'
          }}
        >

          {/* Slider View */}
          {viewMode === 'slider' && activeProject && (
            <div
              className="glass-card slider-content-grid"
              style={{ display: 'grid', gridTemplateColumns: '1.1fr 0.9fr', gap: '2.5rem', borderRadius: '24px', overflow: 'hidden', padding: '2rem', boxShadow: 'var(--shadow-lg)' }}
            >
              {/* Image */}
              <div className="img-zoom-wrap" style={{ position: 'relative', height: '360px', borderRadius: '16px', overflow: 'hidden', boxShadow: 'var(--shadow-md)' }}>
                <img
                  src={activeProject.image}
                  alt={activeProject.title}
                  style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s ease' }}
                />
                <div style={{ position: 'absolute', bottom: '16px', right: '16px', padding: '4px 12px', borderRadius: '12px', fontSize: '0.78rem', fontWeight: 500, backgroundColor: 'rgba(0,0,0,0.75)', color: '#ffffff' }}>
                  {currentIndex + 1} / {projects.length}
                </div>
              </div>

              {/* Detail */}
              <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '1.25rem' }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  <span style={{ fontSize: '0.82rem', fontWeight: 600, color: 'var(--color-blue)', textTransform: 'uppercase' }}>Project Showcase</span>
                  <h3 style={{ fontSize: '1.6rem', fontWeight: 600 }}>{activeProject.title}</h3>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.98rem', lineHeight: 1.7, fontWeight: 300 }}>{activeProject.fullDescription}</p>
                </div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                  {activeProject.techStack.map(tech => (
                    <span key={tech} style={{ fontSize: '0.8rem', fontWeight: 500, padding: '5px 12px', borderRadius: '8px', backgroundColor: 'var(--bg-surface)', color: 'var(--text-main)', border: '1px solid var(--border-subtle)' }}>{tech}</span>
                  ))}
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', paddingTop: '1rem', borderTop: '1px solid var(--border-subtle)', flexWrap: 'wrap' }}>
                  <button onClick={() => setSelectedProject(activeProject)} className="btn btn-primary"><Info size={16} /> Details & Architecture</button>
                  {activeProject.demoUrl && (
                    <a href={activeProject.demoUrl} target="_blank" rel="noreferrer" className="btn btn-outline"><ExternalLink size={16} /> Live Project</a>
                  )}
                  <a href={activeProject.githubUrl} target="_blank" rel="noreferrer" className="btn-icon" title="GitHub Repo"><GithubIcon size={18} /></a>
                </div>
              </div>
            </div>
          )}

          {/* Grid View */}
          {viewMode === 'grid' && (
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '2rem' }} className="projects-grid">
              {projects.map((project, idx) => (
                <div
                  key={project.id}
                  className="glass-card"
                  style={{
                    display: 'flex', flexDirection: 'column', borderRadius: '18px', overflow: 'hidden',
                    animation: `slideUpFade 0.55s cubic-bezier(0.16,1,0.3,1) ${idx * 80}ms both`
                  }}
                >
                  <div className="img-zoom-wrap" style={{ position: 'relative', height: '220px', overflow: 'hidden' }}>
                    <img src={project.image} alt={project.title} style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.4s ease' }} />
                  </div>
                  <div style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', flex: 1, gap: '1rem' }}>
                    <div>
                      <h3 style={{ fontSize: '1.2rem', fontWeight: 600 }}>{project.title}</h3>
                      <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', lineHeight: 1.6, fontWeight: 300, marginTop: '4px' }}>{project.shortDescription}</p>
                    </div>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginTop: 'auto' }}>
                      {project.techStack.slice(0, 4).map(tech => (
                        <span key={tech} style={{ fontSize: '0.75rem', fontWeight: 500, padding: '4px 8px', borderRadius: '6px', backgroundColor: 'var(--bg-surface)', color: 'var(--text-main)', border: '1px solid var(--border-subtle)' }}>{tech}</span>
                      ))}
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingTop: '1rem', borderTop: '1px solid var(--border-subtle)' }}>
                      <button onClick={() => setSelectedProject(project)} style={{ background: 'none', border: 'none', color: 'var(--color-blue)', fontWeight: 500, fontSize: '0.88rem', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '4px' }}>
                        View Details &rarr;
                      </button>
                      <div style={{ display: 'flex', gap: '8px' }}>
                        <a href={project.githubUrl} target="_blank" rel="noreferrer" className="btn-icon" style={{ width: '34px', height: '34px' }} title="GitHub Repo"><GithubIcon size={16} /></a>
                        {project.demoUrl && (
                          <a href={project.demoUrl} target="_blank" rel="noreferrer" className="btn-icon" style={{ width: '34px', height: '34px' }} title="Live Project"><ExternalLink size={16} /></a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Slide Dots */}
        {viewMode === 'slider' && (
          <div style={{ display: 'flex', justifyContent: 'center', gap: '8px', marginTop: '2rem' }}>
            {projects.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentIndex(i)}
                aria-label={`Go to slide ${i + 1}`}
                style={{ width: i === currentIndex ? '28px' : '10px', height: '10px', borderRadius: '5px', backgroundColor: i === currentIndex ? 'var(--color-blue)' : 'var(--border-strong)', border: 'none', cursor: 'pointer', transition: 'all 0.3s ease' }}
              />
            ))}
          </div>
        )}

      </div>

      <ProjectDetailModal project={selectedProject} onClose={() => setSelectedProject(null)} />

      <style>{`
        /* Tablet: stack slider image+detail */
        @media (max-width: 900px) {
          .slider-content-grid { grid-template-columns: 1fr !important; }
          .projects-grid { grid-template-columns: 1fr !important; }
        }

        /* Mobile: controls wrap nicely */
        @media (max-width: 768px) {
          #projects { padding: 4rem 0 !important; }
          .projects-controls { flex-direction: row !important; align-items: center !important; justify-content: space-between !important; }
        }

        @media (max-width: 400px) {
          .projects-grid { gap: 1.25rem !important; }
        }
      `}</style>
    </section>
  );
};
