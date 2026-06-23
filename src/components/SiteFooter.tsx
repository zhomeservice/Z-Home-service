import { Link } from "@tanstack/react-router";
import { Phone, Mail, Globe } from "lucide-react";
import { BrandLogo } from "./BrandLogo";
import { InstagramIcon, FacebookIcon, WhatsappIcon } from "./SocialIcons";
import { QrCard } from "./QrCard";
import { SITE, SERVICES, telUrl, mailUrl, whatsappUrl } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="relative mt-20" style={{ background: "var(--gradient-navy)", color: "var(--cream)" }}>
      <div aria-hidden className="absolute inset-x-0 top-0 h-px" style={{ background: "linear-gradient(90deg, transparent, var(--gold), transparent)" }} />
      <div className="container-luxe py-16 grid gap-12 lg:grid-cols-[1.2fr_1fr_1.2fr_1fr]">
        <div>
          <BrandLogo tone="dark" />
          <p className="mt-5 text-sm leading-relaxed opacity-80 max-w-sm">
            Premium professional cleaning for discerning homeowners, landlords and estate agents.
            Insured, vetted, eco-conscious — and obsessive about the details.
          </p>
          <div className="mt-6 flex items-center gap-3">
            <a href={SITE.instagramUrl} aria-label="Instagram" className="grid h-10 w-10 place-items-center rounded-full border border-white/20 hover:border-[var(--gold)] hover:text-[var(--gold)] transition-colors"><InstagramIcon width={16} height={16} /></a>
            <a href={SITE.facebookUrl} aria-label="Facebook" className="grid h-10 w-10 place-items-center rounded-full border border-white/20 hover:border-[var(--gold)] hover:text-[var(--gold)] transition-colors"><FacebookIcon width={16} height={16} /></a>
            <a href={whatsappUrl()} aria-label="WhatsApp" className="grid h-10 w-10 place-items-center rounded-full border border-white/20 hover:border-[var(--gold)] hover:text-[var(--gold)] transition-colors"><WhatsappIcon width={16} height={16} /></a>
          </div>
        </div>
        <div>
          <h4 className="text-xs uppercase tracking-[0.3em] mb-5" style={{ color: "var(--gold)" }}>Explore</h4>
          <ul className="space-y-3 text-sm">
            <li><Link to="/" className="hover:text-[var(--gold)] transition-colors">Home</Link></li>
            <li><Link to="/about" className="hover:text-[var(--gold)] transition-colors">About</Link></li>
            <li><Link to="/gallery" className="hover:text-[var(--gold)] transition-colors">Gallery</Link></li>
            <li><Link to="/contact" className="hover:text-[var(--gold)] transition-colors">Contact</Link></li>
            <li><Link to="/scan-to-book" className="hover:text-[var(--gold)] transition-colors">Scan to Book</Link></li>
          </ul>
          <h4 className="text-xs uppercase tracking-[0.3em] mb-5 mt-8" style={{ color: "var(--gold)" }}>Services</h4>
          <ul className="space-y-3 text-sm">
            {SERVICES.map((s) => (
              <li key={s.slug}><Link to="/services/$slug" params={{ slug: s.slug }} className="hover:text-[var(--gold)] transition-colors">{s.title}</Link></li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="text-xs uppercase tracking-[0.3em] mb-5" style={{ color: "var(--gold)" }}>Contact</h4>
          <ul className="space-y-4 text-sm">
            <li><a href={telUrl} className="flex items-center gap-3 hover:text-[var(--gold)] transition-colors"><Phone size={16} /> {SITE.phoneDisplay}</a></li>
            <li><a href={mailUrl} className="flex items-center gap-3 hover:text-[var(--gold)] transition-colors"><Mail size={16} /> {SITE.email}</a></li>
            <li><a href={`https://${SITE.website}`} className="flex items-center gap-3 hover:text-[var(--gold)] transition-colors"><Globe size={16} /> {SITE.website}</a></li>
            <li><a href={whatsappUrl()} className="flex items-center gap-3 hover:text-[var(--gold)] transition-colors"><WhatsappIcon width={16} height={16} /> WhatsApp {SITE.phoneDisplay}</a></li>
            <li className="opacity-80">Hours: 7 days a week · 8am–8pm</li>
          </ul>
        </div>
        <div>
          <h4 className="text-xs uppercase tracking-[0.3em] mb-5" style={{ color: "var(--gold)" }}>Scan to Book</h4>
          <QrCard />
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container-luxe py-6 flex flex-col md:flex-row items-center justify-between gap-3 text-xs opacity-70">
          <p>© {new Date().getFullYear()} {SITE.name}. All rights reserved.</p>
          <p>{SITE.tagline} · UK-Wide Coverage</p>
        </div>
      </div>
    </footer>
  );
}