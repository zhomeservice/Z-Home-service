import { Star } from "lucide-react";
export function Stars({ count = 5 }: { count?: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} size={16} fill="currentColor" stroke="none" style={{ color: "var(--gold)" }} />
      ))}
    </div>
  );
}