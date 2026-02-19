import React from "react";
import { Briefcase, Code, Monitor, Brain } from "lucide-react";

export default function Experience() {
  const experiences = [
    {
      icon: <Code className="w-10 h-10 text-cyan-400 mb-4" />,
      role: "Frontend Developer Intern",
      company: "TechSpark Innovations | Remote",
      year: "Jun 2024 – Sep 2024",
      description:
        "Worked on responsive React.js interfaces with Tailwind CSS and Framer Motion. Improved performance by 20% through optimized rendering and component reusability.",
    },
    {
      icon: <Monitor className="w-10 h-10 text-cyan-400 mb-4" />,
      role: "Web Developer Intern",
      company: "Webify Studios | Delhi, India",
      year: "Jan 2024 – Apr 2024",
      description:
        "Designed and implemented user-friendly dashboards using React, integrated APIs, and improved UI accessibility following WCAG standards.",
    },
    {
      icon: <Brain className="w-10 h-10 text-cyan-400 mb-4" />,
      role: "Software Engineer Intern",
      company: "Extion Infoteh | Agra, India",
      year: "June 2024 – Aug 2024",
      description:
        "Hands ON experience with the full software development lifecycle, from requirements gathering to deployment.",
    },
    {
      icon: <Briefcase className="w-10 h-10 text-cyan-400 mb-4" />,
      role: "Freelance Developer",
      company: "Independent Projects | Remote",
      year: "2022 – Present",
      description:
        "Delivered full-stack web applications for clients, including eCommerce websites and portfolio pages with animation and responsive design.",
    },
  ];

  return (
    <section
      id="experience"
      className="min-h-screen bg-black text-gray-200 flex flex-col items-center justify-center px-6 py-20"
    >
      <h2 className="text-5xl font-bold mb-16 text-cyan-400 text-center">
        Experience
      </h2>

      {/* 👇 3 cards per row with smaller horizontal gap */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-3 gap-y-5 max-w-6xl w-full">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className="relative group bg-white/5 backdrop-blur-md border border-white/10 
                       h-[340px] w-[95%] p-8 shadow-lg overflow-hidden transition-all 
                       duration-300 border-b-2 border-b-cyan-400 hover:shadow-[0_0_40px_rgba(63,169,245,0.4)] mx-auto"
          >
            {/* Hover border animation */}
            <span
              className="absolute inset-0 w-full h-full pointer-events-none"
              aria-hidden="true"
            >
              <span className="absolute top-0 left-0 w-0 h-[2px] bg-cyan-400 transition-all duration-500 group-hover:w-full"></span>
              <span className="absolute bottom-0 right-0 w-0 h-[2px] bg-cyan-400 transition-all duration-500 group-hover:w-full delay-200"></span>
              <span className="absolute top-0 right-0 h-0 w-[2px] bg-cyan-400 transition-all duration-500 group-hover:h-full delay-100"></span>
              <span className="absolute bottom-0 left-0 h-0 w-[2px] bg-cyan-400 transition-all duration-500 group-hover:h-full delay-300"></span>
            </span>

            {/* Card content */}
            <div className="relative z-10 text-center md:text-left flex flex-col items-center md:items-start">
              {exp.icon}
              <h3 className="text-xl font-semibold text-cyan-400 mb-1">
                {exp.role}
              </h3>
              <p className="text-gray-300 font-medium mb-1">{exp.company}</p>
              <p className="text-gray-500 text-sm mb-3">{exp.year}</p>
              <p className="text-gray-400 text-sm leading-relaxed">
                {exp.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
