import PromotionalTicker from "@/components/PromotionalTicker";
import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import WhyChooseUsSection from "@/components/WhyChooseUsSection";
import UpcomingEventsSection from "@/components/UpcomingEventsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import CoursesSection from "@/components/CoursesSection";
import FAQSection from "@/components/FAQSection";
import RegistrationSection from "@/components/RegistrationSection";
import Footer from "@/components/Footer";
import StudyAbroadCarousel from "@/components/StudyAbroadCarousel";
import UniversityPartners from "@/components/UniversityPartners";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <PromotionalTicker />
      <Navigation />
      <main>
        <HeroSection />
        <AboutSection />
        <WhyChooseUsSection />
        <StudyAbroadCarousel />
        <UniversityPartners  />
        <CoursesSection />
        <UpcomingEventsSection />
        <TestimonialsSection />
        <FAQSection />
        <RegistrationSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
