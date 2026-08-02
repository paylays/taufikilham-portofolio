import { ThemeProvider } from './context/ThemeContext';
import { Navbar } from './components/layouts/Navbar';
import { HeroSection } from './components/sections/HeroSection';
import { AboutSection } from './components/sections/AboutSection';
import { SkillsSection } from './components/sections/SkillsSection';
import { ProjectsSection } from './components/sections/ProjectsSection';
import { EducationSection } from './components/sections/EducationSection';
import { ContactSection } from './components/sections/ContactSection';
import { Footer } from './components/layouts/Footer';
import { CustomCursor } from './components/CustomCursor';
import { MouseSpotlight } from './components/MouseSpotlight';
import { ScrollProgress } from './components/ScrollProgress';
import './index.css';

export function AppContent() {
  return (
    <div
      className="bg-tech-grid"
      style={{
        position: 'relative',
        minHeight: '100vh',
        backgroundColor: 'var(--bg-primary)',
        transition: 'var(--transition-theme)'
      }}
    >
      {/* Interactive Custom Ring Cursor */}
      <CustomCursor />

      {/* Top Scroll Progress Bar & Floating Indicator Bubble */}
      <ScrollProgress />

      {/* Interactive Mouse-following Backdrop Glow */}
      <MouseSpotlight />

      {/* Sticky Top Navbar */}
      <Navbar />

      {/* Main Single-Page Content */}
      <main style={{ position: 'relative', zIndex: 2 }}>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <EducationSection />
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

import { ReactLenis } from 'lenis/react';
import { LanguageProvider } from './context/LanguageContext';

export default function App() {
  return (
    <ReactLenis root options={{ lerp: 0.08, duration: 1.2, smoothWheel: true }}>
      <ThemeProvider>
        <LanguageProvider>
          <AppContent />
        </LanguageProvider>
      </ThemeProvider>
    </ReactLenis>
  );
}
