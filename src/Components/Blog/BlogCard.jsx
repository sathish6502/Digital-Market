import containerImg from "../../Assets/Blog/container.jpg";

const styles = {
  section: {
    width: "100%",
    padding: "40px 0",
    background: "#02081A",
    display: "flex",
    justifyContent: "center",
    fontFamily: "Inter, sans-serif",
  },

  wrapper: {
    width: "100%",
    maxWidth: "1100px",
    padding: "0 20px",
  },

  card: {
    display: "flex",
    borderRadius: "18px",
    overflow: "hidden",
    background:
      "linear-gradient(135deg, rgba(255,255,255,0.035), rgba(255,255,255,0.015))",

    // ✅ FIX (removed top border line)
    border: "1px solid rgba(255,255,255,0.04)",
    borderTop: "none",

    boxShadow: "0 20px 60px rgba(0,0,0,0.6)",
  },

  leftImage: {
    width: "48%",
    minHeight: "320px",
    backgroundSize: "cover",
    backgroundPosition: "center",
  },

  right: {
    width: "52%",
    padding: "34px 38px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    background:
      "linear-gradient(180deg, rgba(8,12,24,0.7), rgba(2,6,23,1))",
  },

  badge: {
    display: "inline-flex",
    alignItems: "center",
    gap: "6px",
    padding: "5px 10px",
    borderRadius: "999px",
    background: "rgba(34,197,94,0.12)",
    border: "1px solid rgba(34,197,94,0.25)",
    width: "fit-content",
    marginBottom: "14px",
  },

  title: {
    fontSize: "32px",
    fontWeight: 500,
    lineHeight: "1.2",
    color: "#ffffff",
    marginBottom: "12px",
  },

  desc: {
    fontSize: "14px",
    color: "#9ca3af",
    lineHeight: "1.6",
    marginBottom: "18px",
  },

  meta: {
    display: "flex",
    alignItems: "center",
    gap: "14px",
    marginBottom: "18px",
    flexWrap: "wrap",
  },

  button: {
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
  },
};

export default function FeaturedBlog() {
  return (
    <section style={styles.section}>
      <div style={styles.wrapper}>
        <div style={styles.card}>
          
          {/* LEFT IMAGE */}
          <div
            style={{
              ...styles.leftImage,
              backgroundImage: `url(${containerImg})`,
            }}
          />

          {/* RIGHT CONTENT */}
          <div style={styles.right}>
            
            {/* BADGE */}
            <div style={styles.badge}>
              <span style={{ fontSize: "11px" }}>✨</span>
              <span style={{ fontSize: "12px", color: "#4ade80" }}>
                Featured Post
              </span>
            </div>

            {/* TITLE */}
            <h2 style={styles.title}>
              AI Integration in <br />
              Modern Web <br />
              Design: The Future <br />
              is Now
            </h2>

            {/* DESCRIPTION */}
            <p style={styles.desc}>
              Exploring how AI-powered automation, chatbots, and creative
              services are transforming digital experiences and <br />
              revolutionizing customer engagement.
            </p>

            {/* META */}
            <div style={styles.meta}>
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
            <button style={styles.button}>
              Read Article →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}