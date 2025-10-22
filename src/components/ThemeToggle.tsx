"use client";

import { Sun, Moon } from 'lucide-react';
// Importa el hook CON LLAVES {} desde el otro archivo
import { useTheme } from '../app/hooks/useTheme'; 

// EXPORT DEFAULT AQUÍ
export default function ThemeToggle() {
  const [theme, toggleTheme] = useTheme(); // Usa el hook

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-full text-purple-200 hover:bg-slate-700/50 transition-colors"
      aria-label="Toggle theme"
    >
      {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
    </button>
  );
}