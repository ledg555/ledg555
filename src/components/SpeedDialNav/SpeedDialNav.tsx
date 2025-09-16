import { useTranslation } from "react-i18next";
import { Tooltip } from "primereact/tooltip";
import { HiOutlinePlus } from "react-icons/hi2";
import { useState } from "react";
import { Link } from "react-router";
import { navLinks } from "../Header/nav-config";

export function SpeedDialNav() {
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);

  const speedDialContactItems = navLinks.map((item) => (
    <Link
      title={t(`navigationData.${item.translationKey}`, { ns: "ui" })}
      key={item.translationKey}
      to={`${item.url}`}
      className={`bg-green-400 p-2.5 rounded-full cursor-pointer hover:scale-110 duration-100 ease-in ${
        open && "animate-pull"
      }`}
    >
      <item.icon size={20} />
    </Link>
  ));
  return (
    <>
      <Tooltip target=".speeddial-nav .p-speeddial-action" position="left" />
      <button
        className="block sm:hidden relative h-12 aspect-square p-0 rounded-full bg-blue-500 perspective-dramatic"
        onClick={() => setOpen(!open)}
      >
        <div
          className={`flex justify-center items-center aspect-square rounded-full p-2 border-3 border-black duration-500 hover:scale-110 animate-press ${
            open && "-rotate-z-135"
          }`}
        >
          <HiOutlinePlus size={24} />
        </div>
        <div
          className={`absolute flex-col justify-between items-center gap-1.5 top-14 left-1 flex`}
        >
          {speedDialContactItems}
        </div>
      </button>
    </>
  );
}
