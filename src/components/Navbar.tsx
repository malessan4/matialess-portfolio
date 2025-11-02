"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ThemeToggle from "./ThemeToggle";
import { useTheme } from 'next-themes';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // 2. Añade un estado para el menú móvil
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
              // 3. Añade un onClick para cerrar el menú si se hace clic en el logo
              onClick={() => setIsMenuOpen(false)}
              className={`text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r
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
            <div className="ml-10 flex items-baseline space-x-4">
              <Link
                href="/projects"
                className={`
                  ${theme === 'light' ? 'text-gray-300' : 'text-gray-200'}
                  ${theme === 'light' ? 'hover:bg-violet-700' : 'hover:bg-slate-800'}
                  hover:text-white px-3 py-2 rounded-md text-xl font-medium
                  transition-all duration-200 ease-in-out hover:scale-105 inline-block
                `}
              >
                Proyectos
              </Link>
              <Link
                href="/#about"
                className={`
                  ${theme === 'light' ? 'text-gray-300' : 'text-gray-200'}
                  ${theme === 'light' ? 'hover:bg-violet-700' : 'hover:bg-slate-800'}
                  hover:text-white px-3 py-2 rounded-md text-xl font-medium
                  transition-all duration-200 ease-in-out hover:scale-105 inline-block
                `}
              >
                Sobre Mí
              </Link>
              <Link
                href="/#technologies"
                className={`
                  ${theme === 'light' ? 'text-gray-300' : 'text-gray-200'}
                  ${theme === 'light' ? 'hover:bg-violet-700' : 'hover:bg-slate-800'}
                  hover:text-white px-3 py-2 rounded-md text-xl font-medium
                  transition-all duration-200 ease-in-out hover:scale-105 inline-block
                `}
              >
                Tecnologías
              </Link>
              <Link
                href="/certificados"
                className={`
                  ${theme === 'light' ? 'text-gray-300' : 'text-gray-200'}
                  ${theme === 'light' ? 'hover:bg-violet-700' : 'hover:bg-slate-800'}
                  hover:text-white px-3 py-2 rounded-md text-xl font-medium
                  transition-all duration-200 ease-in-out hover:scale-105 inline-block
                `}
              >
                Certificados
              </Link>
              <Link
                href="/contact"
                className={`
                  ${theme === 'light' ? 'bg-purple-600 hover:bg-purple-700' : 'bg-green-600 hover:bg-green-700'}
                  text-white
                  px-6 py-2 rounded-md text-xl font-medium
                  transition-all duration-1500 ease-in-out hover:scale-105 inline-block
                `}
              >
                Contacto
              </Link>
              <ThemeToggle />
            </div>
          </div>

          {/* --- 4. BOTÓN HAMBURGUESA Y THEME TOGGLE (MÓVIL) --- */}
          <div className="-mr-2 flex items-center md:hidden">
            <ThemeToggle />
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)} // Alterna el estado
              type="button"
              className={`ml-3 inline-flex items-center justify-center p-2 rounded-md transition duration-150 ease-in-out
                ${theme === 'light' ? 'text-purple-500 hover:text-purple-700' : 'text-green-300 hover:text-green-100'}`}
              aria-controls="mobile-menu"
              aria-expanded={isMenuOpen}
            >
              <span className="sr-only">Abrir menú principal</span>
              {/* Icono de X o Hamburguesa según el estado */}
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

      {/* --- 5. PANEL DE MENÚ MÓVIL DESPLEGABLE --- */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            id="mobile-menu"
            className="md:hidden" // Oculto en escritorio
            initial={{ opacity: 0, y: -20 }} // Animación inicial
            animate={{ opacity: 1, y: 0 }} // Animación de entrada
            exit={{ opacity: 0, y: -20 }} // Animación de salida
            transition={{ duration: 0.2, ease: "easeInOut" }}
          >
            {/* Fondo sólido para el menú desplegable */}
            <div className={`px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-gradient-to-r
                transition-colors duration-1500 ease-in-out
              ${theme === 'light'
                ? 'bg-purple-700/95'
                : 'bg-emerald-950/95'
              }
            `}>
              {/* Links adaptados a móvil */}
              <Link
                href="/projects"
                onClick={() => setIsMenuOpen(false)} // Cierra el menú al hacer clic
                className={`
                  ${theme === 'light' ? 'text-gray-300' : 'text-gray-200'}
                  ${theme === 'light' ? 'hover:bg-violet-700' : 'hover:bg-slate-800'}
                  hover:text-white px-3 py-2 rounded-md text-base font-medium
                  transition-all duration-200 ease-in-out block w-full text-left
                `}
              >
                Proyectos
              </Link>
              <Link
                href="/#about"
                onClick={() => setIsMenuOpen(false)}
                className={`
                  ${theme === 'light' ? 'text-gray-300' : 'text-gray-200'}
                  ${theme === 'light' ? 'hover:bg-violet-700' : 'hover:bg-slate-800'}
                  hover:text-white px-3 py-2 rounded-md text-base font-medium
                  transition-all duration-200 ease-in-out block w-full text-left
                `}
              >
                Sobre Mí
              </Link>
              <Link
                href="/#technologies"
                onClick={() => setIsMenuOpen(false)}
                className={`
                  ${theme === 'light' ? 'text-gray-300' : 'text-gray-200'}
                  ${theme === 'light' ? 'hover:bg-violet-700' : 'hover:bg-slate-800'}
                  hover:text-white px-3 py-2 rounded-md text-base font-medium
                  transition-all duration-200 ease-in-out block w-full text-left
                `}
              >
                Tecnologías
              </Link>
              <Link
                href="/certificados"
                onClick={() => setIsMenuOpen(false)}
                className={`
                  ${theme === 'light' ? 'text-gray-300' : 'text-gray-200'}
                  ${theme === 'light' ? 'hover:bg-violet-700' : 'hover:bg-slate-800'}
                  hover:text-white px-3 py-2 rounded-md text-base font-medium
                  transition-all duration-200 ease-in-out block w-full text-left
                `}
              >
                Certificados
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
                Contacto
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}