"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ChevronRight } from "lucide-react";
import { gsap, useGsap, prefersReducedMotion } from "@/lib/gsap";

/**
 * Shared hero for inner pages.
 * @param {{ eyebrow, title, highlight, text, image, badge?: {value,label}, anchors?: {label,href}[] }} props
 */
export default function PageHero({ eyebrow, title, highlight, text, image, badge, anchors = [] }) {
  const ref = useRef(null);

  useGsap(ref, (scope) => {
    if (prefersReducedMotion()) return;
    const q = gsap.utils.selector(scope);
    gsap.set(q(".hero-line > span"), { visibility: "visible" });
    gsap.from(q(".hero-line > span"), { yPercent: 115, duration: 1.2, stagger: 0.12, ease: "power4.out", delay: 0.05 });
    gsap.fromTo(
      q("[data-page-img]"),
      { clipPath: "inset(14% 14% 14% 14% round 32px)" },
      { clipPath: "inset(0% 0% 0% 0% round 32px)", duration: 1.5, ease: "expo.out", delay: 0.15 }
    );
    gsap.from(q("[data-page-img] img"), { scale: 1.2, duration: 1.8, ease: "expo.out", delay: 0.15 });
    gsap.to(q("[data-page-img] img"), {
      yPercent: 8,
      ease: "none",
      scrollTrigger: { trigger: scope, start: "top top", end: "bottom top", scrub: true },
    });
  });

  return (
    <section ref={ref} className="relative isolate overflow-hidden bg-offwhite pt-32 pb-16 sm:pt-40 lg:pb-24">
      <div className="bg-grid pointer-events-none absolute inset-0 -z-10 [mask-image:radial-gradient(ellipse_at_top_left,black_25%,transparent_70%)]" />
      <div className="absolute -top-40 right-[-10%] -z-10 h-[32rem] w-[32rem] rounded-full bg-cyan/20 blur-[120px]" />
      <div className="absolute bottom-0 left-[-10%] -z-10 h-72 w-72 rounded-full bg-royal/10 blur-[100px]" />

      <div className="container-x grid items-center gap-14 lg:grid-cols-[1.1fr_1fr] lg:gap-16">
        <div>
          <nav aria-label="Breadcrumb" data-reveal="up" className="flex items-center gap-1.5 text-sm text-slate">
            <Link href="/" className="transition-colors hover:text-navy">Home</Link>
            <ChevronRight className="h-3.5 w-3.5" />
            <span className="font-medium text-navy">{eyebrow}</span>
          </nav>

          <h1 className="mt-6 font-display text-[2.4rem] leading-[1.06] font-extrabold tracking-tight text-navy sm:text-5xl lg:text-[3.2rem] xl:text-[3.5rem]">
            <span className="hero-line block overflow-hidden pb-1"><span className="block">{title}</span></span>
            {highlight && (
              <span className="hero-line block overflow-hidden pb-2"><span className="text-gradient block">{highlight}</span></span>
            )}
          </h1>

          <p data-reveal="up" className="lead mt-6 max-w-xl">{text}</p>

          {anchors.length > 0 && (
            <div data-reveal="up" className="mt-10 flex flex-wrap gap-2">
              <span className="mr-1 flex items-center text-xs font-semibold tracking-[0.16em] text-slate uppercase">On this page</span>
              {anchors.map((a) => (
                <a
                  key={a.href}
                  href={a.href}
                  className="group inline-flex items-center gap-1.5 rounded-full border border-line bg-white px-4 py-2 text-sm font-medium text-navy transition-all hover:-translate-y-0.5 hover:border-teal/40 hover:shadow-soft"
                >
                  {a.label}
                  <ArrowDown className="h-3.5 w-3.5 text-teal transition-transform group-hover:translate-y-0.5" />
                </a>
              ))}
            </div>
          )}
        </div>

        <div className="relative">
          <div data-page-img className="relative aspect-[5/4] overflow-hidden rounded-[2rem] bg-navy shadow-lift">
            <Image src={image} alt="" fill preload sizes="(min-width: 1024px) 42vw, 92vw" className="object-cover" />
            <div className="absolute inset-0 bg-linear-to-tr from-navy/60 via-navy/10 to-transparent" />
          </div>
          <div className="absolute -top-5 -right-5 -z-10 hidden h-32 w-32 rounded-[1.75rem] border border-dashed border-teal/40 sm:block" />
          {badge && (
            <div data-reveal="scale" className="absolute -bottom-6 left-4 sm:-left-6">
              <div className="glass animate-float rounded-2xl px-5 py-4 shadow-lift">
                <p className="font-display text-3xl font-extrabold text-navy">{badge.value}</p>
                <p className="text-xs text-slate">{badge.label}</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
