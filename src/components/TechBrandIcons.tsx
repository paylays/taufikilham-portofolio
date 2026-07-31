import React from 'react';

interface IconProps {
  size?: number;
  className?: string;
  style?: React.CSSProperties;
}

export const ReactIcon: React.FC<IconProps> = ({ size = 20, style }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" style={style}>
    <circle cx="12" cy="12" r="2" fill="#61DAFB" />
    <g stroke="#61DAFB" strokeWidth="1.5">
      <ellipse cx="12" cy="12" rx="10" ry="4.2" />
      <ellipse cx="12" cy="12" rx="10" ry="4.2" transform="rotate(60 12 12)" />
      <ellipse cx="12" cy="12" rx="10" ry="4.2" transform="rotate(120 12 12)" />
    </g>
  </svg>
);

export const TypescriptIcon: React.FC<IconProps> = ({ size = 20, style }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" style={style}>
    <rect width="24" height="24" rx="4" fill="#3178C6" />
    <path d="M12.5 13.5H16.5V15H14.5V20H13V15H11V13.5H12.5Z" fill="white" />
    <path d="M19.5 14C19 13.6 18.3 13.5 17.6 13.5C16.2 13.5 15.5 14.2 15.5 15.2C15.5 17.1 19.5 16.5 19.5 18.5C19.5 19.5 18.5 20.2 17.1 20.2C16.2 20.2 15.3 19.8 14.6 19.2L15.3 17.9C16 18.4 16.6 18.7 17.2 18.7C17.9 18.7 18.3 18.4 18.3 17.9C18.3 16.2 14.3 16.7 14.3 14.7C14.3 13.4 15.5 12.2 17.6 12.2C18.6 12.2 19.4 12.5 20.2 13L19.5 14Z" fill="white" />
  </svg>
);

export const JavascriptIcon: React.FC<IconProps> = ({ size = 20, style }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" style={style}>
    <rect width="24" height="24" rx="4" fill="#F7DF1E" />
    <path d="M12.8 18.4C13.3 19.2 14.2 19.7 15.4 19.7C16.8 19.7 17.7 19 17.7 17.8C17.7 16.7 17 16.2 15.5 15.6L14.7 15.3C12.7 14.5 11.5 13.5 11.5 11.3C11.5 9 13.4 7.5 16.1 7.5C17.8 7.5 19 8.1 19.8 9.5L18 10.6C17.5 9.7 16.8 9.3 16 9.3C15 9.3 14.3 9.9 14.3 10.9C14.3 11.8 14.8 12.3 16.3 12.9L17.1 13.2C19.4 14.1 20.6 15.2 20.6 17.5C20.6 20.2 18.5 21.6 15.4 21.6C13.2 21.6 11.6 20.7 10.7 18.9L12.8 18.4ZM5.2 18.7C5.7 19.4 6.4 19.8 7.4 19.8C8.5 19.8 9.2 19.3 9.2 17.8V7.8H12.1V18C12.1 20.8 10.4 22 7.7 22C5.3 22 3.8 20.7 3.1 18.9L5.2 18.7Z" fill="#000000" />
  </svg>
);

export const Html5Icon: React.FC<IconProps> = ({ size = 20, style }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" style={style}>
    <path d="M3 2L4.8 20.2L12 22L19.2 20.2L21 2H3Z" fill="#E34F26" />
    <path d="M12 3.8V20.3L17.7 18.7L19.2 3.8H12Z" fill="#EF652A" />
    <path d="M7.1 7H16.9L16.6 9.8H7.3L7.7 13.5H16.3L15.9 17.3L12 18.4L8.1 17.3L7.9 14.8H5.7L6.1 19.4L12 21L17.9 19.4L18.6 12H7.5L7.1 7Z" fill="white" />
  </svg>
);

export const Css3Icon: React.FC<IconProps> = ({ size = 20, style }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" style={style}>
    <path d="M3 2L4.8 20.2L12 22L19.2 20.2L21 2H3Z" fill="#1572B6" />
    <path d="M12 3.8V20.3L17.7 18.7L19.2 3.8H12Z" fill="#33A9DC" />
    <path d="M7.1 7H16.9L16.6 9.8H10L10.3 12.6H16.3L15.9 17.3L12 18.4L8.1 17.3L7.9 14.8H5.7L6.1 19.4L12 21L17.9 19.4L18.6 7H7.1Z" fill="white" />
  </svg>
);

