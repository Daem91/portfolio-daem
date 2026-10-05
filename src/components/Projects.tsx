import { useEffect, useRef, useState } from "react";

type ProjectCategory = "web" | "ecommerce" | "mobile" | "backend" | "ui/ux" | "client" | "personal" | "freelance";
type ProjectFilter = "all" | ProjectCategory;

interface Project {
  id: string;
  estado: string;
  title: string;
  company: string;
  role: string;
  period: string;
  image?: string;
  link?: string;
  summary: string;
  responsibilities: string[];
  technologies: string[];
  categories: string[];
  icon?: string;
  theme: string;
}

interface ProjectMessages {
  title: string;
  subtitle: string;
  filters: Record<ProjectFilter, string>;
  labels: {
    viewProject: string;
    company: string;
    role: string;
    period: string;
    overview: string;
    myRole: string;
    technologies: string;
    inProgress: string;
    visitLink: string;
    close: string;
  };
  empty: string;
  items: Project[];
}

const filterOrder: ProjectFilter[] = ["all", "web", "ecommerce", "mobile", "backend", "ui/ux", "personal", "freelance", "client"];

function normalizeCategory(category: string): ProjectCategory | null {
  if (category === "frontend") return "web";
  if (category === "freelancer") return "freelance";
  return filterOrder.find((filter): filter is ProjectCategory => filter !== "all" && filter === category) ?? null;
}

function matchesFilter(project: Project, filter: ProjectFilter): boolean {
  return filter === "all" || project.categories.some((category) => normalizeCategory(category) === filter);
}

