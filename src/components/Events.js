"use client";

import { useRef } from "react";
import { ArrowRight, Clock, MapPin } from "lucide-react";
import { useGsap } from "@/lib/gsap";
import { events } from "@/data/site";
import { SectionHeading } from "./ui";

export default function Events() {
  const ref = useRef(null);
  useGsap(ref);

  return (
    <section id="events" ref={ref} className="section-y relative bg-white">
      <div className="container-x">
        <SectionHeading
          align="center"
          eyebrow="Events Calendar"
          title="Upcoming Events & Conferences"
          text="Join researchers, practitioners and policymakers at our conferences, workshops and seminars."
        />

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {events.map((e, i) => (
            <article
              key={e.title}
              data-reveal="up"
              className={`group relative flex flex-col overflow-hidden rounded-[1.75rem] border p-7 transition-all duration-500 hover:-translate-y-1.5 hover:shadow-lift sm:p-8 ${
                i === 0 ? "border-transparent bg-navy text-white" : "border-line bg-white shadow-soft"
              } ${i === 2 ? "md:col-span-2 lg:col-span-1" : ""}`}
            >
              {i === 0 && <span className="absolute -top-24 -right-24 h-56 w-56 rounded-full bg-teal/40 blur-3xl" />}

              <div className="relative flex items-start justify-between gap-4">
                {/* Calendar tile */}
                <div className={`w-[4.5rem] overflow-hidden rounded-2xl text-center shadow-soft ${i === 0 ? "bg-white/10 ring-1 ring-white/15" : "bg-white ring-1 ring-line"}`}>
                  <p className={`py-1 text-[11px] font-bold tracking-widest uppercase ${i === 0 ? "bg-cyan text-navy" : "bg-teal text-white"}`}>
                    {e.month}
                  </p>
                  <p className={`pt-1.5 font-display text-3xl leading-none font-extrabold ${i === 0 ? "text-white" : "text-navy"}`}>{e.day}</p>
                  <p className={`pb-2 text-[10px] font-medium ${i === 0 ? "text-white/50" : "text-slate"}`}>{e.year}</p>
                </div>
                <span className={`rounded-full px-3 py-1 text-xs font-semibold ${i === 0 ? "bg-white/10 text-cyan" : "bg-mist text-royal"}`}>
                  {e.type}
                </span>
              </div>

              <h3 className={`relative mt-7 text-xl leading-snug font-bold ${i === 0 ? "text-white" : ""}`}>{e.title}</h3>
              <p className={`relative mt-3 flex-1 text-[15px] leading-relaxed ${i === 0 ? "text-white/65" : "text-slate"}`}>{e.text}</p>

              <div className={`relative mt-6 space-y-2 border-t pt-5 text-sm ${i === 0 ? "border-white/10 text-white/75" : "border-line text-slate"}`}>
                <p className="flex items-center gap-2.5">
                  <MapPin className={`h-4 w-4 ${i === 0 ? "text-cyan" : "text-teal"}`} /> {e.location}
                </p>
                <p className="flex items-center gap-2.5">
                  <Clock className={`h-4 w-4 ${i === 0 ? "text-cyan" : "text-teal"}`} /> {e.time}
                </p>
              </div>

              <div className="relative mt-7 flex flex-wrap gap-3">
                <a href="/contact" className={`btn !px-5 !py-3 ${i === 0 ? "btn-primary" : "btn-dark"}`}>
                  Register <ArrowRight className="h-4 w-4" />
                </a>
                <a href="/events" className={`btn !px-5 !py-3 ${i === 0 ? "btn-ghost-light" : "btn-outline"}`}>
                  Learn More
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
