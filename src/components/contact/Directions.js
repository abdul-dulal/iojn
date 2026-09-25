"use client";

import { useRef } from "react";
import { Clock, MapPin } from "lucide-react";
import { useGsap } from "@/lib/gsap";
import { directions } from "@/data/pages";
import { site } from "@/data/site";
import { Icon, SectionHeading } from "../ui";

export default function Directions() {
  const ref = useRef(null);
  useGsap(ref);

  return (
    <section id="directions" ref={ref} className="section-y relative bg-white">
      <div className="container-x">
        <div className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-end">
          <SectionHeading
            eyebrow="Visit Our Office"
            title="How to Find Us"
            text="Our office is in the heart of Farmgate, Dhaka — easy to reach by public transport or car."
          />
          <div data-reveal="up" className="grid gap-3 sm:grid-cols-2">
            <div className="flex items-start gap-3 rounded-2xl bg-offwhite p-5">
              <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-teal" />
              <p className="text-sm text-ink">{site.address}</p>
            </div>
            <div className="flex items-start gap-3 rounded-2xl bg-offwhite p-5">
              <Clock className="mt-0.5 h-5 w-5 shrink-0 text-teal" />
              <p className="text-sm text-ink">{site.hours}<span className="block text-slate">Friday closed</span></p>
            </div>
          </div>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {directions.map((d, i) => (
            <article
              key={d.title}
              data-reveal="up"
              className="group relative overflow-hidden rounded-[1.75rem] border border-line bg-white p-7 shadow-soft transition-all duration-500 hover:-translate-y-1.5 hover:border-transparent hover:shadow-lift"
            >
              <span className="absolute inset-0 bg-brand-gradient opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              <div className="relative flex items-center justify-between">
                <span className="grid h-14 w-14 place-items-center rounded-2xl bg-mist text-royal transition-colors duration-500 group-hover:bg-white/15 group-hover:text-white">
                  <Icon name={d.icon} className="h-6 w-6" />
                </span>
                <span className="font-display text-sm font-bold text-slate/40 transition-colors duration-500 group-hover:text-white/50">0{i + 1}</span>
              </div>
              <h3 className="relative mt-6 text-lg font-bold transition-colors duration-500 group-hover:text-white">{d.title}</h3>
              <p className="relative mt-2 text-sm leading-relaxed text-slate transition-colors duration-500 group-hover:text-white/80">{d.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
