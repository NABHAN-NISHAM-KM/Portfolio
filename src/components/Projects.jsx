import React from 'react'
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const projects = [
  {
    title: "Portfolio Website",
    image: "/assets/preview.png",
    description: "A modern, responsive portfolio website built with React and Tailwind CSS.",
    tech: ["React", "Tailwind CSS", "Vite"],
    github: "https://github.com/yourusername/portfolio",
    demo: "https://yourportfolio.com",
  },
  {
    title: "E-commerce Platform",
    image: "/assets/me1.jpg",
    description: "A full-featured e-commerce platform with shopping cart, payment, and admin dashboard.",
    tech: ["React", "Node.js", "MongoDB", "Express"],
    github: "https://github.com/yourusername/ecommerce",
    demo: "https://ecommerce-demo.com",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="min-h-screen py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-5xl font-extrabold text-gray-800 tracking-wide">
            Projects
          </h2>
          <div className="mx-auto mt-2 w-24 h-1 bg-gray-200 relative">
            <div className="absolute left-1/2 -translate-x-1/2 w-12 h-1 bg-[#6366F1] rounded"></div>
          </div>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto text-lg">
            Explore some of my best work. Click on a project to view the code or see it live!
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="group bg-white rounded-3xl shadow-xl overflow-hidden flex flex-col border border-gray-100 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 relative"
            >
              <div className="relative overflow-hidden h-56">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
              <div className="p-7 flex flex-col flex-1">
                <h3 className="text-2xl font-bold text-gray-800 mb-2 group-hover:text-[#6366F1] transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4 flex-1 text-base">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-5">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="bg-[#6366F1]/10 text-[#6366F1] px-3 py-1 rounded-full text-xs font-semibold tracking-wide"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-5 mt-auto">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-700 hover:text-[#6366F1] text-2xl transition"
                      title="View Code"
                    >
                      <FaGithub />
                    </a>
                  )}
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-700 hover:text-[#6366F1] text-2xl transition"
                      title="Live Demo"
                    >
                      <FaExternalLinkAlt />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
