"use client";

import React from 'react';

interface DonutChartProps {
  percentage: number;
  size?: number;
  strokeWidth?: number;
  primaryColor?: string; // Nuevo: Color para el progreso
  secondaryColor?: string; // Nuevo: Color para el resto
}

const DonutChart: React.FC<DonutChartProps> = ({
  percentage,
  size = 100,
  strokeWidth = 10,
  primaryColor = '#a855f7', // purple-500 por defecto
  secondaryColor = '#3f3f46', // slate-700 por defecto
}) => {
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  return (
    // ESTE ES EL ÚNICO ELEMENTO RAÍZ DEL COMPONENTE
    <div className="relative flex items-center justify-center" style={{ width: size, height: size }}>
      <svg
        className="transform -rotate-90"
        width={size}
        height={size}
        viewBox={`0 0 ${size} ${size}`}
      >
        <circle
          // Considera si quieres que estos colores se manejen con Tailwind o con props
          // Si usas props, Tailwind dark: no se aplicará directamente a estas líneas
          stroke={secondaryColor}
          fill="transparent"
          strokeWidth={strokeWidth}
          r={radius}
          cx={size / 2}
          cy={size / 2}
        />
        <circle
          // Color del progreso
          stroke={primaryColor}
          fill="transparent"
          strokeWidth={strokeWidth}
          r={radius}
          cx={size / 2}
          cy={size / 2}
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          strokeLinecap="round"
        />
      </svg>
      <div className="absolute flex items-center justify-center text-lg font-bold text-white">
        {percentage}%
      </div>
    </div>
  );
};

export default DonutChart;