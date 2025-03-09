import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <nav className="text-blue-600 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-3xl font-bold">C</h1>

        <ul className="hidden text-xl md:flex gap-6">
          <li className="hover:text-blue-600 cursor-pointer">Home</li>
          <li className="hover:text-blue-600 cursor-pointer">Events</li>
          <li className="hover:text-blue-600 cursor-pointer">About</li>
        </ul>

        <div
          className="md:hidden cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </div>
      </div>

      {isOpen && (
        <ul className="md:hidden flex flex-col gap-4 mt-2 rounded text-xl">
          <li
            className="hover:text-blue-600 cursor-pointer"
            onClick={() => navigate("/")}
          >
            Home
          </li>
          <li
            className="hover:text-blue-600 cursor-pointer"
            onClick={() => navigate("/events")}
          >
            Events
          </li>
          <li
            className="hover:text-blue-600 cursor-pointer"
            onClick={() => navigate("/about")}
          >
            About
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
