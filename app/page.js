import Image from "next/image";
import Link from "next/link";
import CTABanner from "./components/CTABanner";
import AnimateIn from "./components/AnimateIn";

const services = [
  {
    id: "tax",
    title: "Tax Consulting & Compliance",
    desc: "FIRS, PAYE, VAT, WHT, TCC — registered, filed, and cleared.",
    price: "From ₦30,000",
    icon: "M9 14l6-6m-5.5.5h.01m4.99 5h.01M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16l3.5-2 3.5 2 3.5-2 3.5 2z",
  },
  {
    id: "audit",
    title: "Audit Services",
    desc: "Statutory, internal, and compliance audits that stakeholders trust.",
    price: "On request",
    icon: "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z",
  },
  {
    id: "financial",
    title: "Financial Consulting",
    desc: "Cash flow, budgeting, performance reviews, restructuring advisory.",
    price: "From ₦50,000",
    icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z",
  },
  {
    id: "risk",
    title: "Risk Management",
    desc: "Internal control reviews, risk assessment, fraud prevention.",
    price: "On request",
    icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
  },
];

const steps = [
  {
    num: "01",
    title: "Free consultation",
    desc: "Tell us about your business. We listen, ask the right questions, and diagnose what you actually need.",
  },
  {
    num: "02",
    title: "Tailored proposal",
    desc: "We scope a service plan specific to your sector, size, and compliance situation — no generic packages.",
  },
  {
    num: "03",
    title: "We get to work",
    desc: "Transparent delivery, clear timelines, and regular updates until your books and compliance are sorted.",
  },
];

const testimonials = [
  {
    text: "ADEM helped us organize our accounting records and obtain our Tax Clearance Certificate without stress. Their professionalism and attention to detail were outstanding.",
    client: "Kosovo Global Concept",
    location: "Abuja",
  },
  {
    text: "We struggled with compliance requirements for government contracts until we engaged ADEM. They guided us through the entire process and delivered excellent results.",
    client: "Clothing 95",
    location: "Abuja",
  },
  {
    text: "Their bookkeeping and financial reporting services have given us a clear picture of our business performance. I highly recommend them to any growing business.",
    client: "Hariz Pizza",
    location: "Lokoja",
  },
  {
    text: "The team is knowledgeable, responsive, and trustworthy. They assisted us with tax compliance and financial advisory that have improved our operations significantly.",
    client: "Great",
    location: "Web Developer, Lokoja",
  },
];

