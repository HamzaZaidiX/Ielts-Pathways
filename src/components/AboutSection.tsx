import { Card } from "@/components/ui/card";
import { CheckCircle, BookOpen, Users, Target } from "lucide-react";

const AboutSection = () => {
  const highlights = [
    {
      icon: CheckCircle,
      title: "Expert Trainers",
      description: "Certified professionals with years of experience"
    },
    {
      icon: BookOpen,
      title: "Proven Methods",
      description: "Time-tested strategies for guaranteed success"
    },
    {
      icon: Users,
      title: "Small Classes",
      description: "Personalized attention in every session"
    },
    {
      icon: Target,
      title: "Goal-Oriented",
      description: "Focused approach to achieve your target score"
    }
  ];

  return (
    <section id="about" className="py-20 bg-secondary/30">
      <div className="container-max section-padding">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Welcome to IELTS Pathways
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Your trusted partner in achieving English language proficiency. We specialize in IELTS, TOEFL, and PTE preparation with a focus on personalized learning and proven results.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-foreground mb-4">
              Our Teaching Approach
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              At IELTS Pathways, we believe in a holistic approach to language learning. Our experienced trainers combine traditional teaching methods with modern technology to create an engaging and effective learning environment.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              We understand that every student has unique learning needs and goals. That's why we offer personalized study plans, flexible scheduling, and continuous support throughout your preparation journey.
            </p>
            
            <div className="pt-4">
              <h4 className="text-xl font-semibold text-foreground mb-4">Our Vision</h4>
              <p className="text-muted-foreground leading-relaxed">
                To empower students worldwide with the language skills they need to succeed in their academic and professional endeavors, opening doors to global opportunities.
              </p>
            </div>
          </div>

          {/* Highlights Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {highlights.map((highlight, index) => (
              <Card key={index} className="p-6 shadow-soft hover:shadow-medium transition-shadow duration-300 border-border bg-card">
                <div className="flex flex-col items-center text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <highlight.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h4 className="text-lg font-semibold text-card-foreground mb-2">
                    {highlight.title}
                  </h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {highlight.description}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;