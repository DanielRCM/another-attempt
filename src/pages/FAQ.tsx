import Navigation from "@/components/Navigation";

const FAQ = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="container mx-auto px-6 py-12">
        <div className="mx-auto max-w-4xl">
          <h1 className="font-serif text-4xl font-bold text-foreground md:text-5xl">
            Root Cause Medicine FAQs
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Content coming soon...
          </p>
        </div>
      </main>
    </div>
  );
};

export default FAQ;
