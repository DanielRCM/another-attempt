import Navigation from "@/components/Navigation";
import SidebarLayout from "@/components/SidebarLayout";

const aboutToc = [
  { id: "background", label: "Background" },
  { id: "qualifications", label: "Qualifications" },
  { id: "philosophy", label: "My Philosophy" },
  { id: "approach", label: "My Approach" },
  { id: "contact", label: "Contact Information" },
];

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <SidebarLayout tocItems={aboutToc}>
        <main className="py-12">
          <h1 className="font-serif text-4xl font-bold text-foreground md:text-5xl mb-12">
            About Me
          </h1>
          
          <div className="space-y-16">
            <section id="background" className="scroll-mt-20">
              <h2 className="font-serif text-3xl font-bold text-foreground mb-4">
                Background
              </h2>
              <p className="text-lg text-muted-foreground mb-4">
                Content about professional background will be added here. This section will detail 
                education, training, and experience in root cause medicine.
              </p>
              <p className="text-muted-foreground">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor 
                incididunt ut labore et dolore magna aliqua.
              </p>
            </section>

            <section id="qualifications" className="scroll-mt-20">
              <h2 className="font-serif text-3xl font-bold text-foreground mb-4">
                Qualifications
              </h2>
              <p className="text-lg text-muted-foreground">
                Professional certifications and qualifications content will be added here.
              </p>
            </section>

            <section id="philosophy" className="scroll-mt-20">
              <h2 className="font-serif text-3xl font-bold text-foreground mb-4">
                My Philosophy
              </h2>
              <p className="text-lg text-muted-foreground">
                Personal philosophy on root cause medicine and patient care will be detailed here.
              </p>
            </section>

            <section id="approach" className="scroll-mt-20">
              <h2 className="font-serif text-3xl font-bold text-foreground mb-4">
                My Approach
              </h2>
              <p className="text-lg text-muted-foreground">
                Description of treatment approach and methodology will be added here.
              </p>
            </section>

            <section id="contact" className="scroll-mt-20">
              <h2 className="font-serif text-3xl font-bold text-foreground mb-4">
                Contact Information
              </h2>
              <p className="text-lg text-muted-foreground">
                Contact details and booking information will be added here.
              </p>
            </section>
          </div>
        </main>
      </SidebarLayout>
    </div>
  );
};

export default About;
