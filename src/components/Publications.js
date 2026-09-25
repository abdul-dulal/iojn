"use client";

import { useRef } from "react";
import Image from "next/image";
import { ArrowRight, ArrowUpRight, CalendarDays, Clock } from "lucide-react";
import { useGsap } from "@/lib/gsap";
import { publications } from "@/data/site";
import { SectionHeading } from "./ui";

function Meta({ p, light = false }) {
  return (
    <div className={`flex flex-wrap items-center gap-x-4 gap-y-1 text-xs ${light ? "text-white/70" : "text-slate"}`}>
      <span className="inline-flex items-center gap-1.5">
        <CalendarDays className="h-3.5 w-3.5" /> {p.date}
      </span>
      <span className="inline-flex items-center gap-1.5">
        <Clock className="h-3.5 w-3.5" /> {p.read}
      </span>
    </div>
  );
}

export default function Publications() {
  const ref = useRef(null);
  useGsap(ref);
  const [featured, ...rest] = publications;

  return (
    <section id="publications" ref={ref} className="section-y relative bg-offwhite">
      <div className="container-x">
        <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <SectionHeading eyebrow="Publications" title="Latest Research & Publications" />
          <a data-reveal="up" href="#publications" className="btn btn-outline self-start sm:self-auto">
            View All Publications <ArrowRight className="h-4 w-4" />
          </a>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          {/* Featured */}
          <article data-reveal="up" className="group relative flex min-h-[28rem] overflow-hidden rounded-[2rem] bg-navy shadow-lift lg:min-h-full">
            <Image
              src={featured.image}
              alt=""
              fill
              sizes="(min-width: 1024px) 45vw, 92vw"
              className="object-cover transition-transform duration-[1.4s] ease-out group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-linear-to-t from-navy via-navy/60 to-navy/5" />
            <div className="relative mt-auto p-7 sm:p-10">
              <span className="rounded-full bg-cyan/20 px-3 py-1 text-xs font-semibold text-cyan backdrop-blur">
                {featured.category}
              </span>
              <h3 className="mt-5 text-2xl leading-snug font-bold text-white sm:text-3xl">
                <a href="#publications" className="after:absolute after:inset-0">{featured.title}</a>
              </h3>
              <p className="mt-3 max-w-lg text-white/70">{featured.text}</p>
              <div className="mt-6 flex items-center justify-between gap-4">
                <Meta p={featured} light />
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-white text-navy transition-transform duration-500 group-hover:rotate-45">
                  <ArrowUpRight className="h-5 w-5" />
                </span>
              </div>
            </div>
          </article>

          {/* List */}
          <div className="grid gap-6">
            {rest.map((p) => (
              <article
                key={p.title}
                data-reveal="up"
                className="group relative grid overflow-hidden rounded-[1.75rem] border border-line bg-white shadow-soft transition-all duration-500 hover:-translate-y-1 hover:shadow-lift sm:grid-cols-[13rem_1fr]"
              >
                <div className="relative aspect-[16/9] overflow-hidden sm:aspect-auto">
                  <Image
                    src={p.image}
                    alt=""
                    fill
                    sizes="(min-width: 640px) 13rem, 92vw"
                    className="object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-110"
                  />
                </div>
                <div className="flex flex-col p-6">
                  <div className="flex items-center justify-between gap-3">
                    <span className="rounded-full bg-mist px-3 py-1 text-xs font-semibold text-royal">{p.category}</span>
                    <span className="text-xs text-slate">{p.date}</span>
                  </div>
                  <h3 className="mt-4 text-lg leading-snug font-bold transition-colors group-hover:text-royal">
                    <a href="#publications" className="after:absolute after:inset-0">{p.title}</a>
                  </h3>
                  <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-slate">{p.text}</p>
                  <span className="link-arrow mt-4">
                    Read More <ArrowRight className="h-4 w-4" />
                  </span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
