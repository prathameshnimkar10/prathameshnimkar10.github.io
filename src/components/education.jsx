"use client";

import { useState } from "react";
import BounceCards from "./animations/bounceCards";
import pahili from "../../public/1st.png";
import shala from "../../public/ssrvm.jpeg";
import baravi from "../../public/12th.jpeg";
import iitpk from "../../public/iitpk.jpg"
import uni from "../../public/MUJ.webp";

const images = [
  uni,
  baravi,
  iitpk,
  shala,
  pahili
];

const transformStyles = [
  "rotate(5deg) translate(-150px)",
  "rotate(0deg) translate(-70px)",
  "rotate(-5deg)",
  "rotate(5deg) translate(70px)",
  "rotate(-5deg) translate(150px)"
];

const educationDetails = [
  "B. Tech. in Information Technology: Aug. 2021 - Jul. 2025, GPA: 8.81, Dean's List in 4th, 5th, 6th, 7th Semesters",
  "12th Grade : Maharashtra State Board: Jun. 2020 - Apr. 2021, Grade: 92%, ",
  "Foundation classes: Sept. 2019 - May 2021, Appeared for JEE Mains, cleared and appeared for JEE Advanced, MHT-CET",
  "Secondary School: CBSE (Central Board for Secondary Education): Jul. 2009 - Apr. 2019, Grade: 95%, Was a part of the school's football, basketball teams, Also had Vocal Music as a special subject and was a part of the school's music club, performing in 5 classical music shows, was a class representative in my 10th Grade.",
  "Primary School: 1st Grade, 2008 - 2009"
];

export default function Education() {
  const [hoveredCardIndex, setHoveredCardIndex] = useState(null);
  const [eduText, setEduText] = useState(null);

  const handleCardHover = (index) => {
    setHoveredCardIndex(index);
    setEduText
  }

  const handleCardLeave = () => {
    setHoveredCardIndex(null)
  }

  return (
    <div className="mt-10 mb-20 flex flex-col items-center">
      <div className="relative">
        <BounceCards
          className="custom-bounceCards"
          images={images}
          educationDetails={educationDetails}
          containerWidth={500}
          containerHeight={250}
          animationDelay={1}
          animationStagger={0.08}
          easeType="elastic.out(1, 0.5)"
          transformStyles={transformStyles}
          enableHover={true}
          onHover={handleCardHover}
          onLeave={handleCardLeave}
        />
      </div>

      {/* Education details card - completely separate from BounceCards */}
      {hoveredCardIndex !== null && (
        <div
          className="mt-16 w-[400px] bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg"
          style={{
            animation: "fadeIn 0.3s ease-in-out",
            zIndex: 20,
          }}
        >
          <p className="text-gray-800 dark:text-gray-200 text-center">{educationDetails[hoveredCardIndex]}</p>
        </div>
      )}

      {/* Add CSS animation for the card */}
      <style jsx>{`
                    @keyframes fadeIn {
                        from { opacity: 0; transform: translateY(-10px); }
                        to { opacity: 1; transform: translateY(0); }
                    }
                `}</style>
    </div>
  )
}    