import { useEffect, useId, useRef, useState } from "react";
import { FlagIcon } from "./FlagIcon";

type Lang = "en" | "es";

type LanPickerProps = {
  lang: Lang;
  onLanguageChange: (lang: Lang) => void;
};

export function LanPicker({ lang, onLanguageChange }: LanPickerProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLang, setSelectedLang] = useState<Lang>(lang);
  const containerRef = useRef<HTMLDivElement>(null);
  const closeTimer = useRef<number>(0);
  const menuId = useId();

  useEffect(() => {
    setSelectedLang(lang);
  }, [lang]);

  useEffect(() => {
    if (!isOpen) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsOpen(false);
    };
    const onClickOutside = (event: MouseEvent) => {
      if (!containerRef.current?.contains(event.target as Node)) setIsOpen(false);
    };

    document.addEventListener("keydown", onKeyDown);
    document.addEventListener("click", onClickOutside);

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("click", onClickOutside);
    };
  }, [isOpen]);

  const selectLang = (lang: Lang) => {
    setSelectedLang(lang);
    setIsOpen(false);
    onLanguageChange(lang);
  };

  const openNow = () => {
    window.clearTimeout(closeTimer.current);
    setIsOpen(true);
  };
  const closeSoon = () => {
    window.clearTimeout(closeTimer.current);
    closeTimer.current = window.setTimeout(() => setIsOpen(false), 180);
  };

  return (
    <div ref={containerRef} onMouseEnter={openNow} onMouseLeave={closeSoon} className="relative" onFocus={openNow} onBlur={closeSoon}>
      <button
        type="button"
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        aria-controls={menuId}
        aria-label="Seleccionar idioma"
        onClick={() => setIsOpen((open) => !open)}
        className="flex cursor-pointer items-center gap-2 text-sm font-semibold uppercase tracking-wide text-text transition-colors duration-100"
      >
        {selectedLang === "es" ? "Español" : "English"}
        <FlagIcon code={selectedLang} className="h-4.5 w-4.5 rounded-full" />
        <i
          className={`fa-solid fa-chevron-down text-[0.625rem] transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
          aria-hidden="true"
        />
      </button>
      <ul
        id={menuId}
        role="listbox"
        aria-activedescendant={selectedLang}
        className={`absolute right-0 z-10 mt-1 w-max origin-top-right rounded-lg border border-border bg-background py-1 text-sm font-semibold uppercase tracking-wide text-text shadow-lg transition-all duration-200 ${
          isOpen ? "scale-100 opacity-100" : "pointer-events-none scale-95 opacity-0"
        }`}
      >
        <li id="es" role="option">
          <button
            type="button"
            role="option"
            aria-label="Español"
            aria-selected={selectedLang === "es"}
            onClick={() => selectLang("es")}
            className={`flex cursor-pointer items-center gap-2 px-3 py-1.5 hover:bg-accent/20 ${selectedLang === "es" ? "bg-accent/20 font-semibold" : "hover:bg-black/5"}`}
          >
            ESPAÑOL
            <FlagIcon code="es" className="h-4.5 w-4.5 rounded-full" />
          </button>
        </li>
        <li id="en" role="option">
          <button
            type="button"
            role="option"
            aria-label="English"
            aria-selected={selectedLang === "en"}
            onClick={() => selectLang("en")}
            className={`flex cursor-pointer items-center gap-2 px-3 py-1.5 hover:bg-accent/20 ${selectedLang === "en" ? "bg-accent/20 font-semibold" : "hover:bg-black/5"}`}
          >
            ENGLISH
            <FlagIcon code="en" className="h-4.5 w-4.5 rounded-full" />
          </button>
        </li>
      </ul>
    </div>
  );
}
