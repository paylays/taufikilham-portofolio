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
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoplay, setIsAutoplay] = useState(true);
  const [viewMode, setViewMode] = useState<'slider' | 'grid'>('slider');

  const categories = ['All', 'Backend', 'Fullstack', 'Frontend', 'Web Utility'];
  const filteredProjects = activeCategory === 'All' ? projects : projects.filter(p => p.category === activeCategory);

  const { ref: headerRef, isVisible: headerVisible } = useScrollReveal({ threshold: 0.2 });
  const { ref: controlsRef, isVisible: controlsVisible } = useScrollReveal({ threshold: 0.1 });
  const { ref: contentRef, isVisible: contentVisible } = useScrollReveal({ threshold: 0.1 });

  useEffect(() => { setCurrentIndex(0); }, [activeCategory]);

  useEffect(() => {
    if (!isAutoplay || filteredProjects.length <= 1 || viewMode !== 'slider') return;
    const interval = setInterval(() => setCurrentIndex(prev => (prev + 1) % filteredProjects.length), 4500);
    return () => clearInterval(interval);
  }, [isAutoplay, filteredProjects.length, viewMode]);

  const handleNext = () => setCurrentIndex(prev => (prev + 1) % filteredProjects.length);
  const handlePrev = () => setCurrentIndex(prev => (prev - 1 + filteredProjects.length) % filteredProjects.length);
  const activeProject = filteredProjects[currentIndex] || filteredProjects[0];

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

        {/* Controls Bar — fade up with slight delay */}
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
          {/* Category Tabs */}
          <div className="projects-category-tabs" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', padding: '6px', borderRadius: '16px', backgroundColor: 'var(--bg-card)', border: '1px solid var(--border-subtle)', boxShadow: 'var(--shadow-sm)', flexWrap: 'wrap' }}>
            {categories.map(cat => {
              const isActive = activeCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  style={{ padding: '8px 18px', borderRadius: '12px', fontSize: '0.88rem', fontWeight: isActive ? 600 : 400, cursor: 'pointer', border: 'none', backgroundColor: isActive ? 'var(--color-blue)' : 'transparent', color: isActive ? '#ffffff' : 'var(--text-muted)', transition: 'all 0.25s cubic-bezier(0.16, 1, 0.3, 1)' }}
                >
                  {cat}
                </button>
              );
            })}
          </div>

          {/* View Mode Toggle + Slider Controls */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', padding: '4px', borderRadius: '12px', backgroundColor: 'var(--bg-card)', border: '1px solid var(--border-subtle)' }}>
              <button onClick={() => setViewMode('slider')} title="Slider View" style={{ padding: '6px 12px', borderRadius: '8px', fontSize: '0.8rem', fontWeight: viewMode === 'slider' ? 600 : 400, border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '6px', backgroundColor: viewMode === 'slider' ? 'var(--color-blue)' : 'transparent', color: viewMode === 'slider' ? '#ffffff' : 'var(--text-muted)' }}>
                <SlidersHorizontal size={14} /> Slider
              </button>
              <button onClick={() => setViewMode('grid')} title="Grid View" style={{ padding: '6px 12px', borderRadius: '8px', fontSize: '0.8rem', fontWeight: viewMode === 'grid' ? 600 : 400, border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '6px', backgroundColor: viewMode === 'grid' ? 'var(--color-blue)' : 'transparent', color: viewMode === 'grid' ? '#ffffff' : 'var(--text-muted)' }}>
                <LayoutGrid size={14} /> Grid
              </button>
            </div>

            {viewMode === 'slider' && (
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <button onClick={() => setIsAutoplay(!isAutoplay)} className="btn-icon" title={isAutoplay ? 'Pause' : 'Play'}>
                  {isAutoplay ? <Pause size={16} /> : <Play size={16} />}
                </button>
                <button onClick={handlePrev} className="btn-icon"><ChevronLeft size={20} /></button>
                <button onClick={handleNext} className="btn-icon" style={{ backgroundColor: 'var(--color-blue)', color: '#ffffff', border: 'none' }}>
                  <ChevronRight size={20} />
                </button>
              </div>
            )}
          </div>
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
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.7) 0%, transparent 60%)' }} />
                <div style={{ position: 'absolute', top: '16px', left: '16px', padding: '6px 14px', borderRadius: '20px', fontSize: '0.8rem', fontWeight: 600, backgroundColor: 'rgba(0,0,0,0.75)', backdropFilter: 'blur(8px)', color: '#ffffff' }}>
                  {activeProject.category}
                </div>
                <div style={{ position: 'absolute', bottom: '16px', right: '16px', padding: '4px 12px', borderRadius: '12px', fontSize: '0.78rem', fontWeight: 500, backgroundColor: 'rgba(0,0,0,0.75)', color: '#ffffff' }}>
                  {currentIndex + 1} / {filteredProjects.length}
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
                  <a href={activeProject.demoUrl} target="_blank" rel="noreferrer" className="btn btn-outline"><ExternalLink size={16} /> Live Demo</a>
                  <a href={activeProject.githubUrl} target="_blank" rel="noreferrer" className="btn-icon" title="GitHub Repo"><GithubIcon size={18} /></a>
                </div>
              </div>
            </div>
          )}

          {/* Grid View */}
          {viewMode === 'grid' && (
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '2rem' }} className="projects-grid">
              {filteredProjects.map((project, idx) => (
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
                    <div style={{ position: 'absolute', top: '14px', left: '14px', padding: '4px 12px', borderRadius: '20px', fontSize: '0.75rem', fontWeight: 600, backgroundColor: 'rgba(0,0,0,0.75)', color: '#ffffff' }}>{project.category}</div>
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
                        <a href={project.githubUrl} target="_blank" rel="noreferrer" className="btn-icon" style={{ width: '34px', height: '34px' }}><GithubIcon size={16} /></a>
                        <a href={project.demoUrl} target="_blank" rel="noreferrer" className="btn-icon" style={{ width: '34px', height: '34px' }}><ExternalLink size={16} /></a>
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
            {filteredProjects.map((_, i) => (
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
          .projects-controls { flex-direction: column !important; align-items: stretch !important; }
          .projects-controls > div { width: 100% !important; }
        }

        /* Small mobile */
        @media (max-width: 540px) {
          .projects-category-tabs { flex-wrap: wrap !important; gap: 4px !important; }
          .projects-category-tabs button { flex: 1 !important; min-width: 60px !important; padding: 8px 10px !important; }
          .slider-content-grid { padding: 1.25rem !important; }
        }

        @media (max-width: 400px) {
          .projects-grid { gap: 1.25rem !important; }
        }
      `}</style>
    </section>
  );
};
