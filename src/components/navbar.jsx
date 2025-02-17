"use client";
import { motion } from "framer-motion";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 w-full flex items-center justify-center z-50">
      <div className="flex items-center space-x-6">
        {/* Left Button */}
        <RoundedButton
          text="available for projects"
          icon="●"
          link="#"
        />

        {/* Navbar Center */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="bg-white shadow-xl rounded-full flex items-center px-6 py-3 space-x-6 border border-gray-200"
        >
          {/* Logo (Styled as Circle) */}
          <Link href="/" className="bg-black text-white flex items-center justify-center w-10 h-10 rounded-full font-bold text-lg">
            🌲
          </Link>

          {/* Navbar Links */}
          {["Works", "Benefits", "About", "Process", "Pricing", "Contact", "FAQ"].map((item, index) => (
            <Link key={index} href={`#${item.toLowerCase()}`} className="hover:underline font-medium text-black">
              {item}
            </Link>
          ))}
        </motion.div>

        {/* Right Button */}
        <RoundedButton
          text="hey@zenwood.studio"
          icon="📩"
          link="mailto:hey@zenwood.studio"
        />
      </div>
    </nav>
  );
};

// Reusable Rounded Button Component
const RoundedButton = ({ text, icon, link }) => (
  <motion.a
    href={link}
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    className="bg-white shadow-lg rounded-full flex items-center space-x-2 px-5 py-2 border border-gray-200"
  >
    <span className="text-lg">{icon}</span>
    <span className="font-medium text-black">{text}</span>
  </motion.a>
);

export default Navbar;
