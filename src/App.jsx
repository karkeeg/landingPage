import HeroSection from "./Components/HeroSection";
import OpenPositions from "./Components/OpenPositions";
import TeamMember from "./Components/TeamMember";

function App() {
  return (
    <>
      <div className="bg-[#0d061f] text-white font-sans">
        <HeroSection />
        <OpenPositions />
        <TeamMember />
      </div>
    </>
  );
}

export default App;
