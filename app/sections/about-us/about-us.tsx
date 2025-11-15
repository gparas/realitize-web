import FadeIn, { FadeInStagger } from "@/components/fade-in";
import {
  FEATURES,
  HEADING_TEXT,
  OVERLINE_TEXT,
  PARAGRAPH_TEXT,
} from "./constants";

export default function AboutUsSection() {
  return (
    <div id="about-us" className="bg-white py-24 sm:py-32 dark:bg-gray-900">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <FadeIn className="mx-auto max-w-2xl lg:text-center">
          <h2 className="dark:text-brand-400 text-base/7 font-semibold text-indigo-600">
            {OVERLINE_TEXT}
          </h2>
          <p className="mt-2 text-2xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl lg:text-balance dark:text-white">
            {HEADING_TEXT}
          </p>
          <p className="mt-6 text-lg/8 text-gray-600 dark:text-gray-300">
            {PARAGRAPH_TEXT}
          </p>
        </FadeIn>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <FadeInStagger className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-8 lg:max-w-none lg:grid-cols-3">
            {FEATURES.map((feature) => (
              <FadeIn
                key={feature.name}
                className="flex flex-col rounded-2xl bg-gray-50 p-8 text-sm/6 dark:bg-white/2.5"
              >
                <feature.icon
                  aria-hidden="true"
                  strokeWidth={1.2}
                  className="dark:text-brand-400 mb-10 size-10 flex-none text-indigo-600"
                />
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  {feature.name}
                </h3>
                <div className="mt-4 flex flex-auto flex-col text-base/7 text-gray-600 dark:text-gray-400">
                  <p className="flex-auto">{feature.description}</p>
                </div>
              </FadeIn>
            ))}
          </FadeInStagger>
        </div>
      </div>
    </div>
  );
}
