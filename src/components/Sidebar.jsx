import React from "react";
import { FaEnvelope, FaLinkedinIn, FaInstagram } from "react-icons/fa";
// 👇 Import your logo image
import logo from "../assets/logo.webp"; // <-- change the file name & path as needed

export default function Sidebar({ visible }) {
  return (
    <aside
      className={`fixed left-0 top-0 w-20 h-screen flex flex-col justify-between items-center py-8 z-50 bg-transparent 
      transform transition-all duration-700 ease-in-out
      ${visible ? "translate-x-0 opacity-100" : "-translate-x-20 opacity-0 pointer-events-none"}`}
    >
      {/* ✅ Image Logo */}
      <div className="logo w-12 h-12">
        <img
          src={logo}
          alt="Logo"
          className="w-full h-full object-contain"
        />
      </div>

      {/* Vertical Text */}
      <div className="flex-1 flex items-center justify-center">
        <div className="uppercase tracking-wider text-xs text-gray-400 rotate-180 [writing-mode:vertical-rl]">
          designer / developer
        </div>
      </div>

      {/* Social Icons */}
      <div className="flex flex-col items-center mt-auto mb-8 sm:mb-4 space-y-4">
        <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors hover:shadow-[0_0_40px_rgba(63,169,245,0.6)]">
          <FaEnvelope />
        </a>
        <a href="https://www.linkedin.com/in/deepakdan/" className="text-gray-400 hover:text-cyan-400 transition-colors hover:shadow-[0_0_40px_rgba(63,169,245,0.6)]">
          <FaLinkedinIn />
        </a>
        <a href="" className="text-gray-400 hover:text-cyan-400 transition-colors hover:shadow-[0_0_40px_rgba(63,169,245,0.6)]">
          <FaInstagram />
        </a>
      </div>
    </aside>
  );
}
