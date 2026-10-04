import { useEffect, useState } from "react";
import { LanPicker } from "./ui/LanPicker";
import type { Lang } from "../i18n";
import { HeaderLogo } from "./ui/HeaderLogo";

interface HeaderLink {
  href: string;
  label: string;
}

interface HeaderProps {
  links: HeaderLink[];
  currentPath: string;
  lang: Lang;
  onLanguageChange: (lang: Lang) => void;
}

export function Header(props: HeaderProps) {
  const { links, currentPath, lang, onLanguageChange } = props;
  const [selectedLang, setSelectedLang] = useState<Lang>(lang);
  const [listLinks, setListLinks] = useState<HeaderLink[]>(links);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  useEffect(() => {
    setSelectedLang(lang);
    setListLinks(links);
  }, [lang]);

  useEffect(() => {
    const updateHeader = (): void => {
      setIsScrolled(window.scrollY > 10);
    };

    updateHeader(); // funciona si recargas la página a mitad del scroll.
    window.addEventListener("scroll", updateHeader, { passive: true });

    return () => window.removeEventListener("scroll", updateHeader);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full border-b text-dark
        transition-[padding,background-color,border-color,box-shadow] duration-300 ease-in-out
        ${isScrolled ? "bg-white/20 px-12 py-4 shadow-sm backdrop-blur-md" : "bg-transparent border-transparent px-12 py-8"}`}
    >
      <div className="container w-full flex items-center justify-between">
        <HeaderLogo />
        {listLinks.length > 0 && (
          <nav>
            <ul className="m-0 flex uppercase font-semibold tracking-wide list-none items-center gap-6 p-0">
              {listLinks.map((link: HeaderLink) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    aria-current={currentPath === link.href ? "page" : undefined}
                    className={
                      currentPath === link.href
                        ? "text-sm font-semibold underline underline-offset-6 transition-colors"
                        : "text-sm no-underline transition-all duration-100 ease-in-out hover:underline hover:underline-offset-6"
                    }
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        )}
        <div className="flex items-center gap-4">
          <button className="text-lg cursor-pointer transition-all text-dark duration-100 ease-in-out hover:text-primary">
            <i className="fa-solid fa-magnifying-glass"></i>{" "}
          </button>
          <LanPicker lang={selectedLang} onLanguageChange={onLanguageChange} />
        </div>
      </div>
    </header>
  );
}
