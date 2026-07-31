import React from 'react';
import { Mail } from 'lucide-react';

interface FooterProps {
  onOpenContact: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenContact }) => {
  return (
    <footer style={{ padding: '2.5rem 0', borderTop: '1px solid var(--border-subtle)', position: 'relative', zIndex: 1 }}>
      <div className="container">
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '1.5rem',
          }}
        >
          {/* Left info */}
          <div>
            <div style={{ fontFamily: 'var(--font-heading)', fontWeight: 800, fontSize: '1.05rem', marginBottom: '0.2rem', color: '#ffffff' }}>
              TAUFIK ILHAM
            </div>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.82rem', fontFamily: 'var(--font-mono)' }}>
              © {new Date().getFullYear()} Taufik Ilham. All rights reserved.
            </p>
          </div>

          {/* Social Quick Links */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
            <a
              href="https://github.com/paylays"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-crimson-secondary"
              style={{ padding: '8px 14px', fontSize: '0.82rem' }}
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#ff2a5f" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                <path d="M9 18c-4.51 2-5-2-7-2" />
              </svg>
              <span>GitHub</span>
            </a>

            <a
              href="https://www.linkedin.com/in/taufikilham/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-crimson-secondary"
              style={{ padding: '8px 14px', fontSize: '0.82rem' }}
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#ff2a5f" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect width="4" height="12" x="2" y="9" />
                <circle cx="4" cy="4" r="2" />
              </svg>
              <span>LinkedIn</span>
            </a>

            <button
              onClick={onOpenContact}
              className="btn-crimson-secondary"
              style={{ padding: '8px 14px', fontSize: '0.82rem' }}
            >
              <Mail size={15} color="#ff2a5f" />
              <span>Email</span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
