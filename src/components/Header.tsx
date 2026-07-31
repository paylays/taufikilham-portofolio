import React, { useState, useEffect } from 'react';
import { Mail } from 'lucide-react';

interface HeaderProps {
  onOpenContact: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenContact }) => {
  const [utcTime, setUtcTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setUtcTime(now.toUTCString().slice(17, 25) + ' UTC');
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <header className="container" style={{ paddingTop: '2rem', paddingBottom: '1rem' }}>
      <div
        className="glass-panel"
        style={{
          padding: '1.1rem 1.75rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '1rem',
          background: 'rgba(12, 18, 34, 0.65)',
          borderColor: 'rgba(255, 255, 255, 0.08)',
        }}
      >
        {/* Brand */}
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <span
              style={{
                fontFamily: 'var(--font-heading)',
                fontWeight: 800,
                fontSize: '1.25rem',
                letterSpacing: '0.04em',
                color: '#ffffff',
              }}
            >
              TAUFIK ILHAM
            </span>
            <span
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                padding: '3px 8px',
                borderRadius: '999px',
                fontSize: '0.68rem',
                fontFamily: 'var(--font-mono)',
                background: 'rgba(255, 42, 95, 0.1)',
                border: '1px solid rgba(255, 42, 95, 0.3)',
                color: '#ff2a5f',
              }}
            >
              <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#ff2a5f' }} />
              ONLINE
            </span>
          </div>
          <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)', marginTop: '2px' }}>
            SOFTWARE ENGINEER
          </p>
        </div>

        {/* System Time & Contact Trigger */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', flexWrap: 'wrap' }}>
          <div
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.85rem',
              color: 'var(--text-muted)',
              letterSpacing: '0.05em',
            }}
          >
            {utcTime}
          </div>

          <button onClick={onOpenContact} className="btn-crimson-primary">
            <Mail size={15} />
            <span>Hubungi Saya</span>
          </button>
        </div>
      </div>
    </header>
  );
};
