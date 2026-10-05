import es from "../../i18n/es.json";
import en from "../../i18n/en.json";
import { resolveLang, saveLang } from "../../i18n";
import { useEffect, useMemo, useState } from "react";
import { Header } from "../Header";
import { Hero } from "../Hero";
import { Projects } from "../Projects";
import { Footer } from "../Footer";

const dictionaries = { es, en };
type Language = keyof typeof dictionaries;

export default function PortfolioApp({ currentPath }: { currentPath: string }) {
  const [lang, setLang] = useState<Language>("es");

  useEffect(() => {
    const resolvedLang = resolveLang();
    if (resolvedLang === "es" || resolvedLang === "en") setLang(resolvedLang);
  }, []);

  const messages = useMemo(() => dictionaries[lang] ?? dictionaries.es, [lang]);

  function handleChangeLanguage(newLang: Language) {
    setLang(newLang);
    saveLang(newLang);
  }

  return (
    <>
      <Header links={messages.navbar.links} currentPath={currentPath} lang={lang} onLanguageChange={handleChangeLanguage} />
      <Hero messages={messages.hero} />
      <Projects messages={messages.projects} />
      <Footer messages={messages.footer} />
    </>
  );
}
