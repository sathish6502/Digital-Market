export default function StatsSection() {
  const stats = [
    { value: "8+", label: "Years in Business" },
    { value: "200+", label: "Projects Completed" },
    { value: "50+", label: "Happy Clients" },
    { value: "95%", label: "Client Satisfaction" },
  ];

  return (
    <section className="bg-gradient-to-b from-[#0A1627] to-[#003522] py-16 text-white">
      <div className="max-w-6xl mx-auto px-6 text-center">

        <h2 className="text-3xl sm:text-3xl md:text-4xl font-lg mb-15">
          By the Numbers
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
          {stats.map((item, index) => (
            <div key={index}>
              <h3 className="text-3xl sm:text-4xl md:text-5xl font-lg">
                {item.value}
              </h3>
              <p className="mt-2 text-gray-300 text-sm sm:text-base md:text-base">
                {item.label}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}