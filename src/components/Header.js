"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { ArrowRight, Menu, X, Mail, Phone } from "lucide-react";
import { navLinks, site } from "@/data/site";
import { Logo, SocialLinks } from "./ui";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const [section, setSection] = useState("/#home");
  const active = pathname === "/" ? section : pathname;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    // Highlight the nav item for the section currently in view
    const sections = navLinks
      .filter((l) => l.href.startsWith("/#"))
      .map((l) => document.getElementById(l.href.slice(2)))
      .filter(Boolean);
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => e.isIntersecting && setSection(`/#${e.target.id}`)),
      { rootMargin: "-45% 0px -50% 0px" }
    );
    sections.forEach((s) => io.observe(s));

    return () => {
      window.removeEventListener("scroll", onScroll);
      io.disconnect();
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          scrolled
            ? "border-b border-line/70 bg-white/80 py-3 shadow-[0_8px_30px_-18px_rgba(11,31,51,0.25)] backdrop-blur-xl"
            : "border-b border-transparent bg-transparent py-5"
        }`}
      >
        <div className="container-x flex items-center justify-between gap-6">
          <Logo />

          <nav aria-label="Primary" className="hidden xl:block">
            <ul className="flex items-center gap-1">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className={`relative rounded-full px-3.5 py-2 text-sm font-medium transition-colors duration-300 ${
                      active === l.href ? "text-navy" : "text-slate hover:text-navy"
                    }`}
                  >
                    {l.label}
                    <span
                      className={`absolute inset-x-3.5 -bottom-0.5 h-0.5 origin-left rounded-full bg-teal transition-transform duration-500 ${
                        active === l.href ? "scale-x-100" : "scale-x-0"
                      }`}
                    />
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex items-center gap-3">
            <a href="/#contact" className="btn btn-dark hidden !py-3 sm:inline-flex">
              Get Started <ArrowRight className="h-4 w-4" />
            </a>
            <button
              type="button"
              onClick={() => setOpen(true)}
              className="grid h-11 w-11 place-items-center rounded-full border border-line bg-white text-navy transition hover:shadow-soft xl:hidden"
              aria-label="Open menu"
              aria-expanded={open}
              aria-controls="mobile-nav"
            >
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile slide-out navigation */}
      <div
        className={`fixed inset-0 z-[60] xl:hidden ${open ? "pointer-events-auto" : "pointer-events-none"}`}
        aria-hidden={!open}
      >
        <div
          onClick={() => setOpen(false)}
          className={`absolute inset-0 bg-navy/50 backdrop-blur-sm transition-opacity duration-500 ${open ? "opacity-100" : "opacity-0"}`}
        />
        <aside
          id="mobile-nav"
          className={`absolute inset-y-0 right-0 flex w-full max-w-sm flex-col overflow-y-auto bg-navy px-6 pt-5 pb-8 text-white transition-transform duration-500 ease-[cubic-bezier(.2,.8,.2,1)] ${
            open ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex items-center justify-between">
            <Logo light />
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="grid h-11 w-11 place-items-center rounded-full border border-white/15 text-white"
              aria-label="Close menu"
              tabIndex={open ? 0 : -1}
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          <nav aria-label="Mobile" className="mt-10">
            <ul className="space-y-1">
              {navLinks.map((l, i) => (
                <li
                  key={l.href}
                  style={{ transitionDelay: open ? `${120 + i * 45}ms` : "0ms" }}
                  className={`transition-all duration-500 ${open ? "translate-x-0 opacity-100" : "translate-x-6 opacity-0"}`}
                >
                  <a
                    href={l.href}
                    onClick={() => setOpen(false)}
                    tabIndex={open ? 0 : -1}
                    className={`flex items-center justify-between border-b border-white/10 py-4 font-display text-2xl font-semibold ${
                      active === l.href ? "text-cyan" : "text-white"
                    }`}
                  >
                    {l.label}
                    <ArrowRight className="h-5 w-5 opacity-40" />
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="mt-auto space-y-3 pt-10 text-sm text-white/70">
            <a href={`mailto:${site.email}`} className="flex items-center gap-3" tabIndex={open ? 0 : -1}>
              <Mail className="h-4 w-4 text-cyan" /> {site.email}
            </a>
            <a href={site.phoneHref} className="flex items-center gap-3" tabIndex={open ? 0 : -1}>
              <Phone className="h-4 w-4 text-cyan" /> {site.phone}
            </a>
            <a
              href="/#contact"
              onClick={() => setOpen(false)}
              tabIndex={open ? 0 : -1}
              className="btn btn-primary mt-4 w-full"
            >
              Start a Research Project <ArrowRight className="h-4 w-4" />
            </a>
            <SocialLinks className="pt-4" />
          </div>
        </aside>
      </div>
    </>
  );
}
