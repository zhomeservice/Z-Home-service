import { ShieldCheck, Leaf, Award, Sparkles } from "lucide-react";

const pillars = [
  { Icon: Award, title: "Experienced Professionals", body: "Vetted, trained and uniformed staff with years of premium-residential experience." },
  { Icon: ShieldCheck, title: "Fully Insured & Vetted", body: "£5M public liability, DBS-checked teams and full reference assurance." },
  { Icon: Leaf, title: "Eco-Friendly Products", body: "Non-toxic, biodegradable solutions safe for children, pets and delicate finishes." },
  { Icon: Sparkles, title: "100% Satisfaction Guarantee", body: "If something's not right, we return within 72 hours to put it right." },
];

export function TrustStrip() {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
      {pillars.map(({ Icon, title, body }) => (
        <div key={title} className="rounded-3xl border border-border bg-card p-7">
          <div className="grid h-12 w-12 place-items-center rounded-2xl" style={{ background: "color-mix(in oklab, var(--gold) 18%, transparent)", color: "var(--navy)" }}>
            <Icon size={22} />
          </div>
          <h3 className="mt-5 text-xl font-medium" style={{ color: "var(--navy)" }}>{title}</h3>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{body}</p>
        </div>
      ))}
    </div>
  );
}