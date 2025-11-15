import {
  FEATURES,
  HEADING_TEXT,
  OVERLINE_TEXT,
  PARAGRAPH_TEXT,
} from "./constants";
import CodeBlock from "./code-block";
import FadeIn, { FadeInStagger } from "@/components/fade-in";

export default function ServicesSection() {
  return (
    <div
      id="services"
      className="overflow-hidden bg-white py-24 sm:py-32 dark:bg-gray-900"
    >
      <div className="mx-auto max-w-7xl md:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:grid-cols-2 lg:items-start">
          <div className="px-6 md:px-0 lg:pt-4 lg:pr-4">
            <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-lg">
              <FadeIn>
                <h2 className="dark:text-brand-400 text-base/7 font-semibold text-indigo-600">
                  {OVERLINE_TEXT}
                </h2>
                <p className="mt-2 text-2xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl dark:text-white">
                  {HEADING_TEXT}
                </p>
                <p className="mt-6 text-lg/8 text-gray-700 dark:text-gray-300">
                  {PARAGRAPH_TEXT}
                </p>
              </FadeIn>
              <FadeInStagger className="mt-10 max-w-xl space-y-8 text-base/7 text-gray-600 lg:max-w-none dark:text-gray-400">
                {FEATURES.map((feature) => (
                  <FadeIn key={feature.name} className="relative pl-9">
                    <div className="inline font-semibold text-gray-900 dark:text-white">
                      <feature.icon
                        aria-hidden="true"
                        className="dark:text-brand-400 absolute top-1 left-1 size-5 text-indigo-600"
                      />
                      <h3>{feature.name}</h3>
                    </div>{" "}
                    <p className="inline">{feature.description}</p>
                  </FadeIn>
                ))}
              </FadeInStagger>
            </div>
          </div>
          <div className="sm:px-6 lg:px-0">
            <CodeBlock />
          </div>
        </div>
      </div>
    </div>
  );
}
