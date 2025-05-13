import React from "react";
import {
  FaTrophy,
  FaCrown,
  FaChartLine,
  FaCode,
  FaBullhorn,
  FaKey,
  FaMobileAlt,
  FaGamepad,
  FaHeadset,
} from "react-icons/fa";

const services = [
  {
    icon: <FaTrophy className="mx-auto text-5xl text-[#6366F1] mb-4" />,
    title: "Web Design",
    desc: "Modern, responsive, and user-friendly web design for your business or personal brand.",
  },
  {
    icon: <FaCode className="mx-auto text-5xl text-[#6366F1] mb-4" />,
    title: "Development",
    desc: "Full-stack development using modern frameworks for scalable, robust solutions.",
  },
  {
    icon: <FaMobileAlt className="mx-auto text-5xl text-[#6366F1] mb-4" />,
    title: "Mobile Application",
    desc: "Cross-platform mobile app development for Android and iOS with a focus on performance and UX.",
  },
  {
    icon: <FaGamepad className="mx-auto text-5xl text-[#6366F1] mb-4" />,
    title: "Game Development",
    desc: "Engaging and interactive game development for web and mobile platforms.",
  },
  {
    icon: <FaHeadset className="mx-auto text-5xl text-[#6366F1] mb-4" />,
    title: "Customer Support",
    desc: "Reliable and friendly customer support to help your users and grow your business.",
  },
];

function ServiceCard({ icon, title, desc }) {
  return (
    <div className="text-center max-w-xs mx-auto">
      {icon}
      <h3 className="text-xl font-bold mb-2 text-[#22223b]">{title}</h3>
      <p className="text-gray-600">{desc}</p>
    </div>
  );
}

const Services = () => {
  return (
    <section
      id="services"
      className="w-full min-h-screen bg-white/90 py-12 pb-32 md:pb-16"
    >
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-2">
          <h2 className="text-4xl font-extrabold text-[#22223b] mb-2">
            What I Offer
          </h2>
          <div className="mx-auto mt-2 w-24 h-1 bg-gray-200 relative">
            <div className="absolute left-1/2 -translate-x-1/2 w-12 h-1 bg-[#6366F1] rounded"></div>
          </div>
        </div>
        <p className="text-center text-gray-600 mb-12">
          My core services to help you succeed in the digital world.
        </p>
        {/* Desktop: 2-1-2 layout */}
        <div className="hidden md:flex justify-between items-center">
          {/* Left column */}
          <div className="flex flex-col gap-16 flex-1 items-center">
            <ServiceCard {...services[0]} />
            <ServiceCard {...services[1]} />
          </div>
          {/* Center column */}
          <div className="flex-1 flex flex-col items-center justify-center">
            <ServiceCard {...services[2]} />
          </div>
          {/* Right column */}
          <div className="flex flex-col gap-16 flex-1 items-center">
            <ServiceCard {...services[3]} />
            <ServiceCard {...services[4]} />
          </div>
        </div>
        {/* Mobile: simple vertical stack */}
        <div className="flex flex-col gap-12 md:hidden">
          {services.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
