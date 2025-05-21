import FeatureSection, { WelcomeSection } from "./feature-section";
import HeroMountains from "./hero-mountains";
import FeaturesWithSquareImages from "./features-with-square-images";
import Hero from "@/components/hero";
import FeaturesV0Orig from "@/components/features-v0-orig";
import FeaturesGrid, { Feature } from "@/components/features-grid";
import { BlockquotePrelineLarge } from "@/components/preline/blockquote";
import { PersonaCarousel } from "./persona-carousel";
import { PersonaCarousel2 } from "@/components/persona-carousel";
import { PERSONAS } from "./personas";
import { PersonaCarouselAceternity } from "@/components/persona-carousel-aceternity";
export default function SampleComponets() {
  const features1: Feature[] = [
    {
      title: "Meditate",
      description:
        "A free place for you to meditate in the heart of NYC. We offer morning and evening meditation sessions as well as monthly 1-day retreats.",
      imageSrc: "/zarko/zendo.webp",
      link: "/features/feature-1",
    },
    {
      title: "Learn",
      description:
        "Free classes and workshops for meditators of all levels. We teach a variety of meditation methods that are useful for modern life and modern minds.",
      imageSrc: "/zarko/learn.webp",
      link: "/features/feature-2",
    },
    {
      title: "Connect",
      description:
        "[Something about how the community we will offer: welcoming and inclusive. Make spiritual seekers, atheists, and formerly religious people feel welcome.]",
      imageSrc: "/zarko/community.webp",
      link: "/features/feature-3",
    },
  ];

  const features2: Feature[] = [
    {
      title: "Feature 4",
      description:
        "[Maybe something about how the DDM's Chan is both modern and deeply rooted in tradition -- adaptable to the needs of the modern world, adaptable to the needs of practitioners of differing dispositions/ability levels, religious backgrounds (make atheists feel welcome), etc.]",
      imageSrc: "/zarko/calming-mind-white.webp",
      link: "/features/feature-4",
    },
    {
      title: "Feature 5",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
      imageSrc: "/zarko/flower.webp",
      link: "/features/feature-5",
    },
    {
      title: "Feature 6",
      description:
        // "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
        "[Maybe something about how the DDM's Chan is both modern and deeply rooted in tradition? Adaptable. Inclusive. Useful.",
      imageSrc: "/zarko/mahakasyapa.webp",
      link: "/features/feature-6",
    },
  ];

  return (
    <>
      <Hero />
      {/* <HeroMountains /> */}
      {/* Details List */}
      <FeaturesGrid
        features={features1}
        header="Value Proposition Section"
        subHeader="3 ways we will benefit the sentient user. From the USER PERSPECTIVE, answer the following questions within 15 seconds: (1) What is DDMC? (2) Why should I care? How is this relevant to my life? (3) Why DDMC?"
      />
      {/* <FeaturesWithSquareImages /> */}
      <WelcomeSection />
      <FeaturesGrid
        features={features2}
        header="[Feature Section]"
        // header="[Feature]"
      />
      <FeatureSection />
      {/* <BlockquotePrelineLarge text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris" /> */}

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
      </section>
      {/* Content Section with image, 2/3 grid */}
      <section>
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-4 md:items-center md:gap-8">
            <div className="md:col-span-1">
              <div className="max-w-lg md:max-w-none">
                <h2 className="text-2xl font-semibold text-gray-900 sm:text-3xl">
                  Content Section with image, 2/3 grid
                </h2>

                <p className="mt-4 text-gray-700">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Tenetur doloremque saepe architecto maiores repudiandae amet
                  perferendis repellendus, reprehenderit voluptas sequi.
                </p>
              </div>
            </div>

            <div className="md:col-span-3">
              <img
                src="https://images.unsplash.com/photo-1731690415686-e68f78e2b5bd?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                className="rounded"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
      {/* Content Section with image, 3/2 grid */}
      <section>
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-4 md:items-center md:gap-8">
            <div className="md:col-span-3">
              <img
                src="https://images.unsplash.com/photo-1731690415686-e68f78e2b5bd?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                className="rounded"
                alt=""
              />
            </div>

            <div className="md:col-span-1">
              <div className="max-w-lg md:max-w-none">
                <h2 className="text-2xl font-semibold text-gray-900 sm:text-3xl">
                  Content Section with image, 3/2 grid
                </h2>

                <p className="mt-4 text-gray-700">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Tenetur doloremque saepe architecto maiores repudiandae amet
                  perferendis repellendus, reprehenderit voluptas sequi.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
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
              </div>
            </div>

            <div>
              <img
                src="/images/master-sheng-yen-lr.jpg"
                className="rounded"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
      {/* <PersonaCarousel /> */}
      {/* <PersonaCarousel2 personas={PERSONAS} /> */}
      <PersonaCarouselAceternity personas={PERSONAS} />
    </>
  );
}

