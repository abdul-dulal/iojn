import Image from "next/image";
import { ArrowUpRight, GraduationCap, Mail, Quote } from "lucide-react";
import { BrandIcon } from "./ui";

function ProfileLinks({ member, light = false }) {
  const base = light
    ? "border-white/20 bg-white/10 text-white hover:bg-white hover:text-navy"
    : "border-line bg-white text-navy hover:border-navy hover:bg-navy hover:text-white";
  const links = [
    { href: member.links.linkedin, label: "LinkedIn", icon: <BrandIcon name="LinkedIn" className="h-3.5 w-3.5" /> },
    { href: member.links.scholar, label: "Google Scholar", icon: <GraduationCap className="h-4 w-4" /> },
    { href: member.links.email, label: "Email", icon: <Mail className="h-4 w-4" /> },
  ];
  return (
    <div className="flex gap-2">
      {links.map((l) => (
        <a
          key={l.label}
          href={l.href}
          aria-label={`${member.name} on ${l.label}`}
          className={`grid h-9 w-9 place-items-center rounded-full border backdrop-blur transition-all duration-300 hover:-translate-y-0.5 ${base}`}
        >
          {l.icon}
        </a>
      ))}
    </div>
  );
}

/** Editorial portrait card: tall rectangular photo, details revealed on hover / focus / touch. */
export default function TeamCard({ member, index, sizes = "(min-width: 1024px) 25vw, (min-width: 640px) 45vw, 92vw" }) {
  return (
    <article className="group relative">
      <div className="relative aspect-[4/5] overflow-hidden rounded-[1.5rem] bg-mist">
        <Image
          src={member.image}
          alt={`Portrait of ${member.name}`}
          fill
          sizes={sizes}
          className="object-cover grayscale-[0.55] transition-all duration-[900ms] ease-out group-focus-within:scale-105 group-focus-within:grayscale-0 group-hover:scale-105 group-hover:grayscale-0"
        />

        {/* Hover veil */}
        <div className="absolute inset-0 bg-linear-to-t from-navy via-navy/55 to-transparent opacity-0 transition-opacity duration-500 group-focus-within:opacity-100 group-hover:opacity-100 pointer-coarse:opacity-70" />

        {/* Top meta */}
        <div className="absolute inset-x-4 top-4 flex items-start justify-between">
          <span className="rounded-full bg-white/85 px-2.5 py-1 font-display text-[11px] font-bold text-navy backdrop-blur">
            {String(index + 1).padStart(2, "0")}
          </span>
          <span className="rounded-full border border-white/40 bg-navy/40 px-3 py-1 text-[11px] font-semibold text-white backdrop-blur">
            {member.dept}
          </span>
        </div>

        {/* Revealed details */}
        <div className="absolute inset-x-0 bottom-0 translate-y-6 p-5 opacity-0 transition-all duration-500 ease-out group-focus-within:translate-y-0 group-focus-within:opacity-100 group-hover:translate-y-0 group-hover:opacity-100 pointer-coarse:translate-y-0 pointer-coarse:opacity-100">
          <div className="mb-4 flex flex-wrap gap-1.5">
            {member.focus.map((f) => (
              <span key={f} className="rounded-full bg-white/15 px-2.5 py-1 text-[11px] font-medium text-white backdrop-blur">
                {f}
              </span>
            ))}
          </div>
          <ProfileLinks member={member} light />
        </div>
      </div>

      <div className="mt-5 flex items-start justify-between gap-4">
        <div className="min-w-0">
          <h3 className="text-lg leading-tight font-bold text-navy">{member.name}</h3>
          <p className="mt-1 text-sm font-semibold text-teal">{member.role}</p>
          <p className="mt-2.5 text-sm leading-relaxed text-slate">{member.expertise}</p>
        </div>
        <a
          href={member.links.linkedin}
          aria-label={`View ${member.name}'s profile`}
          className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-line text-navy transition-all duration-500 group-hover:rotate-45 group-hover:border-teal group-hover:bg-teal group-hover:text-white"
        >
          <ArrowUpRight className="h-4 w-4" />
        </a>
      </div>
    </article>
  );
}

/** Wide spotlight for the lead member. */
export function FeaturedMember({ member }) {
  return (
    <article className="grid overflow-hidden rounded-[2rem] border border-line bg-white shadow-lift lg:grid-cols-[0.9fr_1.1fr]">
      <div data-reveal="img" className="group relative min-h-[26rem] overflow-hidden bg-mist">
        <Image
          src={member.image}
          alt={`Portrait of ${member.name}`}
          fill
          sizes="(min-width: 1024px) 40vw, 92vw"
          className="object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-linear-to-t from-navy/60 via-transparent to-transparent" />
        <span className="absolute bottom-5 left-5 rounded-full bg-white/90 px-3 py-1.5 text-xs font-semibold text-navy backdrop-blur">
          {member.credentials}
        </span>
      </div>

      <div className="relative flex flex-col justify-center p-8 sm:p-12 lg:p-14">
        <span className="absolute top-8 right-8 hidden font-display text-9xl leading-none font-extrabold text-mist select-none sm:block" aria-hidden="true">
          01
        </span>
        <span data-reveal="up" className="eyebrow relative">Leadership Spotlight</span>
        <Quote data-reveal="up" className="relative mt-8 h-9 w-9 text-teal" />
        <blockquote data-reveal="up" className="relative mt-4 font-display text-2xl leading-snug font-semibold text-navy sm:text-[1.75rem]">
          “{member.quote}”
        </blockquote>
        <div data-reveal="up" className="relative mt-10 flex flex-col gap-6 border-t border-line pt-8 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h3 className="text-2xl font-bold text-navy">{member.name}</h3>
            <p className="mt-1 font-semibold text-teal">{member.role}</p>
            <p className="mt-3 max-w-md text-sm leading-relaxed text-slate">{member.expertise}</p>
          </div>
          <ProfileLinks member={member} />
        </div>
      </div>
    </article>
  );
}
