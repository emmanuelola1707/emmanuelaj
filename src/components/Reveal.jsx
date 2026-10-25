
import { motion, useReducedMotion } from "motion/react";

export default function Reveal({
  children,
  className = "",
  delay = 0,
  direction = "up",
}) {
  const reduceMotion = useReducedMotion();

  const offsets = {
    up: { x: 0, y: 24 },
    left: { x: -24, y: 0 },
    right: { x: 24, y: 0 },
  };

  const initialPosition = offsets[direction] || offsets.up;

  return (
    <motion.div
      className={className}
      initial={
        reduceMotion
          ? { opacity: 0 }
          : { opacity: 0, ...initialPosition }
      }
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{
        duration: reduceMotion ? 0.2 : 0.6,
        delay: reduceMotion ? 0 : delay,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </motion.div>
  );
}
