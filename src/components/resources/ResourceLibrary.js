"use client";

import { useRef, useState } from "react";
import { Database, Download, FileText, LayoutTemplate, PlayCircle } from "lucide-react";
import { useGsap } from "@/lib/gsap";
import { resources, resourceTypes } from "@/data/pages";
import { SectionHeading } from "../ui";

const typeStyle = {
  Guide: { icon: FileText, tint: "bg-royal/10 text-royal" },
  Template: { icon: LayoutTemplate, tint: "bg-teal/10 text-teal" },
  Webinar: { icon: PlayCircle, tint: "bg-rose-500/10 text-rose-600" },
  Dataset: { icon: Database, tint: "bg-amber-500/10 text-amber-600" },
};

export default function ResourceLibrary() {
  const ref = useRef(null);
  const [type, setType] = useState("All");
  const list = type === "All" ? resources : resources.filter((r) => r.type === type);
  useGsap(ref);

  return (
    <section id="library" ref={ref} className="section-y relative bg-white">
      <div className="container-x">
        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <SectionHeading
            eyebrow="Resource Library"
            title="Free Tools for Better Research"
            text="Guides, templates, recorded webinars and practice datasets created by our research team."
          />
          <div data-reveal="up" role="tablist" aria-label="Filter resources" className="-mx-5 flex gap-2 overflow-x-auto px-5 pb-1 sm:mx-0 sm:flex-wrap sm:px-0">
            {resourceTypes.map((t) => (
              <button
                key={t}
                type="button"
                role="tab"
                aria-selected={type === t}
                onClick={() => setType(t)}
                className={`shrink-0 rounded-full border px-4 py-2.5 text-sm font-semibold transition-all duration-300 ${
                  type === t ? "border-navy bg-navy text-white" : "border-line bg-white text-slate hover:text-navy"
                }`}
              >
                {t}
              </button>
            ))}
          </div>
        </div>

        <div data-reveal="up" className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {list.map((r) => {
            const { icon: TypeIcon, tint } = typeStyle[r.type];
            return (
              <article
                key={r.title}
                className="group relative flex flex-col rounded-[1.75rem] border border-line bg-offwhite p-6 transition-all duration-500 hover:-translate-y-1.5 hover:border-transparent hover:bg-white hover:shadow-lift"
                style={{ animation: "fade-up .5s both" }}
              >
                <div className="flex items-center justify-between">
                  <span className={`grid h-12 w-12 place-items-center rounded-2xl ${tint}`}>
                    <TypeIcon className="h-5 w-5" />
                  </span>
                  <span className="rounded-full border border-line bg-white px-2.5 py-1 text-[11px] font-bold text-navy">{r.format}</span>
                </div>
                <p className="mt-6 text-xs font-semibold tracking-wider text-teal uppercase">{r.type}</p>
                <h3 className="mt-1.5 text-base leading-snug font-bold">{r.title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-slate">{r.text}</p>
                <div className="mt-6 flex items-center justify-between border-t border-line pt-4">
                  <span className="text-xs text-slate">{r.meta}</span>
                  <a
                    href="#"
                    aria-label={`${r.type === "Webinar" ? "Watch" : "Download"} ${r.title}`}
                    className="inline-flex items-center gap-1.5 rounded-full bg-navy px-3.5 py-2 text-xs font-semibold text-white transition-all duration-300 group-hover:bg-teal"
                  >
                    {r.type === "Webinar" ? <PlayCircle className="h-3.5 w-3.5" /> : <Download className="h-3.5 w-3.5" />}
                    {r.type === "Webinar" ? "Watch" : "Download"}
                  </a>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
