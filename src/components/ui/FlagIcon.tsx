import { useId } from "react";

export type FlagCode = "en" | "es";

interface FlagIconProps {
  code: FlagCode;
  className?: string;
  /** Se nombra al pais en el texto que lo acompaña, asi que por defecto es decorativa. */
  title?: string;
}

const FLAGS: Record<FlagCode, React.ReactNode> = {
  en: (
    <>
      <rect width={24} height={24} fill="#012169" />
      {/* Aspas blancas y, encima, las rojas mas finas */}
      <path d="M0 0 24 24M24 0 0 24" fill="none" stroke="#fff" strokeWidth={5} />
      <path d="M0 0 24 24M24 0 0 24" fill="none" stroke="#C8102E" strokeWidth={2.2} />
      {/* Cruz de San Jorge */}
      <path d="M12 0v24M0 12h24" fill="none" stroke="#fff" strokeWidth={7} />
      <path d="M12 0v24M0 12h24" fill="none" stroke="#C8102E" strokeWidth={4} />
    </>
  ),
  es: (
    <>
      <rect width={24} height={24} fill="#AA151B" />
      <rect y={6} width={24} height={12} fill="#F1BF00" />
    </>
  ),
};

export function FlagIcon({ code, className, title }: FlagIconProps) {
  const clipId = `flag-${useId().replace(/:/g, "")}`;

  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      role={title ? "img" : undefined}
      aria-hidden={title ? undefined : true}
      xmlns="http://www.w3.org/2000/svg"
    >
      {title && <title>{title}</title>}
      <clipPath id={clipId}>
        <circle cx={12} cy={12} r={12} />
      </clipPath>
      <g clipPath={`url(#${clipId})`}>{FLAGS[code]}</g>
      <circle cx={12} cy={12} r={11.5} fill="none" stroke="rgb(35 35 35 / 0.18)" strokeWidth={1} />
    </svg>
  );
}
