"use client";

import { createContext } from "react";
import * as motion from "motion/react-client";
import { FADE_IN_VIEWPORT } from "./constants";

export const FadeInStaggerContext = createContext(false);

const FadeInStagger = ({
  faster = false,
  ...props
}: React.ComponentPropsWithoutRef<typeof motion.div> & {
  faster?: boolean;
}) => {
  return (
    <FadeInStaggerContext.Provider value={true}>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={FADE_IN_VIEWPORT}
        transition={{ staggerChildren: faster ? 0.12 : 0.2 }}
        {...props}
      />
    </FadeInStaggerContext.Provider>
  );
};

export default FadeInStagger;
