"use client";

import { useRef, useState } from "react";
import { gsap, ScrollTrigger, useGsap, prefersReducedMotion } from "@/lib/gsap";
import { team, teamDepartments } from "@/data/site";
import TeamCard, { FeaturedMember } from "./TeamCard";

export default function TeamDirectory() {
  const ref = useRef(null);
  const gridRef = useRef(null);
  const [dept, setDept] = useState("All");
  useGsap(ref);

  const [lead, ...others] = team;
  const members = dept === "All" ? others : team.filter((m) => m.dept === dept);

  const choose = (d) => {
    if (d === dept) return;
    const cards = gridRef.current?.children;
    if (!cards?.length || prefersReducedMotion()) return setDept(d);
    gsap.to(cards, {
      opacity: 0,
      y: 16,
      duration: 0.25,
      stagger: 0.03,
      onComplete: () => {
        setDept(d);
        requestAnimationFrame(() => {
          gsap.fromTo(gridRef.current.children, { opacity: 0, y: 24 }, { opacity: 1, y: 0, duration: 0.6, stagger: 0.06, ease: "power3.out" });
          ScrollTrigger.refresh();
        });
      },
    });
  };

  const count = (d) => (d === "All" ? others.length : team.filter((m) => m.dept === d).length);

  return (
    <section ref={ref} className="relative bg-white pb-24 lg:pb-32">
      <div className="container-x">
        <div data-reveal="up">
          <FeaturedMember member={lead} />
        </div>

        <div className="mt-24 flex flex-col gap-8 lg:mt-32">
          <div>
            <span data-reveal="up" className="eyebrow">Team Directory</span>
            <h2 data-reveal="up" className="heading-lg mt-4">Experts Across Every Stage of Research</h2>
          </div>

          <div data-reveal="up" role="tablist" aria-label="Filter by department" className="-mx-5 flex gap-2 overflow-x-auto px-5 pb-1 sm:mx-0 sm:flex-wrap sm:overflow-visible sm:px-0">
            {teamDepartments.map((d) => (
              <button
                key={d}
                type="button"
                role="tab"
                aria-selected={dept === d}
                onClick={() => choose(d)}
                className={`flex shrink-0 items-center gap-2 rounded-full border px-4 py-2.5 text-sm font-semibold transition-all duration-300 ${
                  dept === d
                    ? "border-navy bg-navy text-white shadow-soft"
                    : "border-line bg-white text-slate hover:border-navy/30 hover:text-navy"
                }`}
              >
                {d}
                <span className={`rounded-full px-1.5 text-[11px] ${dept === d ? "bg-white/15 text-cyan" : "bg-mist text-slate"}`}>
                  {count(d)}
                </span>
              </button>
            ))}
          </div>
        </div>

        <div ref={gridRef} className="mt-14 grid gap-x-6 gap-y-14 sm:grid-cols-2 lg:grid-cols-4">
          {members.map((m) => (
            <div key={m.name} data-reveal="up" className="lg:even:mt-14">
              <TeamCard member={m} index={team.indexOf(m)} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
