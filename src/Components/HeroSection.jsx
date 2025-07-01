import React from "react";
import team from "../assets/teamimage.png";
import { FaArrowRight } from "react-icons/fa";
// Ensure this path is correct
const HeroSection = () => {
  return (
    <div className="relative min-h-screen bg-gradient-to-b from-black via-gray-900 to-gray-800 text-white overflow-hidden">
      {/* Navbar */}
      <nav className="w-full flex justify-between items-center px-8 py-6 absolute top-0 left-0 z-50">
        <h1 className="text-lg md:text-xl font-bold tracking-wide"></h1>
        <div className="space-x-4">
          <button className="text-sm font-medium bg-gray-800 hover:bg-gray-900 px-4 py-2 rounded transition">
            Become a partner
          </button>
          <button className="text-sm font-medium bg-gray-800 hover:bg-gray-900 px-4 py-2 rounded transition">
            Careers
          </button>
        </div>
      </nav>

      {/* Main Content */}
      <div className="flex flex-col items-center justify-center text-center px-4 md:px-8 pt-40 pb-16">
        <h2 className="text-3xl md:text-5xl font-extrabold mb-4">
          The Future of Growth <br />
          <span className="text-blue-500">Is Automated</span>
        </h2>
        <p className="text-lg md:text-xl max-w-2xl mb-6 text-gray-300">
          Your Full-Stack Growth Partner for Coaches, Consultants, Creators, and
          Digital Entrepreneurs Ready to Scale to 7 Figures.
        </p>
        <button className="bg-white hover:bg-gray-100 text-blue-600 px-6 py-3 rounded-full font-semibold transition flex items-center gap-2">
          Apply Now <FaArrowRight />
        </button>

        {/* Image */}
        <div className="mt-12 max-w-4xl w-full px-4">
          <img
            src={team}
            alt="Team Celebrating"
            className="rounded-xl shadow-lg w-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
