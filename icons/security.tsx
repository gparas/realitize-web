import * as React from "react";

const SecurityIcon = (
  props: React.JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>,
) => (
  <svg viewBox="0 0 24 24" width={24} height={24} fill="none" {...props}>
    <path
      vectorEffect="non-scaling-stroke"
      stroke="currentColor"
      strokeWidth="1.5"
      d="M 12 2.489 L 22 9.755 L 18.181 21.511 L 5.819 21.511 L 2 9.755 Z"
    />
  </svg>
);
export default SecurityIcon;
