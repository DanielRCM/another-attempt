import Navigation from "@/components/Navigation";
import SidebarLayout from "@/components/SidebarLayout";

const faqToc = [
  { id: "what-is-rcm", label: "What is Root Cause Medicine?" },
  { id: "how-different", label: "How is it different?" },
  { id: "who-benefits", label: "Who benefits most?" },
  { id: "first-visit", label: "What to expect at first visit" },
  { id: "insurance", label: "Insurance and payment" },
  { id: "duration", label: "Treatment duration" },
  { id: "conditions", label: "Conditions treated" },
];

const FAQ = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <SidebarLayout tocItems={faqToc}>
        <main className="py-12">
          <h1 className="font-serif text-4xl font-bold text-foreground md:text-5xl mb-12">
            Root Cause Medicine FAQs
          </h1>
          
          <div className="space-y-16">
            <section id="what-is-rcm" className="scroll-mt-20">
              <h2 className="font-serif text-3xl font-bold text-foreground mb-4">
                What is Root Cause Medicine?
              </h2>
              <p className="text-lg text-muted-foreground">
                A comprehensive explanation of root cause medicine will be added here, including its 
                principles and how it differs from conventional medical approaches.
              </p>
            </section>

            <section id="how-different" className="scroll-mt-20">
              <h2 className="font-serif text-3xl font-bold text-foreground mb-4">
                How is it different from conventional medicine?
              </h2>
              <p className="text-lg text-muted-foreground">
                Details on the key differences between root cause medicine and traditional medical 
                approaches will be provided here.
              </p>
            </section>

            <section id="who-benefits" className="scroll-mt-20">
              <h2 className="font-serif text-3xl font-bold text-foreground mb-4">
                Who benefits most from this approach?
              </h2>
              <p className="text-lg text-muted-foreground">
                Information about ideal candidates and conditions that respond well to root cause 
                medicine will be detailed here.
              </p>
            </section>

            <section id="first-visit" className="scroll-mt-20">
              <h2 className="font-serif text-3xl font-bold text-foreground mb-4">
                What to expect at your first visit
              </h2>
              <p className="text-lg text-muted-foreground">
                A detailed walkthrough of the initial consultation process will be added here.
              </p>
            </section>

            <section id="insurance" className="scroll-mt-20">
              <h2 className="font-serif text-3xl font-bold text-foreground mb-4">
                Insurance and payment options
              </h2>
              <p className="text-lg text-muted-foreground">
                Information about accepted insurance, payment plans, and costs will be provided here.
              </p>
            </section>

            <section id="duration" className="scroll-mt-20">
              <h2 className="font-serif text-3xl font-bold text-foreground mb-4">
                How long does treatment take?
              </h2>
              <p className="text-lg text-muted-foreground">
                Typical treatment timelines and what factors affect duration will be explained here.
              </p>
            </section>

            <section id="conditions" className="scroll-mt-20">
              <h2 className="font-serif text-3xl font-bold text-foreground mb-4">
                What conditions can be treated?
              </h2>
              <p className="text-lg text-muted-foreground">
                A comprehensive list of conditions and health concerns that can be addressed through 
                root cause medicine will be detailed here.
              </p>
            </section>
          </div>
        </main>
      </SidebarLayout>
    </div>
  );
};

export default FAQ;
