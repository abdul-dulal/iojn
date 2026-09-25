"use client";

import { useRef } from "react";
import Link from "next/link";
import { ArrowRight, BookOpen, Clock, Repeat, Unlock } from "lucide-react";
import { useGsap } from "@/lib/gsap";
import { journals } from "@/data/pages";
import { SectionHeading } from "../ui";

export default function Journals() {
  const ref = useRef(null);
  useGsap(ref);

  return (
    <section id="journals" ref={ref} className="section-y relative bg-white">
      <div className="container-x">
        <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <SectionHeading
            eyebrow="Our Journals"
            title="Journals We Develop & Manage"
            text="Open-access, peer-reviewed journals supporting researchers across health and social sciences."
          />
          <Link data-reveal="up" href="/contact" className="btn btn-outline self-start lg:self-auto">
            Journal management services <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {journals.map((j) => (
            <article key={j.name} data-reveal="up" className="group relative flex flex-col overflow-hidden rounded-[2rem] border border-line bg-white shadow-soft transition-all duration-500 hover:-translate-y-1.5 hover:shadow-lift">
              {/* Journal cover */}
              <div className={`relative flex aspect-[16/10] flex-col justify-between overflow-hidden bg-linear-to-br ${j.color} p-7 text-white`}>
                <div className="bg-grid-dark absolute inset-0 opacity-60" />
                <span className="absolute -right-10 -bottom-10 h-40 w-40 rounded-full border-[18px] border-white/10 transition-transform duration-700 group-hover:scale-125" />
                <div className="relative flex items-center justify-between">
                  <span className="rounded-full bg-white/15 px-3 py-1 text-[11px] font-semibold tracking-wider uppercase backdrop-blur">Open Access</span>
                  <BookOpen className="h-5 w-5 text-white/70" />
                </div>
                <div className="relative">
                  <p className="font-display text-5xl font-extrabold tracking-tight">{j.short}</p>
                  <p className="mt-1 text-xs text-white/70">{j.issn}</p>
                </div>
              </div>
              <div className="flex flex-1 flex-col p-7">
                <h3 className="text-lg leading-snug font-bold">{j.name}</h3>
                <dl className="mt-6 grid grid-cols-3 gap-3 border-t border-line pt-6 text-center">
                  {[
                    { icon: Repeat, label: "Frequency", value: j.frequency },
                    { icon: Clock, label: "Review", value: j.review },
                    { icon: Unlock, label: "Access", value: "Open" },
                  ].map((d) => (
                    <div key={d.label}>
                      <d.icon className="mx-auto h-4 w-4 text-teal" />
                      <dt className="mt-2 text-[11px] text-slate">{d.label}</dt>
                      <dd className="text-xs font-bold text-navy">{d.value}</dd>
                    </div>
                  ))}
                </dl>
                <a href="#submit" className="link-arrow mt-7">
                  Submit a manuscript <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
