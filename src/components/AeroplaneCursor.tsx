import React, { useEffect, useRef, useState } from 'react';

interface ContrailPoint {
  x: number;
  y: number;
  alpha: number;
  size: number;
}

export const AeroplaneCursor: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [isPointerDevice, setIsPointerDevice] = useState(true);

  useEffect(() => {
    if ('ontouchstart' in window || navigator.maxTouchPoints > 0) {
      setIsPointerDevice(false);
      return;
    }

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // SVG Path from plane-svgrepo-com.svg
    const svgPathString =
      'M62.743,26.143l-22.099-8.84l0.349-3.137c0.065-0.781,0.532-7.749-3.061-11.654C36.42,0.868,34.369,0,32,0s-4.42,0.868-5.933,2.512c-3.593,3.905-3.126,10.873-3.055,11.709l0.37,3.334l-22.178,9.61C0.474,27.481,0,28.203,0,29v5c0,1.104,0.896,2,2,2h23.433l1.499,13.494l-6.181,4.944C20.276,54.817,20,55.393,20,56v2c0,1.104,0.896,2,2,2h6.13c0.416,2.101,1.695,4,3.87,4c2.186,0,3.465-1.916,3.871-4H42c1.104,0,2-0.896,2-2v-2c0-0.607-0.276-1.183-0.751-1.562l-6.181-4.944L38.567,36H62c1.104,0,2-0.896,2-2v-6C64,27.183,63.502,26.446,62.743,26.143z M2,29l21.614-9.366L24.766,30H2V29z M25.21,34H2v-2h22.988L25.21,34z M22,58v-2l5.193-4.154L27.877,58H22z M42,56v2h-5.877l0.684-6.154L42,56z M33.995,59.042C33.903,60.064,33.368,62,32,62c-1.367,0-1.906-1.963-2.005-3.04l-4.991-44.933c-0.041-0.508-0.483-6.881,2.535-10.161C28.679,2.628,30.18,2,32,2s3.321,0.628,4.461,1.866c3.008,3.27,2.581,9.596,2.541,10.108L33.995,59.042z M62,34H38.789l0.223-2H62V34z M62,30H39.234l1.181-10.634L62,28V30z';

    const planePath = new Path2D(svgPathString);

    const plane = {
      x: width / 2,
      y: height / 2,
      angle: 0,
      speed: 0,
      isHovered: false,
    };

    const mouse = { x: width / 2, y: height / 2 };
    let contrail: ContrailPoint[] = [];

    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === 'BUTTON' ||
        target.tagName === 'A' ||
        target.closest('button') ||
        target.closest('a') ||
        target.classList.contains('glass-panel-interactive')
      ) {
        plane.isHovered = true;
      } else {
        plane.isHovered = false;
      }
    };

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseover', handleMouseOver);
    window.addEventListener('resize', handleResize);

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Interpolate position towards mouse
      const dx = mouse.x - plane.x;
      const dy = mouse.y - plane.y;
      const distance = Math.sqrt(dx * dx + dy * dy);

      const ease = plane.isHovered ? 0.18 : 0.12;
      plane.x += dx * ease;
      plane.y += dy * ease;
      plane.speed = distance * ease;

      // Smooth rotation angle
      if (distance > 2) {
        const targetAngle = Math.atan2(dy, dx);
        let diff = targetAngle - plane.angle;
        while (diff < -Math.PI) diff += Math.PI * 2;
        while (diff > Math.PI) diff -= Math.PI * 2;
        plane.angle += diff * 0.2;
      }

      // Jet Stream Contrail from rear thruster
      const thrusterOffset = 22;
      const thrusterX = plane.x - Math.cos(plane.angle) * thrusterOffset;
      const thrusterY = plane.y - Math.sin(plane.angle) * thrusterOffset;

      if (plane.speed > 0.4) {
        contrail.unshift({
          x: thrusterX,
          y: thrusterY,
          alpha: 0.85,
          size: plane.isHovered ? 6 : 4,
        });
      }

      if (contrail.length > 25) {
        contrail.pop();
      }

      // Draw Contrail (Jet Stream Vapor Trail)
      if (contrail.length > 1) {
        for (let i = 0; i < contrail.length - 1; i++) {
          const pt = contrail[i];
          const nextPt = contrail[i + 1];

          pt.alpha *= 0.92;
          pt.size *= 0.96;

          ctx.beginPath();
          ctx.moveTo(pt.x, pt.y);
          ctx.lineTo(nextPt.x, nextPt.y);

          const redRatio = 1 - i / contrail.length;
          ctx.strokeStyle = `rgba(255, 42, 95, ${pt.alpha * redRatio})`;
          ctx.lineWidth = pt.size;
          ctx.lineCap = 'round';
          ctx.stroke();
        }
      }

      contrail = contrail.filter((p) => p.alpha > 0.04);

      // Render custom SVG Aeroplane
      ctx.save();
      ctx.translate(plane.x, plane.y);

      // Rotate plane (Adding Math.PI / 2 because SVG nose points UP)
      ctx.rotate(plane.angle + Math.PI / 2);

      // Scale factor (Original SVG is 64x64, scale down to ~32px)
      const scale = (plane.isHovered ? 0.65 : 0.5);
      ctx.scale(scale, scale);

      // Center the 64x64 SVG around origin (0,0)
      ctx.translate(-32, -32);

      // Glow effect on hover
      if (plane.isHovered) {
        ctx.shadowColor = '#ff2a5f';
        ctx.shadowBlur = 18;
      } else {
        ctx.shadowColor = '#ff2a5f';
        ctx.shadowBlur = 8;
      }

      // Fill plane with Crimson Red & Midnight Navy styling
      ctx.fillStyle = '#ff2a5f';
      ctx.fill(planePath);

      ctx.restore();

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  if (!isPointerDevice) return null;

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
        zIndex: 9999,
      }}
    />
  );
};
