import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import {
  Mail,
  MapPin,
  Phone,
  Github,
  Linkedin,
  Twitter,
  Instagram,
  CheckCircle,
  XCircle,
} from "lucide-react";

export default function Contact() {
  const form = useRef();
  const [status, setStatus] = useState("");
  const [showPopup, setShowPopup] = useState(false);
  const [popupState, setPopupState] = useState("sending"); // "sending", "success", "error"

  const sendEmail = async (e) => {
    e.preventDefault();
    setStatus("Sending...");
    setPopupState("sending");
    setShowPopup(true);

    try {
      // 1️⃣ Send main message to YOU
      await emailjs.sendForm(
        "service_z9vt0su",
        "template_gfw1f4i",
        form.current,
        "rR7XI1Sik1eVF6TqW"
      );

      // 2️⃣ Send auto reply to USER
      await emailjs.sendForm(
        "service_z9vt0su",
        "template_ni8cy6q",
        form.current,
        "rR7XI1Sik1eVF6TqW"
      );

      setStatus("Thankyou");
      setPopupState("success");
      form.current.reset();
    } catch (error) {
      console.error("Error:", error);
      setStatus("Failed to Send ❌");
      setPopupState("error");
    }

    // Hide popup automatically after 3 seconds
    setTimeout(() => {
      setShowPopup(false);
    }, 3000);
  };

  return (
    <section
      id="contact"
      className="min-h-screen bg-black text-gray-200 flex flex-col items-center justify-center px-6 py-20"
    >
      {/* ✅ Popup Message */}
      {showPopup && (
        <div
          className={`fixed top-6 right-6 z-50 flex items-center gap-3 px-6 py-3 
                      shadow-lg backdrop-blur-md border-2 font-medium
                      transition-all duration-300
                      ${
                        popupState === "success"
                          ? "border-green-500 text-green-400 bg-black/80"
                          : popupState === "error"
                          ? "border-red-500 text-red-400 bg-black/80"
                          : "border-cyan-400 text-cyan-300 bg-black/80 animate-borderRun"
                      }`}
          style={{ borderRadius: "0" }}
        >
          {popupState === "success" ? (
            <CheckCircle className="w-5 h-5 text-green-400" />
          ) : popupState === "error" ? (
            <XCircle className="w-5 h-5 text-red-400" />
          ) : (
            <Mail className="w-5 h-5 text-cyan-400 animate-pulse" />
          )}
          <span>{status}</span>
        </div>
      )}

      <div
        className="relative group/card bg-white/5 backdrop-blur-md border border-white/10 
                   w-full max-w-6xl mx-auto shadow-lg overflow-hidden 
                   flex flex-col md:flex-row items-stretch transition-all duration-300 border-b-2 hover:shadow-[0_0_40px_rgba(63,169,245,0.4)] border-b-cyan-400"
      >
        <span className="absolute inset-0 w-full h-full pointer-events-none" aria-hidden="true">
          <span className="absolute top-0 left-0 w-0 h-[2px] bg-cyan-400 transition-all duration-500 group-hover/card:w-full"></span>
          <span className="absolute bottom-0 right-0 w-0 h-[2px] bg-cyan-400 transition-all duration-500 group-hover/card:w-full delay-200"></span>
          <span className="absolute top-0 right-0 h-0 w-[2px] bg-cyan-400 transition-all duration-500 group-hover/card:h-full delay-100"></span>
          <span className="absolute bottom-0 left-0 h-0 w-[2px] bg-cyan-400 transition-all duration-500 group-hover/card:h-full delay-300"></span>
        </span>
        {/* LEFT SIDE */}
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

          <div className="flex space-x-4 mt-8">
            <a
              href="https://github.com/"
              className="p-2 border border-cyan-400/50 hover:bg-cyan-400 hover:text-black transition-all"
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href="https://linkedin.com/"
              className="p-2 border border-cyan-400/50 hover:bg-cyan-400 hover:text-black transition-all"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a
              href="https://twitter.com/"
              className="p-2 border border-cyan-400/50 hover:bg-cyan-400 hover:text-black transition-all"
            >
              <Twitter className="w-6 h-6" />
            </a>
            <a
              href="https://instagram.com/"
              className="p-2 border border-cyan-400/50 hover:bg-cyan-400 hover:text-black transition-all"
            >
              <Instagram className="w-6 h-6" />
            </a>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="relative z-10 md:w-1/2 w-full p-10 flex flex-col justify-center">
          <form ref={form} onSubmit={sendEmail} className="flex flex-col space-y-6">
            <input
              type="text"
              name="user_name"
              placeholder="Your Name"
              className="w-full p-3 bg-transparent border border-cyan-400/50 text-white 
                         focus:outline-none focus:border-cyan-400 transition-all duration-300"
              required
            />
            <input
              type="email"
              name="user_email"
              placeholder="Your Email"
              className="w-full p-3 bg-transparent border border-cyan-400/50 text-white 
                         focus:outline-none focus:border-cyan-400 transition-all duration-300"
              required
            />
            <textarea
              name="message"
              placeholder="Your Message"
              rows="5"
              className="w-full p-3 bg-transparent border border-cyan-400/50 text-white 
                         focus:outline-none focus:border-cyan-400 transition-all duration-300 resize-none"
              required
            ></textarea>

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
