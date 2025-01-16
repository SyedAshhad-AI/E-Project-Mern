import AboutUsSection from "./AboutUsSection";
import CTASection from "./CTASection";
import HeroSection from "./HeroSection";
import PortfolioSection from "./PortfolioSection";
import TestimonialsSection from "./TestimonialsSection";
import Services from "./Services";

const MainLayout = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen 2xl:mx-40">
      <HeroSection />

      <AboutUsSection />

      <Services />

      <PortfolioSection />

      <TestimonialsSection />

      <CTASection />
    </div>
  );
};

export default MainLayout;
