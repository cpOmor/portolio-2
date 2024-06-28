/* eslint-disable @typescript-eslint/no-explicit-any */
import { motion } from "framer-motion";

const AnimatedRight = ({ children }: { children: any }) => {
  return (
    <motion.div
      initial={{ x: 200, opacity: 0 }}
      whileInView={{
        x: 0,
        opacity: 1,
        transition: { duration: 1, staggerChildren: 0.2 },
      }}
    >
      {children}
    </motion.div>
  );
};


export default AnimatedRight;

// export const DrownAnimated = {
//   initial: {},
//   animate: {
//     y: 0,
//     opacity: 1,
//     transition: {
//       duration: 1,
//       staggerChildren: 0.2,
//     },
//   },
// };
