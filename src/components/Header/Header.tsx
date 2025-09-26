import React from "react";
import { motion } from "framer-motion";
import { Link, useLocation } from "react-router";
import ThemeToggle from "../ThemeToggle";
import useStore from "../../store/useStore";
import LangSwitch from "../LangSwitch";
import { navLinks } from "./nav-config";
import { useTranslation } from "react-i18next";
import { SpeedDialContact } from "../SpeedDialContact/SpeedDialContact";
import { SpeedDialNav } from "../SpeedDialNav/SpeedDialNav";

const Header: React.FC = () => {
  const location = useLocation();
  const { isDarkTheme } = useStore();
  const { t } = useTranslation(["ui"]);

  return (
    <motion.header
      className={`flex justify-around xs:justify-between items-center gap-4
        fixed top-0 left-0 right-0 z-40 backdrop-blur-md border-b-6 !border-orange-400 rounded-b-full transition-all duration-300 px-8 xs:px-10 2xl:px-16 py-4 h-[88px]
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
      <div className="flex items-center gap-4">
        <SpeedDialContact />
        <span className="hidden min-[720px]:block font-headings font-bold text-sm lg:!text-base w-40 lg:w-[184px] text-zinc-600">
          {t("navigationData.shipName", { ns: "ui" })}
        </span>
      </div>
      {/* Navigation */}
      <nav className="hidden sm:flex justify-around lg:justify-evenly 2xl:justify-evenly flex-grow items-center gap-1 sm:gap-2 lg:gap-6 xl:gap-2">
        {navLinks.map((item) => (
          <Link
            title={t(`navigationData.${item.translationKey}`, { ns: "ui" })}
            key={item.translationKey}
            to={`${item.url}`}
            className={`
                  flex justify-center items-center gap-2 px-2 sm:px-4 py-2 md:w-16 xl:w-auto xl:h-auto octagon-sm
                  ${
                    location.pathname === item.url
                      ? isDarkTheme
                        ? "bg-radial from-red-500/60 from-35% to-red-500/35 text-red-300 border border-red-500/30 cursor-text"
                        : "bg-[url(/tiles/screen/random_grey_variations.png)] bg-size-[96px] text-[#aff] cursor-default w-14 h-10 shadow-blue-500/50"
                      : "bg-radial from-screen-blue from-35% to-screen-deep-blue text-[#aff]"
                  }
                `}
          >
            <item.icon className="text-[24px]" />
            <span className="font-semibold hidden xl:block">
              {t(`navigationData.${item.translationKey}`, { ns: "ui" })}
            </span>
          </Link>
        ))}
      </nav>
      <div className="flex justify-around sm:justify-between lg:justify-end gap-4 lg:gap-8 2xl:gap-12 flex-grow max-w-28 sm:max-w-24 lg:max-w-40 lg:flex-grow-0">
        <ThemeToggle />
        <LangSwitch />
      </div>
      <SpeedDialNav />
    </motion.header>
  );
};

export { Header };

/* hover:text-slate-200 hover:bg-gray-700/90 */
