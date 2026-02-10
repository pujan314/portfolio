import React from "react";

// You can replace these with actual images or leave them as placeholders
import PythonIcon from "../assets/icons/python.png";
import ReactIcon from "../assets/icons/react.png";
import MLIcon from "../assets/icons/ml.png";
import FirebaseIcon from "../assets/icons/firebase.png";
import JSIcon from "../assets/icons/js.png";
import DesignIcon from "../assets/icons/design.png";
import GitIcon from "../assets/icons/github.png";

export default function Skills() {
  const skills = [
    { name: "Python", icon: PythonIcon },
    { name: "React", icon: ReactIcon },
    { name: "Machine Learning", icon: MLIcon },
    { name: "Firebase", icon: FirebaseIcon },
    { name: "JavaScript", icon: JSIcon },
    { name: "UI/UX Design", icon: DesignIcon },
    { name: "Git & GitHub", icon: GitIcon },
  ];

  return (
    <section className="skills-section" id="skills">
      <h2 className="section-title">My Skills</h2>
      <div className="skills-grid">
        {skills.map((skill, i) => (
          <div key={i} className="skill-card">
            <img
              src={skill.icon}
              alt={skill.name}
              className="skill-icon"
              onError={(e) => (e.target.style.display = "none")} // hide broken images
            />
            <span className="skill-name">{skill.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
