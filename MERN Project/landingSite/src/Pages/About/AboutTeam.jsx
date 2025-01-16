import CTASection from "../../Components/CTASection";
import TeamMemberCard from "./TeamMemberCard";

const AboutTeam = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen 2xl:mx-15">
      <TeamMemberCard />
      <CTASection />
    </div>
  );
};

export default AboutTeam;
