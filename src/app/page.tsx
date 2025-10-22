// app/page.tsx
"use client";

import { motion } from "framer-motion";
import Link from "next/link";

// --- MEJORA: Componente extraído para mayor legibilidad ---
// Esto mantiene tu JSX principal más limpio y es más fácil de mantener.
const BackgroundParticles = () => (
  <div className="absolute inset-0 z-0" aria-hidden="true">
    {[...Array(15)].map((_, i) => (
      <div
        key={i}
        className="absolute rounded-full bg-purple-500 opacity-20 animate-float"
        style={{
          width: `${Math.random() * 50 + 10}px`,
          height: `${Math.random() * 50 + 10}px`,
          top: `${Math.random() * 100}%`,
          left: `${Math.random() * 100}%`,
          animationDelay: `${Math.random() * 5}s`,
          animationDuration: `${Math.random() * 10 + 10}s`,
        }}
      />
    ))}
  </div>
);

export default function Home() {
  // --- MEJORA: Eliminado el estado 'isVisible' que no se estaba utilizando ---
  // Mantener solo el código necesario mejora la claridad.

  // Animaciones (sin cambios, ¡están muy bien!)
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    // --- MEJORA: Añadido padding top para dejar espacio para la Navbar fija ---
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white pt-20">
      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center min-h-[calc(100vh-5rem)] px-4 py-16 overflow-hidden -mt-20">
        <BackgroundParticles />

        <motion.div
          className="relative z-10 max-w-4xl mx-auto text-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1
            className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600"
            variants={itemVariants}
          >
            Hola, soy Matías Daniel Alessandrello
          </motion.h1>

          <motion.h2
            className="text-2xl md:text-3xl font-semibold mb-8 text-purple-200"
            variants={itemVariants}
          >
            Desarrollador Full Stack
          </motion.h2>

          <motion.p
            className="text-lg md:text-xl mb-10 max-w-2xl mx-auto leading-relaxed"
            variants={itemVariants}
          >
            Creo experiencias digitales excepcionales con las últimas tecnologías web.
            Mi pasión es transformar ideas en soluciones innovadoras y funcionales.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            variants={itemVariants}
          >
            <Link
              href="/projects"
              className="px-8 py-3 bg-purple-600 hover:bg-purple-700 rounded-lg font-medium transition-colors duration-300 transform hover:scale-105"
            >
              Ver Proyectos
            </Link>
            <Link
              href="/contact"
              className="px-8 py-3 border border-purple-400 text-purple-200 hover:bg-purple-800/30 rounded-lg font-medium transition-colors duration-300"
            >
              Contactarme
            </Link>
          </motion.div>
        </motion.div>

        {/* Flecha de scroll */}
        <motion.div
          className="absolute bottom-10 animate-bounce"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.5 }}
        >
          <svg
            className="w-8 h-8 text-purple-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* --- MEJORA: Añadido title para accesibilidad --- */}
            <title>Scroll hacia abajo</title>
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </motion.div>
      </section>

      {/* Sección de habilidades */}
      <section id="technologies" className="py-20 px-4 bg-slate-800/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Tecnologías</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 gap-6">
            {[
              { name: "React", icon: "⚛️" }, { name: "Next.js", icon: "▲" },
              { name: "TypeScript", icon: "📘" }, { name: "Node.js", icon: "🟢" }, { name: "Javascript", icon: "⚡️" },
              { name: "Tailwind CSS", icon: "🎨" },
              { name: "Python", icon: "🐍" }, { name: "Django", icon: "🚀" }, {name: "PyQt", icon: "🐍🖼️"}, { name: "Java", icon: "☕" },
              { name: "Docker", icon: "🐳" }, { name: "Git / Github", icon: "🔧" },
              { name: "PostgreSQL", icon: "🐘" }, { name: "GraphQL", icon: "🔺" }, { name: "GoLang", icon: "🐿️" }

            ].map((tech, index) => (
              <motion.div
                key={index}
                className="bg-slate-700/50 p-4 rounded-lg text-center backdrop-blur-sm hover:bg-slate-700/70 transition-colors duration-300 border border-transparent hover:border-purple-500"
                whileHover={{ scale: 1.05, y: -5 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                viewport={{ once: true }}
              >
                <div className="text-4xl mb-3">{tech.icon}</div>
                <h3 className="font-medium">{tech.name}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Sección sobre mí */}
      <section id="about" className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            className="bg-slate-800/30 p-8 rounded-2xl backdrop-blur-sm border border-slate-700/30"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-6">Sobre Mí</h2>
            <p className="text-lg mb-4 leading-relaxed">
              Soy un desarrollador apasionado por crear soluciones tecnológicas que impacten positivamente.
              Disfruto enfrentando nuevos desafíos y aprendiendo constantemente para mantenerme actualizado
              con las últimas tendencias en desarrollo web.
            </p>
            <p className="text-lg leading-relaxed">
              Cuando no estoy programando, me gusta componer música y explorar nuevas tecnologías emergentes.
            </p>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
