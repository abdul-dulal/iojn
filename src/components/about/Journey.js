"use client";

import { useRef } from "react";
import { gsap, useGsap, prefersReducedMotion } from "@/lib/gsap";
import { milestones } from "@/data/pages";
import { SectionHeading } from "../ui";

export default function Journey() {
  const ref = useRef(null);

  useGsap(ref, (scope) => {
    if (prefersReducedMotion()) return;
    gsap.fromTo(
      scope.querySelector("[data-line]"),
      { scaleY: 0 },
      {
        scaleY: 1,
        ease: "none",
        scrollTrigger: { trigger: scope.querySelector("[data-timeline]"), start: "top 65%", end: "bottom 65%", scrub: 0.6 },
      }
    );
  });

  return (
    <section id="journey" ref={ref} className="section-y relative overflow-hidden bg-white">
      <div className="container-x">
        <SectionHeading
          align="center"
          eyebrow="Our Journey"
          title="Milestones Since 2020"
          text="From a small research support centre in Dhaka to an international research network."
        />

        <div data-timeline className="relative mx-auto mt-16 max-w-5xl">
          {/* spine */}
          <span className="absolute top-0 bottom-0 left-5 w-px bg-line md:left-1/2" aria-hidden="true" />
          <span data-line className="absolute top-0 bottom-0 left-5 w-px origin-top bg-linear-to-b from-cyan via-teal to-royal md:left-1/2" aria-hidden="true" />

          <ol className="space-y-10 md:space-y-4">
            {milestones.map((m, i) => {
              const right = i % 2 === 1;
              return (
                <li key={m.year} className="relative grid md:grid-cols-2 md:gap-16">
                  <span className="absolute top-7 left-5 z-10 h-3.5 w-3.5 -translate-x-1/2 rounded-full border-[3px] border-white bg-teal shadow-[0_0_0_4px_rgba(15,139,141,0.15)] md:left-1/2" />
                  <div
                    data-reveal={right ? "right" : "left"}
                    className={`ml-12 md:ml-0 ${right ? "md:col-start-2" : "md:text-right"}`}
                  >
                    <div className="group inline-block w-full rounded-3xl border border-line bg-white p-6 text-left shadow-soft transition-all duration-500 hover:-translate-y-1 hover:shadow-lift sm:p-7">
                      <p className="font-display text-4xl font-extrabold text-gradient">{m.year}</p>
                      <h3 className="mt-3 text-lg font-bold">{m.title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-slate">{m.text}</p>
                    </div>
                  </div>
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}
