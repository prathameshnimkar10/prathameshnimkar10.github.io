"use client";

import { useState } from "react";
import BounceCards from "./animations/bounceCards";
import EduDetails from "./eduDetails";
import pahili from "../../public/1st.png";
import shala from "../../public/ssrvm.png";
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

// const educationDetails = [
//   { title: "Manipal University Jaipur", description: "B. Tech. in Information Technology: Aug. 2021 - Jul. 2025, GPA: 8.81, Dean's List in 4th, 5th, 6th, 7th Semesters", image: uni },
//   { title: "Suryadatta Junior College, Pune", description: "12th Grade : Maharashtra State Board: Jun. 2020 - Apr. 2021, Grade: 92%", image: baravi },
//   { title: "IITPk, Pune", description: "Foundation classes: Sept. 2019 - May 2021, Appeared for JEE Mains, cleared and appeared for JEE Advanced, MHT-CET", image: iitpk },
//   { title: "Shri Shri Ravishankar Vidya Mandir, Pune", description: "Secondary School: CBSE: Jul. 2009 - Apr. 2019, Grade: 95% Was a part of the school's football, basketball teams, Also had Vocal Music as a special subject and was a part of the school's music club, performing in 5 classical music shows, was a class representative in my 10th Grade", image: shala },
//   { title: "Loyola High School, Pune", description: "Primary School: 1st Grade, 2008 - 2009", image: pahili },
// ];

const educationDetails = [
  {
    title: "Manipal University Jaipur",
    location: "Jaipur, RJ",
    time: "Aug. 2021 - Jul. 2025",
    gpa: "8.81",
    description: "Dean's List in 4th, 5th, 6th, 7th Semesters\nParticipated in various hackathons\nMember of the Coding Club",
    image: uni,
  },
  {
    title: "Surydatta Junior College",
    location: "Pune, MH",
    time: "Jun. 2019 - Apr. 2021",
    gpa: "92%",
    description: "12th Grade - Maharashtra State Board (Jun.2020 - Apr. 2021)",
    image: baravi,
  },
  {
    title: "IITPk for JEE",
    location: "Pune, MH",
    time: "Sept. 2019 - May 2021",
    // gpa: "",
    description: "Appeared for JEE Mains, cleared, appeared for JEE Advanced\nAppeared for MHT-CET exam as well",
    image: iitpk,
  },
  {
    title: "Shri Shri Ravishankar Vidya Mandir, Bhugaon",
    location: "Pune, MH",
    time: "Jul. 2009 - Apr. 2019",
    gpa: "Secondary School: CBSE: 95%",
    description: "Was a part of the school's football, basketball teams\nStudied Vocal Music as a special subject and performed in 5 classical music shows as part of the school's music club\nServed as the Class Representative in my 10th grade",
    image: shala,
  },
  {
    title: "Loyola High School",
    location: "Pune, MH",
    time: "2008 - 2009",
    // gpa: "",
    description: "Primary School: 1st Grade",
    image: pahili,
  },
];

export default function Education() {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleCardHover = (index) => {
    console.log("Hovered on index:", index);
    setActiveIndex(educationDetails.length - 1 - index);
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
        className="mt-28"
        activeItem={activeIndex !== null ? educationDetails[activeIndex] : null}
      />
    </div>
  );
}