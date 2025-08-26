import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, MapPin, Users, ArrowRight } from "lucide-react";

const UpcomingEventsSection = () => {
  const events = [
    {
      id: 1,
      title: "IELTS Writing Workshop",
      date: "2024-09-15",
      time: "10:00 AM - 12:00 PM",
      location: "Main Campus",
      seats: 25,
      available: 8,
      description: "Master IELTS Writing Task 1 & 2 with expert tips and practice sessions.",
      type: "Workshop"
    },
    {
      id: 2,
      title: "TOEFL Speaking Masterclass",
      date: "2024-09-20",
      time: "2:00 PM - 4:00 PM",
      location: "Online",
      seats: 30,
      available: 15,
      description: "Improve your TOEFL speaking skills with interactive practice and feedback.",
      type: "Masterclass"
    },
    {
      id: 3,
      title: "PTE Mock Test Series",
      date: "2024-09-25",
      time: "9:00 AM - 1:00 PM",
      location: "Main Campus",
      seats: 20,
      available: 5,
      description: "Full-length PTE practice test with detailed score analysis and feedback.",
      type: "Mock Test"
    },
    {
      id: 4,
      title: "Free English Assessment",
      date: "2024-09-30",
      time: "11:00 AM - 12:00 PM",
      location: "All Branches",
      seats: 50,
      available: 32,
      description: "Free English proficiency assessment to determine your current level.",
      type: "Assessment"
    }
  ];

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      weekday: 'short',
      month: 'short',
      day: 'numeric'
    });
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'Workshop': return 'bg-education-blue/10 text-education-blue';
      case 'Masterclass': return 'bg-education-green/10 text-education-green';
      case 'Mock Test': return 'bg-education-orange/10 text-education-orange';
      case 'Assessment': return 'bg-primary/10 text-primary';
      default: return 'bg-secondary text-secondary-foreground';
    }
  };

  return (
    <section id="events" className="py-20 bg-secondary/30">
      <div className="container-max section-padding">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Upcoming Events & Workshops
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Join our specialized workshops and events to enhance your skills and boost your confidence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {events.map((event) => (
            <Card key={event.id} className="p-6 shadow-soft hover:shadow-medium transition-shadow duration-300 border-border bg-card">
              <div className="flex justify-between items-start mb-4">
                <div className={`px-3 py-1 rounded-full text-xs font-semibold ${getTypeColor(event.type)}`}>
                  {event.type}
                </div>
                <div className={`px-2 py-1 rounded text-xs font-medium ${
                  event.available <= 5 ? 'bg-destructive/10 text-destructive' : 'bg-success/10 text-success'
                }`}>
                  {event.available} seats left
                </div>
              </div>

              <h3 className="text-xl font-semibold text-card-foreground mb-3">
                {event.title}
              </h3>
              
              <p className="text-muted-foreground mb-4 leading-relaxed">
                {event.description}
              </p>

              <div className="space-y-3 mb-6">
                <div className="flex items-center text-muted-foreground">
                  <Calendar className="h-4 w-4 mr-3 text-primary" />
                  <span className="font-medium">{formatDate(event.date)}</span>
                </div>
                
                <div className="flex items-center text-muted-foreground">
                  <Clock className="h-4 w-4 mr-3 text-primary" />
                  <span>{event.time}</span>
                </div>
                
                <div className="flex items-center text-muted-foreground">
                  <MapPin className="h-4 w-4 mr-3 text-primary" />
                  <span>{event.location}</span>
                </div>
                
                <div className="flex items-center text-muted-foreground">
                  <Users className="h-4 w-4 mr-3 text-primary" />
                  <span>{event.available} of {event.seats} seats available</span>
                </div>
              </div>

              <Button 
                className="w-full bg-primary hover:bg-primary-hover text-primary-foreground group"
                disabled={event.available === 0}
              >
                {event.available === 0 ? 'Fully Booked' : 'Register Now'}
                {event.available > 0 && (
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                )}
              </Button>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            Can't find what you're looking for?
          </p>
          <Button 
            variant="outline" 
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
          >
            View All Events
          </Button>
        </div>
      </div>
    </section>
  );
};

export default UpcomingEventsSection;