export function HyperUiDetailsList() {
  return (
    <div className="flow-root">
      <dl className="-my-3 divide-y divide-gray-200 text-sm">
        <div className="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
          <dt className="font-medium text-gray-900">Title</dt>

          <dd className="text-gray-700 sm:col-span-2">Mr</dd>
        </div>

        <div className="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
          <dt className="font-medium text-gray-900">Name</dt>

          <dd className="text-gray-700 sm:col-span-2">John Frusciante</dd>
        </div>

        <div className="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
          <dt className="font-medium text-gray-900">Occupation</dt>

          <dd className="text-gray-700 sm:col-span-2">Guitarist</dd>
        </div>

        <div className="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
          <dt className="font-medium text-gray-900">Salary</dt>

          <dd className="text-gray-700 sm:col-span-2">$1,000,000+</dd>
        </div>

        <div className="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
          <dt className="font-medium text-gray-900">Bio</dt>

          <dd className="text-gray-700 sm:col-span-2">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et facilis
            debitis explicabo doloremque impedit nesciunt dolorem facere, dolor
            quasi veritatis quia fugit aperiam aspernatur neque molestiae labore
            aliquam soluta architecto?
          </dd>
        </div>
      </dl>
    </div>
  );
}

export function HyperUiCard() {
  // https://www.hyperui.dev/components/marketing/cards
  // return (
  //   <a href="#" className="block">
  //     <img
  //       alt=""
  //       src="https://images.unsplash.com/photo-1605721911519-3dfeb3be25e7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
  //       className="h-64 w-full object-cover sm:h-80 lg:h-96"
  //     />

  //     <h3 className="mt-4 text-lg font-bold text-gray-900 sm:text-xl">
  //       Lorem, ipsum dolor.
  //     </h3>

  //     <p className="mt-2 max-w-sm text-gray-700">
  //       {/* Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni
  //       reiciendis sequi ipsam incidunt. */}
  //       <div className="p-4">
  //         <HyperUiDetailsList />
  //       </div>
  //     </p>
  //   </a>
  // );

  return (
    <>
      <span
        href="#"
        className="block rounded-lg p-4 shadow-xs shadow-indigo-100"
      >
        <img
          alt=""
          // src="https://images.unsplash.com/photo-1613545325278-f24b0cae1224?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
          src="/zarko/vrijednosti-1-2.png"
          className="h-56 w-full rounded-md object-cover"
        />

        <div className="mt-2">
          <dl>
            <div>
              <dt className="sr-only">Price</dt>

              <dd className="text-sm text-gray-500">$240,000</dd>
            </div>

            <div>
              <dt className="sr-only">Address</dt>

              <dd className="font-medium">123 Wallaby Avenue, Park Road</dd>
            </div>
          </dl>

          <div className="mt-6 flex items-center gap-8 text-xs">
            <div className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
              <svg
                className="size-4 text-indigo-700"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z"
                />
              </svg>

              <div className="mt-1.5 sm:mt-0">
                <p className="text-gray-500">Parking</p>

                <p className="font-medium">2 spaces</p>
              </div>
            </div>

            <div className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
              <svg
                className="size-4 text-indigo-700"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                />
              </svg>

              <div className="mt-1.5 sm:mt-0">
                <p className="text-gray-500">Bathroom</p>

                <p className="font-medium">2 rooms</p>
              </div>
            </div>

            <div className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
              <svg
                className="size-4 text-indigo-700"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                />
              </svg>

              <div className="mt-1.5 sm:mt-0">
                <p className="text-gray-500">Bedroom</p>

                <p className="font-medium">4 rooms</p>
              </div>
            </div>
          </div>
        </div>
      </span>
    </>
  );

  // Bordered with image, title, excerpt, CTA
  return (
    <article className="rounded-lg border border-gray-100 bg-white p-4 shadow-xs transition hover:shadow-lg sm:p-6">
      <span className="inline-block rounded-sm bg-blue-600 p-2 text-white">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="size-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M12 14l9-5-9-5-9 5 9 5z" />
          <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
          />
        </svg>
      </span>

      <a href="#">
        <h3 className="mt-0.5 text-lg font-medium text-gray-900">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit.
        </h3>
      </a>

      <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae
        dolores, possimus pariatur animi temporibus nesciunt praesentium dolore
        sed nulla ipsum eveniet corporis quidem, mollitia itaque minus soluta,
        voluptates neque explicabo tempora nisi culpa eius atque dignissimos.
        Molestias explicabo corporis voluptatem?
      </p>

      <a
        href="#"
        className="group mt-4 inline-flex items-center gap-1 text-sm font-medium text-blue-600"
      >
        Find out more
        <span
          aria-hidden="true"
          className="block transition-all group-hover:ms-0.5 rtl:rotate-180"
        >
          &rarr;
        </span>
      </a>
    </article>
  );

  // Bordered with image, date, title, excerpt, shadow on hover
  return (
    <article className="overflow-hidden rounded-lg shadow-sm transition hover:shadow-lg">
      <img
        alt=""
        src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
        className="h-56 w-full object-cover"
      />

      <div className="bg-white p-4 sm:p-6">
        <time datetime="2022-10-10" className="block text-xs text-gray-500">
          {" "}
          10th Oct 2022{" "}
        </time>

        <a href="#">
          <h3 className="mt-0.5 text-lg text-gray-900">
            How to position your furniture for positivity
          </h3>
        </a>

        <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae
          dolores, possimus pariatur animi temporibus nesciunt praesentium
          dolore sed nulla ipsum eveniet corporis quidem, mollitia itaque minus
          soluta, voluptates neque explicabo tempora nisi culpa eius atque
          dignissimos. Molestias explicabo corporis voluptatem?
        </p>
      </div>
    </article>
  );
}
