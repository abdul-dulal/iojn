"use client";

import { useRef } from "react";
import { ArrowRight } from "lucide-react";
import { useGsap } from "@/lib/gsap";
import { services } from "@/data/site";
import { Icon, SectionHeading } from "./ui";

export default function Services() {
  const ref = useRef(null);
  useGsap(ref);

  // Cursor-follow spotlight on each card
  const onMove = (e) => {
    const r = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty("--mx", `${e.clientX - r.left}px`);
    e.currentTarget.style.setProperty("--my", `${e.clientY - r.top}px`);
  };

  return (
    <section id="services" ref={ref} className="section-y relative bg-white">
      <div className="container-x">
        <SectionHeading
          align="center"
          eyebrow="Our Services"
          title={
            <>
              Research Support <span className="text-gradient">From Idea to Publication</span>
            </>
          }
          text="Comprehensive, expert-led services that meet you wherever you are in the research lifecycle."
        />

        <div className="mt-16 grid gap-px overflow-hidden rounded-[2rem] border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <article
              key={s.title}
              data-reveal="fade"
              onMouseMove={onMove}
              className="group relative bg-white p-8 transition-colors duration-500 hover:bg-offwhite sm:p-10"
            >
              <span
                className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                style={{
                  background:
                    "radial-gradient(320px circle at var(--mx,50%) var(--my,50%), rgba(87,199,200,.14), transparent 70%)",
                }}
              />
              <div className="relative">
                <span className="relative grid h-14 w-14 place-items-center rounded-2xl bg-navy text-cyan shadow-soft transition-transform duration-500 group-hover:-translate-y-1 group-hover:rotate-[-6deg]">
                  <Icon name={s.icon} className="h-6 w-6" strokeWidth={1.75} />
                </span>
                <h3 className="mt-7 text-xl font-bold">{s.title}</h3>
                <p className="mt-3 text-[15px] leading-relaxed text-slate">{s.text}</p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {s.tags.map((t) => (
                    <span key={t} className="rounded-full bg-mist px-3 py-1 text-xs font-medium text-royal">
                      {t}
                    </span>
                  ))}
                </div>
                <a href="#contact" className="link-arrow mt-8">
                  Request this service <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
