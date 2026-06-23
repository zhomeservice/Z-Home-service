import { Stars } from "./Stars";

const items = [
  { name: "Olivia W.", role: "Homeowner, Chelsea", body: "Booked an end-of-tenancy clean for our rental and the agent said it was the best they'd ever seen. Deposit returned in full within a week." },
  { name: "James A.", role: "Estate Agent, Hampstead", body: "Z Home Service is our go-to for high-value listings. Their attention to detail is in a different league — and they're properly reliable." },
  { name: "Priya S.", role: "Landlord, Notting Hill", body: "Three properties, six years, never a single complaint. The team is discreet, professional and absolutely meticulous." },
];

export function Testimonials() {
  return (
    <div className="grid gap-6 md:grid-cols-3">
      {items.map((t) => (
        <figure key={t.name} className="flex flex-col rounded-3xl border border-border bg-card p-8 shadow-[var(--shadow-card)]">
          <Stars />
          <blockquote className="mt-5 text-lg leading-relaxed" style={{ color: "var(--navy-deep)", fontFamily: "var(--font-display)" }}>
            "{t.body}"
          </blockquote>
          <figcaption className="mt-6 flex items-center gap-3 border-t border-border pt-5">
            <div className="grid h-11 w-11 place-items-center rounded-full font-semibold" style={{ background: "var(--gradient-navy)", color: "var(--gold)" }}>
              {t.name.charAt(0)}
            </div>
            <div>
              <div className="font-semibold text-sm" style={{ color: "var(--navy)" }}>{t.name}</div>
              <div className="text-xs text-muted-foreground">{t.role}</div>
            </div>
          </figcaption>
        </figure>
      ))}
    </div>
  );
}