import React from "react";

export default function Footer() {
  return (
    <footer className="py-6 text-center bg-black/70 border-t border-white/10">
      <p className="text-gray-400 text-sm">
        © {new Date().getFullYear()} Deepak — Crafted with ❤️ using React &
        Tailwind CSS
      </p>
    </footer>
  );
}
