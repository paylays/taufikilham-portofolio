import React from 'react';

interface MacbookFrameProps {
  children: React.ReactNode;
}

export const MacbookFrame: React.FC<MacbookFrameProps> = ({ children }) => {
  return (
    <div
      className="macbook-frame"
      style={{
        width: '100%',
        maxWidth: '560px',
        margin: '0 auto',
        position: 'relative',
        filter: 'drop-shadow(0 20px 40px rgba(0, 77, 152, 0.25))'
      }}
    >
      {/* MacBook Screen Top Frame */}
      <div
        style={{
          backgroundColor: '#16171d',
          borderRadius: '20px 20px 4px 4px',
          padding: '12px 14px 18px',
          border: '2px solid #2e313d',
          boxShadow: 'inset 0 0 0 1px rgba(255, 255, 255, 0.08), 0 10px 30px rgba(0, 0, 0, 0.5)',
          position: 'relative'
        }}
      >
        {/* Camera Notch Centered at Top Bezel */}
        <div
          style={{
            position: 'absolute',
            top: '0',
            left: '50%',
            transform: 'translateX(-50%)',
            width: '90px',
            height: '14px',
            backgroundColor: '#0c0d11',
            borderRadius: '0 0 8px 8px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 10
          }}
        >
          {/* Camera Lens Circle */}
          <div
            style={{
              width: '6px',
              height: '6px',
              borderRadius: '50%',
              backgroundColor: '#1e293b',
              boxShadow: 'inset 0 0 2px #38bdf8'
            }}
          />
        </div>

        {/* Screen Display Glass Inner Box */}
        <div
          style={{
            borderRadius: '12px',
            overflow: 'hidden',
            backgroundColor: 'var(--bg-card)',
            border: '1px solid var(--border-subtle)',
            position: 'relative'
          }}
        >
          {children}
        </div>
      </div>

      {/* MacBook Metal Aluminum Base Hinge & Notch */}
      <div
        style={{
          width: '108%',
          marginLeft: '-4%',
          height: '14px',
          backgroundColor: '#272932',
          background: 'linear-gradient(to bottom, #343744 0%, #1e2028 100%)',
          borderRadius: '0 0 16px 16px',
          position: 'relative',
          boxShadow: '0 8px 20px rgba(0, 0, 0, 0.4)',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'flex-start'
        }}
      >
        {/* Center Thumb Opener Notch */}
        <div
          style={{
            width: '60px',
            height: '6px',
            backgroundColor: '#121318',
            borderRadius: '0 0 6px 6px'
          }}
        />
      </div>

      {/* Bottom Subtle Reflection Line */}
      <div
        style={{
          width: '80%',
          margin: '4px auto 0',
          height: '4px',
          borderRadius: '50%',
          backgroundColor: 'var(--color-blue)',
          filter: 'blur(6px)',
          opacity: 0.6
        }}
      />
    </div>
  );
};
