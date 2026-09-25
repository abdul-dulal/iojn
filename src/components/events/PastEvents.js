"use client";

import { useRef } from "react";
import Image from "next/image";
import { Users } from "lucide-react";
import { useGsap } from "@/lib/gsap";
import { pastEvents } from "@/data/pages";
import { SectionHeading } from "../ui";

// Bento layout spans for a 4-column grid
const spans = ["lg:col-span-2 lg:row-span-2", "", "", "lg:col-span-2", "lg:col-span-2", "lg:col-span-2"];

export default function PastEvents() {
  const ref = useRef(null);
  useGsap(ref);

  return (
    <section id="past-events" ref={ref} className="section-y relative bg-offwhite">
      <div className="container-x">
        <SectionHeading
          align="center"
          eyebrow="Event Highlights"
          title="Moments From Past Events"
          text="Workshops, symposia and forums that brought our research community together."
        />

        <div className="mt-16 grid auto-rows-[15rem] gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {pastEvents.map((e, i) => (
            <figure
              key={e.title}
              data-reveal="scale"
              className={`group relative overflow-hidden rounded-[1.75rem] bg-navy ${spans[i]}`}
            >
              <Image
                src={e.image}
                alt={e.title}
                fill
                sizes={i === 0 ? "(min-width: 1024px) 50vw, 92vw" : "(min-width: 1024px) 25vw, 92vw"}
                className="object-cover transition-all duration-[1.2s] ease-out group-hover:scale-110 group-hover:opacity-80"
              />
              <div className="absolute inset-0 bg-linear-to-t from-navy/90 via-navy/20 to-transparent" />
              <figcaption className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
                <p className="text-xs font-semibold tracking-wider text-cyan uppercase">{e.date}</p>
                <p className={`mt-1 font-display font-bold text-white ${i === 0 ? "text-2xl sm:text-3xl" : "text-lg"}`}>{e.title}</p>
                <p className="mt-2 inline-flex translate-y-2 items-center gap-1.5 text-sm text-white/75 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100 pointer-coarse:translate-y-0 pointer-coarse:opacity-100">
                  <Users className="h-4 w-4" /> {e.attendees} participants
                </p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
