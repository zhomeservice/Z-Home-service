import { useState } from "react";
import { Plus } from "lucide-react";

export function Faq({ items }: { items: { q: string; a: string }[] }) {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div className="divide-y divide-border border-y border-border">
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <div key={i}>
            <button
              className="flex w-full items-center justify-between gap-4 py-6 text-left"
              onClick={() => setOpen(isOpen ? null : i)}
              aria-expanded={isOpen}
            >
              <span className="text-lg font-medium" style={{ color: "var(--navy)" }}>{item.q}</span>
              <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full transition-transform" style={{ background: "var(--cream)", color: "var(--navy)", transform: isOpen ? "rotate(45deg)" : "none" }}>
                <Plus size={16} />
              </span>
            </button>
            {isOpen && <p className="pb-6 -mt-2 max-w-3xl text-muted-foreground leading-relaxed">{item.a}</p>}
          </div>
        );
      })}
    </div>
  );
}