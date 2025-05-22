import FAQ2, { FAQItem } from "@/components/faq2";
import { HeroResponsive } from "@/components/hero4";
import { PersonaCarouselAceternity } from "@/components/persona-carousel-aceternity";
import { PERSONAS } from "../sample-components/personas";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import FeatureSection from "../sample-components/feature-section";
import AnimatedSection from "@/components/animated-section";
import Link from "next/link";
import Image from "next/image";

export const VALUE_PROP_FAQS: FAQItem[] = [
  {
    question: "Anatomy of a Website",
    answer: (
      <section className="mb-6 sm:mb-8">
        <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-indigo-700">
          Parts of a Website
        </h2>

        <div className="mb-6 sm:mb-8 bg-white rounded-lg overflow-hidden shadow-md">
          <div className="border border-gray-200 rounded-lg overflow-hidden">
            <img
              src="/images/parts-of-a-website.png"
              alt="Website parts diagram showing header, navigation, hero section, value proposition cards, and footer"
              className="w-full object-contain"
            />
            <div className="p-4 bg-gray-50">
              <p className="text-sm text-gray-600 text-center">
                Diagram showing the key parts of a modern website layout
              </p>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-gray-50 p-4 sm:p-6 rounded-lg border-l-2 border-indigo-300">
            <h3 className="font-bold text-base sm:text-lg mb-2">
              Header/Main Navigation
            </h3>
            <p className="text-sm sm:text-base text-gray-700">
              The header is the top-most element of a website. It displays
              branding information, such as the website logo. It can also
              include the main navigation of a website.
            </p>
          </div>

          <div className="bg-gray-50 p-4 sm:p-6 rounded-lg border-l-2 border-indigo-300">
            <h3 className="font-bold text-base sm:text-lg mb-2">
              Main Navigation
            </h3>
            <p className="text-sm sm:text-base text-gray-700">
              These are the main links to other pages on your website. Here, you
              can find links to an "About" page, the blog section of your site,
              or to a "Resources" page.
            </p>
          </div>

          <div className="bg-gray-50 p-4 sm:p-6 rounded-lg border-l-2 border-indigo-300">
            <h3 className="font-bold text-base sm:text-lg mb-2">
              Hero Section
            </h3>
            <p className="text-sm sm:text-base text-gray-700">
              Right after the header, modern websites display what is called a
              "Hero" section. This section displays a striking, large-format
              image or graphic that sets the tone and message of the website in
              the best possible way. It also includes a large headline that
              summarizes the objectives and value of the website, followed by a
              button or Call-to-Action.
            </p>
          </div>

          <div className="bg-gray-50 p-4 sm:p-6 rounded-lg border-l-2 border-indigo-300">
            <h3 className="font-bold text-base sm:text-lg mb-2">
              Value Proposition Section
            </h3>
            <p className="text-sm sm:text-base text-gray-700">
              Sometimes, right after the Hero Section, we want to further
              communicate the value of the brand or service offered by a
              website. So, we use three or more "cards" that explain in more
              detail what the brand or service can do to solve its audience's
              problems. This is the purpose of this section: To further persuade
              a user to keep on reading or take some kind of action on the
              website.
            </p>
          </div>

          <div className="bg-gray-50 p-4 sm:p-6 rounded-lg border-l-2 border-indigo-300">
            <h3 className="font-bold text-base sm:text-lg mb-2">
              Call to Action
            </h3>
            <p className="text-sm sm:text-base text-gray-700">
              A call to action is a prompt you give your audience to perform
              some desired action. You can have a call to action for someone to
              sign-up to a newsletter, download an ebook, purchase a digital
              product, or click on a specific link. Calls to action are
              typically displayed as a button that literally prompts someone to
              perform a desired outcome.
            </p>
          </div>

          <div className="bg-gray-50 p-4 sm:p-6 rounded-lg border-l-2 border-indigo-300">
            <h3 className="font-bold text-base sm:text-lg mb-2">Footer</h3>
            <p className="text-sm sm:text-base text-gray-700">
              The footer is the bottom-most part of a website. Here, you can
              display links to other pages in your website and, most
              importantly, fine-print information, such as links to privacy
              policies, disclaimers, and copyright information.
            </p>
          </div>
        </div>
      </section>
    ),
  },
  {
    question: "Value Proposition Section",
    answer:
      "A Value Proposition Block is a visual or textual section in a UI—especially common on landing pages—that succinctly communicates why a user should care about your product, service, or organization. It highlights the core benefit, what makes you unique, and how you solve the user’s problem. It's one of the most important elements in conversion-focused design.",
  },
  {
    question: "Why do we need a Value Proposition Section?",
    answer:
      "Research indicates that even the most mindful users frequently exit web pages within the first 10–20 seconds unless they quickly perceive a compelling reason to stay. To retain visitors, it’s crucial to communicate your site’s value proposition clearly and promptly.",
  },
  {
    question: "Anatomy of a Value Proposition Section",
    answer: (
      <section className="mb-6 sm:mb-8">
        <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-indigo-700">
          Elements of the Value Proposition
        </h2>

        <div className="bg-indigo-50 p-4 sm:p-6 rounded-lg mb-6">
          <p className="text-sm sm:text-base italic mb-0">
            You have 5-15 seconds to answer these questions because the visitor
            spends that much time deciding whether to stay on your website. We
            can answer these questions quickly in many ways. On a landing page,
            these elements do it the easiest:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          <div className="bg-white p-4 sm:p-6 rounded-lg border-l-2 border-indigo-300 shadow-sm">
            <h3 className="font-bold text-base sm:text-lg mb-2 text-indigo-600">
              Headline
            </h3>
            <p className="text-sm sm:text-base text-gray-700">
              Make the first thing your customer reads short and informative but
              catchy at the same time.
            </p>
          </div>

          <div className="bg-white p-4 sm:p-6 rounded-lg border-l-2 border-indigo-300 shadow-sm">
            <h3 className="font-bold text-base sm:text-lg mb-2 text-indigo-600">
              Secondary headline
            </h3>
            <p className="text-sm sm:text-base text-gray-700">
              Grabbing their attention, the secondary headline lets you explain
              your offer more specifically.
            </p>
          </div>

          <div className="bg-white p-4 sm:p-6 rounded-lg border-l-2 border-indigo-300 shadow-sm">
            <h3 className="font-bold text-base sm:text-lg mb-2 text-indigo-600">
              Illustration or visual
            </h3>
            <p className="text-sm sm:text-base text-gray-700">
              Images communicate much faster than words. Show the product, the
              hero shot or an image reinforcing your main message. Thousand
              words etc.
            </p>
          </div>

          <div className="bg-white p-4 sm:p-6 rounded-lg border-l-2 border-indigo-300 shadow-sm">
            <h3 className="font-bold text-base sm:text-lg mb-2 text-indigo-600">
              Benefits
            </h3>
            <p className="text-sm sm:text-base text-gray-700">
              List the key benefits or features in three bullet points or
              smaller sections.
            </p>
          </div>
        </div>
        <div className="mb-6 mt-6 sm:mb-8 bg-white rounded-lg overflow-hidden shadow-md">
          <div className="border border-gray-200 rounded-lg overflow-hidden">
            <img
              src="/images/value-proposition.png"
              alt="Website parts diagram showing header, navigation, hero section, value proposition cards, and footer"
              className="w-full object-contain"
            />
            <div className="p-4 bg-gray-50">
              <p className="text-sm text-gray-600 text-center">
                Example of a Value Proposition.
              </p>
            </div>
          </div>
        </div>
      </section>
    ),
  },
  {
    question: "How to create a Value Proposition?",
    answer: (
      <section className="mb-6 sm:mb-8">
        {/* <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-indigo-700">
          How to Create a Value Proposition
        </h2> */}

        <div className="mb-6">
          <ol className="space-y-4 list-decimal pl-6">
            <li className="pl-2">
              <span className="font-semibold text-base sm:text-lg">
                Compassion
              </span>
              <p className="text-sm sm:text-base text-gray-700 mt-1">
                Learn about and understand the user. Construct personas that
                include the user's needs and pain points.
              </p>
            </li>

            <li className="pl-2">
              <span className="font-semibold text-base sm:text-lg">
                Prioritize
              </span>
              <p className="text-sm sm:text-base text-gray-700 mt-1">
                Study personas and decide on which needs and pain points to
                prioritize.
              </p>
            </li>

            <li className="pl-2">
              <span className="font-semibold text-base sm:text-lg">
                Choose visuals and copy
              </span>
              <p className="text-sm sm:text-base text-gray-700 mt-1">
                Carefully select visuals and write copy that can pass the 5
                Second Test.
              </p>
            </li>
          </ol>
        </div>

        <div className="bg-indigo-50 p-5 sm:p-6 rounded-lg border border-indigo-100">
          <h3 className="text-lg sm:text-xl font-bold mb-4 text-indigo-700 flex items-center">
            <span className="bg-indigo-700 text-white p-1 rounded-full flex items-center justify-center h-6 w-6 text-sm mr-2">
              5
            </span>
            The 5-Second Test
          </h3>

          <p className="text-sm sm:text-base mb-4">
            The <strong>5 Second Test</strong> is a usability testing method
            used to gauge what information or impression a person gathers from a
            design (like a website, app screen, or landing page) in just{" "}
            <strong>five seconds</strong>.
          </p>

          <div className="mb-4">
            <h4 className="font-bold text-sm sm:text-base mb-2 flex items-center">
              <span className="text-indigo-500 mr-2">🔍</span>
              How It Works:
            </h4>
            <ul className="text-sm sm:text-base pl-5 list-disc">
              <li className="mb-1">
                A user is shown a design for only <strong>5 seconds</strong>.
              </li>
              <li>
                Afterward, they are asked questions such as:
                <ul className="pl-5 list-disc italic mt-1">
                  <li className="mb-1 text-gray-600">What do you remember?</li>
                  <li className="mb-1 text-gray-600">
                    What was the page about?
                  </li>
                  <li className="mb-1 text-gray-600">
                    What stood out the most?
                  </li>
                  <li className="text-gray-600">
                    What do you think you were supposed to do?
                  </li>
                </ul>
              </li>
            </ul>
          </div>

          <div className="mb-4">
            <h4 className="font-bold text-sm sm:text-base mb-2 flex items-center">
              <span className="text-indigo-500 mr-2">🎯</span>
              Purpose:
            </h4>
            <p className="text-sm sm:text-base pl-5">
              The goal is to evaluate <strong>first impressions</strong> —
              crucial for ensuring your design communicates clearly and
              effectively in the small window when visitors decide whether to
              stay or leave.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-sm sm:text-base mb-2 flex items-center">
              <span className="text-indigo-500 mr-2">🧪</span>
              Common Use Cases:
            </h4>
            <ul className="text-sm sm:text-base pl-5 list-disc">
              <li className="mb-1">
                Testing <strong>landing pages</strong>
              </li>
              <li className="mb-1">
                Evaluating <strong>brand clarity</strong>
              </li>
              <li className="mb-1">
                Checking <strong>call-to-action visibility</strong>
              </li>
              <li>
                Comparing different <strong>design iterations</strong>
              </li>
            </ul>
          </div>
        </div>
      </section>
    ),
  },
];
export default function AboutUsPage() {
  return (
    <>
      <HeroResponsive
        backgroundImageDesktop="/p-MSY_img01.webp"
        backgroundImageMobile="/p-MSY_img01-cropped.webp"
        title=""
        subtitle=""
        alt="value proposition image"
      />
      {/* Content Section with image, 1/2 grid */}
      <section>
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:items-center md:gap-8">
            <div>
              <div className="max-w-lg md:max-w-none">
                <h2 className="text-2xl font-semibold text-gray-900 sm:text-3xl">
                  Content Section with image, 1/2 grid
                </h2>

                <p className="mt-4 text-gray-700">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Tenetur doloremque saepe architecto maiores repudiandae amet
                  perferendis repellendus, reprehenderit voluptas sequi.
                </p>
                <Link
                  href="/personas"
                  className="text-sage-700 hover:text-sage-900 font-medium"
                >
                  Learn more about Master Sheng Yen →
                </Link>
              </div>
            </div>

            <div>
              <img src="/p-MSY_img01-cropped.webp" className="rounded" alt="" />
            </div>
          </div>
        </div>
      </section>

      {/* <FeatureSection /> */}
      {/* 
      <section>
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:items-center md:gap-8">
            <div>
              <div className="max-w-lg md:max-w-none">
                <h2 className="text-2xl font-semibold text-gray-900 sm:text-3xl">
                  Content Section with image, 1/2 grid
                </h2>

                <p className="mt-4 text-gray-700">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Tenetur doloremque saepe architecto maiores repudiandae amet
                  perferendis repellendus, reprehenderit voluptas sequi.
                </p>
                <Link
                  href="/about-us/master-sheng-yen"
                  className="text-sage-700 hover:text-sage-900 font-medium"
                >
                  Learn more about Master Sheng Yen →
                </Link>
              </div>
            </div>

            <div>
              <img
                src="https://images.unsplash.com/photo-1731690415686-e68f78e2b5bd?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                className="rounded"
                alt=""
              />
            </div>
          </div>
        </div>
      </section> */}
      <FAQ2 faqs={VALUE_PROP_FAQS} />
    </>
  );
}
