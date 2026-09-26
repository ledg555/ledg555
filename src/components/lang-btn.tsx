import { motion } from "motion/react";
import { useTranslation } from "react-i18next";
import { useThemeStore } from "../store/theme";
import { useAudioStore } from "../store/audio";

export function LangBtn() {
  const { i18n } = useTranslation();
  const { isDarkTheme } = useThemeStore();
  const { isSoundActive, playSfx } = useAudioStore();

  const isEs = i18n.language === "es";

  const handleToggleLang = () => {
    if (isSoundActive) {
      playSfx("click");
    }
    i18n.changeLanguage(isEs ? "en" : "es");
  };

  const titleText = isEs
    ? "Idioma: Español (Clic para cambiar a Inglés)"
    : "Language: English (Click to switch to Spanish)";

  return (
    <div
      className="relative flex items-center justify-center select-none"
      title={titleText}
    >
      {/* Outer Sci-Fi Bezel Socket (Matte Housing with Status-Warn Accent) */}
      <div
        className={`
          relative w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center p-[2px]
          transition-colors duration-300
          ${
            isDarkTheme
              ? "bg-gradient-to-b from-[#252830] via-[#181b22] to-[#0c0e12] shadow-[inset_0_2px_4px_rgba(0,0,0,0.9),0_2px_4px_rgba(0,0,0,0.6)]"
              : "bg-gradient-to-b from-[#d8dce4] via-[#bcc4d0] to-[#929daa] shadow-[inset_0_2px_3px_rgba(0,0,0,0.6),0_2px_4px_rgba(0,0,0,0.25)]"
          }
        `}
      >
        {/* Micro-alignment marks on bezel */}
        <span className="absolute -top-[1px] left-1/2 -translate-x-1/2 w-[2px] h-[3px] bg-black/40 dark:bg-white/20 rounded-full" />
        <span className="absolute -bottom-[1px] left-1/2 -translate-x-1/2 w-[2px] h-[3px] bg-black/40 dark:bg-white/20 rounded-full" />
        <span className="absolute top-1/2 -left-[1px] -translate-y-1/2 w-[3px] h-[2px] bg-black/40 dark:bg-white/20 rounded-full" />
        <span className="absolute top-1/2 -right-[1px] -translate-y-1/2 w-[3px] h-[2px] bg-black/40 dark:bg-white/20 rounded-full" />

        {/* Inner socket well */}
        <div className="w-full h-full rounded-full bg-[#0a0c0f] p-[1.5px] shadow-[inset_0_3px_6px_rgba(0,0,0,0.95)] flex items-center justify-center overflow-hidden">
          {/* Physical Matte Momentary Push Button Cap */}
          <motion.button
            onClick={handleToggleLang}
            type="button"
            aria-label={titleText}
            className={`
              relative w-full h-full rounded-full flex items-center justify-center cursor-pointer outline-none overflow-hidden
              transition-colors duration-200
              ${
                isDarkTheme
                  ? "bg-gradient-to-b from-[#2c323e] via-[#1f242d] to-[#12151b] border-t border-white/20 border-b border-black/80 shadow-[0_3px_0_#0a0c0e,0_4px_6px_rgba(0,0,0,0.6),inset_0_1px_0_rgba(255,255,255,0.15),inset_0_-2px_2px_rgba(0,0,0,0.5)]"
                  : "bg-gradient-to-b from-[#eaeff6] via-[#cfd8e5] to-[#9faab9] border-t border-white/80 border-b border-[#5e6878] shadow-[0_3px_0_#6f7b8b,0_4px_5px_rgba(0,0,0,0.35),inset_0_1px_0_rgba(255,255,255,0.9),inset_0_-2px_2px_rgba(0,0,0,0.35)]"
              }
            `}
            whileHover={{ scale: 1.03 }}
            whileTap={{
              y: 3,
              scale: 0.97,
              boxShadow: isDarkTheme
                ? "0 0px 0 #0a0c0e, inset 0 2px 4px rgba(0,0,0,0.9)"
                : "0 0px 0 #6f7b8b, inset 0 2px 4px rgba(0,0,0,0.6)",
            }}
            transition={{ type: "spring", stiffness: 600, damping: 25 }}
          >
            {/* Concentric Milled Tactile Groove */}
            <div className="absolute inset-[3px] rounded-full border border-black/20 dark:border-white/10 pointer-events-none" />

            {/* Inner Emblem Badge: Sci-Fi Tactical Flag Badge with subtle matrix overlay */}
            <div className="relative z-10 flex items-center justify-center w-5 h-5 sm:w-6 sm:h-6 rounded-full overflow-hidden shadow-[0_0_4px_rgba(245,158,11,0.25)]">
              {/*<img
                src={isEs ? "/español.png" : "/english.png"}
                alt={isEs ? "Español" : "English"}
                className="w-full h-full object-cover saturate-80 contrast-110 brightness-95"
              />*/}
              {/* Sci-Fi Tactical Matte Filter Overlay */}
              <div className="absolute inset-0 bg-amber-500/10 mix-blend-color pointer-events-none" />
              <div className="absolute inset-0 shadow-[inset_0_0_3px_rgba(0,0,0,0.6)] pointer-events-none" />
            </div>
          </motion.button>
        </div>
      </div>
    </div>
  );
}