export function Projects({ messages }: { messages: ProjectMessages }) {
  const [activeFilter, setActiveFilter] = useState<ProjectFilter>("all");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const previouslyFocusedRef = useRef<HTMLElement | null>(null);

  const filteredProjects = messages.items.filter((project) => matchesFilter(project, activeFilter));

  useEffect(() => {
    if (!selectedProject) return;

    previouslyFocusedRef.current = document.activeElement instanceof HTMLElement ? document.activeElement : null;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setSelectedProject(null);
        return;
      }

      if (event.key !== "Tab") return;
      const dialog = document.getElementById("project-dialog");
      const focusableElements = dialog?.querySelectorAll<HTMLElement>('a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])');
      if (!focusableElements?.length) return;

      const first = focusableElements[0];
      const last = focusableElements[focusableElements.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", onKeyDown);
      previouslyFocusedRef.current?.focus();
    };
  }, [selectedProject]);

  return (
    <section id="projects" className="scroll-mt-24 bg-background px-5 py-20 sm:px-8 lg:scroll-mt-28 lg:px-12 lg:py-28">
      <div className="container">
        <header className="mb-10 max-w-2xl">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-accent">{messages.title}</p>
          <h2 className="text-h2 font-bold tracking-tight text-text">{messages.subtitle}</h2>
        </header>

        <div className="grid items-start gap-7 lg:grid-cols-[13rem_minmax(0,1fr)] xl:grid-cols-[15rem_minmax(0,1fr)] xl:gap-10">
          <aside
            aria-label={messages.title}
            style={{ scrollbarWidth: "none" }}
            className="sticky top-24 z-20 -mx-5 overflow-x-auto [&::-webkit-scrollbar]:hidden border-y border-border bg-background/95 px-5 py-3 backdrop-blur-md sm:-mx-8 sm:px-8 lg:top-28 lg:mx-0 lg:overflow-visible lg:border-0 lg:bg-transparent lg:p-0 lg:backdrop-blur-none"
          >
            <ul className="m-0 flex w-max list-none items-center gap-2 p-0 lg:w-full lg:flex-col lg:items-stretch lg:gap-1">
              {filterOrder.map((filter) => {
                const isActive = activeFilter === filter;
                const count =
                  filter === "all" ? messages.items.length : messages.items.filter((project) => matchesFilter(project, filter)).length;

                return (
                  <li key={filter}>
                    <button
                      type="button"
                      aria-pressed={isActive}
                      onClick={() => setActiveFilter(filter)}
                      className={`flex w-full cursor-pointer items-center justify-between gap-4 whitespace-nowrap rounded-full px-4 py-2.5 text-left text-sm font-medium transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent lg:rounded-xl ${
                        isActive ? "bg-accent text-cream shadow-soft" : "text-text-secondary hover:bg-surface-alt hover:text-text"
                      }`}
                    >
                      <span>{messages.filters[filter]}</span>
                      <span className={`text-xs tabular-nums ${isActive ? "text-cream/75" : "text-text-secondary/70"}`}>{count}</span>
                    </button>
                  </li>
                );
              })}
            </ul>
          </aside>

          <div aria-live="polite" className="min-w-0">
            {filteredProjects.length > 0 ? (
              <div className="grid gap-5 sm:grid-cols-2">
                {filteredProjects.map((project) => (
                  <article key={project.id} className="min-w-0">
                    <button
                      type="button"
                      onClick={() => setSelectedProject(project)}
                      aria-label={`${messages.labels.viewProject}: ${project.title}`}
                      className="group block h-full w-full cursor-pointer overflow-hidden rounded-card border border-border bg-surface text-left shadow-soft transition-all duration-200 hover:-translate-y-1 hover:border-accent/20 hover:shadow-hover focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
                    >
                      <div aria-hidden="true" className={`relative flex aspect-[1.55] items-center justify-center overflow-hidden ${project.theme}`}>
                        {project.image ? (
                          <img
                            src={project.image}
                            alt=""
                            className="absolute inset-4 h-[calc(100%-2rem)] w-[calc(100%-2rem)] rounded-2xl border border-white/40 bg-white/15 object-cover shadow-[inset_0_1px_0_rgb(255_255_255/0.4)] transition-transform duration-300 group-hover:scale-[1.03]"
                          />
                        ) : (
                          <span className="flex h-20 w-20 items-center justify-center rounded-3xl border border-white/50 bg-white/55 text-4xl text-accent shadow-[0_12px_30px_rgb(31_27_27/0.12)] backdrop-blur-md">
                            <i className={project.icon ?? "fa-solid fa-window-maximize"} />
                          </span>
                        )}
                        {project.estado === "in-progress" && (
                          <span className="absolute right-4 top-4 inline-flex items-center gap-2 rounded-full border border-white/70 bg-surface/90 px-3 py-1.5 text-xs font-semibold text-text shadow-soft backdrop-blur">
                            <span className="pulse-dot h-2 w-2 rounded-full bg-available" aria-hidden="true" />
                            {messages.labels.inProgress}
                          </span>
                        )}
                        <span className="absolute bottom-4 left-4 flex flex-wrap gap-1.5">
                          {project.categories.map(normalizeCategory).filter((category): category is ProjectCategory => category !== null).map((category) => (
                            <span
                              key={category}
                              className="rounded-full border border-white/50 bg-surface/75 px-3 py-1 text-xs font-semibold text-text backdrop-blur"
                            >
                              {messages.filters[category]}
                            </span>
                          ))}
                        </span>
                        <span className="absolute bottom-4 right-4 flex h-9 w-9 items-center justify-center rounded-full bg-accent text-cream opacity-0 shadow-soft transition-all duration-200 group-hover:translate-x-0.5 group-hover:opacity-100 group-focus-visible:opacity-100">
                          <i className="fa-solid fa-arrow-up-right-from-square text-xs" />
                        </span>
                      </div>

                      <div className="p-5 sm:p-6">
                        <p className="mb-2 text-xs font-semibold uppercase tracking-[0.14em] text-text-secondary">{project.company}</p>
                        <h3 className="text-xl font-bold tracking-tight text-text">{project.title}</h3>
                        <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-text-secondary">{project.summary}</p>
                        {project.technologies.length > 0 && (
                          <ul aria-label={messages.labels.technologies} className="mt-5 flex flex-wrap gap-2">
                            {project.technologies.slice(0, 3).map((technology) => (
                              <li key={technology} className="rounded-full bg-surface-alt px-2.5 py-1 text-[0.6875rem] font-medium text-text-secondary">
                                {technology}
                              </li>
                            ))}
                            {project.technologies.length > 3 && (
                              <li className="rounded-full bg-surface-alt px-2.5 py-1 text-[0.6875rem] font-medium text-text-secondary">
                                +{project.technologies.length - 3}
                              </li>
                            )}
                          </ul>
                        )}
                        <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-accent">
                          {messages.labels.viewProject}
                          <i className="fa-solid fa-arrow-right text-xs transition-transform group-hover:translate-x-1" />
                        </span>
                      </div>
                    </button>
                  </article>
                ))}
              </div>
            ) : (
              <div className="flex min-h-64 flex-col items-center justify-center rounded-card border border-dashed border-border bg-surface/50 px-6 py-12 text-center">
                <span className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-surface-alt text-text-secondary">
                  <i className="fa-solid fa-folder-open" aria-hidden="true" />
                </span>
                <p className="max-w-sm text-sm leading-relaxed text-text-secondary">{messages.empty}</p>
              </div>
            )}
          </div>
        </div>
      </div>

      {selectedProject && (
        <div
          className="fixed inset-0 z-100 flex items-end justify-center bg-ink/55 p-0 backdrop-blur-sm sm:items-center sm:p-6"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) setSelectedProject(null);
          }}
        >
          <section
            id="project-dialog"
            role="dialog"
            aria-modal="true"
            aria-labelledby="project-dialog-title"
            className="relative max-h-[92svh] w-full max-w-4xl overflow-y-auto rounded-t-modal border border-border bg-background shadow-modal sm:rounded-modal"
          >
            <div
              aria-hidden="true"
              className={`relative flex aspect-[2.2] min-h-40 items-center justify-center overflow-hidden sm:min-h-56 ${selectedProject.theme}`}
            >
              <span className="flex h-20 w-20 items-center justify-center rounded-3xl border border-white/50 bg-white/60 text-4xl text-accent shadow-soft backdrop-blur">
                <i className={selectedProject.icon ?? "fa-solid fa-window-maximize"} />
              </span>
              <button
                ref={closeButtonRef}
                type="button"
                aria-label={messages.labels.close}
                onClick={() => setSelectedProject(null)}
                className="absolute right-4 top-4 flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-white/60 bg-surface/85 text-text shadow-sm backdrop-blur transition-colors hover:bg-surface focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
              >
                <i className="fa-solid fa-xmark" aria-hidden="true" />
              </button>
            </div>

            <div className="space-y-8 p-6 sm:p-9">
              <header>
                <div className="mb-3 flex flex-wrap items-center gap-2">
                  {selectedProject.estado === "in-progress" && (
                    <span className="inline-flex items-center gap-2 rounded-full bg-available/10 px-3 py-1 text-xs font-semibold text-text">
                      <span className="pulse-dot h-2 w-2 rounded-full bg-available" aria-hidden="true" />
                      {messages.labels.inProgress}
                    </span>
                  )}
                  {selectedProject.categories.map(normalizeCategory).filter((category): category is ProjectCategory => category !== null).map((category) => (
                    <span key={category} className="rounded-full bg-accent/10 px-3 py-1 text-xs font-semibold text-accent">
                      {messages.filters[category]}
                    </span>
                  ))}
                </div>
                <h2 id="project-dialog-title" className="text-h2 font-bold tracking-tight text-text">
                  {selectedProject.title}
                </h2>
                <p className="mt-2 text-text-secondary">
                  {selectedProject.company} <span aria-hidden="true">·</span> {selectedProject.period}
                </p>
              </header>

              <dl className="grid gap-4 rounded-2xl border border-border bg-surface p-5 sm:grid-cols-2">
                <div>
                  <dt className="text-xs font-semibold uppercase tracking-[0.12em] text-text-secondary">{messages.labels.company}</dt>
                  <dd className="mt-1 font-medium text-text">{selectedProject.company}</dd>
                </div>
                <div>
                  <dt className="text-xs font-semibold uppercase tracking-[0.12em] text-text-secondary">{messages.labels.role}</dt>
                  <dd className="mt-1 font-medium text-text">{selectedProject.role}</dd>
                </div>
              </dl>

              <div>
                <h3 className="text-lg font-bold text-text">{messages.labels.overview}</h3>
                <p className="mt-2 leading-relaxed text-text-secondary">{selectedProject.summary}</p>
              </div>

              {selectedProject.responsibilities.length > 0 && (
                <div>
                  <h3 className="text-lg font-bold text-text">{messages.labels.myRole}</h3>
                  <ul className="mt-3 space-y-2">
                    {selectedProject.responsibilities.map((responsibility) => (
                      <li key={responsibility} className="flex gap-3 leading-relaxed text-text-secondary">
                        <i className="fa-solid fa-check mt-1 text-xs text-accent" aria-hidden="true" />
                        <span>{responsibility}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {selectedProject.technologies.length > 0 && (
                <div>
                  <h3 className="text-lg font-bold text-text">{messages.labels.technologies}</h3>
                  <ul className="mt-3 flex flex-wrap gap-2">
                    {selectedProject.technologies.map((technology) => (
                      <li key={technology} className="rounded-full border border-border bg-surface px-3 py-1.5 text-sm font-medium text-text shadow-sm">
                        {technology}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {selectedProject.link && (
                <a
                  href={selectedProject.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-accent px-5 py-3 text-sm font-semibold text-cream shadow-soft transition-colors hover:bg-accent/90 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
                >
                  {messages.labels.visitLink}
                  <i className="fa-solid fa-arrow-up-right-from-square text-xs" aria-hidden="true" />
                </a>
              )}
            </div>
          </section>
        </div>
      )}
    </section>
  );
}
