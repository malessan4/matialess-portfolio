"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import DonutChart from "../components/DonutChart";
import { certificatesData } from "../../lib/data";
import { FileText, Download } from "lucide-react";
import { useTheme } from 'next-themes';
import { useLanguage } from '@/context/LanguageContext';
import { useState, useEffect } from 'react';
import Image from 'next/image';

const completedDegreeProgress = 100;

const BackgroundParticles = () => (
  <div className="absolute inset-0 z-0 overflow-hidden">
    {[...Array(15)].map((_, i) => (
      <div
        key={i}
        className="absolute rounded-full animate-float"
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
  const { theme } = useTheme();
  const { t, language } = useLanguage();

  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (mounted) {
      const hash = window.location.hash;
      if (hash) {
        const element = document.querySelector(hash);
        if (element) {
          setTimeout(() => {
            element.scrollIntoView({ behavior: "smooth" });
          }, 100);
        }
      }
    }
  }, [mounted]);

  if (!mounted) {
    return null;
  }

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

  const currentCareerProgress = 52;
  const currentCyberRiskProgress = 22;

  return (
    <main
      className={`min-h-screen pt-20 bg-gradient-to-br 
                 transition-colors duration-1500 ease-in-out overflow-x-hidden overflow-y-hidden
                 ${theme === 'light'
          ? 'from-pink-900 via-purple-950 to-pink-900'
          : 'from-gray-900 via-green-900 to-gray-900'
        }`}
    >
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
            className={`text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r 
              transition-colors duration-1500 ease-in-out
                       ${theme === 'light' ? 'from-purple-400 to-pink-600' : 'from-green-800 to-green-200'}`}
            variants={itemVariants}
          >
            {t.hero.greeting}
          </motion.h1>

          <motion.h2
            className={`text-xl sm:text-2xl md:text-3xl font-semibold mb-8 bg-clip-text text-transparent bg-gradient-to-r
              transition-colors duration-1500 ease-in-out max-w-3xl mx-auto leading-snug
                       ${theme === 'light'
                ? 'from-purple-300 via-pink-400 to-pink-600'
                : 'from-green-200 via-emerald-300 to-green-600'}`}
            variants={itemVariants}
          >
            {t.hero.subtitle}
          </motion.h2>

          <motion.p
            className="text-base sm:text-lg md:text-xl mb-10 max-w-2xl mx-auto leading-relaxed opacity-90"
            variants={itemVariants}
          >
            {t.hero.description}
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            variants={itemVariants}
          >
            <Link
              href="/projects"
              className={`px-8 py-3 border rounded-lg font-medium transform hover:scale-110 
             transition-[transform,background-color,border-color]
             duration-[1000ms,300ms,1300ms]
             ease-in-out
             
             ${theme === 'light'
                  ? 'border-purple-400 text-purple-200 hover:bg-purple-800/30'
                  : 'border-green-400 text-green-200 hover:bg-green-600/70'
                }`}
            >
              {t.hero.viewProjects}
            </Link>

            <Link
              href="#about"
              className={`px-8 py-3 rounded-lg font-medium transform hover:scale-120 
             transition-[transform,background-color,border-color]
             duration-[1000ms,1500ms,1500ms]
             ease-in-out
             
             ${theme === 'light'
                  ? 'bg-purple-600 hover:bg-purple-700 text-white'
                  : 'bg-green-600 hover:bg-green-800 text-white'
                }`}
            >
              {t.hero.aboutMe}
            </Link>

            <Link
              href="/contact"
              className={`px-8 py-3 border rounded-lg font-medium transform hover:scale-110 
             transition-[transform,background-color,border-color]
             duration-[500ms,300ms,1300ms]
             ease-in-out
             
             ${theme === 'light'
                  ? 'border-purple-400 text-purple-200 hover:bg-purple-800/30'
                  : 'border-green-400 text-green-200 hover:bg-green-600/70'
                }`}
            >
              {t.hero.contactMe}
            </Link>
          </motion.div>
        </motion.div>

        <motion.div
          className="absolute bottom-10 animate-bounce"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.5 }}
        >
          <svg
            className={`w-8 h-8 transition-colors duration-150 ease-in-out 
                       ${theme === 'light' ? 'text-purple-500' : 'text-green-300'}`}
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
      <section
        id="technologies"
        className={`py-20 px-4 transition-colors duration-1500 ease-in-out
          ${theme === 'light'
            ? 'bg-white/10'
            : 'bg-emerald-900/30'
          }`}
      >
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">{t.technologies.title}</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-5">
            <BackgroundParticles />
            {[
              // Data & Analytics (Destacado)
              { name: "R Language", icon: "📊" },
              { name: "ggplot2", icon: "📈" },
              { name: "SQL Modeling", icon: "📐" },
              { name: "Data Analytics", icon: "📉" },

              // Backend & Databases
              { name: "PostgreSQL", icon: "🐘" },
              { name: "SQLite", icon: "🪶" },
              { name: "Supabase", icon: "⚡" },
              { name: "Python", icon: "🐍" },
              { name: "FastAPI", icon: "🏎️" },
              { name: "Django", icon: "🚀" },
              { name: "Go (Golang)", icon: "🐹" },
              { name: ".NET 9", icon: "🌐" },
              { name: "C#", icon: "🔷" },
              { name: "Entity Framework", icon: "🧩" },
              { name: "Java", icon: "☕" },
              { name: "Spring Boot", icon: "🌱" },
              { name: "Spring", icon: "🍃" },
              { name: "Node.js", icon: "🟢" },
              { name: "Express", icon: "🚂" },
              { name: "Nest.js", icon: "🦁" },
              { name: "GraphQL", icon: "🔺" },

              // Frontend & Mobile
              { name: "React", icon: "⚛️" },
              { name: "Next.js", icon: "▲" },
              { name: "Vue.js", icon: "🖖" },
              { name: "TypeScript", icon: "📘" },
              { name: "Javascript", icon: "⚡️" },
              { name: "Tailwind CSS", icon: "🎨" },
              { name: "React Native", icon: "📱" },
              { name: "Kotlin", icon: "🤖" },
              { name: "Android Studio", icon: "🛠️" },

              // DevOps & Cloud
              { name: "Docker", icon: "🐳" },
              { name: "Git / Github", icon: "🔧" },
              { name: "Vercel", icon: "🔼" },
              { name: "Render", icon: "☁️" },
            ].map((tech, index) => (
              <motion.div
                key={index}
                className={`p-4 rounded-lg text-center backdrop-blur-sm 
                    transition-colors duration-1500 ease-in-out border
                    ${theme === 'light'
                    ? 'bg-white/20 hover:bg-white/30 border-purple-300/30'
                    : 'bg-emerald-700/50 hover:bg-emerald-900/70 border-emerald-500/30'
                  }`}
                whileHover={{ scale: 1.05 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                viewport={{ once: true }}
              >
                <div className="text-3xl mb-2">{tech.icon}</div>
                <h3 className="font-medium text-sm sm:text-base">{tech.name}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Sección Sobre Mí */}
      <section id="about" className="py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <motion.div
            className={`p-8 rounded-2xl backdrop-blur-sm border flex flex-col lg:flex-row items-center gap-8 lg:gap-12
                       transition-colors duration-1500 ease-in-out
                       ${theme === 'light'
                ? 'bg-white/10 border-purple-200/30'
                : 'bg-emerald-900/30 border-emerald-700/30'
              }`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="lg:w-1/2 text-center lg:text-left">
              <div className="mb-6">
                <div className={`
                  w-40 h-40 rounded-full 
                  block mx-auto lg:mx-4 
                  border-4 
                  ${theme === 'light' ? 'border-purple-400' : 'border-green-400'}
                  transition-colors duration-1500 ease-in-out
                  overflow-hidden  
                `}>
                  <Image
                    src="/images/matias.png"
                    alt="Foto de perfil de Matias Alessandrello"
                    width={160}
                    height={160}
                    className={`
                      w-40 h-40 rounded-full object-cover 
                      object-[50%_65%]
                      scale-115
                      -translate-x-2
                      block mx-auto lg:mx-4 
                      ${theme === 'light' ? 'border-purple-400' : 'border-green-400'}
                      transition-colors duration-1500 ease-in-out
                    `}
                    priority
                  />
                </div>
              </div>
              <h2 className="text-3xl font-bold mb-6">{t.about.title}</h2>
              <p className="text-lg mb-4 leading-relaxed lg:text-justify">
                {t.about.p1}
              </p>
              <p className="text-lg mb-4 leading-relaxed lg:text-justify">
                {t.about.p2_1}<span className="font-bold text">{t.about.p2_bold}</span>{t.about.p2_2}{currentCareerProgress}{t.about.p2_3}
              </p>
              <p className="text-lg mb-4 leading-relaxed lg:text-justify">
                {t.about.p3_1}<span className="font-bold text">{t.about.p3_bold}</span>{t.about.p3_2}{currentCyberRiskProgress}{t.about.p3_3}
              </p>
              <p className="text-lg mb-4 leading-relaxed lg:text-justify">
                {t.about.p4_1}<span className="font-bold">{t.about.p4_bold}</span>{t.about.p4_2}
              </p>
              <p className="text-lg mb-4 leading-relaxed lg:text-justify">
                {t.about.p5}
              </p>
              <p className="text-lg mb-4 leading-relaxed lg:text-justify">
                {t.about.p6}
              </p>
              <p className="text-lg mb-4 leading-relaxed lg:text-justify">
                {t.about.p7}
              </p>
              <a
                href="/certificates/Resume_Matias_Daniel_Alessandrello.pdf"
                download="Resume_Matias_Daniel_Alessandrello.pdf"
                className={`
                  inline-flex items-center justify-center gap-2
                  px-8 py-3 rounded-lg font-medium transform hover:scale-110 
                  transition-[transform,background-color,border-color]
                  duration-[1000ms,1500ms,1500ms]
                  ease-in-out
                  mt-6
                  ${theme === 'light'
                    ? 'bg-purple-600 hover:bg-purple-700 text-white'
                    : 'bg-green-600 hover:bg-green-800 text-white'
                  }
                `}
              >
                {t.about.downloadCv}
                <Download className="w-5 h-5" />
              </a>
            </div>

            <div className="lg:w-1/2 flex flex-wrap justify-center items-center gap-8 mt-6 lg:mt-0">
              <div className="flex flex-col items-center gap-2">
                <DonutChart
                  percentage={currentCareerProgress}
                  size={160}
                  strokeWidth={14}
                  primaryColor={theme === 'light' ? '#a855f7' : '#10b981'}
                  secondaryColor={theme === 'light' ? '#5c595fff' : '#4b5563'}
                />
                <p className="text-sm font-semibold text-center max-w-[150px]">{t.about.donutProgrammer}</p>
              </div>

              <div className="flex flex-col items-center gap-2">
                <DonutChart
                  percentage={currentCyberRiskProgress}
                  size={160}
                  strokeWidth={14}
                  primaryColor={theme === 'light' ? '#a855f7' : '#10b981'}
                  secondaryColor={theme === 'light' ? '#5c595fff' : '#4b5563'}
                />
                <p className="text-sm font-semibold text-center max-w-[150px]">{t.about.donutCyber}</p>
              </div>

              <div className="flex flex-col items-center gap-2">
                <DonutChart
                  percentage={completedDegreeProgress}
                  size={160}
                  strokeWidth={14}
                  primaryColor={theme === 'light' ? '#a855f7' : '#10b981'}
                  secondaryColor={theme === 'light' ? '#5c595fff' : '#4b5563'}
                />
                <p className="text-sm font-semibold text-center max-w-[150px]">{t.about.donutMusic}</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Sección de Certificados */}
      <section
        id="certificates-preview"
        className={`py-20 px-4 transition-colors duration-1500 ease-in-out
                   ${theme === 'light' ? 'bg-white/10' : 'bg-emerald-900/50'}`}
      >
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">{t.featuredCertificates.title}</h2>

          <p className={`text-center text-xl mb-12 transition-colors duration-150 ease-in-out
            ${theme === 'light' ? 'text-purple-300' : 'text-green-300'}
             `}>{t.featuredCertificates.subtitle}</p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {certificatesData.slice(0, 3).map((cert, index) => (
              <motion.div
                key={index}
                className={`p-6 rounded-lg backdrop-blur-sm border 
                           transition-colors duration-1500
                           ${theme === 'light'
                    ? 'bg-white/20 border-transparent hover:border-purple-500'
                    : 'bg-emerald-700/50 border-transparent hover:border-green-500'
                  }`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <FileText className={`w-8 h-8 mb-3 transition-colors duration-150 ease-in-out
                                    ${theme === 'light' ? 'text-purple-400' : 'text-green-400'}`} />
                <h3 className="font-bold text-xl">
                  {language === 'en' && cert.titleEn ? cert.titleEn : cert.title}
                </h3>
                <p className={`text-base transition-colors duration-150 ease-in-out
                               ${theme === 'light' ? 'text-gray-300' : 'text-slate-400'}`}>{cert.issuer}</p>
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
              className={`px-8 py-3 rounded-lg font-medium transform hover:scale-105 inline-block
                         transition-colors duration-1500
                         ${theme === 'light'
                  ? 'bg-purple-600 hover:bg-purple-700 text-white'
                  : 'bg-green-600 hover:bg-green-700 text-white'
                }`}
            >
              {t.featuredCertificates.viewAll}
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
}