import Navbar from "@/components/navbar";

import Pattern from "./pattern";
import Flare from "./flare";
import Wave from "./wave";
import FadeIn from "@/components/fade-in";

export default function HeroSection() {
  return (
    <div
      id="hero"
      className="h-screen overflow-x-hidden bg-white font-sans dark:bg-gray-900"
    >
      <Navbar />
      <div className="relative isolate px-6 pt-14 lg:px-8">
        <Pattern />
        <Flare />
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
          <div className="hidden sm:mb-8 sm:flex sm:justify-center">
            <div className="relative rounded-full px-3 py-1 text-sm/6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20 dark:text-gray-400 dark:ring-white/10 dark:hover:ring-white/20">
              Realitize - AI Automation Partner
            </div>
          </div>
          <div className="text-center">
            <h1 className="text-4xl font-semibold tracking-tight text-balance text-gray-900 sm:text-7xl dark:text-white">
              You Lead. Intelligence Aligns.
            </h1>
            <FadeIn>
              <p className="mt-8 text-lg font-medium text-pretty text-gray-500 sm:text-xl/8 dark:text-gray-400">
                We create custom AI systems that are private, secure, and
                designed for measurable outcomes tailored to your enterprise
                operations.
              </p>
            </FadeIn>
          </div>
        </div>
      </div>
      <Wave />
    </div>
  );
}
