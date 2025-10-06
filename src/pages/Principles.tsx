import Navigation from "@/components/Navigation";
import SidebarLayout from "@/components/SidebarLayout";
import CrossLinks from "@/components/CrossLinks";
import { Link } from "react-router-dom";

const principlesToc = [
  { id: "principle-1", label: "1. Focusing on Root Causes" },
  { id: "principle-2", label: "2. Self-protecting and Self-healing Body" },
  { id: "principle-3", label: "3. Health over Absence of Disease" },
  { id: "principle-4", label: "4. Natural over Artificial" },
  { id: "principle-5", label: "5. Physics over Chemistry" },
  { id: "principle-6", label: "6. Long-term over Short-term" },
  { id: "principle-7", label: "7. Immunity is Key" },
  { id: "principle-8", label: "8. Doctors Advise, Patients Take Responsibility" },
  { id: "principle-9", label: "9. Environment Affects Everything" },
  { id: "principle-10", label: "10. Food Is Always a Root Cause" },
  { id: "principle-11", label: "11. Microorganisms Are Essential" },
  { id: "principle-12", label: "12. Avoiding Effects of the Root Conflict of Interest" },
];

const Principles = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <SidebarLayout tocItems={principlesToc} rightSidebar={<CrossLinks context="principles" />}>
        <main className="py-12">
          <h1 className="font-serif text-4xl font-bold text-foreground md:text-5xl mb-8">
            12 Root Cause Medicine Principles
          </h1>
          
          <div className="mb-12 text-lg text-foreground leading-relaxed">
            <p>
              There are many methods, procedures and protocols in various systems of medicine, but only a limited number of core principles that underlie those that work. If you learn these principles, you'll be able to tell which approaches can work in the long run and which can't. You may still need a doctor on your side, but you'll understand the big picture and recognize the important role that you play in regaining and maintaining your health. After reading the 12 Root Cause Medicine Principles, you'll get an understanding of health and medicine that took me 14 years of study and research to grasp fully. Make use of that time!
            </p>
            <p className="mt-4">
              So let's start with the most important principle …
            </p>
          </div>
          
          <div className="space-y-16">
            <section id="principle-1" className="scroll-mt-20">
              <h2 className="font-serif text-3xl font-bold text-foreground mb-4">
                1. Focusing on Root Causes
              </h2>
              <p className="text-lg text-foreground leading-relaxed mb-4">
                To regain health, remove Root Causes of Illness and introduce Root Causes of Health. Root Causes of Illness create disturbances, imbalances and disharmony in the body, which ultimately leads to various signs and symptoms of a disease. The Root Causes of Health, on the other hand, are restoring balance, harmony and self-healing abilities of the body.
              </p>
              <p className="text-foreground leading-relaxed mb-4">
                The right path to regaining health is, therefore, simple – removing the Root Causes of Illness and introducing the Root Causes of Health. This approach contrasts with merely suppressing the signs and symptoms of a disease, which leaves the underlying issues unchecked and continues to harm the body.
              </p>
              <p className="text-foreground leading-relaxed">
                The gist of the First Root Cause Medicine Principle is simple: Remove Root Causes of Illness and introduce the Root Causes of Health. It's common sense, but unfortunately, not common practice.
              </p>
            </section>

            <section id="principle-2" className="scroll-mt-20">
              <h2 className="font-serif text-3xl font-bold text-foreground mb-4">
                2. Self-protecting and Self-healing Body
              </h2>
              <p className="text-lg text-foreground leading-relaxed mb-4">
                The body protects and heals itself, so support this process and don't fight against it.
              </p>
              <p className="text-foreground leading-relaxed mb-4">
                The body is a very intelligent system designed to protect and heal itself, with a degree of sophistication several orders of magnitude higher than the current level of science. All therapeutic efforts should, therefore, aim at supporting and enhancing the self-protecting and self-healing processes, as opposed to fighting against them.
              </p>
              <p className="text-foreground leading-relaxed mb-4">
                The only exceptions are emergency situations in which the body clearly overreacts, such as acute allergic reactions or cytokine storms.
              </p>
              <p className="text-foreground leading-relaxed">
                We've all experienced healing from a cut or scratch. We didn't have to tell our bodies what to do – it knew exactly how to respond. While we might help the healing process by cleaning the wound or stitching it if needed, interfering with the healing itself would only make things worse.
              </p>
            </section>

            <section id="principle-3" className="scroll-mt-20">
              <h2 className="font-serif text-3xl font-bold text-foreground mb-4">
                3. Health over Absence of Disease
              </h2>
              <p className="text-lg text-foreground leading-relaxed mb-4">
                Focus on regaining and maintaining health, not merely on dealing with any particular disease.
              </p>
              <p className="text-foreground leading-relaxed mb-4">
                Each disease name is basically just a label for a particular pattern of signs and symptoms. Whatever these signs and symptoms are, they don't appear by a stroke of bad luck, but have underlying root causes.
              </p>
              <p className="text-foreground leading-relaxed mb-4">
                With a disease-oriented focus, doctors and patients are primarily interested in the disappearance of related signs and symptoms, which often leads to suppressing them pharmaceutically, without addressing their root causes. The problem with that approach is that the root causes of illness will then express themselves as different signs and symptoms, which are again suppressed pharmaceutically – and the vicious circle continues.
              </p>
              <p className="text-foreground leading-relaxed">
                By removing the root causes of illness and introducing the root causes of health, you can not only recover from a particular disease but also prevent all other diseases. As the saying goes, an ounce of prevention is worth a pound of cure!
              </p>
            </section>

            <section id="principle-4" className="scroll-mt-20">
              <h2 className="font-serif text-3xl font-bold text-foreground mb-4">
                4. Natural over Artificial
              </h2>
              <p className="text-lg text-foreground leading-relaxed mb-4">
                Favor natural or nature-mimicking over artificial or synthetic. Favoring natural doesn't mean that everything natural is good and everything non-natural is bad. It means that when you have a choice, go for the more natural alternatives unless you have a compelling reason not to.
              </p>
              <p className="text-foreground leading-relaxed mb-4">
                When it comes to long-term health, natural compounds, procedures and processes are generally safer and more effective than their man-made counterparts.
              </p>
              <p className="text-foreground leading-relaxed">
                Natural substances have a broader spectrum of bioactive compounds and are in better balance and harmony than their synthetic versions (which usually contain only the main active ingredient, but a lot of artificial additives). As a simple example, a natural form of vitamin C (fruits, vegetables, or their extracts in capsules) is always better than its synthetic version.
              </p>
            </section>

            <section id="principle-5" className="scroll-mt-20">
              <h2 className="font-serif text-3xl font-bold text-foreground mb-4">
                5. Physics over Chemistry
              </h2>
              <p className="text-lg text-foreground leading-relaxed mb-4">
                Understand the human body within an energy paradigm and favor physics-based over pharmaceutical therapies.
              </p>
              <p className="text-foreground leading-relaxed mb-4">
                There's no life without energy. The human body uses energy for various activities, prioritizing keeping its internal environment in balance, extracting energy from food, reacting to danger, and protecting itself against pathogens and toxins.
              </p>
              <p className="text-foreground leading-relaxed mb-4">
                Understanding the human body within an energy paradigm means understanding that most of biochemistry revolves around energy, such as the extraction of energy from food, transforming it into ATP (the body's "energy currency") and using the ATP energy to sustain each individual's life, both short-term and long-term.
              </p>
              <p className="text-foreground leading-relaxed">
                Working on this deeper level, which includes the subatomic and quantum realms, is therefore more effective than interfering with biochemical processes through pharmaceuticals.
              </p>
            </section>

            <section id="principle-6" className="scroll-mt-20">
              <h2 className="font-serif text-3xl font-bold text-foreground mb-4">
                6. Long-term over Short-term
              </h2>
              <p className="text-lg text-foreground leading-relaxed mb-4">
                Go for long-term health rather than short-term results. Requiring quick results for little or no effort is one of the traps of modern society.
              </p>
              <p className="text-foreground leading-relaxed mb-4">
                Root causes of illness, and deficiencies in root causes of health, usually affect individuals for years, sometimes even decades. Under such circumstances, can we expect a dramatic change in health right after just starting to deal with the root causes? The answer is no, of course not.
              </p>
              <p className="text-foreground leading-relaxed mb-4">
                But we can expect first positive changes within a matter of weeks and regaining health in a matter of months or – in more severe cases – within one or two years, if the relevant root causes are being addressed and there was no permanent damage at the beginning.
              </p>
              <p className="text-foreground leading-relaxed">
                As a rule of thumb, what works best in the short term works worst in the long term. Keep that in mind. The choice is usually "easy now – hard later" or "hard now – easy later." Think long-term, and your initial pain and discomfort will pay off.
              </p>
            </section>

            <section id="principle-7" className="scroll-mt-20">
              <h2 className="font-serif text-3xl font-bold text-foreground mb-4">
                7. Immunity is Key
              </h2>
              <p className="text-lg text-foreground leading-relaxed mb-4">
                Long-term health depends primarily on well-functioning immunity, so keep training, supporting, and protecting your immunity on a regular basis.
              </p>
              <p className="text-foreground leading-relaxed mb-4">
                The immune system is the key component of your self-protecting and self-healing body. It protects you not only against various infections but – crucially – against cancer as well. Last but not least, the immune system also facilitates regeneration and healing by removing damaged and old cells so they can be replaced by new cells.
              </p>
              <p className="text-foreground leading-relaxed mb-4">
                You train your immune system by reasonably exposing it to diversity and adversity on a reasonable basis. This includes diverse healthy food, diverse natural environments, diverse gut microbiome, diverse temperatures (such as taking cold showers and saunas), diverse people you're meeting and, last but not least, diverse animals, helminths, microbes and viruses you're in contact with.
              </p>
              <p className="text-foreground leading-relaxed">
                You support your immune system by providing your body with vitamins, minerals, and other compounds that contribute to the proper function of the immune system, such as vitamin C, vitamin D, zinc, and selenium.
              </p>
            </section>

            <section id="principle-8" className="scroll-mt-20">
              <h2 className="font-serif text-3xl font-bold text-foreground mb-4">
                8. Doctors Advise, Patients Take Responsibility
              </h2>
              <p className="text-lg text-foreground leading-relaxed mb-4">
                Healthcare professionals provide the expert guidance needed, but it's the patients who have the final responsibility for their own health. Root Cause Medicine is based on mutual cooperation and respect between doctors and patients.
              </p>
              <p className="text-foreground leading-relaxed mb-4">
                Doctors should always empower their patients, guiding them towards everything the patients can personally do to regain their health, as opposed to converting them into passive recipients of pharmaceutical products or surgical procedures.
              </p>
              <p className="text-foreground leading-relaxed mb-4">
                An empowered patient knows what he or she can proactively do for their health, being guided by a healthcare professional who respects the patient's choices and values.
              </p>
              <p className="text-foreground leading-relaxed">
                Most importantly, however, taking responsibility requires each patient to do the "homework" needed to regain and maintain one's health. As the saying goes, nothing works unless YOU work!
              </p>
            </section>

            <section id="principle-9" className="scroll-mt-20">
              <h2 className="font-serif text-3xl font-bold text-foreground mb-4">
                9. Environment Affects Everything
              </h2>
              <p className="text-lg text-foreground leading-relaxed mb-4">
                To change cells, organs, the human body, individuals, the medical profession, the population at large, or anything, you have to change the respective environment.
              </p>
              <p className="text-foreground leading-relaxed mb-4">
                Any environment affects everything it surrounds. If an undifferentiated cell ends up in liver tissue, it'll become a liver cell. If the very same cell lands in your skin instead, it'll turn into a skin cell. If you keep subjecting cells to toxic or otherwise unnatural conditions, they will become cancerous.
              </p>
              <p className="text-foreground leading-relaxed mb-4">
                Your beliefs, thoughts, and emotions also create an environment. If you believe something will help you, it is more likely to help you, whether it's a placebo or not. If you fear a virus, the emotion of fear creates an environment that suppresses your immune system, and you're more likely to get infected by that virus.
              </p>
              <p className="text-foreground leading-relaxed">
                Then there are "classic" elements of the environment such as air quality, temperature, humidity, light, and electromagnetic fields, each affecting us on all levels.
              </p>
            </section>

            <section id="principle-10" className="scroll-mt-20">
              <h2 className="font-serif text-3xl font-bold text-foreground mb-4">
                10. Food Is Always a Root Cause
              </h2>
              <p className="text-lg text-foreground leading-relaxed mb-4">
                Any food belongs either to the root causes of illness or the root causes of health, so keep making the right food choices.
              </p>
              <p className="text-foreground leading-relaxed mb-4">
                Everything you eat pulls you either toward health or toward disease; there's nothing in between.
              </p>
              <p className="text-foreground leading-relaxed mb-4">
                Eating proper food consistently is essential for recovery from any disease, as well as for maintaining long-term health. On the flip side, unhealthy food is one of the most significant causes of chronic illness.
              </p>
              <p className="text-foreground leading-relaxed">
                Our health is a reflection of what we do on a regular basis, and eating food is one of the most recurring things in our lives – that's why food is so important.
              </p>
            </section>

            <section id="principle-11" className="scroll-mt-20">
              <h2 className="font-serif text-3xl font-bold text-foreground mb-4">
                11. Microorganisms Are Essential
              </h2>
              <p className="text-lg text-foreground leading-relaxed mb-4">
                There is no health without constant interaction with microorganisms inside, outside, and on our bodies.
              </p>
              <p className="text-foreground leading-relaxed mb-4">
                Microorganisms like bacteria and viruses have lived on Earth for billions of years. They are the foundation of life on Earth; no higher form of life could evolve without them.
              </p>
              <p className="text-foreground leading-relaxed mb-4">
                The human body hosts vast microbial communities called the microbiome. There are more bacterial cells than human cells in a healthy body, and more than 140,000 different virus species in a healthy person's gut.
              </p>
              <p className="text-foreground leading-relaxed">
                The primary role of the human microbiome is to continuously train and regulate our immune system. On top of training by "friendly" microbiome, frequent encounters with naturally occurring pathogens are needed for our immune system to function at its optimal level.
              </p>
            </section>

            <section id="principle-12" className="scroll-mt-20">
              <h2 className="font-serif text-3xl font-bold text-foreground mb-4">
                12. Avoiding Effects of the Root Conflict of Interest
              </h2>
              <p className="text-lg text-foreground leading-relaxed mb-4">
                Be aware of the Root Conflict of Interest in medicine, and don't let it influence any of your health-related decisions. As in other areas of human endeavor, all incentives in healthcare should be directed toward the desired outcome – a patient cured, the population getting healthier.
              </p>
              <p className="text-foreground leading-relaxed mb-4">
                Unfortunately, the current healthcare system is controlled mainly by pharmaceutical companies, who have no incentive to cure patients but instead to treat them continually with their products – ideally for the rest of the patients' lives. For pharmaceutical companies, a patient cured is a customer lost. They're not looking for cures but for increased revenues. I call this the Root Conflict of Interest in medicine.
              </p>
              <p className="text-foreground leading-relaxed">
                If you want to regain health—whether your own or your patients'—always be aware of the Root Conflict of Interest in medicine and, as a rule, address the root causes rather than merely covering signs and symptoms of diseases with pharmaceuticals.
              </p>
            </section>
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
