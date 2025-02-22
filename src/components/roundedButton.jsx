import { motion } from 'framer-motion';

const RoundedButton = ({ text, icon, link }) => (
    <motion.a
      href={link}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="bg-white dark:bg-black shadow-lg rounded-full flex items-center space-x-2 px-5 py-2 border border-gray-200"
    >
      <span className="text-lg">{icon}</span>
      <span className="font-medium text-black dark:text-white">{text}</span>
    </motion.a>
  );

export default RoundedButton;