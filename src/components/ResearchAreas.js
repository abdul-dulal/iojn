"use client";

import { useRef } from "react";
import { ArrowUpRight } from "lucide-react";
import { useGsap } from "@/lib/gsap";
import { researchAreas } from "@/data/site";
import { Icon, SectionHeading } from "./ui";

export default function ResearchAreas() {
  const ref = useRef(null);
  useGsap(ref);

  return (
    <section id="research" ref={ref} className="section-y relative overflow-hidden bg-offwhite">
      <div className="bg-grid pointer-events-none absolute inset-0 [mask-image:linear-gradient(to_bottom,black,transparent_60%)]" />
      <div className="container-x relative">
        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <SectionHeading
            eyebrow="Our Research Focus"
            title="Research Areas Where We Create Lasting Impact"
          />
          <p data-reveal="up" className="lead max-w-md lg:pb-2">
            Six interconnected focus areas guide our work — each grounded in evidence and aimed at
            measurable improvements for people and the planet.
          </p>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:mt-16 lg:grid-cols-3">
          {researchAreas.map((a, i) => (
            <a
              key={a.title}
              href="/research"
              data-reveal="up"
              className="group relative flex flex-col overflow-hidden rounded-3xl border border-line bg-white p-7 shadow-soft transition-all duration-500 hover:-translate-y-1.5 hover:border-transparent hover:shadow-lift sm:p-8"
            >
              {/* hover gradient wash */}
              <span className="absolute inset-0 bg-brand-gradient opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              <span className="absolute -top-20 -right-20 h-48 w-48 rounded-full bg-cyan/30 opacity-0 blur-3xl transition-opacity duration-700 group-hover:opacity-100" />

              <div className="relative flex items-start justify-between">
                <span className="grid h-14 w-14 place-items-center rounded-2xl bg-mist text-royal transition-all duration-500 group-hover:bg-white/15 group-hover:text-white">
                  <Icon name={a.icon} className="h-6 w-6" strokeWidth={1.75} />
                </span>
                <span className="font-display text-sm font-bold text-slate/50 transition-colors duration-500 group-hover:text-white/60">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>

              <h3 className="relative mt-8 text-xl font-bold transition-colors duration-500 group-hover:text-white">
                {a.title}
              </h3>
              <p className="relative mt-3 flex-1 text-[15px] leading-relaxed text-slate transition-colors duration-500 group-hover:text-white/75">
                {a.text}
              </p>

              <span className="relative mt-8 inline-flex items-center gap-2 text-sm font-semibold text-royal transition-colors duration-500 group-hover:text-cyan">
                Learn more
                <span className="grid h-8 w-8 place-items-center rounded-full border border-current/20 transition-transform duration-500 group-hover:rotate-45">
                  <ArrowUpRight className="h-4 w-4" />
                </span>
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
