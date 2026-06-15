import AnimateIn from "../components/AnimateIn";

export const metadata = {
  title: "Contact",
  description:
    "Reach ADEM Financial Consulting via WhatsApp, email, or our contact form. Free first consultation.",
};

const contactCards = [
  {
    label: "WhatsApp",
    value: "+234 803 987 9430",
    href: "https://wa.me/2348039879430",
    note: "Fastest response — typically within hours",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
      </svg>
    ),
  },
  {
    label: "Email",
    value: "ademfinancialconsulting@gmail.com",
    href: "mailto:ademfinancialconsulting@gmail.com",
    note: "Response within 1 business day",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    label: "Business Hours",
    value: "Monday – Saturday, 8:00 am – 5:00 pm",
    href: null,
    note: "Online only · Serving all of Nigeria",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
];

const socials = [
  {
    name: "Instagram",
    href: "https://www.instagram.com/adem_financial_consulting_ltd",
    handle: "@adem_financial_consulting_ltd",
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/company/adem-financial-consulting-ltd/",
    handle: "adem-financial-consulting-ltd",
  },
];

const services = [
  "Accounting & Bookkeeping",
  "Tax Consulting & Compliance",
  "Audit Services",
  "Financial Consulting",
  "Risk Management",
  "Business Registration & Compliance",
  "Training & Capacity Building",
  "Not sure — need guidance",
];

const inputClass =
  "w-full rounded-xl px-4 py-3 text-sm text-gray-900 border bg-white transition-all duration-150 outline-none focus:ring-2";
const inputStyle = { borderColor: "#E5E7EB" };

