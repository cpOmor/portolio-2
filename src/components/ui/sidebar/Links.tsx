/* eslint-disable @typescript-eslint/no-explicit-any */
import { motion } from "framer-motion";

export const Links = ({ open }: { open: any }) => {
  return (
    <motion.div
      className={`${
        open ? "block bg-white text-red-500 fixed w-[200px] top-0 bottom-0 left-0 z-0" : "hidden"
      } `}
    >
      <div>This is a Links</div>
    </motion.div>
  );
};
