/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaHandsHelping, FaPrayingHands, FaUsers } from "react-icons/fa";
import { FaCalendarAlt, FaClock, FaPlusCircle, FaTimes } from "react-icons/fa";
import Navbar from "../components/Navbar.jsx";

const events = [
  {
    id: 1,
    title: "Tech & Faith Summit",
    date: "March 15, 2025",
    time: "10:00 AM - 4:00 PM",
    location: "New York, USA",
    image: "https://pixabay.com/photos/computer-laptop-tech-blue-computer-4795762/",
    category: "Social",
    icon: <FaUsers className="text-blue-600 text-2xl" />,
  },
  {
    id: 2,
    title: "Innovation for Peace",
    date: "April 22, 2025",
    time: "2:00 PM - 6:00 PM",
    location: "London, UK",
    image: "https://res.cloudinary.com/dxqv8mbpg/image/upload/f_auto,q_auto/v1/event-images/event_1737999482266?_a=BAMCkGfi0",
    category: "Religious",
    icon: <FaPrayingHands className="text-green-600 text-2xl" />,
  },
  {
    id: 3,
    title: "Spiritual Hackathon",
    date: "May 10, 2025",
    time: "9:00 AM - 5:00 PM",
    location: "Berlin, Germany",
    image: "https://res.cloudinary.com/dxqv8mbpg/image/upload/f_auto,q_auto/v1/event-images/event_1738152998033?_a=BAMCkGfi0",
    category: "Charity",
    icon: <FaHandsHelping className="text-yellow-600 text-2xl" />,
  },
  {
    id: 4,
    title: "AI & Ethics Panel",
    date: "June 5, 2025",
    time: "11:00 AM - 3:00 PM",
    location: "Tokyo, Japan",
    image: "https://source.unsplash.com/400x300/?seminar",
    category: "Social",
    icon: <FaUsers className="text-blue-600 text-2xl" />,
  },
  {
    id: 5,
    title: "Metaverse & Spirituality",
    date: "July 18, 2025",
    time: "3:00 PM - 7:00 PM",
    location: "San Francisco, USA",
    image: "https://source.unsplash.com/400x300/?vr",
    category: "Religious",
    icon: <FaPrayingHands className="text-green-600 text-2xl" />,
  },
];

const EventsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [formData, setFormData] = useState({});
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [eventList, setEventList] = useState(events);

  const toggleModal = () => setIsModalOpen(!isModalOpen);

  const filteredEvents =
    selectedCategory === "All"
      ? eventList
      : eventList.filter((event) => event.category === selectedCategory);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const getCategoryIcon = (category) => {
    switch (category) {
      case "Social":
        return <FaUsers className="text-blue-600 text-2xl" />;
      case "Religious":
        return <FaPrayingHands className="text-green-600 text-2xl" />;
      case "Charity":
        return <FaHandsHelping className="text-yellow-600 text-2xl" />;
      default:
        return <FaUsers className="text-gray-600 text-2xl" />;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newEvent = {
      id: eventList.length + 1,
      title: formData.title,
      date: formData.date,
      time: formData.time,
      location: formData.location,
      category: formData.category,
      image: "",
      icon: getCategoryIcon(formData.category),
    };

    setEventList([...eventList, newEvent]);
    setFormData({ title: "", date: "", time: "", location: "", category: "" });

    toggleModal();
  };

  return (
    <>
      <Navbar />
      <motion.div
        className="container mx-auto px-4 py-8 max-w-5xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <h1 className="text-center text-4xl md:text-5xl font-bold text-black mb-6">
          Upcoming Events
        </h1>
        <p className="text-center text-lg text-gray-500 mb-8">
          Join us at our upcoming events and be a part of something amazing!
        </p>

        <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-6">
          {["All", "Social", "Religious", "Charity"].map((category) => (
            <button
              key={category}
              className={`px-3 py-2 rounded-lg text-base sm:text-lg font-semibold transition ${
                selectedCategory === category
                  ? "bg-blue-600 text-white"
                  : "bg-gray-200 text-gray-700 hover:bg-blue-500 hover:text-white"
              }`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          ))}

          <button
            className="flex items-center gap-2 px-3 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-800 transition text-base sm:text-lg"
            onClick={toggleModal}
          >
            <FaPlusCircle className="text-lg" />
            Add Event
          </button>
        </div>

        {isModalOpen && (
          <motion.div
            className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={toggleModal}
          >
            <motion.div
              className="bg-white p-6 rounded-lg shadow-lg w-96 relative"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 50, opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="absolute top-3 right-3 text-gray-600 hover:text-gray-900"
                onClick={toggleModal}
              >
                <FaTimes className="text-xl" />
              </button>
              <h2 className="text-2xl font-semibold mb-4">Add New Event</h2>
              <form onSubmit={handleSubmit}>
                <input
                  type="text"
                  name="title"
                  value={formData.title}
                  onChange={handleInputChange}
                  placeholder="Event Title"
                  className="w-full px-4 py-2 border rounded-lg mb-3 focus:ring-2 focus:ring-blue-500"
                />
                <input
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border rounded-lg mb-3 focus:ring-2 focus:ring-blue-500"
                />
                <input
                  type="time"
                  name="time"
                  value={formData.time}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border rounded-lg mb-3 focus:ring-2 focus:ring-blue-500"
                />
                <input
                  type="text"
                  name="location"
                  value={formData.location}
                  onChange={handleInputChange}
                  placeholder="Location"
                  className="w-full px-4 py-2 border rounded-lg mb-3 focus:ring-2 focus:ring-blue-500"
                />
                <select
                  name="category"
                  value={formData.category}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border rounded-lg mb-4 focus:ring-2 focus:ring-blue-500"
                >
                  <option value="">Select Category</option>
                  <option value="Social">Social</option>
                  <option value="Religious">Religious</option>
                  <option value="Charity">Charity</option>
                </select>
                <button
                  type="submit"
                  className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-800 transition"
                >
                  Submit
                </button>
              </form>
            </motion.div>
          </motion.div>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredEvents.map((event, index) => (
            <motion.div
              key={event.id}
              className="bg-white shadow-lg rounded-lg overflow-hidden transform transition hover:scale-[1.02] hover:shadow-2xl"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <img
                src={event.image}
                alt={event.title}
                className="w-full h-56 object-cover"
              />
              <div className="p-4">
                <div className="flex items-center gap-2 mb-2">
                  {event.icon}
                  <span className="text-lg font-semibold text-gray-600">
                    {event.category}
                  </span>
                </div>
                <h2 className="text-2xl font-bold text-black">{event.title}</h2>

                <div className="flex items-center gap-2 text-gray-600 mt-2">
                  <FaCalendarAlt className="text-lg text-blue-600" />
                  <span>
                    {event.date} • {event.location}
                  </span>
                </div>

                <div className="flex items-center gap-2 text-gray-600 mt-1">
                  <FaClock className="text-lg text-blue-600" />
                  <span>{event.time}</span>
                </div>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-800 transition"
                >
                  Event Details
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </>
  );
};

export default EventsPage;
