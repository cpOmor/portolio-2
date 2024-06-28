/* eslint-disable @typescript-eslint/no-explicit-any */
import { motion } from "framer-motion";
import { ToggleButton } from "./toggleButton";
import { useState } from "react";
import { Links } from "./Links";

export const Sidebar = () => {
  const [open, setOpen] = useState(false);

  const variants = {
    open: {
      clipPath: "circle(1200px at 50px 50px)",
      transition: {
        // delay: 0.5,
        type: "spring",
        stiffness: 20,
      },
    },
    closed: {
      clipPath: "circle(30px at 50px 50px)",
      transition: {
        delay: 0.5,
        type: "spring",
        stiffness: 4000,
        damping: 40,
      },
    },
  };
  return (
    <>
      <motion.div animate={open ? "open" : "closed"}>
        <div
          className={`${
            open
              ? "block w-screen h-screen bg-slate-800 opacity-70 cursor-pointer fixed bottom-0 left-0 right-0 top-0"
              : "hidden"
          } `}
          onClick={() => setOpen((pre: any) => !pre)}
        ></div>
        <div>
          <Links open={open} />
        </div>
        <ToggleButton setOpen={setOpen} />
      </motion.div>
    </>
  );
};
