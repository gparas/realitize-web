import FadeIn from "@/components/fade-in";
import { BuildingOffice2Icon, EnvelopeIcon } from "@heroicons/react/24/outline";

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="relative isolate bg-white px-6 py-24 sm:py-32 lg:px-8 dark:bg-gray-900"
    >
      <div className="mx-auto max-w-xl lg:max-w-5xl">
        <div className="mt-16 flex flex-col gap-16 sm:gap-y-20 lg:flex-row">
          <FadeIn className="lg:mt-6 lg:w-80 lg:flex-auto">
            <h2 className="text-2xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl dark:text-white">
              Get in touch
            </h2>
            <p className="mt-6 text-lg/8 text-gray-600 dark:text-gray-400">
              Planning a project or looking for guidance? Our team is here to
              help you take the first step toward intelligent automation.
              Contact us through the form or by email and we’ll get back to you
              promptly.
            </p>
            <dl className="mt-10 space-y-4 text-base/7 text-gray-600 dark:text-gray-300">
              <div className="flex gap-x-4">
                <dt className="flex-none">
                  <span className="sr-only">Address</span>
                  <BuildingOffice2Icon
                    aria-hidden="true"
                    className="h-7 w-6 text-gray-400"
                  />
                </dt>
                <dd>
                  Montague Sterling Centre,
                  <br />
                  P.O. Box N-3924, Nassau, Bahamas
                </dd>
              </div>
              <div className="flex gap-x-4">
                <dt className="flex-none">
                  <span className="sr-only">Email</span>
                  <EnvelopeIcon
                    aria-hidden="true"
                    className="h-7 w-6 text-gray-400"
                  />
                </dt>
                <dd>
                  <a
                    href="mailto:hello@example.com"
                    className="hover:text-gray-900 dark:hover:text-white"
                  >
                    info@realitize.ai
                  </a>
                </dd>
              </div>
            </dl>
          </FadeIn>
          <FadeIn className="lg:flex-auto">
            <form action="#" method="POST">
              <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="first-name"
                    className="block text-sm/6 font-semibold text-gray-900 dark:text-white"
                  >
                    Name
                  </label>
                  <div className="mt-2.5">
                    <input
                      id="first-name"
                      name="first-name"
                      type="text"
                      autoComplete="given-name"
                      className="dark:focus:outline-brand-500 block w-full rounded-md bg-white px-3.5 py-3 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 backdrop-blur-sm placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 dark:bg-white/5 dark:text-white dark:outline-white/10 dark:placeholder:text-gray-500"
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="last-name"
                    className="block text-sm/6 font-semibold text-gray-900 dark:text-white"
                  >
                    Email
                  </label>
                  <div className="mt-2.5">
                    <input
                      id="last-name"
                      name="last-name"
                      type="text"
                      autoComplete="family-name"
                      className="dark:focus:outline-brand-500 block w-full rounded-md bg-white px-3.5 py-3 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 backdrop-blur-sm placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 dark:bg-white/5 dark:text-white dark:outline-white/10 dark:placeholder:text-gray-500"
                    />
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <label
                    htmlFor="message"
                    className="block text-sm/6 font-semibold text-gray-900 dark:text-white"
                  >
                    Message
                  </label>
                  <div className="mt-2.5">
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      className="dark:focus:outline-brand-500 block w-full rounded-md bg-white px-3.5 py-3 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 backdrop-blur-sm placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 dark:bg-white/5 dark:text-white dark:outline-white/10 dark:placeholder:text-gray-500"
                      defaultValue={""}
                    />
                  </div>
                </div>
              </div>
              <div className="mt-10">
                <button
                  type="submit"
                  className="hover:bg-brand-500 dark:bg-brand-500 dark:focus-visible:outline-brand-500 dark:hover:bg-brand-400 block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-xs focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Let’s talk
                </button>
              </div>
              <p className="mt-4 text-sm/6 text-gray-500 dark:text-gray-400">
                By submitting this form, I agree to the{" "}
                <a
                  href="#"
                  className="dark:text-brand-400 font-semibold whitespace-nowrap text-indigo-600"
                >
                  privacy policy
                </a>
                .
              </p>
            </form>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
