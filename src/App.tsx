import { ThemeProvider } from './context/ThemeContext';
import { LanguageProvider } from './context/LanguageContext';
import { Header } from './components/layouts/Header';
import { Footer } from './components/layouts/Footer';
import { IntroSection } from './components/sections/IntroSection';
import { ProjectsSection } from './components/sections/ProjectsSection';
import { ExperienceSection } from './components/sections/ExperienceSection';
import { EducationSection } from './components/sections/EducationSection';
import { CredentialsSection } from './components/sections/CredentialsSection';
import { SkillsSection } from './components/sections/SkillsSection';
import { ContactSection } from './components/sections/ContactSection';
import { RevealBackground } from './components/RevealBackground';
import './index.css';

export function AppContent() {
  return (
    <>
      <RevealBackground />
      <Header />
      <main className="page">
        <IntroSection />
        <hr className="divider" />
        <ProjectsSection />
        <ExperienceSection />
        <EducationSection />
        <CredentialsSection />
        <SkillsSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <AppContent />
      </LanguageProvider>
    </ThemeProvider>
  );
}
