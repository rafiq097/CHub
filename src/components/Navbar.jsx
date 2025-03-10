import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isOpen && !event.target.closest(".nav-menu")) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);

  return (
    <nav className="text-blue-600 p-4 shadow-md bg-white">
      <div className="container mx-auto flex justify-between items-center">
        <h1
          className="text-3xl font-bold cursor-pointer select-none"
          onClick={() => navigate("/")}
        >
          CommunionHub
        </h1>

        <ul className="hidden text-lg md:flex gap-8 font-medium">
          {["Home", "Events", "About"].map((item, index) => (
            <li
              key={index}
              className="hover:text-blue-800 cursor-pointer transition-colors duration-300"
              onClick={() => navigate(item == "Home" ? "/" : `/${item.toLowerCase()}`)}
            >
              {item}
            </li>
          ))}
        </ul>

        <div
          className="md:hidden cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FaTimes size={28} /> : <FaBars size={28} />}
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="nav-menu absolute top-16 left-0 w-full bg-white shadow-lg rounded-lg md:hidden"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <ul className="flex flex-col pl-4 gap-4 py-4 text-lg font-medium">
              {["Home", "Events", "About"].map((item, index) => (
                <motion.li
                  key={index}
                  className="hover:text-blue-800 cursor-pointer transition-colors duration-300"
                  whileTap={{ scale: 0.95 }}
                  onClick={() => {
                    setIsOpen(false);
                    navigate(item == "Home" ? "/" : `/${item.toLowerCase()}`);
                  }}
                >
                  {item}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
