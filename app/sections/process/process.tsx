"use client";

import FadeIn, { FadeInStagger } from "@/components/fade-in";
import { TIMELINE_DATA } from "./constants";

export default function ProcessSection() {
  return (
    <div id="process" className="bg-white py-24 sm:py-32 dark:bg-gray-900">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <FadeIn className="mx-auto max-w-2xl lg:text-center">
          <h2 className="dark:text-brand-400 text-base/7 font-semibold text-indigo-600">
            Process
          </h2>
          <p className="mt-2 text-2xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl lg:text-balance dark:text-white">
            A clear path from idea to impact.
          </p>
        </FadeIn>

        <FadeInStagger className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 overflow-hidden sm:mt-20 lg:mx-0 lg:mt-24 lg:max-w-none lg:grid-cols-4">
          {TIMELINE_DATA.map((item) => (
            <FadeIn key={item.name}>
              <time
                dateTime={item.dateTime}
                className="dark:text-brand-400 relative flex items-center text-sm/6 font-semibold text-indigo-600"
              >
                <svg
                  viewBox="0 0 4 4"
                  aria-hidden="true"
                  className="mr-4 size-1 flex-none"
                >
                  <circle r={2} cx={2} cy={2} fill="currentColor" />
                </svg>

                <span>{item.date}</span>

                <div
                  aria-hidden="true"
                  className="absolute -ml-2 h-px w-screen -translate-x-full bg-gray-900/10 sm:-ml-4 lg:static lg:-mr-6 lg:ml-8 lg:w-auto lg:flex-auto lg:translate-x-0 dark:bg-white/15"
                />
              </time>
              <h3 className="mt-6 text-lg/8 font-semibold tracking-tight text-gray-900 dark:text-white">
                {item.name}
              </h3>
              <p className="mt-1 text-base/7 text-gray-600 dark:text-gray-400">
                {item.description}
              </p>
            </FadeIn>
          ))}
        </FadeInStagger>
      </div>
    </div>
  );
}
