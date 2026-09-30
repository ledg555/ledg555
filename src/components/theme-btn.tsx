import { motion } from "motion/react";
import {
  HiOutlineExclamationTriangle,
  HiOutlineSparkles,
} from "react-icons/hi2";
import { useThemeStore } from "../store/theme";
import { useAudioStore } from "../store/audio";
import { useTranslation } from "react-i18next";

export function ThemeBtn() {
  const { isDarkTheme, toggleTheme } = useThemeStore();
  const { isSoundActive, playSfx } = useAudioStore();
  const { i18n } = useTranslation();
  const isEs = i18n.language === "es";

  const handleToggleTheme = () => {
    if (isSoundActive) {
      if (!isDarkTheme) {
        playSfx("alert");
      } else {
        playSfx("chirp");
      }
    }
    toggleTheme();
  };

  const titleText = isDarkTheme
    ? isEs
      ? "Alerta Roja (Clic para volver a Modo Exploración)"
      : "Red Alert (Click to restore Exploration Mode)"
    : isEs
      ? "Modo Exploración (Clic para activar Alerta Roja)"
      : "Exploration Mode (Click to initiate Red Alert)";

  return (
    <div
      className="relative flex items-center justify-center select-none bg-gray-600 w-14 h-14 lm:mr-2"
      title={titleText}
    >
      <div className="absolute w-full h-full border-2 border-gray-600 warning-lines rounded-xl" />
      {/* Heavy Sci-Fi Master Collar / Housing (Ligeramente más grande) */}
      <div
        className={`
          relative w-12 h-12 rounded-full flex items-center justify-center p-[2.5px]
          transition-all duration-300
          ${
            isDarkTheme
              ? "bg-gradient-to-b from-[#18314e] via-[#0f2137] to-[#071322] border-2 border-[#00e5ff]/60 shadow-[0_0_4px_rgba(0,229,255,0.4),inset_0_2px_4px_rgba(0,0,0,0.9)]"
              : "bg-gradient-to-b from-[#451218] via-[#2a0b0f] to-[#170507] border-2 border-[#ef4444]/60 shadow-[0_1px_8px_rgba(239,68,68,0.3),inset_0_2px_3px_rgba(0,0,0,0.8)]"
          }
        `}
      >
        {/* Corner / Perimeter Precision Micro-Screws */}
        <span
          className={`absolute top-0.5 left-1/2 -translate-x-1/2 w-[2px] h-[3px] rounded-full ${
            isDarkTheme ? "bg-[#00e5ff]/60" : "bg-[#ef4444]/60"
          }`}
        />
        <span
          className={`absolute bottom-0.5 left-1/2 -translate-x-1/2 w-[2px] h-[3px] rounded-full ${
            isDarkTheme ? "bg-[#00e5ff]/60" : "bg-[#ef4444]/60"
          }`}
        />
        <span
          className={`absolute top-1/2 left-0.5 -translate-y-1/2 w-[3px] h-[2px] rounded-full ${
            isDarkTheme ? "bg-[#00e5ff]/60" : "bg-[#ef4444]/60"
          }`}
        />
        <span
          className={`absolute top-1/2 right-0.5 -translate-y-1/2 w-[3px] h-[2px] rounded-full ${
            isDarkTheme ? "bg-[#00e5ff]/60" : "bg-[#ef4444]/60"
          }`}
        />

        {/* Inner Socket Well */}
        <div className="w-full h-full rounded-full bg-[#080a0d] p-0.5 shadow-[inset_0_3px_6px_rgba(0,0,0,0.98)] flex items-center justify-center overflow-hidden">
          {/* Physical Matte Tactile Button Cap */}
          <motion.button
            onClick={handleToggleTheme}
            type="button"
            aria-label={titleText}
            aria-pressed={isDarkTheme}
            className={`
              relative w-full h-full rounded-full flex items-center justify-center cursor-pointer outline-none overflow-hidden
              transition-colors duration-300
              ${
                isDarkTheme
                  ? "bg-gradient-to-b from-[#0284c7] via-[#0369a1] to-[#0c4a6e] border-b border-[#082f49] shadow-[inset_0_2px_4px_rgba(0,0,0,0.6),inset_0_-1px_1px_rgba(0,229,255,0.4),0_0_8px_rgba(0,229,255,0.3)]"
                  : "bg-gradient-to-b from-[#ef4444] via-[#dc2626] to-[#991b1b] border-b border-b-[#450a0a] shadow-[0_3px_0_#5f0a0a,0_4px_8px_rgba(0,0,0,0.5),inset_0_1.5px_0_rgba(255,255,255,0.4),inset_0_-2px_2px_rgba(0,0,0,0.6)]"
              }
            `}
            animate={{
              y: isDarkTheme ? 2 : 0,
            }}
            whileHover={{
              scale: isDarkTheme ? 0.98 : 1.03,
              boxShadow: "none",
            }}
            whileTap={{
              y: 3.5,
              scale: 0.95,
            }}
            transition={{ type: "spring", stiffness: 700, damping: 38 }}
          >
            {/* Concentric Milled Tactile Groove */}
            <div
              className={`absolute inset-[3px] rounded-full border pointer-events-none transition-colors ${
                isDarkTheme ? "border-cyan-300/40" : "border-black/30"
              }`}
            />

            {/* In Dark Mode (Red Alert): Master Blue Energy Glow Core */}
            {isDarkTheme && (
              <div className="pointer-events-none absolute inset-0 rounded-full bg-[#00e5ff]/30 animate-pulse" />
            )}

            {/* Master Icon with Phosphor / Tactical Illumination */}
            {isDarkTheme ? (
              <HiOutlineSparkles className="relative z-10 text-[20px] sm:text-[22px] text-[#e0f7ff] drop-shadow-[0_0_8px_#00e5ff]" />
            ) : (
              <HiOutlineExclamationTriangle className="relative z-10 text-[20px] sm:text-[22px] text-white drop-shadow-[0_0_6px_rgba(255,255,255,0.8)]" />
            )}
          </motion.button>
        </div>
      </div>
    </div>
  );
}
