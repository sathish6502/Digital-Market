export default function BlogHero() {
  return (
    <section
      style={{
        width: "100%",
        height: "420px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "Inter, sans-serif",
        background: "#02081A",

        // 🔥 KEY: no touching edge
        paddingBottom: "60px",
      }}
    >
      <div style={{ textAlign: "center", maxWidth: "760px" }}>
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
            padding: "6px 14px",
            borderRadius: "999px",
            background: "rgba(255,255,255,0.05)",
            marginBottom: "22px",
          }}
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none"
            stroke="#34d399" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M3 17L9 11L13 15L21 7" />
          </svg>

          <span style={{ fontSize: "13px", color: "#d1d5db" }}>
            Industry Insights & Updates
          </span>
        </div>

        <h1
          style={{
            fontSize: "54px",
            color: "#fff",
            marginBottom: "14px",
          }}
        >
          Blog & Insights
        </h1>

        <p
          style={{
            fontSize: "15px",
            color: "#9ca3af",
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