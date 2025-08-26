import { Button } from "@/components/ui/button";
import { ArrowRight, Users, Award, Globe } from "lucide-react";
import heroImage from "@/assets/hero-students.jpg";
import TypewriterText from "./TypewriterText";

const HeroSection = () => {
  const scrollToRegistration = () => {
    const element = document.getElementById('registration');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const typewriterTexts = [
    "Connect with World",
    "Experience new Cultures",
    "Boost Your Career",
    "Study Abroad",
    "Travel with Confidence",
    "Achieve Your Dreams"
  ];

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Students learning English" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/80 via-foreground/60 to-primary/80"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container-max section-padding text-center ">
        <div className="max-w-4xl mx-auto ">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight select-none cursor-default">
            Learn Languages and
            <span className="block gradient-text bg-gradient-to-r from-white to-primary-hover bg-clip-text text-transparent">
            <TypewriterText texts={typewriterTexts} className="block gradient-text bg-gradient-to-r from-white to-primary-hover bg-clip-text text-transparent" />
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed max-w-3xl mx-auto">
            Master IELTS, TOEFL, and PTE with expert guidance. Join thousands of successful students who achieved their dream scores.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button 
              onClick={scrollToRegistration}
              size="lg"
              className="bg-primary hover:bg-primary-hover text-primary-foreground shadow-primary px-8 py-4 text-lg font-semibold group"
            >
              Register Now
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
              className="border-white/30 bg-white/10 text-white hover:bg-white/20 px-8 py-4 text-lg backdrop-blur-sm"
            >
              Learn More
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <Users className="h-8 w-8 text-primary mr-2" />
                <span className="text-3xl font-bold text-white">500+</span>
              </div>
              <p className="text-white/80">Students Trained</p>
            </div>
            
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <Award className="h-8 w-8 text-primary mr-2" />
                <span className="text-3xl font-bold text-white">98%</span>
              </div>
              <p className="text-white/80">Success Rate</p>
            </div>
            
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <Globe className="h-8 w-8 text-primary mr-2" />
                <span className="text-3xl font-bold text-white">50+</span>
              </div>
              <p className="text-white/80">Countries Reached</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <a href="#about">
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </a>
    </section>
  );
};

export default HeroSection;