"use client";

import { useRef } from "react";
import { ArrowRight } from "lucide-react";
import { gsap, ScrollTrigger, useGsap, prefersReducedMotion } from "@/lib/gsap";
import { processSteps } from "@/data/site";

export default function ResearchProcess() {
  const ref = useRef(null);

  useGsap(ref, (scope) => {
    const track = scope.querySelector("[data-track]");
    const steps = gsap.utils.toArray("[data-step]", scope);

    if (prefersReducedMotion()) {
      steps.forEach((s) => s.classList.add("is-active"));
      gsap.set("[data-fill]", { scaleY: 1 });
      return;
    }

    gsap.fromTo(
      "[data-fill]",
      { scaleY: 0 },
      {
        scaleY: 1,
        ease: "none",
        scrollTrigger: { trigger: track, start: "top 60%", end: "bottom 60%", scrub: 0.6 },
      }
    );

    steps.forEach((step) =>
      ScrollTrigger.create({
        trigger: step,
        start: "top 60%",
        onEnter: () => step.classList.add("is-active"),
        onLeaveBack: () => step.classList.remove("is-active"),
      })
    );
  });

  return (
    <section ref={ref} className="section-y relative bg-offwhite">
      <div className="container-x grid gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
        <div className="lg:sticky lg:top-32 lg:self-start">
          <span data-reveal="up" className="eyebrow">Research Process</span>
          <h2 data-reveal="up" className="heading-lg mt-4">
            From Research Idea to <span className="text-gradient">Real-World Impact</span>
          </h2>
          <p data-reveal="up" className="lead mt-6">
            A proven, transparent seven-step methodology. You stay informed and in control while our
            specialists handle the complexity at each stage.
          </p>
          <div data-reveal="up" className="mt-10 rounded-3xl border border-line bg-white p-6 shadow-soft">
            <div className="flex items-center justify-between text-sm">
              <span className="font-semibold text-navy">Average project timeline</span>
              <span className="font-display font-bold text-teal">8–16 weeks</span>
            </div>
            <div className="mt-4 flex gap-1.5">
              {processSteps.map((s, i) => (
                <span
                  key={s.title}
                  className="h-1.5 flex-1 rounded-full"
                  style={{ background: `color-mix(in srgb, #0F8B8D ${30 + i * 10}%, #EEF4F8)` }}
                />
              ))}
            </div>
            <a href="#contact" className="link-arrow mt-6">
              Plan your project with us <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>

        <ol data-track className="relative">
          <span className="absolute top-2 bottom-2 left-[1.6rem] w-px bg-line sm:left-[1.85rem]" aria-hidden="true" />
          <span
            data-fill
            className="absolute top-2 bottom-2 left-[1.6rem] w-px origin-top bg-linear-to-b from-cyan via-teal to-royal sm:left-[1.85rem]"
            aria-hidden="true"
          />
          {processSteps.map((s, i) => (
            <li key={s.title} data-step className="group relative flex gap-6 pb-10 last:pb-0 sm:gap-8 sm:pb-12">
              <span className="relative z-10 grid h-[3.2rem] w-[3.2rem] shrink-0 place-items-center rounded-full border border-line bg-white font-display text-sm font-bold text-slate shadow-soft transition-all duration-500 group-[.is-active]:border-transparent group-[.is-active]:bg-navy group-[.is-active]:text-cyan group-[.is-active]:shadow-glow sm:h-[3.7rem] sm:w-[3.7rem] sm:text-base">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div className="flex-1 rounded-3xl border border-transparent p-1 pt-2.5 transition-all duration-500 group-[.is-active]:translate-x-0 sm:pt-3.5 lg:-translate-x-2">
                <h3 className="text-lg font-bold text-slate transition-colors duration-500 group-[.is-active]:text-navy sm:text-xl">
                  {s.title}
                </h3>
                <p className="mt-2 max-w-lg leading-relaxed text-slate/80 transition-colors duration-500 group-[.is-active]:text-slate">
                  {s.text}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
