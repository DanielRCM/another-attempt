import Navigation from "@/components/Navigation";
import SidebarLayout from "@/components/SidebarLayout";

const tocItems = [
  { id: "introduction", label: "Introduction" },
  { id: "fever-benefits", label: "Benefits of Fever" },
  { id: "when-to-treat", label: "When to Treat" },
];

const FeverWelcome = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <SidebarLayout tocItems={tocItems}>
        <article className="py-12">
          <h1 className="font-serif text-4xl font-bold text-foreground md:text-5xl mb-6">
            Why Fever Should Be Welcome, Not Feared
          </h1>
          
          <div className="prose prose-lg max-w-none space-y-8">
            <section id="introduction" className="scroll-mt-20">
              <p className="text-lg text-foreground leading-relaxed">
                Content will be populated from the parsed document...
              </p>
            </section>
          </div>
        </article>
      </SidebarLayout>
    </div>
  );
};

export default FeverWelcome;
