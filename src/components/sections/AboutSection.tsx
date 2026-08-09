import React from 'react';
import {
  Code, Award, GraduationCap,
  Lightbulb, Brain, MessageSquare, Users, Handshake,
  Compass, BookOpen, Crown, Target, Workflow, FolderKanban, Sparkles,
} from 'lucide-react';
import { getPortfolioData } from '../../data/portfolioData';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import { useLanguage } from '../../context/LanguageContext';
import { TRANSLATIONS } from '../../data/translations';

const getSkillIcon = (skill: string) => {
  switch (skill) {
    case 'Problem Solving': return Lightbulb;
    case 'Critical Thinking': return Brain;
    case 'Communication': return MessageSquare;
    case 'Teamwork': return Users;
    case 'Collaboration': return Handshake;
    case 'Adaptability': return Compass;
    case 'Continuous Learning': return BookOpen;
    case 'Leadership': return Crown;
    case 'Decision Making': return Target;
    case 'Flexibility': return Workflow;
    case 'Project Management': return FolderKanban;
    default: return Sparkles;
  }
};

export const AboutSection: React.FC = () => {
  const { language } = useLanguage();
  const portfolioData = getPortfolioData(language);
  const t = TRANSLATIONS[language].about;
  const softSkills = portfolioData.softSkills;
  const marqueeItems = [...softSkills, ...softSkills, ...softSkills];

  const { ref: bioRef, isVisible: bioVisible } = useScrollReveal({ threshold: 0.15 });
  const { ref: highlightsRef, isVisible: highlightsVisible } = useScrollReveal({ threshold: 0.1 });
  const { ref: metricsRef, isVisible: metricsVisible } = useScrollReveal({ threshold: 0.15 });

  const metrics = [
    {
      label: t.metricIpk,
      value: '3.70',
      icon: <GraduationCap size={18} style={{ color: 'var(--color-blue)' }} />,
    },
    {
      label: t.metricProjects,
      value: '4++',
      icon: <Code size={18} style={{ color: 'var(--color-garnet)' }} />,
    },
    {
      label: t.metricCerts,
      value: '6++',
      icon: <Award size={18} style={{ color: 'var(--color-blue)' }} />,
    },
  ];

  return (
    <section id="about" className="section-block">
      {/* Section Label */}
      <div
        style={{
          opacity: bioVisible ? undefined : 0,
          animation: bioVisible ? 'slideUpFade 0.6s cubic-bezier(0.16,1,0.3,1) both' : 'none',
        }}
      >
        <span
          style={{
            fontSize: '0.82rem',
            fontWeight: 600,
            color: 'var(--color-garnet)',
            textTransform: 'uppercase',
            letterSpacing: '0.1em',
          }}
        >
          {t.subtitle}
        </span>
        <h2
          style={{
            fontSize: 'clamp(1.8rem, 3.5vw, 2.5rem)',
            fontWeight: 600,
            marginTop: '0.3rem',
            marginBottom: '1.5rem',
          }}
        >
          {t.titleMain}{' '}
          <span className="text-gradient-blue">{t.titleHighlight}</span>
        </h2>
      </div>

      {/* Bio Paragraph */}
      <div
        ref={bioRef}
        style={{
          marginBottom: '2.5rem',
          opacity: bioVisible ? undefined : 0,
          animation: bioVisible ? 'slideUpFade 0.6s cubic-bezier(0.16,1,0.3,1) 0.1s both' : 'none',
        }}
      >
        <p
          style={{
            color: 'var(--text-muted)',
            lineHeight: 1.8,
            fontSize: '1rem',
            fontWeight: 300,
            maxWidth: '640px',
          }}
        >
          {t.bio}
        </p>
      </div>

      {/* Highlight Cards */}
      <div
        ref={highlightsRef}
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: '1rem',
          marginBottom: '2.5rem',
        }}
        className="about-highlights-grid"
      >
        {portfolioData.aboutHighlights.map((h, i) => (
          <div
            key={h.title}
            className="glass-card card-hover-blue"
            style={{
              padding: '1.25rem 1.5rem',
              cursor: 'default',
              opacity: highlightsVisible ? undefined : 0,
              animation: highlightsVisible
                ? `slideUpFade 0.55s cubic-bezier(0.16,1,0.3,1) ${i * 80}ms both`
                : 'none',
            }}
          >
            <h4 style={{ fontSize: '0.95rem', fontWeight: 600, marginBottom: '0.35rem' }}>
              {h.title}
            </h4>
            <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', lineHeight: 1.6, fontWeight: 300 }}>
              {h.description}
            </p>
          </div>
        ))}
      </div>

      {/* Metric Badges */}
      <div
        ref={metricsRef}
        style={{
          display: 'flex',
          gap: '1rem',
          flexWrap: 'wrap',
          marginBottom: '2.5rem',
        }}
      >
        {metrics.map((m, i) => (
          <div
            key={m.label}
            className="glass-card"
            style={{
              padding: '1rem 1.5rem',
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              cursor: 'default',
              opacity: metricsVisible ? undefined : 0,
              animation: metricsVisible
                ? `scaleIn 0.5s cubic-bezier(0.16,1,0.3,1) ${i * 80}ms both`
                : 'none',
            }}
          >
            {m.icon}
            <div>
              <span style={{ fontSize: '1.3rem', fontWeight: 700, fontFamily: 'var(--font-heading)', display: 'block', lineHeight: 1 }}>
                {m.value}
              </span>
              <span style={{ fontSize: '0.78rem', fontWeight: 500, color: 'var(--text-muted)' }}>
                {m.label}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Soft Skills Marquee */}
      <div
        style={{
          width: 'calc(100% + 5rem)',
          marginLeft: '-2.5rem',
          overflow: 'hidden',
          padding: '0.75rem 0',
          borderTop: '1px solid var(--border-subtle)',
          borderBottom: '1px solid var(--border-subtle)',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            width: 'max-content',
            animation: 'marqueeScroll 28s linear infinite',
          }}
        >
          {marqueeItems.map((skill, index) => {
            const IconComponent = getSkillIcon(skill);
            return (
              <div
                key={index}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '0 2rem',
                  color: 'var(--text-main)',
                  fontSize: '0.88rem',
                  fontWeight: 400,
                  whiteSpace: 'nowrap',
                }}
              >
                <IconComponent
                  size={15}
                  style={{
                    color: index % 2 === 0 ? 'var(--color-blue)' : 'var(--color-garnet)',
                    flexShrink: 0,
                  }}
                />
                <span>{skill}</span>
                <span style={{ marginLeft: '1.5rem', color: 'var(--border-strong)', fontSize: '0.75rem' }}>·</span>
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .about-highlights-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
};
