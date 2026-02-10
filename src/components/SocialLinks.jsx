import React from "react";
import { Github, Linkedin, Mail } from "lucide-react";

export default function SocialLinks() {
  const links = [
    { icon: <Github size={20} />, url: "https://github.com/pujan314", name: "GitHub" },
    { icon: <Linkedin size={20} />, url: "https://www.linkedin.com/in/pujan-upreti-3735b71a4/", name: "LinkedIn" },
    { icon: <Mail size={20} />, url: "https://mail.google.com/", name: "Email" },
  ];

  return (
    <div className="fixed top-1/3 left-0 flex flex-col gap-4 z-50">
      {links.map((link, i) => (
        <a
          key={i}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 bg-gray-900 text-white px-4 py-2 rounded-r-lg shadow-lg hover:bg-indigo-500 transition-all duration-300 transform hover:translate-x-2"
          title={link.name}
        >
          {link.icon}
          <span className="hidden md:inline">{link.name}</span>
        </a>
      ))}
    </div>
  );
}
