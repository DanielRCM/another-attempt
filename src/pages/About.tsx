import Navigation from "@/components/Navigation";
import SidebarLayout from "@/components/SidebarLayout";

const aboutToc = [
  { id: "introduction", label: "Introduction" },
  { id: "medical-studies", label: "Medical Studies & Doubts" },
  { id: "career-change", label: "Career Change to Law" },
  { id: "the-quest", label: "The Quest for Principles" },
  { id: "the-results", label: "The Results" },
];

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <SidebarLayout tocItems={aboutToc}>
        <main className="py-12">
          <h1 className="font-serif text-4xl font-bold text-foreground md:text-5xl mb-8">
            About
          </h1>
          
          <div className="prose prose-lg max-w-none space-y-12">
            <section id="introduction" className="scroll-mt-20">
              <p className="text-foreground leading-relaxed mb-4">
                Hello, my name is <strong><em>Daniel Mališ,</em></strong> and this website is a result of my long-term efforts to identify <strong><em>the core principles for regaining and maintaining health,</em></strong> regardless of their origin.
              </p>
              <p className="text-foreground leading-relaxed">
                Why was I searching for those principles? Because I couldn't identify them back in the mid-1990s when I was completing my medical studies in the Czech Republic.
              </p>
            </section>

            <section id="medical-studies" className="scroll-mt-20">
              <h2 className="font-serif text-3xl font-bold text-foreground mb-4">
                Medical Studies & Early Doubts
              </h2>
              <p className="text-foreground leading-relaxed mb-4">
                At that time, I realized that Western Medicine doesn't really <strong><em>cure</em></strong> patients, but instead <strong><em>treats</em></strong> them continually, mainly with pharmaceuticals, and often for the rest of their lives.
              </p>
              <p className="text-foreground leading-relaxed mb-4">
                I knew something was wrong with that approach. If the treatment was effective, how come the patients weren't eventually cured of their diseases?
              </p>
              <p className="text-foreground leading-relaxed mb-4">
                And since all the treatment efforts usually only resulted in the patients kept being treated, with no end in sight, <em><strong>why didn't the doctors try something else?</strong></em>
              </p>
              <p className="text-foreground leading-relaxed">
                But saying that something doesn't work is one thing, and having a solution is quite another. At that time, I was unable to come up with anything better, and realistically, I was too young and inexperienced for such a task.
              </p>
            </section>

            <section id="career-change" className="scroll-mt-20">
              <h2 className="font-serif text-3xl font-bold text-foreground mb-4">
                Career Change to Medical Law
              </h2>
              <p className="text-foreground leading-relaxed mb-4">
                However, despite not having a better solution, <strong><em>I couldn't put up with the idea of following treatment protocols</em></strong> that I saw as ineffective and counterproductive.
              </p>
              <p className="text-foreground leading-relaxed mb-4">
                So I changed my career plans. I still <em><strong>got my M.D. degree,</strong></em> but in the meantime, I also started studying law, with the expectation that with my medical background, I'll be well qualified to focus on Medical Law.
              </p>
              <p className="text-foreground leading-relaxed mb-4">
                That expectation proved correct, and during some 20 years of practicing as an Attorney-at-Law, I was involved in every client case that had <em><strong>anything to do with medicine.</strong></em> Thanks to this experience, I saw medicine from all possible angles and perspectives.
              </p>
              <p className="text-foreground leading-relaxed">
                But my initial conundrum was still unsolved. Are there some <em><strong>core principles</strong></em> that can be applied within any system of medicine <em><strong>to really see the patients get back to health?</strong></em>
              </p>
            </section>

            <section id="the-quest" className="scroll-mt-20">
              <h2 className="font-serif text-3xl font-bold text-foreground mb-4">
                The Quest for Core Principles
              </h2>
              <p className="text-foreground leading-relaxed mb-4">
                In 2016, I decided to take <em><strong>an extended sabbatical to find out,</strong></em> along with embarking on my Ph.D. in Medical Law.
              </p>
              <p className="text-foreground leading-relaxed mb-4">
                That sabbatical turned out to be 8 years. I realized that if it took me 6 years to study Western Medicine, I needed at least the same amount of time to identify something potentially better.
              </p>
              <p className="text-foreground leading-relaxed mb-4">
                During my sabbatical, I researched various systems of medicine and hundreds of their treatment procedures, methods, and protocols.
              </p>
              <p className="text-foreground leading-relaxed mb-4">
                I read books, textbooks and medical articles, took online courses, and listened to interviews with top medical experts and practitioners in various medical fields.
              </p>
              <p className="text-foreground leading-relaxed mb-4">
                Fortunately, within the first 4 years of my intensive study and research, those coveted <em><strong>core principles</strong></em> gradually started to crystalize.
              </p>
              <p className="text-foreground leading-relaxed">
                However, it took me another 2 years to sort them out and arrange them into the 12 Root Cause Medicine Principles and an additional 2 years to refine the explanation of those principles based on practical feedback and further study.
              </p>
            </section>

            <section id="the-results" className="scroll-mt-20">
              <h2 className="font-serif text-3xl font-bold text-foreground mb-4">
                The Results
              </h2>
              <p className="text-foreground leading-relaxed mb-4">
                At all times, my goal was to keep the 12 RCM Principles <em><strong>as simple as possible</strong></em> so that they could be applied and understood not only by doctors, but also by the patients.
              </p>
              <p className="text-foreground leading-relaxed mb-4">
                As a matter of fact, <em><strong>the active role of the patients</strong></em> in the whole process turned out to be so essential that I also needed to formulate the 12 Root Cause Medicine Attitudes, designed primarily for the patients.
              </p>
              <p className="text-foreground leading-relaxed mb-4">
                You can see the results of my long-term quest on this website. If you're interested, please read through the 12 RCM Principles as well as the 12 RCM Attitudes.
              </p>
              <p className="text-foreground leading-relaxed">
                Within just dozens of minutes, you can reap <em><strong>the results of 14 years of my medical studies and research,</strong></em> in addition to 20 years of observing medicine from all possible angles as an Attorney focusing on Medical Law. And hopefully, you can benefit from those decades of expertise, too.
              </p>
            </section>
          </div>
        </main>
      </SidebarLayout>
    </div>
  );
};

export default About;
