import ChallengeSection from "../../HomePage/ChallengesSection/ChallengeSection";
import HeaderSection from "../../HomePage/HeaderSection/HeaderSection";
import ParticipateInfoSection from "../../HomePage/ParticipateInfoSection/ParticipateInfoSection";

export interface HomePageProps {}

const HomePage = ({}: HomePageProps) => {
  return (
    <div>
      <HeaderSection />
      <ParticipateInfoSection />
      <ChallengeSection />
    </div>
  );
};

export default HomePage;
