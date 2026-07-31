import React, { useState } from 'react';
import { X, Mail, Copy, Check, ExternalLink, Send } from 'lucide-react';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);
  const email = 'ilham1994.it@gmail.com';
  const githubUrl = 'https://github.com/paylays';
  const linkedinUrl = 'https://www.linkedin.com/in/taufikilham/';

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  if (!isOpen) return null;

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        backgroundColor: 'rgba(5, 7, 12, 0.85)',
        backdropFilter: 'blur(12px)',
        zIndex: 9990,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '1rem',
      }}
      onClick={onClose}
    >
      <div
        className="glass-panel"
        style={{
          width: '100%',
          maxWidth: '480px',
          padding: '2rem',
          position: 'relative',
          background: 'rgba(12, 18, 34, 0.95)',
          border: '1px solid rgba(255, 42, 95, 0.3)',
          boxShadow: '0 20px 60px rgba(255, 42, 95, 0.2)',
          borderRadius: '20px',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '1.25rem',
            right: '1.25rem',
            background: 'rgba(255, 255, 255, 0.05)',
            border: '1px solid var(--border-subtle)',
            borderRadius: '8px',
            color: 'var(--text-muted)',
            padding: '6px',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            transition: 'all 0.2s ease',
          }}
        >
          <X size={18} />
        </button>

        {/* Modal Title */}
        <div style={{ marginBottom: '1.5rem' }}>
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              padding: '4px 10px',
              borderRadius: '6px',
              fontSize: '0.75rem',
              fontFamily: 'var(--font-mono)',
              background: 'rgba(255, 42, 95, 0.1)',
              border: '1px solid rgba(255, 42, 95, 0.3)',
              color: '#ff2a5f',
              marginBottom: '0.75rem',
            }}
          >
            <Send size={12} color="#ff2a5f" />
            KONTAK LANGSUNG
          </div>
          <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.5rem', fontWeight: 800 }}>
            Hubungi Taufik Ilham
          </h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.88rem', marginTop: '0.25rem' }}>
            Silakan terhubung langsung melalui saluran komunikasi resmi di bawah ini.
          </p>
        </div>

        {/* Email Quick Copy Box */}
        <div
          style={{
            background: 'rgba(255, 42, 95, 0.05)',
            border: '1px solid rgba(255, 42, 95, 0.2)',
            borderRadius: '12px',
            padding: '1rem 1.25rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '1rem',
            marginBottom: '1.5rem',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', overflow: 'hidden' }}>
            <div
              style={{
                width: '36px',
                height: '36px',
                borderRadius: '8px',
                background: 'rgba(255, 42, 95, 0.15)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--color-crimson)',
                flexShrink: 0,
              }}
            >
              <Mail size={18} />
            </div>
            <div style={{ overflow: 'hidden' }}>
              <div style={{ fontSize: '0.72rem', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)' }}>EMAIL UTAMA</div>
              <div style={{ fontSize: '0.9rem', fontFamily: 'var(--font-mono)', color: 'var(--text-main)', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                {email}
              </div>
            </div>
          </div>

          <button
            onClick={handleCopyEmail}
            className={copied ? 'btn-crimson-secondary' : 'btn-crimson-primary'}
            style={{ padding: '8px 14px', fontSize: '0.8rem', flexShrink: 0 }}
          >
            {copied ? (
              <>
                <Check size={14} color="#ff2a5f" />
                <span style={{ color: '#ff2a5f' }}>Tersalin!</span>
              </>
            ) : (
              <>
                <Copy size={14} />
                <span>Salin Email</span>
              </>
            )}
          </button>
        </div>

        {/* Social Links List */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="glass-panel glass-panel-interactive"
            style={{
              padding: '1rem 1.25rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              textDecoration: 'none',
              color: 'var(--text-main)',
              borderRadius: '12px',
              background: 'rgba(5, 7, 12, 0.6)',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#ff2a5f" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                <path d="M9 18c-4.51 2-5-2-7-2" />
              </svg>
              <div>
                <div style={{ fontWeight: 600, fontSize: '0.95rem' }}>GitHub</div>
                <div style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)' }}>github.com/paylays</div>
              </div>
            </div>
            <ExternalLink size={16} color="var(--text-muted)" />
          </a>

          <a
            href={linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="glass-panel glass-panel-interactive"
            style={{
              padding: '1rem 1.25rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              textDecoration: 'none',
              color: 'var(--text-main)',
              borderRadius: '12px',
              background: 'rgba(5, 7, 12, 0.6)',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#ff2a5f" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect width="4" height="12" x="2" y="9" />
                <circle cx="4" cy="4" r="2" />
              </svg>
              <div>
                <div style={{ fontWeight: 600, fontSize: '0.95rem' }}>LinkedIn</div>
                <div style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)' }}>linkedin.com/in/taufikilham</div>
              </div>
            </div>
            <ExternalLink size={16} color="var(--text-muted)" />
          </a>
        </div>
      </div>
    </div>
  );
};
