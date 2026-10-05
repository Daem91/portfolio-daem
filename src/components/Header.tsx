import { useEffect, useRef, useState } from "react";
import { LanPicker } from "./ui/LanPicker";
import type { Lang } from "../i18n";
import { HeaderLogo } from "./ui/HeaderLogo";
import { ToggleMode } from "./ui/ToggleMode";

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
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [activeLink, setActiveLink] = useState<string>(links.some((link) => link.href === currentPath) ? currentPath : "");
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [indicator, setIndicator] = useState({ left: 0, width: 0, top: 0, height: 0 });
  const headerRef = useRef<HTMLElement>(null);
  const navListRef = useRef<HTMLUListElement>(null);
  const linkItemRefs = useRef(new Map<string, HTMLLIElement>());
  const displayedLink = hoveredLink ?? activeLink;

  useEffect(() => {
    setSelectedLang(lang);
  }, [lang]);

  useEffect(() => {
    const updateHeader = (): void => {
      setIsScrolled(window.scrollY > 10);
    };

    updateHeader(); // funciona si recargas la página a mitad del scroll.
    window.addEventListener("scroll", updateHeader, { passive: true });

    return () => window.removeEventListener("scroll", updateHeader);
  }, []);

  useEffect(() => {
    const desktopQuery = window.matchMedia("(min-width: 48rem)");
    const closeMobileMenu = (event: MediaQueryListEvent) => {
      if (event.matches) setIsMenuOpen(false);
    };

    desktopQuery.addEventListener("change", closeMobileMenu);
    return () => desktopQuery.removeEventListener("change", closeMobileMenu);
  }, []);

  useEffect(() => {
    const sections = links
      .map((link) => ({
        href: link.href,
        element: document.getElementById(link.href.slice(1)),
      }))
      .filter((section): section is { href: string; element: HTMLElement } => section.element !== null);

    const syncActiveLink = () => {
      const marker = (headerRef.current?.getBoundingClientRect().bottom ?? 0) + 24;
      let current = "";

      for (const section of sections) {
        if (section.element.getBoundingClientRect().top <= marker) {
          current = section.href;
        } else {
          break;
        }
      }

      if (current) {
        setActiveLink(current);
      } else if (sections.length === 0) {
        const hash = window.location.hash;
        setActiveLink(links.some((link) => link.href === hash) ? hash : "");
      } else if (window.scrollY <= 0) {
        setActiveLink("");
      }
    };

    let frame = 0;
    const scheduleSync = () => {
      window.cancelAnimationFrame(frame);
      frame = window.requestAnimationFrame(syncActiveLink);
    };

    window.addEventListener("scroll", scheduleSync, { passive: true });
    window.addEventListener("resize", scheduleSync);
    window.addEventListener("hashchange", scheduleSync);
    scheduleSync();

    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener("scroll", scheduleSync);
      window.removeEventListener("resize", scheduleSync);
      window.removeEventListener("hashchange", scheduleSync);
    };
  }, [links]);

  useEffect(() => {
    const list = navListRef.current;
    const item = displayedLink ? linkItemRefs.current.get(displayedLink) : null;

    if (!list || !item) {
      setIndicator({ left: 0, width: 0, top: 0, height: 0 });
      return;
    }

    const updateIndicator = () => {
      setIndicator({
        left: item.offsetLeft,
        width: item.offsetWidth,
        top: item.offsetTop,
        height: item.offsetHeight,
      });
    };

    updateIndicator();
    const resizeObserver = new ResizeObserver(updateIndicator);
    resizeObserver.observe(list);

    return () => resizeObserver.disconnect();
  }, [displayedLink, links]);

  return (
    <header
      ref={headerRef}
      className={`sticky top-0 z-50 w-full border-0 bg-transparent text-text dark:text-cream
        transition-[padding,background-color] duration-300 ease-in-out
        ${isScrolled ? "bg-background/80 px-4 py-3 backdrop-blur-md sm:px-8 sm:py-4 lg:px-16 xl:px-48" : "px-4 py-4 sm:px-8 sm:py-6 lg:px-16 xl:px-48"}`}
    >
      <div className="container flex w-full items-center justify-between gap-3">
        <div className="flex min-w-0 items-center gap-3 md:gap-5">
          <HeaderLogo />
          {links.length > 0 && (
            <nav
              id="header-navigation"
              aria-label="Navegación principal"
              className={`absolute left-4 right-4 top-full z-20 rounded-2xl border border-border bg-surface p-2 shadow-lg transition-[opacity,transform] duration-200 md:static md:block md:rounded-full md:p-1.5 md:shadow-none ${
                isMenuOpen
                  ? "visible translate-y-2 opacity-100 md:translate-y-0 md:opacity-100"
                  : "invisible -translate-y-1 opacity-0 md:visible md:translate-y-0 md:opacity-100"
              }`}
            >
              <ul
                ref={navListRef}
                onMouseLeave={() => setHoveredLink(null)}
                onBlur={(event) => {
                  if (!event.currentTarget.contains(event.relatedTarget as Node | null)) {
                    setHoveredLink(null);
                  }
                }}
                className="relative isolate m-0 flex list-none flex-col items-stretch gap-1 p-0 uppercase font-semibold tracking-wide md:flex-row md:items-center"
              >
                <span
                  aria-hidden="true"
                  className={`pointer-events-none absolute inset-y-0 rounded-full bg-accent shadow-sm transition-[left,width,opacity] duration-300 ease-out ${
                    displayedLink ? "opacity-100" : "opacity-0"
                  }`}
                  style={{
                    left: indicator.left,
                    width: indicator.width,
                    top: indicator.top,
                    height: indicator.height,
                  }}
                />
                {links.map((link: HeaderLink) => (
                  <li
                    key={link.href}
                    className="w-full md:w-auto"
                    ref={(node) => {
                      if (node) {
                        linkItemRefs.current.set(link.href, node);
                      } else {
                        linkItemRefs.current.delete(link.href);
                      }
                    }}
                  >
                    <a
                      href={link.href}
                      aria-current={activeLink === link.href ? "location" : undefined}
                      onMouseEnter={() => setHoveredLink(link.href)}
                      onFocus={() => setHoveredLink(link.href)}
                      onClick={() => {
                        setActiveLink(link.href);
                        setIsMenuOpen(false);
                      }}
                      className={`relative z-10 block rounded-xl px-4 py-3 text-sm no-underline transition-colors duration-200 focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-accent md:rounded-full md:px-3 md:py-2 ${
                        displayedLink === link.href ? "text-cream" : "text-text hover:text-accent"
                      }`}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          )}
        </div>
        <div className="flex shrink-0 items-center gap-2 sm:gap-3">
          <ToggleMode />
          <LanPicker lang={selectedLang} onLanguageChange={onLanguageChange} />
          {links.length > 0 && (
            <button
              type="button"
              aria-label={isMenuOpen ? "Cerrar navegación" : "Abrir navegación"}
              aria-expanded={isMenuOpen}
              aria-controls="header-navigation"
              onClick={() => setIsMenuOpen((open) => !open)}
              className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-border bg-surface text-text transition-colors hover:bg-surface-alt hover:text-accent focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent md:hidden"
            >
              <i className={`fa-solid ${isMenuOpen ? "fa-xmark" : "fa-bars"} text-sm`} aria-hidden="true" />
            </button>
          )}
        </div>
      </div>
    </header>
  );
}
