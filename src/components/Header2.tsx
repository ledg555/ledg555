import React from "react";
import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import {
  HiOutlineBolt,
  HiOutlineComputerDesktop,
  HiOutlineCpuChip,
  HiOutlineRocketLaunch,
} from "react-icons/hi2";
import ThemeToggle from "./ThemeToggle";
import useStore from "../store/useStore";

const Header: React.FC = () => {
  const location = useLocation();
  const { isDarkTheme } = useStore();

  const navItems = [
    { to: "/", icon: HiOutlineComputerDesktop, label: "Command Bridge" },
    { to: "/projects", icon: HiOutlineCpuChip, label: "Projects Bay" },
    { to: "/experience", icon: HiOutlineRocketLaunch, label: "Navigation" },
    { to: "/skills", icon: HiOutlineBolt, label: "Weapons Bay" },
  ];

  return (
    <motion.header
      className={`
        fixed top-0 left-0 right-0 z-40 backdrop-blur-md border-b border-gray-100 transition-all duration-300
        ${
          isDarkTheme
            ? "bg-gray-900/20 border-red-500/30"
            : "bg-white/20 border-white/20"
        }
      `}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <motion.div
              className={`
                w-10 h-10 rounded-full flex items-center justify-center
                ${
                  isDarkTheme
                    ? "bg-gradient-to-br from-red-500 to-red-700"
                    : "bg-gradient-to-br from-blue-500 to-purple-600"
                }
              `}
              whileHover={{ scale: 1.1 }}
            >
              <img
                src="/Luis Delgado.webp"
                className="rounded-full mx-auto bottom-8"
              />
            </motion.div>
            <span className="text-white font-headings font-bold text-xl">
              Portfolio
            </span>
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className={`
                  flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-300
                  ${
                    location.pathname === item.to
                      ? isDarkTheme
                        ? "bg-red-500/20 text-red-300 border border-red-500/30"
                        : "bg-radial-gradient from-sky-400 to-cyan-400 text-blue-300 border border-blue-500/30"
                      : "text-white/70 hover:text-white hover:bg-white/10"
                  }
                `}
              >
                <item.icon size={18} />
                <span className="gruppo-bold">{item.label}</span>
              </Link>
            ))}
          </nav>

          <ThemeToggle />
        </div>
      </div>
    </motion.header>
  );
};

export default Header;
