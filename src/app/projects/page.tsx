"use client";

import React from "react";
import { projectsData } from "../../../lib/data";
import dynamic from "next/dynamic";

const MotionDiv = dynamic(() =>
    import("framer-motion").then((mod) => mod.motion.div),
    { ssr: false } // Esto es crucial para la hidratación
);

export default function ProjectsPage() {
    return (
        <main className="container mx-auto p-8">
            <h1 className="text-3xl font-bold mb-4">Mis Proyectos</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {projectsData.map((project, index) => (
                    <MotionDiv
                        key={index}
                        className="border p-4 rounded-lg shadow hover:shadow-lg transition-shadow duration-300"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.5 }}
                    >
                        <h2 className="text-2xl font-semibold">{project.title}</h2>
                        <p className="mt-2 text-gray-600">{project.description}</p>
                        <div className="mt-4 flex flex-wrap gap-2">
                            {project.tags.map((tag, tagIndex) => (
                                <span key={tagIndex} className="bg-gray-200 text-sm text-black font-medium px-2 py-1 rounded-full">
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </MotionDiv>
                ))}
            </div>
        </main>
    );
}