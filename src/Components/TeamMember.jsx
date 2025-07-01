import React from "react";
import mishra from "../assets/mishra.png";
import roma from "../assets/roma.png";
import sarah from "../assets/sarah.png";
import nadiya from "../assets/nadiya.png";

const teamMembers = [
  {
    name: "RK Mishra",
    role: "Sr developer",
    image: mishra,
  },
  {
    name: "Saliya Taylor",
    role: "Remote sale Rep",
    image: sarah,
  },
  {
    name: "Roma S",
    role: "Sale Remote",
    image: roma,
  },
  {
    name: "JR Nadiya",
    role: "Chief executive officer",
    image: nadiya,
  },
];

const TeamMember = () => {
  return (
    <section className="bg-gradient-to-b from-black via-gray-900 to-gray-800 text-white flex justify-center">
      <div className="w-[1440px] px-6 md:px-16 py-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-2">
            The Builders Behind the{" "}
            <span className="text-blue-400">Mission</span>
          </h2>
          <p className="text-gray-400">
            Meet the leaders powering every milestone.
          </p>
        </div>

        {/* Team Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mb-20">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="relative h-80 rounded-xl overflow-hidden group shadow-md hover:shadow-xl transition"
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-60 transition" />
              <div className="absolute bottom-0 w-full bg-gradient-to-t from-black via-black/60 to-transparent px-4 py-3">
                <h3 className="text-lg font-semibold text-white">{member.name}</h3>
                <p className="text-gray-300 text-sm">{member.role}</p>
              </div>
            </div>
          ))}
        </div>

        {/* We're Hiring Section */}
        <div className="text-center">
          <h3 className="text-2xl font-semibold mb-2">
            We’re <span className="text-blue-400">Hiring</span>
          </h3>
          <p className="text-white mb-6">
            Join a team where your ideas matter, your growth is supported, and
            your impact is real.
          </p>
          <button className="bg-white text-blue-600 font-semibold px-6 py-3 rounded-full hover:bg-blue-100 transition">
            Apply Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default TeamMember;
