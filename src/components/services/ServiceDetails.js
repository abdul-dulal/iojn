"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check, PackageCheck } from "lucide-react";
import { useGsap } from "@/lib/gsap";
import { serviceDetails } from "@/data/pages";
import { SectionHeading } from "../ui";

export default function ServiceDetails() {
  const ref = useRef(null);
  useGsap(ref);

  return (
    <section id="how-we-help" ref={ref} className="section-y relative bg-offwhite">
      <div className="container-x">
        <SectionHeading
          align="center"
          eyebrow="In Depth"
          title="How We Help, Step by Step"
          text="A closer look at our three most requested services and exactly what you receive."
        />

        <div className="mt-20 space-y-24 lg:space-y-32">
          {serviceDetails.map((s, i) => {
            const flip = i % 2 === 1;
            return (
              <article key={s.title} className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
                <div className={`relative isolate ${flip ? "lg:order-2" : ""}`}>
                  <div data-reveal="img" className="relative aspect-[5/4] overflow-hidden rounded-[2rem] shadow-lift">
                    <Image src={s.image} alt="" fill sizes="(min-width: 1024px) 45vw, 92vw" className="object-cover" />
                    <div className="absolute inset-0 bg-linear-to-t from-navy/40 to-transparent" />
                  </div>
                  <span className={`absolute -top-6 -z-10 font-display text-[7rem] leading-none font-extrabold text-navy/[0.06] select-none sm:text-[9rem] ${flip ? "-right-2" : "-left-2"}`} aria-hidden="true">
                    0{i + 1}
                  </span>
                  <div data-reveal="scale" className={`absolute -bottom-6 ${flip ? "left-6" : "right-6"}`}>
                    <div className="glass flex items-center gap-3 rounded-2xl px-5 py-4 shadow-lift">
                      <span className="grid h-10 w-10 place-items-center rounded-xl bg-teal text-white">
                        <PackageCheck className="h-5 w-5" />
                      </span>
                      <div>
                        <p className="text-[11px] font-semibold tracking-wider text-slate uppercase">Deliverable</p>
                        <p className="text-sm font-bold text-navy">{s.deliverable}</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className={flip ? "lg:order-1" : ""}>
                  <span data-reveal="up" className="eyebrow">{s.eyebrow}</span>
                  <h3 data-reveal="up" className="mt-4 font-display text-3xl leading-tight font-bold sm:text-4xl">{s.title}</h3>
                  <p data-reveal="up" className="lead mt-5">{s.text}</p>
                  <ul data-reveal="up" className="mt-8 grid gap-3 sm:grid-cols-2">
                    {s.points.map((p) => (
                      <li key={p} className="flex items-start gap-3 rounded-2xl border border-line bg-white p-4 text-sm font-medium text-ink">
                        <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-teal/10 text-teal">
                          <Check className="h-3.5 w-3.5" strokeWidth={3} />
                        </span>
                        {p}
                      </li>
                    ))}
                  </ul>
                  <div data-reveal="up" className="mt-8">
                    <Link href="/contact" className="btn btn-dark">
                      Get started <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