export default function ContactPage() {
  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────── */}
      <section
        className="relative overflow-hidden px-4 py-28"
        style={{ backgroundColor: "#0C2D3E" }}
      >
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse at 80% 50%, rgba(23,168,160,0.07) 0%, transparent 60%)",
          }}
        />
        <div className="relative max-w-7xl mx-auto">
          <AnimateIn variant="fadeDown" delay={0}>
            <p
              className="text-[11px] font-semibold uppercase tracking-[0.22em] mb-4"
              style={{ color: "#4DBDB5" }}
            >
              Get In Touch
            </p>
          </AnimateIn>
          <AnimateIn variant="fadeUp" delay={80}>
            <h1
              className="font-bold text-white leading-tight mb-5 max-w-3xl"
              style={{ fontSize: "clamp(2.4rem, 5.5vw, 4.5rem)" }}
            >
              The first conversation is free. Let's talk.
            </h1>
          </AnimateIn>
          <AnimateIn variant="fadeUp" delay={180}>
            <p className="text-gray-400 max-w-xl leading-relaxed text-lg">
              Whether you need help with tax compliance, bookkeeping, or a statutory
              certificate — reach out and we'll point you in the right direction.
            </p>
          </AnimateIn>
        </div>
      </section>

      {/* ── MAIN ─────────────────────────────────────────────── */}
      <section className="px-4 py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16">

          {/* Left — contact info */}
          <AnimateIn variant="fadeLeft">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Contact details</h2>

            {/* Contact cards */}
            <div className="space-y-4 mb-10">
              {contactCards.map((c, i) => (
                <AnimateIn key={c.label} variant="fadeUp" delay={i * 80}>
                  <div
                    className="flex items-start gap-4 p-5 rounded-2xl border"
                    style={{ borderColor: "#E5E7EB", backgroundColor: "#FAFAFA" }}
                  >
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                      style={{ backgroundColor: "rgba(23,168,160,0.1)", color: "#17A8A0" }}
                    >
                      {c.icon}
                    </div>
                    <div className="min-w-0">
                      <p
                        className="text-[10px] font-semibold uppercase tracking-[0.15em] mb-0.5"
                        style={{ color: "#9CA3AF" }}
                      >
                        {c.label}
                      </p>
                      {c.href ? (
                        <a
                          href={c.href}
                          className="font-semibold text-sm hover:underline break-all"
                          style={{ color: "#17A8A0" }}
                        >
                          {c.value}
                        </a>
                      ) : (
                        <p className="text-gray-800 font-semibold text-sm">{c.value}</p>
                      )}
                      {c.note && (
                        <p className="text-gray-400 text-xs mt-0.5">{c.note}</p>
                      )}
                    </div>
                  </div>
                </AnimateIn>
              ))}
            </div>

            {/* Socials */}
            <div className="mb-10">
              <p
                className="text-[10px] font-semibold uppercase tracking-[0.18em] mb-4"
                style={{ color: "#9CA3AF" }}
              >
                Follow us
              </p>
              <div className="space-y-3">
                {socials.map((s) => (
                  <a
                    key={s.name}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm group"
                  >
                    <span className="font-semibold hover:underline" style={{ color: "#17A8A0" }}>
                      {s.name}
                    </span>
                    <span className="text-xs" style={{ color: "#9CA3AF" }}>
                      {s.handle}
                    </span>
                  </a>
                ))}
              </div>
            </div>

            {/* WhatsApp highlight */}
            <AnimateIn variant="scaleUp" delay={240}>
              <div
                className="rounded-2xl p-6 border"
                style={{ backgroundColor: "#091F2C", borderColor: "#1A3A4A" }}
              >
                <p className="text-white font-bold mb-1">Quickest response via WhatsApp</p>
                <p className="text-gray-400 text-sm mb-5">
                  Message us directly — we respond within business hours.
                </p>
                <a
                  href="https://wa.me/2348039879430"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-white font-semibold text-sm transition-all duration-200 hover:opacity-90"
                  style={{ background: "linear-gradient(135deg, #17A8A0 0%, #0d8f88 100%)" }}
                >
                  Open WhatsApp →
                </a>
              </div>
            </AnimateIn>
          </AnimateIn>

          {/* Right — form */}
          <AnimateIn variant="fadeRight">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Send us a message</h2>
            <form className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1.5 uppercase tracking-wide">
                    First name
                  </label>
                  <input
                    type="text"
                    placeholder="John"
                    className={inputClass}
                    style={{
                      ...inputStyle,
                      "--tw-ring-color": "#17A8A0",
                    }}
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1.5 uppercase tracking-wide">
                    Last name
                  </label>
                  <input
                    type="text"
                    placeholder="Doe"
                    className={inputClass}
                    style={inputStyle}
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1.5 uppercase tracking-wide">
                  Email address
                </label>
                <input
                  type="email"
                  placeholder="you@company.com"
                  className={inputClass}
                  style={inputStyle}
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1.5 uppercase tracking-wide">
                  Business name
                </label>
                <input
                  type="text"
                  placeholder="Your company"
                  className={inputClass}
                  style={inputStyle}
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1.5 uppercase tracking-wide">
                  What do you need help with?
                </label>
                <select
                  className={inputClass}
                  style={{ ...inputStyle, color: "#6B7280" }}
                >
                  <option value="">Select a service</option>
                  {services.map((s) => (
                    <option key={s}>{s}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1.5 uppercase tracking-wide">
                  Message
                </label>
                <textarea
                  rows={5}
                  placeholder="Tell us a bit about your business and what you're dealing with..."
                  className={inputClass}
                  style={{ ...inputStyle, resize: "none" }}
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 rounded-full text-white font-semibold text-sm transition-all duration-200 hover:opacity-90 hover:scale-[1.01]"
                style={{ background: "linear-gradient(135deg, #17A8A0 0%, #0d8f88 100%)" }}
              >
                Send message →
              </button>

              <p className="text-gray-400 text-xs text-center">
                For urgent matters, WhatsApp is faster. We typically reply to emails within 1 business day.
              </p>
            </form>
          </AnimateIn>
        </div>
      </section>

      {/* ── PROMISE STRIP ────────────────────────────────────── */}
      <section className="px-4 py-20" style={{ backgroundColor: "#F5F9F8" }}>
        <AnimateIn variant="fadeUp">
          <div className="max-w-3xl mx-auto text-center">
            <p
              className="text-xs font-semibold uppercase tracking-[0.2em] mb-3"
              style={{ color: "#17A8A0" }}
            >
              Our Promise
            </p>
            <h2
              className="font-bold text-gray-900 mb-4"
              style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.5rem)" }}
            >
              Every consultation starts with listening, not selling.
            </h2>
            <p className="text-gray-500 leading-relaxed max-w-md mx-auto">
              We'll tell you honestly whether we're the right fit for what you need —
              and if we're not, we'll point you in the right direction.
            </p>
          </div>
        </AnimateIn>
      </section>
    </>
  );
}
