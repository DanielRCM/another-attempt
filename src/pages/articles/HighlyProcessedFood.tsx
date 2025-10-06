import Navigation from "@/components/Navigation";
import SidebarLayout from "@/components/SidebarLayout";
import CrossLinks from "@/components/CrossLinks";
import { Link } from "react-router-dom";

const tocItems = [
  { id: "introduction", label: "Introduction" },
  { id: "what-is-processed", label: "What is Highly Processed Food?" },
  { id: "health-effects", label: "Health Effects" },
];

const HighlyProcessedFood = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <SidebarLayout tocItems={tocItems} rightSidebar={<CrossLinks context="articles" />}>
        <article className="py-12">
          <h1 className="font-serif text-4xl font-bold text-foreground md:text-5xl mb-6">
            Highly Processed Food
          </h1>
          
          <div className="prose prose-lg max-w-none space-y-8">
            <section id="introduction" className="scroll-mt-20">
              <p className="text-lg text-foreground leading-relaxed">
                Content will be populated from the parsed document...
              </p>
            </section>
          </div>
          
          <nav className="mt-12 pt-8 border-t border-border" aria-label="Continue reading">
            <h2 className="text-lg font-semibold text-foreground mb-4">Read Next</h2>
            <div className="flex flex-col gap-2">
              <Link to="/articles" className="text-primary hover:underline">
                ← Back to All Articles
              </Link>
              <Link to="/principles" className="text-primary hover:underline">
                Explore the 12 RCM Principles →
              </Link>
            </div>
          </nav>
        </article>
      </SidebarLayout>
    </div>
  );
};

export default HighlyProcessedFood;
