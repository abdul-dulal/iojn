"use client";

import { useRef } from "react";
import Image from "next/image";
import { ChevronRight } from "lucide-react";
import { gsap, useGsap, prefersReducedMotion } from "@/lib/gsap";
import { team } from "@/data/site";

const stats = [
  { value: "25+", label: "Researchers & experts" },
  { value: "12", label: "Disciplines" },
  { value: "8", label: "Countries represented" },
];

export default function TeamHero() {
  const ref = useRef(null);
  const strips = [team[1], team[0], team[3]];

  useGsap(ref, (scope) => {
    if (prefersReducedMotion()) return;
    const q = gsap.utils.selector(scope);
    gsap.set(q(".team-line > span"), { visibility: "visible" });
    gsap.from(q(".team-line > span"), { yPercent: 110, duration: 1.2, stagger: 0.12, ease: "power4.out", delay: 0.1 });
    gsap.fromTo(
      q("[data-strip]"),
      { clipPath: "inset(100% 0 0 0 round 24px)" },
      { clipPath: "inset(0% 0 0 0 round 24px)", duration: 1.4, stagger: 0.15, ease: "expo.out", delay: 0.2 }
    );
    q("[data-strip]").forEach((el, i) =>
      gsap.to(el, {
        yPercent: [-8, 6, -4][i],
        ease: "none",
        scrollTrigger: { trigger: scope, start: "top top", end: "bottom top", scrub: true },
      })
    );
  });

  return (
    <section ref={ref} className="relative overflow-hidden bg-offwhite pt-32 pb-20 sm:pt-40 lg:pb-28">
      <div className="bg-grid pointer-events-none absolute inset-0 [mask-image:radial-gradient(ellipse_at_top_left,black_25%,transparent_70%)]" />
      <div className="absolute -top-40 right-0 h-[30rem] w-[30rem] rounded-full bg-cyan/20 blur-[120px]" />

      <div className="container-x relative grid items-center gap-16 lg:grid-cols-[1.1fr_1fr]">
        <div>
          <nav aria-label="Breadcrumb" data-reveal="up" className="flex items-center gap-1.5 text-sm text-slate">
            <a href="/" className="transition-colors hover:text-navy">Home</a>
            <ChevronRight className="h-3.5 w-3.5" />
            <span className="font-medium text-navy">Our Team</span>
          </nav>

          <h1 className="mt-6 font-display text-5xl leading-[1.02] font-extrabold tracking-tight text-navy sm:text-6xl lg:text-7xl">
            <span className="team-line block overflow-hidden pb-1"><span className="block">People Behind</span></span>
            <span className="team-line block overflow-hidden pb-2"><span className="text-gradient block">the Research</span></span>
          </h1>

          <p data-reveal="up" className="lead mt-7 max-w-xl">
            Meet the scientists, statisticians, editors and coordinators who turn research questions into
            credible, published and impactful evidence.
          </p>

          <dl data-reveal="up" className="mt-12 grid max-w-lg grid-cols-3 divide-x divide-line border-y border-line">
            {stats.map((s) => (
              <div key={s.label} className="py-5 pr-4 pl-4 first:pl-0">
                <dt className="sr-only">{s.label}</dt>
                <dd className="font-display text-3xl font-extrabold text-navy sm:text-4xl">{s.value}</dd>
                <dd className="mt-1 text-xs leading-snug text-slate sm:text-sm">{s.label}</dd>
              </div>
            ))}
          </dl>
        </div>

        {/* Editorial portrait strips */}
        <div className="relative grid h-[26rem] grid-cols-3 gap-3 sm:h-[32rem] sm:gap-4">
          {strips.map((m, i) => (
            <div
              key={m.name}
              data-strip
              className={`relative overflow-hidden rounded-3xl bg-mist shadow-lift ${["mt-12", "", "mt-20"][i]} ${["mb-6", "mb-14", ""][i]}`}
            >
              <Image src={m.image} alt={`Portrait of ${m.name}`} fill preload={i === 1} sizes="(min-width: 1024px) 15vw, 30vw" className="object-cover" />
              <div className="absolute inset-0 bg-linear-to-t from-navy/70 via-transparent to-transparent" />
              <p className="absolute inset-x-3 bottom-3 text-[11px] leading-tight font-semibold text-white sm:text-xs">
                {m.name}
                <span className="block font-normal text-white/70">{m.dept}</span>
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
