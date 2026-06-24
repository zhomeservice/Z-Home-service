import { useMemo, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { X } from "lucide-react";
import { Section } from "@/components/Section";
import { QuoteCta } from "@/components/QuoteCta";
import { IMAGES } from "@/lib/images";
import { SERVICES } from "@/lib/site";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery — Z Home Service" },
      { name: "description", content: "A selection of our recent cleaning projects across the UK. Filter by service." },
      { property: "og:title", content: "Gallery — Z Home Service" },
      { property: "og:url", content: "/gallery" },
    ],
    links: [{ rel: "canonical", href: "/gallery" }],
  }),
  component: GalleryPage,
});

const items = SERVICES.flatMap((s) =>
  [1, 2, 3].map((i) => ({ id: `${s.slug}-${i}`, category: s.slug, label: s.title, img: IMAGES[s.image] })),
);

function GalleryPage() {
  const [filter, setFilter] = useState<string>("all");
  const [lightbox, setLightbox] = useState<string | null>(null);
  const filtered = useMemo(
    () => (filter === "all" ? items : items.filter((i) => i.category === filter)),
    [filter],
  );

  return (
    <>
      <section className="py-20 md:py-24" style={{ background: "var(--cream)" }}>
        <div className="container-luxe text-center">
          <span className="eyebrow">Our Work</span>
          <h1 className="mt-5 text-5xl md:text-6xl font-medium leading-[1.05]">Recent projects</h1>
          <p className="mt-5 text-lg text-muted-foreground max-w-2xl mx-auto">
            A growing selection of homes, rentals and commercial spaces we've recently transformed.
            Replace placeholder images with your own.
          </p>
        </div>
      </section>

      <Section>
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          <FilterChip active={filter === "all"} onClick={() => setFilter("all")}>All</FilterChip>
          {SERVICES.map((s) => (
            <FilterChip key={s.slug} active={filter === s.slug} onClick={() => setFilter(s.slug)}>{s.title}</FilterChip>
          ))}
        </div>
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-5">
          {filtered.map((item, idx) => (
            <button
              key={item.id}
              onClick={() => setLightbox(item.img)}
              className="group mb-5 block w-full overflow-hidden rounded-2xl border border-border bg-card text-left"
              style={{ breakInside: "avoid", aspectRatio: idx % 3 === 1 ? "3/4" : "4/3" }}
            >
              <div className="relative h-full w-full">
                <img src={item.img} alt={item.label} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-x-0 bottom-0 p-4 text-sm font-medium text-white" style={{ background: "linear-gradient(0deg, rgba(0,0,0,.7), transparent)" }}>{item.label}</div>
              </div>
            </button>
          ))}
        </div>
      </Section>

      {lightbox && (
        <div className="fixed inset-0 z-[70] grid place-items-center p-6" style={{ background: "rgba(15,23,46,.92)" }} onClick={() => setLightbox(null)}>
          <button onClick={() => setLightbox(null)} aria-label="Close" className="absolute top-5 right-5 grid h-11 w-11 place-items-center rounded-full bg-white/10 text-white hover:bg-white/20">
            <X size={20} />
          </button>
          <img src={lightbox} alt="" className="max-h-[88vh] max-w-[92vw] rounded-2xl shadow-2xl" />
        </div>
      )}

      <QuoteCta />
    </>
  );
}

function FilterChip({ active, onClick, children }: { active: boolean; onClick: () => void; children: React.ReactNode }) {
  return (
    <button
      onClick={onClick}
      className="rounded-full px-4 py-2 text-sm font-medium border transition-colors"
      style={{
        background: active ? "var(--navy-deep)" : "transparent",
        color: active ? "var(--gold)" : "var(--navy-deep)",
        borderColor: active ? "var(--navy-deep)" : "var(--border)",
      }}
    >
      {children}
    </button>
  );
}
