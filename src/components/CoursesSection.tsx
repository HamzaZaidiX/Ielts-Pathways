import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle, Clock, Users, BookOpen, Award, Star } from "lucide-react";

const CoursesSection = () => {
  const courses = [
    {
      id: 1,
      title: "IELTS Preparation",
      subtitle: "International English Language Testing System",
      description: "Comprehensive IELTS preparation covering all four modules with expert guidance and proven strategies.",
      duration: "8-12 weeks",
      students: "15-20",
      sessions: "48 hours",
      price: "$299",
      originalPrice: "$399",
      rating: 4.9,
      features: [
        "All 4 modules: Listening, Reading, Writing, Speaking",
        "20+ practice tests with detailed analysis",
        "Personal feedback and score prediction",
        "Flexible timing options",
        "Study materials and resources included",
        "Mock test every week",
        "Speaking practice sessions",
        "Score guarantee policy"
      ],
      popular: true,
      color: "border-primary bg-primary/5"
    },
    {
      id: 2,
      title: "TOEFL Preparation",
      subtitle: "Test of English as a Foreign Language",
      description: "Complete TOEFL iBT preparation with computer-based practice and advanced strategies.",
      duration: "6-10 weeks",
      students: "12-18",
      sessions: "40 hours",
      price: "$349",
      originalPrice: "$449",
      rating: 4.8,
      features: [
        "iBT format training: Reading, Listening, Speaking, Writing",
        "Computer-based practice sessions",
        "Integrated task preparation",
        "Time management techniques",
        "Official practice materials",
        "Weekly progress assessments",
        "Individual speaking coaching",
        "University application guidance"
      ],
      popular: false,
      color: "border-education-blue bg-education-blue/5"
    },
    {
      id: 3,
      title: "PTE Preparation",
      subtitle: "Pearson Test of English Academic",
      description: "Specialized PTE coaching with AI-powered practice and computer-adaptive strategies.",
      duration: "6-8 weeks",
      students: "10-15",
      sessions: "36 hours",
      price: "$279",
      originalPrice: "$379",
      rating: 4.7,
      features: [
        "Complete PTE Academic preparation",
        "AI-powered scoring practice",
        "Computer-adaptive test strategies",
        "Template-based approach",
        "Pronunciation and fluency training",
        "Regular mock tests",
        "Score improvement tracking",
        "Fast results in 2-5 business days"
      ],
      popular: false,
      color: "border-education-green bg-education-green/5"
    }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`h-4 w-4 ${i < Math.floor(rating) ? 'text-education-orange fill-education-orange' : 'text-gray-300'}`}
      />
    ));
  };

  const scrollToRegistration = () => {
    const element = document.getElementById('registration');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="courses" className="py-20 bg-secondary/30">
      <div className="container-max section-padding">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Our Course Offerings
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Choose from our comprehensive test preparation courses designed to help you achieve your target scores.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {courses.map((course) => (
            <Card 
              key={course.id} 
              className={`relative p-6 shadow-soft hover:shadow-large transition-all duration-300 border-2 ${course.color} bg-card`}
            >
              {course.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-semibold">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-card-foreground mb-2">
                  {course.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-3">
                  {course.subtitle}
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  {course.description}
                </p>
                
                <div className="flex items-center justify-center gap-1 mb-2">
                  {renderStars(course.rating)}
                  <span className="text-sm text-muted-foreground ml-2">
                    ({course.rating})
                  </span>
                </div>
              </div>

              {/* Course Info */}
              <div className="grid grid-cols-3 gap-4 mb-6 text-center">
                <div className="flex flex-col items-center">
                  <Clock className="h-5 w-5 text-primary mb-1" />
                  <span className="text-xs text-muted-foreground">Duration</span>
                  <span className="text-sm font-semibold">{course.duration}</span>
                </div>
                <div className="flex flex-col items-center">
                  <Users className="h-5 w-5 text-primary mb-1" />
                  <span className="text-xs text-muted-foreground">Batch Size</span>
                  <span className="text-sm font-semibold">{course.students}</span>
                </div>
                <div className="flex flex-col items-center">
                  <BookOpen className="h-5 w-5 text-primary mb-1" />
                  <span className="text-xs text-muted-foreground">Sessions</span>
                  <span className="text-sm font-semibold">{course.sessions}</span>
                </div>
              </div>

              {/* Features */}
              <div className="mb-6">
                <h4 className="font-semibold text-card-foreground mb-3 flex items-center">
                  <Award className="h-4 w-4 text-primary mr-2" />
                  What's Included:
                </h4>
                <ul className="space-y-2">
                  {course.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-primary mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Pricing */}
              <div className="text-center mb-6">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <span className="text-3xl font-bold text-card-foreground">
                    {course.price}
                  </span>
                  <span className="text-lg text-muted-foreground line-through">
                    {course.originalPrice}
                  </span>
                </div>
                <p className="text-sm text-muted-foreground">One-time payment</p>
              </div>

              {/* CTA Button */}
              <Button 
                onClick={scrollToRegistration}
                className={`w-full ${course.popular 
                  ? 'bg-primary hover:bg-primary-hover text-primary-foreground shadow-primary' 
                  : 'bg-secondary hover:bg-secondary/80 text-secondary-foreground'
                }`}
              >
                Join This Course
              </Button>
            </Card>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16 text-center">
          <div className="bg-primary/10 rounded-lg p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-semibold text-foreground mb-4">
              Not Sure Which Course to Choose?
            </h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Book a free consultation with our experts to get personalized course recommendations based on your goals and current proficiency level.
            </p>
            <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
              Book Free Consultation
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoursesSection;