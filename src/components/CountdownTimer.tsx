import React, { useState, useEffect } from 'react';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export const CountdownTimer: React.FC = () => {
  const [targetDaysOffset, setTargetDaysOffset] = useState<number>(30);
  const [targetDate, setTargetDate] = useState<Date>(() => {
    const d = new Date();
    d.setDate(d.getDate() + 30);
    return d;
  });

  const [timeLeft, setTimeLeft] = useState<TimeLeft>({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  const handlePresetChange = (days: number) => {
    setTargetDaysOffset(days);
    const newTarget = new Date();
    newTarget.setDate(newTarget.getDate() + days);
    setTargetDate(newTarget);
  };

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date().getTime();
      const target = targetDate.getTime();
      const difference = target - now;

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((difference / 1000 / 60) % 60);
        const seconds = Math.floor((difference / 1000) % 60);

        setTimeLeft({ days, hours, minutes, seconds });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    calculateTimeLeft();
    const interval = setInterval(calculateTimeLeft, 1000);
    return () => clearInterval(interval);
  }, [targetDate]);

  const padZero = (num: number) => (num < 10 ? `0${num}` : `${num}`);

  return (
    <section style={{ width: '100%', padding: '4rem 0 3rem 0' }}>
      <div
        className="glass-panel"
        style={{
          padding: '3.5rem 2rem',
          position: 'relative',
          background: 'rgba(12, 18, 34, 0.65)',
          border: '1px solid rgba(255, 42, 95, 0.2)',
          boxShadow: '0 25px 60px rgba(5, 7, 12, 0.85)',
          borderRadius: '24px',
        }}
      >
        {/* Top Crimson Accent Line */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: '10%',
            right: '10%',
            height: '2px',
            background: 'linear-gradient(90deg, transparent, #ff2a5f, transparent)',
          }}
        />

        {/* Large Countdown Digit Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))',
            gap: '1.5rem',
            maxWidth: '780px',
            margin: '0 auto 2.5rem auto',
          }}
        >
          {[
            { label: 'HARI', value: padZero(timeLeft.days) },
            { label: 'JAM', value: padZero(timeLeft.hours) },
            { label: 'MENIT', value: padZero(timeLeft.minutes) },
            { label: 'DETIK', value: padZero(timeLeft.seconds) },
          ].map((item, idx) => (
            <div
              key={idx}
              className="glass-panel glass-panel-interactive"
              style={{
                padding: '2rem 1rem',
                textAlign: 'center',
                background: 'rgba(5, 7, 12, 0.8)',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                borderRadius: '16px',
              }}
            >
              <div
                style={{
                  fontSize: 'clamp(2.8rem, 5vw, 4rem)',
                  fontFamily: 'var(--font-heading)',
                  fontWeight: 800,
                  color: idx === 3 ? 'var(--color-crimson)' : '#ffffff',
                  textShadow: idx === 3 ? '0 0 25px rgba(255, 42, 95, 0.5)' : 'none',
                  lineHeight: 1,
                  marginBottom: '0.75rem',
                }}
              >
                {item.value}
              </div>

              <div
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.8rem',
                  letterSpacing: '0.15em',
                  color: 'var(--text-muted)',
                  textTransform: 'uppercase',
                }}
              >
                {item.label}
              </div>
            </div>
          ))}
        </div>

        {/* Target Day Adjusters */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', flexWrap: 'wrap' }}>
          <span style={{ fontSize: '0.78rem', fontFamily: 'var(--font-mono)', color: 'var(--text-dim)', marginRight: '6px' }}>
            TARGET HARI:
          </span>
          {[15, 30, 45, 60].map((days) => (
            <button
              key={days}
              onClick={() => handlePresetChange(days)}
              style={{
                background: targetDaysOffset === days ? 'rgba(255, 42, 95, 0.15)' : 'rgba(255, 255, 255, 0.03)',
                border: targetDaysOffset === days ? '1px solid var(--color-crimson)' : '1px solid var(--border-subtle)',
                color: targetDaysOffset === days ? 'var(--color-crimson)' : 'var(--text-muted)',
                borderRadius: '8px',
                padding: '6px 14px',
                fontSize: '0.78rem',
                fontFamily: 'var(--font-mono)',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
              }}
            >
              +{days} Hari
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};
