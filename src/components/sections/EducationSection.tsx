import React, { useState, useEffect, useRef } from 'react';
import { GraduationCap, Award, CheckCircle, BookOpen } from 'lucide-react';
import { PORTFOLIO_DATA, getPortfolioData } from '../../data/portfolioData';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import { useLanguage } from '../../context/LanguageContext';
import { TRANSLATIONS } from '../../data/translations';

const courseworkMap: Record<string, string[]> = {
  'cert-4': ['Hackathon Winner (Juara 2)', 'Deterministik Engine', 'Fuel Ratio Monitoring', 'SPO Validation', 'Mine Ops Simulator'],
  'cert-3': ['UI/UX Design', 'Figma Prototyping', 'Visual Wireframing', 'User-Centered Design'],
  'cert-2': ['Full-Stack Development', 'Frontend Architecture', 'Backend Integration', 'Web Engineering'],
  'cert-1': ['Digital Business Strategy', 'E-Commerce Marketing', 'Grow with Google', 'Digital Entrepreneurship'],
  'edu-1': ['Algorithms & Data Structures', 'Software Engineering', 'Database Systems', 'Web Programming', 'Microservices'],
};

function TimelineEntry({ item }: { item: typeof PORTFOLIO_DATA.educationTimeline[0] }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const courses = courseworkMap[item.id] || [];

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); observer.unobserve(el); } },
      { threshold: 0.2 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{
        display: 'grid',
        gridTemplateColumns: '80px 1fr',
        gap: '1.5rem',
        opacity: visible ? undefined : 0,
        animation: visible ? 'slideUpFade 0.6s cubic-bezier(0.16,1,0.3,1) both' : 'none',
      }}
      className="edu-timeline-entry"
    >
      {/* Left: Period + Icon */}
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px', paddingTop: '4px' }}>
        <div
          style={{
            width: '40px',
            height: '40px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: item.type === 'education' ? 'var(--color-blue-glow)' : 'var(--color-garnet-glow)',
            color: item.type === 'education' ? 'var(--color-blue)' : 'var(--color-garnet)',
            border: '1px solid var(--border-subtle)',
            flexShrink: 0,
          }}
        >
          {item.type === 'education' ? <GraduationCap size={20} /> : <Award size={20} />}
        </div>
        <span style={{ fontSize: '0.78rem', fontWeight: 600, color: 'var(--color-blue)', fontFamily: 'var(--font-mono)', whiteSpace: 'nowrap' }}>
          {item.period}
        </span>
      </div>

      {/* Right: Content */}
      <div style={{ paddingBottom: '2rem', borderLeft: '1px solid var(--border-subtle)', paddingLeft: '1.5rem' }}>
        <span style={{ fontSize: '0.82rem', fontWeight: 500, color: 'var(--text-dim)', display: 'block', marginBottom: '0.2rem' }}>
          {item.institution}
        </span>
        <h3 style={{ fontSize: '1.1rem', fontWeight: 600, marginBottom: '0.4rem', lineHeight: 1.35 }}>
          {item.degree}
        </h3>
        <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', lineHeight: 1.6, fontWeight: 300, marginBottom: '0.85rem' }}>
          {item.description}
        </p>

        {/* Coursework Tags */}
        {courses.length > 0 && (
          <div style={{ marginBottom: '0.85rem' }}>
            <span style={{ fontSize: '0.75rem', color: 'var(--text-dim)', fontWeight: 500, display: 'flex', alignItems: 'center', gap: '4px', marginBottom: '6px' }}>
              <BookOpen size={12} /> Relevant Coursework:
            </span>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '5px' }}>
              {courses.map(c => (
                <span key={c} style={{ fontSize: '0.72rem', fontWeight: 400, padding: '2px 8px', backgroundColor: 'var(--bg-surface)', color: 'var(--text-main)', border: '1px solid var(--border-subtle)' }}>{c}</span>
              ))}
            </div>
          </div>
        )}

        {/* Highlights */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.3rem' }}>
          {item.highlights.map((hl, i) => (
            <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '7px', fontSize: '0.85rem', fontWeight: 400 }}>
              <CheckCircle size={14} style={{ color: 'var(--color-garnet)', flexShrink: 0, marginTop: '3px' }} />
              <span>{hl}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export const EducationSection: React.FC = () => {
  const { language } = useLanguage();
  const timeline = getPortfolioData(language).educationTimeline;
  const t = TRANSLATIONS[language].education;

  const { ref: headerRef, isVisible: headerVisible } = useScrollReveal({ threshold: 0.2 });

  return (
    <section id="education" className="section-block">
      {/* Section Label */}
      <div
        ref={headerRef}
        style={{
          marginBottom: '2.5rem',
          opacity: headerVisible ? undefined : 0,
          animation: headerVisible ? 'slideUpFade 0.6s cubic-bezier(0.16,1,0.3,1) both' : 'none',
        }}
      >
        <span style={{ fontSize: '0.82rem', fontWeight: 600, color: 'var(--color-blue)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
          {t.subtitle}
        </span>
        <h2 style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.5rem)', fontWeight: 600, marginTop: '0.3rem' }}>
          {t.titleMain} <span className="text-gradient-garnet">{t.titleHighlight}</span>
        </h2>
        <p style={{ color: 'var(--text-muted)', maxWidth: '500px', marginTop: '0.4rem', fontWeight: 300, fontSize: '0.95rem' }}>
          {t.desc}
        </p>
      </div>

      {/* Left-aligned Timeline Entries */}
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        {timeline.map((item) => (
          <TimelineEntry key={item.id} item={item} />
        ))}
      </div>

      <style>{`
        @media (max-width: 600px) {
          .edu-timeline-entry {
            grid-template-columns: 60px 1fr !important;
            gap: 1rem !important;
          }
        }
      `}</style>
    </section>
  );
};
