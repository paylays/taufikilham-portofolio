import { ThemeProvider } from './context/ThemeContext';
import { Sidebar } from './components/layouts/Sidebar';
import { Navbar } from './components/layouts/Navbar';
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
      <CustomCursor />
      <ScrollProgress />
      <MouseSpotlight />

      {/* Mobile-only top navbar */}
      <Navbar />

      {/* Split Layout */}
      <div className="split-layout">
        {/* Left Sidebar — sticky, desktop only */}
        <Sidebar />

        {/* Right Scrollable Content */}
        <main className="split-content" style={{ position: 'relative', zIndex: 2 }}>
          <AboutSection />
          <SkillsSection />
          <ProjectsSection />
          <EducationSection />
          <ContactSection />
          <Footer />
        </main>
      </div>
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
