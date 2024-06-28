import { motion } from "framer-motion";

/* eslint-disable @typescript-eslint/no-explicit-any */
export const DrownAnimated = ({ children }: { children: any }) => {
    return (
      <motion.div
        initial={{ y: 40, opacity: 0 }}
        whileInView={{
          y: 0,
          opacity: 1,
          transition: {
            duration: 0.5,
            staggerChildren: 0.2,
          },
        }}
        className="w-[100%]"
      >
        {children}
      </motion.div>
    );
  };