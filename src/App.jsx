import React from "react";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import FloatingSocials from "./components/FloatingSocials";

function App() {
  return (
    <div className="relative">
      <Navbar />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <FloatingSocials />
    </div>
  );
}

export default App;
