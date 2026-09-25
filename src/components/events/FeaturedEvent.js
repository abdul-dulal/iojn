"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CalendarDays, MapPin } from "lucide-react";
import { useGsap } from "@/lib/gsap";
import { featuredEvent as ev } from "@/data/pages";

function useCountdown(target) {
  const [left, setLeft] = useState(null); // null until mounted, avoids hydration mismatch
  useEffect(() => {
    const end = new Date(target).getTime();
    const tick = () => setLeft(Math.max(0, end - Date.now()));
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, [target]);
  if (left === null) return null;
  const s = Math.floor(left / 1000);
  return { Days: Math.floor(s / 86400), Hours: Math.floor((s % 86400) / 3600), Minutes: Math.floor((s % 3600) / 60), Seconds: s % 60 };
}

export default function FeaturedEvent() {
  const ref = useRef(null);
  const [day, setDay] = useState(0);
  const time = useCountdown(ev.date);
  useGsap(ref);

  return (
    <section id="conference" ref={ref} className="section-y relative bg-offwhite">
      <div className="container-x">
        <div data-reveal="up" className="relative isolate overflow-hidden rounded-[2.5rem] bg-navy text-white shadow-lift">
          <Image src={ev.image} alt="" fill sizes="100vw" className="-z-10 object-cover opacity-25" />
          <div className="absolute inset-0 -z-10 bg-linear-to-r from-navy via-navy/90 to-navy/40" />
          <div className="absolute -top-32 -right-32 -z-10 h-96 w-96 rounded-full bg-teal/40 blur-[120px]" />

          <div className="grid gap-12 p-8 sm:p-12 lg:grid-cols-[1.15fr_1fr] lg:p-16">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full bg-cyan/15 px-4 py-1.5 text-xs font-semibold tracking-[0.16em] text-cyan uppercase">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-cyan" /> Flagship Event
              </span>
              <h2 className="mt-6 font-display text-3xl leading-tight font-extrabold text-white sm:text-4xl lg:text-5xl">{ev.title}</h2>
              <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-white/75">
                <span className="inline-flex items-center gap-2"><CalendarDays className="h-4 w-4 text-cyan" /> {ev.dateLabel}</span>
                <span className="inline-flex items-center gap-2"><MapPin className="h-4 w-4 text-cyan" /> {ev.location}</span>
              </div>

              {/* Countdown */}
              <div className="mt-10 grid max-w-md grid-cols-4 gap-3" aria-label="Time until the conference" role="timer">
                {["Days", "Hours", "Minutes", "Seconds"].map((k) => (
                  <div key={k} className="glass-dark rounded-2xl py-4 text-center">
                    <p className="font-display text-3xl font-extrabold text-white tabular-nums sm:text-4xl">
                      {time ? String(time[k]).padStart(2, "0") : "--"}
                    </p>
                    <p className="mt-1 text-[11px] tracking-wider text-white/55 uppercase">{k}</p>
                  </div>
                ))}
              </div>

              <div className="mt-10 flex flex-wrap gap-3">
                <Link href="/contact" className="btn btn-primary">Register now <ArrowRight className="h-4 w-4" /></Link>
                <Link href="/contact" className="btn btn-ghost-light">Call for papers</Link>
              </div>
            </div>

            {/* Agenda */}
            <div className="glass-dark rounded-[1.75rem] p-6 sm:p-8">
              <div className="flex items-center justify-between">
                <h3 className="font-display text-lg font-bold text-white">Programme</h3>
                <div role="tablist" className="flex gap-1 rounded-full bg-white/10 p-1">
                  {ev.agenda.map((d, i) => (
                    <button
                      key={d.day}
                      type="button"
                      role="tab"
                      aria-selected={day === i}
                      onClick={() => setDay(i)}
                      className={`rounded-full px-4 py-1.5 text-xs font-semibold transition-all ${day === i ? "bg-white text-navy" : "text-white/70 hover:text-white"}`}
                    >
                      {d.day}
                    </button>
                  ))}
                </div>
              </div>
              <ol key={day} className="mt-6 space-y-1">
                {ev.agenda[day].items.map(([t, label], i) => (
                  <li
                    key={t}
                    className="flex items-center gap-4 rounded-xl px-3 py-3.5 transition-colors hover:bg-white/5"
                    style={{ animation: `fade-up .5s ${i * 70}ms both` }}
                  >
                    <span className="w-14 shrink-0 font-display text-sm font-bold text-cyan tabular-nums">{t}</span>
                    <span className="h-8 w-px bg-white/15" />
                    <span className="text-sm text-white/85">{label}</span>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
