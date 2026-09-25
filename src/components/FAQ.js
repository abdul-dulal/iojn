"use client";

import { useId, useRef, useState } from "react";
import Link from "next/link";
import { ArrowRight, Plus } from "lucide-react";
import { useGsap } from "@/lib/gsap";
import { SectionHeading } from "./ui";

export default function FAQ({ items, title = "Frequently Asked Questions", text, id = "faq", tone = "white" }) {
  const ref = useRef(null);
  const uid = useId();
  const [open, setOpen] = useState(0);
  useGsap(ref);

  return (
    <section id={id} ref={ref} className={`section-y relative ${tone === "white" ? "bg-white" : "bg-offwhite"}`}>
      <div className="container-x grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
        <div className="lg:sticky lg:top-32 lg:self-start">
          <SectionHeading eyebrow="FAQ" title={title} text={text} />
          <div data-reveal="up" className="mt-8 rounded-3xl bg-brand-gradient p-7 text-white shadow-lift">
            <p className="font-display text-lg font-bold">Still have questions?</p>
            <p className="mt-2 text-sm text-white/70">Our team is happy to help you plan your next research project.</p>
            <Link href="/contact" className="btn mt-5 bg-white !py-3 text-navy hover:bg-offwhite">
              Talk to an expert <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>

        <div className="self-start divide-y divide-line border-y border-line">
          {items.map((f, i) => {
            const isOpen = open === i;
            return (
              <div key={f.q} data-reveal="up">
                <h3>
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={`${uid}-${i}`}
                    onClick={() => setOpen(isOpen ? -1 : i)}
                    className="flex w-full items-center justify-between gap-6 py-6 text-left"
                  >
                    <span className={`font-display text-lg font-bold transition-colors ${isOpen ? "text-teal" : "text-navy"}`}>{f.q}</span>
                    <span className={`grid h-9 w-9 shrink-0 place-items-center rounded-full border transition-all duration-500 ${isOpen ? "rotate-45 border-teal bg-teal text-white" : "border-line text-navy"}`}>
                      <Plus className="h-4 w-4" />
                    </span>
                  </button>
                </h3>
                <div
                  id={`${uid}-${i}`}
                  role="region"
                  className={`grid transition-[grid-template-rows] duration-500 ease-out ${isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}
                >
                  <p className="overflow-hidden pr-14 leading-relaxed text-slate">
                    <span className="block pb-6">{f.a}</span>
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
