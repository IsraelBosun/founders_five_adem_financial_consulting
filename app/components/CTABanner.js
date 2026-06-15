import AnimateIn from "./AnimateIn";

export default function CTABanner() {
  return (
    <section
      className="relative overflow-hidden px-4 py-28"
      style={{ backgroundColor: "#091F2C" }}
    >
      {/* Glow orbs */}
      <div
        className="pointer-events-none absolute -top-32 -left-32 w-[500px] h-[500px] rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(23,168,160,0.12) 0%, transparent 70%)",
        }}
      />
      <div
        className="pointer-events-none absolute -bottom-32 -right-32 w-[500px] h-[500px] rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(23,168,160,0.08) 0%, transparent 70%)",
        }}
      />

      <div className="relative max-w-3xl mx-auto text-center">
        <AnimateIn variant="fadeIn" delay={0}>
          <p
            className="text-xs font-semibold uppercase tracking-[0.22em] mb-5"
            style={{ color: "#17A8A0" }}
          >
            Free Consultation
          </p>
        </AnimateIn>

        <AnimateIn variant="fadeUp" delay={80}>
          <h2 className="text-white font-bold leading-tight mb-5" style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)" }}>
            Tell us what's keeping you up at night.{" "}
            <span style={{ color: "#17A8A0" }}>
              The first conversation is on us.
            </span>
          </h2>
        </AnimateIn>

        <AnimateIn variant="fadeUp" delay={180}>
          <p className="text-gray-400 max-w-lg mx-auto mb-10 leading-relaxed">
            Whether it's tax compliance, bookkeeping, or a statutory certificate —
            we'll tell you exactly what you need and what it costs.
          </p>
        </AnimateIn>

        <AnimateIn variant="fadeUp" delay={280}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://wa.me/2348039879430"
              className="px-8 py-4 rounded-full text-white font-semibold text-sm transition-all duration-200 hover:opacity-90 hover:scale-[1.03]"
              style={{ background: "linear-gradient(135deg, #17A8A0 0%, #0d8f88 100%)" }}
            >
              WhatsApp us now →
            </a>
            <a
              href="mailto:ademfinancialconsulting@gmail.com"
              className="px-8 py-4 rounded-full text-sm font-semibold border transition-all duration-200 hover:text-white"
              style={{ color: "#9CA3AF", borderColor: "#1E3D50" }}
            >
              Send an email
            </a>
          </div>
          <p className="mt-6 text-xs" style={{ color: "#374151" }}>
            +234 803 987 9430 · Mon – Sat · 8 am – 5 pm
          </p>
        </AnimateIn>
      </div>
    </section>
  );
}
