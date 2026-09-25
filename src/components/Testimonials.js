"use client";

import { useRef } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination, A11y } from "swiper/modules";
import { ArrowLeft, ArrowRight, Quote, Star } from "lucide-react";
import { useGsap } from "@/lib/gsap";
import { testimonials } from "@/data/site";
import { SectionHeading } from "./ui";
import "swiper/css";
import "swiper/css/pagination";

export default function Testimonials() {
  const ref = useRef(null);
  useGsap(ref);

  return (
    <section ref={ref} className="section-y relative overflow-hidden bg-offwhite">
      <div className="absolute top-0 left-1/2 h-px w-2/3 -translate-x-1/2 bg-linear-to-r from-transparent via-teal/40 to-transparent" />
      <div className="container-x">
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <SectionHeading eyebrow="Testimonials" title="What Researchers & Professionals Say" />
          <div data-reveal="up" className="flex gap-3">
            <button type="button" aria-label="Previous testimonial" className="t-prev grid h-12 w-12 place-items-center rounded-full border border-line bg-white text-navy transition hover:border-navy hover:bg-navy hover:text-white">
              <ArrowLeft className="h-5 w-5" />
            </button>
            <button type="button" aria-label="Next testimonial" className="t-next grid h-12 w-12 place-items-center rounded-full bg-navy text-white transition hover:bg-teal">
              <ArrowRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        <div data-reveal="up" className="mt-14">
          <Swiper
            className="testimonial-swiper !pb-14"
            modules={[Autoplay, Navigation, Pagination, A11y]}
            navigation={{ prevEl: ".t-prev", nextEl: ".t-next" }}
            pagination={{ clickable: true }}
            autoplay={{ delay: 6000, disableOnInteraction: false, pauseOnMouseEnter: true }}
            rewind
            spaceBetween={24}
            slidesPerView={1}
            breakpoints={{ 768: { slidesPerView: 2 }, 1200: { slidesPerView: 2.4 } }}
          >
            {testimonials.map((t) => (
              <SwiperSlide key={t.name} className="!h-auto">
                <figure className="flex h-full flex-col rounded-[1.75rem] border border-line bg-white p-7 shadow-soft sm:p-9">
                  <div className="flex items-center justify-between">
                    <div className="flex gap-0.5 text-amber-400" aria-label="5 out of 5 stars">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-current" />
                      ))}
                    </div>
                    <Quote className="h-9 w-9 text-teal/20" />
                  </div>
                  <blockquote className="mt-6 flex-1 text-[17px] leading-relaxed text-ink">“{t.quote}”</blockquote>
                  <figcaption className="mt-8 flex items-center gap-4 border-t border-line pt-6">
                    <Image src={t.image} alt={t.name} width={56} height={56} className="h-14 w-14 rounded-full object-cover ring-4 ring-mist" />
                    <div>
                      <p className="font-display font-bold text-navy">{t.name}</p>
                      <p className="text-sm text-slate">{t.role}</p>
                      <p className="text-xs font-medium text-teal">{t.org}</p>
                    </div>
                  </figcaption>
                </figure>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
