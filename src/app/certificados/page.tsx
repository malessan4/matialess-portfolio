"use client";

import React, { useState, useEffect } from "react";
import { certificatesData } from "../../../lib/data";
import { motion } from "framer-motion";
import Link from "next/link";
import { FileText, Download } from "lucide-react";
import { useTheme } from 'next-themes';
import { useLanguage } from '@/context/LanguageContext';

export default function CertificatesPage() {
    const { theme } = useTheme();
    const { t, language } = useLanguage();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return null;
    }

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

    return (
        <main className={`min-h-screen pt-20 bg-gradient-to-br 
                 transition-colors duration-1500 ease-in-out overflow-x-hidden overflow-y-hidden
                 ${theme === 'light'
                ? 'from-pink-900 via-purple-950 to-pink-900'
                : 'from-gray-900 via-green-900 to-gray-900'
            }`}
        >
            <BackgroundParticles />
            <div className="container mx-auto px-4 pb-20">
                <motion.h1
                    className={`text-4xl md:text-5xl font-bold mb-4 text-center bg-clip-text text-transparent bg-gradient-to-r 
                    transition-colors duration-1500 ease-in-out
                       ${theme === 'light' ? 'from-purple-400 to-pink-600' : 'from-green-800 to-green-200'}`}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    {t.certificatesPage.title}
                </motion.h1>

                <p className={`text-center text-lg max-w-2xl mx-auto mb-12 opacity-80 ${
                    theme === 'light' ? 'text-purple-200' : 'text-green-200'
                }`}>
                    {t.certificatesPage.subtitle}
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {certificatesData.map((cert, index) => {
                        const certTitle = language === 'en' && cert.titleEn ? cert.titleEn : cert.title;

                        return (
                            <motion.div
                                key={index}
                                className={`p-6 rounded-lg backdrop-blur-sm border transition-colors duration-1500
                                    ease-in-out flex flex-col justify-between
                               ${theme === 'light'
                                        ? 'bg-pink-400/20 border-transparent hover:border-purple-500'
                                        : 'bg-emerald-700/50 border-transparent hover:border-green-500'
                                    }`}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                whileHover={{ scale: 1.03 }}
                                transition={{
                                    opacity: { duration: 0.5, delay: index * 0.08 },
                                    y: { duration: 0.5, delay: index * 0.08 },
                                    scale: { duration: 0.3, ease: "easeInOut" }
                                }}
                            >
                                <div className="flex-grow">
                                    <FileText className={`w-10 h-10 mb-4 transition-colors duration-300 ease-in-out
                                        ${theme === 'light' ? 'text-slate-300' : 'text-green-400'}`} />
                                    <h2
                                        className={`text-xl md:text-2xl font-semibold mb-6 bg-clip-text text-transparent bg-gradient-to-r
                                transition-colors duration-1500 ease-in-out
                                            ${theme === 'light'
                                                ? 'from-purple-300 to-pink-400'
                                                : 'from-green-200 to-green-400'}`}
                                    >
                                        {certTitle}
                                    </h2>
                                    <p className={`text-sm mb-1 transition-colors duration-1500 ease-in-out
                                        ${theme === 'light'
                                            ? 'text-slate-300'
                                            : 'text-slate-400'}`}
                                    >
                                        {language === 'en' ? 'Issued by: ' : 'Emitido por: '}
                                        <span className="font-semibold text-white">{cert.issuer}</span>
                                    </p>
                                    <p className={`text-sm transition-colors duration-1500 ease-in-out
                                        ${theme === 'light'
                                            ? 'text-slate-300'
                                            : 'text-slate-400'}`}
                                    >
                                        {language === 'en' ? 'Year: ' : 'Año / Fecha: '}
                                        <span className="font-semibold text-white">{cert.date}</span>
                                    </p>
                                </div>
                                <div className="mt-6">
                                    <Link
                                        href={cert.fileUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={`inline-flex items-center justify-center w-full px-4 py-2.5 rounded-lg font-bold transform hover:scale-105
                             transition-colors duration-1500 
                             ${theme === 'light'
                                                ? 'bg-purple-600 hover:bg-purple-700 text-white'
                                                : 'bg-green-600 hover:bg-green-700 text-white'}`}
                                    >
                                        {t.certificatesPage.viewCertificate}
                                        <Download className="w-4 h-4 ml-2" />
                                    </Link>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </main>
    );
}
