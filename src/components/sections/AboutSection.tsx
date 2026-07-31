import React from 'react';
import { UserCheck, Award, GraduationCap, Sparkles, Code } from 'lucide-react';
import { PORTFOLIO_DATA } from '../../data/portfolioData';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import { useLanguage } from '../../context/LanguageContext';
import { TRANSLATIONS } from '../../data/translations';
import profilePhoto from '../../assets/Foto Studio - Taufik Ilham.png';

export const AboutSection: React.FC = () => {
  const { location, name } = PORTFOLIO_DATA.personalInfo;
  const { language } = useLanguage();
  const t = TRANSLATIONS[language].about;
  const softSkills = PORTFOLIO_DATA.softSkills;
  const marqueeItems = [...softSkills, ...softSkills, ...softSkills];

  // Scroll reveal refs
  const { ref: headerRef, isVisible: headerVisible } = useScrollReveal({ threshold: 0.2 });
  const { ref: photoRef, isVisible: photoVisible } = useScrollReveal({ threshold: 0.15 });
  const { ref: bioRef, isVisible: bioVisible } = useScrollReveal({ threshold: 0.15 });
  const { ref: metricsRef, isVisible: metricsVisible } = useScrollReveal({ threshold: 0.15 });

  const metrics = [
    { label: t.metricIpk, value: '3.70', icon: <GraduationCap size={18} style={{ color: 'var(--color-blue)' }} /> },
    { label: t.metricProjects, value: '4++', icon: <Code size={18} style={{ color: 'var(--color-garnet)' }} /> },
    { label: t.metricCerts, value: '6++', icon: <Award size={18} style={{ color: 'var(--color-blue)' }} /> }
  ];

  return (
    <section id="about" style={{ padding: '5.5rem 0 3.5rem', backgroundColor: 'var(--bg-secondary)', transition: 'var(--transition-theme)', overflow: 'hidden' }}>
      <div className="container">
        
        {/* Section Header — slide up */}
        <div
          ref={headerRef}
          style={{
            textAlign: 'center',
            marginBottom: '3.5rem',
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
          <div style={{ width: '50px', height: '4px', backgroundColor: 'var(--color-blue)', margin: '12px auto 0', borderRadius: '2px' }} />
        </div>

        {/* Top Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: '0.85fr 1.15fr', gap: '3rem', alignItems: 'center', marginBottom: '3rem' }} className="about-top-grid">
          
          {/* Profile Photo Card — slide in from left */}
          <div
            ref={photoRef}
            style={{
              position: 'relative',
              display: 'flex',
              justifyContent: 'center',
              opacity: photoVisible ? undefined : 0,
              animation: photoVisible ? 'slideInLeft 0.75s cubic-bezier(0.16,1,0.3,1) both' : 'none'
            }}
          >
            <div
              style={{
                position: 'relative',
                width: '100%',
                maxWidth: '340px',
                borderRadius: '24px',
                padding: '8px',
                background: 'linear-gradient(135deg, var(--color-blue) 0%, var(--color-garnet) 100%)',
                boxShadow: 'var(--shadow-glow-blue)'
              }}
            >
              <div style={{ borderRadius: '18px', overflow: 'hidden', position: 'relative', backgroundColor: 'var(--bg-card)' }}>
                <img
                  src={profilePhoto}
                  alt={name}
                  style={{ width: '100%', height: '380px', objectFit: 'cover', objectPosition: 'top center', display: 'block' }}
                />
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.7) 0%, transparent 60%)' }} />
                <div style={{ position: 'absolute', bottom: '16px', left: '16px', right: '16px', color: '#ffffff' }}>
                  <span style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.08em', opacity: 0.9, fontWeight: 300 }}>{t.roleBadge}</span>
                  <h3 style={{ fontSize: '1.25rem', fontWeight: 600, color: '#ffffff' }}>{name}</h3>
                </div>
              </div>

              <div style={{ position: 'absolute', top: '-15px', right: '-15px', backgroundColor: 'var(--bg-card)', color: 'var(--text-main)', border: '1px solid var(--border-subtle)', padding: '8px 14px', borderRadius: '16px', fontSize: '0.8rem', fontWeight: 500, display: 'flex', alignItems: 'center', gap: '6px', boxShadow: 'var(--shadow-md)' }}>
                <GraduationCap size={16} style={{ color: 'var(--color-blue)' }} /> {t.graduateBadge}
              </div>
              <div style={{ position: 'absolute', bottom: '-15px', left: '-15px', backgroundColor: 'var(--bg-card)', color: 'var(--text-main)', border: '1px solid var(--border-subtle)', padding: '8px 14px', borderRadius: '16px', fontSize: '0.8rem', fontWeight: 500, display: 'flex', alignItems: 'center', gap: '6px', boxShadow: 'var(--shadow-md)' }}>
                <Award size={16} style={{ color: 'var(--color-garnet)' }} /> {t.certBadge}
              </div>
            </div>
          </div>

          {/* Bio Card + Metric Badges — slide in from right */}
          <div
            ref={bioRef}
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '1.5rem',
              opacity: bioVisible ? undefined : 0,
              animation: bioVisible ? 'slideInRight 0.75s cubic-bezier(0.16,1,0.3,1) 0.1s both' : 'none'
            }}
          >
            <div className="glass-card" style={{ padding: '2.25rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '1.25rem' }}>
                <div style={{ width: '44px', height: '44px', borderRadius: '12px', backgroundColor: 'var(--color-blue-glow)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--color-blue)' }}>
                  <UserCheck size={24} />
                </div>
                <div>
                  <h3 style={{ fontSize: '1.3rem', fontWeight: 600 }}>{t.roleBadge}</h3>
                  <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)', fontWeight: 300 }}>{t.basedIn} {location}</span>
                </div>
              </div>
              <p style={{ color: 'var(--text-muted)', lineHeight: 1.8, fontSize: '1.02rem', fontWeight: 300 }}>{t.bio}</p>
            </div>

            {/* 3 Metric Stat Badges */}
            <div
              ref={metricsRef}
              style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem' }}
              className="about-metrics-grid"
            >
              {metrics.map((m, i) => (
                <div
                  key={m.label}
                  className="glass-card card-hover-blue"
                  style={{
                    padding: '1.1rem',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '4px',
                    textAlign: 'center',
                    alignItems: 'center',
                    cursor: 'default',
                    opacity: metricsVisible ? undefined : 0,
                    animation: metricsVisible
                      ? `scaleIn 0.5s cubic-bezier(0.16,1,0.3,1) ${i * 80}ms both`
                      : 'none'
                  }}
                >
                  <div>{m.icon}</div>
                  <span style={{ fontSize: '1.35rem', fontWeight: 600, color: 'var(--text-main)', fontFamily: 'var(--font-heading)' }}>{m.value}</span>
                  <span style={{ fontSize: '0.78rem', fontWeight: 500, color: 'var(--color-blue)' }}>{m.label}</span>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>

      {/* Infinite Marquee Soft Skills Continuous Banner Strip */}
      <div
        style={{
          width: '100%',
          overflow: 'hidden',
          padding: '0.85rem 0',
          backgroundColor: 'var(--bg-card)',
          borderTop: '1px solid var(--border-subtle)',
          borderBottom: '1px solid var(--border-subtle)',
          position: 'relative'
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', width: 'max-content', animation: 'marqueeScroll 28s linear infinite' }}>
          {marqueeItems.map((skill, index) => (
            <div
              key={index}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '0 2rem',
                color: 'var(--text-main)',
                fontSize: '0.92rem',
                fontWeight: 400,
                whiteSpace: 'nowrap'
              }}
            >
              <Sparkles size={14} style={{ color: index % 2 === 0 ? 'var(--color-blue)' : 'var(--color-garnet)', flexShrink: 0 }} />
              <span>{skill}</span>
              <span style={{ marginLeft: '1.5rem', color: 'var(--border-strong)', fontSize: '0.8rem' }}>•</span>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes marqueeScroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.333%); }
        }

        /* Tablet: stack photo and bio */
        @media (max-width: 900px) {
          .about-top-grid { grid-template-columns: 1fr !important; }
          .about-metrics-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }

        /* Mobile: 2-col metrics → 2-col (keeps fine), reduce photo size */
        @media (max-width: 600px) {
          #about { padding: 3.5rem 0 2.5rem !important; }
          .about-metrics-grid { grid-template-columns: repeat(2, 1fr) !important; gap: 0.75rem !important; }
        }

        /* Very small mobile: collapse metrics to 2-col still works, reduce padding */
        @media (max-width: 400px) {
          .about-metrics-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
      `}</style>
    </section>
  );
};
