import { motion } from "motion/react";
import { HiOutlineSignal } from "react-icons/hi2";
import { useAudioStore } from "../store/audio";
import { useThemeStore } from "../store/theme";
import { useTranslation } from "react-i18next";

export function TransmissionBtn() {
  const { isSoundActive, toggleSound, playSfx } = useAudioStore();
  const { isDarkTheme } = useThemeStore();
  const { i18n } = useTranslation();
  const isEs = i18n.language === "es";

  const handleClick = () => {
    if (!isSoundActive) {
      playSfx("chirp");
    } else {
      playSfx("click");
    }
    toggleSound();
  };

  const titleText = isSoundActive
    ? isEs
      ? "Transmisiones: activadas (Clic para silenciar)"
      : "Transmissiones: active (Click to mute)"
    : isEs
      ? "Transmisiones: En silencio (Clic para activar)"
      : "Transmissions: Muted (Click to activate)";

  return (
    <div
      className="relative flex items-center justify-center select-none"
      title={titleText}
    >
      {/* Outer Sci-Fi Bezel Socket (Matte Ceramic/Metal Housing) */}
      <div
        className={`
          relative w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center p-[2px]
          transition-colors duration-300
          ${
            isDarkTheme
              ? "bg-gradient-to-b from-[#222831] via-[#161a20] to-[#0c0e12] border border-[#ff9c10]/30 shadow-[inset_0_2px_4px_rgba(0,0,0,0.9),0_2px_4px_rgba(0,0,0,0.6)]"
              : "bg-gradient-to-b from-[#d5dae2] via-[#b8c0cc] to-[#8d98a8] border border-[#10b981]/40 shadow-[inset_0_2px_3px_rgba(0,0,0,0.6),0_2px_4px_rgba(0,0,0,0.25)]"
          }
        `}
      >
        {/* Micro-alignment marks on bezel (4 cardinal notches) */}
        <span className="absolute -top-[1px] left-1/2 -translate-x-1/2 w-[2px] h-[3px] bg-black/40 dark:bg-white/20 rounded-full" />
        <span className="absolute -bottom-[1px] left-1/2 -translate-x-1/2 w-[2px] h-[3px] bg-black/40 dark:bg-white/20 rounded-full" />
        <span className="absolute top-1/2 -left-[1px] -translate-y-1/2 w-[3px] h-[2px] bg-black/40 dark:bg-white/20 rounded-full" />
        <span className="absolute top-1/2 -right-[1px] -translate-y-1/2 w-[3px] h-[2px] bg-black/40 dark:bg-white/20 rounded-full" />

        {/* Inner socket well */}
        <div className="w-full h-full rounded-full bg-[#0a0c0f] p-[1.5px] shadow-[inset_0_3px_6px_rgba(0,0,0,0.95)] flex items-center justify-center overflow-hidden">
          {/* Physical Matte Button Cap */}
          <motion.button
            onClick={handleClick}
            type="button"
            aria-label={titleText}
            aria-pressed={isSoundActive}
            className={`
              relative w-full h-full rounded-full flex items-center justify-center cursor-pointer outline-none
              transition-all duration-200
              ${
                isSoundActive
                  ? isDarkTheme
                    ? "bg-gradient-to-b from-[#4a2e0a] via-[#331c04] to-[#1f1002] border border-[#ff9c10]/70 shadow-[inset_0_2px_4px_rgba(0,0,0,0.8),inset_0_-1px_1px_rgba(255,156,16,0.3)]"
                    : "bg-gradient-to-b from-[#065f46] via-[#044e39] to-[#022c20] border border-[#10b981]/70 shadow-[inset_0_2px_4px_rgba(0,0,0,0.8),inset_0_-1px_1px_rgba(16,185,129,0.4)]"
                  : isDarkTheme
                    ? "bg-gradient-to-b from-[#2a303c] via-[#1e232d] to-[#12161c] border-t border-white/20 border-b border-black/80 shadow-[0_3px_0_#0a0c0e,0_4px_6px_rgba(0,0,0,0.6),inset_0_1px_0_rgba(255,255,255,0.15),inset_0_-2px_2px_rgba(0,0,0,0.5)]"
                    : "bg-gradient-to-b from-[#e8ecf2] via-[#cbd3df] to-[#9aa6b8] border-t border-white/80 border-b border-[#5a6473] shadow-[0_3px_0_#6b7685,0_4px_5px_rgba(0,0,0,0.35),inset_0_1px_0_rgba(255,255,255,0.9),inset_0_-2px_2px_rgba(0,0,0,0.35)]"
              }
            `}
            animate={{
              y: isSoundActive ? 2 : 0,
            }}
            whileHover={{
              scale: isSoundActive ? 0.98 : 1.02,
            }}
            whileTap={{
              y: 3,
              scale: 0.96,
            }}
            transition={{ type: "spring", stiffness: 600, damping: 28 }}
          >
            {/* Concentric Milled Tactile Groove */}
            <div className="absolute inset-[3px] rounded-full border border-black/20 dark:border-white/10 pointer-events-none" />

            {/* Active Status Backlight Glow */}
            {isSoundActive && (
              <div
                className={`pointer-events-none absolute inset-0 rounded-full animate-pulse opacity-60 ${
                  isDarkTheme
                    ? "bg-[#ff9c10]/20 shadow-[0_0_10px_#ff9c10]"
                    : "bg-[#00e676]/25 shadow-[0_0_10px_#00e676]"
                }`}
              />
            )}

            {/* Signal Icon */}
            <HiOutlineSignal
              className={`
                relative z-10 text-[18px] sm:text-[20px] transition-all duration-200
                ${
                  isSoundActive
                    ? isDarkTheme
                      ? "text-[#ffb74d] drop-shadow-[0_0_6px_#ff9c10]"
                      : "text-[#34d399] drop-shadow-[0_0_6px_#00e676]"
                    : isDarkTheme
                      ? "text-[#6b7280]"
                      : "text-[#475569]"
                }
              `}
            />
          </motion.button>
        </div>
      </div>
    </div>
  );
}
