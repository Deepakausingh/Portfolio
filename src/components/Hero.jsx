import React, { useEffect, useState, useRef } from "react";
import { FaArrowRight } from "react-icons/fa";
import profileImg from "../assets/profile2.jpg";

export default function Hero() {
  const [activeSection, setActiveSection] = useState("Home");
  const [sidebarVisible, setSidebarVisible] = useState(true);
  const inactivityTimer = useRef(null);

  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const fullText = "WELCOME";
  const typingSpeed = 150;
  const deletingSpeed = 100;
  const delayBetween = 1000;

  // Typing effect
  useEffect(() => {
    let timer;
    const handleTyping = () => {
      if (!isDeleting) {
        if (text.length < fullText.length) {
          setText(fullText.substring(0, text.length + 1));
          timer = setTimeout(handleTyping, typingSpeed);
        } else {
          timer = setTimeout(() => setIsDeleting(true), delayBetween);
        }
      } else {
        if (text.length > 0) {
          setText(fullText.substring(0, text.length - 1));
          timer = setTimeout(handleTyping, deletingSpeed);
        } else {
          setIsDeleting(false);
          timer = setTimeout(handleTyping, typingSpeed);
        }
      }
    };
    timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting]);

  // Detect current section
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      const scrollY = window.scrollY + window.innerHeight / 2;
      let current = "Home";

      sections.forEach((sec) => {
        if (
          scrollY >= sec.offsetTop &&
          scrollY < sec.offsetTop + sec.offsetHeight
        ) {
          current = sec.getAttribute("id") || "Home";
        }
      });

      setActiveSection(current);
      resetInactivityTimer();
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Sidebar inactivity
  useEffect(() => {
    const handleActivity = () => resetInactivityTimer();

    window.addEventListener("mousemove", handleActivity);
    window.addEventListener("scroll", handleActivity);
    window.addEventListener("keydown", handleActivity);

    resetInactivityTimer();

    return () => {
      window.removeEventListener("mousemove", handleActivity);
      window.removeEventListener("scroll", handleActivity);
      window.removeEventListener("keydown", handleActivity);
      clearTimeout(inactivityTimer.current);
    };
  }, [activeSection]);

  const resetInactivityTimer = () => {
    if (window.innerWidth <= 768) {
      setSidebarVisible(false);
      return;
    }
    setSidebarVisible(true);
    clearTimeout(inactivityTimer.current);
    if (activeSection.toLowerCase() !== "home") {
      inactivityTimer.current = setTimeout(
        () => setSidebarVisible(false),
        2000
      );
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex text-white font-poppins relative overflow-hidden bg-[#000000]"
    >
      <div className="flex-grow ml-20 flex flex-col">
        {/* 👇 Main container with responsive justify behavior */}
        <div className="hero flex flex-col md:flex-row items-center justify-center md:justify-between gap-10 flex-grow w-full px-6 md:px-24 relative overflow-hidden">
          {/* Text Section */}
          <div className="text max-w-xl z-20 text-center md:text-left mt-10 md:mt-0">
            <span className="block text-gray-400 text-xs tracking-widest uppercase mb-4 font-semibold">
              {text}
              <span className="border-r-2 border-cyan-400 ml-1 animate-pulse"></span>
            </span>

            <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-2">
              Deepak Singh
            </h1>
            <p className="text-base text-gray-400 my-5 leading-relaxed">
              A <strong>software developer</strong> and{" "}
              <strong>UI designer</strong> with a passion for creating elegant,
              user-friendly digital experiences. <br />
              I love turning complex problems into simple, intuitive solutions
              that deliver real impact.
            </p>

            {/* Button */}
            <a
              href="#projects"
              className="relative inline-block border border-cyan-400 text-white px-8 py-3 rounded-full text-sm overflow-hidden group hover:text-black font-bold"
            >
              <span className="relative z-10 flex items-center justify-center md:justify-start gap-2">
                view my work <FaArrowRight />
              </span>
              <span className="absolute inset-0 bg-cyan-400 scale-x-0 group-hover:scale-x-100 origin-right group-hover:origin-left transition-transform duration-500 ease-in-out z-0"></span>
            </a>
          </div>

          {/* Profile Image */}
          <div className="relative hidden md:flex justify-center items-center mt-10 md:mt-0">
            <div
              className="w-[250px] h-[250px] md:w-[500px] md:h-[500px] bg-center bg-cover relative overflow-hidden rounded-full md:rounded-none"
              style={{ backgroundImage: `url(${profileImg})` }}
            ></div>
          </div>
        </div>
      </div>
    </section>
  );
}
