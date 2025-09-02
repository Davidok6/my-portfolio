import React from 'react';
import { motion } from 'framer-motion';
import { BIO } from '../constants';

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

const About: React.FC = () => {
  return (
    <section id="about" className="py-20">
      <SectionTitle>About Me</SectionTitle>
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-12">
        <motion.div 
          className="w-full md:w-1/3 flex justify-center"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
        >
            <img 
                src="https://picsum.photos/seed/david/400/400" 
                alt="David Okoye" 
                className="rounded-full w-64 h-64 object-cover shadow-2xl border-4 border-purple-500/50"
            />
        </motion.div>
        <motion.div 
          className="w-full md:w-2/3 text-center md:text-left"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
            {BIO}
          </p>
          <a
            href="/david-okoye-cv.pdf"
            download
            className="inline-block px-6 py-3 border-2 border-purple-500 text-purple-500 font-semibold rounded-lg hover:bg-purple-500 hover:text-white dark:hover:text-gray-900 transition-all duration-300"
          >
            Download CV
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default About;