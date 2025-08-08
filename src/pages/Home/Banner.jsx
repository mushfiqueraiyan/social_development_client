import React from "react";
import { Link } from "react-router";
import { motion } from "motion/react";

const Banner = () => {
  return (
    <div>
      <section
        className="relative  bg-cover bg-center bg-no-repeat py-24 px-4 md:px-12 text-center h-[800px] items-center flex"
        style={{
          backgroundImage: `url('https://images.pexels.com/photos/17108413/pexels-photo-17108413/free-photo-of-a-large-tree-in-the-middle-of-a-forest.jpeg')`,
        }}
      >
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <div className="relative z-10 max-w-4xl mx-auto text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Join Hands for a Greener Tomorrow
          </h1>
          <p className="text-lg md:text-xl mb-6">
            Be part of powerful community events like{" "}
            <strong>Tree Plantation</strong>, Cleanups, and Blood Drives.
          </p>
          <motion.div
            animate={{
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 1,
              repeat: Infinity,
              repeatType: "loop",
              ease: "easeInOut",
            }}
          >
            <Link
              to={"/upcoming-event"}
              className="btn border-none bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold transition"
            >
              Explore Upcoming Events
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Banner;
