"use client";

import { useState } from "react";
import { Send, CheckCircle } from "lucide-react";

export default function QuoteForm({ dark = false }: { dark?: boolean }) {
  const [submitted, setSubmitted] = useState(false);

  const inputStyle: React.CSSProperties = {
    background: dark ? "rgba(255,255,255,0.06)" : "#F7F5F0",
    border: dark ? "1px solid rgba(255,255,255,0.1)" : "1px solid #E8E4DC",
    borderRadius: 12,
    padding: "14px 18px",
    color: dark ? "white" : "#1A1A1A",
    fontSize: "0.9rem",
    fontFamily: "inherit",
    outline: "none",
    transition: "border-color 0.2s ease",
    width: "100%",
  };

  const focusBorder = "rgba(232,168,36,0.5)";
  const defaultBorder = dark ? "rgba(255,255,255,0.1)" : "#E8E4DC";

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    const name = data.get("name") || "";
    const phone = data.get("phone") || "";
    const email = data.get("email") || "";
    const service = data.get("service") || "";
    const message = data.get("message") || "";

    const subject = encodeURIComponent("Quote Request - New Seed Painting Website");
    const body = encodeURIComponent(
      `Name: ${name}\nPhone: ${phone}\nEmail: ${email}\nService: ${service}\n\nMessage:\n${message}`
    );

    window.open(`mailto:info@newseedgroup.com.au?subject=${subject}&body=${body}`, "_self");
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div style={{ textAlign: "center", padding: "2rem 1rem" }}>
        <CheckCircle size={40} color="#E8A824" strokeWidth={1.5} />
        <h3
          style={{
            color: dark ? "white" : "#1A1A1A",
            fontWeight: 600,
            fontSize: "1.15rem",
            marginTop: 14,
            marginBottom: 6,
          }}
        >
          Request Sent!
        </h3>
        <p
          style={{
            color: dark ? "rgba(255,255,255,0.5)" : "#999",
            fontSize: "0.9rem",
          }}
        >
          We&apos;ll get back to you within 2 hours.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      style={{ display: "flex", flexDirection: "column", gap: 14 }}
    >
      <input
        type="text"
        name="name"
        placeholder="Name"
        required
        style={inputStyle}
        onFocus={(e) => (e.currentTarget.style.borderColor = focusBorder)}
        onBlur={(e) => (e.currentTarget.style.borderColor = defaultBorder)}
      />

      <div className="form-row" style={{ display: "grid", gap: 14 }}>
        <input
          type="tel"
          name="phone"
          placeholder="Phone"
          required
          style={inputStyle}
          onFocus={(e) => (e.currentTarget.style.borderColor = focusBorder)}
          onBlur={(e) => (e.currentTarget.style.borderColor = defaultBorder)}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          style={inputStyle}
          onFocus={(e) => (e.currentTarget.style.borderColor = focusBorder)}
          onBlur={(e) => (e.currentTarget.style.borderColor = defaultBorder)}
        />
      </div>

      <select
        name="service"
        defaultValue=""
        style={{
          ...inputStyle,
          appearance: "none",
          cursor: "pointer",
          color: dark ? "rgba(255,255,255,0.5)" : "#999",
        }}
        onFocus={(e) => (e.currentTarget.style.borderColor = focusBorder)}
        onBlur={(e) => (e.currentTarget.style.borderColor = defaultBorder)}
        onChange={(e) =>
          (e.currentTarget.style.color = dark ? "white" : "#1A1A1A")
        }
      >
        <option value="" disabled>
          Service type
        </option>
        <option value="Interior Painting">Interior Painting</option>
        <option value="Exterior Painting">Exterior Painting</option>
        <option value="Commercial Painting">Commercial Painting</option>
        <option value="Strata Painting">Strata Painting</option>
        <option value="New Build & Renovation">
          New Build &amp; Renovation
        </option>
        <option value="Other">Other</option>
      </select>

      <textarea
        name="message"
        placeholder="Brief description (optional)"
        rows={3}
        style={{ ...inputStyle, resize: "vertical", minHeight: 70 }}
        onFocus={(e) => (e.currentTarget.style.borderColor = focusBorder)}
        onBlur={(e) => (e.currentTarget.style.borderColor = defaultBorder)}
      />

      <input
        type="hidden"
        name="_subject"
        value="New Quote Request - New Seed Painting Website"
      />

      <button
        type="submit"
        className="quote-submit-btn"
        style={{
          background: "#E8A824",
          color: "#1A1A1A",
          fontWeight: 700,
          padding: "0.875rem 2rem",
          borderRadius: 9999,
          border: "none",
          cursor: "pointer",
          fontSize: "0.95rem",
          fontFamily: "inherit",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: 8,
          transition: "all 0.3s ease",
        }}
      >
        <Send size={16} />
        Request Free Quote
      </button>

      <style>{`
        .form-row { grid-template-columns: 1fr; }
        @media (min-width: 480px) { .form-row { grid-template-columns: 1fr 1fr; } }
        .quote-submit-btn:hover:not(:disabled) { background: #CC8C1A !important; transform: translateY(-1px); }
        select option { background: ${dark ? "#1A1A1A" : "white"}; color: ${dark ? "white" : "#1A1A1A"}; }
      `}</style>
    </form>
  );
}
