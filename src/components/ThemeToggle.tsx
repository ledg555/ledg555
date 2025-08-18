import React from "react";
import { motion } from "framer-motion";
import { HiOutlineMoon, HiOutlineSun } from "react-icons/hi2";
import useStore from "../store/useStore";

const ThemeToggle: React.FC = () => {
  const { isDarkTheme, toggleTheme } = useStore();

  return (
    <motion.button
      onClick={toggleTheme}
      className={`
        relative w-14 h-8 rounded-full border-2 transition-all duration-300
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
          absolute top-0.5 w-6 h-6 rounded-full flex items-center justify-center
          transition-all duration-300
          ${
            isDarkTheme
              ? "left-0.5 bg-red-500 text-white"
              : "left-6 bg-white text-blue-600"
          }
        `}
        layout
      >
        {isDarkTheme ? <HiOutlineMoon /> : <HiOutlineSun />}
      </motion.div>
    </motion.button>
  );
};

export default ThemeToggle;
