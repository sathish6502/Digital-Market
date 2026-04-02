import { TrendingUp } from "lucide-react";
import { useEffect, useState } from "react";

export default function NewsletterSection() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreen = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkScreen();
    window.addEventListener("resize", checkScreen);

    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  return (
    <section
      style={{
        width: "100%",
        background: "#02081A",
        display: "flex",
        justifyContent: "center",
        padding: "80px 20px",
        fontFamily: "Inter, sans-serif",
      }}
    >
      {/* CARD */}
      <div
        style={{
          width: "100%",
          maxWidth: "900px",
          borderRadius: "20px",
          padding: isMobile ? "40px 20px" : "60px 40px",
          textAlign: "center",
          background:
            "linear-gradient(135deg, rgba(30,58,138,0.55), rgba(16,185,129,0.45))",
          border: "1px solid rgba(255,255,255,0.08)",
          boxShadow: "0 30px 80px rgba(0,0,0,0.7)",
        }}
      >
        {/* ICON */}
        <div
          style={{
            width: isMobile ? "50px" : "56px",
            height: isMobile ? "50px" : "56px",
            margin: "0 auto 24px",
            borderRadius: "16px",
            background: "linear-gradient(135deg, #2563eb, #10b981)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: "0 0 30px rgba(37,99,235,0.6)",
          }}
        >
          <TrendingUp size={isMobile ? 20 : 22} color="#ffffff" />
        </div>

        {/* TITLE */}
        <h2
          style={{
            fontSize: isMobile ? "28px" : "40px",
            fontWeight: 500,
            color: "#e5e7eb",
            marginBottom: "14px",
          }}
        >
          Subscribe to Our Newsletter
        </h2>

        {/* SUBTEXT */}
        <p
          style={{
            fontSize: isMobile ? "14px" : "15px",
            color: "#cbd5f5",
            maxWidth: "620px",
            margin: "0 auto 32px",
            lineHeight: "1.7",
          }}
        >
          Get the latest insights on AI automation, UX design, and digital
          innovation delivered <br />to your inbox.
        </p>

        {/* INPUT + BUTTON */}
        <div
          style={{
            display: "flex",
            flexDirection: isMobile ? "column" : "row",
            justifyContent: "center",
            alignItems: "center",
            gap: "14px",
          }}
        >
          <input
            type="text"
            placeholder="Enter your email"
            style={{
              width: isMobile ? "100%" : "320px",
              padding: "14px 16px",
              borderRadius: "12px",
              border: "1px solid rgba(255,255,255,0.08)",
              background: "rgba(255,255,255,0.05)",
              color: "#e5e7eb",
              fontSize: "13px",
              outline: "none",
            }}
          />

          <button
            style={{
              width: isMobile ? "100%" : "auto",
              padding: "10px 26px",
              borderRadius: "12px",
              border: "none",
              background: "linear-gradient(90deg,#2563eb,#3b82f6)",
              color: "#ffffff",
              fontSize: "13px",
              cursor: "pointer",
              boxShadow: "0 0 25px rgba(37,99,235,0.6)",
            }}
          >
            Subscribe
          </button>
        </div>
      </div>
    </section>
  );
}