"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowRight, ChevronDown, Menu, X, Mail, Phone } from "lucide-react";
import { flatNavLinks, navLinks, site } from "@/data/site";
import { Logo, SocialLinks } from "./ui";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [dropdown, setDropdown] = useState(null);
  const [mobileSub, setMobileSub] = useState(null);
  const pathname = usePathname();
  // Highlight the nav item for the current page (and its sub-pages)
  const active =
    flatNavLinks.find((l) => l.href !== "/" && pathname.startsWith(l.href))?.href ??
    (pathname === "/" ? "/" : null);
  const isActive = (l) => (l.children ? l.children.some((c) => c.href === active) : l.href === active);

  // Close the desktop dropdown whenever the route changes
  useEffect(() => setDropdown(null), [pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
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
              {navLinks.map((l) =>
                l.children ? (
                  <li
                    key={l.label}
                    className="relative"
                    onMouseEnter={() => setDropdown(l.label)}
                    onMouseLeave={() => setDropdown(null)}
                  >
                    <button
                      type="button"
                      onClick={() => setDropdown(dropdown === l.label ? null : l.label)}
                      aria-expanded={dropdown === l.label}
                      aria-haspopup="true"
                      className={`relative flex items-center gap-1 rounded-full px-3.5 py-2 text-sm font-medium transition-colors duration-300 ${
                        isActive(l) ? "text-navy" : "text-slate hover:text-navy"
                      }`}
                    >
                      {l.label}
                      <ChevronDown
                        className={`h-4 w-4 transition-transform duration-300 ${dropdown === l.label ? "rotate-180" : ""}`}
                      />
                      <span
                        className={`absolute inset-x-3.5 -bottom-0.5 h-0.5 origin-left rounded-full bg-teal transition-transform duration-500 ${
                          isActive(l) ? "scale-x-100" : "scale-x-0"
                        }`}
                      />
                    </button>
                    <div
                      className={`absolute left-0 top-full pt-3 transition-all duration-300 ${
                        dropdown === l.label
                          ? "visible translate-y-0 opacity-100"
                          : "invisible -translate-y-2 opacity-0"
                      }`}
                    >
                      <ul className="min-w-48 rounded-2xl border border-line bg-white p-2 shadow-[0_20px_40px_-20px_rgba(11,31,51,0.35)]">
                        {l.children.map((c) => (
                          <li key={c.href}>
                            <Link
                              href={c.href}
                              className={`flex items-center justify-between rounded-xl px-4 py-2.5 text-sm font-medium transition-colors duration-300 ${
                                active === c.href ? "bg-teal/10 text-navy" : "text-slate hover:bg-teal/5 hover:text-navy"
                              }`}
                            >
                              {c.label}
                              <ArrowRight className="h-3.5 w-3.5 opacity-40" />
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </li>
                ) : (
                  <li key={l.href}>
                    <Link
                      href={l.href}
                      className={`relative rounded-full px-3.5 py-2 text-sm font-medium transition-colors duration-300 ${
                        isActive(l) ? "text-navy" : "text-slate hover:text-navy"
                      }`}
                    >
                      {l.label}
                      <span
                        className={`absolute inset-x-3.5 -bottom-0.5 h-0.5 origin-left rounded-full bg-teal transition-transform duration-500 ${
                          isActive(l) ? "scale-x-100" : "scale-x-0"
                        }`}
                      />
                    </Link>
                  </li>
                ),
              )}
            </ul>
          </nav>

          <div className="flex items-center gap-3">
            <Link href="/contact" className="btn btn-dark hidden !py-3 sm:inline-flex">
              Get Started <ArrowRight className="h-4 w-4" />
            </Link>
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
                  key={l.href ?? l.label}
                  style={{ transitionDelay: open ? `${120 + i * 45}ms` : "0ms" }}
                  className={`transition-all duration-500 ${open ? "translate-x-0 opacity-100" : "translate-x-6 opacity-0"}`}
                >
                  {l.children ? (
                    <>
                      <button
                        type="button"
                        onClick={() => setMobileSub(mobileSub === l.label ? null : l.label)}
                        tabIndex={open ? 0 : -1}
                        aria-expanded={mobileSub === l.label}
                        className={`flex w-full items-center justify-between border-b border-white/10 py-4 text-left font-display text-2xl font-semibold ${
                          isActive(l) ? "text-cyan" : "text-white"
                        }`}
                      >
                        {l.label}
                        <ChevronDown
                          className={`h-5 w-5 opacity-60 transition-transform duration-300 ${mobileSub === l.label ? "rotate-180" : ""}`}
                        />
                      </button>
                      <div
                        className={`grid transition-all duration-500 ${
                          mobileSub === l.label ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                        }`}
                      >
                        <ul className="overflow-hidden pl-4">
                          {l.children.map((c) => (
                            <li key={c.href}>
                              <Link
                                href={c.href}
                                onClick={() => setOpen(false)}
                                tabIndex={open && mobileSub === l.label ? 0 : -1}
                                className={`flex items-center justify-between border-b border-white/5 py-3 text-lg font-medium ${
                                  active === c.href ? "text-cyan" : "text-white/80"
                                }`}
                              >
                                {c.label}
                                <ArrowRight className="h-4 w-4 opacity-40" />
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </>
                  ) : (
                    <Link
                      href={l.href}
                      onClick={() => setOpen(false)}
                      tabIndex={open ? 0 : -1}
                      className={`flex items-center justify-between border-b border-white/10 py-4 font-display text-2xl font-semibold ${
                        isActive(l) ? "text-cyan" : "text-white"
                      }`}
                    >
                      {l.label}
                      <ArrowRight className="h-5 w-5 opacity-40" />
                    </Link>
                  )}
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
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              tabIndex={open ? 0 : -1}
              className="btn btn-primary mt-4 w-full"
            >
              Start a Research Project <ArrowRight className="h-4 w-4" />
            </Link>
            <SocialLinks className="pt-4" />
          </div>
        </aside>
      </div>
    </>
  );
}
