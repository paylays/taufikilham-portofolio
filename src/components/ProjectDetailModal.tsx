import React, { useEffect } from 'react';
import { X, ExternalLink, CheckCircle2, AlertTriangle, Cpu } from 'lucide-react';
import type { Project } from '../data/portfolioData';
import { GithubIcon } from './SocialIcons';

interface ProjectDetailModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectDetailModal: React.FC<ProjectDetailModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 100,
        backgroundColor: 'var(--modal-overlay)',
        backdropFilter: 'blur(8px)',
        WebkitBackdropFilter: 'blur(8px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '1.5rem',
        animation: 'fadeIn 0.25s ease-out'
      }}
      onClick={onClose}
    >
      <div
        className="glass-card"
        style={{
          width: '100%',
          maxWidth: '750px',
          maxHeight: '90vh',
          overflowY: 'auto',
          backgroundColor: 'var(--bg-card)',
          borderRadius: '20px',
          position: 'relative',
          padding: '0',
          boxShadow: 'var(--shadow-lg)'
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Image & Close Button */}
        <div style={{ position: 'relative', height: '240px', overflow: 'hidden' }}>
          <img
            src={project.image}
            alt={project.title}
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
          <div
            style={{
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(to top, var(--bg-card) 0%, transparent 80%)'
            }}
          />
          <button
            onClick={onClose}
            className="btn-icon"
            style={{
              position: 'absolute',
              top: '16px',
              right: '16px',
              backgroundColor: 'rgba(0, 0, 0, 0.6)',
              color: '#ffffff',
              border: 'none',
              borderRadius: '50%'
            }}
            aria-label="Close Modal"
          >
            <X size={20} />
          </button>
        </div>

        {/* Modal Content */}
        <div style={{ padding: '1.75rem 2rem 2.5rem', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          
          {/* Title & Category Badge */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <span
                style={{
                  padding: '4px 12px',
                  borderRadius: '12px',
                  fontSize: '0.78rem',
                  fontWeight: 700,
                  backgroundColor: 'var(--color-blue-glow)',
                  color: 'var(--color-blue)'
                }}
              >
                {project.category}
              </span>
            </div>
            <h2 style={{ fontSize: '1.6rem', fontWeight: 800 }}>{project.title}</h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.98rem' }}>
              {project.fullDescription}
            </p>
          </div>

          {/* Problem Statement Box */}
          <div
            style={{
              padding: '1.25rem',
              borderRadius: '12px',
              backgroundColor: 'var(--bg-surface)',
              borderLeft: '4px solid var(--color-garnet)',
              display: 'flex',
              flexDirection: 'column',
              gap: '0.4rem'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: 'var(--color-garnet)', fontWeight: 700, fontSize: '0.9rem' }}>
              <AlertTriangle size={16} /> Problem Statement & Goal
            </div>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>
              {project.problemStatement}
            </p>
          </div>

          {/* Key Features */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            <h3 style={{ fontSize: '1.05rem', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '8px' }}>
              <CheckCircle2 size={18} style={{ color: 'var(--color-blue)' }} /> Key Features
            </h3>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', paddingLeft: '1.25rem' }}>
              {project.keyFeatures.map((feature, i) => (
                <li key={i} style={{ fontSize: '0.92rem', color: 'var(--text-main)' }}>
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          {/* Technical Challenges & Learnings */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            <h3 style={{ fontSize: '1.05rem', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Cpu size={18} style={{ color: 'var(--color-garnet)' }} /> Technical Challenges & Learnings
            </h3>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', paddingLeft: '1.25rem' }}>
              {project.technicalChallenges.map((challenge, i) => (
                <li key={i} style={{ fontSize: '0.92rem', color: 'var(--text-muted)' }}>
                  {challenge}
                </li>
              ))}
            </ul>
          </div>

          {/* Tech Stack Pills */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
            {project.techStack.map((tech) => (
              <span
                key={tech}
                style={{
                  padding: '4px 10px',
                  borderRadius: '6px',
                  fontSize: '0.8rem',
                  fontWeight: 600,
                  backgroundColor: 'var(--bg-surface)',
                  border: '1px solid var(--border-subtle)',
                  color: 'var(--text-main)'
                }}
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Footer Actions */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', paddingTop: '1rem', borderTop: '1px solid var(--border-subtle)', flexWrap: 'wrap' }}>
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noreferrer"
              className="btn btn-primary"
            >
              Live Demo <ExternalLink size={16} />
            </a>
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="btn btn-outline"
            >
              GitHub Repository <GithubIcon size={16} />
            </a>
          </div>

        </div>
      </div>
    </div>
  );
};
