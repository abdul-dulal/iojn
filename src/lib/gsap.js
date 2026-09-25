"use client";

import { useLayoutEffect, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export { gsap, ScrollTrigger };

const useIsoLayoutEffect = typeof window !== "undefined" ? useLayoutEffect : useEffect;

export const prefersReducedMotion = () =>
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

const VARIANTS = {
  up: { y: 36 },
  down: { y: -24 },
  left: { x: -48 },
  right: { x: 48 },
  scale: { scale: 0.94, y: 16 },
  fade: {},
  img: { clipPath: "inset(12% 12% 12% 12% round 28px)", scale: 1.06 },
};

/**
 * Runs `setup` inside a gsap.context scoped to `ref`, and reveals every
 * [data-reveal="variant"] descendant as it scrolls into view.
 * Optional [data-delay] (seconds) offsets an element within its batch.
 */
export function useGsap(ref, setup) {
  useIsoLayoutEffect(() => {
    const scope = ref.current;
    if (!scope) return;

    const ctx = gsap.context(() => {
      const els = gsap.utils.toArray("[data-reveal]", scope);

      if (prefersReducedMotion()) {
        gsap.set(els, { opacity: 1 });
        return;
      }

      els.forEach((el) => {
        const from = VARIANTS[el.dataset.reveal] || VARIANTS.up;
        gsap.set(el, { opacity: 0, ...from });
      });

      ScrollTrigger.batch(els, {
        start: "top 88%",
        once: true,
        onEnter: (batch) =>
          batch.forEach((el, i) => {
            const isImg = el.dataset.reveal === "img";
            gsap.to(el, {
              opacity: 1,
              x: 0,
              y: 0,
              scale: 1,
              clipPath: isImg ? "inset(0% 0% 0% 0% round 28px)" : undefined,
              duration: isImg ? 1.4 : 1,
              ease: isImg ? "expo.out" : "power3.out",
              delay: i * 0.09 + Number(el.dataset.delay || 0),
              clearProps: isImg ? "clipPath" : "transform",
            });
          }),
      });

      setup?.(scope);
    }, scope);

    return () => ctx.revert();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
}

/** Counts every [data-count] element in `scope` up from 0 when it scrolls into view. */
export function animateCounters(scope) {
  gsap.utils.toArray("[data-count]", scope).forEach((el) => {
    const end = Number(el.dataset.count);
    const obj = { v: 0 };
    el.textContent = "0";
    gsap.to(obj, {
      v: end,
      duration: 2.2,
      ease: "power2.out",
      scrollTrigger: { trigger: el, start: "top 90%", once: true },
      onUpdate: () => (el.textContent = Math.round(obj.v).toLocaleString()),
    });
  });
}
