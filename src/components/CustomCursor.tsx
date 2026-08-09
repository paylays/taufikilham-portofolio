import React, { useEffect, useState } from 'react';

export const CustomCursor: React.FC = () => {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const isTouchDevice = window.matchMedia('(pointer: coarse)').matches;
    if (isTouchDevice) return;

    setIsVisible(true);

    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });

      const target = e.target as Element | null;
      if (target && typeof target.closest === 'function') {
        const isInteractive = !!target.closest(
          'a, button, input, textarea, select, [role="button"], .project-card, .btn-icon, .btn, [onClick]'
        );
        setIsHovered(isInteractive);
      } else {
        setIsHovered(false);
      }
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: isHovered ? '10px' : '6px',
        height: isHovered ? '10px' : '6px',
        backgroundColor: isHovered ? 'var(--color-garnet)' : 'var(--color-blue)',
        transform: `translate3d(${position.x - (isHovered ? 5 : 3)}px, ${position.y - (isHovered ? 5 : 3)}px, 0)`,
        transition: 'width 0.15s ease, height 0.15s ease, background-color 0.15s ease',
        pointerEvents: 'none',
        zIndex: 999999,
        mixBlendMode: 'difference',
      }}
    />
  );
};
