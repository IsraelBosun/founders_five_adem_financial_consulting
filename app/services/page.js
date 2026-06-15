import Image from "next/image";
import CTABanner from "../components/CTABanner";
import AnimateIn from "../components/AnimateIn";

export const metadata = {
  title: "Services",
  description:
    "7 professional service lines — accounting, tax, audit, financial consulting, risk management, compliance registration, and training.",
};

const services = [
  {
    id: "accounting",
    num: "01",
    title: "Accounting & Bookkeeping",
    tagline: "Accurate records. Clean books. Always.",
    desc: "Accurate financial records are the foundation of every compliant, profitable business. We handle your books so you can focus on growing — and walk into any audit or investor conversation with confidence.",
    items: [
      "Financial record keeping",
      "Preparation of financial statements",
      "Bank reconciliation",
      "Payroll management",
      "Monthly management reports",
    ],
    price: "Starts from ₦50,000/month",
    note: "Pricing varies by business size and transaction volume.",
    img: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "tax",
    num: "02",
    title: "Tax Consulting & Compliance",
    tagline: "File on time. Pay the right amount. Sleep easy.",
    desc: "Tax compliance in Nigeria is complex — FIRS, state tax authorities, PAYE, WHT, VAT. We navigate it all for you, ensuring you're registered, filing correctly, and never caught off-guard by an audit.",
    items: [
      "Tax registration",
      "Tax filing and remittance (VAT, CIT, PAYE, WHT)",
      "Tax planning and advisory",
      "Tax clearance certificate (TCC) processing",
      "Tax audit support",
    ],
    price: "Starts from ₦30,000",
    note: "Complex engagements priced on request.",
    img: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "audit",
    num: "03",
    title: "Audit Services",
    tagline: "Independent assurance stakeholders can trust.",
    desc: "Whether you need a statutory audit for regulatory compliance, an internal audit to strengthen controls, or a financial review before a funding round — our audits give stakeholders the confidence they need.",
    items: [
      "Statutory audits",
      "Internal audits",
      "Financial reviews",
      "Compliance audits",
    ],
    price: "On request",
    note: "Scoped and priced after an initial discovery call.",
    img: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "financial",
    num: "04",
    title: "Financial Consulting",
    tagline: "Data-driven decisions. Not guesswork.",
    desc: "Understanding your numbers is how you make better business decisions. We translate your financial data into clear insights — cash position, profitability, budget variance — so you can plan with confidence.",
    items: [
      "Financial analysis and reporting",
      "Budget preparation and monitoring",
      "Cash flow management",
      "Business performance assessment",
      "Financial restructuring advice",
    ],
    price: "Starts from ₦50,000 per engagement",
    note: "Ongoing retainers available.",
    img: "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "risk",
    num: "05",
    title: "Risk Management",
    tagline: "Find the gaps before regulators or fraudsters do.",
    desc: "Weak internal controls are how businesses lose money they didn't know they were losing. We assess your processes, identify vulnerabilities, and give you practical recommendations that actually get implemented.",
    items: [
      "Internal control reviews",
      "Risk assessment",
      "Process improvement recommendations",
      "Fraud prevention advisory",
    ],
    price: "On request",
    note: "Engagements scoped to business complexity.",
    img: null,
  },
  {
    id: "registration",
    num: "06",
    title: "Business Registration & Compliance",
    tagline: "Get the certificates. Win the contracts.",
    desc: "Government contracts and serious procurement opportunities require current statutory compliance certificates. We handle the paperwork end-to-end — from BPP registration to PENCOM certification.",
    items: [
      "BPP Registration (Bureau of Public Procurement)",
      "Tax Clearance Certificate (TCC) — FIRS",
      "NSITF Compliance Certificate",
      "PENCOM Compliance Certificate",
      "ITF Compliance Certificate",
    ],
    price: "On request",
    note: "All five certificates can be bundled.",
    img: null,
  },
  {
    id: "training",
    num: "07",
    title: "Training & Capacity Building",
    tagline: "Equip your team. Improve your decisions.",
    desc: "A financially literate team makes better decisions and fewer costly mistakes. Our workshops are practical, Nigeria-specific, and designed for busy business owners and finance staff.",
    items: [
      "Accounting and finance training",
      "Financial management workshops",
      "Internal control training",
      "Tax compliance training for staff",
    ],
    price: "Starts from ₦100,000 per session",
    note: "Group discounts available for multiple sessions.",
    img: null,
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────── */}
      <section
        className="relative overflow-hidden px-4 py-28"
        style={{ backgroundColor: "#0C2D3E" }}
      >
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1600&q=60"
            alt=""
            fill
            sizes="100vw"
            className="object-cover opacity-10"
            priority
          />
        </div>
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background: "linear-gradient(160deg, rgba(12,45,62,0.7) 0%, rgba(12,45,62,0.95) 60%)",
          }}
        />

        <div className="relative max-w-7xl mx-auto">
          <AnimateIn variant="fadeDown" delay={0}>
            <p
              className="text-[11px] font-semibold uppercase tracking-[0.22em] mb-4"
              style={{ color: "#4DBDB5" }}
            >
              Our Services
            </p>
          </AnimateIn>
          <AnimateIn variant="fadeUp" delay={80}>
            <h1
              className="font-bold text-white leading-tight mb-5 max-w-3xl"
              style={{ fontSize: "clamp(2.4rem, 5.5vw, 4.5rem)" }}
            >
              7 service lines built around Nigerian regulation
            </h1>
          </AnimateIn>
          <AnimateIn variant="fadeUp" delay={180}>
            <p className="text-gray-400 max-w-xl leading-relaxed text-lg">
              From day-to-day bookkeeping to statutory compliance certificates —
              everything a Nigerian SME needs to stay clean, bid confidently, and grow.
            </p>
          </AnimateIn>
        </div>
      </section>

      {/* ── SERVICE LIST ─────────────────────────────────────── */}
      <section className="px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          {services.map((s, i) => (
            <AnimateIn key={s.id} variant="fadeUp" delay={0}>
              <div
                id={s.id}
                className="grid md:grid-cols-2 gap-10 items-start py-20"
                style={{
                  borderBottom: i < services.length - 1 ? "1px solid #F3F4F6" : "none",
                }}
              >
                {/* Left */}
                <div>
                  <span
                    className="text-5xl font-bold block mb-4 leading-none"
                    style={{ color: "#F3F4F6" }}
                  >
                    {s.num}
                  </span>
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">{s.title}</h2>
                  <p className="text-sm font-semibold mb-5" style={{ color: "#17A8A0" }}>
                    {s.tagline}
                  </p>
                  <p className="text-gray-500 leading-relaxed mb-7">{s.desc}</p>
                  <span
                    className="inline-block px-5 py-2 rounded-full text-white text-xs font-semibold"
                    style={{ background: "linear-gradient(135deg, #17A8A0 0%, #0d8f88 100%)" }}
                  >
                    {s.price}
                  </span>
                  {s.note && (
                    <p className="text-gray-400 text-xs mt-2">{s.note}</p>
                  )}
                </div>

                {/* Right */}
                <div
                  className="rounded-2xl overflow-hidden border"
                  style={{ borderColor: "#1A3A4A", backgroundColor: "#0C2D3E" }}
                >
                  {s.img && (
                    <div className="relative h-44">
                      <Image src={s.img} alt={s.title} fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover opacity-60" />
                      <div
                        className="absolute inset-0"
                        style={{
                          background: "linear-gradient(180deg, transparent 30%, #0C2D3E 100%)",
                        }}
                      />
                    </div>
                  )}
                  <div className="p-6">
                    <h3
                      className="text-[10px] font-semibold uppercase tracking-[0.18em] mb-4"
                      style={{ color: "#4DBDB5" }}
                    >
                      What's included
                    </h3>
                    <ul className="space-y-3">
                      {s.items.map((item) => (
                        <li key={item} className="flex items-start gap-3 text-sm text-gray-300">
                          <span className="mt-0.5 shrink-0 text-base leading-none" style={{ color: "#17A8A0" }}>
                            ✓
                          </span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </AnimateIn>
          ))}
        </div>
      </section>

      {/* ── STATS STRIP ──────────────────────────────────────── */}
      <section className="px-4 py-24" style={{ backgroundColor: "#0C2D3E" }}>
        <div className="max-w-7xl mx-auto">
          <div className="grid sm:grid-cols-3 gap-12 text-center">
            {[
              { v: "40+", l: "SMEs and businesses served" },
              { v: "5", l: "Statutory certificates processed" },
              { v: "100%", l: "Compliance-focused delivery" },
            ].map((s, i) => (
              <AnimateIn key={s.l} variant="scaleUp" delay={i * 100}>
                <div className="border-t-2 pt-8" style={{ borderColor: "#17A8A0" }}>
                  <p
                    className="font-bold mb-2"
                    style={{ color: "#17A8A0", fontSize: "clamp(3rem, 7vw, 5rem)" }}
                  >
                    {s.v}
                  </p>
                  <p className="text-gray-400">{s.l}</p>
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
