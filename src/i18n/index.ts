import es from "./es.json";
import en from "./en.json";

export const messages = { es, en };

export type Lang = "es" | "en";

export function getBrowserLang(): Lang {
  const lang = navigator.language.toLowerCase();
  return lang.startsWith("es") ? "es" : "en";
}

export function getSavedLang(): Lang | null {
  try {
    const saved = localStorage.getItem("lang");
    return saved === "es" || saved === "en" ? saved : null;
  } catch {
    return null;
  }
}

export function saveLang(lang: Lang) {
  try {
    localStorage.setItem("lang", lang);
  } catch {}
}

export function resolveLang(): Lang {
  return getSavedLang() ?? getBrowserLang();
}

export function getMessages(lang: Lang) {
  return messages[lang];
}
