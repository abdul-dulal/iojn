"use client";

import { useRef } from "react";
import Link from "next/link";
import { ArrowRight, Download } from "lucide-react";
import { useGsap } from "@/lib/gsap";
import { submissionSteps } from "@/data/pages";

export default function SubmissionGuide() {
  const ref = useRef(null);
  useGsap(ref);

  return (
    <section id="submit" ref={ref} className="section-y relative isolate overflow-hidden bg-navy text-white">
      <div className="bg-grid-dark absolute inset-0 -z-10 [mask-image:radial-gradient(ellipse_at_top,black_20%,transparent_70%)]" />
      <div className="absolute -bottom-40 left-1/3 -z-10 h-[28rem] w-[28rem] rounded-full bg-teal/30 blur-[140px]" />

      <div className="container-x">
        <div className="grid gap-8 lg:grid-cols-2 lg:items-end">
          <div>
            <span data-reveal="up" className="eyebrow text-cyan">For Authors</span>
            <h2 data-reveal="up" className="heading-lg mt-4 text-white">Submit Your Manuscript in Five Steps</h2>
          </div>
          <div data-reveal="up" className="flex flex-wrap gap-3 lg:justify-end">
            <a href="#" className="btn btn-ghost-light">
              <Download className="h-4 w-4" /> Author guidelines
            </a>
            <Link href="/contact" className="btn btn-primary">
              Start submission <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>

        <ol className="relative mt-16 grid gap-5 md:grid-cols-5">
          <span className="absolute top-7 right-[10%] left-[10%] hidden h-px bg-linear-to-r from-cyan/0 via-cyan/40 to-cyan/0 md:block" aria-hidden="true" />
          {submissionSteps.map((s, i) => (
            <li key={s.title} data-reveal="up" className="group relative">
              <span className="relative z-10 grid h-14 w-14 place-items-center rounded-2xl border border-white/15 bg-navy-800 font-display text-lg font-bold text-cyan transition-all duration-500 group-hover:-translate-y-1 group-hover:bg-teal group-hover:text-white md:mx-auto">
                {i + 1}
              </span>
              <div className="mt-5 md:text-center">
                <h3 className="font-bold text-white">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/60">{s.text}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
