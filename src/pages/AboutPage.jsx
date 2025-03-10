/* eslint-disable no-unused-vars */
import React from "react";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar.jsx";

const AboutPage = () => {
  return (
    <>
      <Navbar />
      <div className="px-4 py-8 sm:px-8 lg:px-16 bg-gray-100 min-h-screen">
        <motion.div
          className="max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <motion.h1
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black mb-6"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            Communion: Uniting Communities Through Faith and Collaboration
          </motion.h1>

          <motion.p
            className="text-lg sm:text-xl lg:text-xl text-gray-700 mb-8"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Communion is not just another platform—it's a vibrant space that
            unites diverse faiths, beliefs, and traditions. By promoting
            collaboration and connection, we're fostering a world where
            differences become strengths and unity becomes the norm.
          </motion.p>

          <motion.h2
            className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-black mb-4"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            Uniting Communities Through Inspiring Events
          </motion.h2>

          <motion.p
            className="text-lg sm:text-xl lg:text-xl text-gray-700"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            At Communion, we're committed to organizing events that foster
            connections, inspire personal and professional growth, and bring
            people together to share meaningful experiences. From workshops to
            conferences, every event is designed to leave a lasting impact on
            our attendees.
          </motion.p>
        </motion.div>
      </div>
    </>
  );
};

export default AboutPage;
