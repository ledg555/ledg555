import { useTranslation } from "react-i18next";
import { Tooltip } from "primereact/tooltip";
import { speedDialContactIcons } from "./speed-dial-contact-config";
import { HiOutlineChatBubbleLeft } from "react-icons/hi2";

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
          className="bg-green-400 rounded-full p-2.5 cursor-pointer hover:scale-110 duration-100 ease-in"
        >
          {<Icon size={20} />}
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
        <div className="absolute top-0 left-0 w-full aspect-square rounded-full transform-3d animate-flip-y hover:scale-110 duration-150">
          <div className="flex justify-center items-center aspect-square rounded-full p-2 rotate-y-180 border-3 border-black backface-hidden">
            <HiOutlineChatBubbleLeft size={24} />
          </div>
          <img
            src="/Luis Delgado.webp"
            alt="Luis Delgado"
            className="absolute top-0 left-0 block w-full rounded-full border-3 border-black backface-hidden"
          />
        </div>
        <div className="absolute flex flex-col justify-between items-center gap-1.5 top-14 left-1">
          {speedDialContactItems}
        </div>
      </button>
    </>
  );
}
