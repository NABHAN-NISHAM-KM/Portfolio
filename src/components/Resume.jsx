import React, { useState } from "react";

const tabs = [
  { label: "Experience" },
  { label: "Education" },
  { label: "Skills" },
];

const experienceData = [
  {
    title: "Junior PHP Developer",
    subtitle: "Natmco Solutions, Malappuram / 2024 - Present",
    description:
      "Optimized code maintainability and performance in PHP projects, collaborated on recruitment platform development, and enhanced workflows using Git in cross-functional teams."
  },
  {
    title: "MERN Stack Developer Intern",
    subtitle: "Techzia Solutions, Malappuram / 2023 - 2024",
    description:
      "Built scalable full-stack applications using the MERN stack, streamlined routing with Express.js, and improved server-side performance using Node.js in an agile team environment."
  }
];


const educationData = [
  {
    title: "B.Sc. Computer Science",
    subtitle: "Eranad Knowledge City / 2020 - 2023",
    description:
      "Gained a solid foundation in computer science, including data structures, algorithms, databases, and software development methodologies.",
  },
  {
    title: "Higher Secondary",
    subtitle: "GBHSS Manjeri / 2018 - 2020",
    description: "Specialized in science and mathematics, with a strong emphasis on computer science principles and logical reasoning.",
  },
  {
    title: "High School",
    subtitle: "M.M.E.T HS Melmuri / 2018",
    description: "Completed a science and mathematics curriculum with an emphasis on foundational computer science concepts and problem-solving skills.",
  },
];

const skillsData = [
  {
    label: "HTML5",
    icon: "/assets/icons/html-5.png",
  },
  {
    label: "CSS3",
    icon: "/assets/icons/css-3.png",
  },
  {
    label: "JS",
    icon: "/assets/icons/js.png",
  },
  {
    label: "Python",
    icon: "/assets/icons/python.png",
  },
  {
    label: "PHP",
    icon: "/assets/icons/php.png",
  },
  {
    label: "C++",
    icon: "/assets/icons/c-.png",
  },
  {
    label: "C#",
    icon: "/assets/icons/c-sharp.png",
  },
  {
    label: "React Js",
    icon: "/assets/icons/react.png",
  },
  {
    label: "Vite Js",
    icon: "/assets/icons/vite.png",
  },
  {
    label: "Node Js",
    icon: "/assets/icons/nodejs.png",
  },
  {
    label: "Express Js",
    icon: "/assets/icons/express-js.png",
  },
  {
    label: "Laravel",
    icon: "/assets/icons/laravel.png",
  },
  {
    label: "MongoDB",
    icon: "/assets/icons/mongodb.png",
  },
  {
    label: "MySQL",
    icon: "/assets/icons/mysql.png",
  },
  {
    label: "Bootstrap",
    icon: "/assets/icons/bootstrap.png",
  },
  {
    label: "Tailwind CSS",
    icon: "/assets/icons/tailwindcss.png",
  },
  {
    label: "Git",
    icon: "/assets/icons/git.png",
  },
  {
    label: "GitHub",
    icon: "/assets/icons/github.png",
  },
  {
    label: "VS Code",
    icon: "/assets/icons/vscode.png",
  },
  {
    label: "Postman",
    icon: "/assets/icons/postman.png",
  },
];

