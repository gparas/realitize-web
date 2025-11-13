"use client";

import * as motion from "motion/react-client";
import FadeIn from "@/components/fade-in";
import {
  dotVariants,
  lineVariants,
  nameVariants,
  cardVariants,
  dateVariants,
  containerVariants,
  descriptionVariants,
} from "./animation";
import { TIMELINE_DATA } from "./constants";

export default function ProcessSection() {
  return (
    <div id="process" className="bg-white py-24 sm:py-32 dark:bg-gray-900">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <FadeIn className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base/7 font-semibold text-indigo-600 dark:text-indigo-400">
            Process
          </h2>
          <p className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl lg:text-balance dark:text-white">
            A clear path from idea to impact.
          </p>
        </FadeIn>

        <motion.div
          className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 overflow-hidden sm:mt-20 lg:mx-0 lg:mt-24 lg:max-w-none lg:grid-cols-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {TIMELINE_DATA.map((item) => (
            <motion.div key={item.name} variants={cardVariants}>
              <time
                dateTime={item.dateTime}
                className="relative flex items-center text-sm/6 font-semibold text-indigo-600 dark:text-indigo-400"
              >
                <motion.svg
                  viewBox="0 0 4 4"
                  aria-hidden="true"
                  className="mr-4 size-1 flex-none"
                  variants={dotVariants}
                >
                  <circle r={2} cx={2} cy={2} fill="currentColor" />
                </motion.svg>

                <motion.span variants={dateVariants}>{item.date}</motion.span>

                <motion.div
                  aria-hidden="true"
                  variants={lineVariants}
                  className="absolute -ml-2 h-px w-screen -translate-x-full bg-gray-900/10 sm:-ml-4 lg:static lg:-mr-6 lg:ml-8 lg:w-auto lg:flex-auto lg:translate-x-0 dark:bg-white/15"
                />
              </time>

              <motion.p
                className="mt-6 text-lg/8 font-semibold tracking-tight text-gray-900 dark:text-white"
                variants={nameVariants}
              >
                {item.name}
              </motion.p>

              <motion.p
                className="mt-1 text-base/7 text-gray-600 dark:text-gray-400"
                variants={descriptionVariants}
              >
                {item.description}
              </motion.p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
