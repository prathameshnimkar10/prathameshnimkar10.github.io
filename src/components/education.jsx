"use client";

import { useState } from "react";
import BounceCards from "./animations/bounceCards";
import EduDetails from "./eduDetails";
import pahili from "../../public/1st.png";
import shala from "../../public/ssrvm.jpeg";
import baravi from "../../public/12th.jpeg";
import iitpk from "../../public/iitpk.jpg";
import uni from "../../public/MUJ.webp";

const images = [
  pahili,
  shala,
  iitpk,
  baravi,
  uni
];

// const transformStyles = [
//   "rotate(5deg) translate(-150px)",
//   "rotate(0deg) translate(-70px)",
//   "rotate(-5deg)",
//   "rotate(5deg) translate(70px)",
//   "rotate(-5deg) translate(150px)",
// ];

const educationDetails = [
  { title: "uni", description: "B. Tech. in Information Technology: Aug. 2021 - Jul. 2025, GPA: 8.81, Dean's List in 4th, 5th, 6th, 7th Semesters", image: uni },
  { title: "suryadatta", description: "12th Grade : Maharashtra State Board: Jun. 2020 - Apr. 2021, Grade: 92%", image: baravi },
  { title: "iitpk", description: "Foundation classes: Sept. 2019 - May 2021, Appeared for JEE Mains, cleared and appeared for JEE Advanced, MHT-CET", image: iitpk },
  { title: "shala", description: "Secondary School: CBSE (Central Board for Secondary Education): Jul. 2009 - Apr. 2019, Grade: 95%, Was a part of the school's football, basketball teams, Also had Vocal Music as a special subject and was a part of the school's music club, performing in 5 classical music shows, was a class representative in my 10th Grade", image: shala },
  { title: "loyola", description: "Primary School: 1st Grade, 2008 - 2009", image: pahili },
];

export default function Education() {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleCardHover = (index) => {
    console.log("Hovered on index:", index);
    setActiveIndex(index);
  };

  const handleCardLeave = () => {
    console.log("Hover ended");
    setActiveIndex(null);
  };

  return (
    <div className="mt-10 mb-20 flex flex-col items-center w-full">
      {/* Cards Section */}
      <div className="relative">
        <BounceCards
          className="custom-bounceCards"
          images={images}
          educationDetails={educationDetails.map((edu) => edu.title)}
          containerWidth={500}
          containerHeight={250}
          animationDelay={1}
          animationStagger={0.08}
          easeType="elastic.out(1, 0.5)"
          enableHover={true}
          onHover={handleCardHover}
          onLeave={handleCardLeave}
        />
      </div>

      {/* Details Section */}
      <EduDetails
        className = "mt-28"
        activeItem={activeIndex !== null ? educationDetails[activeIndex] : null}
      />
    </div>
  );
}