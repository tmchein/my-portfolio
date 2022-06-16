import { createContext, useCallback, useContext, useState } from "react";
import ES from "../translations/es.json";
import EN from "../translations/en.json";

const I18NContext = createContext();

const languages = { ES, EN };

export function I18NProvider({ children }) {
  const [locale, setLocale] = useState("EN");

  const t = useCallback(
    (key) => {
      let translation = languages[locale][key];
      return translation;
    },
    [locale]
  );

  return (
    <I18NContext.Provider value={{ locale, setLocale, t }}>
      {children}
    </I18NContext.Provider>
  );
}

export function useI18N() {
  const context = useContext(I18NContext);
  if (context === undefined) {
    throw new Error("useI18N must be used within a I18NProvider");
  }
  return context;
}
