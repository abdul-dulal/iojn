"use client";

import { useRef } from "react";
import { MapPin } from "lucide-react";
import { gsap, useGsap, prefersReducedMotion } from "@/lib/gsap";
import { regions } from "@/data/site";
import { SectionHeading } from "./ui";

/* ---------- Dotted world map (equirectangular) ---------- */
// Land longitude spans per 5° latitude band — a deliberately coarse, stylised outline.
const LAND = {
  75: [[-120, -75], [-60, -20], [55, 65], [95, 115]],
  70: [[-162, -142], [-130, -85], [-80, -65], [-55, -22], [18, 30], [60, 180]],
  65: [[-168, -140], [-135, -88], [-80, -62], [-52, -38], [-24, -13], [12, 30], [35, 180]],
  60: [[-165, -140], [-135, -78], [-70, -62], [-48, -42], [5, 12], [15, 165]],
  55: [[-165, -155], [-132, -60], [-7, -1], [8, 12], [20, 160]],
  50: [[-128, -56], [-5, 1], [2, 140]],
  45: [[-124, -62], [-1, 28], [37, 48], [52, 135], [141, 145]],
  40: [[-124, -74], [-9, -1], [9, 18], [20, 45], [48, 53], [55, 122], [126, 129], [139, 142]],
  35: [[-121, -76], [-7, 11], [33, 120], [127, 129], [132, 140]],
  30: [[-116, -81], [-10, 32], [34, 120]],
  25: [[-112, -97], [-82, -80], [-16, 35], [37, 56], [61, 92], [97, 121]],
  20: [[-105, -87], [-80, -72], [-17, 38], [40, 57], [72, 87], [93, 110], [120, 122]],
  15: [[-97, -84], [-17, 40], [42, 52], [74, 80], [97, 109], [120, 123]],
  10: [[-86, -61], [-15, 50], [76, 80], [98, 106], [122, 126]],
  5: [[-78, -52], [-8, 48], [100, 104], [114, 119], [125, 127]],
  0: [[-80, -50], [9, 42], [98, 104], [109, 118], [120, 124]],
  "-5": [[-81, -35], [11, 40], [105, 115], [132, 150]],
  "-10": [[-78, -36], [13, 40], [120, 125], [141, 143]],
  "-15": [[-76, -39], [13, 40], [44, 50], [125, 145]],
  "-20": [[-70, -40], [13, 36], [44, 49], [114, 149]],
  "-25": [[-70, -47], [15, 33], [44, 47], [114, 153]],
  "-30": [[-72, -51], [17, 31], [115, 153]],
  "-35": [[-72, -55], [18, 22], [116, 120], [135, 150], [173, 175]],
  "-40": [[-73, -62], [144, 148], [172, 176]],
  "-45": [[-74, -65], [167, 171]],
  "-50": [[-75, -68]],
  "-55": [[-71, -66]],
};

const W = 1000;
const LAT_TOP = 80;
const LAT_BOTTOM = -58;
const K = W / 360;
const H = (LAT_TOP - LAT_BOTTOM) * K;
const project = (lon, lat) => [(lon + 180) * K, (LAT_TOP - lat) * K];

const STEP = 3.4;
const dots = [];
for (let lat = 76; lat >= -56; lat -= STEP) {
  const spans = LAND[Math.round(lat / 5) * 5] || [];
  for (let lon = -178; lon <= 180; lon += STEP) {
    if (spans.some(([a, b]) => lon >= a && lon <= b)) dots.push(project(lon, lat));
  }
}

const hub = regions.find((r) => r.hub);
const [hx, hy] = project(hub.lon, hub.lat);
const arcs = regions
  .filter((r) => !r.hub)
  .map((r) => {
    const [x, y] = project(r.lon, r.lat);
    const cx = (x + hx) / 2;
    const cy = Math.min(y, hy) - Math.abs(x - hx) * 0.28;
    return `M${hx.toFixed(1)} ${hy.toFixed(1)} Q${cx.toFixed(1)} ${cy.toFixed(1)} ${x.toFixed(1)} ${y.toFixed(1)}`;
  });

