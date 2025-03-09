import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar.jsx";

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <>
      <Navbar />
      <div className="container mx-auto px-6 py-12 text-center">
        <motion.h1
          className="text-black font-extrabold text-4xl md:text-6xl leading-tight"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          Connect Communities
        </motion.h1>

        <motion.p
          className="text-gray-500 text-lg md:text-xl mt-3"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
        >
          Bridging gaps between faiths with tech and a dash of fun!
        </motion.p>

        <motion.div
          className="mt-10 space-y-4 text-left md:text-center"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { staggerChildren: 0.3, delayChildren: 0.2 },
            },
          }}
        >
          {["Unite, Innovate", "Connect, Inspire", "Together"].map((text, index) => (
            <motion.h2
              key={index}
              className="text-black font-bold text-3xl md:text-4xl"
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
            >
              {text}
            </motion.h2>
          ))}
        </motion.div>

        <motion.p
          className="text-gray-500 text-base md:text-lg mt-6 max-w-2xl mx-auto leading-relaxed"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.5 }}
        >
          Join us to be part of a community where spirituality meets innovation.
          Together, we'll build a world that's more inclusive, engaging, and
          connected than ever before!
        </motion.p>

        <motion.button
          className="mt-8 px-8 py-3 bg-black text-white font-semibold text-lg rounded-lg shadow-lg hover:bg-gray-900 transition-transform transform hover:scale-105 focus:ring-4 focus:ring-gray-400 focus:outline-none"
          onClick={() => navigate("/events")}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.2 }}
        >
          View Our Events
        </motion.button>
      </div>
    </>
  );
};

export default HomePage;
