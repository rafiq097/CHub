import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar.jsx";

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <>
      <Navbar />
      <div className="container mx-auto px-4 py-8 text-center">
        <h1 className="text-black font-bold text-4xl md:text-6xl">
          Connect Communities
        </h1>
        <p className="text-gray-500 text-lg md:text-xl mt-2">
          Bridging gaps between faiths with tech and a dash of fun!
        </p>

        <div className="mt-8 space-y-4 text-left md:text-center">
          <h2 className="text-black font-bold text-3xl md:text-4xl">
            Unite, Innovate
          </h2>
          <h2 className="text-black font-bold text-3xl md:text-4xl">
            Connect, Inspire
          </h2>
          <h2 className="text-black font-bold text-3xl md:text-4xl">
            Together
          </h2>
        </div>

        <p className="text-gray-500 text-base md:text-lg mt-4 max-w-2xl mx-auto">
          Join us to be part of a community where spirituality meets innovation.
          Together, we'll build a world that's more inclusive, engaging, and
          connected than ever before!
        </p>

        <button
          className="mt-6 px-6 py-3 bg-black text-white font-bold rounded-lg hover:bg-gray-900 transition"
          onClick={() => {
            navigate("/events");
          }}
        >
          View Our Events
        </button>
      </div>
    </>
  );
};

export default HomePage;
