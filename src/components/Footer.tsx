import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock,
  Facebook,
  Instagram,
  Linkedin,
  Youtube,
  ExternalLink,
} from "lucide-react";
import ieltsLogo from "@/assets/ielts-logo.png";

const Footer = () => {
  const locations = [
    {
      name: "Main Campus",
      address: "123 Street, Sharah e Faisal, Karachi 12345",
      phone: "+92 (234) 5678910",
      email: "main@ieltspathways.com"
    },
    {
      name: "USA Branch",
      address: "456 Central Avenue, Business District, Texas 67890",
      phone: "+1 (234) 567-891",
      email: "usa@ieltspathways.com"
    },
  ];

  const socialLinks = [
    { name: "Facebook", icon: Facebook, url: "https://facebook.com/#" },
    { name: "Instagram", icon: Instagram, url: "https://instagram.com/#" },
    { name: "LinkedIn", icon: Linkedin, url: "https://linkedin.com/#" },
    { name: "YouTube", icon: Youtube, url: "https://youtube.com/#" },
  ];

  const quickLinks = [
    { name: "About Us", href: "#about" },
    { name: "Courses", href: "#courses" },
    { name: "Why Choose Us", href: "#why-choose" },
    { name: "Study Destinations", href: "#study destinations" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "Events", href: "#events" },
    { name: "Universities Partner", href: "#university-partners" },
    { name: "Contact", href: "#contact" }
  ];

  const courses = [
    { name: "IELTS Preparation", href: "#courses" },
    { name: "TOEFL Preparation", href: "#courses" },
    { name: "PTE Preparation", href: "#courses" },
    { name: "English Language Course", href: "#courses" },
    { name: "Free Assessment", href: "#registration" },
    { name: "Mock Tests", href: "#events" },
    { name: "Speaking Practice", href: "#courses" }
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId.replace('#', ''));
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-foreground text-background">
      {/* Newsletter Section */}
      <div className="bg-primary py-12">
        <div className="container-max section-padding">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-primary-foreground mb-4">
              Stay Updated with IELTS Tips & News
            </h3>
            <p className="text-primary-foreground/90 mb-6 max-w-2xl mx-auto">
              Subscribe! to our newsletter for exam tips, study materials, and updates on new courses.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input 
                type="email" 
                placeholder="Enter your email address"
                className="bg-white text-foreground border-white"
              />
              <Button onClick={() => {
    alert(
      "Thank you for subscribing to our newsletter!"
    );}}
                variant="secondary"
                className="bg-white text-primary hover:bg-white/90 whitespace-nowrap"
              >
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="py-16">
        <div className="container-max section-padding">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-1">
              <div className="flex items-center space-x-3 mb-6">
                {/* <img 
                  src={ieltsLogo} 
                  alt="IELTS Pathways Logo" 
                  className="h-10 w-auto filter brightness-0 invert"
                />
                <span className="text-xl font-semibold">IELTS Pathways</span> */}
            <a href="/"><h1 className='text-3xl font-bold text-primary font-metro-nova brightness-0 invert'>IELTS PATHWAYS</h1></a>
              </div>
              <p className="text-background/80 leading-relaxed mb-6">
                Your trusted partner in achieving English language proficiency. We help you achieve your dreams.
              </p>
              
              {/* Social Links */}
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-background/10 hover:bg-primary rounded-full flex items-center justify-center transition-colors duration-200"
                  >
                    <social.icon className="h-5 w-5" />
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <button
                      onClick={() => scrollToSection(link.href)}
                      className="text-background/80 hover:text-primary transition-colors duration-200 hover:underline"
                    >
                      {link.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Courses */}
            <div>
              <h4 className="text-lg font-semibold mb-6">Our Courses</h4>
              <ul className="space-y-3">
                {courses.map((course, index) => (
                  <li key={index}>
                    <button
                      onClick={() => scrollToSection(course.href)}
                      className="text-background/80 hover:text-primary transition-colors duration-200 hover:underline"
                    >
                      {course.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-semibold mb-6">Contact Us</h4>
              <div className="space-y-4">
                <div className="flex items-start">
                  <Phone className="h-5 w-5 text-primary mr-3 mt-0.5" />
                  <div>
                    <p className="font-medium">Main Office</p>
                    <p className="text-background/80">+1 (234) 567-890</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Mail className="h-5 w-5 text-primary mr-3 mt-0.5" />
                  <div>
                    <p className="font-medium">Email</p>
                    <p className="text-background/80">info@ieltspathways.com</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Clock className="h-5 w-5 text-primary mr-3 mt-0.5" />
                  <div>
                    <p className="font-medium">Office Hours</p>
                    <p className="text-background/80">Mon-Sat: 9AM-7PM</p>
                    <p className="text-background/80">Sunday: 10AM-5PM</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Locations */}
          <Separator className="my-12 bg-background/20" />
          
          <div>
            <h4 className="text-xl font-semibold mb-8 text-center">Our Locations</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {locations.map((location, index) => (
                <div key={index} className="text-center p-4 bg-background/5 rounded-lg">
                  <h5 className="font-semibold mb-3 text-primary">{location.name}</h5>
                  <div className="space-y-2 text-sm text-background/80">
                    <div className="flex items-start justify-center">
                      <MapPin className="h-4 w-4 mr-2 mt-0.5 flex-shrink-0" />
                      <span>{location.address}</span>
                    </div>
                    <div className="flex items-center justify-center">
                      <Phone className="h-4 w-4 mr-2" />
                      <span>{location.phone}</span>
                    </div>
                    <div className="flex items-center justify-center">
                      <Mail className="h-4 w-4 mr-2" />
                      <span>{location.email}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-background/20 py-6">
        <div className="container-max section-padding">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-background/80 text-sm">
              © {new Date().getFullYear()} IELTS Pathways. All rights reserved. <span>Build with<span className="text-primary  font-semibold text-2xl px-1 text-primary-hover animate-pulse">
            &#9825;
          </span>
          by &nbsp;
          <a
            href="https://hamza-zaidi-portfolio-jade.vercel.app/"
            className="underline underline-offset-4 decoration-wavy font-semibold decoration-primary hover:decoration-primary-hover"
            target={"_blank"}
          >Hamza Zaidi
          </a></span>
            </div>
            <div className="flex flex-wrap gap-6 text-sm">
              <a href="#" className="text-background/80 hover:text-primary transition-colors duration-200">
                Privacy Policy
              </a>
              <a href="#" className="text-background/80 hover:text-primary transition-colors duration-200">
                Terms of Service
              </a>
              <a href="#" className="text-background/80 hover:text-primary transition-colors duration-200">
                Cookie Policy
              </a>
              <a href="#" className="text-background/80 hover:text-primary transition-colors duration-200">
                Sitemap
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;