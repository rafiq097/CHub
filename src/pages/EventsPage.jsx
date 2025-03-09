import React from "react";
import Navbar from "../components/Navbar.jsx";

const sampleEvents = [
  {
    id: 1,
    title: "Tech & Faith Summit 2025",
    date: "March 15, 2025",
    location: "New York, USA",
    image: "https://source.unsplash.com/400x300/?conference",
  },
  {
    id: 2,
    title: "Innovation for Peace",
    date: "April 22, 2025",
    location: "London, UK",
    image: "https://source.unsplash.com/400x300/?meeting",
  },
  {
    id: 3,
    title: "Spiritual Hackathon",
    date: "May 10, 2025",
    location: "Berlin, Germany",
    image: "https://source.unsplash.com/400x300/?teamwork",
  },
  {
    id: 4,
    title: "AI & Ethics Panel",
    date: "June 5, 2025",
    location: "Tokyo, Japan",
    image: "https://source.unsplash.com/400x300/?seminar",
  },
  {
    id: 5,
    title: "Metaverse & Spirituality",
    date: "July 18, 2025",
    location: "San Francisco, USA",
    image: "https://source.unsplash.com/400x300/?vr",
  },
];

const EventsPage = () => {
  return (
    <>
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-center text-4xl md:text-6xl font-bold text-black mb-8">
          Upcoming Events
        </h1>
        <p className="text-center text-lg text-gray-500 mb-10">
          Join us at our upcoming events and be a part of something amazing!
        </p>

        {/* Events Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {sampleEvents.map((event) => (
            <div
              key={event.id}
              className="bg-white shadow-lg rounded-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-xl"
            >
              <img src={event.image} alt={event.title} className="w-full h-56 object-cover" />
              <div className="p-4">
                <h2 className="text-2xl font-bold text-black">{event.title}</h2>
                <p className="text-gray-500">{event.date} • {event.location}</p>
                <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-800 transition">
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default EventsPage;
