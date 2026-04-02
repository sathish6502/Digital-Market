import img1 from "./../../assets/About/Team1.png";
import img2 from "./../../assets/About/Team2.png";
import img3 from "./../../assets/About/Team3.png";
import img4 from "./../../assets/About/Team4.png";

const team = [
  {
    name: "Sarah Chen",
    role: "Creative Director",
    img: img1,
  },
  {
    name: "Marcus Johnson",
    role: "Lead Developer",
    img: img2,
  },
  {
    name: "Emily Rodriguez",
    role: "UX Researcher",
    img: img3,
  },
  {
    name: "David Park",
    role: "Brand Strategist",
    img: img4,
  },
];

export default function TeamSection() {
  return (
    <section className="bg-gradient-to-b from-[#020617] to-[#020617] py-10 sm:py-20 px-4 sm:px-6">
      
      {/* Heading */}
      <div className="text-center mb-10 sm:mb-16">
        <h2 className="text-white text-2xl sm:text-4xl font-medium">
          Meet the Team
        </h2>
        <p className="text-gray-400 mt-2 text-sm sm:text-base">
          The talented individuals behind our success
        </p>
      </div>

      {/* Team Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-10 max-w-6xl mx-auto">
        
        {team.map((member, index) => (
          <div key={index} className="text-center">
            
            <div className="overflow-hidden rounded-2xl">
              <img
                src={member.img}
                alt={member.name}
                className="w-full h-[200px] sm:h-[240px] md:h-[260px] object-cover rounded-2xl"
              />
            </div>

            <h3 className="text-white font-medium mt-3 text-sm sm:text-lg">
              {member.name}
            </h3>

            <p className="text-blue-500 text-xs sm:text-sm mt-1">
              {member.role}
            </p>
          </div>
        ))}

      </div>
    </section>
  );
}