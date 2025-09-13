import React from "react";
import { motion } from "framer-motion";
import { Link, useLocation } from "react-router";
import ThemeToggle from "../ThemeToggle";
import useStore from "../../store/useStore";
import LangSwitch from "../LangSwitch";
import { navLinks } from "./nav-config";
import { useTranslation } from "react-i18next";
import { SpeedDialContact } from "../SpeedDialContact/SpeedDialContact";

const Header: React.FC = () => {
  const location = useLocation();
  const { isDarkTheme } = useStore();
  const { t } = useTranslation(["ui"]);

  return (
    <motion.header
      className={`flex justify-between items-center gap-4
        fixed top-0 left-0 right-0 z-40 backdrop-blur-md border-b-6 !border-orange-400 rounded-b-full transition-all duration-300 px-12 py-4
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
        <span className="hidden min-[720px]:block font-headings font-bold text-sm lg:!text-base w-40 lg:w-48 text-zinc-600">
          {t("navigationData.shipName", { ns: "ui" })}
        </span>
      </Link>
      <SpeedDialContact />
      {/* Navigation */}
      <nav className="hidden xs:flex justify-center flex-grow items-center gap-2 md:gap-4 lg:gap-6">
        {navLinks.map((item) => (
          <Link
            title={t(`navigationData.${item.translationKey}`, { ns: "ui" })}
            key={item.translationKey}
            to={`${item.url}`}
            className={`
                  flex items-center gap-2 px-2 sm:px-4 py-2 rounded-lg
                  ${
                    location.pathname === item.url
                      ? isDarkTheme
                        ? "bg-radial from-red-500/60 from-35% to-red-500/35 text-red-300 border border-red-500/30 cursor-text"
                        : "bg-radial from-screen-blue from-35% to-screen-deep-blue text-emerald-200 border border-blue-500/30 cursor-default"
                      : "hover:text-slate-200 hover:bg-gray-700/90"
                  }
                `}
          >
            <item.icon className="text-[24px]" />
            <span className="gruppo-bold hidden xl:block">
              {t(`navigationData.${item.translationKey}`, { ns: "ui" })}
            </span>
          </Link>
        ))}
      </nav>
      <div className="flex justify-end gap-4 md:gap-4 xl:gap-8 md:flex-grow md:max-w-28 lg:flex-grow-0 lg:max-w-48">
        <ThemeToggle />
        <LangSwitch />
      </div>
    </motion.header>
  );
};

export { Header };