export const TailwindIcon: React.FC<IconProps> = ({ size = 20, style }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" style={style}>
    <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.336 6.182 14.975 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.336 13.382 8.975 12 6.001 12z" fill="#06B6D4" />
  </svg>
);

export const NodejsIcon: React.FC<IconProps> = ({ size = 20, style }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" style={style}>
    <path d="M12 2L2 7.8V16.2L12 22L22 16.2V7.8L12 2Z" fill="#339933" />
    <path d="M12 4.5L19.5 8.8V15.2L12 19.5L4.5 15.2V8.8L12 4.5Z" fill="#5FA04E" />
    <path d="M12 7.5L16.5 10.1V14.9L12 17.5L7.5 14.9V10.1L12 7.5Z" fill="white" />
  </svg>
);

export const PostgresIcon: React.FC<IconProps> = ({ size = 20, style }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" style={style}>
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 16h-2v-2h2v2zm1.07-7.75l-.9.92C12.45 11.9 12 12.5 12 14h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2s-2 .9-2 2H7c0-2.76 2.24-5 5-5s5 2.24 5 5c0 1.04-.42 1.99-1.07 2.75z" fill="#4169E1" />
  </svg>
);

export const MongodbIcon: React.FC<IconProps> = ({ size = 20, style }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" style={style}>
    <path d="M12 2C11.6 3.5 11.2 5 10 7.5C8.8 10 7 13.5 7 16.5C7 19.5 9.2 22 12 22C14.8 22 17 19.5 17 16.5C17 13.5 15.2 10 14 7.5C12.8 5 12.4 3.5 12 2Z" fill="#47A248" />
    <path d="M12 22V12" stroke="white" strokeWidth="1.5" />
  </svg>
);

export const GitIcon: React.FC<IconProps> = ({ size = 20, style }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" style={style}>
    <path d="M21.6 10.9L13.1 2.4C12.5 1.8 11.5 1.8 10.9 2.4L2.4 10.9C1.8 11.5 1.8 12.5 2.4 13.1L10.9 21.6C11.5 22.2 12.5 22.2 13.1 21.6L21.6 13.1C22.2 12.5 22.2 11.5 21.6 10.9Z" fill="#F05032" />
    <path d="M14.5 11.5C13.7 11.5 13 12.2 13 13C13 13.6 13.4 14.1 13.9 14.4V16.6C13.4 16.9 13 17.4 13 18C13 18.8 13.7 19.5 14.5 19.5C15.3 19.5 16 18.8 16 18C16 17.4 15.6 16.9 15.1 16.6V14.4C15.6 14.1 16 13.6 16 13C16 12.2 15.3 11.5 14.5 11.5ZM9.5 6.5C8.7 6.5 8 7.2 8 8C8 8.6 8.4 9.1 8.9 9.4V16.6C8.4 16.9 8 17.4 8 18C8 18.8 8.7 19.5 9.5 19.5C10.3 19.5 11 18.8 11 18C11 17.4 10.6 16.9 10.1 16.6V9.4C10.6 9.1 11 8.6 11 8C11 7.2 10.3 6.5 9.5 6.5Z" fill="white" />
  </svg>
);

export const VercelIcon: React.FC<IconProps> = ({ size = 20, style }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" style={style}>
    <path d="M12 2L22 20H2L12 2Z" fill="currentColor" />
  </svg>
);

