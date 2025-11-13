import * as React from "react";

const PartnershipIcon = (
  props: React.JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>,
) => (
  <svg viewBox="0 0 24 24" width={24} height={24} fill="none" {...props}>
    <circle
      vectorEffect="non-scaling-stroke"
      stroke="currentColor"
      cx="9"
      cy="12"
      r="8"
      strokeWidth="1.5"
    />
    <circle
      vectorEffect="non-scaling-stroke"
      stroke="currentColor"
      cx="15"
      cy="12"
      r="8"
      strokeWidth="1.5"
    />
  </svg>
);
export default PartnershipIcon;
