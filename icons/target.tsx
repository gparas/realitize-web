import * as React from "react";

const TargetIcon = (
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
    <circle cx={12} cy={12} r={10} />
    <circle cx={12} cy={12} r={6} />
    <circle cx={12} cy={12} r={2} />
  </svg>
);
export default TargetIcon;
