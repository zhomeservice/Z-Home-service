import { Phone } from "lucide-react";
import { WhatsappIcon } from "./SocialIcons";
import { SITE, telUrl, whatsappUrl } from "@/lib/site";

export function FloatingActions() {
  return (
    <>
      <a
        href={whatsappUrl()}
        aria-label="Message us on WhatsApp"
        className="fixed bottom-5 right-5 z-40 flex items-center gap-3 rounded-full pl-4 pr-5 py-3 shadow-[0_18px_40px_-12px_rgba(37,211,102,.55)] transition-transform hover:scale-105"
        style={{ background: "#25D366", color: "white" }}
      >
        <WhatsappIcon width={22} height={22} />
        <span className="hidden sm:inline text-sm font-semibold">WhatsApp</span>
      </a>
      <a
        href={telUrl}
        aria-label={`Call ${SITE.phoneDisplay}`}
        className="fixed bottom-5 left-5 z-40 flex items-center gap-3 rounded-full pl-4 pr-5 py-3 transition-transform hover:scale-105"
        style={{ background: "var(--navy-deep)", color: "var(--gold)", boxShadow: "0 18px 40px -12px rgba(15,23,46,.6)" }}
      >
        <Phone size={20} />
        <span className="hidden sm:inline text-sm font-semibold tracking-wide">Call</span>
      </a>
    </>
  );
}