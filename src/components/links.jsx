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
    <div className="w-full mt-16">
      <Marquee pauseOnHover loop={0} speed={50} className="py-4">
        {logos.concat(logos).map((item, index) => (
          <a
            key={index}
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center mx-8 cursor-pointer"
          >
            <Image
              width={50}
              height={50}
              className="h-14 w-14 mb-2 dark:invert dark:hue-rotate-180"
              src={item.logo}
              alt={item.name}
            />
            <span className="text-lg font-medium text-center">{item.name}</span> {/* Centered text */}
          </a>
        ))}
      </Marquee>

      {/* <div className="absolute pointer-events-none inset-y-0 left-0 w-1/6 bg-gradient-to-r from-[#fff] z-10"></div>
      <div className="absolute pointer-events-none inset-y-0 right-0 w-1/6 bg-gradient-to-l from-[#fff] z-10"></div> */}
    </div>
  );
}