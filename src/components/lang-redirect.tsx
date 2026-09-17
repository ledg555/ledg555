import { Navigate, useLocation } from "react-router";
import { useTranslation } from "react-i18next";

export default function LanguageRedirect() {
  const location = useLocation();
  const { i18n } = useTranslation();

  const i18nLang = i18n.language;

  const originalPath = location.pathname === "/" ? "" : location.pathname;
  const targetPath = `/${i18nLang}${originalPath}${location.search}`;

  // Use the `Maps` component to perform a client-side redirect.
  // `replace` is crucial to avoid adding the non-localized URL to the history stack.
  return <Navigate to={targetPath} replace />;
}
