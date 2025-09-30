import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const navigate = useNavigate();

  const sections = [
    {
      title: "12 RCM Principles",
      path: "/principles",
      description: "Core foundations of Root Cause Medicine"
    },
    {
      title: "12 RCM Attitudes",
      path: "/attitudes",
      description: "Essential mindsets for healing"
    },
    {
      title: "About Me",
      path: "/about",
      description: "Learn about your practitioner"
    },
    {
      title: "RCM FAQs",
      path: "/faq",
      description: "Common questions answered"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card">
        <div className="container mx-auto px-6 py-12 text-center">
          <h1 className="font-serif text-5xl font-bold text-foreground md:text-6xl lg:text-7xl">
            Root Cause Medicine
          </h1>
          <p className="mt-4 text-xl text-muted-foreground md:text-2xl">
            Natural Healing Through Naturopathic Principles
          </p>
          <p className="mx-auto mt-3 max-w-2xl text-base text-muted-foreground md:text-lg">
            Discover a holistic approach to health that addresses the root causes of illness, not just symptoms
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-6 py-16">
        {/* 2x2 Grid of Cards */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:gap-8">
          {sections.map((section) => (
            <Card
              key={section.path}
              onClick={() => navigate(section.path)}
              className="group cursor-pointer overflow-hidden transition-all hover:shadow-lg hover:scale-[1.02]"
            >
              {/* Placeholder Image */}
              <div className="aspect-video w-full bg-muted flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="h-20 w-20 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="text-4xl text-primary">✦</span>
                  </div>
                  <h3 className="font-serif text-2xl font-semibold text-foreground">
                    {section.title}
                  </h3>
                </div>
              </div>
              
              {/* Card Content */}
              <div className="p-6">
                <p className="text-center text-muted-foreground">
                  {section.description}
                </p>
              </div>
            </Card>
          ))}
        </div>

        {/* Book Consultation CTA */}
        <Card className="mt-16 bg-gradient-to-br from-primary/5 to-accent/5 border-primary/20">
          <div className="p-12 text-center">
            <h2 className="font-serif text-3xl font-bold text-foreground md:text-4xl">
              Ready to Begin Your Healing Journey?
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
              Schedule a consultation to discover how Root Cause Medicine can help you achieve optimal health naturally
            </p>
            <Button
              size="lg"
              className="mt-8 px-12 py-6 text-lg font-semibold"
            >
              Book Consultation
            </Button>
          </div>
        </Card>
      </main>
    </div>
  );
};

export default Index;
