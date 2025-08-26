import { useState, useEffect } from 'react';
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      country: "Canada",
      score: "IELTS 8.5",
      image: "/api/placeholder/100/100",
      rating: 5,
      text: "IELTS Pathways transformed my preparation completely. The personalized attention and expert guidance helped me achieve my target score in the first attempt. The teachers are incredibly supportive and the study material is comprehensive.",
      course: "IELTS Preparation"
    },
    {
      id: 2,
      name: "Ahmad Hassan",
      country: "New Zealand",
      score: "TOEFL 115",
      image: "/api/placeholder/100/100",
      rating: 5,
      text: "I was struggling with TOEFL speaking section until I joined IELTS Pathways. Their innovative teaching methods and regular practice sessions boosted my confidence tremendously. Highly recommended!",
      course: "TOEFL Preparation"
    },
    {
      id: 3,
      name: "Priya Sharma",
      country: "Australia",
      score: "PTE 79",
      image: "/api/placeholder/100/100",
      rating: 5,
      text: "The mock tests and detailed feedback sessions were game-changers for me. The faculty understood my weaknesses and provided targeted practice that helped me improve significantly.",
      course: "PTE Preparation"
    },
    {
      id: 4,
      name: "Michael Chen",
      country: "USA",
      score: "IELTS 9.0",
      image: "/api/placeholder/100/100",
      rating: 5,
      text: "Exceptional teaching quality and flexible timings made it perfect for my busy schedule. The online classes were as effective as in-person sessions. Achieved my dream score!",
      course: "IELTS Preparation"
    },
    {
      id: 5,
      name: "Elena Rodriguez",
      country: "Spain",
      score: "TOEFL 110",
      image: "/api/placeholder/100/100",
      rating: 5,
      text: "The comprehensive study plan and regular assessments kept me on track throughout my preparation. The teachers genuinely care about your success and go the extra mile to help.",
      course: "TOEFL Preparation"
    }
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    const interval = setInterval(nextTestimonial, 5000);
    return () => clearInterval(interval);
  }, []);

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`h-4 w-4 ${i < rating ? 'text-education-orange fill-education-orange' : 'text-gray-300'}`}
      />
    ));
  };

  return (
    <section id="testimonials" className="py-20 bg-background">
      <div className="container-max section-padding">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            What Our Students Say
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Don't just take our word for it. Here's what our successful students have to say about their journey with us.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Main Testimonial */}
          <Card className="p-8 shadow-large border-border bg-card relative overflow-hidden">
            <Quote className="absolute top-4 right-4 h-8 w-8 text-primary/20" />
            
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="flex-shrink-0">
                <div className="w-20 h-20 rounded-full bg-secondary flex items-center justify-center">
                  <span className="text-2xl font-semibold text-primary">
                    {testimonials[currentIndex].name.charAt(0)}
                  </span>
                </div>
              </div>
              
              <div className="text-center md:text-left flex-1">
                <div className="flex justify-center md:justify-start items-center gap-1 mb-2">
                  {renderStars(testimonials[currentIndex].rating)}
                </div>
                
                <p className="text-card-foreground leading-relaxed mb-4 text-lg">
                  "{testimonials[currentIndex].text}"
                </p>
                
                <div className="space-y-1">
                  <h4 className="font-semibold text-card-foreground">
                    {testimonials[currentIndex].name}
                  </h4>
                  <p className="text-muted-foreground text-sm">
                    {testimonials[currentIndex].country} • {testimonials[currentIndex].course}
                  </p>
                  <div className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-semibold">
                    Achieved: {testimonials[currentIndex].score}
                  </div>
                </div>
              </div>
            </div>
          </Card>

          {/* Navigation */}
          <div className="flex justify-center items-center gap-4 mt-8">
            <Button
              variant="outline"
              size="sm"
              onClick={prevTestimonial}
              className="w-10 h-10 rounded-full p-0"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentIndex ? 'bg-primary w-8' : 'bg-muted'
                  }`}
                />
              ))}
            </div>
            
            <Button
              variant="outline"
              size="sm"
              onClick={nextTestimonial}
              className="w-10 h-10 rounded-full p-0"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Success Statistics */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-3xl font-bold text-primary mb-2">4.9/5</div>
            <div className="text-muted-foreground">Average Rating</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-primary mb-2">200+</div>
            <div className="text-muted-foreground">Success Stories</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-primary mb-2">7.5+</div>
            <div className="text-muted-foreground">Average IELTS Score</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-primary mb-2">100+</div>
            <div className="text-muted-foreground">Perfect Scores</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;