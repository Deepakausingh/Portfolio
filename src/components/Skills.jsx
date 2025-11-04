import React from "react";
import { Monitor, Palette, Cpu, Database, Globe, Terminal } from "lucide-react";

export default function Skills() {
  const skills = [
    {
      icon: <Monitor className="w-10 h-10 text-cyan-400 mb-4" />,
      title: "Software Development",
      description:
        "The languages/technologies that I use most often change with the project that I'm working on and it's fun to pick up new skills!",
    },
    {
      icon: <Database className="w-10 h-10 text-cyan-400 mb-4" />,
      title: "Fullstack Development",
      description:
        "Experience working with modern frameworks like React, Tailwind, REST APIs, Node.js, and databases like MongoDB and MySQL to handle scalable systems.",
    },
    {
      icon: <Cpu className="w-10 h-10 text-cyan-400 mb-4" />,
      title: "Machine Learning",
      description:
        "Knowledge in Python, TensorFlow, and Scikit-learn to train and deploy predictive models efficiently.",
    },
    {
      icon: <Palette className="w-10 h-10 text-cyan-400 mb-4" />,
      title: "UI / UX Design",
      description:
        "I focus on creating intuitive and visually appealing user interfaces with pixel-perfect design sense.",
    },
    {
      icon: <Terminal className="w-10 h-10 text-cyan-400 mb-4" />,
      title: "Programming",
      description:
        "Proficient in Python, JavaScript, and C for developing efficient, clean, and optimized codebases.",
    },
    {
      icon: <Globe className="w-10 h-10 text-cyan-400 mb-4" />,
      title: "Deployment & Hosting",
      description:
        "Skilled in deploying web apps using platforms like Vercel, Netlify, and AWS for fast and reliable hosting.",
    },
  ];

  return (
    <section
      id="skills"
      className="min-h-screen bg-black text-gray-200 flex flex-col items-center justify-center px-6 py-20"
    >
      <h2 className="text-5xl font-bold mb-16 text-cyan-400 text-center">
        Skills
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl w-full">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="relative group bg-white/5 backdrop-blur-md border border-white/10 
                       h-[280px] w-full p-8 shadow-lg overflow-hidden transition-all 
                       duration-300 border-b-2 border-b-cyan-400 hover:shadow-[0_0_40px_rgba(63,169,245,0.4)]"
          >
            {/* Border Animation */}
            <span
              className="absolute inset-0 w-full h-full pointer-events-none"
              aria-hidden="true"
            >
              <span className="absolute top-0 left-0 w-0 h-[2px] bg-cyan-400 transition-all duration-500 group-hover:w-full"></span>
              <span className="absolute bottom-0 right-0 w-0 h-[2px] bg-cyan-400 transition-all duration-500 group-hover:w-full delay-200"></span>
              <span className="absolute top-0 right-0 h-0 w-[2px] bg-cyan-400 transition-all duration-500 group-hover:h-full delay-100"></span>
              <span className="absolute bottom-0 left-0 h-0 w-[2px] bg-cyan-400 transition-all duration-500 group-hover:h-full delay-300"></span>
            </span>

            <div className="relative z-10 flex flex-col items-center text-center">
              {skill.icon}
              <h3 className="text-xl font-semibold text-cyan-400 mb-2">
                {skill.title}
              </h3>
              <p className="text-gray-300 leading-relaxed text-sm">
                {skill.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
