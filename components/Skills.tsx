import React from 'react';
import { motion } from 'framer-motion';
import { SKILLS } from '../constants';

const SectionTitle: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <motion.h2 
    className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.5 }}
    transition={{ duration: 0.6 }}
  >
    {children}
  </motion.h2>
);

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800/50 rounded-lg">
      <SectionTitle>My Toolkit</SectionTitle>
      <motion.div 
        className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {SKILLS.map((skill) => (
          <motion.div
            key={skill.name}
            variants={itemVariants}
            className="flex flex-col items-center justify-center p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
          >
            <skill.Icon className="w-12 h-12 mb-4 text-purple-500 dark:text-purple-400" />
            <span className="font-semibold text-center text-gray-700 dark:text-gray-300">{skill.name}</span>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Skills;