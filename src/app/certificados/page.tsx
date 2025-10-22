"use client";

import React from "react";
import { certificatesData } from "../../../lib/data";
import { motion } from "framer-motion";
import Link from "next/link";
import { FileText, Download } from "lucide-react";

export default function CertificatesPage() {
    return (
        <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white pt-24 pb-12">
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
                            className="bg-slate-800/50 rounded-lg p-6 flex flex-col group border border-slate-700/50 hover:border-purple-500 transition-colors duration-300"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <div className="flex-grow">
                                <FileText className="w-10 h-10 text-purple-400 mb-4" />
                                <h2 className="text-xl font-bold text-purple-300 mb-2">{cert.title}</h2>
                                <p className="text-slate-400 text-sm">Emitido por: <span className="font-semibold">{cert.issuer}</span></p>
                                <p className="text-slate-400 text-sm">Fecha: <span className="font-semibold">{cert.date}</span></p>
                            </div>
                            <div className="mt-6">
                                <Link 
                                    href={cert.fileUrl} 
                                    target="_blank" 
                                    rel="noopener noreferrer" 
                                    className="inline-flex items-center justify-center w-full px-4 py-2 bg-purple-600 hover:bg-purple-700 rounded-lg font-medium transition-colors duration-300 transform hover:scale-105"
                                >
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
