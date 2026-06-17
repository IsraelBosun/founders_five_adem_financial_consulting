"use client";

import { useState } from "react";

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
const inputStyle = { borderColor: "#E5E7EB", "--tw-ring-color": "#17A8A0" };

const initialValues = {
  firstName: "",
  lastName: "",
  email: "",
  businessName: "",
  service: "",
  message: "",
  website: "",
};

export default function ContactForm() {
  const [values, setValues] = useState(initialValues);
  const [status, setStatus] = useState("idle");
  const [notice, setNotice] = useState("");
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const isSubmitting = status === "submitting";

  function updateField(event) {
    const { name, value } = event.target;
    setValues((current) => ({ ...current, [name]: value }));
  }

  async function handleSubmit(event) {
    event.preventDefault();
    setStatus("submitting");
    setNotice("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      const data = await response.json().catch(() => ({}));

      if (!response.ok) {
        throw new Error(data.message || "Unable to send message.");
      }

      setValues(initialValues);
      setStatus("success");
      setNotice("Message sent. We will reply within 1 business day.");
      setShowSuccessModal(true);
    } catch (error) {
      setStatus("error");
      setNotice(error.message || "Unable to send message. Please try WhatsApp instead.");
    }
  }

  return (
    <>
      <form className="space-y-5" onSubmit={handleSubmit}>
        <div className="hidden" aria-hidden="true">
          <label>
            Website
            <input
              type="text"
              name="website"
              value={values.website}
              onChange={updateField}
              tabIndex={-1}
              autoComplete="off"
            />
          </label>
        </div>

        <div className="grid sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-semibold text-gray-700 mb-1.5 uppercase tracking-wide">
              First name
            </label>
            <input
              type="text"
              name="firstName"
              value={values.firstName}
              onChange={updateField}
              placeholder="John"
              className={inputClass}
              style={inputStyle}
              required
            />
          </div>
          <div>
            <label className="block text-xs font-semibold text-gray-700 mb-1.5 uppercase tracking-wide">
              Last name
            </label>
            <input
              type="text"
              name="lastName"
              value={values.lastName}
              onChange={updateField}
              placeholder="Doe"
              className={inputClass}
              style={inputStyle}
              required
            />
          </div>
        </div>

        <div>
          <label className="block text-xs font-semibold text-gray-700 mb-1.5 uppercase tracking-wide">
            Email address
          </label>
          <input
            type="email"
            name="email"
            value={values.email}
            onChange={updateField}
            placeholder="you@company.com"
            className={inputClass}
            style={inputStyle}
            required
          />
        </div>

        <div>
          <label className="block text-xs font-semibold text-gray-700 mb-1.5 uppercase tracking-wide">
            Business name
          </label>
          <input
            type="text"
            name="businessName"
            value={values.businessName}
            onChange={updateField}
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
            name="service"
            value={values.service}
            onChange={updateField}
            className={inputClass}
            style={{ ...inputStyle, color: values.service ? "#111827" : "#6B7280" }}
            required
          >
            <option value="">Select a service</option>
            {services.map((service) => (
              <option key={service} value={service}>
                {service}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-xs font-semibold text-gray-700 mb-1.5 uppercase tracking-wide">
            Message
          </label>
          <textarea
            rows={5}
            name="message"
            value={values.message}
            onChange={updateField}
            placeholder="Tell us a bit about your business and what you're dealing with..."
            className={inputClass}
            style={{ ...inputStyle, resize: "none" }}
            required
          />
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full py-4 rounded-full text-white font-semibold text-sm transition-all duration-200 hover:opacity-90 hover:scale-[1.01] disabled:cursor-not-allowed disabled:opacity-65 disabled:hover:scale-100"
          style={{ background: "linear-gradient(135deg, #17A8A0 0%, #0d8f88 100%)" }}
        >
          {isSubmitting ? "Sending..." : "Send message →"}
        </button>

        {notice && status === "error" && (
          <p className="text-sm text-center font-medium" style={{ color: "#B42318" }} role="status">
            {notice}
          </p>
        )}

        <p className="text-gray-400 text-xs text-center">
          For urgent matters, WhatsApp is faster. We typically reply to emails within 1 business day.
        </p>
      </form>

      {showSuccessModal && (
        <div
          className="fixed inset-0 z-[300] flex items-center justify-center px-4 py-8"
          role="dialog"
          aria-modal="true"
          aria-labelledby="contact-success-title"
        >
          <button
            type="button"
            className="absolute inset-0 cursor-default"
            style={{ backgroundColor: "rgba(9,31,44,0.72)", backdropFilter: "blur(4px)" }}
            aria-label="Close confirmation"
            onClick={() => setShowSuccessModal(false)}
          />
          <div className="relative w-full max-w-md rounded-2xl bg-white shadow-2xl overflow-hidden">
            <div className="p-7 sm:p-8 text-center">
              <div
                className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full"
                style={{ backgroundColor: "rgba(23,168,160,0.12)", color: "#17A8A0" }}
              >
                <svg className="h-7 w-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.4} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <p
                className="mb-2 text-[11px] font-semibold uppercase tracking-[0.18em]"
                style={{ color: "#17A8A0" }}
              >
                Message Sent
              </p>
              <h3 id="contact-success-title" className="text-2xl font-bold text-gray-900 mb-3">
                Thank you for reaching out.
              </h3>
              <p className="text-gray-500 leading-relaxed mb-7">
                ADEM Financial Consulting has received your enquiry. We will review it and reply within 1 business day.
              </p>
              <div className="grid gap-3">
                <button
                  type="button"
                  className="w-full rounded-full px-5 py-3 text-sm font-semibold text-white transition-opacity duration-200 hover:opacity-90"
                  style={{ background: "linear-gradient(135deg, #17A8A0 0%, #0d8f88 100%)" }}
                  onClick={() => setShowSuccessModal(false)}
                >
                  Done
                </button>
                <a
                  href="https://wa.me/2348039879430"
                  className="w-full rounded-full border px-5 py-3 text-center text-sm font-semibold transition-colors duration-200 hover:bg-gray-50"
                  style={{ borderColor: "#E5E7EB", color: "#0C2D3E" }}
                >
                  Open WhatsApp instead
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
