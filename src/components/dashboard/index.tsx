import MainSection from "./components/MainSection";
import MissionAndVissionPage from "./components/MissionAndVisson";
import Services from "./components/ServiceSection";
import Events from "./components/Event";

export default function DashBoard() {
  return (
    <div className="min-h-screen">
      <MainSection />
      <MissionAndVissionPage />
      <Services />
      <Events />
    </div>
  );
}
