
"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import DonutChart from "../components/DonutChart";
import { certificatesData } from "../../lib/data";
import { FileText } from "lucide-react";

const completedDegreeProgress = 100;


const BackgroundParticles = () => (
  <div className="absolute inset-0 z-0">
    {[...Array(15)].map((_, i) => (
      <div
        key={i}
        className="absolute rounded-full bg-purple-500 opacity-20 animate-float"
        style={{
          width: Math.random() * 50 + 10 + 'px',
          height: Math.random() * 50 + 10 + 'px',
          top: Math.random() * 100 + '%',
          left: Math.random() * 100 + '%',
          animationDelay: Math.random() * 5 + 's',
          animationDuration: Math.random() * 10 + 10 + 's'
        }}
      />
    ))}
  </div>
);

export default function Home() {


  // Animaciones
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  // Define el porcentaje de progreso aquí para usarlo en el texto y el gráfico
  const currentCareerProgress = 35;



  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white pt-20">
      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center min-h-screen px-4 py-16 overflow-hidden">
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
            Hola, soy Matías
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
            <title>Scroll down</title>
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </motion.div>
      </section>

      {/* Sección de tecnologías */}
      <section id="technologies" className="py-20 px-4 bg-slate-800/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Tecnologías</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 gap-6">
            {[
              { name: "React", icon: "⚛️" }, { name: "Next.js", icon: "▲" },
              { name: "TypeScript", icon: "📘" }, { name: "Node.js", icon: "🟢" }, { name: "Javascript", icon: "⚡️" },
              { name: "Tailwind CSS", icon: "🎨" },
              { name: "Python", icon: "🐍" }, { name: "Django", icon: "🚀" }, { name: "PyQt", icon: "🐍🖼️" }, { name: "Java", icon: "☕" },
              { name: "Docker", icon: "🐳" }, { name: "Git / Github", icon: "🔧" },
              { name: "PostgreSQL", icon: "🐘" }, { name: "GraphQL", icon: "🔺" }, { name: "GoLang", icon: "🐿️" }

            ].map((tech, index) => (
              <motion.div
                key={index}
                className="bg-slate-700/50 p-4 rounded-lg text-center backdrop-blur-sm hover:bg-slate-700/70 transition-colors duration-300"
                whileHover={{ scale: 1.05 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                viewport={{ once: true }}
              >
                <div className="text-3xl mb-2">{tech.icon}</div>
                <h3 className="font-medium">{tech.name}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Sección sobre mí (actualizada con dos gráficos) */}

      <section id="about" className="py-20 px-4">
        <div className="max-w-5xl mx-auto"> {/* Aumentado el ancho máximo para más espacio */}
          <motion.div
            className="bg-slate-800/30 p-8 rounded-2xl backdrop-blur-sm border border-slate-700/30 flex flex-col lg:flex-row items-center gap-8 lg:gap-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="lg:w-1/2 text-center lg:text-left">
              <h2 className="text-3xl font-bold mb-6">Sobre Mí</h2>
              <p className="text-lg mb-4 leading-relaxed">
                Soy un desarrollador apasionado por crear soluciones tecnológicas que impacten positivamente. Disfruto enfrentando nuevos desafíos y aprendiendo constantemente.
              </p>
              <p className="text-lg mb-4 leading-relaxed text-purple-200">
                Actualmente estoy cursando la <span className="font-bold text-purple-400">Tecnicatura en Programación</span> en la Universidad Nacional Guillermo Brown, donde llevo completado el {currentCareerProgress}% de la carrera.
              </p>
              <p className="text-lg mb-4 leading-relaxed text-purple-200">
                Finalicé la <span className="font-bold text-purple-400">Licenciatura en Composición con Medios Electroacústicos</span>, en la Universidad Nacional de Quilmes, esta carrera fue mi acercamiento y mi actual pasión por la computación y programación.
              </p>
              <p className="text-lg mb-4 leading-relaxed text-purple-200">
                Cuando no estoy programando, me gusta componer música y explorar nuevas tecnologías emergentes.
              </p>
            </div>
            <div className="lg:w-1/2 flex flex-col sm:flex-row justify-center items-center gap-8 mt-6 lg:mt-0">
              {/* Gráfico 2: Tecnicatura en progreso */}
              <div className="flex flex-col items-center gap-2">
                <DonutChart percentage={currentCareerProgress} size={160} strokeWidth={14} />
                <p className="text-sm font-semibold text-center max-w-[150px]">Tecnicatura en Programación</p>
              </div>
              {/* Gráfico 1: Licenciatura completada */}
              <div className="flex flex-col items-center gap-2">
                <DonutChart percentage={completedDegreeProgress} size={160} strokeWidth={14} />
                <p className="text-sm font-semibold text-center max-w-[150px]">Lic. en Composición Electroacústica</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Sección de Certificados */}
      <section id="certificates-preview" className="py-20 px-4 bg-slate-800/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">Formación Destacada</h2>
          <p className="text-center text-purple-200 mb-12">Estos son algunos de los cursos y certificaciones que he completado.</p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {certificatesData.slice(0, 3).map((cert, index) => (
              <motion.div
                key={index}
                className="bg-slate-700/50 p-6 rounded-lg backdrop-blur-sm border border-transparent hover:border-purple-500 transition-colors duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <FileText className="w-8 h-8 text-purple-400 mb-3" />
                <h3 className="font-bold text-lg">{cert.title}</h3>
                <p className="text-sm text-slate-400">{cert.issuer}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <Link
              href="/certificados"
              className="px-8 py-3 bg-purple-600 hover:bg-purple-700 rounded-lg font-medium transition-colors duration-300 transform hover:scale-105 inline-block"
            >
              Ver Todos los Certificados
            </Link>
          </motion.div>
        </div>
      </section>

    </main>
  );
}

