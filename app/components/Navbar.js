"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const links = [
  { href: "/services", label: "Services" },
  { href: "/industries", label: "Industries" },
  { href: "/about", label: "About" },
  { href: "/team", label: "Team" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 48);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  useEffect(() => {
    const onKey = (e) => { if (e.key === "Escape") setOpen(false); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <>
      {/* ── STICKY BAR ───────────────────────────────────────── */}
      <nav
        className="sticky top-0 z-50 transition-all duration-300"
        style={{
          backgroundColor: scrolled ? "#ffffff" : "rgba(255,255,255,0.97)",
          backdropFilter: "blur(16px)",
          WebkitBackdropFilter: "blur(16px)",
          boxShadow: scrolled
            ? "0 1px 0 rgba(0,0,0,0.06), 0 4px 24px rgba(0,0,0,0.07)"
            : "0 1px 0 rgba(0,0,0,0.06)",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between py-4">
            {/* Logo */}
            <Link href="/" className="flex items-center shrink-0">
              <Image
                src="/adem_logo.png"
                alt="ADEM Financial Consulting"
                width={140}
                height={48}
                className="object-contain"
                priority
              />
            </Link>

            {/* Desktop links */}
            <div className="hidden md:flex items-center gap-8">
              {links.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  className="relative text-sm font-medium py-1 transition-colors group"
                  style={{ color: pathname === l.href ? "#091F2C" : "#6B7280" }}
                >
                  {l.label}
                  <span
                    className={`absolute inset-x-0 -bottom-0.5 h-[2px] rounded-full transition-transform duration-300 origin-left group-hover:scale-x-100 ${
                      pathname === l.href ? "scale-x-100" : "scale-x-0"
                    }`}
                    style={{ backgroundColor: "#17A8A0" }}
                  />
                </Link>
              ))}
            </div>

            {/* Desktop CTA */}
            <div className="hidden md:block">
              <Link
                href="/contact"
                className="px-6 py-2.5 rounded-full text-white text-sm font-semibold transition-all duration-200 hover:opacity-90 hover:scale-[1.03]"
                style={{ background: "linear-gradient(135deg, #17A8A0 0%, #0d8f88 100%)" }}
              >
                Book consultation
              </Link>
            </div>

            {/* Mobile hamburger */}
            <button
              className="md:hidden flex items-center justify-center w-10 h-10 rounded-full transition-all duration-200"
              style={{
                backgroundColor: open ? "rgba(23,168,160,0.10)" : "rgba(0,0,0,0.04)",
                color: open ? "#17A8A0" : "#374151",
              }}
              onClick={() => setOpen(!open)}
              aria-label="Open menu"
            >
              {open ? (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* ── MOBILE FULL-SCREEN OVERLAY ───────────────────────── */}
      <div
        className="fixed inset-0 z-[200] md:hidden flex flex-col"
        style={{
          backgroundColor: "#091F2C",
          opacity: open ? 1 : 0,
          pointerEvents: open ? "auto" : "none",
          transform: open ? "translateY(0)" : "translateY(-100%)",
          transition: "transform 420ms cubic-bezier(0.22,1,0.36,1), opacity 300ms ease",
        }}
        aria-hidden={!open}
      >
        {/* Glow orbs */}
        <div
          className="pointer-events-none absolute top-0 right-0 w-72 h-72 rounded-full"
          style={{ background: "radial-gradient(circle at top right, rgba(23,168,160,0.12) 0%, transparent 65%)" }}
        />
        <div
          className="pointer-events-none absolute bottom-0 left-0 w-56 h-56 rounded-full"
          style={{ background: "radial-gradient(circle at bottom left, rgba(23,168,160,0.06) 0%, transparent 65%)" }}
        />

        {/* Header — fully dark, logo white */}
        <div
          className="relative z-10 flex items-center justify-between px-6 py-5 border-b shrink-0"
          style={{ borderColor: "#1A3A4A" }}
        >
          <Link href="/" onClick={() => setOpen(false)}>
            <Image
              src="/adem_logo.png"
              alt="ADEM Financial Consulting"
              width={120}
              height={40}
              className="object-contain"
              style={{ filter: "brightness(0) invert(1)" }}
            />
          </Link>
          <button
            onClick={() => setOpen(false)}
            className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110"
            style={{ backgroundColor: "rgba(23,168,160,0.12)", color: "#17A8A0" }}
            aria-label="Close menu"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Nav links — white, staggered in */}
        <div className="relative z-10 flex-1 flex flex-col justify-center px-6">
          {links.map((l, i) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="group flex items-center justify-between py-5 border-b"
              style={{
                borderColor: "#1A3A4A",
                opacity: open ? 1 : 0,
                transform: open ? "translateY(0)" : "translateY(24px)",
                transition: open
                  ? `opacity 380ms ease ${120 + i * 80}ms, transform 380ms cubic-bezier(0.22,1,0.36,1) ${120 + i * 80}ms`
                  : "none",
              }}
            >
              <div className="flex items-baseline gap-4">
                <span className="text-[11px] font-bold tabular-nums" style={{ color: "#17A8A0" }}>
                  0{i + 1}
                </span>
                <span
                  className="font-bold leading-none transition-colors duration-200 group-hover:opacity-70"
                  style={{
                    fontSize: "clamp(2rem, 9vw, 2.8rem)",
                    color: pathname === l.href ? "#17A8A0" : "#ffffff",
                  }}
                >
                  {l.label}
                </span>
              </div>
              <span
                className="text-xl transition-transform duration-200 group-hover:translate-x-1.5 shrink-0"
                style={{ color: "#17A8A0" }}
              >
                →
              </span>
            </Link>
          ))}
        </div>

        {/* Bottom section — staggered in after links */}
        <div
          className="relative z-10 px-6 pb-10 pt-6 border-t shrink-0"
          style={{
            borderColor: "#1A3A4A",
            opacity: open ? 1 : 0,
            transform: open ? "translateY(0)" : "translateY(16px)",
            transition: open
              ? "opacity 380ms ease 460ms, transform 380ms cubic-bezier(0.22,1,0.36,1) 460ms"
              : "none",
          }}
        >
          <a
            href="https://wa.me/2348039879430"
            onClick={() => setOpen(false)}
            className="flex items-center justify-center gap-2 w-full py-4 rounded-full text-white font-semibold text-sm transition-all duration-200 hover:opacity-90 mb-4"
            style={{ background: "linear-gradient(135deg, #17A8A0 0%, #0d8f88 100%)" }}
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
            </svg>
            Book a free consultation
          </a>
          <div className="flex items-center justify-between text-xs" style={{ color: "#6B7280" }}>
            <span>+234 803 987 9430</span>
            <span>Mon – Sat · 8 am – 5 pm</span>
          </div>
        </div>
      </div>
    </>
  );
}