function TimelineCards({ data }) {
  return (
    <div className="w-full mt-8 relative">
      {/* Vertical line container that extends the full height of the timeline */}
      <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-gray-300 z-0 transform -translate-x-1/2" />

      {/* Timeline Items */}
      <div className="relative hidden md:block">
        {data.map((item, idx) => {
          const isLeft = idx % 2 === 0;
          const isLast = idx === data.length - 1;

          return (
            <div 
              key={idx} 
              className={`relative flex items-center w-full ${isLast ? "" : "mb-16"}`}
            >
              {/* Left card and connector */}
              <div className="w-1/2 flex justify-end items-center pr-4">
                {isLeft && (
                  <div className="relative">
                    {/* Horizontal line from dot to card */}
                    <div className="absolute right-0 top-1/2 transform translate-x-full -translate-y-1/2 h-1 w-8 bg-gray-300" />
                    <div className="bg-white p-6 rounded-xl shadow-md max-w-md text-center z-10">
                      <h3 className="text-lg font-semibold text-gray-800 mb-1">{item.title}</h3>
                      <div className="text-sm text-gray-500 mb-2">{item.subtitle}</div>
                      <p className="text-gray-600 text-sm">{item.description}</p>
                    </div>
                  </div>
                )}
              </div>

              {/* Dot */}
              <div className="relative z-20 flex flex-col items-center w-10">
                <div className="w-4 h-4 rounded-full bg-[#6366F1] border-4 border-white z-10" />
              </div>

              {/* Right card and connector */}
              <div className="w-1/2 flex justify-start items-center pl-4">
                {!isLeft && (
                  <div className="relative">
                    {/* Horizontal line from dot to card */}
                    <div className="absolute left-0 top-1/2 transform -translate-x-full -translate-y-1/2 h-1 w-8 bg-gray-300" />
                    <div className="bg-white p-6 rounded-xl shadow-md max-w-md text-center z-10">
                      <h3 className="text-lg font-semibold text-gray-800 mb-1">{item.title}</h3>
                      <div className="text-sm text-gray-500 mb-2">{item.subtitle}</div>
                      <p className="text-gray-600 text-sm">{item.description}</p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* Mobile Card View (shown only on mobile) */}
      <div className="md:hidden space-y-6">
        {data.map((item, idx) => (
          <div 
            key={idx} 
            className="bg-white p-6 rounded-xl shadow-md text-center"
          >
            <div className="w-full flex justify-center mb-2">
              {/* <div className="w-4 h-4 rounded-full bg-blue-500 border-4 border-white" /> */}
            </div>
            <h3 className="text-lg font-semibold text-gray-800 mb-1">{item.title}</h3>
            <div className="text-sm text-gray-500 mb-2">{item.subtitle}</div>
            <p className="text-gray-600 text-sm">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Resume() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className="py-10 bg-gray-50 min-h-screen text-gray-900">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-10">
          <div className="text-sm font-medium text-[#6366F1] uppercase tracking-wide mb-2">
            2 Years Experience
          </div>
          <h2 className="text-4xl font-extrabold text-gray-800 tracking-wide">
          My Resume
        </h2>
        <div className="mx-auto mt-2 w-24 h-1 bg-gray-200 relative">
          <div className="absolute left-1/2 -translate-x-1/2 w-12 h-1 bg-[#6366F1] rounded"></div>
        </div>
        </div>

        {/* Tabs */}
        <div className="flex justify-center gap-4 mb-12">
          {tabs.map((tab, idx) => (
            <button
              key={tab.label}
              className={`px-6 py-2 rounded-sm font-semibold transition-all duration-200 border ${
                activeTab === idx
                  ? "bg-[#6366F1] text-white border-[#6366F1]"
                  : "bg-white text-[#6366F1] border-[#6366F1] hover:bg-blue-50"
              }`}
              onClick={() => setActiveTab(idx)}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        {activeTab === 0 && <TimelineCards data={experienceData} />}
        {activeTab === 1 && <TimelineCards data={educationData} />}
        {activeTab === 2 && (
          <div className="flex flex-wrap gap-6 justify-center mt-8">
            {skillsData.map((skill, idx) => (
              <div
                key={idx}
                className="w-20 h-20 flex flex-col items-center justify-center transition-transform duration-300 hover:scale-110"
                title={skill.label}
              >
                <img src={skill.icon} alt={skill.label} className="w-10 h-10 mb-1 object-contain" />
                <span className="text-gray-700 font-semibold text-xs mt-1">{skill.label}</span>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}