export default function GlobalNetwork() {
  const ref = useRef(null);

  useGsap(ref, (scope) => {
    const q = gsap.utils.selector(scope);
    if (prefersReducedMotion()) return;

    const tl = gsap.timeline({ scrollTrigger: { trigger: q("[data-map]")[0], start: "top 75%", once: true } });
    tl.from(q(".map-dot"), { opacity: 0, duration: 0.6, stagger: { each: 0.0015, from: "center" } })
      .from(q(".map-node"), { scale: 0, transformOrigin: "center", transformBox: "fill-box", duration: 0.6, stagger: 0.1, ease: "back.out(2)" }, "-=0.6")
      .fromTo(q(".map-arc"), { strokeDashoffset: 1 }, { strokeDashoffset: 0, duration: 1.4, stagger: 0.15, ease: "power2.inOut" }, "-=0.3")
      .from(q(".map-label"), { opacity: 0, y: 8, duration: 0.6, stagger: 0.08 }, "-=0.8")
      .from(q(".map-flow"), { opacity: 0, duration: 0.8 }, "-=0.4");

    gsap.to(q(".map-flow"), { strokeDashoffset: -60, duration: 2.4, ease: "none", repeat: -1 });
  });

  return (
    <section id="network" ref={ref} className="section-y relative overflow-hidden bg-white">
      <div className="container-x">
        <SectionHeading
          align="center"
          eyebrow="Global Research Network"
          title={
            <>
              Connecting Researchers, Institutions &amp; Professionals{" "}
              <span className="text-gradient">Across Borders</span>
            </>
          }
          text="From our hub in Dhaka, IOJN collaborates with universities, health agencies and research organizations across five regions."
        />

        <div data-map className="relative mx-auto mt-14 max-w-6xl">
          <div className="absolute inset-0 -z-10 rounded-[2.5rem] bg-linear-to-b from-mist/70 to-transparent" />
          <svg viewBox={`0 0 ${W} ${H.toFixed(0)}`} className="h-auto w-full" role="img" aria-label="World map showing IOJN's partner regions">
            <defs>
              <linearGradient id="arcGrad" x1="0" x2="1">
                <stop offset="0" stopColor="#57C7C8" />
                <stop offset="1" stopColor="#145DA0" />
              </linearGradient>
              <radialGradient id="nodeGlow">
                <stop offset="0" stopColor="#57C7C8" stopOpacity=".55" />
                <stop offset="1" stopColor="#57C7C8" stopOpacity="0" />
              </radialGradient>
            </defs>

            <g fill="#145DA0" fillOpacity=".22">
              {dots.map(([x, y], i) => (
                <circle key={i} className="map-dot" cx={x.toFixed(1)} cy={y.toFixed(1)} r="2.1" />
              ))}
            </g>

            {arcs.map((d, i) => (
              <g key={i}>
                <path className="map-arc" d={d} pathLength="1" strokeDasharray="1" fill="none" stroke="url(#arcGrad)" strokeWidth="1.6" strokeOpacity=".7" />
                <path className="map-flow" d={d} fill="none" stroke="#0F8B8D" strokeWidth="2.4" strokeLinecap="round" strokeDasharray="3 57" />
              </g>
            ))}

            {regions.map((r) => {
              const [x, y] = project(r.lon, r.lat);
              return (
                <g key={r.name} className="map-node">
                  <circle cx={x} cy={y} r={r.hub ? 34 : 22} fill="url(#nodeGlow)" />
                  <circle cx={x} cy={y} r={r.hub ? 9 : 6} fill={r.hub ? "#0B1F33" : "#0F8B8D"} stroke="#fff" strokeWidth="2.5" />
                  <circle cx={x} cy={y} r={r.hub ? 9 : 6} fill="none" stroke={r.hub ? "#0F8B8D" : "#57C7C8"} strokeWidth="2">
                    <animate attributeName="r" from={r.hub ? 9 : 6} to={r.hub ? 30 : 20} dur="2.4s" repeatCount="indefinite" />
                    <animate attributeName="opacity" from="0.8" to="0" dur="2.4s" repeatCount="indefinite" />
                  </circle>
                </g>
              );
            })}
          </svg>

          {/* HTML labels (desktop) */}
          {regions.map((r) => {
            const [x, y] = project(r.lon, r.lat);
            return (
              <div
                key={r.name}
                className="map-label pointer-events-none absolute hidden -translate-x-1/2 md:block"
                style={{ left: `${(x / W) * 100}%`, top: `calc(${(y / H) * 100}% + ${r.hub ? 22 : 16}px)` }}
              >
                <span className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold whitespace-nowrap shadow-soft ${r.hub ? "bg-navy text-white" : "glass text-navy"}`}>
                  {r.hub && <MapPin className="h-3 w-3 text-cyan" />}
                  {r.hub ? "Dhaka HQ · Asia" : r.name}
                </span>
              </div>
            );
          })}
        </div>

        <div className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
          {regions.map((r) => (
            <div
              key={r.name}
              data-reveal="up"
              className={`rounded-2xl border p-5 transition-all duration-500 hover:-translate-y-1 hover:shadow-soft ${
                r.hub ? "border-transparent bg-navy text-white" : "border-line bg-offwhite"
              }`}
            >
              <div className="flex items-center gap-2">
                <span className={`h-2 w-2 rounded-full ${r.hub ? "bg-cyan" : "bg-teal"}`} />
                <p className={`font-display font-bold ${r.hub ? "text-white" : "text-navy"}`}>{r.name}</p>
              </div>
              <p className={`mt-2 text-xs ${r.hub ? "text-white/60" : "text-slate"}`}>{r.countries}</p>
              <p className={`mt-3 font-display text-2xl font-extrabold ${r.hub ? "text-cyan" : "text-teal"}`}>
                {r.partners}
                <span className={`ml-1 text-xs font-medium ${r.hub ? "text-white/60" : "text-slate"}`}>partners</span>
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
