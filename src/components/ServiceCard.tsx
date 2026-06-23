import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import * as Icons from "lucide-react";
import type { LucideIcon } from "lucide-react";
import type { ServiceSlug } from "@/lib/site";

export function ServiceCard({
  slug, title, short, icon, image,
}: { slug: ServiceSlug; title: string; short: string; icon: string; image: string }) {
  const Icon = ((Icons as unknown) as Record<string, LucideIcon>)[icon] ?? Icons.Sparkle;
  return (
    <Link
      to="/services/$slug"
      params={{ slug }}
      className="group relative flex flex-col overflow-hidden rounded-3xl border border-border bg-card shadow-[var(--shadow-card)] transition-all hover:-translate-y-1 hover:shadow-[var(--shadow-luxe)]"
    >
      <div className="aspect-[4/3] overflow-hidden">
        <img src={image} alt={title} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
      </div>
      <div className="flex flex-1 flex-col p-7">
        <div className="grid h-12 w-12 place-items-center rounded-2xl" style={{ background: "color-mix(in oklab, var(--gold) 18%, transparent)", color: "var(--navy)" }}>
          <Icon size={22} />
        </div>
        <h3 className="mt-5 text-2xl font-medium" style={{ color: "var(--navy)" }}>{title}</h3>
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground flex-1">{short}</p>
        <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold" style={{ color: "var(--navy)" }}>
          Learn more <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </span>
      </div>
    </Link>
  );
}