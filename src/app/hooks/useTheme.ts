"use client";

import { useState, useEffect } from 'react';

type Theme = 'light' | 'dark';

export function useTheme(): [Theme, () => void] {
  // Usamos una función para inicializar el estado.
  // Esta función SOLO se ejecuta en el CLIENTE y SOLO una vez en el primer render.
  const [theme, setTheme] = useState<Theme>(() => {
    // Si estamos en el servidor, o localStorage no está disponible,
    // retornamos 'light' para el render inicial del servidor.
    if (typeof window === 'undefined') {
      return 'light';
    }
    // En el cliente, intentamos leer de localStorage
    const localTheme = localStorage.getItem('theme') as Theme | null;
    return localTheme || 'light'; // Por defecto 'light' si no hay nada guardado
  });

  useEffect(() => {
    // Este efecto se ejecutará después del primer render en el cliente.
    // Sincronizamos la clase 'dark' en el elemento <html> con el estado actual del tema.
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    // Añadimos 'theme' a las dependencias para que se actualice si el tema cambia
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prevTheme => {
      const newTheme = prevTheme === 'light' ? 'dark' : 'light';
      localStorage.setItem('theme', newTheme);
      // El useEffect anterior se encargará de actualizar la clase en <html>
      return newTheme;
    });
  };

  return [theme, toggleTheme];
}