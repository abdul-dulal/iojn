"use client";

import { useRef } from "react";
import Image from "next/image";
import { gsap, useGsap } from "@/lib/gsap";
import { benefits, images } from "@/data/site";
import { Icon, SectionHeading } from "./ui";

export default function WhyChooseUs() {
  const ref = useRef(null);

  useGsap(ref, (scope) => {
    gsap.fromTo(
      scope.querySelector("[data-bg]"),
      { yPercent: -8 },
      {
        yPercent: 8,
        ease: "none",
        scrollTrigger: { trigger: scope, start: "top bottom", end: "bottom top", scrub: true },
      }
    );
  });

  return (
    <section ref={ref} className="section-y relative isolate overflow-hidden bg-navy text-white">
      {/* Background visual */}
      <div data-bg className="absolute inset-[-10%_0] -z-10">
        <Image src={images.why} alt="" fill sizes="100vw" className="object-cover opacity-[0.12] grayscale" />
      </div>
      <div className="bg-grid-dark absolute inset-0 -z-10 [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_70%)]" />
      <div className="absolute -top-40 -left-40 -z-10 h-[30rem] w-[30rem] rounded-full bg-royal/40 blur-[140px]" />
      <div className="absolute -right-40 -bottom-40 -z-10 h-[30rem] w-[30rem] rounded-full bg-teal/30 blur-[140px]" />

      {/* Abstract molecular structure */}
      <svg className="absolute top-10 right-[-6rem] -z-10 hidden h-[34rem] w-[34rem] opacity-30 lg:block" viewBox="0 0 400 400" fill="none" aria-hidden="true">
        <g stroke="#57C7C8" strokeOpacity=".5">
          <path d="M80 120 L170 80 L260 140 L240 240 L140 260 L80 120 Z" />
          <path d="M170 80 L240 240 M80 120 L260 140 M140 260 L330 300 L240 240 M260 140 L340 90" />
        </g>
        {[[80, 120], [170, 80], [260, 140], [240, 240], [140, 260], [330, 300], [340, 90]].map(([x, y], i) => (
          <circle key={i} cx={x} cy={y} r={i % 2 ? 7 : 5} fill={i % 3 ? "#57C7C8" : "#145DA0"} />
        ))}
      </svg>

      <div className="container-x">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-end">
          <SectionHeading dark eyebrow="Why IOJN" title="Why Researchers Choose Us" />
          <p data-reveal="up" className="lead max-w-lg text-white/65 lg:justify-self-end">
            We combine scientific rigour, international perspective and genuine partnership — so your
            research is not only completed, but respected, published and put to use.
          </p>
        </div>

        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map((b, i) => (
            <div
              key={b.title}
              data-reveal="up"
              className="glass-dark group relative overflow-hidden rounded-3xl p-7 transition-all duration-500 hover:-translate-y-1 hover:border-cyan/30 hover:bg-white/[0.09] sm:p-8"
            >
              <span className="absolute top-0 left-8 h-px w-16 bg-linear-to-r from-transparent via-cyan to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              <div className="flex items-center justify-between">
                <span className="grid h-12 w-12 place-items-center rounded-2xl bg-linear-to-br from-teal to-royal text-white shadow-glow">
                  <Icon name={b.icon} className="h-5 w-5" strokeWidth={1.75} />
                </span>
                <span className="font-display text-sm font-semibold text-white/25">0{i + 1}</span>
              </div>
              <h3 className="mt-6 text-lg font-bold text-white">{b.title}</h3>
              <p className="mt-2.5 text-[15px] leading-relaxed text-white/60">{b.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
