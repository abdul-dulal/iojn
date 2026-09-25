import {
  Atom, Award, BookOpen, Building2, ChartColumn, Circle, ClipboardList, Cpu, Database, Globe,
  GraduationCap, HeartPulse, Leaf, Lightbulb, Microscope, PenTool, Search, Send, ShieldCheck, Users,
} from "lucide-react";

const icons = {
  Atom, Award, BookOpen, Building2, ChartColumn, ClipboardList, Cpu, Database, Globe,
  GraduationCap, HeartPulse, Leaf, Lightbulb, Microscope, PenTool, Search, Send, ShieldCheck, Users,
};

/** Renders a lucide icon by name (keeps data files serialisable). */
export function Icon({ name, ...props }) {
  const Cmp = icons[name] || Circle;
  return <Cmp aria-hidden="true" {...props} />;
}

export function SectionHeading({ eyebrow, title, text, align = "left", dark = false, className = "" }) {
  const centered = align === "center";
  return (
    <div className={`${centered ? "mx-auto max-w-3xl text-center" : "max-w-2xl"} ${className}`}>
      {eyebrow && (
        <span data-reveal="up" className={`eyebrow ${dark ? "text-cyan" : ""}`}>
          {eyebrow}
        </span>
      )}
      <h2 data-reveal="up" className={`heading-lg mt-4 ${dark ? "text-white" : ""}`}>
        {title}
      </h2>
      {text && (
        <p data-reveal="up" className={`lead mt-5 ${dark ? "text-white/65" : ""}`}>
          {text}
        </p>
      )}
    </div>
  );
}

export function Logo({ light = false, compact = false }) {
  return (
    <a href="#home" className="group flex items-center gap-3" aria-label="IOJN home">
      <span className="relative grid h-10 w-10 shrink-0 place-items-center overflow-hidden rounded-xl bg-brand-gradient shadow-glow transition-transform duration-500 group-hover:rotate-[8deg]">
        <svg viewBox="0 0 32 32" className="h-6 w-6" fill="none" aria-hidden="true">
          <circle cx="16" cy="16" r="10" stroke="white" strokeOpacity=".35" strokeWidth="1.5" />
          <ellipse cx="16" cy="16" rx="10" ry="4" stroke="white" strokeOpacity=".6" strokeWidth="1.5" transform="rotate(-35 16 16)" />
          <circle cx="16" cy="16" r="3" fill="white" />
          <circle cx="24.5" cy="10" r="1.8" fill="#57C7C8" />
          <circle cx="7.5" cy="22" r="1.4" fill="#57C7C8" />
        </svg>
      </span>
      <span className="flex flex-col leading-none">
        <span className={`font-display text-xl font-extrabold tracking-tight ${light ? "text-white" : "text-navy"}`}>
          IOJN
        </span>
        {!compact && (
          <span className={`mt-1 text-[10px] font-medium tracking-[0.14em] uppercase ${light ? "text-white/55" : "text-slate"}`}>
            Research Network
          </span>
        )}
      </span>
    </a>
  );
}

// Brand icons (lucide v1 no longer ships brand marks)
const brandPaths = {
  LinkedIn:
    "M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.22 8h4.56v14H.22V8zm7.5 0h4.37v1.92h.06c.61-1.15 2.1-2.37 4.32-2.37 4.62 0 5.47 3.04 5.47 7v7.45h-4.56v-6.6c0-1.58-.03-3.6-2.2-3.6-2.2 0-2.53 1.72-2.53 3.49V22H7.72V8z",
  Facebook:
    "M13.5 22v-8.2h2.77l.41-3.2H13.5V8.56c0-.93.26-1.56 1.59-1.56h1.7V4.14A22.6 22.6 0 0 0 14.31 4c-2.46 0-4.14 1.5-4.14 4.25v2.35H7.4v3.2h2.77V22h3.33z",
  X: "M17.75 3h3.07l-6.7 7.66L22 21h-6.17l-4.83-6.32L5.47 21H2.4l7.17-8.2L2 3h6.33l4.37 5.78L17.75 3zm-1.08 16.2h1.7L7.4 4.73H5.58L16.67 19.2z",
  YouTube:
    "M23.5 6.2a3 3 0 0 0-2.1-2.12C19.53 3.58 12 3.58 12 3.58s-7.53 0-9.4.5A3 3 0 0 0 .5 6.2 31.3 31.3 0 0 0 0 12a31.3 31.3 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.12c1.87.5 9.4.5 9.4.5s7.53 0 9.4-.5a3 3 0 0 0 2.1-2.12A31.3 31.3 0 0 0 24 12a31.3 31.3 0 0 0-.5-5.8zM9.6 15.57V8.43L15.82 12 9.6 15.57z",
};

export function SocialLinks({ className = "" }) {
  return (
    <div className={`flex gap-2.5 ${className}`}>
      {Object.entries(brandPaths).map(([name, d]) => (
        <a
          key={name}
          href="#"
          aria-label={name}
          className="grid h-10 w-10 place-items-center rounded-full border border-white/10 bg-white/5 text-white/70 transition-all duration-300 hover:-translate-y-0.5 hover:border-cyan/50 hover:bg-cyan/10 hover:text-cyan"
        >
          <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden="true">
            <path d={d} />
          </svg>
        </a>
      ))}
    </div>
  );
}
