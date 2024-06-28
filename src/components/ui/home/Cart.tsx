import { motion } from "framer-motion";
import Scale from "../../animation/Scale";

export const Cart = ({ title }: { title: string }) => {
 
  return (
    <>
      <Scale>
        <div className="p-3">
          <motion.div className="relative">
            <img
              className="min-h-[350px] max-h-[600px] "
              src="https://www.animaker.com/Animaker-Home/new-assets/Graphic-Deck.webp"
              alt=""
            />
            <div className="absolute bottom-0 text-black p-6">
              <div>
                <img
                  className="h-[35px] "
                  src="https://www.animaker.com/Animaker-Home/new-assets/logo-steve-ai.svg"
                  alt=""
                />
              </div>
              {/* <h3 className="text-xl mb-2"> Header </h3> */}
              <p className=" my-2 text-sm">
                {" "}
                This is a Card description This is a Card description This is a
                Card description This is a Card description
              </p>
              <button className="w-[100%] text-black bg-orange-500 rounded-2xl h-10 flex justify-center items-center  ">
                {title}
              </button>
            </div>
          </motion.div>
        </div>
      </Scale>
    </>
  );
};


export const Cart2 = ({ title }: { title: string }) => {
  
  return (
    <>
      <Scale>
        <div className="p-3">
          <motion.div className="relative">
            <img
              className="min-h-[350px] max-h-[600px] "
              src="https://www.animaker.com/Animaker-Home/new-assets/Graphic-Deck.webp"
              alt=""
            />
            <div className="absolute bottom-0 text-black p-6">
              <div>
                <img
                  className="h-[35px] "
                  src="https://www.animaker.com/Animaker-Home/new-assets/logo-steve-ai.svg"
                  alt=""
                />
              </div>
              {/* <h3 className="text-xl mb-2"> Header </h3> */}
              <p className=" my-2 text-sm">
                {" "}
                This is a Card description This is a Card description This is a
                Card description This is a Card description
              </p>
              <button className="w-[100%] text-black bg-orange-500 rounded-2xl h-10 flex justify-center items-center  ">
                {title}
              </button>
            </div>
          </motion.div>
        </div>
      </Scale>
    </>
  );
};


