"use client";

import { useRef } from "react";
import Link from "next/link";
import { ArrowRight, Check, Sparkles } from "lucide-react";
import { useGsap } from "@/lib/gsap";
import { engagementModels } from "@/data/pages";
import { SectionHeading } from "../ui";

export default function EngagementModels() {
  const ref = useRef(null);
  useGsap(ref);

  return (
    <section id="engagement" ref={ref} className="section-y relative overflow-hidden bg-white">
      <div className="container-x">
        <SectionHeading
          align="center"
          eyebrow="Ways to Work Together"
          title="Flexible Engagement Models"
          text="Whether you need a single expert review or a long-term research partner, there's a model that fits."
        />

        <div className="mt-16 grid items-stretch gap-6 lg:grid-cols-3">
          {engagementModels.map((m) => (
            <article
              key={m.name}
              data-reveal="up"
              className={`relative flex flex-col overflow-hidden rounded-[2rem] p-8 transition-all duration-500 hover:-translate-y-1.5 sm:p-10 ${
                m.featured ? "bg-navy text-white shadow-lift lg:-my-4 lg:py-14" : "border border-line bg-white shadow-soft hover:shadow-lift"
              }`}
            >
              {m.featured && (
                <>
                  <span className="absolute -top-24 -right-24 h-64 w-64 rounded-full bg-teal/40 blur-3xl" />
                  <span className="absolute top-6 right-6 inline-flex items-center gap-1.5 rounded-full bg-cyan px-3 py-1 text-xs font-bold text-navy">
                    <Sparkles className="h-3.5 w-3.5" /> Most popular
                  </span>
                </>
              )}
              <h3 className={`relative text-2xl font-bold ${m.featured ? "text-white" : ""}`}>{m.name}</h3>
              <p className={`relative mt-2 text-sm ${m.featured ? "text-white/65" : "text-slate"}`}>{m.tagline}</p>
              <p className={`relative mt-8 font-display text-3xl font-extrabold ${m.featured ? "text-cyan" : "text-navy"}`}>{m.price}</p>

              <ul className={`relative mt-8 flex-1 space-y-3.5 border-t pt-8 ${m.featured ? "border-white/10" : "border-line"}`}>
                {m.features.map((f) => (
                  <li key={f} className={`flex items-start gap-3 text-sm ${m.featured ? "text-white/85" : "text-ink"}`}>
                    <span className={`mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full ${m.featured ? "bg-cyan/20 text-cyan" : "bg-teal/10 text-teal"}`}>
                      <Check className="h-3 w-3" strokeWidth={3} />
                    </span>
                    {f}
                  </li>
                ))}
              </ul>

              <Link href="/contact" className={`btn relative mt-10 w-full ${m.featured ? "btn-primary" : "btn-outline"}`}>
                Request a proposal <ArrowRight className="h-4 w-4" />
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
