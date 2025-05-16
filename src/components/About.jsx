import React, { useState, useEffect } from "react";
import img1 from "/assets/me1.jpg";
import img2 from "/assets/me2.jpg";
import img3 from "/assets/me3.jpg";
import img4 from "/assets/me4.jpg";
import {
  FaBirthdayCake,
  FaPhone,
  FaMapMarkerAlt,
  FaGraduationCap,
  FaEnvelope,
  FaCheckCircle,
} from "react-icons/fa";

const images = [img1, img2, img3, img4];

export default function About() {
  const [current, setCurrent] = useState(0);
  const [animating, setAnimating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimating(true);
      setTimeout(() => {
        setCurrent((prev) => (prev + 1) % images.length);
        setAnimating(false);
      }, 800); // match animation duration
    }, 2000); // change every 3s
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="about"
      className="max-w-4xl mx-auto px-4 sm:px-6 py-30 flex flex-col items-center"
    >
      {/* Heading */}
      <div className="text-center mb-18">
        <h2 className="text-4xl font-extrabold text-gray-800 tracking-wide">
          ABOUT
        </h2>
        <div className="mx-auto mt-2 w-24 h-1 bg-gray-200 relative">
          <div className="absolute left-1/2 -translate-x-1/2 w-12 h-1 bg-[#6366F1] rounded"></div>
        </div>
      </div>
      {/* Paragraph */}
      <p className="text-center text-gray-700 text-lg mb-10 max-w-3xl mx-auto">
        <span role="img" aria-label="wave">
          👋
        </span>{" "}
        Hi, I'm{" "}
        <span className="font-semibold text-[#6366F1]">Nabhan Nisham KM</span>,
        a full-stack developer from Kerala, India. With over 2 years of
        experience in web development, I specialize in building scalable and
        responsive applications using the{" "}
        <span className="font-semibold">MERN Stack</span> and{" "}
        <span className="font-semibold">Laravel</span>. I enjoy turning ideas
        into real-world products through clean code and thoughtful design. I've
        worked in both agile teams and solo projects, contributing to
        performance optimization, backend APIs, and user-focused frontends. When
        I'm not coding, I love gaming and exploring new tech.
      </p>
      {/* Image and Details */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-8 w-full">
        {/* Image Left */}
        <div className="flex-shrink-0 flex justify-center md:justify-end w-full md:w-auto">
          <img
            src={images[current]}
            alt="Nabhan Nisham"
            className="w-60 h-70 object-cover rounded-2xl shadow-lg border-4 border-white bg-white transition-transform duration-300 hover:scale-105"
          />
        </div>
        {/* Details Right */}
        <ul className="flex-1 space-y-4 text-base text-gray-700 md:text-lg md:max-w-md bg-white/80 rounded-xl p-4 shadow-md border border-gray-100 transition-transform duration-300 hover:scale-105">
          <li className="flex items-center gap-3">
            <FaBirthdayCake className="text-[#6366F1] text-xl" />
            <span className="font-semibold w-28">Birthday:</span> 18 July 2001
          </li>
          <li className="flex items-center gap-3">
            <FaPhone className="text-[#6366F1] text-xl" />
            <span className="font-semibold w-28">Phone:</span> +91 7025204337
          </li>
          <li className="flex items-center gap-3">
            <FaEnvelope className="text-[#6366F1] text-xl" />
            <span className="font-semibold w-28">Email:</span>{" "}
            nabhannisham5@gmail.com
          </li>
          <li className="flex items-center gap-3">
            <FaMapMarkerAlt className="text-[#6366F1] text-xl" />
            <span className="font-semibold w-28">City:</span> Malappuram, India
          </li>
          <li className="flex items-center gap-3">
            <FaGraduationCap className="text-[#6366F1] text-xl" />
            <span className="font-semibold w-28">Degree:</span> Bachelors
          </li>
          <li className="flex items-center gap-3">
            <FaCheckCircle className="text-[#6366F1] text-xl" />
            <span className="font-semibold w-28">Freelance:</span>
            <span className="text-green-600 font-semibold">Available</span>
          </li>
        </ul>
      </div>
    </section>
  );
}
