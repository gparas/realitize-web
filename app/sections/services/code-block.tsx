"use client";

import { useRef } from "react";
import { Typewriter } from "motion-plus/react";
import { useInView } from "motion/react";
import { CODE_DEMO } from "./constants";

export default function CodeBlock() {
  const ref = useRef(null);
  const isInView = useInView(ref);
  return (
    <div className="bg-brand-500 relative isolate overflow-hidden px-6 pt-8 sm:mx-auto sm:max-w-2xl sm:rounded-3xl sm:pt-16 sm:pr-0 sm:pl-16 lg:mx-0 lg:max-w-none">
      <div
        role="presentation"
        aria-hidden="true"
        className="absolute -inset-y-px -left-3 -z-10 w-full origin-bottom-left skew-x-[-30deg] bg-indigo-100 opacity-20 ring-1 ring-white ring-inset"
      />
      <div className="mx-auto max-w-2xl sm:mx-0 sm:max-w-none">
        <div className="w-screen overflow-hidden rounded-tl-xl bg-gray-900 ring-1 ring-white/10">
          <div className="flex bg-gray-800/40 ring-1 ring-white/5">
            <div className="-mb-px flex text-sm/6 font-medium text-gray-400">
              <div className="border-r border-b border-r-white/10 border-b-white/20 bg-white/5 px-4 py-2 text-white">
                Model.py
              </div>
              <div className="border-r border-gray-600/10 px-4 py-2">
                App.py
              </div>
            </div>
          </div>
          <div
            className="overflow-y-auto px-6 pt-6 pb-14"
            style={{ minHeight: 600, maxHeight: 600 }}
          >
            <Typewriter
              speed={"fast"}
              as="pre"
              ref={ref}
              play={isInView}
              style={{ tabSize: 2 }}
              role="presentation"
              aria-hidden="true"
              className="font-mono text-sm leading-6 text-gray-300"
            >
              {CODE_DEMO}
            </Typewriter>
          </div>
        </div>
      </div>
      <div
        role="presentation"
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 ring-1 ring-black/10 ring-inset sm:rounded-3xl dark:ring-white/10"
      />
    </div>
  );
}
