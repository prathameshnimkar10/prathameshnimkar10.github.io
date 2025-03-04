import BounceCards from "./animations/bounceCards";

const images = [
    "https://picsum.photos/400/400?grayscale",
    "https://picsum.photos/500/500?grayscale",
    "https://picsum.photos/600/600?grayscale",
    "https://picsum.photos/700/700?grayscale",
    "https://picsum.photos/300/300?grayscale"
];

const transformStyles = [
    "rotate(5deg) translate(-150px)",
    "rotate(0deg) translate(-70px)",
    "rotate(-5deg)",
    "rotate(5deg) translate(70px)",
    "rotate(-5deg) translate(150px)"
];

const educationDetails = [
    "High School: 2015-2018, GPA: 3.9, Science Club Leader",
    "Bachelor's Degree: 2018-2022, GPA: 3.8, Dean's List",
    "Master's Degree: 2022-2024, Research in AI, Published Paper",
    "Certification: 2024, Full-Stack Development, Merit",
    "Workshop: 2023, UX Design & Accessibility, Certification"
];

export default function Education() {
    return (
        <div className="mt-10">
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
            />
        </div>
    );
}