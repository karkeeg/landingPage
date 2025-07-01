import { FaMapMarkerAlt, FaBriefcase } from "react-icons/fa";

export default function OpenPositions() {
  return (
    <div className="h-screen flex flex-col lg:flex-row p-8 bg-black text-white overflow-hidden">
      {/* Left Section */}
      <div
        className="relative w-full lg:w-1/2 flex items-center text-left px-6 sm:px-10 lg:px-20 py-16 bg-cover rounded bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80')",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-70 backdrop-blur-sm z-0"></div>

        {/* Content */}
        <div className="relative z-10 max-w-md">
          <h1 className="text-3xl sm:text-4xl font-bold mb-4 leading-tight">
            Open <span className="text-blue-500">Positions</span>
          </h1>
          <p className="text-base sm:text-lg font-medium sm:font-semibold">
            Join a culture that supports growth,
            <br className="hidden sm:inline" />
            encourages bold ideas, and rewards curiosity.
          </p>
        </div>
      </div>

      {/* Right Section */}
      <div className="w-full lg:w-1/2 max-h-screen overflow-y-auto p-6 sm:p-8 lg:p-10 space-y-6 scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-gray-900">
        {Array.from({ length: 5 }).map((_, idx) => (
          <JobCard
            key={idx}
            bgColor={idx % 2 === 0 ? "bg-purple-700" : "bg-gray-900"}
            title={`Remote sale Rep #${idx + 1}`}
            points={[
              "Remote sale Rep",
              "1+ years of experienced required",
              "10% Commissions",
            ]}
            icons={[
              { icon: <FaMapMarkerAlt />, text: "Remote" },
              { icon: <FaBriefcase />, text: "Full-Time" },
            ]}
            showApply={idx !== 4}
          />
        ))}
      </div>
    </div>
  );
}

function JobCard({ bgColor, title, points, icons, showApply }) {
  return (
    <div className={`${bgColor} rounded-xl p-5 sm:p-6 flex flex-col space-y-4`}>
      <h2 className="font-semibold text-white text-lg sm:text-xl">{title}</h2>

      {/* Points */}
      <div className="flex flex-col space-y-2 text-white text-sm">
        {points.map((point, i) => (
          <label key={i} className="flex items-center space-x-2">
            <input
              type="radio"
              name={title}
              checked={i === 0}
              readOnly
              className="accent-white"
            />
            <span>{point}</span>
          </label>
        ))}
      </div>

      {/* Icons */}
      {icons.length > 0 && (
        <div className="flex flex-wrap gap-x-6 text-white text-sm mt-2">
          {icons.map(({ icon, text }, i) => (
            <div key={i} className="flex items-center space-x-1">
              <span className="text-xs">{icon}</span>
              <span>{text}</span>
            </div>
          ))}
        </div>
      )}

      {/* Apply Button */}
      {showApply && (
        <button
          className="mt-4 w-max px-4 py-2 bg-white rounded-full text-blue-500 font-semibold hover:bg-blue-100 transition"
          type="button"
        >
          Apply Now
        </button>
      )}
    </div>
  );
}
