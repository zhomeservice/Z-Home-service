import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Mail, Phone, Menu, X, ChevronDown } from "lucide-react";
import { InstagramIcon, FacebookIcon } from "./SocialIcons";
import { BrandLogo } from "./BrandLogo";
import { SITE, SERVICES, telUrl, mailUrl } from "@/lib/site";

const navItems = [
  { label: "Home", to: "/" as const },
  { label: "About", to: "/about" as const },
  { label: "Gallery", to: "/gallery" as const },
  { label: "Contact", to: "/contact" as const },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <header className="sticky top-0 z-50">
      {/* Top utility bar */}
      <div className="hidden md:block text-xs" style={{ background: "var(--navy-deep)", color: "var(--gold-soft)" }}>
        <div className="container-luxe flex h-9 items-center justify-between">
          <div className="flex items-center gap-5">
            <a href={telUrl} className="flex items-center gap-2 hover:text-white transition-colors">
              <Phone size={13} /> {SITE.phoneDisplay}
            </a>
            <a href={mailUrl} className="flex items-center gap-2 hover:text-white transition-colors">
              <Mail size={13} /> {SITE.email}
            </a>
          </div>
          <div className="flex items-center gap-3">
            <span className="opacity-70">Rated Excellent · UK-Wide</span>
            <a href={SITE.instagramUrl} aria-label="Instagram" className="hover:text-white transition-colors"><InstagramIcon width={14} height={14} /></a>
            <a href={SITE.facebookUrl} aria-label="Facebook" className="hover:text-white transition-colors"><FacebookIcon width={14} height={14} /></a>
          </div>
        </div>
      </div>

      {/* Main bar */}
      <div
        className={`transition-all duration-300 ${scrolled ? "shadow-sm" : ""}`}
        style={{ background: scrolled ? "rgba(255,255,255,0.92)" : "var(--cream)", backdropFilter: scrolled ? "blur(10px)" : undefined, borderBottom: "1px solid var(--border)" }}
      >
        <div className="container-luxe flex h-20 items-center justify-between gap-4">
          <BrandLogo />

          <nav className="hidden lg:flex items-center gap-1">
            <Link
              to="/"
              className="px-4 py-2 text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
              activeOptions={{ exact: true }}
              activeProps={{ style: { color: "var(--navy)" } }}
            >
              Home
            </Link>
            <div className="relative" onMouseEnter={() => setServicesOpen(true)} onMouseLeave={() => setServicesOpen(false)}>
              <button className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-foreground/80 hover:text-foreground transition-colors">
                Services <ChevronDown size={14} className={`transition-transform ${servicesOpen ? "rotate-180" : ""}`} />
              </button>
              {servicesOpen && (
                <div
                  className="absolute left-1/2 -translate-x-1/2 top-full pt-2 w-72"
                >
                  <div className="rounded-2xl border bg-card p-2 shadow-[var(--shadow-luxe)]">
                    {SERVICES.map((s) => (
                      <Link
                        key={s.slug}
                        to="/services/$slug"
                        params={{ slug: s.slug }}
                        className="flex flex-col rounded-xl px-4 py-3 hover:bg-muted transition-colors"
                      >
                        <span className="text-sm font-semibold" style={{ color: "var(--navy)" }}>{s.title}</span>
                        <span className="text-xs text-muted-foreground">{s.short}</span>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
            {navItems.slice(1).map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className="px-4 py-2 text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
                activeProps={{ style: { color: "var(--navy)" } }}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <Link to="/contact" className="btn-gold hidden sm:inline-flex text-sm">Get a Quote</Link>
            <button
              className="lg:hidden grid h-11 w-11 place-items-center rounded-full"
              style={{ background: "var(--navy-deep)", color: "var(--gold)" }}
              aria-label="Menu"
              onClick={() => setOpen(true)}
            >
              <Menu size={20} />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile overlay */}
      {open && (
        <div className="fixed inset-0 z-[60] lg:hidden" style={{ background: "var(--gradient-navy)", color: "var(--cream)" }}>
          <div className="container-luxe flex h-20 items-center justify-between">
            <BrandLogo tone="dark" />
            <button
              className="grid h-11 w-11 place-items-center rounded-full"
              style={{ background: "rgba(255,255,255,0.1)", color: "var(--gold)" }}
              onClick={() => setOpen(false)}
              aria-label="Close"
            >
              <X size={20} />
            </button>
          </div>
          <div className="container-luxe pt-6 pb-12 flex flex-col gap-2">
            <Link to="/" onClick={() => setOpen(false)} className="py-3 text-2xl font-display border-b border-white/10" style={{ fontFamily: "var(--font-display)" }}>Home</Link>
            <div className="py-3 border-b border-white/10">
              <div className="text-xs uppercase tracking-[0.3em] mb-3" style={{ color: "var(--gold)" }}>Services</div>
              <div className="flex flex-col gap-2">
                {SERVICES.map((s) => (
                  <Link key={s.slug} to="/services/$slug" params={{ slug: s.slug }} onClick={() => setOpen(false)} className="text-lg">
                    {s.title}
                  </Link>
                ))}
              </div>
            </div>
            {navItems.slice(1).map((item) => (
              <Link key={item.to} to={item.to} onClick={() => setOpen(false)} className="py-3 text-2xl border-b border-white/10" style={{ fontFamily: "var(--font-display)" }}>
                {item.label}
              </Link>
            ))}
            <Link to="/contact" onClick={() => setOpen(false)} className="btn-gold mt-6">Get a Free Quote</Link>
            <a href={telUrl} className="btn-outline-light mt-3"><Phone size={16} /> {SITE.phoneDisplay}</a>
          </div>
        </div>
      )}
    </header>
  );
}