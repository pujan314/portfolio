import React from "react";
import "./Section.css"; // reuse your CSS file

export default function About() {
  return (
    <section className="about-section" id="about">
      <div className="about-container">
        <div className="about-text">
          <h2>About Me</h2>
          <p>
            Hi, I'm <span className="highlight">Pujan Upreti</span>, an AI Enthusiast, Data Analyst, and Web Developer.  
            I specialize in <span className="highlight">machine learning</span>, <span className="highlight">data analysis</span>, and creating modern web applications with clean <span className="highlight">UI/UX</span>.  
            I love building intelligent systems and sleek digital experiences.
          </p>
        </div>
        <div className="about-image">
          <img
            src="/profile.png" // put your image in public folder as profile.jpg
            alt="Pujan Upreti"
          />
        </div>
      </div>
    </section>
  );
}
