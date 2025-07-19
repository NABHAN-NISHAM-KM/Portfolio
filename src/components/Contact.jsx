import { useState } from "react";
import emailjs from "@emailjs/browser";
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaGithub, FaLinkedin } from "react-icons/fa";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus("");
    try {
      await emailjs.send(
        "service_o9akv2s",
        "template_ppecjap",
        {
          from_name: form.name,
          from_email: form.email,
          message: form.message,
          name: form.name,
          email: form.email,
          title: "Portfolio",
        },
        "fNQ7t62clcqj4o4EB"
      );
      setStatus("Message sent successfully!");
      setForm({ name: "", email: "", message: "" });
    } catch {
      setStatus("Failed to send message. Please try again later.");
    }
    setLoading(false);
  };

  return (
    <section id="contact" className="min-h-screen bg-gradient-to-br from-gray-50 to-white py-35">
      <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-gray-800 tracking-wide">
            Contact
          </h2>
          <div className="mx-auto mt-2 w-24 h-1 bg-gray-200 relative">
            <div className="absolute left-1/2 -translate-x-1/2 w-12 h-1 bg-[#6366F1] rounded"></div>
          </div>
        </div>
      <div className="w-full max-w-5xl mx-auto px-4 flex flex-col md:flex-row gap-16 md:gap-24 items-center justify-center">
        {/* Left: Info */}
        <div className="flex-1 flex flex-col gap-8 items-center md:items-start">
          <h2 className="text-5xl font-extrabold text-gray-800 tracking-wide mb-2 text-center md:text-left">
            Let's Connect
          </h2>
          <p className="text-lg text-gray-600 mb-2 text-center md:text-left max-w-md">
            Have a project, want to collaborate, or just want to say hi? Reach out below or use the form!
          </p>
          <div className="flex flex-col gap-4 w-full">
            <div className="flex items-center gap-4">
              <FaEnvelope className="text-[#6366F1] text-2xl" />
              <span className="text-lg text-gray-700">nabhannisham5@gmail.com</span>
            </div>
            <div className="flex items-center gap-4">
              <FaPhone className="text-[#6366F1] text-2xl" />
              <span className="text-lg text-gray-700">+91 7025204337</span>
            </div>
            <div className="flex items-center gap-4">
              <FaMapMarkerAlt className="text-[#6366F1] text-2xl" />
              <span className="text-lg text-gray-700">Malappuram, India</span>
            </div>
          </div>
          <div className="flex gap-6 mt-2">
            <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
              <FaGithub className="text-3xl text-gray-700 hover:text-[#6366F1] transition" />
            </a>
            <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="text-3xl text-gray-700 hover:text-[#6366F1] transition" />
            </a>
          </div>
        </div>

        {/* Right: Form */}
        <form className="flex-1 flex flex-col gap-8 w-full max-w-md" onSubmit={handleSubmit}>
          {/* Name Field */}
          <div className="relative">
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              className="peer w-full border border-gray-300 rounded-lg bg-white px-4 py-3 text-lg focus:border-[#6366F1] focus:ring-2 focus:ring-[#6366F1]/30 focus:outline-none transition placeholder-transparent shadow-sm"
              placeholder=" "
              required
              autoComplete="off"
            />
            <label
              className={
                `absolute left-4 bg-white px-1 transition-all duration-200 pointer-events-none
                ${form.name
                  ? "-top-3 text-sm text-[#6366F1]"
                  : "top-3 text-base text-gray-500"}
                peer-focus:-top-3 peer-focus:text-sm peer-focus:text-[#6366F1]`
              }
            >
              Name
            </label>
          </div>
          {/* Email Field */}
          <div className="relative">
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              className="peer w-full border border-gray-300 rounded-lg bg-white px-4 py-3 text-lg focus:border-[#6366F1] focus:ring-2 focus:ring-[#6366F1]/30 focus:outline-none transition placeholder-transparent shadow-sm"
              placeholder=" "
              required
              autoComplete="off"
            />
            <label
              className={
                `absolute left-4 bg-white px-1 transition-all duration-200 pointer-events-none
                ${form.email
                  ? "-top-3 text-sm text-[#6366F1]"
                  : "top-3 text-base text-gray-500"}
                peer-focus:-top-3 peer-focus:text-sm peer-focus:text-[#6366F1]`
              }
            >
              Email
            </label>
          </div>
          {/* Message Field */}
          <div className="relative">
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              className="peer w-full border border-gray-300 rounded-lg bg-white px-4 py-3 text-lg h-32 resize-none focus:border-[#6366F1] focus:ring-2 focus:ring-[#6366F1]/30 focus:outline-none transition placeholder-transparent shadow-sm"
              placeholder=" "
              required
              autoComplete="off"
            />
            <label
              className={
                `absolute left-4 bg-white px-1 transition-all duration-200 pointer-events-none
                ${form.message
                  ? "-top-3 text-sm text-[#6366F1]"
                  : "top-3 text-base text-gray-500"}
                peer-focus:-top-3 peer-focus:text-sm peer-focus:text-[#6366F1]`
              }
            >
              Message
            </label>
          </div>
          <button
            type="submit"
            className="w-full bg-[#6366F1] text-white font-bold py-3 rounded-lg shadow hover:bg-[#4f46e5] transition text-lg"
            disabled={loading}
          >
            {loading ? "Sending..." : "Send Message"}
          </button>
          {status && (
            <div className={`text-center text-lg font-semibold ${status.includes("success") ? "text-green-600" : "text-red-600"}`}>
              {status}
            </div>
          )}
        </form>
      </div>
    </section>
  );
}