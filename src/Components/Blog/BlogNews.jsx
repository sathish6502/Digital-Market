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
        padding: "50px 20px", // 🔥 reduced (80 → 50)
        fontFamily: "Inter, sans-serif",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "900px",
          borderRadius: "20px",
          padding: isMobile ? "30px 18px" : "40px 30px", // 🔥 reduced
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
            width: isMobile ? "46px" : "52px",
            height: isMobile ? "46px" : "52px",
            margin: "0 auto 16px", // 🔥 reduced
            borderRadius: "16px",
            background: "linear-gradient(135deg, #2563eb, #10b981)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: "0 0 30px rgba(37,99,235,0.6)",
          }}
        >
          <TrendingUp size={isMobile ? 18 : 20} color="#ffffff" />
        </div>

        {/* TITLE */}
        <h2
          style={{
            fontSize: isMobile ? "24px" : "34px", // 🔥 reduced
            fontWeight: 500,
            color: "#e5e7eb",
            marginBottom: "10px", // 🔥 reduced
          }}
        >
          Subscribe to Our Newsletter
        </h2>

        {/* SUBTEXT */}
        <p
          style={{
            fontSize: isMobile ? "13px" : "14px",
            color: "#cbd5f5",
            maxWidth: "620px",
            margin: "0 auto 24px", // 🔥 reduced
            lineHeight: "1.6",
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
            gap: "10px", // 🔥 reduced
          }}
        >
          <input
            type="text"
            placeholder="Enter your email"
            style={{
              width: isMobile ? "100%" : "300px",
              padding: "12px 14px", // 🔥 reduced
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
              padding: "9px 22px", // 🔥 reduced
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