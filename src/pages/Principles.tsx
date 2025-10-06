import Navigation from "@/components/Navigation";
import SidebarLayout from "@/components/SidebarLayout";
import CrossLinks from "@/components/CrossLinks";
import { Link } from "react-router-dom";

const principlesToc = [
  { id: "principle-1", label: "1. First Principle" },
  { id: "principle-2", label: "2. Second Principle" },
  { id: "principle-3", label: "3. Third Principle" },
  { id: "principle-4", label: "4. Fourth Principle" },
  { id: "principle-5", label: "5. Fifth Principle" },
  { id: "principle-6", label: "6. Sixth Principle" },
  { id: "principle-7", label: "7. Seventh Principle" },
  { id: "principle-8", label: "8. Eighth Principle" },
  { id: "principle-9", label: "9. Ninth Principle" },
  { id: "principle-10", label: "10. Tenth Principle" },
  { id: "principle-11", label: "11. Eleventh Principle" },
  { id: "principle-12", label: "12. Twelfth Principle" },
];

const Principles = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <SidebarLayout tocItems={principlesToc} rightSidebar={<CrossLinks context="principles" />}>
        <main className="py-12">
          <h1 className="font-serif text-4xl font-bold text-foreground md:text-5xl mb-12">
            12 Root Cause Medicine Principles
          </h1>
          
          <div className="space-y-16">
            {principlesToc.map((principle, index) => (
              <section key={principle.id} id={principle.id} className="scroll-mt-20">
                <h2 className="font-serif text-3xl font-bold text-foreground mb-4">
                  {principle.label}
                </h2>
                <p className="text-lg text-muted-foreground">
                  Content for {principle.label} will be added here. This is a placeholder section 
                  to demonstrate the table of contents navigation and smooth scrolling functionality.
                </p>
                <p className="mt-4 text-muted-foreground">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor 
                  incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
                  exercitation ullamco laboris.
                </p>
              </section>
            ))}
          </div>
          
          <section className="mt-16 p-6 bg-muted/50 rounded-lg" aria-label="Related content">
            <p className="text-muted-foreground">
              Want to dive deeper? Explore the <Link to="/attitudes" className="text-primary hover:underline font-medium">12 RCM Attitudes</Link> designed for active patients, or read our <Link to="/articles" className="text-primary hover:underline font-medium">Articles</Link> for detailed insights.
            </p>
          </section>
        </main>
      </SidebarLayout>
    </div>
  );
};

export default Principles;
