import { useTranslation } from "react-i18next";
import { Tooltip } from "primereact/tooltip";
import { speedDialContactIcons } from "./speed-dial-contact-config";
import { HiOutlineChatBubbleLeft } from "react-icons/hi2";
import { useEffect, useState } from "react";

export function SpeedDialContact() {
  const { t } = useTranslation();
  const [showMainIcon, setShowMainIcon] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowMainIcon((prev) => !prev);
    }, 4000);

    // Cleanup interval on component unmount
    return () => clearInterval(interval);
  }, []);

  const speedDialContactItems = t("contactData", { ns: "ui" }).map(
    (item: {
      key: string;
      label: string;
      toast: string | false;
      action: string;
    }) => {
      const Icon = speedDialContactIcons[item.key];
      return (
        <button
          key={item.key}
          className="bg-green-400 rounded-full p-2 cursor-pointer hover:scale-110 duration-150 ease-in"
        >
          {<Icon size={24} />}
        </button>
      );
    }
  );
  return (
    <>
      <Tooltip
        target=".speeddial-contact .p-speeddial-action"
        position="left"
      />
      <button className="relative h-12 aspect-square p-0 rounded-full bg-blue-500 perspective-dramatic">
        {/* <div className="absolute top-3 left-3 w-1/2 aspect-square rounded-full animate-ping bg-green-300"></div> */}
        <div
          className={`absolute top-0 left-0 w-full aspect-square rounded-full transform-3d transition-transform duration-[1000ms] hover:animate-contact-button ${
            showMainIcon ? "rotate-y-360" : "rotate-y-180"
          }`}
        >
          <div className="flex justify-center items-center aspect-square rounded-full p-2 bg-blue-500 rotate-y-180 border-3 border-black backface-hidden">
            <HiOutlineChatBubbleLeft size={24} className="animate-pulse" />
          </div>
          <img
            src="/Luis Delgado.webp"
            alt="Luis Delgado"
            className="absolute top-0 left-0 block w-full rounded-full border-3 border-black backface-hidden"
          />
        </div>
        <div className="absolute flex flex-col justify-between items-center gap-1.5 top-14 left-1 bg-sky-400">
          {speedDialContactItems}
        </div>
      </button>
    </>
  );
}
