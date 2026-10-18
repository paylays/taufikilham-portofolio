import React, { useEffect, useState } from 'react';

export const ScrollMeter: React.FC = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let frame = 0;
    const update = () => {
      frame = 0;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(max > 0 ? Math.min(1, Math.max(0, window.scrollY / max)) : 0);
    };
    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener('scroll', schedule, { passive: true });
    window.addEventListener('resize', schedule);
    // The page also grows without scrolling: images arrive, the language switches
    const observer = new ResizeObserver(schedule);
    observer.observe(document.body);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('scroll', schedule);
      window.removeEventListener('resize', schedule);
      observer.disconnect();
    };
  }, []);

  // Visual only: screen readers already report the reading position
  return (
    <div
      className="scroll-meter"
      data-visible={progress > 0}
      aria-hidden="true"
      style={{ '--progress': progress } as React.CSSProperties}
    >
      <span className="scroll-meter-value">{Math.round(progress * 100)}%</span>
      <span className="scroll-meter-line" />
    </div>
  );
};
