import React, { useEffect, useRef } from 'react';

export const MouseSpotlight: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Target and current interpolated mouse position
    const mouse = { x: width / 2, y: height / 2 };
    const current = { x: width / 2, y: height / 2 };

    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('resize', handleResize);

    const render = () => {
      // Smooth interpolation for fluid movement
      current.x += (mouse.x - current.x) * 0.08;
      current.y += (mouse.y - current.y) * 0.08;

      ctx.clearRect(0, 0, width, height);

      // Render outer dark navy spotlight
      const navyGradiant = ctx.createRadialGradient(
        current.x,
        current.y,
        0,
        current.x,
        current.y,
        Math.max(width, height) * 0.45
      );
      navyGradiant.addColorStop(0, 'rgba(12, 18, 34, 0.65)');
      navyGradiant.addColorStop(0.5, 'rgba(9, 14, 26, 0.35)');
      navyGradiant.addColorStop(1, 'rgba(5, 7, 12, 0)');

      ctx.fillStyle = navyGradiant;
      ctx.fillRect(0, 0, width, height);

      // Render inner crimson red subtle core glow
      const crimsonGradient = ctx.createRadialGradient(
        current.x,
        current.y,
        0,
        current.x,
        current.y,
        220
      );
      crimsonGradient.addColorStop(0, 'rgba(255, 42, 95, 0.14)');
      crimsonGradient.addColorStop(0.4, 'rgba(255, 42, 95, 0.05)');
      crimsonGradient.addColorStop(1, 'rgba(255, 42, 95, 0)');

      ctx.fillStyle = crimsonGradient;
      ctx.fillRect(0, 0, width, height);

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        pointerEvents: 'none',
        zIndex: 0,
      }}
    />
  );
};
