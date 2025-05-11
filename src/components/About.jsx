import profileImg from "/assets/me1.jpg";
import {
  FaBirthdayCake,
  FaPhone,
  FaMapMarkerAlt,
  FaGraduationCap,
  FaEnvelope,
  FaCheckCircle,
} from "react-icons/fa";

export default function About() {
  return (
    <section
      id="about"
      className="max-w-4xl mx-auto px-6 py-12 bg-white/90 rounded-2xl shadow-xl pb-20"
    >
      {/* Heading */}
      <div className="text-center mb-8">
        <h2 className="text-4xl font-extrabold text-gray-800 tracking-wide">
          ABOUT
        </h2>
        <div className="mx-auto mt-2 w-24 h-1 bg-gray-200 relative">
          <div className="absolute left-1/2 -translate-x-1/2 w-12 h-1 bg-[#0563bb] rounded"></div>
        </div>
      </div>
      {/* Paragraph */}
      <p className="text-center text-gray-700 text-lg mb-10 max-w-3xl mx-auto">
        <span role="img" aria-label="wave">
          👋
        </span>{" "}
        Hi, I'm{" "}
        <span className="font-semibold text-[#0563bb]">Nabhan Nisham KM</span>,
        a full-stack developer from Kerala, India. With over 2 years of
        experience in web development, I specialize in building scalable and
        responsive applications using the{" "}
        <span className="font-semibold">MERN stack</span> and{" "}
        <span className="font-semibold">Laravel</span>. I enjoy turning ideas
        into real-world products through clean code and thoughtful design. I've
        worked in both agile teams and solo projects, contributing to
        performance optimization, backend APIs, and user-focused frontends. When
        I'm not coding, I love gaming and exploring new tech.
      </p>
      {/* Image and Details */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-8">
        {/* Image Left */}
        <div className="flex-shrink-0 flex justify-center md:justify-end w-full md:w-auto">
          <img
            src={profileImg}
            alt="Nabhan Nisham"
            className="w-60 h-70 object-cover rounded-2xl shadow-lg border-4 border-white bg-white"
            style={{ boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.15)" }}
          />
        </div>
        {/* Details Right */}
        <ul className="flex-1 space-y-4 text-base text-gray-700 md:text-lg md:max-w-md bg-white/80 rounded-xl p-4 shadow">
          <li className="flex items-center gap-3">
            <FaBirthdayCake className="text-[#0563bb] text-xl" />
            <span className="font-semibold w-28">Birthday:</span> 18 July 2001
          </li>
          <li className="flex items-center gap-3">
            <FaPhone className="text-[#0563bb] text-xl" />
            <span className="font-semibold w-28">Phone:</span> +91 7025204337
          </li>
          <li className="flex items-center gap-3">
            <FaEnvelope className="text-[#0563bb] text-xl" />
            <span className="font-semibold w-28">Email:</span>{" "}
            nabhannisham5@gmail.com
          </li>
          <li className="flex items-center gap-3">
            <FaMapMarkerAlt className="text-[#0563bb] text-xl" />
            <span className="font-semibold w-28">City:</span> Malappuram, India
          </li>
          <li className="flex items-center gap-3">
            <FaGraduationCap className="text-[#0563bb] text-xl" />
            <span className="font-semibold w-28">Degree:</span> Bachelors
          </li>
          <li className="flex items-center gap-3">
            <FaCheckCircle className="text-[#0563bb] text-xl" />
            <span className="font-semibold w-28">Freelance:</span>
            <span className="text-green-600 font-semibold">Available</span>
          </li>
        </ul>
      </div>
    </section>
  );
}
