import Navigation from "@/components/Navigation";
import SidebarLayout from "@/components/SidebarLayout";

const tocItems = [
  { id: "introduction", label: "Introduction" },
  { id: "understanding-root-causes", label: "Understanding Root Causes" },
  { id: "common-root-causes", label: "Common Root Causes" },
];

const IntroductionToRootCauses = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <SidebarLayout tocItems={tocItems}>
        <article className="py-12">
          <h1 className="font-serif text-4xl font-bold text-foreground md:text-5xl mb-6">
            Introduction to Root Causes of Illness
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

export default IntroductionToRootCauses;
