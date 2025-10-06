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
          
          <div className="prose prose-lg max-w-none space-y-12">
            <section id="background" className="scroll-mt-20">
              <h2 className="font-serif text-3xl font-bold text-foreground mb-4">
                Background
              </h2>
              <p className="text-foreground leading-relaxed mb-4">
                I'm an NHS GP working in a practice in South London. I graduated from medical school in 1991, and have been a GP since 1996.
              </p>
              <p className="text-foreground leading-relaxed mb-4">
                In my first few years as a GP, I noticed that many patients kept coming back, again and again, with ongoing problems. Despite my efforts, their conditions weren't improving in the long term. This troubled me. I wondered if there was something fundamentally missing in how I was approaching treatment.
              </p>
              <p className="text-foreground leading-relaxed">
                This led me to explore different approaches to medicine, eventually discovering what I now call Root Cause Medicine (RCM). It's based on understanding and addressing the underlying reasons why people get ill, rather than just managing symptoms.
              </p>
            </section>

            <section id="qualifications" className="scroll-mt-20">
              <h2 className="font-serif text-3xl font-bold text-foreground mb-4">
                Qualifications
              </h2>
              <p className="text-foreground leading-relaxed mb-4">
                In addition to my conventional medical training, I have pursued extensive additional education in nutritional and functional medicine:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-foreground">
                <li>Bachelor of Medicine, Bachelor of Surgery (MBBS) - 1991</li>
                <li>Member of the Royal College of General Practitioners (MRCGP) - 1996</li>
                <li>Diploma in Nutritional Medicine - 2003</li>
                <li>Certified Functional Medicine Practitioner</li>
              </ul>
            </section>

            <section id="philosophy" className="scroll-mt-20">
              <h2 className="font-serif text-3xl font-bold text-foreground mb-4">
                My Philosophy
              </h2>
              <p className="text-foreground leading-relaxed mb-4">
                I believe that the human body has a remarkable capacity to heal itself when given the right conditions. My role as a doctor is to help identify and remove obstacles to healing, and to support the body's natural healing processes.
              </p>
              <p className="text-foreground leading-relaxed">
                Root Cause Medicine isn't about rejecting conventional medicine - it's about complementing it with a deeper understanding of health and disease. Sometimes medication is necessary and lifesaving, but it should be used thoughtfully, alongside addressing the underlying causes of illness.
              </p>
            </section>

            <section id="approach" className="scroll-mt-20">
              <h2 className="font-serif text-3xl font-bold text-foreground mb-4">
                My Approach
              </h2>
              <p className="text-foreground leading-relaxed mb-4">
                When you work with me, I take time to understand your full health story. We look at:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-foreground mb-4">
                <li>Your symptoms and medical history</li>
                <li>Your diet and lifestyle</li>
                <li>Environmental factors that might be affecting your health</li>
                <li>Underlying imbalances that could be contributing to your condition</li>
              </ul>
              <p className="text-foreground leading-relaxed">
                Together, we develop a personalized plan to address the root causes of your health issues, not just mask the symptoms.
              </p>
            </section>

            <section id="contact" className="scroll-mt-20">
              <h2 className="font-serif text-3xl font-bold text-foreground mb-4">
                Contact Information
              </h2>
              <p className="text-foreground leading-relaxed mb-4">
                If you'd like to learn more about Root Cause Medicine or discuss whether this approach might be right for you, I'd be happy to hear from you.
              </p>
              <div className="bg-muted p-6 rounded-lg">
                <p className="text-foreground font-medium mb-2">Dr. [Your Name]</p>
                <p className="text-foreground">Email: contact@rcmprinciples.com</p>
                <p className="text-foreground">Practice Location: South London</p>
              </div>
            </section>
          </div>
        </main>
      </SidebarLayout>
    </div>
  );
};

export default About;
