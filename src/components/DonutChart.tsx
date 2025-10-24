// DonutChart.tsx
"use client";

import React from 'react';

interface DonutChartProps {
  percentage: number;
  size?: number;
  strokeWidth?: number;
  primaryColor?: string;
  secondaryColor?: string;
  theme?: 'light' | 'dark';
}

const DonutChart: React.FC<DonutChartProps> = ({
  percentage,
  size = 100,
  strokeWidth = 10,
  primaryColor = '#a855f7',
  secondaryColor = '#3f3f46',
  theme = 'light',
}) => {
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  return (
    <div className="relative flex items-center justify-center" style={{ width: size, height: size }}>
      <svg
        className="transform -rotate-90"
        width={size}
        height={size}
        viewBox={`0 0 ${size} ${size}`}
      >
        <circle
          stroke={secondaryColor}
          fill="transparent"
          strokeWidth={strokeWidth}
          r={radius}
          cx={size / 2}
          cy={size / 2}
          // 3. AÑADE LA TRANSICIÓN AL CÍRCULO
          style={{ transition: 'stroke 1.5s ease-in-out' }}
        />
        <circle
          stroke={primaryColor}
          fill="transparent"
          strokeWidth={strokeWidth}
          r={radius}
          cx={size / 2}
          cy={size / 2}
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          strokeLinecap="round"
          // 3. AÑADE LA TRANSICIÓN AL CÍRCULO
          style={{ transition: 'stroke 1.5s ease-in-out' }}
        />
      </svg>
      {/* 4. CAMBIO: Clases condicionales eliminadas, solo 'text-white' */}
      <div
        className="absolute flex items-center justify-center text-lg font-bold text-white"
      >
        {percentage}%
      </div>
    </div>
  );
};

export default DonutChart;