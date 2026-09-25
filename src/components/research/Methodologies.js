"use client";

import { useRef } from "react";
import { useGsap } from "@/lib/gsap";
import { methodologies } from "@/data/pages";
import { Icon, SectionHeading } from "../ui";

export default function Methodologies() {
  const ref = useRef(null);
  useGsap(ref);

  return (
    <section id="methods" ref={ref} className="section-y relative overflow-hidden bg-offwhite">
      <div className="bg-grid pointer-events-none absolute inset-0 [mask-image:linear-gradient(to_top,black,transparent_60%)]" />
      <div className="container-x relative">
        <SectionHeading
          align="center"
          eyebrow="Research Approach"
          title="Methods Matched to Every Question"
          text="We choose the design that answers your question best — not the one that's easiest to run."
        />

        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {methodologies.map((m, i) => (
            <article
              key={m.title}
              data-reveal="up"
              className="group relative overflow-hidden rounded-[1.75rem] border border-line bg-white p-7 shadow-soft transition-all duration-500 hover:-translate-y-2 hover:shadow-lift"
            >
              <span className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-linear-to-r from-cyan to-royal transition-transform duration-700 group-hover:scale-x-100" />
              <span className="font-display text-6xl font-extrabold text-mist transition-colors duration-500 group-hover:text-cyan/25">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="mt-4 grid h-12 w-12 place-items-center rounded-2xl bg-navy text-cyan transition-transform duration-500 group-hover:rotate-[-8deg]">
                <Icon name={m.icon} className="h-5 w-5" />
              </span>
              <h3 className="mt-6 text-lg font-bold">{m.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate">{m.text}</p>
              <div className="mt-6 flex flex-wrap gap-1.5">
                {m.tags.map((t) => (
                  <span key={t} className="rounded-full bg-mist px-2.5 py-1 text-[11px] font-semibold text-royal">{t}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
