"use client";
import { motion } from "framer-motion";
import hero_image1 from "../../assets/IMG_20250803_124537.jpg";
import hero_image2 from "../../assets/IMG_20250803_124550.jpg";
import hero_image3 from "../../assets/IMG_20250803_124555.jpg";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

const textVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const Home = () => {
  return (
    <section className="h-full flex flex-col md:flex-row sm:flex-col justify-between items-center bg-gradient-to-br text-white md:mt-30 lg:mt-40 mb-10">
      {/* Text Block */}
      <motion.div
        className="md:w-1/2 mt-12 md:mt-20 z-10"
        initial="hidden"
        animate="visible"
        variants={textVariant}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6 font-serif">
          Turning Ideas Into Digital Solutions
        </h1>
        <p className="text-lg md:text-xl text-slate-300 font-light max-w-lg">
          “Passionate about transforming concepts into real-world applications.
          With 7+ months of hands-on experience, I thrive on building modern web
          interfaces and delivering seamless user experiences.”
        </p>
      </motion.div>

      {/* Image Stack */}
      <motion.div
        className="relative flex justify-center items-center mt-12 md:mt-0"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
      >
        <div className="relative group transition-transform hover:rotate-3 hover:opacity-100 opacity-50 duration-500 delay-300">
          {/* Image 1 */}
          <img
            src={hero_image1}
            alt="hero 1"
            className="absolute top-0 left-0 w-72 h-auto rounded-2xl rotate-6 z-10 transition duration-500 group-hover:scale-105"
          />
          {/* Image 2 */}
          <img
            src={hero_image2}
            alt="hero 2"
            className="absolute top-6 left-6 w-72 h-auto rounded-2xl rotate-3 z-20 transition duration-500 group-hover:scale-105"
          />
          {/* Image 3 */}
          <img
            src={hero_image3}
            alt="hero 3"
            className="relative w-72 h-auto rounded-2xl z-30 rotate-0 shadow-xl transition duration-500 group-hover:scale-110"
          />
        </div>
      </motion.div>

      <div className="top-14 absolute left-24">
        <DotLottieReact
          src="https://lottie.host/e0e4e3e7-228d-42af-bb91-9019735e6fb7/idjS9Wg3eZ.lottie"
          loop
          autoplay
        />
      </div>
    </section>
  );
};

export default Home;
