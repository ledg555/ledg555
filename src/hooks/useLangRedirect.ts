// TODO: it doesn't work yet, but it's an idea to improve UX (adding the lang to the path)

import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router";
import { useTranslation } from "react-i18next";

export const useLangRedirect = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { i18n } = useTranslation();

  useEffect(() => {
    const i18nLang = i18n.language;
    const originalPath = location.pathname === "/" ? "" : location.pathname;
    const targetPath = `/${i18nLang}${originalPath}${location.search}`;
    console.log({ originalPath, targetPath });
    navigate(targetPath, { replace: true });
  }, []);
};
