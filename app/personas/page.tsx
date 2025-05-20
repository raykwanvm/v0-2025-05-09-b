import FAQ, { FAQItem } from "@/components/faq";
import { HeroWaves } from "@/components/hero";
import { PersonaCarouselAceternity } from "@/components/persona-carousel-aceternity";
import { PERSONAS } from "../sample-components/personas";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function Personas() {
  const personaFaqs: FAQItem[] = [
    {
      question: "What are user personas?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
    },
    {
      question: "Duis aute irure dolor in reprehenderit?",
      answer:
        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
  ];
  return (
    <>
      <HeroWaves />
      {/* <FAQ faqs={personaFaqs} /> */}
      <Accordion
        type="single"
        collapsible
        className="w-full max-w-4xl mx-auto px-4 py-8"
      >
        <AccordionItem value="user-empathy">
          <AccordionTrigger className="text-2xl font-bold text-indigo-700">
            Why personas? (click to expand)
          </AccordionTrigger>
          <AccordionContent>
            <article className="max-w-4xl mx-auto px-4 sm:px-6 py-6 sm:py-8 bg-white text-gray-800">
              <div className="mb-6 sm:mb-8">
                <p className="text-base sm:text-lg leading-relaxed mb-6">
                  User empathy is a cornerstone of effective UI/UX design. It
                  involves deeply understanding users' needs, emotions,
                  behaviors, and pain points. This understanding allows
                  designers to craft effective copy and create experiences that
                  are not only functional but also intuitive and meaningful to
                  the people who use them.
                </p>
              </div>

              <section className="mb-6 sm:mb-8">
                <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-indigo-700">
                  Why User Empathy Is Crucial in UI/UX Design
                </h2>
                <ol className="space-y-3 sm:space-y-4 pl-5 sm:pl-6 list-decimal">
                  <li className="pl-1 sm:pl-2">
                    <span className="font-semibold block sm:inline">
                      Aligns Solutions with Real Needs:
                    </span>{" "}
                    <span className="text-sm sm:text-base">
                      Empathy shifts the focus from <em>us</em> to the user,
                      from thinking about what <em>we</em> have to offer to
                      thinking about what the <em>user</em> needs. Without this
                      perspective, it is difficult to design websites that meet
                      user needs.
                    </span>
                  </li>
                  <li className="pl-1 sm:pl-2">
                    <span className="font-semibold block sm:inline">
                      Improves User Satisfaction and Engagement:
                    </span>{" "}
                    <span className="text-sm sm:text-base">
                      Designs informed by empathy are more likely to resonate
                      with users. When users feel understood, they're more
                      likely to engage positively with a website, leading to
                      better retention and satisfaction.
                    </span>
                  </li>
                  <li className="pl-1 sm:pl-2">
                    <span className="font-semibold block sm:inline">
                      Reduces Rework and Development Waste:
                    </span>{" "}
                    <span className="text-sm sm:text-base">
                      If the user perspective is overlooked early on, the result
                      is often costly revisions later. Empathy-driven design
                      helps prevent this by laying a solid foundation based on
                      genuine insights.
                    </span>
                  </li>
                </ol>
              </section>

              <section className="mb-6 sm:mb-8 bg-indigo-50 p-4 sm:p-6 rounded-lg">
                <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-indigo-700">
                  The Critical Role of Personas
                </h2>
                <p className="mb-3 sm:mb-4 text-gray-700 text-sm sm:text-base">
                  Personas are fictional, evidence-based representations of
                  target users. They are essential tools for building user{" "}
                  <b>empathy</b> before any design or technical implementation
                  begins. Here's why personas are indispensable early in the
                  design process:
                </p>
                <ul className="space-y-2 sm:space-y-3 pl-4 sm:pl-5 list-disc text-gray-700">
                  <li className="pl-1 sm:pl-2">
                    <span className="font-semibold block sm:inline">
                      They Humanize the Data:
                    </span>{" "}
                    <span className="text-sm sm:text-base">
                      Personas distill user research into relatable characters
                      that help teams visualize who they're designing for. This
                      makes user needs tangible and keeps them top-of-mind
                      throughout the process.
                    </span>
                  </li>
                  <li className="pl-1 sm:pl-2">
                    <span className="font-semibold block sm:inline">
                      They Inform Design Decisions:
                    </span>{" "}
                    <span className="text-sm sm:text-base">
                      With well-defined personas, every design choice—whether
                      it's layout, color, copywriting, tone, or
                      functionality—can be evaluated against user goals and
                      frustrations, ensuring relevance and clarity.
                    </span>
                  </li>
                  <li className="pl-1 sm:pl-2">
                    <span className="font-semibold block sm:inline">
                      They Guide Prioritization:
                    </span>{" "}
                    <span className="text-sm sm:text-base">
                      Personas help teams focus on what matters most to key
                      users, reducing the risk of misaligned priorities.
                    </span>
                  </li>
                  <li className="pl-1 sm:pl-2">
                    <span className="font-semibold block sm:inline">
                      They Foster Team Alignment:
                    </span>{" "}
                    <span className="text-sm sm:text-base">
                      When software engineers, designers, and stakeholders share
                      a common understanding of user personas, it creates a
                      unified vision and facilitates more empathetic
                      decision-making throughout the development process.
                    </span>
                  </li>
                </ul>
              </section>

              <section className="mb-6 sm:mb-8">
                <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-indigo-700">
                  Empathy Comes Before Implementation
                </h2>
                <p className="text-sm sm:text-base text-gray-700 mb-4">
                  Empathy must be established <em>before</em> development
                  begins, not as an afterthought. Software engineers benefit
                  greatly from early exposure to personas because it informs
                  technical decisions that impact user experience. Without this
                  empathy, even well-built websites can miss the mark
                  functionally or emotionally.
                </p>
              </section>

              <div className="bg-indigo-100 p-4 sm:p-6 rounded-lg border-l-2 sm:border-l-4 border-indigo-500">
                <p className="font-medium text-sm sm:text-base text-gray-800">
                  In summary, user empathy is not just a design best practice—it
                  is a strategic imperative. Using personas to build empathy
                  early ensures that UI/UX efforts are grounded in real human
                  needs and that development efforts are focused, efficient, and
                  impactful.
                </p>
              </div>
            </article>
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      <PersonaCarouselAceternity personas={PERSONAS} />
    </>
  );
}
