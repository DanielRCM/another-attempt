const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card">
        <div className="container mx-auto px-6 py-8">
          <h1 className="font-serif text-4xl font-bold text-foreground md:text-5xl">
            Root Cause Medicine
          </h1>
          <p className="mt-2 text-lg text-muted-foreground">
            Natural Healing Through Naturopathic Principles
          </p>
        </div>
      </header>

      {/* Main Content - Placeholder for now */}
      <main className="container mx-auto px-6 py-12">
        <div className="text-center">
          <p className="text-muted-foreground">
            Homepage content coming next...
          </p>
        </div>
      </main>
    </div>
  );
};

export default Index;
