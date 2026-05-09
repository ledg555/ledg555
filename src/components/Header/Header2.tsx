// components/Header/Header.tsx
import React from "react";
import { motion } from "motion/react";
import { Link, useLocation } from "react-router";
import { useTranslation } from "react-i18next";

// Componentes refactorizados (veremos sus cambios abajo)
import { SpeedDialContact } from "../SpeedDialContact/SpeedDialContact";
import { SpeedDialNav } from "../SpeedDialNav/SpeedDialNav";
import ThemeToggle from "../ThemeToggle";
import LangSwitch from "../LangSwitch";
import { navLinks } from "./nav-config";

export const Header: React.FC = () => {
  const location = useLocation();
  const { t } = useTranslation(["ui"]);

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-40 px-4 sm:px-8 py-3 flex items-center justify-between pointer-events-auto"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 100, damping: 20 }}
    >
      {/*
        El "cristal" del header.
        Nota: Ya no dependemos de un Theme Store, usamos 'dark:' de Tailwind
      */}
      <div
        className="absolute inset-0 mx-4 sm:mx-8 rounded-b-3xl backdrop-blur-md
        bg-ship-hull-white/20 dark:bg-ship-hull-dark/40
        border border-t-0
        border-hud-cyan-glow dark:border-alert-red-glow
        shadow-[0_4px_30px_rgba(0,229,255,0.1)] dark:shadow-[0_4px_30px_rgba(255,23,68,0.1)]
        -z-10"
      />

      {/* ZONA IZQUIERDA: Identificación y Contacto */}
      <div className="flex items-center gap-3">
        <SpeedDialContact />
        <span className="hidden sm:block font-headings text-xs tracking-widest text-slate-800 dark:text-slate-200">
          {t("navigationData.shipName", { ns: "ui" })}
        </span>
      </div>

      {/* ZONA CENTRAL: Navegación (Solo Desktop) */}
      <nav className="hidden md:flex gap-1">
        {navLinks.map((item) => {
          const isActive = location.pathname === item.url;
          return (
            <Link
              key={item.translationKey}
              to={item.url}
              title={t(`navigationData.${item.translationKey}`, { ns: "ui" })}
              className={`
                relative px-6 py-2 overflow-hidden group
                /* Forma de trapecio con CSS puro */
                [clip-path:polygon(10%_0,90%_0,100%_100%,0%_100%)]
                transition-colors duration-300
                ${
                  isActive
                    ? "bg-hud-cyan-glow dark:bg-alert-red-glow text-slate-900 dark:text-white font-bold"
                    : "bg-black/10 dark:bg-black/30 hover:bg-black/20 dark:hover:bg-black/50 text-slate-600 dark:text-slate-400"
                }
              `}
            >
              <div className="flex items-center gap-2">
                <item.icon className={isActive ? "animate-pulse" : ""} />
                <span className="font-text uppercase text-sm tracking-wider">
                  {t(`navigationData.${item.translationKey}`, { ns: "ui" })}
                </span>
              </div>

              {/* Línea inferior brillante (indicador activo) */}
              {isActive && (
                <motion.div
                  layoutId="activeNavIndicator"
                  className="absolute bottom-0 left-0 right-0 h-1 bg-hud-cyan-base dark:bg-alert-red-base"
                />
              )}
            </Link>
          );
        })}
      </nav>

      {/* ZONA DERECHA: Controles de Sistema y Nav Móvil */}
      <div className="flex items-center gap-3">
        {/* Controles de entorno (Tema/Idioma) */}
        <div className="flex bg-black/10 dark:bg-black/30 rounded-full p-1 border border-hud-cyan-glow/30 dark:border-alert-red-glow/30">
          <ThemeToggle />
          <div className="w-px bg-slate-400/30 mx-1" /> {/* Separador */}
          <LangSwitch />
        </div>

        {/* Nav Móvil (Menú Hamburguesa / SpeedDial) */}
        <div className="md:hidden">
          <SpeedDialNav />
        </div>
      </div>
    </motion.header>
  );
};
