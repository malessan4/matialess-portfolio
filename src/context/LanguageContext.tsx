"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { translations, Language } from "@/lib/translations";

type TranslationSchema = {
  [K in keyof typeof translations.es]: {
    [P in keyof (typeof translations.es)[K]]: string;
  };
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  toggleLanguage: () => void;
  t: TranslationSchema;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>("es");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const savedLang = localStorage.getItem("portfolio_lang") as Language | null;
    if (savedLang === "es" || savedLang === "en") {
      setLanguageState(savedLang);
    } else {
      const browserLang = navigator.language?.toLowerCase() || "";
      if (browserLang.startsWith("en")) {
        setLanguageState("en");
      }
    }
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    if (typeof window !== "undefined") {
      localStorage.setItem("portfolio_lang", lang);
    }
  };

  const toggleLanguage = () => {
    const nextLang: Language = language === "es" ? "en" : "es";
    setLanguage(nextLang);
  };

  const t: TranslationSchema = translations[language];

  return (
    <LanguageContext.Provider value={{ language, setLanguage, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