export const PostmanIcon: React.FC<IconProps> = ({ size = 20, style }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" style={style}>
    <circle cx="12" cy="12" r="10" fill="#FF6C37" />
    <path d="M8 12L11 15L16 9" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const ViteIcon: React.FC<IconProps> = ({ size = 20, style }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" style={style}>
    <path d="M21.5 3.5L12.5 21.5L2.5 3.5H21.5Z" fill="url(#vite-grad)" />
    <defs>
      <linearGradient id="vite-grad" x1="2.5" y1="3.5" x2="21.5" y2="21.5" gradientUnits="userSpaceOnUse">
        <stop stopColor="#41D1FF" />
        <stop offset="1" stopColor="#BD34FE" />
      </linearGradient>
    </defs>
  </svg>
);

export const NextjsIcon: React.FC<IconProps> = ({ size = 20, style }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" style={style}>
    <circle cx="12" cy="12" r="10" fill="#000000" />
    <path d="M14.5 9.5V14.5M9.5 9.5V14.5L14.5 14.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const VueIcon: React.FC<IconProps> = ({ size = 20, style }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" style={style}>
    <path d="M2 3H6.5L12 13L17.5 3H22L12 21L2 3Z" fill="#4FC08D" />
    <path d="M6.5 3H10L12 7L14 3H17.5L12 13L6.5 3Z" fill="#35495E" />
  </svg>
);

export const LaravelIcon: React.FC<IconProps> = ({ size = 20, style }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" style={style}>
    <path d="M3 6L12 2L21 6V18L12 22L3 18V6Z" fill="#FF2D20" />
    <path d="M12 6L17 9V15L12 18L7 15V9L12 6Z" fill="white" />
  </svg>
);

export const PhpIcon: React.FC<IconProps> = ({ size = 20, style }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" style={style}>
    <ellipse cx="12" cy="12" rx="10" ry="6" fill="#777BB4" />
    <text x="12" y="14" fill="white" fontSize="7" fontWeight="bold" textAnchor="middle" fontFamily="sans-serif">PHP</text>
  </svg>
);

export const PythonIcon: React.FC<IconProps> = ({ size = 20, style }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" style={style}>
    <path d="M11.8 2c-3.7 0-3.5 1.6-3.5 1.6v1.7h3.6v0.5H6.8s-2.4 0.3-2.4 3.7c0 3.4 2.1 3.3 2.1 3.3h1.3v-1.8s-0.1-2.1 2.1-2.1h3.6s2 0 2-2V5.2s0.3-3.2-3.7-3.2zm-1.8 1.1c0.4 0 0.7 0.3 0.7 0.7 0 0.4-0.3 0.7-0.7 0.7-0.4 0-0.7-0.3-0.7-0.7 0-0.4 0.3-0.7 0.7-0.7z" fill="#3776AB" />
    <path d="M12.2 22c3.7 0 3.5-1.6 3.5-1.6v-1.7h-3.6v-0.5h5.1s2.4-0.3 2.4-3.7c0-3.4-2.1-3.3-2.1-3.3h-1.3v1.8s0.1 2.1-2.1 2.1h-3.6s-2 0-2 2v2.1s-0.3 3.2 3.7 3.2zm1.8-1.1c-0.4 0-0.7-0.3-0.7-0.7 0-0.4 0.3-0.7 0.7-0.7 0.4 0 0.7 0.3 0.7 0.7 0 0.4-0.3 0.7-0.7 0.7z" fill="#FFD43B" />
  </svg>
);

export const FastApiIcon: React.FC<IconProps> = ({ size = 20, style }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" style={style}>
    <circle cx="12" cy="12" r="10" fill="#059669" />
    <path d="M13 4L6 14H12L11 20L18 10H12L13 4Z" fill="white" />
  </svg>
);

export const MysqlIcon: React.FC<IconProps> = ({ size = 20, style }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" style={style}>
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14h-2v-6h2v6zm4 0h-2v-6h2v6z" fill="#00758F" />
  </svg>
);

export const FirebaseIcon: React.FC<IconProps> = ({ size = 20, style }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" style={style}>
    <path d="M3.89 15.67L6.5 2.55l3.19 6.01L3.89 15.67zm16.22 0l-2.48-13.12-3.83 7.22 6.31 5.9zM12 21.5l8.11-5.83-6.19-5.78L12 21.5z" fill="#FFCA28" />
  </svg>
);

export const SupabaseIcon: React.FC<IconProps> = ({ size = 20, style }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" style={style}>
    <path d="M13.35 21.75c-.5.6-1.55.25-1.55-.55v-8.7h8.8c.8 0 1.2.95.6 1.55l-7.85 7.7zM10.65 2.25c.5-.6 1.55-.25 1.55.55v8.7h-8.8c-.8 0-1.2-.95-.6-1.55l7.85-7.7z" fill="#3ECF8E" />
  </svg>
);

export const DockerIcon: React.FC<IconProps> = ({ size = 20, style }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" style={style}>
    <path d="M13 10h2v2h-2v-2zm-3 0h2v2h-2v-2zm-3 0h2v2H7v-2zm3-3h2v2h-2V7zm3 0h2v2h-2V7zm3 0h2v2h-2V7zm-6-3h2v2h-2V4zm3 0h2v2h-2V4zM2.5 13.5C2 15 3 17 5 18c3 1.5 8 1.5 11 0s4.5-4.5 4.5-4.5h-18z" fill="#2496ED" />
  </svg>
);

export const GcpIcon: React.FC<IconProps> = ({ size = 20, style }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" style={style}>
    <path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96z" fill="#4285F4" />
  </svg>
);
