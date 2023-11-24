import FeaturedSurveySection from "../components/Homepage/FeaturedSurveySection";
import HeroSection from "../components/Homepage/HeroSection";

const HomePage = () => {
  return (
    <main className="container mx-auto">
      <HeroSection />
      <FeaturedSurveySection />
    </main>
  );
};

export default HomePage;
