"use client";

import { useLanguage } from "@/context/LanguageContext";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function LanguageToggle() {
  const { language, setLanguage } = useLanguage();
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="w-[78px] h-[34px]" />;
  }

  return (
    <div
      className={`inline-flex items-center rounded-full p-0.5 text-xs font-bold border backdrop-blur-sm transition-all duration-300
        ${theme === "light"
          ? "bg-purple-900/40 border-purple-400/50 text-purple-200"
          : "bg-emerald-950/50 border-emerald-500/50 text-emerald-200"
        }`}
      role="group"
      aria-label="Language selector"
    >
      <button
        type="button"
        onClick={() => setLanguage("es")}
        className={`px-2.5 py-1 rounded-full transition-all duration-300 text-[11px] uppercase tracking-wider ${
          language === "es"
            ? theme === "light"
              ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-md scale-105"
              : "bg-gradient-to-r from-emerald-600 to-green-600 text-white shadow-md scale-105"
            : "opacity-60 hover:opacity-100 hover:text-white"
        }`}
        aria-pressed={language === "es"}
      >
        ES
      </button>
      <button
        type="button"
        onClick={() => setLanguage("en")}
        className={`px-2.5 py-1 rounded-full transition-all duration-300 text-[11px] uppercase tracking-wider ${
          language === "en"
            ? theme === "light"
              ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-md scale-105"
              : "bg-gradient-to-r from-emerald-600 to-green-600 text-white shadow-md scale-105"
            : "opacity-60 hover:opacity-100 hover:text-white"
        }`}
        aria-pressed={language === "en"}
      >
        EN
      </button>
    </div>
  );
}
