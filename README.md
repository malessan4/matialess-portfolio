# 🌐 Matias Daniel Alessandrello — Portfolio Web

<div align="center">

[![Live Demo](https://img.shields.io/badge/Demo-Live%20Website-brightgreen?style=for-the-badge&logo=vercel)](https://matialess-portfolio.vercel.app/)
[![Next.js](https://img.shields.io/badge/Next.js-16.1-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19-61dafb?style=for-the-badge&logo=react)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178c6?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-38bdf8?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)
[![i18n](https://img.shields.io/badge/Language-ES%20%7C%20EN-purple?style=for-the-badge)](https://matialess-portfolio.vercel.app/)

**Full Stack & Backend Developer | Data Modeling, SQL & Analytics**

[Explorar Demo en Vivo 🚀](https://matialess-portfolio.vercel.app/) • [Descargar CV 📄](https://matialess-portfolio.vercel.app/certificates/Resume_Matias_Daniel_Alessandrello.pdf) • [LinkedIn 💼](https://www.linkedin.com/in/matias-alessandrello)

</div>

---

## 📌 Descripción del Proyecto

Aplicación web moderna de portafolio personal diseñada con **Next.js (App Router)**, **TypeScript** y **Tailwind CSS**. Implementa una arquitectura modular con soporte bilingüe nativo (**Español / Inglés**), modo claro/oscuro dinámico con estética *glassmorphism*, micro-animaciones interactivas con **Framer Motion** y visualización de progreso académico mediante componentes de gráficos circulares (Donut Charts).

El sitio no solo exhibe proyectos de desarrollo Full Stack y APIs en producción, sino que también resalta formación analítica universitaria en **modelado de datos relacional (SQL)**, **análisis estadístico exploratorio (R & ggplot2)** y **arquitectura de software empresarial**.

---

## ✨ Características Principales

- 🌐 **Internacionalización Nativa (i18n ES / EN):** Selector dinámico en Navbar con persistencia en `localStorage` y detección automática de idioma del navegador.
- 🌓 **Sistema de Tema Claro / Oscuro:** Paletas personalizadas (*Purple/Pink* y *Emerald/Slate*) mediante `next-themes` y estilos responsivos.
- 📊 **Gráficos de Progreso Académico:** Componentes SVG interactivos y parametrizables (`DonutChart`) para reflejar en tiempo real el avance de carreras universitarias.
- 📋 **Gestión de Proyectos & Credenciales:** Tarjetas con etiquetas tecnológicas, enlaces a despliegues activos y badges con copiado en un clic de credenciales de usuario invitado (`invitado@consulmedic.ar`).
- 📜 **Buscador y Visualizador de Certificaciones:** Acceso directo a certificados y diplomas oficiales en formato PDF.
- 📱 **Diseño 100% Responsivo:** Menú móvil optimizado, accesibilidad y compatibilidad multidispositivo.

---

## 🛠️ Tecnologías y Herramientas

### Frontend & UI
- **Next.js 16 (App Router & Turbopack)**
- **React 19 & TypeScript**
- **Tailwind CSS v4**
- **Framer Motion** (Animaciones fluidas y transiciones de estado)
- **Lucide React** (Iconografía moderna)

### Data, Backend & Analytics Destacados
- **Data & Analytics:** R Language, ggplot2, SQL Modeling, Exploratory Data Analysis (EDA).
- **Bases de Datos & ORM:** PostgreSQL, SQLite, Supabase, Prisma ORM, Entity Framework Core, GORM, Hibernate.
- **Backend Frameworks:** .NET 9 (C# ASP.NET Core), Go (Gin), Java (Spring Boot), Python (FastAPI, Django), Node.js (Nest.js, Express).
- **Pagos & Eventos:** Webhooks de Mercado Pago, Reconciliación de Pagos, Transacciones ACID, Web Push API, CRON Jobs.
- **DevOps & Despliegue:** Docker, Vercel, Render, Git/GitHub.

---

## 🚀 Proyectos Destacados en el Portafolio

| Proyecto | Stack Principal | Conceptos Clave |
| :--- | :--- | :--- |
| **Consul-medic** | Next.js, Nest.js, PostgreSQL, Supabase, Prisma | Historias clínicas, Dashboard de KPIs en tiempo real, Modelado SQL. |
| **Core Bancario .NET 9** | C#, ASP.NET Core, EF Core, SQLite, Next.js | Integridad transaccional ACID, Clean Architecture, DTOs, API REST. |
| **Statistical Analysis (R)** | R, ggplot2, EDA, Statistical Modeling | Análisis de densidades, correlaciones multivariables y detección de outliers. |
| **Nido (Go PWA)** | Go (Golang), Gin, GORM, PostgreSQL, PWA | Backend de ultra bajo consumo (~20MB RAM), CRON Jobs y Web Push nativo. |
| **Racha+** | Next.js, Prisma, PostgreSQL, Mercado Pago | Webhooks de pago, Reconciliación automática y modelo SaaS de suscripción. |
| **Bella Boutique** | Vue.js (Vite), Go (Golang), Gin, PostgreSQL | E-commerce premium, CMS administrativo con autenticación JWT. |
| **Jamtime** | Next.js, React, Server Actions, Prisma | Algoritmo de intersección de franjas horarias para disponibilidad en bandas. |

---

## 📂 Estructura del Repositorio

```bash
matialess-portfolio/
├── lib/
│   ├── data.ts             # Datos estructurados bilingües de proyectos y certificados
│   ├── translations.ts     # Diccionario central de traducciones (ES / EN)
│   └── types.ts            # Interfaces TypeScript (Project, CertificateItem, etc.)
├── public/
│   ├── certificates/       # Certificaciones oficiales y CV actualizado en PDF
│   └── images/             # Activos gráficos, capturas y diagramas SVG vectorizados
├── src/
│   ├── app/
│   │   ├── certificados/   # Vista de certificaciones y formación académica
│   │   ├── contact/        # Vista de contacto directo y descarga de CV
│   │   ├── projects/       # Vista de catálogo de proyectos con credenciales
│   │   ├── globals.css     # Configuración de estilos globales y variables CSS
│   │   ├── layout.tsx      # RootLayout con fuentes Geist y proveedores globales
│   │   ├── page.tsx        # Landing principal (Hero, Tecnologías, Sobre Mí, Donut Charts)
│   │   └── provider.tsx    # Proveedor unificado (ThemeProvider + LanguageProvider)
│   ├── components/
│   │   ├── DonutChart.tsx     # Componente SVG interactivo para porcentajes
│   │   ├── LanguageToggle.tsx # Selector interactivo de idioma [ES | EN]
│   │   ├── Navbar.tsx         # Barra de navegación adaptable (Desktop & Mobile)
│   │   └── ThemeToggle.tsx    # Alternador de tema Claro / Oscuro
│   └── context/
│       └── LanguageContext.tsx # Contexto React de internacionalización (i18n)
├── package.json
├── tsconfig.json
└── README.md
```

---

## 💻 Instalación y Ejecución Local

Si deseas clonar y ejecutar este proyecto en tu entorno local:

1. **Clonar el repositorio:**
   ```bash
   git clone https://github.com/malessan4/matialess-portfolio.git
   cd matialess-portfolio
   ```

2. **Instalar dependencias:**
   ```bash
   npm install
   ```

3. **Iniciar el servidor de desarrollo:**
   ```bash
   npm run dev
   ```
   Abre [http://localhost:3000](http://localhost:3000) en tu navegador para ver la aplicación.

4. **Compilar para producción:**
   ```bash
   npm run build
   npm run start
   ```

---

## 📬 Contacto

- **Nombre:** Matías Daniel Alessandrello
- **Email:** [matialess@gmail.com](mailto:matialess@gmail.com)
- **LinkedIn:** [linkedin.com/in/matias-alessandrello](https://www.linkedin.com/in/matias-alessandrello)
- **GitHub:** [github.com/malessan4](https://github.com/malessan4)
- **Portfolio Online:** [matialess-portfolio.vercel.app](https://matialess-portfolio.vercel.app/)
