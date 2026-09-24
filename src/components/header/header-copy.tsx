import { motion } from "motion/react";
import { Link, useLocation } from "react-router";
import ThemeToggle from "../theme-toggle";
import LangSwitch from "../lang-switch";
import { navLinks } from "./nav-config";
import { useTranslation } from "react-i18next";
import { SpeedDialContact } from "../speed-dial-contact";
import { SpeedDialNav } from "../speed-dial-nav";

export function Header() {
  const location = useLocation();
  const { t } = useTranslation(["ui"]);

  return (
    <motion.header
      className="flex justify-around xs:justify-between items-center gap-4
        fixed top-0 left-0 right-0 z-40 backdrop-blur-md border-b-6 border-b-surface rounded-b-full transition-all duration-300 px-8 xs:px-10 2xl:px-16 py-4 h-22
        bg-base
      "
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Logo */}
      <div className="flex items-center gap-4">
        <SpeedDialContact />
        <span className="hidden min-[720px]:block font-headings font-bold text-sm w-40 lg:w-46 text-fg">
          {t("navigationData.shipName", { ns: "ui" })}
        </span>
      </div>

      {/* Navigation */}
      <nav className="hidden sm:flex justify-around lg:justify-evenly 2xl:justify-evenly grow items-center gap-1.5 sm:gap-2 lg:gap-4 xl:gap-3">
        {navLinks.map((item) => {
          const isCurrentPath = location.pathname === item.url;
          return (
            <Link
              key={item.translationKey}
              to={item.url}
              title={t(`navigationData.${item.translationKey}`, { ns: "ui" })}
              data-active={isCurrentPath}
              className="screen-drop group relative inline-flex items-center justify-center p-[1.5px] cursor-pointer select-none"
            >
              {/* Capa Borde / Casing con clip-path */}
              <div className="absolute inset-0 octagon-sm [background:var(--screen-casing-active)] data-[active=true]:[background:var(--screen-casing-active)]" />

              {/* Screen Glass Interior */}
              <div
                className="relative flex items-center justify-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 md:w-16 xl:w-auto xl:h-auto octagon-sm overflow-hidden transition-all duration-250 group-hover:-translate-y-0.5 group-active:translate-y-0"
                style={{
                  background: isCurrentPath
                    ? "var(--screen-bg-active)"
                    : "var(--screen-bg)",
                }}
              >
                {/* Layer 1: CRT Micro-Scanlines Matrix */}
                <div className="screen screen-glare pointer-events-none absolute inset-0 screen-scanlines" />

                {/* Layer 2: HUD Inset Wireframe & Reticle Frame */}
                <div
                  className={`pointer-events-none absolute inset-0.5 rounded-[10px/7px] border transition-all duration-300 ${
                    isCurrentPath
                      ? "border-(--screen-border-active) shadow-[inset_0_0_8px_var(--screen-glow-active)]"
                      : "border-(--screen-border) opacity-60 group-hover:opacity-100 group-hover:border-(--screen-border-active)"
                  }`}
                />

                {/* Layer 3: Glass Specular Glare (Top-down crystal sheen) */}
                <div className="pointer-events-none absolute inset-x-0 top-0 h-[45%] bg-linear-to-b from-white/30 via-white/5 to-transparent transition-opacity duration-300 group-hover:opacity-100 opacity-70" />

                {/* Layer 4: Tactical HUD Reticle Dots */}
                <span
                  className={`pointer-events-none absolute left-1.5 top-1.5 w-1 h-1 rounded-full transition-all duration-300 ${
                    isCurrentPath
                      ? "bg-cyan-200 dark:bg-red-200 shadow-[0_0_4px_var(--screen-border-active)] opacity-100 scale-110"
                      : "bg-cyan-400 dark:bg-red-400 opacity-40 group-hover:opacity-80"
                  }`}
                />
                <span
                  className={`pointer-events-none absolute right-1.5 top-1.5 w-1 h-1 rounded-full transition-all duration-300 ${
                    isCurrentPath
                      ? "bg-cyan-200 dark:bg-red-200 shadow-[0_0_4px_var(--screen-border-active)] opacity-100 scale-110"
                      : "bg-cyan-400 dark:bg-red-400 opacity-40 group-hover:opacity-80"
                  }`}
                />

                {/* Active Underline Power Conduit */}
                {isCurrentPath && (
                  <motion.div
                    transition={{ duration: 0.2 }}
                    layoutId="active-indicator"
                    className="pointer-events-none absolute bottom-0.5 left-1/2 -translate-x-1/2 w-6 sm:w-8 h-0.5 rounded-full bg-cyan-200 dark:bg-red-200 shadow-[0_0_8px_var(--screen-border-active)]"
                  />
                )}

                {/* Icon with Phosphor Glow */}
                <item.icon
                  className={`text-[22px] z-10 transition-all duration-300 shrink-0 ${
                    isCurrentPath
                      ? "text-white"
                      : "text-(--screen-text) group-hover:text-white group-hover:scale-105"
                  }`}
                  style={{
                    filter: isCurrentPath
                      ? "drop-shadow(0 0 6px var(--screen-text-glow)) drop-shadow(0 0 12px var(--screen-glow-active))"
                      : "drop-shadow(0 0 4px var(--screen-text-glow))",
                  }}
                />

                {/* Label with Phosphor Text Glow */}
                <span
                  className={`font-semibold text-xs sm:text-sm tracking-wide hidden xl:block z-10 select-none transition-all duration-100 ${
                    isCurrentPath
                      ? "text-white font-bold"
                      : "text-(--screen-text) group-hover:text-white"
                  }`}
                  style={{
                    textShadow: isCurrentPath
                      ? "0 0 8px var(--screen-text-glow), 0 0 14px var(--screen-glow-active)"
                      : "0 0 5px var(--screen-text-glow)",
                  }}
                >
                  {t(`navigationData.${item.translationKey}`, { ns: "ui" })}
                </span>
              </div>
            </Link>
          );
        })}
      </nav>

      <div className="flex justify-around sm:justify-between lg:justify-end gap-4 lg:gap-8 2xl:gap-12 grow max-w-28 sm:max-w-24 lg:max-w-40 lg:grow-0">
        <ThemeToggle />
        <LangSwitch />
      </div>
      <SpeedDialNav />
    </motion.header>
  );
}
