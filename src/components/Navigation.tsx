import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import ieltsLogo from "@/assets/ielts-logo.png";
import font from "@/assets/metro-nova-pro-black.otf";
const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const navItems = [
    { label: 'About', id: 'about' },
    { label: 'Why Choose Us', id: 'why-choose' },
    { label: 'Courses', id: 'courses' },
    { label: 'Study Destinations', id: 'study destinations' },
    { label: 'Events', id: 'events' },
    { label: 'Testimonials', id: 'testimonials' },
    { label: 'Contact', id: 'contact' },
  ];

  return (
    <nav className={`fixed top-8 left-0 right-0 z-40 transition-all duration-300 ${
      isScrolled ? 'bg-background/95 backdrop-blur-md shadow-medium' : 'bg-transparent'
    }`}>
      <div className="container-max items-center section-padding">
        <div className="flex items-center justify-between h-16 whitespace-nowrap">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            {/* <img 
              src={ieltsLogo} 
              alt="IELTS Pathways Logo" 
              className="h-10 w-auto"
            /> */}
            <a href="/"><h1 className='text-3xl select-none cursor-pointer font-bold text-primary font-metro-nova'>IELTS PATHWAYS</h1></a>
            {/* <span className="text-xl font-semibold text-foreground">IELTS Pathways</span> */}
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8 whitespace-nowrap">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-foreground hover:text-primary transition-colors duration-200 font-medium hover:underline hover:decoration-wavy hover:underline-offset-4"
              >
                {item.label}
              </button>
            ))}
            <Button 
              variant="default" 
              onClick={() => scrollToSection('registration')}
              className="bg-primary hover:bg-primary-hover text-primary-foreground shadow-primary"
            >
              Register Now
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-foreground"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-16 left-0 right-0 bg-background/95 backdrop-blur-md shadow-large border-t">
            <div className="section-padding py-4">
              <div className="flex flex-col space-y-4">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className="text-left text-foreground hover:text-primary transition-colors duration-200 font-medium py-2 hover:underline hover:decoration-wavy hover:underline-offset-4"
                  >
                    {item.label}
                  </button>
                ))}
                <Button 
                  variant="default" 
                  onClick={() => scrollToSection('registration')}
                  className="bg-primary hover:bg-primary-hover text-primary-foreground shadow-primary mt-4"
                >
                  Register Now
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;