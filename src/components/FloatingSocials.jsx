import React from "react";
import { Github, Linkedin, Mail } from "lucide-react";

export default function FloatingSocials() {
  const socials = [
    { icon: <Github size={24} />, url: "https://github.com/pujan314", name: "GitHub" },
    { icon: <Linkedin size={24} />, url: "https://www.linkedin.com/public-profile/settings/?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base%3BcoaQQZjbR%2FaxlRGNzjHMYg%3D%3D", name: "LinkedIn" },
    { icon: <Mail size={24} />, url: "mailto:pujanupreti2@gmail.com", name: "Email" },
  ];

  return (
    <div className="fixed bottom-6 right-6 flex flex-col items-center gap-4 z-50">
      {socials.map((social, i) => (
        <a
          key={i}
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative flex items-center justify-center w-14 h-14 bg-gray-900 text-white rounded-full shadow-lg hover:bg-indigo-500 hover:scale-110 transition-transform duration-300"
          title={social.name}
        >
          {social.icon}
          <span className="absolute -left-28 px-3 py-1 bg-gray-800 text-white rounded-md opacity-0 group-hover:opacity-100 group-hover:left-[-90px] transition-all duration-300 whitespace-nowrap">
            {social.name}
          </span>
        </a>
      ))}
    </div>
  );
}
