import { Link } from "react-router-dom";
import { navbar } from "../../utils/navbar";
import { motion } from "framer-motion";
import { Sidebar } from "./sidebar/sidebar";

export const Header = () => {
  return (
    <section className="  absolute top-0 w-[100%]">
      <div id="dest-navbar" className=" dark:bg-[#232f3e] dark:text-white">
        <div className="container mx-auto">
          <div className="h-20 flex justify-between  items-center">
            {/* sidebar  */}
            <Sidebar />
            <div>
              <motion.h1
                initial={{ opacity: 0, scale: 0.1 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
                className="text-2xl"
              ></motion.h1>
            </div>
            <div className="flex items-center">
              <div>
                {navbar.map((item, i) => (
                  <Link key={i} to={item.slug} className="px-2">
                    <motion.span
                      initial={{ opacity: 0, scale: 0.1 }}
                      animate={{ opacity: 1, scale: 2 }}
                      transition={{ duration: 0.5 }}
                    >
                      {item.name}
                    </motion.span>
                  </Link>
                ))}
              </div>
              <div>
                <button className="px-2 border ">contact</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
