import React, { useEffect, useState } from "react";
import logo from "../assets/logo.webp"; // 🖼️ Replace with your logo path

export default function Loader({ onFinish }) {
  const [progress, setProgress] = useState(0);
  const [blink, setBlink] = useState(false);

  useEffect(() => {
    let interval = setInterval(() => {
      setProgress((prev) => {
        if (prev < 100) {
          const newProgress = prev + 5; // ⚡ faster loading speed
          if (newProgress >= 80 && !blink) setBlink(true); // start blinking at 80%
          return newProgress;
        }
        clearInterval(interval);
        setTimeout(onFinish, 300); // faster finish delay
        return 100;
      });
    }, 40); // shorter interval for faster progress

    return () => clearInterval(interval);
  }, [onFinish, blink]);

  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-black z-[9999]">
      {/* Logo */}
      <img
        src={logo}
        alt="Logo"
        className={`w-50 h-50 mb-8 transition-transform duration-700 ease-out ${
          blink ? "animate-blink" : "scale-up"
        }`}
        style={{
          transform: blink ? "scale(1)" : `scale(${progress / 100})`,
        }}
      />

      {/* Progress Bar (2px height, no rounded corners) */}
      <div className="w-64 h-[2px] bg-gray-700 overflow-hidden">
        <div
          className="h-full bg-[#3fa9f5]"
          style={{
            width: `${progress}%`,
            transition: "width 0.05s linear",
          }}
        ></div>
      </div>
    </div>
  );
}
