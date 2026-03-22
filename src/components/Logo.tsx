'use client';

interface LogoProps {
  variant?: 'dark' | 'light';
  size?: number;
}

export default function Logo({ variant = 'light', size = 48 }: LogoProps) {
  const isDark = variant === 'dark';
  const bgColor = isDark ? '#000000' : '#ffffff';
  const textColor = isDark ? '#ffffff' : '#000000';

  return (
    <div className="flex items-center gap-3">
      {/* Circular logo mark */}
      <svg
        width={size}
        height={size}
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-label="New Seed Painting logo"
      >
        <circle cx="24" cy="24" r="24" fill={bgColor} />
        {/* Seed / leaf shape — rotated ~45deg, with central vein */}
        {/* Outer leaf */}
        <path
          d="M24 8 C32 12, 38 20, 34 30 C30 40, 16 40, 14 30 C12 20, 18 8, 24 8 Z"
          fill="#E8A824"
          transform="rotate(-45 24 24)"
        />
        {/* Central vein */}
        <line
          x1="24"
          y1="14"
          x2="24"
          y2="38"
          stroke="#CC8C1A"
          strokeWidth="1.5"
          strokeLinecap="round"
          transform="rotate(-45 24 24)"
        />
        {/* Highlight */}
        <path
          d="M24 8 C26 10, 30 16, 28 22 C26 28, 20 30, 18 26"
          fill="none"
          stroke="#F5C842"
          strokeWidth="1"
          strokeLinecap="round"
          opacity="0.6"
          transform="rotate(-45 24 24)"
        />
      </svg>

      {/* Text mark */}
      <div className="flex flex-col leading-none" style={{ color: textColor }}>
        <span
          style={{
            fontFamily: "'Montserrat', 'Inter', sans-serif",
            fontWeight: 800,
            fontSize: '0.95rem',
            letterSpacing: '0.05em',
            textTransform: 'uppercase',
          }}
        >
          New Seed
        </span>
        <span
          style={{
            fontFamily: "'Montserrat', 'Inter', sans-serif",
            fontWeight: 300,
            fontSize: '0.7rem',
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
          }}
        >
          Painting
        </span>
      </div>
    </div>
  );
}
