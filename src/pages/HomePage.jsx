import FeaturedSurveySection from "../components/Homepage/FeaturedSurveySection";
import HeroSection from "../components/Homepage/HeroSection";
import HowItsWorkSection from "../components/Homepage/HowItsWorkSection";

const HomePage = () => {
  return (
    <main className="container mx-auto">
      <HeroSection />
      <FeaturedSurveySection />
      <HowItsWorkSection />
    </main>
  );
};

export default HomePage;
