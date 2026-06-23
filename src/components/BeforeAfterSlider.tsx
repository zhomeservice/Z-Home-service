import { useRef, useState, useCallback, useEffect } from "react";

export function BeforeAfterSlider({
  before, after, beforeLabel = "Before", afterLabel = "After", alt = "Cleaning result comparison",
}: { before: string; after: string; beforeLabel?: string; afterLabel?: string; alt?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState(50);
  const dragging = useRef(false);

  const update = useCallback((clientX: number) => {
    const el = ref.current; if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = ((clientX - rect.left) / rect.width) * 100;
    setPos(Math.max(0, Math.min(100, x)));
  }, []);

  useEffect(() => {
    const onMove = (e: PointerEvent) => { if (dragging.current) update(e.clientX); };
    const onUp = () => { dragging.current = false; };
    window.addEventListener("pointermove", onMove);
    window.addEventListener("pointerup", onUp);
    return () => { window.removeEventListener("pointermove", onMove); window.removeEventListener("pointerup", onUp); };
  }, [update]);

  return (
    <div
      ref={ref}
      className="relative aspect-[16/10] w-full overflow-hidden rounded-3xl shadow-[var(--shadow-luxe)] select-none cursor-ew-resize"
      onPointerDown={(e) => { dragging.current = true; update(e.clientX); }}
    >
      <img src={after} alt={`${alt} — after`} className="absolute inset-0 h-full w-full object-cover" draggable={false} />
      <div className="absolute inset-0 overflow-hidden" style={{ width: `${pos}%` }}>
        <img src={before} alt={`${alt} — before`} className="absolute inset-0 h-full object-cover" style={{ width: `${(100 / Math.max(pos, 1)) * 100}%`, maxWidth: "none", filter: "grayscale(0.6) brightness(0.85)" }} draggable={false} />
      </div>
      <span className="absolute top-4 left-4 rounded-full bg-black/60 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-white">{beforeLabel}</span>
      <span className="absolute top-4 right-4 rounded-full px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-[var(--navy-deep)]" style={{ background: "var(--gold)" }}>{afterLabel}</span>
      <div className="absolute top-0 bottom-0 w-0.5 bg-white shadow-lg pointer-events-none" style={{ left: `${pos}%` }}>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 grid h-12 w-12 place-items-center rounded-full bg-white shadow-xl">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ color: "var(--navy-deep)" }}>
            <path d="M9 18l-6-6 6-6" />
            <path d="M15 6l6 6-6 6" />
          </svg>
        </div>
      </div>
    </div>
  );
}