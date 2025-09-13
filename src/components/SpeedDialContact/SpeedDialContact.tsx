import { useTranslation } from "react-i18next";
import { Tooltip } from "primereact/tooltip";
import { IconType } from "react-icons";
import { speedDialContactIcons } from "./speed-dial-contact-config";
import { HiOutlineChatBubbleLeft } from "react-icons/hi2";

interface MenuItem {
  icon: IconType;
  label: string;
  command: () => void;
}

export function SpeedDialContact() {
  const { t } = useTranslation();
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
          className="bg-red-400 rounded-full p-2 cursor-pointer hover:scale-105"
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
      <button className="relative bg-blue-600 aspect-square p-0 rounded-full">
        <div className="flex justify-center items-center aspect-square rounded-full p-3.5 bg-pink-300">
          {/* <HiOutlineChatBubbleLeft size={24} /> */}
          <img
            src="/Luis Delgado.webp"
            alt="Luis Delgado"
            className="w-10 rounded-full"
          />
        </div>
        <div className="absolute flex flex-col justify-between items-center gap-1.5 top-14 left-[5px]">
          {speedDialContactItems}
        </div>
      </button>
    </>
  );
}
