import Image from "next/image";
import CTABanner from "../components/CTABanner";
import AnimateIn from "../components/AnimateIn";

export const metadata = {
  title: "Industries",
  description:
    "We serve SMEs, contractors, NGOs, schools, logistics companies, and startups across Nigeria.",
};

const industries = [
  {
    name: "SMEs & Growing Businesses",
    desc: "Small and medium enterprises form the backbone of Nigeria's economy. We provide the financial infrastructure SMEs need to formalise, compete for contracts, and scale profitably.",
    services: ["Accounting & Bookkeeping", "Tax Filing & TCC", "Monthly Reports"],
    img: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Contractors & Procurement",
    desc: "Government and private contractors need current compliance certificates to qualify for bids. We handle every certificate on the procurement checklist — BPP, TCC, NSITF, PENCOM, ITF.",
    services: ["BPP Registration", "Tax Clearance (TCC)", "NSITF, PENCOM & ITF"],
    img: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "NGOs & Non-Profits",
    desc: "Non-profits face unique regulatory and donor-reporting requirements. We help NGOs maintain compliance, manage restricted funds properly, and file statutory reports that hold up to scrutiny.",
    services: ["Financial Reporting", "Compliance Audits", "Tax Advisory"],
    img: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Schools & Educational Institutions",
    desc: "Educational businesses have consistent payroll, term-based cash flows, and specific compliance needs. We keep your institution financially healthy and audit-ready every term.",
    services: ["Payroll Management", "Bookkeeping", "Financial Statements"],
    img: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Logistics & Transport",
    desc: "Fleet-heavy operations, courier networks, and haulage businesses have complex PAYE, NSITF, and cash flow challenges. We simplify the numbers so you can focus on the road.",
    services: ["Tax Compliance & PAYE", "NSITF Registration", "Monthly Reports"],
    img: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Startups & Consultants",
    desc: "Early-stage businesses often overlook compliance until it becomes expensive. We help startups build the right financial and regulatory foundation from day one.",
    services: ["Business Registration", "Tax Registration", "Cash Flow Advisory"],
    img: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80",
  },
];

export default function IndustriesPage() {
  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────── */}
      <section
        className="relative overflow-hidden px-4 py-28"
        style={{ backgroundColor: "#0C2D3E" }}
      >
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?auto=format&fit=crop&w=1600&q=60"
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
              Industries
            </p>
          </AnimateIn>
          <AnimateIn variant="fadeUp" delay={80}>
            <h1
              className="font-bold text-white leading-tight mb-5 max-w-3xl"
              style={{ fontSize: "clamp(2.4rem, 5.5vw, 4.5rem)" }}
            >
              We work across the sectors that drive Nigerian business.
            </h1>
          </AnimateIn>
          <AnimateIn variant="fadeUp" delay={180}>
            <p className="text-gray-400 max-w-xl leading-relaxed text-lg">
              Wherever your business sits, compliance and sound financials aren't
              optional. We've built specialised practices for the industries that
              need it most.
            </p>
          </AnimateIn>
        </div>
      </section>

      {/* ── INDUSTRY CARDS ───────────────────────────────────── */}
      <section className="px-4 py-24 bg-white">
        <div className="max-w-7xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-7">
          {industries.map((ind, i) => (
            <AnimateIn key={ind.name} variant="scaleUp" delay={i * 75}>
              <div
                className="rounded-2xl overflow-hidden border transition-all duration-300 hover:shadow-xl hover:-translate-y-1 group h-full"
                style={{ borderColor: "#E5E7EB" }}
              >
                <div className="relative h-52">
                  <Image
                    src={ind.img}
                    alt={ind.name}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div
                    className="absolute inset-0"
                    style={{
                      background:
                        "linear-gradient(180deg, rgba(12,45,62,0.25) 0%, rgba(12,45,62,0.7) 100%)",
                    }}
                  />
                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <h3 className="text-white font-bold text-lg">{ind.name}</h3>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-500 text-sm leading-relaxed mb-5">{ind.desc}</p>
                  <div className="space-y-2">
                    {ind.services.map((s) => (
                      <div key={s} className="flex items-center gap-2.5 text-sm text-gray-500">
                        <span
                          className="w-1.5 h-1.5 rounded-full shrink-0"
                          style={{ backgroundColor: "#17A8A0" }}
                        />
                        {s}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </AnimateIn>
          ))}
        </div>
      </section>

      {/* ── COMMITMENT ───────────────────────────────────────── */}
      <section className="px-4 py-24 overflow-hidden" style={{ backgroundColor: "#091F2C" }}>
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <AnimateIn variant="fadeLeft">
            <p
              className="text-xs font-semibold uppercase tracking-[0.2em] mb-4"
              style={{ color: "#17A8A0" }}
            >
              Our Commitment
            </p>
            <h2
              className="font-bold text-white mb-5 leading-tight"
              style={{ fontSize: "clamp(1.9rem, 3.5vw, 2.8rem)" }}
            >
              Industry-specific expertise. Same high standards.
            </h2>
            <p className="text-gray-400 leading-relaxed">
              Each sector has different regulatory touch-points. We've handled
              them all — from PENCOM for contractors to donor-fund reporting for
              NGOs. Your compliance is in experienced hands.
            </p>
          </AnimateIn>

          <div className="grid grid-cols-2 gap-5">
            {[
              { v: "6+", l: "Sectors served" },
              { v: "40+", l: "Businesses helped" },
              { v: "5", l: "Compliance certificates" },
              { v: "100%", l: "Nigerian-focused" },
            ].map((s, i) => (
              <AnimateIn key={s.l} variant="scaleUp" delay={i * 80}>
                <div
                  className="rounded-2xl p-6 border h-full"
                  style={{ backgroundColor: "#0C2D3E", borderColor: "#1E3D50" }}
                >
                  <p
                    className="text-4xl font-bold mb-1"
                    style={{ color: "#17A8A0" }}
                  >
                    {s.v}
                  </p>
                  <p className="text-gray-400 text-sm">{s.l}</p>
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
