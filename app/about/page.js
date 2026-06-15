import Image from "next/image";
import CTABanner from "../components/CTABanner";
import AnimateIn from "../components/AnimateIn";

export const metadata = {
  title: "About",
  description:
    "ADEM Financial Consulting — experienced professionals delivering accounting, tax, and compliance services built for Nigerian businesses.",
};

const values = [
  {
    num: "01",
    title: "Integrity",
    desc: "We handle your finances with the same care we would our own. No shortcuts, no guesswork, no conflicts of interest.",
  },
  {
    num: "02",
    title: "Accuracy",
    desc: "Timely, error-free work that you can present to regulators, auditors, and investors with full confidence.",
  },
  {
    num: "03",
    title: "Personalisation",
    desc: "No two businesses are the same. Every engagement is tailored to your specific situation, sector, and goals.",
  },
  {
    num: "04",
    title: "Regulatory Depth",
    desc: "We deal with FIRS, CAC, PENCOM, NSITF, and ITF every week. We know exactly what they want and how to get it done.",
  },
  {
    num: "05",
    title: "Client Success",
    desc: "Your growth is our metric. We measure success by how much cleaner, compliant, and financially confident your business becomes.",
  },
];

const testimonials = [
  {
    text: "ADEM helped us organize our accounting records and obtain our Tax Clearance Certificate without stress. Their professionalism and attention to detail were outstanding.",
    client: "Kosovo Global Concept",
    location: "Abuja",
  },
  {
    text: "Their bookkeeping and financial reporting services have given us a clear picture of our business performance. I highly recommend them to any growing business.",
    client: "Hariz Pizza",
    location: "Lokoja",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────── */}
      <section
        className="relative min-h-[65vh] flex items-center overflow-hidden px-4 py-24"
        style={{ backgroundColor: "#0C2D3E" }}
      >
        <div
          className="pointer-events-none absolute top-0 right-0 w-1/2 h-full"
          style={{
            background:
              "linear-gradient(270deg, rgba(23,168,160,0.06) 0%, transparent 100%)",
          }}
        />

        <div className="relative max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <div>
            <AnimateIn variant="fadeDown" delay={0}>
              <p
                className="text-[11px] font-semibold uppercase tracking-[0.22em] mb-4"
                style={{ color: "#4DBDB5" }}
              >
                About ADEM
              </p>
            </AnimateIn>
            <AnimateIn variant="fadeUp" delay={80}>
              <h1
                className="font-bold text-white leading-tight mb-6"
                style={{ fontSize: "clamp(2.4rem, 5.5vw, 4.5rem)" }}
              >
                Built to serve Nigerian businesses the right way.
              </h1>
            </AnimateIn>
            <AnimateIn variant="fadeUp" delay={180}>
              <p className="text-gray-400 leading-relaxed text-lg max-w-md">
                ADEM Financial Consulting Ltd was founded on a simple belief: Nigerian
                SMEs deserve access to the same quality of financial and compliance
                advisory that large corporations take for granted.
              </p>
            </AnimateIn>
          </div>

          {/* Right — image */}
          <AnimateIn variant="scaleUp" delay={150}>
            <div className="relative rounded-2xl overflow-hidden" style={{ height: "420px" }}>
              <Image
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=1000&q=80"
                alt="ADEM Financial Consulting professional"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
                priority
              />
              <div
                className="absolute inset-0 rounded-2xl"
                style={{ background: "linear-gradient(180deg, transparent 50%, rgba(12,45,62,0.5) 100%)" }}
              />
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* ── OUR STORY ────────────────────────────────────────── */}
      <section className="px-4 py-28 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-20 items-center">
          <AnimateIn variant="fadeLeft" className="relative rounded-2xl overflow-hidden order-2 md:order-1" style={{ height: "440px" }}>
            <Image
              src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1000&q=80"
              alt="Modern professional office environment"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </AnimateIn>
          <AnimateIn variant="fadeRight" className="order-1 md:order-2">
            <p
              className="text-xs font-semibold uppercase tracking-[0.2em] mb-4"
              style={{ color: "#17A8A0" }}
            >
              Our Story
            </p>
            <h2
              className="font-bold text-gray-900 mb-6 leading-tight"
              style={{ fontSize: "clamp(1.9rem, 3.5vw, 2.8rem)" }}
            >
              Experienced professionals. Real Nigerian regulatory context.
            </h2>
            <p className="text-gray-500 leading-relaxed mb-5">
              ADEM Financial Consulting was established to bridge the gap between
              Nigerian regulatory requirements and the businesses that need to
              navigate them. We understand the complexity of operating in Nigeria —
              from FIRS tax obligations to CAC compliance, NSITF levies, and BPP
              procurement registration.
            </p>
            <p className="text-gray-500 leading-relaxed">
              Our team works hands-on with regulators every week. We know what the
              forms ask, what auditors look for, and how to get your business to a
              place where compliance becomes a competitive advantage rather than a
              headache.
            </p>
          </AnimateIn>
        </div>
      </section>

      {/* ── VALUES ───────────────────────────────────────────── */}
      <section className="px-4 py-28" style={{ backgroundColor: "#F5F9F8" }}>
        <div className="max-w-7xl mx-auto">
          <AnimateIn variant="fadeUp">
            <div className="text-center mb-16">
              <p
                className="text-xs font-semibold uppercase tracking-[0.2em] mb-3"
                style={{ color: "#17A8A0" }}
              >
                Our Values
              </p>
              <h2
                className="font-bold text-gray-900"
                style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}
              >
                Five things that shape how we work
              </h2>
            </div>
          </AnimateIn>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((v, i) => (
              <AnimateIn key={v.title} variant="scaleUp" delay={i * 80}>
                <div
                  className="bg-white rounded-2xl p-7 border transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5 h-full"
                  style={{ borderColor: "#E5E7EB" }}
                >
                  <div
                    className="text-4xl font-bold mb-4 leading-none"
                    style={{ color: "#F3F4F6" }}
                  >
                    {v.num}
                  </div>
                  <h3 className="text-gray-900 font-bold text-lg mb-2">{v.title}</h3>
                  <p className="text-gray-500 leading-relaxed">{v.desc}</p>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── STATS ────────────────────────────────────────────── */}
      <section className="px-4 py-24" style={{ backgroundColor: "#0C2D3E" }}>
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: "40+", label: "SMEs served" },
              { value: "5", label: "Statutory certificates handled" },
              { value: "7", label: "Service lines" },
              { value: "100%", label: "Compliance-focused" },
            ].map((s, i) => (
              <AnimateIn key={s.label} variant="scaleUp" delay={i * 90}>
                <div className="text-center border-t-2 pt-7" style={{ borderColor: "#17A8A0" }}>
                  <p
                    className="font-bold mb-2"
                    style={{ color: "#17A8A0", fontSize: "clamp(2.5rem, 5vw, 4rem)" }}
                  >
                    {s.value}
                  </p>
                  <p className="text-gray-400 text-sm">{s.label}</p>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ─────────────────────────────────────── */}
      <section id="testimonials" className="px-4 py-24" style={{ backgroundColor: "#091F2C" }}>
        <div className="max-w-7xl mx-auto">
          <AnimateIn variant="fadeUp">
            <p
              className="text-xs font-semibold uppercase tracking-[0.2em] mb-3"
              style={{ color: "#17A8A0" }}
            >
              Client Words
            </p>
            <h2
              className="font-bold text-white mb-12"
              style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)" }}
            >
              What clients say about working with us
            </h2>
          </AnimateIn>
          <div className="grid md:grid-cols-2 gap-6">
            {testimonials.map((t, i) => (
              <AnimateIn key={i} variant="scaleUp" delay={i * 100}>
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
