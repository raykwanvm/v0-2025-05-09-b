import Link from "next/link";

export function CardPrelineImage({
  title,
  description,
  imageSrc,
  link,
  linkText,
}: {
  title: string;
  description: string;
  imageSrc: string;
  linkText?: string;
  link: string;
}) {
  return (
    <div className="flex flex-col bg-white border border-gray-200 shadow-2xs rounded-xl dark:bg-neutral-900 dark:border-neutral-700 dark:shadow-neutral-700/70">
      <img
        className="w-full h-auto rounded-t-xl"
        // src="https://images.unsplash.com/photo-1680868543815-b8666dba60f7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&q=80"
        src={imageSrc}
        alt="Card Image"
      />
      <div className="p-4 md:p-5">
        <h3 className="text-lg font-bold text-gray-800 dark:text-white">
          {title}
        </h3>
        <p className="mt-1 text-gray-500 dark:text-neutral-400">
          {description}
        </p>
        {/* <p className="mt-5 text-xs text-gray-500 dark:text-neutral-500">
          Last updated 5 mins ago
        </p> */}
        <Link
          className="mt-3 inline-flex items-center gap-x-1 text-sm font-semibold rounded-lg border border-transparent text-blue-600 decoration-2 hover:text-blue-700 hover:underline focus:underline focus:outline-hidden focus:text-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:text-blue-500 dark:hover:text-blue-600 dark:focus:text-blue-600"
          href={link}
        >
          {linkText ?? "Learn more"}
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
      </div>
    </div>
  );
}

export function CardPrelineSimple() {
  return (
    <div className="flex flex-col bg-white border border-gray-200 shadow-2xs rounded-xl p-4 md:p-5 dark:bg-neutral-900 dark:border-neutral-700 dark:shadow-neutral-700/70">
      <h3 className="text-lg font-bold text-gray-800 dark:text-white">
        Card title
      </h3>
      <p className="mt-1 text-xs font-medium uppercase text-gray-500 dark:text-neutral-500">
        Card subtitle
      </p>
      <p className="mt-2 text-gray-500 dark:text-neutral-400">
        Some quick example text to build on the card title and make up the bulk
        of the card's content.
      </p>
      <a
        className="mt-3 inline-flex items-center gap-x-1 text-sm font-semibold rounded-lg border border-transparent text-blue-600 decoration-2 hover:text-blue-700 hover:underline focus:underline focus:outline-hidden focus:text-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:text-blue-500 dark:hover:text-blue-600 dark:focus:text-blue-600"
        href="#"
      >
        Card link
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
      </a>
    </div>
  );
}

export function CardPrelineHorizontal() {
  return (
    <div className="bg-white border border-gray-200 rounded-xl shadow-2xs sm:flex dark:bg-neutral-900 dark:border-neutral-700 dark:shadow-neutral-700/70">
      <div className="shrink-0 relative w-full rounded-t-xl overflow-hidden pt-[40%] sm:rounded-s-xl sm:max-w-60 md:rounded-se-none md:max-w-xs">
        <img
          className="size-full absolute top-0 start-0 object-cover"
          src="https://images.unsplash.com/photo-1680868543815-b8666dba60f7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=560&q=80"
          alt="Card Image"
        />
      </div>
      <div className="flex flex-wrap">
        <div className="p-4 flex flex-col h-full sm:p-7">
          <h3 className="text-lg font-bold text-gray-800 dark:text-white">
            Card title
          </h3>
          <p className="mt-1 text-gray-500 dark:text-neutral-400">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <div className="mt-5 sm:mt-auto">
            <p className="text-xs text-gray-500 dark:text-neutral-500">
              Last updated 5 mins ago
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
