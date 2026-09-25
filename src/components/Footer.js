import { ArrowRight, ArrowUp, Mail, MapPin, Phone } from "lucide-react";
import { navLinks, serviceLinks, site } from "@/data/site";
import { Logo, SocialLinks } from "./ui";

const quickLinks = navLinks.filter(
  (l) => !["Home", "Resources"].includes(l.label),
);

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-navy-900 text-white">
      <div className="absolute -top-40 left-1/2 h-80 w-[40rem] -translate-x-1/2 rounded-full bg-teal/15 blur-[120px]" />

      <div className="container-x relative">
        {/* Newsletter strip */}
        {/* <div className="flex flex-col gap-6 border-b border-white/10 py-12 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <h3 className="text-2xl font-bold text-white">Stay ahead in research</h3>
            <p className="mt-1 text-white/60">Monthly insights, calls for papers and event updates.</p>
          </div>
          <form className="flex w-full max-w-md gap-2 rounded-full border border-white/10 bg-white/5 p-1.5">
            <label htmlFor="newsletter" className="sr-only">Email address</label>
            <input
              id="newsletter"
              type="email"
              required
              placeholder="Your email address"
              className="min-w-0 flex-1 bg-transparent px-4 text-sm text-white outline-none placeholder:text-white/40"
            />
            <button type="submit" className="btn btn-primary !px-5 !py-3">
              Subscribe <ArrowRight className="h-4 w-4" />
            </button>
          </form>
        </div> */}

        <div className="grid gap-12 py-16 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.3fr]">
          <div>
            <Logo light />
            <p className="mt-6 max-w-xs text-sm leading-relaxed text-white/60">
              The {site.fullName} is an innovative research support centre
              advancing impactful health, environmental and social research
              since {site.founded}.
            </p>
            <SocialLinks className="mt-8" />
          </div>

          <div>
            <h4 className="text-sm font-semibold tracking-wider text-white uppercase">
              Quick Links
            </h4>
            <ul className="mt-6 space-y-3">
              {quickLinks.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="text-sm text-white/60 transition-colors hover:text-cyan"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold tracking-wider text-white uppercase">
              Research Services
            </h4>
            <ul className="mt-6 space-y-3">
              {serviceLinks.map((s) => (
                <li key={s}>
                  <a
                    href="/services"
                    className="text-sm text-white/60 transition-colors hover:text-cyan"
                  >
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold tracking-wider text-white uppercase">
              Contact
            </h4>
            <ul className="mt-6 space-y-4 text-sm text-white/60">
              <li className="flex gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-cyan" />{" "}
                {site.address}
              </li>
              <li>
                <a
                  href={site.phoneHref}
                  className="flex gap-3 transition-colors hover:text-cyan"
                >
                  <Phone className="mt-0.5 h-4 w-4 shrink-0 text-cyan" />{" "}
                  {site.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${site.email}`}
                  className="flex gap-3 transition-colors hover:text-cyan"
                >
                  <Mail className="mt-0.5 h-4 w-4 shrink-0 text-cyan" />{" "}
                  {site.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 border-t border-white/10 py-8 text-sm text-white/50 sm:flex-row">
          <p>Copyright © 2026 {site.fullName}. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="transition-colors hover:text-white">
              Privacy Policy
            </a>
            <a href="#" className="transition-colors hover:text-white">
              Terms of Service
            </a>
            <a
              href="#"
              aria-label="Back to top"
              className="grid h-10 w-10 place-items-center rounded-full border border-white/15 text-white transition-all hover:-translate-y-0.5 hover:border-cyan hover:text-cyan"
            >
              <ArrowUp className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
