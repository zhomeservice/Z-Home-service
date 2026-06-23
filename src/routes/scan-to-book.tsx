import { createFileRoute, Link } from "@tanstack/react-router";
import { Phone, Mail, Globe, Download } from "lucide-react";
import { QrCard } from "@/components/QrCard";
import { InstagramIcon, FacebookIcon, WhatsappIcon } from "@/components/SocialIcons";
import { SITE, telUrl, mailUrl, whatsappUrl } from "@/lib/site";

export const Route = createFileRoute("/scan-to-book")({
  head: () => ({
    meta: [
      { title: "Scan to Book — Z Home Service" },
      { name: "description", content: "Your digital business card for Z Home Service. Call, WhatsApp, email and book instantly." },
      { property: "og:title", content: "Scan to Book — Z Home Service" },
      { property: "og:url", content: "/scan-to-book" },
    ],
    links: [{ rel: "canonical", href: "/scan-to-book" }],
  }),
  component: ScanPage,
});

function downloadVCard() {
  const vcf = `BEGIN:VCARD\nVERSION:3.0\nFN:${SITE.name}\nORG:${SITE.name}\nTEL;TYPE=CELL:${SITE.phone}\nEMAIL:${SITE.email}\nURL:https://${SITE.website}\nNOTE:${SITE.tagline}\nEND:VCARD`;
  const blob = new Blob([vcf], { type: "text/vcard" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url; a.download = "Z-Home-Service.vcf"; a.click();
  URL.revokeObjectURL(url);
}

function Action({
  href, icon, label, value, primary, accent, disabled,
}: { href: string; icon: React.ReactNode; label: string; value: string; primary?: boolean; accent?: string; disabled?: boolean }) {
  const className = `flex items-center gap-4 rounded-2xl px-4 py-4 transition-transform ${disabled ? "opacity-50" : "hover:scale-[1.02]"}`;
  const style: React.CSSProperties = {
    background: primary ? "var(--gradient-gold)" : "rgba(255,255,255,0.08)",
    color: primary ? "var(--navy-deep)" : "var(--cream)",
    backdropFilter: "blur(8px)",
  };
  const inner = (
    <>
      <span className="grid h-11 w-11 place-items-center rounded-xl" style={{ background: primary ? "var(--navy-deep)" : accent ?? "rgba(255,255,255,0.1)", color: primary ? "var(--gold)" : "white" }}>{icon}</span>
      <span className="flex flex-col">
        <span className="text-[10px] tracking-[0.25em] uppercase opacity-80">{label}</span>
        <span className="text-base font-semibold">{value}</span>
      </span>
    </>
  );
  if (disabled) return <div className={className} style={style}>{inner}</div>;
  return <a href={href} className={className} style={style}>{inner}</a>;
}

function ScanPage() {
  return (
    <main className="min-h-screen flex flex-col" style={{ background: "var(--gradient-navy)", color: "var(--cream)" }}>
      <div className="mx-auto w-full max-w-md flex-1 flex flex-col px-6 py-10">
        <Link to="/" className="self-center text-center">
          <div className="mx-auto grid h-20 w-20 place-items-center rounded-full" style={{ background: "var(--gradient-gold)", boxShadow: "0 20px 50px -20px rgba(0,0,0,.5)" }}>
            <span style={{ fontFamily: "var(--font-display)", fontStyle: "italic", fontWeight: 700, color: "var(--navy-deep)", fontSize: "2.5rem", lineHeight: 1 }}>Z</span>
          </div>
          <div className="mt-5 text-xs tracking-[0.32em] uppercase" style={{ color: "var(--gold)" }}>Z Home Service</div>
          <h1 className="mt-2 text-3xl font-medium">Scan to Book</h1>
          <p className="mt-2 text-sm opacity-80">Premium Professional Cleaning</p>
        </Link>

        <div className="mt-8 space-y-3">
          <Action href={telUrl} icon={<Phone size={20} />} label="Call us" value={SITE.phoneDisplay} primary />
          <Action href={whatsappUrl()} icon={<WhatsappIcon width={20} height={20} />} label="WhatsApp" value="Chat instantly" accent="#25D366" />
          <Action href={mailUrl} icon={<Mail size={20} />} label="Email" value={SITE.email} />
          <Action href={`https://${SITE.website}`} icon={<Globe size={20} />} label="Website" value={SITE.website} />
          <Action href={SITE.instagramUrl} icon={<InstagramIcon width={20} height={20} />} label="Instagram" value={`@${SITE.instagram}`} />
          <Action href={SITE.facebookUrl} icon={<FacebookIcon width={20} height={20} />} label="Facebook" value="Coming Soon" disabled />
        </div>

        <button onClick={downloadVCard} className="btn-gold mt-6 w-full">
          <Download size={16} /> Save Contact
        </button>

        <div className="mt-8 self-center">
          <QrCard size={140} />
        </div>

        <Link to="/" className="mt-8 self-center text-xs tracking-[0.3em] uppercase opacity-60 hover:opacity-100">← Visit full site</Link>
      </div>
    </main>
  );
}