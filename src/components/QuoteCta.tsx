import { Phone } from "lucide-react";
import { WhatsappIcon } from "./SocialIcons";
import { SITE, telUrl, whatsappUrl } from "@/lib/site";

export function QuoteCta({
  title = "Ready to Book? Get Your Free Quote Today.",
  note = "Response within 2 hours · 7 days a week",
}: { title?: string; note?: string }) {
  return (
    <section className="py-20">
      <div className="container-luxe">
        <div className="relative overflow-hidden rounded-3xl px-8 py-16 md:px-16 md:py-20 text-center" style={{ background: "var(--gradient-gold)" }}>
          <div aria-hidden className="absolute -top-20 -right-20 h-72 w-72 rounded-full opacity-30" style={{ background: "var(--navy-deep)" }} />
          <div aria-hidden className="absolute -bottom-32 -left-20 h-72 w-72 rounded-full opacity-20" style={{ background: "var(--navy-deep)" }} />
          <span className="eyebrow" style={{ color: "var(--navy-deep)" }}>Book Today</span>
          <h2 className="relative mt-4 text-4xl md:text-5xl font-medium max-w-2xl mx-auto leading-[1.1]" style={{ color: "var(--navy-deep)" }}>{title}</h2>
          <p className="relative mt-4 text-sm md:text-base font-medium" style={{ color: "var(--navy-deep)" }}>{note}</p>
          <div className="relative mt-8 flex flex-wrap items-center justify-center gap-3">
            <a href={telUrl} className="inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 font-semibold transition-transform hover:-translate-y-0.5" style={{ background: "var(--navy-deep)", color: "var(--gold-soft)" }}>
              <Phone size={18} /> Call {SITE.phoneDisplay}
            </a>
            <a href={whatsappUrl()} className="inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 font-semibold transition-transform hover:-translate-y-0.5" style={{ background: "white", color: "var(--navy-deep)" }}>
              <WhatsappIcon width={18} height={18} /> WhatsApp Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}