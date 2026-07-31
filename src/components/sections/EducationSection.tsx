import React, { useState, useEffect, useRef } from 'react';
import { GraduationCap, Award, Calendar, CheckCircle, BookOpen } from 'lucide-react';
import { PORTFOLIO_DATA } from '../../data/portfolioData';
import { useScrollReveal } from '../../hooks/useScrollReveal';

import { useLanguage } from '../../context/LanguageContext';
import { TRANSLATIONS } from '../../data/translations';

const courseworkMap: Record<string, string[]> = {
  'edu-1': ['Algorithms & Data Structures', 'Software Engineering', 'Database Systems', 'Web Programming', 'Microservices'],
  'cert-1': ['Progressive Web Apps (PWA)', 'Performance Optimization', 'E2E Testing (Jest/Cypress)', 'Clean Code'],
  'cert-2': ['React Advanced Architecture', 'UX/UI Principles', 'Version Control (Git)', 'Web Security']
};

// Individual animated card with its own IntersectionObserver
function TimelineCard({ item, isEven }: { item: typeof PORTFOLIO_DATA.educationTimeline[0]; isEven: boolean }) {
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

  const isActiveNode = visible;

  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: '1fr 50px 1fr',
        gap: '2rem',
        alignItems: 'center',
        position: 'relative'
      }}
      className="timeline-item"
    >
      {/* Card — animates from left (isEven) or right (odd) */}
      <div
        ref={ref}
        className={isEven ? 'timeline-card-left' : 'timeline-card-right'}
        style={{
          gridColumn: isEven ? '1' : '3',
          order: isEven ? 1 : 3,
          opacity: visible ? undefined : 0,
          animation: visible
            ? `${isEven ? 'slideInLeft' : 'slideInRight'} 0.7s cubic-bezier(0.16,1,0.3,1) both`
            : 'none'
        }}
      >
        <div
          className={`glass-card ${isEven ? 'card-hover-blue' : 'card-hover-garnet'}`}
          style={{
            padding: '1.75rem',
            borderColor: isActiveNode ? 'var(--color-blue)' : 'var(--border-subtle)',
            boxShadow: isActiveNode ? 'var(--shadow-md)' : 'none',
            transition: 'border-color 0.4s ease, box-shadow 0.4s ease, transform 0.3s var(--ease-smooth)'
          }}
        >
          {/* Period Badge */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '8px', marginBottom: '0.75rem' }}>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', fontSize: '0.82rem', fontWeight: 500, color: 'var(--color-blue)', backgroundColor: 'var(--color-blue-glow)', padding: '4px 12px', borderRadius: '12px' }}>
              <Calendar size={14} /> {item.period}
            </span>
            <span style={{ fontSize: '0.85rem', fontWeight: 500, color: 'var(--text-dim)' }}>{item.institution}</span>
          </div>

          <h3 style={{ fontSize: '1.2rem', fontWeight: 600, marginBottom: '0.5rem' }}>{item.degree}</h3>
          <p style={{ fontSize: '0.92rem', color: 'var(--text-muted)', marginBottom: '1rem', lineHeight: 1.6, fontWeight: 300 }}>{item.description}</p>

          {/* Coursework Tags */}
          {courses.length > 0 && (
            <div style={{ marginBottom: '1rem' }}>
              <span style={{ fontSize: '0.78rem', color: 'var(--text-dim)', fontWeight: 500, display: 'flex', alignItems: 'center', gap: '4px', marginBottom: '6px' }}>
                <BookOpen size={12} /> Relevant Coursework:
              </span>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                {courses.map(c => (
                  <span key={c} style={{ fontSize: '0.75rem', fontWeight: 400, padding: '3px 8px', borderRadius: '6px', backgroundColor: 'var(--bg-surface)', color: 'var(--text-main)', border: '1px solid var(--border-subtle)' }}>{c}</span>
                ))}
              </div>
            </div>
          )}

          {/* Highlights */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem', paddingTop: '0.75rem', borderTop: '1px solid var(--border-subtle)' }}>
            {item.highlights.map((hl, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.88rem', fontWeight: 400 }}>
                <CheckCircle size={15} style={{ color: 'var(--color-garnet)', flexShrink: 0 }} />
                <span>{hl}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Center node icon — scale-in */}
      <div
        className="timeline-node"
        style={{
          gridColumn: '2',
          order: 2,
          display: 'flex',
          justifyContent: 'center',
          zIndex: 3
        }}
      >
        <div
          style={{
            width: '50px',
            height: '50px',
            borderRadius: '50%',
            backgroundColor: isActiveNode
              ? item.type === 'education' ? 'var(--color-blue)' : 'var(--color-garnet)'
              : 'var(--bg-card)',
            color: isActiveNode ? '#ffffff' : 'var(--text-dim)',
            border: isActiveNode ? '2px solid transparent' : '2px solid var(--border-strong)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: isActiveNode
              ? item.type === 'education' ? 'var(--shadow-glow-blue)' : 'var(--shadow-glow-garnet)'
              : 'var(--shadow-sm)',
            transform: isActiveNode ? 'scale(1.15)' : 'scale(1)',
            transition: 'all 0.45s cubic-bezier(0.16,1,0.3,1)'
          }}
        >
          {item.type === 'education' ? <GraduationCap size={24} /> : <Award size={24} />}
        </div>
      </div>

      {/* Empty opposite column */}
      <div className="timeline-empty" style={{ gridColumn: isEven ? '3' : '1', order: isEven ? 3 : 1 }} />
    </div>
  );
}

export const EducationSection: React.FC = () => {
  const timeline = PORTFOLIO_DATA.educationTimeline;
  const { language } = useLanguage();
  const t = TRANSLATIONS[language].education;
  const sectionRef = useRef<HTMLElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  const { ref: headerRef, isVisible: headerVisible } = useScrollReveal({ threshold: 0.2 });

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const startOffset = windowHeight * 0.7;
      const totalScrollableDistance = rect.height;
      const scrolled = startOffset - rect.top;
      const progress = Math.min(Math.max(scrolled / totalScrollableDistance, 0), 1);
      setScrollProgress(progress);
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section ref={sectionRef} id="education" style={{ padding: '5.5rem 0', position: 'relative' }}>
      <div className="container">

        {/* Section Header — slide up */}
        <div
          ref={headerRef}
          style={{
            textAlign: 'center',
            marginBottom: '4rem',
            opacity: headerVisible ? undefined : 0,
            animation: headerVisible ? 'slideUpFade 0.65s cubic-bezier(0.16,1,0.3,1) both' : 'none'
          }}
        >
          <span style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--color-blue)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
            {t.subtitle}
          </span>
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 2.7rem)', fontWeight: 600, marginTop: '0.4rem' }}>
            {t.titleMain} <span className="text-gradient-garnet">{t.titleHighlight}</span>
          </h2>
          <p style={{ color: 'var(--text-muted)', maxWidth: '500px', margin: '0.4rem auto 0', fontWeight: 300 }}>
            {t.desc}
          </p>
          <div style={{ width: '50px', height: '4px', backgroundColor: 'var(--color-garnet)', margin: '12px auto 0', borderRadius: '2px' }} />
        </div>

        {/* Alternating Center Timeline */}
        <div style={{ position: 'relative', maxWidth: '1000px', margin: '0 auto' }}>

          {/* Track */}
          <div className="timeline-center-track" style={{ position: 'absolute', top: '25px', bottom: '25px', left: '50%', transform: 'translateX(-50%)', width: '4px', backgroundColor: 'var(--border-subtle)', borderRadius: '2px' }} />

          {/* Dynamic fill */}
          <div className="timeline-center-fill" style={{ position: 'absolute', top: '25px', left: '50%', transform: 'translateX(-50%)', width: '4px', height: `calc(${scrollProgress * 100}% - 50px)`, maxHeight: 'calc(100% - 50px)', background: 'linear-gradient(to bottom, var(--color-blue) 0%, var(--color-garnet) 100%)', borderRadius: '2px', transition: 'height 0.1s linear', boxShadow: 'var(--shadow-glow-blue)' }} />

          {/* Animated Items */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '3.5rem' }}>
            {timeline.map((item, index) => (
              <TimelineCard key={item.id} item={item} isEven={index % 2 === 0} />
            ))}
          </div>

        </div>

      </div>

      <style>{`
        /* Tablet: center timeline becomes left-aligned */
        @media (max-width: 820px) {
          .timeline-center-track, .timeline-center-fill {
            left: 24px !important;
            transform: none !important;
          }
          .timeline-item {
            grid-template-columns: 50px 1fr !important;
            gap: 1.25rem !important;
          }
          /* Even cards: move to column 2 */
          .timeline-item .timeline-card-left {
            grid-column: 2 !important;
            order: 2 !important;
            animation-name: slideUpFade !important;
          }
          /* Odd cards: already in column 3, reposition to column 2 */
          .timeline-item .timeline-card-right {
            grid-column: 2 !important;
            order: 2 !important;
            animation-name: slideUpFade !important;
          }
          .timeline-item .timeline-node {
            grid-column: 1 !important;
            order: 1 !important;
          }
          .timeline-item .timeline-empty {
            display: none !important;
          }
        }

        /* Mobile */
        @media (max-width: 600px) {
          #education { padding: 3.5rem 0 !important; }
          .timeline-item { gap: 1rem !important; }
        }
        
        @media (max-width: 400px) {
          #education { padding: 3rem 0 !important; }
        }
      `}</style>
    </section>
  );
};
