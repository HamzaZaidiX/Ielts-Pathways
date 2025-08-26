import { Card } from "@/components/ui/card";
import { 
  Star, 
  Clock, 
  Users, 
  TrendingUp, 
  BookOpen, 
  Award,
  Headphones,
  Calendar
} from "lucide-react";

const WhyChooseUsSection = () => {
  const features = [
    {
      icon: Star,
      title: "Expert Trainers",
      description: "Learn from certified professionals with 10+ years of experience in IELTS, TOEFL, and PTE training.",
      color: "text-education-orange"
    },
    {
      icon: Users,
      title: "Personalized Learning",
      description: "Small batch sizes ensure individual attention and customized study plans for each student.",
      color: "text-education-blue"
    },
    {
      icon: Clock,
      title: "Flexible Timings",
      description: "Choose from morning, evening, and weekend batches that fit your schedule perfectly.",
      color: "text-education-green"
    },
    {
      icon: TrendingUp,
      title: "Proven Results",
      description: "98% success rate with students achieving their target scores in the first attempt.",
      color: "text-primary"
    },
    {
      icon: BookOpen,
      title: "Comprehensive Material",
      description: "Access to latest study materials, practice tests, and exclusive preparation resources.",
      color: "text-education-orange"
    },
    {
      icon: Award,
      title: "Score Guarantee",
      description: "We guarantee score improvement or provide additional classes at no extra cost.",
      color: "text-education-blue"
    },
    {
      icon: Headphones,
      title: "Audio-Visual Learning",
      description: "Modern classrooms equipped with latest technology for interactive learning experience.",
      color: "text-education-green"
    },
    {
      icon: Calendar,
      title: "Regular Mock Tests",
      description: "Weekly practice tests and detailed feedback to track your progress effectively.",
      color: "text-primary"
    }
  ];

  return (
    <section id="why-choose" className="py-20 bg-background">
      <div className="container-max section-padding">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Why Choose IELTS Pathways Institute?
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            We're committed to providing the best learning experience with proven methodologies and exceptional support.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="p-6 shadow-soft hover:shadow-medium transition-all duration-300 border-border bg-card group hover:scale-105"
            >
              <div className="text-center">
                <div className="w-16 h-16 mx-auto bg-secondary rounded-full flex items-center justify-center mb-4 group-hover:bg-primary/10 transition-colors duration-300">
                  <feature.icon className={`h-8 w-8 ${feature.color}`} />
                </div>
                <h3 className="text-lg font-semibold text-card-foreground mb-3">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </Card>
          ))}
        </div>

        {/* Success Stats */}
        <div className="mt-16 bg-primary/5 rounded-lg p-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-primary mb-2">500+</div>
              <div className="text-muted-foreground">Students Trained</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">98%</div>
              <div className="text-muted-foreground">Success Rate</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">15+</div>
              <div className="text-muted-foreground">Years Experience</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">50+</div>
              <div className="text-muted-foreground">Countries</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;