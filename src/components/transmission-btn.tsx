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
          relative w-12 h-12 rounded-full flex items-center justify-center p-1.5
          transition-colors duration-100
          ${
            isDarkTheme
              ? "bg-gradient-to-b from-[#222831] via-[#161a20] to-[#0c0e12] shadow-[inset_0_2px_4px_rgba(0,0,0,0.9),0_2px_4px_rgba(0,0,0,0.6)]"
              : "bg-gradient-to-b from-[#d5dae2] via-[#b8c0cc] to-[#8d98a8] shadow-[inset_0_2px_3px_rgba(0,0,0,0.6),0_2px_4px_rgba(0,0,0,0.25)]"
          }
        `}
      >
        {/* Screws on bezel */}
        <span className="absolute top-0.5 left-1/2 -translate-x-1/2 w-[3px] h-[3px] bg-black/40 dark:bg-white/20 rounded-full" />
        <span className="absolute bottom-0.5 left-1/2 -translate-x-1/2 w-[3px] h-[3px] bg-black/40 dark:bg-white/20 rounded-full" />
        <span className="absolute top-1/2 left-0.5 -translate-y-1/2 w-[3px] h-[3px] bg-black/40 dark:bg-white/20 rounded-full" />
        <span className="absolute top-1/2 right-0.5 -translate-y-1/2 w-[3px] h-[3px] bg-black/40 dark:bg-white/20 rounded-full" />

        {/* Inner socket well */}
        <div className="w-full h-full rounded-full bg-[#0a0c0f] p-[2.5px] shadow-[inset_0_3px_6px_rgba(0,0,0,0.95)] flex items-center justify-center overflow-hidden">
          {/* Physical Matte Button Cap */}
          <motion.button
            onClick={handleClick}
            type="button"
            aria-label={titleText}
            aria-pressed={isSoundActive}
            className={`
              relative w-full h-full rounded-full flex items-center justify-center cursor-pointer outline-none transition-colors duration-200

              ${
                isSoundActive
                  ? isDarkTheme
                    ? "bg-gradient-to-b from-[#4a2e0a] via-[#331c04] to-[#1f1002] shadow-[inset_0_2px_4px_rgba(0,0,0,0.8),inset_0_-1px_1px_rgba(255,156,16,0.3)]"
                    : "bg-gradient-to-b from-[#065f46] via-[#044e39] to-[#022c20] shadow-[inset_0_2px_4px_rgba(0,0,0,0.8),inset_0_-1px_1px_rgba(16,185,129,0.4)]"
                  : isDarkTheme
                    ? "bg-gradient-to-b from-[#2a303c] via-[#1e232d] to-[#12161c] border-t border-t-white/20 border-b border-b-black/80 shadow-[0_3px_0_#0a0c0e,0_4px_6px_rgba(0,0,0,0.6),inset_0_1px_0_rgba(255,255,255,0.15),inset_0_-2px_2px_rgba(0,0,0,0.5)]"
                    : "bg-gradient-to-b from-[#e8ecf2] via-[#cbd3df] to-[#9aa6b8] border-t border-t-white/80 border-b border-b-gray-600 shadow-[0_3px_0_#6b7685,0_4px_5px_rgba(0,0,0,0.35),inset_0_1px_0_rgba(255,255,255,0.9),inset_0_-2px_2px_rgba(0,0,0,0.35)]"
              }
            `}
            animate={{
              y: isSoundActive ? 2 : 0,
            }}
            whileHover={{
              scale: isSoundActive ? 0.98 : 1.03,
            }}
            whileTap={{
              y: 3,
              scale: 0.97,
            }}
            transition={{
              type: "spring",
              stiffness: 250,
              damping: 15,
            }}
          >
            {/* Concentric Milled Tactile Groove */}
            <div className="absolute inset-[3px] rounded-full border border-black/20 dark:border-white/10 pointer-events-none" />

            {/* Active Status Backlight Glow */}
            {isSoundActive && (
              <div
                className={`pointer-events-none absolute inset-0 rounded-full animate-pulse opacity-60 ${
                  isDarkTheme
                    ? "bg-[#ff9c10]/80 shadow-[0_0_10px_#ff9c10]"
                    : "bg-[#00e676]/25 shadow-[0_0_10px_#00e676]"
                }`}
              />
            )}

            {/* Signal Icon */}
            <HiOutlineSignal
              className={`
                relative z-10 text-[18px] sm:text-[20px] transition-all duration-100
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
