import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { useTranslation } from "react-i18next";
import { speedDialContactIcons } from "./speed-dial-contact-config";
import { HiXMark } from "react-icons/hi2";

export function SpeedDialContact() {
  const { t } = useTranslation(["ui"]);
  const [isOpen, setIsOpen] = useState(false);

  // t() retorna un array u objeto dependiendo de tu JSON. Asumimos array según tu código.
  const contactItems = t("contactData", { returnObjects: true }) as Array<{
    key: string;
    label: string;
    action: string;
  }>;

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
          className="w-full h-full [transform-style:preserve-3d]"
        >
          {/* Cara Frontal (Tu foto) */}
          <div className="absolute inset-0 [backface-visibility:hidden]">
            <img
              src="/Luis Delgado.webp"
              alt="Comms"
              className="w-full h-full object-cover rounded-full"
            />
          </div>
          {/* Cara Trasera (Icono de Cerrar/Chat) */}
          <div
            className="absolute inset-0 [backface-visibility:hidden] [transform:rotateY(180deg)]
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
            {contactItems.map((item) => {
              const Icon = speedDialContactIcons[item.key];
              return (
                <motion.a
                  key={item.key}
                  href={item.action}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={item.label}
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
                </motion.a>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
