import SkillCards from "./skillCards";

const skillsData = [
  { id: 1, height: 250, name: "JavaScript" },
  { id: 2, height: 90, name: "React" },
  { id: 3, height: 150, name: "Node.js" },
  { id: 4, height: 220, name: "HTML/CSS" },
  { id: 5, height: 100, name: "TypeScript" },
  { id: 6, height: 300, name: "Python" },
  { id: 7, height: 180, name: "Git" },
  { id: 8, height: 160, name: "SQL" }
];

export default function Skills() {
    return <SkillCards data={skillsData} />;
}