"use client";
import { useState } from "react";
import Image from "next/image";
import AnimateIn from "../components/AnimateIn";
import CTABanner from "../components/CTABanner";

const MEMBERS = [
  {
    id: "emmanuel",
    number: "01",
    name: "Adeleye Emmanuel Adeoluwa",
    suffix: "ACA",
    role: "Founder & Lead Financial Consultant",
    image: "/emmanuel.jpeg",
    certs: [
      { label: "B.Sc. Accounting", detail: "2nd Class Upper · Univ. of Abuja", status: "active" },
      { label: "ACA", detail: "ICAN", status: "active" },
      { label: "ACCA", detail: "In progress", status: "ongoing" },
    ],
    expertise: [
      "Financial Reporting",
      "Budgeting",
      "Taxation",
      "Grant Management",
      "Donor Finance",
      "Internal Controls",
      "Compliance",
    ],
    shortBio:
      "Adeleye Emmanuel Adeoluwa is a finance professional and Chartered Accountant with a strong academic and professional background in accounting and financial management. He holds a Bachelor of Science (B.Sc.) in Accounting with Second Class Upper Honours from the University of Abuja and is an Associate Chartered Accountant (ACA) of the Institute of Chartered Accountants of Nigeria (ICAN). He is also currently pursuing the Association of Chartered Certified Accountants (ACCA) qualification as part of his continuous professional development.",
    fullBio: [
      "With experience spanning the non-profit and private sectors, Emmanuel has developed expertise in financial reporting, budgeting, taxation, grant management, donor-funded project finance, internal controls, and compliance. He currently serves with Malaria Consortium, where he supports the financial management of donor-funded health programs, ensuring accurate reporting, effective budget monitoring, and adherence to donor and organizational requirements.",
      "As the Founder and Lead Consultant of ADEM Financial Consulting, Emmanuel is dedicated to helping businesses, NGOs, startups, and entrepreneurs build strong financial systems, maintain accurate financial records, ensure regulatory compliance, and make informed financial decisions that support sustainable growth and long-term success.",
      "His approach combines technical expertise, integrity, and practical business insight to deliver financial solutions that enhance accountability, improve performance, and create value for clients.",
    ],
    flip: false,
  },
  {
    id: "isaac",
    number: "02",
    name: "Isaac Adebayo Oluwaleke",
    suffix: "B.Sc., AAT, ACA",
    role: "Co-Founder & Financial Consultant",
    image: "/isaac.jpeg",
    certs: [
      { label: "B.Sc. Accounting", detail: "2nd Class Upper · Univ. of Abuja", status: "active" },
      { label: "AAT", detail: "Certified", status: "active" },
      { label: "ACA", detail: "ICAN", status: "active" },
      { label: "ACCA", detail: "In progress", status: "ongoing" },
      { label: "M.Sc. Business Analytics", detail: "In progress · Robert Gordon Univ.", status: "ongoing" },
    ],
    expertise: [
      "Auditing",
      "Bookkeeping",
      "Taxation",
      "Donor Finance",
      "Business Advisory",
      "Sage 50 / QuickBooks / Xero",
      "Data Analytics",
    ],
    shortBio:
      "Isaac Adebayo Oluwaleke is a finance and accounting professional with a strong background in financial management, auditing, bookkeeping, taxation, donor-funded project finance, and business advisory services. He holds a Bachelor of Science (B.Sc.) in Accounting with Second Class Upper Honours from the University of Abuja and is an Associate Chartered Accountant (ACA) of the Institute of Chartered Accountants of Nigeria (ICAN). He also holds the Accounting Technicians Scheme (AAT) certification and is currently pursuing the Association of Chartered Certified Accountants (ACCA) qualification as part of his commitment to continuous professional development. In addition, he is currently studying for a Master of Science (M.Sc.) in Business Analytics at Robert Gordon University, where he is further developing expertise in data-driven decision-making and business intelligence.",
    fullBio: [
      "With professional experience spanning the accounting, audit, consulting, non-profit, and community sectors across both Nigeria and the United Kingdom, Isaac has built a reputation for delivering accurate financial reporting, strengthening internal controls, ensuring regulatory compliance, and supporting strategic financial decision-making. His career includes roles in audit practice, donor-funded programme finance, bookkeeping, and financial management, where he has worked with SMEs, non-profit organisations, and community groups.",
      "Isaac has supported the financial administration of donor-funded programmes, managed budgeting and financial reporting processes, coordinated payroll and tax compliance activities, conducted statutory audits, and provided bookkeeping services using leading accounting platforms such as Sage 50, QuickBooks, and Xero. His experience also includes preparing financial statements, performing bank reconciliations, managing VAT submissions, supporting audit engagements, and translating complex financial information into practical insights that support organisational growth and accountability.",
      "As Co-Founder and Financial Consultant at ADEM Financial Consulting, Isaac is passionate about helping businesses, startups, entrepreneurs, and non-profit organisations establish sound financial systems, improve financial visibility, maintain compliance, and make informed decisions that drive sustainable success. Through the firm, he works closely with clients to deliver tailored financial solutions, ranging from bookkeeping and financial reporting to business advisory, compliance support, and strategic financial planning.",
      "Isaac combines technical expertise, analytical thinking, and a commitment to excellence to help organisations strengthen financial governance, improve operational efficiency, and achieve their long-term objectives. His approach is built on professionalism, integrity, innovation, and a genuine desire to create lasting value for every client and stakeholder he serves.",
    ],
    flip: true,
  },
];

