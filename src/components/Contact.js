"use client";

import { useRef, useState } from "react";
import { CheckCircle2, Clock, Loader2, Mail, MapPin, Phone, Send } from "lucide-react";
import { useGsap } from "@/lib/gsap";
import { site } from "@/data/site";

const details = [
  { icon: MapPin, label: "Visit us", value: site.address },
  { icon: Phone, label: "Call us", value: site.phone, href: site.phoneHref },
  { icon: Mail, label: "Email us", value: site.email, href: `mailto:${site.email}` },
  { icon: Clock, label: "Working hours", value: site.hours },
];

const fields = [
  { name: "name", label: "Full Name", type: "text", autoComplete: "name", required: true, half: true },
  { name: "email", label: "Email Address", type: "email", autoComplete: "email", required: true, half: true },
  { name: "organization", label: "Organization", type: "text", autoComplete: "organization", half: true },
  { name: "subject", label: "Subject", type: "text", required: true, half: true },
];

export default function Contact() {
  const ref = useRef(null);
  const [status, setStatus] = useState("idle"); // idle | sending | sent
  useGsap(ref);

  const onSubmit = (e) => {
    e.preventDefault();
    setStatus("sending");
    // TODO: connect to an email service / API route. Simulated for now.
    setTimeout(() => {
      setStatus("sent");
      e.target.reset();
    }, 1200);
  };

  return (
    <section id="contact" ref={ref} className="section-y relative overflow-hidden bg-offwhite">
      <div className="absolute -top-40 right-0 h-96 w-96 rounded-full bg-cyan/15 blur-[120px]" />
      <div className="container-x relative grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        <div>
          <span data-reveal="up" className="eyebrow">Contact Us</span>
          <h2 data-reveal="up" className="heading-lg mt-4">Let&apos;s Work Together</h2>
          <p data-reveal="up" className="lead mt-5 max-w-md">
            Tell us about your research goals. A specialist will get back to you within one business day.
          </p>

          <ul className="mt-10 space-y-4">
            {details.map((d) => {
              const Wrapper = d.href ? "a" : "div";
              return (
                <li key={d.label} data-reveal="up">
                  <Wrapper
                    {...(d.href ? { href: d.href } : {})}
                    className="group flex items-start gap-4 rounded-2xl border border-line bg-white p-5 transition-all duration-300 hover:border-teal/30 hover:shadow-soft"
                  >
                    <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-teal/10 text-teal transition-colors duration-300 group-hover:bg-teal group-hover:text-white">
                      <d.icon className="h-5 w-5" />
                    </span>
                    <span>
                      <span className="block text-xs font-semibold tracking-wider text-slate uppercase">{d.label}</span>
                      <span className="mt-1 block font-medium text-ink">{d.value}</span>
                    </span>
                  </Wrapper>
                </li>
              );
            })}
          </ul>
        </div>

        <div data-reveal="up" className="rounded-[2rem] border border-line bg-white p-6 shadow-lift sm:p-10">
          {status === "sent" ? (
            <div className="flex min-h-[26rem] flex-col items-center justify-center text-center" role="status">
              <span className="grid h-16 w-16 place-items-center rounded-full bg-teal/10 text-teal">
                <CheckCircle2 className="h-8 w-8" />
              </span>
              <h3 className="mt-6 text-2xl font-bold">Message received</h3>
              <p className="mt-2 max-w-sm text-slate">Thank you for reaching out. Our team will respond within one business day.</p>
              <button type="button" onClick={() => setStatus("idle")} className="btn btn-outline mt-8">
                Send another message
              </button>
            </div>
          ) : (
            <form onSubmit={onSubmit} className="grid gap-5 sm:grid-cols-2">
              <div className="sm:col-span-2">
                <h3 className="text-2xl font-bold">Send us a message</h3>
                <p className="mt-1 text-sm text-slate">Fields marked * are required.</p>
              </div>
              {fields.map((f) => (
                <label key={f.name} className={`block ${f.half ? "" : "sm:col-span-2"}`}>
                  <span className="mb-2 block text-sm font-medium text-ink">
                    {f.label} {f.required && <span className="text-teal">*</span>}
                  </span>
                  <input
                    name={f.name}
                    type={f.type}
                    autoComplete={f.autoComplete}
                    required={f.required}
                    placeholder={f.label}
                    className="input"
                  />
                </label>
              ))}
              <label className="block sm:col-span-2">
                <span className="mb-2 block text-sm font-medium text-ink">
                  Message <span className="text-teal">*</span>
                </span>
                <textarea name="message" rows={5} required placeholder="Briefly describe your research project…" className="input resize-none" />
              </label>
              <div className="flex flex-col gap-4 sm:col-span-2 sm:flex-row sm:items-center sm:justify-between">
                <p className="text-xs text-slate">Your information is kept strictly confidential.</p>
                <button type="submit" disabled={status === "sending"} className="btn btn-primary disabled:opacity-70">
                  {status === "sending" ? (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin" /> Sending…
                    </>
                  ) : (
                    <>
                      Send Message <Send className="h-4 w-4" />
                    </>
                  )}
                </button>
              </div>
            </form>
          )}
        </div>

        {/* Map */}
        <div data-reveal="up" className="overflow-hidden rounded-[2rem] border border-line bg-white p-2 shadow-soft lg:col-span-2">
          <iframe
            title="IOJN office location"
            src={`https://www.google.com/maps?q=${encodeURIComponent(site.mapQuery)}&output=embed`}
            className="h-80 w-full rounded-[1.6rem] grayscale-[0.4] sm:h-96"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
}
