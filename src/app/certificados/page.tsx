"use client";

import React from "react";
import { certificatesData } from "../../../lib/data";
import { motion } from "framer-motion";
import Link from "next/link";
import { FileText, Download } from "lucide-react";
import { useTheme } from 'next-themes';
import { useState, useEffect } from 'react';

// Define la función del componente y pon todo DENTRO de ella
export default function CertificatesPage() {

    // --- Todos los hooks van aquí DENTRO ---
    const { theme } = useTheme();
    const [mounted, setMounted] = useState(false);

    // Este hook es para evitar errores de hidratación con next-themes
    useEffect(() => {
        setMounted(true);
    }, []);

    // Muestra null o un 'cargando...' hasta que el componente esté "montado" en el cliente
    if (!mounted) {
        return null;
    }
    const BackgroundParticles = () => (
        <div className="absolute inset-0 z-0">
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
        <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white pt-24 pb-12">
            <BackgroundParticles />
            <div className="container mx-auto px-4">
                <motion.h1
                    className="text-4xl md:text-5xl font-bold mb-10 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    Certificados y Formación
                </motion.h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {certificatesData.map((cert, index) => (
                        <motion.div
                            key={index}
                            className={`p-6 rounded-lg backdrop-blur-sm border 
                                ease-in-out
                           ${theme === 'light'
                                    ? 'bg-pink-400/20 border-transparent hover:border-purple-500'
                                    : 'bg-emerald-700/50 border-transparent hover:border-green-500'
                                }`}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            whileHover={{ scale: 1.1 }}
                            transition={{
                                opacity: { duration: 0.5, delay: index * 0.1 },
                                y: { duration: 0.5, delay: index * 0.1 },
                                scale: { duration: 0.6, ease: "easeInOut" }
                            }}
                        >
                            <div className="flex-grow">
                                <FileText className={`w-10 h-10  transition-colors duration-1500 ease-in-out
                                    ${theme === 'light' ? 'text-slate-300' : 'text-green-400'}`} />
                                <motion.h2
                                    className={`text-2xl md:text-3xl font-semibold mb-8 bg-clip-text text-transparent bg-gradient-to-r
                            transition-colors duration-1500 ease-in-out
                                        ${theme === 'light'
                                            ? 'from-purple-500 to-pink-700'
                                            : 'from-green-200 to-green-800'}`}
                                >{cert.title}</motion.h2>
                                <p className={`text-sm transition-colors duration-1500 ease-in-out
                                    ${theme === 'light'
                                        ? 'text-slate-300'
                                        : 'text-slate-400'}`}
                                >Emitido por: <span className="font-semibold">{cert.issuer}</span></p>
                                <p className={`text-sm transition-colors duration-1500 ease-in-out
                                    ${theme === 'light'
                                        ? 'text-slate-300'
                                        : 'text-slate-400'}`}
                                >Fecha: <span className="font-semibold">{cert.date}</span></p>
                            </div>
                            <div className="mt-6">

                                <Link
                                    href={cert.fileUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`inline-flex items-center justify-center w-full px-4 py-2 bg-purple-600
                                         hover:bg-purple-700 rounded-lg font-medium transition-colors duration-300 transform hover:scale-110"
                                `}>
                                    Ver Certificado
                                    <Download className="w-4 h-4 ml-2" />
                                </Link>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </main>
    );
}
