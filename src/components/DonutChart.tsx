import React from 'react';
import { motion } from 'framer-motion';

interface DonutChartProps {
  percentage: number;
  size?: number; // Tamaño total del SVG
  strokeWidth?: number; // Grosor del anillo del donut
  color?: string; // Color del progreso
  bgColor?: string; // Color del fondo del anillo
  textColor?: string; // Color del texto del porcentaje
}

const DonutChart: React.FC<DonutChartProps> = ({
  percentage,
  size = 120,
  strokeWidth = 12,
  color = '#a78bfa', // Color púrpura de Tailwind (purple-400)
  bgColor = '#4b5563', // Color gris de Tailwind (gray-600)
  textColor = '#a78bfa', // Color del texto, coincide con el color de progreso
}) => {
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (percentage / 100) * circumference;

  return (
    <div className="relative flex items-center justify-center" style={{ width: size, height: size }}>
      <svg className="transform -rotate-90" width={size} height={size}>
        {/* Fondo del anillo */}
        <circle
          stroke={bgColor}
          fill="transparent"
          strokeWidth={strokeWidth}
          r={radius}
          cx={size / 2}
          cy={size / 2}
        />
        {/* Anillo de progreso */}
        <motion.circle
          stroke={color}
          fill="transparent"
          strokeWidth={strokeWidth}
          r={radius}
          cx={size / 2}
          cy={size / 2}
          strokeDasharray={circumference}
          strokeDashoffset={circumference} // Start fully hidden
          strokeLinecap="round"
          initial={{ strokeDashoffset: circumference }}
          animate={{ strokeDashoffset: offset }}
          transition={{ duration: 1.5, ease: "easeOut" }} // Animación más larga y suave
        />
      </svg>
      {/* Texto del porcentaje */}
      <motion.span
        className="absolute text-xl font-bold"
        style={{ color: textColor }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
      >
        {percentage}%
      </motion.span>
    </div>
  );
};

export default DonutChart;
