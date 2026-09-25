"use client";

import { useRef } from "react";
import Image from "next/image";
import { ArrowRight, Check, Quote } from "lucide-react";
import { gsap, useGsap } from "@/lib/gsap";
import { images, site } from "@/data/site";

const pillars = [
  "Research support",
  "Academic development",
  "Public health",
  "Environmental health",
  "Human capacity development",
  "Global collaboration",
];

export default function About() {
  const ref = useRef(null);

  useGsap(ref, (scope) => {
    gsap.to(scope.querySelector("[data-parallax]"), {
      yPercent: -14,
      ease: "none",
      scrollTrigger: { trigger: scope, start: "top bottom", end: "bottom top", scrub: true },
    });
  });

  return (
    <section id="about" ref={ref} className="section-y relative overflow-hidden bg-white">
      <div className="container-x grid items-center gap-16 lg:grid-cols-2 lg:gap-20">
        {/* Imagery */}
        <div className="relative pb-16 sm:pb-20 lg:pr-10">
          <div className="absolute -top-6 -left-6 hidden h-40 w-40 rounded-[2rem] border border-dashed border-teal/30 sm:block" />
          <div data-reveal="img" className="relative aspect-[4/5] overflow-hidden rounded-[1.75rem] bg-mist shadow-lift">
            <Image
              src={images.aboutMain}
              alt="Scientists working together in a research laboratory"
              fill
              sizes="(min-width: 1024px) 45vw, 92vw"
              className="object-cover"
            />
          </div>

          <div
            data-parallax
            className="absolute right-0 bottom-0 w-[52%] overflow-hidden rounded-[1.5rem] border-[6px] border-white shadow-lift sm:right-2"
          >
            <div className="relative aspect-[4/3.4]">
              <Image src={images.aboutSecondary} alt="Researchers collaborating" fill sizes="30vw" className="object-cover" />
            </div>
          </div>

          <div
            data-reveal="scale"
            className="absolute top-10 -right-2 rounded-2xl bg-brand-gradient p-5 text-white shadow-lift sm:right-2 lg:-right-2"
          >
            <p className="font-display text-4xl font-extrabold">{new Date().getFullYear() - site.founded}+</p>
            <p className="mt-1 max-w-[7rem] text-xs leading-snug text-white/75">Years advancing impactful research</p>
          </div>
        </div>

        {/* Copy */}
        <div>
          <span data-reveal="up" className="eyebrow">Who We Are</span>
          <h2 data-reveal="up" className="heading-lg mt-4">
            Building a Stronger Future Through Research &amp; Innovation
          </h2>
          <p data-reveal="up" className="lead mt-6">
            Established in {site.founded}, the {site.fullName} (IOJN) is an innovative research support
            centre dedicated to impactful, benevolent and trend-changing research. We partner with
            researchers, universities and organizations to design, conduct and publish work that
            improves lives.
          </p>
          <p data-reveal="up" className="mt-4 leading-relaxed text-slate">
            Our multidisciplinary team spans public health, environmental health and social science —
            combining methodological rigour with a commitment to human capacity development and open
            knowledge sharing across borders.
          </p>

          <ul data-reveal="up" className="mt-8 grid gap-3 sm:grid-cols-2">
            {pillars.map((p) => (
              <li key={p} className="flex items-center gap-3 text-sm font-medium text-ink">
                <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-teal/10 text-teal">
                  <Check className="h-3.5 w-3.5" strokeWidth={3} />
                </span>
                {p}
              </li>
            ))}
          </ul>

          <figure data-reveal="up" className="mt-10 flex gap-4 rounded-2xl border-l-2 border-teal bg-offwhite p-5">
            <Quote className="h-6 w-6 shrink-0 text-teal" />
            <blockquote className="text-sm leading-relaxed text-ink italic">
              “Our mission is to make rigorous research accessible to every scholar and institution
              striving to create positive change.”
            </blockquote>
          </figure>

          <div data-reveal="up" className="mt-10">
            <a href="/about" className="btn btn-dark">
              Discover Our Story <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
