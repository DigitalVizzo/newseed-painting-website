"use client";

import { Star, Shield, Award, MapPin } from "lucide-react";
import { reviews } from "@/lib/data";

export default function Reviews() {
  return (
    <section
      id="reviews"
      style={{
        background: "#F7F5F0",
        padding: "7rem 0",
        position: "relative",
        zIndex: 1,
      }}
    >
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 1.5rem" }}>
        {reviews.inviteMode ? (
          <div
            className=""
            style={{ maxWidth: 640, margin: "0 auto", textAlign: "center" }}
          >
            {/* Stars */}
            <div
              style={{
                marginBottom: 24,
                display: "flex",
                justifyContent: "center",
                gap: 4,
              }}
            >
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={24} color="#E8A824" fill="#E8A824" />
              ))}
            </div>

            <h2
              className="font-serif"
              style={{
                color: "#1A1A1A",
                fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)",
                fontWeight: 400,
                marginBottom: 16,
                lineHeight: 1.2,
              }}
            >
              {reviews.inviteTitle}
            </h2>

            <p
              style={{
                color: "#666",
                fontSize: "1rem",
                lineHeight: 1.7,
                marginBottom: 40,
              }}
            >
              {reviews.inviteText}
            </p>

            {/* Trust badges */}
            <div
              className="trust-badges-grid"
              style={{ display: "grid", gap: 16, marginBottom: 40 }}
            >
              {[
                {
                  icon: Shield,
                  title: "NSW Licensed",
                  sub: "Fully compliant contractor",
                },
                {
                  icon: Award,
                  title: "Insured",
                  sub: "Public liability coverage",
                },
                {
                  icon: MapPin,
                  title: "Local Team",
                  sub: "Based in Balgowlah",
                },
              ].map((item, i) => {
                const Icon = item.icon;
                return (
                  <div
                    key={i}
                    style={{
                      background: "white",
                      borderRadius: 16,
                      padding: "1.25rem",
                      display: "flex",
                      alignItems: "center",
                      gap: 14,
                      boxShadow: "0 1px 3px rgba(0,0,0,0.04)",
                    }}
                  >
                    <Icon size={22} color="#E8A824" strokeWidth={1.5} />
                    <div style={{ textAlign: "left" }}>
                      <p
                        style={{
                          color: "#1A1A1A",
                          fontWeight: 600,
                          fontSize: "0.875rem",
                        }}
                      >
                        {item.title}
                      </p>
                      <p style={{ color: "#999", fontSize: "0.75rem" }}>
                        {item.sub}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* CTA */}
            <a
              href="https://maps.google.com/?q=New+Seed+Painting+Group"
              target="_blank"
              rel="noopener noreferrer"
              className="review-cta-btn"
              style={{
                display: "inline-block",
                background: "#1A1A1A",
                color: "white",
                fontWeight: 600,
                padding: "0.875rem 2rem",
                borderRadius: 9999,
                textDecoration: "none",
                fontSize: "0.9rem",
                transition: "all 0.3s ease",
              }}
            >
              {reviews.inviteCta}
            </a>
          </div>
        ) : (
          <div>
            <div
              className=""
              style={{ textAlign: "center", marginBottom: "3.5rem" }}
            >
              <p
                style={{
                  color: "#E8A824",
                  fontSize: "0.75rem",
                  fontWeight: 600,
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  marginBottom: 16,
                }}
              >
                REVIEWS
              </p>
              <h2
                className="font-serif"
                style={{
                  color: "#1A1A1A",
                  fontSize: "clamp(2rem, 4vw, 3rem)",
                  fontWeight: 400,
                }}
              >
                What Our Clients Say
              </h2>
            </div>
            <div
              className="fade-in reviews-grid"
              style={{ display: "grid", gap: 20 }}
            >
              {reviews.list.map((review, i) => (
                <div
                  key={i}
                  style={{
                    background: "white",
                    borderRadius: 16,
                    padding: "2rem",
                    boxShadow: "0 1px 3px rgba(0,0,0,0.04)",
                  }}
                >
                  <div style={{ display: "flex", gap: 2, marginBottom: 12 }}>
                    {[...Array(review.rating)].map((_, j) => (
                      <Star key={j} size={14} color="#E8A824" fill="#E8A824" />
                    ))}
                  </div>
                  <p
                    style={{
                      color: "#666",
                      fontSize: "0.9rem",
                      lineHeight: 1.7,
                      marginBottom: 16,
                      fontStyle: "italic",
                    }}
                  >
                    &ldquo;{review.text}&rdquo;
                  </p>
                  <p
                    style={{
                      color: "#1A1A1A",
                      fontWeight: 600,
                      fontSize: "0.875rem",
                    }}
                  >
                    {review.name}
                  </p>
                  <p style={{ color: "#999", fontSize: "0.8rem" }}>
                    {review.location}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      <style>{`
        .trust-badges-grid { grid-template-columns: 1fr; }
        @media (min-width: 640px) { .trust-badges-grid { grid-template-columns: repeat(3, 1fr); } }
        .reviews-grid { grid-template-columns: 1fr; }
        @media (min-width: 768px) { .reviews-grid { grid-template-columns: repeat(2, 1fr); } }
        @media (min-width: 1024px) { .reviews-grid { grid-template-columns: repeat(3, 1fr); } }
        .review-cta-btn:hover { background: #E8A824 !important; }
      `}</style>
    </section>
  );
}
