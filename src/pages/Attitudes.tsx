import Navigation from "@/components/Navigation";
import SidebarLayout from "@/components/SidebarLayout";

const attitudesToc = [
  { id: "attitude-1", label: "1. First Attitude" },
  { id: "attitude-2", label: "2. Second Attitude" },
  { id: "attitude-3", label: "3. Third Attitude" },
  { id: "attitude-4", label: "4. Fourth Attitude" },
  { id: "attitude-5", label: "5. Fifth Attitude" },
  { id: "attitude-6", label: "6. Sixth Attitude" },
  { id: "attitude-7", label: "7. Seventh Attitude" },
  { id: "attitude-8", label: "8. Eighth Attitude" },
  { id: "attitude-9", label: "9. Ninth Attitude" },
  { id: "attitude-10", label: "10. Tenth Attitude" },
  { id: "attitude-11", label: "11. Eleventh Attitude" },
  { id: "attitude-12", label: "12. Twelfth Attitude" },
];

const Attitudes = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <SidebarLayout tocItems={attitudesToc}>
        <main className="py-12">
          <h1 className="font-serif text-4xl font-bold text-foreground md:text-5xl mb-12">
            12 Root Cause Medicine Attitudes
          </h1>
          
          <div className="space-y-16">
            {attitudesToc.map((attitude, index) => (
              <section key={attitude.id} id={attitude.id} className="scroll-mt-20">
                <h2 className="font-serif text-3xl font-bold text-foreground mb-4">
                  {attitude.label}
                </h2>
                <p className="text-lg text-muted-foreground">
                  Content for {attitude.label} will be added here. This is a placeholder section 
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
        </main>
      </SidebarLayout>
    </div>
  );
};

export default Attitudes;
