interface FooterLink {
  label: string;
  href: string;
  download?: boolean;
  icon?: string;
}

interface FooterMessages {
  name: string;
  role: string;
  navigation: string;
  social: string;
  navigationLinks: FooterLink[];
  socialLinks: FooterLink[];
  rights: string;
  madeWith: string;
}

export function Footer({ messages }: { messages: FooterMessages }) {
  return (
    <footer className="relative overflow-hidden bg-[#4e1420] text-cream">
      <div aria-hidden="true" className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-gold/70 to-transparent" />
      <div className="container px-5 pb-6 pt-12 sm:px-8 sm:pt-16 lg:px-12">
        <div className="grid grid-cols-2 gap-x-6 gap-y-8 sm:gap-x-10 lg:grid-cols-[1.5fr_1fr_1fr] lg:gap-16">
          <div className="col-span-2 flex items-center justify-center sm:justify-start lg:col-span-1">
            <div className="flex justify-center  flex-col gap-4">
              <div className="flex gap-4">
                <img src="/camandrea.png" alt="Logo artístico de Camila Rivera" className="h-16 w-16" />
                <div className="flex flex-col">
                  <a
                    href="#home"
                    className="inline-flex rounded-sm font-display text-2xl font-semibold tracking-tight transition-colors hover:text-gold focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold"
                  >
                    {messages.name}
                  </a>
                  <p className="max-w-xs text-sm leading-relaxed text-cream/75">{messages.role}</p>
                </div>
              </div>

              <div className="mt-12 hidden sm:flex flex-col gap-3 border-t border-cream/15 pt-5 text-xs text-cream/65 sm:flex-row sm:items-center sm:justify-center">
                <p>{messages.rights}</p>
              </div>
            </div>
          </div>

          <nav className="text-center sm:text-start" aria-label={messages.navigation}>
            <h2 className="text-xs font-bold uppercase tracking-[0.18em] text-gold">{messages.navigation}</h2>
            <ul className="mt-4 flex flex-col items-center gap-3 sm:items-start">
              {messages.navigationLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    download={link.download || undefined}
                    className="rounded-sm text-sm text-cream/80 transition-colors hover:text-cream focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="text-center sm:text-start">
            <h2 className="text-xs font-bold uppercase tracking-[0.18em] text-gold">{messages.social}</h2>
            <ul className="mt-4 flex flex-col items-center gap-3 sm:items-start">
              {messages.socialLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    target={link.href.startsWith("https://") ? "_blank" : undefined}
                    rel={link.href.startsWith("https://") ? "noopener noreferrer" : undefined}
                    className="inline-flex items-center gap-2 rounded-sm text-sm text-cream/80 transition-colors hover:text-cream focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold"
                  >
                    {link.icon && <i className={`${link.icon} text-base`} aria-hidden="true" />}
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
