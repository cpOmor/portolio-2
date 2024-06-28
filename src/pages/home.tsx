import professional from "../assets/image/home/professional.png";
import moon from "../assets/image/home/moon.png";
import banner from "../assets/image/home/banner.jpg";
import pahad from "../assets/image/home/pahad.png";
import "./style/home.scss";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Cart } from "../components/ui/home/Cart";
import { Button } from "../utils/Button";
import { drownVariants } from "../components/animation/drownVariants";
import Scale from "../components/animation/Scale";
import AnimatedRight from "../components/animation/AnimatedRight";
import { DrownAnimated } from "../components/animation/DrownAnimated";

export const Home = () => {
  /////////////////////// hero section //////////////////////

  const textVariants = {
    initial: {
      x: -500,
      opacity: 0,
    },
    animate: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 1,
        staggerChildren: 0.1,
      },
    },

    scrollButton: {
      opacity: 0,
      delay: 1,
      y: 10,
      transition: {
        delay: 1,
        duration: 1,
        repeat: Infinity,
      },
    },
  };

  const sliderVariants = {
    initial: {
      x: 0,
    },
    animate: {
      x: "-220%",
      transition: {
        duration: 20,
        repeat: Infinity,
      },
    },
  };

  ///////////////////////  parallax section ////////////////////////

  const ref: React.MutableRefObject<undefined> = useRef();
  const { scrollYProgress } = useScroll({
    target : ref,
  });

  const yBG = useTransform(scrollYProgress, [0, 1], ["0%", "200%"]);
  const yMoon = useTransform(scrollYProgress, [0, 1], ["0%", "500%"]);
  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "2000%"]);

  ///////////////////////  service section ////////////////////////

  const serviceRightVariants = {
    initial: {
      x: 300,
      opacity: 0,
    },
    animate: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 1,
        staggerChildren: 0.2,
      },
    },

    scrollButton: {
      opacity: 0,
      delay: 1,
      y: 10,
      transition: {
        delay: 1,
        duration: 1,
        repeat: Infinity,
      },
    },
  };

  return (
    <div className="">
      {/* hero section */}
      <section id="hero" className="h-screen w-[1000px] container mx-auto">
        <div className="grid grid-cols-2  justify-between items-center">
          <motion.div
            variants={textVariants}
            initial="initial"
            whileInView="animate"
            className="mb-20 "
          >
            <motion.h3
              variants={textVariants}
              className="text-2xl text-orange-500"
            >
              Omar Faruk
            </motion.h3>
            <motion.h3 variants={textVariants} className="text-6xl mt-2 mb-4">
              Web developer
            </motion.h3>
            <motion.h3 variants={textVariants} className="text-6xl mb-4">
              Web designer
            </motion.h3>
            <motion.div variants={textVariants} className="gap-2 flex">
              <motion.button
                variants={textVariants}
                className="border border-white hover:bg-white hover:text-orange-500 rounded-md text-md uppercase font-bold  py-2 px-4"
              >
                See Last Work
              </motion.button>
              <motion.button
                variants={textVariants}
                className="border border-orange-500 bg-white text-orange-500 hover:bg-orange-500 hover:text-white rounded-md text-md uppercase font-bold py-2 px-4"
              >
                Contact
              </motion.button>
            </motion.div>
            <motion.div
              variants={textVariants}
              animate="scrollButton"
              className="gap-2 flex"
            >
              scroll <br /> button
            </motion.div>
          </motion.div>
          <motion.div
            variants={textVariants}
            className="mt-20 z-50  flex justify-end"
          >
            <motion.img
              variants={textVariants}
              className="h-[560px]  w-auto"
              src={professional}
              alt="professional"
            ></motion.img>
          </motion.div>
        </div>

        <div className="w-[100vl] overflow-hidden">
          <motion.h1
            variants={sliderVariants}
            initial="initial"
            animate="animate"
            className="text-[#ffffff09] w-[100%] text-[140px] overflow-hidden absolute left-0 right-0 -bottom-10 whitespace-nowrap"
          >
            omar is a professional web app developer and UI detainer
          </motion.h1>
        </div>
      </section>
      <section
        id="parallax"
        className="h-[120vh] relative mx-auto overflow-hidden"
      >
        <motion.img
          src={banner}
          alt=""
          style={{ y: yBG }}
          className="absolute left-0 right-0 -translate-x-[50%] bottom-[50%] h-[1200px]"
        />
        <motion.img
          src={moon}
          alt=""
          style={{ y: yMoon }}
          className="absolute right-[10%] top-[10%] -translate-x-[50%]"
        />
        {/* <motion.img
          src={moon}
          alt=""
          style={{ y: yMoon2 }}
          className="absolute right-[20%] top-[10%] translate-x-[50%] "
        /> */}

        <img
          src={pahad}
          alt=""
          className="absolute h-[70vh] left-0 bottom-0 right-0 w-screen z-50"
        />
        <motion.h1
          style={{ y: yText }}
          className="w-full text-center absolute top-0 z-40 -translate-x-[50%] whitespace-nowrap text-8xl"
        >
          What wee do
        </motion.h1>
      </section>
      <section
        id="service"
        className="min-h-screen mx-auto w-[100%] overflow-hidden"
      >
        <motion.div
          variants={serviceRightVariants}
          initial="initial"
          whileInView="animate"
          className="flex items-center my-[60px] "
        >
          <motion.div className="w-[100%] mx-auto">
            <motion.p
              variants={serviceRightVariants}
              className="text-[#ffffff29]  text-end"
            >
              I can focus on helping your brand grow <br />
              and more forward
            </motion.p>
          </motion.div>
          <motion.div
            variants={serviceRightVariants}
            className="border border-[#ffffff29] w-[25%] ml-2"
          ></motion.div>
        </motion.div>
        <motion.div
          variants={drownVariants}
          initial="initial"
          whileInView="animate"
          className="container mx-auto flex flex-col items-center"
        >
          <motion.div
            variants={drownVariants}
            className="flex items-center mb-2"
          >
            <motion.img src={banner} className="rounded-2xl w-52 h-10" alt="" />
            <motion.h4 className="text-4xl pl-4">
              <span className="font-bold"> Unique</span>
              <span className="font-light"> ideas</span>
            </motion.h4>
          </motion.div>
          <motion.div variants={drownVariants} className="flex items-center">
            <motion.h4 className="text-4xl pr-2">
              <span className="font-bold"> For Your </span>
              <span className="font-light"> Business</span>
            </motion.h4>
            <Button title="WHAT WE DO"></Button>
          </motion.div>
        </motion.div>
        <motion.div
          variants={serviceRightVariants}
          className="container mx-auto mt-20 "
        >
          <div className="flex">
            <Cart title="GO" />
            <Cart title="GO" />
            <Cart title="GO" />
            <Cart title="GO" />
          </div>
          <div className="flex">
            <Cart title="GO" />
            <Cart title="GO" />
            <Cart title="GO" />
            <Cart title="GO" />
          </div>
        </motion.div>
      </section>
      {/* <section className="h-screen container mx-auto">Parallax</section> */}
      <section className=" min-h-screen container mx-auto max-w-[1000px] mt-[120px]">
        <div className="sticky top-0 mb-[40px] z-50 py-4 bg-[#232f3e]">
          <DrownAnimated>
            <div className="flex flex-col items-center">
              <h3 className="text-6xl font-semibold mb-4 text-orange-500">
                {" "}
                Featured Works{" "}
              </h3>
            </div>
            <div className="h-[4px] w-[100%] bg-white "></div>
          </DrownAnimated>
        </div>

        {/* main  */}
        <div className="pb-8 overflow-hidden w-[100%]">
          <div className="p-3">
            <motion.div className="grid grid-cols-2 gap-8">
              <Scale>
                <img
                  className="w-full h-[300px]"
                  src="https://www.animaker.com/Animaker-Home/new-assets/Graphic-Deck.webp"
                  alt=""
                />
              </Scale>
              <AnimatedRight>
                <div className="  text-white flex flex-col justify-center h-full">
                  <h3 className="text-5xl mb-4"> React Commas </h3>
                  <p className=" my-2 ">
                    This is a Card description This is a Card description This
                    is a Card description This is a Card description
                  </p>
                  <Button title="See Demo"></Button>
                </div>
              </AnimatedRight>
            </motion.div>
          </div>
          <div className="p-3">
            <motion.div className="grid grid-cols-2 gap-8">
              <Scale>
                <img
                  className="w-full h-[300px]"
                  src="https://www.animaker.com/Animaker-Home/new-assets/Graphic-Deck.webp"
                  alt=""
                />
              </Scale>
              <AnimatedRight>
                <div className="  text-white flex flex-col justify-center h-full">
                  <h3 className="text-5xl mb-4"> React Commas </h3>
                  <p className=" my-2 ">
                    This is a Card description This is a Card description This
                    is a Card description This is a Card description
                  </p>
                  <Button title="See Demo"></Button>
                </div>
              </AnimatedRight>
            </motion.div>
          </div>
          <div className="p-3">
            <motion.div className="grid grid-cols-2 gap-8">
              <Scale>
                <img
                  className="w-full h-[300px]"
                  src="https://www.animaker.com/Animaker-Home/new-assets/Graphic-Deck.webp"
                  alt=""
                />
              </Scale>
              <AnimatedRight>
                <div className="  text-white flex flex-col justify-center h-full">
                  <h3 className="text-5xl mb-4"> React Commas </h3>
                  <p className=" my-2 ">
                    This is a Card description This is a Card description This
                    is a Card description This is a Card description
                  </p>
                  <Button title="See Demo"></Button>
                </div>
              </AnimatedRight>
            </motion.div>
          </div>
          <div className="p-3">
            <motion.div className="grid grid-cols-2 gap-8">
              <Scale>
                <img
                  className="w-full h-[300px]"
                  src="https://www.animaker.com/Animaker-Home/new-assets/Graphic-Deck.webp"
                  alt=""
                />
              </Scale>
              <AnimatedRight>
                <div className="  text-white flex flex-col justify-center h-full">
                  <h3 className="text-5xl mb-4"> React Commas </h3>
                  <p className=" my-2 ">
                    This is a Card description This is a Card description This
                    is a Card description This is a Card description
                  </p>
                  <Button title="See Demo"></Button>
                </div>
              </AnimatedRight>
            </motion.div>
          </div>
          <div className="p-3">
            <motion.div className="grid grid-cols-2 gap-8">
              <Scale>
                <img
                  className="w-full h-[300px]"
                  src="https://www.animaker.com/Animaker-Home/new-assets/Graphic-Deck.webp"
                  alt=""
                />
              </Scale>
              <AnimatedRight>
                <div className="  text-white flex flex-col justify-center h-full">
                  <h3 className="text-5xl mb-4"> React Commas </h3>
                  <p className=" my-2 ">
                    This is a Card description This is a Card description This
                    is a Card description This is a Card description
                  </p>
                  <Button title="See Demo"></Button>
                </div>
              </AnimatedRight>
            </motion.div>
          </div>
          <div className="p-3">
            <motion.div className="grid grid-cols-2 gap-8">
              <Scale>
                <img
                  className="w-full h-[300px]"
                  src="https://www.animaker.com/Animaker-Home/new-assets/Graphic-Deck.webp"
                  alt=""
                />
              </Scale>
              <AnimatedRight>
                <div className="  text-white flex flex-col justify-center h-full">
                  <h3 className="text-5xl mb-4"> React Commas </h3>
                  <p className=" my-2 ">
                    This is a Card description This is a Card description This
                    is a Card description This is a Card description
                  </p>
                  <Button title="See Demo"></Button>
                </div>
              </AnimatedRight>
            </motion.div>
          </div>
          <div className="p-3">
            <motion.div className="grid grid-cols-2 gap-8">
              <Scale>
                <img
                  className="w-full h-[300px]"
                  src="https://www.animaker.com/Animaker-Home/new-assets/Graphic-Deck.webp"
                  alt=""
                />
              </Scale>
              <AnimatedRight>
                <div className="  text-white flex flex-col justify-center h-full">
                  <h3 className="text-5xl mb-4"> React Commas </h3>
                  <p className=" my-2 ">
                    This is a Card description This is a Card description This
                    is a Card description This is a Card description
                  </p>
                  <Button title="See Demo"></Button>
                </div>
              </AnimatedRight>
            </motion.div>
          </div>
          <div className="p-3">
            <motion.div className="grid grid-cols-2 gap-8">
              <Scale>
                <img
                  className="w-full h-[300px]"
                  src="https://www.animaker.com/Animaker-Home/new-assets/Graphic-Deck.webp"
                  alt=""
                />
              </Scale>
              <AnimatedRight>
                <div className="  text-white flex flex-col justify-center h-full">
                  <h3 className="text-5xl mb-4"> React Commas </h3>
                  <p className=" my-2 ">
                    This is a Card description This is a Card description This
                    is a Card description This is a Card description
                  </p>
                  <Button title="See Demo"></Button>
                </div>
              </AnimatedRight>
            </motion.div>
          </div>
          <div className="p-3">
            <motion.div className="grid grid-cols-2 gap-8">
              <Scale>
                <img
                  className="w-full h-[300px]"
                  src="https://www.animaker.com/Animaker-Home/new-assets/Graphic-Deck.webp"
                  alt=""
                />
              </Scale>
              <AnimatedRight>
                <div className="  text-white flex flex-col justify-center h-full">
                  <h3 className="text-5xl mb-4"> React Commas </h3>
                  <p className=" my-2 ">
                    This is a Card description This is a Card description This
                    is a Card description This is a Card description
                  </p>
                  <Button title="See Demo"></Button>
                </div>
              </AnimatedRight>
            </motion.div>
          </div>
          <div className="p-3">
            <motion.div className="grid grid-cols-2 gap-8">
              <Scale>
                <img
                  className="w-full h-[300px]"
                  src="https://www.animaker.com/Animaker-Home/new-assets/Graphic-Deck.webp"
                  alt=""
                />
              </Scale>
              <AnimatedRight>
                <div className="  text-white flex flex-col justify-center h-full">
                  <h3 className="text-5xl mb-4"> React Commas </h3>
                  <p className=" my-2 ">
                    This is a Card description This is a Card description This
                    is a Card description This is a Card description
                  </p>
                  <Button title="See Demo"></Button>
                </div>
              </AnimatedRight>
            </motion.div>
          </div>
          <div className="p-3">
            <motion.div className="grid grid-cols-2 gap-8">
              <Scale>
                <img
                  className="w-full h-[300px]"
                  src="https://www.animaker.com/Animaker-Home/new-assets/Graphic-Deck.webp"
                  alt=""
                />
              </Scale>
              <AnimatedRight>
                <div className="  text-white flex flex-col justify-center h-full">
                  <h3 className="text-5xl mb-4"> React Commas </h3>
                  <p className=" my-2 ">
                    This is a Card description This is a Card description This
                    is a Card description This is a Card description
                  </p>
                  <Button title="See Demo"></Button>
                </div>
              </AnimatedRight>
            </motion.div>
          </div>
          <div className="p-3">
            <motion.div className="grid grid-cols-2 gap-8">
              <Scale>
                <img
                  className="w-full h-[300px]"
                  src="https://www.animaker.com/Animaker-Home/new-assets/Graphic-Deck.webp"
                  alt=""
                />
              </Scale>
              <AnimatedRight>
                <div className="  text-white flex flex-col justify-center h-full">
                  <h3 className="text-5xl mb-4"> React Commas </h3>
                  <p className=" my-2 ">
                    This is a Card description This is a Card description This
                    is a Card description This is a Card description
                  </p>
                  <Button title="See Demo"></Button>
                </div>
              </AnimatedRight>
            </motion.div>
          </div>
          <div className="p-3">
            <motion.div className="grid grid-cols-2 gap-8">
              <Scale>
                <img
                  className="w-full h-[300px]"
                  src="https://www.animaker.com/Animaker-Home/new-assets/Graphic-Deck.webp"
                  alt=""
                />
              </Scale>
              <AnimatedRight>
                <div className="  text-white flex flex-col justify-center h-full">
                  <h3 className="text-5xl mb-4"> React Commas </h3>
                  <p className=" my-2 ">
                    This is a Card description This is a Card description This
                    is a Card description This is a Card description
                  </p>
                  <Button title="See Demo"></Button>
                </div>
              </AnimatedRight>
            </motion.div>
          </div>
        </div>
      </section>
      <section className="min-h-screen container mx-auto">Portfolio2</section>
      <section className="min-h-screen container mx-auto">Portfolio3</section>
      <section className="min-h-screen container mx-auto">Contact</section>
    </div>
  );
};