export default function Home() {
  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────── */}
      <section
        className="relative min-h-screen flex items-center overflow-hidden"
        style={{ backgroundColor: "#0C2D3E" }}
      >
        {/* Background glow */}
        <div
          className="pointer-events-none absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(23,168,160,0.08) 0%, transparent 65%)",
          }}
        />

        <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-0">
          <div className="grid lg:grid-cols-2 gap-16 items-center">

            {/* Left — text */}
            <div>
              <AnimateIn variant="fadeDown" delay={0}>
                <span
                  className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.22em] px-4 py-2 rounded-full border mb-8"
                  style={{
                    color: "#17A8A0",
                    borderColor: "rgba(23,168,160,0.25)",
                    backgroundColor: "rgba(23,168,160,0.06)",
                  }}
                >
                  <span
                    className="w-1.5 h-1.5 rounded-full"
                    style={{ backgroundColor: "#17A8A0" }}
                  />
                  Financial · Tax · Compliance
                </span>
              </AnimateIn>

              <AnimateIn variant="fadeUp" delay={80}>
                <h1
                  className="font-bold text-white leading-[1.04] tracking-tight mb-7"
                  style={{ fontSize: "clamp(2.8rem, 6vw, 5rem)" }}
                >
                  Stay{" "}
                  <span style={{ color: "#17A8A0" }}>compliant.</span>
                  <br />
                  Grow with clarity.
                </h1>
              </AnimateIn>

              <AnimateIn variant="fadeUp" delay={180}>
                <p className="text-gray-400 text-lg leading-relaxed mb-10 max-w-md">
                  Accounting, tax, audit, and compliance advisory built for Nigerian
                  SMEs that can't afford to get the fundamentals wrong.
                </p>
              </AnimateIn>

              <AnimateIn variant="fadeUp" delay={280}>
                <div className="flex flex-wrap gap-4 mb-14">
                  <a
                    href="https://wa.me/2348039879430"
                    className="inline-flex items-center gap-2 px-7 py-4 rounded-full text-white font-semibold text-sm transition-all duration-200 hover:opacity-90 hover:scale-[1.03]"
                    style={{ background: "linear-gradient(135deg, #17A8A0 0%, #0d8f88 100%)" }}
                  >
                    Book a free consultation →
                  </a>
                  <Link
                    href="/services"
                    className="inline-flex items-center gap-2 px-7 py-4 rounded-full font-medium text-sm border transition-all duration-200 hover:text-white"
                    style={{ color: "#9CA3AF", borderColor: "#2A4A5A" }}
                  >
                    View our services
                  </Link>
                </div>
              </AnimateIn>

              <AnimateIn variant="fadeUp" delay={380}>
                {/* Mini stats strip */}
                <div className="flex gap-10 flex-wrap">
                  {[
                    ["40+", "SMEs served"],
                    ["5", "Compliance certs"],
                    ["100%", "Nigeria-focused"],
                  ].map(([v, l]) => (
                    <div key={l} className="border-l-2 pl-4" style={{ borderColor: "#17A8A0" }}>
                      <p className="text-2xl font-bold" style={{ color: "#17A8A0" }}>{v}</p>
                      <p className="text-gray-500 text-xs mt-0.5">{l}</p>
                    </div>
                  ))}
                </div>
              </AnimateIn>
            </div>

            {/* Right — image */}
            <AnimateIn variant="scaleUp" delay={200} className="relative">
              <div className="relative rounded-2xl overflow-hidden" style={{ height: "clamp(380px, 55vw, 600px)" }}>
                <Image
                  src="https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?auto=format&fit=crop&w=1000&q=80"
                  alt="Nigerian business professionals in a meeting"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                  priority
                />
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(160deg, rgba(12,45,62,0.2) 0%, rgba(12,45,62,0.55) 100%)",
                  }}
                />

                {/* Floating certificate card */}
                <div
                  className="absolute bottom-5 left-5 right-5 p-5 rounded-xl border"
                  style={{
                    backgroundColor: "rgba(9,31,44,0.82)",
                    backdropFilter: "blur(12px)",
                    borderColor: "rgba(23,168,160,0.28)",
                  }}
                >
                  <p
                    className="text-[10px] font-semibold uppercase tracking-[0.18em] mb-3"
                    style={{ color: "#4DBDB5" }}
                  >
                    Certificates We Process
                  </p>
                  <div className="grid grid-cols-2 gap-x-4 gap-y-2">
                    {[
                      "BPP Registration",
                      "Tax Clearance (TCC)",
                      "NSITF Compliance",
                      "PENCOM Compliance",
                      "ITF Compliance",
                      "SMEDAN Compliance",
                    ].map((cert) => (
                      <div key={cert} className="flex items-center gap-2">
                        <span
                          className="w-1.5 h-1.5 rounded-full shrink-0"
                          style={{ backgroundColor: "#17A8A0" }}
                        />
                        <span className="text-gray-300 text-xs">{cert}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Decorative offset border */}
              <div
                className="absolute -bottom-3 -right-3 w-full h-full rounded-2xl -z-10 border"
                style={{ borderColor: "rgba(23,168,160,0.18)" }}
              />
            </AnimateIn>
          </div>
        </div>
      </section>

      {/* ── TRUSTED BY ───────────────────────────────────────── */}
      <AnimateIn variant="fadeIn">
        <section
          className="border-b"
          style={{ backgroundColor: "#091F2C", borderColor: "#1A3A4A" }}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-4 py-4">
              <span
                className="text-[10px] uppercase tracking-[0.2em] font-semibold whitespace-nowrap shrink-0"
                style={{ color: "#374151" }}
              >
                Trusted by
              </span>
              <div className="w-px h-4 shrink-0" style={{ backgroundColor: "#1A3A4A" }} />

              {/* Scrollable pill row */}
              <div className="relative flex-1 min-w-0">
                <div
                  className="pointer-events-none absolute right-0 top-0 bottom-0 w-10 z-10"
                  style={{
                    background: "linear-gradient(to right, transparent, #091F2C)",
                  }}
                />
                <div
                  className="flex items-center gap-2 overflow-x-auto"
                  style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
                >
                  {[
                    "Kosovo Global Concept",
                    "Clothing 95",
                    "Hariz Pizza",
                    "40+ Nigerian SMEs",
                  ].map((name) => (
                    <span
                      key={name}
                      className="text-xs font-medium whitespace-nowrap px-3 py-1.5 rounded-full border shrink-0"
                      style={{ color: "#6B7280", borderColor: "#1E3D50" }}
                    >
                      {name}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </AnimateIn>

      {/* ── SERVICES ─────────────────────────────────────────── */}
      <section className="px-4 py-28 bg-white">
        <div className="max-w-7xl mx-auto">
          <AnimateIn variant="fadeUp">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-14">
              <div>
                <p
                  className="text-xs font-semibold uppercase tracking-[0.2em] mb-3"
                  style={{ color: "#17A8A0" }}
                >
                  What We Do
                </p>
                <h2
                  className="font-bold text-gray-900 leading-tight max-w-lg"
                  style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}
                >
                  Services built for Nigerian regulation
                </h2>
              </div>
              <Link
                href="/services"
                className="text-sm font-semibold shrink-0 flex items-center gap-1 hover:underline"
                style={{ color: "#17A8A0" }}
              >
                All 7 services →
              </Link>
            </div>
          </AnimateIn>

          {/* Feature + stack */}
          <div className="grid lg:grid-cols-3 gap-5 mb-5">
            {/* Featured card */}
            <AnimateIn variant="scaleUp" delay={0} className="lg:col-span-2">
              <Link
                href="/services#accounting"
                className="relative rounded-2xl overflow-hidden group block"
                style={{ minHeight: "280px" }}
              >
                <Image
                  src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1200&q=80"
                  alt="Financial records and accounting"
                  fill
                  sizes="(max-width: 1024px) 100vw, 67vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(12,45,62,0.92) 0%, rgba(12,45,62,0.55) 100%)",
                  }}
                />
                <div className="absolute inset-0 p-8 flex flex-col justify-end">
                  <p
                    className="text-[10px] font-semibold uppercase tracking-[0.18em] mb-2"
                    style={{ color: "#4DBDB5" }}
                  >
                    01 — Most Popular
                  </p>
                  <h3 className="text-white text-2xl font-bold mb-2">
                    Accounting & Bookkeeping
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed mb-4 max-w-md">
                    Clean books, accurate statements, payroll, reconciliations, monthly management reports.
                  </p>
                  <span className="text-sm font-semibold" style={{ color: "#17A8A0" }}>
                    From ₦50,000/mo →
                  </span>
                </div>
              </Link>
            </AnimateIn>

            {/* Right stack */}
            <div className="flex flex-col gap-5">
              {[
                {
                  id: "registration",
                  num: "06",
                  title: "Registration & Compliance",
                  desc: "BPP, TCC, NSITF, PENCOM, ITF — handled end to end.",
                  price: "On request",
                  icon: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
                },
                {
                  id: "training",
                  num: "07",
                  title: "Training & Capacity Building",
                  desc: "Practical workshops for your finance team.",
                  price: "From ₦100,000/session",
                  icon: "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253",
                },
              ].map((s, i) => (
                <AnimateIn key={s.id} variant="scaleUp" delay={i * 100} className="flex-1">
                  <Link
                    href={`/services#${s.id}`}
                    className="flex-1 h-full rounded-2xl p-6 border transition-all duration-200 hover:shadow-lg group block"
                    style={{ borderColor: "#E5E7EB" }}
                  >
                    <div className="flex items-start justify-between mb-3">
                      <div style={{ color: "#17A8A0" }}>
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={s.icon} />
                        </svg>
                      </div>
                      <span className="text-xs font-bold" style={{ color: "#17A8A0" }}>{s.num}</span>
                    </div>
                    <h3 className="text-gray-900 font-bold mb-1">{s.title}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed mb-3">{s.desc}</p>
                    <p className="text-xs font-semibold" style={{ color: "#17A8A0" }}>{s.price}</p>
                  </Link>
                </AnimateIn>
              ))}
            </div>
          </div>

          {/* Bottom 4 */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {services.map((s, i) => (
              <AnimateIn key={s.id} variant="scaleUp" delay={i * 80}>
                <Link
                  href={`/services#${s.id}`}
                  className="rounded-2xl p-6 border transition-all duration-200 hover:shadow-lg group block h-full"
                  style={{ borderColor: "#E5E7EB" }}
                >
                  <div className="mb-3" style={{ color: "#17A8A0" }}>
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={s.icon} />
                    </svg>
                  </div>
                  <h3 className="text-gray-900 font-bold text-sm mb-1">{s.title}</h3>
                  <p className="text-gray-500 text-xs leading-relaxed mb-3">{s.desc}</p>
                  <p className="text-xs font-semibold" style={{ color: "#17A8A0" }}>{s.price}</p>
                </Link>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY ADEM ─────────────────────────────────────────── */}
      <section className="px-4 py-28 overflow-hidden" style={{ backgroundColor: "#F5F9F8" }}>
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
          {/* Image side */}
          <AnimateIn variant="fadeLeft" className="relative">
            <div className="relative rounded-2xl overflow-hidden" style={{ height: "520px" }}>
              <Image
                src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1000&q=80"
                alt="ADEM team collaborating on financial strategy"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
              <div
                className="absolute inset-0"
                style={{
                  background: "linear-gradient(180deg, transparent 50%, rgba(12,45,62,0.4) 100%)",
                }}
              />
            </div>
            {/* Floating card */}
            <div
              className="absolute -bottom-6 -right-6 p-6 rounded-2xl border shadow-2xl"
              style={{ backgroundColor: "#0C2D3E", borderColor: "#1E3D50" }}
            >
              <p className="text-4xl font-bold" style={{ color: "#17A8A0" }}>40+</p>
              <p className="text-gray-400 text-sm mt-1">SMEs served</p>
            </div>
          </AnimateIn>

          {/* Text side */}
          <AnimateIn variant="fadeRight">
            <p
              className="text-xs font-semibold uppercase tracking-[0.2em] mb-4"
              style={{ color: "#17A8A0" }}
            >
              Why ADEM
            </p>
            <h2
              className="font-bold text-gray-900 mb-6 leading-tight"
              style={{ fontSize: "clamp(1.9rem, 3.5vw, 2.8rem)" }}
            >
              Financial clarity for businesses that can't afford guesswork.
            </h2>
            <p className="text-gray-500 leading-relaxed mb-10 text-lg">
              We work with regulators every week. We know what forms ask, what
              auditors look for, and what gets contracts disqualified before the bid
              even opens.
            </p>
            <div className="grid grid-cols-3 gap-6">
              {[
                ["5", "Compliance certificates processed"],
                ["7", "Service lines"],
                ["100%", "Compliance-focused delivery"],
              ].map(([v, l], i) => (
                <AnimateIn key={l} variant="fadeUp" delay={i * 80}>
                  <div className="border-t-2 pt-5" style={{ borderColor: "#17A8A0" }}>
                    <p
                      className="font-bold text-gray-900 mb-1"
                      style={{ fontSize: "clamp(1.8rem, 3vw, 2.5rem)" }}
                    >
                      {v}
                    </p>
                    <p className="text-gray-500 text-xs leading-relaxed">{l}</p>
                  </div>
                </AnimateIn>
              ))}
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* ── HOW WE WORK ──────────────────────────────────────── */}
      <section className="px-4 py-28 bg-white">
        <div className="max-w-7xl mx-auto">
          <AnimateIn variant="fadeUp">
            <div className="text-center mb-16">
              <p
                className="text-xs font-semibold uppercase tracking-[0.2em] mb-3"
                style={{ color: "#17A8A0" }}
              >
                Our Process
              </p>
              <h2
                className="font-bold text-gray-900"
                style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}
              >
                How we work
              </h2>
            </div>
          </AnimateIn>

          <div className="grid md:grid-cols-3 gap-12 relative">
            {/* Connector line */}
            <div
              className="hidden md:block absolute h-px top-7"
              style={{
                left: "calc(16.66% + 2rem)",
                right: "calc(16.66% + 2rem)",
                backgroundColor: "#E5E7EB",
              }}
            />
            {steps.map((step, i) => (
              <AnimateIn key={step.num} variant="fadeUp" delay={i * 120}>
                <div
                  className="w-14 h-14 rounded-full flex items-center justify-center font-bold text-sm mb-6 relative z-10"
                  style={{
                    backgroundColor: "#0C2D3E",
                    border: "2px solid #17A8A0",
                    color: "#17A8A0",
                  }}
                >
                  {step.num}
                </div>
                <h3 className="text-gray-900 font-bold text-xl mb-3">{step.title}</h3>
                <p className="text-gray-500 leading-relaxed">{step.desc}</p>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ─────────────────────────────────────── */}
      <section className="px-4 py-28" style={{ backgroundColor: "#091F2C" }}>
        <div className="max-w-7xl mx-auto">
          <AnimateIn variant="fadeUp">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-14">
              <div>
                <p
                  className="text-xs font-semibold uppercase tracking-[0.2em] mb-3"
                  style={{ color: "#17A8A0" }}
                >
                  Client Words
                </p>
                <h2
                  className="font-bold text-white leading-tight"
                  style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}
                >
                  What clients say
                </h2>
              </div>
              <Link
                href="/about#testimonials"
                className="text-sm font-semibold hover:underline shrink-0"
                style={{ color: "#17A8A0" }}
              >
                Read more →
              </Link>
            </div>
          </AnimateIn>

          <div className="grid sm:grid-cols-2 gap-6">
            {testimonials.map((t, i) => (
              <AnimateIn key={i} variant="scaleUp" delay={i * 90}>
                <div
                  className="rounded-2xl p-8 border h-full"
                  style={{ backgroundColor: "#0C2D3E", borderColor: "#1A3A4A" }}
                >
                  <div
                    className="text-6xl leading-none font-serif mb-4"
                    style={{ color: "#17A8A0", opacity: 0.5 }}
                  >
                    "
                  </div>
                  <p className="text-gray-300 leading-relaxed mb-6">{t.text}</p>
                  <div className="flex items-center gap-3">
                    <div
                      className="w-9 h-9 rounded-full flex items-center justify-center text-white text-xs font-bold shrink-0"
                      style={{ backgroundColor: "#17A8A0" }}
                    >
                      {t.client[0]}
                    </div>
                    <div>
                      <p className="text-white text-sm font-semibold">{t.client}</p>
                      <p className="text-xs" style={{ color: "#6B7280" }}>{t.location}</p>
                    </div>
                  </div>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
