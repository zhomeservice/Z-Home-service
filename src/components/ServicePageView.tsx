import { Link } from "@tanstack/react-router";
import { Check, Phone } from "lucide-react";
import { WhatsappIcon } from "./SocialIcons";
import { Section } from "./Section";
import { BeforeAfterSlider } from "./BeforeAfterSlider";
import { Faq } from "./Faq";
import { ServiceCard } from "./ServiceCard";
import { QuoteCta } from "./QuoteCta";
import { IMAGES } from "@/lib/images";
import { SERVICES, SITE, telUrl, whatsappUrl } from "@/lib/site";

export function ServicePageView({ slug }: { slug: string }) {
  const service = SERVICES.find((s) => s.slug === slug);
  if (!service) return null;
  const img = service.photos?.after || IMAGES[service.image];
  const related = SERVICES.filter((s) => s.slug !== slug).slice(0, 3);

  return (
    <>
      <section className="relative overflow-hidden" style={{ background: "var(--gradient-navy)", color: "var(--cream)" }}>
        <div aria-hidden className="absolute inset-0 opacity-30" style={{ background: `url(${img}) center/cover` }} />
        <div aria-hidden className="absolute inset-0" style={{ background: "linear-gradient(180deg, rgba(15,23,46,.85) 0%, rgba(15,23,46,.7) 100%)" }} />
        <div className="container-luxe relative py-24 md:py-32">
          <Link to="/" className="text-xs uppercase tracking-[0.3em] opacity-70 hover:opacity-100" style={{ color: "var(--gold)" }}>← All Services</Link>
          <h1 className="mt-6 text-5xl md:text-6xl font-medium max-w-3xl leading-[1.05]">{service.title}</h1>
          <p className="mt-5 text-lg md:text-xl max-w-2xl opacity-85">{service.hero}</p>
          <div className="mt-9 flex flex-wrap gap-3">
            <Link to="/contact" className="btn-gold">Get Your Free Quote</Link>
            <a href={telUrl} className="btn-outline-light"><Phone size={16} /> {SITE.phoneDisplay}</a>
          </div>
        </div>
      </section>

      <Section eyebrow="What's Included" title="Everything you'd expect — and more">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_1fr] items-start">
          <ul className="space-y-4">
            {service.included.map((item) => (
              <li key={item} className="flex gap-4 items-start">
                <span className="mt-1 grid h-7 w-7 shrink-0 place-items-center rounded-full" style={{ background: "color-mix(in oklab, var(--gold) 20%, transparent)", color: "var(--navy)" }}>
                  <Check size={14} />
                </span>
                <span className="text-base leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
          <div className="rounded-3xl border border-border bg-card p-8 shadow-[var(--shadow-card)]">
            <span className="eyebrow">Pricing Guide</span>
            <div className="mt-4 flex items-baseline gap-2">
              <span className="text-sm text-muted-foreground">From</span>
              <span className="text-5xl font-medium" style={{ color: "var(--navy)" }}>{service.startingFrom}</span>
            </div>
            <p className="mt-3 text-sm text-muted-foreground">Final quote tailored to property size, condition and add-ons. No hidden fees — ever.</p>
            <Link to="/contact" className="btn-gold mt-6 w-full">Get a Tailored Quote</Link>
            <div className="mt-5 grid grid-cols-2 gap-3">
              <a href={telUrl} className="btn-navy text-sm"><Phone size={14} /> Call</a>
              <a href={whatsappUrl(`Hello! I'd like a quote for ${service.title}.`)} className="btn-navy text-sm"><WhatsappIcon width={14} height={14} /> WhatsApp</a>
            </div>
          </div>
        </div>
      </Section>

      <Section eyebrow="See the Difference" title="Before & After" tone="muted">
        <BeforeAfterSlider 
          before={service.photos?.before || img} 
          after={service.photos?.after || img} 
          alt={`${service.title} result`} 
        />
        <p className="mt-6 text-center text-sm text-muted-foreground">Drag the slider — replace with your own project photos.</p>
      </Section>

      <Section eyebrow="Why Choose Us" title="The Z Home Service difference">
        <div className="grid gap-6 md:grid-cols-3">
          {service.why.map((w, i) => (
            <div key={w} className="rounded-3xl border border-border bg-card p-7">
              <span className="text-xs font-semibold tracking-[0.3em]" style={{ color: "var(--gold)" }}>0{i + 1}</span>
              <p className="mt-3 text-lg leading-snug" style={{ color: "var(--navy)", fontFamily: "var(--font-display)" }}>{w}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section eyebrow="FAQ" title="Common questions, answered" tone="muted">
        <Faq items={service.faqs.map((f) => ({ q: f.q, a: f.a }))} />
      </Section>

      <Section eyebrow="Related Services" title="You might also need">
        <div className="grid gap-6 md:grid-cols-3">
          {related.map((s) => (
            <ServiceCard key={s.slug} slug={s.slug} title={s.title} short={s.short} icon={s.icon} image={IMAGES[s.image]} />
          ))}
        </div>
      </Section>

      <QuoteCta title={`Book Your ${service.title} Today`} />
    </>
  );
}
