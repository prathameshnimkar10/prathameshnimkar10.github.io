"use client";

import SkillCards from "./skillCards";

const skillsData = [
  { id: 1, height: 290, name: "C/C++" },
  { id: 2, height: 330, name: "Python" },
  { id: 3, height: 230, name: "MySQL" },
  { id: 4, height: 250, name: "MongoDB" },
  // { id: 5, height: 90, name: "HTML/CSS" },
  { id: 6, height: 160, name: "Next.JS basics" },
  { id: 7, height: 300, name: "Data Structures and Algorithms" },
  { id: 8, height: 300, name: "Object Oriented Programming" },
  { id: 9, height: 200, name: "Git/GitHub" },
  { id: 10, height: 230, name: "Docker" },
  { id: 11, height: 220, name: "Software Engineering" },
  { id: 12, height: 210, name: "Agile Methodologies" },
  { id: 13, height: 200, name: "Cloud Computing" },
  { id: 14, height: 160, name: "StarUML" },
  { id: 15, height: 140, name: "PowerBI" },
  { id: 16, height: 110, name: "Postman" },
];

export default function Skills() {
  return (
    <>
      <h1 className="header items-center justify-center text-3xl animate-riseUp">My Skills</h1>
      <SkillCards data={skillsData} />
      <style jsx>{`
        @font-face {
          font-family: "h1Tag";
          src: url("/fonts/Kollektif.ttf") format("truetype");
          font-weight: normal;
          font-style: normal;
        }
        .header {
          font-family: "h1Tag", sans-serif;
        }
      `}</style>
    </>
  );
}