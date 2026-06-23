import { createFileRoute, Link } from "@tanstack/react-router";
import { Award, ShieldCheck, Leaf, Sparkles, MapPin } from "lucide-react";
import teamImg from "@/assets/about-team.jpg";
import { Section } from "@/components/Section";
import { QuoteCta } from "@/components/QuoteCta";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Z Home Service" },
      { name: "description", content: "Z Home Service is a premium UK cleaning company. Meet the team, our values and the process behind our standard of work." },
      { property: "og:title", content: "About — Z Home Service" },
      { property: "og:description", content: "The team and process behind our standard of premium cleaning." },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

const steps = [
  { n: "01", t: "Tell us about your property", d: "Share a few details — size, condition, timing. We respond within two hours, seven days a week." },
  { n: "02", t: "Receive a fixed quote", d: "Transparent, written quote with everything included. No hidden fees, no surprises." },
  { n: "03", t: "Our team arrives", d: "Uniformed, insured professionals with everything they need — eco-friendly products and HEPA equipment." },
  { n: "04", t: "Walk-through & guarantee", d: "We hand back a spotless property. If anything isn't right, we return within 72 hours." },
];

const values = [
  { Icon: Award, t: "Experienced", d: "A decade of premium residential and commercial cleaning experience." },
  { Icon: ShieldCheck, t: "Insured", d: "£5M public liability and DBS-checked operatives." },
  { Icon: Leaf, t: "Eco-Conscious", d: "Non-toxic, biodegradable products used as standard." },
  { Icon: Sparkles, t: "Guaranteed", d: "72-hour re-clean if anything's not quite right." },
];

function AboutPage() {
  return (
    <>
      <section className="relative overflow-hidden" style={{ background: "var(--gradient-navy)", color: "var(--cream)" }}>
        <div className="container-luxe py-24 md:py-32 grid lg:grid-cols-[1.1fr_1fr] gap-12 items-center">
          <div>
            <span className="eyebrow">About Us</span>
            <h1 className="mt-5 text-5xl md:text-6xl font-medium leading-[1.05]">Cleaning is craft. We treat it that way.</h1>
            <p className="mt-6 text-lg opacity-85 max-w-xl">
              Z Home Service was founded on a simple belief: a properly cleaned home feels different. Quieter. Calmer. More you.
              We've spent a decade refining a service that homeowners, landlords and agents trust with their most valuable properties.
            </p>
          </div>
          <div className="rounded-3xl overflow-hidden shadow-[var(--shadow-luxe)]">
            <img src={teamImg} alt="Z Home Service professional cleaner" width={1600} height={1066} loading="lazy" className="h-full w-full object-cover" />
          </div>
        </div>
      </section>

      <Section eyebrow="Our Mission" title="Quality, reliability, peace of mind.">
        <div className="grid lg:grid-cols-2 gap-12">
          <p className="text-xl leading-relaxed text-foreground/80" style={{ fontFamily: "var(--font-display)" }}>
            We exist to make exceptional cleaning effortless to book — and impossible to forget.
            Every property we touch is treated as if it were our own home, with the same care, attention and discretion.
          </p>
          <div className="grid grid-cols-2 gap-4">
            {values.map(({ Icon, t, d }) => (
              <div key={t} className="rounded-2xl border border-border bg-card p-6">
                <div className="grid h-10 w-10 place-items-center rounded-xl" style={{ background: "color-mix(in oklab, var(--gold) 18%, transparent)", color: "var(--navy)" }}>
                  <Icon size={18} />
                </div>
                <h3 className="mt-4 text-lg font-medium" style={{ color: "var(--navy)" }}>{t}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section eyebrow="Our Process" title="Four steps from enquiry to spotless" tone="muted">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((s) => (
            <div key={s.n} className="rounded-3xl bg-card border border-border p-7">
              <span className="text-xs tracking-[0.3em] font-semibold" style={{ color: "var(--gold)" }}>STEP {s.n}</span>
              <h3 className="mt-3 text-xl font-medium" style={{ color: "var(--navy)" }}>{s.t}</h3>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{s.d}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section eyebrow="Service Areas" title="UK-wide coverage">
        <div className="grid lg:grid-cols-[1fr_1.4fr] gap-12 items-start">
          <div>
            <p className="text-lg leading-relaxed text-muted-foreground">
              Headquartered in London with teams across the South East and major UK cities.
              Premium short-let portfolios and estate agencies serviced nationwide on request.
            </p>
            <Link to="/contact" className="btn-gold mt-8">Check your postcode</Link>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {["London", "Manchester", "Birmingham", "Leeds", "Bristol", "Brighton", "Oxford", "Cambridge", "Edinburgh"].map((c) => (
              <div key={c} className="flex items-center gap-2 rounded-2xl border border-border bg-card p-4">
                <MapPin size={16} style={{ color: "var(--gold)" }} />
                <span className="text-sm font-medium" style={{ color: "var(--navy)" }}>{c}</span>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <QuoteCta />
    </>
  );
}