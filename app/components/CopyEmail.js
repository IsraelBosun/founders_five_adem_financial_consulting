"use client";
import { useState } from "react";

export default function CopyEmail({ email }) {
  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(email);
    } catch {
      const el = document.createElement("textarea");
      el.value = email;
      document.body.appendChild(el);
      el.select();
      document.execCommand("copy");
      document.body.removeChild(el);
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  }

  return (
    <div className="relative min-w-0">
      <button
        onClick={handleCopy}
        className="font-semibold text-sm text-left cursor-pointer hover:underline block w-full truncate"
        style={{ color: "#17A8A0" }}
      >
        {email}
      </button>
      <span
        className="absolute -top-7 left-0 text-[11px] font-semibold px-2.5 py-1 rounded-lg whitespace-nowrap pointer-events-none"
        style={{
          backgroundColor: "#17A8A0",
          color: "#fff",
          opacity: copied ? 1 : 0,
          transform: copied ? "translateY(0)" : "translateY(5px)",
          transition: "opacity 220ms ease, transform 220ms ease",
        }}
      >
        Copied!
      </span>
    </div>
  );
}
