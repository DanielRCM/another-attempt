import Navigation from "@/components/Navigation";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="container mx-auto px-6 py-12">
        <div className="mx-auto max-w-4xl">
          <h1 className="font-serif text-4xl font-bold text-foreground md:text-5xl">
            About Me
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Content coming soon...
          </p>
        </div>
      </main>
    </div>
  );
};

export default About;
