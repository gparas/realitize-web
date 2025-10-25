const timeline = [
  {
    name: "Discovery & Alignment",
    description:
      "We begin by understanding your strategic objectives, data environment, workflows, and compliance considerations.",
    date: "Step 1",
    dateTime: "2021-08",
  },
  {
    name: "Solution Design & Prototyping",
    description:
      "We architect and validate AI models and systems tailored to your operational reality.",
    date: "Step 2",
    dateTime: "2021-12",
  },
  {
    name: "Development & Integration",
    description:
      "We implement securely, integrate with existing infrastructure, and ensure adoption across teams.",
    date: "Step 3",
    dateTime: "2022-02",
  },
  {
    name: "Partnership & Governance",
    description:
      "We continue to optimise, monitor, and scale, ensuring responsible use and continuous improvement.",
    date: "Step 4",
    dateTime: "2022-12",
  },
];

export default function ProcessSection() {
  return (
    <div id="process" className="bg-white py-24 sm:py-32 dark:bg-gray-900">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base/7 font-semibold text-indigo-600 dark:text-indigo-400">
            Process
          </h2>
          <p className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl lg:text-balance dark:text-white">
            A clear path from idea to impact.
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 overflow-hidden sm:mt-20 lg:mx-0 lg:mt-24 lg:max-w-none lg:grid-cols-4">
          {timeline.map((item) => (
            <div key={item.name}>
              <time
                dateTime={item.dateTime}
                className="flex items-center text-sm/6 font-semibold text-indigo-600 dark:text-indigo-400"
              >
                <svg
                  viewBox="0 0 4 4"
                  aria-hidden="true"
                  className="mr-4 size-1 flex-none"
                >
                  <circle r={2} cx={2} cy={2} fill="currentColor" />
                </svg>
                {item.date}
                <div
                  aria-hidden="true"
                  className="absolute -ml-2 h-px w-screen -translate-x-full bg-gray-900/10 sm:-ml-4 lg:static lg:-mr-6 lg:ml-8 lg:w-auto lg:flex-auto lg:translate-x-0 dark:bg-white/15"
                />
              </time>
              <p className="mt-6 text-lg/8 font-semibold tracking-tight text-gray-900 dark:text-white">
                {item.name}
              </p>
              <p className="mt-1 text-base/7 text-gray-600 dark:text-gray-400">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
