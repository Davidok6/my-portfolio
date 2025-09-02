import React from 'react';
import { motion } from 'framer-motion';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};


const Hero: React.FC = () => {
  return (
    <section id="hero" className="min-h-[75vh] flex items-center justify-center text-center">
      <motion.div
        className="space-y-6"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1
          variants={itemVariants}
          className="text-5xl md:text-7xl font-extrabold text-gray-900 dark:text-white leading-tight"
        >
          David Okoye
        </motion.h1>
        <motion.p
          variants={itemVariants}
          className="text-2xl md:text-3xl font-medium text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-cyan-400 to-green-400"
        >
          AI Content Creator & Designer
        </motion.p>
        <motion.div
          variants={itemVariants}
          className="flex justify-center space-x-4 pt-4"
        >
          <a
            href="#portfolio"
            className="px-8 py-3 bg-purple-600 text-white font-semibold rounded-lg shadow-lg hover:bg-purple-700 transform hover:-translate-y-1 transition-all duration-300"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="px-8 py-3 bg-gray-200 text-gray-800 dark:bg-gray-700 dark:text-gray-200 font-semibold rounded-lg shadow-lg hover:bg-gray-300 dark:hover:bg-gray-600 transform hover:-translate-y-1 transition-all duration-300"
          >
            Contact Me
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;