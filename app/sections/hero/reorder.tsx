"use client";

import { Transition } from "motion/react";
import * as motion from "motion/react-client";
import { useEffect, useState } from "react";

export default function Reordering() {
  const [order, setOrder] = useState(initialOrder);

  useEffect(() => {
    const timeout = setTimeout(() => setOrder(shuffle(order)), 1000);
    return () => clearTimeout(timeout);
  }, [order]);

  return (
    <div className="flex justify-center py-10">
      <ul style={container}>
        {order.map((backgroundColor) => (
          <motion.li
            key={backgroundColor}
            layout
            transition={spring}
            style={{ ...item, backgroundColor }}
          />
        ))}
      </ul>
    </div>
  );
}

const initialOrder = ["#7c86ff", "#615fff", "#4f39f6", "#432dd7"];

/**
 * ==============   Utils   ================
 */
function shuffle([...array]: string[]) {
  return array.sort(() => Math.random() - 0.5);
}

/**
 * ==============   Styles   ================
 */

const spring: Transition = {
  type: "spring",
  damping: 20,
  stiffness: 300,
};

const container: React.CSSProperties = {
  listStyle: "none",
  padding: 0,
  margin: 0,
  position: "relative",
  display: "flex",
  flexWrap: "wrap",
  gap: 10,
  width: 300,
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
};

const item: React.CSSProperties = {
  width: 50,
  height: 50,
  borderRadius: 8,
};
