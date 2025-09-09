import React from "react";
import { motion } from "framer-motion";
import { Link, useLocation } from "react-router";
import {
  HiOutlineBolt,
  HiOutlineComputerDesktop,
  HiOutlineCpuChip,
  HiOutlineRocketLaunch,
} from "react-icons/hi2";
import ThemeToggle from "../ThemeToggle";
import useStore from "../../store/useStore";
import LangSwitch from "../LangSwitch";

const Header: React.FC = () => {
  const location = useLocation();
  const { isDarkTheme } = useStore();

  const navItems = [
    { to: "/", icon: HiOutlineComputerDesktop, label: "Command Bridge" },
    { to: "/projects", icon: HiOutlineCpuChip, label: "Project Archives" },
    {
      to: "/experience",
      icon: HiOutlineRocketLaunch,
      label: "Mission History",
    },
    { to: "/skills", icon: HiOutlineBolt, label: "Weapons Bay" },
  ];

  return (
    <motion.header
      className={`flex justify-between items-center gap-4
        fixed top-0 left-0 right-0 z-40 backdrop-blur-md border-b-8 !border-orange-400 rounded-b-full transition-all duration-300 px-4 xl:px-8 py-4 trapezoid
        ${
          isDarkTheme
            ? "bg-gray-900/20 border-red-500/30"
            : "bg-[url(/tiles/smooth/brushed_alu.png)] border-gray-200/80"
        }
      `}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Logo */}
      <Link to="/" className="flex items-center gap-4">
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
            className="rounded-full mx-auto bottom-8 ring-2"
          />
        </motion.div>
        <span className="font-headings font-bold !text-2xl">Portfolio</span>
      </Link>
      {/* Navigation */}
      <nav className="hidden md:flex items-center gap-4 lg:gap-6">
        {navItems.map((item) => (
          <Link
            title={item.label}
            key={item.to}
            to={`${item.to}`}
            className={`
                  flex items-center gap-2 px-4 py-2 rounded-lg
                  ${
                    location.pathname === item.to
                      ? isDarkTheme
                        ? "bg-radial from-red-500/60 from-35% to-red-500/35 text-red-300 border border-red-500/30"
                        : "bg-radial from-screen-blue from-35% to-screen-deep-blue text-emerald-200 border border-blue-500/30"
                      : "hover:text-slate-200 hover:bg-gray-700/90"
                  }
                `}
          >
            <item.icon className="text-[24px]" />
            <span className="gruppo-bold hidden xl:block">{item.label}</span>
          </Link>
        ))}
      </nav>
      <div className="flex justify-between gap-4 xl:gap-8">
        <ThemeToggle />
        <LangSwitch />
      </div>
    </motion.header>
  );
};

export default Header;
