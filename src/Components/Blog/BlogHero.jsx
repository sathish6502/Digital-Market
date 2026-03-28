export default function BlogHero() {
  return (
    <section
      style={{
        position: "relative",
        width: "100%",
        height: "420px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
        fontFamily: "Inter, sans-serif",
      }}
    >
      {/* BASE BACKGROUND */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "#02081A",
        }}
      />

      {/* LEFT BLUE GLOW */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(circle at 18% 40%, rgba(2,27,58,0.75), transparent 65%)", // 🔥 softened
        }}
      />

      {/* RIGHT DARK FADE (MAIN FIX) */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(circle at 92% 50%, rgba(0,0,0,0.7), transparent 65%)", // 🔥 FIXED
        }}
      />

      {/* CONTENT */}
      <div
        style={{
          position: "relative",
          zIndex: 10,
          textAlign: "center",
          maxWidth: "760px",
        }}
      >
        {/* BADGE */}
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
            padding: "6px 14px",
            borderRadius: "999px",
            background: "rgba(255,255,255,0.05)",
            border: "1px solid rgba(255,255,255,0.08)", // 🔥 slightly reduced
            backdropFilter: "blur(8px)",
            marginBottom: "22px",
          }}
        >
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#34d399"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M3 17L9 11L13 15L21 7" />
          </svg>

          <span
            style={{
              fontSize: "13px",
              color: "#d1d5db",
              fontWeight: 500,
              letterSpacing: "0.2px",
            }}
          >
            Industry Insights & Updates
          </span>
        </div>

        {/* HEADING */}
        <h1
          style={{
            fontSize: "54px",
            fontWeight: 500,
            lineHeight: "1.1",
            letterSpacing: "-0.4px",
            color: "#ffffff",
            marginBottom: "14px",
          }}
        >
          Blog & Insights
        </h1>

        {/* SUBTEXT */}
        <p
          style={{
            fontSize: "15px",
            color: "#9ca3af",
            lineHeight: "1.7",
            maxWidth: "680px",
            margin: "0 auto",
          }}
        >
          Thoughts on design, AI automation, and digital innovation from the
          Graphikrafts team.
        </p>
      </div>
    </section>
  );
}