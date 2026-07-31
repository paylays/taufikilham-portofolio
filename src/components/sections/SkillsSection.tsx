import React, { useState } from 'react';
import { PORTFOLIO_DATA } from '../../data/portfolioData';
import {
  ReactIcon, TypescriptIcon, JavascriptIcon, Html5Icon, Css3Icon,
  TailwindIcon, NodejsIcon, PostgresIcon, MongodbIcon, GitIcon,
  VercelIcon, PostmanIcon, ViteIcon, NextjsIcon, VueIcon,
  LaravelIcon, PhpIcon, PythonIcon, FastApiIcon, MysqlIcon,
  FirebaseIcon, SupabaseIcon, DockerIcon, GcpIcon
} from '../TechBrandIcons';
import { FigmaIcon, GithubIcon } from '../SocialIcons';
import { Globe, ShieldCheck, Terminal } from 'lucide-react';
import { useScrollReveal } from '../../hooks/useScrollReveal';

const brandIconMap: Record<string, React.ReactNode> = {
  Code2: <ReactIcon size={24} />,
  FileCode2: <TypescriptIcon size={24} />,
  Braces: <JavascriptIcon size={24} />,
  Layout: <Html5Icon size={24} />,
  Palette: <TailwindIcon size={24} />,
  Zap: <ViteIcon size={24} />,
  Server: <NodejsIcon size={24} />,
  Globe: <Globe size={24} style={{ color: 'var(--color-blue)' }} />,
  Database: <PostgresIcon size={24} />,
  Layers: <MongodbIcon size={24} />,
  ShieldCheck: <ShieldCheck size={24} style={{ color: 'var(--color-garnet)' }} />,
  GitBranch: <GitIcon size={24} />,
  Send: <PostmanIcon size={24} />,
  Figma: <FigmaIcon size={24} style={{ color: '#F24E1E' }} />,
  Cloud: <VercelIcon size={24} />,
  Terminal: <Terminal size={24} style={{ color: 'var(--color-blue)' }} />,
  Github: <GithubIcon size={24} />,
  Css3: <Css3Icon size={24} />,
  Nextjs: <NextjsIcon size={24} />,
  Vue: <VueIcon size={24} />,
  Laravel: <LaravelIcon size={24} />,
  Php: <PhpIcon size={24} />,
  Python: <PythonIcon size={24} />,
  FastApi: <FastApiIcon size={24} />,
  Mysql: <MysqlIcon size={24} />,
  Firebase: <FirebaseIcon size={24} />,
  Supabase: <SupabaseIcon size={24} />,
  Docker: <DockerIcon size={24} />,
  Gcp: <GcpIcon size={24} />
};

const skillTooltips: Record<string, string> = {
  'HTML5': 'Advanced — Semantic Web & Accessibility',
  'CSS3': 'Advanced — Modern Responsive Layouts',
  'React.js': 'Advanced — Component Architecture & State',
  'Next.js': 'Intermediate — Server-Side Rendering & App Router',
  'Vue.js': 'Intermediate — Composition API & Reactive UI',
  'Vite': 'Advanced — Fast Dev Bundling & Build Tools',
  'Tailwind CSS': 'Advanced — Utility-first Styling System',
  'Node.js': 'Advanced — Asynchronous Event-Driven Backend',
  'Laravel': 'Advanced — MVC Architecture, Eloquent ORM & APIs',
  'PHP': 'Advanced — Server-side Scripting & OOP',
  'Python': 'Intermediate — Data Structures & Automation',
  'FastAPI': 'Intermediate — High performance Async Python APIs',
  'RESTful API': 'Advanced — API Architecture & Endpoints',
  'MySQL': 'Advanced — Relational Schema & Complex Queries',
  'PostgreSQL': 'Advanced — Relational Design & Indexing',
  'MongoDB': 'Intermediate — Document Database & Aggregation',
  'Firebase Firestore': 'Intermediate — Realtime Cloud Database',
  'Supabase': 'Intermediate — Open Source Firebase Alternative',
  'GitHub': 'Advanced — Version Control & Workflow',
  'Postman': 'Advanced — API Automation & Testing',
  'Figma': 'Intermediate — UI/UX Wireframing & Design Systems',
  'Docker': 'Intermediate — Containerization & Deployment',
  'Google Cloud Platform': 'Intermediate — Cloud Infrastructure Services'
};

const COL_DELAYS = [0, 150, 300, 450];

import { useLanguage } from '../../context/LanguageContext';
import { TRANSLATIONS } from '../../data/translations';

