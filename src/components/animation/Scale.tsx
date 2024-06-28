/* eslint-disable @typescript-eslint/no-explicit-any */

import { motion } from "framer-motion";

const Scale = ({ children }: { children: any }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      whileHover={{ scale: 1.04 }}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.div>
  );
};

export default Scale;

