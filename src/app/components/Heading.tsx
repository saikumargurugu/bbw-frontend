import React from 'react';

interface HeadingProps {
  title: string;
  subtitle?: string;
  center?: boolean;
}

export default function Heading({ title, subtitle, center = true }: HeadingProps) {
  return (
    <div className={center ? 'flex flex-col items-center w-full' : ''}>
      <div className="flex items-center justify-center w-full gap-4 my-4">
        <div className="h-0.5 min-w-[40px] md:min-w-[80px] bg-gradient-to-r from-red-500 via-yellow-400 to-red-500 opacity-80 rounded-full" />
        <h2
          className="text-3xl md:text-5xl font-bold font-serif text-center px-4 whitespace-nowrap text-white"
          style={{
            letterSpacing: '0.02em',
            fontFamily: 'Georgia, Times, Times New Roman, serif',
            fontWeight: 700,
            textShadow: '0 2px 8px #bbb',
            background: 'none',
            WebkitBackgroundClip: undefined,
            WebkitTextFillColor: undefined,
            display: 'inline-block',
            filter: 'none',
          }}
        >
          {title}
        </h2>
        <div className="h-0.5 min-w-[40px] md:min-w-[80px] bg-gradient-to-r from-yellow-400 via-red-500 to-yellow-400 opacity-80 rounded-full" />
      </div>
      {subtitle && (
        <div className="text-lg md:text-xl text-white/80 font-medium text-center mb-2">
          {subtitle}
        </div>
      )}
    </div>
  );
}
