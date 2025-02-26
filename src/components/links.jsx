import Image from "next/image";
import Marquee from "react-fast-marquee";
import res from "../../public/resume.svg";
import git from "../../public/github.svg";
import linkedin from "../../public/linkedin.svg";
import leetcode from "../../public/leetcode.svg";

const logos = [
    { logo: res, url: "https://gdrive.com/yourprofile", name: "Resume" },
    { logo: git, url: "https://github.com/yourprofile", name: "GitHub" },
    { logo: linkedin, url: "https://linkedin.com/in/yourprofile", name: "LinkedIn" },
    { logo: leetcode, url: "https://leetcode.com/in/yourprofile", name: "LeetCode" }
];

export default function LinksMarquee() {
    return (
        <div className="overflow-hidden relative w-auto mt-8 lg:mt-0">
            <Marquee pauseOnHover loop={0} speed={48}>
                {logos.concat(logos).map((item, index) => (
                    <a
                        key={index}
                        href={item.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-2 mx-4 cursor-pointer"
                    >
                        <Image
                            width={40}
                            height={40}
                            className="h-12 w-12"
                            src={item.logo}
                            alt={item.name}
                        />
                        <span className="text-lg font-medium">{item.name}</span>
                    </a>
                ))}
            </Marquee>

            <div className="absolute pointer-events-none inset-y-0 left-0 w-1/5 bg-gradient-to-r from-[#fff] z-10"></div>
            <div className="absolute pointer-events-none inset-y-0 right-0 w-1/5 bg-gradient-to-l from-[#fff] z-10"></div>
        </div>
    );
}