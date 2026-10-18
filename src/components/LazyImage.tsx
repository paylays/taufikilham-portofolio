import React, { useState } from 'react';

interface LazyImageProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
  loading?: 'lazy' | 'eager';
  loadingText?: string;
  errorText?: string;
}

// Holds the image's box with a skeleton until the file arrives, so the text around it never jumps
export const LazyImage: React.FC<LazyImageProps> = ({
  src,
  alt,
  width,
  height,
  className = '',
  loading = 'lazy',
  loadingText,
  errorText,
}) => {
  // Keyed by src so a different image starts from the skeleton again
  const [settled, setSettled] = useState<{ src: string; ok: boolean } | null>(null);
  const state = settled?.src !== src ? 'loading' : settled.ok ? 'loaded' : 'error';
  const message = state === 'loading' ? loadingText : state === 'error' ? errorText : undefined;

  return (
    <div
      className={`lazy-image ${className}`}
      data-state={state}
      style={{ aspectRatio: `${width} / ${height}` }}
    >
      <img
        src={src}
        alt={alt}
        width={width}
        height={height}
        loading={loading}
        decoding="async"
        onLoad={() => setSettled({ src, ok: true })}
        onError={() => setSettled({ src, ok: false })}
      />
      {message && <span className="lazy-image-message">{message}</span>}
    </div>
  );
};
