import { Link } from "@tanstack/react-router";

export function BrandLogo({ tone = "light" }: { tone?: "light" | "dark" }) {
  const isLight = tone === "light";
  return (
    <Link to="/" className="group flex items-center gap-3">
      <span
        className="grid h-11 w-11 shrink-0 place-items-center rounded-full ring-1"
        style={{
          background: "var(--gradient-navy)",
          boxShadow: "var(--shadow-card)",
          color: "var(--gold)",
          // @ts-expect-error css var
          "--tw-ring-color": "color-mix(in oklab, var(--gold) 50%, transparent)",
        }}
      >
        <span className="text-2xl leading-none" style={{ fontFamily: "var(--font-display)", fontStyle: "italic", fontWeight: 700 }}>
          Z
        </span>
      </span>
      <span className="flex flex-col leading-tight">
        <span
          className={`text-base font-semibold tracking-[0.18em] ${isLight ? "text-navy-deep" : "text-cream"}`}
          style={{ color: isLight ? "var(--navy-deep)" : "var(--cream)" }}
        >
          Z HOME SERVICE
        </span>
        <span className="text-[10px] uppercase tracking-[0.32em]" style={{ color: "var(--gold)" }}>
          Professional Cleaning
        </span>
      </span>
    </Link>
  );
}