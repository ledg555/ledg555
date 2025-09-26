import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import useStore from "../store/useStore";

export default function LangSwitch() {
  const { i18n } = useTranslation();
  const { isDarkTheme } = useStore();
  return (
    <>
      <button
        onClick={() =>
          i18n.changeLanguage(i18n.language === "en" ? "es" : "en")
        }
        className={`
        relative h-8 w-8 lg:w-14 rounded-full border-2 hover:scale-105 transition-all duration-100
        ${
          isDarkTheme
            ? "bg-gray-800 border-red-500 shadow-red-500/50"
            : "bg-radial from-screen-blue from-35% to-screen-deep-blue border-blue-400 shadow-blue-500/50"
        }
        shadow-lg hover:shadow-xl
      `}
      >
        <motion.div
          className={`
          absolute left-[2.1px] top-0.5 flex justify-center items-center w-6 h-6 rounded-full border-2 border-white
          transition-all duration-200
          ${i18n.language === "en" ? "lg:left-0.5" : "lg:left-[26.4px]"}
        `}
          layout={false}
        >
          <img
            className="w-full aspect-square"
            src={i18n.language === "en" ? "/english.png" : "/español.png"}
            alt={i18n.language === "en" ? "English" : "Español"}
          />
        </motion.div>
      </button>
    </>
  );
}
