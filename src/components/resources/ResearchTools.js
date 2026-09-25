"use client";

import { useRef } from "react";
import Link from "next/link";
import { ArrowRight, GraduationCap } from "lucide-react";
import { useGsap } from "@/lib/gsap";
import { tools } from "@/data/pages";

export default function ResearchTools() {
  const ref = useRef(null);
  useGsap(ref);

  return (
    <section id="tools" ref={ref} className="section-y relative overflow-hidden bg-offwhite">
      <div className="container-x grid gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:items-center lg:gap-20">
        <div>
          <span data-reveal="up" className="eyebrow">Tools We Master</span>
          <h2 data-reveal="up" className="heading-lg mt-4">Software & Platforms Behind Our Work</h2>
          <p data-reveal="up" className="lead mt-6">
            Our analysts are fluent in the tools used by leading research institutions — and we can
            train your team to use them too.
          </p>
          <div data-reveal="up" className="mt-8 flex items-start gap-4 rounded-3xl border border-line bg-white p-6 shadow-soft">
            <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-teal/10 text-teal">
              <GraduationCap className="h-6 w-6" />
            </span>
            <div>
              <p className="font-bold text-navy">Hands-on software training</p>
              <p className="mt-1 text-sm text-slate">Workshops in R, SPSS, Stata and NVivo for teams and individuals.</p>
              <Link href="/events" className="link-arrow mt-3">
                See upcoming workshops <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
          {tools.map((t, i) => (
            <div
              key={t.name}
              data-reveal="scale"
              className={`group flex flex-col items-center rounded-3xl border border-line bg-white p-5 text-center shadow-soft transition-all duration-500 hover:-translate-y-1.5 hover:shadow-lift ${i % 2 ? "sm:translate-y-6" : ""}`}
            >
              <span className="grid h-16 w-16 place-items-center rounded-2xl bg-mist font-display text-xl font-extrabold text-navy transition-all duration-500 group-hover:bg-brand-gradient group-hover:text-white group-hover:shadow-glow">
                {t.mark}
              </span>
              <p className="mt-4 text-sm font-bold text-navy">{t.name}</p>
              <p className="mt-1 text-xs leading-snug text-slate">{t.use}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
