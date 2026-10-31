import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { useTranslation } from "react-i18next";
import { HiXMark } from "react-icons/hi2";
import { common } from "../../../constants/common";

export function SpeedDialContact() {
  const { t } = useTranslation(["common"]);
  const [isOpen, setIsOpen] = useState(false);
  const actionsCfg = common.header.quickActions;

  const handleItemClick = (
    key: string,
    action: string | ((lang: string) => string),
  ) => {
    console.log(key, action);
    return undefined;
  };

  return (
    <div className="relative flex items-center">
      {/* Botón Principal (El "Avatar" o "Comms") */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="relative z-50 w-12 h-12 rounded-full overflow-hidden border-2
          border-hud
          shadow-[0_0_10px_var(--color-hud-glow)]
          transition-transform hover:scale-105 focus:outline-none"
      >
        <motion.div
          animate={{ rotateY: isOpen ? 180 : 0 }}
          transition={{ duration: 1.5, type: "spring", bounce: 0.4 }}
          className="w-full h-full transform-3d"
        >
          {/* Cara Frontal (Tu foto) */}
          <div className="absolute inset-0 backface-hidden">
            <img
              src="/Luis Delgado.webp"
              alt="Comms"
              className="w-full h-full object-cover rounded-full"
            />
          </div>
          {/* Cara Trasera (Icono de Cerrar/Chat) */}
          <div
            className="absolute inset-0 backface-hidden transform-[rotateY(180deg)]
            bg-slate-900 flex items-center justify-center text-hud rounded-full"
          >
            <HiXMark size={24} />
          </div>
        </motion.div>
      </button>

      {/* Elementos Desplegables */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="absolute top-14 left-0 flex flex-col gap-2 pt-2"
            initial="closed"
            animate="open"
            exit="closed"
            variants={{
              open: {
                transition: { staggerChildren: 0.05, delayChildren: 0.1 },
              },
              closed: {
                transition: { staggerChildren: 0.05, staggerDirection: -1 },
              },
            }}
          >
            {actionsCfg.map((item) => {
              const Icon = item.icon;
              return (
                <motion.button
                  key={item.key}
                  onClick={handleItemClick(item.key, item.action)}
                  rel="noopener noreferrer"
                  title={t(`quickActions.${item.key}.label`, { ns: "common" })}
                  variants={{
                    open: { y: 0, opacity: 1, scale: 1 },
                    closed: { y: -20, opacity: 0, scale: 0.5 },
                  }}
                  className="w-10 h-10 rounded-full flex items-center justify-center
                    bg-slate-800/80 backdrop-blur-sm border border-slate-600
                    text-slate-300 hover:text-hud
                    hover:border-hud
                    transition-colors duration-200"
                >
                  {Icon && <Icon size={18} />}
                </motion.button>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
