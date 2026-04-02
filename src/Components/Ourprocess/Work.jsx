import React, { useEffect, useRef, useState } from "react";
import p1 from "./../../assets/Ourservice/p3.png"
import p2 from "./../../assets/Ourservice/p7.png"
import p3 from "./../../assets/Ourservice/p4.png"
import p4 from "./../../assets/Ourservice/p2.png"
import p5 from "./../../assets/Ourservice/p6.png"
import p6 from "./../../assets/Ourservice/p5.png"




// ─── ICONS ──────────────────────────────────────────────────────────────────
const SparklesIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/>
    <path d="M5 3v4M19 17v4M3 5h4M17 19h4"/>
  </svg>
);
const SearchIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/>
  </svg>
);
const PencilIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z"/><path d="m15 5 4 4"/>
  </svg>
);
const CodeIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>
  </svg>
);
const RocketIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"/>
    <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"/>
    <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"/><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"/>
  </svg>
);
const CheckIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12"/>
  </svg>
);
const ClockIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
  </svg>
);
const TargetIcon      = ({ className }) => (<svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>);
const TrendingUpIcon  = ({ className }) => (<svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/><polyline points="16 7 22 7 22 13"/></svg>);
const CheckCircleIcon = ({ className }) => (<svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>);
const ArrowRightIcon  = ({ className }) => (<svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>);

// ─── DATA ────────────────────────────────────────────────────────────────────
const PHASES = [
  {
    title: "Discovery",
    icon: <SearchIcon className="w-5 h-5" />,
    accentClass: "text-blue-400",
    iconBg: "rgba(59,130,246,0.12)",
    iconBorder: "rgba(59,130,246,0.25)",
    glow: "#3b82f6", dot: "#60a5fa",
    desc: "Understanding your business, goals, and challenges",
    duration: "1-2 weeks",
    activities: ["Stakeholder interviews","Market & competitor research","User research & personas","Project requirements gathering","Technical feasibility assessment"],
    deliverables: ["Project brief","User personas","Research findings","Technical specification"],
  },
  {
    title: "Design",
    icon: <PencilIcon className="w-5 h-5" />,
    accentClass: "text-emerald-400",
    iconBg: "rgba(16,185,129,0.12)",
    iconBorder: "rgba(16,185,129,0.25)",
    glow: "#10b981", dot: "#34d399",
    desc: "Creating beautiful, functional designs",
    duration: "2-4 weeks",
    activities: ["Information architecture","Wireframing & user flows","Visual design & branding","Interactive prototyping","Usability testing"],
    deliverables: ["Wireframes","High-fidelity designs","Interactive prototypes","Design system"],
  },
  {
    title: "Develop",
    icon: <CodeIcon className="w-5 h-5" />,
    accentClass: "text-purple-400",
    iconBg: "rgba(168,85,247,0.12)",
    iconBorder: "rgba(168,85,247,0.25)",
    glow: "#a855f7", dot: "#c084fc",
    desc: "Building your solution with best practices",
    duration: "4-8 weeks",
    activities: ["Frontend development","Backend development","API integration","Quality assurance testing","Performance optimization"],
    deliverables: ["Functional website/app","Source code","Documentation","Test reports"],
  },
  {
    title: "Deploy",
    icon: <RocketIcon className="w-5 h-5" />,
    accentClass: "text-rose-400",
    iconBg: "rgba(244,63,94,0.12)",
    iconBorder: "rgba(244,63,94,0.25)",
    glow: "#f43f5e", dot: "#fb7185",
    desc: "Launching and supporting your project",
    duration: "1-2 weeks",
    activities: ["Final testing & QA","Deployment to production","Training & handoff","Performance monitoring","Ongoing support"],
    deliverables: ["Live website/app","Training materials","Analytics setup","Support documentation"],
  },
];

