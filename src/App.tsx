import { useState } from 'react';
import { MouseSpotlight } from './components/MouseSpotlight';
import { AeroplaneCursor } from './components/AeroplaneCursor';
import { Header } from './components/Header';
import { CountdownTimer } from './components/CountdownTimer';
import { ContactModal } from './components/ContactModal';
import { Footer } from './components/Footer';
import './index.css';

export function App() {
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <div style={{ position: 'relative', minHeight: '100vh', backgroundColor: 'var(--bg-primary)', cursor: 'default' }}>
      {/* Ambient Mouse Spotlight Glow */}
      <MouseSpotlight />
      <div className="ambient-glow-navy" />

      {/* Interactive Aeroplane Cursor & Jet Contrail Stream */}
      <AeroplaneCursor />

      {/* Main Container */}
      <div style={{ position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <Header onOpenContact={() => setIsContactOpen(true)} />

        <main className="container" style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <CountdownTimer />
        </main>

        <Footer onOpenContact={() => setIsContactOpen(true)} />
      </div>

      {/* Quick Contact Modal */}
      <ContactModal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
    </div>
  );
}

export default App;
