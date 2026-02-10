import React from "react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="hero">
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Hi, I'm <span className="highlight">Pujan Upreti</span>
      </motion.h1>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        AI Enthusiast • Data Analyst • Web Developer
      </motion.p>
      <div className="hero-buttons">
        <a href="#projects" className="btn primary">View Projects</a>
        <a href="#contact" className="btn secondary">Contact Me</a>
      </div>
    </section>
  );
}
