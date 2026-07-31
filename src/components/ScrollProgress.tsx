import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

export const ScrollProgress: React.FC = () => {
  const [scrollPercentage, setScrollPercentage] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      if (totalHeight > 0) {
        const currentProgress = (window.scrollY / totalHeight) * 100;
        setScrollPercentage(Math.min(Math.max(Math.round(currentProgress), 0), 100));
        setIsVisible(window.scrollY > 150);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Top 3px Scroll Progress Bar */}
      <div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          height: '3px',
          width: `${scrollPercentage}%`,
          background: 'linear-gradient(to right, var(--color-blue) 0%, var(--color-garnet) 100%)',
          zIndex: 100,
          transition: 'width 0.1s linear',
          boxShadow: 'var(--shadow-glow-blue)'
        }}
      />

      {/* Floating Scroll Progress Bubble */}
      {isVisible && (
        <div
          onClick={scrollToTop}
          title="Scroll to Top"
          style={{
            position: 'fixed',
            bottom: '24px',
            right: '24px',
            zIndex: 90,
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            padding: '8px 16px',
            borderRadius: '30px',
            backgroundColor: 'var(--nav-bg)',
            backdropFilter: 'blur(12px)',
            WebkitBackdropFilter: 'blur(12px)',
            border: '1px solid var(--border-subtle)',
            color: 'var(--text-main)',
            boxShadow: 'var(--shadow-lg)',
            cursor: 'pointer',
            fontSize: '0.85rem',
            fontWeight: 700,
            transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
            animation: 'fadeIn 0.3s ease'
          }}
          className="scroll-bubble-hover"
        >
          <span style={{ color: 'var(--color-blue)', fontFamily: 'var(--font-mono)' }}>
            {scrollPercentage}%
          </span>
          <ArrowUp size={16} style={{ color: 'var(--color-garnet)' }} />
        </div>
      )}

      <style>{`
        .scroll-bubble-hover:hover {
          transform: translateY(-4px) scale(1.05);
          border-color: var(--color-blue) !important;
          box-shadow: var(--shadow-glow-blue) !important;
        }
      `}</style>
    </>
  );
};
