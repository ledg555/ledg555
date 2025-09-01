import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import useStore from "../store/useStore";

export default function LangSwitch() {
  const { i18n } = useTranslation();
  const { isDarkTheme } = useStore();
  return (
    <>
      <motion.button
        onClick={() =>
          i18n.changeLanguage(i18n.language === "en" ? "es" : "en")
        }
        className={`
        relative h-8 w-8 lg:w-14 rounded-full border-2 transition-all duration-300
        ${
          isDarkTheme
            ? "bg-gray-800 border-red-500 shadow-red-500/50"
            : "bg-blue-600 border-blue-400 shadow-blue-500/50"
        }
        shadow-lg hover:shadow-xl
      `}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <motion.div
          className={`
          absolute left-[2.5px] top-0.5 flex justify-center items-center w-6 h-6 rounded-full lg:border-2
          transition-all duration-200
          ${i18n.language === "en" ? "lg:left-1" : "lg:left-6.5"}
        `}
          layout={false}
        >
          <img
            className="w-full aspect-square"
            src={i18n.language === "en" ? "/english.png" : "/español.png"}
            alt={i18n.language === "en" ? "English" : "Español"}
          />
        </motion.div>
      </motion.button>
    </>
  );
}
