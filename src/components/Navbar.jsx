import React, { useEffect, useState, useRef } from "react";

export default function Navbar() {
  const sections = [
    "Home",
    "About",
    "Education",
    "Experience",
    "Projects",
    "Skills",
    "Contact",
  ];
  const [activeSection, setActiveSection] = useState("Home");
  const timeoutRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSections = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visibleSections.length > 0) {
          const sectionId = visibleSections[0].target.id;
          const formattedName =
            sectionId.charAt(0).toUpperCase() + sectionId.slice(1);

          clearTimeout(timeoutRef.current);
          timeoutRef.current = setTimeout(() => {
            setActiveSection(formattedName);
          }, 100);
        }
      },
      {
        threshold: Array.from({ length: 11 }, (_, i) => i / 10),
        rootMargin: "-20% 0px -40% 0px",
      }
    );

    sections.forEach((name) => {
      const element = document.getElementById(name.toLowerCase());
      if (element) observer.observe(element);
    });

    return () => {
      observer.disconnect();
      clearTimeout(timeoutRef.current);
    };
  }, []);

  // 👇 Smooth scroll on click
  const scrollToSection = (sectionName) => {
    const section = document.getElementById(sectionName.toLowerCase());
    if (section) section.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div
      className="hidden md:flex fixed right-10 top-1/2 -translate-y-1/2 flex-col items-center gap-4 
                 z-50 text-gray-400 transition-all duration-700 opacity-100 translate-x-0"
    >
      {/* Section Label */}
      <span
        className="uppercase text-xs tracking-widest text-gray-500 mb-2 text-center transition-all duration-300"
        style={{ width: "80px", display: "inline-block" }}
      >
        {activeSection}
      </span>

      {/* Diamond Dots */}
      <div className="flex flex-col items-center gap-3">
        {sections.map((section) => (
          <button
            key={section}
            onClick={() => scrollToSection(section)}
            className={`w-2 h-2 rotate-45 transition-all duration-300 border ${
              activeSection === section
                ? "bg-cyan-400 border-[#3fa9f5] scale-150 shadow-[0_0_6px_#3fa9f5]"
                : "border-gray-600 hover:border-cyan-400 hover:scale-110"
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
}
