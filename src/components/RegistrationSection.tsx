import { useState } from 'react';
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, User, MessageSquare, Send } from "lucide-react";

const RegistrationSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    course: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Registration Successful!",
        description: "Thank you for your interest! Our team will contact you within 24 hours after reviewing your details.",
      });
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        course: '',
        message: ''
      });
      
      setIsSubmitting(true);
    }, 2000);
  };

  const isFormValid = formData.name && formData.email && formData.phone && formData.course;

  return (
    <section id="registration" className="py-20 bg-secondary/30">
      <div className="container-max section-padding">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Start Your Journey Today
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Ready to achieve your target score? Fill out the form below and our expert counselors will get in touch with you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Registration Form */}
          <Card className="p-8 shadow-large border-border bg-card">
            <div className="mb-6">
              <h3 className="text-2xl font-semibold text-card-foreground mb-2">
                Register for Free Consultation
              </h3>
              <p className="text-muted-foreground">
                Get personalized guidance and course recommendations.
              </p>
            </div>

            <form onSubmit={(e) => {
    e.preventDefault(); // prevents page reload
    handleSubmit(e);    // your existing submit handler
    alert(
      `Your details ${formData.name}, ${formData.email}, ${formData.phone}, ${formData.course}, ${formData.message} have been submitted successfully!`
    );
  }}  className="space-y-6" >
              <div>
                <Label htmlFor="name" className="text-card-foreground font-medium">
                  Full Name *
                </Label>
                <div className="relative mt-2">
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                  <Input
                    id="name"
                    type="text"
                    value={formData.name}
                    onChange={(e) => handleInputChange('name', e.target.value)}
                    className="pl-10"
                    placeholder="Enter your full name"
                    required
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="email" className="text-card-foreground font-medium">
                  Email Address *
                </Label>
                <div className="relative mt-2">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    className="pl-10"
                    placeholder="Enter your email address"
                    required
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="phone" className="text-card-foreground font-medium">
                  Phone Number *
                </Label>
                <div className="relative mt-2">
                  <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => handleInputChange('phone', e.target.value)}
                    className="pl-10"
                    placeholder="Enter your phone number"
                    required
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="course" className="text-card-foreground font-medium">
                  Course Interest *
                </Label>
                <Select value={formData.course} onValueChange={(value) => handleInputChange('course', value)}>
                  <SelectTrigger className="mt-2">
                    <SelectValue placeholder="Select your preferred course" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="ielts">IELTS Preparation</SelectItem>
                    <SelectItem value="toefl">TOEFL Preparation</SelectItem>
                    <SelectItem value="pte">PTE Preparation</SelectItem>
                    <SelectItem value="all">English Language Course</SelectItem>
                    <SelectItem value="all">Free Mock Test</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="message" className="text-card-foreground font-medium">
                  Message (Optional)
                </Label>
                <div className="relative mt-2">
                  <MessageSquare className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => handleInputChange('message', e.target.value)}
                    className="pl-10 pt-3 min-h-[100px] resize-none"
                    placeholder="Tell us about your goals, timeline, or any specific questions..."
                  />
                </div>
              </div>

              <Button 
                type="submit" 
                disabled={!isFormValid || isSubmitting}
                className="w-full bg-primary hover:bg-primary-hover text-primary-foreground py-3 text-lg font-semibold shadow-primary group"
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2" ></div>
                    Submitting...
                  </>
                ) : (
                  <>
                    Submit Registration
                    <Send className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </Button>
            </form>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            <Card className="p-6 shadow-soft border-border bg-card">
              <h3 className="text-xl font-semibold text-card-foreground mb-4">
                Contact Information
              </h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Phone className="h-5 w-5 text-primary mr-3" />
                  <div>
                    <p className="font-medium text-card-foreground">Phone</p>
                    <p className="text-muted-foreground">+1 (234) 567-890</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Mail className="h-5 w-5 text-primary mr-3" />
                  <div>
                    <p className="font-medium text-card-foreground">Email</p>
                    <p className="text-muted-foreground">info@ieltspathways.com</p>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="p-6 shadow-soft border-border bg-card">
              <h3 className="text-xl font-semibold text-card-foreground mb-4">
                Why Register?
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-muted-foreground">Free English proficiency assessment</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-muted-foreground">Personalized study plan creation</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-muted-foreground">Course recommendations based on your goals</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-muted-foreground">Information about upcoming batches</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-muted-foreground">Access to free study materials</span>
                </li>
              </ul>
            </Card>

            <Card className="p-6 shadow-soft border-border bg-primary/5 border-primary/20">
              <h3 className="text-xl font-semibold text-card-foreground mb-4">
                Limited Time Offer!
              </h3>
              <p className="text-muted-foreground mb-4">
                Register now and get:
              </p>
              <ul className="space-y-2 text-muted-foreground">
                <li>• 20% discount on course fees</li>
                <li>• Free practice test worth $50</li>
                <li>• Complimentary study materials</li>
                <li>• Personal counseling sessions</li>
              </ul>
              <p className="text-primary font-semibold mt-4">
                Offer valid until September 30, 2024
              </p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RegistrationSection;