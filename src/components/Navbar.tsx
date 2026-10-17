"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ThemeToggle from "./ThemeToggle";
import LanguageToggle from "./LanguageToggle";
import { useTheme } from 'next-themes';
import { useLanguage } from '@/context/LanguageContext';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const { theme } = useTheme();
  const { t } = useLanguage();
  const [mounted, setMounted] = useState(false);

  // Añade un estado para el menú móvil
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-1500
        ${scrolled
          ? theme === 'light'
            ? 'bg-slate-700/70 backdrop-blur-md shadow-lg'
            : 'bg-emerald-950/70 backdrop-blur-md shadow-lg'
          : 'bg-transparent'
        }
      `}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <Link
              href="/"
              onClick={() => setIsMenuOpen(false)}
              className={`text-3xl sm:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r
                transition-colors duration-1500 ease-in-out
                ${theme === 'light'
                  ? 'from-purple-500 to-pink-700'
                  : 'from-green-200 to-green-800'}`
              }
            >
              Matias Alessandrello
            </Link>
          </div>

          {/* --- MENÚ DE ESCRITORIO --- */}
          <div className="hidden md:block">
            <div className="ml-6 lg:ml-10 flex items-center space-x-3 lg:space-x-4">
              <Link
                href="/projects"
                className={`
                  ${theme === 'light' ? 'text-gray-300' : 'text-gray-200'}
                  ${theme === 'light' ? 'hover:bg-violet-700' : 'hover:bg-slate-800'}
                  hover:text-white px-3 py-2 rounded-md text-lg lg:text-xl font-medium
                  transition-all duration-200 ease-in-out hover:scale-105 inline-block
                `}
              >
                {t.nav.projects}
              </Link>
              <Link
                href="/#about"
                className={`
                  ${theme === 'light' ? 'text-gray-300' : 'text-gray-200'}
                  ${theme === 'light' ? 'hover:bg-violet-700' : 'hover:bg-slate-800'}
                  hover:text-white px-3 py-2 rounded-md text-lg lg:text-xl font-medium
                  transition-all duration-200 ease-in-out hover:scale-105 inline-block
                `}
              >
                {t.nav.about}
              </Link>
              <Link
                href="/#technologies"
                className={`
                  ${theme === 'light' ? 'text-gray-300' : 'text-gray-200'}
                  ${theme === 'light' ? 'hover:bg-violet-700' : 'hover:bg-slate-800'}
                  hover:text-white px-3 py-2 rounded-md text-lg lg:text-xl font-medium
                  transition-all duration-200 ease-in-out hover:scale-105 inline-block
                `}
              >
                {t.nav.technologies}
              </Link>
              <Link
                href="/certificados"
                className={`
                  ${theme === 'light' ? 'text-gray-300' : 'text-gray-200'}
                  ${theme === 'light' ? 'hover:bg-violet-700' : 'hover:bg-slate-800'}
                  hover:text-white px-3 py-2 rounded-md text-lg lg:text-xl font-medium
                  transition-all duration-200 ease-in-out hover:scale-105 inline-block
                `}
              >
                {t.nav.certificates}
              </Link>
              <Link
                href="/contact"
                className={`
                  ${theme === 'light' ? 'bg-purple-600 hover:bg-purple-700' : 'bg-green-600 hover:bg-green-700'}
                  text-white
                  px-5 py-2 rounded-md text-lg lg:text-xl font-medium
                  transition-all duration-1500 ease-in-out hover:scale-105 inline-block
                `}
              >
                {t.nav.contact}
              </Link>
              <LanguageToggle />
              <ThemeToggle />
            </div>
          </div>

          {/* --- BOTÓN HAMBURGUESA, IDIOMA Y TEMA (MÓVIL) --- */}
          <div className="-mr-2 flex items-center gap-2 md:hidden">
            <LanguageToggle />
            <ThemeToggle />
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              type="button"
              className={`p-2 rounded-md transition duration-150 ease-in-out
                ${theme === 'light' ? 'text-purple-500 hover:text-purple-700' : 'text-green-300 hover:text-green-100'}`}
              aria-controls="mobile-menu"
              aria-expanded={isMenuOpen}
            >
              <span className="sr-only">Abrir menú principal</span>
              {!isMenuOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>

        </div>
      </div>

      {/* --- PANEL DE MENÚ MÓVIL DESPLEGABLE --- */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            id="mobile-menu"
            className="md:hidden"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
          >
            <div className={`px-4 pt-3 pb-4 space-y-2 bg-gradient-to-r
                transition-colors duration-1500 ease-in-out shadow-xl
              ${theme === 'light'
                ? 'bg-purple-900/95 border-b border-purple-500/40'
                : 'bg-emerald-950/95 border-b border-emerald-700/40'
              }
            `}>
              <Link
                href="/projects"
                onClick={() => setIsMenuOpen(false)}
                className={`
                  ${theme === 'light' ? 'text-gray-200 hover:bg-purple-800' : 'text-gray-200 hover:bg-slate-800'}
                  hover:text-white px-3 py-2 rounded-md text-base font-medium
                  transition-all duration-200 ease-in-out block w-full text-left
                `}
              >
                {t.nav.projects}
              </Link>
              <Link
                href="/#about"
                onClick={() => setIsMenuOpen(false)}
                className={`
                  ${theme === 'light' ? 'text-gray-200 hover:bg-purple-800' : 'text-gray-200 hover:bg-slate-800'}
                  hover:text-white px-3 py-2 rounded-md text-base font-medium
                  transition-all duration-200 ease-in-out block w-full text-left
                `}
              >
                {t.nav.about}
              </Link>
              <Link
                href="/#technologies"
                onClick={() => setIsMenuOpen(false)}
                className={`
                  ${theme === 'light' ? 'text-gray-200 hover:bg-purple-800' : 'text-gray-200 hover:bg-slate-800'}
                  hover:text-white px-3 py-2 rounded-md text-base font-medium
                  transition-all duration-200 ease-in-out block w-full text-left
                `}
              >
                {t.nav.technologies}
              </Link>
              <Link
                href="/certificados"
                onClick={() => setIsMenuOpen(false)}
                className={`
                  ${theme === 'light' ? 'text-gray-200 hover:bg-purple-800' : 'text-gray-200 hover:bg-slate-800'}
                  hover:text-white px-3 py-2 rounded-md text-base font-medium
                  transition-all duration-200 ease-in-out block w-full text-left
                `}
              >
                {t.nav.certificates}
              </Link>
              <Link
                href="/contact"
                onClick={() => setIsMenuOpen(false)}
                className={`
                  ${theme === 'light' ? 'bg-purple-600 hover:bg-purple-700' : 'bg-green-600 hover:bg-green-700'}
                  text-white
                  px-3 py-2 rounded-md text-base font-medium
                  transition-all duration-1500 ease-in-out block w-full text-center
                  mt-2
                `}
              >
                {t.nav.contact}
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}