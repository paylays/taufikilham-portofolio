import React, { useEffect, useRef } from 'react';

// Thin branches grow in from the page edges once per visit, after the plum background on antfu.me
const STEP_LENGTH = 6;
const TWIST = Math.PI / 12;
// Each tree forks more often for its first steps, so it spreads before it thins out
const BUSHY_STEPS = 30;
// Hard stop so a tree that keeps forking inside the page cannot run forever
const MAX_STEPS = 20000;
const FRAME_MS = 1000 / 40;
// Opaque here; the canvas opacity in CSS fades it, so crossing strokes never stack darker
const COLOR = '#888888';

type Step = () => void;

export const GrowingBranches: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext('2d');
    if (!canvas || !ctx) return;

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    let frame = 0;
    let width = 0;

    const start = () => {
      cancelAnimationFrame(frame);
      // clientWidth leaves out the scrollbar, matching the canvas's CSS width
      width = document.documentElement.clientWidth;
      const height = document.documentElement.clientHeight;
      const dpr = window.devicePixelRatio || 1;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.lineWidth = 1;
      ctx.strokeStyle = COLOR;

      let pending: Step[] = [];
      let drawn = 0;

      const grow = (x: number, y: number, angle: number, tree = { steps: 0 }) => {
        const length = Math.random() * STEP_LENGTH;
        const nx = x + Math.cos(angle) * length;
        const ny = y + Math.sin(angle) * length;
        ctx.beginPath();
        ctx.moveTo(x, y);
        ctx.lineTo(nx, ny);
        ctx.stroke();

        tree.steps += 1;
        drawn += 1;
        const outside = nx < -100 || nx > width + 100 || ny < -100 || ny > height + 100;
        if (outside || drawn > MAX_STEPS) return;

        const forkRate = tree.steps <= BUSHY_STEPS ? 0.8 : 0.5;
        if (Math.random() < forkRate) pending.push(() => grow(nx, ny, angle + Math.random() * TWIST, tree));
        if (Math.random() < forkRate) pending.push(() => grow(nx, ny, angle - Math.random() * TWIST, tree));
      };

      // Roots start somewhere along the middle 60% of each edge
      const along = (size: number) => (Math.random() * 0.6 + 0.2) * size;
      pending = [
        () => grow(along(width), -5, Math.PI / 2),
        () => grow(along(width), height + 5, -Math.PI / 2),
        () => grow(-5, along(height), 0),
        () => grow(width + 5, along(height), Math.PI),
      ];
      // Two trees are enough on a phone; four crowd the text
      if (width < 500) pending = pending.slice(0, 2);

      const advance = (holdBack: number) => {
        const now = pending;
        pending = [];
        // Tips held back for a frame make the growth uneven, like a real plant
        now.forEach((step) => (Math.random() < holdBack ? pending.push(step) : step()));
      };

      if (reduceMotion) {
        while (pending.length) advance(0);
        return;
      }

      let last = 0;
      const tick = (time: number) => {
        if (!pending.length) return;
        frame = requestAnimationFrame(tick);
        if (time - last < FRAME_MS) return;
        last = time;
        advance(0.5);
      };
      frame = requestAnimationFrame(tick);
    };

    // Phones fire resize when the address bar slides, so only a new width restarts the trees
    const handleResize = () => {
      if (document.documentElement.clientWidth !== width) start();
    };

    start();
    window.addEventListener('resize', handleResize);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return <canvas ref={canvasRef} className="branches" aria-hidden="true" />;
};