const BENEFITS = [
  { icon: <TargetIcon      className="w-5 h-5 text-white"/>, grad:"from-cyan-400 to-cyan-600",  title:"Clear communication at every stage", desc:"Stay informed with regular updates and transparent discussions" },
  { icon: <ClockIcon       className="w-5 h-5 text-white"/>, grad:"from-blue-500 to-blue-700",  title:"On-time delivery",                   desc:"Structured timelines ensure your project launches when expected" },
  { icon: <TrendingUpIcon  className="w-5 h-5 text-white"/>, grad:"from-sky-400 to-blue-600",   title:"Scalable solutions",                 desc:"Built to grow with your business needs" },
  { icon: <CheckCircleIcon className="w-5 h-5 text-white"/>, grad:"from-cyan-400 to-teal-600",  title:"Quality assurance throughout",        desc:"Rigorous testing at every phase ensures excellence" },
  { icon: <SparklesIcon    className="w-5 h-5 text-white"/>, grad:"from-cyan-300 to-cyan-500",  title:"Collaborative decision-making",       desc:"Your input shapes every milestone" },
  { icon: <ArrowRightIcon  className="w-5 h-5 text-white"/>, grad:"from-blue-400 to-cyan-500",  title:"Post-launch support",                desc:"We are with you beyond deployment" },
];

const TIMELINE_ITEMS = [
  { label:"Discovery", time:"1-2 weeks", color:"#60a5fa" },
  { label:"Design",    time:"2-4 weeks", color:"#34d399" },
  { label:"Develop",   time:"4-8 weeks", color:"#c084fc" },
  { label:"Deploy",    time:"1-2 weeks", color:"#fb7185" },
];

// ─── HOOKS ───────────────────────────────────────────────────────────────────
function useInView(ref, threshold = 0.1) {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVisible(true); },
      { threshold }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [ref, threshold]);
  return visible;
}

function useWindowWidth() {
  const [width, setWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 1024
  );
  useEffect(() => {
    const handle = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handle);
    return () => window.removeEventListener("resize", handle);
  }, []);
  return width;
}

// ─── CONTAINER — exact match to Navbar: max-w-7xl mx-auto px-4 sm:px-6 md:px-12
function Container({ children }) {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12">
      {children}
    </div>
  );
}

