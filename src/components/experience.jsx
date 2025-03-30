import {
    VerticalTimeline, VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const WorkIcon = () => <div style={{ width: "100%", height: "100%" }}></div>

const experiences = [
    // {
    //     title: "AI/Software Developer Intern",
    //     subtitle: "Techcurators Ltd., Delhi, DL",
    //     date: "Sept. 2024 - present",
    //     description:
    //         "z",
    // },
    {
        title: "Celebal Summer Intern",
        subtitle: "Celebal Technologies, Remote",
        date: "May 2024 - July 2024",
        description:
            "wowerigbneobg goiwe bgoiq bweoi[gbowe goiweqbgiopwe bi[goew gowie[bgipoweq bgiowe goiwq buovfovlcwbedvoiwb vq[weblkgmv w",
    },
    {
        title: "Book Chapter author",
        subtitle: "MUJ, Jaipur",
        date: "Sept. 2023 - Dec. 2023",
        description: "Sucessfully published. weobfgw0eibgfuwe web9uvbweqpu9gbf;weiufbw efuwqebfowvebf",
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
                        <p className="dark:text-[#413e42]">{exp.description}</p>
                    </VerticalTimelineElement>
                ))}
            </VerticalTimeline>
        </div>
    );
}