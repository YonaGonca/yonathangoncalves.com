import { createContext, useContext, useEffect, useState } from "react";
import { translate } from "../data/translations";

const SiteContext = createContext(null);

const DARK_VARS = {
  "--title-color": "hsl(230, 100%, 98%)",
  "--header-color": "hsla(228, 97%, 12%, 0.651)",
  "--text-color": "hsl(230, 100%, 98%)",
  "--body-color": "hsl(230, 75%, 15%)",
  "--animation-color1": "rgb(0, 0, 24)",
  "--animation-color2": "rgb(5, 1, 43)",
  "--bluecode-color": "#27d1c6",
};

const LIGHT_VARS = {
  "--title-color": "hsl(230, 75%, 15%)",
  "--text-color": "hsl(230, 75%, 15%)",
  "--body-color": "hsl(230, 100%, 98%)",
  "--header-color": "hsla(228, 100%, 98%, 0.651)",
  "--animation-color1": "rgb(244, 247, 244)",
  "--animation-color2": "rgb(185, 248, 248)",
  "--bluecode-color": "#097a73",
};

function applyDarkModeVars(enabled) {
  const vars = enabled ? DARK_VARS : LIGHT_VARS;
  Object.entries(vars).forEach(([key, value]) => {
    document.documentElement.style.setProperty(key, value);
  });
}

export function SiteProvider({ children }) {
  const [darkMode, setDarkMode] = useState(
    () => localStorage.getItem("darkMode") === "enabled"
  );
  const [language, setLanguage] = useState(
    () => localStorage.getItem("language") || "es"
  );

  useEffect(() => {
    applyDarkModeVars(darkMode);
    localStorage.setItem("darkMode", darkMode ? "enabled" : "disabled");
  }, [darkMode]);

  useEffect(() => {
    localStorage.setItem("language", language);
  }, [language]);

  const t = (key) => translate(language, key);

  const value = {
    darkMode,
    toggleDarkMode: () => setDarkMode((prev) => !prev),
    language,
    setLanguage,
    t,
  };

  return <SiteContext.Provider value={value}>{children}</SiteContext.Provider>;
}

export function useSite() {
  const ctx = useContext(SiteContext);
  if (!ctx) throw new Error("useSite must be used within a SiteProvider");
  return ctx;
}
