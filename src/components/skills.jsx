// \src\components\skills.jsx
"use client";

import SkillCards from "./skillCards";

const skillsData = [
  { id: 1, height: 210, name: "C/C++" },
  { id: 2, height: 300, name: "Python" },
  { id: 3, height: 240, name: "Java" },
  { id: 4, height: 210, name: "MySQL" },
  // { id: 4, height: 230, name: "OracleDB" },
  { id: 5, height: 225, name: "MongoDB" },
  // { id: 5, height: 90, name: "HTML/CSS" },
  { id: 6, height: 90, name: "Next.JS basics" },
  { id: 7, height: 250, name: "Data Structures and Algorithms" },
  { id: 8, height: 250, name: "Object Oriented Programming" },
  { id: 9, height: 220, name: "Git/GitHub" },
  { id: 11, height: 280, name: "DevOps" },
  { id: 12, height: 280, name: "Docker" },
  { id: 13, height: 260, name: "Kubernetes" },
  { id: 14, height: 225, name: "Jenkins" },
  { id: 15, height: 235, name: "Terraform" },
  { id: 16, height: 265, name: "AWS" },
  { id: 17, height: 190, name: "Azure DevOps" },
  { id: 18, height: 220, name: "Software Development" },
  { id: 19, height: 210, name: "Agile Methodologies" },
  // { id: 16, height: 200, name: "Cloud Computing" },
  // { id: 14, height: 160, name: "StarUML" },
  // { id: 16, height: 140, name: "PowerBI" },
  { id: 20, height: 110, name: "Postman" },
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