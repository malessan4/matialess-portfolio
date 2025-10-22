"use client";

import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../app/hooks/useTheme';

export default function ThemeToggle() {
  const [theme, toggleTheme] = useTheme();

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
