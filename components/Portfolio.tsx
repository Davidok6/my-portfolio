import React from 'react';
import { motion } from 'framer-motion';
import { PROJECTS } from '../constants';
import type { Project } from '../types';

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

const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
  return (
    <motion.div 
      className="group rounded-lg overflow-hidden bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-shadow duration-300"
      variants={cardVariants}
    >
      <div className="overflow-hidden">
        <img
          src={project.imageUrl}
          alt={project.title}
          className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">{project.title}</h3>
        <p className="text-gray-600 dark:text-gray-400 mb-4">{project.description}</p>
        <div className="flex flex-wrap gap-2">
          {project.tools.map((tool) => (
            <span key={tool} className="px-3 py-1 text-sm font-medium text-cyan-800 bg-cyan-100 dark:text-cyan-100 dark:bg-cyan-900/50 rounded-full">
              {tool}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const Portfolio: React.FC = () => {
  return (
    <section id="portfolio" className="py-20 bg-gray-50 dark:bg-gray-800/50 rounded-lg">
      <SectionTitle>Featured Work</SectionTitle>
      <motion.div 
        className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        {PROJECTS.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </motion.div>
    </section>
  );
};

export default Portfolio;