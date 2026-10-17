import React, { useLayoutEffect, useRef, useState } from 'react';
import backgroundImg from '../assets/background.webp';

// The reveal follows a mouse or trackpad; touch screens keep the plain page and never load the photo
const FINE_POINTER = '(hover: hover) and (pointer: fine)';

// 1cm is about 38 CSS px. The edge wobbles by up to a third of the radius,
// so the opening stays roughly between 1.5cm and 2.7cm across.
const BASE_RADIUS = 38;
const EDGE_POINTS = 40;

const traceBlob = (ctx: CanvasRenderingContext2D, cx: number, cy: number, radius: number, t: number) => {
  const points: [number, number][] = [];
  for (let i = 0; i < EDGE_POINTS; i++) {
    const angle = (i / EDGE_POINTS) * Math.PI * 2;
    // Three out-of-step waves give an irregular outline that slowly changes shape
    const wobble =
      0.17 * Math.sin(3 * angle + t * 0.9) +
      0.1 * Math.sin(5 * angle - t * 1.3 + 1.7) +
      0.06 * Math.sin(7 * angle + t * 1.7 + 4.1);
    const r = radius * (1 + wobble);
    points.push([cx + Math.cos(angle) * r, cy + Math.sin(angle) * r]);
  }

  // Curve through the midpoints between samples so the outline has no corners
  const [lastX, lastY] = points[EDGE_POINTS - 1];
  ctx.beginPath();
  ctx.moveTo((lastX + points[0][0]) / 2, (lastY + points[0][1]) / 2);
  for (let i = 0; i < EDGE_POINTS; i++) {
    const [x, y] = points[i];
    const [nextX, nextY] = points[(i + 1) % EDGE_POINTS];
    ctx.quadraticCurveTo(x, y, (x + nextX) / 2, (y + nextY) / 2);
  }
  ctx.closePath();
};

export const RevealBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [enabled] = useState(() => window.matchMedia(FINE_POINTER).matches);

  // Layout effect so the cover is painted before the photo can flash through on load
  useLayoutEffect(() => {
    if (!enabled) return;
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext('2d');
    if (!canvas || !ctx) return;

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const pointer = { x: 0, y: 0, inside: false };
    const hole = { x: 0, y: 0, scale: 0 };
    let width = 0;
    let height = 0;
    let frame = 0;

    const isDark = () => document.documentElement.classList.contains('dark');

    const draw = (time: number) => {
      frame = 0;
      // Dark theme only; in the light theme CSS hides both layers
      const open = pointer.inside && isDark();
      // Open where the pointer is instead of sliding in from an old position
      if (open && hole.scale < 0.01) {
        hole.x = pointer.x;
        hole.y = pointer.y;
      }
      const follow = reduceMotion ? 1 : 0.25;
      hole.x += (pointer.x - hole.x) * follow;
      hole.y += (pointer.y - hole.y) * follow;
      hole.scale += ((open ? 1 : 0) - hole.scale) * (reduceMotion ? 1 : 0.2);

      // Read the token on every draw so a theme switch repaints the cover in the new color
      ctx.globalCompositeOperation = 'source-over';
      ctx.fillStyle = getComputedStyle(document.documentElement).getPropertyValue('--bg');
      ctx.fillRect(0, 0, width, height);

      if (hole.scale > 0.01) {
        ctx.globalCompositeOperation = 'destination-out';
        traceBlob(ctx, hole.x, hole.y, BASE_RADIUS * hole.scale, reduceMotion ? 0 : time / 1000);
        ctx.fill();
      }

      // Keep animating while the edge is morphing or the opening is still catching up
      const settling =
        Math.abs(pointer.x - hole.x) + Math.abs(pointer.y - hole.y) > 0.5 ||
        Math.abs((open ? 1 : 0) - hole.scale) > 0.01;
      if (!reduceMotion && (open || settling)) {
        frame = requestAnimationFrame(draw);
      }
    };

    const requestDraw = () => {
      if (!frame) frame = requestAnimationFrame(draw);
    };

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      cancelAnimationFrame(frame);
      draw(performance.now());
    };

    const handleMove = (e: PointerEvent) => {
      if (e.pointerType === 'touch') return;
      // Track the pointer in both themes so switching to dark opens the hole right under it
      pointer.x = e.clientX;
      pointer.y = e.clientY;
      pointer.inside = true;
      if (isDark()) requestDraw();
    };

    const handleLeave = () => {
      pointer.inside = false;
      requestDraw();
    };

    const handleMouseOut = (e: MouseEvent) => {
      if (!e.relatedTarget) handleLeave();
    };

    // The theme toggle swaps a class on <html>; repaint, and open or close the hole, when it does
    const themeObserver = new MutationObserver(requestDraw);
    themeObserver.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });

    resize();
    window.addEventListener('resize', resize);
    window.addEventListener('pointermove', handleMove);
    window.addEventListener('blur', handleLeave);
    document.addEventListener('mouseout', handleMouseOut);

    return () => {
      cancelAnimationFrame(frame);
      themeObserver.disconnect();
      window.removeEventListener('resize', resize);
      window.removeEventListener('pointermove', handleMove);
      window.removeEventListener('blur', handleLeave);
      document.removeEventListener('mouseout', handleMouseOut);
    };
  }, [enabled]);

  if (!enabled) return null;

  return (
    <>
      <div className="reveal-image" style={{ backgroundImage: `url(${backgroundImg})` }} aria-hidden="true" />
      <canvas ref={canvasRef} className="reveal-cover" aria-hidden="true" />
    </>
  );
};
