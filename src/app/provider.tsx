"use client";

import { ThemeProvider as NextThemesProvider, type ThemeProviderProps } from 'next-themes';
import { LanguageProvider } from '@/context/LanguageContext';

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  // attribute="class" le dice a next-themes que ponga la clase "dark" en el <html>
  // defaultTheme="light" coincide con tu CSS (donde :root es el tema claro)
  return (
    <NextThemesProvider attribute="class" defaultTheme="light" {...props}>
      <LanguageProvider>
        {children}
      </LanguageProvider>
    </NextThemesProvider>
  );
}