// ─── DELIVERABLES CARD ───────────────────────────────────────────────────────
function DeliverablesCard({ phase }) {
  return (
    <div style={{
      background:"#0c0e14", border:"1px solid rgba(255,255,255,0.07)",
      borderRadius:28, padding:"1.5rem", position:"relative",
      overflow:"hidden", boxShadow:"0 20px 60px -16px rgba(0,0,0,0.7)",
    }}>
      <div style={{ position:"absolute", top:-40, right:-40, width:100, height:100, borderRadius:"50%", background:phase.glow, opacity:0.07, filter:"blur(30px)", pointerEvents:"none" }}/>
      <p style={{ color:"#e5e7eb", fontWeight:600, fontSize:17, marginBottom:18 }}>Deliverables</p>
      <div style={{ display:"flex", flexDirection:"column", gap:9 }}>
        {phase.deliverables.map((d, i) => (
          <div key={i} style={{ display:"flex", alignItems:"center", gap:14, background:"rgba(255,255,255,0.025)", border:"1px solid rgba(255,255,255,0.055)", borderRadius:12, padding:"11px 16px" }}>
            <span style={{ width:8, height:8, borderRadius:"50%", flexShrink:0, background:phase.dot, boxShadow:`0 0 8px ${phase.dot}99` }}/>
            <span style={{ color:"#9ca3af", fontSize:13.5 }}>{d}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── PHASE CONTENT ───────────────────────────────────────────────────────────
function PhaseContent({ phase }) {
  return (
    <div>
      <div style={{ display:"flex", alignItems:"center", gap:16, marginBottom:18 }}>
        <div style={{ width:48, height:48, borderRadius:16, flexShrink:0, display:"flex", alignItems:"center", justifyContent:"center", background:phase.iconBg, border:`1px solid ${phase.iconBorder}`, boxShadow:`0 0 24px -4px ${phase.glow}44` }}>
          <span className={phase.accentClass}>{phase.icon}</span>
        </div>
        <div>
          <p style={{ color:"#34d399", fontSize:10, fontWeight:600, letterSpacing:"0.2em", textTransform:"uppercase", marginBottom:2 }}>Phase</p>
          <p style={{ color:"#fff", fontSize:36, fontWeight:700, lineHeight:1, letterSpacing:"-0.02em" }}>{phase.title}</p>
        </div>
      </div>
      <p style={{ color:"#9ca3af", fontSize:14.5, lineHeight:1.7, marginBottom:22 }}>{phase.desc}</p>
      <p style={{ color:"#d1d5db", fontSize:11, fontWeight:600, letterSpacing:"0.14em", textTransform:"uppercase", marginBottom:14 }}>Key Activities</p>
      <div style={{ display:"flex", flexDirection:"column", gap:11, marginBottom:26 }}>
        {phase.activities.map((act, i) => (
          <div key={i} style={{ display:"flex", alignItems:"center", gap:11 }}>
            <span style={{ width:20, height:20, borderRadius:"50%", flexShrink:0, display:"flex", alignItems:"center", justifyContent:"center", background:`${phase.glow}15`, border:`1px solid ${phase.glow}28` }}>
              <CheckIcon className={`w-3 h-3 ${phase.accentClass}`}/>
            </span>
            <span style={{ color:"#9ca3af", fontSize:13.5 }}>{act}</span>
          </div>
        ))}
      </div>
      <div style={{ display:"inline-flex", alignItems:"center", gap:10, background:"rgba(255,255,255,0.04)", border:"1px solid rgba(255,255,255,0.08)", borderRadius:999, padding:"10px 18px", marginTop:14 }}>
        <ClockIcon className="w-4 h-4 text-emerald-400"/>
        <span style={{ color:"#d1d5db", fontSize:13, fontWeight:500 }}>Duration: {phase.duration}</span>
      </div>
    </div>
  );
}

// ─── PHASE ROW ───────────────────────────────────────────────────────────────
function PhaseRow({ phase, index }) {
  const ref     = useRef(null);
  const visible = useInView(ref);
  const width   = useWindowWidth();
  const isMobile = width < 768;
  const flip     = !isMobile && index % 2 === 1;

  return (
    <div ref={ref} style={{
      display:"grid",
      gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
      gap: isMobile ? "24px" : "60px",
      alignItems:"center",
      opacity: visible ? 1 : 0,
      transform: visible ? "translateY(0)" : "translateY(36px)",
      transition:`opacity 0.7s ease ${index*0.1}s, transform 0.7s ease ${index*0.1}s`,
    }}>
      {flip
        ? <><DeliverablesCard phase={phase}/><PhaseContent phase={phase}/></>
        : <><PhaseContent phase={phase}/><DeliverablesCard phase={phase}/></>
      }
    </div>
  );
}

// ─── CONNECTOR ───────────────────────────────────────────────────────────────
function PhaseConnector({ from, to }) {
  return (
    <div style={{ display:"flex", justifyContent:"center", height:60, alignItems:"stretch" }}>
      <div style={{ width:2, background:`linear-gradient(to bottom, ${from}80, ${to}60)`, borderRadius:999, opacity:0.7 }}/>
    </div>
  );
}

// ─── BENEFIT CARD ────────────────────────────────────────────────────────────
function BenefitCard({ benefit, index }) {
  const ref     = useRef(null);
  const visible = useInView(ref);
  return (
    <div ref={ref} style={{
      background:"#0c0e14", border:"1px solid rgba(255,255,255,0.08)",
      borderRadius:22, padding:"1.75rem",
      opacity: visible ? 1 : 0,
      transform: visible ? "translateY(0)" : "translateY(24px)",
      transition:`opacity 0.6s ease ${index*0.08}s, transform 0.6s ease ${index*0.08}s`,
    }}>
      <div style={{ width:46, height:46, borderRadius:13, display:"flex", alignItems:"center", justifyContent:"center", marginBottom:18 }} className={`bg-gradient-to-br ${benefit.grad}`}>
        {benefit.icon}
      </div>
      <p style={{ color:"#f3f4f6", fontWeight:600, fontSize:15.5, lineHeight:1.4, marginBottom:9 }}>{benefit.title}</p>
      <p style={{ color:"#6b7280", fontSize:13, lineHeight:1.65 }}>{benefit.desc}</p>
    </div>
  );
}

// ─── TIMELINE ────────────────────────────────────────────────────────────────
function Timeline() {
  const ref      = useRef(null);
  const visible  = useInView(ref);
  const width    = useWindowWidth();
  const isMobile = width < 640;

  if (isMobile) {
    return (
      <div ref={ref} style={{ display:"flex", flexDirection:"column", gap:0 }}>
        {TIMELINE_ITEMS.map((item, i) => (
          <div key={i} style={{ display:"flex", alignItems:"stretch", opacity:visible?1:0, transform:visible?"translateX(0)":"translateX(-16px)", transition:`opacity 0.6s ease ${i*0.14}s, transform 0.6s ease ${i*0.14}s` }}>
            <div style={{ display:"flex", flexDirection:"column", alignItems:"center", marginRight:16, width:20 }}>
              <div style={{ width:14, height:14, borderRadius:"50%", flexShrink:0, background:item.color, border:"3px solid #050709", boxShadow:`0 0 14px ${item.color}bb`, marginTop:20 }}/>
              {i < TIMELINE_ITEMS.length - 1 && (
                <div style={{ width:2, flex:1, background:`linear-gradient(to bottom, ${item.color}80, ${TIMELINE_ITEMS[i+1].color}60)`, marginTop:4 }}/>
              )}
            </div>
            <div style={{ flex:1, background:"#0c0e14", border:"1px solid rgba(255,255,255,0.09)", borderRadius:16, padding:"16px 18px", marginBottom:i < TIMELINE_ITEMS.length-1 ? 12 : 0 }}>
              <p style={{ color:"#34d399", fontSize:11, fontWeight:600, letterSpacing:"0.08em", marginBottom:4 }}>{item.time}</p>
              <p style={{ color:"#fff", fontSize:20, fontWeight:600 }}>{item.label}</p>
            </div>
          </div>
        ))}
      </div>
    );
  }

  const CARD_H=84, GAP=68, DOT_D=14, HALF=DOT_D/2;
  const TOTAL = TIMELINE_ITEMS.length*CARD_H + (TIMELINE_ITEMS.length-1)*GAP;

  return (
    <div ref={ref} style={{ position:"relative", width:"100%", height:TOTAL, opacity:visible?1:0, transition:"opacity 0.7s ease" }}>
      <div style={{ position:"absolute", left:"50%", top:CARD_H/2, width:2, height:TOTAL-CARD_H, transform:"translateX(-50%)", background:"linear-gradient(to bottom, #60a5fa 0%, #34d399 33%, #c084fc 66%, #fb7185 100%)", opacity:0.55, borderRadius:999, zIndex:0 }}/>
      {TIMELINE_ITEMS.map((item, i) => {
        const isLeft = i%2===0;
        const rowTop = i*(CARD_H+GAP);
        return (
          <React.Fragment key={i}>
            <div style={{ position:"absolute", top:rowTop, ...(isLeft?{right:"calc(50% + 20px)",left:0}:{left:"calc(50% + 20px)",right:0}), height:CARD_H, background:"#0c0e14", border:"1px solid rgba(255,255,255,0.09)", borderRadius:18, padding:"0 22px", display:"flex", flexDirection:"column", justifyContent:"center", textAlign:isLeft?"right":"left", zIndex:1, opacity:visible?1:0, transform:visible?"translateX(0)":`translateX(${isLeft?-14:14}px)`, transition:`opacity 0.6s ease ${i*0.14}s, transform 0.6s ease ${i*0.14}s` }}>
              <p style={{ color:"#34d399", fontSize:11, fontWeight:600, letterSpacing:"0.08em", marginBottom:4 }}>{item.time}</p>
              <p style={{ color:"#fff", fontSize:22, fontWeight:600 }}>{item.label}</p>
            </div>
            <div style={{ position:"absolute", left:"50%", top:rowTop+CARD_H/2-HALF, width:DOT_D, height:DOT_D, transform:"translateX(-50%)", borderRadius:"50%", background:item.color, border:"3px solid #050709", boxShadow:`0 0 14px ${item.color}bb`, zIndex:2 }}/>
          </React.Fragment>
        );
      })}
    </div>
  );
}

// ─── PAGE ────────────────────────────────────────────────────────────────────
export default function ProcessPage() {
  const heroRef    = useRef(null);
  const heroVisible = useInView(heroRef);
  const width      = useWindowWidth();
  const isMobile   = width < 768;

  return (
    <div style={{ background:"#050709", color:"#fff", fontFamily:"system-ui,sans-serif", minHeight:"100vh" }}>

      {/* ── HERO ── */}
      <section style={{ position:"relative", overflow:"hidden", paddingTop:isMobile?72:112, paddingBottom:isMobile?52:80 }}>
        <div style={{ position:"absolute", right:0, top:0, width:600, height:400, pointerEvents:"none", background:"radial-gradient(ellipse at right top, rgba(15,60,130,0.55) 0%, transparent 70%)" }}/>
        <div style={{ position:"absolute", right:"8%", top:"20%", width:220, height:220, borderRadius:"50%", background:"rgba(20,80,180,0.16)", filter:"blur(60px)", pointerEvents:"none" }}/>

        {/* ✅ Navbar-க்கு exact same container */}
        <Container>
          <div ref={heroRef} style={{ textAlign:"center", position:"relative", zIndex:10, opacity:heroVisible?1:0, transform:heroVisible?"translateY(0)":"translateY(28px)", transition:"opacity 0.8s ease, transform 0.8s ease" }}>
            <div style={{ display:"flex", justifyContent:"center", marginBottom:28 }}>
              <div style={{ display:"inline-flex", alignItems:"center", gap:10, padding:"8px 18px", borderRadius:999, border:"1px solid rgba(255,255,255,0.1)", background:"rgba(255,255,255,0.06)", color:"#d1d5db", fontSize:13 }}>
                <SparklesIcon className="w-4 h-4 text-emerald-400"/>
                Proven Methodology
              </div>
            </div>
            <h1 style={{ fontSize:isMobile?"clamp(44px,13vw,68px)":"clamp(52px,9vw,96px)", fontWeight:700, letterSpacing:"-0.03em", lineHeight:1, color:"#fff", marginBottom:20 }}>
              Our Process
            </h1>
            <p style={{ color:"#6b7280", fontSize:isMobile?15:17, lineHeight:1.7, maxWidth:480, margin:"0 auto" }}>
              A proven, collaborative approach that ensures successful project delivery from concept to launch.
            </p>
          </div>
        </Container>
      </section>

      {/* ── PHASES ── */}
      <section style={{ paddingTop:16, paddingBottom:96 }}>
        {/* ✅ Navbar-க்கு exact same container */}
        <Container>
          {PHASES.map((phase, i) => (
            <React.Fragment key={phase.title}>
              <PhaseRow phase={phase} index={i}/>
              {i < PHASES.length-1 && <PhaseConnector from={phase.glow} to={PHASES[i+1].glow}/>}
            </React.Fragment>
          ))}
        </Container>
      </section>

      {/* ── WHY OUR PROCESS WORKS ── */}
      <section style={{ borderTop:"1px solid rgba(255,255,255,0.06)", padding:isMobile?"64px 0":"96px 0" }}>
        {/* ✅ Navbar-க்கு exact same container */}
        <Container>
          <div style={{ textAlign:"center", marginBottom:52 }}>
            <h2 style={{ fontSize:isMobile?"clamp(26px,7vw,42px)":"clamp(30px,5vw,54px)", fontWeight:700, letterSpacing:"-0.02em", color:"#fff", marginBottom:10 }}>
              Why Our Process Works
            </h2>
            <p style={{ color:"#6b7280", fontSize:16 }}>Benefits of working with GraphiKrafts</p>
          </div>
          <div style={{ display:"grid", gridTemplateColumns:isMobile?"1fr":width<1024?"repeat(2,1fr)":"repeat(3,1fr)", gap:18 }}>
            {BENEFITS.map((b, i) => <BenefitCard key={i} benefit={b} index={i}/>)}
          </div>
        </Container>
      </section>

      {/* ── TIMELINE ── */}
      <section style={{ borderTop:"1px solid rgba(255,255,255,0.06)", padding:isMobile?"64px 0":"96px 0" }}>
        {/* ✅ Navbar-க்கு exact same container — timeline content max 580px center-ல் */}
        <Container>
          <div style={{ maxWidth:580, margin:"0 auto" }}>
            <div style={{ textAlign:"center", marginBottom:isMobile?48:72 }}>
              <h2 style={{ fontSize:isMobile?"clamp(26px,7vw,42px)":"clamp(30px,5vw,54px)", fontWeight:700, letterSpacing:"-0.02em", color:"#fff", marginBottom:10 }}>
                Typical Project Timeline
              </h2>
              <p style={{ color:"#6b7280", fontSize:16 }}>Most projects are completed in 8-16 weeks</p>
            </div>
            <Timeline/>
          </div>
        </Container>
      </section>

    </div>
  );
}