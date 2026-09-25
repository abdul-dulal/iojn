"use client";

import { useDeferredValue, useRef, useState } from "react";
import { ArrowUpRight, FileText, Quote, Search, X } from "lucide-react";
import { useGsap } from "@/lib/gsap";
import { library, publicationTypes } from "@/data/pages";
import { SectionHeading } from "../ui";

export default function PublicationLibrary() {
  const ref = useRef(null);
  const [type, setType] = useState("All");
  const [query, setQuery] = useState("");
  const q = useDeferredValue(query.trim().toLowerCase());
  useGsap(ref);

  const results = library.filter(
    (p) =>
      (type === "All" || p.type === type) &&
      (!q || [p.title, p.authors, p.journal, p.area].some((f) => f.toLowerCase().includes(q)))
  );

  return (
    <section id="library" ref={ref} className="section-y relative bg-offwhite">
      <div className="container-x">
        <SectionHeading
          eyebrow="Publication Library"
          title="Browse Our Research Output"
          text="Search peer-reviewed articles, reviews, conference papers and reports authored or supported by IOJN."
        />

        <div data-reveal="up" className="mt-12 rounded-[2rem] border border-line bg-white p-4 shadow-soft sm:p-5">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center">
            <label className="relative flex-1">
              <span className="sr-only">Search publications</span>
              <Search className="pointer-events-none absolute top-1/2 left-4 h-5 w-5 -translate-y-1/2 text-slate" />
              <input
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search by title, author, journal or topic…"
                className="input !rounded-full !py-3.5 pl-12"
              />
            </label>
            <div role="tablist" aria-label="Filter by type" className="-mx-1 flex gap-1.5 overflow-x-auto px-1 pb-1 lg:pb-0">
              {publicationTypes.map((t) => (
                <button
                  key={t}
                  type="button"
                  role="tab"
                  aria-selected={type === t}
                  onClick={() => setType(t)}
                  className={`shrink-0 rounded-full px-4 py-2.5 text-sm font-semibold transition-all duration-300 ${
                    type === t ? "bg-navy text-white" : "bg-mist text-slate hover:text-navy"
                  }`}
                >
                  {t}
                </button>
              ))}
            </div>
          </div>
        </div>

        <p className="mt-8 text-sm text-slate" aria-live="polite">
          Showing <span className="font-semibold text-navy">{results.length}</span> of {library.length} publications
        </p>

        <ul data-reveal="up" className="mt-4 divide-y divide-line overflow-hidden rounded-[2rem] border border-line bg-white shadow-soft">
          {results.map((p) => (
            <li key={p.title} className="group relative grid gap-4 p-6 transition-colors duration-300 hover:bg-offwhite sm:grid-cols-[auto_1fr_auto] sm:items-center sm:gap-6 sm:p-7">
              <div className="flex items-center gap-4 sm:block">
                <span className="grid h-14 w-14 place-items-center rounded-2xl bg-mist font-display text-sm font-bold text-navy transition-colors duration-300 group-hover:bg-navy group-hover:text-cyan">
                  {p.year}
                </span>
              </div>
              <div className="min-w-0">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="rounded-full bg-teal/10 px-2.5 py-0.5 text-[11px] font-semibold text-teal">{p.type}</span>
                  <span className="text-xs text-slate">{p.area}</span>
                </div>
                <h3 className="mt-2 text-base leading-snug font-bold text-navy transition-colors group-hover:text-royal sm:text-lg">
                  <a href="#" className="after:absolute after:inset-0">{p.title}</a>
                </h3>
                <p className="mt-1.5 text-sm text-slate">
                  {p.authors} · <span className="italic">{p.journal}</span>
                </p>
              </div>
              <div className="relative z-10 flex gap-2">
                <button type="button" aria-label="Copy citation" className="grid h-10 w-10 place-items-center rounded-full border border-line bg-white text-navy transition hover:border-navy">
                  <Quote className="h-4 w-4" />
                </button>
                <span className="grid h-10 w-10 place-items-center rounded-full bg-navy text-white transition-transform duration-500 group-hover:rotate-45">
                  <ArrowUpRight className="h-4 w-4" />
                </span>
              </div>
            </li>
          ))}
          {results.length === 0 && (
            <li className="flex flex-col items-center p-14 text-center">
              <span className="grid h-14 w-14 place-items-center rounded-full bg-mist text-slate">
                <FileText className="h-6 w-6" />
              </span>
              <p className="mt-4 font-semibold text-navy">No publications match your search</p>
              <button
                type="button"
                onClick={() => { setQuery(""); setType("All"); }}
                className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-teal"
              >
                <X className="h-4 w-4" /> Clear filters
              </button>
            </li>
          )}
        </ul>
      </div>
    </section>
  );
}
