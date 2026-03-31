export default function App() {
    return (
      <section className="relative bg-[#020617] text-white py-20 overflow-hidden min-h-screen">
  
        {/* Glow Effects */}
        <div className="glow-light"></div>
        <div className="absolute inset-0 bg-radial-glow"></div>
  
        {/* Header */}
        <div className="text-center mb-16 relative z-10 px-4">
          <p className="text-green-400 text-sm mb-2">✨ Proven Methodology</p>
          <h1 className="text-4xl md:text-6xl font-bold">Our Process</h1>
          <p className="text-gray-400 mt-4 max-w-xl mx-auto">
            A proven, collaborative approach that ensures successful project delivery from concept to launch.
          </p>
        </div>
  
        {/* Timeline */}
        <div className="relative max-w-6xl mx-auto px-4">
  
          {/* Center Line */}
          <div className="hidden md:block absolute left-1/2 top-0 w-[2px] h-full bg-gradient-to-b from-green-400 to-transparent"></div>
  
          {/* ===== DISCOVERY ===== */}
          <div className="grid md:grid-cols-2 gap-10 items-center mb-20 relative z-10">
  
            {/* LEFT TEXT */}
            <div className="md:text-right">
              <h2 className="text-2xl font-semibold">Discovery</h2>
              <p className="text-gray-400 mt-2">
                Understanding your business, goals, and challenges
              </p>
  
              <ul className="mt-4 space-y-2 text-gray-300">
                <li>✔ Stakeholder interviews</li>
                <li>✔ Market & competitor research</li>
                <li>✔ User research & personas</li>
                <li>✔ Project requirements gathering</li>
                <li>✔ Technical feasibility</li>
              </ul>
  
              <div className="mt-4 text-green-400 text-sm">
                Duration: 1-2 weeks
              </div>
            </div>
  
            {/* RIGHT CARD */}
            <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-6 shadow-2xl">
              <h3 className="mb-4 text-lg">Deliverables</h3>
              <ul className="space-y-3 text-gray-300">
                <li>• Project brief</li>
                <li>• User personas</li>
                <li>• Research findings</li>
                <li>• Technical specification</li>
              </ul>
            </div>
          </div>
  
          {/* ===== DESIGN ===== */}
          <div className="grid md:grid-cols-2 gap-10 items-center mb-20 relative z-10">
  
            {/* LEFT CARD */}
            <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-6 shadow-2xl">
              <h3 className="mb-4 text-lg">Deliverables</h3>
              <ul className="space-y-3 text-gray-300">
                <li>• Wireframes</li>
                <li>• High-fidelity designs</li>
                <li>• Interactive prototypes</li>
                <li>• Design system</li>
              </ul>
            </div>
  
            {/* RIGHT TEXT */}
            <div>
              <h2 className="text-2xl font-semibold">Design</h2>
              <p className="text-gray-400 mt-2">
                Creating beautiful, functional designs
              </p>
  
              <ul className="mt-4 space-y-2 text-gray-300">
                <li>✔ Information architecture</li>
                <li>✔ Wireframing & user flows</li>
                <li>✔ Visual design & branding</li>
                <li>✔ Interactive prototyping</li>
                <li>✔ Usability testing</li>
              </ul>
  
              <div className="mt-4 text-green-400 text-sm">
                Duration: 2-4 weeks
              </div>
            </div>
          </div>
  
        </div>
      </section>
    );
  }