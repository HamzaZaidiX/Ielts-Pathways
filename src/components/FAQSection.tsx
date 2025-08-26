import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQSection = () => {
  const faqs = [
    {
      question: "What is the difference between IELTS, TOEFL, and PTE?",
      answer: "IELTS (International English Language Testing System) is widely accepted by UK, Australia, and Canada. TOEFL (Test of English as a Foreign Language) is primarily for US universities. PTE (Pearson Test of English) is computer-based and provides faster results. All three test your English proficiency in speaking, listening, reading, and writing."
    },
    {
      question: "How long does it take to prepare for these tests?",
      answer: "Preparation time varies based on your current English level. Generally, IELTS requires 8-12 weeks, TOEFL needs 6-10 weeks, and PTE can be prepared in 6-8 weeks with consistent practice. Our diagnostic test helps determine your exact preparation timeline."
    },
    {
      question: "What score do I need for university admission?",
      answer: "Score requirements vary by institution and program. Generally, undergraduate programs require IELTS 6.0-6.5, TOEFL 80-90, or PTE 58-65. Graduate programs typically need IELTS 6.5-7.5, TOEFL 90-110, or PTE 65-75. We help you research specific requirements for your target universities."
    },
    {
      question: "Do you offer online classes?",
      answer: "Yes, we offer both in-person and online classes with the same quality of instruction. Our online platform includes live interactive sessions, recorded lessons, and digital practice materials. You can choose the format that best fits your schedule and learning preferences."
    },
    {
      question: "What is your success rate?",
      answer: "We maintain a 98% success rate with students achieving their target scores within their first attempt. Our proven methodology, experienced instructors, and personalized attention contribute to these exceptional results."
    },
    {
      question: "Do you provide study materials?",
      answer: "Yes, all courses include comprehensive study materials, practice tests, and exclusive resources. You'll receive official preparation books, our proprietary study guides, access to online practice platforms, and regular mock tests with detailed feedback."
    },
    {
      question: "Can I retake the course if I don't achieve my target score?",
      answer: "Yes, we offer a score guarantee policy. If you don't achieve your target score in the first attempt after completing our course and attending 90% of classes, you can retake the course at no additional cost (conditions apply)."
    },
    {
      question: "How soon can I take the actual test after completing the course?",
      answer: "Most students are ready to take the actual test within 1-2 weeks after completing our course. We conduct a final assessment to ensure you're fully prepared and help you book your test date at the most convenient test center."
    },
    {
      question: "What makes your institute different from others?",
      answer: "Our unique advantages include small batch sizes (max 20 students), personalized study plans, experienced certified trainers, regular mock tests, flexible timings, comprehensive study materials, and our proven score guarantee policy."
    },
    {
      question: "Do you help with university applications?",
      answer: "Yes, we provide guidance on university applications as an additional service. This includes help with statement of purpose, recommendation letters, and application procedures for various countries including USA, UK, Canada, and Australia."
    }
  ];

  return (
    <section id="faq" className="py-20 bg-background">
      <div className="container-max section-padding">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Get answers to the most common questions about our courses and test preparation programs.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="border border-border rounded-lg px-6 shadow-soft hover:shadow-medium transition-shadow duration-300 bg-card"
              >
                <AccordionTrigger className="text-left hover:no-underline py-6">
                  <span className="font-semibold text-card-foreground pr-4">
                    {faq.question}
                  </span>
                </AccordionTrigger>
                <AccordionContent className="pb-6 text-muted-foreground leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            Still have questions? We're here to help!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="tel:+1234567890" 
              className="inline-flex items-center justify-center px-6 py-3 bg-primary hover:bg-primary-hover text-primary-foreground rounded-lg font-semibold transition-colors duration-200"
            >
              Call Us: +1 (234) 567-890
            </a>
            <a 
              href="mailto:info@ieltspathways.com" 
              className="inline-flex items-center justify-center px-6 py-3 bg-secondary hover:bg-secondary/80 text-secondary-foreground rounded-lg font-semibold transition-colors duration-200"
            >
              Email: info@ieltspathways.com
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;