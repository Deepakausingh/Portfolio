import React from "react";
import profileImage from "../assets/profile.jpg"; // <-- your image
import resumeFile from "../assets/resume.pdf"; // <-- add resume file
import cvFile from "../assets/cv.pdf"; // <-- add CV file

export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen bg-black text-gray-200 flex flex-col md:flex-row items-center justify-center gap-5 px-5 py-10 md:py-0"
    >
      {/* Left Section - Image */}
      <div className="w-full md:w-1/2 flex justify-center md:justify-center mb-5 md:mb-0">
        <div className="relative w-96 h-96 md:w-[500px] md:h-[500px] rounded-full overflow-hidden">
          <img
            src={profileImage}
            alt="Profile"
            className="w-full h-full object-cover rounded-full shadow-[0_0_80px_rgba(63,169,245,0.6)]"
            style={{
              WebkitMaskImage:
                "radial-gradient(circle at center, black 65%, transparent 100%)",
              maskImage:
                "radial-gradient(circle at center, black 65%, transparent 100%)",
            }}
          />
        </div>
      </div>

      {/* Right Section - Details */}
      <div className="w-full md:w-1/2 text-center md:text-start md:pr-20">
        <h2 className="text-5xl font-bold mb-6 text-cyan-400">About Me</h2>
        <p className="text-lg text-gray-300 leading-relaxed max-w-xl mx-auto md:mx-0">
          I’m a creative React developer passionate about building dynamic and
          visually engaging web applications. I specialize in crafting
          responsive, high-performance user interfaces with clean and scalable
          code.
        </p>

        <p className="mt-6 text-lg text-gray-400 leading-relaxed max-w-xl mx-auto md:mx-0">
          My work blends functionality with design — I focus on creating smooth
          animations, modern layouts, and interactive experiences that connect
          users with technology in meaningful ways.
        </p>

        {/* Contact / Links Section */}
        <div className="mt-10 flex flex-col gap-2 text-lg text-gray-300 max-w-xl mx-auto md:mx-0">
          <p>
            <span className="text-cyan-400 font-semibold">Resume :</span>{" "}
            <a
              href={resumeFile}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#ea9c00] hover:underline transition-all duration-300"
            >
              resume.pdf
            </a>
          </p>
          <p>
            <span className="text-cyan-400 font-semibold">CV :</span>{" "}
            <a
              href={cvFile}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#ea9c00] hover:underline transition-all duration-300"
            >
              cv.pdf
            </a>
          </p>
          <p>
            <span className="text-cyan-400 font-semibold">Email :</span>{" "}
            <a
              href="mailto:dksap1000@gmail.com"
              className="hover:text-[#ea9c00] hover:underline transition-all duration-300"
            >
              dksap1000@gmail.com
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
