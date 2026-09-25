"use client";

import { useRef } from "react";
import { ArrowRight } from "lucide-react";
import { useGsap } from "@/lib/gsap";
import { team } from "@/data/site";
import TeamCard from "./TeamCard";

/** Homepage preview of the team — sits directly below About. */
export default function Team() {
  const ref = useRef(null);
  useGsap(ref);
  const preview = team.slice(0, 4);

  return (
    <section id="team" ref={ref} className="section-y relative overflow-hidden bg-white pt-0 sm:pt-0 lg:pt-0">
      <div className="container-x">
        <div className="grid gap-8 border-t border-line pt-20 sm:pt-24 lg:grid-cols-[1.2fr_1fr] lg:items-end lg:pt-28">
          <div>
            <span data-reveal="up" className="eyebrow">Our Team</span>
            <h2 data-reveal="up" className="heading-lg mt-4">
              People Behind <span className="text-gradient">the Research</span>
            </h2>
          </div>
          <div data-reveal="up" className="lg:pb-2">
            <p className="lead">
              Epidemiologists, statisticians, editors and field researchers — united by a commitment to
              rigorous, ethical and impactful science.
            </p>
            <a href="/team" className="link-arrow mt-5">
              Meet the full team <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div className="mt-14 grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4">
          {preview.map((m, i) => (
            <div key={m.name} data-reveal="up" className="lg:even:mt-14">
              <TeamCard member={m} index={i} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
