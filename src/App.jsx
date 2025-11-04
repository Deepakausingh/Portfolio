import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Loader from "./components/Loader";

export default function App() {
  const [showSidebar, setShowSidebar] = useState(true);
  const [showLoader, setShowLoader] = useState(false);

  useEffect(() => {
    const heroSection = document.getElementById("hero");

    const observer = new IntersectionObserver(
      ([entry]) => setShowSidebar(entry.isIntersecting),
      { threshold: 0.3 }
    );

    if (heroSection) observer.observe(heroSection);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const hasVisited = localStorage.getItem("hasVisited");
    if (!hasVisited) {
      setShowLoader(true);
      localStorage.setItem("hasVisited", "true");
    }
  }, []);

  if (showLoader) {
    return <Loader onFinish={() => setShowLoader(false)} />;
  }

  return (
    <div>
      <Navbar />
      <Sidebar visible={showSidebar} />
      <main>
        <section id="hero"><Hero /></section>
        <section id="about"><About /></section>
        <section id="education"><Education /></section>
        <section id="experience"><Experience /></section>
        <section id="projects"><Projects /></section>
        <section id="skills"><Skills /></section>
        <section id="contact"><Contact /></section>
      </main>
      <Footer />
    </div>
  );
}
