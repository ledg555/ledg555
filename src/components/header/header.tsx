import { motion } from "motion/react";
import { Link, useLocation } from "react-router";
import { TransmissionBtn } from "../transmission-btn";
import { LangBtn } from "../lang-btn";
import { ThemeBtn } from "../theme-btn";
import { useThemeStore } from "../../store/theme";
import { navLinks } from "./nav-config";
import { useTranslation } from "react-i18next";
import { SpeedDialContact } from "../speed-dial-contact";
import { SpeedDialNav } from "../speed-dial-nav";

export function Header() {
  const location = useLocation();
  const { isDarkTheme } = useThemeStore();
  const { t } = useTranslation(["ui"]);

  return (
    <motion.header
      className={`flex justify-around xs:justify-between items-center gap-4
        fixed top-0 left-0 right-0 z-40 backdrop-blur-md border-b-6 !border-[url(/src/assets/tiles/metal/1-hixs_pattern_evolution.png)] rounded-b-full transition-all duration-300 px-8 xs:px-10 2xl:px-16 py-4 h-22
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
        <span className="hidden min-[720px]:block font-headings font-bold text-sm w-40 lg:w-46 text-fg">
          {t("navigationData.shipName", { ns: "ui" })}
        </span>
      </div>
      {/* Navigation */}
      <nav className="hidden sm:flex justify-around lg:justify-evenly 2xl:justify-evenly grow items-center gap-1 sm:gap-2 lg:gap-6 xl:gap-2">
        {navLinks.map((item) => (
          <Link
            title={t(`navigationData.${item.translationKey}`, { ns: "ui" })}
            key={item.translationKey}
            to={`${item.url}`}
            className={`
                  flex justify-center items-center gap-2 px-2 sm:px-4 py-2 md:w-16 xl:w-auto xl:h-auto octagon-sm cursor-pointer bg-radial
                  ${
                    location.pathname === item.url
                      ? isDarkTheme
                        ? "from-red-500/80 from-30% to-red-500/50 text-red-200/80 border border-red-500/30"
                        : "from-screen-blue from-35% to-screen-deep-blue text-[#aff] w-14 h-10 shadow-blue-500/50"
                      : isDarkTheme
                        ? "from-red-500/70 from-45% to-red-500/50 text-black border border-red-500/30"
                        : "from-screen-blue from-10% to-screen-deep-blue text-[#aff]"
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
      {/* Ship Master Actions */}
      <div className="flex items-center justify-end gap-2 xs:gap-2.5 sm:gap-3 lg:gap-3.5 shrink-0">
        <TransmissionBtn />
        <LangBtn />
        <div className="ml-1 sm:ml-1.5 flex items-center">
          <ThemeBtn />
        </div>
      </div>
      <SpeedDialNav />
    </motion.header>
  );
}

/* hover:text-slate-200 hover:bg-gray-700/90 */