function MemberSection({ member }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <section
      className="relative overflow-hidden"
      style={{ backgroundColor: member.flip ? "#F5F9F8" : "#ffffff" }}
    >
      {/* Large watermark number */}
      <div
        className="pointer-events-none select-none absolute"
        style={{
          fontSize: "clamp(10rem, 28vw, 22rem)",
          fontWeight: 900,
          lineHeight: 1,
          color: "rgba(12,45,62,0.03)",
          top: "-0.05em",
          right: member.flip ? "auto" : "-0.04em",
          left: member.flip ? "-0.04em" : "auto",
        }}
      >
        {member.number}
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid lg:grid-cols-2 gap-12 xl:gap-20 items-start">

          {/* ── PHOTO ── */}
          <AnimateIn
            variant={member.flip ? "fadeRight" : "fadeLeft"}
            className={member.flip ? "lg:order-2" : ""}
          >
            <div className="relative">
              {/* Teal accent bar */}
              <div
                className="absolute top-10 bottom-10 w-1 rounded-full z-10"
                style={{
                  backgroundColor: "#17A8A0",
                  left: member.flip ? "auto" : "-12px",
                  right: member.flip ? "-12px" : "auto",
                }}
              />

              <div
                className="relative rounded-2xl overflow-hidden"
                style={{
                  height: "clamp(420px, 60vh, 620px)",
                  boxShadow: "0 32px 64px rgba(12,45,62,0.18), 0 8px 16px rgba(12,45,62,0.08)",
                }}
              >
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover object-top"
                  priority={member.number === "01"}
                />
                {/* Gradient overlay */}
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(to top, rgba(9,31,44,0.65) 0%, rgba(9,31,44,0.2) 35%, transparent 65%)",
                  }}
                />
                {/* Name plate */}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <span
                    className="inline-block px-3 py-1 rounded-full text-[11px] font-semibold text-white mb-3"
                    style={{ backgroundColor: "rgba(23,168,160,0.85)", backdropFilter: "blur(8px)" }}
                  >
                    {member.number === "01" ? "Founder" : "Co-Founder"}
                  </span>
                  <p className="text-white font-bold text-xl leading-snug">{member.name}</p>
                  <p className="text-sm mt-1 font-medium" style={{ color: "#4DBDB5" }}>
                    {member.suffix}
                  </p>
                </div>
              </div>
            </div>
          </AnimateIn>

          {/* ── BIO ── */}
          <AnimateIn
            variant={member.flip ? "fadeLeft" : "fadeRight"}
            delay={130}
            className={`flex flex-col ${member.flip ? "lg:order-1" : ""}`}
          >
            {/* Label row */}
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-8 rounded-full" style={{ backgroundColor: "#17A8A0" }} />
              <p
                className="text-[11px] font-semibold uppercase tracking-[0.2em]"
                style={{ color: "#17A8A0" }}
              >
                {member.role}
              </p>
            </div>

            {/* Name + suffix */}
            <h2
              className="font-bold text-gray-900 leading-tight mb-1"
              style={{ fontSize: "clamp(1.7rem, 3vw, 2.4rem)" }}
            >
              {member.name}
            </h2>
            <p className="text-sm font-semibold mb-8" style={{ color: "#17A8A0" }}>
              {member.suffix}
            </p>

            {/* Qualifications */}
            <div className="mb-8">
              <p
                className="text-[10px] font-bold uppercase tracking-[0.18em] mb-3"
                style={{ color: "#9CA3AF" }}
              >
                Qualifications
              </p>
              <div className="flex flex-wrap gap-2">
                {member.certs.map((c) => (
                  <div
                    key={c.label}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium"
                    style={{
                      backgroundColor:
                        c.status === "active" ? "rgba(23,168,160,0.08)" : "transparent",
                      border: `1px solid ${c.status === "active" ? "#17A8A0" : "#E5E7EB"}`,
                      color: c.status === "active" ? "#0C7A74" : "#9CA3AF",
                    }}
                  >
                    {c.status === "active" ? (
                      <svg className="w-3 h-3 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    ) : (
                      <svg className="w-3 h-3 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <circle cx="12" cy="12" r="9" strokeWidth={2} />
                        <path strokeLinecap="round" strokeWidth={2} d="M12 8v4l2 2" />
                      </svg>
                    )}
                    <span>{c.label}</span>
                    <span className="opacity-60 font-normal">· {c.detail}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Divider */}
            <div className="mb-6 h-px" style={{ backgroundColor: "#F0F0F0" }} />

            {/* Short bio – always visible */}
            <p className="text-gray-600 leading-relaxed">{member.shortBio}</p>

            {/* Expandable full bio */}
            <div
              style={{
                display: "grid",
                gridTemplateRows: expanded ? "1fr" : "0fr",
                transition: "grid-template-rows 580ms cubic-bezier(0.22,1,0.36,1)",
              }}
            >
              <div style={{ overflow: "hidden" }}>
                <div className="space-y-4 pt-4 pb-1">
                  {member.fullBio.map((p, i) => (
                    <p key={i} className="text-gray-500 leading-relaxed">
                      {p}
                    </p>
                  ))}
                </div>
              </div>
            </div>

            {/* Toggle button */}
            <button
              onClick={() => setExpanded((e) => !e)}
              className="flex items-center gap-2 mt-5 mb-8 text-sm font-semibold w-fit transition-opacity duration-200 hover:opacity-70"
              style={{ color: "#17A8A0" }}
            >
              <span>{expanded ? "Read less" : "Read full profile"}</span>
              <svg
                className="w-4 h-4 transition-transform duration-300"
                style={{ transform: expanded ? "rotate(180deg)" : "rotate(0deg)" }}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {/* Expertise tags */}
            <div>
              <p
                className="text-[10px] font-bold uppercase tracking-[0.18em] mb-3"
                style={{ color: "#9CA3AF" }}
              >
                Areas of Expertise
              </p>
              <div className="flex flex-wrap gap-2">
                {member.expertise.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 rounded-full text-xs font-medium border"
                    style={{ backgroundColor: "#F9FAFB", borderColor: "#E5E7EB", color: "#374151" }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </AnimateIn>

        </div>
      </div>
    </section>
  );
}

export default function TeamContent() {
  return (
    <>
      {/* ── HERO ── */}
      <section
        className="relative overflow-hidden px-4 pt-28 pb-20"
        style={{ backgroundColor: "#0C2D3E" }}
      >
        {/* Orbs */}
        <div className="pointer-events-none absolute inset-0">
          <div
            className="absolute -top-40 right-0 w-[640px] h-[640px] rounded-full"
            style={{
              background: "radial-gradient(circle, rgba(23,168,160,0.11) 0%, transparent 65%)",
            }}
          />
          <div
            className="absolute bottom-0 left-0 w-80 h-80 rounded-full"
            style={{
              background: "radial-gradient(circle, rgba(23,168,160,0.06) 0%, transparent 65%)",
            }}
          />
        </div>

        <div className="relative max-w-7xl mx-auto">
          <AnimateIn variant="fadeDown">
            <p
              className="text-[11px] font-semibold uppercase tracking-[0.22em] mb-5"
              style={{ color: "#4DBDB5" }}
            >
              Our Team
            </p>
          </AnimateIn>

          <div className="grid lg:grid-cols-[1fr_auto] gap-10 items-end">
            <div>
              <AnimateIn variant="fadeUp" delay={80}>
                <h1
                  className="font-bold text-white leading-[1.05] mb-6"
                  style={{ fontSize: "clamp(3rem, 7vw, 6rem)" }}
                >
                  The people<br />
                  <span style={{ color: "#17A8A0" }}>behind ADEM.</span>
                </h1>
              </AnimateIn>
              <AnimateIn variant="fadeUp" delay={170}>
                <p className="text-gray-400 text-lg leading-relaxed max-w-xl">
                  Two chartered accountants. One shared vision. Deep expertise in Nigerian
                  compliance, donor-funded finance, and business advisory — built on integrity,
                  precision, and results.
                </p>
              </AnimateIn>
            </div>

            {/* Stat pills — desktop only */}
            <AnimateIn
              variant="fadeLeft"
              delay={250}
              className="hidden lg:flex flex-col gap-3 pb-1"
            >
              {[
                { value: "2", label: "Chartered\nAccountants" },
                { value: "ACA", label: "ICAN\nCertified" },
                { value: "NG + UK", label: "Cross-border\nExperience" },
              ].map((s) => (
                <div
                  key={s.label}
                  className="rounded-xl px-5 py-4 border text-center"
                  style={{
                    borderColor: "#1A3A4A",
                    backgroundColor: "rgba(23,168,160,0.06)",
                    minWidth: "130px",
                  }}
                >
                  <p
                    className="font-bold text-xl leading-tight whitespace-pre-line"
                    style={{ color: "#17A8A0" }}
                  >
                    {s.value}
                  </p>
                  <p
                    className="text-xs mt-1 whitespace-pre-line leading-snug"
                    style={{ color: "#6B7280" }}
                  >
                    {s.label}
                  </p>
                </div>
              ))}
            </AnimateIn>
          </div>

        </div>
      </section>

      {/* ── TEAM MEMBERS ── */}
      {MEMBERS.map((m) => (
        <MemberSection key={m.id} member={m} />
      ))}

      <CTABanner />
    </>
  );
}
