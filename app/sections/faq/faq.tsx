import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { MinusIcon, PlusIcon } from "@heroicons/react/24/outline";

import { FAQS } from "./constants";
import FadeIn from "@/components/fade-in";

export default function FaqSection() {
  return (
    <section id="faq" className="bg-white dark:bg-gray-900">
      <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-40">
        <FadeIn className="mx-auto max-w-4xl">
          <h2 className="text-2xl font-semibold tracking-tight text-gray-900 sm:text-5xl dark:text-white">
            Frequently asked questions
          </h2>
          <p className="mt-4 text-base/7 text-pretty text-gray-600 dark:text-gray-400">
            If you can’t find the information you need, please don’t hesitate to
            reach out to us. We’re here to help!
          </p>
          <dl className="mt-16 divide-y divide-gray-900/10 rounded-2xl bg-gray-50 p-8 dark:divide-white/10 dark:bg-white/2.5">
            {FAQS.map((faq) => (
              <Disclosure
                key={faq.question}
                as="div"
                className="py-6 first:pt-0 last:pb-0"
              >
                <dt>
                  <DisclosureButton className="group flex w-full items-start justify-between text-left text-gray-900 dark:text-white">
                    <span className="text-base/7 font-semibold">
                      {faq.question}
                    </span>
                    <span className="ml-6 flex h-7 items-center">
                      <PlusIcon
                        aria-hidden="true"
                        className="size-6 group-data-open:hidden"
                      />
                      <MinusIcon
                        aria-hidden="true"
                        className="size-6 group-not-data-open:hidden"
                      />
                    </span>
                  </DisclosureButton>
                </dt>
                <DisclosurePanel as="dd" className="mt-2 pr-12">
                  <p className="text-base/7 text-gray-600 dark:text-gray-400">
                    {faq.answer}
                  </p>
                </DisclosurePanel>
              </Disclosure>
            ))}
          </dl>
        </FadeIn>
      </div>
    </section>
  );
}
