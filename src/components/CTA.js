"use client";

import { useRef } from "react";
import { ArrowRight, MessageCircle } from "lucide-react";
import { gsap, useGsap, prefersReducedMotion } from "@/lib/gsap";

export default function CTA() {
  const ref = useRef(null);

  useGsap(ref, (scope) => {
    if (prefersReducedMotion()) return;
    gsap.to(scope.querySelectorAll("[data-glow]"), {
      xPercent: (i) => (i ? -18 : 18),
      yPercent: (i) => (i ? 12 : -12),
      duration: 8,
      ease: "sine.inOut",
      repeat: -1,
      yoyo: true,
    });
  });

  return (
    <section ref={ref} className="relative bg-white pb-20 sm:pb-24 lg:pb-32">
      <div className="container-x">
        <div
          data-reveal="scale"
          className="relative isolate overflow-hidden rounded-[2.5rem] bg-brand-gradient px-6 py-16 text-center sm:px-12 sm:py-20 lg:py-24"
        >
          <div className="bg-grid-dark absolute inset-0 -z-10 [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]" />
          <div data-glow className="absolute -top-32 -left-24 -z-10 h-96 w-96 rounded-full bg-cyan/40 blur-[110px]" />
          <div data-glow className="absolute -right-24 -bottom-32 -z-10 h-96 w-96 rounded-full bg-royal/70 blur-[110px]" />
          <svg className="absolute inset-0 -z-10 h-full w-full opacity-20" preserveAspectRatio="none" viewBox="0 0 800 400" fill="none" aria-hidden="true">
            <path d="M0 300 C 200 220, 300 380, 500 260 S 760 160, 800 200" stroke="#57C7C8" />
            <path d="M0 340 C 220 260, 320 400, 520 300 S 760 200, 800 250" stroke="#fff" strokeOpacity=".5" />
          </svg>

          <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-semibold tracking-[0.16em] text-cyan uppercase backdrop-blur">
            Let&apos;s collaborate
          </span>
          <h2 className="mx-auto mt-6 max-w-3xl font-display text-4xl leading-tight font-extrabold text-white sm:text-5xl lg:text-6xl">
            Have a Research Idea?
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-white/75">
            Let&apos;s turn your research idea into meaningful knowledge and measurable impact.
          </p>
          <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
            <a href="#contact" className="btn bg-white text-navy shadow-lift hover:-translate-y-0.5 hover:bg-offwhite">
              <MessageCircle className="h-4 w-4 text-teal" /> Start a Conversation
            </a>
            <a href="#services" className="btn btn-ghost-light">
              Explore Our Services <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
