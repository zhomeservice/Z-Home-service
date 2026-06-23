import type { ReactNode } from "react";

export function Section({
  eyebrow, title, intro, children, align = "left", tone = "default", id,
}: {
  eyebrow?: string; title?: string; intro?: string; children: ReactNode;
  align?: "left" | "center"; tone?: "default" | "muted" | "navy" | "cream"; id?: string;
}) {
  const bg =
    tone === "muted" ? "var(--cream)" :
    tone === "navy" ? "var(--gradient-navy)" :
    tone === "cream" ? "var(--cream)" : undefined;
  const color = tone === "navy" ? "var(--cream)" : undefined;
  return (
    <section id={id} className="py-20 md:py-28" style={{ background: bg, color }}>
      <div className="container-luxe">
        {(eyebrow || title || intro) && (
          <div className={`mb-12 md:mb-16 max-w-3xl ${align === "center" ? "mx-auto text-center" : ""}`}>
            {eyebrow && <span className="eyebrow">{eyebrow}</span>}
            {title && <h2 className="mt-4 text-4xl md:text-5xl font-medium leading-[1.05]">{title}</h2>}
            {intro && <p className={`mt-5 text-lg leading-relaxed ${tone === "navy" ? "opacity-80" : "text-muted-foreground"}`}>{intro}</p>}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}