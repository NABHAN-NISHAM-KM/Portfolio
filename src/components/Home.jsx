import { useState, useEffect } from "react";
import {
  FaGithub,
  FaTwitter,
  FaFacebook,
  FaInstagram,
  FaSkype,
  FaLinkedin,
  FaWhatsapp,
} from "react-icons/fa";
import { HiDownload } from "react-icons/hi";

const roles = [
  "Software Developer",
  "Application Developer",
  "Web Designer",
  "Gamer",
  "Freelancer",
];

export default function Home() {
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [roleIndex, setRoleIndex] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (displayText === currentRole) {
          setIsDeleting(true);
          setTypingSpeed(150);
        } else {
          setDisplayText(currentRole.slice(0, displayText.length + 1));
        }
      } else {
        if (displayText === "") {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % roles.length);
          setTypingSpeed(250);
        } else {
          setDisplayText(currentRole.slice(0, displayText.length - 1));
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, roleIndex, typingSpeed]);

  return (
    <section
      id="home"
      className="relative flex items-center justify-center min-h-screen py-8 bg-gradient-to-br from-[#f3f4f6] to-[#e0e7ff]"
    >
      <img
        src="/assets/me2.jpg"
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover blur-sm"
      />
      <div className="absolute inset-0 bg-black/40" />
      <div
        className="relative z-10 text-center text-white"
        style={{ textShadow: "0 2px 8px rgba(0,0,0,0.5)" }}
      >
        <h1 className="text-5xl md:text-6xl font-extrabold mb-2 tracking-tight">
          Nabhan Nisham KM
        </h1>
        <div className="mt-2 mb-4 text-2xl md:text-3xl font-semibold text-[#63b2fd]">
          {displayText}
          <span className="animate-blink">|</span>
        </div>
        <p
          className="mt-2 max-w-2xl mx-auto mb-8 text-lg md:text-xl text-white/90 font-medium"
          style={{ textShadow: "0 2px 8px rgba(0,0,0,0.5)" }}
        >
          I'm a full-stack developer who loves building sleek, responsive web
          apps.e'm not coding, you'll find me deep into a game. I blend
   <br />       technical skill with creativity to craft engaging digital experiences.
        </p>
        <div className="flex gap-4 justify-center mb-6">
          <a
            href="https://github.com/NABHAN-NISHAM-KM"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#181717] hover:text-[#333] text-2xl transition-colors"
          >
            <FaGithub />
          </a>
          <a
            href="www.linkedin.com/in/nabhannishamkm"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#0A66C2] hover:text-[#004182] text-2xl transition-colors"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://www.facebook.com/profile.php?id=100004489455408"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#1877F3] hover:text-[#145db2] text-2xl transition-colors"
          >
            <FaFacebook />
          </a>
          <a
            href="https://www.instagram.com/nabhan__nisham?igsh=ZzFzMzc2dTJnOXB0"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#E4405F] hover:text-[#b82d4a] text-2xl transition-colors"
          >
            <FaInstagram />
          </a>
          <a
            href="https://wa.me/917025204337"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#25D366] hover:text-[#128C7E] text-2xl transition-colors"
          >
            <FaWhatsapp />
          </a>
          <a
            href="https://join.skype.com/invite/pliey7FgcX4a"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#00AFF0] hover:text-[#0078a0] text-2xl transition-colors"
          >
            <FaSkype />
          </a>
          <a
            href="https://twitter.com/Nabhannisham5"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#1DA1F2] hover:text-[#0d8ddb] text-2xl transition-colors"
          >
            <FaTwitter />
          </a>
        </div>
        <a
          href="https://drive.google.com/file/d/1G7EDdzH__XdDSFq4cHiQ6pKb9a2pb6Pb/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-5 py-2 bg-[#6366F1] hover:bg-[#4F46E5] text-white font-semibold rounded-md shadow transition-colors text-base"
        >
          <span>Download CV</span>
          <HiDownload className="w-4 h-4" />
        </a>
      </div>
    </section>
  );
}
