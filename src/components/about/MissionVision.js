"use client";

import { useRef } from "react";
import { Eye, Rocket } from "lucide-react";
import { useGsap } from "@/lib/gsap";
import { mission, values } from "@/data/pages";
import { Icon, SectionHeading } from "../ui";

export default function MissionVision() {
  const ref = useRef(null);
  useGsap(ref);

  return (
    <section id="mission" ref={ref} className="section-y relative overflow-hidden bg-offwhite">
      <div className="container-x">
        <SectionHeading
          align="center"
          eyebrow="Mission & Vision"
          title="What Drives Everything We Do"
          text="Our purpose, our ambition and the values that guide every study, partnership and publication."
        />

        <div className="mt-16 grid gap-6 lg:grid-cols-2">
          <article data-reveal="left" className="relative overflow-hidden rounded-[2rem] bg-brand-gradient p-8 text-white shadow-lift sm:p-12">
            <div className="bg-grid-dark absolute inset-0 [mask-image:linear-gradient(to_bottom_left,black,transparent_70%)]" />
            <span className="absolute -right-16 -bottom-16 h-56 w-56 rounded-full bg-cyan/30 blur-3xl" />
            <span className="relative grid h-14 w-14 place-items-center rounded-2xl bg-white/15 backdrop-blur">
              <Rocket className="h-6 w-6 text-cyan" />
            </span>
            <p className="relative mt-10 text-xs font-semibold tracking-[0.2em] text-cyan uppercase">Our Mission</p>
            <p className="relative mt-4 font-display text-2xl leading-snug font-semibold text-white sm:text-[1.7rem]">{mission.mission}</p>
          </article>

          <article data-reveal="right" className="relative overflow-hidden rounded-[2rem] border border-line bg-white p-8 shadow-soft sm:p-12">
            <span className="absolute top-8 right-8 font-display text-[7rem] leading-none font-extrabold text-mist select-none" aria-hidden="true">”</span>
            <span className="relative grid h-14 w-14 place-items-center rounded-2xl bg-teal/10">
              <Eye className="h-6 w-6 text-teal" />
            </span>
            <p className="relative mt-10 text-xs font-semibold tracking-[0.2em] text-teal uppercase">Our Vision</p>
            <p className="relative mt-4 font-display text-2xl leading-snug font-semibold text-navy sm:text-[1.7rem]">{mission.vision}</p>
          </article>
        </div>

        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((v, i) => (
            <div
              key={v.title}
              data-reveal="up"
              className="group rounded-3xl border border-line bg-white p-7 transition-all duration-500 hover:-translate-y-1 hover:border-teal/30 hover:shadow-lift"
            >
              <div className="flex items-center justify-between">
                <span className="grid h-12 w-12 place-items-center rounded-2xl bg-mist text-royal transition-colors duration-500 group-hover:bg-navy group-hover:text-cyan">
                  <Icon name={v.icon} className="h-5 w-5" />
                </span>
                <span className="font-display text-sm font-bold text-slate/40">0{i + 1}</span>
              </div>
              <h3 className="mt-6 text-lg font-bold">{v.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate">{v.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