export const SkillsSection: React.FC = () => {
  const skillCategories = PORTFOLIO_DATA.skillCategories;
  const { language } = useLanguage();
  const t = TRANSLATIONS[language].skills;
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  const { ref: headerRef, isVisible: headerVisible } = useScrollReveal({ threshold: 0.2 });
  const { ref: gridRef, isVisible: gridVisible } = useScrollReveal({ threshold: 0.1 });

  return (
    <section
      id="skills"
      style={{ padding: '6rem 0', position: 'relative', minHeight: '75vh', display: 'flex', alignItems: 'center' }}
    >
      <div className="container" style={{ position: 'relative', zIndex: 2, width: '100%' }}>

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
          <p style={{ color: 'var(--text-muted)', maxWidth: '540px', margin: '0.4rem auto 0', fontSize: '0.98rem', fontWeight: 300 }}>
            {t.desc}
          </p>
          <div style={{ width: '50px', height: '4px', backgroundColor: 'var(--color-garnet)', margin: '14px auto 0', borderRadius: '2px' }} />
        </div>

        {/* 4-Column Grid — stagger waterfall per column */}
        <div
          ref={gridRef}
          style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '2.5rem' }}
          className="skills-cardless-grid"
        >
          {skillCategories.map((cat, catIdx) => (
            <div
              key={cat.title}
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '1.25rem',
                opacity: gridVisible ? undefined : 0,
                animation: gridVisible
                  ? `slideUpFade 0.65s cubic-bezier(0.16,1,0.3,1) ${COL_DELAYS[catIdx] ?? 0}ms both`
                  : 'none'
              }}
            >
              {/* Column Header */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', paddingBottom: '0.75rem', borderBottom: '2px solid var(--border-subtle)' }}>
                <span style={{ fontSize: '0.8rem', fontWeight: 600, color: catIdx % 2 === 0 ? 'var(--color-blue)' : 'var(--color-garnet)', fontFamily: 'var(--font-mono)' }}>
                  0{catIdx + 1}.
                </span>
                <h3 style={{ fontSize: '1.1rem', fontWeight: 600, color: 'var(--text-main)' }}>{cat.title}</h3>
              </div>

              {/* Brand Pills — stagger per skill within column */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
                {cat.skills.map((skill, skillIdx) => {
                  const isHovered = hoveredSkill === skill.name;
                  const tooltipText = skillTooltips[skill.name] || `${skill.level} Proficiency`;
                  const pillDelay = (COL_DELAYS[catIdx] ?? 0) + skillIdx * 40;

                  return (
                    <div
                      key={skill.name}
                      onMouseEnter={() => setHoveredSkill(skill.name)}
                      onMouseLeave={() => setHoveredSkill(null)}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '12px',
                        padding: '10px 16px',
                        borderRadius: '14px',
                        backgroundColor: 'var(--bg-card)',
                        border: '1px solid',
                        borderColor: isHovered ? 'var(--color-blue)' : 'var(--border-subtle)',
                        fontSize: '0.92rem',
                        fontWeight: 400,
                        color: 'var(--text-main)',
                        boxShadow: isHovered ? 'var(--shadow-glow-blue)' : 'var(--shadow-sm)',
                        transform: isHovered ? 'translateY(-3px)' : 'translateY(0)',
                        transition: 'transform 0.22s ease, border-color 0.22s ease, box-shadow 0.22s ease',
                        position: 'relative',
                        cursor: 'pointer',
                        opacity: gridVisible ? undefined : 0,
                        animation: gridVisible
                          ? `slideUpFade 0.55s cubic-bezier(0.16,1,0.3,1) ${pillDelay}ms both`
                          : 'none'
                      }}
                    >
                      <span style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, transition: 'transform 0.25s var(--ease-smooth)', transform: isHovered ? 'scale(1.25) rotate(-5deg)' : 'scale(1)' }}>
                        {brandIconMap[skill.iconName] || <ReactIcon size={24} />}
                      </span>
                      <span>{skill.name}</span>

                      {/* Hover Tooltip */}
                      {isHovered && (
                        <div
                          style={{
                            position: 'absolute',
                            bottom: 'calc(100% + 8px)',
                            left: '50%',
                            transform: 'translateX(-50%)',
                            backgroundColor: 'var(--text-main)',
                            color: 'var(--bg-primary)',
                            padding: '6px 12px',
                            borderRadius: '8px',
                            fontSize: '0.75rem',
                            fontWeight: 500,
                            whiteSpace: 'nowrap',
                            zIndex: 20,
                            boxShadow: 'var(--shadow-md)',
                            animation: 'fadeIn 0.15s ease',
                            pointerEvents: 'none'
                          }}
                        >
                          {tooltipText}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

      </div>

      <style>{`
        /* 4 cols default → 2 cols tablet → 1 col mobile */
        @media (max-width: 1024px) {
          .skills-cardless-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 768px) {
          #skills { padding: 4rem 0 !important; }
          .skills-cardless-grid { grid-template-columns: repeat(2, 1fr) !important; gap: 1.5rem !important; }
        }
        @media (max-width: 580px) {
          .skills-cardless-grid { grid-template-columns: 1fr !important; gap: 1.25rem !important; }
        }
        @media (max-width: 400px) {
          .skills-cardless-grid { gap: 1rem !important; }
        }
      `}</style>
    </section>
  );
};
