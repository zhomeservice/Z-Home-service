import { createFileRoute, Link } from "@tanstack/react-router";
import { Phone, Star } from "lucide-react";
import heroImg from "@/assets/hero-home.jpg";
import { Section } from "@/components/Section";
import { ServiceCard } from "@/components/ServiceCard";
import { BeforeAfterSlider } from "@/components/BeforeAfterSlider";
import { TrustStrip } from "@/components/TrustStrip";
import { Testimonials } from "@/components/Testimonials";
import { QuoteCta } from "@/components/QuoteCta";
import { IMAGES } from "@/lib/images";
import { SERVICES, SITE, telUrl } from "@/lib/site";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Z Home Service — Premium Professional Cleaning" },
      { name: "description", content: "Premium cleaning for homeowners, landlords and agents. End of tenancy, oven, carpet, after builder & window cleaning. Insured, vetted, eco-friendly." },
      { property: "og:title", content: "Z Home Service — Premium Professional Cleaning" },
      { property: "og:description", content: "Premium cleaning for homeowners, landlords and estate agents across the UK." },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      {/* HERO */}
      <section className="relative min-h-[88vh] overflow-hidden">
        <img src={heroImg} alt="Beautifully cleaned luxury living room" width={1920} height={1280} className="absolute inset-0 h-full w-full object-cover" />
        <div aria-hidden className="absolute inset-0" style={{ background: "linear-gradient(120deg, rgba(15,23,46,.85) 0%, rgba(15,23,46,.55) 55%, rgba(15,23,46,.2) 100%)" }} />
        <div className="container-luxe relative pt-24 pb-32 md:pt-36 md:pb-40 text-cream" style={{ color: "var(--cream)" }}>
          <span className="eyebrow">Premium · UK-Wide · Since 2015</span>
          <h1 className="mt-5 text-5xl md:text-7xl lg:text-8xl font-medium leading-[1.02] max-w-4xl">
            Your home,<br />perfected.
          </h1>
          <p className="mt-6 text-lg md:text-xl max-w-xl opacity-90 leading-relaxed">
            Meticulous, insured, eco-conscious cleaning for discerning homeowners,
            landlords and estate agents. End of tenancy · Oven · Carpet · After Builder · Windows.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Link to="/contact" className="btn-gold">Get a Free Quote</Link>
            <Link to="/gallery" className="btn-outline-light">View Our Work</Link>
          </div>
          <div className="mt-12 inline-flex items-center gap-4 rounded-full pl-2 pr-5 py-2" style={{ background: "rgba(255,255,255,0.08)", backdropFilter: "blur(8px)" }}>
            <div className="grid h-10 w-10 place-items-center rounded-full" style={{ background: "var(--gold)", color: "var(--navy-deep)" }}>
              <Star size={18} fill="currentColor" stroke="none" />
            </div>
            <div className="text-sm">
              <div className="font-semibold">Rated Excellent</div>
              <div className="opacity-80 text-xs">Trusted by homeowners and agents across the UK</div>
            </div>
          </div>
        </div>
        <div aria-hidden className="absolute bottom-0 inset-x-0 h-24" style={{ background: "linear-gradient(180deg, transparent, var(--background))" }} />
      </section>

      {/* SERVICES */}
      <Section eyebrow="Our Services" title="Premium cleaning, end to end" intro="Six specialist services delivered by trained, uniformed teams — backed by a 72-hour re-clean guarantee.">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s) => (
            <ServiceCard key={s.slug} slug={s.slug} title={s.title} short={s.short} icon={s.icon} image={IMAGES[s.image]} />
          ))}
          <div className="rounded-3xl p-7 flex flex-col justify-between" style={{ background: "var(--gradient-navy)", color: "var(--cream)" }}>
            <div>
              <span className="eyebrow">Also Available</span>
              <h3 className="mt-4 text-2xl font-medium">Commercial Cleaning</h3>
              <p className="mt-3 text-sm opacity-80">Tailored solutions for offices, showrooms and short-let portfolios. Discreet, reliable and meticulously detailed.</p>
            </div>
            <Link to="/contact" className="btn-gold mt-8 self-start">Discuss your needs</Link>
          </div>
        </div>
      </Section>

      {/* BEFORE AFTER */}
      <Section eyebrow="The Result" title="See the difference we make" intro="Drag the slider. Replace placeholder photography with your own before & after shots." tone="muted">
        <BeforeAfterSlider before={IMAGES.builder} after={IMAGES.hero} alt="Living room transformation" />
      </Section>

      {/* WHY US */}
      <Section eyebrow="Why Choose Us" title="A standard of service you can feel">
        <TrustStrip />
      </Section>

      {/* TESTIMONIALS */}
      <Section eyebrow="Client Stories" title="Trusted across the UK" intro="A handful of recent words from homeowners, landlords and agents we look after." tone="muted">
        <Testimonials />
      </Section>

      {/* CTA */}
      <QuoteCta />

      <noscript>
        <div className="container-luxe py-10 text-center">
          <a href={telUrl}><Phone /> {SITE.phoneDisplay}</a>
        </div>
      </noscript>
    </>
  );
}
