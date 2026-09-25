"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { CalendarDays, Users } from "lucide-react";
import { gsap, useGsap, prefersReducedMotion } from "@/lib/gsap";
import { projects } from "@/data/pages";
import { SectionHeading } from "../ui";

const filters = ["All", "Ongoing", "Completed"];

export default function ResearchProjects() {
  const ref = useRef(null);
  const [filter, setFilter] = useState("All");
  const list = filter === "All" ? projects : projects.filter((p) => p.status === filter);

  useGsap(ref, (scope) => {
    gsap.utils.toArray("[data-progress]", scope).forEach((bar) => {
      if (prefersReducedMotion()) return;
      gsap.from(bar, {
        scaleX: 0,
        duration: 1.6,
        ease: "power3.out",
        scrollTrigger: { trigger: bar, start: "top 92%", once: true },
      });
    });
  });

  return (
    <section id="projects" ref={ref} className="section-y relative bg-white">
      <div className="container-x">
        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <SectionHeading
            eyebrow="Featured Projects"
            title="Research Making a Difference"
            text="A selection of ongoing and completed studies led or supported by IOJN."
          />
          <div data-reveal="up" role="tablist" aria-label="Filter projects" className="flex gap-1 self-start rounded-full border border-line bg-offwhite p-1 lg:self-auto">
            {filters.map((f) => (
              <button
                key={f}
                type="button"
                role="tab"
                aria-selected={filter === f}
                onClick={() => setFilter(f)}
                className={`rounded-full px-5 py-2.5 text-sm font-semibold transition-all duration-300 ${
                  filter === f ? "bg-navy text-white shadow-soft" : "text-slate hover:text-navy"
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        <div data-reveal="up" className="mt-14 grid gap-6 md:grid-cols-2">
          {list.map((p) => (
            <article
              key={p.title}
              className="group flex flex-col overflow-hidden rounded-[2rem] border border-line bg-white shadow-soft transition-all duration-500 hover:-translate-y-1 hover:shadow-lift sm:flex-row"
            >
              <div className="relative aspect-[16/10] overflow-hidden sm:aspect-auto sm:w-[42%]">
                <Image src={p.image} alt="" fill sizes="(min-width: 768px) 22vw, 92vw" className="object-cover transition-transform duration-[1.2s] group-hover:scale-110" />
                <span
                  className={`absolute top-4 left-4 inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-bold backdrop-blur ${
                    p.status === "Ongoing" ? "bg-cyan/90 text-navy" : "bg-white/90 text-navy"
                  }`}
                >
                  <span className={`h-1.5 w-1.5 rounded-full ${p.status === "Ongoing" ? "animate-pulse bg-navy" : "bg-teal"}`} />
                  {p.status}
                </span>
              </div>
              <div className="flex flex-1 flex-col p-6 sm:p-7">
                <span className="text-xs font-semibold tracking-wider text-teal uppercase">{p.area}</span>
                <h3 className="mt-2 text-lg leading-snug font-bold">{p.title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-slate">{p.text}</p>
                <div className="mt-5 flex flex-wrap gap-x-4 gap-y-1 text-xs text-slate">
                  <span className="inline-flex items-center gap-1.5"><CalendarDays className="h-3.5 w-3.5" /> {p.period}</span>
                  <span className="inline-flex items-center gap-1.5"><Users className="h-3.5 w-3.5" /> {p.partners}</span>
                </div>
                <div className="mt-5">
                  <div className="flex justify-between text-xs font-semibold">
                    <span className="text-navy">Progress</span>
                    <span className="text-teal">{p.progress}%</span>
                  </div>
                  <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-mist">
                    <div data-progress className="h-full origin-left rounded-full bg-linear-to-r from-cyan via-teal to-royal" style={{ width: `${p.progress}%` }} />
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
