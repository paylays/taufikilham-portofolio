import React, { useEffect, useState } from 'react';

export const MouseSpotlight: React.FC = () => {
  const [mousePos, setMousePos] = useState({ x: -1000, y: -1000 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        pointerEvents: 'none',
        zIndex: 1,
        background: `radial-gradient(600px circle at ${mousePos.x}px ${mousePos.y}px, var(--color-blue-glow), transparent 60%)`,
        transition: 'background 0.05s ease-out'
      }}
    />
  );
};
