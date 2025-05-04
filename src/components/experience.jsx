import {
    VerticalTimeline, VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import Link from "next/link";

const WorkIcon = () => <div style={{ width: "100%", height: "100%" }}></div>

const experiences = [
    // {
    //     title: "AI / Software Developer Intern",
    //     subtitle: "TechCurators Ltd., Delhi",
    //     date: "Sept. 2024 - Present",
    //     description: [
    //         "Developed the firm's AI products, significantly enhancing their efficiency and integrating them into backend systems through API implementation.",
    //         "Conducted extensive research on Generative AI, contributing to five case studies and a book chapter.",
    //         "Collaborated on the creation of customized software applications and full-stack websites for a diverse range of clients, ensuring high-quality deliverables that meet specific needs.",
    //         "Worked in deploying full-stack website on Azure for a client (including frontend, backend, and admin panel), as well as hosting and managing them on GoDaddy."
    //     ],
    // },
    {
        title: "Celebal Summer Intern",
        subtitle: "Celebal Technologies, Remote",
        date: "May 2024 - July 2024",
        description: [
            "Developed and optimized machine learning models, achieving up to 92% accuracy across three assigned projects.",
            "Analyzed diverse datasets using Power BI, Seaborn, and Matplotlib to extract key insights and drive data-driven decisions.",
            "Enhanced overall performance of machine learning algorithms by refining data preprocessing and model tuning techniques."
        ],
    },
    {
        title: "Book Chapter author",
        subtitle: "MUJ, Jaipur",
        date: "Sept. 2023 - Dec. 2023",
        description: [
            "Co-authored a chapter on Machine Learning and Deep Learning in the book Big Data Analytics Techniques for Market Intelligence, with a friend and our mentor, exploring advanced data-driven approaches.",
            "We discussed the basics of Machine Learning and Deep Learning, gradually setting up the reader for future advanced concepts covered in the book.",
            <Link href="https://www.igi-global.com/chapter/machine-learning-and-deep-learning-for-big-data-analysis/336351" target="_blank" rel="noopener noreferrer">
                Book Link: <b>Big Data Analytics Techniques for Market Intelligence</b>
            </Link>,
        ],
    },
    // {
    //     title: "Web Designer",
    //     subtitle: "San Francisco, CA",
    //     date: "2006 - 2008",
    //     description: "User Experience, Visual Design",
    // },
];

export default function MyExperience() {
    return (
        <div className="w-full py-10">
            <h1 className="py-5 text-center text-3xl font-bold text-black dark:text-white">
                MY EXPERIENCE!
            </h1>
            <VerticalTimeline lineColor="#8c6c47">
                {/* <VerticalTimeline lineColor="#c4b04b"> */}
                {experiences.map((exp, index) => (
                    <VerticalTimelineElement
                        key={index}
                        className="vertical-timeline-element--work"
                        position={index % 2 === 0 ? "left" : "right"}
                        contentStyle={{
                            background: "#c4b04b",
                            color: "#2e2b26",
                            borderRadius: "8px",
                            minHeight: "200px",
                        }}
                        contentArrowStyle={{ borderRight: "7px solid #c7a87d" }}
                        iconStyle={{ background: "#a37e58", color: "#fff" }}
                        icon={<WorkIcon />}
                    >
                        <span className="block text-gray-600 dark:text-black text-base font-medium mb-2">
                            {exp.date}
                        </span>

                        <h3 className="vertical-timeline-element-title font-bold text-lg">
                            {exp.title}
                        </h3>
                        <h4 className="vertical-timeline-element-subtitle italic dark:text-[#3c4142]">
                            {exp.subtitle}
                        </h4>
                        <div className="dark:text-[#413e42]">
                            <ul className="list-disc pl-5">
                                {exp.description.map((point, i) => (
                                    <li key={i}>{point}</li>
                                ))}
                            </ul>
                        </div>
                    </VerticalTimelineElement>
                ))}
            </VerticalTimeline>
        </div>
    );
}