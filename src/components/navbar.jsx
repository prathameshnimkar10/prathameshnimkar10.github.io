"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import Toggle from "../components/toggle";
import RoundedButton from "../components/roundedButton";
import GradientBorder from "../components/gradientBorder"
import logo1 from "../../public/logo-1-crop.png";

const Navbar = () => {
  return (
    <nav className="fixed top-4 left-0 w-full flex items-center justify-between px-10 z-50">
      <RoundedButton
        icon={
          <Image
            src={logo1}
            alt="Logo1"
            width={100}
            height={100}
            className="object-contain" />
        }
        link="/"
      />

      {/* main navbar */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.88, ease: "easeOut" }}
        className="bg-white dark:bg-black shadow-xl rounded-full flex items-center px-8 py-2 space-x-6 border border-gray-200"
      >
        {/* Logo */}
        {/* <Link
            href="/"
            className="bg-black text-white flex items-center justify-center w-10 h-10 rounded-full font-bold text-lg">
            <img src={logo} alt="logo" className="w-6 h-6" />
          </Link> */}

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
        <Toggle />
      </motion.div>

      {/* Right Button */}
      <button className="flex items-center justify-center w-[140px] h-[40px] rounded-full bg-white shadow-md dark:bg-black text-black dark:text-white border border-gray-300">
        <GradientBorder>
          <div className="px-8 py-6" pointer onClick={() => window.location.href='mailto:xyz@gmail.com'}>
            <span className="text-lg">📩 Email me!</span>
          </div>
        </GradientBorder>
      </button>
      {/* <GradientBorder>
        <button className="flex items-center justify-center w-[140px] h-[40px] rounded-full bg-white shadow-md dark:bg-black text-black dark:text-white border border-gray-300">
          <span className="text-lg">📩 Email me!</span>
        </button>
      </GradientBorder> */}
    </nav>
  );
};

export default Navbar;