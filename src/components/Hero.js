"use client";

import { useRef } from "react";
import Image from "next/image";
import { ArrowRight, ArrowUpRight, Globe, PlayCircle, Sparkles, TrendingUp } from "lucide-react";
import { gsap, useGsap, prefersReducedMotion } from "@/lib/gsap";
import { images } from "@/data/site";

const particles = Array.from({ length: 18 }, (_, i) => ({
  cx: (i * 53) % 100,
  cy: (i * 37 + 11) % 100,
  r: 1 + (i % 3) * 0.6,
}));

const avatars = [
  "1573496359142-b8d87734a5a2",
  "1560250097-0b93528c311a",
  "1580489944761-15a19d654956",
  "1507003211169-0a1dd7228f2d",
];

export default function Hero() {
  const ref = useRef(null);

  useGsap(ref, (scope) => {
    if (prefersReducedMotion()) {
      gsap.set(scope.querySelectorAll("[data-hero]"), { opacity: 1 });
      return;
    }
    const q = gsap.utils.selector(scope);
    gsap.set(q("[data-hero], .hero-line > span"), { visibility: "visible" });
    const tl = gsap.timeline({ defaults: { ease: "power4.out" } });

    tl.from(q("[data-hero='badge']"), { y: 20, opacity: 0, duration: 0.8 })
      .from(q(".hero-line > span"), { yPercent: 115, duration: 1.2, stagger: 0.12 }, "-=0.5")
      .from(q("[data-hero='copy']"), { y: 24, opacity: 0, duration: 1, stagger: 0.1 }, "-=0.8")
      .fromTo(
        q("[data-hero='frame']"),
        { clipPath: "inset(18% 18% 18% 18% round 32px)", opacity: 0 },
        { clipPath: "inset(0% 0% 0% 0% round 32px)", opacity: 1, duration: 1.6, ease: "expo.out" },
        0.2
      )
      .from(q("[data-hero='frame'] img"), { scale: 1.25, duration: 2, ease: "expo.out" }, 0.2)
      .from(q("[data-hero='card']"), { y: 30, opacity: 0, scale: 0.92, duration: 1, stagger: 0.14, ease: "back.out(1.4)" }, 0.9)
      .from(q(".orbit"), { scale: 0.6, opacity: 0, duration: 1.6, stagger: 0.1, transformOrigin: "50% 50%" }, 0.4);

    // Continuous ambient motion
    gsap.to(q(".orbit-spin"), { rotate: 360, duration: 60, ease: "none", repeat: -1, transformOrigin: "50% 50%" });
    gsap.to(q(".orbit-spin-rev"), { rotate: -360, duration: 80, ease: "none", repeat: -1, transformOrigin: "50% 50%" });
    q(".particle").forEach((p) =>
      gsap.to(p, {
        x: gsap.utils.random(-14, 14),
        y: gsap.utils.random(-18, 18),
        opacity: gsap.utils.random(0.2, 0.9),
        duration: gsap.utils.random(3, 6),
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      })
    );
    q("[data-float]").forEach((el, i) =>
      gsap.to(el, { y: -10, duration: 3 + i * 0.6, repeat: -1, yoyo: true, ease: "sine.inOut", delay: i * 0.4 })
    );

    // Parallax on scroll
    gsap.to(q("[data-hero='frame'] img"), {
      yPercent: 10,
      ease: "none",
      scrollTrigger: { trigger: scope, start: "top top", end: "bottom top", scrub: true },
    });
    gsap.to(q("[data-hero='bg']"), {
      yPercent: 18,
      ease: "none",
      scrollTrigger: { trigger: scope, start: "top top", end: "bottom top", scrub: true },
    });
  });

  return (
    <section
      id="home"
      ref={ref}
      className="relative isolate overflow-hidden bg-offwhite pt-32 pb-20 sm:pt-36 lg:pt-44 lg:pb-32"
    >
      {/* Background */}
      <div data-hero="bg" className="pointer-events-none absolute inset-0 -z-10">
        <div className="bg-grid absolute inset-0 [mask-image:radial-gradient(ellipse_at_top,black_30%,transparent_75%)]" />
        <div className="absolute -top-40 right-[-10%] h-[36rem] w-[36rem] rounded-full bg-cyan/20 blur-[120px]" />
        <div className="absolute top-1/3 -left-40 h-[28rem] w-[28rem] rounded-full bg-royal/10 blur-[120px]" />
      </div>

      <div className="container-x grid items-center gap-16 lg:grid-cols-[1.05fr_1fr] lg:gap-12">
        {/* Copy */}
        <div className="relative z-10">
          <span
            data-hero="badge"
            className="inline-flex items-center gap-2 rounded-full border border-teal/20 bg-white/80 py-1.5 pr-4 pl-1.5 text-[11px] font-semibold tracking-[0.16em] text-navy uppercase shadow-soft backdrop-blur"
          >
            <span className="grid h-6 w-6 place-items-center rounded-full bg-teal/10 text-teal">
              <Sparkles className="h-3.5 w-3.5" />
            </span>
            Global Research &amp; Innovation Network
          </span>

          <h1 className="mt-7 font-display text-[2.4rem] leading-[1.05] font-extrabold tracking-tight text-navy sm:text-6xl lg:text-[3.3rem] xl:text-[3.8rem]">
            <span className="hero-line block overflow-hidden pb-1">
              <span className="block">Advancing Research</span>
            </span>
            <span className="hero-line block overflow-hidden pb-2">
              <span className="text-gradient block">For a Better Future</span>
            </span>
          </h1>

          <p data-hero="copy" className="lead mt-7 max-w-xl">
            IOJN empowers researchers, academics, institutions and organizations with end-to-end
            support in research development, data analysis, scientific publication and knowledge
            sharing — turning ideas into evidence that matters.
          </p>

          <div data-hero="copy" className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a href="/services" className="btn btn-primary">
              Explore Our Services <ArrowRight className="h-4 w-4" />
            </a>
            <a href="/contact" className="btn btn-outline">
              <PlayCircle className="h-4 w-4 text-teal" /> Start a Research Project
            </a>
          </div>

          <div data-hero="copy" className="mt-12 flex items-center gap-5">
            <div className="flex -space-x-3">
              {avatars.map((id) => (
                <Image
                  key={id}
                  src={`https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=96&h=96&q=80`}
                  alt=""
                  width={44}
                  height={44}
                  className="h-11 w-11 rounded-full border-2 border-white object-cover"
                />
              ))}
            </div>
            <div className="text-sm leading-snug">
              <p className="font-semibold text-navy">Trusted by 1,200+ researchers</p>
              <p className="text-slate">across 20+ countries since 2020</p>
            </div>
          </div>
        </div>

        {/* Visual composition */}
        <div className="relative mx-auto w-full max-w-[34rem] lg:max-w-none">
          {/* Orbits + particles */}
          <svg
            className="pointer-events-none absolute top-1/2 left-1/2 -z-0 h-[125%] w-[125%] -translate-x-1/2 -translate-y-1/2"
            viewBox="0 0 600 600"
            fill="none"
            aria-hidden="true"
          >
            <g className="orbit orbit-spin">
              <circle cx="300" cy="300" r="270" stroke="#145DA0" strokeOpacity=".12" strokeDasharray="2 8" />
              <circle cx="570" cy="300" r="5" fill="#57C7C8" />
              <circle cx="30" cy="300" r="3" fill="#145DA0" fillOpacity=".5" />
            </g>
            <g className="orbit orbit-spin-rev">
              <circle cx="300" cy="300" r="215" stroke="#0F8B8D" strokeOpacity=".16" />
              <circle cx="300" cy="85" r="4" fill="#0F8B8D" />
              <circle cx="148" cy="452" r="3" fill="#57C7C8" />
            </g>
            <g className="orbit">
              {particles.map((p, i) => (
                <circle
                  key={i}
                  className="particle"
                  cx={p.cx * 6}
                  cy={p.cy * 6}
                  r={p.r}
                  fill={i % 2 ? "#57C7C8" : "#145DA0"}
                  fillOpacity=".5"
                />
              ))}
            </g>
          </svg>

          <div className="relative grid grid-cols-6 gap-4">
            <div
              data-hero="frame"
              className="relative col-span-6 aspect-[4/4.6] overflow-hidden rounded-[2rem] bg-navy shadow-lift sm:col-span-5 sm:col-start-2"
            >
              <Image
                src={images.heroMain}
                alt="Researcher analyzing data in a modern laboratory"
                fill
                preload
                sizes="(min-width: 1024px) 40vw, 90vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-linear-to-t from-navy/80 via-navy/10 to-transparent" />
              <div className="absolute inset-x-5 bottom-5 hidden items-end justify-end gap-4 sm:flex">
                <div className="text-right text-white">
                  <p className="text-[11px] font-semibold tracking-[0.16em] text-cyan uppercase">
                    Ongoing study
                  </p>
                  <p className="mt-1 font-display text-lg font-semibold">Health &amp; Environment 2026</p>
                </div>
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-white/15 text-white backdrop-blur">
                  <ArrowUpRight className="h-5 w-5" />
                </span>
              </div>
            </div>
          </div>

          {/* Floating: projects */}
          <div
            data-hero="card"
            className="absolute top-8 -left-2 hidden w-52 sm:-left-6 sm:block lg:-left-12"
          >
            <div data-float className="glass rounded-2xl p-4 shadow-lift">
              <div className="flex items-center justify-between">
                <span className="grid h-9 w-9 place-items-center rounded-xl bg-teal/10 text-teal">
                  <TrendingUp className="h-4.5 w-4.5" />
                </span>
                <span className="rounded-full bg-emerald-50 px-2 py-0.5 text-[10px] font-semibold text-emerald-600">
                  +24%
                </span>
              </div>
              <p className="mt-3 font-display text-2xl font-extrabold text-navy">500+</p>
              <p className="text-xs text-slate">Research Projects</p>
              <svg viewBox="0 0 160 36" className="mt-3 h-8 w-full" aria-hidden="true">
                <defs>
                  <linearGradient id="spark" x1="0" x2="0" y1="0" y2="1">
                    <stop offset="0" stopColor="#0F8B8D" stopOpacity=".3" />
                    <stop offset="1" stopColor="#0F8B8D" stopOpacity="0" />
                  </linearGradient>
                </defs>
                <path d="M0 30 L20 26 L40 28 L60 18 L80 21 L100 12 L120 15 L140 6 L160 8 L160 36 L0 36Z" fill="url(#spark)" />
                <path d="M0 30 L20 26 L40 28 L60 18 L80 21 L100 12 L120 15 L140 6 L160 8" fill="none" stroke="#0F8B8D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          </div>

          {/* Floating: partners */}
          <div data-hero="card" className="absolute top-1/2 -right-2 sm:-right-6 lg:-right-8">
            <div data-float className="glass flex items-center gap-3 rounded-2xl py-3 pr-5 pl-3 shadow-lift">
              <div className="relative h-12 w-12 overflow-hidden rounded-xl">
                <Image src={images.heroSecondary} alt="" fill sizes="48px" className="object-cover" />
              </div>
              <div>
                <p className="font-display text-xl font-extrabold text-navy">50+</p>
                <p className="text-xs text-slate">Research Partners</p>
              </div>
            </div>
          </div>

          {/* Floating: network */}
          <div data-hero="card" className="absolute -bottom-6 left-2 sm:left-4 lg:-left-4">
            <div data-float className="flex items-center gap-3 rounded-2xl bg-navy py-3.5 pr-5 pl-3.5 text-white shadow-lift">
              <span className="relative grid h-10 w-10 place-items-center rounded-full bg-cyan/15 text-cyan">
                <span className="absolute inset-0 animate-pulse-ring rounded-full bg-cyan/30" />
                <Globe className="relative h-5 w-5" />
              </span>
              <div>
                <p className="text-sm font-semibold">Global Research Network</p>
                <p className="text-[11px] text-white/60">5 regions · 20+ countries</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
