"use client";

import { useState, useEffect } from 'react';

type Theme = 'light' | 'dark';


export function useTheme(): [Theme, () => void] {
  
  const [theme, setTheme] = useState<Theme>('light');

  useEffect(() => {
    const localTheme = localStorage.getItem('theme') as Theme | null;
    const initialTheme = localTheme || 'light';


    setTheme(initialTheme);
    
    if (initialTheme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, []);

  const toggleTheme = () => {
    setTheme(prevTheme => {
      const newTheme = prevTheme === 'light' ? 'dark' : 'light';
      localStorage.setItem('theme', newTheme);
      
      if (newTheme === 'dark') {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
      return newTheme;
    });
  };

  return [theme, toggleTheme];
}