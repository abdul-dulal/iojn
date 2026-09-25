"use client";

import { useRef } from "react";
import { useGsap, animateCounters } from "@/lib/gsap";
import { achievements, partners } from "@/data/site";
import { Icon, SectionHeading } from "./ui";

function PartnerMark({ p }) {
  return (
    <div
      className="group/logo flex shrink-0 items-center gap-3 rounded-2xl border border-line bg-white px-6 py-4 grayscale transition-all duration-500 hover:-translate-y-0.5 hover:shadow-soft hover:grayscale-0"
      style={{ "--brand": p.color }}
    >
      <span className="grid h-10 w-10 place-items-center rounded-xl text-white opacity-60 transition-opacity duration-500 group-hover/logo:opacity-100" style={{ background: p.color }}>
        <Icon name={p.icon} className="h-5 w-5" />
      </span>
      <span className="font-display text-base font-bold whitespace-nowrap text-slate transition-colors duration-500 group-hover/logo:text-[var(--brand)]">
        {p.name}
      </span>
    </div>
  );
}

export default function Achievements() {
  const ref = useRef(null);
  useGsap(ref, animateCounters);

  return (
    <section ref={ref} className="section-y relative overflow-hidden bg-white">
      <div className="container-x">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.3fr] lg:items-center">
          <SectionHeading
            eyebrow="Our Achievements"
            title="A Track Record Built on Trust and Results"
            text="Since 2020 we have helped researchers and institutions deliver studies that inform policy, practice and future research."
          />
          <div className="grid grid-cols-2 gap-4 sm:gap-5">
            {achievements.map((a, i) => (
              <div
                key={a.label}
                data-reveal="scale"
                className={`relative overflow-hidden rounded-3xl p-6 sm:p-8 ${
                  i === 0 ? "bg-brand-gradient text-white shadow-lift" : "border border-line bg-offwhite"
                }`}
              >
                {i === 0 && <span className="absolute -right-10 -bottom-10 h-36 w-36 rounded-full bg-cyan/30 blur-2xl" />}
                <p className={`relative font-display text-4xl font-extrabold tracking-tight sm:text-5xl ${i === 0 ? "text-white" : "text-navy"}`}>
                  <span data-count={a.value}>{a.value}</span>
                  <span className={i === 0 ? "text-cyan" : "text-teal"}>{a.suffix}</span>
                </p>
                <p className={`relative mt-2 text-sm font-medium ${i === 0 ? "text-white/75" : "text-slate"}`}>{a.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Partner marquee */}
      <div className="mt-20 lg:mt-24">
        <p data-reveal="fade" className="px-5 text-center text-xs font-semibold tracking-[0.2em] text-slate uppercase">
          Collaborating with leading institutions worldwide
        </p>
        <div
          className="group relative mt-8 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]"
          aria-label="Partner organizations"
        >
          <div className="flex w-max animate-marquee py-2 group-hover:[animation-play-state:paused]">
            {[...partners, ...partners].map((p, i) => (
              <div key={i} className="pr-4" aria-hidden={i >= partners.length}>
                <PartnerMark p={p} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
