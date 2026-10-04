import { useEffect, useState } from "react";

export function ToggleMode() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const darkModeMediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    setIsDarkMode(darkModeMediaQuery.matches);

    const handleChange = (event: MediaQueryListEvent) => {
      setIsDarkMode(event.matches);
    };

    darkModeMediaQuery.addEventListener("change", handleChange);

    return () => {
      darkModeMediaQuery.removeEventListener("change", handleChange);
    };
  }, []);

  return (
    <button
      type="button"
      aria-label="Toggle dark mode"
      onClick={() => {
        document.documentElement.classList.toggle("dark");
        setIsDarkMode(!isDarkMode);
      }}
      className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-border bg-surface text-primary transition-colors duration-150 hover:bg-surface-alt hover:text-primary-light focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-accent dark:text-cream sm:h-auto sm:w-auto sm:px-3.5 sm:py-3.5"
    >
      {isDarkMode ? <i className="fa-solid fa-sun"></i> : <i className="fa-solid fa-moon"></i>}
    </button>
  );
}
