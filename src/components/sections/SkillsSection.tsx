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
import { useLanguage } from '../../context/LanguageContext';
import { TRANSLATIONS } from '../../data/translations';

const brandIconMap: Record<string, React.ReactNode> = {
  Code2: <ReactIcon size={18} />,
  FileCode2: <TypescriptIcon size={18} />,
  Braces: <JavascriptIcon size={18} />,
  Layout: <Html5Icon size={18} />,
  Palette: <TailwindIcon size={18} />,
  Zap: <ViteIcon size={18} />,
  Server: <NodejsIcon size={18} />,
  Globe: <Globe size={18} style={{ color: 'var(--color-blue)' }} />,
  Database: <PostgresIcon size={18} />,
  Layers: <MongodbIcon size={18} />,
  ShieldCheck: <ShieldCheck size={18} style={{ color: 'var(--color-garnet)' }} />,
  GitBranch: <GitIcon size={18} />,
  Send: <PostmanIcon size={18} />,
  Figma: <FigmaIcon size={18} style={{ color: '#F24E1E' }} />,
  Cloud: <VercelIcon size={18} />,
  Terminal: <Terminal size={18} style={{ color: 'var(--color-blue)' }} />,
  Github: <GithubIcon size={18} />,
  Css3: <Css3Icon size={18} />,
  Nextjs: <NextjsIcon size={18} />,
  Vue: <VueIcon size={18} />,
  Laravel: <LaravelIcon size={18} />,
  Php: <PhpIcon size={18} />,
  Python: <PythonIcon size={18} />,
  FastApi: <FastApiIcon size={18} />,
  Mysql: <MysqlIcon size={18} />,
  Firebase: <FirebaseIcon size={18} />,
  Supabase: <SupabaseIcon size={18} />,
  Docker: <DockerIcon size={18} />,
  Gcp: <GcpIcon size={18} />,
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
  'Google Cloud Platform': 'Intermediate — Cloud Infrastructure Services',
};

export const SkillsSection: React.FC = () => {
  const skillCategories = PORTFOLIO_DATA.skillCategories;
  const { language } = useLanguage();
  const t = TRANSLATIONS[language].skills;
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  const { ref: headerRef, isVisible: headerVisible } = useScrollReveal({ threshold: 0.2 });
  const { ref: gridRef, isVisible: gridVisible } = useScrollReveal({ threshold: 0.1 });

  return (
    <section id="skills" className="section-block">
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
        <p style={{ color: 'var(--text-muted)', maxWidth: '540px', marginTop: '0.4rem', fontSize: '0.95rem', fontWeight: 300 }}>
          {t.desc}
        </p>
      </div>

      {/* Skill Categories — stacked groups with inline pills */}
      <div
        ref={gridRef}
        style={{ display: 'flex', flexDirection: 'column', gap: '2.25rem' }}
      >
        {skillCategories.map((cat, catIdx) => (
          <div
            key={cat.title}
            style={{
              opacity: gridVisible ? undefined : 0,
              animation: gridVisible
                ? `slideUpFade 0.55s cubic-bezier(0.16,1,0.3,1) ${catIdx * 100}ms both`
                : 'none',
            }}
          >
            {/* Category Header */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '0.85rem' }}>
              <span style={{ fontSize: '0.78rem', fontWeight: 600, color: catIdx % 2 === 0 ? 'var(--color-blue)' : 'var(--color-garnet)', fontFamily: 'var(--font-mono)' }}>
                0{catIdx + 1}.
              </span>
              <h3 style={{ fontSize: '1rem', fontWeight: 600, color: 'var(--text-main)' }}>
                {cat.title}
              </h3>
            </div>

            {/* Inline Pills */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
              {cat.skills.map((skill) => {
                const isHovered = hoveredSkill === skill.name;
                const tooltipText = skillTooltips[skill.name] || `${skill.level} Proficiency`;

                return (
                  <div
                    key={skill.name}
                    onMouseEnter={() => setHoveredSkill(skill.name)}
                    onMouseLeave={() => setHoveredSkill(null)}
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '8px',
                      padding: '8px 14px',
                      backgroundColor: 'var(--bg-card)',
                      border: '1px solid',
                      borderColor: isHovered ? 'var(--color-blue)' : 'var(--border-subtle)',
                      fontSize: '0.88rem',
                      fontWeight: 400,
                      color: 'var(--text-main)',
                      transition: 'border-color 0.2s ease, background-color 0.2s ease',
                      position: 'relative',
                      cursor: 'default',
                    }}
                  >
                    <span style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                      {brandIconMap[skill.iconName] || <ReactIcon size={18} />}
                    </span>
                    <span>{skill.name}</span>

                    {/* Hover Tooltip */}
                    {isHovered && (
                      <div
                        style={{
                          position: 'absolute',
                          bottom: 'calc(100% + 6px)',
                          left: '50%',
                          transform: 'translateX(-50%)',
                          backgroundColor: 'var(--text-main)',
                          color: 'var(--bg-primary)',
                          padding: '5px 10px',
                          fontSize: '0.72rem',
                          fontWeight: 500,
                          whiteSpace: 'nowrap',
                          zIndex: 20,
                          boxShadow: 'var(--shadow-md)',
                          animation: 'fadeIn 0.15s ease',
                          pointerEvents: 'none',
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
    </section>
  );
};
