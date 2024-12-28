import React from "react";

const ScrollingText: React.FC = () => {
  return (
    <div className="overflow-hidden whitespace-nowrap border-none border-t border-b border-r-transparent border-l-transparent bg-yellow-300">
      <div className="inline-block animate-scroll text-black text-sm font-semibold  font-mono py-[0.5rem]">
        🚀 Welcome to my portfolio! | 💼 Full-stack developer specializing in
        React, Django, FastAPI, and PostgreSQL | 🌐 Proficient in REST APIs,
        GraphQL, and WebSockets | ⚡ Passionate about crafting scalable and
        efficient solutions | 🛠️ Skilled in Docker, Redis, and Tailwind CSS | 🚀
        Let's build something amazing together!
      </div>
    </div>
  );
};

export default ScrollingText;
