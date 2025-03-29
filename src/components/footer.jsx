"use client";

import Aurora from "../components/animations/auroraFooter";

export default function Footer() {
    return (
        <div className="relative w-full">
            {/* Aurora Background - Limited to Footer Area */}
            <footer className="relative z-10 w-full text-[#BAB5AB] py-8 overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-[300px] pointer-events-none">
                    <Aurora className="w-full h-full" />
                </div>

                {/* Footer Content */}
                <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between">

                    {/* Left Side - Logo & Name */}
                    <div className="flex flex-col items-center md:items-start">
                        <h2 className="text-2xl font-semibold text-[#c7a87d] dark:text-[#a37e58]">
                            Your Name
                        </h2>
                        <p className="text-sm opacity-80">Web Developer & Designer</p>
                    </div>

                    {/* Center - Social Media Links */}
                    <div className="flex space-x-6 mt-4 md:mt-0">
                        <a href="https://github.com/yourgithub" target="_blank" rel="noopener noreferrer" className="hover:text-[#c7a87d] transition">
                            <i className="fab fa-github text-xl"></i>
                        </a>
                        <a href="https://linkedin.com/in/yourlinkedin" target="_blank" rel="noopener noreferrer" className="hover:text-[#c7a87d] transition">
                            <i className="fab fa-linkedin text-xl"></i>
                        </a>
                        <a href="mailto:youremail@example.com" className="hover:text-[#c7a87d] transition">
                            <i className="fas fa-envelope text-xl"></i>
                        </a>
                    </div>

                    {/* Right Side - Copyright */}
                    <div className="mt-4 md:mt-0 text-sm opacity-70">
                        © {new Date().getFullYear()} Your Name. All rights reserved.
                    </div>
                </div>

                {/* Subtle Divider Line */}
                <div className="mt-6 border-t border-[#BAB5AB] opacity-30 w-3/4 mx-auto"></div>
            </footer>
        </div>
    );
}