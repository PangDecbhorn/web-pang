"use client";

import Image from "next/image";

const skills = [
  { name: "HTML", icon: "/skills-page/html.png" },
  { name: "CSS", icon: "/skills-page/css-3.png" },
  { name: "TypeScript", icon: "/skills-page/typescript.png" },
  { name: "JavaScript", icon: "/skills-page/js.png" },
  { name: "LineDeveloper", icon: "/skills-page/line.png" },
  { name: "GitHub", icon: "/skills-page/github.png" },
  { name: "Node.js", icon: "/skills-page/nodejs.png" },
  { name: "Firebase", icon: "/skills-page/firebase.png" },
  { name: "Python", icon: "/skills-page/python.png" },
  { name: "Power BI", icon: "/skills-page/business-intelligence.png" },
  { name: "Loker Studio", icon: "/skills-page/business-intelligence.png" },
  { name: "ETL/ELT", icon: "/skills-page/data-transformation.png" },
];

function SkillsPage() {
  return (
    <main className="min-h-screen -mt-18 pt-32 bg-[#111] px-6 py-16 text-white font-sans">
      <h1 className="text-4xl font-bold text-center text-yellow-400 mb-2">
        What I do
      </h1>
      <p className="text-center text-sm md:text-base max-w-3xl mx-auto text-gray-300 mb-10">
        I am from Thailand. I am currently working as a Data Analyst and Frontend Developer at a startup.  
        I create dashboards, build web admin, and improve user experience.  
        I keep learning and growing with every project.
      </p>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 max-w-5xl mx-auto">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center bg-[#1c1c1c] rounded-md p-4 shadow hover:shadow-lg transition"
          >
            <div className="relative w-14 h-14 mb-3">
              <Image
                src={skill.icon}
                alt={skill.name}
                fill
                className="object-contain"
              />
            </div>
            <p className="text-sm font-medium text-white">{skill.name}</p>
          </div>
        ))}
      </div>
    </main>
  );
}

export default SkillsPage;
