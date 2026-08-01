import React, { useEffect, useState } from 'react';

export const CustomCursor: React.FC = () => {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [trailingPos, setTrailingPos] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [isMouseDown, setIsMouseDown] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only enable custom cursor on fine pointer devices (desktop/laptop mouse)
    const isTouchDevice = window.matchMedia('(pointer: coarse)').matches;
    if (isTouchDevice) return;

    setIsVisible(true);

    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });

      // Check if hovering over clickable/interactive elements
      const target = e.target as Element | null;
      if (target && typeof target.closest === 'function') {
        const isInteractive = !!target.closest(
          'a, button, input, textarea, select, [role="button"], .glass-card, .btn-icon, .btn, [onClick]'
        );
        setIsHovered(isInteractive);
      } else {
        setIsHovered(false);
      }
    };

    const handleMouseDown = () => setIsMouseDown(true);
    const handleMouseUp = () => setIsMouseDown(false);
    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, []);

  // Smooth trailing effect for the outer ring using RAF
  useEffect(() => {
    if (!isVisible) return;
    let animationFrameId: number;

    const followMouse = () => {
      setTrailingPos(prev => {
        const dx = position.x - prev.x;
        const dy = position.y - prev.y;
        return {
          x: prev.x + dx * 0.18,
          y: prev.y + dy * 0.18
        };
      });
      animationFrameId = requestAnimationFrame(followMouse);
    };

    animationFrameId = requestAnimationFrame(followMouse);
    return () => cancelAnimationFrame(animationFrameId);
  }, [position, isVisible]);

  if (!isVisible) return null;

  return (
    <>
      {/* Outer Follower Ring */}
      <div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: isHovered ? '48px' : '36px',
          height: isHovered ? '48px' : '36px',
          borderRadius: '50%',
          border: `1.5px solid ${isHovered ? 'var(--color-garnet)' : 'var(--color-blue)'}`,
          backgroundColor: isHovered ? 'var(--color-blue-glow)' : 'transparent',
          transform: `translate3d(${trailingPos.x - (isHovered ? 24 : 18)}px, ${trailingPos.y - (isHovered ? 24 : 18)}px, 0) scale(${isMouseDown ? 0.8 : 1})`,
          transition: 'width 0.25s ease-out, height 0.25s ease-out, border-color 0.25s ease, background-color 0.25s ease, transform 0.1s ease-out',
          pointerEvents: 'none',
          zIndex: 9999,
          backdropFilter: isHovered ? 'blur(2px)' : 'none',
          boxShadow: isHovered ? '0 0 15px var(--color-blue-glow)' : 'none'
        }}
      />

      {/* Inner Precision Dot */}
      <div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: isHovered ? '8px' : '6px',
          height: isHovered ? '8px' : '6px',
          borderRadius: '50%',
          backgroundColor: isHovered ? 'var(--color-garnet)' : 'var(--color-blue)',
          transform: `translate3d(${position.x - (isHovered ? 4 : 3)}px, ${position.y - (isHovered ? 4 : 3)}px, 0)`,
          transition: 'width 0.2s ease, height 0.2s ease, background-color 0.2s ease',
          pointerEvents: 'none',
          zIndex: 10000
        }}
      />
    </>
  );
};
