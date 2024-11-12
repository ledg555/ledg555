import { SelectButton } from "primereact/selectbutton";
import { useState } from "react";
import { useTranslation } from "react-i18next";

const lngs = ["en", "es"];

export default function LangSwitch() {
  const { i18n } = useTranslation();
  const [value, setValue] = useState(i18n.resolvedLanguage);
  return (
    <SelectButton
      value={value}
      onChange={(e) => {
        setValue(e.value);
        i18n.changeLanguage(e.value);
      }}
      options={lngs}
    />
  );
}
