import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Phone, Mail, Globe, MapPin } from "lucide-react";
import { Section } from "@/components/Section";
import { QrCard } from "@/components/QrCard";
import { InstagramIcon, WhatsappIcon } from "@/components/SocialIcons";
import { SITE, SERVICES, telUrl, mailUrl, whatsappUrl } from "@/lib/site";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Z Home Service" },
      { name: "description", content: "Request a free quote or get in touch with Z Home Service. Call, WhatsApp, email or use our enquiry form." },
      { property: "og:title", content: "Contact — Z Home Service" },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

const fieldClass =
  "w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-[color-mix(in_oklab,var(--gold)_60%,transparent)] transition";

function Field({ label, children, className = "" }: { label: string; children: React.ReactNode; className?: string }) {
  return (
    <label className={`flex flex-col gap-2 ${className}`}>
      <span className="text-xs font-semibold tracking-[0.2em] uppercase" style={{ color: "var(--navy)" }}>{label}</span>
      {children}
    </label>
  );
}

function ContactRow({ icon, label, value, href }: { icon: React.ReactNode; label: string; value: string; href: string }) {
  return (
    <a href={href} className="group flex items-center gap-4 rounded-2xl border border-border bg-card p-5 hover:border-[var(--gold)] transition-colors">
      <span className="grid h-12 w-12 place-items-center rounded-xl" style={{ background: "var(--gradient-navy)", color: "var(--gold)" }}>{icon}</span>
      <span className="flex flex-col">
        <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground">{label}</span>
        <span className="text-base font-semibold" style={{ color: "var(--navy)" }}>{value}</span>
      </span>
    </a>
  );
}

function ContactPage() {
  const [sent, setSent] = useState(false);
  return (
    <>
      <section className="py-20 md:py-24" style={{ background: "var(--gradient-navy)", color: "var(--cream)" }}>
        <div className="container-luxe">
          <span className="eyebrow">Get in Touch</span>
          <h1 className="mt-5 text-5xl md:text-6xl font-medium leading-[1.05] max-w-3xl">Let's make your space spotless.</h1>
          <p className="mt-5 text-lg opacity-85 max-w-2xl">Tell us about your project. We respond within two hours, seven days a week — prefer to call? We're here.</p>
        </div>
      </section>

      <Section>
        <div className="grid gap-10 lg:grid-cols-[1.3fr_1fr]">
          <form onSubmit={(e) => { e.preventDefault(); setSent(true); }} className="rounded-3xl border border-border bg-card p-8 md:p-10 shadow-[var(--shadow-card)]">
            <h2 className="text-2xl font-medium" style={{ color: "var(--navy)" }}>Request a Free Quote</h2>
            <p className="mt-2 text-sm text-muted-foreground">All fields are required.</p>
            <div className="mt-6 grid gap-5 md:grid-cols-2">
              <Field label="Full name"><input required type="text" className={fieldClass} placeholder="Jane Smith" /></Field>
              <Field label="Email"><input required type="email" className={fieldClass} placeholder="jane@example.com" /></Field>
              <Field label="Phone"><input required type="tel" className={fieldClass} placeholder="07XXX XXX XXX" /></Field>
              <Field label="Service">
                <select required className={fieldClass} defaultValue="">
                  <option value="" disabled>Select a service</option>
                  {SERVICES.map((s) => <option key={s.slug} value={s.slug}>{s.title}</option>)}
                  <option value="commercial">Commercial Cleaning</option>
                  <option value="other">Something else</option>
                </select>
              </Field>
              <Field label="Message" className="md:col-span-2">
                <textarea required rows={5} className={fieldClass} placeholder="Tell us about your property and timing." />
              </Field>
            </div>
            <button type="submit" className="btn-gold mt-8 w-full md:w-auto">Send Message</button>
            {sent && <p className="mt-4 text-sm" style={{ color: "var(--navy)" }}>Thank you — we'll be in touch within two hours.</p>}
          </form>

          <aside className="space-y-4">
            <ContactRow icon={<Phone size={18} />} label="Call us" value={SITE.phoneDisplay} href={telUrl} />
            <ContactRow icon={<WhatsappIcon width={18} height={18} />} label="WhatsApp" value={SITE.phoneDisplay} href={whatsappUrl()} />
            <ContactRow icon={<Mail size={18} />} label="Email" value={SITE.email} href={mailUrl} />
            <ContactRow icon={<Globe size={18} />} label="Website" value={SITE.website} href={`https://${SITE.website}`} />
            <ContactRow icon={<InstagramIcon width={18} height={18} />} label="Instagram" value={`@${SITE.instagram}`} href={SITE.instagramUrl} />
            <div className="rounded-3xl border border-border bg-card p-6 flex flex-col items-center gap-4">
              <QrCard />
              <p className="text-xs text-center text-muted-foreground max-w-[200px]">Scan with your phone to save us to your contacts and book instantly.</p>
            </div>
          </aside>
        </div>
      </Section>

      <Section tone="muted">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <span className="eyebrow">Visit</span>
            <h2 className="mt-4 text-3xl md:text-4xl font-medium leading-tight">UK-wide service · London HQ</h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Prefer to call? We're here seven days a week, 8am–8pm.
              For high-value or recurring contracts, our directors will arrange a private consultation.
            </p>
            <div className="mt-6 flex items-center gap-3 text-sm" style={{ color: "var(--navy)" }}>
              <MapPin size={18} style={{ color: "var(--gold)" }} /> Servicing all of London & surrounding counties
            </div>
          </div>
          <div className="aspect-[16/10] rounded-3xl overflow-hidden border border-border shadow-[var(--shadow-card)]">
            <iframe title="Service area map" src="https://www.openstreetmap.org/export/embed.html?bbox=-0.5%2C51.3%2C0.3%2C51.7&layer=mapnik" className="h-full w-full" loading="lazy" />
          </div>
        </div>
      </Section>
    </>
  );
}