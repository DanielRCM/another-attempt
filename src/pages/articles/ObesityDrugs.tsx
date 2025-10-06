import Navigation from "@/components/Navigation";
import SidebarLayout from "@/components/SidebarLayout";

const tocItems = [
  { id: "introduction", label: "Introduction" },
  { id: "the-problem", label: "The Problem with Weight Loss Drugs" },
  { id: "better-approach", label: "A Better Approach" },
];

const ObesityDrugs = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <SidebarLayout tocItems={tocItems}>
        <article className="py-12">
          <h1 className="font-serif text-4xl font-bold text-foreground md:text-5xl mb-6">
            How Not To Tackle Obesity – Wegovy, Ozempic, Zepbound, Mounjaro, Etc.
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

export default ObesityDrugs;
