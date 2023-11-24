import FeaturedSurveySection from "../components/Homepage/FeaturedSurveySection";
import HeroSection from "../components/Homepage/HeroSection";
import HowItsWorkSection from "../components/Homepage/HowItsWorkSection";
import TestimonialSection from "../components/Homepage/TestimonialSection";

const HomePage = () => {
  return (
    <main className="container mx-auto">
      <HeroSection />
      <FeaturedSurveySection />
      <HowItsWorkSection />
      <TestimonialSection />
    </main>
  );
};

export default HomePage;
