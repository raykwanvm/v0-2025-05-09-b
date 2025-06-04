import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import AnimatedSection from "@/components/animated-section";
import Link from "next/link";

export default function FeatureSection() {
  const features = [
    {
      title: "Feature One",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      title: "Feature Two",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      title: "Feature Three",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      title: "Feature Four",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
  ];

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-clay-50">
      <div className="container px-4 md:px-6">
        <div className="grid gap-8 lg:grid-cols-[1fr_2fr] items-start">
          {/* Left side - Header */}
          <AnimatedSection className="space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight text-sage-800">
              Feature Section
            </h2>
            <p className="text-stone-700 max-w-md">
              Discover the unique features that set our approach apart. Our
              meditation methods are designed to help you find balance and
              clarity in your daily life.
            </p>
            <Link
              href="/about-us"
              className="text-sage-700 hover:text-sage-900 font-medium"
            >
              Learn more about our approach →
            </Link>
          </AnimatedSection>

          {/* Right side - Feature Cards */}
          <div className="grid gap-4 sm:grid-cols-2">
            {features.map((feature, index) => (
              <AnimatedSection
                key={index}
                delay={0.1 * index}
                className="h-full"
              >
                <Card className="h-full border-sage-200 transition-all duration-300 hover:shadow-md hover:-translate-y-1">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-moss-700">
                      {feature.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-stone-600">{feature.description}</p>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function WelcomeSection() {
  // const features = [
  //   {
  //     title: "Modern Zen",
  //     description:
  //       "[Something about how our form of Chan is adaptable and relevant to modern life (to address concerns that Zen/Chan/Buddhism is too conservative, traditional, or not practical)]",
  //   },
  //   {
  //     title: "Rooted in Tradition",
  //     description:
  //       "[Something to signal tradition and authenticity. Inheritors of Caodong and Linji lineages through Master Sheng Yen? Maybe also mention Early Buddhism to address concerns that Mahayana is not 'real' Buddhism?]",
  //   },
  //   {
  //     title: "Feature 3: Movement/Body Practices?",
  //     description:
  //       "[We teach 'just sitting', but we don't just sit. Something about how we emphasize the importance of self-care through movement and body practices: 8-form, relaxation, self-massage, etc?]",
  //   },
  //   {
  //     title: "Feature 4: Spiritual Environmentalism?",
  //     description: `Condense and simplify these? "Benefit others and you benefit yourself." ... "Chan practitioners are clear and systematic in mind. Formlessness and the unity of the inner and outer world do not confuse them or make them fuzzy-minded. They can see the outer world selflessly and deal with it properly. A Chan practitioner with wisdom, without self-interest, can be truly objective when confronting people and situations. His or her judgment is good and his or her understanding is clear. He or she influences other people by making him or herself an example for them. That is practicing the Bodhisattva way." - Master Sheng Yen`,
  //   },
  // ];
  const features = [
    {
      title: "Modern Zen",
      description: `[Something about how our form of Chan is adaptable and relevant to modern life (to address concerns that Zen/Chan/Buddhism is too conservative, traditional, or not practical). Inspiration: "Chinese Chan Buddhism is by nature inclusive and adaptive to the changing needs of people and society...universally relevant to our pluralistic modern society, cultures, and religious identities...]"`,
    },
    {
      title: "Rooted in Tradition",
      description: `[Something to signal tradition and authenticity. Caodong and Linji lineages. Why mention Early Buddhism? We offer Zen deeply rooted in Agamas -- not common and a major selling point to those looking for authenticity. Inspiration: "The Chan teaching of Dharma Drum Mountain is a blend of the Āgamas with the special teachings of traditional Chinese Chan, while accommodating the needs of modern times and environments. In this sense, the basic attitude of our tradition is open to changes, but in terms of concept and methods our foundation is squarely centered on traditional Chinese Chan."]`,
    },
    {
      title: "Show Up in Life",
      description:
        "[Practical tools meant to be used in the real world, not just on a mountain. Not an escape from your problems but tools to face, embrace, and deal with, and let go of your problems.]",
    },
    {
      title: "We teach just sitting, but we don't just sit",
      description: `[mention diversity, breadth, and depth of what we have to offer]`,
    },
  ];

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-clay-50">
      <div className="container px-4 md:px-6">
        <div className="grid gap-8 lg:grid-cols-[1fr_2fr] items-start">
          {/* Left side - Header */}
          <AnimatedSection className="space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight text-sage-800">
              [Welcome Section]
            </h2>
            <p className="text-stone-700 max-w-md">
              [Short welcome message introducing DDMC]
              <ul>
                <li>- who we are</li>
                <li>- what we do</li>
                <li>- what sets us apart</li>
              </ul>
            </p>
            <p>
              This section can also be used as a Value Proposition Section
              (which should always appear immediately below the Hero). If the
              content on the right is not needed for the value proposition, we
              can swap it out for a carefully selected image. Some ideas: list
              practices unique to DDM (direct contemplation, somatic practices
              like slow prostrations, etc), Spiritual Environmentalism, etc)
            </p>
            {/* <p className="text-stone-700 max-w-md">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
            </p> */}
            {/* <p className="text-stone-700 max-w-md">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Vestibulum egestas felis tortor, ac pulvinar risus volutpat id.
              Vivamus sit amet turpis et enim vestibulum accumsan. Vivamus
              mollis lobortis ex, id porta lorem auctor non.
            </p> */}
            {/* <Link
              href="/about-us"
              className="text-sage-700 hover:text-sage-900 font-medium mt-3"
            >
              Learn more →
            </Link> */}
            <Link
              className="mt-3 inline-flex items-center gap-x-1 text-sm font-semibold rounded-lg border border-transparent text-blue-600 decoration-2 hover:text-blue-700 hover:underline focus:underline focus:outline-hidden focus:text-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:text-blue-500 dark:hover:text-blue-600 dark:focus:text-blue-600"
              href="/about-us"
            >
              Learn more
              <svg
                className="shrink-0 size-4"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="m9 18 6-6-6-6"></path>
              </svg>
            </Link>
          </AnimatedSection>

          {/* Right side - Feature Cards */}
          <div className="grid gap-4 sm:grid-cols-2">
            {features.map((feature, index) => (
              <AnimatedSection
                key={index}
                delay={0.1 * index}
                className="h-full"
              >
                <Card className="h-full border-sage-200 transition-all duration-300 hover:shadow-md hover:-translate-y-1">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-moss-700">
                      {feature.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-stone-600">{feature.description}</p>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function WelcomeSectionNew() {
  // const features = [
  //   {
  //     title: "Modern Zen",
  //     description:
  //       "[Something about how our form of Chan is adaptable and relevant to modern life (to address concerns that Zen/Chan/Buddhism is too conservative, traditional, or not practical)]",
  //   },
  //   {
  //     title: "Rooted in Tradition",
  //     description:
  //       "[Something to signal tradition and authenticity. Inheritors of Caodong and Linji lineages through Master Sheng Yen? Maybe also mention Early Buddhism to address concerns that Mahayana is not 'real' Buddhism?]",
  //   },
  //   {
  //     title: "Feature 3: Movement/Body Practices?",
  //     description:
  //       "[We teach 'just sitting', but we don't just sit. Something about how we emphasize the importance of self-care through movement and body practices: 8-form, relaxation, self-massage, etc?]",
  //   },
  //   {
  //     title: "Feature 4: Spiritual Environmentalism?",
  //     description: `Condense and simplify these? "Benefit others and you benefit yourself." ... "Chan practitioners are clear and systematic in mind. Formlessness and the unity of the inner and outer world do not confuse them or make them fuzzy-minded. They can see the outer world selflessly and deal with it properly. A Chan practitioner with wisdom, without self-interest, can be truly objective when confronting people and situations. His or her judgment is good and his or her understanding is clear. He or she influences other people by making him or herself an example for them. That is practicing the Bodhisattva way." - Master Sheng Yen`,
  //   },
  // ];
  const features = [
    {
      title: "Modern Zen",
      description: `[Something about how our form of Chan is adaptable and relevant to modern life (to address concerns that Zen/Chan/Buddhism is too conservative, traditional, or not practical). Inspiration: "Chinese Chan Buddhism is by nature inclusive and adaptive to the changing needs of people and society...universally relevant to our pluralistic modern society, cultures, and religious identities...]"`,
    },
    {
      title: "Rooted in Tradition",
      description: `[Something to signal tradition and authenticity. Caodong and Linji lineages. Why mention Early Buddhism? We offer Zen deeply rooted in Agamas -- not common and a major selling point to those looking for authenticity. Inspiration: "The Chan teaching of Dharma Drum Mountain is a blend of the Āgamas with the special teachings of traditional Chinese Chan, while accommodating the needs of modern times and environments. In this sense, the basic attitude of our tradition is open to changes, but in terms of concept and methods our foundation is squarely centered on traditional Chinese Chan."]`,
    },
    {
      title: "Show Up in Life",
      description:
        "[Practical tools meant to be used in the real world, not just on a mountain. Not an escape from your problems but tools to face, embrace, and deal with, and let go of your problems.]",
    },
    {
      title: "We teach just sitting, but we don't just sit",
      description: `[mention diversity, breadth, and depth of what we have to offer]`,
    },
  ];

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-clay-50">
      <div className="container px-4 md:px-6">
        <div className="grid gap-8 lg:grid-cols-[1fr_2fr] items-start">
          {/* Left side - Header */}
          <AnimatedSection className="space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight text-sage-800">
              [Welcome Section]
            </h2>
            <p className="text-stone-700 max-w-md">
              [Short welcome message introducing DDMC]
              <ul>
                <li>- who we are</li>
                <li>- what we do</li>
                <li>- what sets us apart</li>
              </ul>
            </p>
            <p>
              This section can also be used as a Value Proposition Section
              (which should always appear immediately below the Hero). If the
              content on the right is not needed for the value proposition, we
              can swap it out for a carefully selected image. Some ideas: list
              practices unique to DDM (direct contemplation, somatic practices
              like slow prostrations, etc), Spiritual Environmentalism, etc)
            </p>
            {/* <p className="text-stone-700 max-w-md">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
            </p> */}
            {/* <p className="text-stone-700 max-w-md">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Vestibulum egestas felis tortor, ac pulvinar risus volutpat id.
              Vivamus sit amet turpis et enim vestibulum accumsan. Vivamus
              mollis lobortis ex, id porta lorem auctor non.
            </p> */}
            {/* <Link
              href="/about-us"
              className="text-sage-700 hover:text-sage-900 font-medium mt-3"
            >
              Learn more →
            </Link> */}
            <Link
              className="mt-3 inline-flex items-center gap-x-1 text-sm font-semibold rounded-lg border border-transparent text-blue-600 decoration-2 hover:text-blue-700 hover:underline focus:underline focus:outline-hidden focus:text-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:text-blue-500 dark:hover:text-blue-600 dark:focus:text-blue-600"
              href="/about-us"
            >
              Learn more
              <svg
                className="shrink-0 size-4"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="m9 18 6-6-6-6"></path>
              </svg>
            </Link>
          </AnimatedSection>

          {/* Right side - Feature Cards */}
          <div className="grid gap-4 sm:grid-cols-2">
            {features.map((feature, index) => (
              <AnimatedSection
                key={index}
                delay={0.1 * index}
                className="h-full"
              >
                <Card className="h-full border-sage-200 transition-all duration-300 hover:shadow-md hover:-translate-y-1">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-moss-700">
                      {feature.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-stone-600">{feature.description}</p>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
