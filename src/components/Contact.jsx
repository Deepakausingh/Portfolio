import React from "react";
import { Mail, MapPin, Phone, Github, Linkedin, Twitter, Instagram } from "lucide-react";

export default function Contact() {
  return (
    <section
      id="contact"
      className="min-h-screen bg-black text-gray-200 flex flex-col items-center justify-center px-6 py-20 "
    >

      {/* Main Card */}
      <div
        className="relative group/card bg-white/5 backdrop-blur-md border border-white/10 
                   w-full max-w-6xl mx-auto shadow-lg overflow-hidden 
                   flex flex-col md:flex-row items-stretch transition-all duration-300 border-b-2 border-b-cyan-400"
      >
        {/* 🔹 Animated Border */}
        <span className="absolute inset-0 w-full h-full pointer-events-none" aria-hidden="true">
          <span className="absolute top-0 left-0 w-0 h-[2px] bg-cyan-400 transition-all duration-500 group-hover/card:w-full"></span>
          <span className="absolute bottom-0 right-0 w-0 h-[2px] bg-cyan-400 transition-all duration-500 group-hover/card:w-full delay-200"></span>
          <span className="absolute top-0 right-0 h-0 w-[2px] bg-cyan-400 transition-all duration-500 group-hover/card:h-full delay-100"></span>
          <span className="absolute bottom-0 left-0 h-0 w-[2px] bg-cyan-400 transition-all duration-500 group-hover/card:h-full delay-300"></span>
        </span>

        {/* LEFT SIDE - DETAILS */}
        <div className="relative z-10 md:w-1/2 w-full border-b md:border-b-0 md:border-r border-gray-700 p-10 flex flex-col justify-center">
          <h3 className="text-3xl font-semibold text-cyan-400 mb-4">
            Contact Me
          </h3>

          <div className="space-y-4 text-gray-300">
            <div className="flex items-center space-x-3">
              <MapPin className="text-cyan-400 w-6 h-6" />
              <span>Varanasi, Uttar Pradesh, India</span>
            </div>
            <div className="flex items-center space-x-3">
              <Phone className="text-cyan-400 w-6 h-6" />
              <span>+91 7880414295</span>
            </div>
            <div className="flex items-center space-x-3">
              <Mail className="text-cyan-400 w-6 h-6" />
              <span>deepakausingh@gmail.com</span>
            </div>
          </div>

          {/* 🔹 Social Icons */}
          <div className="flex space-x-4 mt-8">
            <a href="https://github.com/" target="_blank" rel="noopener noreferrer"
              className="p-2 border border-cyan-400/50 hover:bg-cyan-400 hover:text-black transition-all">
              <Github className="w-6 h-6" />
            </a>
            <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer"
              className="p-2 border border-cyan-400/50 hover:bg-cyan-400 hover:text-black transition-all">
              <Linkedin className="w-6 h-6" />
            </a>
            <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer"
              className="p-2 border border-cyan-400/50 hover:bg-cyan-400 hover:text-black transition-all">
              <Twitter className="w-6 h-6" />
            </a>
            <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer"
              className="p-2 border border-cyan-400/50 hover:bg-cyan-400 hover:text-black transition-all">
              <Instagram className="w-6 h-6" />
            </a>
          </div>
        </div>

        {/* RIGHT SIDE - FORM */}
        <div className="relative z-10 md:w-1/2 w-full p-10 flex flex-col justify-center">
          <form
            className="flex flex-col space-y-6"
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-3 bg-transparent border border-cyan-400/50 text-white 
                         focus:outline-none focus:border-cyan-400 transition-all duration-300"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-3 bg-transparent border border-cyan-400/50 text-white 
                         focus:outline-none focus:border-cyan-400 transition-all duration-300"
            />
            <textarea
              placeholder="Your Message"
              rows="5"
              className="w-full p-3 bg-transparent border border-cyan-400/50 text-white 
                         focus:outline-none focus:border-cyan-400 transition-all duration-300 resize-none"
            ></textarea>

            {/* ✅ Compact Button */}
            <div className="flex justify-center">
              <button
                type="submit"
                className="relative inline-block border border-white/40 text-white font-semibold 
                           px-4 py-2 rounded-full overflow-hidden group/button transition-all duration-300 
                           hover:shadow-[0_0_20px_rgba(63,169,245,0.6)] text-sm tracking-wide"
              >
                <span
                  className="absolute inset-0 bg-cyan-400 scale-x-0 origin-right 
                                 group-hover/button:origin-left group-hover/button:scale-x-100 
                                 transition-transform duration-700 ease-in-out z-0 
                                 shadow-[0_0_10px_rgba(63,169,245,0.8)] 
                                 group-hover/button:shadow-[0_0_25px_rgba(63,169,245,1)] rounded-full"
                ></span>
                <span className="relative z-10 group-hover/button:text-black transition-all duration-500">
                  Send Message
                </span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
