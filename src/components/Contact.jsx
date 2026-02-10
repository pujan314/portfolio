import React from "react";
import { motion } from "framer-motion";
import { Mail, Github, Linkedin, Twitter } from "lucide-react";

export default function Contact() {
  const contacts = [
    {
      name: "Email",
      icon: <Mail size={20} />,
      link: "https://mail.google.com/mail/?view=cm&to=pujanupreti2@gmail.com",
      color: "#8a2be2",
    },
    {
      name: "GitHub",
      icon: <Github size={20} />,
      link: "https://github.com/pujan314",
      color: "#333",
    },
    {
      name: "LinkedIn",
      icon: <Linkedin size={20} />,
      link: "https://linkedin.com/in/pujan314",
      color: "#0A66C2",
    },
    {
      name: "Twitter",
      icon: <Twitter size={20} />,
      link: "https://twitter.com/pujan314",
      color: "#1DA1F2",
    },
  ];

  return (
    <section
      id="contact"
      className="contact-section flex flex-col items-center justify-center py-20 px-6 bg-gradient-to-b from-gray-900 to-black text-white"
    >
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="text-4xl font-bold mb-10 text-indigo-400"
      >
        Contact Me
      </motion.h2>

      <div className="flex flex-wrap gap-6 justify-center">
        {contacts.map((c, i) => (
          <motion.a
            key={i}
            href={c.link}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2 }}
            className="flex items-center gap-3 px-6 py-3 rounded-2xl bg-gray-800 hover:bg-gray-700 transition transform hover:scale-105"
            style={{ borderColor: c.color }}
          >
            <span className="text-indigo-400">{c.icon}</span>
            <span className="font-semibold">{c.name}</span>
          </motion.a>
        ))}
      </div>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
        className="mt-10 text-gray-400 text-center max-w-xl"
      >
        Feel free to reach out to me via any of these platforms. I’d love to
        collaborate, share ideas, or answer questions about my projects.
      </motion.p>
    </section>
  );
}
