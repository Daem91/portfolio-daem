interface HeroMessages {
  greeting: string;
  title: string;
  description: string;
  location: string;
  openToWork: string;
  available: string;
  primaryCta: string;
  secondaryCta: string;
  techStackLabel: string;
  techStack: string[];
  moveToOtherCities: string;
}

interface TechnologyStyle {
  icon: string;
  color: string;
}

const technologyStyles: Record<string, TechnologyStyle> = {
  React: { icon: "fa-brands fa-react", color: "text-sky-500" },
  TypeScript: { icon: "fa-brands fa-typescript", color: "text-blue-600" },
  Astro: { icon: "fa-solid fa-fire", color: "text-purple-500" },
  Fastify: { icon: "fa-solid fa-bolt", color: "text-amber-600" },
  PostgreSQL: { icon: "fa-brands fa-postgresql", color: "text-indigo-500" },
  "Tailwind CSS": { icon: "fa-brands fa-tailwind-css", color: "text-cyan-500" },
};

function PortraitIllustration() {
  return <img src="/images/daem-photo.webp" alt="Ilustración de Camila" className="rounded-full object-top" />;
}

export function Hero({ messages }: { messages: HeroMessages }) {
  return (
    <section id="home" className="relative isolate flex min-h-[calc(100svh-5rem)] w-full items-center overflow-hidden bg-background">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_78%_25%,rgb(201_166_107/0.20),transparent_33%),radial-gradient(ellipse_at_16%_65%,rgb(193_94_111/0.10),transparent_38%),linear-gradient(180deg,var(--color-background),var(--color-surface-alt)_62%,var(--color-background))] dark:bg-[radial-gradient(ellipse_at_78%_25%,rgb(201_166_107/0.10),transparent_33%),radial-gradient(ellipse_at_16%_65%,rgb(193_94_111/0.13),transparent_38%),linear-gradient(180deg,var(--color-background),var(--color-surface-alt)_62%,var(--color-background))]"
      />
      <div className="container flex flex-col gap-12 px-5 py-14 sm:px-8 sm:py-16 lg:px-16 lg:py-20">
        <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] xl:gap-16">
          <div className="max-w-2xl text-center lg:text-left">
            <p className="mb-4 text-sm font-semibold tracking-wide text-accent sm:text-base">{messages.greeting}</p>
            <h1 className="text-h1 font-bold tracking-tight text-text lg:text-5xl xl:text-6xl">{messages.title}</h1>
            <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-text-secondary sm:text-lg lg:mx-0">{messages.description}</p>

            <div className="mt-6 flex flex-wrap items-center justify-center gap-x-5 gap-y-3 text-sm text-text-secondary lg:justify-start">
              <span className="inline-flex items-center gap-2">
                <i className="fa-solid fa-location-dot text-accent" aria-hidden="true" />
                {messages.location}
              </span>
              <span className="inline-flex items-center gap-2">
                <i className="fa-solid fa-briefcase text-accent" aria-hidden="true" />
                {messages.moveToOtherCities}
              </span>
            </div>

            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row lg:justify-start">
              <a
                href="#projects"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-cream shadow-soft transition-all duration-200 hover:-translate-y-0.5 hover:bg-accent-hover hover:shadow-hover focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
              >
                {messages.primaryCta}
                <i className="fa-solid fa-arrow-right text-xs" aria-hidden="true" />
              </a>
              <a
                href="/cv/cv_camila_andrea_rivera.pdf"
                download
                className="inline-flex items-center justify-center gap-2 rounded-full border border-border bg-surface/75 px-6 py-3 text-sm font-semibold text-text shadow-sm backdrop-blur transition-all duration-200 hover:-translate-y-0.5 hover:border-accent/30 hover:bg-surface hover:text-accent focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
              >
                <i className="fa-solid fa-download text-xs" aria-hidden="true" />
                {messages.secondaryCta}
              </a>
            </div>
          </div>

          <div className="relative mx-auto flex aspect-square w-[min(74vw,25rem)] items-center justify-center lg:w-[min(38vw,27rem)]">
            <div
              aria-hidden="true"
              className="absolute inset-[8%] rounded-full bg-[radial-gradient(circle,rgb(201_166_107/0.34),rgb(193_94_111/0.12)_55%,transparent_72%)] blur-2xl"
            />
            <i
              aria-hidden="true"
              className="fa-solid fa-cloud absolute left-[-7%] top-[18%] z-20 text-5xl text-white/75 drop-shadow-sm dark:text-white/15 sm:text-6xl"
            />
            <i
              aria-hidden="true"
              className="fa-solid fa-cloud absolute right-[-8%] bottom-[15%] z-20 text-6xl text-white/80 drop-shadow-sm dark:text-white/15 sm:text-7xl"
            />
            <div className="absolute inset-[5%] rounded-full border border-white/70 bg-white/25 shadow-[inset_8px_8px_24px_rgb(255_255_255/0.55),0_20px_60px_rgb(110_30_43/0.12)] backdrop-blur-sm dark:border-white/10 dark:bg-white/3 dark:shadow-[inset_8px_8px_24px_rgb(255_255_255/0.04),0_20px_60px_rgb(0_0_0/0.2)]" />
            <div className="relative aspect-square w-[82%] overflow-hidden rounded-full border-[6px] border-white/80 bg-[#f7e6d6] shadow-[0_18px_55px_rgb(110_30_43/0.18)] dark:border-white/10">
              <PortraitIllustration />
            </div>
            <div className="absolute -bottom-1 right-0 z-30 flex max-w-60 items-center gap-3 rounded-image border border-white/80 bg-surface/90 px-4 py-3 shadow-[0_12px_32px_rgb(110_30_43/0.14)] backdrop-blur-md dark:border-white/10 sm:right-[-4%]">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-accent/10 text-accent">
                <i className="fa-solid fa-cloud" aria-hidden="true" />
              </span>
              <span className="min-w-0">
                <span className="block text-[0.625rem] font-bold uppercase tracking-[0.16em] text-text-secondary">{messages.openToWork}</span>
                <span className="mt-1 flex items-center gap-2 text-xs font-semibold text-text sm:text-sm">
                  <span className="pulse-dot h-2 w-2 shrink-0 rounded-full bg-available" aria-hidden="true" />
                  {messages.available}
                </span>
              </span>
            </div>
          </div>
        </div>

        <div className="border-t border-border/80 pt-6">
          <p className="mb-4 text-center text-xs font-semibold uppercase tracking-[0.18em] text-text-secondary sm:text-left">
            {messages.techStackLabel}
          </p>
          <ul
            aria-label={messages.techStackLabel}
            className="m-0 flex list-none flex-wrap items-center justify-center gap-3 p-0 sm:gap-4 lg:justify-start"
          >
            {messages.techStack.map((technology) => {
              const style = technologyStyles[technology] ?? {
                icon: "fa-solid fa-code",
                color: "text-accent",
              };

              return (
                <li key={technology}>
                  <span className="inline-flex items-center gap-2.5 rounded-2xl border border-white/80 bg-surface/65 px-4 py-3 text-sm font-semibold text-text shadow-[5px_5px_16px_rgb(110_30_43/0.08),inset_1px_1px_0_rgb(255_255_255/0.8)] backdrop-blur-md transition-all duration-200 hover:-translate-y-0.5 hover:border-accent/20 hover:shadow-soft dark:border-white/10 dark:shadow-[5px_5px_16px_rgb(0_0_0/0.18),inset_1px_1px_0_rgb(255_255_255/0.04)]">
                    <i className={`${style.icon} ${style.color} text-base`} aria-hidden="true" />
                    {technology}
                  </span>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
