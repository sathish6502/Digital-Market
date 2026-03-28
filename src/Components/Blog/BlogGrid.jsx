import img1 from "../../Assets/Blog/Blog1.jpg";
import img2 from "../../Assets/Blog/Blog2.jpg";
import img3 from "../../Assets/Blog/Blog3.jpg";
import img4 from "../../Assets/Blog/Blog4.jpg";
import img5 from "../../Assets/Blog/Blog5.jpg";
import img6 from "../../Assets/Blog/Blog6.jpg";

export default function BlogGrid() {
  const blogData = [
    {
      img: img1,
      tag: "AI & Automation",
      title: (
        <>
          Building 24/7 Customer Support with AI <br />
          Chatbots
        </>
      ),
      desc: (
        <>
          How GPT-powered chatbots are transforming customer <br />
          service across WhatsApp, Facebook, and web platforms.
        </>
      ),
    },
    {
      img: img2,
      tag: "UX Design",
      title: (
        <>
          Research-Led UX: Heatmaps & <br />
          Journey Mapping
        </>
      ),
      desc:
        "Data-driven design strategies that boost engagement and conversion rates through user insights.",
    },
    {
      img: img3,
      tag: "AI Creative",
      title: (
        <>
          AI-Enhanced Product Photography for <br />
          E-commerce
        </>
      ),
      desc: (
        <>
          Creating consistent, stylized product visuals at scale using <br />
          AI-powered creative tools.
        </>
      ),
    },
    {
      img: img4,
      tag: "Web Development",
      title: (
        <>
          Web Performance Optimization: Core <br />
          Web Vitals
        </>
      ),
      desc: (
        <>
          Practical techniques for improving load times and improved <br />
          search ranking.
        </>
      ),
    },
    {
      img: img5,
      tag: "Mobile Design",
      title: "Mobile App Design Systems in Figma",
      desc: (
        <>
          Building scalable iOS and Android design systems with <br />
          interactive prototypes.
        </>
      ),
    },
    {
      img: img6,
      tag: "Web Development",
      title: "Scalable Web Architecture: CMS Integration",
      desc:
        "Building flexible, growth-ready websites with modern content management systems.",
    },
  ];

  // 🔥 TAG COLOR MAP
  const tagStyles = {
    "AI & Automation": {
      color: "#a78bfa",
      background: "rgba(167,139,250,0.12)",
    },
    "UX Design": {
      color: "#38bdf8",
      background: "rgba(56,189,248,0.12)",
    },
    "AI Creative": {
      color: "#f87171",
      background: "rgba(248,113,113,0.12)",
    },
    "Web Development": {
      color: "#22c55e",
      background: "rgba(34,197,94,0.12)",
    },
    "Mobile Design": {
      color: "#60a5fa",
      background: "rgba(96,165,250,0.12)",
    },
  };

  return (
    <section
      style={{
        width: "100%",
        background: "#02081A",
        padding: "60px 0 80px",
        display: "flex",
        justifyContent: "center",
        fontFamily: "Inter, sans-serif",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "1050px",
          display: "flex",
          gap: "24px",
          padding: "0 20px",
        }}
      >
        {/* SIDEBAR */}
        <div
          style={{
            width: "220px",
            background: "rgba(255,255,255,0.03)",
            border: "1px solid rgba(255,255,255,0.06)",
            borderRadius: "12px",
            padding: "18px",
            height: "fit-content",
          }}
        >
          <h4 style={{ color: "#d1d5db", fontSize: "14px", marginBottom: "14px" }}>
            Categories
          </h4>

          {[
            ["All Posts", "28"],
            ["AI & Automation", "10"],
            ["UX Design", "8"],
            ["Web Development", "6"],
            ["Mobile Design", "7"],
          ].map((item, i) => (
            <div
              key={i}
              style={{
                display: "flex",
                justifyContent: "space-between",
                color: "#9ca3af",
                fontSize: "13px",
                padding: "8px 0",
                cursor: "pointer",
              }}
            >
              <span>{item[0]}</span>
              <span style={{ opacity: 0.6 }}>({item[1]})</span>
            </div>
          ))}
        </div>

        {/* GRID */}
        <div style={{ flex: 1 }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(2, minmax(0, 480px))",
              justifyContent: "center",
              gap: "20px",
            }}
          >
            {blogData.map((card, i) => {
              const style = tagStyles[card.tag];

              return (
                <div
                  key={i}
                  style={{
                    borderRadius: "14px",
                    overflow: "hidden",
                    background:
                      "linear-gradient(180deg, rgba(255,255,255,0.03), rgba(255,255,255,0.01))",
                    border: "1px solid rgba(255,255,255,0.06)",
                    boxShadow: "0 20px 50px rgba(0,0,0,0.6)",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  {/* IMAGE */}
                  <div
                    style={{
                      height: "200px",
                      backgroundImage: `url(${card.img})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  />

                  {/* CONTENT */}
                  <div
                    style={{
                      padding: "18px 18px 20px",
                      flex: 1,
                      display: "flex",
                      flexDirection: "column",
                      gap: "8px",
                    }}
                  >
                    {/* TAG */}
                    <span
                      style={{
                        fontSize: "11px",
                        padding: "4px 8px",
                        borderRadius: "999px",
                        width: "fit-content",
                        color: style.color,
                        background: style.background,
                      }}
                    >
                      {card.tag}
                    </span>

                    {/* TITLE */}
                    <h3
                      style={{
                        fontSize: "15px",
                        color: "#e5e7eb",
                        lineHeight: "1.4",
                      }}
                    >
                      {card.title}
                    </h3>

                    {/* DESCRIPTION */}
                    <p
                      style={{
                        fontSize: "12px",
                        color: "#9ca3af",
                        lineHeight: "1.5",
                      }}
                    >
                      {card.desc}
                    </p>

                    {/* BOTTOM */}
                    <div style={{ marginTop: "auto" }}>
                      <div
                        style={{
                          fontSize: "11px",
                          color: "#9ca3af",
                          marginBottom: "10px",
                        }}
                      >
                        September 20, 2025 • 5 min read
                      </div>

                      <span
                        style={{
                          fontSize: "12px",
                          color: "#3b82f6",
                          cursor: "pointer",
                        }}
                      >
                        Read More →
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* PAGINATION */}
          <div
            style={{
              marginTop: "28px",
              display: "flex",
              justifyContent: "center",
              gap: "8px",
            }}
          >
            {["Prev", "1", "2", "3", "Next"].map((p, i) => (
              <button
                key={i}
                style={{
                  padding: "6px 10px",
                  borderRadius: "6px",
                  border: "1px solid rgba(255,255,255,0.1)",
                  background: i === 1 ? "#2563eb" : "transparent",
                  color: i === 1 ? "#fff" : "#9ca3af",
                  fontSize: "12px",
                  cursor: "pointer",
                }}
              >
                {p}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}