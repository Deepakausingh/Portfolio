import React from "react";
import { Github, ExternalLink } from "lucide-react";
import portfolio from "../assets/portfolio.webp";
import aiDisease from "../assets/aidesease.webp";
import placement from "../assets/placement.webp";
import activityApp from "../assets/activity.webp";
import soapwebsite from "../assets/soapweb.webp";


export default function Projects() {
  const projects = [
    {
      image: soapwebsite,
      title: "Handmade Soap Website",
      description:
        "E-commerce site for handmade soaps with product showcases, shopping cart, and secure checkout.",
      tech: ["React", "Node.js"],
      github: "#",
      live: "https://rustiquemud.vercel.app/",
    },
    {
      image: portfolio,
      title: "Portfolio Website",
      description:
        "A personal portfolio built using React and Tailwind CSS showcasing my projects, skills, and contact information with modern animations and responsive design.",
      tech: ["React", "Tailwind CSS"],
      github: "#",
      live: "",
    },
    {
      image: aiDisease,
      title: "AI Disease Detection",
      description:
        "Implemented a CNN-based medical image segmentation model for disease detection and visualization of affected areas.",
      tech: ["Python", "TensorFlow", "OpenCV"],
      github: "#",
      live: "#",
    },
    {
      image: placement,
      title: "Placement Portal",
      description:
        "A full-stack college placement web app connecting students and recruiters with real-time job updates and resume management.",
      tech: ["React", "Node.js", "MongoDB"],
      github: "#",
      live: "https://web-career-portal-5.onrender.com/",
    },
    {
      image: activityApp,
      title: "Activity Recognition App",
      description:
        "Mobile app using sensor data and ML models to classify user activities and provide real-time movement insights.",
      tech: ["Keras", "Flutter", "Firebase"],
      github: "#",
      live: "#",
    },
  ];

  return (
    <section
      id="projects"
      className="min-h-screen bg-black text-gray-200 flex flex-col items-center justify-center px-6 py-20"
    >
      <h2 className="text-5xl font-bold mb-16 text-cyan-400 text-center">
        Projects
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl w-full">
        {projects.map((project, index) => (
          <div
            key={index}
            className="relative group bg-white/5 backdrop-blur-md border border-white/10 
                       h-[440px] w-full shadow-lg overflow-hidden transition-all duration-300 
                       border-b-2 border-b-cyan-400 hover:shadow-[0_0_40px_rgba(63,169,245,0.4)]"
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

            {/* Project Image */}
            <div className="h-[200px] w-full overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-500 p-1"
              />
            </div>

            {/* Project Content */}
            <div className="p-4 relative z-10 flex flex-col justify-between h-[240px] text-center">
              <div>
                <h3 className="text-xl font-semibold text-cyan-400 mb-1">
                  {project.title}
                </h3>
                <p className="text-gray-300 text-sm mb-2">
                  {project.description}
                </p>

                {/* ✅ Tech Tags with faded border */}
                <div className="flex flex-wrap justify-center gap-2 mb-4">
                  {project.tech.map((t, i) => (
                    <span
                      key={i}
                      className="text-[11px] px-2 py-1 border border-white/20 text-gray-300 rounded-sm"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Buttons */}
              <div className="flex items-center justify-center gap-4">
                <a
                  href={project.github}
                  className="relative px-5 py-2 text-xs font-semibold text-white border border-cyan-400 rounded-full 
                             overflow-hidden group/button transition-all duration-500 hover:text-black hover:shadow-[0_0_40px_rgba(63,169,245,0.6)]"
                >
                  <span className="absolute inset-0 bg-cyan-400 scale-x-0 group-hover/button:scale-x-100 origin-left transition-transform duration-500 ease-in-out"></span>
                  <span className="relative z-10 flex items-center gap-2">
                    <Github className="w-4 h-4" /> Code
                  </span>
                </a>

                <a
                  href={project.live}
                  className="relative px-5 py-2 text-xs font-semibold text-white border border-cyan-400 rounded-full 
                             overflow-hidden group/button transition-all duration-500 hover:text-black hover:shadow-[0_0_40px_rgba(63,169,245,0.4)]"
                >
                  <span className="absolute inset-0 bg-cyan-400 scale-x-0 group-hover/button:scale-x-100 origin-left transition-transform duration-500 ease-in-out"></span>
                  <span className="relative z-10 flex items-center gap-2">
                    <ExternalLink className="w-4 h-4" /> Live
                  </span>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
