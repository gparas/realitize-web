"use client";

import { useContext } from "react";
import * as motion from "motion/react-client";
import { FADE_IN_VIEWPORT } from "./constants";
import { FadeInStaggerContext } from "./fade-in-stagger";

const FadeIn = (props: React.ComponentPropsWithoutRef<typeof motion.div>) => {
  const isInStaggerGroup = useContext(FadeInStaggerContext);
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 24 },
        visible: { opacity: 1, y: 0 },
      }}
      transition={{ duration: 0.5 }}
      {...(isInStaggerGroup
        ? {}
        : {
            initial: "hidden",
            whileInView: "visible",
            viewport: FADE_IN_VIEWPORT,
          })}
      {...props}
    />
  );
};

export default FadeIn;
