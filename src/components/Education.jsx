import React from "react";

export default function Education() {
  const education = [
    {
      degree: "Bachelor of Engineering | Computer Science",
      institution: "Dr. B.R Ambedkar University | Agra | India",
      year: "2021 - 2025",
      details:
        "Focused on Software Development, Web Technologies, and Artificial Intelligence.",
      coursework: [
        "Engineering Mathematics",
        "Language : C , Python",
        "Data Structures and Algorithms",
        "Database Management Systems",
        "Operating Systems",
        "Computer Networks",
        "Artificial Intelligence and Machine Learning",
        "CGPA : 7.5 | 10",
      ],
    },
    {
      degree: "Higher Secondary (12th)",
      institution: "Shandilya Public School | Varanasi | India",
      year: "2018 - 2020",
      details:
        "Studied Physics, Chemistry, and Mathematics with a focus on analytical and conceptual problem-solving.",
      coursework: [
        "Mathematics",
        "Physics",
        "Chemistry",
        "Physical Education",
        "Participated in School Science Exhibition and Math Olympiad.",
        "Served as Class Representative in 2019 for Academic Events.",
        "Completed with 72% aggregate.",
      ],
    },
    {
      degree: "High School (10th)",
      institution: "Shandilya Public School | Varanasi | India",
      year: "2017 - 2018",
      details:
        "Achieved distinction in Science and Mathematics with excellent academic performance.",
      coursework: [
        "Core Subjects: Science, Mathematics, English, Social Studies, Computer Science",
        "Awarded for Excellence in Science and Mathematics.",
        "Participated in National Science Quiz Competition (2018).",
        "Served as Class Representative for Academic Year 2017–2018.",
        "Completed with 84% aggregate.",
      ],
    },
  ];

  return (
    <section
      id="education"
      className="min-h-screen bg-black text-gray-200 flex flex-col items-center justify-center px-6 py-20"
    >
      <h2 className="text-5xl font-bold mb-16 text-cyan-400 text-center">
        Education
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-6xl">
        {education.map((edu, index) => (
          <div
            key={index}
            className="relative group bg-white/5 backdrop-blur-md border border-white/10 h-[600px] w-full shadow-lg 
                       overflow-hidden transition-all duration-300 
                       border-b-2 border-b-cyan-400 hover:shadow-[0_0_40px_rgba(63,169,245,0.4)]"
          >
            {/* Animated Diagonal Border */}
            <span
              className="absolute inset-0 w-full h-full pointer-events-none"
              aria-hidden="true"
            >
              <span className="absolute top-0 left-0 w-0 h-[2px] bg-cyan-400 transition-all duration-500 group-hover:w-full"></span>
              <span className="absolute bottom-0 right-0 w-0 h-[2px] bg-cyan-400 transition-all duration-500 group-hover:w-full delay-200"></span>
              <span className="absolute top-0 right-0 h-0 w-[2px] bg-cyan-400 transition-all duration-500 group-hover:h-full delay-100"></span>
              <span className="absolute bottom-0 left-0 h-0 w-[2px] bg-cyan-400 transition-all duration-500 group-hover:h-full delay-300"></span>
            </span>

            <div className="p-6 relative z-10">
              <h3 className="text-2xl font-semibold text-cyan-400 mb-2">
                {edu.degree}
              </h3>
              <p className="text-gray-200 font-medium">{edu.institution}</p>
              <p className="text-gray-400 text-sm mb-3">{edu.year}</p>
              <p className="text-gray-300 mb-3">{edu.details}</p>

              {edu.coursework.length > 0 && (
                <>
                  <p className="text-gray-200 font-semibold mb-2">
                    Relevant Coursework:
                  </p>
                  <ul className="list-disc list-inside text-gray-400 space-y-1 ml-5">
                    {edu.coursework.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
