"use client";

import Image from "next/image";
import {
    RiYoutubeLine,
    RiInstagramLine,
    RiFacebookBoxLine,
    RiGithubLine,
    RiTwitterXLine,
    RiLinkedinBoxFill,

} from "@remixicon/react";
import Leetcode from "../../public/leetcode.svg";
import Logo from "../../public/logo-1-crop.svg";

// const pages = [
//     { id: 0, page: "Home", href: "/" },
//     // { id: 1, page: "Features", href: "/features/grid" },
//     // { id: 2, page: "Pricing", href: "/pricing/tiers" },
//     // { id: 3, page: "About Us", href: "/team" },
//     { id: 4, page: "Contact", href: "/contact" },
//     // { id: 5, page: "FAQ", href: "/faq" },
// ];

const LeetcodeIcon = () => (
    <Image
        src={Leetcode}
        alt="Leetcode"
        width={21}
        height={21}
        className="invert-0 dark:invert"
    />
);

const socialLinks = [
    // { id: 0, Icon: RiYoutubeLine, href: "/" },
    { id: 3, Icon: RiGithubLine, href: "https://github.com/prathameshnimkar10" },
    // { id: 2, Icon: RiFacebookBoxLine, href: "/" },
    // { id: 4, Icon: RiTwitterXLine, href: "/" },
    { id: 5, Icon: LeetcodeIcon, href: "https://leetcode.com/prathamesh_n10/" },
    { id: 1, Icon: RiInstagramLine, href: "/" },
];

const classes = {
    pageLink:
        "text-neutral-600 inline-flex hover:text-neutral-900 focus:outline-none focus:rounded focus:ring focus:ring-indigo-200",
    socialIcon: "link--md link--secondary",
    socialLink:
        "inline-flex focus:outline-none focus:rounded focus:ring focus:ring-indigo-200",
};

export default function Footer() {
    return (
        <footer
            role="contentinfo"
            className="grid grid-cols-1 md:grid-cols-2 items-center justify-between border border-t-gray-300 text-sm font-medium py-6 md:py-8 lg:py-12 px-4 lg:px-12 w-full w-screen-sm md:w-screen-md"
        >
            {/* Left column: Logo */}
            <div className="flex justify-center md:justify-start">
                <div className="bg-white dark:bg-neutral-800 rounded-full p-2">
                    <div className="rounded-full overflow-hidden">
                        <Image src={Logo} alt="Logo" width={200} height={200} href ='/' />
                    </div>
                </div>
            </div>

            {/* Right column: Social icons and name */}
            <div className="flex flex-col items-center md:items-end">
                <nav aria-label="Social media links" className="mt-4 md:mt-0">
                    <ul className="flex flex-row flex-nowrap gap-x-6">
                        {socialLinks.map(({ id, Icon, href }) => (
                            <li key={id}>
                                <a href={href} className={classes.socialLink}>
                                    <Icon className={classes.socialIcon} />
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>
                <p className="mt-4 text-neutral-900 dark:text-white font-normal">
                    Prathamesh Nimkar
                </p>
            </div>
        </footer>
    );
}