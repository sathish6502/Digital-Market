import containerImg from "../../Assets/Blog/container.jpg";

export default function FeaturedBlog() {
  return (
    <section
      style={{
        width: "100%",
        padding: "40px 0",
        background: "#02081A", // ✅ same as hero
        display: "flex",
        justifyContent: "center",
        fontFamily: "Inter, sans-serif",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "1100px",
          padding: "0 20px",
        }}
      >
        {/* CARD */}
        <div
          style={{
            display: "flex",
            borderRadius: "18px",
            overflow: "hidden",
            background:
              "linear-gradient(135deg, rgba(255,255,255,0.035), rgba(255,255,255,0.015))", // 🔥 softened
            border: "1px solid rgba(255,255,255,0.04)", // 🔥 FIX (main line issue)
            boxShadow: "0 20px 60px rgba(0,0,0,0.6)",
          }}
        >
          {/* LEFT IMAGE */}
          <div
            style={{
              width: "48%",
              minHeight: "320px",
              backgroundImage: `url(${containerImg})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />

          {/* RIGHT CONTENT */}
          <div
            style={{
              width: "52%",
              padding: "34px 38px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              background:
                "linear-gradient(180deg, rgba(8,12,24,0.7), rgba(2,6,23,1))", // 🔥 matched to hero tone
            }}
          >
            {/* BADGE */}
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "6px",
                padding: "5px 10px",
                borderRadius: "999px",
                background: "rgba(34,197,94,0.12)",
                border: "1px solid rgba(34,197,94,0.25)",
                width: "fit-content",
                marginBottom: "14px",
              }}
            >
              <span style={{ fontSize: "11px" }}>✨</span>
              <span
                style={{
                  fontSize: "12px",
                  color: "#4ade80",
                  fontWeight: 500,
                }}
              >
                Featured Post
              </span>
            </div>

            {/* TITLE */}
            <h2
              style={{
                fontSize: "32px",
                fontWeight: 500,
                lineHeight: "1.2",
                color: "#ffffff",
                marginBottom: "12px",
              }}
            >
              AI Integration in <br />
              Modern Web <br />
              Design: The Future <br />
              is Now
            </h2>

            {/* DESCRIPTION */}
            <p
              style={{
                fontSize: "14px",
                color: "#9ca3af",
                lineHeight: "1.6",
                marginBottom: "18px",
              }}
            >
              Exploring how AI-powered automation, chatbots, and creative
              services are transforming digital experiences and <br />
              revolutionizing customer engagement.
            </p>

            {/* META */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "14px",
                marginBottom: "18px",
                flexWrap: "wrap",
              }}
            >
              <span style={{ fontSize: "12px", color: "#9ca3af" }}>
                📅 October 15, 2025
              </span>

              <span style={{ fontSize: "12px", color: "#9ca3af" }}>
                ⏱ 8 min read
              </span>

              <span
                style={{
                  fontSize: "11px",
                  padding: "4px 10px",
                  borderRadius: "999px",
                  background: "rgba(255,255,255,0.06)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  color: "#d1d5db",
                }}
              >
                AI & Automation
              </span>
            </div>

            {/* BUTTON */}
            <button
              style={{
                width: "fit-content",
                padding: "10px 16px",
                borderRadius: "8px",
                background: "linear-gradient(90deg,#2563eb,#1d4ed8)",
                border: "none",
                color: "#ffffff",
                fontSize: "13px",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                gap: "6px",
              }}
            >
              Read Article →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}