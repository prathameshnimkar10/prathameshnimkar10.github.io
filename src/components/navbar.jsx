"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import Toggle from "../components/toggle";
import RoundedButton from "../components/animations/roundedButton";
import GradientBorder from "../components/animations/gradientBorder"
import logo1 from "../../public/logo-1-crop.png";

const Navbar = () => {
  return (
    <nav className="fixed top-4 left-0 w-full flex items-center justify-between px-10 z-50">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <RoundedButton
          icon={
            <Image
              src={logo1}
              alt="Logo1"
              width={100}
              height={100}
              className="object-contain rounded-full" />
          }
          link="/"
        />
      </motion.div>

      {/* main navbar */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="bg-white dark:bg-black shadow-xl rounded-full flex items-center px-8 py-2 space-x-6 border border-gray-200"
      >
        {/* Navbar Links */}
        {["Home", "About", "Projects", "Experience"].map((item, index) => (
          <Link
            key={index}
            href={`#${item.toLowerCase()}`}
            className="hover:underline font-medium text-black dark:text-white"
          >
            {item}
          </Link>
        ))}

        <Toggle />  {/* toggle euuu */}

      </motion.div>

      {/* Right Button */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <GradientBorder>
          <button
            onClick={() => window.location.href = 'mailto:xyz@gmail.com'}
            className="rounded-full bg-white dark:bg-black shadow-lg flex items-center px-6 py-2 border border-gray-200 text-black dark:text-white hover:shadow-xl transition duration-300"
          >
            📩 <span className="ml-2 text-lg">Email me!</span>
          </button>
        </GradientBorder>
      </motion.div>
      {/* <GradientBorder>
        <button className="flex items-center justify-center w-[140px] h-[40px] rounded-full bg-white shadow-md dark:bg-black text-black dark:text-white border border-gray-300">
          <span className="text-lg">📩 Email me!</span>
        </button>
      </GradientBorder> */}
    </nav>
  );
};

export default Navbar;