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
        relative h-8 w-8 lg:w-14 rounded-full border-2 transition-all duration-300
        ${
          isDarkTheme
            ? "bg-gray-800 border-red-500 shadow-red-500/50"
            : "bg-radial from-screen-blue from-35% to-screen-deep-blue border-blue-400 shadow-blue-500/50"
        }
        shadow-lg hover:shadow-xl
      `}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <motion.div
        className={`
          absolute left-[2.5px] top-0.5 flex justify-center items-center w-6 h-6 rounded-full
          transition-all duration-200
          ${
            isDarkTheme
              ? "lg:left-1 bg-red-500 text-white"
              : "lg:left-6.5 bg-white text-blue-600"
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
