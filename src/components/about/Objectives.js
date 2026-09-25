"use client";

import { useRef } from "react";
import Image from "next/image";
import { useGsap } from "@/lib/gsap";
import { objectives } from "@/data/pages";
import { images } from "@/data/site";
import { Icon } from "../ui";

export default function Objectives() {
  const ref = useRef(null);
  useGsap(ref);

  return (
    <section id="objectives" ref={ref} className="section-y relative isolate overflow-hidden bg-navy text-white">
      <Image src={images.why} alt="" fill sizes="100vw" className="-z-10 object-cover opacity-10 grayscale" />
      <div className="bg-grid-dark absolute inset-0 -z-10 [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_70%)]" />
      <div className="absolute -top-40 -right-40 -z-10 h-[30rem] w-[30rem] rounded-full bg-teal/30 blur-[140px]" />

      <div className="container-x grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
        <div className="lg:sticky lg:top-32 lg:self-start">
          <span data-reveal="up" className="eyebrow text-cyan">Major Objectives</span>
          <h2 data-reveal="up" className="heading-lg mt-4 text-white">Six Commitments That Shape Our Work</h2>
          <p data-reveal="up" className="lead mt-6 text-white/65">
            Every project we take on is measured against these objectives — so our research stays
            relevant, rigorous and responsible.
          </p>
        </div>

        <ol className="grid gap-px overflow-hidden rounded-[2rem] border border-white/10 bg-white/10 sm:grid-cols-2">
          {objectives.map((o, i) => (
            <li key={o.title} data-reveal="fade" className="group relative bg-navy p-7 transition-colors duration-500 hover:bg-navy-800 sm:p-8">
              <span className="absolute top-7 right-7 font-display text-5xl font-extrabold text-white/[0.06] transition-colors duration-500 group-hover:text-cyan/15">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="grid h-12 w-12 place-items-center rounded-2xl bg-linear-to-br from-teal to-royal text-white shadow-glow">
                <Icon name={o.icon} className="h-5 w-5" />
              </span>
              <h3 className="mt-6 text-lg font-bold text-white">{o.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-white/60">{o.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
