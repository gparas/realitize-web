import * as React from "react";

const EyeIcon = (
  props: React.JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>,
) => (
  <svg
    viewBox="0 0 24 24"
    width={24}
    height={24}
    stroke="currentColor"
    strokeWidth={2}
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
    <circle cx={12} cy={12} r={3} />
  </svg>
);
export default EyeIcon;
