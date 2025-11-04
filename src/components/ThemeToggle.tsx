"use client";

import { Sun, Moon } from 'lucide-react';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);



  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="p-2 w-[36px] h-[36px]" />;
  }


  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-full text-gray-200 hover:bg-purple-100/50 
                 dark:text-purple-200 dark:hover:bg-slate-700/50 transition-colors"
      aria-label="Toggle theme"
    >
      {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
    </button>
  );
}