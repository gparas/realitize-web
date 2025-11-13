import * as React from "react";

const ClarityIcon = (
  props: React.JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>,
) => (
  <svg viewBox="0 0 24 24" width={24} height={24} fill="none" {...props}>
    <circle
      vectorEffect="non-scaling-stroke"
      stroke="currentColor"
      cx="12"
      cy="12"
      r="10"
      strokeWidth="1.5"
    />
    <circle
      vectorEffect="non-scaling-stroke"
      stroke="currentColor"
      cx="12"
      cy="12"
      r="4.5"
      strokeWidth="1.5"
    />
    <circle fill="#7c86ff" cx="12" cy="12" r="1.5" />
  </svg>
);
export default ClarityIcon;
